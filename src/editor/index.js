import ReactDOM from 'react-dom';
import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    editorState: state.editorState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initState: (editorState) => {
      dispatch( actionCreateEditorState(editorState) )
    },
    onChange: (editorState) => {
      console.log("Change", editorState);
      dispatch( actionStateChanges(editorState) )
    }
  }
}

function actionCreateEditorState(editorState) {
  return {
    type: 'INIT_EDITOR_STATE',
    editorState: editorState
  }
}

function actionStateChanges(editorState) {
  return {
    type: 'EDITOR_STATE_CHANGES',
    editorState: editorState
  }
}

class EditorComponent extends React.Component {
  constructor(props) {
    super(props);

    //The editorState is initializd at empty, this is were you want to add your data, load a file for example.
    this.props.initState(this.props.editorState);

    this.focus = () => this.refs.editor.focus();
    this.logState = () => console.log(this.props.editorState.toJS());

  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.props.editorState}
            onChange={this.props.onChange}
            ref="editor"
          />
        </div>
        <input
          onClick={this.logState}
          style={styles.button}
          type="button"
          value="Log State"
        />
      </div>
    );
  }
}

const styles = {
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    padding: 20,
    width: 600,
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: 80,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
};

const ReduxEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorComponent)

module.exports.RichEditor = ReduxEditor;
