import React from 'react';
import { connect } from 'react-redux'

import { Document } from './../document'

import LogginComponent  from './loggin'
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {setCredentials, disconnect} from './actions';

const mapStateToProps = (state) => {
  return {
    credentials: state.credentials,
    username: state.username,
    project: state.project
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    disconnectProp: () => {
      dispatch(disconnect());
    } 
  }
}

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

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }
  
  disconnect() {
    this.props.disconnectProp();
  }

  render() {

    if(!this.props.credentials) {
      return <LogginComponent />;
    }

    return (
      <div>
        <AppBar
          title={this.props.username + " - " + this.props.project}
          iconElementRight={<ConfigurationMenu disconnect={this.disconnect.bind(this)} />}>
        </AppBar>
        <Document />
      </div>
    );
  }

}


const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App