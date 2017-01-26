import React from 'react';

import { Document } from './../document';
import Github from './../github';
import MarkdownIt from 'markdown-it';

import Paper from 'material-ui/Paper';

class GitRemoteDocumentEditor extends React.Component {

  constructor(props) {
    super(props);
    let self = this;
    console.log(MarkdownIt)
    this.md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true
    });

    let document = {
      content: ""
    };
    this.state = {
      document: document,
      currentContent: document.content,
      file :null
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
      self.setState({document: document, file: res});
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
    return (<div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="box">
                      <Document onChange={ (cm) => { this.onDocumentChange(cm) }}
                                doc={this.state.document}
                                save={this.save.bind(this)}
                                cursor={this.cursor}/>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="box">
                      <div className="markdown">
                        <div dangerouslySetInnerHTML={{__html: this.md.render(this.state.currentContent)}} />
                      </div>
                  </div>
                </div>
            </div>)
  }

}

GitRemoteDocumentEditor.propTypes = {
    username: React.PropTypes.string,
    repo: React.PropTypes.string,
    filename: React.PropTypes.string,
    gitConnection: React.PropTypes.object,
}


module.exports.GitRemoteDocumentEditor = GitRemoteDocumentEditor;
