import keycode from 'keycode';

module.exports = function MarkHotkey(options) {
  // Change the options to take a `key`.
  const { type, key } = options
  
  return {
    onKeyDown(event, data, state) {
      // Change the comparison to use the key name.
      if (!event.ctrlKey || keycode(event.which) != key) return
      return state
        .transform()
        .toggleMark(type)
        .apply()
    }
  }

}
