import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { createStore, createHistory } from './config';

const store = createStore();
const history = createHistory(store);


ReactDOM.render(
  <Root store={ store } history={ history } />
, document.getElementById('app'));
