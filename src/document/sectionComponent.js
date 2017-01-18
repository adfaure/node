import React from 'react';
import CodeMirror from 'codemirror';

import { CMEditor } from './../editor/editorComponent';

class SectionComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<CMEditor initialContent={this.props.documentSection.content}  
                      configuration={ {lineNumbers:true, viewportMargin:Infinity} }
                      commands={{ save:(cm) => { this.props.save(cm) } }}
                      mode="javascript"
            />)
  }

}

SectionComponent.propTypes = { 
    save: React.PropTypes.func.isRequired,
}

module.exports.SectionComponent = SectionComponent;
