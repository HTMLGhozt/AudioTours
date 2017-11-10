import React from 'react';

import Header from './components/header/header.js';
import CardDeck from './components/card_deck/card_deck.js';
import ShowcaseContainer from './components/showcase_content/showcase_container.js';

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
    </div>
  );
};

export default Home;