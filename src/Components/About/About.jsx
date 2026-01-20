import React from 'react'
import './About.css'

import profile_img from '../../assets/profilepic1.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src="" alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" className='profilepic' />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque omnis repudiandae eaque cumque, adipisci quaerat soluta quibusdam aliquid debitis reiciendis nobis quos obcaecati. Voluptates, animi ut dolorem veniam ullam dolorum.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis a distinctio nulla tempora at numquam aspernatur dolorum error beatae minima porro ab repellat alias, molestias tenetur quo molestiae suscipit libero.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"65%"}}/></div>
                <div className="about-skill"><p>React.js</p><hr style={{width:"70%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECT COMPLETES</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>Happy client</p>
        </div>
      </div>
    </div>
  )
}

export default About
