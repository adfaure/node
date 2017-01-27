import React from 'react';

import CodeMirror from 'codemirror';;
import 'codemirror/addon/hint/show-hint.js';
import 'file?name=[name].[ext]!codemirror/lib/codemirror.css'

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/xml/xml';

class EditorComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    //Get the initial string value
    let initialValue = this.props.initialContent || "";
    //Get/init the mode
    let mode = this.props.mode || "markdown";
    //Get/init the doc
    let doc  = this.props.doc || CodeMirror.Doc(initialValue);

    let hintOptions = this.props.hintOptions || {};
    let extraKeys   = this.props.extraKeys || {};

    //Replace default commands by user defined commands
    CodeMirror.commands = Object.assign(CodeMirror.commands, this.props.commands);
    let config = Object.assign({}, {
      value: doc,
      mode: mode,
      extraKeys: extraKeys,
      hintOptions: hintOptions,
    }, this.props.configuration);

    this.codeMirror = CodeMirror(this.refs.editor, config);

    this.codeMirror.setOption("mode", mode);

    //Bind defined properties
    if(this.props.onChange) {
      this.codeMirror.on('change', this.props.onChange);
    }

    if(this.props.cmRef) {
      this.props.cmRef(this.codeMirror);
    }
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.cursor) {
      this.codeMirror.setCursor(nextProps.cursor);
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
    configuration: React.PropTypes.object,
    commands: React.PropTypes.object,
    doc: React.PropTypes.object,
    hintOptions: React.PropTypes.object,
    extraKeys: React.PropTypes.object,
    initialContent: React.PropTypes.string,
    mode: React.PropTypes.string,
    cmRef: React.PropTypes.func,
}

module.exports.CMEditor = EditorComponent;
