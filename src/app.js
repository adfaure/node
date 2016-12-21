var index = require('file?name=[name].[ext]!../assets/index.html')
var index = require('file?name=[name].[ext]!../assets/styles.css')
var index = require('file?name=[name].[ext]!katex/dist/katex.min.css')

import { EditorState } from 'draft-js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { RichEditor } from './editor';

let store = createStore(function reducer(state = { editorState: EditorState.createEmpty() }, action) {
  switch (action.type) {
    case 'INIT_EDITOR_STATE':
      console.log("state", state);
      console.log("action", action);
      return Object.assign({}, state,  { editorState: action.editorState } )
    case 'EDITOR_STATE_CHANGES':
      console.log("state", state);
      console.log("action", action);
      return Object.assign({}, state,  { editorState: action.editorState } )

    default:
      return state;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <RichEditor />
  </Provider>,
  document.getElementById('app')
);
