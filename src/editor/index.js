import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import React from 'react';

// Import the Slate editor.
import { Editor } from 'slate'

import { actionCreateEditorState, actionStateChanges, loadAndInitEditorAction } from './actions'

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

    //The editorState is initializd at empty, this is were you want to add your data, load a file for example.
    console.log("Load", this.props.editorState);
    this.props.loadAndInitEditor(this.props.editorState);

    this.focus = () => this.refs.editor.focus();
    this.logState = () => console.log(this.props.editorState.toJS());
  }

  render() {
    return (
      <Editor
        state={this.props.editorState}
        onChange={this.props.onChange}
        ref="editor"
        />
    );
  }

}

const ReduxEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorComponent)

module.exports.RichEditor = ReduxEditor;
