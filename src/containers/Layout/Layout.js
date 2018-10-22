import React, {Component} from 'react';
import NavigationItems from '../../containers/NavigationItems/NavigationItems'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './layout.module.css';
import {connect} from 'react-redux';
import image from '../../assets/images/Binary-Code-Art-1920x1080-Hi-Res.jpg';
import Work from '../../components/Work/Work';
import AboutMe from '../../components/AboutMe/AboutMe';

import LinkIcons from '../../components/LinksIcon/LinksIcon';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false
    }
    this.ref = React.createRef();
    this.refHome = React.createRef();
  }

  componentDidMount() {
    console.log(this.ref.current);
  }

  sideShowHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    })
  }

  render() {
    console.log(this.ref.current);
    console.log(this.props.aboutMe);

    if (this.props.aboutMe === 1) {
      this.ref.current.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    } else if (this.props.home === 1) {
      this.refHome.current.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    }

    return (<div className={classes.Theme}>

      <SideDrawer clicked={this.sideShowHandler} show={this.state.showSideDrawer}/>
      <Toolbar aboutClicked={this.clickedHandler}/>
      <div ref={this.refHome}></div>
      <div className={classes.LinkWrapper}>
        <img className={classes.HeaderImage} src={image} alt=""/>
        <h1 className={classes.Caption}>VAHID DAVOUDI</h1>

          <LinkIcons/>

      </div>
      <div className={classes.AboutMeWrapper}>
        <div ref={this.ref}>
          <AboutMe/>
        </div>
      </div>
    </div>);
  }

}

const mapStateToProps = state => {
  return {aboutMe: state.scroll.about, home: state.scroll.home};
};

export default connect(mapStateToProps)(Layout);
