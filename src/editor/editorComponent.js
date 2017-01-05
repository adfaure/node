import React from 'react';
import CodeMirror from 'codemirror';

// Define our app...
class EditorComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Get the initial string value
    let initialValue = this.props.initialContent || "";
    //Get/init the mode
    let mode = this.props.mode || "text/plain";
    
    //Get/init the doc
    let doc    = this.props.doc || CodeMirror.Doc(initialValue);
    
    //Create and save a CodeMirror editor
    this.codeMirror = CodeMirror(this.refs.editor, {
      value: doc,
      mode: mode
    });

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
