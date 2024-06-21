import  React,{ useState } from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <header className='header'>
      <a href="/" className='Logo'>Logo</a>

      <nav className='navbar'>
        <a href="/">Home</a>
        <Link to='/about'>About</Link>
       
        <Link to='/contact'>Contact</Link>
        <a href="/">Licensee</a>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      
    </header>

<div className={`menu-dropdown ${menuOpen ? 'show' : ''}`}>
<a href="/">Home</a>
<Link to='/about'>About</Link>

<Link to='/contact'>Contact</Link>
<a href="/">Licensee</a>
</div>
</>
  );
}

export default Navbar;