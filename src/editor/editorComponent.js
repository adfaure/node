import React from 'react';

import CodeMirror from 'codemirror';;
import 'codemirror/addon/hint/show-hint.js';
import 'file?name=[name].[ext]!codemirror/lib/codemirror.css'

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';

class EditorComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    //Get the initial string value
    let initialValue = this.props.initialContent || "";
    //Get/init the mode
    let mode = this.props.mode || "javascript";
    //Get/init the doc
    let doc  = this.props.doc || CodeMirror.Doc(initialValue);

    let hintOptions = this.props.hintOptions || {};
    let extraKeys   = this.props.extraKeys || {};

    //Replace default commands by user defined commands
    CodeMirror.commands = Object.assign(CodeMirror.commands, this.props.commands);
    
    this.codeMirror = CodeMirror(this.refs.editor, {
      value: doc,
      mode: mode,
      extraKeys: extraKeys,
      hintOptions: hintOptions,
    });

    this.codeMirror.setOption("mode", mode);

    //Bind defined properties
    if(this.props.onChange) {
      this.codeMirror.on('change', this.props.onChange);
    }
  }

  render() {
    return (
      <div ref="editor"></div>
    );
  }

}

EditorComponent.propTypes = { 
    onChange: React.PropTypes.func,
    commands: React.PropTypes.object,
    doc: React.PropTypes.object,
    hintOptions: React.PropTypes.object,
    extraKeys: React.PropTypes.object,
    initialContent: React.PropTypes.string,
    mode: React.PropTypes.string,
}

module.exports.CMEditor = EditorComponent;
