import React from 'react';
import classes from './Footer.module.css';
import LinksIcon from '../../components/LinksIcon/LinksIcon';

const footer = props => (
  <div className={classes.Container} >
  <LinksIcon/>
  <p>This site is developed in React.js by Vahid Davoudi </p>
  </div>
);

export default footer;
