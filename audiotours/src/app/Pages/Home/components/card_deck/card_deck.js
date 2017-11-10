import React from 'react';

import './card_deck.css';

const CardDeck = () => (
  <div className="card_deck">
    <div className="listen">
      <div className="card card__info">
        <h4 className="card__title">Listen</h4>
      {/* <!-- wishful programming -->
        <SearchLocalTours />
      */}
        <button className="card__read_more">read more</button>
      </div>

      <div className="listen__mobile_icons card">
        <div></div>
        <div></div>
      </div>
    </div>

    <div className="card create">
      <h4 className="card__title">Create</h4>
      <button className="card__read_more">read more</button>
    </div>
  </div>
);
export default CardDeck