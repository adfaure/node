import { storageAvailable } from './../utils'
import { convertToRaw } from 'draft-js';
/**
 * Logs all actions and states after they are dispatched.
 */
const localStoragePersistMdw = store => next => action => {
  let result = next(action)
  if(storageAvailable('localStorage')) {
    if (typeof action === 'function' || action.type === "@@redux/INIT") {
      console.log("pass:", action)
      return result;
    }
    console.log("not pass:", action)
    const state = store.getState();
    const rawContent = convertToRaw(state.editorState.getCurrentContent());
    console.log(rawContent);
    localStorage.setItem('editorState', JSON.stringify(rawContent));
  }
  return result
}

module.exports.localStoragePersistMdw = localStoragePersistMdw;