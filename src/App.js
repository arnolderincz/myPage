import React, { Component } from 'react';
import Tachyons from 'tachyons';
import Header from './Components/Header/Header';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import CS from './Components/CS/CS';
import About from './Components/About/About';
import {csCardsText} from './constants';
import Contact from './Components/Contact/Contact';


class App extends Component {

  state = {
    className: "sticky",
    particlesNumber: 50
  };

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize)
  }

  handleScroll = () =>{
    if(window.pageYOffset > 0){
      if(this.state.className === "sticky"){
        this.setState({className: "stickyW"});
      }
    }
    else{
        if(this.state.className === "stickyW"){
          this.setState({className: "sticky"})
        }
    }
  }

  handleResize = () => {
    if(window.innerWidth <= 800 && (window.innerWidth > 500)){
      if(this.state.particlesNumber !== 20){
        this.setState({particlesNumber : 20});
      }
    }
    else if(window.innerWidth <= 500){
      if(this.state.particlesNumber !== 0){
        this.setState({particlesNumber: 0})
      }
    }
    else{
      if(this.state.particlesNumber !== 50){
        this.setState({particlesNumber: 50})
      }
    }
  }

  render(){
    return (
      <div className="App">
        <Navigation className = {this.state}/> 
        <Header props = {this.state}/>
        <About/>
        <CS languages = {csCardsText}/>
        <Contact/>
        
      </div>
    );
  }
}

export default App;