import React from "react";
import './index.scss'
import Logo from '../../assets/Group 2184.png'
import insta from '../../assets/ri_instagram-fill.png'
import twitter from '../../assets/bi_twitter.png'
import faceboook from '../../assets/ic_baseline-facebook.png'

const Footer = () => {
    return(
        <>
            <footer>
      <div className="footer-left">
        <div className="footer-left-child">
          <img src={Logo} alt="Logo" />
          <div className="socials">
            <img src={insta} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
            <img src={faceboook} alt="Facebook" />
          </div>
          <button>Contact Us</button>
        </div>
        <div className="footer-grid">
          <div>Work With Us</div>
          <div>Private Coaching</div>
          <div>About Us</div>
          <div>Advertise With Us</div>
          <div>Our Work</div>
          <div>FAQs</div>
          <div>Support Us</div>
          <div>Our Commitment</div>
          <div>Report a Bug</div>
          <div>Business Advices</div>
          <div>Our Team</div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='bottom-left'>© 2022 Embrace, Inc. - All Rights Reserved</div>
        <div className='bottom-right'>
          <p>Terms of use</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </footer>
        </>
    )
}

export default Footer