import React from 'react';
import { CMEditor } from './../codeMirror';

class DocumentEditor extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <CMEditor initialContent={this.props.initialContent}  
                    configuration={ {lineNumbers:true, viewportMargin:Infinity} }
                    extraKeys={
                                { 'Ctrl-S':(cm) => { this.props.save(cm) } }
                              }
                    cursor={this.props.cursor}
                    onChange={this.props.onChange}
                    cmRef={this.props.cmRef}
                    mode="markdown" />
      </div>
    );
  }

}

DocumentEditor.propTypes = { 
    initialContent: React.PropTypes.string,
    save: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func,
    cmRef: React.PropTypes.func,
    cursor: React.PropTypes.object,
}


module.exports.DocumentEditor = DocumentEditor;
