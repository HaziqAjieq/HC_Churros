import React from 'react'
import './Main.scss';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
    <div className='parent-container'>
      <h1>
        Feel The <br/><a className='crunch'>CRUNCH</a><br/> in every bite!
      </h1>
      {/* button to linktr learn-btn */}
      <Link to='/about' className="learn-btn">Learn More</Link>
    </div>
    </>
  )
}

export default Main