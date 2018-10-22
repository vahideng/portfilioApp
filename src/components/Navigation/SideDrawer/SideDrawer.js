import React from 'react';
import NavigationItems from '../../../containers/NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'
import DrawerToggle from './DrawerToggle/DrawerToggle'

const slideDrawer = (props) => {

  let sideBar = null;
  if (props.show) {
    sideBar = <div className={classes.SideDrawer}>
      <NavigationItems/>
    </div>

  }

  return (
<div className={classes.DestktopOnly}>
    <div className={classes.SideDrawerToggle}>

    <DrawerToggle clicked={props.clicked}/>
  </div>
    {sideBar}
  </div>)
}

export default slideDrawer;
