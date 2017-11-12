import React from 'react';

import './showcase.css';

const ShowcaseContainer = () => {
  /* Is this bloating my content? Is it better to plan for the future 
  with things that you expect to have more components? */
  return (
    <div className="showcase_contianer">
      <div className="showcase_contianer__row">
        <span className="showcase__title">See The Backroads</span>
        <div className="showcase__image"></div>
      </div>
      <div className="showcase_contianer__row">
        <span className="showcase__title">History, Nature, Points of Interest</span>
        <div className="showcase__image"></div>
      </div>
      <div className="showcase_contianer__row">
        <span className="showcase__title">See The Town</span>
        <div className="showcase__image"></div>
      </div>
    </div>
  );
};

export default ShowcaseContainer;