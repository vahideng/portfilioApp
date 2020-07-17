import React,{Component} from 'react';
import image from '../../assets/images/Screenshot 2018-10-17 at 4.30.03 PM.png'
import classes from './AboutMe.module.css';


class aboutMe extends Component {

  render() {

    return (
      <div className={classes.WrapperTakeWholeWidth}>
      <div className={classes.Wrapper}>
        <img src={image} alt=""/>
        <h1>About Me</h1>
        <p className={classes.Paragraph}>
        React JS , React-native developer with a 8 years of experience building high performing presentation layers, building reusable components, and performance optimisation. Received Engineer Rockstar 2019 award from Aleph-labs for my contributions to delivering 6 projects successfully. 

        </p>

        <br/>
        <h3>Contact Details</h3>
        <div className={classes.Email}>Vahid_Davoudi_e@yahoo.com</div>
      </div>
    </div>
  )}
}

  export default aboutMe
