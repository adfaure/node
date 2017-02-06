import React from 'react';

import { Document } from './../document';
import Github from './../github';
import MarkdownIt from 'markdown-it';

import ContentEdit from 'material-ui/svg-icons/editor/mode-edit';
import SaveIcon from 'material-ui/svg-icons/content/save';
import UndoIcon from 'material-ui/svg-icons/content/undo';
import IconButton from 'material-ui/IconButton';
import ActionClose from 'material-ui/svg-icons/navigation/close';

import Paper from 'material-ui/Paper'

import SHA256  from "crypto-js/sha256";

class GitRemoteDocumentEditor extends React.Component {

  constructor(props) {
    super(props);
    this.md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true
    });
    /**
    * hash: the hash of the last saved content
    */
    this.state = {
      hash: SHA256(""),
      currentContent: "",
      file :null,
      editMode:false,
      cursor: null
    }
  }

  onDocumentChange(cm, event) {
    this.state.currentContent = cm.getValue();
    this.setState({
      currentContent: this.state.currentContent,
      cursor: null
    });
  }

  componentDidMount() {
    var self = this;
    this.props.gitConnection.getFile(this.props.username, this.props.repo, this.props.filename).then((res) => {

      self.setState({
        file: res,
        initialContent: res.content,
        currentContent: res.content,
        hash: SHA256(res.content)
      });

    });
  }

  saveFile(value) {
    let self = this;
    this.props.gitConnection.updateFile(this.props.repo, this.state.file, value).then((res) => {
      self.setState({
        initialContent: value,
        currentContent: value,
        file: res.content,
        hash: SHA256(this.state.currentContent)
      });
    });
  }

  resetFile() {
    if(this.cm) {
      this.cm.setValue(this.state.initialContent);
    }
  }

  saveCallBack(cm, idx) {
    let self = this;

    let value  = cm.doc.getValue();
    let cursor = cm.getCursor();

    this.saveFile(value)
  }

  toogleEdit(save) {
    let self = this;
    if(this.state.editMode == true) {
      //This is happening when the ditor mode is switched of.
      let currentSha = SHA256(this.state.currentContent);
      if(save && this.state.hash.toString() != currentSha.toString()) {
        let value  = this.state.currentContent;
        this.saveFile(value);
      } else {
        self.setState({
          currentContent: this.state.initialContent
        });
      }
    }
    this.setState({editMode: !this.state.editMode})
  }


  render() {

    let iconStyle = {
      'zIndex': "99",
      'height' : '1.618rem',
      'width' : '1.618rem',
    };

    let buttonStyle = {
      'height' : 'auto',
      'width' : 'auto',
      'paddingBottom': '1.618px',
      'paddingTop': '1.618px',
    };

    let doc = (<Document  onChange={ (cm, event) => { this.onDocumentChange(cm, event) }}
                          initialContent={this.state.initialContent}
                          key={this.props.filename}
                          cmRef={(cm) => { this.cm = cm; }}
                          save={this.saveCallBack.bind(this)}
                          cursor={this.state.cursor}/>);

    let currentSha = SHA256(this.state.currentContent);
    let changed    = this.state.hash.toString() != currentSha.toString();

    if(this.state.editMode && doc) {
      return (<div className="Editor">
        <div className="Editor-toolbar">

          <div className="row">

            <div className="col-xs-offset-9 col-xs-3">
              <div className="box">
                <IconButton className="float-right" ooltip="Close editor" onClick={() =>  { this.resetFile(); this.toogleEdit(); }} style={buttonStyle} iconStyle={iconStyle}>
                  <ActionClose />
                </IconButton>
                <IconButton className="float-right" disabled={!changed} tooltip="Save file and close editor"  onClick={() =>  { this.saveFile(this.cm.getValue()) }} style={buttonStyle} iconStyle={iconStyle}>
                  <SaveIcon />
                </IconButton>
                <IconButton className="float-right" disabled={!changed}  tooltip="Reset file" onClick={() =>  { this.resetFile() }}  style={buttonStyle} iconStyle={iconStyle}>
                  <UndoIcon />
                </IconButton>
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <div className="Editor-area">
                <Paper zDepth={changed? 5 : 0}>
                  {doc}
                </Paper>
            </div>
          </div>

          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <Paper zDepth={0}>
              <div className="markdown">
                <div dangerouslySetInnerHTML={{__html: this.md.render(this.state.currentContent)}} ></div>
              </div>
            </Paper>
          </div>

        </div>

      </div>)
    } else {
        return (<div> {/* In case of I need a container-fluid*/}
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <IconButton tooltip="Edit file" onClick={() =>  { this.toogleEdit() } } style={{ 'zIndex': "1", float:"right"}}>
                          <ContentEdit />
                        </IconButton>
                        <Paper zDepth={1}>
                          <div className="markdown">
                            <div dangerouslySetInnerHTML={{__html: this.md.render(this.state.currentContent)}} ></div>
                          </div>
                        </Paper>
                    </div>
                  </div>
                </div>)
    }
  }
}

GitRemoteDocumentEditor.propTypes = {
    username: React.PropTypes.string,
    repo: React.PropTypes.string,
    filename: React.PropTypes.string,
    gitConnection: React.PropTypes.object,
}


module.exports.GitRemoteDocumentEditor = GitRemoteDocumentEditor;
