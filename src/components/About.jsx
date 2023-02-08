import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Heroimg2 from './Heroimg2';
import AboutContent from './AboutContent';


const About = () => {
    return (
        <div>
           <Navbar/>
           <Heroimg2 heading="About me" text="Im a friendly Front-End Developer"/>
           <AboutContent/>
           <Footer/>
        </div>
    );
}

export default About;
