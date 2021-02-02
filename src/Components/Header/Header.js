import React from 'react';
import './Header.css';
import Particles from 'react-particles-js';
import background from '../../Images/pageCover2.jpg';


const Header = ({props}) => {

  const particle_params = {
    particles: {
      number:{
        value: props.particlesNumber
      },
      color: {
        value: '#000000'
      },
      line_linked: {
        color: {
          value: '#000000'
        },
        density:{
          enable: true,
          value_area: 100
        }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
      }
    }
  }

  return(
      <div className="container" id='header'>
        <div id = 'coverBackgroud'> 
          <img src = {background} alt = 'cover'/>
          <div className="part">
            <Particles className="particles"  params={particle_params} />
          </div>    
        </div>
      </div>
  )
}

export default Header;