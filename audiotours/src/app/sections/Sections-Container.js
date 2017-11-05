import React from 'react';
import './sections.css';

const SectionsContainer = () => {
  return (
    <div className="sections_wrapper">

      <div className="section_container">
        <div className="section_container__column user">
          <div className="section_container__text">
            <span className="section_container__title">Listen</span>
          </div>
          <div className="section_container__icons">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="section_container__column create">
          <span className="section_container__title">Create</span>
        </div>
      </div>
      <div className="section_container__2">
      </div>
    </div>
  );
};
export default SectionsContainer;