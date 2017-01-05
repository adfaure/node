var index = require('file?name=[name].[ext]!../assets/index.html')
var index = require('file?name=[name].[ext]!../assets/styles.css')
var index = require('file?name=[name].[ext]!katex/dist/katex.min.css')

var index = require('file?name=[name].[ext]!codemirror/lib/codemirror.css')

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import codemirror from 'codemirror';
import { LocalStorageEditor } from './editor';

let store = createStore(function reducer(state = {}, action) {
  switch (action.type) {
    case 'INIT_EDITOR_STATE':
      return Object.assign({}, state, { editorState: action.editorState })
    case 'EDITOR_STATE_CHANGES':
      return Object.assign({}, state, { editorState: action.editorState })
    case 'PUSH_CONTENT_STATE':
      return Object.assign({}, state, { editorState: action.contentState })
    default:
      return state;
  }
}, applyMiddleware(thunkMiddleware));


ReactDOM.render(

  <Provider store={store}>
    <LocalStorageEditor />
  </Provider>,

  document.getElementById('app')
);
