import React from 'react';
import Card from './Card';
import './CS.css';

const CS = ({languages}) =>{
    const cardComp = languages.map((_lang, i) => {
        return <Card key ={i} title = {languages[i].title} text = {languages[i].text}/>
    })

    return(
        <div id = "CS">
            <div id = "title">
                <h1 > Computer science world</h1>
                <p></p>
            </div>
            
            <p id = "text1">
                And now let's talk about what qualifies me to be employed. I'm a very hard worker always hungry to know more, my witness is the fact that I'm second year computer science student at UBB. Below I mentioned the most important languages I know and a bit about my knowledge in each one. In the descriptions I mentioned just what I considered important to be known, the list in not exhaustive. 
            </p>

            <div id = "cards">
             {cardComp}   
            </div>
            
        </div>
    )
}

export default CS;