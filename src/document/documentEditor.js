import React from 'react';
import { CMEditor } from './../codeMirror';

class DocumentEditor extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <CMEditor initialContent={this.props.doc.content}  
                    configuration={ {lineNumbers:true, viewportMargin:Infinity} }
                    extraKeys={
                                { 'Ctrl-S':(cm) => { this.props.save(cm) } }
                              }
                    
                    cursor={this.props.cursor}
                    onChange={this.props.onChange}
                    mode="markdown" />
      </div>
    );
  }

}

DocumentEditor.propTypes = { 
    doc: React.PropTypes.object,
    save: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func,
    cursor: React.PropTypes.object,
}


module.exports.DocumentEditor = DocumentEditor;
