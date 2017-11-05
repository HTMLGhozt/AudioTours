import React from 'react';
import './sections.css';

const SectionsContainer = () => {
  return (
    <div className="sections_wrapper">
      <div className="section_container">
        <div className="section_container__column user">
          <span className="section_container__title">Listen</span>
        </div>
        <div className="section_container__column create">
          <span className="section_container__title">Create</span>
        </div>
      </div>    
    </div>
  );
};
export default SectionsContainer;