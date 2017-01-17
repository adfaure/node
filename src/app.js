require('file?name=[name].[ext]!../assets/index.html')
require('file?name=[name].[ext]!../assets/styles.css')
require('file?name=[name].[ext]!codemirror/addon/hint/show-hint.css')


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import { App } from './coreApp';


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

















const popsicle = require('popsicle')
// popsicle.get({
//   url: "https://api.github.com/repos/adfaure/node",
//   headers: {
//     "Authorization": " Basic " + btoa("adfaure:--pat-token--")
//   }
// }).then((res) => {
//   console.log(res)
//   if(res.code != 200) {
//   }
// })
