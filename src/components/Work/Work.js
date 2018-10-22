import React from 'react';
import classes from './Work.module.css';
import DATA from '../../JsonData/JsonData.json';

const work = (props) => {




  let works = DATA.works.map((work, i) => {
      console.log(work.highlights);
    return (<div>
      <div className={classes.Info}>

        <h2>{work.company}</h2>
          <div className={classes.Highlights}>
            <p>{work.position}</p>
            <p>({work.startDate})</p>
          </div>
        <p>{work.summary}</p>
      </div>
    </div>)
  })
  return (<div className={classes.Wrapper}>
    {works}
  </div>);
}

export default work;
