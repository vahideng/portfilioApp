import React from 'react';
import DATA from '../../JsonData/JsonData.json';
import classes from './Education.module.css';

const education = (props) => {
  console.log(DATA.education,"sadasdsafa");
  let education = DATA.education.map((edu, i) => {

    return (
      <div>
      <div className={classes.Info}>
        <h2>{edu.studyType}</h2>
        <div className={classes.Highlights}>
          <p>{edu.institution}</p>
          <p>--CGPA ({edu.gpa})</p>
        </div>
        {edu.startDate}
      </div>
    </div>)

  })
  return (<div>
    {education}
  </div>);
}

export default education;
