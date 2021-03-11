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
						to="about"
						spy={true}
						smooth={true}
						offset={-102}
						duration={500}>
						About me
					</Link>


					<Link
						className="nav-item"
						activeClass="active"
						to="CS"
						spy={true}
						smooth={true}
						offset={-105}
						duration={500}>
						Computer Science
					</Link>

					<li className="nav-item">
					  <a  href="https://drive.google.com/file/d/1aBbCZenHxx2xVJ3VU7AgcJLR75WRdqbe/view?usp=sharing" target="_blank" rel='noreferrer'>CV</a>
				  	</li>
					<li className="nav-item">
					  <a  href="https://drive.google.com/file/d/1XAKyMbPYZsjC6ZaQB5yRZIJsjEZe9LxY/view?usp=sharing" target="_blank" rel='noreferrer'>Resume</a>
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