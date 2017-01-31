import React from 'react';
import { connect } from 'react-redux'

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Headroom from 'react-headroom';


const ConfigurationMenu = (props) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
    <MenuItem primaryText="Sign out" onClick={props.disconnect}/>
  </IconMenu>
);

class AppBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let link = "";
    if(this.props.user) {
      link = "https://github.com/" + this.props.user.login + "/" + this.props.project;
    }

    return (
      <Headroom style={{zIndex:99}}>
      <div className="row appBar">
        <div className="col-xs-9">
          <div className="box box-container">
            <p style={{"paddingLeft": "1em"}}> {this.props.user.name} <a target="_blank" href={link}>  {this.props.project} </a>  </p>
          </div>
        </div>
        <div className="col-xs-3">
          <div className="box box-container">
            <div className="row end-xs">
              <div className="col-xs-6">
                <div className="box">
                  <div> <ConfigurationMenu disconnect={this.props.disconnect} /> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Headroom>
    );
  }

}

AppBar.propTypes = {
    user: React.PropTypes.object.isRequired,
    project: React.PropTypes.string.isRequired,
    disconnect: React.PropTypes.func.isRequired
}

export default AppBar