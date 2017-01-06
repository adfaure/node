import React from 'react';

import CodeMirror from 'codemirror';
import javascript from 'codemirror/mode/javascript/javascript'

class EditorComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  
  // componentWillReceiveProps() {
  //   this.codeMirror.
  // },

  componentDidMount() {
    //Get the initial string value
    let initialValue = this.props.initialContent || "";
    //Get/init the mode
    let mode = this.props.mode || "javascript";

    //Get/init the doc
    let doc  = this.props.doc || CodeMirror.Doc(initialValue);

    //Create and save a CodeMirror editor
    this.codeMirror = CodeMirror(this.refs.editor, {
      value: doc,
      mode:  mode
    });

    // this.codeMirror.setOption("mode", mode);

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
    doc: React.PropTypes.object,
    initialContent: React.PropTypes.string,
    mode: React.PropTypes.string,
}

module.exports.CMEditor = EditorComponent;
