import React from 'react';
import './Card.css';


const Card = ({title, text}) =>{
    return(
        <div className = "card tc dib br3 pa3 ma2 grow shadow-hover">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Card; 