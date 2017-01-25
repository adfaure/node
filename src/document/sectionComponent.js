import React from 'react';
import CodeMirror from 'codemirror';

import { CMEditor } from './../codeMirror/editorComponent';

class SectionComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return ( <CMEditor initialContent={this.props.documentSection.content}  
                      configuration={ {lineNumbers:true, viewportMargin:Infinity} }
                      extraKeys={
                            { 'Ctrl-S':(cm) => { this.props.save(cm) } }
                      }
                      mode="markdown"
             />)
  }

}

SectionComponent.propTypes = { 
    save: React.PropTypes.func.isRequired,
}

module.exports.SectionComponent = SectionComponent;
