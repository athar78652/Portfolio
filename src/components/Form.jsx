import React,{useState} from 'react';
import "./form.css";
import {  FaWhatsapp} from 'react-icons/fa';
import {BsFillTelephoneFill} from "react-icons/bs";
import emailjs from 'emailjs-com'

const Form = () => {

    const [alert,setAlert]=useState(false);

    function sendMsg(e){
        e.preventDefault();

        emailjs.sendForm('service_9myoe0c', 'template_utyylhw', e.target, 't9idF97n1LPTdUPmz')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
          
          e.target.reset();
          window.alert("Successfully sent ");
          handleClick()
    }
    function handleClick(){
        setAlert(!alert) 
        
    }


    return (
        <div className='form'>
            <form  onSubmit={sendMsg} >
            <label>Your Name</label>
            <input type="text" name="from_name" required></input>
            <label>Email</label>
            <input type="email" name='email_address' required></input>
            <label>Subject</label>
            <input type="text" name='subject' required></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message here...' name='message' required/>
            <button className='btn' type='submit' onClick={handleClick} >Submit</button>
            </form>
            <div className='callBtn'>
                <a href='tel:+916306745177'>
                <div className='btn btn-light' id='btn1'> 
                <p> <BsFillTelephoneFill size={40} fill='red' /></p> 
                <p>+91 6306745177 </p>
                </div>
                </a>

                <a href="https://wa.me/917839172560" target="_blank" rel="noreferrer">
                <div className='btn btn-light' id='btn2'> 
                <p><FaWhatsapp size={40} fill='green'/></p> 
                <p> +91 7839172560 </p>
                </div>
                </a>
            </div>
        </div>
    );
}

export default Form;
