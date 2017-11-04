import React from 'react';
import './nav.css';

const MainNav = () => {
  return (
    <nav className="main_nav">
      <a className="main_nav__link" href="#">HOME</a>
      <a className="main_nav__link" href="#">ABOUT</a>
      <a className="main_nav__link" href="#">APP</a>
      <a className="main_nav__link" href="#">CONTACT</a>
    </nav>
  );
};

export default MainNav;