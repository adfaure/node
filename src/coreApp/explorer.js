import React from 'react';
import { connect } from 'react-redux'

import { Document } from './../document'

class Explorer extends React.Component {

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

export default Explorer