import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

// pictures
import KA_LOGO from '../pictures/KALOGO.png';
import KA_LOGO2 from '../pictures/footer-logo.webp'


const CustomNavbar = () => {

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    console.log(window.scrollY);
    window.addEventListener('scroll', changeColor)

    return (
        <nav className={`${color ? 'navbar active' : 'navbar'} navbar-expand-lg `}  expand="lg">
  <div className="container-fluid ">
    <Link to='/' className="navbar-brand brand ms-5"><img src={`${color? KA_LOGO : KA_LOGO2}`} alt="Kable Academy Logo"></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavDropdown">
      <ul className="navbar-nav align-items-center">
        <li className="nav-item item">
          <Link className={`${color ? 'nav-link active' : 'nav-link '}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item item">
          <Link className={`${color ? 'nav-link active' : 'nav-link '}`} to="/about">About</Link>
        </li>
        <li className="nav-item item">
          <Link className={`${color ? 'nav-link active' : 'nav-link '}`} to="/tutition">Tutition</Link>
        </li>
        <li className="nav-item item dropdown">
          <Link className={`${color ? 'nav-link active' : 'nav-link '} dropdown-toggle `} to="/classes" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Classes
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/webdev">Web Dev</Link></li>
            <li><Link className="dropdown-item" to="/ai">Ai</Link></li>
            <li><Link className="dropdown-item" to="/cyber">Cyber</Link></li>
          </ul>
        </li>
        <li className="nav-item btn-sm btn-warning badge">
          <Link className="nav-link text-white" to="/tutition">Start Now</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default CustomNavbar;