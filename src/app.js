require('file?name=[name].[ext]!../assets/index.html')
require('file?name=[name].[ext]!../assets/styles.css')
require('file?name=[name].[ext]!codemirror/addon/hint/show-hint.css')


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import {Document} from './document'



ReactDOM.render(
  <Document />,
  document.getElementById('app')
);
