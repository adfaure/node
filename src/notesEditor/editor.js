import React from 'react';
import { GitRemoteDocumentEditor } from './documentContainer'
import TreeList from './treeList'

import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';

import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ActionClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab : null,
      showDialNewFile: false,
      files: [],
      newNoteName: ""
    }
  }

  componentDidMount() {
    let self = this;

    this.props.git.getPath(this.props.credentials.username, this.props.project, this.props.basePath).then((res) => {
      var files = res.map((elem) => {return {
        name: elem.name,
        open: false
      }})
      self.setState({files: files});
    });

  }

  handleChange(value) {
    this.setState({
      currentTab: value
    });
  };

  createNewNote() {
    let self = this;
    let filename = this.state.newNoteName;
    this.props.git.createFile(this.props.project, this.props.basePath+"/"+filename, "", "Create " + filename ).then( (res) => {
      self.state.files.push({ name: res.content.name, open: false });
      self.setState({files: self.state.files});
    });
  }

  closeDialog()  {
    this.setState({showDialNewFile: false, newNoteName: ""})
  };

  closeFile(elem) {
    elem.open = false;
    elem.doc = null;
    this.setState({files: this.state.files})
  }

  openFile(elem) {
    elem.open = true;
    this.setState({
                    files: this.state.files,
                    currentTab: elem.name
                  })

  }

  render() {
    let self = this;
    return (
      <div>
        <div className="row">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div className="box">
                  <TreeList  onClickAddNote={() => { this.setState({showDialNewFile: true}) }}
                             onClickOpenItem={(e) => { self.setState({currentTab: e.name}) }}
                             onClickCloseOpenItem={ (e) => { self.closeFile(e) }}
                             onAvailableItem={(e) => { self.openFile(e) }}
                             files={this.state.files} />
                </div>
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <div className="box">
                  <Tabs onChange={e => this.handleChange(e) } value={this.state.currentTab}>
                  { this.state.files.filter(elem => elem.open).map((elem, idx) => {
                                return (<Tab value={elem.name} key={idx} label={elem.name}>
                                          <GitRemoteDocumentEditor  key={elem.name}
                                                                    gitConnection={this.props.git}
                                                                    username={this.props.credentials.username}
                                                                    filename={this.props.basePath + "/" + elem.name}
                                                                    repo={this.props.project} />
                                        </Tab>)
                                }) }
                  </Tabs>
                </div>
            </div>
        </div>

        <Dialog title="Enter a name for the new note"
                actions={[
                  <FlatButton
                    label="Cancel"
                    primary={true}
                    onTouchTap={() => this.closeDialog()}
                  />,
                  <FlatButton
                    label="Submit"
                    primary={true}
                    keyboardFocused={true}
                    onTouchTap={() => {this.createNewNote(), this.closeDialog()}}
                  />,
                ]}
                modal={false}
                open={this.state.showDialNewFile}>
          <TextField hintText="Name of the new note" value={this.state.newNoteName}  onChange={(e,value) => { this.setState({newNoteName:value})} }/>
        </Dialog>
      </div>
    );
  }

}

export default Editor
