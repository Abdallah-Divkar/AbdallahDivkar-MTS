/*
File Name: Hero.jsx
Name: Abdallah Divkar
StudentID: 301302441
Date: 27/9/2024
*/ 
import React from 'react'
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/AbdallahDivkar-Resume_Update-MTS.pdf"


const Hero = () => {
  return (
    <div id="home" className='hero'>
      <AnchorLink className="anchor-link" href="#about"><img onClick={() => setMenu("about")} src={profile_img} alt=""/></AnchorLink>
      <h1>Abdallah Divkar</h1>
      <h2>Aspiring Software Developer based in Canada</h2>
      <p>
      Welcome to my portfolio! I’m Abdallah Divkar, a software engineering student with experience
       in software development, robotics, and data analysis. Here, you’ll find
        projects that reflect my dedication to building innovative
         solutions with technologies like Python, Java, and full-stack
          web tools. Feel free to explore, and reach out if you’d like
          to connect!</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink></div>
        <div className="hero-resume">
          <a href={resume} target="_blank" rel="noopener noreferrer">My Resume</a>
      </div>
      </div>
      
    </div>
  )
}

export default Hero
