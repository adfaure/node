import React from 'react';
import { connect } from 'react-redux'

import { Document } from './../document'


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
  }

  onClickButton(event) {
    let cred = {
      token: this.refs.token.value,
      name: this.refs.name.value
    };
    this.props.setCredentials(cred);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" ref="name"/>
        </div>
        <div>
          <input type="text" ref="token"/>
        </div>
          <div>
            <button onClick={this.onClickButton.bind(this)}> Connection </button>
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