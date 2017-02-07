import React from 'react';
import Paper from 'material-ui/Paper'
import MarkdownIt from 'markdown-it';
import MarkdownRender from './markdownRender'

import SHA256  from "crypto-js/sha256";

import { CMEditor } from './../codeMirror';

class FileEditor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      preview: null,
    };

  }

  onDocumentChange(cm, event) {
    this.setState({ preview:  cm.getValue() });
  }

  hasFileChanged() {
    if(!this.props.file || !this.cm) return false;

    let currentSha = SHA256(this.cm.getValue());
    let fileSha    = SHA256(this.props.file.remoteFile.content);

    return fileSha.toString() != currentSha.toString();
  }

  componentWillReceiveProps(nextProps) {
    if(this.cm && nextProps.file)
      this.cm.setValue(nextProps.file.remoteFile.content);
  }

  render() {
    if(!this.props.file)  return <div> No opened file </div>
    return (
      <div className="row">

        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 editor-left">
          <div className="Editor-area">
            <Paper zDepth={this.hasFileChanged() ? 5 : 0}>
              <CMEditor configuration={ {lineNumbers:true, viewportMargin:Infinity} }
                        initialContent={this.props.file.remoteFile.content}
                        extraKeys={
                            { 'Ctrl-S': (cm) => {
                                  let cursor = cm.getCursor();
                                  this.props.saveFile(cm, this.props.file).then((cm) => cm.setCursor(cursor));

                                }
                            }
                        }
                        cmRef={(cm) => { this.cm = cm; }}
                        onChange={ (cm, event) => { this.onDocumentChange(cm, event) } }
                        mode="markdown" />
            </Paper>
          </div>
        </div>

        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5  editor-right">
          <Paper zDepth={0}>
            <MarkdownRender content={this.state.preview || this.props.file.remoteFile.content} />
          </Paper>
        </div>

      </div>
    );
  }

}

// <div className="row">
//
//   <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 editor-left">
//     <div className="Editor-area">
//       <Paper  zDepth={this.hasFileChanged() ? 5 : 0}>
//         <CMEditor configuration={ {lineNumbers:true, viewportMargin:Infinity} }
//                   extraKeys={
//                       { 'Ctrl-S': (cm) => { this.saveFile(cm, this.state.currentFile) } }
//                   }
//                   cmRef={(cm) => { this.cm = cm; }}
//                   onChange={ (cm, event) => { this.onDocumentChange(cm, event) } }
//                   mode="markdown" />
//       </Paper>
//     </div>
//   </div>
//
//   <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5  editor-right">
//     <Paper zDepth={0}>
//       <MarkdownRender content={this.state.preview} />
//     </Paper>
//   </div>
//
// </div>

FileEditor.propTypes = {
  saveFile: React.PropTypes.func.isRequired,
  file: React.PropTypes.object
}


export default FileEditor
