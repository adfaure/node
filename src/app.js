var index = require('file?name=[name].[ext]!../assets/index.html')
var index = require('file?name=[name].[ext]!../assets/styles.css')
var index = require('file?name=[name].[ext]!katex/dist/katex.min.css')

import React from 'react';
import ReactDOM from 'react-dom';
import katex from 'katex';

import { RichEditor } from './editor';


ReactDOM.render(
  <RichEditor />,
  document.getElementById('app')
);

katex.render("c = \\pm\\sqrt{a^2 + b^2}", document.getElementById('katex'));
