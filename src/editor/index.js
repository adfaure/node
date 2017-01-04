import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import React from 'react';
import katex from 'katex';
import { markdown } from 'markdown';
import { Plain } from 'slate'
// Import the Slate editor.
import { Editor, Html } from 'slate'
import { MarkHotkeyPlugin, TestPlugin, BlockParserPlugin } from './plugins'

import { javascript } from 'codemirror/mode/javascript/javascript';
import { markdown as cmMarkdownMode } from 'codemirror/mode/markdown/markdown';

import { actionCreateEditorState, actionStateChanges, loadAndInitEditorAction } from './actions'
import codemirror from 'codemirror';

// Import the keycode module.
import keycode from 'keycode'

const mapStateToProps = (state, ownProps) => {

  return {
    editorState: state.editorState
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    loadAndInitEditor: (editorState) => {
      dispatch( loadAndInitEditorAction(editorState) )
    },

    onChange: (editorState) => {
      dispatch( actionStateChanges(editorState) )
    }

  }
}

// Define our app...
class EditorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

    //The editorState is initialized at empty, this is were you want to add your data, load a file for example.
    // this.props.loadAndInitEditor(this.props.editorState);

  }

  componentDidMount() {

    this.codeMirror = codemirror.fromTextArea(this.refs.editorTextArea);

  }

  render() {

    return (
      <div ref="editor" >
        <textarea ref="editorTextArea"/>
      </div>
    );
  }

}

const ReduxEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorComponent)

module.exports.RichEditor = EditorComponent;
