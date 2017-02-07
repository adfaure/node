import React from 'react';
import { GitRemoteDocumentEditor } from './documentContainer'
import TreeList from './treeList'
import FileEditor from './fileEditor'
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



class Editor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showDialNewFile: false,
      files: [],
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
      self.setState({files: self.state.files});
      return file;
    });

  }

  saveFile(cm, file) {
    let self = this;
    let currentFile = this.state.files.find(elem => elem.name == file.name);
    let content = cm.getValue();

    return this.props.git.updateFile(this.props.project, currentFile.remoteFile, content).then((res) => {
      Object.assign(currentFile.remoteFile, res.content, {content: content});
      self.setState({files: this.state.files})
      return cm;
    });

  }

  setCurrentFile(file) {
    /* Triggered when the user select the file to be the current file */
    let currentFile = this.state.files.find(elem => elem.name == file.name);

    // this.cm.setValue(currentFile.remoteFile.content)
    this.setState({ currentFile: currentFile });

  }

  editFile(file) {
    /* Triggered when the user wants to edit the file*/
  }

  render() {
    let self = this;
    let currentFilename = "";
    if(this.state.currentFile) {
      currentFilename = this.state.currentFile.name;
    }

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
                filename={ currentFilename }
                onClickEditToggle={() => { this.editFile(this.state.currentFile) }} />

              <div className="Editor" >
                <FileEditor
                  saveFile={(cm, file) => this.saveFile(cm,file)}
                  file={this.state.currentFile} />
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
