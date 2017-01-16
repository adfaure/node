import React from 'react';
import CodeMirror from 'codemirror';

import { SectionContainer } from './sectionContainer';

class DocumentEditor extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          {
            this.props.doc.sections.map((elem,idx) =>  {
              return <SectionContainer key={idx} documentSection={elem} />
            })
          }
      </div>
    );
  }

}

DocumentEditor.propTypes = { 
    doc: React.PropTypes.object,
}


module.exports.DocumentEditor = DocumentEditor;
