import React from 'react';
import { Route, Switch, } from 'react-router-dom';

import { MainNav, Footer, } from './components'
import { Home, NotFound, } from './Pages';

const App = () => (
  <div className="App">
    <MainNav />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;