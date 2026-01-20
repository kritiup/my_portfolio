import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.JPG'
const Hero = () => {
  return (
    <div id='home' className='hero'>
     <img src={profile_img} alt="" className='profile'/>
     <h1><span>I'm Kriti Upadhyay,</span> frontend developer based in Nepal</h1>
     <p>I am a software engineering student from Nepal, cureently study in pre-final year</p>
     <div className="hero-action">
        <a href="https://www.linkedin.com/in/kriti-upadhyay-4952a7279/" target="_blank" rel="noopener noreferrer" aria-label="Kriti Upadhyay on LinkedIn" className="hero-connect">Connect with me</a>
        <div className="hero-resume">My resume</div>
     </div>
    </div>
  )
}

export default Hero
