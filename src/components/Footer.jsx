import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/Bs';


const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-links'>
          <p>Home |</p>
          <p>Terms and conditions |</p>
          <p>Privacy Policy |</p>
          <p>Collection statement |</p>
          <p>Help |</p>
          <p>Manage Account |</p>
      </div>
      <div className='footer-social'>
        <p className='footer-social-p'>Copyright @2016, All Rights Reserved</p> 
        <div className='footer-social-icons'>
        <FaFacebookF />
        <AiOutlineTwitter />
        <BsInstagram />
        </div>
      </div>
    </footer>
  )
}

export default Footer