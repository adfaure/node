import React from 'react';
import IconButton from 'material-ui/IconButton';

import ActionClose from 'material-ui/svg-icons/navigation/close';
import SaveIcon from 'material-ui/svg-icons/content/save';
import UndoIcon from 'material-ui/svg-icons/content/undo';
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit';


let iconStyle = {
  'zIndex': "99",
  'height' : '1.618rem',
  'width' : '1.618rem',
};

let buttonStyle = {
  'height' : 'auto',
  'width' : 'auto',
  'paddingBottom': '1.618px',
  'paddingTop': '1.618px',
};

class EditorToolbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="Editor-toolbar-root">
        <div className="row">
          <div className="col-xs-3">
            <div style={{'paddingLeft':'1rem'}}>
              {this.props.file && this.props.file.name}
            </div>
          </div>
          <div className="col-xs-offset-6 col-xs-3">
            <div className="box">
              {
                // <IconButton className="float-right" style={buttonStyle} iconStyle={iconStyle}>
                //   <ActionClose />
                // </IconButton>
                // <IconButton className="float-right" style={buttonStyle} iconStyle={iconStyle}>
                //   <SaveIcon />
                // </IconButton>
                // <IconButton className="float-right" style={buttonStyle} iconStyle={iconStyle}>
                //   <UndoIcon />
                // </IconButton>
              }
              <IconButton onClick={this.props.onClickEditToggle} tooltip="Edit file" className="float-right" style={buttonStyle} iconStyle={iconStyle}>
                <ContentEdit />
              </IconButton>
            </div>
          </div>
        </div>
      </div>);
    }

  }


  EditorToolbar.propTypes = {
  }


  export default EditorToolbar
