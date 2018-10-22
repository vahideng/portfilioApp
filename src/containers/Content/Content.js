import React, {Component} from 'react';
import classes from './Content.module.css';
import Skills from '../../components/Skills/Skills';
import Work from '../../components/Work/Work';
import DataBase from '../../components/Database/DataBase';
import {connect} from 'react-redux';
import Portfolio from '../../components/Portfolio/Portfolio';
import Education from '../../components/Education/Education';

class content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false
    }
    this.refWork = React.createRef();
    this.refEducation = React.createRef();
    this.refSkilss = React.createRef();
  }

  render() {

    if (this.props.works === 1) {
      this.refWork.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
    } else if (this.props.education === 1) {
      console.log("education");
      this.refEducation.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
    } else if (this.props.skilss === 1) {
      this.refSkilss.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'})
    } else if (this.props.skilss === 1) {
      this.refSkilss.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'})
    }
    return (<div className={classes.Container}>

      <div ref={this.refWork} className={classes.InformationWrapper}>
        <div>
          <h1 className={classes.Title}>WORK</h1>
        </div>
        <Work/>
      </div>
      <div className={classes.BorderDevide}></div>

      <div ref={this.refEducation} className={classes.InformationWrapper}>
        <div >
          <h1 className={classes.Title}>EDUCATION</h1>
        </div>
        <Education/>
      </div>
      <div className={classes.BorderDevide}></div>

      <div ref={this.refSkilss} className={classes.InformationWrapper}>

        <div >
          <h1 className={classes.Title}>SKILLS</h1>
        </div>
        <Skills/>

      </div>

    </div>);

  }

}

const mapStateToProps = state => {
  return {works: state.scroll.work, education: state.scroll.education, skilss: state.scroll.skills}
}

export default connect(mapStateToProps)(content);
