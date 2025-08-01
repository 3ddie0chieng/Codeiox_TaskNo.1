import React, { useRef, useState } from 'react'
import './Navbar.css'
import Eddie_logo from '../../Assets/Eddie_logo.svg'
import underline from  '../../Assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../Assets/menu_open.svg'
import menu_close from '../../Assets/menu_close.svg'

function Navbar() {
  //set Navbar functionality
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <img src={Eddie_logo} alt="" className='nav-logo' /> 
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link' href='#home'> <p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt='' /> : <></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Porfolio</p></AnchorLink>{menu === "work" ? <img src={underline} alt='' /> : <></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  );
}

export default Navbar
