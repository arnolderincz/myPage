import React from 'react';
import {Link} from 'react-scroll';
import Tilt from 'react-tilt';
import './Navigation.css';
import logoImg from '../../Images/the_A.png';


const Navigation = ({className})  =>{

    return(
        <div className= {className.className}>

        <nav>
				<ul>
					<Link
						className="logo"
						activeClass="active"
						to="header"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}>
						<Tilt className="logoTilt Tilt ml2 " options={{ max : 55 }} >
							<img src= {logoImg} alt='logo'/>
						</Tilt>
					</Link>
					
					<Link
						className="nav-item"
						activeClass="active"
						to="CS"
						spy={true}
						smooth={true}
						offset={-102}
						duration={500}>
						Computer Science
					</Link>

					<Link
						className="nav-item"
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						offset={-102}
						duration={500}>
						About me
					</Link>

					<li className="nav-item">
					  <a  href="https://drive.google.com/file/d/1V0z_F8Pli6t5WYDD3cJ0a8a3iza9DdOe/view?usp=sharing" target="_blank" rel='noreferrer'>CV</a>
				  	</li>
					<li className="nav-item">
					  <a  href="https://drive.google.com/file/d/13sKVnMDsjEB1_-dL7owCtVZ0d65n5bu2/view?usp=sharing" target="_blank" rel='noreferrer'>Resume</a>
				  	</li>
				  	<Link
						className="nav-item"
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						offset={-350}
						duration={500}>
						Contact me
					</Link>
				 </ul>
            </nav>
        </div>
    )
}

export default Navigation;