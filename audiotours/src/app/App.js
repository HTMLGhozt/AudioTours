import React, { Component } from 'react';

import MainNav from './navigation/nav.js';
import Header from './header';
import SectionsContainer from './sections/Sections-Container.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <Header />
        <SectionsContainer />
      </div>
    );
  }
}

export default App;
