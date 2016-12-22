var index = require('file?name=[name].[ext]!../assets/index.html')
var index = require('file?name=[name].[ext]!../assets/styles.css')
var index = require('file?name=[name].[ext]!katex/dist/katex.min.css')

import { EditorState } from 'draft-js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'


import { RichEditor } from './editor';
import { localStoragePersistMdw } from './editor/middlewares';

let store = createStore(function reducer(state = { editorState: EditorState.createEmpty() }, action) {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case 'INIT_EDITOR_STATE':
      return Object.assign({}, state,  { editorState: action.editorState } )
    case 'EDITOR_STATE_CHANGES':
      return Object.assign({}, state,  { editorState: action.editorState } )
    case 'PUSH_CONTENT_STATE':
      return Object.assign({}, state,  { editorState: EditorState.createWithContent(action.contentState) })
    default:
      return state;
  }
}, applyMiddleware(localStoragePersistMdw, thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <RichEditor />
  </Provider>,
  document.getElementById('app')
);
