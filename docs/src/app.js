var index = require('file?name=[name].[ext]!../assets/index.html')
var index = require('file?name=[name].[ext]!../assets/styles.css')

import ReactDOM from 'react-dom';

import React from 'react';
import { RichEditor } from './editor'

ReactDOM.render(
  <RichEditor />,
  document.getElementById('app')
);
