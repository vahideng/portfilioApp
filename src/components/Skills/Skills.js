import React from 'react';
import classes from './Skills.module.css';
import Data from '../../JsonData/JsonData.json';
import Paragraph from '../Paragraph/Paragraph';
const skills = (props) => {

  // let objectSkills = Object.keys(Data).map(item => {
  //
  //   if (item == "frameworks") {
  //     return (skills.push(Data[item]))
  //   }
  //
  // })
  let skillsObject = {};
  for (var key in Data) {
    if (key === "frameworks") {
      skillsObject = Data[key];
    }
  }

  let databseObject = {};
  for (var key in Data) {
    if (key === "database") {
      databseObject = Data[key];
    }
  }

  let skills = Object.keys(skillsObject).map((item, i) => {
    return <Paragraph key={i} Label={item} Level={{
        width: skillsObject[item]
      }}/>


  })


  let database = Object.keys(databseObject).map((item,i)=>{
    return <Paragraph key={i} Label={item} Level={{ width: databseObject[item]}}/>
  })


  return (<div className={classes.Center}>
    <h1 className={classes.Title}>Framework/Library</h1>
    <p style={{
        color: '#7A7A79',
        marginBottom : "60px"
      }}>Worked primarily with JavaScript-ES6 with frameworks such as React.js , Redux.js and Express.js.
    Interested in functional programming and serverless architectures, exploring with AWS Lambda respectively.</p>
    <div className={classes.SkillBox}>
      <div className={classes.SkillsDecription}>
        {skills}

        <div style={{paddingTop: "40px"}}>
          <h1 className={classes.Title}>Database Systems</h1>
          <p style={{
              color: '#7A7A79',
              marginBottom : "60px"
            }}>  Experienced in both SQL and NoSQL, having worked in companies making use of DynamoDB, MongoDB,
               with personal further projects utilizing MySQL.</p>
          {database}
        </div>

      </div>

    </div>
  </div>);
}

export default skills;
