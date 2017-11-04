import React from 'react';
import './nav.css';

const MainNav = () => {
  return (
    <nav className="main_nav">
      <a className="main_nav__link" href="#">HOME</a>
      <a className="main_nav__link" href="#">ABOUT</a>
      <a className="main_nav__link" href="#">APP</a>
      <a className="main_nav__link" href="#">CONTACT</a>
      
      <div className="main_nav__login_box">
        <a className="main_nav__link login" href="#">Login</a>
        <a className="main_nav__link register" href="#">Register</a>
      </div>
    </nav>
  );
};

export default MainNav;