/*
File Name: About.jsx
Name: Abdallah Divkar
StudentID: 301302441
Date: 27/9/2024
*/ 
import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from '../../assets/about_profile.jpg'
import resume from "../../assets/resume.pdf"

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am Abdallah Divkar, an aspiring software engineer with hands-on experience in programming, web development,
               and database concepts. Proficient in Python, C#, Java, and JavaScript, I am currently studying
                Artificial Intelligence - Software Engineering Technology at Centennial College (Toronto, Canada). I am passionate about developing efficient software solutions and eager to contribute my skills to innovative projects in a dynamic environment.</p>
            
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>C#</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>Java</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Oracle SQL</p><hr style={{width:"65%"}}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
