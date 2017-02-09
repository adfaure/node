import React from 'react';
import {List, ListItem} from 'material-ui/List';

import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ActionClose from 'material-ui/svg-icons/navigation/close';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';

import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

class TreeList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let self = this;

    let openFiles = this.props.files.filter(elem => elem.open).map((elem, idx) => {
      return <ListItem rightIconButton={<IconButton onClick={ (e) =>{ this.props.onClickCloseOpenItem(elem); e.stopPropagation(); }}><ActionClose /></IconButton>}
                       onClick={(e) => { this.props.onClickOpenedItem(elem); }}
                       primaryText={elem.name} key={idx} />
    });

    let availableFiles = this.props.files.filter(elem => !elem.open).map((elem, idx) => {
      return <ListItem onClick={() => { this.props.onAvailableItem(elem) }}
                       primaryText={elem.name} key={idx} />
    });

    availableFiles.push( <ListItem key={-1} onClick={(event) => this.props.onClickAddNote(event) } primaryText="Add a note" rightIconButton={ <IconButton> <ActionNoteAdd /> </IconButton>}/> )

    let tree = (<div className="treeList-root">
                  <Subheader>Opened notes</Subheader>
                  <List> {openFiles} </List>
                  <Divider />
                  <Subheader>Available notes</Subheader>
                  <List> {availableFiles} </List>
                </div>);

    return (tree);
  }

}


TreeList.propTypes = {
    files: React.PropTypes.array.isRequired,
    onClickOpenedItem: React.PropTypes.func.isRequired,
    onClickCloseOpenItem: React.PropTypes.func.isRequired,
    onAvailableItem: React.PropTypes.func.isRequired,
    onClickAddNote: React.PropTypes.func.isRequired,
}


export default TreeList
