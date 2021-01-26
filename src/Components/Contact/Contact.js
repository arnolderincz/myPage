import React from 'react';
import './Contact.css';

const Contact = () =>{
    return(
        <div id = "contact">
            <div id = "addresses">
                <h1 id = "titleC"> Contact</h1>
                <div id = "wrapperC">
                    <div id = "concl">
                        <p>Hope I convinced you that I deserve an interview. Maybe now I'm not the best, but if you hire me I'll be one of the fastest evolving employee. </p>
                    </div>
                    <div id = "adrs2"> 
                        <p>Phone : 0752756772</p>
                        <p>Email : arnold.erincz@gmail.com</p>
                        <p>
                            <a href = {"https://github.com/arnolderincz"} target="_blank" rel='noreferrer'>GitHub</a>
                        </p>
                        <p>
                            <a href = {"https://www.linkedin.com/in/erincz-arnold-11a532107"} target="_blank" rel='noreferrer'>LinkedIn</a>
                        </p>
                        <p>
                            <a href = {"https://www.facebook.com/erincz.arnold/" } target="_blank" rel='noreferrer'>Facebook</a>
                        </p>
                        <p>
                            <a href = {"https://www.instagram.com/erinczarnold/"} target="_blank" rel='noreferrer'>Instagram</a>
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Contact;