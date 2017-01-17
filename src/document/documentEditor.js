import React from 'react';
import CodeMirror from 'codemirror';

import { SectionComponent } from './sectionComponent';

class DocumentEditor extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          {
            this.props.doc.sections.map((elem,idx) =>  {
              return <SectionComponent save={ (cm) => { this.props.saveSection(cm, idx); }} key={idx} documentSection={elem}/>
            })
          }
      </div>
    );
  }

}

DocumentEditor.propTypes = { 
    doc: React.PropTypes.object,
    saveSection: React.PropTypes.func.isRequired,
}


module.exports.DocumentEditor = DocumentEditor;
