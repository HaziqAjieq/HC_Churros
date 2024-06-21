import React from 'react'
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    
    <div className="container">
      <div className="contact-container">
        <h1>Follow Us!</h1>

          <div className="social-media">
              <div className="icon-container ">
                <a className="icon instagram" href='https://www.instagram.com/hcchurros.official/?locale=ru&hl=am-et'><FontAwesomeIcon icon={faInstagram} />
                <span>Instagram</span>
                </a>
              </div>
              <div className="icon-container">
                <a className="icon tiktok" href='https://www.tiktok.com/@hcchurros.official'><FontAwesomeIcon icon={faTiktok} />
                <span>Tiktok</span>
                </a>
              </div>
              <div className="icon-container">
                <a className="icon facebook" href='https://www.facebook.com/profile.php?id=61550071262381'><FontAwesomeIcon icon={faFacebook} />
                <span>Facebook</span>
                </a>
              </div>
              <div className="icon-container">
                <a className="icon whatsapp" > <FontAwesomeIcon icon={faWhatsapp} />
                <span>Whatsapp</span>
                </a>
              </div>
              
        </div>

      </div>
    </div>
    
    
    
   
  )
}

export default Contact