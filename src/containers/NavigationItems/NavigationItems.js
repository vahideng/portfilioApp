import React, {Component} from 'react';
import NavigationItem from '../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import {connect} from 'react-redux';
import {scrollPage} from '../../store/actions'

class NavigationItems extends Component {

  state = {
    about: 0,
    education: 0
  }

  onScrolHandlerHome = () => {

    this.props.onScrolHandler(1, 0, 0, 0, 0, 0, 0);

    setTimeout(() => this.props.onScrolHandler(0, 0, 0, 0, 0, 0, 0), 1000);

  };
  onScrolHandlerAbout = () => {

    this.props.onScrolHandler(0, 1, 0, 0, 0, 0, 0)
    setTimeout(() => this.props.onScrolHandler(0, 0, 0, 0, 0, 0, 0), 1000);
  };
  onScrolhandlerWork = () => {

    this.props.onScrolHandler(0, 0, 1, 0, 0, 0, 0)
    setTimeout(() => this.props.onScrolHandler(0, 0, 0, 0, 0, 0, 0), 1000);
  };

  onScrolHandlerEducation = () => {

    this.props.onScrolHandler(0, 0, 0, 1, 0, 0, 0)
    setTimeout(() => this.props.onScrolHandler(0, 0, 0, 0, 0, 0, 0), 1000);
  };
  onScrolHandlerSkills = () => {

    this.props.onScrolHandler(0, 0, 0, 0, 1, 0, 0)
    setTimeout(() => this.props.onScrolHandler(0, 0, 0, 0, 0, 0, 0), 1000);
  };
  onScrolhandlerPortfilio = () => {

    this.props.onScrolHandler(0, 0, 0, 0, 0, 1, 0)
    setTimeout(() => this.props.onScrolHandler(0, 0, 0, 0, 0, 0, 0), 1000);
  };
  onScrolHandlerRefrences = () => {

    this.props.onScrolHandler(0, 0, 0, 0, 0, 0, 1)
    setTimeout(() => this.props.onScrolHandler(0, 0, 0, 0, 0, 0, 0), 1000);
  };
  render() {

    return (<div>

      <ul className={classes.NavWrapper}>
        <NavigationItem clicked={this.onScrolHandlerHome} className={classes.NavWrapper__Link} link="/">
          HOME</NavigationItem>
        <NavigationItem clicked={this.onScrolHandlerAbout} className={classes.NavWrapper__Link} link="/">
          ABOUT</NavigationItem>

        <NavigationItem clicked={this.onScrolhandlerWork} className={classes.NavWrapper__Link} link="/">
          WORK</NavigationItem>

        <NavigationItem clicked={this.onScrolHandlerEducation} className={classes.NavWrapper__Link} link="/">
          EDUCATION</NavigationItem>

        <NavigationItem clicked={this.onScrolHandlerSkills} className={classes.NavWrapper__Link} link="/">
          SKILLS</NavigationItem>
        <NavigationItem className={classes.NavWrapper__Link} clicked={this.onScrolhandlerPortfilio} link="/">
          PORTFILIO</NavigationItem>
        <NavigationItem clicked={this.onScrolHandlerRefrences} className={classes.NavWrapper__Link} link="/">
          REFERENCES</NavigationItem>

      </ul>

    </div>)
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onScrolHandler: (home, about, work, education, skills, portfilio, refrence) => dispatch(scrollPage(home, about, work, education, skills, portfilio, refrence))
  }
}
export default connect(null, mapDispatchToProps)(NavigationItems);
