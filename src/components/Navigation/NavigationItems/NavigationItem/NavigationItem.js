import React,{Component} from 'react';
import classes from './NavigationItem.module.css';


const NavigationItem = props =>(
  <div>

    <a onClick={props.clicked} className={classes.NavigationItem} >{props.children}</a>

  </div>

)




export default NavigationItem;
