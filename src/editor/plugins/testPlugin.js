import keycode from 'keycode';

module.exports = function TestPlugin(options) {
  // Change the options to take a `key`.
  
  return {

    onKeyDown(event, data, state) {
      // Change the comparison to use the key name.
      if (!event.ctrlKey || keycode(event.which) != key) return
      return state
        .transform()
        .toggleMark(type)
        .apply()
    },
    
    onBeforeInput(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onBeforeInput", data);
      console.log("onBeforeInput", state);
      console.log("onBeforeInput", event);
      console.log("onBeforeInput", editor);
    },

    onBlur(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onBlur", data);
      console.log("onBlur", state);
      console.log("onBlur", event);
      console.log("onBlur", editor);
    },

    onCopy(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onCopy", data);
      console.log("onCopy", state);
      console.log("onCopy", event);
      console.log("onCopy", editor);
    },

    onCut(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onCut", data);
      console.log("onCut", state);
      console.log("onCut", event);
      console.log("onCut", editor);
    },

    onDrop(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onDop", data);
      console.log("onDop", state);
      console.log("onDop", event);
      console.log("onDop", editor);
    },

    onKeyDown(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onKeyDown", data);
      console.log("onKeyDown", state);
      console.log("onKeyDown", event);
      console.log("onKeyDown", editor);
    },

    onPaste(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onPaste", data);
      console.log("onPaste", state);
      console.log("onPaste", event);
      console.log("onPaste", editor);
    },

    onSelect(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onSelect", data);
      console.log("onSelect", state);
      console.log("onSelect", event);
      console.log("onSelect", editor);
    }

  }

}