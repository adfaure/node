import React from 'react';

import Github from './../github';
import MarkdownIt from 'markdown-it';
import SHA256  from "crypto-js/sha256";

import IconButton from 'material-ui/IconButton';

import Paper from 'material-ui/Paper'


import { CMEditor } from './../codeMirror';


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

  saveFile(file) {
    let self = this;
    var content = this.cm.getValue();
    console.log(file);
    this.props.gitConnection.updateFile(this.props.repo, this.state.file, content).then((res) => {
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
    if(this.props.editMode == true) {
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
    this.setState({editMode: !this.props.editMode})
  }

  render() {
    console.log("render")
    let editor =  <CMEditor initialContent={this.state.initialContent}
                            configuration={ {lineNumbers:true, viewportMargin:Infinity} }
                            extraKeys={
                                { 'Ctrl-S': (cm) => { this.saveFile(cm, this.state.currentFile) } }
                            }
                            cursor={this.state.cursor}
                            onChange={ (cm, event) => { this.onDocumentChange(cm, event) } }
                            cmRef={(cm) => { this.cm = cm; }}
                            mode="markdown" />

    let currentSha = SHA256(this.state.currentContent);
    let changed    = this.state.hash.toString() != currentSha.toString();

    if(this.props.editMode) {
      return (<div className="Editor" >
      <div className="row">

        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7  editor-left">
          <div className="Editor-area">
            <Paper zDepth={changed? 5 : 0}>
              {editor}
            </Paper>
          </div>
        </div>

        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5  editor-right">
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
  editMode: React.PropTypes.bool.isRequired,
}


module.exports.GitRemoteDocumentEditor = GitRemoteDocumentEditor;
