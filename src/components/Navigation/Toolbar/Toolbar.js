import React, {Component} from 'react';
import NavigationItems from '../../../containers/NavigationItems/NavigationItems'
import classes from './Toolbar.module.css'

class toolbar extends Component {


  render() {

    return (<div className={classes.DestktopOnly}>
      <NavigationItems  aboutClicked={this.props.aboutClicked}/>
    </div>)
  }

}

export default toolbar;
