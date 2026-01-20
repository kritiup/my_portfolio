import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

  const [menu,setMenu] = useState("");
  return (
    <div className='navbar'>
      <img src={logo} alt="" className="logo" />
     <ul className='nav-menu'>
      <li onClick={() => setMenu("home")}><AnchorLink className='anchor-link' href='#home' ><p className={menu==="home" ? "active" : ""}>Home</p></AnchorLink></li>
      <li onClick={() => setMenu("about")}><AnchorLink className='anchor-link' offset={50} href='#about'><p className={menu==="about" ? "active" : ""}>About Me</p></AnchorLink></li>
      <li onClick={() => setMenu("service")}><AnchorLink className='anchor-link' offset={50} href='#service'><p className={menu==="service" ? "active" : ""}>Course</p></AnchorLink></li>
      <li onClick={() => setMenu("work")}><AnchorLink className='anchor-link' offset={50} href='#work'><p className={menu==="work" ? "active" : ""}>Portfolio</p></AnchorLink></li>
      <li onClick={() => setMenu("contact")}><AnchorLink className='anchor-link' offset={50} href='#contact' ><p className={menu==="contact" ? "active" : ""}>Contact</p></AnchorLink></li>
     </ul>
     <a href="https://www.linkedin.com/in/kriti-upadhyay-4952a7279/" target="_blank" rel="noopener noreferrer" aria-label="Kriti Upadhyay on LinkedIn" className='nav-connect'>Connect with me</a>
    </div>
  )
}

export default Navbar
