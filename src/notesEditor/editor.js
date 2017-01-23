import React from 'react';
import { Document } from './../document'

import {Tabs, Tab} from 'material-ui/Tabs';

class Editor extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tabs>
          <Tab label="README.md" >
            <Document gitConnection={this.props.git} username={this.props.credentials.username} filename="README.md" repo={this.props.project} />
          </Tab>
          <Tab label="notes.md" >
            <Document gitConnection={this.props.git} username={this.props.credentials.username} filename="notes.md" repo={this.props.project} />
          </Tab>
        </Tabs>
      </div>
    );
  }

}

export default Editor
