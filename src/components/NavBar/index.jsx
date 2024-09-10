import React, { useState } from "react";
import Logo from '../../assets/Group 2184.png';
import './index.scss';

const NavBar = () => {
    // State to manage mobile menu open/close
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>
                
                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#how-it-works">How It Works</a>
                    <a href="#our-work">Our Work</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#about-us">About Us</a>
                </div>

                <div className="navbar-button">
                    <button>Book A Call</button>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
