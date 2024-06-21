import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import './App.css'
import Navbar from './component/navbar/Navbar'
import Main from './component/main/Main'
import About from './component/homePage/About';
import Contact from './component/homePage/Contact';


function App() {
 
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Main />} /> {/* Render Main at home path */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
       
        
        
    </Router>
  )
}

export default App
