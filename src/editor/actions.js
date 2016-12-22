import { storageAvailable } from './../utils'
import { Raw } from 'slate'

function actionCreateEditorState(editorState) {
  return {
    type: 'INIT_EDITOR_STATE',
    editorState: editorState
  }
}

function actionStateChanges(editorState) {
  return {
    type: 'EDITOR_STATE_CHANGES',
    editorState: editorState
  }
}

function actionPushEditoreChange(contentState) {
  return {
    type: 'PUSH_CONTENT_STATE',
    contentState: contentState
  }
}

function loadAndInitEditorAction(editorState) {
  return dispatch => {

    if(storageAvailable('localStorage')) {
      var rawEditorContent = localStorage.getItem('editorState');
      if(rawEditorContent) {
        var contentState = Raw.deserialize(JSON.parse(rawEditorContent));
        dispatch(actionPushEditoreChange(contentState));
      }
    } else {
      dispatch(actionCreateEditorState(editorState));
    }
  }
}


module.exports.actionStateChanges      = actionStateChanges;
module.exports.actionCreateEditorState = actionCreateEditorState;
module.exports.loadAndInitEditorAction = loadAndInitEditorAction;
