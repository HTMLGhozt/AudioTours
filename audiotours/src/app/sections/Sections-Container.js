import React from 'react';
import MobileSection from './Section_Components/MobileSelection.js'
import './sections.css';

const SectionsContainer = () => {
  return (
    <div className="sections_wrapper">
      <MobileSection />

      <div className="section_container__2">
        <div className="section_container__2__row">
          <span>See The Backroads</span>
          <div className="section_image"></div>
        </div>
        <div className="section_container__2__row">
          <span>History, Nature, Points of Interest</span>
          <div className="section_image"></div>
        </div>
        <div className="section_container__2__row">
          <span>See The Town</span>
        <div className="section_image"></div>
        </div>
      </div>

    </div>
  );
};
export default SectionsContainer;