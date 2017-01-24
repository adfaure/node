import React from 'react';

import {DocumentEditor} from './documentEditor';
import Github from './../github';

class Document extends React.Component {

  constructor(props) {
    super(props);
    console.log("Document pops", props)
    let self = this;
    let document = {
      sections : [
        {
          content: ""
        }
      ]
    };
    this.state = {
      document: document,
      file :null
    }
  }

  componentDidMount() {
    var self = this;
    this.props.gitConnection.getFile(this.props.username, this.props.repo, this.props.filename).then((res) => {
      self.setState({file: res});
      let document = {
        sections : [
          {
            content: res.content
          }
        ]
      }
      self.setState({document:document});
    });
  }

  pushSectionBack(section) {
    this.props.document.sections.push(section);
  }

  saveSection(cm, idx) {
    let self = this;
    this.state.document.sections[idx].content = cm.doc.getValue();
    this.props.gitConnection.updateFile(this.props.repo, this.state.file, this.state.document.sections[idx].content).then((res) => {
      self.setState({file: res.content});
    });
  }

  render() {
    return <DocumentEditor doc={this.state.document} saveSection={this.saveSection.bind(this)} /> 
  }

}

Document.propTypes = {
    username: React.PropTypes.string,
    repo: React.PropTypes.string,
    filename: React.PropTypes.string,
    gitConnection: React.PropTypes.object,
}


module.exports.Document = Document;
