import React from 'react'
import './Hero.css'
import Edwin_pic from '../../Assets/edwin_1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={Edwin_pic} className='hero-img' alt="" />
        <h1><span>I'm Edwin Ochieng,</span> a Frontend Developer based in Kenya.</h1>
        <p>Hi, i am Frontend developer from Nairobi, Kenya with a year of experience on HTML, CSS, JavaScript and ReactJS</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
