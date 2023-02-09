import React from 'react';
import { Link } from 'react-router-dom';
import "./heroimg.css";
import cv from "../Assets/Athar CV.pdf"

const Heroimg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='into-img' src='https://www.adobe.com/express/create/media_1579406bcc4d2ed2df42e675a090e1ea05ffa8acf.png?width=750&format=png&optimize=medium' alt='images'/>

            </div>
            <div className='content'>
                <p>Hi, I'm Athar Imam</p>
                <h1>FRONTEND DEVELOPER.</h1>
                <div>
                    <Link to='/project' className='btn'>PROJECTS</Link>
                    <Link to='/contact' className='btn btn-light'>CONTACT</Link>
                    <span  className='btn '> <a target='_blank' href={cv}>DOWNLOAD CV</a></span>
                   
                    
                </div>
            </div>
            
        </div>
    );
}

export default Heroimg;
