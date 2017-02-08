import React from 'react';
import { GitRemoteDocumentEditor } from './documentContainer'
import TreeList from './treeList'
import MarkdownRender from './markdownRender'
import EditorToolbar from './toolbar'

import {List, ListItem} from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import ActionClose from 'material-ui/svg-icons/navigation/close';
import SaveIcon from 'material-ui/svg-icons/content/save';
import UndoIcon from 'material-ui/svg-icons/content/undo';
import Paper from 'material-ui/Paper'

import SHA256  from "crypto-js/sha256";

import { CMEditor } from './../codeMirror';

class Editor extends React.Component {

  constructor(props) {
    super(props);

    this.updateDelai   = 100;
    this.timeoutId     = null;

    this.state = {
      showDialNewFile: false,
      files: [],
      preview: "",
      currentFile: null,
      editMode: false,
      newNoteName: ""
    }

  }

  componentDidMount() {
    let self = this;

    this.props.git.getPath(this.props.credentials.username, this.props.project, this.props.basePath).then((res) => {
      var files = res.map((remoteFile) => {
        return  {
          remoteFile,
          name: remoteFile.name,
          open: false,
          editMode: false,
        };
      });
      self.setState({files: files});
    });

  }

  createNewNote() {
    let self = this;
    let filename = this.state.newNoteName;
    this.props.git.createFile(this.props.project, this.props.basePath+"/"+filename, "", "Create " + filename ).then( (res) => {
      let remoteFile = res.content;
      self.state.files.push({ name: res.content.name, open: false, remoteFile });
      self.setState({files: self.state.files});
    });
  }

  closeDialog()  {
    this.setState({showDialNewFile: false, newNoteName: ""})
  };

  closeFile(elem) {
    elem.open = false;
    elem.editMode = false;
    delete elem.remoteFile.content;

    if(this.state.currentFile && elem.name == this.state.currentFile.name) {
      // If the file to close is the current file.
      this.cm.setValue("");
      this.setState({files: this.state.files, currentFile: null})
    } else {
      this.setState({files: this.state.files})
    }
  }

  loadFile(file) {
    let self = this;

    return this.props.git.getFile(this.props.credentials.username, this.props.project, file.remoteFile.path ).then((res) => {
      Object.assign(file.remoteFile, res);
      file.open = true;
      file.content = res.content;
      self.setState({files: self.state.files});
      return file;
    });

  }

  saveFile(cm, file) {
    let self = this;
    let currentFile = this.state.files.find(elem => elem.name == file.name);
    let content = cm.getValue();

    this.props.git.updateFile(this.props.project, currentFile.remoteFile, content).then((res) => {
      Object.assign(currentFile.remoteFile, res.content, {content: content});
      self.setState({files: this.state.files})
    });
  }

  hasFileChanged() {
     if(!this.state.currentFile || !this.cm) return false;

     let currentSha = SHA256(this.cm.getValue());
     let fileSha    = SHA256(this.state.currentFile.remoteFile.content);

     return fileSha.toString() != currentSha.toString();
   }

  /* Triggered when the user select the file to be the current file */
  setCurrentFile(file) {
    /*
      maybe all the job done here with codeMirror could be delegate to the editFile function,
      so we won't have to do extrat work when the user just wants to see files
    */
    if(this.state.currentFile) {
      this.state.currentFile.content = this.cm.getValue();
      this.state.currentFile.history = this.cm.getHistory();
    }

    let currentFile = this.state.files.find(elem => elem.name == file.name);

    this.cm.setValue(currentFile.content);
    if(currentFile.history) {
      this.cm.setHistory(currentFile.history);
    } else {
      this.cm.clearHistory();
    }

    this.setState({ currentFile: currentFile });
  }

  /* Triggered when the user wants to edit the file*/
  editFile(file) {
    file.editMode = !file.editMode,
    this.setState({ files: this.state.files, currentFile: this.state.currentFile });
  }

  componentDidUpdate() {
    if(this.cm) this.cm.refresh();
  }

  /**
   * Pretty messed up function, but it still imrpoves the editor perf
   */
  onDocumentChange(cm, event) {
    let self = this;

    if(this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    if(event.origin == "setValue") {
      self.setState({ preview:  cm.getValue() });
      return;
    }

    this.timeoutId = setTimeout(
      function() {
          self.timeoutId = null;
          self.setState({ preview:  cm.getValue() });
      }, this.updateDelai )
  }

  hideEditor() {
    return !(this.state.currentFile && this.state.currentFile.editMode);
  }

  render() {
    let self = this;

    return (
      <div className="container-fluid">
        {/* https://github.com/twbs/bootstrap/issues/8959 */}
        <div className="row" >

          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <TreeList
              onClickAddNote={() => { this.setState({showDialNewFile: true}) }}
              onClickOpenedItem={(e) => { self.setCurrentFile(e) }}
              onClickCloseOpenItem={ (e) => { self.closeFile(e); }}
              onAvailableItem={(e) => { self.loadFile(e).then((file) => { self.setCurrentFile(file) }) }}
              files={this.state.files} />
          </div>

          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">

              <EditorToolbar
                onClickEditToggle={() => { this.editFile(this.state.currentFile) }} />

              <div className="Editor" >
                <div className="row">
                  {/*
                    We need to have a CMEditor in everycase to obtain a ref on the codeMirror instance.
                    I dont know yet if there is a better solution.
                  */}
                  <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 editor-left" hidden={this.hideEditor()}>
                    <div className="Editor-area">
                      <Paper  zDepth={this.hasFileChanged() ? 5 : 0}>
                        <CMEditor configuration={ {lineNumbers:true, viewportMargin:Infinity} }
                                  extraKeys={
                                      { 'Ctrl-S': (cm) => { this.saveFile(cm, this.state.currentFile) } }
                                  }
                                  cmRef={(cm) => { this.cm = cm; }}
                                  onChange={ (cm, event) => { this.onDocumentChange(cm, event) } }
                                  mode="markdown" />
                      </Paper>
                    </div>
                  </div>

                  <div className="col-xs editor-right">
                    <Paper zDepth={this.hasFileChanged() ? 5 : 0}>
                      <MarkdownRender content={this.state.preview} />
                    </Paper>
                  </div>

                </div>
              </div>
          </div>

        </div>

        <Dialog title="Enter a name for the new note"
          actions={[
            <FlatButton
              label="Cancel"
              primary={true}
              onTouchTap={() => this.closeDialog()}
              />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onTouchTap={() => {this.createNewNote(), this.closeDialog()}}
              />,
          ]}
          modal={false}
          open={this.state.showDialNewFile}>
          <TextField hintText="Name of the new note" value={this.state.newNoteName}  onChange={(e,value) => { this.setState({newNoteName:value})} }/>
        </Dialog>
      </div>
    );
  }

}

export default Editor
