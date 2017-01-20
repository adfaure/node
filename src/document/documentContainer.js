import React from 'react';

import {DocumentEditor} from './documentEditor';
import Github from './../github';

let initialDocument = {
  sections : [
    {
      content: ""
    }
  ]
};

class Document extends React.Component {
  
  constructor(props) {
    super(props);
    let self = this;
    let document = initialDocument;

    this.state = {
      document: document
    }

    let cred = JSON.parse(localStorage.getItem('credentials'));
    this.git = new Github({cred});

    this.git.getFile('adfaure', 'notes', 'README.md').then((res) => {
      self.file = res;
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
    localStorage.setItem('editorState', JSON.stringify(this.state.document));
    this.git.updateFile('notes', this.file, this.state.document.sections[idx].content).then((res) => {
      console.log(res);
      self.file = res.content;
    });
  }

  render() {
    return <DocumentEditor doc={this.state.document} saveSection={this.saveSection.bind(this)} />
  }

}

module.exports.Document = Document;
