import React from 'react';

import { Document } from './../document';
import Github from './../github';
import MarkdownIt from 'markdown-it';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit';
import SaveIcon from 'material-ui/svg-icons/content/save';

class GitRemoteDocumentEditor extends React.Component {

  constructor(props) {
    super(props);
    let self = this;
    this.md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true
    });

    this.state = {
      document: {
        content: ""
      },
      currentContent: "",
      file :null,
      editMode:false
    }

  }

  onDocumentChange(cm) {
    this.state.currentContent = cm.getValue();
    this.setState({currentContent: this.state.currentContent});
  }

  componentDidMount() {
    var self = this;
    this.props.gitConnection.getFile(this.props.username, this.props.repo, this.props.filename).then((res) => {
      let document = {
        content: res.content
      };
      self.setState({document: document, file: res, currentContent: res.content});
    });
  }

  pushSectionBack(section) {
    this.props.document.sections.push(section);
  }

  save(cm, idx) {
    let self = this;
    this.state.document.content = cm.doc.getValue();
    this.cursor = cm.doc.getCursor();
    this.props.gitConnection.updateFile(this.props.repo, this.state.file, this.state.document.content).then((res) => {
      self.setState({file: res.content});
    });
  }

  render() {
    let doc = <Document onChange={ (cm) => { this.onDocumentChange(cm) }}
                          doc={this.state.document}
                          key={this.props.filename}
                          save={this.save.bind(this)}
                          cursor={this.cursor}/>;
    if(this.state.editMode) {
      return (<div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <div className="box">
                        {this.state.editMode && doc}
                      </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="box">
                        <FloatingActionButton zDepth={2} onClick={() =>  { this.setState({editMode: !this.state.editMode})} } mini={true}  style={{ 'zIndex': "99", float:"right"}}>
                          <SaveIcon />
                        </FloatingActionButton>
                        <div className="markdown">
                          <div dangerouslySetInnerHTML={{__html: this.md.render(this.state.currentContent)}} ></div>
                        </div>
                    </div>
                  </div>
              </div>)
    } else {
        return (<div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="box">
                        <FloatingActionButton zDepth={2} onClick={() =>  { this.setState({editMode: !this.state.editMode})} } mini={true} style={{ 'zIndex': "99", float:"right"}}>
                          <ContentEdit />
                        </FloatingActionButton>
                        <div className="markdown">
                          <div dangerouslySetInnerHTML={{__html: this.md.render(this.state.currentContent)}} ></div>
                        </div>
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
