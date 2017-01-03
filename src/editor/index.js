import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import React from 'react';
import katex from 'katex';
import { markdown } from 'markdown';
import { Plain } from 'slate'
// Import the Slate editor.
import { Editor, Html } from 'slate'
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
      },
      display : true,
    }

    //The editorState is initialized at empty, this is were you want to add your data, load a file for example.
    this.props.loadAndInitEditor(this.props.editorState);

    this.focus = () => { this.refs.editor.focus(); this.setState({display : true}); }
    this.logState = () => console.log(this.props.editorState.toJS()) ;
    this.getDisplay = () => {return this.display};
  

  }

  render() {
    return (
    <div>
      <div className={ this.state.display ? "displayBlock" : "displayNone" }>
        <Editor
          onBlur={ () => { this.setState({display : false}); } }
          className="RichEditor-editor"
          plugins={plugins}
          schema={this.state.schema}
          state={this.props.editorState}
          onChange={this.props.onChange}
          ref="editor"
          />
      </div>
      <div className={ !this.state.display ? "displayBlock" : "displayNone" } onClick={this.focus}>
        <div className="RichEditor-editor" dangerouslySetInnerHTML={ { __html : katex.renderToString(Plain.serialize(this.props.editorState)) } } />
      </div>
    </div>
    );
  }



}

const ReduxEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorComponent)

module.exports.RichEditor = ReduxEditor;
