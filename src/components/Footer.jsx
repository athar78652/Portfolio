import React from 'react';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import "./footer.css";

const Footer = () => {
    return (
        
        <>
            <div className='footerContainer'>
                <div className='box1' >
                    <h2>Athar Imam</h2>
                    <h5>Porfolio app build using React</h5>
                </div>

                <div className='center'>
                    <ul>
                        <li><FaHome size={30}/> <span> Prayagraj, Uttar Pradesh, India</span></li>
                        <li></li>
                    </ul>

                </div>

                <ul className='connect'>
                    <li><a href='https://github.com/athar78652' target='_blank'><FaGithub className='gitLogo' size={20}/></a></li>
                    <li><a href='https://www.linkedin.com/in/athar-imam-a68711194?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGAM0b79HT3Sz%2FeBLcxS8bw%3D%3D' target='_blank'><FaLinkedin className='linkedinLogo' size={20}/></a></li>
                    <li><a href='mailto:athar78652@gmail.com' target='_blank'><FaMailBulk className='mailLogo' size={20}/></a></li>
                    <li><a href="https://wa.me/917839172560" target="_blank" rel="noreferrer"><FaWhatsapp className='whatsappLogo' size={20}/></a></li>
                </ul>
            </div>
        </>
    );
}

export default Footer;
