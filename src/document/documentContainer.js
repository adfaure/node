import React from 'react';

import {DocumentEditor} from './documentEditor';


let document = {
  sections : [
    {
      content: "yayayaya"
    }
  ]
}

class Document extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {}
    this.state.document = document;

  }

  pushSectionBack(section) {
    this.props.document.sections.push(section);
  }

  render() {
    return <DocumentEditor doc={this.state.document}/>
  }
}

module.exports.Document = Document;
