import React from 'react'
import './Footer.css'
import Eddie_logo from '../../Assets/Eddie_logo.svg'
import user_icon from '../../Assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={Eddie_logo} alt="" className='logo' />
                <p>Copyright 2024. All rights reserved.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">Courtesy of GreatStack</p>
            <div className="footer-bottom-right">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
