import React from 'react';
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__text">Never travel without a guide.</h1>
      <span className="header__button"><span className="header__button__text">Start Your Adventure</span></span>
      <p className="header__image__caption">
        Photo by <a href="https://unsplash.com/@dariuszsankowski">Dariusz Sankowski</a> on
        <a href="https://unsplash.com/"> Unsplash</a>
      </p>
    </div>
  );
};

export default Header;