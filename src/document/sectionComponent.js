import React from 'react';
import CodeMirror from 'codemirror';

import { CMEditor } from './../editor/editorComponent';

class SectionComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<CMEditor initialContent={this.props.documentSection.content} />)
  }

}

module.exports.SectionComponent = SectionComponent;
