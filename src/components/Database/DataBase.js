import React from 'react';
import classes from './DataBase.module.css';
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
  let skills = {};
  for (var key in Data) {
    if (key === "database") {
      skills = Data[key];
    }
  }

  let data = Object.keys(skills).map((item, i) => {
    return <Paragraph key={i} Label={item} Level={{
        width: skills[item]
      }}/>
  })
  console.log(skills);

  return (<div className={classes.Center}>
    <h1 className={classes.Title}>Data Base</h1>
    <p style={{
        color: '#7A7A79',
        marginBottom : "60px"
      }}>

        Experienced in both SQL and NoSQL, having worked in companies making use of DynamoDB, MongoDB,
         with personal further projects utilizing MySQL.
      </p>
    <div className={classes.SkillBox}>
      <div className={classes.SkillsDecription}>
        {data}
      </div>

    </div>
  </div>);
}

export default skills;
