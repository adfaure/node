webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(178);

	var _redux = __webpack_require__(189);

	var _reduxThunk = __webpack_require__(216);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _editor = __webpack_require__(217);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var index = __webpack_require__(219);
	var index = __webpack_require__(220);
	var index = __webpack_require__(221);

	var index = __webpack_require__(222);

	var store = (0, _redux.createStore)(function reducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  console.log("state", state);
	  console.log("action", action);
	  switch (action.type) {
	    case 'INIT_EDITOR_STATE':
	      return Object.assign({}, state, { editorState: action.editorState });
	    case 'EDITOR_STATE_CHANGES':
	      return Object.assign({}, state, { editorState: action.editorState });
	    case 'PUSH_CONTENT_STATE':
	      return Object.assign({}, state, { editorState: action.contentState });
	    default:
	      return state;
	  }
	}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_editor.CMEditor, { initialContent: '# hello' })
	), document.getElementById('app'));

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _codemirror = __webpack_require__(218);

	var _codemirror2 = _interopRequireDefault(_codemirror);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import the Slate editor.


	// Define our app...
	var EditorComponent = function (_React$Component) {
	  _inherits(EditorComponent, _React$Component);

	  function EditorComponent(props) {
	    _classCallCheck(this, EditorComponent);

	    var _this = _possibleConstructorReturn(this, (EditorComponent.__proto__ || Object.getPrototypeOf(EditorComponent)).call(this, props));

	    _this.state = {};
	    var initialContent = _this.props.initialContent || "";
	    _this.config = {
	      value: initialContent
	    };
	    return _this;
	  }

	  _createClass(EditorComponent, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.codeMirror = _codemirror2.default.fromTextArea(this.refs.editorTextArea, this.config);
	      if (this.props.onChange) {
	        this.codeMirror.on('change', this.props.onChange);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { ref: 'editor' },
	        _react2.default.createElement('textarea', { ref: 'editorTextArea' })
	      );
	    }
	  }]);

	  return EditorComponent;
	}(_react2.default.Component);

	EditorComponent.propTypes = {
	  onChange: _react2.default.PropTypes.func,
	  initialContent: _react2.default.PropTypes.string
	};

	module.exports.CMEditor = EditorComponent;

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "styles.css";

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "katex.min.css";

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "codemirror.css";

/***/ }

});