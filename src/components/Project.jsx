import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./project.css";
import Heroimg2 from './Heroimg2';

import Work from './Work';



const Project = () => {
    return (
        <div>
            <Navbar/>
           <Heroimg2 heading="PROJECTS" text="Some of my most recent works"/>
           <Work/>
            <Footer/>
        </div>
    );
}

export default Project;
