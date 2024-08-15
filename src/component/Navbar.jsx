import React, { useState } from 'react';
import { Link , useLocation } from "react-router-dom";
import CartIcon from '../assets/images/icon-cart.svg';
import UserIcon from '../assets/images/image-avatar.png';
import './Navbar/Navbar.css';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

   
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1>sneakers</h1>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <div className="navbar-toggle-icon"></div>
                    <div className="navbar-toggle-icon"></div>
                    <div className="navbar-toggle-icon"></div>
                </div>

                <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/Home" className={isActive('/Home') ? 'active' : ''}>Home</Link>
                    </li>
                    <li>
                        <Link to="/Collections" className={isActive('/Collections') ? 'active' : ''}>Collections</Link>
                    </li>
                    <li>
                        <Link to="/Men" className={isActive('/Men') ? 'active' : ''}>Men</Link>
                    </li>
                    <li>
                        <Link to="/Women" className={isActive('/Women') ? 'active' : ''}>Women</Link>
                    </li>
                    <li>
                        <Link to="/About" className={isActive('/About') ? 'active' : ''}>About</Link>
                    </li>
                    <li>
                        <Link to="/Contact" className={isActive('/Contact') ? 'active' : ''}>Contact</Link>
                    </li>
                </ul>
                <div className="navbar-icons">
                    <img src={CartIcon} alt="Cart" className="cart-icon"/>
                    <img src={UserIcon} alt="User" className="user-icon"/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;