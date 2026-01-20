import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import footer_icon from '../../assets/icon.png'
import footer_linkedin from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={footer_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/kriti-upadhyay-4952a7279/" target="_blank" rel="noopener noreferrer" aria-label="Kriti Upadhyay on LinkedIn">
                        <img src={footer_linkedin} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2025 Kriri Upadhyay</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Pricvacy Policy</p>
                <a href="https://www.linkedin.com/in/kriti-upadhyay-4952a7279/" target="_blank" rel="noopener noreferrer" aria-label="Kriti Upadhyay on LinkedIn" className='footer-connect-link'>Connect with me</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
