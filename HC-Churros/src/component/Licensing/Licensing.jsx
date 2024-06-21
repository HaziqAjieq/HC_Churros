
import './Licensing.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';



function Licensing() {


  return (
    <div className='licensing-container'>
      <div className="licensing-card">
        <h1>Become Our Business Partner!</h1>
        <p>Join us as we straving to serve best churros!</p>
        <button>Learn More</button>
      </div>

      <footer>
        
      <div className="footer-text">
      <h2>Contact: 012-3456789</h2>
      <h2>Email:afsada@gmail.com</h2>

      </div>



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
        <div className='footer-end'>
     
        <a href="/">Home</a>
        <Link to='/about'>About</Link>
       
        <Link to='/contact'>Contact</Link>
        <a href="/">Licensee</a>
      

      
      </div>
      </footer>

      
    </div>
      
  ) 
   
}

export default Licensing