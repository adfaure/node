import React from 'react';
import { Document } from './../document'

import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';

let files = [
  'notes.md', 'README.md'
]

class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab :0
    }
  }

  render() {
    let self = this;
    let leaves = files.map((elem, idx) => { return <ListItem onClick={(e) => { self.setState({currentTab: idx}) }} primaryText={elem} key={idx} /> });
    let tree = <List> {leaves} </List>;

    let tabs = files.map((elem, idx) => {
                return (<Tab value={idx} key={idx} label={elem}>
                          <Document gitConnection={this.props.git} username={this.props.credentials.username} filename={elem} repo={this.props.project} />
                        </Tab>)
                });

    return (
      <div>
        <div className="row">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div className="box">
                    {tree}
                </div>
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <div className="box">
                  <Tabs value={this.state.currentTab}>
                      {tabs}
                  </Tabs>
                </div>
            </div>
        </div>
      </div>
    );
  }

}

export default Editor
