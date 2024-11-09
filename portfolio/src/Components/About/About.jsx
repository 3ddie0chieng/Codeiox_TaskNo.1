import React from 'react'
import './About.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import Edwin_pic from '../../Assets/edwin_1.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={Edwin_pic} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Developer with over a 2 year term of professional expertise in the field. Throughout my career, i have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>My passion for Frontend Development is not only reflected in my extensive experience but also in the enthusiasm and dedication i bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>ReactJS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>NodeJS</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Database</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>3+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>Clients  Served</p>

            </div>
        </div>
      
    </div>
  )
}

export default About
