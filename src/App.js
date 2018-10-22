import React, {Component} from 'react';
import classes from './App.module.css';
import Layout from './containers/Layout/Layout';
import Content from './containers/Content/Content';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import {connect} from 'react-redux';
import Slider from './components/Slider/Slider';

class App extends Component {
constructor(props) {
  super(props);
  this.refPortfilio= React.createRef()
}

  render() {
    if(this.props.portfilioScroll===1){
      this.refPortfilio.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'})

    }

    return (<div>
      <header className={classes.Header}>
        <Layout/>
      </header>

      <Content/>
      <Portfolio/>
      <Slider />
      <div ref={this.refPortfilio}>
        <Footer/>
      </div>

    </div>);
  }
}


const mapStateToProps = state =>{
  return {
    portfilioScroll : state.scroll.portfilio
  }
}

export default connect(mapStateToProps) (App);
