import React from 'react';
import './About.css';
import pharmaImg from '../../Images/pharma.jpg';
import osfImg from '../../Images/osf.jpg';


const About = () =>{
    return(
        <div id = 'about'>
            <div className='title'>
                <h1 className='w-100' id='about'>Not the usual story</h1>
                <p></p>
            </div>
            <div className='content'>
                <div className = 'c1'>
                    <p className = 'text1'>
                        A lot of people tell me that joining Pharmacy was one of my biggest mistakes, but... 
                        I think that every experience is an opportunity to learn and grow.
                        I think that this move, even if I don't work in this domain, was the one that made me what I'm today. After 5 years I can say that I evolved a lot as a person,
                        I'm more active, much more confident about my qualities and motivated as never before to evolve even more.
                    </p>
                    <img id='pharma' src= {pharmaImg} alt='pharma'/>
                </div>
                <div className = 'c2'>
                    <img id='osf' src= {osfImg} alt='osf'/>
                    <p className = 'text2'>
                        One of the best decisions I ever made was joining Organizația Studenților Farmaciști Cluj - Napoca (OSF).
                        I say this because I feel like OSF had a huge impact in developing my communication skills, self-discipline,
                        time management and leadership. For almost 5 years of activity I volunteered in many projects, had 2 mandates
                        as Event Coordinator in the Leading Board, I was volunteer in HR and External Affairs department and I met a lot of great people.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;