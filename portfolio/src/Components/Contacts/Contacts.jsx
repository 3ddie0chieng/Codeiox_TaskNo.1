import React, { useRef } from 'react'
import './Contacts.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import mail_icon from '../../Assets/mail_icon.svg'
import call_icon from '../../Assets/call_icon.svg'
import location_icon from '../../Assets/location_icon.svg'

const Contacts = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "82b69ea2-9d41-4b62-a2c8-4df55379469b");

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

      if(formRef.current){
      formRef.current.reset(); //resets the form input
      }

      //refresh the page
      window.location.reload();
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>edwinochieng678@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>+254705510052</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>+254751712337</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>Nairobi, Kenya</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholdername="Enter your name" name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholdername="Enter Email" name='email'/>
            <label htmlFor="">Write your Message Here</label>
            <textarea name="Message" rows={8}></textarea>
            <button type='submit' className='contact-submit'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Contacts
