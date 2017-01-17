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
    setCredentials: function(event) {
      dispatch({
        type: 'SET_CREDENTIALS',
        cred: {
          name: this.refs.name.value,
          token: this.refs.token.value
        }
      });
    }
  }
}

class LogginComponent extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
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
          <button onClick={this.props.setCredentials.bind(this)}> 
            Connection
          </button>
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