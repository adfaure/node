import React from 'react';
import { connect } from 'react-redux'

import { Document } from './../document'

import LogginComponent  from './loggin'

const mapStateToProps = (state) => {
  return {
    credentials: state.credentials
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    if(!this.props.credentials) {
      return <LogginComponent />;
    }
    return (
      <div>
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