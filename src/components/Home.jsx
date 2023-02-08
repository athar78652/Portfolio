import React from 'react';
import Footer from './Footer';
import Heroimg from './Heroimg';
import Navbar from './Navbar';
import "./navbar.css";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Heroimg/>
            <Footer/>
        </div>
    );
}

export default Home;
