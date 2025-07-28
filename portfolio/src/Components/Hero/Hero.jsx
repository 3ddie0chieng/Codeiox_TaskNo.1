import React from 'react'
import './Hero.css'
import Edwin_pic from '../../Assets/edwin_1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={Edwin_pic} className='hero-img' alt="" />
        <h1><span>I'm Edwin Ochieng,</span> a Frontend Developer based in Kenya.</h1>
        <p>Hi, I am Frontend developer from Nairobi, Kenya with 2 years of experience on HTML, CSS, JavaScript and ReactJS</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">
              <a href='https://drive.google.com/file/d/1pEUYD7GHVCzYtGFNlZWJ8X07i3SWaWk1/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                <i className="fa-solid fa-file"></i> My Resume
              </a>
              
            </div>
        </div>
      
    </div>
  )
}

export default Hero
