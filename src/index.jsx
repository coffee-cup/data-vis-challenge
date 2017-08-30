import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'configureStore.js';
import AppView from 'views/AppView/AppView.jsx';
import 'styles.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router><AppView /></Router>
  </Provider>,
  document.getElementById('app')
);
