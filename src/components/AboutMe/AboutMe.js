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
          Frontend developer with 6 years of experiences with proven background successfully managing all facets of site development. Advanced knowledge in web development using React Js, Redux , JavaScript ES6,Ajax,HTML5 and CCS3. Work collaboratively with clients and teams to provide rapid, robust and client-acclaimed frontend web development optimizing user experience. Responsible for all stages of web site creations for clientele, from initial design and architecture to development, deployment, and management of web sites.

        </p>

        <br/>
        <h3>Contact Details</h3>
        <div className={classes.Email}>Vahid_Davoudi_e@yahoo.com</div>
      </div>
    </div>
  )}
}

  export default aboutMe
