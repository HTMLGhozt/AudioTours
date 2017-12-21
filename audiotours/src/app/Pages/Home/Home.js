import React from 'react';

import Header from './components/header/header.js';
import CardDeck from './components/card_deck/card_deck.js';
import ShowcaseContainer from './components/showcase_content/showcase_container.js';
import TestimonialContainer from './components/testimonials/testimonial_container.js';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

const Home = () => {
  /* 
  I'm having an issue of semantics here. I think I might want to code something 
  in this part before the return value; however, it's always easy enough to change if I want to do that
  since elsewhere I'm just using `() => (<div></div>);`
  */
  return (
    <div className="home_page">
      <Header />
      <CardDeck />
      <ShowcaseContainer />
      <TestimonialContainer />
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Home;