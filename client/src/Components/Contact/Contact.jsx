/*
File Name: Contact.jsx
Name: Abdallah Divkar
StudentID: 301302441
Date: 27/9/2024
*/ 
import React from 'react'
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9e614adc-c383-4240-a07d-80be37bd78b7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  
  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <h2>Abdallah Fardin Divkar</h2>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={[mail_icon]} alt="" /> <p>divkerabdallah@gmail.com</p>
                </div>
                <div className="contact-detail">
                <img src={[call_icon]} alt="" /> <p>+1 (437) 955-5106</p>
                <img src={[call_icon]} alt="" /> <p>+966 57 320 2943</p>
                </div>
                <div className="contact-detail">
                <img src={[location_icon]} alt="" /> <p>Jeddah, Saudi Arabia</p>
                <img src={[location_icon]} alt="" /> <p>Toronto, ON</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>

            <label hhtmlFor="">Your Email</label>
            <input type="text" placeholder="Enter your e-mail" name="email"/>

            <label hhtmlFor="">Your Message</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
