import React from 'react';
import classes from './Paragraph.module.css';
const paragraph = (props) => (<div className={classes.Skill}>

  <div className={classes.SkillLevel} style={props.Level}>
    <div className={classes.Wrapper}>
      <div>{props.Label}</div>

      <div >
        {props.Inside}
      </div>
    </div>
  </div>
</div>);

export default paragraph;
