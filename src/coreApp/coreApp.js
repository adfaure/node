import React from 'react';
import { connect } from 'react-redux'

import Github from './../github';
import {Editor} from './../notesEditor';

import LogginComponent  from './loggin'
import {setCredentials, disconnect} from './actions';

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
import Subheader from 'material-ui/Subheader';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

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
    this.git = null;
  }

  render() {

    if(!this.props.credentials) {
      return <LogginComponent />;
    }

    if(!this.git)
      this.git = new Github({cred: this.props.credentials});

    return (
      <div>
        <AppBar
          title={this.props.username + " - " + this.props.project}
          iconElementRight={<ConfigurationMenu disconnect={this.disconnect.bind(this)} />}>
        </AppBar>
        <div>
          <Editor basePath="notes" credentials={this.props.credentials} git={this.git} project={this.props.project}/>
        </div>
      </div>
    );
  }

}


const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App
