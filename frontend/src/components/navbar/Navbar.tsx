import React from 'react'
import assets from './../../assets/assets';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <img src={assets.logo} alt="" />
        </div>
        <div className="navbar-menu">
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>

            </ul>
        </div>
        <div className="navbar-right">
            <button>Signin</button>
        </div>
    </nav>
  )
}

export default Navbar
