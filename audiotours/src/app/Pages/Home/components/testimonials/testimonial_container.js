import React from 'react';

import './testimonials.css';


const TestimonialContainer = () => (
  <div className="testimonial_container">
    {/* This will eventually be a full constructor that pulls testimonials */}
    <div className="testimonial">
      <h4 className="testimonial__name">example 1</h4>
      <p className="testimonial__comment">example 1 content</p>
    </div>
    <div className="testimonial">
      <h4 className="testimonial__name">example 2</h4>
      <p className="testimonial__comment">example 2 content</p>
    </div>
    <div className="testimonial">
      <h4 className="testimonial__name">example 3</h4>
      <p className="testimonial__comment">example 3 content</p>
    </div>
    <div className="testimonial">
      <h4 className="testimonial__name">example 4</h4>
      <p className="testimonial__comment">example 4 content</p>
    </div>
  </div>
);

export default TestimonialContainer;