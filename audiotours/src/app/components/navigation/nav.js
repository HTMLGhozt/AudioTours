import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css';

const MainNav = () => {
  const showLoginModal = () => {
    const login = document.getElementById('login_modal');
    login.style.display = 'flex';
  };
  const showRegisterModal = () => {
    const register = document.getElementById('register_modal');
    register.style.display = 'flex';
    console.log('is clicked');
  };
  return(
    <nav className="main_nav">
      <NavLink className="main_nav__link" activeClassName="main_nav__link--active" to="/" exact>HOME</NavLink>
      <NavLink className="main_nav__link" activeClassName="main_nav__link--active" to="/about">ABOUT</NavLink>
      <NavLink className="main_nav__link" activeClassName="main_nav__link--active" to="/app">APP</NavLink>
      <NavLink className="main_nav__link" activeClassName="main_nav__link--active" to="/contact">CONTACT</NavLink>
      
      <div className="main_nav__login_box">
        <button className="main_nav__link main_nav__link--login" onClick={ showLoginModal }>Login</button>
        <button className="main_nav__link main_nav__link--register" onClick={ showRegisterModal }>Register</button>
      </div>
    </nav>
  );
};

export default MainNav;