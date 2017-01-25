import React from 'react';

import {DocumentEditor} from './documentEditor';
import Github from './../github';

var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = '#hello, markdown!',
    html      = converter.makeHtml(text);

class Document extends React.Component {

  constructor(props) {
    super(props);
    let self = this;
    let document = {
      content: ""
    };
    this.state = {
      document: document,
      file :null
    }
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

  shouldComponentUpdate(nextProps, nextState) {
    return document === document;
  }

  render() {
    return <DocumentEditor doc={this.state.document} save={this.save.bind(this)} cursor={this.cursor}/> 
  }

}

Document.propTypes = {
    username: React.PropTypes.string,
    repo: React.PropTypes.string,
    filename: React.PropTypes.string,
    gitConnection: React.PropTypes.object,
}


module.exports.Document = Document;
