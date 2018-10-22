import React, {Component} from "react";
import Slider from "react-slick";
import classes from './Slider.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteLeft } from '@fortawesome/free-solid-svg-icons';



class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (<div className={classes.SliderContainer}>
      <FontAwesomeIcon icon={faQuoteLeft} color="white" size="4x"/>
      <Slider className={classes.Slider} {...settings}>
        <div>
          <h3>I can highly recommend him. He is well suited to the challenges it provides. Vahid is a talented young man, and everyone here wishes him all the best .</h3>
          <p>Ali Davoudi- The  Abiyran Company CEO </p>
        </div>
        <div>
          <h3>I'm writing to recommend Vahid Davoudi. I've worked with Vahid for the past two years at Bookurve Company; for those years, he was my direct report.In the time I've known him, Vahid has consistently been a strong employee — capable of taking control of big projects and executing to the fullest.</h3>
          <p>Hossin Arabi- The Bookurve CEO</p>
        </div>
        <div>
          <h3>Vahid has excellent communication skills. His written work is both clear and concise, as well as interesting to read. He demonstrated his oral articulateness in the discussion sections that were an integral part of the course</h3>
          <p>Dr Salwani Mohd Daud - Professor in Advanced Informatics Department(UTM)</p>
        </div>

      </Slider>
    </div>);
  }
}

export default SimpleSlider;
