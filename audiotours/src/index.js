import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, } from 'redux';
import { Provider, } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router } from 'react-router-dom';

// import reducers from './reducers';

import './index.css';
import App from './app/App';

const reducers = () => {}; // temp reducer to get it working.

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root')
);
