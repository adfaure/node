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
    let git = new Github({cred});

    git.getFile('adfaure', 'notes', 'README.md').then((res) => {

      let document = {
        sections : [
          {
            content: atob(res.content)
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
    this.state.document.sections[idx].content = cm.doc.getValue();
    localStorage.setItem('editorState', JSON.stringify(this.state.document));
  }

  render() {
    return <DocumentEditor doc={this.state.document} saveSection={this.saveSection.bind(this)} />
  }

}

module.exports.Document = Document;
