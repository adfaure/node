require('file?name=[name].[ext]!../assets/index.html')
require('file?name=[name].[ext]!../assets/styles.css')
require('file?name=[name].[ext]!../assets/favicon.ico')
require('file?name=[name].[ext]!codemirror/addon/hint/show-hint.css')


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import { App } from './coreApp';

import Github from './github';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

let store = createStore(function reducer(state = { credentials: null, user: null, project: null }, action) {
  switch (action.type) {
    case 'SET_CREDENTIALS':
      return Object.assign({}, state, { credentials: action.cred })
    case 'SET_USER':
      return Object.assign({}, state, { user: action.user })
    case 'SET_PROJECT':
      return Object.assign({}, state, { project: action.project })
    default:
      return state;
  }
}, applyMiddleware(thunkMiddleware));


const ReactApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(
  <Provider store={store}>
    <ReactApp />
  </Provider>,
  document.getElementById('app')
);
