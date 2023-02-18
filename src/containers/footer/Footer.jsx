import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others?</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>PatrickState K12 182 AG Nigeria, All Right Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Social Media</p>
          <p>Counters</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          <p>PatrickState K12 182 AG Nigeria, All Right Reserved</p>
          <p>08161185089</p>
          <p>awoyemi@patrick.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p> 2023 GPT-3. All right reserved.</p>
      </div>
    </div>
  )
}

export default Footer