import React from 'react';
import { Document } from './../document'

import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';

import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import ActionClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';


class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab :0,

      files: [
        {
          name: 'notes.md',
          open: false
        }, 
        {
          name: 'README.md',
          open: true
        }
      ]
    }

  }

  closeFile(elem) {
    elem.open = false;
    this.setState({files: this.state.files})
  }

  openFile(elem) {
    elem.open = true;
    this.setState({files: this.state.files})
  }

  render() {
    let self = this;
    let openFiles = this.state.files.filter(elem => elem.open).map((elem, idx) => { 
      return <ListItem
                rightIconButton={<IconButton onClick={() => {self.closeFile(elem)}}><ActionClose /></IconButton>}  
                onClick={(e) => { self.setState({currentTab: idx}) }} 
                primaryText={elem.name} key={idx} /> 
    });

    let availableFiles = this.state.files.filter(elem => !elem.open).map((elem, idx) => { 
      return <ListItem 
                onClick={(e) => { self.openFile(elem) } }
                primaryText={elem.name} key={idx} />
    });

    availableFiles.push( <ListItem key={-1} primaryText="Add a note" rightIconButton={ <IconButton> <ActionNoteAdd /> </IconButton>}/> )

    let tree = (<div>
        <Subheader>Opened notes</Subheader>
        <List> {openFiles} </List>
        <Divider /> 
        <Subheader>Available notes</Subheader>
        <List> {availableFiles} </List>
        </div>);

    let tabs = this.state.files.filter(elem => elem.open).map((elem, idx) => {
                return (<Tab value={idx} key={idx} label={elem.name}>
                          <Document gitConnection={this.props.git} username={this.props.credentials.username} filename={elem.name} repo={this.props.project} />
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
