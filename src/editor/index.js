import ReactDOM from 'react-dom';
import React from 'react';

// Import the Slate editor.
import codemirror from 'codemirror';

// Define our app...
class EditorComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
    let initialContent = this.props.initialContent || "";
    this.config = {
      value: initialContent
    }
  }

  componentDidMount() {
    this.codeMirror = codemirror.fromTextArea(this.refs.editorTextArea, this.config);
    if(this.props.onChange) {
      this.codeMirror.on('change', this.props.onChange);
    }
  }

  render() {
    return (
      <div ref="editor" >
        <textarea ref="editorTextArea"/>
      </div>
    );
  }

}


EditorComponent.propTypes = {
    onChange: React.PropTypes.func,
    initialContent: React.PropTypes.string
}

module.exports.CMEditor = EditorComponent;
