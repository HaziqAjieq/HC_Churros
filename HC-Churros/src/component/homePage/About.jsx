import React from 'react'
import './About.scss'
import VideoAbout from '../../assets/video/VideoAbout.MP4'
import SwiperImg from './SwiperImg'
import CardOutlet from '../card/CardOutlet'
import Licensing from '../Licensing/Licensing'
import { Link } from 'react-router-dom';


// import ImageSlider from './ImageSlider'


function About() {
  return (
    <>
      <div className="about-container">
    
          <div className="about-content">
            <div className="about-video">
                  <video 
                  loop
                  muted
                  autoPlay
                  width="260"
                  className='about-video-video'
                  onPlay={(event) => event.target.control = false}>
                    <source src={VideoAbout} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
            </div>
            <div className='about-text'>
            <h1>Kenali Kami!</h1>
              <br/>
                <p>Di HC Churros, kami amat bersemangat dalam menyediakan churros terbaik. Perjalanan kami bermula pada tahun 2022 apabila kami memulakan misi untuk berkongsi cinta kami terhadap makanan ringan yang panas dan rangup ini dengan komuniti kami.
                 <br/>
                 <br/>
                Apa yang membezakan kami adalah komitmen kami yang teguh terhadap kualiti dan rasa. Setiap churro yang kami hasilkan adalah hasil usaha penuh kasih sayang, menggunakan bahan-bahan terbaik dan sentuhan kreativiti. Kami percaya dalam menawarkan pengalaman churro yang luar biasa.
                </p>
            </div>
          </div>
        {/* swiper image */}
        <SwiperImg/>
        <br/>
        <CardOutlet/>
        <br/>
        <Licensing/>
      </div>
     
  </>
  )
}

export default About