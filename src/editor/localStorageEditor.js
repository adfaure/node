import React from 'react';
import codemirror from 'codemirror';

import xml from 'codemirror/mode/xml/xml'

import { CMEditor } from './editorComponent';

// Define our app...
class EditorComponent extends React.Component {

  constructor(props) {
    super(props);
    this.doc = codemirror.Doc(localStorage.getItem('editorState'), 'xml');
  }

  onChange(editor) {
    localStorage.setItem('editorState', editor.doc.getValue());
  }

  render() {
    return (
      <CMEditor doc={this.doc} onChange={this.onChange}/>
    );
  }

}

module.exports.LocalStorageEditor = EditorComponent;
