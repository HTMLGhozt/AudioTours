import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css';

const MainNav = () => (
  <nav className="main_nav">
    <NavLink className="main_nav__link" activeClassName="main_nav__link--active" to="/" exact>HOME</NavLink>
    <NavLink className="main_nav__link" activeClassName="main_nav__link--active" to="/about">ABOUT</NavLink>
    <NavLink className="main_nav__link" activeClassName="main_nav__link--active" to="/app">APP</NavLink>
    <NavLink className="main_nav__link" activeClassName="main_nav__link--active" to="/contact">CONTACT</NavLink>
    
    <div className="main_nav__login_box">
      <a className="main_nav__link main_nav__link--login" href="#">Login</a>
      <a className="main_nav__link main_nav__link--register" href="#">Register</a>
    </div>
  </nav>
);

export default MainNav;