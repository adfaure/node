import React from 'react';
import CodeMirror from 'codemirror';

import { CMEditor } from './editorComponent';

var comp = ['completion']

function synonyms(cm, option) {
  var cursor = cm.getCursor(), line = cm.getLine(cursor.line)
  var start = cursor.ch, end = cursor.ch;
  while (start && /\w/.test(line.charAt(start - 1))) --start
  while (end < line.length && /\w/.test(line.charAt(end))) ++end
  var word = line.slice(start, end);
  
  var words = cm.doc.getValue().split(/\r?\n/)
        .reduce((acc, value) => { return acc.concat(value.match(/\S+/g)) }, [])
        .filter((val) => val != null)
        .filter((val) => val.startsWith(word))
        .filter((val) => val != word)
        .filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  });

  return {
    list: words || [],
    from: CodeMirror.Pos(cursor.line, start),
    to: CodeMirror.Pos(cursor.line, end)
  };
}

class EditorComponent extends React.Component {

  constructor(props) {
    super(props);
    //Load the content from the localstorage 
    this.doc = CodeMirror.Doc(localStorage.getItem('editorState'), 'javascript');
  }

  onChange(editor) {
    //Push the content into the localstorage
    localStorage.setItem('editorState', editor.doc.getValue());
  }

  render() {
    return (
      <CMEditor mode='javascript' onChange={this.onChange}
        extraKeys={{"Ctrl-Space": "autocomplete"}}
        hintOptions={{hint: synonyms , completeSingle: false}}
        doc={this.doc}
      />
    );
  }

}

module.exports.LocalStorageEditor = EditorComponent;
