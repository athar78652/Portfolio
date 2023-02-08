import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Heroimg2 from "./Heroimg2";
import Form from './Form';

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <Heroimg2 heading="CONTACT" text="Lets have a chat"/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default Contact;
