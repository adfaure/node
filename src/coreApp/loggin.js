import React from 'react';
import { connect } from 'react-redux'
import { Document } from './../document'

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const mapStateToProps = (state) => {
  return {
    credentials: state.credentials
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {

    setCredentials: function(cred) {
      dispatch(function(dispatch) {
        localStorage.setItem('credentials', JSON.stringify(cred));
        dispatch({
          type: 'SET_CREDENTIALS',
          cred
        });
      })
    }
  }

}


class LogginComponent extends React.Component {
  
  constructor(props) {
    super(props);
    var rawCred = localStorage.getItem('credentials');
    this.props.setCredentials(JSON.parse(rawCred));
    this.state = {
      name : "",
      token : ""
    }
  }

  onClickButton(event) {
    let cred = {
      token: this.state.token,
      name: this.state.name
    };
    this.props.setCredentials(cred);
  }

  render() {
    return (
      <div id="loggin-wrapper">
        <div id="loggin-content">
          <Paper zDepth={3} style={{ padding:'1em', width:'50%', 'marginLeft':'auto', 'marginRight':'auto' }}>
            <div>
              <TextField floatingLabelText="Account name" hintText="You name" name="name" value={this.state.name}  onChange={(e,value) => { this.setState({name:value})}} style={{ width:'100%', 'marginLeft':'auto', 'marginRight':'auto' }}/>
            </div>
            <div>
              <TextField floatingLabelText="Password or token" type="password" hintText="Your token/password" name="token" value={this.state.token}  onChange={(e,value) => { this.setState({token:value})}}  style={{ width:'100%', 'marginLeft':'auto', 'marginRight':'auto' }}/>
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