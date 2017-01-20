import React from 'react';
import { connect } from 'react-redux'
import { Document } from './../document'

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import {connectToProject} from './actions';
import Github from './../github';

const mapStateToProps = (state) => {
  return {
    credentials: state.credentials
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    connectToProject: (cred, repo) => {
      dispatch(connectToProject(cred, repo));
    }
  }

}


class LogginComponent extends React.Component {
  
  constructor(props) {
    super(props);
    var rawCred = localStorage.getItem('credentials');
    var project = localStorage.getItem('project');
    if(rawCred && project)
      this.props.connectToProject(JSON.parse(rawCred), project);

    this.state = {
      username : "",
      token : "",
      project : ""
    }
  }

  onClickButton(event) {
    let cred = {
      token: this.state.token,
      username: this.state.username,
    };

    let project= this.state.project
    this.props.connectToProject(cred, project);
  }

  render() {
    return (
      <div id="loggin-wrapper">
        <div id="loggin-content">
          <Paper zDepth={3} style={{ padding:'1em', width:'50%', 'marginLeft':'auto', 'marginRight':'auto' }}>
            <div>
              <TextField floatingLabelText="Account name" hintText="You name" name="username" value={this.state.username}  onChange={(e,value) => { this.setState({username:value})} } style={{ width:'100%', 'marginLeft':'auto', 'marginRight':'auto' }}/>
            </div>
            <div>
              <TextField floatingLabelText="Password or token" type="password" hintText="Your token/password" name="token" value={this.state.token}  onChange={(e,value) => { this.setState({token:value})}}  style={{ width:'100%', 'marginLeft':'auto', 'marginRight':'auto' }}/>
            </div>
            <div>
              <TextField floatingLabelText="Project" hintText="project name to retrieve from github" name="project" value={this.state.project}  onChange={(e,value) => { this.setState({project:value})}}  style={{ width:'100%', 'marginLeft':'auto', 'marginRight':'auto' }}/>
            </div>
            <div className="centered" >
              <FlatButton style={{width:'100%'}} primary={true} onClick={this.onClickButton.bind(this)}> Connection </FlatButton>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

const Loggin = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogginComponent)

export default Loggin