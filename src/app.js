var index = require('file?name=[name].[ext]!../assets/index.html')
var index = require('file?name=[name].[ext]!../assets/styles.css')
var index = require('file?name=[name].[ext]!katex/dist/katex.min.css')

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import { Raw } from 'slate'

import { RichEditor } from './editor';
import { localStoragePersistMdw } from './editor/middlewares';
// Create our initial state...
const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'A line of text in a paragraph.'
        }
      ]
    }
  ]
}, { terse: true })

let store = createStore(function reducer(state = { editorState: initialState }, action) {
  console.log("state", state);
  console.log("action", action);
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
}, applyMiddleware(localStoragePersistMdw, thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <RichEditor />
  </Provider>,
  document.getElementById('app')
);
