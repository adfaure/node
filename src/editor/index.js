import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import React from 'react';

// Import the Slate editor.
import { Editor } from 'slate'
import { MarkHotkeyPlugin, TestPlugin, BlockParserPlugin } from './plugins'

import { actionCreateEditorState, actionStateChanges, loadAndInitEditorAction } from './actions'

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

// Use the much clearer key names instead of key codes!
const plugins = [
  MarkHotkeyPlugin({ key: 'b', type: 'bold' }),
  MarkHotkeyPlugin({ key: '`', type: 'code' }),
  MarkHotkeyPlugin({ key: 'i', type: 'italic' }),
  MarkHotkeyPlugin({ key: 'd', type: 'strikethrough' }),
  MarkHotkeyPlugin({ key: 'u', type: 'underline' }),
  // TestPlugin(),
  BlockParserPlugin()
]


// Define our app...
class EditorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schema: {
        marks: {
          bold: props => <strong>{props.children}</strong>,
          code: props => <code>{props.children}</code>,
          italic: props => <em>{props.children}</em>,
          strikethrough: props => <del>{props.children}</del>,
          underline: props => <u>{props.children}</u>,
        },
        nodes : {
          used: props => <div><u>{props.children}</u></div>,
        }
      }
    }

    //The editorState is initialized at empty, this is were you want to add your data, load a file for example.
    console.log("Load", this.props.editorState);
    this.props.loadAndInitEditor(this.props.editorState);

    this.focus = () => this.refs.editor.focus();
    this.logState = () => console.log(this.props.editorState.toJS());

  }

  render() {
    return (
      <Editor
        plugins={plugins}
        schema={this.state.schema}
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
