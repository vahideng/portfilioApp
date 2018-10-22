import React from 'react';
import PropTypes from 'prop-types';
import classes from './DrawerToggle.module.css'
const drawerToggle  = (props) => {
  return (

    <div className={classes.Wrapper}>
    <div onClick={props.clicked} className={classes.DrawerSideBar}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  );
}



export default drawerToggle ;
