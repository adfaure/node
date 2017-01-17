import React from 'react';

import {DocumentEditor} from './documentEditor';


let initialDocument = {
  sections : [
    {
      content: ""
    }
  ]
}

class Document extends React.Component {

  constructor(props) {
    super(props);

    let document = JSON.parse(localStorage.getItem('editorState')) || initialDocument;
    this.state = {
      document: document
    }

  }

  pushSectionBack(section) {
    this.props.document.sections.push(section);
  }

  saveSection(cm, idx) {
    this.state.document.sections[idx].content = cm.doc.getValue();
    this.setState({
      document: this.state.document
    });
    localStorage.setItem('editorState', JSON.stringify(this.state.document));
  }

  render() {
    return <DocumentEditor doc={this.state.document} saveSection={this.saveSection.bind(this)}/>
  }

}

module.exports.Document = Document;
