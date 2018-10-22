import React from 'react';
import data from '../../JsonData/JsonData.json';
import burgerImage from '../../assets/images/Screenshot 2018-10-21 at 12.57.43 PM.png';
import youtubeImage from '../../assets/images/download.png';
import classes from './Portfolio.module.css';

const portfolio = props => {
  console.log(data.projects, "in portfolio");

  let dataa = data.projects.map((item, i) => {

    return (<div className={classes.ContainerWrapper}>

      <p>{item.name}
      </p>
      <a href={item.website} target="_blank">
        <img className={classes.PortfilioImage} src={item.image} alt=""/>
      </a>
    </div>)

  })

  return (<div className={classes.Container}>
    <h2>PORTFOLIO</h2>

    <div className={classes.PortfolioWrapper}>{dataa}</div>
  </div>)

}

export default portfolio;
