require('file?name=[name].[ext]!../assets/index.html')
require('file?name=[name].[ext]!../assets/styles.css')
require('file?name=[name].[ext]!codemirror/addon/hint/show-hint.css')


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import { App } from './coreApp';

import Github from './github';

// let git = new Github({ username: 'adfaure', token: '481514a0708917a6387ed4bbf15d1970c02d8f24'});
// git.getRepo('adfaure', 'node').then((res) => {
//   console.log(res)
//   console.log(atob(res.content));
// });

let store = createStore(function reducer(state = { credentials: null }, action) {
  switch (action.type) {
    case 'SET_CREDENTIALS':
      return Object.assign({}, state, { credentials: action.cred })
    default:
      return state;
  }
}, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
