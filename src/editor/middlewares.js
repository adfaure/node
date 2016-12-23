import { storageAvailable } from './../utils'
import { Raw } from 'slate'

/**
 * Logs all actions and states after they are dispatched.
 */
const localStoragePersistMdw = store => next => action => {
  let result = next(action)
  if(storageAvailable('localStorage')) {
    if (typeof action === 'function' || action.type === "@@redux/INIT") {
      return result;
    }
    const state = store.getState();
    const rawContent = Raw.serialize(state.editorState);
    localStorage.setItem('editorState', JSON.stringify(rawContent));
  }
  return result
}

module.exports.localStoragePersistMdw = localStoragePersistMdw;
