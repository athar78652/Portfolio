import React from 'react';

import "./AboutContent.css";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import github from "../Assets/github.png";
import git from "../Assets/git.png";
import vscode from "../Assets/vscode.png";
import react from "../Assets/react.png";
import mongo from "../Assets/mongo.png";
import express from "../Assets/express.png";



const AboutContent = () => {
    return (
       

        <div className='AboutContainer' id='about'>
       
            <h1 className='heading'>Who am I?</h1>
            
            <p className='aboutMe'>Electrical and Electronics engineering graduate started learning web development for career change.I'm pursuing a Web Development Course from School of Accelerated Learning (SOAL). I'm passionate about exploring and learning new things and my goal is to pursue this passion within the field of web development.</p>
            <h4 className='skills'>Skills and Tools familiar with..</h4>
            <div className='techStack'>
            <div className='techstach1'>
            <div>
                <img src={html} className='logo' alt=""></img>
                <p>HTML</p>
            </div>
            <div>
                <img src={css} alt=""></img>
                <p>CSS</p>
            </div>
            <div>
                <img src={js} alt=""></img>
                <p>JavaScript</p>
            </div>
            <div>
                <img src={github} alt=""></img>
                <p>Github</p>
            </div>
            <div>
                <img src={git} alt=""></img>
                <p>Git</p>
            </div>
            <div>
                <img src={vscode} alt=""></img>
                <p>VS Code</p>
            </div>
            </div>
            <div className='techstack2'>
            <div>
            <img src={react} alt=""></img>
                <p>React</p>
            </div>
           
            <div>
                <img src={mongo} alt=""></img>
                <p>MongoDB</p>
            </div>
            <div>
                <img src={express} className='logo' alt=""></img>
                <p>ExpressJS</p>
            </div>
            </div>
                
            </div>
        </div>
    );
}

export default AboutContent;
