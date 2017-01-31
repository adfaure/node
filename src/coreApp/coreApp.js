import React from 'react';
import { connect } from 'react-redux'

import Github from './../github';
import {Editor} from './../notesEditor';

import LogginComponent from './loggin'
import AppBar from './appBar'
import {disconnect} from './actions';

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
    user: state.user,
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
        <AppBar user={this.props.user} disconnect={this.disconnect.bind(this)} project={this.props.project} />
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
