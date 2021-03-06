import React from 'react';
import IconButton from 'material-ui/IconButton';

import ActionClose from 'material-ui/svg-icons/navigation/close';
import SaveIcon from 'material-ui/svg-icons/content/save';

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
            <div className="Editor-toolbar-title">
              {this.props.titleElem}
            </div>
          </div>
          <div className="col-xs-offset-6 col-xs-3">
            <div className="box">
              {this.props.toggleEditElement}
              {this.props.revertFileElement}
              {this.props.saveFileElement}
            </div>
          </div>
        </div>
      </div>);
    }

  }


  EditorToolbar.propTypes = {
  }


  export default EditorToolbar
