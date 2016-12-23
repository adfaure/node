import keycode from 'keycode';

module.exports = function TestPlugin(options) {
  // Change the options to take a `key`.
  
  return {
    
    onBeforeInput(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onBeforeInput");
    },

    onBlur(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onBlur");
    },

    onCopy(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onCopy");
    },

    onCut(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onCut");
    },

    onDrop(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onDop");
    },

    onKeyDown(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onKeyDown");
    },

    onPaste(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onPaste");
    },

    onSelect(event: Event, data: Object, state: State, editor: Editor) {
      console.log("onSelect");
    }

  }

}