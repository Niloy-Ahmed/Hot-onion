import React from 'react';
import logo from '../logo/logo.png';
import './Header.css';



const Header = () => {
    return (
        <div class="container">
           <img src={logo} alt=""/>
           <button class="btn btn-danger" className="Header-btn">Sign In</button>
           <div className="banner-area"></div>
           <nav>
                <a href="/Breakfast">Breakfast</a>
                <a href="/Lunch">Lunch</a>
                <a href="/Dinner">Dinner</a>
            </nav>
           </div>
        
    );
};

export default Header;