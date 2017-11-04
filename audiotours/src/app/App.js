import React, { Component } from 'react';

import MainNav from './navigation/nav.js';
import Header from './header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <Header />
      </div>
    );
  }
}

export default App;
