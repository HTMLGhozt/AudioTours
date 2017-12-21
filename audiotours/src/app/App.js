import React from 'react';
import { Route, Switch, } from 'react-router-dom';

import { MainNav, Footer, RegisterModal, LoginModal, } from './components';
import { Home, NotFound, } from './Pages';

const App = () => (
  <div className="App">
    <MainNav />
    <LoginModal />
    <RegisterModal />
    <Switch>
      <Route path="/" component={ Home } exact />
      <Route component={ NotFound } />
    </Switch>
    <Footer />
  </div>
);

export default App;