import keycode from 'keycode';

function didBlockChange(prevSelection, curSelection) {
  return prevSelection.get('anchorKey') != curSelection.get('anchorKey');
}

module.exports = function TestPlugin(options) {

  return {

    onKeyDown(event: Event, data: Object, state: State, editor: Editor) {
      console.log(state.anchorBlock.toJS());
    },
    
    onBeforeInput(event: Event, data: Object, state: State, editor: Editor) {

    },

    onSelect(event: Event, data: Object, state: State, editor: Editor) {

      if(didBlockChange(state.selection, data.selection)) {

        return state.transform()
                    .setBlock({
                      data: { metaData: "yahouuouu" },
                      type: 'paragraph',
                      isVoid: false
                    })
                    .moveTo(data.selection)
                    .setBlock('used')
                    .apply();

      }

    },

    onBlur(event: Event, data: Object, state: State, editor: Editor) {

    },

    onCopy(event: Event, data: Object, state: State, editor: Editor) {

    },

    onCut(event: Event, data: Object, state: State, editor: Editor) {

    },

    onDrop(event: Event, data: Object, state: State, editor: Editor) {

    },

    onPaste(event: Event, data: Object, state: State, editor: Editor) {

    },

  }
}