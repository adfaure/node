webpackJsonp([0],[
/* 0 */
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

	var _coreApp = __webpack_require__(217);

	var _github = __webpack_require__(231);

	var _github2 = _interopRequireDefault(_github);

	var _MuiThemeProvider = __webpack_require__(407);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _reactTapEventPlugin = __webpack_require__(454);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(460);
	__webpack_require__(461);
	__webpack_require__(462);

	// Needed for onTouchTap 
	// http://stackoverflow.com/a/34015469/988941 
	(0, _reactTapEventPlugin2.default)();

	var store = (0, _redux.createStore)(function reducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { credentials: null };
	  var action = arguments[1];

	  switch (action.type) {
	    case 'SET_CREDENTIALS':
	      return Object.assign({}, state, { credentials: action.cred });
	    default:
	      return state;
	  }
	}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

	var ReactApp = function ReactApp() {
	  return _react2.default.createElement(
	    _MuiThemeProvider2.default,
	    null,
	    _react2.default.createElement(_coreApp.App, null)
	  );
	};

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(ReactApp, null)
	), document.getElementById('app'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _coreApp = __webpack_require__(218);

	var _coreApp2 = _interopRequireDefault(_coreApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports.App = _coreApp2.default;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(178);

	var _document = __webpack_require__(219);

	var _loggin = __webpack_require__(254);

	var _loggin2 = _interopRequireDefault(_loggin);

	var _RaisedButton = __webpack_require__(255);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _AppBar = __webpack_require__(384);

	var _AppBar2 = _interopRequireDefault(_AppBar);

	var _Paper = __webpack_require__(381);

	var _Paper2 = _interopRequireDefault(_Paper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    credentials: state.credentials
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {};
	};

	var AppComponent = function (_React$Component) {
	  _inherits(AppComponent, _React$Component);

	  function AppComponent(props) {
	    _classCallCheck(this, AppComponent);

	    var _this = _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).call(this, props));

	    console.log(props);
	    return _this;
	  }

	  _createClass(AppComponent, [{
	    key: 'render',
	    value: function render() {
	      if (!this.props.credentials) {
	        return _react2.default.createElement(_loggin2.default, null);
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_AppBar2.default, null),
	        _react2.default.createElement(_document.Document, null)
	      );
	    }
	  }]);

	  return AppComponent;
	}(_react2.default.Component);

	var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppComponent);

	exports.default = App;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _documentContainer = __webpack_require__(220);

	module.exports.Document = _documentContainer.Document;

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _documentEditor = __webpack_require__(221);

	var _github = __webpack_require__(231);

	var _github2 = _interopRequireDefault(_github);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var initialDocument = {
	  sections: [{
	    content: ""
	  }]
	};

	var Document = function (_React$Component) {
	  _inherits(Document, _React$Component);

	  function Document(props) {
	    _classCallCheck(this, Document);

	    var _this = _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).call(this, props));

	    var self = _this;
	    var document = initialDocument;
	    _this.state = {
	      document: document
	    };

	    var git = new _github2.default();

	    git.getFile('adfaure', 'remote-simgrid', 'README.md').then(function (res) {

	      var document = {
	        sections: [{
	          content: atob(res.content)
	        }]
	      };
	      self.setState({ document: document });
	    });

	    return _this;
	  }

	  _createClass(Document, [{
	    key: 'pushSectionBack',
	    value: function pushSectionBack(section) {
	      this.props.document.sections.push(section);
	    }
	  }, {
	    key: 'saveSection',
	    value: function saveSection(cm, idx) {
	      this.state.document.sections[idx].content = cm.doc.getValue();
	      localStorage.setItem('editorState', JSON.stringify(this.state.document));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_documentEditor.DocumentEditor, { doc: this.state.document, saveSection: this.saveSection.bind(this) });
	    }
	  }]);

	  return Document;
	}(_react2.default.Component);

	module.exports.Document = Document;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _codemirror = __webpack_require__(222);

	var _codemirror2 = _interopRequireDefault(_codemirror);

	var _sectionComponent = __webpack_require__(223);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DocumentEditor = function (_React$Component) {
	  _inherits(DocumentEditor, _React$Component);

	  function DocumentEditor(props) {
	    _classCallCheck(this, DocumentEditor);

	    return _possibleConstructorReturn(this, (DocumentEditor.__proto__ || Object.getPrototypeOf(DocumentEditor)).call(this, props));
	  }

	  _createClass(DocumentEditor, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.doc.sections.map(function (elem, idx) {
	          return _react2.default.createElement(_sectionComponent.SectionComponent, { save: function save(cm) {
	              _this2.props.saveSection(cm, idx);
	            }, key: idx, documentSection: elem });
	        })
	      );
	    }
	  }]);

	  return DocumentEditor;
	}(_react2.default.Component);

	DocumentEditor.propTypes = {
	  doc: _react2.default.PropTypes.object,
	  saveSection: _react2.default.PropTypes.func.isRequired
	};

	module.exports.DocumentEditor = DocumentEditor;

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// This is CodeMirror (http://codemirror.net), a code editor
	// implemented in JavaScript on top of the browser's DOM.
	//
	// You can find some technical background for some of the code below
	// at http://marijnhaverbeke.nl/blog/#cm-internals .

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.CodeMirror = factory());
	}(this, (function () { 'use strict';

	// Kludges for bugs and behavior differences that can't be feature
	// detected are enabled based on userAgent etc sniffing.
	var userAgent = navigator.userAgent
	var platform = navigator.platform

	var gecko = /gecko\/\d/i.test(userAgent)
	var ie_upto10 = /MSIE \d/.test(userAgent)
	var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent)
	var ie = ie_upto10 || ie_11up
	var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1])
	var webkit = /WebKit\//.test(userAgent)
	var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent)
	var chrome = /Chrome\//.test(userAgent)
	var presto = /Opera\//.test(userAgent)
	var safari = /Apple Computer/.test(navigator.vendor)
	var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent)
	var phantom = /PhantomJS/.test(userAgent)

	var ios = /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent)
	// This is woefully incomplete. Suggestions for alternative methods welcome.
	var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent)
	var mac = ios || /Mac/.test(platform)
	var chromeOS = /\bCrOS\b/.test(userAgent)
	var windows = /win/i.test(platform)

	var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/)
	if (presto_version) { presto_version = Number(presto_version[1]) }
	if (presto_version && presto_version >= 15) { presto = false; webkit = true }
	// Some browsers use the wrong event properties to signal cmd/ctrl on OS X
	var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11))
	var captureRightClick = gecko || (ie && ie_version >= 9)

	function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

	var rmClass = function(node, cls) {
	  var current = node.className
	  var match = classTest(cls).exec(current)
	  if (match) {
	    var after = current.slice(match.index + match[0].length)
	    node.className = current.slice(0, match.index) + (after ? match[1] + after : "")
	  }
	}

	function removeChildren(e) {
	  for (var count = e.childNodes.length; count > 0; --count)
	    { e.removeChild(e.firstChild) }
	  return e
	}

	function removeChildrenAndAdd(parent, e) {
	  return removeChildren(parent).appendChild(e)
	}

	function elt(tag, content, className, style) {
	  var e = document.createElement(tag)
	  if (className) { e.className = className }
	  if (style) { e.style.cssText = style }
	  if (typeof content == "string") { e.appendChild(document.createTextNode(content)) }
	  else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]) } }
	  return e
	}

	var range
	if (document.createRange) { range = function(node, start, end, endNode) {
	  var r = document.createRange()
	  r.setEnd(endNode || node, end)
	  r.setStart(node, start)
	  return r
	} }
	else { range = function(node, start, end) {
	  var r = document.body.createTextRange()
	  try { r.moveToElementText(node.parentNode) }
	  catch(e) { return r }
	  r.collapse(true)
	  r.moveEnd("character", end)
	  r.moveStart("character", start)
	  return r
	} }

	function contains(parent, child) {
	  if (child.nodeType == 3) // Android browser always returns false when child is a textnode
	    { child = child.parentNode }
	  if (parent.contains)
	    { return parent.contains(child) }
	  do {
	    if (child.nodeType == 11) { child = child.host }
	    if (child == parent) { return true }
	  } while (child = child.parentNode)
	}

	function activeElt() {
	  // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
	  // IE < 10 will throw when accessed while the page is loading or in an iframe.
	  // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
	  var activeElement
	  try {
	    activeElement = document.activeElement
	  } catch(e) {
	    activeElement = document.body || null
	  }
	  while (activeElement && activeElement.root && activeElement.root.activeElement)
	    { activeElement = activeElement.root.activeElement }
	  return activeElement
	}

	function addClass(node, cls) {
	  var current = node.className
	  if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls }
	}
	function joinClasses(a, b) {
	  var as = a.split(" ")
	  for (var i = 0; i < as.length; i++)
	    { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i] } }
	  return b
	}

	var selectInput = function(node) { node.select() }
	if (ios) // Mobile Safari apparently has a bug where select() is broken.
	  { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length } }
	else if (ie) // Suppress mysterious IE10 errors
	  { selectInput = function(node) { try { node.select() } catch(_e) {} } }

	function bind(f) {
	  var args = Array.prototype.slice.call(arguments, 1)
	  return function(){return f.apply(null, args)}
	}

	function copyObj(obj, target, overwrite) {
	  if (!target) { target = {} }
	  for (var prop in obj)
	    { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
	      { target[prop] = obj[prop] } }
	  return target
	}

	// Counts the column offset in a string, taking tabs into account.
	// Used mostly to find indentation.
	function countColumn(string, end, tabSize, startIndex, startValue) {
	  if (end == null) {
	    end = string.search(/[^\s\u00a0]/)
	    if (end == -1) { end = string.length }
	  }
	  for (var i = startIndex || 0, n = startValue || 0;;) {
	    var nextTab = string.indexOf("\t", i)
	    if (nextTab < 0 || nextTab >= end)
	      { return n + (end - i) }
	    n += nextTab - i
	    n += tabSize - (n % tabSize)
	    i = nextTab + 1
	  }
	}

	function Delayed() {this.id = null}
	Delayed.prototype.set = function(ms, f) {
	  clearTimeout(this.id)
	  this.id = setTimeout(f, ms)
	}

	function indexOf(array, elt) {
	  for (var i = 0; i < array.length; ++i)
	    { if (array[i] == elt) { return i } }
	  return -1
	}

	// Number of pixels added to scroller and sizer to hide scrollbar
	var scrollerGap = 30

	// Returned or thrown by various protocols to signal 'I'm not
	// handling this'.
	var Pass = {toString: function(){return "CodeMirror.Pass"}}

	// Reused option objects for setSelection & friends
	var sel_dontScroll = {scroll: false};
	var sel_mouse = {origin: "*mouse"};
	var sel_move = {origin: "+move"};
	// The inverse of countColumn -- find the offset that corresponds to
	// a particular column.
	function findColumn(string, goal, tabSize) {
	  for (var pos = 0, col = 0;;) {
	    var nextTab = string.indexOf("\t", pos)
	    if (nextTab == -1) { nextTab = string.length }
	    var skipped = nextTab - pos
	    if (nextTab == string.length || col + skipped >= goal)
	      { return pos + Math.min(skipped, goal - col) }
	    col += nextTab - pos
	    col += tabSize - (col % tabSize)
	    pos = nextTab + 1
	    if (col >= goal) { return pos }
	  }
	}

	var spaceStrs = [""]
	function spaceStr(n) {
	  while (spaceStrs.length <= n)
	    { spaceStrs.push(lst(spaceStrs) + " ") }
	  return spaceStrs[n]
	}

	function lst(arr) { return arr[arr.length-1] }

	function map(array, f) {
	  var out = []
	  for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i) }
	  return out
	}

	function insertSorted(array, value, score) {
	  var pos = 0, priority = score(value)
	  while (pos < array.length && score(array[pos]) <= priority) { pos++ }
	  array.splice(pos, 0, value)
	}

	function nothing() {}

	function createObj(base, props) {
	  var inst
	  if (Object.create) {
	    inst = Object.create(base)
	  } else {
	    nothing.prototype = base
	    inst = new nothing()
	  }
	  if (props) { copyObj(props, inst) }
	  return inst
	}

	var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
	function isWordCharBasic(ch) {
	  return /\w/.test(ch) || ch > "\x80" &&
	    (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
	}
	function isWordChar(ch, helper) {
	  if (!helper) { return isWordCharBasic(ch) }
	  if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
	  return helper.test(ch)
	}

	function isEmpty(obj) {
	  for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
	  return true
	}

	// Extending unicode characters. A series of a non-extending char +
	// any number of extending chars is treated as a single unit as far
	// as editing and measuring is concerned. This is not fully correct,
	// since some scripts/fonts/browsers also treat other configurations
	// of code points as a group.
	var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
	function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

	// The display handles the DOM integration, both for input reading
	// and content drawing. It holds references to DOM nodes and
	// display-related state.

	function Display(place, doc, input) {
	  var d = this
	  this.input = input

	  // Covers bottom-right square when both scrollbars are present.
	  d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler")
	  d.scrollbarFiller.setAttribute("cm-not-content", "true")
	  // Covers bottom of gutter when coverGutterNextToScrollbar is on
	  // and h scrollbar is present.
	  d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler")
	  d.gutterFiller.setAttribute("cm-not-content", "true")
	  // Will contain the actual code, positioned to cover the viewport.
	  d.lineDiv = elt("div", null, "CodeMirror-code")
	  // Elements are added to these to represent selection and cursors.
	  d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1")
	  d.cursorDiv = elt("div", null, "CodeMirror-cursors")
	  // A visibility: hidden element used to find the size of things.
	  d.measure = elt("div", null, "CodeMirror-measure")
	  // When lines outside of the viewport are measured, they are drawn in this.
	  d.lineMeasure = elt("div", null, "CodeMirror-measure")
	  // Wraps everything that needs to exist inside the vertically-padded coordinate system
	  d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
	                    null, "position: relative; outline: none")
	  // Moved around its parent to cover visible view.
	  d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative")
	  // Set to the height of the document, allowing scrolling.
	  d.sizer = elt("div", [d.mover], "CodeMirror-sizer")
	  d.sizerWidth = null
	  // Behavior of elts with overflow: auto and padding is
	  // inconsistent across browsers. This is used to ensure the
	  // scrollable area is big enough.
	  d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;")
	  // Will contain the gutters, if any.
	  d.gutters = elt("div", null, "CodeMirror-gutters")
	  d.lineGutter = null
	  // Actual scrollable element.
	  d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll")
	  d.scroller.setAttribute("tabIndex", "-1")
	  // The element in which the editor lives.
	  d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror")

	  // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
	  if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0 }
	  if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true }

	  if (place) {
	    if (place.appendChild) { place.appendChild(d.wrapper) }
	    else { place(d.wrapper) }
	  }

	  // Current rendered range (may be bigger than the view window).
	  d.viewFrom = d.viewTo = doc.first
	  d.reportedViewFrom = d.reportedViewTo = doc.first
	  // Information about the rendered lines.
	  d.view = []
	  d.renderedView = null
	  // Holds info about a single rendered line when it was rendered
	  // for measurement, while not in view.
	  d.externalMeasured = null
	  // Empty space (in pixels) above the view
	  d.viewOffset = 0
	  d.lastWrapHeight = d.lastWrapWidth = 0
	  d.updateLineNumbers = null

	  d.nativeBarWidth = d.barHeight = d.barWidth = 0
	  d.scrollbarsClipped = false

	  // Used to only resize the line number gutter when necessary (when
	  // the amount of lines crosses a boundary that makes its width change)
	  d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null
	  // Set to true when a non-horizontal-scrolling line widget is
	  // added. As an optimization, line widget aligning is skipped when
	  // this is false.
	  d.alignWidgets = false

	  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null

	  // Tracks the maximum line length so that the horizontal scrollbar
	  // can be kept static when scrolling.
	  d.maxLine = null
	  d.maxLineLength = 0
	  d.maxLineChanged = false

	  // Used for measuring wheel scrolling granularity
	  d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null

	  // True when shift is held down.
	  d.shift = false

	  // Used to track whether anything happened since the context menu
	  // was opened.
	  d.selForContextMenu = null

	  d.activeTouch = null

	  input.init(d)
	}

	// Find the line object corresponding to the given line number.
	function getLine(doc, n) {
	  n -= doc.first
	  if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
	  var chunk = doc
	  while (!chunk.lines) {
	    for (var i = 0;; ++i) {
	      var child = chunk.children[i], sz = child.chunkSize()
	      if (n < sz) { chunk = child; break }
	      n -= sz
	    }
	  }
	  return chunk.lines[n]
	}

	// Get the part of a document between two positions, as an array of
	// strings.
	function getBetween(doc, start, end) {
	  var out = [], n = start.line
	  doc.iter(start.line, end.line + 1, function (line) {
	    var text = line.text
	    if (n == end.line) { text = text.slice(0, end.ch) }
	    if (n == start.line) { text = text.slice(start.ch) }
	    out.push(text)
	    ++n
	  })
	  return out
	}
	// Get the lines between from and to, as array of strings.
	function getLines(doc, from, to) {
	  var out = []
	  doc.iter(from, to, function (line) { out.push(line.text) }) // iter aborts when callback returns truthy value
	  return out
	}

	// Update the height of a line, propagating the height change
	// upwards to parent nodes.
	function updateLineHeight(line, height) {
	  var diff = height - line.height
	  if (diff) { for (var n = line; n; n = n.parent) { n.height += diff } }
	}

	// Given a line object, find its line number by walking up through
	// its parent links.
	function lineNo(line) {
	  if (line.parent == null) { return null }
	  var cur = line.parent, no = indexOf(cur.lines, line)
	  for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
	    for (var i = 0;; ++i) {
	      if (chunk.children[i] == cur) { break }
	      no += chunk.children[i].chunkSize()
	    }
	  }
	  return no + cur.first
	}

	// Find the line at the given vertical position, using the height
	// information in the document tree.
	function lineAtHeight(chunk, h) {
	  var n = chunk.first
	  outer: do {
	    for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
	      var child = chunk.children[i$1], ch = child.height
	      if (h < ch) { chunk = child; continue outer }
	      h -= ch
	      n += child.chunkSize()
	    }
	    return n
	  } while (!chunk.lines)
	  var i = 0
	  for (; i < chunk.lines.length; ++i) {
	    var line = chunk.lines[i], lh = line.height
	    if (h < lh) { break }
	    h -= lh
	  }
	  return n + i
	}

	function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

	function lineNumberFor(options, i) {
	  return String(options.lineNumberFormatter(i + options.firstLineNumber))
	}

	// A Pos instance represents a position within the text.
	function Pos (line, ch) {
	  if (!(this instanceof Pos)) { return new Pos(line, ch) }
	  this.line = line; this.ch = ch
	}

	// Compare two positions, return 0 if they are the same, a negative
	// number when a is less, and a positive number otherwise.
	function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

	function copyPos(x) {return Pos(x.line, x.ch)}
	function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
	function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

	// Most of the external API clips given positions to make sure they
	// actually exist within the document.
	function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
	function clipPos(doc, pos) {
	  if (pos.line < doc.first) { return Pos(doc.first, 0) }
	  var last = doc.first + doc.size - 1
	  if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
	  return clipToLen(pos, getLine(doc, pos.line).text.length)
	}
	function clipToLen(pos, linelen) {
	  var ch = pos.ch
	  if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
	  else if (ch < 0) { return Pos(pos.line, 0) }
	  else { return pos }
	}
	function clipPosArray(doc, array) {
	  var out = []
	  for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]) }
	  return out
	}

	// Optimize some code when these features are not used.
	var sawReadOnlySpans = false;
	var sawCollapsedSpans = false;
	function seeReadOnlySpans() {
	  sawReadOnlySpans = true
	}

	function seeCollapsedSpans() {
	  sawCollapsedSpans = true
	}

	// TEXTMARKER SPANS

	function MarkedSpan(marker, from, to) {
	  this.marker = marker
	  this.from = from; this.to = to
	}

	// Search an array of spans for a span matching the given marker.
	function getMarkedSpanFor(spans, marker) {
	  if (spans) { for (var i = 0; i < spans.length; ++i) {
	    var span = spans[i]
	    if (span.marker == marker) { return span }
	  } }
	}
	// Remove a span from an array, returning undefined if no spans are
	// left (we don't store arrays for lines without spans).
	function removeMarkedSpan(spans, span) {
	  var r
	  for (var i = 0; i < spans.length; ++i)
	    { if (spans[i] != span) { (r || (r = [])).push(spans[i]) } }
	  return r
	}
	// Add a span to a line.
	function addMarkedSpan(line, span) {
	  line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span]
	  span.marker.attachLine(line)
	}

	// Used for the algorithm that adjusts markers for a change in the
	// document. These functions cut an array of spans at a given
	// character position, returning an array of remaining chunks (or
	// undefined if nothing remains).
	function markedSpansBefore(old, startCh, isInsert) {
	  var nw
	  if (old) { for (var i = 0; i < old.length; ++i) {
	    var span = old[i], marker = span.marker
	    var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh)
	    if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
	      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
	      ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to))
	    }
	  } }
	  return nw
	}
	function markedSpansAfter(old, endCh, isInsert) {
	  var nw
	  if (old) { for (var i = 0; i < old.length; ++i) {
	    var span = old[i], marker = span.marker
	    var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh)
	    if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
	      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
	      ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
	                                            span.to == null ? null : span.to - endCh))
	    }
	  } }
	  return nw
	}

	// Given a change object, compute the new set of marker spans that
	// cover the line in which the change took place. Removes spans
	// entirely within the change, reconnects spans belonging to the
	// same marker that appear on both sides of the change, and cuts off
	// spans partially within the change. Returns an array of span
	// arrays with one element for each line in (after) the change.
	function stretchSpansOverChange(doc, change) {
	  if (change.full) { return null }
	  var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans
	  var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans
	  if (!oldFirst && !oldLast) { return null }

	  var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0
	  // Get the spans that 'stick out' on both sides
	  var first = markedSpansBefore(oldFirst, startCh, isInsert)
	  var last = markedSpansAfter(oldLast, endCh, isInsert)

	  // Next, merge those two ends
	  var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0)
	  if (first) {
	    // Fix up .to properties of first
	    for (var i = 0; i < first.length; ++i) {
	      var span = first[i]
	      if (span.to == null) {
	        var found = getMarkedSpanFor(last, span.marker)
	        if (!found) { span.to = startCh }
	        else if (sameLine) { span.to = found.to == null ? null : found.to + offset }
	      }
	    }
	  }
	  if (last) {
	    // Fix up .from in last (or move them into first in case of sameLine)
	    for (var i$1 = 0; i$1 < last.length; ++i$1) {
	      var span$1 = last[i$1]
	      if (span$1.to != null) { span$1.to += offset }
	      if (span$1.from == null) {
	        var found$1 = getMarkedSpanFor(first, span$1.marker)
	        if (!found$1) {
	          span$1.from = offset
	          if (sameLine) { (first || (first = [])).push(span$1) }
	        }
	      } else {
	        span$1.from += offset
	        if (sameLine) { (first || (first = [])).push(span$1) }
	      }
	    }
	  }
	  // Make sure we didn't create any zero-length spans
	  if (first) { first = clearEmptySpans(first) }
	  if (last && last != first) { last = clearEmptySpans(last) }

	  var newMarkers = [first]
	  if (!sameLine) {
	    // Fill gap with whole-line-spans
	    var gap = change.text.length - 2, gapMarkers
	    if (gap > 0 && first)
	      { for (var i$2 = 0; i$2 < first.length; ++i$2)
	        { if (first[i$2].to == null)
	          { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)) } } }
	    for (var i$3 = 0; i$3 < gap; ++i$3)
	      { newMarkers.push(gapMarkers) }
	    newMarkers.push(last)
	  }
	  return newMarkers
	}

	// Remove spans that are empty and don't have a clearWhenEmpty
	// option of false.
	function clearEmptySpans(spans) {
	  for (var i = 0; i < spans.length; ++i) {
	    var span = spans[i]
	    if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
	      { spans.splice(i--, 1) }
	  }
	  if (!spans.length) { return null }
	  return spans
	}

	// Used to 'clip' out readOnly ranges when making a change.
	function removeReadOnlyRanges(doc, from, to) {
	  var markers = null
	  doc.iter(from.line, to.line + 1, function (line) {
	    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
	      var mark = line.markedSpans[i].marker
	      if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
	        { (markers || (markers = [])).push(mark) }
	    } }
	  })
	  if (!markers) { return null }
	  var parts = [{from: from, to: to}]
	  for (var i = 0; i < markers.length; ++i) {
	    var mk = markers[i], m = mk.find(0)
	    for (var j = 0; j < parts.length; ++j) {
	      var p = parts[j]
	      if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
	      var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to)
	      if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
	        { newParts.push({from: p.from, to: m.from}) }
	      if (dto > 0 || !mk.inclusiveRight && !dto)
	        { newParts.push({from: m.to, to: p.to}) }
	      parts.splice.apply(parts, newParts)
	      j += newParts.length - 1
	    }
	  }
	  return parts
	}

	// Connect or disconnect spans from a line.
	function detachMarkedSpans(line) {
	  var spans = line.markedSpans
	  if (!spans) { return }
	  for (var i = 0; i < spans.length; ++i)
	    { spans[i].marker.detachLine(line) }
	  line.markedSpans = null
	}
	function attachMarkedSpans(line, spans) {
	  if (!spans) { return }
	  for (var i = 0; i < spans.length; ++i)
	    { spans[i].marker.attachLine(line) }
	  line.markedSpans = spans
	}

	// Helpers used when computing which overlapping collapsed span
	// counts as the larger one.
	function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
	function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

	// Returns a number indicating which of two overlapping collapsed
	// spans is larger (and thus includes the other). Falls back to
	// comparing ids when the spans cover exactly the same range.
	function compareCollapsedMarkers(a, b) {
	  var lenDiff = a.lines.length - b.lines.length
	  if (lenDiff != 0) { return lenDiff }
	  var aPos = a.find(), bPos = b.find()
	  var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b)
	  if (fromCmp) { return -fromCmp }
	  var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b)
	  if (toCmp) { return toCmp }
	  return b.id - a.id
	}

	// Find out whether a line ends or starts in a collapsed span. If
	// so, return the marker for that span.
	function collapsedSpanAtSide(line, start) {
	  var sps = sawCollapsedSpans && line.markedSpans, found
	  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
	    sp = sps[i]
	    if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
	        (!found || compareCollapsedMarkers(found, sp.marker) < 0))
	      { found = sp.marker }
	  } }
	  return found
	}
	function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
	function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

	// Test whether there exists a collapsed span that partially
	// overlaps (covers the start or end, but not both) of a new span.
	// Such overlap is not allowed.
	function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
	  var line = getLine(doc, lineNo)
	  var sps = sawCollapsedSpans && line.markedSpans
	  if (sps) { for (var i = 0; i < sps.length; ++i) {
	    var sp = sps[i]
	    if (!sp.marker.collapsed) { continue }
	    var found = sp.marker.find(0)
	    var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker)
	    var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker)
	    if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
	    if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
	        fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
	      { return true }
	  } }
	}

	// A visual line is a line as drawn on the screen. Folding, for
	// example, can cause multiple logical lines to appear on the same
	// visual line. This finds the start of the visual line that the
	// given line is part of (usually that is the line itself).
	function visualLine(line) {
	  var merged
	  while (merged = collapsedSpanAtStart(line))
	    { line = merged.find(-1, true).line }
	  return line
	}

	// Returns an array of logical lines that continue the visual line
	// started by the argument, or undefined if there are no such lines.
	function visualLineContinued(line) {
	  var merged, lines
	  while (merged = collapsedSpanAtEnd(line)) {
	    line = merged.find(1, true).line
	    ;(lines || (lines = [])).push(line)
	  }
	  return lines
	}

	// Get the line number of the start of the visual line that the
	// given line number is part of.
	function visualLineNo(doc, lineN) {
	  var line = getLine(doc, lineN), vis = visualLine(line)
	  if (line == vis) { return lineN }
	  return lineNo(vis)
	}

	// Get the line number of the start of the next visual line after
	// the given line.
	function visualLineEndNo(doc, lineN) {
	  if (lineN > doc.lastLine()) { return lineN }
	  var line = getLine(doc, lineN), merged
	  if (!lineIsHidden(doc, line)) { return lineN }
	  while (merged = collapsedSpanAtEnd(line))
	    { line = merged.find(1, true).line }
	  return lineNo(line) + 1
	}

	// Compute whether a line is hidden. Lines count as hidden when they
	// are part of a visual line that starts with another line, or when
	// they are entirely covered by collapsed, non-widget span.
	function lineIsHidden(doc, line) {
	  var sps = sawCollapsedSpans && line.markedSpans
	  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
	    sp = sps[i]
	    if (!sp.marker.collapsed) { continue }
	    if (sp.from == null) { return true }
	    if (sp.marker.widgetNode) { continue }
	    if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
	      { return true }
	  } }
	}
	function lineIsHiddenInner(doc, line, span) {
	  if (span.to == null) {
	    var end = span.marker.find(1, true)
	    return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
	  }
	  if (span.marker.inclusiveRight && span.to == line.text.length)
	    { return true }
	  for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
	    sp = line.markedSpans[i]
	    if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
	        (sp.to == null || sp.to != span.from) &&
	        (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
	        lineIsHiddenInner(doc, line, sp)) { return true }
	  }
	}

	// Find the height above the given line.
	function heightAtLine(lineObj) {
	  lineObj = visualLine(lineObj)

	  var h = 0, chunk = lineObj.parent
	  for (var i = 0; i < chunk.lines.length; ++i) {
	    var line = chunk.lines[i]
	    if (line == lineObj) { break }
	    else { h += line.height }
	  }
	  for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
	    for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
	      var cur = p.children[i$1]
	      if (cur == chunk) { break }
	      else { h += cur.height }
	    }
	  }
	  return h
	}

	// Compute the character length of a line, taking into account
	// collapsed ranges (see markText) that might hide parts, and join
	// other lines onto it.
	function lineLength(line) {
	  if (line.height == 0) { return 0 }
	  var len = line.text.length, merged, cur = line
	  while (merged = collapsedSpanAtStart(cur)) {
	    var found = merged.find(0, true)
	    cur = found.from.line
	    len += found.from.ch - found.to.ch
	  }
	  cur = line
	  while (merged = collapsedSpanAtEnd(cur)) {
	    var found$1 = merged.find(0, true)
	    len -= cur.text.length - found$1.from.ch
	    cur = found$1.to.line
	    len += cur.text.length - found$1.to.ch
	  }
	  return len
	}

	// Find the longest line in the document.
	function findMaxLine(cm) {
	  var d = cm.display, doc = cm.doc
	  d.maxLine = getLine(doc, doc.first)
	  d.maxLineLength = lineLength(d.maxLine)
	  d.maxLineChanged = true
	  doc.iter(function (line) {
	    var len = lineLength(line)
	    if (len > d.maxLineLength) {
	      d.maxLineLength = len
	      d.maxLine = line
	    }
	  })
	}

	// BIDI HELPERS

	function iterateBidiSections(order, from, to, f) {
	  if (!order) { return f(from, to, "ltr") }
	  var found = false
	  for (var i = 0; i < order.length; ++i) {
	    var part = order[i]
	    if (part.from < to && part.to > from || from == to && part.to == from) {
	      f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr")
	      found = true
	    }
	  }
	  if (!found) { f(from, to, "ltr") }
	}

	function bidiLeft(part) { return part.level % 2 ? part.to : part.from }
	function bidiRight(part) { return part.level % 2 ? part.from : part.to }

	function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0 }
	function lineRight(line) {
	  var order = getOrder(line)
	  if (!order) { return line.text.length }
	  return bidiRight(lst(order))
	}

	function compareBidiLevel(order, a, b) {
	  var linedir = order[0].level
	  if (a == linedir) { return true }
	  if (b == linedir) { return false }
	  return a < b
	}

	var bidiOther = null
	function getBidiPartAt(order, pos) {
	  var found
	  bidiOther = null
	  for (var i = 0; i < order.length; ++i) {
	    var cur = order[i]
	    if (cur.from < pos && cur.to > pos) { return i }
	    if ((cur.from == pos || cur.to == pos)) {
	      if (found == null) {
	        found = i
	      } else if (compareBidiLevel(order, cur.level, order[found].level)) {
	        if (cur.from != cur.to) { bidiOther = found }
	        return i
	      } else {
	        if (cur.from != cur.to) { bidiOther = i }
	        return found
	      }
	    }
	  }
	  return found
	}

	function moveInLine(line, pos, dir, byUnit) {
	  if (!byUnit) { return pos + dir }
	  do { pos += dir }
	  while (pos > 0 && isExtendingChar(line.text.charAt(pos)))
	  return pos
	}

	// This is needed in order to move 'visually' through bi-directional
	// text -- i.e., pressing left should make the cursor go left, even
	// when in RTL text. The tricky part is the 'jumps', where RTL and
	// LTR text touch each other. This often requires the cursor offset
	// to move more than one unit, in order to visually move one unit.
	function moveVisually(line, start, dir, byUnit) {
	  var bidi = getOrder(line)
	  if (!bidi) { return moveLogically(line, start, dir, byUnit) }
	  var pos = getBidiPartAt(bidi, start), part = bidi[pos]
	  var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit)

	  for (;;) {
	    if (target > part.from && target < part.to) { return target }
	    if (target == part.from || target == part.to) {
	      if (getBidiPartAt(bidi, target) == pos) { return target }
	      part = bidi[pos += dir]
	      return (dir > 0) == part.level % 2 ? part.to : part.from
	    } else {
	      part = bidi[pos += dir]
	      if (!part) { return null }
	      if ((dir > 0) == part.level % 2)
	        { target = moveInLine(line, part.to, -1, byUnit) }
	      else
	        { target = moveInLine(line, part.from, 1, byUnit) }
	    }
	  }
	}

	function moveLogically(line, start, dir, byUnit) {
	  var target = start + dir
	  if (byUnit) { while (target > 0 && isExtendingChar(line.text.charAt(target))) { target += dir } }
	  return target < 0 || target > line.text.length ? null : target
	}

	// Bidirectional ordering algorithm
	// See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
	// that this (partially) implements.

	// One-char codes used for character types:
	// L (L):   Left-to-Right
	// R (R):   Right-to-Left
	// r (AL):  Right-to-Left Arabic
	// 1 (EN):  European Number
	// + (ES):  European Number Separator
	// % (ET):  European Number Terminator
	// n (AN):  Arabic Number
	// , (CS):  Common Number Separator
	// m (NSM): Non-Spacing Mark
	// b (BN):  Boundary Neutral
	// s (B):   Paragraph Separator
	// t (S):   Segment Separator
	// w (WS):  Whitespace
	// N (ON):  Other Neutrals

	// Returns null if characters are ordered as they appear
	// (left-to-right), or an array of sections ({from, to, level}
	// objects) in the order in which they occur visually.
	var bidiOrdering = (function() {
	  // Character types for codepoints 0 to 0xff
	  var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
	  // Character types for codepoints 0x600 to 0x6f9
	  var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111"
	  function charType(code) {
	    if (code <= 0xf7) { return lowTypes.charAt(code) }
	    else if (0x590 <= code && code <= 0x5f4) { return "R" }
	    else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
	    else if (0x6ee <= code && code <= 0x8ac) { return "r" }
	    else if (0x2000 <= code && code <= 0x200b) { return "w" }
	    else if (code == 0x200c) { return "b" }
	    else { return "L" }
	  }

	  var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
	  var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/
	  // Browsers seem to always treat the boundaries of block elements as being L.
	  var outerType = "L"

	  function BidiSpan(level, from, to) {
	    this.level = level
	    this.from = from; this.to = to
	  }

	  return function(str) {
	    if (!bidiRE.test(str)) { return false }
	    var len = str.length, types = []
	    for (var i = 0; i < len; ++i)
	      { types.push(charType(str.charCodeAt(i))) }

	    // W1. Examine each non-spacing mark (NSM) in the level run, and
	    // change the type of the NSM to the type of the previous
	    // character. If the NSM is at the start of the level run, it will
	    // get the type of sor.
	    for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
	      var type = types[i$1]
	      if (type == "m") { types[i$1] = prev }
	      else { prev = type }
	    }

	    // W2. Search backwards from each instance of a European number
	    // until the first strong type (R, L, AL, or sor) is found. If an
	    // AL is found, change the type of the European number to Arabic
	    // number.
	    // W3. Change all ALs to R.
	    for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
	      var type$1 = types[i$2]
	      if (type$1 == "1" && cur == "r") { types[i$2] = "n" }
	      else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R" } }
	    }

	    // W4. A single European separator between two European numbers
	    // changes to a European number. A single common separator between
	    // two numbers of the same type changes to that type.
	    for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
	      var type$2 = types[i$3]
	      if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1" }
	      else if (type$2 == "," && prev$1 == types[i$3+1] &&
	               (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1 }
	      prev$1 = type$2
	    }

	    // W5. A sequence of European terminators adjacent to European
	    // numbers changes to all European numbers.
	    // W6. Otherwise, separators and terminators change to Other
	    // Neutral.
	    for (var i$4 = 0; i$4 < len; ++i$4) {
	      var type$3 = types[i$4]
	      if (type$3 == ",") { types[i$4] = "N" }
	      else if (type$3 == "%") {
	        var end = (void 0)
	        for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
	        var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N"
	        for (var j = i$4; j < end; ++j) { types[j] = replace }
	        i$4 = end - 1
	      }
	    }

	    // W7. Search backwards from each instance of a European number
	    // until the first strong type (R, L, or sor) is found. If an L is
	    // found, then change the type of the European number to L.
	    for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
	      var type$4 = types[i$5]
	      if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L" }
	      else if (isStrong.test(type$4)) { cur$1 = type$4 }
	    }

	    // N1. A sequence of neutrals takes the direction of the
	    // surrounding strong text if the text on both sides has the same
	    // direction. European and Arabic numbers act as if they were R in
	    // terms of their influence on neutrals. Start-of-level-run (sor)
	    // and end-of-level-run (eor) are used at level run boundaries.
	    // N2. Any remaining neutrals take the embedding direction.
	    for (var i$6 = 0; i$6 < len; ++i$6) {
	      if (isNeutral.test(types[i$6])) {
	        var end$1 = (void 0)
	        for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
	        var before = (i$6 ? types[i$6-1] : outerType) == "L"
	        var after = (end$1 < len ? types[end$1] : outerType) == "L"
	        var replace$1 = before || after ? "L" : "R"
	        for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1 }
	        i$6 = end$1 - 1
	      }
	    }

	    // Here we depart from the documented algorithm, in order to avoid
	    // building up an actual levels array. Since there are only three
	    // levels (0, 1, 2) in an implementation that doesn't take
	    // explicit embedding into account, we can build up the order on
	    // the fly, without following the level-based algorithm.
	    var order = [], m
	    for (var i$7 = 0; i$7 < len;) {
	      if (countsAsLeft.test(types[i$7])) {
	        var start = i$7
	        for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
	        order.push(new BidiSpan(0, start, i$7))
	      } else {
	        var pos = i$7, at = order.length
	        for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
	        for (var j$2 = pos; j$2 < i$7;) {
	          if (countsAsNum.test(types[j$2])) {
	            if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)) }
	            var nstart = j$2
	            for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
	            order.splice(at, 0, new BidiSpan(2, nstart, j$2))
	            pos = j$2
	          } else { ++j$2 }
	        }
	        if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)) }
	      }
	    }
	    if (order[0].level == 1 && (m = str.match(/^\s+/))) {
	      order[0].from = m[0].length
	      order.unshift(new BidiSpan(0, 0, m[0].length))
	    }
	    if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
	      lst(order).to -= m[0].length
	      order.push(new BidiSpan(0, len - m[0].length, len))
	    }
	    if (order[0].level == 2)
	      { order.unshift(new BidiSpan(1, order[0].to, order[0].to)) }
	    if (order[0].level != lst(order).level)
	      { order.push(new BidiSpan(order[0].level, len, len)) }

	    return order
	  }
	})()

	// Get the bidi ordering for the given line (and cache it). Returns
	// false for lines that are fully left-to-right, and an array of
	// BidiSpan objects otherwise.
	function getOrder(line) {
	  var order = line.order
	  if (order == null) { order = line.order = bidiOrdering(line.text) }
	  return order
	}

	// EVENT HANDLING

	// Lightweight event framework. on/off also work on DOM nodes,
	// registering native DOM handlers.

	var noHandlers = []

	var on = function(emitter, type, f) {
	  if (emitter.addEventListener) {
	    emitter.addEventListener(type, f, false)
	  } else if (emitter.attachEvent) {
	    emitter.attachEvent("on" + type, f)
	  } else {
	    var map = emitter._handlers || (emitter._handlers = {})
	    map[type] = (map[type] || noHandlers).concat(f)
	  }
	}

	function getHandlers(emitter, type) {
	  return emitter._handlers && emitter._handlers[type] || noHandlers
	}

	function off(emitter, type, f) {
	  if (emitter.removeEventListener) {
	    emitter.removeEventListener(type, f, false)
	  } else if (emitter.detachEvent) {
	    emitter.detachEvent("on" + type, f)
	  } else {
	    var map = emitter._handlers, arr = map && map[type]
	    if (arr) {
	      var index = indexOf(arr, f)
	      if (index > -1)
	        { map[type] = arr.slice(0, index).concat(arr.slice(index + 1)) }
	    }
	  }
	}

	function signal(emitter, type /*, values...*/) {
	  var handlers = getHandlers(emitter, type)
	  if (!handlers.length) { return }
	  var args = Array.prototype.slice.call(arguments, 2)
	  for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args) }
	}

	// The DOM events that CodeMirror handles can be overridden by
	// registering a (non-DOM) handler on the editor for the event name,
	// and preventDefault-ing the event in that handler.
	function signalDOMEvent(cm, e, override) {
	  if (typeof e == "string")
	    { e = {type: e, preventDefault: function() { this.defaultPrevented = true }} }
	  signal(cm, override || e.type, cm, e)
	  return e_defaultPrevented(e) || e.codemirrorIgnore
	}

	function signalCursorActivity(cm) {
	  var arr = cm._handlers && cm._handlers.cursorActivity
	  if (!arr) { return }
	  var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = [])
	  for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
	    { set.push(arr[i]) } }
	}

	function hasHandler(emitter, type) {
	  return getHandlers(emitter, type).length > 0
	}

	// Add on and off methods to a constructor's prototype, to make
	// registering events on such objects more convenient.
	function eventMixin(ctor) {
	  ctor.prototype.on = function(type, f) {on(this, type, f)}
	  ctor.prototype.off = function(type, f) {off(this, type, f)}
	}

	// Due to the fact that we still support jurassic IE versions, some
	// compatibility wrappers are needed.

	function e_preventDefault(e) {
	  if (e.preventDefault) { e.preventDefault() }
	  else { e.returnValue = false }
	}
	function e_stopPropagation(e) {
	  if (e.stopPropagation) { e.stopPropagation() }
	  else { e.cancelBubble = true }
	}
	function e_defaultPrevented(e) {
	  return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
	}
	function e_stop(e) {e_preventDefault(e); e_stopPropagation(e)}

	function e_target(e) {return e.target || e.srcElement}
	function e_button(e) {
	  var b = e.which
	  if (b == null) {
	    if (e.button & 1) { b = 1 }
	    else if (e.button & 2) { b = 3 }
	    else if (e.button & 4) { b = 2 }
	  }
	  if (mac && e.ctrlKey && b == 1) { b = 3 }
	  return b
	}

	// Detect drag-and-drop
	var dragAndDrop = function() {
	  // There is *some* kind of drag-and-drop support in IE6-8, but I
	  // couldn't get it to work yet.
	  if (ie && ie_version < 9) { return false }
	  var div = elt('div')
	  return "draggable" in div || "dragDrop" in div
	}()

	var zwspSupported
	function zeroWidthElement(measure) {
	  if (zwspSupported == null) {
	    var test = elt("span", "\u200b")
	    removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]))
	    if (measure.firstChild.offsetHeight != 0)
	      { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8) }
	  }
	  var node = zwspSupported ? elt("span", "\u200b") :
	    elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px")
	  node.setAttribute("cm-text", "")
	  return node
	}

	// Feature-detect IE's crummy client rect reporting for bidi text
	var badBidiRects
	function hasBadBidiRects(measure) {
	  if (badBidiRects != null) { return badBidiRects }
	  var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"))
	  var r0 = range(txt, 0, 1).getBoundingClientRect()
	  var r1 = range(txt, 1, 2).getBoundingClientRect()
	  removeChildren(measure)
	  if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
	  return badBidiRects = (r1.right - r0.right < 3)
	}

	// See if "".split is the broken IE version, if so, provide an
	// alternative way to split lines.
	var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
	  var pos = 0, result = [], l = string.length
	  while (pos <= l) {
	    var nl = string.indexOf("\n", pos)
	    if (nl == -1) { nl = string.length }
	    var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl)
	    var rt = line.indexOf("\r")
	    if (rt != -1) {
	      result.push(line.slice(0, rt))
	      pos += rt + 1
	    } else {
	      result.push(line)
	      pos = nl + 1
	    }
	  }
	  return result
	} : function (string) { return string.split(/\r\n?|\n/); }

	var hasSelection = window.getSelection ? function (te) {
	  try { return te.selectionStart != te.selectionEnd }
	  catch(e) { return false }
	} : function (te) {
	  var range
	  try {range = te.ownerDocument.selection.createRange()}
	  catch(e) {}
	  if (!range || range.parentElement() != te) { return false }
	  return range.compareEndPoints("StartToEnd", range) != 0
	}

	var hasCopyEvent = (function () {
	  var e = elt("div")
	  if ("oncopy" in e) { return true }
	  e.setAttribute("oncopy", "return;")
	  return typeof e.oncopy == "function"
	})()

	var badZoomedRects = null
	function hasBadZoomedRects(measure) {
	  if (badZoomedRects != null) { return badZoomedRects }
	  var node = removeChildrenAndAdd(measure, elt("span", "x"))
	  var normal = node.getBoundingClientRect()
	  var fromRange = range(node, 0, 1).getBoundingClientRect()
	  return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
	}

	var modes = {};
	var mimeModes = {};
	// Extra arguments are stored as the mode's dependencies, which is
	// used by (legacy) mechanisms like loadmode.js to automatically
	// load a mode. (Preferred mechanism is the require/define calls.)
	function defineMode(name, mode) {
	  if (arguments.length > 2)
	    { mode.dependencies = Array.prototype.slice.call(arguments, 2) }
	  modes[name] = mode
	}

	function defineMIME(mime, spec) {
	  mimeModes[mime] = spec
	}

	// Given a MIME type, a {name, ...options} config object, or a name
	// string, return a mode config object.
	function resolveMode(spec) {
	  if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
	    spec = mimeModes[spec]
	  } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
	    var found = mimeModes[spec.name]
	    if (typeof found == "string") { found = {name: found} }
	    spec = createObj(found, spec)
	    spec.name = found.name
	  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
	    return resolveMode("application/xml")
	  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
	    return resolveMode("application/json")
	  }
	  if (typeof spec == "string") { return {name: spec} }
	  else { return spec || {name: "null"} }
	}

	// Given a mode spec (anything that resolveMode accepts), find and
	// initialize an actual mode object.
	function getMode(options, spec) {
	  spec = resolveMode(spec)
	  var mfactory = modes[spec.name]
	  if (!mfactory) { return getMode(options, "text/plain") }
	  var modeObj = mfactory(options, spec)
	  if (modeExtensions.hasOwnProperty(spec.name)) {
	    var exts = modeExtensions[spec.name]
	    for (var prop in exts) {
	      if (!exts.hasOwnProperty(prop)) { continue }
	      if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop] }
	      modeObj[prop] = exts[prop]
	    }
	  }
	  modeObj.name = spec.name
	  if (spec.helperType) { modeObj.helperType = spec.helperType }
	  if (spec.modeProps) { for (var prop$1 in spec.modeProps)
	    { modeObj[prop$1] = spec.modeProps[prop$1] } }

	  return modeObj
	}

	// This can be used to attach properties to mode objects from
	// outside the actual mode definition.
	var modeExtensions = {}
	function extendMode(mode, properties) {
	  var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {})
	  copyObj(properties, exts)
	}

	function copyState(mode, state) {
	  if (state === true) { return state }
	  if (mode.copyState) { return mode.copyState(state) }
	  var nstate = {}
	  for (var n in state) {
	    var val = state[n]
	    if (val instanceof Array) { val = val.concat([]) }
	    nstate[n] = val
	  }
	  return nstate
	}

	// Given a mode and a state (for that mode), find the inner mode and
	// state at the position that the state refers to.
	function innerMode(mode, state) {
	  var info
	  while (mode.innerMode) {
	    info = mode.innerMode(state)
	    if (!info || info.mode == mode) { break }
	    state = info.state
	    mode = info.mode
	  }
	  return info || {mode: mode, state: state}
	}

	function startState(mode, a1, a2) {
	  return mode.startState ? mode.startState(a1, a2) : true
	}

	// STRING STREAM

	// Fed to the mode parsers, provides helper functions to make
	// parsers more succinct.

	var StringStream = function(string, tabSize) {
	  this.pos = this.start = 0
	  this.string = string
	  this.tabSize = tabSize || 8
	  this.lastColumnPos = this.lastColumnValue = 0
	  this.lineStart = 0
	}

	StringStream.prototype = {
	  eol: function() {return this.pos >= this.string.length},
	  sol: function() {return this.pos == this.lineStart},
	  peek: function() {return this.string.charAt(this.pos) || undefined},
	  next: function() {
	    if (this.pos < this.string.length)
	      { return this.string.charAt(this.pos++) }
	  },
	  eat: function(match) {
	    var ch = this.string.charAt(this.pos)
	    var ok
	    if (typeof match == "string") { ok = ch == match }
	    else { ok = ch && (match.test ? match.test(ch) : match(ch)) }
	    if (ok) {++this.pos; return ch}
	  },
	  eatWhile: function(match) {
	    var start = this.pos
	    while (this.eat(match)){}
	    return this.pos > start
	  },
	  eatSpace: function() {
	    var this$1 = this;

	    var start = this.pos
	    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this$1.pos }
	    return this.pos > start
	  },
	  skipToEnd: function() {this.pos = this.string.length},
	  skipTo: function(ch) {
	    var found = this.string.indexOf(ch, this.pos)
	    if (found > -1) {this.pos = found; return true}
	  },
	  backUp: function(n) {this.pos -= n},
	  column: function() {
	    if (this.lastColumnPos < this.start) {
	      this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue)
	      this.lastColumnPos = this.start
	    }
	    return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
	  },
	  indentation: function() {
	    return countColumn(this.string, null, this.tabSize) -
	      (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
	  },
	  match: function(pattern, consume, caseInsensitive) {
	    if (typeof pattern == "string") {
	      var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; }
	      var substr = this.string.substr(this.pos, pattern.length)
	      if (cased(substr) == cased(pattern)) {
	        if (consume !== false) { this.pos += pattern.length }
	        return true
	      }
	    } else {
	      var match = this.string.slice(this.pos).match(pattern)
	      if (match && match.index > 0) { return null }
	      if (match && consume !== false) { this.pos += match[0].length }
	      return match
	    }
	  },
	  current: function(){return this.string.slice(this.start, this.pos)},
	  hideFirstChars: function(n, inner) {
	    this.lineStart += n
	    try { return inner() }
	    finally { this.lineStart -= n }
	  }
	}

	// Compute a style array (an array starting with a mode generation
	// -- for invalidation -- followed by pairs of end positions and
	// style strings), which is used to highlight the tokens on the
	// line.
	function highlightLine(cm, line, state, forceToEnd) {
	  // A styles array always starts with a number identifying the
	  // mode/overlays that it is based on (for easy invalidation).
	  var st = [cm.state.modeGen], lineClasses = {}
	  // Compute the base array of styles
	  runMode(cm, line.text, cm.doc.mode, state, function (end, style) { return st.push(end, style); },
	    lineClasses, forceToEnd)

	  // Run overlays, adjust style array.
	  var loop = function ( o ) {
	    var overlay = cm.state.overlays[o], i = 1, at = 0
	    runMode(cm, line.text, overlay.mode, true, function (end, style) {
	      var start = i
	      // Ensure there's a token end at the current position, and that i points at it
	      while (at < end) {
	        var i_end = st[i]
	        if (i_end > end)
	          { st.splice(i, 1, end, st[i+1], i_end) }
	        i += 2
	        at = Math.min(end, i_end)
	      }
	      if (!style) { return }
	      if (overlay.opaque) {
	        st.splice(start, i - start, end, "overlay " + style)
	        i = start + 2
	      } else {
	        for (; start < i; start += 2) {
	          var cur = st[start+1]
	          st[start+1] = (cur ? cur + " " : "") + "overlay " + style
	        }
	      }
	    }, lineClasses)
	  };

	  for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

	  return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
	}

	function getLineStyles(cm, line, updateFrontier) {
	  if (!line.styles || line.styles[0] != cm.state.modeGen) {
	    var state = getStateBefore(cm, lineNo(line))
	    var result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state)
	    line.stateAfter = state
	    line.styles = result.styles
	    if (result.classes) { line.styleClasses = result.classes }
	    else if (line.styleClasses) { line.styleClasses = null }
	    if (updateFrontier === cm.doc.frontier) { cm.doc.frontier++ }
	  }
	  return line.styles
	}

	function getStateBefore(cm, n, precise) {
	  var doc = cm.doc, display = cm.display
	  if (!doc.mode.startState) { return true }
	  var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter
	  if (!state) { state = startState(doc.mode) }
	  else { state = copyState(doc.mode, state) }
	  doc.iter(pos, n, function (line) {
	    processLine(cm, line.text, state)
	    var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo
	    line.stateAfter = save ? copyState(doc.mode, state) : null
	    ++pos
	  })
	  if (precise) { doc.frontier = pos }
	  return state
	}

	// Lightweight form of highlight -- proceed over this line and
	// update state, but don't save a style array. Used for lines that
	// aren't currently visible.
	function processLine(cm, text, state, startAt) {
	  var mode = cm.doc.mode
	  var stream = new StringStream(text, cm.options.tabSize)
	  stream.start = stream.pos = startAt || 0
	  if (text == "") { callBlankLine(mode, state) }
	  while (!stream.eol()) {
	    readToken(mode, stream, state)
	    stream.start = stream.pos
	  }
	}

	function callBlankLine(mode, state) {
	  if (mode.blankLine) { return mode.blankLine(state) }
	  if (!mode.innerMode) { return }
	  var inner = innerMode(mode, state)
	  if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
	}

	function readToken(mode, stream, state, inner) {
	  for (var i = 0; i < 10; i++) {
	    if (inner) { inner[0] = innerMode(mode, state).mode }
	    var style = mode.token(stream, state)
	    if (stream.pos > stream.start) { return style }
	  }
	  throw new Error("Mode " + mode.name + " failed to advance stream.")
	}

	// Utility for getTokenAt and getLineTokens
	function takeToken(cm, pos, precise, asArray) {
	  var getObj = function (copy) { return ({
	    start: stream.start, end: stream.pos,
	    string: stream.current(),
	    type: style || null,
	    state: copy ? copyState(doc.mode, state) : state
	  }); }

	  var doc = cm.doc, mode = doc.mode, style
	  pos = clipPos(doc, pos)
	  var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise)
	  var stream = new StringStream(line.text, cm.options.tabSize), tokens
	  if (asArray) { tokens = [] }
	  while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
	    stream.start = stream.pos
	    style = readToken(mode, stream, state)
	    if (asArray) { tokens.push(getObj(true)) }
	  }
	  return asArray ? tokens : getObj()
	}

	function extractLineClasses(type, output) {
	  if (type) { for (;;) {
	    var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/)
	    if (!lineClass) { break }
	    type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length)
	    var prop = lineClass[1] ? "bgClass" : "textClass"
	    if (output[prop] == null)
	      { output[prop] = lineClass[2] }
	    else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
	      { output[prop] += " " + lineClass[2] }
	  } }
	  return type
	}

	// Run the given mode's parser over a line, calling f for each token.
	function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
	  var flattenSpans = mode.flattenSpans
	  if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans }
	  var curStart = 0, curStyle = null
	  var stream = new StringStream(text, cm.options.tabSize), style
	  var inner = cm.options.addModeClass && [null]
	  if (text == "") { extractLineClasses(callBlankLine(mode, state), lineClasses) }
	  while (!stream.eol()) {
	    if (stream.pos > cm.options.maxHighlightLength) {
	      flattenSpans = false
	      if (forceToEnd) { processLine(cm, text, state, stream.pos) }
	      stream.pos = text.length
	      style = null
	    } else {
	      style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses)
	    }
	    if (inner) {
	      var mName = inner[0].name
	      if (mName) { style = "m-" + (style ? mName + " " + style : mName) }
	    }
	    if (!flattenSpans || curStyle != style) {
	      while (curStart < stream.start) {
	        curStart = Math.min(stream.start, curStart + 5000)
	        f(curStart, curStyle)
	      }
	      curStyle = style
	    }
	    stream.start = stream.pos
	  }
	  while (curStart < stream.pos) {
	    // Webkit seems to refuse to render text nodes longer than 57444
	    // characters, and returns inaccurate measurements in nodes
	    // starting around 5000 chars.
	    var pos = Math.min(stream.pos, curStart + 5000)
	    f(pos, curStyle)
	    curStart = pos
	  }
	}

	// Finds the line to start with when starting a parse. Tries to
	// find a line with a stateAfter, so that it can start with a
	// valid state. If that fails, it returns the line with the
	// smallest indentation, which tends to need the least context to
	// parse correctly.
	function findStartLine(cm, n, precise) {
	  var minindent, minline, doc = cm.doc
	  var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100)
	  for (var search = n; search > lim; --search) {
	    if (search <= doc.first) { return doc.first }
	    var line = getLine(doc, search - 1)
	    if (line.stateAfter && (!precise || search <= doc.frontier)) { return search }
	    var indented = countColumn(line.text, null, cm.options.tabSize)
	    if (minline == null || minindent > indented) {
	      minline = search - 1
	      minindent = indented
	    }
	  }
	  return minline
	}

	// LINE DATA STRUCTURE

	// Line objects. These hold state related to a line, including
	// highlighting info (the styles array).
	function Line(text, markedSpans, estimateHeight) {
	  this.text = text
	  attachMarkedSpans(this, markedSpans)
	  this.height = estimateHeight ? estimateHeight(this) : 1
	}
	eventMixin(Line)
	Line.prototype.lineNo = function() { return lineNo(this) }

	// Change the content (text, markers) of a line. Automatically
	// invalidates cached information and tries to re-estimate the
	// line's height.
	function updateLine(line, text, markedSpans, estimateHeight) {
	  line.text = text
	  if (line.stateAfter) { line.stateAfter = null }
	  if (line.styles) { line.styles = null }
	  if (line.order != null) { line.order = null }
	  detachMarkedSpans(line)
	  attachMarkedSpans(line, markedSpans)
	  var estHeight = estimateHeight ? estimateHeight(line) : 1
	  if (estHeight != line.height) { updateLineHeight(line, estHeight) }
	}

	// Detach a line from the document tree and its markers.
	function cleanUpLine(line) {
	  line.parent = null
	  detachMarkedSpans(line)
	}

	// Convert a style as returned by a mode (either null, or a string
	// containing one or more styles) to a CSS style. This is cached,
	// and also looks for line-wide styles.
	var styleToClassCache = {};
	var styleToClassCacheWithMode = {};
	function interpretTokenStyle(style, options) {
	  if (!style || /^\s*$/.test(style)) { return null }
	  var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache
	  return cache[style] ||
	    (cache[style] = style.replace(/\S+/g, "cm-$&"))
	}

	// Render the DOM representation of the text of a line. Also builds
	// up a 'line map', which points at the DOM nodes that represent
	// specific stretches of text, and is used by the measuring code.
	// The returned object contains the DOM node, this map, and
	// information about line-wide styles that were set by the mode.
	function buildLineContent(cm, lineView) {
	  // The padding-right forces the element to have a 'border', which
	  // is needed on Webkit to be able to get line-level bounding
	  // rectangles for it (in measureChar).
	  var content = elt("span", null, null, webkit ? "padding-right: .1px" : null)
	  var builder = {pre: elt("pre", [content], "CodeMirror-line"), content: content,
	                 col: 0, pos: 0, cm: cm,
	                 trailingSpace: false,
	                 splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")}
	  lineView.measure = {}

	  // Iterate over the logical lines that make up this visual line.
	  for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
	    var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0)
	    builder.pos = 0
	    builder.addToken = buildToken
	    // Optionally wire in some hacks into the token-rendering
	    // algorithm, to deal with browser quirks.
	    if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
	      { builder.addToken = buildTokenBadBidi(builder.addToken, order) }
	    builder.map = []
	    var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line)
	    insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate))
	    if (line.styleClasses) {
	      if (line.styleClasses.bgClass)
	        { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "") }
	      if (line.styleClasses.textClass)
	        { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "") }
	    }

	    // Ensure at least a single node is present, for measuring.
	    if (builder.map.length == 0)
	      { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))) }

	    // Store the map and a cache object for the current logical line
	    if (i == 0) {
	      lineView.measure.map = builder.map
	      lineView.measure.cache = {}
	    } else {
	      ;(lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
	      ;(lineView.measure.caches || (lineView.measure.caches = [])).push({})
	    }
	  }

	  // See issue #2901
	  if (webkit) {
	    var last = builder.content.lastChild
	    if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
	      { builder.content.className = "cm-tab-wrap-hack" }
	  }

	  signal(cm, "renderLine", cm, lineView.line, builder.pre)
	  if (builder.pre.className)
	    { builder.textClass = joinClasses(builder.pre.className, builder.textClass || "") }

	  return builder
	}

	function defaultSpecialCharPlaceholder(ch) {
	  var token = elt("span", "\u2022", "cm-invalidchar")
	  token.title = "\\u" + ch.charCodeAt(0).toString(16)
	  token.setAttribute("aria-label", token.title)
	  return token
	}

	// Build up the DOM representation for a single token, and add it to
	// the line map. Takes care to render special characters separately.
	function buildToken(builder, text, style, startStyle, endStyle, title, css) {
	  if (!text) { return }
	  var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text
	  var special = builder.cm.state.specialChars, mustWrap = false
	  var content
	  if (!special.test(text)) {
	    builder.col += text.length
	    content = document.createTextNode(displayText)
	    builder.map.push(builder.pos, builder.pos + text.length, content)
	    if (ie && ie_version < 9) { mustWrap = true }
	    builder.pos += text.length
	  } else {
	    content = document.createDocumentFragment()
	    var pos = 0
	    while (true) {
	      special.lastIndex = pos
	      var m = special.exec(text)
	      var skipped = m ? m.index - pos : text.length - pos
	      if (skipped) {
	        var txt = document.createTextNode(displayText.slice(pos, pos + skipped))
	        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])) }
	        else { content.appendChild(txt) }
	        builder.map.push(builder.pos, builder.pos + skipped, txt)
	        builder.col += skipped
	        builder.pos += skipped
	      }
	      if (!m) { break }
	      pos += skipped + 1
	      var txt$1 = (void 0)
	      if (m[0] == "\t") {
	        var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize
	        txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"))
	        txt$1.setAttribute("role", "presentation")
	        txt$1.setAttribute("cm-text", "\t")
	        builder.col += tabWidth
	      } else if (m[0] == "\r" || m[0] == "\n") {
	        txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"))
	        txt$1.setAttribute("cm-text", m[0])
	        builder.col += 1
	      } else {
	        txt$1 = builder.cm.options.specialCharPlaceholder(m[0])
	        txt$1.setAttribute("cm-text", m[0])
	        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])) }
	        else { content.appendChild(txt$1) }
	        builder.col += 1
	      }
	      builder.map.push(builder.pos, builder.pos + 1, txt$1)
	      builder.pos++
	    }
	  }
	  builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32
	  if (style || startStyle || endStyle || mustWrap || css) {
	    var fullStyle = style || ""
	    if (startStyle) { fullStyle += startStyle }
	    if (endStyle) { fullStyle += endStyle }
	    var token = elt("span", [content], fullStyle, css)
	    if (title) { token.title = title }
	    return builder.content.appendChild(token)
	  }
	  builder.content.appendChild(content)
	}

	function splitSpaces(text, trailingBefore) {
	  if (text.length > 1 && !/  /.test(text)) { return text }
	  var spaceBefore = trailingBefore, result = ""
	  for (var i = 0; i < text.length; i++) {
	    var ch = text.charAt(i)
	    if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
	      { ch = "\u00a0" }
	    result += ch
	    spaceBefore = ch == " "
	  }
	  return result
	}

	// Work around nonsense dimensions being reported for stretches of
	// right-to-left text.
	function buildTokenBadBidi(inner, order) {
	  return function (builder, text, style, startStyle, endStyle, title, css) {
	    style = style ? style + " cm-force-border" : "cm-force-border"
	    var start = builder.pos, end = start + text.length
	    for (;;) {
	      // Find the part that overlaps with the start of this text
	      var part = (void 0)
	      for (var i = 0; i < order.length; i++) {
	        part = order[i]
	        if (part.to > start && part.from <= start) { break }
	      }
	      if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, title, css) }
	      inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css)
	      startStyle = null
	      text = text.slice(part.to - start)
	      start = part.to
	    }
	  }
	}

	function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
	  var widget = !ignoreWidget && marker.widgetNode
	  if (widget) { builder.map.push(builder.pos, builder.pos + size, widget) }
	  if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
	    if (!widget)
	      { widget = builder.content.appendChild(document.createElement("span")) }
	    widget.setAttribute("cm-marker", marker.id)
	  }
	  if (widget) {
	    builder.cm.display.input.setUneditable(widget)
	    builder.content.appendChild(widget)
	  }
	  builder.pos += size
	  builder.trailingSpace = false
	}

	// Outputs a number of spans to make up a line, taking highlighting
	// and marked text into account.
	function insertLineContent(line, builder, styles) {
	  var spans = line.markedSpans, allText = line.text, at = 0
	  if (!spans) {
	    for (var i$1 = 1; i$1 < styles.length; i$1+=2)
	      { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)) }
	    return
	  }

	  var len = allText.length, pos = 0, i = 1, text = "", style, css
	  var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed
	  for (;;) {
	    if (nextChange == pos) { // Update current marker set
	      spanStyle = spanEndStyle = spanStartStyle = title = css = ""
	      collapsed = null; nextChange = Infinity
	      var foundBookmarks = [], endStyles = (void 0)
	      for (var j = 0; j < spans.length; ++j) {
	        var sp = spans[j], m = sp.marker
	        if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
	          foundBookmarks.push(m)
	        } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
	          if (sp.to != null && sp.to != pos && nextChange > sp.to) {
	            nextChange = sp.to
	            spanEndStyle = ""
	          }
	          if (m.className) { spanStyle += " " + m.className }
	          if (m.css) { css = (css ? css + ";" : "") + m.css }
	          if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle }
	          if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to) }
	          if (m.title && !title) { title = m.title }
	          if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
	            { collapsed = sp }
	        } else if (sp.from > pos && nextChange > sp.from) {
	          nextChange = sp.from
	        }
	      }
	      if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
	        { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1] } } }

	      if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
	        { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]) } }
	      if (collapsed && (collapsed.from || 0) == pos) {
	        buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
	                           collapsed.marker, collapsed.from == null)
	        if (collapsed.to == null) { return }
	        if (collapsed.to == pos) { collapsed = false }
	      }
	    }
	    if (pos >= len) { break }

	    var upto = Math.min(len, nextChange)
	    while (true) {
	      if (text) {
	        var end = pos + text.length
	        if (!collapsed) {
	          var tokenText = end > upto ? text.slice(0, upto - pos) : text
	          builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
	                           spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css)
	        }
	        if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
	        pos = end
	        spanStartStyle = ""
	      }
	      text = allText.slice(at, at = styles[i++])
	      style = interpretTokenStyle(styles[i++], builder.cm.options)
	    }
	  }
	}


	// These objects are used to represent the visible (currently drawn)
	// part of the document. A LineView may correspond to multiple
	// logical lines, if those are connected by collapsed ranges.
	function LineView(doc, line, lineN) {
	  // The starting line
	  this.line = line
	  // Continuing lines, if any
	  this.rest = visualLineContinued(line)
	  // Number of logical lines in this visual line
	  this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1
	  this.node = this.text = null
	  this.hidden = lineIsHidden(doc, line)
	}

	// Create a range of LineView objects for the given lines.
	function buildViewArray(cm, from, to) {
	  var array = [], nextPos
	  for (var pos = from; pos < to; pos = nextPos) {
	    var view = new LineView(cm.doc, getLine(cm.doc, pos), pos)
	    nextPos = pos + view.size
	    array.push(view)
	  }
	  return array
	}

	var operationGroup = null

	function pushOperation(op) {
	  if (operationGroup) {
	    operationGroup.ops.push(op)
	  } else {
	    op.ownsGroup = operationGroup = {
	      ops: [op],
	      delayedCallbacks: []
	    }
	  }
	}

	function fireCallbacksForOps(group) {
	  // Calls delayed callbacks and cursorActivity handlers until no
	  // new ones appear
	  var callbacks = group.delayedCallbacks, i = 0
	  do {
	    for (; i < callbacks.length; i++)
	      { callbacks[i].call(null) }
	    for (var j = 0; j < group.ops.length; j++) {
	      var op = group.ops[j]
	      if (op.cursorActivityHandlers)
	        { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
	          { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm) } }
	    }
	  } while (i < callbacks.length)
	}

	function finishOperation(op, endCb) {
	  var group = op.ownsGroup
	  if (!group) { return }

	  try { fireCallbacksForOps(group) }
	  finally {
	    operationGroup = null
	    endCb(group)
	  }
	}

	var orphanDelayedCallbacks = null

	// Often, we want to signal events at a point where we are in the
	// middle of some work, but don't want the handler to start calling
	// other methods on the editor, which might be in an inconsistent
	// state or simply not expect any other events to happen.
	// signalLater looks whether there are any handlers, and schedules
	// them to be executed when the last operation ends, or, if no
	// operation is active, when a timeout fires.
	function signalLater(emitter, type /*, values...*/) {
	  var arr = getHandlers(emitter, type)
	  if (!arr.length) { return }
	  var args = Array.prototype.slice.call(arguments, 2), list
	  if (operationGroup) {
	    list = operationGroup.delayedCallbacks
	  } else if (orphanDelayedCallbacks) {
	    list = orphanDelayedCallbacks
	  } else {
	    list = orphanDelayedCallbacks = []
	    setTimeout(fireOrphanDelayed, 0)
	  }
	  var loop = function ( i ) {
	    list.push(function () { return arr[i].apply(null, args); })
	  };

	  for (var i = 0; i < arr.length; ++i)
	    loop( i );
	}

	function fireOrphanDelayed() {
	  var delayed = orphanDelayedCallbacks
	  orphanDelayedCallbacks = null
	  for (var i = 0; i < delayed.length; ++i) { delayed[i]() }
	}

	// When an aspect of a line changes, a string is added to
	// lineView.changes. This updates the relevant part of the line's
	// DOM structure.
	function updateLineForChanges(cm, lineView, lineN, dims) {
	  for (var j = 0; j < lineView.changes.length; j++) {
	    var type = lineView.changes[j]
	    if (type == "text") { updateLineText(cm, lineView) }
	    else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims) }
	    else if (type == "class") { updateLineClasses(lineView) }
	    else if (type == "widget") { updateLineWidgets(cm, lineView, dims) }
	  }
	  lineView.changes = null
	}

	// Lines with gutter elements, widgets or a background class need to
	// be wrapped, and have the extra elements added to the wrapper div
	function ensureLineWrapped(lineView) {
	  if (lineView.node == lineView.text) {
	    lineView.node = elt("div", null, null, "position: relative")
	    if (lineView.text.parentNode)
	      { lineView.text.parentNode.replaceChild(lineView.node, lineView.text) }
	    lineView.node.appendChild(lineView.text)
	    if (ie && ie_version < 8) { lineView.node.style.zIndex = 2 }
	  }
	  return lineView.node
	}

	function updateLineBackground(lineView) {
	  var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass
	  if (cls) { cls += " CodeMirror-linebackground" }
	  if (lineView.background) {
	    if (cls) { lineView.background.className = cls }
	    else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null }
	  } else if (cls) {
	    var wrap = ensureLineWrapped(lineView)
	    lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild)
	  }
	}

	// Wrapper around buildLineContent which will reuse the structure
	// in display.externalMeasured when possible.
	function getLineContent(cm, lineView) {
	  var ext = cm.display.externalMeasured
	  if (ext && ext.line == lineView.line) {
	    cm.display.externalMeasured = null
	    lineView.measure = ext.measure
	    return ext.built
	  }
	  return buildLineContent(cm, lineView)
	}

	// Redraw the line's text. Interacts with the background and text
	// classes because the mode may output tokens that influence these
	// classes.
	function updateLineText(cm, lineView) {
	  var cls = lineView.text.className
	  var built = getLineContent(cm, lineView)
	  if (lineView.text == lineView.node) { lineView.node = built.pre }
	  lineView.text.parentNode.replaceChild(built.pre, lineView.text)
	  lineView.text = built.pre
	  if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
	    lineView.bgClass = built.bgClass
	    lineView.textClass = built.textClass
	    updateLineClasses(lineView)
	  } else if (cls) {
	    lineView.text.className = cls
	  }
	}

	function updateLineClasses(lineView) {
	  updateLineBackground(lineView)
	  if (lineView.line.wrapClass)
	    { ensureLineWrapped(lineView).className = lineView.line.wrapClass }
	  else if (lineView.node != lineView.text)
	    { lineView.node.className = "" }
	  var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass
	  lineView.text.className = textClass || ""
	}

	function updateLineGutter(cm, lineView, lineN, dims) {
	  if (lineView.gutter) {
	    lineView.node.removeChild(lineView.gutter)
	    lineView.gutter = null
	  }
	  if (lineView.gutterBackground) {
	    lineView.node.removeChild(lineView.gutterBackground)
	    lineView.gutterBackground = null
	  }
	  if (lineView.line.gutterClass) {
	    var wrap = ensureLineWrapped(lineView)
	    lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
	                                    ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"))
	    wrap.insertBefore(lineView.gutterBackground, lineView.text)
	  }
	  var markers = lineView.line.gutterMarkers
	  if (cm.options.lineNumbers || markers) {
	    var wrap$1 = ensureLineWrapped(lineView)
	    var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"))
	    cm.display.input.setUneditable(gutterWrap)
	    wrap$1.insertBefore(gutterWrap, lineView.text)
	    if (lineView.line.gutterClass)
	      { gutterWrap.className += " " + lineView.line.gutterClass }
	    if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
	      { lineView.lineNumber = gutterWrap.appendChild(
	        elt("div", lineNumberFor(cm.options, lineN),
	            "CodeMirror-linenumber CodeMirror-gutter-elt",
	            ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))) }
	    if (markers) { for (var k = 0; k < cm.options.gutters.length; ++k) {
	      var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id]
	      if (found)
	        { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
	                                   ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))) }
	    } }
	  }
	}

	function updateLineWidgets(cm, lineView, dims) {
	  if (lineView.alignable) { lineView.alignable = null }
	  for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
	    next = node.nextSibling
	    if (node.className == "CodeMirror-linewidget")
	      { lineView.node.removeChild(node) }
	  }
	  insertLineWidgets(cm, lineView, dims)
	}

	// Build a line's DOM representation from scratch
	function buildLineElement(cm, lineView, lineN, dims) {
	  var built = getLineContent(cm, lineView)
	  lineView.text = lineView.node = built.pre
	  if (built.bgClass) { lineView.bgClass = built.bgClass }
	  if (built.textClass) { lineView.textClass = built.textClass }

	  updateLineClasses(lineView)
	  updateLineGutter(cm, lineView, lineN, dims)
	  insertLineWidgets(cm, lineView, dims)
	  return lineView.node
	}

	// A lineView may contain multiple logical lines (when merged by
	// collapsed spans). The widgets for all of them need to be drawn.
	function insertLineWidgets(cm, lineView, dims) {
	  insertLineWidgetsFor(cm, lineView.line, lineView, dims, true)
	  if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
	    { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false) } }
	}

	function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
	  if (!line.widgets) { return }
	  var wrap = ensureLineWrapped(lineView)
	  for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
	    var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget")
	    if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true") }
	    positionLineWidget(widget, node, lineView, dims)
	    cm.display.input.setUneditable(node)
	    if (allowAbove && widget.above)
	      { wrap.insertBefore(node, lineView.gutter || lineView.text) }
	    else
	      { wrap.appendChild(node) }
	    signalLater(widget, "redraw")
	  }
	}

	function positionLineWidget(widget, node, lineView, dims) {
	  if (widget.noHScroll) {
	    ;(lineView.alignable || (lineView.alignable = [])).push(node)
	    var width = dims.wrapperWidth
	    node.style.left = dims.fixedPos + "px"
	    if (!widget.coverGutter) {
	      width -= dims.gutterTotalWidth
	      node.style.paddingLeft = dims.gutterTotalWidth + "px"
	    }
	    node.style.width = width + "px"
	  }
	  if (widget.coverGutter) {
	    node.style.zIndex = 5
	    node.style.position = "relative"
	    if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px" }
	  }
	}

	function widgetHeight(widget) {
	  if (widget.height != null) { return widget.height }
	  var cm = widget.doc.cm
	  if (!cm) { return 0 }
	  if (!contains(document.body, widget.node)) {
	    var parentStyle = "position: relative;"
	    if (widget.coverGutter)
	      { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;" }
	    if (widget.noHScroll)
	      { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;" }
	    removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle))
	  }
	  return widget.height = widget.node.parentNode.offsetHeight
	}

	// Return true when the given mouse event happened in a widget
	function eventInWidget(display, e) {
	  for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
	    if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
	        (n.parentNode == display.sizer && n != display.mover))
	      { return true }
	  }
	}

	// POSITION MEASUREMENT

	function paddingTop(display) {return display.lineSpace.offsetTop}
	function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
	function paddingH(display) {
	  if (display.cachedPaddingH) { return display.cachedPaddingH }
	  var e = removeChildrenAndAdd(display.measure, elt("pre", "x"))
	  var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
	  var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)}
	  if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data }
	  return data
	}

	function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
	function displayWidth(cm) {
	  return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
	}
	function displayHeight(cm) {
	  return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
	}

	// Ensure the lineView.wrapping.heights array is populated. This is
	// an array of bottom offsets for the lines that make up a drawn
	// line. When lineWrapping is on, there might be more than one
	// height.
	function ensureLineHeights(cm, lineView, rect) {
	  var wrapping = cm.options.lineWrapping
	  var curWidth = wrapping && displayWidth(cm)
	  if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
	    var heights = lineView.measure.heights = []
	    if (wrapping) {
	      lineView.measure.width = curWidth
	      var rects = lineView.text.firstChild.getClientRects()
	      for (var i = 0; i < rects.length - 1; i++) {
	        var cur = rects[i], next = rects[i + 1]
	        if (Math.abs(cur.bottom - next.bottom) > 2)
	          { heights.push((cur.bottom + next.top) / 2 - rect.top) }
	      }
	    }
	    heights.push(rect.bottom - rect.top)
	  }
	}

	// Find a line map (mapping character offsets to text nodes) and a
	// measurement cache for the given line number. (A line view might
	// contain multiple lines when collapsed ranges are present.)
	function mapFromLineView(lineView, line, lineN) {
	  if (lineView.line == line)
	    { return {map: lineView.measure.map, cache: lineView.measure.cache} }
	  for (var i = 0; i < lineView.rest.length; i++)
	    { if (lineView.rest[i] == line)
	      { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
	  for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
	    { if (lineNo(lineView.rest[i$1]) > lineN)
	      { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
	}

	// Render a line into the hidden node display.externalMeasured. Used
	// when measurement is needed for a line that's not in the viewport.
	function updateExternalMeasurement(cm, line) {
	  line = visualLine(line)
	  var lineN = lineNo(line)
	  var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN)
	  view.lineN = lineN
	  var built = view.built = buildLineContent(cm, view)
	  view.text = built.pre
	  removeChildrenAndAdd(cm.display.lineMeasure, built.pre)
	  return view
	}

	// Get a {top, bottom, left, right} box (in line-local coordinates)
	// for a given character.
	function measureChar(cm, line, ch, bias) {
	  return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
	}

	// Find a line view that corresponds to the given line number.
	function findViewForLine(cm, lineN) {
	  if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
	    { return cm.display.view[findViewIndex(cm, lineN)] }
	  var ext = cm.display.externalMeasured
	  if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
	    { return ext }
	}

	// Measurement can be split in two steps, the set-up work that
	// applies to the whole line, and the measurement of the actual
	// character. Functions like coordsChar, that need to do a lot of
	// measurements in a row, can thus ensure that the set-up work is
	// only done once.
	function prepareMeasureForLine(cm, line) {
	  var lineN = lineNo(line)
	  var view = findViewForLine(cm, lineN)
	  if (view && !view.text) {
	    view = null
	  } else if (view && view.changes) {
	    updateLineForChanges(cm, view, lineN, getDimensions(cm))
	    cm.curOp.forceUpdate = true
	  }
	  if (!view)
	    { view = updateExternalMeasurement(cm, line) }

	  var info = mapFromLineView(view, line, lineN)
	  return {
	    line: line, view: view, rect: null,
	    map: info.map, cache: info.cache, before: info.before,
	    hasHeights: false
	  }
	}

	// Given a prepared measurement object, measures the position of an
	// actual character (or fetches it from the cache).
	function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
	  if (prepared.before) { ch = -1 }
	  var key = ch + (bias || ""), found
	  if (prepared.cache.hasOwnProperty(key)) {
	    found = prepared.cache[key]
	  } else {
	    if (!prepared.rect)
	      { prepared.rect = prepared.view.text.getBoundingClientRect() }
	    if (!prepared.hasHeights) {
	      ensureLineHeights(cm, prepared.view, prepared.rect)
	      prepared.hasHeights = true
	    }
	    found = measureCharInner(cm, prepared, ch, bias)
	    if (!found.bogus) { prepared.cache[key] = found }
	  }
	  return {left: found.left, right: found.right,
	          top: varHeight ? found.rtop : found.top,
	          bottom: varHeight ? found.rbottom : found.bottom}
	}

	var nullRect = {left: 0, right: 0, top: 0, bottom: 0}

	function nodeAndOffsetInLineMap(map, ch, bias) {
	  var node, start, end, collapse, mStart, mEnd
	  // First, search the line map for the text node corresponding to,
	  // or closest to, the target character.
	  for (var i = 0; i < map.length; i += 3) {
	    mStart = map[i]
	    mEnd = map[i + 1]
	    if (ch < mStart) {
	      start = 0; end = 1
	      collapse = "left"
	    } else if (ch < mEnd) {
	      start = ch - mStart
	      end = start + 1
	    } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
	      end = mEnd - mStart
	      start = end - 1
	      if (ch >= mEnd) { collapse = "right" }
	    }
	    if (start != null) {
	      node = map[i + 2]
	      if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
	        { collapse = bias }
	      if (bias == "left" && start == 0)
	        { while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
	          node = map[(i -= 3) + 2]
	          collapse = "left"
	        } }
	      if (bias == "right" && start == mEnd - mStart)
	        { while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
	          node = map[(i += 3) + 2]
	          collapse = "right"
	        } }
	      break
	    }
	  }
	  return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
	}

	function getUsefulRect(rects, bias) {
	  var rect = nullRect
	  if (bias == "left") { for (var i = 0; i < rects.length; i++) {
	    if ((rect = rects[i]).left != rect.right) { break }
	  } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
	    if ((rect = rects[i$1]).left != rect.right) { break }
	  } }
	  return rect
	}

	function measureCharInner(cm, prepared, ch, bias) {
	  var place = nodeAndOffsetInLineMap(prepared.map, ch, bias)
	  var node = place.node, start = place.start, end = place.end, collapse = place.collapse

	  var rect
	  if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
	    for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
	      while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start }
	      while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end }
	      if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
	        { rect = node.parentNode.getBoundingClientRect() }
	      else
	        { rect = getUsefulRect(range(node, start, end).getClientRects(), bias) }
	      if (rect.left || rect.right || start == 0) { break }
	      end = start
	      start = start - 1
	      collapse = "right"
	    }
	    if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect) }
	  } else { // If it is a widget, simply get the box for the whole widget.
	    if (start > 0) { collapse = bias = "right" }
	    var rects
	    if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
	      { rect = rects[bias == "right" ? rects.length - 1 : 0] }
	    else
	      { rect = node.getBoundingClientRect() }
	  }
	  if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
	    var rSpan = node.parentNode.getClientRects()[0]
	    if (rSpan)
	      { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom} }
	    else
	      { rect = nullRect }
	  }

	  var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top
	  var mid = (rtop + rbot) / 2
	  var heights = prepared.view.measure.heights
	  var i = 0
	  for (; i < heights.length - 1; i++)
	    { if (mid < heights[i]) { break } }
	  var top = i ? heights[i - 1] : 0, bot = heights[i]
	  var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
	                right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
	                top: top, bottom: bot}
	  if (!rect.left && !rect.right) { result.bogus = true }
	  if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot }

	  return result
	}

	// Work around problem with bounding client rects on ranges being
	// returned incorrectly when zoomed on IE10 and below.
	function maybeUpdateRectForZooming(measure, rect) {
	  if (!window.screen || screen.logicalXDPI == null ||
	      screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
	    { return rect }
	  var scaleX = screen.logicalXDPI / screen.deviceXDPI
	  var scaleY = screen.logicalYDPI / screen.deviceYDPI
	  return {left: rect.left * scaleX, right: rect.right * scaleX,
	          top: rect.top * scaleY, bottom: rect.bottom * scaleY}
	}

	function clearLineMeasurementCacheFor(lineView) {
	  if (lineView.measure) {
	    lineView.measure.cache = {}
	    lineView.measure.heights = null
	    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
	      { lineView.measure.caches[i] = {} } }
	  }
	}

	function clearLineMeasurementCache(cm) {
	  cm.display.externalMeasure = null
	  removeChildren(cm.display.lineMeasure)
	  for (var i = 0; i < cm.display.view.length; i++)
	    { clearLineMeasurementCacheFor(cm.display.view[i]) }
	}

	function clearCaches(cm) {
	  clearLineMeasurementCache(cm)
	  cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null
	  if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true }
	  cm.display.lineNumChars = null
	}

	function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft }
	function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop }

	// Converts a {top, bottom, left, right} box from line-local
	// coordinates into another coordinate system. Context may be one of
	// "line", "div" (display.lineDiv), "local"./null (editor), "window",
	// or "page".
	function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
	  if (!includeWidgets && lineObj.widgets) { for (var i = 0; i < lineObj.widgets.length; ++i) { if (lineObj.widgets[i].above) {
	    var size = widgetHeight(lineObj.widgets[i])
	    rect.top += size; rect.bottom += size
	  } } }
	  if (context == "line") { return rect }
	  if (!context) { context = "local" }
	  var yOff = heightAtLine(lineObj)
	  if (context == "local") { yOff += paddingTop(cm.display) }
	  else { yOff -= cm.display.viewOffset }
	  if (context == "page" || context == "window") {
	    var lOff = cm.display.lineSpace.getBoundingClientRect()
	    yOff += lOff.top + (context == "window" ? 0 : pageScrollY())
	    var xOff = lOff.left + (context == "window" ? 0 : pageScrollX())
	    rect.left += xOff; rect.right += xOff
	  }
	  rect.top += yOff; rect.bottom += yOff
	  return rect
	}

	// Coverts a box from "div" coords to another coordinate system.
	// Context may be "window", "page", "div", or "local"./null.
	function fromCoordSystem(cm, coords, context) {
	  if (context == "div") { return coords }
	  var left = coords.left, top = coords.top
	  // First move into "page" coordinate system
	  if (context == "page") {
	    left -= pageScrollX()
	    top -= pageScrollY()
	  } else if (context == "local" || !context) {
	    var localBox = cm.display.sizer.getBoundingClientRect()
	    left += localBox.left
	    top += localBox.top
	  }

	  var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect()
	  return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
	}

	function charCoords(cm, pos, context, lineObj, bias) {
	  if (!lineObj) { lineObj = getLine(cm.doc, pos.line) }
	  return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
	}

	// Returns a box for a given cursor position, which may have an
	// 'other' property containing the position of the secondary cursor
	// on a bidi boundary.
	function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
	  lineObj = lineObj || getLine(cm.doc, pos.line)
	  if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj) }
	  function get(ch, right) {
	    var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight)
	    if (right) { m.left = m.right; } else { m.right = m.left }
	    return intoCoordSystem(cm, lineObj, m, context)
	  }
	  function getBidi(ch, partPos) {
	    var part = order[partPos], right = part.level % 2
	    if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
	      part = order[--partPos]
	      ch = bidiRight(part) - (part.level % 2 ? 0 : 1)
	      right = true
	    } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
	      part = order[++partPos]
	      ch = bidiLeft(part) - part.level % 2
	      right = false
	    }
	    if (right && ch == part.to && ch > part.from) { return get(ch - 1) }
	    return get(ch, right)
	  }
	  var order = getOrder(lineObj), ch = pos.ch
	  if (!order) { return get(ch) }
	  var partPos = getBidiPartAt(order, ch)
	  var val = getBidi(ch, partPos)
	  if (bidiOther != null) { val.other = getBidi(ch, bidiOther) }
	  return val
	}

	// Used to cheaply estimate the coordinates for a position. Used for
	// intermediate scroll updates.
	function estimateCoords(cm, pos) {
	  var left = 0
	  pos = clipPos(cm.doc, pos)
	  if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch }
	  var lineObj = getLine(cm.doc, pos.line)
	  var top = heightAtLine(lineObj) + paddingTop(cm.display)
	  return {left: left, right: left, top: top, bottom: top + lineObj.height}
	}

	// Positions returned by coordsChar contain some extra information.
	// xRel is the relative x position of the input coordinates compared
	// to the found position (so xRel > 0 means the coordinates are to
	// the right of the character position, for example). When outside
	// is true, that means the coordinates lie outside the line's
	// vertical range.
	function PosWithInfo(line, ch, outside, xRel) {
	  var pos = Pos(line, ch)
	  pos.xRel = xRel
	  if (outside) { pos.outside = true }
	  return pos
	}

	// Compute the character position closest to the given coordinates.
	// Input must be lineSpace-local ("div" coordinate system).
	function coordsChar(cm, x, y) {
	  var doc = cm.doc
	  y += cm.display.viewOffset
	  if (y < 0) { return PosWithInfo(doc.first, 0, true, -1) }
	  var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1
	  if (lineN > last)
	    { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1) }
	  if (x < 0) { x = 0 }

	  var lineObj = getLine(doc, lineN)
	  for (;;) {
	    var found = coordsCharInner(cm, lineObj, lineN, x, y)
	    var merged = collapsedSpanAtEnd(lineObj)
	    var mergedPos = merged && merged.find(0, true)
	    if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
	      { lineN = lineNo(lineObj = mergedPos.to.line) }
	    else
	      { return found }
	  }
	}

	function coordsCharInner(cm, lineObj, lineNo, x, y) {
	  var innerOff = y - heightAtLine(lineObj)
	  var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth
	  var preparedMeasure = prepareMeasureForLine(cm, lineObj)

	  function getX(ch) {
	    var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure)
	    wrongLine = true
	    if (innerOff > sp.bottom) { return sp.left - adjust }
	    else if (innerOff < sp.top) { return sp.left + adjust }
	    else { wrongLine = false }
	    return sp.left
	  }

	  var bidi = getOrder(lineObj), dist = lineObj.text.length
	  var from = lineLeft(lineObj), to = lineRight(lineObj)
	  var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine

	  if (x > toX) { return PosWithInfo(lineNo, to, toOutside, 1) }
	  // Do a binary search between these bounds.
	  for (;;) {
	    if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
	      var ch = x < fromX || x - fromX <= toX - x ? from : to
	      var outside = ch == from ? fromOutside : toOutside
	      var xDiff = x - (ch == from ? fromX : toX)
	      // This is a kludge to handle the case where the coordinates
	      // are after a line-wrapped line. We should replace it with a
	      // more general handling of cursor positions around line
	      // breaks. (Issue #4078)
	      if (toOutside && !bidi && !/\s/.test(lineObj.text.charAt(ch)) && xDiff > 0 &&
	          ch < lineObj.text.length && preparedMeasure.view.measure.heights.length > 1) {
	        var charSize = measureCharPrepared(cm, preparedMeasure, ch, "right")
	        if (innerOff <= charSize.bottom && innerOff >= charSize.top && Math.abs(x - charSize.right) < xDiff) {
	          outside = false
	          ch++
	          xDiff = x - charSize.right
	        }
	      }
	      while (isExtendingChar(lineObj.text.charAt(ch))) { ++ch }
	      var pos = PosWithInfo(lineNo, ch, outside, xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0)
	      return pos
	    }
	    var step = Math.ceil(dist / 2), middle = from + step
	    if (bidi) {
	      middle = from
	      for (var i = 0; i < step; ++i) { middle = moveVisually(lineObj, middle, 1) }
	    }
	    var middleX = getX(middle)
	    if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) { toX += 1000; } dist = step}
	    else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step}
	  }
	}

	var measureText
	// Compute the default text height.
	function textHeight(display) {
	  if (display.cachedTextHeight != null) { return display.cachedTextHeight }
	  if (measureText == null) {
	    measureText = elt("pre")
	    // Measure a bunch of lines, for browsers that compute
	    // fractional heights.
	    for (var i = 0; i < 49; ++i) {
	      measureText.appendChild(document.createTextNode("x"))
	      measureText.appendChild(elt("br"))
	    }
	    measureText.appendChild(document.createTextNode("x"))
	  }
	  removeChildrenAndAdd(display.measure, measureText)
	  var height = measureText.offsetHeight / 50
	  if (height > 3) { display.cachedTextHeight = height }
	  removeChildren(display.measure)
	  return height || 1
	}

	// Compute the default character width.
	function charWidth(display) {
	  if (display.cachedCharWidth != null) { return display.cachedCharWidth }
	  var anchor = elt("span", "xxxxxxxxxx")
	  var pre = elt("pre", [anchor])
	  removeChildrenAndAdd(display.measure, pre)
	  var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10
	  if (width > 2) { display.cachedCharWidth = width }
	  return width || 10
	}

	// Do a bulk-read of the DOM positions and sizes needed to draw the
	// view, so that we don't interleave reading and writing to the DOM.
	function getDimensions(cm) {
	  var d = cm.display, left = {}, width = {}
	  var gutterLeft = d.gutters.clientLeft
	  for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
	    left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft
	    width[cm.options.gutters[i]] = n.clientWidth
	  }
	  return {fixedPos: compensateForHScroll(d),
	          gutterTotalWidth: d.gutters.offsetWidth,
	          gutterLeft: left,
	          gutterWidth: width,
	          wrapperWidth: d.wrapper.clientWidth}
	}

	// Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
	// but using getBoundingClientRect to get a sub-pixel-accurate
	// result.
	function compensateForHScroll(display) {
	  return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
	}

	// Returns a function that estimates the height of a line, to use as
	// first approximation until the line becomes visible (and is thus
	// properly measurable).
	function estimateHeight(cm) {
	  var th = textHeight(cm.display), wrapping = cm.options.lineWrapping
	  var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3)
	  return function (line) {
	    if (lineIsHidden(cm.doc, line)) { return 0 }

	    var widgetsHeight = 0
	    if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
	      if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height }
	    } }

	    if (wrapping)
	      { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
	    else
	      { return widgetsHeight + th }
	  }
	}

	function estimateLineHeights(cm) {
	  var doc = cm.doc, est = estimateHeight(cm)
	  doc.iter(function (line) {
	    var estHeight = est(line)
	    if (estHeight != line.height) { updateLineHeight(line, estHeight) }
	  })
	}

	// Given a mouse event, find the corresponding position. If liberal
	// is false, it checks whether a gutter or scrollbar was clicked,
	// and returns null if it was. forRect is used by rectangular
	// selections, and tries to estimate a character position even for
	// coordinates beyond the right of the text.
	function posFromMouse(cm, e, liberal, forRect) {
	  var display = cm.display
	  if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

	  var x, y, space = display.lineSpace.getBoundingClientRect()
	  // Fails unpredictably on IE[67] when mouse is dragged around quickly.
	  try { x = e.clientX - space.left; y = e.clientY - space.top }
	  catch (e) { return null }
	  var coords = coordsChar(cm, x, y), line
	  if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
	    var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length
	    coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff))
	  }
	  return coords
	}

	// Find the view element corresponding to a given line. Return null
	// when the line isn't visible.
	function findViewIndex(cm, n) {
	  if (n >= cm.display.viewTo) { return null }
	  n -= cm.display.viewFrom
	  if (n < 0) { return null }
	  var view = cm.display.view
	  for (var i = 0; i < view.length; i++) {
	    n -= view[i].size
	    if (n < 0) { return i }
	  }
	}

	function updateSelection(cm) {
	  cm.display.input.showSelection(cm.display.input.prepareSelection())
	}

	function prepareSelection(cm, primary) {
	  var doc = cm.doc, result = {}
	  var curFragment = result.cursors = document.createDocumentFragment()
	  var selFragment = result.selection = document.createDocumentFragment()

	  for (var i = 0; i < doc.sel.ranges.length; i++) {
	    if (primary === false && i == doc.sel.primIndex) { continue }
	    var range = doc.sel.ranges[i]
	    if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) { continue }
	    var collapsed = range.empty()
	    if (collapsed || cm.options.showCursorWhenSelecting)
	      { drawSelectionCursor(cm, range.head, curFragment) }
	    if (!collapsed)
	      { drawSelectionRange(cm, range, selFragment) }
	  }
	  return result
	}

	// Draws a cursor for the given range
	function drawSelectionCursor(cm, head, output) {
	  var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine)

	  var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"))
	  cursor.style.left = pos.left + "px"
	  cursor.style.top = pos.top + "px"
	  cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px"

	  if (pos.other) {
	    // Secondary cursor, shown when on a 'jump' in bi-directional text
	    var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"))
	    otherCursor.style.display = ""
	    otherCursor.style.left = pos.other.left + "px"
	    otherCursor.style.top = pos.other.top + "px"
	    otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px"
	  }
	}

	// Draws the given range as a highlighted selection
	function drawSelectionRange(cm, range, output) {
	  var display = cm.display, doc = cm.doc
	  var fragment = document.createDocumentFragment()
	  var padding = paddingH(cm.display), leftSide = padding.left
	  var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right

	  function add(left, top, width, bottom) {
	    if (top < 0) { top = 0 }
	    top = Math.round(top)
	    bottom = Math.round(bottom)
	    fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")))
	  }

	  function drawForLine(line, fromArg, toArg) {
	    var lineObj = getLine(doc, line)
	    var lineLen = lineObj.text.length
	    var start, end
	    function coords(ch, bias) {
	      return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
	    }

	    iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir) {
	      var leftPos = coords(from, "left"), rightPos, left, right
	      if (from == to) {
	        rightPos = leftPos
	        left = right = leftPos.left
	      } else {
	        rightPos = coords(to - 1, "right")
	        if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp }
	        left = leftPos.left
	        right = rightPos.right
	      }
	      if (fromArg == null && from == 0) { left = leftSide }
	      if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
	        add(left, leftPos.top, null, leftPos.bottom)
	        left = leftSide
	        if (leftPos.bottom < rightPos.top) { add(left, leftPos.bottom, null, rightPos.top) }
	      }
	      if (toArg == null && to == lineLen) { right = rightSide }
	      if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
	        { start = leftPos }
	      if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
	        { end = rightPos }
	      if (left < leftSide + 1) { left = leftSide }
	      add(left, rightPos.top, right - left, rightPos.bottom)
	    })
	    return {start: start, end: end}
	  }

	  var sFrom = range.from(), sTo = range.to()
	  if (sFrom.line == sTo.line) {
	    drawForLine(sFrom.line, sFrom.ch, sTo.ch)
	  } else {
	    var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line)
	    var singleVLine = visualLine(fromLine) == visualLine(toLine)
	    var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end
	    var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start
	    if (singleVLine) {
	      if (leftEnd.top < rightStart.top - 2) {
	        add(leftEnd.right, leftEnd.top, null, leftEnd.bottom)
	        add(leftSide, rightStart.top, rightStart.left, rightStart.bottom)
	      } else {
	        add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom)
	      }
	    }
	    if (leftEnd.bottom < rightStart.top)
	      { add(leftSide, leftEnd.bottom, null, rightStart.top) }
	  }

	  output.appendChild(fragment)
	}

	// Cursor-blinking
	function restartBlink(cm) {
	  if (!cm.state.focused) { return }
	  var display = cm.display
	  clearInterval(display.blinker)
	  var on = true
	  display.cursorDiv.style.visibility = ""
	  if (cm.options.cursorBlinkRate > 0)
	    { display.blinker = setInterval(function () { return display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden"; },
	      cm.options.cursorBlinkRate) }
	  else if (cm.options.cursorBlinkRate < 0)
	    { display.cursorDiv.style.visibility = "hidden" }
	}

	function ensureFocus(cm) {
	  if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm) }
	}

	function delayBlurEvent(cm) {
	  cm.state.delayingBlurEvent = true
	  setTimeout(function () { if (cm.state.delayingBlurEvent) {
	    cm.state.delayingBlurEvent = false
	    onBlur(cm)
	  } }, 100)
	}

	function onFocus(cm, e) {
	  if (cm.state.delayingBlurEvent) { cm.state.delayingBlurEvent = false }

	  if (cm.options.readOnly == "nocursor") { return }
	  if (!cm.state.focused) {
	    signal(cm, "focus", cm, e)
	    cm.state.focused = true
	    addClass(cm.display.wrapper, "CodeMirror-focused")
	    // This test prevents this from firing when a context
	    // menu is closed (since the input reset would kill the
	    // select-all detection hack)
	    if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
	      cm.display.input.reset()
	      if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20) } // Issue #1730
	    }
	    cm.display.input.receivedFocus()
	  }
	  restartBlink(cm)
	}
	function onBlur(cm, e) {
	  if (cm.state.delayingBlurEvent) { return }

	  if (cm.state.focused) {
	    signal(cm, "blur", cm, e)
	    cm.state.focused = false
	    rmClass(cm.display.wrapper, "CodeMirror-focused")
	  }
	  clearInterval(cm.display.blinker)
	  setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false } }, 150)
	}

	// Re-align line numbers and gutter marks to compensate for
	// horizontal scrolling.
	function alignHorizontally(cm) {
	  var display = cm.display, view = display.view
	  if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
	  var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft
	  var gutterW = display.gutters.offsetWidth, left = comp + "px"
	  for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
	    if (cm.options.fixedGutter) {
	      if (view[i].gutter)
	        { view[i].gutter.style.left = left }
	      if (view[i].gutterBackground)
	        { view[i].gutterBackground.style.left = left }
	    }
	    var align = view[i].alignable
	    if (align) { for (var j = 0; j < align.length; j++)
	      { align[j].style.left = left } }
	  } }
	  if (cm.options.fixedGutter)
	    { display.gutters.style.left = (comp + gutterW) + "px" }
	}

	// Used to ensure that the line number gutter is still the right
	// size for the current document size. Returns true when an update
	// is needed.
	function maybeUpdateLineNumberWidth(cm) {
	  if (!cm.options.lineNumbers) { return false }
	  var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display
	  if (last.length != display.lineNumChars) {
	    var test = display.measure.appendChild(elt("div", [elt("div", last)],
	                                               "CodeMirror-linenumber CodeMirror-gutter-elt"))
	    var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW
	    display.lineGutter.style.width = ""
	    display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1
	    display.lineNumWidth = display.lineNumInnerWidth + padding
	    display.lineNumChars = display.lineNumInnerWidth ? last.length : -1
	    display.lineGutter.style.width = display.lineNumWidth + "px"
	    updateGutterSpace(cm)
	    return true
	  }
	  return false
	}

	// Read the actual heights of the rendered lines, and update their
	// stored heights to match.
	function updateHeightsInViewport(cm) {
	  var display = cm.display
	  var prevBottom = display.lineDiv.offsetTop
	  for (var i = 0; i < display.view.length; i++) {
	    var cur = display.view[i], height = (void 0)
	    if (cur.hidden) { continue }
	    if (ie && ie_version < 8) {
	      var bot = cur.node.offsetTop + cur.node.offsetHeight
	      height = bot - prevBottom
	      prevBottom = bot
	    } else {
	      var box = cur.node.getBoundingClientRect()
	      height = box.bottom - box.top
	    }
	    var diff = cur.line.height - height
	    if (height < 2) { height = textHeight(display) }
	    if (diff > .001 || diff < -.001) {
	      updateLineHeight(cur.line, height)
	      updateWidgetHeight(cur.line)
	      if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
	        { updateWidgetHeight(cur.rest[j]) } }
	    }
	  }
	}

	// Read and store the height of line widgets associated with the
	// given line.
	function updateWidgetHeight(line) {
	  if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i)
	    { line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight } }
	}

	// Compute the lines that are visible in a given viewport (defaults
	// the the current scroll position). viewport may contain top,
	// height, and ensure (see op.scrollToPos) properties.
	function visibleLines(display, doc, viewport) {
	  var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop
	  top = Math.floor(top - paddingTop(display))
	  var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight

	  var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom)
	  // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
	  // forces those lines into the viewport (if possible).
	  if (viewport && viewport.ensure) {
	    var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line
	    if (ensureFrom < from) {
	      from = ensureFrom
	      to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight)
	    } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
	      from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight)
	      to = ensureTo
	    }
	  }
	  return {from: from, to: Math.max(to, from + 1)}
	}

	// Sync the scrollable area and scrollbars, ensure the viewport
	// covers the visible area.
	function setScrollTop(cm, val) {
	  if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
	  cm.doc.scrollTop = val
	  if (!gecko) { updateDisplaySimple(cm, {top: val}) }
	  if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val }
	  cm.display.scrollbars.setScrollTop(val)
	  if (gecko) { updateDisplaySimple(cm) }
	  startWorker(cm, 100)
	}
	// Sync scroller and scrollbar, ensure the gutter elements are
	// aligned.
	function setScrollLeft(cm, val, isScroller) {
	  if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) { return }
	  val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth)
	  cm.doc.scrollLeft = val
	  alignHorizontally(cm)
	  if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val }
	  cm.display.scrollbars.setScrollLeft(val)
	}

	// Since the delta values reported on mouse wheel events are
	// unstandardized between browsers and even browser versions, and
	// generally horribly unpredictable, this code starts by measuring
	// the scroll effect that the first few mouse wheel events have,
	// and, from that, detects the way it can convert deltas to pixel
	// offsets afterwards.
	//
	// The reason we want to know the amount a wheel event will scroll
	// is that it gives us a chance to update the display before the
	// actual scrolling happens, reducing flickering.

	var wheelSamples = 0;
	var wheelPixelsPerUnit = null;
	// Fill in a browser-detected starting value on browsers where we
	// know one. These don't have to be accurate -- the result of them
	// being wrong would just be a slight flicker on the first wheel
	// scroll (if it is large enough).
	if (ie) { wheelPixelsPerUnit = -.53 }
	else if (gecko) { wheelPixelsPerUnit = 15 }
	else if (chrome) { wheelPixelsPerUnit = -.7 }
	else if (safari) { wheelPixelsPerUnit = -1/3 }

	function wheelEventDelta(e) {
	  var dx = e.wheelDeltaX, dy = e.wheelDeltaY
	  if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail }
	  if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail }
	  else if (dy == null) { dy = e.wheelDelta }
	  return {x: dx, y: dy}
	}
	function wheelEventPixels(e) {
	  var delta = wheelEventDelta(e)
	  delta.x *= wheelPixelsPerUnit
	  delta.y *= wheelPixelsPerUnit
	  return delta
	}

	function onScrollWheel(cm, e) {
	  var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y

	  var display = cm.display, scroll = display.scroller
	  // Quit if there's nothing to scroll here
	  var canScrollX = scroll.scrollWidth > scroll.clientWidth
	  var canScrollY = scroll.scrollHeight > scroll.clientHeight
	  if (!(dx && canScrollX || dy && canScrollY)) { return }

	  // Webkit browsers on OS X abort momentum scrolls when the target
	  // of the scroll event is removed from the scrollable element.
	  // This hack (see related code in patchDisplay) makes sure the
	  // element is kept around.
	  if (dy && mac && webkit) {
	    outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
	      for (var i = 0; i < view.length; i++) {
	        if (view[i].node == cur) {
	          cm.display.currentWheelTarget = cur
	          break outer
	        }
	      }
	    }
	  }

	  // On some browsers, horizontal scrolling will cause redraws to
	  // happen before the gutter has been realigned, causing it to
	  // wriggle around in a most unseemly way. When we have an
	  // estimated pixels/delta value, we just handle horizontal
	  // scrolling entirely here. It'll be slightly off from native, but
	  // better than glitching out.
	  if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
	    if (dy && canScrollY)
	      { setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight))) }
	    setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)))
	    // Only prevent default scrolling if vertical scrolling is
	    // actually possible. Otherwise, it causes vertical scroll
	    // jitter on OSX trackpads when deltaX is small and deltaY
	    // is large (issue #3579)
	    if (!dy || (dy && canScrollY))
	      { e_preventDefault(e) }
	    display.wheelStartX = null // Abort measurement, if in progress
	    return
	  }

	  // 'Project' the visible viewport to cover the area that is being
	  // scrolled into view (if we know enough to estimate it).
	  if (dy && wheelPixelsPerUnit != null) {
	    var pixels = dy * wheelPixelsPerUnit
	    var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight
	    if (pixels < 0) { top = Math.max(0, top + pixels - 50) }
	    else { bot = Math.min(cm.doc.height, bot + pixels + 50) }
	    updateDisplaySimple(cm, {top: top, bottom: bot})
	  }

	  if (wheelSamples < 20) {
	    if (display.wheelStartX == null) {
	      display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop
	      display.wheelDX = dx; display.wheelDY = dy
	      setTimeout(function () {
	        if (display.wheelStartX == null) { return }
	        var movedX = scroll.scrollLeft - display.wheelStartX
	        var movedY = scroll.scrollTop - display.wheelStartY
	        var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
	          (movedX && display.wheelDX && movedX / display.wheelDX)
	        display.wheelStartX = display.wheelStartY = null
	        if (!sample) { return }
	        wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1)
	        ++wheelSamples
	      }, 200)
	    } else {
	      display.wheelDX += dx; display.wheelDY += dy
	    }
	  }
	}

	// SCROLLBARS

	// Prepare DOM reads needed to update the scrollbars. Done in one
	// shot to minimize update/measure roundtrips.
	function measureForScrollbars(cm) {
	  var d = cm.display, gutterW = d.gutters.offsetWidth
	  var docH = Math.round(cm.doc.height + paddingVert(cm.display))
	  return {
	    clientHeight: d.scroller.clientHeight,
	    viewHeight: d.wrapper.clientHeight,
	    scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
	    viewWidth: d.wrapper.clientWidth,
	    barLeft: cm.options.fixedGutter ? gutterW : 0,
	    docHeight: docH,
	    scrollHeight: docH + scrollGap(cm) + d.barHeight,
	    nativeBarWidth: d.nativeBarWidth,
	    gutterWidth: gutterW
	  }
	}

	var NativeScrollbars = function(place, scroll, cm) {
	  this.cm = cm
	  var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
	  var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar")
	  place(vert); place(horiz)

	  on(vert, "scroll", function () {
	    if (vert.clientHeight) { scroll(vert.scrollTop, "vertical") }
	  })
	  on(horiz, "scroll", function () {
	    if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal") }
	  })

	  this.checkedZeroWidth = false
	  // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
	  if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px" }
	};

	NativeScrollbars.prototype.update = function (measure) {
	  var needsH = measure.scrollWidth > measure.clientWidth + 1
	  var needsV = measure.scrollHeight > measure.clientHeight + 1
	  var sWidth = measure.nativeBarWidth

	  if (needsV) {
	    this.vert.style.display = "block"
	    this.vert.style.bottom = needsH ? sWidth + "px" : "0"
	    var totalHeight = measure.viewHeight - (needsH ? sWidth : 0)
	    // A bug in IE8 can cause this value to be negative, so guard it.
	    this.vert.firstChild.style.height =
	      Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px"
	  } else {
	    this.vert.style.display = ""
	    this.vert.firstChild.style.height = "0"
	  }

	  if (needsH) {
	    this.horiz.style.display = "block"
	    this.horiz.style.right = needsV ? sWidth + "px" : "0"
	    this.horiz.style.left = measure.barLeft + "px"
	    var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0)
	    this.horiz.firstChild.style.width =
	      (measure.scrollWidth - measure.clientWidth + totalWidth) + "px"
	  } else {
	    this.horiz.style.display = ""
	    this.horiz.firstChild.style.width = "0"
	  }

	  if (!this.checkedZeroWidth && measure.clientHeight > 0) {
	    if (sWidth == 0) { this.zeroWidthHack() }
	    this.checkedZeroWidth = true
	  }

	  return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
	};

	NativeScrollbars.prototype.setScrollLeft = function (pos) {
	  if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos }
	  if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz) }
	};

	NativeScrollbars.prototype.setScrollTop = function (pos) {
	  if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos }
	  if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert) }
	};

	NativeScrollbars.prototype.zeroWidthHack = function () {
	  var w = mac && !mac_geMountainLion ? "12px" : "18px"
	  this.horiz.style.height = this.vert.style.width = w
	  this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none"
	  this.disableHoriz = new Delayed
	  this.disableVert = new Delayed
	};

	NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay) {
	  bar.style.pointerEvents = "auto"
	  function maybeDisable() {
	    // To find out whether the scrollbar is still visible, we
	    // check whether the element under the pixel in the bottom
	    // left corner of the scrollbar box is the scrollbar box
	    // itself (when the bar is still visible) or its filler child
	    // (when the bar is hidden). If it is still visible, we keep
	    // it enabled, if it's hidden, we disable pointer events.
	    var box = bar.getBoundingClientRect()
	    var elt = document.elementFromPoint(box.left + 1, box.bottom - 1)
	    if (elt != bar) { bar.style.pointerEvents = "none" }
	    else { delay.set(1000, maybeDisable) }
	  }
	  delay.set(1000, maybeDisable)
	};

	NativeScrollbars.prototype.clear = function () {
	  var parent = this.horiz.parentNode
	  parent.removeChild(this.horiz)
	  parent.removeChild(this.vert)
	};

	var NullScrollbars = function () {};

	NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
	NullScrollbars.prototype.setScrollLeft = function () {};
	NullScrollbars.prototype.setScrollTop = function () {};
	NullScrollbars.prototype.clear = function () {};

	function updateScrollbars(cm, measure) {
	  if (!measure) { measure = measureForScrollbars(cm) }
	  var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight
	  updateScrollbarsInner(cm, measure)
	  for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
	    if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
	      { updateHeightsInViewport(cm) }
	    updateScrollbarsInner(cm, measureForScrollbars(cm))
	    startWidth = cm.display.barWidth; startHeight = cm.display.barHeight
	  }
	}

	// Re-synchronize the fake scrollbars with the actual size of the
	// content.
	function updateScrollbarsInner(cm, measure) {
	  var d = cm.display
	  var sizes = d.scrollbars.update(measure)

	  d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px"
	  d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px"
	  d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent"

	  if (sizes.right && sizes.bottom) {
	    d.scrollbarFiller.style.display = "block"
	    d.scrollbarFiller.style.height = sizes.bottom + "px"
	    d.scrollbarFiller.style.width = sizes.right + "px"
	  } else { d.scrollbarFiller.style.display = "" }
	  if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
	    d.gutterFiller.style.display = "block"
	    d.gutterFiller.style.height = sizes.bottom + "px"
	    d.gutterFiller.style.width = measure.gutterWidth + "px"
	  } else { d.gutterFiller.style.display = "" }
	}

	var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars}

	function initScrollbars(cm) {
	  if (cm.display.scrollbars) {
	    cm.display.scrollbars.clear()
	    if (cm.display.scrollbars.addClass)
	      { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass) }
	  }

	  cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
	    cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller)
	    // Prevent clicks in the scrollbars from killing focus
	    on(node, "mousedown", function () {
	      if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0) }
	    })
	    node.setAttribute("cm-not-content", "true")
	  }, function (pos, axis) {
	    if (axis == "horizontal") { setScrollLeft(cm, pos) }
	    else { setScrollTop(cm, pos) }
	  }, cm)
	  if (cm.display.scrollbars.addClass)
	    { addClass(cm.display.wrapper, cm.display.scrollbars.addClass) }
	}

	// SCROLLING THINGS INTO VIEW

	// If an editor sits on the top or bottom of the window, partially
	// scrolled out of view, this ensures that the cursor is visible.
	function maybeScrollWindow(cm, coords) {
	  if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

	  var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null
	  if (coords.top + box.top < 0) { doScroll = true }
	  else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) { doScroll = false }
	  if (doScroll != null && !phantom) {
	    var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (coords.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (coords.left) + "px; width: 2px;"))
	    cm.display.lineSpace.appendChild(scrollNode)
	    scrollNode.scrollIntoView(doScroll)
	    cm.display.lineSpace.removeChild(scrollNode)
	  }
	}

	// Scroll a given position into view (immediately), verifying that
	// it actually became visible (as line heights are accurately
	// measured, the position of something may 'drift' during drawing).
	function scrollPosIntoView(cm, pos, end, margin) {
	  if (margin == null) { margin = 0 }
	  var coords
	  for (var limit = 0; limit < 5; limit++) {
	    var changed = false
	    coords = cursorCoords(cm, pos)
	    var endCoords = !end || end == pos ? coords : cursorCoords(cm, end)
	    var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
	                                       Math.min(coords.top, endCoords.top) - margin,
	                                       Math.max(coords.left, endCoords.left),
	                                       Math.max(coords.bottom, endCoords.bottom) + margin)
	    var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft
	    if (scrollPos.scrollTop != null) {
	      setScrollTop(cm, scrollPos.scrollTop)
	      if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true }
	    }
	    if (scrollPos.scrollLeft != null) {
	      setScrollLeft(cm, scrollPos.scrollLeft)
	      if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true }
	    }
	    if (!changed) { break }
	  }
	  return coords
	}

	// Scroll a given set of coordinates into view (immediately).
	function scrollIntoView(cm, x1, y1, x2, y2) {
	  var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2)
	  if (scrollPos.scrollTop != null) { setScrollTop(cm, scrollPos.scrollTop) }
	  if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft) }
	}

	// Calculate a new scroll position needed to scroll the given
	// rectangle into view. Returns an object with scrollTop and
	// scrollLeft properties. When these are undefined, the
	// vertical/horizontal position does not need to be adjusted.
	function calculateScrollPos(cm, x1, y1, x2, y2) {
	  var display = cm.display, snapMargin = textHeight(cm.display)
	  if (y1 < 0) { y1 = 0 }
	  var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop
	  var screen = displayHeight(cm), result = {}
	  if (y2 - y1 > screen) { y2 = y1 + screen }
	  var docBottom = cm.doc.height + paddingVert(display)
	  var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin
	  if (y1 < screentop) {
	    result.scrollTop = atTop ? 0 : y1
	  } else if (y2 > screentop + screen) {
	    var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen)
	    if (newTop != screentop) { result.scrollTop = newTop }
	  }

	  var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft
	  var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0)
	  var tooWide = x2 - x1 > screenw
	  if (tooWide) { x2 = x1 + screenw }
	  if (x1 < 10)
	    { result.scrollLeft = 0 }
	  else if (x1 < screenleft)
	    { result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10)) }
	  else if (x2 > screenw + screenleft - 3)
	    { result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw }
	  return result
	}

	// Store a relative adjustment to the scroll position in the current
	// operation (to be applied when the operation finishes).
	function addToScrollPos(cm, left, top) {
	  if (left != null || top != null) { resolveScrollToPos(cm) }
	  if (left != null)
	    { cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left }
	  if (top != null)
	    { cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top }
	}

	// Make sure that at the end of the operation the current cursor is
	// shown.
	function ensureCursorVisible(cm) {
	  resolveScrollToPos(cm)
	  var cur = cm.getCursor(), from = cur, to = cur
	  if (!cm.options.lineWrapping) {
	    from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur
	    to = Pos(cur.line, cur.ch + 1)
	  }
	  cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true}
	}

	// When an operation has its scrollToPos property set, and another
	// scroll action is applied before the end of the operation, this
	// 'simulates' scrolling that position into view in a cheap way, so
	// that the effect of intermediate scroll commands is not ignored.
	function resolveScrollToPos(cm) {
	  var range = cm.curOp.scrollToPos
	  if (range) {
	    cm.curOp.scrollToPos = null
	    var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to)
	    var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
	                                  Math.min(from.top, to.top) - range.margin,
	                                  Math.max(from.right, to.right),
	                                  Math.max(from.bottom, to.bottom) + range.margin)
	    cm.scrollTo(sPos.scrollLeft, sPos.scrollTop)
	  }
	}

	// Operations are used to wrap a series of changes to the editor
	// state in such a way that each change won't have to update the
	// cursor and display (which would be awkward, slow, and
	// error-prone). Instead, display updates are batched and then all
	// combined and executed at once.

	var nextOpId = 0
	// Start a new operation.
	function startOperation(cm) {
	  cm.curOp = {
	    cm: cm,
	    viewChanged: false,      // Flag that indicates that lines might need to be redrawn
	    startHeight: cm.doc.height, // Used to detect need to update scrollbar
	    forceUpdate: false,      // Used to force a redraw
	    updateInput: null,       // Whether to reset the input textarea
	    typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
	    changeObjs: null,        // Accumulated changes, for firing change events
	    cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
	    cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
	    selectionChanged: false, // Whether the selection needs to be redrawn
	    updateMaxLine: false,    // Set when the widest line needs to be determined anew
	    scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
	    scrollToPos: null,       // Used to scroll to a specific position
	    focus: false,
	    id: ++nextOpId           // Unique ID
	  }
	  pushOperation(cm.curOp)
	}

	// Finish an operation, updating the display and signalling delayed events
	function endOperation(cm) {
	  var op = cm.curOp
	  finishOperation(op, function (group) {
	    for (var i = 0; i < group.ops.length; i++)
	      { group.ops[i].cm.curOp = null }
	    endOperations(group)
	  })
	}

	// The DOM updates done when an operation finishes are batched so
	// that the minimum number of relayouts are required.
	function endOperations(group) {
	  var ops = group.ops
	  for (var i = 0; i < ops.length; i++) // Read DOM
	    { endOperation_R1(ops[i]) }
	  for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
	    { endOperation_W1(ops[i$1]) }
	  for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
	    { endOperation_R2(ops[i$2]) }
	  for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
	    { endOperation_W2(ops[i$3]) }
	  for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
	    { endOperation_finish(ops[i$4]) }
	}

	function endOperation_R1(op) {
	  var cm = op.cm, display = cm.display
	  maybeClipScrollbars(cm)
	  if (op.updateMaxLine) { findMaxLine(cm) }

	  op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
	    op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
	                       op.scrollToPos.to.line >= display.viewTo) ||
	    display.maxLineChanged && cm.options.lineWrapping
	  op.update = op.mustUpdate &&
	    new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate)
	}

	function endOperation_W1(op) {
	  op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update)
	}

	function endOperation_R2(op) {
	  var cm = op.cm, display = cm.display
	  if (op.updatedDisplay) { updateHeightsInViewport(cm) }

	  op.barMeasure = measureForScrollbars(cm)

	  // If the max line changed since it was last measured, measure it,
	  // and ensure the document's width matches it.
	  // updateDisplay_W2 will use these properties to do the actual resizing
	  if (display.maxLineChanged && !cm.options.lineWrapping) {
	    op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3
	    cm.display.sizerWidth = op.adjustWidthTo
	    op.barMeasure.scrollWidth =
	      Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth)
	    op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm))
	  }

	  if (op.updatedDisplay || op.selectionChanged)
	    { op.preparedSelection = display.input.prepareSelection(op.focus) }
	}

	function endOperation_W2(op) {
	  var cm = op.cm

	  if (op.adjustWidthTo != null) {
	    cm.display.sizer.style.minWidth = op.adjustWidthTo + "px"
	    if (op.maxScrollLeft < cm.doc.scrollLeft)
	      { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true) }
	    cm.display.maxLineChanged = false
	  }

	  var takeFocus = op.focus && op.focus == activeElt() && (!document.hasFocus || document.hasFocus())
	  if (op.preparedSelection)
	    { cm.display.input.showSelection(op.preparedSelection, takeFocus) }
	  if (op.updatedDisplay || op.startHeight != cm.doc.height)
	    { updateScrollbars(cm, op.barMeasure) }
	  if (op.updatedDisplay)
	    { setDocumentHeight(cm, op.barMeasure) }

	  if (op.selectionChanged) { restartBlink(cm) }

	  if (cm.state.focused && op.updateInput)
	    { cm.display.input.reset(op.typing) }
	  if (takeFocus) { ensureFocus(op.cm) }
	}

	function endOperation_finish(op) {
	  var cm = op.cm, display = cm.display, doc = cm.doc

	  if (op.updatedDisplay) { postUpdateDisplay(cm, op.update) }

	  // Abort mouse wheel delta measurement, when scrolling explicitly
	  if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
	    { display.wheelStartX = display.wheelStartY = null }

	  // Propagate the scroll position to the actual DOM scroller
	  if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
	    doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop))
	    display.scrollbars.setScrollTop(doc.scrollTop)
	    display.scroller.scrollTop = doc.scrollTop
	  }
	  if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
	    doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - display.scroller.clientWidth, op.scrollLeft))
	    display.scrollbars.setScrollLeft(doc.scrollLeft)
	    display.scroller.scrollLeft = doc.scrollLeft
	    alignHorizontally(cm)
	  }
	  // If we need to scroll a specific position into view, do so.
	  if (op.scrollToPos) {
	    var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
	                                   clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin)
	    if (op.scrollToPos.isCursor && cm.state.focused) { maybeScrollWindow(cm, coords) }
	  }

	  // Fire events for markers that are hidden/unidden by editing or
	  // undoing
	  var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers
	  if (hidden) { for (var i = 0; i < hidden.length; ++i)
	    { if (!hidden[i].lines.length) { signal(hidden[i], "hide") } } }
	  if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
	    { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide") } } }

	  if (display.wrapper.offsetHeight)
	    { doc.scrollTop = cm.display.scroller.scrollTop }

	  // Fire change events, and delayed event handlers
	  if (op.changeObjs)
	    { signal(cm, "changes", cm, op.changeObjs) }
	  if (op.update)
	    { op.update.finish() }
	}

	// Run the given function in an operation
	function runInOp(cm, f) {
	  if (cm.curOp) { return f() }
	  startOperation(cm)
	  try { return f() }
	  finally { endOperation(cm) }
	}
	// Wraps a function in an operation. Returns the wrapped function.
	function operation(cm, f) {
	  return function() {
	    if (cm.curOp) { return f.apply(cm, arguments) }
	    startOperation(cm)
	    try { return f.apply(cm, arguments) }
	    finally { endOperation(cm) }
	  }
	}
	// Used to add methods to editor and doc instances, wrapping them in
	// operations.
	function methodOp(f) {
	  return function() {
	    if (this.curOp) { return f.apply(this, arguments) }
	    startOperation(this)
	    try { return f.apply(this, arguments) }
	    finally { endOperation(this) }
	  }
	}
	function docMethodOp(f) {
	  return function() {
	    var cm = this.cm
	    if (!cm || cm.curOp) { return f.apply(this, arguments) }
	    startOperation(cm)
	    try { return f.apply(this, arguments) }
	    finally { endOperation(cm) }
	  }
	}

	// Updates the display.view data structure for a given change to the
	// document. From and to are in pre-change coordinates. Lendiff is
	// the amount of lines added or subtracted by the change. This is
	// used for changes that span multiple lines, or change the way
	// lines are divided into visual lines. regLineChange (below)
	// registers single-line changes.
	function regChange(cm, from, to, lendiff) {
	  if (from == null) { from = cm.doc.first }
	  if (to == null) { to = cm.doc.first + cm.doc.size }
	  if (!lendiff) { lendiff = 0 }

	  var display = cm.display
	  if (lendiff && to < display.viewTo &&
	      (display.updateLineNumbers == null || display.updateLineNumbers > from))
	    { display.updateLineNumbers = from }

	  cm.curOp.viewChanged = true

	  if (from >= display.viewTo) { // Change after
	    if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
	      { resetView(cm) }
	  } else if (to <= display.viewFrom) { // Change before
	    if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
	      resetView(cm)
	    } else {
	      display.viewFrom += lendiff
	      display.viewTo += lendiff
	    }
	  } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
	    resetView(cm)
	  } else if (from <= display.viewFrom) { // Top overlap
	    var cut = viewCuttingPoint(cm, to, to + lendiff, 1)
	    if (cut) {
	      display.view = display.view.slice(cut.index)
	      display.viewFrom = cut.lineN
	      display.viewTo += lendiff
	    } else {
	      resetView(cm)
	    }
	  } else if (to >= display.viewTo) { // Bottom overlap
	    var cut$1 = viewCuttingPoint(cm, from, from, -1)
	    if (cut$1) {
	      display.view = display.view.slice(0, cut$1.index)
	      display.viewTo = cut$1.lineN
	    } else {
	      resetView(cm)
	    }
	  } else { // Gap in the middle
	    var cutTop = viewCuttingPoint(cm, from, from, -1)
	    var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1)
	    if (cutTop && cutBot) {
	      display.view = display.view.slice(0, cutTop.index)
	        .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
	        .concat(display.view.slice(cutBot.index))
	      display.viewTo += lendiff
	    } else {
	      resetView(cm)
	    }
	  }

	  var ext = display.externalMeasured
	  if (ext) {
	    if (to < ext.lineN)
	      { ext.lineN += lendiff }
	    else if (from < ext.lineN + ext.size)
	      { display.externalMeasured = null }
	  }
	}

	// Register a change to a single line. Type must be one of "text",
	// "gutter", "class", "widget"
	function regLineChange(cm, line, type) {
	  cm.curOp.viewChanged = true
	  var display = cm.display, ext = cm.display.externalMeasured
	  if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
	    { display.externalMeasured = null }

	  if (line < display.viewFrom || line >= display.viewTo) { return }
	  var lineView = display.view[findViewIndex(cm, line)]
	  if (lineView.node == null) { return }
	  var arr = lineView.changes || (lineView.changes = [])
	  if (indexOf(arr, type) == -1) { arr.push(type) }
	}

	// Clear the view.
	function resetView(cm) {
	  cm.display.viewFrom = cm.display.viewTo = cm.doc.first
	  cm.display.view = []
	  cm.display.viewOffset = 0
	}

	function viewCuttingPoint(cm, oldN, newN, dir) {
	  var index = findViewIndex(cm, oldN), diff, view = cm.display.view
	  if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
	    { return {index: index, lineN: newN} }
	  var n = cm.display.viewFrom
	  for (var i = 0; i < index; i++)
	    { n += view[i].size }
	  if (n != oldN) {
	    if (dir > 0) {
	      if (index == view.length - 1) { return null }
	      diff = (n + view[index].size) - oldN
	      index++
	    } else {
	      diff = n - oldN
	    }
	    oldN += diff; newN += diff
	  }
	  while (visualLineNo(cm.doc, newN) != newN) {
	    if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
	    newN += dir * view[index - (dir < 0 ? 1 : 0)].size
	    index += dir
	  }
	  return {index: index, lineN: newN}
	}

	// Force the view to cover a given range, adding empty view element
	// or clipping off existing ones as needed.
	function adjustView(cm, from, to) {
	  var display = cm.display, view = display.view
	  if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
	    display.view = buildViewArray(cm, from, to)
	    display.viewFrom = from
	  } else {
	    if (display.viewFrom > from)
	      { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view) }
	    else if (display.viewFrom < from)
	      { display.view = display.view.slice(findViewIndex(cm, from)) }
	    display.viewFrom = from
	    if (display.viewTo < to)
	      { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)) }
	    else if (display.viewTo > to)
	      { display.view = display.view.slice(0, findViewIndex(cm, to)) }
	  }
	  display.viewTo = to
	}

	// Count the number of lines in the view whose DOM representation is
	// out of date (or nonexistent).
	function countDirtyView(cm) {
	  var view = cm.display.view, dirty = 0
	  for (var i = 0; i < view.length; i++) {
	    var lineView = view[i]
	    if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty }
	  }
	  return dirty
	}

	// HIGHLIGHT WORKER

	function startWorker(cm, time) {
	  if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
	    { cm.state.highlight.set(time, bind(highlightWorker, cm)) }
	}

	function highlightWorker(cm) {
	  var doc = cm.doc
	  if (doc.frontier < doc.first) { doc.frontier = doc.first }
	  if (doc.frontier >= cm.display.viewTo) { return }
	  var end = +new Date + cm.options.workTime
	  var state = copyState(doc.mode, getStateBefore(cm, doc.frontier))
	  var changedLines = []

	  doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
	    if (doc.frontier >= cm.display.viewFrom) { // Visible
	      var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength
	      var highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, true)
	      line.styles = highlighted.styles
	      var oldCls = line.styleClasses, newCls = highlighted.classes
	      if (newCls) { line.styleClasses = newCls }
	      else if (oldCls) { line.styleClasses = null }
	      var ischange = !oldStyles || oldStyles.length != line.styles.length ||
	        oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass)
	      for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i] }
	      if (ischange) { changedLines.push(doc.frontier) }
	      line.stateAfter = tooLong ? state : copyState(doc.mode, state)
	    } else {
	      if (line.text.length <= cm.options.maxHighlightLength)
	        { processLine(cm, line.text, state) }
	      line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null
	    }
	    ++doc.frontier
	    if (+new Date > end) {
	      startWorker(cm, cm.options.workDelay)
	      return true
	    }
	  })
	  if (changedLines.length) { runInOp(cm, function () {
	    for (var i = 0; i < changedLines.length; i++)
	      { regLineChange(cm, changedLines[i], "text") }
	  }) }
	}

	// DISPLAY DRAWING

	var DisplayUpdate = function(cm, viewport, force) {
	  var display = cm.display

	  this.viewport = viewport
	  // Store some values that we'll need later (but don't want to force a relayout for)
	  this.visible = visibleLines(display, cm.doc, viewport)
	  this.editorIsHidden = !display.wrapper.offsetWidth
	  this.wrapperHeight = display.wrapper.clientHeight
	  this.wrapperWidth = display.wrapper.clientWidth
	  this.oldDisplayWidth = displayWidth(cm)
	  this.force = force
	  this.dims = getDimensions(cm)
	  this.events = []
	};

	DisplayUpdate.prototype.signal = function (emitter, type) {
	  if (hasHandler(emitter, type))
	    { this.events.push(arguments) }
	};
	DisplayUpdate.prototype.finish = function () {
	    var this$1 = this;

	  for (var i = 0; i < this.events.length; i++)
	    { signal.apply(null, this$1.events[i]) }
	};

	function maybeClipScrollbars(cm) {
	  var display = cm.display
	  if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
	    display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth
	    display.heightForcer.style.height = scrollGap(cm) + "px"
	    display.sizer.style.marginBottom = -display.nativeBarWidth + "px"
	    display.sizer.style.borderRightWidth = scrollGap(cm) + "px"
	    display.scrollbarsClipped = true
	  }
	}

	// Does the actual updating of the line display. Bails out
	// (returning false) when there is nothing to be done and forced is
	// false.
	function updateDisplayIfNeeded(cm, update) {
	  var display = cm.display, doc = cm.doc

	  if (update.editorIsHidden) {
	    resetView(cm)
	    return false
	  }

	  // Bail out if the visible area is already rendered and nothing changed.
	  if (!update.force &&
	      update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
	      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
	      display.renderedView == display.view && countDirtyView(cm) == 0)
	    { return false }

	  if (maybeUpdateLineNumberWidth(cm)) {
	    resetView(cm)
	    update.dims = getDimensions(cm)
	  }

	  // Compute a suitable new viewport (from & to)
	  var end = doc.first + doc.size
	  var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first)
	  var to = Math.min(end, update.visible.to + cm.options.viewportMargin)
	  if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom) }
	  if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo) }
	  if (sawCollapsedSpans) {
	    from = visualLineNo(cm.doc, from)
	    to = visualLineEndNo(cm.doc, to)
	  }

	  var different = from != display.viewFrom || to != display.viewTo ||
	    display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth
	  adjustView(cm, from, to)

	  display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom))
	  // Position the mover div to align with the current scroll position
	  cm.display.mover.style.top = display.viewOffset + "px"

	  var toUpdate = countDirtyView(cm)
	  if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
	      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
	    { return false }

	  // For big changes, we hide the enclosing element during the
	  // update, since that speeds up the operations on most browsers.
	  var focused = activeElt()
	  if (toUpdate > 4) { display.lineDiv.style.display = "none" }
	  patchDisplay(cm, display.updateLineNumbers, update.dims)
	  if (toUpdate > 4) { display.lineDiv.style.display = "" }
	  display.renderedView = display.view
	  // There might have been a widget with a focused element that got
	  // hidden or updated, if so re-focus it.
	  if (focused && activeElt() != focused && focused.offsetHeight) { focused.focus() }

	  // Prevent selection and cursors from interfering with the scroll
	  // width and height.
	  removeChildren(display.cursorDiv)
	  removeChildren(display.selectionDiv)
	  display.gutters.style.height = display.sizer.style.minHeight = 0

	  if (different) {
	    display.lastWrapHeight = update.wrapperHeight
	    display.lastWrapWidth = update.wrapperWidth
	    startWorker(cm, 400)
	  }

	  display.updateLineNumbers = null

	  return true
	}

	function postUpdateDisplay(cm, update) {
	  var viewport = update.viewport

	  for (var first = true;; first = false) {
	    if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
	      // Clip forced viewport to actual scrollable area.
	      if (viewport && viewport.top != null)
	        { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)} }
	      // Updated line heights might result in the drawn area not
	      // actually covering the viewport. Keep looping until it does.
	      update.visible = visibleLines(cm.display, cm.doc, viewport)
	      if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
	        { break }
	    }
	    if (!updateDisplayIfNeeded(cm, update)) { break }
	    updateHeightsInViewport(cm)
	    var barMeasure = measureForScrollbars(cm)
	    updateSelection(cm)
	    updateScrollbars(cm, barMeasure)
	    setDocumentHeight(cm, barMeasure)
	  }

	  update.signal(cm, "update", cm)
	  if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
	    update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo)
	    cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo
	  }
	}

	function updateDisplaySimple(cm, viewport) {
	  var update = new DisplayUpdate(cm, viewport)
	  if (updateDisplayIfNeeded(cm, update)) {
	    updateHeightsInViewport(cm)
	    postUpdateDisplay(cm, update)
	    var barMeasure = measureForScrollbars(cm)
	    updateSelection(cm)
	    updateScrollbars(cm, barMeasure)
	    setDocumentHeight(cm, barMeasure)
	    update.finish()
	  }
	}

	// Sync the actual display DOM structure with display.view, removing
	// nodes for lines that are no longer in view, and creating the ones
	// that are not there yet, and updating the ones that are out of
	// date.
	function patchDisplay(cm, updateNumbersFrom, dims) {
	  var display = cm.display, lineNumbers = cm.options.lineNumbers
	  var container = display.lineDiv, cur = container.firstChild

	  function rm(node) {
	    var next = node.nextSibling
	    // Works around a throw-scroll bug in OS X Webkit
	    if (webkit && mac && cm.display.currentWheelTarget == node)
	      { node.style.display = "none" }
	    else
	      { node.parentNode.removeChild(node) }
	    return next
	  }

	  var view = display.view, lineN = display.viewFrom
	  // Loop over the elements in the view, syncing cur (the DOM nodes
	  // in display.lineDiv) with the view as we go.
	  for (var i = 0; i < view.length; i++) {
	    var lineView = view[i]
	    if (lineView.hidden) {
	    } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
	      var node = buildLineElement(cm, lineView, lineN, dims)
	      container.insertBefore(node, cur)
	    } else { // Already drawn
	      while (cur != lineView.node) { cur = rm(cur) }
	      var updateNumber = lineNumbers && updateNumbersFrom != null &&
	        updateNumbersFrom <= lineN && lineView.lineNumber
	      if (lineView.changes) {
	        if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false }
	        updateLineForChanges(cm, lineView, lineN, dims)
	      }
	      if (updateNumber) {
	        removeChildren(lineView.lineNumber)
	        lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)))
	      }
	      cur = lineView.node.nextSibling
	    }
	    lineN += lineView.size
	  }
	  while (cur) { cur = rm(cur) }
	}

	function updateGutterSpace(cm) {
	  var width = cm.display.gutters.offsetWidth
	  cm.display.sizer.style.marginLeft = width + "px"
	}

	function setDocumentHeight(cm, measure) {
	  cm.display.sizer.style.minHeight = measure.docHeight + "px"
	  cm.display.heightForcer.style.top = measure.docHeight + "px"
	  cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px"
	}

	// Rebuild the gutter elements, ensure the margin to the left of the
	// code matches their width.
	function updateGutters(cm) {
	  var gutters = cm.display.gutters, specs = cm.options.gutters
	  removeChildren(gutters)
	  var i = 0
	  for (; i < specs.length; ++i) {
	    var gutterClass = specs[i]
	    var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass))
	    if (gutterClass == "CodeMirror-linenumbers") {
	      cm.display.lineGutter = gElt
	      gElt.style.width = (cm.display.lineNumWidth || 1) + "px"
	    }
	  }
	  gutters.style.display = i ? "" : "none"
	  updateGutterSpace(cm)
	}

	// Make sure the gutters options contains the element
	// "CodeMirror-linenumbers" when the lineNumbers option is true.
	function setGuttersForLineNumbers(options) {
	  var found = indexOf(options.gutters, "CodeMirror-linenumbers")
	  if (found == -1 && options.lineNumbers) {
	    options.gutters = options.gutters.concat(["CodeMirror-linenumbers"])
	  } else if (found > -1 && !options.lineNumbers) {
	    options.gutters = options.gutters.slice(0)
	    options.gutters.splice(found, 1)
	  }
	}

	// Selection objects are immutable. A new one is created every time
	// the selection changes. A selection is one or more non-overlapping
	// (and non-touching) ranges, sorted, and an integer that indicates
	// which one is the primary selection (the one that's scrolled into
	// view, that getCursor returns, etc).
	function Selection(ranges, primIndex) {
	  this.ranges = ranges
	  this.primIndex = primIndex
	}

	Selection.prototype = {
	  primary: function() { return this.ranges[this.primIndex] },
	  equals: function(other) {
	    var this$1 = this;

	    if (other == this) { return true }
	    if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
	    for (var i = 0; i < this.ranges.length; i++) {
	      var here = this$1.ranges[i], there = other.ranges[i]
	      if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) { return false }
	    }
	    return true
	  },
	  deepCopy: function() {
	    var this$1 = this;

	    var out = []
	    for (var i = 0; i < this.ranges.length; i++)
	      { out[i] = new Range(copyPos(this$1.ranges[i].anchor), copyPos(this$1.ranges[i].head)) }
	    return new Selection(out, this.primIndex)
	  },
	  somethingSelected: function() {
	    var this$1 = this;

	    for (var i = 0; i < this.ranges.length; i++)
	      { if (!this$1.ranges[i].empty()) { return true } }
	    return false
	  },
	  contains: function(pos, end) {
	    var this$1 = this;

	    if (!end) { end = pos }
	    for (var i = 0; i < this.ranges.length; i++) {
	      var range = this$1.ranges[i]
	      if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
	        { return i }
	    }
	    return -1
	  }
	}

	function Range(anchor, head) {
	  this.anchor = anchor; this.head = head
	}

	Range.prototype = {
	  from: function() { return minPos(this.anchor, this.head) },
	  to: function() { return maxPos(this.anchor, this.head) },
	  empty: function() {
	    return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
	  }
	}

	// Take an unsorted, potentially overlapping set of ranges, and
	// build a selection out of it. 'Consumes' ranges array (modifying
	// it).
	function normalizeSelection(ranges, primIndex) {
	  var prim = ranges[primIndex]
	  ranges.sort(function (a, b) { return cmp(a.from(), b.from()); })
	  primIndex = indexOf(ranges, prim)
	  for (var i = 1; i < ranges.length; i++) {
	    var cur = ranges[i], prev = ranges[i - 1]
	    if (cmp(prev.to(), cur.from()) >= 0) {
	      var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to())
	      var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head
	      if (i <= primIndex) { --primIndex }
	      ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to))
	    }
	  }
	  return new Selection(ranges, primIndex)
	}

	function simpleSelection(anchor, head) {
	  return new Selection([new Range(anchor, head || anchor)], 0)
	}

	// Compute the position of the end of a change (its 'to' property
	// refers to the pre-change end).
	function changeEnd(change) {
	  if (!change.text) { return change.to }
	  return Pos(change.from.line + change.text.length - 1,
	             lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
	}

	// Adjust a position to refer to the post-change position of the
	// same text, or the end of the change if the change covers it.
	function adjustForChange(pos, change) {
	  if (cmp(pos, change.from) < 0) { return pos }
	  if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

	  var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch
	  if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch }
	  return Pos(line, ch)
	}

	function computeSelAfterChange(doc, change) {
	  var out = []
	  for (var i = 0; i < doc.sel.ranges.length; i++) {
	    var range = doc.sel.ranges[i]
	    out.push(new Range(adjustForChange(range.anchor, change),
	                       adjustForChange(range.head, change)))
	  }
	  return normalizeSelection(out, doc.sel.primIndex)
	}

	function offsetPos(pos, old, nw) {
	  if (pos.line == old.line)
	    { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
	  else
	    { return Pos(nw.line + (pos.line - old.line), pos.ch) }
	}

	// Used by replaceSelections to allow moving the selection to the
	// start or around the replaced test. Hint may be "start" or "around".
	function computeReplacedSel(doc, changes, hint) {
	  var out = []
	  var oldPrev = Pos(doc.first, 0), newPrev = oldPrev
	  for (var i = 0; i < changes.length; i++) {
	    var change = changes[i]
	    var from = offsetPos(change.from, oldPrev, newPrev)
	    var to = offsetPos(changeEnd(change), oldPrev, newPrev)
	    oldPrev = change.to
	    newPrev = to
	    if (hint == "around") {
	      var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0
	      out[i] = new Range(inv ? to : from, inv ? from : to)
	    } else {
	      out[i] = new Range(from, from)
	    }
	  }
	  return new Selection(out, doc.sel.primIndex)
	}

	// Used to get the editor into a consistent state again when options change.

	function loadMode(cm) {
	  cm.doc.mode = getMode(cm.options, cm.doc.modeOption)
	  resetModeState(cm)
	}

	function resetModeState(cm) {
	  cm.doc.iter(function (line) {
	    if (line.stateAfter) { line.stateAfter = null }
	    if (line.styles) { line.styles = null }
	  })
	  cm.doc.frontier = cm.doc.first
	  startWorker(cm, 100)
	  cm.state.modeGen++
	  if (cm.curOp) { regChange(cm) }
	}

	// DOCUMENT DATA STRUCTURE

	// By default, updates that start and end at the beginning of a line
	// are treated specially, in order to make the association of line
	// widgets and marker elements with the text behave more intuitive.
	function isWholeLineUpdate(doc, change) {
	  return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
	    (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
	}

	// Perform a change on the document data structure.
	function updateDoc(doc, change, markedSpans, estimateHeight) {
	  function spansFor(n) {return markedSpans ? markedSpans[n] : null}
	  function update(line, text, spans) {
	    updateLine(line, text, spans, estimateHeight)
	    signalLater(line, "change", line, change)
	  }
	  function linesFor(start, end) {
	    var result = []
	    for (var i = start; i < end; ++i)
	      { result.push(new Line(text[i], spansFor(i), estimateHeight)) }
	    return result
	  }

	  var from = change.from, to = change.to, text = change.text
	  var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line)
	  var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line

	  // Adjust the line structure
	  if (change.full) {
	    doc.insert(0, linesFor(0, text.length))
	    doc.remove(text.length, doc.size - text.length)
	  } else if (isWholeLineUpdate(doc, change)) {
	    // This is a whole-line replace. Treated specially to make
	    // sure line objects move the way they are supposed to.
	    var added = linesFor(0, text.length - 1)
	    update(lastLine, lastLine.text, lastSpans)
	    if (nlines) { doc.remove(from.line, nlines) }
	    if (added.length) { doc.insert(from.line, added) }
	  } else if (firstLine == lastLine) {
	    if (text.length == 1) {
	      update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans)
	    } else {
	      var added$1 = linesFor(1, text.length - 1)
	      added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight))
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
	      doc.insert(from.line + 1, added$1)
	    }
	  } else if (text.length == 1) {
	    update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0))
	    doc.remove(from.line + 1, nlines)
	  } else {
	    update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
	    update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans)
	    var added$2 = linesFor(1, text.length - 1)
	    if (nlines > 1) { doc.remove(from.line + 1, nlines - 1) }
	    doc.insert(from.line + 1, added$2)
	  }

	  signalLater(doc, "change", doc, change)
	}

	// Call f for all linked documents.
	function linkedDocs(doc, f, sharedHistOnly) {
	  function propagate(doc, skip, sharedHist) {
	    if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
	      var rel = doc.linked[i]
	      if (rel.doc == skip) { continue }
	      var shared = sharedHist && rel.sharedHist
	      if (sharedHistOnly && !shared) { continue }
	      f(rel.doc, shared)
	      propagate(rel.doc, doc, shared)
	    } }
	  }
	  propagate(doc, null, true)
	}

	// Attach a document to an editor.
	function attachDoc(cm, doc) {
	  if (doc.cm) { throw new Error("This document is already in use.") }
	  cm.doc = doc
	  doc.cm = cm
	  estimateLineHeights(cm)
	  loadMode(cm)
	  if (!cm.options.lineWrapping) { findMaxLine(cm) }
	  cm.options.mode = doc.modeOption
	  regChange(cm)
	}

	function History(startGen) {
	  // Arrays of change events and selections. Doing something adds an
	  // event to done and clears undo. Undoing moves events from done
	  // to undone, redoing moves them in the other direction.
	  this.done = []; this.undone = []
	  this.undoDepth = Infinity
	  // Used to track when changes can be merged into a single undo
	  // event
	  this.lastModTime = this.lastSelTime = 0
	  this.lastOp = this.lastSelOp = null
	  this.lastOrigin = this.lastSelOrigin = null
	  // Used by the isClean() method
	  this.generation = this.maxGeneration = startGen || 1
	}

	// Create a history change event from an updateDoc-style change
	// object.
	function historyChangeFromChange(doc, change) {
	  var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)}
	  attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1)
	  linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true)
	  return histChange
	}

	// Pop all selection events off the end of a history array. Stop at
	// a change event.
	function clearSelectionEvents(array) {
	  while (array.length) {
	    var last = lst(array)
	    if (last.ranges) { array.pop() }
	    else { break }
	  }
	}

	// Find the top change event in the history. Pop off selection
	// events that are in the way.
	function lastChangeEvent(hist, force) {
	  if (force) {
	    clearSelectionEvents(hist.done)
	    return lst(hist.done)
	  } else if (hist.done.length && !lst(hist.done).ranges) {
	    return lst(hist.done)
	  } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
	    hist.done.pop()
	    return lst(hist.done)
	  }
	}

	// Register a change in the history. Merges changes that are within
	// a single operation, or are close together with an origin that
	// allows merging (starting with "+") into a single event.
	function addChangeToHistory(doc, change, selAfter, opId) {
	  var hist = doc.history
	  hist.undone.length = 0
	  var time = +new Date, cur
	  var last

	  if ((hist.lastOp == opId ||
	       hist.lastOrigin == change.origin && change.origin &&
	       ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
	        change.origin.charAt(0) == "*")) &&
	      (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
	    // Merge this change into the last event
	    last = lst(cur.changes)
	    if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
	      // Optimized case for simple insertion -- don't want to add
	      // new changesets for every character typed
	      last.to = changeEnd(change)
	    } else {
	      // Add new sub-event
	      cur.changes.push(historyChangeFromChange(doc, change))
	    }
	  } else {
	    // Can not be merged, start a new event.
	    var before = lst(hist.done)
	    if (!before || !before.ranges)
	      { pushSelectionToHistory(doc.sel, hist.done) }
	    cur = {changes: [historyChangeFromChange(doc, change)],
	           generation: hist.generation}
	    hist.done.push(cur)
	    while (hist.done.length > hist.undoDepth) {
	      hist.done.shift()
	      if (!hist.done[0].ranges) { hist.done.shift() }
	    }
	  }
	  hist.done.push(selAfter)
	  hist.generation = ++hist.maxGeneration
	  hist.lastModTime = hist.lastSelTime = time
	  hist.lastOp = hist.lastSelOp = opId
	  hist.lastOrigin = hist.lastSelOrigin = change.origin

	  if (!last) { signal(doc, "historyAdded") }
	}

	function selectionEventCanBeMerged(doc, origin, prev, sel) {
	  var ch = origin.charAt(0)
	  return ch == "*" ||
	    ch == "+" &&
	    prev.ranges.length == sel.ranges.length &&
	    prev.somethingSelected() == sel.somethingSelected() &&
	    new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
	}

	// Called whenever the selection changes, sets the new selection as
	// the pending selection in the history, and pushes the old pending
	// selection into the 'done' array when it was significantly
	// different (in number of selected ranges, emptiness, or time).
	function addSelectionToHistory(doc, sel, opId, options) {
	  var hist = doc.history, origin = options && options.origin

	  // A new event is started when the previous origin does not match
	  // the current, or the origins don't allow matching. Origins
	  // starting with * are always merged, those starting with + are
	  // merged when similar and close together in time.
	  if (opId == hist.lastSelOp ||
	      (origin && hist.lastSelOrigin == origin &&
	       (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
	        selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
	    { hist.done[hist.done.length - 1] = sel }
	  else
	    { pushSelectionToHistory(sel, hist.done) }

	  hist.lastSelTime = +new Date
	  hist.lastSelOrigin = origin
	  hist.lastSelOp = opId
	  if (options && options.clearRedo !== false)
	    { clearSelectionEvents(hist.undone) }
	}

	function pushSelectionToHistory(sel, dest) {
	  var top = lst(dest)
	  if (!(top && top.ranges && top.equals(sel)))
	    { dest.push(sel) }
	}

	// Used to store marked span information in the history.
	function attachLocalSpans(doc, change, from, to) {
	  var existing = change["spans_" + doc.id], n = 0
	  doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
	    if (line.markedSpans)
	      { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans }
	    ++n
	  })
	}

	// When un/re-doing restores text containing marked spans, those
	// that have been explicitly cleared should not be restored.
	function removeClearedSpans(spans) {
	  if (!spans) { return null }
	  var out
	  for (var i = 0; i < spans.length; ++i) {
	    if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i) } }
	    else if (out) { out.push(spans[i]) }
	  }
	  return !out ? spans : out.length ? out : null
	}

	// Retrieve and filter the old marked spans stored in a change event.
	function getOldSpans(doc, change) {
	  var found = change["spans_" + doc.id]
	  if (!found) { return null }
	  var nw = []
	  for (var i = 0; i < change.text.length; ++i)
	    { nw.push(removeClearedSpans(found[i])) }
	  return nw
	}

	// Used for un/re-doing changes from the history. Combines the
	// result of computing the existing spans with the set of spans that
	// existed in the history (so that deleting around a span and then
	// undoing brings back the span).
	function mergeOldSpans(doc, change) {
	  var old = getOldSpans(doc, change)
	  var stretched = stretchSpansOverChange(doc, change)
	  if (!old) { return stretched }
	  if (!stretched) { return old }

	  for (var i = 0; i < old.length; ++i) {
	    var oldCur = old[i], stretchCur = stretched[i]
	    if (oldCur && stretchCur) {
	      spans: for (var j = 0; j < stretchCur.length; ++j) {
	        var span = stretchCur[j]
	        for (var k = 0; k < oldCur.length; ++k)
	          { if (oldCur[k].marker == span.marker) { continue spans } }
	        oldCur.push(span)
	      }
	    } else if (stretchCur) {
	      old[i] = stretchCur
	    }
	  }
	  return old
	}

	// Used both to provide a JSON-safe object in .getHistory, and, when
	// detaching a document, to split the history in two
	function copyHistoryArray(events, newGroup, instantiateSel) {
	  var copy = []
	  for (var i = 0; i < events.length; ++i) {
	    var event = events[i]
	    if (event.ranges) {
	      copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event)
	      continue
	    }
	    var changes = event.changes, newChanges = []
	    copy.push({changes: newChanges})
	    for (var j = 0; j < changes.length; ++j) {
	      var change = changes[j], m = (void 0)
	      newChanges.push({from: change.from, to: change.to, text: change.text})
	      if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
	        if (indexOf(newGroup, Number(m[1])) > -1) {
	          lst(newChanges)[prop] = change[prop]
	          delete change[prop]
	        }
	      } } }
	    }
	  }
	  return copy
	}

	// The 'scroll' parameter given to many of these indicated whether
	// the new cursor position should be scrolled into view after
	// modifying the selection.

	// If shift is held or the extend flag is set, extends a range to
	// include a given position (and optionally a second position).
	// Otherwise, simply returns the range between the given positions.
	// Used for cursor motion and such.
	function extendRange(doc, range, head, other) {
	  if (doc.cm && doc.cm.display.shift || doc.extend) {
	    var anchor = range.anchor
	    if (other) {
	      var posBefore = cmp(head, anchor) < 0
	      if (posBefore != (cmp(other, anchor) < 0)) {
	        anchor = head
	        head = other
	      } else if (posBefore != (cmp(head, other) < 0)) {
	        head = other
	      }
	    }
	    return new Range(anchor, head)
	  } else {
	    return new Range(other || head, head)
	  }
	}

	// Extend the primary selection range, discard the rest.
	function extendSelection(doc, head, other, options) {
	  setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options)
	}

	// Extend all selections (pos is an array of selections with length
	// equal the number of selections)
	function extendSelections(doc, heads, options) {
	  var out = []
	  for (var i = 0; i < doc.sel.ranges.length; i++)
	    { out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null) }
	  var newSel = normalizeSelection(out, doc.sel.primIndex)
	  setSelection(doc, newSel, options)
	}

	// Updates a single range in the selection.
	function replaceOneSelection(doc, i, range, options) {
	  var ranges = doc.sel.ranges.slice(0)
	  ranges[i] = range
	  setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options)
	}

	// Reset the selection to a single range.
	function setSimpleSelection(doc, anchor, head, options) {
	  setSelection(doc, simpleSelection(anchor, head), options)
	}

	// Give beforeSelectionChange handlers a change to influence a
	// selection update.
	function filterSelectionChange(doc, sel, options) {
	  var obj = {
	    ranges: sel.ranges,
	    update: function(ranges) {
	      var this$1 = this;

	      this.ranges = []
	      for (var i = 0; i < ranges.length; i++)
	        { this$1.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
	                                   clipPos(doc, ranges[i].head)) }
	    },
	    origin: options && options.origin
	  }
	  signal(doc, "beforeSelectionChange", doc, obj)
	  if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj) }
	  if (obj.ranges != sel.ranges) { return normalizeSelection(obj.ranges, obj.ranges.length - 1) }
	  else { return sel }
	}

	function setSelectionReplaceHistory(doc, sel, options) {
	  var done = doc.history.done, last = lst(done)
	  if (last && last.ranges) {
	    done[done.length - 1] = sel
	    setSelectionNoUndo(doc, sel, options)
	  } else {
	    setSelection(doc, sel, options)
	  }
	}

	// Set a new selection.
	function setSelection(doc, sel, options) {
	  setSelectionNoUndo(doc, sel, options)
	  addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options)
	}

	function setSelectionNoUndo(doc, sel, options) {
	  if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
	    { sel = filterSelectionChange(doc, sel, options) }

	  var bias = options && options.bias ||
	    (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1)
	  setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true))

	  if (!(options && options.scroll === false) && doc.cm)
	    { ensureCursorVisible(doc.cm) }
	}

	function setSelectionInner(doc, sel) {
	  if (sel.equals(doc.sel)) { return }

	  doc.sel = sel

	  if (doc.cm) {
	    doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true
	    signalCursorActivity(doc.cm)
	  }
	  signalLater(doc, "cursorActivity", doc)
	}

	// Verify that the selection does not partially select any atomic
	// marked ranges.
	function reCheckSelection(doc) {
	  setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll)
	}

	// Return a selection that does not partially select any atomic
	// ranges.
	function skipAtomicInSelection(doc, sel, bias, mayClear) {
	  var out
	  for (var i = 0; i < sel.ranges.length; i++) {
	    var range = sel.ranges[i]
	    var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i]
	    var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear)
	    var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear)
	    if (out || newAnchor != range.anchor || newHead != range.head) {
	      if (!out) { out = sel.ranges.slice(0, i) }
	      out[i] = new Range(newAnchor, newHead)
	    }
	  }
	  return out ? normalizeSelection(out, sel.primIndex) : sel
	}

	function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
	  var line = getLine(doc, pos.line)
	  if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
	    var sp = line.markedSpans[i], m = sp.marker
	    if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
	        (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
	      if (mayClear) {
	        signal(m, "beforeCursorEnter")
	        if (m.explicitlyCleared) {
	          if (!line.markedSpans) { break }
	          else {--i; continue}
	        }
	      }
	      if (!m.atomic) { continue }

	      if (oldPos) {
	        var near = m.find(dir < 0 ? 1 : -1), diff = (void 0)
	        if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
	          { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null) }
	        if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
	          { return skipAtomicInner(doc, near, pos, dir, mayClear) }
	      }

	      var far = m.find(dir < 0 ? -1 : 1)
	      if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
	        { far = movePos(doc, far, dir, far.line == pos.line ? line : null) }
	      return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
	    }
	  } }
	  return pos
	}

	// Ensure a given position is not inside an atomic range.
	function skipAtomic(doc, pos, oldPos, bias, mayClear) {
	  var dir = bias || 1
	  var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
	      (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
	      skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
	      (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true))
	  if (!found) {
	    doc.cantEdit = true
	    return Pos(doc.first, 0)
	  }
	  return found
	}

	function movePos(doc, pos, dir, line) {
	  if (dir < 0 && pos.ch == 0) {
	    if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
	    else { return null }
	  } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
	    if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
	    else { return null }
	  } else {
	    return new Pos(pos.line, pos.ch + dir)
	  }
	}

	function selectAll(cm) {
	  cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll)
	}

	// UPDATING

	// Allow "beforeChange" event handlers to influence a change
	function filterChange(doc, change, update) {
	  var obj = {
	    canceled: false,
	    from: change.from,
	    to: change.to,
	    text: change.text,
	    origin: change.origin,
	    cancel: function () { return obj.canceled = true; }
	  }
	  if (update) { obj.update = function (from, to, text, origin) {
	    if (from) { obj.from = clipPos(doc, from) }
	    if (to) { obj.to = clipPos(doc, to) }
	    if (text) { obj.text = text }
	    if (origin !== undefined) { obj.origin = origin }
	  } }
	  signal(doc, "beforeChange", doc, obj)
	  if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj) }

	  if (obj.canceled) { return null }
	  return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
	}

	// Apply a change to a document, and add it to the document's
	// history, and propagating it to all linked documents.
	function makeChange(doc, change, ignoreReadOnly) {
	  if (doc.cm) {
	    if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
	    if (doc.cm.state.suppressEdits) { return }
	  }

	  if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
	    change = filterChange(doc, change, true)
	    if (!change) { return }
	  }

	  // Possibly split or suppress the update based on the presence
	  // of read-only spans in its range.
	  var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to)
	  if (split) {
	    for (var i = split.length - 1; i >= 0; --i)
	      { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text}) }
	  } else {
	    makeChangeInner(doc, change)
	  }
	}

	function makeChangeInner(doc, change) {
	  if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
	  var selAfter = computeSelAfterChange(doc, change)
	  addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN)

	  makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change))
	  var rebased = []

	  linkedDocs(doc, function (doc, sharedHist) {
	    if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	      rebaseHist(doc.history, change)
	      rebased.push(doc.history)
	    }
	    makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change))
	  })
	}

	// Revert a change stored in a document's history.
	function makeChangeFromHistory(doc, type, allowSelectionOnly) {
	  if (doc.cm && doc.cm.state.suppressEdits && !allowSelectionOnly) { return }

	  var hist = doc.history, event, selAfter = doc.sel
	  var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done

	  // Verify that there is a useable event (so that ctrl-z won't
	  // needlessly clear selection events)
	  var i = 0
	  for (; i < source.length; i++) {
	    event = source[i]
	    if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
	      { break }
	  }
	  if (i == source.length) { return }
	  hist.lastOrigin = hist.lastSelOrigin = null

	  for (;;) {
	    event = source.pop()
	    if (event.ranges) {
	      pushSelectionToHistory(event, dest)
	      if (allowSelectionOnly && !event.equals(doc.sel)) {
	        setSelection(doc, event, {clearRedo: false})
	        return
	      }
	      selAfter = event
	    }
	    else { break }
	  }

	  // Build up a reverse change object to add to the opposite history
	  // stack (redo when undoing, and vice versa).
	  var antiChanges = []
	  pushSelectionToHistory(selAfter, dest)
	  dest.push({changes: antiChanges, generation: hist.generation})
	  hist.generation = event.generation || ++hist.maxGeneration

	  var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")

	  var loop = function ( i ) {
	    var change = event.changes[i]
	    change.origin = type
	    if (filter && !filterChange(doc, change, false)) {
	      source.length = 0
	      return {}
	    }

	    antiChanges.push(historyChangeFromChange(doc, change))

	    var after = i ? computeSelAfterChange(doc, change) : lst(source)
	    makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change))
	    if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}) }
	    var rebased = []

	    // Propagate to the linked documents
	    linkedDocs(doc, function (doc, sharedHist) {
	      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	        rebaseHist(doc.history, change)
	        rebased.push(doc.history)
	      }
	      makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change))
	    })
	  };

	  for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
	    var returned = loop( i$1 );

	    if ( returned ) return returned.v;
	  }
	}

	// Sub-views need their line numbers shifted when text is added
	// above or below them in the parent document.
	function shiftDoc(doc, distance) {
	  if (distance == 0) { return }
	  doc.first += distance
	  doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
	    Pos(range.anchor.line + distance, range.anchor.ch),
	    Pos(range.head.line + distance, range.head.ch)
	  ); }), doc.sel.primIndex)
	  if (doc.cm) {
	    regChange(doc.cm, doc.first, doc.first - distance, distance)
	    for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
	      { regLineChange(doc.cm, l, "gutter") }
	  }
	}

	// More lower-level change function, handling only a single document
	// (not linked ones).
	function makeChangeSingleDoc(doc, change, selAfter, spans) {
	  if (doc.cm && !doc.cm.curOp)
	    { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

	  if (change.to.line < doc.first) {
	    shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line))
	    return
	  }
	  if (change.from.line > doc.lastLine()) { return }

	  // Clip the change to the size of this doc
	  if (change.from.line < doc.first) {
	    var shift = change.text.length - 1 - (doc.first - change.from.line)
	    shiftDoc(doc, shift)
	    change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
	              text: [lst(change.text)], origin: change.origin}
	  }
	  var last = doc.lastLine()
	  if (change.to.line > last) {
	    change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
	              text: [change.text[0]], origin: change.origin}
	  }

	  change.removed = getBetween(doc, change.from, change.to)

	  if (!selAfter) { selAfter = computeSelAfterChange(doc, change) }
	  if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans) }
	  else { updateDoc(doc, change, spans) }
	  setSelectionNoUndo(doc, selAfter, sel_dontScroll)
	}

	// Handle the interaction of a change to a document with the editor
	// that this document is part of.
	function makeChangeSingleDocInEditor(cm, change, spans) {
	  var doc = cm.doc, display = cm.display, from = change.from, to = change.to

	  var recomputeMaxLength = false, checkWidthStart = from.line
	  if (!cm.options.lineWrapping) {
	    checkWidthStart = lineNo(visualLine(getLine(doc, from.line)))
	    doc.iter(checkWidthStart, to.line + 1, function (line) {
	      if (line == display.maxLine) {
	        recomputeMaxLength = true
	        return true
	      }
	    })
	  }

	  if (doc.sel.contains(change.from, change.to) > -1)
	    { signalCursorActivity(cm) }

	  updateDoc(doc, change, spans, estimateHeight(cm))

	  if (!cm.options.lineWrapping) {
	    doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
	      var len = lineLength(line)
	      if (len > display.maxLineLength) {
	        display.maxLine = line
	        display.maxLineLength = len
	        display.maxLineChanged = true
	        recomputeMaxLength = false
	      }
	    })
	    if (recomputeMaxLength) { cm.curOp.updateMaxLine = true }
	  }

	  // Adjust frontier, schedule worker
	  doc.frontier = Math.min(doc.frontier, from.line)
	  startWorker(cm, 400)

	  var lendiff = change.text.length - (to.line - from.line) - 1
	  // Remember that these lines changed, for updating the display
	  if (change.full)
	    { regChange(cm) }
	  else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
	    { regLineChange(cm, from.line, "text") }
	  else
	    { regChange(cm, from.line, to.line + 1, lendiff) }

	  var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change")
	  if (changeHandler || changesHandler) {
	    var obj = {
	      from: from, to: to,
	      text: change.text,
	      removed: change.removed,
	      origin: change.origin
	    }
	    if (changeHandler) { signalLater(cm, "change", cm, obj) }
	    if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj) }
	  }
	  cm.display.selForContextMenu = null
	}

	function replaceRange(doc, code, from, to, origin) {
	  if (!to) { to = from }
	  if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp }
	  if (typeof code == "string") { code = doc.splitLines(code) }
	  makeChange(doc, {from: from, to: to, text: code, origin: origin})
	}

	// Rebasing/resetting history to deal with externally-sourced changes

	function rebaseHistSelSingle(pos, from, to, diff) {
	  if (to < pos.line) {
	    pos.line += diff
	  } else if (from < pos.line) {
	    pos.line = from
	    pos.ch = 0
	  }
	}

	// Tries to rebase an array of history events given a change in the
	// document. If the change touches the same lines as the event, the
	// event, and everything 'behind' it, is discarded. If the change is
	// before the event, the event's positions are updated. Uses a
	// copy-on-write scheme for the positions, to avoid having to
	// reallocate them all on every rebase, but also avoid problems with
	// shared position objects being unsafely updated.
	function rebaseHistArray(array, from, to, diff) {
	  for (var i = 0; i < array.length; ++i) {
	    var sub = array[i], ok = true
	    if (sub.ranges) {
	      if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true }
	      for (var j = 0; j < sub.ranges.length; j++) {
	        rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff)
	        rebaseHistSelSingle(sub.ranges[j].head, from, to, diff)
	      }
	      continue
	    }
	    for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
	      var cur = sub.changes[j$1]
	      if (to < cur.from.line) {
	        cur.from = Pos(cur.from.line + diff, cur.from.ch)
	        cur.to = Pos(cur.to.line + diff, cur.to.ch)
	      } else if (from <= cur.to.line) {
	        ok = false
	        break
	      }
	    }
	    if (!ok) {
	      array.splice(0, i + 1)
	      i = 0
	    }
	  }
	}

	function rebaseHist(hist, change) {
	  var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1
	  rebaseHistArray(hist.done, from, to, diff)
	  rebaseHistArray(hist.undone, from, to, diff)
	}

	// Utility for applying a change to a line by handle or number,
	// returning the number and optionally registering the line as
	// changed.
	function changeLine(doc, handle, changeType, op) {
	  var no = handle, line = handle
	  if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)) }
	  else { no = lineNo(handle) }
	  if (no == null) { return null }
	  if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType) }
	  return line
	}

	// The document is represented as a BTree consisting of leaves, with
	// chunk of lines in them, and branches, with up to ten leaves or
	// other branch nodes below them. The top node is always a branch
	// node, and is the document object itself (meaning it has
	// additional methods and properties).
	//
	// All nodes have parent links. The tree is used both to go from
	// line numbers to line objects, and to go from objects to numbers.
	// It also indexes by height, and is used to convert between height
	// and line object, and to find the total height of the document.
	//
	// See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

	function LeafChunk(lines) {
	  var this$1 = this;

	  this.lines = lines
	  this.parent = null
	  var height = 0
	  for (var i = 0; i < lines.length; ++i) {
	    lines[i].parent = this$1
	    height += lines[i].height
	  }
	  this.height = height
	}

	LeafChunk.prototype = {
	  chunkSize: function() { return this.lines.length },
	  // Remove the n lines at offset 'at'.
	  removeInner: function(at, n) {
	    var this$1 = this;

	    for (var i = at, e = at + n; i < e; ++i) {
	      var line = this$1.lines[i]
	      this$1.height -= line.height
	      cleanUpLine(line)
	      signalLater(line, "delete")
	    }
	    this.lines.splice(at, n)
	  },
	  // Helper used to collapse a small branch into a single leaf.
	  collapse: function(lines) {
	    lines.push.apply(lines, this.lines)
	  },
	  // Insert the given array of lines at offset 'at', count them as
	  // having the given height.
	  insertInner: function(at, lines, height) {
	    var this$1 = this;

	    this.height += height
	    this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at))
	    for (var i = 0; i < lines.length; ++i) { lines[i].parent = this$1 }
	  },
	  // Used to iterate over a part of the tree.
	  iterN: function(at, n, op) {
	    var this$1 = this;

	    for (var e = at + n; at < e; ++at)
	      { if (op(this$1.lines[at])) { return true } }
	  }
	}

	function BranchChunk(children) {
	  var this$1 = this;

	  this.children = children
	  var size = 0, height = 0
	  for (var i = 0; i < children.length; ++i) {
	    var ch = children[i]
	    size += ch.chunkSize(); height += ch.height
	    ch.parent = this$1
	  }
	  this.size = size
	  this.height = height
	  this.parent = null
	}

	BranchChunk.prototype = {
	  chunkSize: function() { return this.size },
	  removeInner: function(at, n) {
	    var this$1 = this;

	    this.size -= n
	    for (var i = 0; i < this.children.length; ++i) {
	      var child = this$1.children[i], sz = child.chunkSize()
	      if (at < sz) {
	        var rm = Math.min(n, sz - at), oldHeight = child.height
	        child.removeInner(at, rm)
	        this$1.height -= oldHeight - child.height
	        if (sz == rm) { this$1.children.splice(i--, 1); child.parent = null }
	        if ((n -= rm) == 0) { break }
	        at = 0
	      } else { at -= sz }
	    }
	    // If the result is smaller than 25 lines, ensure that it is a
	    // single leaf node.
	    if (this.size - n < 25 &&
	        (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
	      var lines = []
	      this.collapse(lines)
	      this.children = [new LeafChunk(lines)]
	      this.children[0].parent = this
	    }
	  },
	  collapse: function(lines) {
	    var this$1 = this;

	    for (var i = 0; i < this.children.length; ++i) { this$1.children[i].collapse(lines) }
	  },
	  insertInner: function(at, lines, height) {
	    var this$1 = this;

	    this.size += lines.length
	    this.height += height
	    for (var i = 0; i < this.children.length; ++i) {
	      var child = this$1.children[i], sz = child.chunkSize()
	      if (at <= sz) {
	        child.insertInner(at, lines, height)
	        if (child.lines && child.lines.length > 50) {
	          // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
	          // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
	          var remaining = child.lines.length % 25 + 25
	          for (var pos = remaining; pos < child.lines.length;) {
	            var leaf = new LeafChunk(child.lines.slice(pos, pos += 25))
	            child.height -= leaf.height
	            this$1.children.splice(++i, 0, leaf)
	            leaf.parent = this$1
	          }
	          child.lines = child.lines.slice(0, remaining)
	          this$1.maybeSpill()
	        }
	        break
	      }
	      at -= sz
	    }
	  },
	  // When a node has grown, check whether it should be split.
	  maybeSpill: function() {
	    if (this.children.length <= 10) { return }
	    var me = this
	    do {
	      var spilled = me.children.splice(me.children.length - 5, 5)
	      var sibling = new BranchChunk(spilled)
	      if (!me.parent) { // Become the parent node
	        var copy = new BranchChunk(me.children)
	        copy.parent = me
	        me.children = [copy, sibling]
	        me = copy
	     } else {
	        me.size -= sibling.size
	        me.height -= sibling.height
	        var myIndex = indexOf(me.parent.children, me)
	        me.parent.children.splice(myIndex + 1, 0, sibling)
	      }
	      sibling.parent = me.parent
	    } while (me.children.length > 10)
	    me.parent.maybeSpill()
	  },
	  iterN: function(at, n, op) {
	    var this$1 = this;

	    for (var i = 0; i < this.children.length; ++i) {
	      var child = this$1.children[i], sz = child.chunkSize()
	      if (at < sz) {
	        var used = Math.min(n, sz - at)
	        if (child.iterN(at, used, op)) { return true }
	        if ((n -= used) == 0) { break }
	        at = 0
	      } else { at -= sz }
	    }
	  }
	}

	// Line widgets are block elements displayed above or below a line.

	function LineWidget(doc, node, options) {
	  var this$1 = this;

	  if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
	    { this$1[opt] = options[opt] } } }
	  this.doc = doc
	  this.node = node
	}
	eventMixin(LineWidget)

	function adjustScrollWhenAboveVisible(cm, line, diff) {
	  if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
	    { addToScrollPos(cm, null, diff) }
	}

	LineWidget.prototype.clear = function() {
	  var this$1 = this;

	  var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line)
	  if (no == null || !ws) { return }
	  for (var i = 0; i < ws.length; ++i) { if (ws[i] == this$1) { ws.splice(i--, 1) } }
	  if (!ws.length) { line.widgets = null }
	  var height = widgetHeight(this)
	  updateLineHeight(line, Math.max(0, line.height - height))
	  if (cm) { runInOp(cm, function () {
	    adjustScrollWhenAboveVisible(cm, line, -height)
	    regLineChange(cm, no, "widget")
	  }) }
	}
	LineWidget.prototype.changed = function() {
	  var oldH = this.height, cm = this.doc.cm, line = this.line
	  this.height = null
	  var diff = widgetHeight(this) - oldH
	  if (!diff) { return }
	  updateLineHeight(line, line.height + diff)
	  if (cm) { runInOp(cm, function () {
	    cm.curOp.forceUpdate = true
	    adjustScrollWhenAboveVisible(cm, line, diff)
	  }) }
	}

	function addLineWidget(doc, handle, node, options) {
	  var widget = new LineWidget(doc, node, options)
	  var cm = doc.cm
	  if (cm && widget.noHScroll) { cm.display.alignWidgets = true }
	  changeLine(doc, handle, "widget", function (line) {
	    var widgets = line.widgets || (line.widgets = [])
	    if (widget.insertAt == null) { widgets.push(widget) }
	    else { widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget) }
	    widget.line = line
	    if (cm && !lineIsHidden(doc, line)) {
	      var aboveVisible = heightAtLine(line) < doc.scrollTop
	      updateLineHeight(line, line.height + widgetHeight(widget))
	      if (aboveVisible) { addToScrollPos(cm, null, widget.height) }
	      cm.curOp.forceUpdate = true
	    }
	    return true
	  })
	  return widget
	}

	// TEXTMARKERS

	// Created with markText and setBookmark methods. A TextMarker is a
	// handle that can be used to clear or find a marked position in the
	// document. Line objects hold arrays (markedSpans) containing
	// {from, to, marker} object pointing to such marker objects, and
	// indicating that such a marker is present on that line. Multiple
	// lines may point to the same marker when it spans across lines.
	// The spans will have null for their from/to properties when the
	// marker continues beyond the start/end of the line. Markers have
	// links back to the lines they currently touch.

	// Collapsed markers have unique ids, in order to be able to order
	// them, which is needed for uniquely determining an outer marker
	// when they overlap (they may nest, but not partially overlap).
	var nextMarkerId = 0

	function TextMarker(doc, type) {
	  this.lines = []
	  this.type = type
	  this.doc = doc
	  this.id = ++nextMarkerId
	}
	eventMixin(TextMarker)

	// Clear the marker.
	TextMarker.prototype.clear = function() {
	  var this$1 = this;

	  if (this.explicitlyCleared) { return }
	  var cm = this.doc.cm, withOp = cm && !cm.curOp
	  if (withOp) { startOperation(cm) }
	  if (hasHandler(this, "clear")) {
	    var found = this.find()
	    if (found) { signalLater(this, "clear", found.from, found.to) }
	  }
	  var min = null, max = null
	  for (var i = 0; i < this.lines.length; ++i) {
	    var line = this$1.lines[i]
	    var span = getMarkedSpanFor(line.markedSpans, this$1)
	    if (cm && !this$1.collapsed) { regLineChange(cm, lineNo(line), "text") }
	    else if (cm) {
	      if (span.to != null) { max = lineNo(line) }
	      if (span.from != null) { min = lineNo(line) }
	    }
	    line.markedSpans = removeMarkedSpan(line.markedSpans, span)
	    if (span.from == null && this$1.collapsed && !lineIsHidden(this$1.doc, line) && cm)
	      { updateLineHeight(line, textHeight(cm.display)) }
	  }
	  if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
	    var visual = visualLine(this$1.lines[i$1]), len = lineLength(visual)
	    if (len > cm.display.maxLineLength) {
	      cm.display.maxLine = visual
	      cm.display.maxLineLength = len
	      cm.display.maxLineChanged = true
	    }
	  } }

	  if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1) }
	  this.lines.length = 0
	  this.explicitlyCleared = true
	  if (this.atomic && this.doc.cantEdit) {
	    this.doc.cantEdit = false
	    if (cm) { reCheckSelection(cm.doc) }
	  }
	  if (cm) { signalLater(cm, "markerCleared", cm, this) }
	  if (withOp) { endOperation(cm) }
	  if (this.parent) { this.parent.clear() }
	}

	// Find the position of the marker in the document. Returns a {from,
	// to} object by default. Side can be passed to get a specific side
	// -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
	// Pos objects returned contain a line object, rather than a line
	// number (used to prevent looking up the same line twice).
	TextMarker.prototype.find = function(side, lineObj) {
	  var this$1 = this;

	  if (side == null && this.type == "bookmark") { side = 1 }
	  var from, to
	  for (var i = 0; i < this.lines.length; ++i) {
	    var line = this$1.lines[i]
	    var span = getMarkedSpanFor(line.markedSpans, this$1)
	    if (span.from != null) {
	      from = Pos(lineObj ? line : lineNo(line), span.from)
	      if (side == -1) { return from }
	    }
	    if (span.to != null) {
	      to = Pos(lineObj ? line : lineNo(line), span.to)
	      if (side == 1) { return to }
	    }
	  }
	  return from && {from: from, to: to}
	}

	// Signals that the marker's widget changed, and surrounding layout
	// should be recomputed.
	TextMarker.prototype.changed = function() {
	  var pos = this.find(-1, true), widget = this, cm = this.doc.cm
	  if (!pos || !cm) { return }
	  runInOp(cm, function () {
	    var line = pos.line, lineN = lineNo(pos.line)
	    var view = findViewForLine(cm, lineN)
	    if (view) {
	      clearLineMeasurementCacheFor(view)
	      cm.curOp.selectionChanged = cm.curOp.forceUpdate = true
	    }
	    cm.curOp.updateMaxLine = true
	    if (!lineIsHidden(widget.doc, line) && widget.height != null) {
	      var oldHeight = widget.height
	      widget.height = null
	      var dHeight = widgetHeight(widget) - oldHeight
	      if (dHeight)
	        { updateLineHeight(line, line.height + dHeight) }
	    }
	  })
	}

	TextMarker.prototype.attachLine = function(line) {
	  if (!this.lines.length && this.doc.cm) {
	    var op = this.doc.cm.curOp
	    if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
	      { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this) }
	  }
	  this.lines.push(line)
	}
	TextMarker.prototype.detachLine = function(line) {
	  this.lines.splice(indexOf(this.lines, line), 1)
	  if (!this.lines.length && this.doc.cm) {
	    var op = this.doc.cm.curOp
	    ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this)
	  }
	}

	// Create a marker, wire it up to the right lines, and
	function markText(doc, from, to, options, type) {
	  // Shared markers (across linked documents) are handled separately
	  // (markTextShared will call out to this again, once per
	  // document).
	  if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
	  // Ensure we are in an operation.
	  if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

	  var marker = new TextMarker(doc, type), diff = cmp(from, to)
	  if (options) { copyObj(options, marker, false) }
	  // Don't connect empty markers unless clearWhenEmpty is false
	  if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
	    { return marker }
	  if (marker.replacedWith) {
	    // Showing up as a widget implies collapsed (widget replaces text)
	    marker.collapsed = true
	    marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget")
	    if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true") }
	    if (options.insertLeft) { marker.widgetNode.insertLeft = true }
	  }
	  if (marker.collapsed) {
	    if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
	        from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
	      { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
	    seeCollapsedSpans()
	  }

	  if (marker.addToHistory)
	    { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN) }

	  var curLine = from.line, cm = doc.cm, updateMaxLine
	  doc.iter(curLine, to.line + 1, function (line) {
	    if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
	      { updateMaxLine = true }
	    if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0) }
	    addMarkedSpan(line, new MarkedSpan(marker,
	                                       curLine == from.line ? from.ch : null,
	                                       curLine == to.line ? to.ch : null))
	    ++curLine
	  })
	  // lineIsHidden depends on the presence of the spans, so needs a second pass
	  if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
	    if (lineIsHidden(doc, line)) { updateLineHeight(line, 0) }
	  }) }

	  if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }) }

	  if (marker.readOnly) {
	    seeReadOnlySpans()
	    if (doc.history.done.length || doc.history.undone.length)
	      { doc.clearHistory() }
	  }
	  if (marker.collapsed) {
	    marker.id = ++nextMarkerId
	    marker.atomic = true
	  }
	  if (cm) {
	    // Sync editor state
	    if (updateMaxLine) { cm.curOp.updateMaxLine = true }
	    if (marker.collapsed)
	      { regChange(cm, from.line, to.line + 1) }
	    else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
	      { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text") } }
	    if (marker.atomic) { reCheckSelection(cm.doc) }
	    signalLater(cm, "markerAdded", cm, marker)
	  }
	  return marker
	}

	// SHARED TEXTMARKERS

	// A shared marker spans multiple linked documents. It is
	// implemented as a meta-marker-object controlling multiple normal
	// markers.
	function SharedTextMarker(markers, primary) {
	  var this$1 = this;

	  this.markers = markers
	  this.primary = primary
	  for (var i = 0; i < markers.length; ++i)
	    { markers[i].parent = this$1 }
	}
	eventMixin(SharedTextMarker)

	SharedTextMarker.prototype.clear = function() {
	  var this$1 = this;

	  if (this.explicitlyCleared) { return }
	  this.explicitlyCleared = true
	  for (var i = 0; i < this.markers.length; ++i)
	    { this$1.markers[i].clear() }
	  signalLater(this, "clear")
	}
	SharedTextMarker.prototype.find = function(side, lineObj) {
	  return this.primary.find(side, lineObj)
	}

	function markTextShared(doc, from, to, options, type) {
	  options = copyObj(options)
	  options.shared = false
	  var markers = [markText(doc, from, to, options, type)], primary = markers[0]
	  var widget = options.widgetNode
	  linkedDocs(doc, function (doc) {
	    if (widget) { options.widgetNode = widget.cloneNode(true) }
	    markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type))
	    for (var i = 0; i < doc.linked.length; ++i)
	      { if (doc.linked[i].isParent) { return } }
	    primary = lst(markers)
	  })
	  return new SharedTextMarker(markers, primary)
	}

	function findSharedMarkers(doc) {
	  return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
	}

	function copySharedMarkers(doc, markers) {
	  for (var i = 0; i < markers.length; i++) {
	    var marker = markers[i], pos = marker.find()
	    var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to)
	    if (cmp(mFrom, mTo)) {
	      var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type)
	      marker.markers.push(subMark)
	      subMark.parent = marker
	    }
	  }
	}

	function detachSharedMarkers(markers) {
	  var loop = function ( i ) {
	    var marker = markers[i], linked = [marker.primary.doc]
	    linkedDocs(marker.primary.doc, function (d) { return linked.push(d); })
	    for (var j = 0; j < marker.markers.length; j++) {
	      var subMarker = marker.markers[j]
	      if (indexOf(linked, subMarker.doc) == -1) {
	        subMarker.parent = null
	        marker.markers.splice(j--, 1)
	      }
	    }
	  };

	  for (var i = 0; i < markers.length; i++) loop( i );
	}

	var nextDocId = 0
	var Doc = function(text, mode, firstLine, lineSep) {
	  if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep) }
	  if (firstLine == null) { firstLine = 0 }

	  BranchChunk.call(this, [new LeafChunk([new Line("", null)])])
	  this.first = firstLine
	  this.scrollTop = this.scrollLeft = 0
	  this.cantEdit = false
	  this.cleanGeneration = 1
	  this.frontier = firstLine
	  var start = Pos(firstLine, 0)
	  this.sel = simpleSelection(start)
	  this.history = new History(null)
	  this.id = ++nextDocId
	  this.modeOption = mode
	  this.lineSep = lineSep
	  this.extend = false

	  if (typeof text == "string") { text = this.splitLines(text) }
	  updateDoc(this, {from: start, to: start, text: text})
	  setSelection(this, simpleSelection(start), sel_dontScroll)
	}

	Doc.prototype = createObj(BranchChunk.prototype, {
	  constructor: Doc,
	  // Iterate over the document. Supports two forms -- with only one
	  // argument, it calls that for each line in the document. With
	  // three, it iterates over the range given by the first two (with
	  // the second being non-inclusive).
	  iter: function(from, to, op) {
	    if (op) { this.iterN(from - this.first, to - from, op) }
	    else { this.iterN(this.first, this.first + this.size, from) }
	  },

	  // Non-public interface for adding and removing lines.
	  insert: function(at, lines) {
	    var height = 0
	    for (var i = 0; i < lines.length; ++i) { height += lines[i].height }
	    this.insertInner(at - this.first, lines, height)
	  },
	  remove: function(at, n) { this.removeInner(at - this.first, n) },

	  // From here, the methods are part of the public interface. Most
	  // are also available from CodeMirror (editor) instances.

	  getValue: function(lineSep) {
	    var lines = getLines(this, this.first, this.first + this.size)
	    if (lineSep === false) { return lines }
	    return lines.join(lineSep || this.lineSeparator())
	  },
	  setValue: docMethodOp(function(code) {
	    var top = Pos(this.first, 0), last = this.first + this.size - 1
	    makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
	                      text: this.splitLines(code), origin: "setValue", full: true}, true)
	    setSelection(this, simpleSelection(top))
	  }),
	  replaceRange: function(code, from, to, origin) {
	    from = clipPos(this, from)
	    to = to ? clipPos(this, to) : from
	    replaceRange(this, code, from, to, origin)
	  },
	  getRange: function(from, to, lineSep) {
	    var lines = getBetween(this, clipPos(this, from), clipPos(this, to))
	    if (lineSep === false) { return lines }
	    return lines.join(lineSep || this.lineSeparator())
	  },

	  getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

	  getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
	  getLineNumber: function(line) {return lineNo(line)},

	  getLineHandleVisualStart: function(line) {
	    if (typeof line == "number") { line = getLine(this, line) }
	    return visualLine(line)
	  },

	  lineCount: function() {return this.size},
	  firstLine: function() {return this.first},
	  lastLine: function() {return this.first + this.size - 1},

	  clipPos: function(pos) {return clipPos(this, pos)},

	  getCursor: function(start) {
	    var range = this.sel.primary(), pos
	    if (start == null || start == "head") { pos = range.head }
	    else if (start == "anchor") { pos = range.anchor }
	    else if (start == "end" || start == "to" || start === false) { pos = range.to() }
	    else { pos = range.from() }
	    return pos
	  },
	  listSelections: function() { return this.sel.ranges },
	  somethingSelected: function() {return this.sel.somethingSelected()},

	  setCursor: docMethodOp(function(line, ch, options) {
	    setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options)
	  }),
	  setSelection: docMethodOp(function(anchor, head, options) {
	    setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options)
	  }),
	  extendSelection: docMethodOp(function(head, other, options) {
	    extendSelection(this, clipPos(this, head), other && clipPos(this, other), options)
	  }),
	  extendSelections: docMethodOp(function(heads, options) {
	    extendSelections(this, clipPosArray(this, heads), options)
	  }),
	  extendSelectionsBy: docMethodOp(function(f, options) {
	    var heads = map(this.sel.ranges, f)
	    extendSelections(this, clipPosArray(this, heads), options)
	  }),
	  setSelections: docMethodOp(function(ranges, primary, options) {
	    var this$1 = this;

	    if (!ranges.length) { return }
	    var out = []
	    for (var i = 0; i < ranges.length; i++)
	      { out[i] = new Range(clipPos(this$1, ranges[i].anchor),
	                         clipPos(this$1, ranges[i].head)) }
	    if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex) }
	    setSelection(this, normalizeSelection(out, primary), options)
	  }),
	  addSelection: docMethodOp(function(anchor, head, options) {
	    var ranges = this.sel.ranges.slice(0)
	    ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)))
	    setSelection(this, normalizeSelection(ranges, ranges.length - 1), options)
	  }),

	  getSelection: function(lineSep) {
	    var this$1 = this;

	    var ranges = this.sel.ranges, lines
	    for (var i = 0; i < ranges.length; i++) {
	      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to())
	      lines = lines ? lines.concat(sel) : sel
	    }
	    if (lineSep === false) { return lines }
	    else { return lines.join(lineSep || this.lineSeparator()) }
	  },
	  getSelections: function(lineSep) {
	    var this$1 = this;

	    var parts = [], ranges = this.sel.ranges
	    for (var i = 0; i < ranges.length; i++) {
	      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to())
	      if (lineSep !== false) { sel = sel.join(lineSep || this$1.lineSeparator()) }
	      parts[i] = sel
	    }
	    return parts
	  },
	  replaceSelection: function(code, collapse, origin) {
	    var dup = []
	    for (var i = 0; i < this.sel.ranges.length; i++)
	      { dup[i] = code }
	    this.replaceSelections(dup, collapse, origin || "+input")
	  },
	  replaceSelections: docMethodOp(function(code, collapse, origin) {
	    var this$1 = this;

	    var changes = [], sel = this.sel
	    for (var i = 0; i < sel.ranges.length; i++) {
	      var range = sel.ranges[i]
	      changes[i] = {from: range.from(), to: range.to(), text: this$1.splitLines(code[i]), origin: origin}
	    }
	    var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse)
	    for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
	      { makeChange(this$1, changes[i$1]) }
	    if (newSel) { setSelectionReplaceHistory(this, newSel) }
	    else if (this.cm) { ensureCursorVisible(this.cm) }
	  }),
	  undo: docMethodOp(function() {makeChangeFromHistory(this, "undo")}),
	  redo: docMethodOp(function() {makeChangeFromHistory(this, "redo")}),
	  undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true)}),
	  redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true)}),

	  setExtending: function(val) {this.extend = val},
	  getExtending: function() {return this.extend},

	  historySize: function() {
	    var hist = this.history, done = 0, undone = 0
	    for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done } }
	    for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone } }
	    return {undo: done, redo: undone}
	  },
	  clearHistory: function() {this.history = new History(this.history.maxGeneration)},

	  markClean: function() {
	    this.cleanGeneration = this.changeGeneration(true)
	  },
	  changeGeneration: function(forceSplit) {
	    if (forceSplit)
	      { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null }
	    return this.history.generation
	  },
	  isClean: function (gen) {
	    return this.history.generation == (gen || this.cleanGeneration)
	  },

	  getHistory: function() {
	    return {done: copyHistoryArray(this.history.done),
	            undone: copyHistoryArray(this.history.undone)}
	  },
	  setHistory: function(histData) {
	    var hist = this.history = new History(this.history.maxGeneration)
	    hist.done = copyHistoryArray(histData.done.slice(0), null, true)
	    hist.undone = copyHistoryArray(histData.undone.slice(0), null, true)
	  },

	  setGutterMarker: docMethodOp(function(line, gutterID, value) {
	    return changeLine(this, line, "gutter", function (line) {
	      var markers = line.gutterMarkers || (line.gutterMarkers = {})
	      markers[gutterID] = value
	      if (!value && isEmpty(markers)) { line.gutterMarkers = null }
	      return true
	    })
	  }),

	  clearGutter: docMethodOp(function(gutterID) {
	    var this$1 = this;

	    var i = this.first
	    this.iter(function (line) {
	      if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
	        changeLine(this$1, line, "gutter", function () {
	          line.gutterMarkers[gutterID] = null
	          if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null }
	          return true
	        })
	      }
	      ++i
	    })
	  }),

	  lineInfo: function(line) {
	    var n
	    if (typeof line == "number") {
	      if (!isLine(this, line)) { return null }
	      n = line
	      line = getLine(this, line)
	      if (!line) { return null }
	    } else {
	      n = lineNo(line)
	      if (n == null) { return null }
	    }
	    return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
	            textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
	            widgets: line.widgets}
	  },

	  addLineClass: docMethodOp(function(handle, where, cls) {
	    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
	      var prop = where == "text" ? "textClass"
	               : where == "background" ? "bgClass"
	               : where == "gutter" ? "gutterClass" : "wrapClass"
	      if (!line[prop]) { line[prop] = cls }
	      else if (classTest(cls).test(line[prop])) { return false }
	      else { line[prop] += " " + cls }
	      return true
	    })
	  }),
	  removeLineClass: docMethodOp(function(handle, where, cls) {
	    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
	      var prop = where == "text" ? "textClass"
	               : where == "background" ? "bgClass"
	               : where == "gutter" ? "gutterClass" : "wrapClass"
	      var cur = line[prop]
	      if (!cur) { return false }
	      else if (cls == null) { line[prop] = null }
	      else {
	        var found = cur.match(classTest(cls))
	        if (!found) { return false }
	        var end = found.index + found[0].length
	        line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null
	      }
	      return true
	    })
	  }),

	  addLineWidget: docMethodOp(function(handle, node, options) {
	    return addLineWidget(this, handle, node, options)
	  }),
	  removeLineWidget: function(widget) { widget.clear() },

	  markText: function(from, to, options) {
	    return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
	  },
	  setBookmark: function(pos, options) {
	    var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
	                    insertLeft: options && options.insertLeft,
	                    clearWhenEmpty: false, shared: options && options.shared,
	                    handleMouseEvents: options && options.handleMouseEvents}
	    pos = clipPos(this, pos)
	    return markText(this, pos, pos, realOpts, "bookmark")
	  },
	  findMarksAt: function(pos) {
	    pos = clipPos(this, pos)
	    var markers = [], spans = getLine(this, pos.line).markedSpans
	    if (spans) { for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i]
	      if ((span.from == null || span.from <= pos.ch) &&
	          (span.to == null || span.to >= pos.ch))
	        { markers.push(span.marker.parent || span.marker) }
	    } }
	    return markers
	  },
	  findMarks: function(from, to, filter) {
	    from = clipPos(this, from); to = clipPos(this, to)
	    var found = [], lineNo = from.line
	    this.iter(from.line, to.line + 1, function (line) {
	      var spans = line.markedSpans
	      if (spans) { for (var i = 0; i < spans.length; i++) {
	        var span = spans[i]
	        if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
	              span.from == null && lineNo != from.line ||
	              span.from != null && lineNo == to.line && span.from >= to.ch) &&
	            (!filter || filter(span.marker)))
	          { found.push(span.marker.parent || span.marker) }
	      } }
	      ++lineNo
	    })
	    return found
	  },
	  getAllMarks: function() {
	    var markers = []
	    this.iter(function (line) {
	      var sps = line.markedSpans
	      if (sps) { for (var i = 0; i < sps.length; ++i)
	        { if (sps[i].from != null) { markers.push(sps[i].marker) } } }
	    })
	    return markers
	  },

	  posFromIndex: function(off) {
	    var ch, lineNo = this.first, sepSize = this.lineSeparator().length
	    this.iter(function (line) {
	      var sz = line.text.length + sepSize
	      if (sz > off) { ch = off; return true }
	      off -= sz
	      ++lineNo
	    })
	    return clipPos(this, Pos(lineNo, ch))
	  },
	  indexFromPos: function (coords) {
	    coords = clipPos(this, coords)
	    var index = coords.ch
	    if (coords.line < this.first || coords.ch < 0) { return 0 }
	    var sepSize = this.lineSeparator().length
	    this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
	      index += line.text.length + sepSize
	    })
	    return index
	  },

	  copy: function(copyHistory) {
	    var doc = new Doc(getLines(this, this.first, this.first + this.size),
	                      this.modeOption, this.first, this.lineSep)
	    doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft
	    doc.sel = this.sel
	    doc.extend = false
	    if (copyHistory) {
	      doc.history.undoDepth = this.history.undoDepth
	      doc.setHistory(this.getHistory())
	    }
	    return doc
	  },

	  linkedDoc: function(options) {
	    if (!options) { options = {} }
	    var from = this.first, to = this.first + this.size
	    if (options.from != null && options.from > from) { from = options.from }
	    if (options.to != null && options.to < to) { to = options.to }
	    var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep)
	    if (options.sharedHist) { copy.history = this.history
	    ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist})
	    copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}]
	    copySharedMarkers(copy, findSharedMarkers(this))
	    return copy
	  },
	  unlinkDoc: function(other) {
	    var this$1 = this;

	    if (other instanceof CodeMirror) { other = other.doc }
	    if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
	      var link = this$1.linked[i]
	      if (link.doc != other) { continue }
	      this$1.linked.splice(i, 1)
	      other.unlinkDoc(this$1)
	      detachSharedMarkers(findSharedMarkers(this$1))
	      break
	    } }
	    // If the histories were shared, split them again
	    if (other.history == this.history) {
	      var splitIds = [other.id]
	      linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true)
	      other.history = new History(null)
	      other.history.done = copyHistoryArray(this.history.done, splitIds)
	      other.history.undone = copyHistoryArray(this.history.undone, splitIds)
	    }
	  },
	  iterLinkedDocs: function(f) {linkedDocs(this, f)},

	  getMode: function() {return this.mode},
	  getEditor: function() {return this.cm},

	  splitLines: function(str) {
	    if (this.lineSep) { return str.split(this.lineSep) }
	    return splitLinesAuto(str)
	  },
	  lineSeparator: function() { return this.lineSep || "\n" }
	})

	// Public alias.
	Doc.prototype.eachLine = Doc.prototype.iter

	// Kludge to work around strange IE behavior where it'll sometimes
	// re-fire a series of drag-related events right after the drop (#1551)
	var lastDrop = 0

	function onDrop(e) {
	  var cm = this
	  clearDragCursor(cm)
	  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
	    { return }
	  e_preventDefault(e)
	  if (ie) { lastDrop = +new Date }
	  var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files
	  if (!pos || cm.isReadOnly()) { return }
	  // Might be a file drop, in which case we simply extract the text
	  // and insert it.
	  if (files && files.length && window.FileReader && window.File) {
	    var n = files.length, text = Array(n), read = 0
	    var loadFile = function (file, i) {
	      if (cm.options.allowDropFileTypes &&
	          indexOf(cm.options.allowDropFileTypes, file.type) == -1)
	        { return }

	      var reader = new FileReader
	      reader.onload = operation(cm, function () {
	        var content = reader.result
	        if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) { content = "" }
	        text[i] = content
	        if (++read == n) {
	          pos = clipPos(cm.doc, pos)
	          var change = {from: pos, to: pos,
	                        text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
	                        origin: "paste"}
	          makeChange(cm.doc, change)
	          setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)))
	        }
	      })
	      reader.readAsText(file)
	    }
	    for (var i = 0; i < n; ++i) { loadFile(files[i], i) }
	  } else { // Normal drop
	    // Don't do a replace if the drop happened inside of the selected text.
	    if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
	      cm.state.draggingText(e)
	      // Ensure the editor is re-focused
	      setTimeout(function () { return cm.display.input.focus(); }, 20)
	      return
	    }
	    try {
	      var text$1 = e.dataTransfer.getData("Text")
	      if (text$1) {
	        var selected
	        if (cm.state.draggingText && !cm.state.draggingText.copy)
	          { selected = cm.listSelections() }
	        setSelectionNoUndo(cm.doc, simpleSelection(pos, pos))
	        if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
	          { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag") } }
	        cm.replaceSelection(text$1, "around", "paste")
	        cm.display.input.focus()
	      }
	    }
	    catch(e){}
	  }
	}

	function onDragStart(cm, e) {
	  if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
	  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

	  e.dataTransfer.setData("Text", cm.getSelection())
	  e.dataTransfer.effectAllowed = "copyMove"

	  // Use dummy image instead of default browsers image.
	  // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
	  if (e.dataTransfer.setDragImage && !safari) {
	    var img = elt("img", null, null, "position: fixed; left: 0; top: 0;")
	    img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
	    if (presto) {
	      img.width = img.height = 1
	      cm.display.wrapper.appendChild(img)
	      // Force a relayout, or Opera won't use our image for some obscure reason
	      img._top = img.offsetTop
	    }
	    e.dataTransfer.setDragImage(img, 0, 0)
	    if (presto) { img.parentNode.removeChild(img) }
	  }
	}

	function onDragOver(cm, e) {
	  var pos = posFromMouse(cm, e)
	  if (!pos) { return }
	  var frag = document.createDocumentFragment()
	  drawSelectionCursor(cm, pos, frag)
	  if (!cm.display.dragCursor) {
	    cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors")
	    cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv)
	  }
	  removeChildrenAndAdd(cm.display.dragCursor, frag)
	}

	function clearDragCursor(cm) {
	  if (cm.display.dragCursor) {
	    cm.display.lineSpace.removeChild(cm.display.dragCursor)
	    cm.display.dragCursor = null
	  }
	}

	// These must be handled carefully, because naively registering a
	// handler for each editor will cause the editors to never be
	// garbage collected.

	function forEachCodeMirror(f) {
	  if (!document.body.getElementsByClassName) { return }
	  var byClass = document.body.getElementsByClassName("CodeMirror")
	  for (var i = 0; i < byClass.length; i++) {
	    var cm = byClass[i].CodeMirror
	    if (cm) { f(cm) }
	  }
	}

	var globalsRegistered = false
	function ensureGlobalHandlers() {
	  if (globalsRegistered) { return }
	  registerGlobalHandlers()
	  globalsRegistered = true
	}
	function registerGlobalHandlers() {
	  // When the window resizes, we need to refresh active editors.
	  var resizeTimer
	  on(window, "resize", function () {
	    if (resizeTimer == null) { resizeTimer = setTimeout(function () {
	      resizeTimer = null
	      forEachCodeMirror(onResize)
	    }, 100) }
	  })
	  // When the window loses focus, we want to show the editor as blurred
	  on(window, "blur", function () { return forEachCodeMirror(onBlur); })
	}
	// Called when the window resizes
	function onResize(cm) {
	  var d = cm.display
	  if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
	    { return }
	  // Might be a text scaling operation, clear size caches.
	  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null
	  d.scrollbarsClipped = false
	  cm.setSize()
	}

	var keyNames = {
	  3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
	  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
	  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
	  46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
	  106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
	  173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
	  221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
	  63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
	}

	// Number keys
	for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i) }
	// Alphabetic keys
	for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1) }
	// Function keys
	for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2 }

	var keyMap = {}

	keyMap.basic = {
	  "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
	  "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
	  "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
	  "Tab": "defaultTab", "Shift-Tab": "indentAuto",
	  "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
	  "Esc": "singleSelection"
	}
	// Note that the save and find-related commands aren't defined by
	// default. User code or addons can define them. Unknown commands
	// are simply ignored.
	keyMap.pcDefault = {
	  "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
	  "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
	  "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
	  "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
	  "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
	  "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
	  "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
	  fallthrough: "basic"
	}
	// Very basic readline/emacs-style bindings, which are standard on Mac.
	keyMap.emacsy = {
	  "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
	  "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
	  "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
	  "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
	  "Ctrl-O": "openLine"
	}
	keyMap.macDefault = {
	  "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
	  "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
	  "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
	  "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
	  "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
	  "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
	  "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
	  fallthrough: ["basic", "emacsy"]
	}
	keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault

	// KEYMAP DISPATCH

	function normalizeKeyName(name) {
	  var parts = name.split(/-(?!$)/)
	  name = parts[parts.length - 1]
	  var alt, ctrl, shift, cmd
	  for (var i = 0; i < parts.length - 1; i++) {
	    var mod = parts[i]
	    if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true }
	    else if (/^a(lt)?$/i.test(mod)) { alt = true }
	    else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true }
	    else if (/^s(hift)?$/i.test(mod)) { shift = true }
	    else { throw new Error("Unrecognized modifier name: " + mod) }
	  }
	  if (alt) { name = "Alt-" + name }
	  if (ctrl) { name = "Ctrl-" + name }
	  if (cmd) { name = "Cmd-" + name }
	  if (shift) { name = "Shift-" + name }
	  return name
	}

	// This is a kludge to keep keymaps mostly working as raw objects
	// (backwards compatibility) while at the same time support features
	// like normalization and multi-stroke key bindings. It compiles a
	// new normalized keymap, and then updates the old object to reflect
	// this.
	function normalizeKeyMap(keymap) {
	  var copy = {}
	  for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
	    var value = keymap[keyname]
	    if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
	    if (value == "...") { delete keymap[keyname]; continue }

	    var keys = map(keyname.split(" "), normalizeKeyName)
	    for (var i = 0; i < keys.length; i++) {
	      var val = (void 0), name = (void 0)
	      if (i == keys.length - 1) {
	        name = keys.join(" ")
	        val = value
	      } else {
	        name = keys.slice(0, i + 1).join(" ")
	        val = "..."
	      }
	      var prev = copy[name]
	      if (!prev) { copy[name] = val }
	      else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
	    }
	    delete keymap[keyname]
	  } }
	  for (var prop in copy) { keymap[prop] = copy[prop] }
	  return keymap
	}

	function lookupKey(key, map, handle, context) {
	  map = getKeyMap(map)
	  var found = map.call ? map.call(key, context) : map[key]
	  if (found === false) { return "nothing" }
	  if (found === "...") { return "multi" }
	  if (found != null && handle(found)) { return "handled" }

	  if (map.fallthrough) {
	    if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
	      { return lookupKey(key, map.fallthrough, handle, context) }
	    for (var i = 0; i < map.fallthrough.length; i++) {
	      var result = lookupKey(key, map.fallthrough[i], handle, context)
	      if (result) { return result }
	    }
	  }
	}

	// Modifier key presses don't count as 'real' key presses for the
	// purpose of keymap fallthrough.
	function isModifierKey(value) {
	  var name = typeof value == "string" ? value : keyNames[value.keyCode]
	  return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
	}

	// Look up the name of a key as indicated by an event object.
	function keyName(event, noShift) {
	  if (presto && event.keyCode == 34 && event["char"]) { return false }
	  var base = keyNames[event.keyCode], name = base
	  if (name == null || event.altGraphKey) { return false }
	  if (event.altKey && base != "Alt") { name = "Alt-" + name }
	  if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name }
	  if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") { name = "Cmd-" + name }
	  if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name }
	  return name
	}

	function getKeyMap(val) {
	  return typeof val == "string" ? keyMap[val] : val
	}

	// Helper for deleting text near the selection(s), used to implement
	// backspace, delete, and similar functionality.
	function deleteNearSelection(cm, compute) {
	  var ranges = cm.doc.sel.ranges, kill = []
	  // Build up a set of ranges to kill first, merging overlapping
	  // ranges.
	  for (var i = 0; i < ranges.length; i++) {
	    var toKill = compute(ranges[i])
	    while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
	      var replaced = kill.pop()
	      if (cmp(replaced.from, toKill.from) < 0) {
	        toKill.from = replaced.from
	        break
	      }
	    }
	    kill.push(toKill)
	  }
	  // Next, remove those actual ranges.
	  runInOp(cm, function () {
	    for (var i = kill.length - 1; i >= 0; i--)
	      { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete") }
	    ensureCursorVisible(cm)
	  })
	}

	// Commands are parameter-less actions that can be performed on an
	// editor, mostly used for keybindings.
	var commands = {
	  selectAll: selectAll,
	  singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
	  killLine: function (cm) { return deleteNearSelection(cm, function (range) {
	    if (range.empty()) {
	      var len = getLine(cm.doc, range.head.line).text.length
	      if (range.head.ch == len && range.head.line < cm.lastLine())
	        { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
	      else
	        { return {from: range.head, to: Pos(range.head.line, len)} }
	    } else {
	      return {from: range.from(), to: range.to()}
	    }
	  }); },
	  deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
	    from: Pos(range.from().line, 0),
	    to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
	  }); }); },
	  delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
	    from: Pos(range.from().line, 0), to: range.from()
	  }); }); },
	  delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    var leftPos = cm.coordsChar({left: 0, top: top}, "div")
	    return {from: leftPos, to: range.from()}
	  }); },
	  delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
	    return {from: range.from(), to: rightPos }
	  }); },
	  undo: function (cm) { return cm.undo(); },
	  redo: function (cm) { return cm.redo(); },
	  undoSelection: function (cm) { return cm.undoSelection(); },
	  redoSelection: function (cm) { return cm.redoSelection(); },
	  goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
	  goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
	  goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
	    {origin: "+move", bias: 1}
	  ); },
	  goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
	    {origin: "+move", bias: 1}
	  ); },
	  goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
	    {origin: "+move", bias: -1}
	  ); },
	  goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
	  }, sel_move); },
	  goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    return cm.coordsChar({left: 0, top: top}, "div")
	  }, sel_move); },
	  goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    var pos = cm.coordsChar({left: 0, top: top}, "div")
	    if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
	    return pos
	  }, sel_move); },
	  goLineUp: function (cm) { return cm.moveV(-1, "line"); },
	  goLineDown: function (cm) { return cm.moveV(1, "line"); },
	  goPageUp: function (cm) { return cm.moveV(-1, "page"); },
	  goPageDown: function (cm) { return cm.moveV(1, "page"); },
	  goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
	  goCharRight: function (cm) { return cm.moveH(1, "char"); },
	  goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
	  goColumnRight: function (cm) { return cm.moveH(1, "column"); },
	  goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
	  goGroupRight: function (cm) { return cm.moveH(1, "group"); },
	  goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
	  goWordRight: function (cm) { return cm.moveH(1, "word"); },
	  delCharBefore: function (cm) { return cm.deleteH(-1, "char"); },
	  delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
	  delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
	  delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
	  delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
	  delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
	  indentAuto: function (cm) { return cm.indentSelection("smart"); },
	  indentMore: function (cm) { return cm.indentSelection("add"); },
	  indentLess: function (cm) { return cm.indentSelection("subtract"); },
	  insertTab: function (cm) { return cm.replaceSelection("\t"); },
	  insertSoftTab: function (cm) {
	    var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize
	    for (var i = 0; i < ranges.length; i++) {
	      var pos = ranges[i].from()
	      var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize)
	      spaces.push(spaceStr(tabSize - col % tabSize))
	    }
	    cm.replaceSelections(spaces)
	  },
	  defaultTab: function (cm) {
	    if (cm.somethingSelected()) { cm.indentSelection("add") }
	    else { cm.execCommand("insertTab") }
	  },
	  // Swap the two chars left and right of each selection's head.
	  // Move cursor behind the two swapped characters afterwards.
	  //
	  // Doesn't consider line feeds a character.
	  // Doesn't scan more than one line above to find a character.
	  // Doesn't do anything on an empty line.
	  // Doesn't do anything with non-empty selections.
	  transposeChars: function (cm) { return runInOp(cm, function () {
	    var ranges = cm.listSelections(), newSel = []
	    for (var i = 0; i < ranges.length; i++) {
	      if (!ranges[i].empty()) { continue }
	      var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text
	      if (line) {
	        if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1) }
	        if (cur.ch > 0) {
	          cur = new Pos(cur.line, cur.ch + 1)
	          cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
	                          Pos(cur.line, cur.ch - 2), cur, "+transpose")
	        } else if (cur.line > cm.doc.first) {
	          var prev = getLine(cm.doc, cur.line - 1).text
	          if (prev) {
	            cur = new Pos(cur.line, 1)
	            cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
	                            prev.charAt(prev.length - 1),
	                            Pos(cur.line - 1, prev.length - 1), cur, "+transpose")
	          }
	        }
	      }
	      newSel.push(new Range(cur, cur))
	    }
	    cm.setSelections(newSel)
	  }); },
	  newlineAndIndent: function (cm) { return runInOp(cm, function () {
	    var sels = cm.listSelections()
	    for (var i = sels.length - 1; i >= 0; i--)
	      { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input") }
	    sels = cm.listSelections()
	    for (var i$1 = 0; i$1 < sels.length; i$1++)
	      { cm.indentLine(sels[i$1].from().line, null, true) }
	    ensureCursorVisible(cm)
	  }); },
	  openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
	  toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
	}


	function lineStart(cm, lineN) {
	  var line = getLine(cm.doc, lineN)
	  var visual = visualLine(line)
	  if (visual != line) { lineN = lineNo(visual) }
	  var order = getOrder(visual)
	  var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual)
	  return Pos(lineN, ch)
	}
	function lineEnd(cm, lineN) {
	  var merged, line = getLine(cm.doc, lineN)
	  while (merged = collapsedSpanAtEnd(line)) {
	    line = merged.find(1, true).line
	    lineN = null
	  }
	  var order = getOrder(line)
	  var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line)
	  return Pos(lineN == null ? lineNo(line) : lineN, ch)
	}
	function lineStartSmart(cm, pos) {
	  var start = lineStart(cm, pos.line)
	  var line = getLine(cm.doc, start.line)
	  var order = getOrder(line)
	  if (!order || order[0].level == 0) {
	    var firstNonWS = Math.max(0, line.text.search(/\S/))
	    var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch
	    return Pos(start.line, inWS ? 0 : firstNonWS)
	  }
	  return start
	}

	// Run a handler that was bound to a key.
	function doHandleBinding(cm, bound, dropShift) {
	  if (typeof bound == "string") {
	    bound = commands[bound]
	    if (!bound) { return false }
	  }
	  // Ensure previous input has been read, so that the handler sees a
	  // consistent view of the document
	  cm.display.input.ensurePolled()
	  var prevShift = cm.display.shift, done = false
	  try {
	    if (cm.isReadOnly()) { cm.state.suppressEdits = true }
	    if (dropShift) { cm.display.shift = false }
	    done = bound(cm) != Pass
	  } finally {
	    cm.display.shift = prevShift
	    cm.state.suppressEdits = false
	  }
	  return done
	}

	function lookupKeyForEditor(cm, name, handle) {
	  for (var i = 0; i < cm.state.keyMaps.length; i++) {
	    var result = lookupKey(name, cm.state.keyMaps[i], handle, cm)
	    if (result) { return result }
	  }
	  return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
	    || lookupKey(name, cm.options.keyMap, handle, cm)
	}

	var stopSeq = new Delayed
	function dispatchKey(cm, name, e, handle) {
	  var seq = cm.state.keySeq
	  if (seq) {
	    if (isModifierKey(name)) { return "handled" }
	    stopSeq.set(50, function () {
	      if (cm.state.keySeq == seq) {
	        cm.state.keySeq = null
	        cm.display.input.reset()
	      }
	    })
	    name = seq + " " + name
	  }
	  var result = lookupKeyForEditor(cm, name, handle)

	  if (result == "multi")
	    { cm.state.keySeq = name }
	  if (result == "handled")
	    { signalLater(cm, "keyHandled", cm, name, e) }

	  if (result == "handled" || result == "multi") {
	    e_preventDefault(e)
	    restartBlink(cm)
	  }

	  if (seq && !result && /\'$/.test(name)) {
	    e_preventDefault(e)
	    return true
	  }
	  return !!result
	}

	// Handle a key from the keydown event.
	function handleKeyBinding(cm, e) {
	  var name = keyName(e, true)
	  if (!name) { return false }

	  if (e.shiftKey && !cm.state.keySeq) {
	    // First try to resolve full name (including 'Shift-'). Failing
	    // that, see if there is a cursor-motion command (starting with
	    // 'go') bound to the keyname without 'Shift-'.
	    return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
	        || dispatchKey(cm, name, e, function (b) {
	             if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
	               { return doHandleBinding(cm, b) }
	           })
	  } else {
	    return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
	  }
	}

	// Handle a key from the keypress event
	function handleCharBinding(cm, e, ch) {
	  return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
	}

	var lastStoppedKey = null
	function onKeyDown(e) {
	  var cm = this
	  cm.curOp.focus = activeElt()
	  if (signalDOMEvent(cm, e)) { return }
	  // IE does strange things with escape.
	  if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false }
	  var code = e.keyCode
	  cm.display.shift = code == 16 || e.shiftKey
	  var handled = handleKeyBinding(cm, e)
	  if (presto) {
	    lastStoppedKey = handled ? code : null
	    // Opera has no cut event... we try to at least catch the key combo
	    if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
	      { cm.replaceSelection("", null, "cut") }
	  }

	  // Turn mouse into crosshair when Alt is held on Mac.
	  if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
	    { showCrossHair(cm) }
	}

	function showCrossHair(cm) {
	  var lineDiv = cm.display.lineDiv
	  addClass(lineDiv, "CodeMirror-crosshair")

	  function up(e) {
	    if (e.keyCode == 18 || !e.altKey) {
	      rmClass(lineDiv, "CodeMirror-crosshair")
	      off(document, "keyup", up)
	      off(document, "mouseover", up)
	    }
	  }
	  on(document, "keyup", up)
	  on(document, "mouseover", up)
	}

	function onKeyUp(e) {
	  if (e.keyCode == 16) { this.doc.sel.shift = false }
	  signalDOMEvent(this, e)
	}

	function onKeyPress(e) {
	  var cm = this
	  if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
	  var keyCode = e.keyCode, charCode = e.charCode
	  if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
	  if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
	  var ch = String.fromCharCode(charCode == null ? keyCode : charCode)
	  // Some browsers fire keypress events for backspace
	  if (ch == "\x08") { return }
	  if (handleCharBinding(cm, e, ch)) { return }
	  cm.display.input.onKeyPress(e)
	}

	// A mouse down can be a single click, double click, triple click,
	// start of selection drag, start of text drag, new cursor
	// (ctrl-click), rectangle drag (alt-drag), or xwin
	// middle-click-paste. Or it might be a click on something we should
	// not interfere with, such as a scrollbar or widget.
	function onMouseDown(e) {
	  var cm = this, display = cm.display
	  if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
	  display.input.ensurePolled()
	  display.shift = e.shiftKey

	  if (eventInWidget(display, e)) {
	    if (!webkit) {
	      // Briefly turn off draggability, to allow widgets to do
	      // normal dragging things.
	      display.scroller.draggable = false
	      setTimeout(function () { return display.scroller.draggable = true; }, 100)
	    }
	    return
	  }
	  if (clickInGutter(cm, e)) { return }
	  var start = posFromMouse(cm, e)
	  window.focus()

	  switch (e_button(e)) {
	  case 1:
	    // #3261: make sure, that we're not starting a second selection
	    if (cm.state.selectingText)
	      { cm.state.selectingText(e) }
	    else if (start)
	      { leftButtonDown(cm, e, start) }
	    else if (e_target(e) == display.scroller)
	      { e_preventDefault(e) }
	    break
	  case 2:
	    if (webkit) { cm.state.lastMiddleDown = +new Date }
	    if (start) { extendSelection(cm.doc, start) }
	    setTimeout(function () { return display.input.focus(); }, 20)
	    e_preventDefault(e)
	    break
	  case 3:
	    if (captureRightClick) { onContextMenu(cm, e) }
	    else { delayBlurEvent(cm) }
	    break
	  }
	}

	var lastClick;
	var lastDoubleClick;
	function leftButtonDown(cm, e, start) {
	  if (ie) { setTimeout(bind(ensureFocus, cm), 0) }
	  else { cm.curOp.focus = activeElt() }

	  var now = +new Date, type
	  if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
	    type = "triple"
	  } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
	    type = "double"
	    lastDoubleClick = {time: now, pos: start}
	  } else {
	    type = "single"
	    lastClick = {time: now, pos: start}
	  }

	  var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained
	  if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
	      type == "single" && (contained = sel.contains(start)) > -1 &&
	      (cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) &&
	      (cmp(contained.to(), start) > 0 || start.xRel < 0))
	    { leftButtonStartDrag(cm, e, start, modifier) }
	  else
	    { leftButtonSelect(cm, e, start, type, modifier) }
	}

	// Start a text drag. When it ends, see if any dragging actually
	// happen, and treat as a click if it didn't.
	function leftButtonStartDrag(cm, e, start, modifier) {
	  var display = cm.display, startTime = +new Date
	  var dragEnd = operation(cm, function (e2) {
	    if (webkit) { display.scroller.draggable = false }
	    cm.state.draggingText = false
	    off(document, "mouseup", dragEnd)
	    off(display.scroller, "drop", dragEnd)
	    if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
	      e_preventDefault(e2)
	      if (!modifier && +new Date - 200 < startTime)
	        { extendSelection(cm.doc, start) }
	      // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
	      if (webkit || ie && ie_version == 9)
	        { setTimeout(function () {document.body.focus(); display.input.focus()}, 20) }
	      else
	        { display.input.focus() }
	    }
	  })
	  // Let the drag handler handle this.
	  if (webkit) { display.scroller.draggable = true }
	  cm.state.draggingText = dragEnd
	  dragEnd.copy = mac ? e.altKey : e.ctrlKey
	  // IE's approach to draggable
	  if (display.scroller.dragDrop) { display.scroller.dragDrop() }
	  on(document, "mouseup", dragEnd)
	  on(display.scroller, "drop", dragEnd)
	}

	// Normal selection, as opposed to text dragging.
	function leftButtonSelect(cm, e, start, type, addNew) {
	  var display = cm.display, doc = cm.doc
	  e_preventDefault(e)

	  var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges
	  if (addNew && !e.shiftKey) {
	    ourIndex = doc.sel.contains(start)
	    if (ourIndex > -1)
	      { ourRange = ranges[ourIndex] }
	    else
	      { ourRange = new Range(start, start) }
	  } else {
	    ourRange = doc.sel.primary()
	    ourIndex = doc.sel.primIndex
	  }

	  if (chromeOS ? e.shiftKey && e.metaKey : e.altKey) {
	    type = "rect"
	    if (!addNew) { ourRange = new Range(start, start) }
	    start = posFromMouse(cm, e, true, true)
	    ourIndex = -1
	  } else if (type == "double") {
	    var word = cm.findWordAt(start)
	    if (cm.display.shift || doc.extend)
	      { ourRange = extendRange(doc, ourRange, word.anchor, word.head) }
	    else
	      { ourRange = word }
	  } else if (type == "triple") {
	    var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)))
	    if (cm.display.shift || doc.extend)
	      { ourRange = extendRange(doc, ourRange, line.anchor, line.head) }
	    else
	      { ourRange = line }
	  } else {
	    ourRange = extendRange(doc, ourRange, start)
	  }

	  if (!addNew) {
	    ourIndex = 0
	    setSelection(doc, new Selection([ourRange], 0), sel_mouse)
	    startSel = doc.sel
	  } else if (ourIndex == -1) {
	    ourIndex = ranges.length
	    setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
	                 {scroll: false, origin: "*mouse"})
	  } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single" && !e.shiftKey) {
	    setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
	                 {scroll: false, origin: "*mouse"})
	    startSel = doc.sel
	  } else {
	    replaceOneSelection(doc, ourIndex, ourRange, sel_mouse)
	  }

	  var lastPos = start
	  function extendTo(pos) {
	    if (cmp(lastPos, pos) == 0) { return }
	    lastPos = pos

	    if (type == "rect") {
	      var ranges = [], tabSize = cm.options.tabSize
	      var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize)
	      var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize)
	      var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol)
	      for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
	           line <= end; line++) {
	        var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize)
	        if (left == right)
	          { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))) }
	        else if (text.length > leftPos)
	          { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))) }
	      }
	      if (!ranges.length) { ranges.push(new Range(start, start)) }
	      setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
	                   {origin: "*mouse", scroll: false})
	      cm.scrollIntoView(pos)
	    } else {
	      var oldRange = ourRange
	      var anchor = oldRange.anchor, head = pos
	      if (type != "single") {
	        var range
	        if (type == "double")
	          { range = cm.findWordAt(pos) }
	        else
	          { range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0))) }
	        if (cmp(range.anchor, anchor) > 0) {
	          head = range.head
	          anchor = minPos(oldRange.from(), range.anchor)
	        } else {
	          head = range.anchor
	          anchor = maxPos(oldRange.to(), range.head)
	        }
	      }
	      var ranges$1 = startSel.ranges.slice(0)
	      ranges$1[ourIndex] = new Range(clipPos(doc, anchor), head)
	      setSelection(doc, normalizeSelection(ranges$1, ourIndex), sel_mouse)
	    }
	  }

	  var editorSize = display.wrapper.getBoundingClientRect()
	  // Used to ensure timeout re-tries don't fire when another extend
	  // happened in the meantime (clearTimeout isn't reliable -- at
	  // least on Chrome, the timeouts still happen even when cleared,
	  // if the clear happens after their scheduled firing time).
	  var counter = 0

	  function extend(e) {
	    var curCount = ++counter
	    var cur = posFromMouse(cm, e, true, type == "rect")
	    if (!cur) { return }
	    if (cmp(cur, lastPos) != 0) {
	      cm.curOp.focus = activeElt()
	      extendTo(cur)
	      var visible = visibleLines(display, doc)
	      if (cur.line >= visible.to || cur.line < visible.from)
	        { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e) }}), 150) }
	    } else {
	      var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0
	      if (outside) { setTimeout(operation(cm, function () {
	        if (counter != curCount) { return }
	        display.scroller.scrollTop += outside
	        extend(e)
	      }), 50) }
	    }
	  }

	  function done(e) {
	    cm.state.selectingText = false
	    counter = Infinity
	    e_preventDefault(e)
	    display.input.focus()
	    off(document, "mousemove", move)
	    off(document, "mouseup", up)
	    doc.history.lastSelOrigin = null
	  }

	  var move = operation(cm, function (e) {
	    if (!e_button(e)) { done(e) }
	    else { extend(e) }
	  })
	  var up = operation(cm, done)
	  cm.state.selectingText = up
	  on(document, "mousemove", move)
	  on(document, "mouseup", up)
	}


	// Determines whether an event happened in the gutter, and fires the
	// handlers for the corresponding event.
	function gutterEvent(cm, e, type, prevent) {
	  var mX, mY
	  try { mX = e.clientX; mY = e.clientY }
	  catch(e) { return false }
	  if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
	  if (prevent) { e_preventDefault(e) }

	  var display = cm.display
	  var lineBox = display.lineDiv.getBoundingClientRect()

	  if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
	  mY -= lineBox.top - display.viewOffset

	  for (var i = 0; i < cm.options.gutters.length; ++i) {
	    var g = display.gutters.childNodes[i]
	    if (g && g.getBoundingClientRect().right >= mX) {
	      var line = lineAtHeight(cm.doc, mY)
	      var gutter = cm.options.gutters[i]
	      signal(cm, type, cm, line, gutter, e)
	      return e_defaultPrevented(e)
	    }
	  }
	}

	function clickInGutter(cm, e) {
	  return gutterEvent(cm, e, "gutterClick", true)
	}

	// CONTEXT MENU HANDLING

	// To make the context menu work, we need to briefly unhide the
	// textarea (making it as unobtrusive as possible) to let the
	// right-click take effect on it.
	function onContextMenu(cm, e) {
	  if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
	  if (signalDOMEvent(cm, e, "contextmenu")) { return }
	  cm.display.input.onContextMenu(e)
	}

	function contextMenuInGutter(cm, e) {
	  if (!hasHandler(cm, "gutterContextMenu")) { return false }
	  return gutterEvent(cm, e, "gutterContextMenu", false)
	}

	function themeChanged(cm) {
	  cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
	    cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-")
	  clearCaches(cm)
	}

	var Init = {toString: function(){return "CodeMirror.Init"}}

	var defaults = {}
	var optionHandlers = {}

	function defineOptions(CodeMirror) {
	  var optionHandlers = CodeMirror.optionHandlers

	  function option(name, deflt, handle, notOnInit) {
	    CodeMirror.defaults[name] = deflt
	    if (handle) { optionHandlers[name] =
	      notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old) }} : handle }
	  }

	  CodeMirror.defineOption = option

	  // Passed to option handlers when there is no old value.
	  CodeMirror.Init = Init

	  // These two are, on init, called from the constructor because they
	  // have to be initialized before the editor can start at all.
	  option("value", "", function (cm, val) { return cm.setValue(val); }, true)
	  option("mode", null, function (cm, val) {
	    cm.doc.modeOption = val
	    loadMode(cm)
	  }, true)

	  option("indentUnit", 2, loadMode, true)
	  option("indentWithTabs", false)
	  option("smartIndent", true)
	  option("tabSize", 4, function (cm) {
	    resetModeState(cm)
	    clearCaches(cm)
	    regChange(cm)
	  }, true)
	  option("lineSeparator", null, function (cm, val) {
	    cm.doc.lineSep = val
	    if (!val) { return }
	    var newBreaks = [], lineNo = cm.doc.first
	    cm.doc.iter(function (line) {
	      for (var pos = 0;;) {
	        var found = line.text.indexOf(val, pos)
	        if (found == -1) { break }
	        pos = found + val.length
	        newBreaks.push(Pos(lineNo, found))
	      }
	      lineNo++
	    })
	    for (var i = newBreaks.length - 1; i >= 0; i--)
	      { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)) }
	  })
	  option("specialChars", /[\u0000-\u001f\u007f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function (cm, val, old) {
	    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g")
	    if (old != Init) { cm.refresh() }
	  })
	  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true)
	  option("electricChars", true)
	  option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
	    throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
	  }, true)
	  option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true)
	  option("rtlMoveVisually", !windows)
	  option("wholeLineUpdateBefore", true)

	  option("theme", "default", function (cm) {
	    themeChanged(cm)
	    guttersChanged(cm)
	  }, true)
	  option("keyMap", "default", function (cm, val, old) {
	    var next = getKeyMap(val)
	    var prev = old != Init && getKeyMap(old)
	    if (prev && prev.detach) { prev.detach(cm, next) }
	    if (next.attach) { next.attach(cm, prev || null) }
	  })
	  option("extraKeys", null)

	  option("lineWrapping", false, wrappingChanged, true)
	  option("gutters", [], function (cm) {
	    setGuttersForLineNumbers(cm.options)
	    guttersChanged(cm)
	  }, true)
	  option("fixedGutter", true, function (cm, val) {
	    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0"
	    cm.refresh()
	  }, true)
	  option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true)
	  option("scrollbarStyle", "native", function (cm) {
	    initScrollbars(cm)
	    updateScrollbars(cm)
	    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop)
	    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft)
	  }, true)
	  option("lineNumbers", false, function (cm) {
	    setGuttersForLineNumbers(cm.options)
	    guttersChanged(cm)
	  }, true)
	  option("firstLineNumber", 1, guttersChanged, true)
	  option("lineNumberFormatter", function (integer) { return integer; }, guttersChanged, true)
	  option("showCursorWhenSelecting", false, updateSelection, true)

	  option("resetSelectionOnContextMenu", true)
	  option("lineWiseCopyCut", true)

	  option("readOnly", false, function (cm, val) {
	    if (val == "nocursor") {
	      onBlur(cm)
	      cm.display.input.blur()
	      cm.display.disabled = true
	    } else {
	      cm.display.disabled = false
	    }
	    cm.display.input.readOnlyChanged(val)
	  })
	  option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset() }}, true)
	  option("dragDrop", true, dragDropChanged)
	  option("allowDropFileTypes", null)

	  option("cursorBlinkRate", 530)
	  option("cursorScrollMargin", 0)
	  option("cursorHeight", 1, updateSelection, true)
	  option("singleCursorHeightPerLine", true, updateSelection, true)
	  option("workTime", 100)
	  option("workDelay", 100)
	  option("flattenSpans", true, resetModeState, true)
	  option("addModeClass", false, resetModeState, true)
	  option("pollInterval", 100)
	  option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; })
	  option("historyEventDelay", 1250)
	  option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true)
	  option("maxHighlightLength", 10000, resetModeState, true)
	  option("moveInputWithCursor", true, function (cm, val) {
	    if (!val) { cm.display.input.resetPosition() }
	  })

	  option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; })
	  option("autofocus", null)
	}

	function guttersChanged(cm) {
	  updateGutters(cm)
	  regChange(cm)
	  alignHorizontally(cm)
	}

	function dragDropChanged(cm, value, old) {
	  var wasOn = old && old != Init
	  if (!value != !wasOn) {
	    var funcs = cm.display.dragFunctions
	    var toggle = value ? on : off
	    toggle(cm.display.scroller, "dragstart", funcs.start)
	    toggle(cm.display.scroller, "dragenter", funcs.enter)
	    toggle(cm.display.scroller, "dragover", funcs.over)
	    toggle(cm.display.scroller, "dragleave", funcs.leave)
	    toggle(cm.display.scroller, "drop", funcs.drop)
	  }
	}

	function wrappingChanged(cm) {
	  if (cm.options.lineWrapping) {
	    addClass(cm.display.wrapper, "CodeMirror-wrap")
	    cm.display.sizer.style.minWidth = ""
	    cm.display.sizerWidth = null
	  } else {
	    rmClass(cm.display.wrapper, "CodeMirror-wrap")
	    findMaxLine(cm)
	  }
	  estimateLineHeights(cm)
	  regChange(cm)
	  clearCaches(cm)
	  setTimeout(function () { return updateScrollbars(cm); }, 100)
	}

	// A CodeMirror instance represents an editor. This is the object
	// that user code is usually dealing with.

	function CodeMirror(place, options) {
	  var this$1 = this;

	  if (!(this instanceof CodeMirror)) { return new CodeMirror(place, options) }

	  this.options = options = options ? copyObj(options) : {}
	  // Determine effective options based on given values and defaults.
	  copyObj(defaults, options, false)
	  setGuttersForLineNumbers(options)

	  var doc = options.value
	  if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator) }
	  this.doc = doc

	  var input = new CodeMirror.inputStyles[options.inputStyle](this)
	  var display = this.display = new Display(place, doc, input)
	  display.wrapper.CodeMirror = this
	  updateGutters(this)
	  themeChanged(this)
	  if (options.lineWrapping)
	    { this.display.wrapper.className += " CodeMirror-wrap" }
	  initScrollbars(this)

	  this.state = {
	    keyMaps: [],  // stores maps added by addKeyMap
	    overlays: [], // highlighting overlays, as added by addOverlay
	    modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
	    overwrite: false,
	    delayingBlurEvent: false,
	    focused: false,
	    suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
	    pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
	    selectingText: false,
	    draggingText: false,
	    highlight: new Delayed(), // stores highlight worker timeout
	    keySeq: null,  // Unfinished key sequence
	    specialChars: null
	  }

	  if (options.autofocus && !mobile) { display.input.focus() }

	  // Override magic textarea content restore that IE sometimes does
	  // on our hidden textarea on reload
	  if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20) }

	  registerEventHandlers(this)
	  ensureGlobalHandlers()

	  startOperation(this)
	  this.curOp.forceUpdate = true
	  attachDoc(this, doc)

	  if ((options.autofocus && !mobile) || this.hasFocus())
	    { setTimeout(bind(onFocus, this), 20) }
	  else
	    { onBlur(this) }

	  for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
	    { optionHandlers[opt](this$1, options[opt], Init) } }
	  maybeUpdateLineNumberWidth(this)
	  if (options.finishInit) { options.finishInit(this) }
	  for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this$1) }
	  endOperation(this)
	  // Suppress optimizelegibility in Webkit, since it breaks text
	  // measuring on line wrapping boundaries.
	  if (webkit && options.lineWrapping &&
	      getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
	    { display.lineDiv.style.textRendering = "auto" }
	}

	// The default configuration options.
	CodeMirror.defaults = defaults
	// Functions to run when options are changed.
	CodeMirror.optionHandlers = optionHandlers

	// Attach the necessary event handlers when initializing the editor
	function registerEventHandlers(cm) {
	  var d = cm.display
	  on(d.scroller, "mousedown", operation(cm, onMouseDown))
	  // Older IE's will not fire a second mousedown for a double click
	  if (ie && ie_version < 11)
	    { on(d.scroller, "dblclick", operation(cm, function (e) {
	      if (signalDOMEvent(cm, e)) { return }
	      var pos = posFromMouse(cm, e)
	      if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
	      e_preventDefault(e)
	      var word = cm.findWordAt(pos)
	      extendSelection(cm.doc, word.anchor, word.head)
	    })) }
	  else
	    { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }) }
	  // Some browsers fire contextmenu *after* opening the menu, at
	  // which point we can't mess with it anymore. Context menu is
	  // handled in onMouseDown for these browsers.
	  if (!captureRightClick) { on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); }) }

	  // Used to suppress mouse event handling when a touch happens
	  var touchFinished, prevTouch = {end: 0}
	  function finishTouch() {
	    if (d.activeTouch) {
	      touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000)
	      prevTouch = d.activeTouch
	      prevTouch.end = +new Date
	    }
	  }
	  function isMouseLikeTouchEvent(e) {
	    if (e.touches.length != 1) { return false }
	    var touch = e.touches[0]
	    return touch.radiusX <= 1 && touch.radiusY <= 1
	  }
	  function farAway(touch, other) {
	    if (other.left == null) { return true }
	    var dx = other.left - touch.left, dy = other.top - touch.top
	    return dx * dx + dy * dy > 20 * 20
	  }
	  on(d.scroller, "touchstart", function (e) {
	    if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e)) {
	      d.input.ensurePolled()
	      clearTimeout(touchFinished)
	      var now = +new Date
	      d.activeTouch = {start: now, moved: false,
	                       prev: now - prevTouch.end <= 300 ? prevTouch : null}
	      if (e.touches.length == 1) {
	        d.activeTouch.left = e.touches[0].pageX
	        d.activeTouch.top = e.touches[0].pageY
	      }
	    }
	  })
	  on(d.scroller, "touchmove", function () {
	    if (d.activeTouch) { d.activeTouch.moved = true }
	  })
	  on(d.scroller, "touchend", function (e) {
	    var touch = d.activeTouch
	    if (touch && !eventInWidget(d, e) && touch.left != null &&
	        !touch.moved && new Date - touch.start < 300) {
	      var pos = cm.coordsChar(d.activeTouch, "page"), range
	      if (!touch.prev || farAway(touch, touch.prev)) // Single tap
	        { range = new Range(pos, pos) }
	      else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
	        { range = cm.findWordAt(pos) }
	      else // Triple tap
	        { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
	      cm.setSelection(range.anchor, range.head)
	      cm.focus()
	      e_preventDefault(e)
	    }
	    finishTouch()
	  })
	  on(d.scroller, "touchcancel", finishTouch)

	  // Sync scrolling between fake scrollbars and real scrollable
	  // area, ensure viewport is updated when scrolling.
	  on(d.scroller, "scroll", function () {
	    if (d.scroller.clientHeight) {
	      setScrollTop(cm, d.scroller.scrollTop)
	      setScrollLeft(cm, d.scroller.scrollLeft, true)
	      signal(cm, "scroll", cm)
	    }
	  })

	  // Listen to wheel events in order to try and update the viewport on time.
	  on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); })
	  on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); })

	  // Prevent wrapper from ever scrolling
	  on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; })

	  d.dragFunctions = {
	    enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e) }},
	    over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e) }},
	    start: function (e) { return onDragStart(cm, e); },
	    drop: operation(cm, onDrop),
	    leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm) }}
	  }

	  var inp = d.input.getField()
	  on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); })
	  on(inp, "keydown", operation(cm, onKeyDown))
	  on(inp, "keypress", operation(cm, onKeyPress))
	  on(inp, "focus", function (e) { return onFocus(cm, e); })
	  on(inp, "blur", function (e) { return onBlur(cm, e); })
	}

	var initHooks = []
	CodeMirror.defineInitHook = function (f) { return initHooks.push(f); }

	// Indent the given line. The how parameter can be "smart",
	// "add"/null, "subtract", or "prev". When aggressive is false
	// (typically set to true for forced single-line indents), empty
	// lines are not indented, and places where the mode returns Pass
	// are left alone.
	function indentLine(cm, n, how, aggressive) {
	  var doc = cm.doc, state
	  if (how == null) { how = "add" }
	  if (how == "smart") {
	    // Fall back to "prev" when the mode doesn't have an indentation
	    // method.
	    if (!doc.mode.indent) { how = "prev" }
	    else { state = getStateBefore(cm, n) }
	  }

	  var tabSize = cm.options.tabSize
	  var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize)
	  if (line.stateAfter) { line.stateAfter = null }
	  var curSpaceString = line.text.match(/^\s*/)[0], indentation
	  if (!aggressive && !/\S/.test(line.text)) {
	    indentation = 0
	    how = "not"
	  } else if (how == "smart") {
	    indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text)
	    if (indentation == Pass || indentation > 150) {
	      if (!aggressive) { return }
	      how = "prev"
	    }
	  }
	  if (how == "prev") {
	    if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize) }
	    else { indentation = 0 }
	  } else if (how == "add") {
	    indentation = curSpace + cm.options.indentUnit
	  } else if (how == "subtract") {
	    indentation = curSpace - cm.options.indentUnit
	  } else if (typeof how == "number") {
	    indentation = curSpace + how
	  }
	  indentation = Math.max(0, indentation)

	  var indentString = "", pos = 0
	  if (cm.options.indentWithTabs)
	    { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t"} }
	  if (pos < indentation) { indentString += spaceStr(indentation - pos) }

	  if (indentString != curSpaceString) {
	    replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input")
	    line.stateAfter = null
	    return true
	  } else {
	    // Ensure that, if the cursor was in the whitespace at the start
	    // of the line, it is moved to the end of that space.
	    for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
	      var range = doc.sel.ranges[i$1]
	      if (range.head.line == n && range.head.ch < curSpaceString.length) {
	        var pos$1 = Pos(n, curSpaceString.length)
	        replaceOneSelection(doc, i$1, new Range(pos$1, pos$1))
	        break
	      }
	    }
	  }
	}

	// This will be set to a {lineWise: bool, text: [string]} object, so
	// that, when pasting, we know what kind of selections the copied
	// text was made out of.
	var lastCopied = null

	function setLastCopied(newLastCopied) {
	  lastCopied = newLastCopied
	}

	function applyTextInput(cm, inserted, deleted, sel, origin) {
	  var doc = cm.doc
	  cm.display.shift = false
	  if (!sel) { sel = doc.sel }

	  var paste = cm.state.pasteIncoming || origin == "paste"
	  var textLines = splitLinesAuto(inserted), multiPaste = null
	  // When pasing N lines into N selections, insert one line per selection
	  if (paste && sel.ranges.length > 1) {
	    if (lastCopied && lastCopied.text.join("\n") == inserted) {
	      if (sel.ranges.length % lastCopied.text.length == 0) {
	        multiPaste = []
	        for (var i = 0; i < lastCopied.text.length; i++)
	          { multiPaste.push(doc.splitLines(lastCopied.text[i])) }
	      }
	    } else if (textLines.length == sel.ranges.length) {
	      multiPaste = map(textLines, function (l) { return [l]; })
	    }
	  }

	  var updateInput
	  // Normal behavior is to insert the new text into every selection
	  for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
	    var range = sel.ranges[i$1]
	    var from = range.from(), to = range.to()
	    if (range.empty()) {
	      if (deleted && deleted > 0) // Handle deletion
	        { from = Pos(from.line, from.ch - deleted) }
	      else if (cm.state.overwrite && !paste) // Handle overwrite
	        { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)) }
	      else if (lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == inserted)
	        { from = to = Pos(from.line, 0) }
	    }
	    updateInput = cm.curOp.updateInput
	    var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
	                       origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")}
	    makeChange(cm.doc, changeEvent)
	    signalLater(cm, "inputRead", cm, changeEvent)
	  }
	  if (inserted && !paste)
	    { triggerElectric(cm, inserted) }

	  ensureCursorVisible(cm)
	  cm.curOp.updateInput = updateInput
	  cm.curOp.typing = true
	  cm.state.pasteIncoming = cm.state.cutIncoming = false
	}

	function handlePaste(e, cm) {
	  var pasted = e.clipboardData && e.clipboardData.getData("Text")
	  if (pasted) {
	    e.preventDefault()
	    if (!cm.isReadOnly() && !cm.options.disableInput)
	      { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }) }
	    return true
	  }
	}

	function triggerElectric(cm, inserted) {
	  // When an 'electric' character is inserted, immediately trigger a reindent
	  if (!cm.options.electricChars || !cm.options.smartIndent) { return }
	  var sel = cm.doc.sel

	  for (var i = sel.ranges.length - 1; i >= 0; i--) {
	    var range = sel.ranges[i]
	    if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) { continue }
	    var mode = cm.getModeAt(range.head)
	    var indented = false
	    if (mode.electricChars) {
	      for (var j = 0; j < mode.electricChars.length; j++)
	        { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
	          indented = indentLine(cm, range.head.line, "smart")
	          break
	        } }
	    } else if (mode.electricInput) {
	      if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
	        { indented = indentLine(cm, range.head.line, "smart") }
	    }
	    if (indented) { signalLater(cm, "electricInput", cm, range.head.line) }
	  }
	}

	function copyableRanges(cm) {
	  var text = [], ranges = []
	  for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
	    var line = cm.doc.sel.ranges[i].head.line
	    var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)}
	    ranges.push(lineRange)
	    text.push(cm.getRange(lineRange.anchor, lineRange.head))
	  }
	  return {text: text, ranges: ranges}
	}

	function disableBrowserMagic(field, spellcheck) {
	  field.setAttribute("autocorrect", "off")
	  field.setAttribute("autocapitalize", "off")
	  field.setAttribute("spellcheck", !!spellcheck)
	}

	function hiddenTextarea() {
	  var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
	  var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;")
	  // The textarea is kept positioned near the cursor to prevent the
	  // fact that it'll be scrolled into view on input from scrolling
	  // our fake cursor out of view. On webkit, when wrap=off, paste is
	  // very slow. So make the area wide instead.
	  if (webkit) { te.style.width = "1000px" }
	  else { te.setAttribute("wrap", "off") }
	  // If border: 0; -- iOS fails to open keyboard (issue #1287)
	  if (ios) { te.style.border = "1px solid black" }
	  disableBrowserMagic(te)
	  return div
	}

	// The publicly visible API. Note that methodOp(f) means
	// 'wrap f in an operation, performed on its `this` parameter'.

	// This is not the complete set of editor methods. Most of the
	// methods defined on the Doc type are also injected into
	// CodeMirror.prototype, for backwards compatibility and
	// convenience.

	function addEditorMethods(CodeMirror) {
	  var optionHandlers = CodeMirror.optionHandlers

	  var helpers = CodeMirror.helpers = {}

	  CodeMirror.prototype = {
	    constructor: CodeMirror,
	    focus: function(){window.focus(); this.display.input.focus()},

	    setOption: function(option, value) {
	      var options = this.options, old = options[option]
	      if (options[option] == value && option != "mode") { return }
	      options[option] = value
	      if (optionHandlers.hasOwnProperty(option))
	        { operation(this, optionHandlers[option])(this, value, old) }
	      signal(this, "optionChange", this, option)
	    },

	    getOption: function(option) {return this.options[option]},
	    getDoc: function() {return this.doc},

	    addKeyMap: function(map, bottom) {
	      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map))
	    },
	    removeKeyMap: function(map) {
	      var maps = this.state.keyMaps
	      for (var i = 0; i < maps.length; ++i)
	        { if (maps[i] == map || maps[i].name == map) {
	          maps.splice(i, 1)
	          return true
	        } }
	    },

	    addOverlay: methodOp(function(spec, options) {
	      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec)
	      if (mode.startState) { throw new Error("Overlays may not be stateful.") }
	      insertSorted(this.state.overlays,
	                   {mode: mode, modeSpec: spec, opaque: options && options.opaque,
	                    priority: (options && options.priority) || 0},
	                   function (overlay) { return overlay.priority; })
	      this.state.modeGen++
	      regChange(this)
	    }),
	    removeOverlay: methodOp(function(spec) {
	      var this$1 = this;

	      var overlays = this.state.overlays
	      for (var i = 0; i < overlays.length; ++i) {
	        var cur = overlays[i].modeSpec
	        if (cur == spec || typeof spec == "string" && cur.name == spec) {
	          overlays.splice(i, 1)
	          this$1.state.modeGen++
	          regChange(this$1)
	          return
	        }
	      }
	    }),

	    indentLine: methodOp(function(n, dir, aggressive) {
	      if (typeof dir != "string" && typeof dir != "number") {
	        if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev" }
	        else { dir = dir ? "add" : "subtract" }
	      }
	      if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive) }
	    }),
	    indentSelection: methodOp(function(how) {
	      var this$1 = this;

	      var ranges = this.doc.sel.ranges, end = -1
	      for (var i = 0; i < ranges.length; i++) {
	        var range = ranges[i]
	        if (!range.empty()) {
	          var from = range.from(), to = range.to()
	          var start = Math.max(end, from.line)
	          end = Math.min(this$1.lastLine(), to.line - (to.ch ? 0 : 1)) + 1
	          for (var j = start; j < end; ++j)
	            { indentLine(this$1, j, how) }
	          var newRanges = this$1.doc.sel.ranges
	          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
	            { replaceOneSelection(this$1.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll) }
	        } else if (range.head.line > end) {
	          indentLine(this$1, range.head.line, how, true)
	          end = range.head.line
	          if (i == this$1.doc.sel.primIndex) { ensureCursorVisible(this$1) }
	        }
	      }
	    }),

	    // Fetch the parser token for a given character. Useful for hacks
	    // that want to inspect the mode state (say, for completion).
	    getTokenAt: function(pos, precise) {
	      return takeToken(this, pos, precise)
	    },

	    getLineTokens: function(line, precise) {
	      return takeToken(this, Pos(line), precise, true)
	    },

	    getTokenTypeAt: function(pos) {
	      pos = clipPos(this.doc, pos)
	      var styles = getLineStyles(this, getLine(this.doc, pos.line))
	      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch
	      var type
	      if (ch == 0) { type = styles[2] }
	      else { for (;;) {
	        var mid = (before + after) >> 1
	        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid }
	        else if (styles[mid * 2 + 1] < ch) { before = mid + 1 }
	        else { type = styles[mid * 2 + 2]; break }
	      } }
	      var cut = type ? type.indexOf("overlay ") : -1
	      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
	    },

	    getModeAt: function(pos) {
	      var mode = this.doc.mode
	      if (!mode.innerMode) { return mode }
	      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
	    },

	    getHelper: function(pos, type) {
	      return this.getHelpers(pos, type)[0]
	    },

	    getHelpers: function(pos, type) {
	      var this$1 = this;

	      var found = []
	      if (!helpers.hasOwnProperty(type)) { return found }
	      var help = helpers[type], mode = this.getModeAt(pos)
	      if (typeof mode[type] == "string") {
	        if (help[mode[type]]) { found.push(help[mode[type]]) }
	      } else if (mode[type]) {
	        for (var i = 0; i < mode[type].length; i++) {
	          var val = help[mode[type][i]]
	          if (val) { found.push(val) }
	        }
	      } else if (mode.helperType && help[mode.helperType]) {
	        found.push(help[mode.helperType])
	      } else if (help[mode.name]) {
	        found.push(help[mode.name])
	      }
	      for (var i$1 = 0; i$1 < help._global.length; i$1++) {
	        var cur = help._global[i$1]
	        if (cur.pred(mode, this$1) && indexOf(found, cur.val) == -1)
	          { found.push(cur.val) }
	      }
	      return found
	    },

	    getStateAfter: function(line, precise) {
	      var doc = this.doc
	      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line)
	      return getStateBefore(this, line + 1, precise)
	    },

	    cursorCoords: function(start, mode) {
	      var pos, range = this.doc.sel.primary()
	      if (start == null) { pos = range.head }
	      else if (typeof start == "object") { pos = clipPos(this.doc, start) }
	      else { pos = start ? range.from() : range.to() }
	      return cursorCoords(this, pos, mode || "page")
	    },

	    charCoords: function(pos, mode) {
	      return charCoords(this, clipPos(this.doc, pos), mode || "page")
	    },

	    coordsChar: function(coords, mode) {
	      coords = fromCoordSystem(this, coords, mode || "page")
	      return coordsChar(this, coords.left, coords.top)
	    },

	    lineAtHeight: function(height, mode) {
	      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top
	      return lineAtHeight(this.doc, height + this.display.viewOffset)
	    },
	    heightAtLine: function(line, mode, includeWidgets) {
	      var end = false, lineObj
	      if (typeof line == "number") {
	        var last = this.doc.first + this.doc.size - 1
	        if (line < this.doc.first) { line = this.doc.first }
	        else if (line > last) { line = last; end = true }
	        lineObj = getLine(this.doc, line)
	      } else {
	        lineObj = line
	      }
	      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets).top +
	        (end ? this.doc.height - heightAtLine(lineObj) : 0)
	    },

	    defaultTextHeight: function() { return textHeight(this.display) },
	    defaultCharWidth: function() { return charWidth(this.display) },

	    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

	    addWidget: function(pos, node, scroll, vert, horiz) {
	      var display = this.display
	      pos = cursorCoords(this, clipPos(this.doc, pos))
	      var top = pos.bottom, left = pos.left
	      node.style.position = "absolute"
	      node.setAttribute("cm-ignore-events", "true")
	      this.display.input.setUneditable(node)
	      display.sizer.appendChild(node)
	      if (vert == "over") {
	        top = pos.top
	      } else if (vert == "above" || vert == "near") {
	        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
	        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth)
	        // Default to positioning above (if specified and possible); otherwise default to positioning below
	        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
	          { top = pos.top - node.offsetHeight }
	        else if (pos.bottom + node.offsetHeight <= vspace)
	          { top = pos.bottom }
	        if (left + node.offsetWidth > hspace)
	          { left = hspace - node.offsetWidth }
	      }
	      node.style.top = top + "px"
	      node.style.left = node.style.right = ""
	      if (horiz == "right") {
	        left = display.sizer.clientWidth - node.offsetWidth
	        node.style.right = "0px"
	      } else {
	        if (horiz == "left") { left = 0 }
	        else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2 }
	        node.style.left = left + "px"
	      }
	      if (scroll)
	        { scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight) }
	    },

	    triggerOnKeyDown: methodOp(onKeyDown),
	    triggerOnKeyPress: methodOp(onKeyPress),
	    triggerOnKeyUp: onKeyUp,

	    execCommand: function(cmd) {
	      if (commands.hasOwnProperty(cmd))
	        { return commands[cmd].call(null, this) }
	    },

	    triggerElectric: methodOp(function(text) { triggerElectric(this, text) }),

	    findPosH: function(from, amount, unit, visually) {
	      var this$1 = this;

	      var dir = 1
	      if (amount < 0) { dir = -1; amount = -amount }
	      var cur = clipPos(this.doc, from)
	      for (var i = 0; i < amount; ++i) {
	        cur = findPosH(this$1.doc, cur, dir, unit, visually)
	        if (cur.hitSide) { break }
	      }
	      return cur
	    },

	    moveH: methodOp(function(dir, unit) {
	      var this$1 = this;

	      this.extendSelectionsBy(function (range) {
	        if (this$1.display.shift || this$1.doc.extend || range.empty())
	          { return findPosH(this$1.doc, range.head, dir, unit, this$1.options.rtlMoveVisually) }
	        else
	          { return dir < 0 ? range.from() : range.to() }
	      }, sel_move)
	    }),

	    deleteH: methodOp(function(dir, unit) {
	      var sel = this.doc.sel, doc = this.doc
	      if (sel.somethingSelected())
	        { doc.replaceSelection("", null, "+delete") }
	      else
	        { deleteNearSelection(this, function (range) {
	          var other = findPosH(doc, range.head, dir, unit, false)
	          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other}
	        }) }
	    }),

	    findPosV: function(from, amount, unit, goalColumn) {
	      var this$1 = this;

	      var dir = 1, x = goalColumn
	      if (amount < 0) { dir = -1; amount = -amount }
	      var cur = clipPos(this.doc, from)
	      for (var i = 0; i < amount; ++i) {
	        var coords = cursorCoords(this$1, cur, "div")
	        if (x == null) { x = coords.left }
	        else { coords.left = x }
	        cur = findPosV(this$1, coords, dir, unit)
	        if (cur.hitSide) { break }
	      }
	      return cur
	    },

	    moveV: methodOp(function(dir, unit) {
	      var this$1 = this;

	      var doc = this.doc, goals = []
	      var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected()
	      doc.extendSelectionsBy(function (range) {
	        if (collapse)
	          { return dir < 0 ? range.from() : range.to() }
	        var headPos = cursorCoords(this$1, range.head, "div")
	        if (range.goalColumn != null) { headPos.left = range.goalColumn }
	        goals.push(headPos.left)
	        var pos = findPosV(this$1, headPos, dir, unit)
	        if (unit == "page" && range == doc.sel.primary())
	          { addToScrollPos(this$1, null, charCoords(this$1, pos, "div").top - headPos.top) }
	        return pos
	      }, sel_move)
	      if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
	        { doc.sel.ranges[i].goalColumn = goals[i] } }
	    }),

	    // Find the word at the given position (as returned by coordsChar).
	    findWordAt: function(pos) {
	      var doc = this.doc, line = getLine(doc, pos.line).text
	      var start = pos.ch, end = pos.ch
	      if (line) {
	        var helper = this.getHelper(pos, "wordChars")
	        if ((pos.xRel < 0 || end == line.length) && start) { --start; } else { ++end }
	        var startChar = line.charAt(start)
	        var check = isWordChar(startChar, helper)
	          ? function (ch) { return isWordChar(ch, helper); }
	          : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
	          : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); }
	        while (start > 0 && check(line.charAt(start - 1))) { --start }
	        while (end < line.length && check(line.charAt(end))) { ++end }
	      }
	      return new Range(Pos(pos.line, start), Pos(pos.line, end))
	    },

	    toggleOverwrite: function(value) {
	      if (value != null && value == this.state.overwrite) { return }
	      if (this.state.overwrite = !this.state.overwrite)
	        { addClass(this.display.cursorDiv, "CodeMirror-overwrite") }
	      else
	        { rmClass(this.display.cursorDiv, "CodeMirror-overwrite") }

	      signal(this, "overwriteToggle", this, this.state.overwrite)
	    },
	    hasFocus: function() { return this.display.input.getField() == activeElt() },
	    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

	    scrollTo: methodOp(function(x, y) {
	      if (x != null || y != null) { resolveScrollToPos(this) }
	      if (x != null) { this.curOp.scrollLeft = x }
	      if (y != null) { this.curOp.scrollTop = y }
	    }),
	    getScrollInfo: function() {
	      var scroller = this.display.scroller
	      return {left: scroller.scrollLeft, top: scroller.scrollTop,
	              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
	              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
	              clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
	    },

	    scrollIntoView: methodOp(function(range, margin) {
	      if (range == null) {
	        range = {from: this.doc.sel.primary().head, to: null}
	        if (margin == null) { margin = this.options.cursorScrollMargin }
	      } else if (typeof range == "number") {
	        range = {from: Pos(range, 0), to: null}
	      } else if (range.from == null) {
	        range = {from: range, to: null}
	      }
	      if (!range.to) { range.to = range.from }
	      range.margin = margin || 0

	      if (range.from.line != null) {
	        resolveScrollToPos(this)
	        this.curOp.scrollToPos = range
	      } else {
	        var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
	                                      Math.min(range.from.top, range.to.top) - range.margin,
	                                      Math.max(range.from.right, range.to.right),
	                                      Math.max(range.from.bottom, range.to.bottom) + range.margin)
	        this.scrollTo(sPos.scrollLeft, sPos.scrollTop)
	      }
	    }),

	    setSize: methodOp(function(width, height) {
	      var this$1 = this;

	      var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; }
	      if (width != null) { this.display.wrapper.style.width = interpret(width) }
	      if (height != null) { this.display.wrapper.style.height = interpret(height) }
	      if (this.options.lineWrapping) { clearLineMeasurementCache(this) }
	      var lineNo = this.display.viewFrom
	      this.doc.iter(lineNo, this.display.viewTo, function (line) {
	        if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
	          { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo, "widget"); break } } }
	        ++lineNo
	      })
	      this.curOp.forceUpdate = true
	      signal(this, "refresh", this)
	    }),

	    operation: function(f){return runInOp(this, f)},

	    refresh: methodOp(function() {
	      var oldHeight = this.display.cachedTextHeight
	      regChange(this)
	      this.curOp.forceUpdate = true
	      clearCaches(this)
	      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop)
	      updateGutterSpace(this)
	      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
	        { estimateLineHeights(this) }
	      signal(this, "refresh", this)
	    }),

	    swapDoc: methodOp(function(doc) {
	      var old = this.doc
	      old.cm = null
	      attachDoc(this, doc)
	      clearCaches(this)
	      this.display.input.reset()
	      this.scrollTo(doc.scrollLeft, doc.scrollTop)
	      this.curOp.forceScroll = true
	      signalLater(this, "swapDoc", this, old)
	      return old
	    }),

	    getInputField: function(){return this.display.input.getField()},
	    getWrapperElement: function(){return this.display.wrapper},
	    getScrollerElement: function(){return this.display.scroller},
	    getGutterElement: function(){return this.display.gutters}
	  }
	  eventMixin(CodeMirror)

	  CodeMirror.registerHelper = function(type, name, value) {
	    if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []} }
	    helpers[type][name] = value
	  }
	  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
	    CodeMirror.registerHelper(type, name, value)
	    helpers[type]._global.push({pred: predicate, val: value})
	  }
	}

	// Used for horizontal relative motion. Dir is -1 or 1 (left or
	// right), unit can be "char", "column" (like char, but doesn't
	// cross line boundaries), "word" (across next word), or "group" (to
	// the start of next group of word or non-word-non-whitespace
	// chars). The visually param controls whether, in right-to-left
	// text, direction 1 means to move towards the next index in the
	// string, or towards the character to the right of the current
	// position. The resulting position will have a hitSide=true
	// property if it reached the end of the document.
	function findPosH(doc, pos, dir, unit, visually) {
	  var line = pos.line, ch = pos.ch, origDir = dir
	  var lineObj = getLine(doc, line)
	  function findNextLine() {
	    var l = line + dir
	    if (l < doc.first || l >= doc.first + doc.size) { return false }
	    line = l
	    return lineObj = getLine(doc, l)
	  }
	  function moveOnce(boundToLine) {
	    var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true)
	    if (next == null) {
	      if (!boundToLine && findNextLine()) {
	        if (visually) { ch = (dir < 0 ? lineRight : lineLeft)(lineObj) }
	        else { ch = dir < 0 ? lineObj.text.length : 0 }
	      } else { return false }
	    } else { ch = next }
	    return true
	  }

	  if (unit == "char") {
	    moveOnce()
	  } else if (unit == "column") {
	    moveOnce(true)
	  } else if (unit == "word" || unit == "group") {
	    var sawType = null, group = unit == "group"
	    var helper = doc.cm && doc.cm.getHelper(pos, "wordChars")
	    for (var first = true;; first = false) {
	      if (dir < 0 && !moveOnce(!first)) { break }
	      var cur = lineObj.text.charAt(ch) || "\n"
	      var type = isWordChar(cur, helper) ? "w"
	        : group && cur == "\n" ? "n"
	        : !group || /\s/.test(cur) ? null
	        : "p"
	      if (group && !first && !type) { type = "s" }
	      if (sawType && sawType != type) {
	        if (dir < 0) {dir = 1; moveOnce()}
	        break
	      }

	      if (type) { sawType = type }
	      if (dir > 0 && !moveOnce(!first)) { break }
	    }
	  }
	  var result = skipAtomic(doc, Pos(line, ch), pos, origDir, true)
	  if (!cmp(pos, result)) { result.hitSide = true }
	  return result
	}

	// For relative vertical movement. Dir may be -1 or 1. Unit can be
	// "page" or "line". The resulting position will have a hitSide=true
	// property if it reached the end of the document.
	function findPosV(cm, pos, dir, unit) {
	  var doc = cm.doc, x = pos.left, y
	  if (unit == "page") {
	    var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight)
	    var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3)
	    y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount

	  } else if (unit == "line") {
	    y = dir > 0 ? pos.bottom + 3 : pos.top - 3
	  }
	  var target
	  for (;;) {
	    target = coordsChar(cm, x, y)
	    if (!target.outside) { break }
	    if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
	    y += dir * 5
	  }
	  return target
	}

	// CONTENTEDITABLE INPUT STYLE

	var ContentEditableInput = function(cm) {
	  this.cm = cm
	  this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null
	  this.polling = new Delayed()
	  this.composing = null
	  this.gracePeriod = false
	  this.readDOMTimeout = null
	};

	ContentEditableInput.prototype.init = function (display) {
	    var this$1 = this;

	  var input = this, cm = input.cm
	  var div = input.div = display.lineDiv
	  disableBrowserMagic(div, cm.options.spellcheck)

	  on(div, "paste", function (e) {
	    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
	    // IE doesn't fire input events, so we schedule a read for the pasted content in this way
	    if (ie_version <= 11) { setTimeout(operation(cm, function () {
	      if (!input.pollContent()) { regChange(cm) }
	    }), 20) }
	  })

	  on(div, "compositionstart", function (e) {
	    this$1.composing = {data: e.data, done: false}
	  })
	  on(div, "compositionupdate", function (e) {
	    if (!this$1.composing) { this$1.composing = {data: e.data, done: false} }
	  })
	  on(div, "compositionend", function (e) {
	    if (this$1.composing) {
	      if (e.data != this$1.composing.data) { this$1.readFromDOMSoon() }
	      this$1.composing.done = true
	    }
	  })

	  on(div, "touchstart", function () { return input.forceCompositionEnd(); })

	  on(div, "input", function () {
	    if (!this$1.composing) { this$1.readFromDOMSoon() }
	  })

	  function onCopyCut(e) {
	    if (signalDOMEvent(cm, e)) { return }
	    if (cm.somethingSelected()) {
	      setLastCopied({lineWise: false, text: cm.getSelections()})
	      if (e.type == "cut") { cm.replaceSelection("", null, "cut") }
	    } else if (!cm.options.lineWiseCopyCut) {
	      return
	    } else {
	      var ranges = copyableRanges(cm)
	      setLastCopied({lineWise: true, text: ranges.text})
	      if (e.type == "cut") {
	        cm.operation(function () {
	          cm.setSelections(ranges.ranges, 0, sel_dontScroll)
	          cm.replaceSelection("", null, "cut")
	        })
	      }
	    }
	    if (e.clipboardData) {
	      e.clipboardData.clearData()
	      var content = lastCopied.text.join("\n")
	      // iOS exposes the clipboard API, but seems to discard content inserted into it
	      e.clipboardData.setData("Text", content)
	      if (e.clipboardData.getData("Text") == content) {
	        e.preventDefault()
	        return
	      }
	    }
	    // Old-fashioned briefly-focus-a-textarea hack
	    var kludge = hiddenTextarea(), te = kludge.firstChild
	    cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild)
	    te.value = lastCopied.text.join("\n")
	    var hadFocus = document.activeElement
	    selectInput(te)
	    setTimeout(function () {
	      cm.display.lineSpace.removeChild(kludge)
	      hadFocus.focus()
	      if (hadFocus == div) { input.showPrimarySelection() }
	    }, 50)
	  }
	  on(div, "copy", onCopyCut)
	  on(div, "cut", onCopyCut)
	};

	ContentEditableInput.prototype.prepareSelection = function () {
	  var result = prepareSelection(this.cm, false)
	  result.focus = this.cm.state.focused
	  return result
	};

	ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
	  if (!info || !this.cm.display.view.length) { return }
	  if (info.focus || takeFocus) { this.showPrimarySelection() }
	  this.showMultipleSelections(info)
	};

	ContentEditableInput.prototype.showPrimarySelection = function () {
	  var sel = window.getSelection(), prim = this.cm.doc.sel.primary()
	  var curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset)
	  var curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset)
	  if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
	      cmp(minPos(curAnchor, curFocus), prim.from()) == 0 &&
	      cmp(maxPos(curAnchor, curFocus), prim.to()) == 0)
	    { return }

	  var start = posToDOM(this.cm, prim.from())
	  var end = posToDOM(this.cm, prim.to())
	  if (!start && !end) { return }

	  var view = this.cm.display.view
	  var old = sel.rangeCount && sel.getRangeAt(0)
	  if (!start) {
	    start = {node: view[0].measure.map[2], offset: 0}
	  } else if (!end) { // FIXME dangerously hacky
	    var measure = view[view.length - 1].measure
	    var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map
	    end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]}
	  }

	  var rng
	  try { rng = range(start.node, start.offset, end.offset, end.node) }
	  catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
	  if (rng) {
	    if (!gecko && this.cm.state.focused) {
	      sel.collapse(start.node, start.offset)
	      if (!rng.collapsed) {
	        sel.removeAllRanges()
	        sel.addRange(rng)
	      }
	    } else {
	      sel.removeAllRanges()
	      sel.addRange(rng)
	    }
	    if (old && sel.anchorNode == null) { sel.addRange(old) }
	    else if (gecko) { this.startGracePeriod() }
	  }
	  this.rememberSelection()
	};

	ContentEditableInput.prototype.startGracePeriod = function () {
	    var this$1 = this;

	  clearTimeout(this.gracePeriod)
	  this.gracePeriod = setTimeout(function () {
	    this$1.gracePeriod = false
	    if (this$1.selectionChanged())
	      { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }) }
	  }, 20)
	};

	ContentEditableInput.prototype.showMultipleSelections = function (info) {
	  removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors)
	  removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection)
	};

	ContentEditableInput.prototype.rememberSelection = function () {
	  var sel = window.getSelection()
	  this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset
	  this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset
	};

	ContentEditableInput.prototype.selectionInEditor = function () {
	  var sel = window.getSelection()
	  if (!sel.rangeCount) { return false }
	  var node = sel.getRangeAt(0).commonAncestorContainer
	  return contains(this.div, node)
	};

	ContentEditableInput.prototype.focus = function () {
	  if (this.cm.options.readOnly != "nocursor") {
	    if (!this.selectionInEditor())
	      { this.showSelection(this.prepareSelection(), true) }
	    this.div.focus()
	  }
	};
	ContentEditableInput.prototype.blur = function () { this.div.blur() };
	ContentEditableInput.prototype.getField = function () { return this.div };

	ContentEditableInput.prototype.supportsTouch = function () { return true };

	ContentEditableInput.prototype.receivedFocus = function () {
	  var input = this
	  if (this.selectionInEditor())
	    { this.pollSelection() }
	  else
	    { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }) }

	  function poll() {
	    if (input.cm.state.focused) {
	      input.pollSelection()
	      input.polling.set(input.cm.options.pollInterval, poll)
	    }
	  }
	  this.polling.set(this.cm.options.pollInterval, poll)
	};

	ContentEditableInput.prototype.selectionChanged = function () {
	  var sel = window.getSelection()
	  return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
	    sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
	};

	ContentEditableInput.prototype.pollSelection = function () {
	  if (!this.composing && this.readDOMTimeout == null && !this.gracePeriod && this.selectionChanged()) {
	    var sel = window.getSelection(), cm = this.cm
	    this.rememberSelection()
	    var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset)
	    var head = domToPos(cm, sel.focusNode, sel.focusOffset)
	    if (anchor && head) { runInOp(cm, function () {
	      setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll)
	      if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true }
	    }) }
	  }
	};

	ContentEditableInput.prototype.pollContent = function () {
	  if (this.readDOMTimeout != null) {
	    clearTimeout(this.readDOMTimeout)
	    this.readDOMTimeout = null
	  }

	  var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary()
	  var from = sel.from(), to = sel.to()
	  if (from.ch == 0 && from.line > cm.firstLine())
	    { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length) }
	  if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
	    { to = Pos(to.line + 1, 0) }
	  if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

	  var fromIndex, fromLine, fromNode
	  if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
	    fromLine = lineNo(display.view[0].line)
	    fromNode = display.view[0].node
	  } else {
	    fromLine = lineNo(display.view[fromIndex].line)
	    fromNode = display.view[fromIndex - 1].node.nextSibling
	  }
	  var toIndex = findViewIndex(cm, to.line)
	  var toLine, toNode
	  if (toIndex == display.view.length - 1) {
	    toLine = display.viewTo - 1
	    toNode = display.lineDiv.lastChild
	  } else {
	    toLine = lineNo(display.view[toIndex + 1].line) - 1
	    toNode = display.view[toIndex + 1].node.previousSibling
	  }

	  if (!fromNode) { return false }
	  var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine))
	  var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length))
	  while (newText.length > 1 && oldText.length > 1) {
	    if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine-- }
	    else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++ }
	    else { break }
	  }

	  var cutFront = 0, cutEnd = 0
	  var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length)
	  while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
	    { ++cutFront }
	  var newBot = lst(newText), oldBot = lst(oldText)
	  var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
	                           oldBot.length - (oldText.length == 1 ? cutFront : 0))
	  while (cutEnd < maxCutEnd &&
	         newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
	    { ++cutEnd }

	  newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "")
	  newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "")

	  var chFrom = Pos(fromLine, cutFront)
	  var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0)
	  if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
	    replaceRange(cm.doc, newText, chFrom, chTo, "+input")
	    return true
	  }
	};

	ContentEditableInput.prototype.ensurePolled = function () {
	  this.forceCompositionEnd()
	};
	ContentEditableInput.prototype.reset = function () {
	  this.forceCompositionEnd()
	};
	ContentEditableInput.prototype.forceCompositionEnd = function () {
	  if (!this.composing) { return }
	  clearTimeout(this.readDOMTimeout)
	  this.composing = null
	  if (!this.pollContent()) { regChange(this.cm) }
	  this.div.blur()
	  this.div.focus()
	};
	ContentEditableInput.prototype.readFromDOMSoon = function () {
	    var this$1 = this;

	  if (this.readDOMTimeout != null) { return }
	  this.readDOMTimeout = setTimeout(function () {
	    this$1.readDOMTimeout = null
	    if (this$1.composing) {
	      if (this$1.composing.done) { this$1.composing = null }
	      else { return }
	    }
	    if (this$1.cm.isReadOnly() || !this$1.pollContent())
	      { runInOp(this$1.cm, function () { return regChange(this$1.cm); }) }
	  }, 80)
	};

	ContentEditableInput.prototype.setUneditable = function (node) {
	  node.contentEditable = "false"
	};

	ContentEditableInput.prototype.onKeyPress = function (e) {
	  e.preventDefault()
	  if (!this.cm.isReadOnly())
	    { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0) }
	};

	ContentEditableInput.prototype.readOnlyChanged = function (val) {
	  this.div.contentEditable = String(val != "nocursor")
	};

	ContentEditableInput.prototype.onContextMenu = function () {};
	ContentEditableInput.prototype.resetPosition = function () {};

	ContentEditableInput.prototype.needsContentAttribute = true

	function posToDOM(cm, pos) {
	  var view = findViewForLine(cm, pos.line)
	  if (!view || view.hidden) { return null }
	  var line = getLine(cm.doc, pos.line)
	  var info = mapFromLineView(view, line, pos.line)

	  var order = getOrder(line), side = "left"
	  if (order) {
	    var partPos = getBidiPartAt(order, pos.ch)
	    side = partPos % 2 ? "right" : "left"
	  }
	  var result = nodeAndOffsetInLineMap(info.map, pos.ch, side)
	  result.offset = result.collapse == "right" ? result.end : result.start
	  return result
	}

	function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

	function domTextBetween(cm, from, to, fromLine, toLine) {
	  var text = "", closing = false, lineSep = cm.doc.lineSeparator()
	  function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
	  function walk(node) {
	    if (node.nodeType == 1) {
	      var cmText = node.getAttribute("cm-text")
	      if (cmText != null) {
	        if (cmText == "") { text += node.textContent.replace(/\u200b/g, "") }
	        else { text += cmText }
	        return
	      }
	      var markerID = node.getAttribute("cm-marker"), range
	      if (markerID) {
	        var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID))
	        if (found.length && (range = found[0].find()))
	          { text += getBetween(cm.doc, range.from, range.to).join(lineSep) }
	        return
	      }
	      if (node.getAttribute("contenteditable") == "false") { return }
	      for (var i = 0; i < node.childNodes.length; i++)
	        { walk(node.childNodes[i]) }
	      if (/^(pre|div|p)$/i.test(node.nodeName))
	        { closing = true }
	    } else if (node.nodeType == 3) {
	      var val = node.nodeValue
	      if (!val) { return }
	      if (closing) {
	        text += lineSep
	        closing = false
	      }
	      text += val
	    }
	  }
	  for (;;) {
	    walk(from)
	    if (from == to) { break }
	    from = from.nextSibling
	  }
	  return text
	}

	function domToPos(cm, node, offset) {
	  var lineNode
	  if (node == cm.display.lineDiv) {
	    lineNode = cm.display.lineDiv.childNodes[offset]
	    if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
	    node = null; offset = 0
	  } else {
	    for (lineNode = node;; lineNode = lineNode.parentNode) {
	      if (!lineNode || lineNode == cm.display.lineDiv) { return null }
	      if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
	    }
	  }
	  for (var i = 0; i < cm.display.view.length; i++) {
	    var lineView = cm.display.view[i]
	    if (lineView.node == lineNode)
	      { return locateNodeInLineView(lineView, node, offset) }
	  }
	}

	function locateNodeInLineView(lineView, node, offset) {
	  var wrapper = lineView.text.firstChild, bad = false
	  if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
	  if (node == wrapper) {
	    bad = true
	    node = wrapper.childNodes[offset]
	    offset = 0
	    if (!node) {
	      var line = lineView.rest ? lst(lineView.rest) : lineView.line
	      return badPos(Pos(lineNo(line), line.text.length), bad)
	    }
	  }

	  var textNode = node.nodeType == 3 ? node : null, topNode = node
	  if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
	    textNode = node.firstChild
	    if (offset) { offset = textNode.nodeValue.length }
	  }
	  while (topNode.parentNode != wrapper) { topNode = topNode.parentNode }
	  var measure = lineView.measure, maps = measure.maps

	  function find(textNode, topNode, offset) {
	    for (var i = -1; i < (maps ? maps.length : 0); i++) {
	      var map = i < 0 ? measure.map : maps[i]
	      for (var j = 0; j < map.length; j += 3) {
	        var curNode = map[j + 2]
	        if (curNode == textNode || curNode == topNode) {
	          var line = lineNo(i < 0 ? lineView.line : lineView.rest[i])
	          var ch = map[j] + offset
	          if (offset < 0 || curNode != textNode) { ch = map[j + (offset ? 1 : 0)] }
	          return Pos(line, ch)
	        }
	      }
	    }
	  }
	  var found = find(textNode, topNode, offset)
	  if (found) { return badPos(found, bad) }

	  // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
	  for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
	    found = find(after, after.firstChild, 0)
	    if (found)
	      { return badPos(Pos(found.line, found.ch - dist), bad) }
	    else
	      { dist += after.textContent.length }
	  }
	  for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
	    found = find(before, before.firstChild, -1)
	    if (found)
	      { return badPos(Pos(found.line, found.ch + dist$1), bad) }
	    else
	      { dist$1 += before.textContent.length }
	  }
	}

	// TEXTAREA INPUT STYLE

	var TextareaInput = function(cm) {
	  this.cm = cm
	  // See input.poll and input.reset
	  this.prevInput = ""

	  // Flag that indicates whether we expect input to appear real soon
	  // now (after some event like 'keypress' or 'input') and are
	  // polling intensively.
	  this.pollingFast = false
	  // Self-resetting timeout for the poller
	  this.polling = new Delayed()
	  // Tracks when input.reset has punted to just putting a short
	  // string into the textarea instead of the full selection.
	  this.inaccurateSelection = false
	  // Used to work around IE issue with selection being forgotten when focus moves away from textarea
	  this.hasSelection = false
	  this.composing = null
	};

	TextareaInput.prototype.init = function (display) {
	    var this$1 = this;

	  var input = this, cm = this.cm

	  // Wraps and hides input textarea
	  var div = this.wrapper = hiddenTextarea()
	  // The semihidden textarea that is focused when the editor is
	  // focused, and receives input.
	  var te = this.textarea = div.firstChild
	  display.wrapper.insertBefore(div, display.wrapper.firstChild)

	  // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
	  if (ios) { te.style.width = "0px" }

	  on(te, "input", function () {
	    if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null }
	    input.poll()
	  })

	  on(te, "paste", function (e) {
	    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

	    cm.state.pasteIncoming = true
	    input.fastPoll()
	  })

	  function prepareCopyCut(e) {
	    if (signalDOMEvent(cm, e)) { return }
	    if (cm.somethingSelected()) {
	      setLastCopied({lineWise: false, text: cm.getSelections()})
	      if (input.inaccurateSelection) {
	        input.prevInput = ""
	        input.inaccurateSelection = false
	        te.value = lastCopied.text.join("\n")
	        selectInput(te)
	      }
	    } else if (!cm.options.lineWiseCopyCut) {
	      return
	    } else {
	      var ranges = copyableRanges(cm)
	      setLastCopied({lineWise: true, text: ranges.text})
	      if (e.type == "cut") {
	        cm.setSelections(ranges.ranges, null, sel_dontScroll)
	      } else {
	        input.prevInput = ""
	        te.value = ranges.text.join("\n")
	        selectInput(te)
	      }
	    }
	    if (e.type == "cut") { cm.state.cutIncoming = true }
	  }
	  on(te, "cut", prepareCopyCut)
	  on(te, "copy", prepareCopyCut)

	  on(display.scroller, "paste", function (e) {
	    if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
	    cm.state.pasteIncoming = true
	    input.focus()
	  })

	  // Prevent normal selection in the editor (we handle our own)
	  on(display.lineSpace, "selectstart", function (e) {
	    if (!eventInWidget(display, e)) { e_preventDefault(e) }
	  })

	  on(te, "compositionstart", function () {
	    var start = cm.getCursor("from")
	    if (input.composing) { input.composing.range.clear() }
	    input.composing = {
	      start: start,
	      range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
	    }
	  })
	  on(te, "compositionend", function () {
	    if (input.composing) {
	      input.poll()
	      input.composing.range.clear()
	      input.composing = null
	    }
	  })
	};

	TextareaInput.prototype.prepareSelection = function () {
	  // Redraw the selection and/or cursor
	  var cm = this.cm, display = cm.display, doc = cm.doc
	  var result = prepareSelection(cm)

	  // Move the hidden textarea near the cursor to prevent scrolling artifacts
	  if (cm.options.moveInputWithCursor) {
	    var headPos = cursorCoords(cm, doc.sel.primary().head, "div")
	    var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect()
	    result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
	                                        headPos.top + lineOff.top - wrapOff.top))
	    result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
	                                         headPos.left + lineOff.left - wrapOff.left))
	  }

	  return result
	};

	TextareaInput.prototype.showSelection = function (drawn) {
	  var cm = this.cm, display = cm.display
	  removeChildrenAndAdd(display.cursorDiv, drawn.cursors)
	  removeChildrenAndAdd(display.selectionDiv, drawn.selection)
	  if (drawn.teTop != null) {
	    this.wrapper.style.top = drawn.teTop + "px"
	    this.wrapper.style.left = drawn.teLeft + "px"
	  }
	};

	// Reset the input to correspond to the selection (or to be empty,
	// when not typing and nothing is selected)
	TextareaInput.prototype.reset = function (typing) {
	  if (this.contextMenuPending) { return }
	  var minimal, selected, cm = this.cm, doc = cm.doc
	  if (cm.somethingSelected()) {
	    this.prevInput = ""
	    var range = doc.sel.primary()
	    minimal = hasCopyEvent &&
	      (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000)
	    var content = minimal ? "-" : selected || cm.getSelection()
	    this.textarea.value = content
	    if (cm.state.focused) { selectInput(this.textarea) }
	    if (ie && ie_version >= 9) { this.hasSelection = content }
	  } else if (!typing) {
	    this.prevInput = this.textarea.value = ""
	    if (ie && ie_version >= 9) { this.hasSelection = null }
	  }
	  this.inaccurateSelection = minimal
	};

	TextareaInput.prototype.getField = function () { return this.textarea };

	TextareaInput.prototype.supportsTouch = function () { return false };

	TextareaInput.prototype.focus = function () {
	  if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
	    try { this.textarea.focus() }
	    catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
	  }
	};

	TextareaInput.prototype.blur = function () { this.textarea.blur() };

	TextareaInput.prototype.resetPosition = function () {
	  this.wrapper.style.top = this.wrapper.style.left = 0
	};

	TextareaInput.prototype.receivedFocus = function () { this.slowPoll() };

	// Poll for input changes, using the normal rate of polling. This
	// runs as long as the editor is focused.
	TextareaInput.prototype.slowPoll = function () {
	    var this$1 = this;

	  if (this.pollingFast) { return }
	  this.polling.set(this.cm.options.pollInterval, function () {
	    this$1.poll()
	    if (this$1.cm.state.focused) { this$1.slowPoll() }
	  })
	};

	// When an event has just come in that is likely to add or change
	// something in the input textarea, we poll faster, to ensure that
	// the change appears on the screen quickly.
	TextareaInput.prototype.fastPoll = function () {
	  var missed = false, input = this
	  input.pollingFast = true
	  function p() {
	    var changed = input.poll()
	    if (!changed && !missed) {missed = true; input.polling.set(60, p)}
	    else {input.pollingFast = false; input.slowPoll()}
	  }
	  input.polling.set(20, p)
	};

	// Read input from the textarea, and update the document to match.
	// When something is selected, it is present in the textarea, and
	// selected (unless it is huge, in which case a placeholder is
	// used). When nothing is selected, the cursor sits after previously
	// seen text (can be empty), which is stored in prevInput (we must
	// not reset the textarea when typing, because that breaks IME).
	TextareaInput.prototype.poll = function () {
	    var this$1 = this;

	  var cm = this.cm, input = this.textarea, prevInput = this.prevInput
	  // Since this is called a *lot*, try to bail out as cheaply as
	  // possible when it is clear that nothing happened. hasSelection
	  // will be the case when there is a lot of text in the textarea,
	  // in which case reading its value would be expensive.
	  if (this.contextMenuPending || !cm.state.focused ||
	      (hasSelection(input) && !prevInput && !this.composing) ||
	      cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
	    { return false }

	  var text = input.value
	  // If nothing changed, bail.
	  if (text == prevInput && !cm.somethingSelected()) { return false }
	  // Work around nonsensical selection resetting in IE9/10, and
	  // inexplicable appearance of private area unicode characters on
	  // some key combos in Mac (#2689).
	  if (ie && ie_version >= 9 && this.hasSelection === text ||
	      mac && /[\uf700-\uf7ff]/.test(text)) {
	    cm.display.input.reset()
	    return false
	  }

	  if (cm.doc.sel == cm.display.selForContextMenu) {
	    var first = text.charCodeAt(0)
	    if (first == 0x200b && !prevInput) { prevInput = "\u200b" }
	    if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
	  }
	  // Find the part of the input that is actually new
	  var same = 0, l = Math.min(prevInput.length, text.length)
	  while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same }

	  runInOp(cm, function () {
	    applyTextInput(cm, text.slice(same), prevInput.length - same,
	                   null, this$1.composing ? "*compose" : null)

	    // Don't leave long text in the textarea, since it makes further polling slow
	    if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = "" }
	    else { this$1.prevInput = text }

	    if (this$1.composing) {
	      this$1.composing.range.clear()
	      this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
	                                         {className: "CodeMirror-composing"})
	    }
	  })
	  return true
	};

	TextareaInput.prototype.ensurePolled = function () {
	  if (this.pollingFast && this.poll()) { this.pollingFast = false }
	};

	TextareaInput.prototype.onKeyPress = function () {
	  if (ie && ie_version >= 9) { this.hasSelection = null }
	  this.fastPoll()
	};

	TextareaInput.prototype.onContextMenu = function (e) {
	  var input = this, cm = input.cm, display = cm.display, te = input.textarea
	  var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop
	  if (!pos || presto) { return } // Opera is difficult.

	  // Reset the current text selection only if the click is done outside of the selection
	  // and 'resetSelectionOnContextMenu' option is true.
	  var reset = cm.options.resetSelectionOnContextMenu
	  if (reset && cm.doc.sel.contains(pos) == -1)
	    { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll) }

	  var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText
	  input.wrapper.style.cssText = "position: absolute"
	  var wrapperBox = input.wrapper.getBoundingClientRect()
	  te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
	  var oldScrollY
	  if (webkit) { oldScrollY = window.scrollY } // Work around Chrome issue (#2712)
	  display.input.focus()
	  if (webkit) { window.scrollTo(null, oldScrollY) }
	  display.input.reset()
	  // Adds "Select all" to context menu in FF
	  if (!cm.somethingSelected()) { te.value = input.prevInput = " " }
	  input.contextMenuPending = true
	  display.selForContextMenu = cm.doc.sel
	  clearTimeout(display.detectingSelectAll)

	  // Select-all will be greyed out if there's nothing to select, so
	  // this adds a zero-width space so that we can later check whether
	  // it got selected.
	  function prepareSelectAllHack() {
	    if (te.selectionStart != null) {
	      var selected = cm.somethingSelected()
	      var extval = "\u200b" + (selected ? te.value : "")
	      te.value = "\u21da" // Used to catch context-menu undo
	      te.value = extval
	      input.prevInput = selected ? "" : "\u200b"
	      te.selectionStart = 1; te.selectionEnd = extval.length
	      // Re-set this, in case some other handler touched the
	      // selection in the meantime.
	      display.selForContextMenu = cm.doc.sel
	    }
	  }
	  function rehide() {
	    input.contextMenuPending = false
	    input.wrapper.style.cssText = oldWrapperCSS
	    te.style.cssText = oldCSS
	    if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos) }

	    // Try to detect the user choosing select-all
	    if (te.selectionStart != null) {
	      if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack() }
	      var i = 0, poll = function () {
	        if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
	            te.selectionEnd > 0 && input.prevInput == "\u200b")
	          { operation(cm, selectAll)(cm) }
	        else if (i++ < 10) { display.detectingSelectAll = setTimeout(poll, 500) }
	        else { display.input.reset() }
	      }
	      display.detectingSelectAll = setTimeout(poll, 200)
	    }
	  }

	  if (ie && ie_version >= 9) { prepareSelectAllHack() }
	  if (captureRightClick) {
	    e_stop(e)
	    var mouseup = function () {
	      off(window, "mouseup", mouseup)
	      setTimeout(rehide, 20)
	    }
	    on(window, "mouseup", mouseup)
	  } else {
	    setTimeout(rehide, 50)
	  }
	};

	TextareaInput.prototype.readOnlyChanged = function (val) {
	  if (!val) { this.reset() }
	};

	TextareaInput.prototype.setUneditable = function () {};

	TextareaInput.prototype.needsContentAttribute = false

	function fromTextArea(textarea, options) {
	  options = options ? copyObj(options) : {}
	  options.value = textarea.value
	  if (!options.tabindex && textarea.tabIndex)
	    { options.tabindex = textarea.tabIndex }
	  if (!options.placeholder && textarea.placeholder)
	    { options.placeholder = textarea.placeholder }
	  // Set autofocus to true if this textarea is focused, or if it has
	  // autofocus and no other element is focused.
	  if (options.autofocus == null) {
	    var hasFocus = activeElt()
	    options.autofocus = hasFocus == textarea ||
	      textarea.getAttribute("autofocus") != null && hasFocus == document.body
	  }

	  function save() {textarea.value = cm.getValue()}

	  var realSubmit
	  if (textarea.form) {
	    on(textarea.form, "submit", save)
	    // Deplorable hack to make the submit method do the right thing.
	    if (!options.leaveSubmitMethodAlone) {
	      var form = textarea.form
	      realSubmit = form.submit
	      try {
	        var wrappedSubmit = form.submit = function () {
	          save()
	          form.submit = realSubmit
	          form.submit()
	          form.submit = wrappedSubmit
	        }
	      } catch(e) {}
	    }
	  }

	  options.finishInit = function (cm) {
	    cm.save = save
	    cm.getTextArea = function () { return textarea; }
	    cm.toTextArea = function () {
	      cm.toTextArea = isNaN // Prevent this from being ran twice
	      save()
	      textarea.parentNode.removeChild(cm.getWrapperElement())
	      textarea.style.display = ""
	      if (textarea.form) {
	        off(textarea.form, "submit", save)
	        if (typeof textarea.form.submit == "function")
	          { textarea.form.submit = realSubmit }
	      }
	    }
	  }

	  textarea.style.display = "none"
	  var cm = CodeMirror(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
	    options)
	  return cm
	}

	function addLegacyProps(CodeMirror) {
	  CodeMirror.off = off
	  CodeMirror.on = on
	  CodeMirror.wheelEventPixels = wheelEventPixels
	  CodeMirror.Doc = Doc
	  CodeMirror.splitLines = splitLinesAuto
	  CodeMirror.countColumn = countColumn
	  CodeMirror.findColumn = findColumn
	  CodeMirror.isWordChar = isWordCharBasic
	  CodeMirror.Pass = Pass
	  CodeMirror.signal = signal
	  CodeMirror.Line = Line
	  CodeMirror.changeEnd = changeEnd
	  CodeMirror.scrollbarModel = scrollbarModel
	  CodeMirror.Pos = Pos
	  CodeMirror.cmpPos = cmp
	  CodeMirror.modes = modes
	  CodeMirror.mimeModes = mimeModes
	  CodeMirror.resolveMode = resolveMode
	  CodeMirror.getMode = getMode
	  CodeMirror.modeExtensions = modeExtensions
	  CodeMirror.extendMode = extendMode
	  CodeMirror.copyState = copyState
	  CodeMirror.startState = startState
	  CodeMirror.innerMode = innerMode
	  CodeMirror.commands = commands
	  CodeMirror.keyMap = keyMap
	  CodeMirror.keyName = keyName
	  CodeMirror.isModifierKey = isModifierKey
	  CodeMirror.lookupKey = lookupKey
	  CodeMirror.normalizeKeyMap = normalizeKeyMap
	  CodeMirror.StringStream = StringStream
	  CodeMirror.SharedTextMarker = SharedTextMarker
	  CodeMirror.TextMarker = TextMarker
	  CodeMirror.LineWidget = LineWidget
	  CodeMirror.e_preventDefault = e_preventDefault
	  CodeMirror.e_stopPropagation = e_stopPropagation
	  CodeMirror.e_stop = e_stop
	  CodeMirror.addClass = addClass
	  CodeMirror.contains = contains
	  CodeMirror.rmClass = rmClass
	  CodeMirror.keyNames = keyNames
	}

	// EDITOR CONSTRUCTOR

	defineOptions(CodeMirror)

	addEditorMethods(CodeMirror)

	// Set up methods on CodeMirror's prototype to redirect to the editor's document.
	var dontDelegate = "iter insert remove copy getEditor constructor".split(" ")
	for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
	  { CodeMirror.prototype[prop] = (function(method) {
	    return function() {return method.apply(this.doc, arguments)}
	  })(Doc.prototype[prop]) } }

	eventMixin(Doc)

	// INPUT HANDLING

	CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput}

	// MODE DEFINITION AND QUERYING

	// Extra arguments are stored as the mode's dependencies, which is
	// used by (legacy) mechanisms like loadmode.js to automatically
	// load a mode. (Preferred mechanism is the require/define calls.)
	CodeMirror.defineMode = function(name/*, mode, …*/) {
	  if (!CodeMirror.defaults.mode && name != "null") { CodeMirror.defaults.mode = name }
	  defineMode.apply(this, arguments)
	}

	CodeMirror.defineMIME = defineMIME

	// Minimal default mode.
	CodeMirror.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); })
	CodeMirror.defineMIME("text/plain", "null")

	// EXTENSIONS

	CodeMirror.defineExtension = function (name, func) {
	  CodeMirror.prototype[name] = func
	}
	CodeMirror.defineDocExtension = function (name, func) {
	  Doc.prototype[name] = func
	}

	CodeMirror.fromTextArea = fromTextArea

	addLegacyProps(CodeMirror)

	CodeMirror.version = "5.22.2"

	return CodeMirror;

	})));

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _codemirror = __webpack_require__(222);

	var _codemirror2 = _interopRequireDefault(_codemirror);

	var _editorComponent = __webpack_require__(224);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SectionComponent = function (_React$Component) {
	  _inherits(SectionComponent, _React$Component);

	  function SectionComponent(props) {
	    _classCallCheck(this, SectionComponent);

	    return _possibleConstructorReturn(this, (SectionComponent.__proto__ || Object.getPrototypeOf(SectionComponent)).call(this, props));
	  }

	  _createClass(SectionComponent, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(_editorComponent.CMEditor, { initialContent: this.props.documentSection.content,
	        configuration: { lineNumbers: true, viewportMargin: Infinity },
	        commands: { save: function save(cm) {
	            _this2.props.save(cm);
	          } },
	        mode: 'javascript'
	      });
	    }
	  }]);

	  return SectionComponent;
	}(_react2.default.Component);

	SectionComponent.propTypes = {
	  save: _react2.default.PropTypes.func.isRequired
	};

	module.exports.SectionComponent = SectionComponent;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _codemirror = __webpack_require__(222);

	var _codemirror2 = _interopRequireDefault(_codemirror);

	__webpack_require__(225);

	__webpack_require__(226);

	__webpack_require__(227);

	__webpack_require__(228);

	__webpack_require__(229);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	;

	var EditorComponent = function (_React$Component) {
	  _inherits(EditorComponent, _React$Component);

	  function EditorComponent(props) {
	    _classCallCheck(this, EditorComponent);

	    return _possibleConstructorReturn(this, (EditorComponent.__proto__ || Object.getPrototypeOf(EditorComponent)).call(this, props));
	  }

	  _createClass(EditorComponent, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {

	      //Get the initial string value
	      var initialValue = this.props.initialContent || "";
	      //Get/init the mode
	      var mode = this.props.mode || "markdown";
	      //Get/init the doc
	      var doc = this.props.doc || _codemirror2.default.Doc(initialValue);

	      var hintOptions = this.props.hintOptions || {};
	      var extraKeys = this.props.extraKeys || {};

	      //Replace default commands by user defined commands
	      _codemirror2.default.commands = Object.assign(_codemirror2.default.commands, this.props.commands);
	      var config = Object.assign({}, {
	        value: doc,
	        mode: mode,
	        extraKeys: extraKeys,
	        hintOptions: hintOptions
	      }, this.props.configuration);

	      this.codeMirror = (0, _codemirror2.default)(this.refs.editor, config);

	      this.codeMirror.setOption("mode", mode);

	      //Bind defined properties
	      if (this.props.onChange) {
	        this.codeMirror.on('change', this.props.onChange);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.codeMirror.setValue(nextProps.initialContent);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { ref: 'editor' });
	    }
	  }]);

	  return EditorComponent;
	}(_react2.default.Component);

	EditorComponent.propTypes = {
	  onChange: _react2.default.PropTypes.func,
	  configuration: _react2.default.PropTypes.object,
	  commands: _react2.default.PropTypes.object,
	  doc: _react2.default.PropTypes.object,
	  hintOptions: _react2.default.PropTypes.object,
	  extraKeys: _react2.default.PropTypes.object,
	  initialContent: _react2.default.PropTypes.string,
	  mode: _react2.default.PropTypes.string
	};

	module.exports.CMEditor = EditorComponent;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(222));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  "use strict";

	  var HINT_ELEMENT_CLASS        = "CodeMirror-hint";
	  var ACTIVE_HINT_ELEMENT_CLASS = "CodeMirror-hint-active";

	  // This is the old interface, kept around for now to stay
	  // backwards-compatible.
	  CodeMirror.showHint = function(cm, getHints, options) {
	    if (!getHints) return cm.showHint(options);
	    if (options && options.async) getHints.async = true;
	    var newOpts = {hint: getHints};
	    if (options) for (var prop in options) newOpts[prop] = options[prop];
	    return cm.showHint(newOpts);
	  };

	  CodeMirror.defineExtension("showHint", function(options) {
	    options = parseOptions(this, this.getCursor("start"), options);
	    var selections = this.listSelections()
	    if (selections.length > 1) return;
	    // By default, don't allow completion when something is selected.
	    // A hint function can have a `supportsSelection` property to
	    // indicate that it can handle selections.
	    if (this.somethingSelected()) {
	      if (!options.hint.supportsSelection) return;
	      // Don't try with cross-line selections
	      for (var i = 0; i < selections.length; i++)
	        if (selections[i].head.line != selections[i].anchor.line) return;
	    }

	    if (this.state.completionActive) this.state.completionActive.close();
	    var completion = this.state.completionActive = new Completion(this, options);
	    if (!completion.options.hint) return;

	    CodeMirror.signal(this, "startCompletion", this);
	    completion.update(true);
	  });

	  function Completion(cm, options) {
	    this.cm = cm;
	    this.options = options;
	    this.widget = null;
	    this.debounce = 0;
	    this.tick = 0;
	    this.startPos = this.cm.getCursor("start");
	    this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length;

	    var self = this;
	    cm.on("cursorActivity", this.activityFunc = function() { self.cursorActivity(); });
	  }

	  var requestAnimationFrame = window.requestAnimationFrame || function(fn) {
	    return setTimeout(fn, 1000/60);
	  };
	  var cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

	  Completion.prototype = {
	    close: function() {
	      if (!this.active()) return;
	      this.cm.state.completionActive = null;
	      this.tick = null;
	      this.cm.off("cursorActivity", this.activityFunc);

	      if (this.widget && this.data) CodeMirror.signal(this.data, "close");
	      if (this.widget) this.widget.close();
	      CodeMirror.signal(this.cm, "endCompletion", this.cm);
	    },

	    active: function() {
	      return this.cm.state.completionActive == this;
	    },

	    pick: function(data, i) {
	      var completion = data.list[i];
	      if (completion.hint) completion.hint(this.cm, data, completion);
	      else this.cm.replaceRange(getText(completion), completion.from || data.from,
	                                completion.to || data.to, "complete");
	      CodeMirror.signal(data, "pick", completion);
	      this.close();
	    },

	    cursorActivity: function() {
	      if (this.debounce) {
	        cancelAnimationFrame(this.debounce);
	        this.debounce = 0;
	      }

	      var pos = this.cm.getCursor(), line = this.cm.getLine(pos.line);
	      if (pos.line != this.startPos.line || line.length - pos.ch != this.startLen - this.startPos.ch ||
	          pos.ch < this.startPos.ch || this.cm.somethingSelected() ||
	          (pos.ch && this.options.closeCharacters.test(line.charAt(pos.ch - 1)))) {
	        this.close();
	      } else {
	        var self = this;
	        this.debounce = requestAnimationFrame(function() {self.update();});
	        if (this.widget) this.widget.disable();
	      }
	    },

	    update: function(first) {
	      if (this.tick == null) return
	      var self = this, myTick = ++this.tick
	      fetchHints(this.options.hint, this.cm, this.options, function(data) {
	        if (self.tick == myTick) self.finishUpdate(data, first)
	      })
	    },

	    finishUpdate: function(data, first) {
	      if (this.data) CodeMirror.signal(this.data, "update");

	      var picked = (this.widget && this.widget.picked) || (first && this.options.completeSingle);
	      if (this.widget) this.widget.close();

	      if (data && this.data && isNewCompletion(this.data, data)) return;
	      this.data = data;

	      if (data && data.list.length) {
	        if (picked && data.list.length == 1) {
	          this.pick(data, 0);
	        } else {
	          this.widget = new Widget(this, data);
	          CodeMirror.signal(data, "shown");
	        }
	      }
	    }
	  };

	  function isNewCompletion(old, nw) {
	    var moved = CodeMirror.cmpPos(nw.from, old.from)
	    return moved > 0 && old.to.ch - old.from.ch != nw.to.ch - nw.from.ch
	  }

	  function parseOptions(cm, pos, options) {
	    var editor = cm.options.hintOptions;
	    var out = {};
	    for (var prop in defaultOptions) out[prop] = defaultOptions[prop];
	    if (editor) for (var prop in editor)
	      if (editor[prop] !== undefined) out[prop] = editor[prop];
	    if (options) for (var prop in options)
	      if (options[prop] !== undefined) out[prop] = options[prop];
	    if (out.hint.resolve) out.hint = out.hint.resolve(cm, pos)
	    return out;
	  }

	  function getText(completion) {
	    if (typeof completion == "string") return completion;
	    else return completion.text;
	  }

	  function buildKeyMap(completion, handle) {
	    var baseMap = {
	      Up: function() {handle.moveFocus(-1);},
	      Down: function() {handle.moveFocus(1);},
	      PageUp: function() {handle.moveFocus(-handle.menuSize() + 1, true);},
	      PageDown: function() {handle.moveFocus(handle.menuSize() - 1, true);},
	      Home: function() {handle.setFocus(0);},
	      End: function() {handle.setFocus(handle.length - 1);},
	      Enter: handle.pick,
	      Tab: handle.pick,
	      Esc: handle.close
	    };
	    var custom = completion.options.customKeys;
	    var ourMap = custom ? {} : baseMap;
	    function addBinding(key, val) {
	      var bound;
	      if (typeof val != "string")
	        bound = function(cm) { return val(cm, handle); };
	      // This mechanism is deprecated
	      else if (baseMap.hasOwnProperty(val))
	        bound = baseMap[val];
	      else
	        bound = val;
	      ourMap[key] = bound;
	    }
	    if (custom)
	      for (var key in custom) if (custom.hasOwnProperty(key))
	        addBinding(key, custom[key]);
	    var extra = completion.options.extraKeys;
	    if (extra)
	      for (var key in extra) if (extra.hasOwnProperty(key))
	        addBinding(key, extra[key]);
	    return ourMap;
	  }

	  function getHintElement(hintsElement, el) {
	    while (el && el != hintsElement) {
	      if (el.nodeName.toUpperCase() === "LI" && el.parentNode == hintsElement) return el;
	      el = el.parentNode;
	    }
	  }

	  function Widget(completion, data) {
	    this.completion = completion;
	    this.data = data;
	    this.picked = false;
	    var widget = this, cm = completion.cm;

	    var hints = this.hints = document.createElement("ul");
	    hints.className = "CodeMirror-hints";
	    this.selectedHint = data.selectedHint || 0;

	    var completions = data.list;
	    for (var i = 0; i < completions.length; ++i) {
	      var elt = hints.appendChild(document.createElement("li")), cur = completions[i];
	      var className = HINT_ELEMENT_CLASS + (i != this.selectedHint ? "" : " " + ACTIVE_HINT_ELEMENT_CLASS);
	      if (cur.className != null) className = cur.className + " " + className;
	      elt.className = className;
	      if (cur.render) cur.render(elt, data, cur);
	      else elt.appendChild(document.createTextNode(cur.displayText || getText(cur)));
	      elt.hintId = i;
	    }

	    var pos = cm.cursorCoords(completion.options.alignWithWord ? data.from : null);
	    var left = pos.left, top = pos.bottom, below = true;
	    hints.style.left = left + "px";
	    hints.style.top = top + "px";
	    // If we're at the edge of the screen, then we want the menu to appear on the left of the cursor.
	    var winW = window.innerWidth || Math.max(document.body.offsetWidth, document.documentElement.offsetWidth);
	    var winH = window.innerHeight || Math.max(document.body.offsetHeight, document.documentElement.offsetHeight);
	    (completion.options.container || document.body).appendChild(hints);
	    var box = hints.getBoundingClientRect(), overlapY = box.bottom - winH;
	    var scrolls = hints.scrollHeight > hints.clientHeight + 1
	    var startScroll = cm.getScrollInfo();

	    if (overlapY > 0) {
	      var height = box.bottom - box.top, curTop = pos.top - (pos.bottom - box.top);
	      if (curTop - height > 0) { // Fits above cursor
	        hints.style.top = (top = pos.top - height) + "px";
	        below = false;
	      } else if (height > winH) {
	        hints.style.height = (winH - 5) + "px";
	        hints.style.top = (top = pos.bottom - box.top) + "px";
	        var cursor = cm.getCursor();
	        if (data.from.ch != cursor.ch) {
	          pos = cm.cursorCoords(cursor);
	          hints.style.left = (left = pos.left) + "px";
	          box = hints.getBoundingClientRect();
	        }
	      }
	    }
	    var overlapX = box.right - winW;
	    if (overlapX > 0) {
	      if (box.right - box.left > winW) {
	        hints.style.width = (winW - 5) + "px";
	        overlapX -= (box.right - box.left) - winW;
	      }
	      hints.style.left = (left = pos.left - overlapX) + "px";
	    }
	    if (scrolls) for (var node = hints.firstChild; node; node = node.nextSibling)
	      node.style.paddingRight = cm.display.nativeBarWidth + "px"

	    cm.addKeyMap(this.keyMap = buildKeyMap(completion, {
	      moveFocus: function(n, avoidWrap) { widget.changeActive(widget.selectedHint + n, avoidWrap); },
	      setFocus: function(n) { widget.changeActive(n); },
	      menuSize: function() { return widget.screenAmount(); },
	      length: completions.length,
	      close: function() { completion.close(); },
	      pick: function() { widget.pick(); },
	      data: data
	    }));

	    if (completion.options.closeOnUnfocus) {
	      var closingOnBlur;
	      cm.on("blur", this.onBlur = function() { closingOnBlur = setTimeout(function() { completion.close(); }, 100); });
	      cm.on("focus", this.onFocus = function() { clearTimeout(closingOnBlur); });
	    }

	    cm.on("scroll", this.onScroll = function() {
	      var curScroll = cm.getScrollInfo(), editor = cm.getWrapperElement().getBoundingClientRect();
	      var newTop = top + startScroll.top - curScroll.top;
	      var point = newTop - (window.pageYOffset || (document.documentElement || document.body).scrollTop);
	      if (!below) point += hints.offsetHeight;
	      if (point <= editor.top || point >= editor.bottom) return completion.close();
	      hints.style.top = newTop + "px";
	      hints.style.left = (left + startScroll.left - curScroll.left) + "px";
	    });

	    CodeMirror.on(hints, "dblclick", function(e) {
	      var t = getHintElement(hints, e.target || e.srcElement);
	      if (t && t.hintId != null) {widget.changeActive(t.hintId); widget.pick();}
	    });

	    CodeMirror.on(hints, "click", function(e) {
	      var t = getHintElement(hints, e.target || e.srcElement);
	      if (t && t.hintId != null) {
	        widget.changeActive(t.hintId);
	        if (completion.options.completeOnSingleClick) widget.pick();
	      }
	    });

	    CodeMirror.on(hints, "mousedown", function() {
	      setTimeout(function(){cm.focus();}, 20);
	    });

	    CodeMirror.signal(data, "select", completions[0], hints.firstChild);
	    return true;
	  }

	  Widget.prototype = {
	    close: function() {
	      if (this.completion.widget != this) return;
	      this.completion.widget = null;
	      this.hints.parentNode.removeChild(this.hints);
	      this.completion.cm.removeKeyMap(this.keyMap);

	      var cm = this.completion.cm;
	      if (this.completion.options.closeOnUnfocus) {
	        cm.off("blur", this.onBlur);
	        cm.off("focus", this.onFocus);
	      }
	      cm.off("scroll", this.onScroll);
	    },

	    disable: function() {
	      this.completion.cm.removeKeyMap(this.keyMap);
	      var widget = this;
	      this.keyMap = {Enter: function() { widget.picked = true; }};
	      this.completion.cm.addKeyMap(this.keyMap);
	    },

	    pick: function() {
	      this.completion.pick(this.data, this.selectedHint);
	    },

	    changeActive: function(i, avoidWrap) {
	      if (i >= this.data.list.length)
	        i = avoidWrap ? this.data.list.length - 1 : 0;
	      else if (i < 0)
	        i = avoidWrap ? 0  : this.data.list.length - 1;
	      if (this.selectedHint == i) return;
	      var node = this.hints.childNodes[this.selectedHint];
	      node.className = node.className.replace(" " + ACTIVE_HINT_ELEMENT_CLASS, "");
	      node = this.hints.childNodes[this.selectedHint = i];
	      node.className += " " + ACTIVE_HINT_ELEMENT_CLASS;
	      if (node.offsetTop < this.hints.scrollTop)
	        this.hints.scrollTop = node.offsetTop - 3;
	      else if (node.offsetTop + node.offsetHeight > this.hints.scrollTop + this.hints.clientHeight)
	        this.hints.scrollTop = node.offsetTop + node.offsetHeight - this.hints.clientHeight + 3;
	      CodeMirror.signal(this.data, "select", this.data.list[this.selectedHint], node);
	    },

	    screenAmount: function() {
	      return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
	    }
	  };

	  function applicableHelpers(cm, helpers) {
	    if (!cm.somethingSelected()) return helpers
	    var result = []
	    for (var i = 0; i < helpers.length; i++)
	      if (helpers[i].supportsSelection) result.push(helpers[i])
	    return result
	  }

	  function fetchHints(hint, cm, options, callback) {
	    if (hint.async) {
	      hint(cm, callback, options)
	    } else {
	      var result = hint(cm, options)
	      if (result && result.then) result.then(callback)
	      else callback(result)
	    }
	  }

	  function resolveAutoHints(cm, pos) {
	    var helpers = cm.getHelpers(pos, "hint"), words
	    if (helpers.length) {
	      var resolved = function(cm, callback, options) {
	        var app = applicableHelpers(cm, helpers);
	        function run(i) {
	          if (i == app.length) return callback(null)
	          fetchHints(app[i], cm, options, function(result) {
	            if (result && result.list.length > 0) callback(result)
	            else run(i + 1)
	          })
	        }
	        run(0)
	      }
	      resolved.async = true
	      resolved.supportsSelection = true
	      return resolved
	    } else if (words = cm.getHelper(cm.getCursor(), "hintWords")) {
	      return function(cm) { return CodeMirror.hint.fromList(cm, {words: words}) }
	    } else if (CodeMirror.hint.anyword) {
	      return function(cm, options) { return CodeMirror.hint.anyword(cm, options) }
	    } else {
	      return function() {}
	    }
	  }

	  CodeMirror.registerHelper("hint", "auto", {
	    resolve: resolveAutoHints
	  });

	  CodeMirror.registerHelper("hint", "fromList", function(cm, options) {
	    var cur = cm.getCursor(), token = cm.getTokenAt(cur);
	    var to = CodeMirror.Pos(cur.line, token.end);
	    if (token.string && /\w/.test(token.string[token.string.length - 1])) {
	      var term = token.string, from = CodeMirror.Pos(cur.line, token.start);
	    } else {
	      var term = "", from = to;
	    }
	    var found = [];
	    for (var i = 0; i < options.words.length; i++) {
	      var word = options.words[i];
	      if (word.slice(0, term.length) == term)
	        found.push(word);
	    }

	    if (found.length) return {list: found, from: from, to: to};
	  });

	  CodeMirror.commands.autocomplete = CodeMirror.showHint;

	  var defaultOptions = {
	    hint: CodeMirror.hint.auto,
	    completeSingle: true,
	    alignWithWord: true,
	    closeCharacters: /[\s()\[\]{};:>,]/,
	    closeOnUnfocus: true,
	    completeOnSingleClick: true,
	    container: null,
	    customKeys: null,
	    extraKeys: null
	  };

	  CodeMirror.defineOption("hintOptions", null);
	});


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "codemirror.css";

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(222));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	function expressionAllowed(stream, state, backUp) {
	  return /^(?:operator|sof|keyword c|case|new|export|default|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
	    (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
	}

	CodeMirror.defineMode("javascript", function(config, parserConfig) {
	  var indentUnit = config.indentUnit;
	  var statementIndent = parserConfig.statementIndent;
	  var jsonldMode = parserConfig.jsonld;
	  var jsonMode = parserConfig.json || jsonldMode;
	  var isTS = parserConfig.typescript;
	  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

	  // Tokenizer

	  var keywords = function(){
	    function kw(type) {return {type: type, style: "keyword"};}
	    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
	    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

	    var jsKeywords = {
	      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
	      "return": C, "break": C, "continue": C, "new": kw("new"), "delete": C, "throw": C, "debugger": C,
	      "var": kw("var"), "const": kw("var"), "let": kw("var"),
	      "function": kw("function"), "catch": kw("catch"),
	      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
	      "in": operator, "typeof": operator, "instanceof": operator,
	      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
	      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
	      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
	      "await": C, "async": kw("async")
	    };

	    // Extend the 'normal' keywords with the TypeScript language extensions
	    if (isTS) {
	      var type = {type: "variable", style: "variable-3"};
	      var tsKeywords = {
	        // object-like things
	        "interface": kw("class"),
	        "implements": C,
	        "namespace": C,
	        "module": kw("module"),
	        "enum": kw("module"),
	        "type": kw("type"),

	        // scope modifiers
	        "public": kw("modifier"),
	        "private": kw("modifier"),
	        "protected": kw("modifier"),
	        "abstract": kw("modifier"),

	        // operators
	        "as": operator,

	        // types
	        "string": type, "number": type, "boolean": type, "any": type
	      };

	      for (var attr in tsKeywords) {
	        jsKeywords[attr] = tsKeywords[attr];
	      }
	    }

	    return jsKeywords;
	  }();

	  var isOperatorChar = /[+\-*&%=<>!?|~^]/;
	  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

	  function readRegexp(stream) {
	    var escaped = false, next, inSet = false;
	    while ((next = stream.next()) != null) {
	      if (!escaped) {
	        if (next == "/" && !inSet) return;
	        if (next == "[") inSet = true;
	        else if (inSet && next == "]") inSet = false;
	      }
	      escaped = !escaped && next == "\\";
	    }
	  }

	  // Used as scratch variables to communicate multiple values without
	  // consing up tons of objects.
	  var type, content;
	  function ret(tp, style, cont) {
	    type = tp; content = cont;
	    return style;
	  }
	  function tokenBase(stream, state) {
	    var ch = stream.next();
	    if (ch == '"' || ch == "'") {
	      state.tokenize = tokenString(ch);
	      return state.tokenize(stream, state);
	    } else if (ch == "." && stream.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
	      return ret("number", "number");
	    } else if (ch == "." && stream.match("..")) {
	      return ret("spread", "meta");
	    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
	      return ret(ch);
	    } else if (ch == "=" && stream.eat(">")) {
	      return ret("=>", "operator");
	    } else if (ch == "0" && stream.eat(/x/i)) {
	      stream.eatWhile(/[\da-f]/i);
	      return ret("number", "number");
	    } else if (ch == "0" && stream.eat(/o/i)) {
	      stream.eatWhile(/[0-7]/i);
	      return ret("number", "number");
	    } else if (ch == "0" && stream.eat(/b/i)) {
	      stream.eatWhile(/[01]/i);
	      return ret("number", "number");
	    } else if (/\d/.test(ch)) {
	      stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
	      return ret("number", "number");
	    } else if (ch == "/") {
	      if (stream.eat("*")) {
	        state.tokenize = tokenComment;
	        return tokenComment(stream, state);
	      } else if (stream.eat("/")) {
	        stream.skipToEnd();
	        return ret("comment", "comment");
	      } else if (expressionAllowed(stream, state, 1)) {
	        readRegexp(stream);
	        stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);
	        return ret("regexp", "string-2");
	      } else {
	        stream.eatWhile(isOperatorChar);
	        return ret("operator", "operator", stream.current());
	      }
	    } else if (ch == "`") {
	      state.tokenize = tokenQuasi;
	      return tokenQuasi(stream, state);
	    } else if (ch == "#") {
	      stream.skipToEnd();
	      return ret("error", "error");
	    } else if (isOperatorChar.test(ch)) {
	      if (ch != ">" || !state.lexical || state.lexical.type != ">")
	        stream.eatWhile(isOperatorChar);
	      return ret("operator", "operator", stream.current());
	    } else if (wordRE.test(ch)) {
	      stream.eatWhile(wordRE);
	      var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
	      return (known && state.lastType != ".") ? ret(known.type, known.style, word) :
	                     ret("variable", "variable", word);
	    }
	  }

	  function tokenString(quote) {
	    return function(stream, state) {
	      var escaped = false, next;
	      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
	        state.tokenize = tokenBase;
	        return ret("jsonld-keyword", "meta");
	      }
	      while ((next = stream.next()) != null) {
	        if (next == quote && !escaped) break;
	        escaped = !escaped && next == "\\";
	      }
	      if (!escaped) state.tokenize = tokenBase;
	      return ret("string", "string");
	    };
	  }

	  function tokenComment(stream, state) {
	    var maybeEnd = false, ch;
	    while (ch = stream.next()) {
	      if (ch == "/" && maybeEnd) {
	        state.tokenize = tokenBase;
	        break;
	      }
	      maybeEnd = (ch == "*");
	    }
	    return ret("comment", "comment");
	  }

	  function tokenQuasi(stream, state) {
	    var escaped = false, next;
	    while ((next = stream.next()) != null) {
	      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
	        state.tokenize = tokenBase;
	        break;
	      }
	      escaped = !escaped && next == "\\";
	    }
	    return ret("quasi", "string-2", stream.current());
	  }

	  var brackets = "([{}])";
	  // This is a crude lookahead trick to try and notice that we're
	  // parsing the argument patterns for a fat-arrow function before we
	  // actually hit the arrow token. It only works if the arrow is on
	  // the same line as the arguments and there's no strange noise
	  // (comments) in between. Fallback is to only notice when we hit the
	  // arrow, and not declare the arguments as locals for the arrow
	  // body.
	  function findFatArrow(stream, state) {
	    if (state.fatArrowAt) state.fatArrowAt = null;
	    var arrow = stream.string.indexOf("=>", stream.start);
	    if (arrow < 0) return;

	    if (isTS) { // Try to skip TypeScript return type declarations after the arguments
	      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow))
	      if (m) arrow = m.index
	    }

	    var depth = 0, sawSomething = false;
	    for (var pos = arrow - 1; pos >= 0; --pos) {
	      var ch = stream.string.charAt(pos);
	      var bracket = brackets.indexOf(ch);
	      if (bracket >= 0 && bracket < 3) {
	        if (!depth) { ++pos; break; }
	        if (--depth == 0) { if (ch == "(") sawSomething = true; break; }
	      } else if (bracket >= 3 && bracket < 6) {
	        ++depth;
	      } else if (wordRE.test(ch)) {
	        sawSomething = true;
	      } else if (/["'\/]/.test(ch)) {
	        return;
	      } else if (sawSomething && !depth) {
	        ++pos;
	        break;
	      }
	    }
	    if (sawSomething && !depth) state.fatArrowAt = pos;
	  }

	  // Parser

	  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

	  function JSLexical(indented, column, type, align, prev, info) {
	    this.indented = indented;
	    this.column = column;
	    this.type = type;
	    this.prev = prev;
	    this.info = info;
	    if (align != null) this.align = align;
	  }

	  function inScope(state, varname) {
	    for (var v = state.localVars; v; v = v.next)
	      if (v.name == varname) return true;
	    for (var cx = state.context; cx; cx = cx.prev) {
	      for (var v = cx.vars; v; v = v.next)
	        if (v.name == varname) return true;
	    }
	  }

	  function parseJS(state, style, type, content, stream) {
	    var cc = state.cc;
	    // Communicate our context to the combinators.
	    // (Less wasteful than consing up a hundred closures on every call.)
	    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

	    if (!state.lexical.hasOwnProperty("align"))
	      state.lexical.align = true;

	    while(true) {
	      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
	      if (combinator(type, content)) {
	        while(cc.length && cc[cc.length - 1].lex)
	          cc.pop()();
	        if (cx.marked) return cx.marked;
	        if (type == "variable" && inScope(state, content)) return "variable-2";
	        return style;
	      }
	    }
	  }

	  // Combinator utils

	  var cx = {state: null, column: null, marked: null, cc: null};
	  function pass() {
	    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
	  }
	  function cont() {
	    pass.apply(null, arguments);
	    return true;
	  }
	  function register(varname) {
	    function inList(list) {
	      for (var v = list; v; v = v.next)
	        if (v.name == varname) return true;
	      return false;
	    }
	    var state = cx.state;
	    cx.marked = "def";
	    if (state.context) {
	      if (inList(state.localVars)) return;
	      state.localVars = {name: varname, next: state.localVars};
	    } else {
	      if (inList(state.globalVars)) return;
	      if (parserConfig.globalVars)
	        state.globalVars = {name: varname, next: state.globalVars};
	    }
	  }

	  // Combinators

	  var defaultVars = {name: "this", next: {name: "arguments"}};
	  function pushcontext() {
	    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
	    cx.state.localVars = defaultVars;
	  }
	  function popcontext() {
	    cx.state.localVars = cx.state.context.vars;
	    cx.state.context = cx.state.context.prev;
	  }
	  function pushlex(type, info) {
	    var result = function() {
	      var state = cx.state, indent = state.indented;
	      if (state.lexical.type == "stat") indent = state.lexical.indented;
	      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
	        indent = outer.indented;
	      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
	    };
	    result.lex = true;
	    return result;
	  }
	  function poplex() {
	    var state = cx.state;
	    if (state.lexical.prev) {
	      if (state.lexical.type == ")")
	        state.indented = state.lexical.indented;
	      state.lexical = state.lexical.prev;
	    }
	  }
	  poplex.lex = true;

	  function expect(wanted) {
	    function exp(type) {
	      if (type == wanted) return cont();
	      else if (wanted == ";") return pass();
	      else return cont(exp);
	    };
	    return exp;
	  }

	  function statement(type, value) {
	    if (type == "var") return cont(pushlex("vardef", value.length), vardef, expect(";"), poplex);
	    if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
	    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
	    if (type == "{") return cont(pushlex("}"), block, poplex);
	    if (type == ";") return cont();
	    if (type == "if") {
	      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
	        cx.state.cc.pop()();
	      return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
	    }
	    if (type == "function") return cont(functiondef);
	    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
	    if (type == "variable") return cont(pushlex("stat"), maybelabel);
	    if (type == "switch") return cont(pushlex("form"), parenExpr, pushlex("}", "switch"), expect("{"),
	                                      block, poplex, poplex);
	    if (type == "case") return cont(expression, expect(":"));
	    if (type == "default") return cont(expect(":"));
	    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
	                                     statement, poplex, popcontext);
	    if (type == "class") return cont(pushlex("form"), className, poplex);
	    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
	    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
	    if (type == "module") return cont(pushlex("form"), pattern, pushlex("}"), expect("{"), block, poplex, poplex)
	    if (type == "type") return cont(typeexpr, expect("operator"), typeexpr, expect(";"));
	    if (type == "async") return cont(statement)
	    return pass(pushlex("stat"), expression, expect(";"), poplex);
	  }
	  function expression(type) {
	    return expressionInner(type, false);
	  }
	  function expressionNoComma(type) {
	    return expressionInner(type, true);
	  }
	  function parenExpr(type) {
	    if (type != "(") return pass()
	    return cont(pushlex(")"), expression, expect(")"), poplex)
	  }
	  function expressionInner(type, noComma) {
	    if (cx.state.fatArrowAt == cx.stream.start) {
	      var body = noComma ? arrowBodyNoComma : arrowBody;
	      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(pattern, ")"), poplex, expect("=>"), body, popcontext);
	      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
	    }

	    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
	    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
	    if (type == "function") return cont(functiondef, maybeop);
	    if (type == "class") return cont(pushlex("form"), classExpression, poplex);
	    if (type == "keyword c" || type == "async") return cont(noComma ? maybeexpressionNoComma : maybeexpression);
	    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
	    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
	    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
	    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
	    if (type == "quasi") return pass(quasi, maybeop);
	    if (type == "new") return cont(maybeTarget(noComma));
	    return cont();
	  }
	  function maybeexpression(type) {
	    if (type.match(/[;\}\)\],]/)) return pass();
	    return pass(expression);
	  }
	  function maybeexpressionNoComma(type) {
	    if (type.match(/[;\}\)\],]/)) return pass();
	    return pass(expressionNoComma);
	  }

	  function maybeoperatorComma(type, value) {
	    if (type == ",") return cont(expression);
	    return maybeoperatorNoComma(type, value, false);
	  }
	  function maybeoperatorNoComma(type, value, noComma) {
	    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
	    var expr = noComma == false ? expression : expressionNoComma;
	    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
	    if (type == "operator") {
	      if (/\+\+|--/.test(value)) return cont(me);
	      if (value == "?") return cont(expression, expect(":"), expr);
	      return cont(expr);
	    }
	    if (type == "quasi") { return pass(quasi, me); }
	    if (type == ";") return;
	    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
	    if (type == ".") return cont(property, me);
	    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
	  }
	  function quasi(type, value) {
	    if (type != "quasi") return pass();
	    if (value.slice(value.length - 2) != "${") return cont(quasi);
	    return cont(expression, continueQuasi);
	  }
	  function continueQuasi(type) {
	    if (type == "}") {
	      cx.marked = "string-2";
	      cx.state.tokenize = tokenQuasi;
	      return cont(quasi);
	    }
	  }
	  function arrowBody(type) {
	    findFatArrow(cx.stream, cx.state);
	    return pass(type == "{" ? statement : expression);
	  }
	  function arrowBodyNoComma(type) {
	    findFatArrow(cx.stream, cx.state);
	    return pass(type == "{" ? statement : expressionNoComma);
	  }
	  function maybeTarget(noComma) {
	    return function(type) {
	      if (type == ".") return cont(noComma ? targetNoComma : target);
	      else return pass(noComma ? expressionNoComma : expression);
	    };
	  }
	  function target(_, value) {
	    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
	  }
	  function targetNoComma(_, value) {
	    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
	  }
	  function maybelabel(type) {
	    if (type == ":") return cont(poplex, statement);
	    return pass(maybeoperatorComma, expect(";"), poplex);
	  }
	  function property(type) {
	    if (type == "variable") {cx.marked = "property"; return cont();}
	  }
	  function objprop(type, value) {
	    if (type == "async") {
	      cx.marked = "property";
	      return cont(objprop);
	    } else if (type == "variable" || cx.style == "keyword") {
	      cx.marked = "property";
	      if (value == "get" || value == "set") return cont(getterSetter);
	      return cont(afterprop);
	    } else if (type == "number" || type == "string") {
	      cx.marked = jsonldMode ? "property" : (cx.style + " property");
	      return cont(afterprop);
	    } else if (type == "jsonld-keyword") {
	      return cont(afterprop);
	    } else if (type == "modifier") {
	      return cont(objprop)
	    } else if (type == "[") {
	      return cont(expression, expect("]"), afterprop);
	    } else if (type == "spread") {
	      return cont(expression);
	    } else if (type == ":") {
	      return pass(afterprop)
	    }
	  }
	  function getterSetter(type) {
	    if (type != "variable") return pass(afterprop);
	    cx.marked = "property";
	    return cont(functiondef);
	  }
	  function afterprop(type) {
	    if (type == ":") return cont(expressionNoComma);
	    if (type == "(") return pass(functiondef);
	  }
	  function commasep(what, end) {
	    function proceed(type, value) {
	      if (type == ",") {
	        var lex = cx.state.lexical;
	        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
	        return cont(function(type, value) {
	          if (type == end || value == end) return pass()
	          return pass(what)
	        }, proceed);
	      }
	      if (type == end || value == end) return cont();
	      return cont(expect(end));
	    }
	    return function(type, value) {
	      if (type == end || value == end) return cont();
	      return pass(what, proceed);
	    };
	  }
	  function contCommasep(what, end, info) {
	    for (var i = 3; i < arguments.length; i++)
	      cx.cc.push(arguments[i]);
	    return cont(pushlex(end, info), commasep(what, end), poplex);
	  }
	  function block(type) {
	    if (type == "}") return cont();
	    return pass(statement, block);
	  }
	  function maybetype(type, value) {
	    if (isTS) {
	      if (type == ":") return cont(typeexpr);
	      if (value == "?") return cont(maybetype);
	    }
	  }
	  function typeexpr(type) {
	    if (type == "variable") {cx.marked = "variable-3"; return cont(afterType);}
	    if (type == "string" || type == "number" || type == "atom") return cont(afterType);
	    if (type == "{") return cont(commasep(typeprop, "}"))
	    if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType)
	  }
	  function maybeReturnType(type) {
	    if (type == "=>") return cont(typeexpr)
	  }
	  function typeprop(type) {
	    if (type == "variable" || cx.style == "keyword") {
	      cx.marked = "property"
	      return cont(typeprop)
	    } else if (type == ":") {
	      return cont(typeexpr)
	    }
	  }
	  function typearg(type) {
	    if (type == "variable") return cont(typearg)
	    else if (type == ":") return cont(typeexpr)
	  }
	  function afterType(type, value) {
	    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
	    if (value == "|" || type == ".") return cont(typeexpr)
	    if (type == "[") return cont(expect("]"), afterType)
	  }
	  function vardef() {
	    return pass(pattern, maybetype, maybeAssign, vardefCont);
	  }
	  function pattern(type, value) {
	    if (type == "modifier") return cont(pattern)
	    if (type == "variable") { register(value); return cont(); }
	    if (type == "spread") return cont(pattern);
	    if (type == "[") return contCommasep(pattern, "]");
	    if (type == "{") return contCommasep(proppattern, "}");
	  }
	  function proppattern(type, value) {
	    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
	      register(value);
	      return cont(maybeAssign);
	    }
	    if (type == "variable") cx.marked = "property";
	    if (type == "spread") return cont(pattern);
	    if (type == "}") return pass();
	    return cont(expect(":"), pattern, maybeAssign);
	  }
	  function maybeAssign(_type, value) {
	    if (value == "=") return cont(expressionNoComma);
	  }
	  function vardefCont(type) {
	    if (type == ",") return cont(vardef);
	  }
	  function maybeelse(type, value) {
	    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
	  }
	  function forspec(type) {
	    if (type == "(") return cont(pushlex(")"), forspec1, expect(")"), poplex);
	  }
	  function forspec1(type) {
	    if (type == "var") return cont(vardef, expect(";"), forspec2);
	    if (type == ";") return cont(forspec2);
	    if (type == "variable") return cont(formaybeinof);
	    return pass(expression, expect(";"), forspec2);
	  }
	  function formaybeinof(_type, value) {
	    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
	    return cont(maybeoperatorComma, forspec2);
	  }
	  function forspec2(type, value) {
	    if (type == ";") return cont(forspec3);
	    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
	    return pass(expression, expect(";"), forspec3);
	  }
	  function forspec3(type) {
	    if (type != ")") cont(expression);
	  }
	  function functiondef(type, value) {
	    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
	    if (type == "variable") {register(value); return cont(functiondef);}
	    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, maybetype, statement, popcontext);
	  }
	  function funarg(type) {
	    if (type == "spread") return cont(funarg);
	    return pass(pattern, maybetype, maybeAssign);
	  }
	  function classExpression(type, value) {
	    // Class expressions may have an optional name.
	    if (type == "variable") return className(type, value);
	    return classNameAfter(type, value);
	  }
	  function className(type, value) {
	    if (type == "variable") {register(value); return cont(classNameAfter);}
	  }
	  function classNameAfter(type, value) {
	    if (value == "extends" || value == "implements") return cont(isTS ? typeexpr : expression, classNameAfter);
	    if (type == "{") return cont(pushlex("}"), classBody, poplex);
	  }
	  function classBody(type, value) {
	    if (type == "variable" || cx.style == "keyword") {
	      if ((value == "static" || value == "get" || value == "set" ||
	           (isTS && (value == "public" || value == "private" || value == "protected" || value == "readonly" || value == "abstract"))) &&
	          cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false)) {
	        cx.marked = "keyword";
	        return cont(classBody);
	      }
	      cx.marked = "property";
	      return cont(isTS ? classfield : functiondef, classBody);
	    }
	    if (value == "*") {
	      cx.marked = "keyword";
	      return cont(classBody);
	    }
	    if (type == ";") return cont(classBody);
	    if (type == "}") return cont();
	  }
	  function classfield(type, value) {
	    if (value == "?") return cont(classfield)
	    if (type == ":") return cont(typeexpr, maybeAssign)
	    return pass(functiondef)
	  }
	  function afterExport(type, value) {
	    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
	    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
	    if (type == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
	    return pass(statement);
	  }
	  function exportField(type, value) {
	    if (value == "as") { cx.marked = "keyword"; return cont(expect("variable")); }
	    if (type == "variable") return pass(expressionNoComma, exportField);
	  }
	  function afterImport(type) {
	    if (type == "string") return cont();
	    return pass(importSpec, maybeMoreImports, maybeFrom);
	  }
	  function importSpec(type, value) {
	    if (type == "{") return contCommasep(importSpec, "}");
	    if (type == "variable") register(value);
	    if (value == "*") cx.marked = "keyword";
	    return cont(maybeAs);
	  }
	  function maybeMoreImports(type) {
	    if (type == ",") return cont(importSpec, maybeMoreImports)
	  }
	  function maybeAs(_type, value) {
	    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
	  }
	  function maybeFrom(_type, value) {
	    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
	  }
	  function arrayLiteral(type) {
	    if (type == "]") return cont();
	    return pass(commasep(expressionNoComma, "]"));
	  }

	  function isContinuedStatement(state, textAfter) {
	    return state.lastType == "operator" || state.lastType == "," ||
	      isOperatorChar.test(textAfter.charAt(0)) ||
	      /[,.]/.test(textAfter.charAt(0));
	  }

	  // Interface

	  return {
	    startState: function(basecolumn) {
	      var state = {
	        tokenize: tokenBase,
	        lastType: "sof",
	        cc: [],
	        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
	        localVars: parserConfig.localVars,
	        context: parserConfig.localVars && {vars: parserConfig.localVars},
	        indented: basecolumn || 0
	      };
	      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
	        state.globalVars = parserConfig.globalVars;
	      return state;
	    },

	    token: function(stream, state) {
	      if (stream.sol()) {
	        if (!state.lexical.hasOwnProperty("align"))
	          state.lexical.align = false;
	        state.indented = stream.indentation();
	        findFatArrow(stream, state);
	      }
	      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
	      var style = state.tokenize(stream, state);
	      if (type == "comment") return style;
	      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
	      return parseJS(state, style, type, content, stream);
	    },

	    indent: function(state, textAfter) {
	      if (state.tokenize == tokenComment) return CodeMirror.Pass;
	      if (state.tokenize != tokenBase) return 0;
	      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top
	      // Kludge to prevent 'maybelse' from blocking lexical scope pops
	      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
	        var c = state.cc[i];
	        if (c == poplex) lexical = lexical.prev;
	        else if (c != maybeelse) break;
	      }
	      while ((lexical.type == "stat" || lexical.type == "form") &&
	             (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
	                                   (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
	                                   !/^[,\.=+\-*:?[\(]/.test(textAfter))))
	        lexical = lexical.prev;
	      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
	        lexical = lexical.prev;
	      var type = lexical.type, closing = firstChar == type;

	      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info + 1 : 0);
	      else if (type == "form" && firstChar == "{") return lexical.indented;
	      else if (type == "form") return lexical.indented + indentUnit;
	      else if (type == "stat")
	        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
	      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
	        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
	      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
	      else return lexical.indented + (closing ? 0 : indentUnit);
	    },

	    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
	    blockCommentStart: jsonMode ? null : "/*",
	    blockCommentEnd: jsonMode ? null : "*/",
	    lineComment: jsonMode ? null : "//",
	    fold: "brace",
	    closeBrackets: "()[]{}''\"\"``",

	    helperType: jsonMode ? "json" : "javascript",
	    jsonldMode: jsonldMode,
	    jsonMode: jsonMode,

	    expressionAllowed: expressionAllowed,
	    skipExpression: function(state) {
	      var top = state.cc[state.cc.length - 1]
	      if (top == expression || top == expressionNoComma) state.cc.pop()
	    }
	  };
	});

	CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

	CodeMirror.defineMIME("text/javascript", "javascript");
	CodeMirror.defineMIME("text/ecmascript", "javascript");
	CodeMirror.defineMIME("application/javascript", "javascript");
	CodeMirror.defineMIME("application/x-javascript", "javascript");
	CodeMirror.defineMIME("application/ecmascript", "javascript");
	CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
	CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
	CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
	CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
	CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

	});


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(222), __webpack_require__(229), __webpack_require__(230));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror", "../xml/xml", "../meta"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	CodeMirror.defineMode("markdown", function(cmCfg, modeCfg) {

	  var htmlMode = CodeMirror.getMode(cmCfg, "text/html");
	  var htmlModeMissing = htmlMode.name == "null"

	  function getMode(name) {
	    if (CodeMirror.findModeByName) {
	      var found = CodeMirror.findModeByName(name);
	      if (found) name = found.mime || found.mimes[0];
	    }
	    var mode = CodeMirror.getMode(cmCfg, name);
	    return mode.name == "null" ? null : mode;
	  }

	  // Should characters that affect highlighting be highlighted separate?
	  // Does not include characters that will be output (such as `1.` and `-` for lists)
	  if (modeCfg.highlightFormatting === undefined)
	    modeCfg.highlightFormatting = false;

	  // Maximum number of nested blockquotes. Set to 0 for infinite nesting.
	  // Excess `>` will emit `error` token.
	  if (modeCfg.maxBlockquoteDepth === undefined)
	    modeCfg.maxBlockquoteDepth = 0;

	  // Should underscores in words open/close em/strong?
	  if (modeCfg.underscoresBreakWords === undefined)
	    modeCfg.underscoresBreakWords = true;

	  // Use `fencedCodeBlocks` to configure fenced code blocks. false to
	  // disable, string to specify a precise regexp that the fence should
	  // match, and true to allow three or more backticks or tildes (as
	  // per CommonMark).

	  // Turn on task lists? ("- [ ] " and "- [x] ")
	  if (modeCfg.taskLists === undefined) modeCfg.taskLists = false;

	  // Turn on strikethrough syntax
	  if (modeCfg.strikethrough === undefined)
	    modeCfg.strikethrough = false;

	  // Allow token types to be overridden by user-provided token types.
	  if (modeCfg.tokenTypeOverrides === undefined)
	    modeCfg.tokenTypeOverrides = {};

	  var tokenTypes = {
	    header: "header",
	    code: "comment",
	    quote: "quote",
	    list1: "variable-2",
	    list2: "variable-3",
	    list3: "keyword",
	    hr: "hr",
	    image: "image",
	    imageAltText: "image-alt-text",
	    imageMarker: "image-marker",
	    formatting: "formatting",
	    linkInline: "link",
	    linkEmail: "link",
	    linkText: "link",
	    linkHref: "string",
	    em: "em",
	    strong: "strong",
	    strikethrough: "strikethrough"
	  };

	  for (var tokenType in tokenTypes) {
	    if (tokenTypes.hasOwnProperty(tokenType) && modeCfg.tokenTypeOverrides[tokenType]) {
	      tokenTypes[tokenType] = modeCfg.tokenTypeOverrides[tokenType];
	    }
	  }

	  var hrRE = /^([*\-_])(?:\s*\1){2,}\s*$/
	  ,   listRE = /^(?:[*\-+]|^[0-9]+([.)]))\s+/
	  ,   taskListRE = /^\[(x| )\](?=\s)/ // Must follow listRE
	  ,   atxHeaderRE = modeCfg.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/
	  ,   setextHeaderRE = /^ *(?:\={1,}|-{1,})\s*$/
	  ,   textRE = /^[^#!\[\]*_\\<>` "'(~]+/
	  ,   fencedCodeRE = new RegExp("^(" + (modeCfg.fencedCodeBlocks === true ? "~~~+|```+" : modeCfg.fencedCodeBlocks) +
	                                ")[ \\t]*([\\w+#\-]*)");

	  function switchInline(stream, state, f) {
	    state.f = state.inline = f;
	    return f(stream, state);
	  }

	  function switchBlock(stream, state, f) {
	    state.f = state.block = f;
	    return f(stream, state);
	  }

	  function lineIsEmpty(line) {
	    return !line || !/\S/.test(line.string)
	  }

	  // Blocks

	  function blankLine(state) {
	    // Reset linkTitle state
	    state.linkTitle = false;
	    // Reset EM state
	    state.em = false;
	    // Reset STRONG state
	    state.strong = false;
	    // Reset strikethrough state
	    state.strikethrough = false;
	    // Reset state.quote
	    state.quote = 0;
	    // Reset state.indentedCode
	    state.indentedCode = false;
	    if (htmlModeMissing && state.f == htmlBlock) {
	      state.f = inlineNormal;
	      state.block = blockNormal;
	    }
	    // Reset state.trailingSpace
	    state.trailingSpace = 0;
	    state.trailingSpaceNewLine = false;
	    // Mark this line as blank
	    state.prevLine = state.thisLine
	    state.thisLine = null
	    return null;
	  }

	  function blockNormal(stream, state) {

	    var sol = stream.sol();

	    var prevLineIsList = state.list !== false,
	        prevLineIsIndentedCode = state.indentedCode;

	    state.indentedCode = false;

	    if (prevLineIsList) {
	      if (state.indentationDiff >= 0) { // Continued list
	        if (state.indentationDiff < 4) { // Only adjust indentation if *not* a code block
	          state.indentation -= state.indentationDiff;
	        }
	        state.list = null;
	      } else if (state.indentation > 0) {
	        state.list = null;
	      } else { // No longer a list
	        state.list = false;
	      }
	    }

	    var match = null;
	    if (state.indentationDiff >= 4) {
	      stream.skipToEnd();
	      if (prevLineIsIndentedCode || lineIsEmpty(state.prevLine)) {
	        state.indentation -= 4;
	        state.indentedCode = true;
	        return tokenTypes.code;
	      } else {
	        return null;
	      }
	    } else if (stream.eatSpace()) {
	      return null;
	    } else if ((match = stream.match(atxHeaderRE)) && match[1].length <= 6) {
	      state.header = match[1].length;
	      if (modeCfg.highlightFormatting) state.formatting = "header";
	      state.f = state.inline;
	      return getType(state);
	    } else if (!lineIsEmpty(state.prevLine) && !state.quote && !prevLineIsList &&
	               !prevLineIsIndentedCode && (match = stream.match(setextHeaderRE))) {
	      state.header = match[0].charAt(0) == '=' ? 1 : 2;
	      if (modeCfg.highlightFormatting) state.formatting = "header";
	      state.f = state.inline;
	      return getType(state);
	    } else if (stream.eat('>')) {
	      state.quote = sol ? 1 : state.quote + 1;
	      if (modeCfg.highlightFormatting) state.formatting = "quote";
	      stream.eatSpace();
	      return getType(state);
	    } else if (stream.peek() === '[') {
	      return switchInline(stream, state, footnoteLink);
	    } else if (stream.match(hrRE, true)) {
	      state.hr = true;
	      return tokenTypes.hr;
	    } else if (match = stream.match(listRE)) {
	      var listType = match[1] ? "ol" : "ul";
	      state.indentation = stream.column() + stream.current().length;
	      state.list = true;

	      // While this list item's marker's indentation
	      // is less than the deepest list item's content's indentation,
	      // pop the deepest list item indentation off the stack.
	      while (state.listStack && stream.column() < state.listStack[state.listStack.length - 1]) {
	        state.listStack.pop();
	      }

	      // Add this list item's content's indentation to the stack
	      state.listStack.push(state.indentation);

	      if (modeCfg.taskLists && stream.match(taskListRE, false)) {
	        state.taskList = true;
	      }
	      state.f = state.inline;
	      if (modeCfg.highlightFormatting) state.formatting = ["list", "list-" + listType];
	      return getType(state);
	    } else if (modeCfg.fencedCodeBlocks && (match = stream.match(fencedCodeRE, true))) {
	      state.fencedChars = match[1]
	      // try switching mode
	      state.localMode = getMode(match[2]);
	      if (state.localMode) state.localState = CodeMirror.startState(state.localMode);
	      state.f = state.block = local;
	      if (modeCfg.highlightFormatting) state.formatting = "code-block";
	      state.code = -1
	      return getType(state);
	    }

	    return switchInline(stream, state, state.inline);
	  }

	  function htmlBlock(stream, state) {
	    var style = htmlMode.token(stream, state.htmlState);
	    if (!htmlModeMissing) {
	      var inner = CodeMirror.innerMode(htmlMode, state.htmlState)
	      if ((inner.mode.name == "xml" && inner.state.tagStart === null &&
	           (!inner.state.context && inner.state.tokenize.isInText)) ||
	          (state.md_inside && stream.current().indexOf(">") > -1)) {
	        state.f = inlineNormal;
	        state.block = blockNormal;
	        state.htmlState = null;
	      }
	    }
	    return style;
	  }

	  function local(stream, state) {
	    if (state.fencedChars && stream.match(state.fencedChars, false)) {
	      state.localMode = state.localState = null;
	      state.f = state.block = leavingLocal;
	      return null;
	    } else if (state.localMode) {
	      return state.localMode.token(stream, state.localState);
	    } else {
	      stream.skipToEnd();
	      return tokenTypes.code;
	    }
	  }

	  function leavingLocal(stream, state) {
	    stream.match(state.fencedChars);
	    state.block = blockNormal;
	    state.f = inlineNormal;
	    state.fencedChars = null;
	    if (modeCfg.highlightFormatting) state.formatting = "code-block";
	    state.code = 1
	    var returnType = getType(state);
	    state.code = 0
	    return returnType;
	  }

	  // Inline
	  function getType(state) {
	    var styles = [];

	    if (state.formatting) {
	      styles.push(tokenTypes.formatting);

	      if (typeof state.formatting === "string") state.formatting = [state.formatting];

	      for (var i = 0; i < state.formatting.length; i++) {
	        styles.push(tokenTypes.formatting + "-" + state.formatting[i]);

	        if (state.formatting[i] === "header") {
	          styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.header);
	        }

	        // Add `formatting-quote` and `formatting-quote-#` for blockquotes
	        // Add `error` instead if the maximum blockquote nesting depth is passed
	        if (state.formatting[i] === "quote") {
	          if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
	            styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.quote);
	          } else {
	            styles.push("error");
	          }
	        }
	      }
	    }

	    if (state.taskOpen) {
	      styles.push("meta");
	      return styles.length ? styles.join(' ') : null;
	    }
	    if (state.taskClosed) {
	      styles.push("property");
	      return styles.length ? styles.join(' ') : null;
	    }

	    if (state.linkHref) {
	      styles.push(tokenTypes.linkHref, "url");
	    } else { // Only apply inline styles to non-url text
	      if (state.strong) { styles.push(tokenTypes.strong); }
	      if (state.em) { styles.push(tokenTypes.em); }
	      if (state.strikethrough) { styles.push(tokenTypes.strikethrough); }
	      if (state.linkText) { styles.push(tokenTypes.linkText); }
	      if (state.code) { styles.push(tokenTypes.code); }
	      if (state.image) { styles.push(tokenTypes.image); }
	      if (state.imageAltText) { styles.push(tokenTypes.imageAltText, "link"); }
	      if (state.imageMarker) { styles.push(tokenTypes.imageMarker); }
	    }

	    if (state.header) { styles.push(tokenTypes.header, tokenTypes.header + "-" + state.header); }

	    if (state.quote) {
	      styles.push(tokenTypes.quote);

	      // Add `quote-#` where the maximum for `#` is modeCfg.maxBlockquoteDepth
	      if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
	        styles.push(tokenTypes.quote + "-" + state.quote);
	      } else {
	        styles.push(tokenTypes.quote + "-" + modeCfg.maxBlockquoteDepth);
	      }
	    }

	    if (state.list !== false) {
	      var listMod = (state.listStack.length - 1) % 3;
	      if (!listMod) {
	        styles.push(tokenTypes.list1);
	      } else if (listMod === 1) {
	        styles.push(tokenTypes.list2);
	      } else {
	        styles.push(tokenTypes.list3);
	      }
	    }

	    if (state.trailingSpaceNewLine) {
	      styles.push("trailing-space-new-line");
	    } else if (state.trailingSpace) {
	      styles.push("trailing-space-" + (state.trailingSpace % 2 ? "a" : "b"));
	    }

	    return styles.length ? styles.join(' ') : null;
	  }

	  function handleText(stream, state) {
	    if (stream.match(textRE, true)) {
	      return getType(state);
	    }
	    return undefined;
	  }

	  function inlineNormal(stream, state) {
	    var style = state.text(stream, state);
	    if (typeof style !== 'undefined')
	      return style;

	    if (state.list) { // List marker (*, +, -, 1., etc)
	      state.list = null;
	      return getType(state);
	    }

	    if (state.taskList) {
	      var taskOpen = stream.match(taskListRE, true)[1] !== "x";
	      if (taskOpen) state.taskOpen = true;
	      else state.taskClosed = true;
	      if (modeCfg.highlightFormatting) state.formatting = "task";
	      state.taskList = false;
	      return getType(state);
	    }

	    state.taskOpen = false;
	    state.taskClosed = false;

	    if (state.header && stream.match(/^#+$/, true)) {
	      if (modeCfg.highlightFormatting) state.formatting = "header";
	      return getType(state);
	    }

	    // Get sol() value now, before character is consumed
	    var sol = stream.sol();

	    var ch = stream.next();

	    // Matches link titles present on next line
	    if (state.linkTitle) {
	      state.linkTitle = false;
	      var matchCh = ch;
	      if (ch === '(') {
	        matchCh = ')';
	      }
	      matchCh = (matchCh+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
	      var regex = '^\\s*(?:[^' + matchCh + '\\\\]+|\\\\\\\\|\\\\.)' + matchCh;
	      if (stream.match(new RegExp(regex), true)) {
	        return tokenTypes.linkHref;
	      }
	    }

	    // If this block is changed, it may need to be updated in GFM mode
	    if (ch === '`') {
	      var previousFormatting = state.formatting;
	      if (modeCfg.highlightFormatting) state.formatting = "code";
	      stream.eatWhile('`');
	      var count = stream.current().length
	      if (state.code == 0) {
	        state.code = count
	        return getType(state)
	      } else if (count == state.code) { // Must be exact
	        var t = getType(state)
	        state.code = 0
	        return t
	      } else {
	        state.formatting = previousFormatting
	        return getType(state)
	      }
	    } else if (state.code) {
	      return getType(state);
	    }

	    if (ch === '\\') {
	      stream.next();
	      if (modeCfg.highlightFormatting) {
	        var type = getType(state);
	        var formattingEscape = tokenTypes.formatting + "-escape";
	        return type ? type + " " + formattingEscape : formattingEscape;
	      }
	    }

	    if (ch === '!' && stream.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
	      state.imageMarker = true;
	      state.image = true;
	      if (modeCfg.highlightFormatting) state.formatting = "image";
	      return getType(state);
	    }

	    if (ch === '[' && state.imageMarker && stream.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, false)) {
	      state.imageMarker = false;
	      state.imageAltText = true
	      if (modeCfg.highlightFormatting) state.formatting = "image";
	      return getType(state);
	    }

	    if (ch === ']' && state.imageAltText) {
	      if (modeCfg.highlightFormatting) state.formatting = "image";
	      var type = getType(state);
	      state.imageAltText = false;
	      state.image = false;
	      state.inline = state.f = linkHref;
	      return type;
	    }

	    if (ch === '[' && stream.match(/[^\]]*\](\(.*\)| ?\[.*?\])/, false) && !state.image) {
	      state.linkText = true;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      return getType(state);
	    }

	    if (ch === ']' && state.linkText && stream.match(/\(.*?\)| ?\[.*?\]/, false)) {
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var type = getType(state);
	      state.linkText = false;
	      state.inline = state.f = linkHref;
	      return type;
	    }

	    if (ch === '<' && stream.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, false)) {
	      state.f = state.inline = linkInline;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var type = getType(state);
	      if (type){
	        type += " ";
	      } else {
	        type = "";
	      }
	      return type + tokenTypes.linkInline;
	    }

	    if (ch === '<' && stream.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, false)) {
	      state.f = state.inline = linkInline;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var type = getType(state);
	      if (type){
	        type += " ";
	      } else {
	        type = "";
	      }
	      return type + tokenTypes.linkEmail;
	    }

	    if (ch === '<' && stream.match(/^(!--|\w)/, false)) {
	      var end = stream.string.indexOf(">", stream.pos);
	      if (end != -1) {
	        var atts = stream.string.substring(stream.start, end);
	        if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)) state.md_inside = true;
	      }
	      stream.backUp(1);
	      state.htmlState = CodeMirror.startState(htmlMode);
	      return switchBlock(stream, state, htmlBlock);
	    }

	    if (ch === '<' && stream.match(/^\/\w*?>/)) {
	      state.md_inside = false;
	      return "tag";
	    }

	    var ignoreUnderscore = false;
	    if (!modeCfg.underscoresBreakWords) {
	      if (ch === '_' && stream.peek() !== '_' && stream.match(/(\w)/, false)) {
	        var prevPos = stream.pos - 2;
	        if (prevPos >= 0) {
	          var prevCh = stream.string.charAt(prevPos);
	          if (prevCh !== '_' && prevCh.match(/(\w)/, false)) {
	            ignoreUnderscore = true;
	          }
	        }
	      }
	    }
	    if (ch === '*' || (ch === '_' && !ignoreUnderscore)) {
	      if (sol && stream.peek() === ' ') {
	        // Do nothing, surrounded by newline and space
	      } else if (state.strong === ch && stream.eat(ch)) { // Remove STRONG
	        if (modeCfg.highlightFormatting) state.formatting = "strong";
	        var t = getType(state);
	        state.strong = false;
	        return t;
	      } else if (!state.strong && stream.eat(ch)) { // Add STRONG
	        state.strong = ch;
	        if (modeCfg.highlightFormatting) state.formatting = "strong";
	        return getType(state);
	      } else if (state.em === ch) { // Remove EM
	        if (modeCfg.highlightFormatting) state.formatting = "em";
	        var t = getType(state);
	        state.em = false;
	        return t;
	      } else if (!state.em) { // Add EM
	        state.em = ch;
	        if (modeCfg.highlightFormatting) state.formatting = "em";
	        return getType(state);
	      }
	    } else if (ch === ' ') {
	      if (stream.eat('*') || stream.eat('_')) { // Probably surrounded by spaces
	        if (stream.peek() === ' ') { // Surrounded by spaces, ignore
	          return getType(state);
	        } else { // Not surrounded by spaces, back up pointer
	          stream.backUp(1);
	        }
	      }
	    }

	    if (modeCfg.strikethrough) {
	      if (ch === '~' && stream.eatWhile(ch)) {
	        if (state.strikethrough) {// Remove strikethrough
	          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
	          var t = getType(state);
	          state.strikethrough = false;
	          return t;
	        } else if (stream.match(/^[^\s]/, false)) {// Add strikethrough
	          state.strikethrough = true;
	          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
	          return getType(state);
	        }
	      } else if (ch === ' ') {
	        if (stream.match(/^~~/, true)) { // Probably surrounded by space
	          if (stream.peek() === ' ') { // Surrounded by spaces, ignore
	            return getType(state);
	          } else { // Not surrounded by spaces, back up pointer
	            stream.backUp(2);
	          }
	        }
	      }
	    }

	    if (ch === ' ') {
	      if (stream.match(/ +$/, false)) {
	        state.trailingSpace++;
	      } else if (state.trailingSpace) {
	        state.trailingSpaceNewLine = true;
	      }
	    }

	    return getType(state);
	  }

	  function linkInline(stream, state) {
	    var ch = stream.next();

	    if (ch === ">") {
	      state.f = state.inline = inlineNormal;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var type = getType(state);
	      if (type){
	        type += " ";
	      } else {
	        type = "";
	      }
	      return type + tokenTypes.linkInline;
	    }

	    stream.match(/^[^>]+/, true);

	    return tokenTypes.linkInline;
	  }

	  function linkHref(stream, state) {
	    // Check if space, and return NULL if so (to avoid marking the space)
	    if(stream.eatSpace()){
	      return null;
	    }
	    var ch = stream.next();
	    if (ch === '(' || ch === '[') {
	      state.f = state.inline = getLinkHrefInside(ch === "(" ? ")" : "]", 0);
	      if (modeCfg.highlightFormatting) state.formatting = "link-string";
	      state.linkHref = true;
	      return getType(state);
	    }
	    return 'error';
	  }

	  var linkRE = {
	    ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
	    "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\\]]|\\.)*\])*?(?=\])/
	  }

	  function getLinkHrefInside(endChar) {
	    return function(stream, state) {
	      var ch = stream.next();

	      if (ch === endChar) {
	        state.f = state.inline = inlineNormal;
	        if (modeCfg.highlightFormatting) state.formatting = "link-string";
	        var returnState = getType(state);
	        state.linkHref = false;
	        return returnState;
	      }

	      stream.match(linkRE[endChar])
	      state.linkHref = true;
	      return getType(state);
	    };
	  }

	  function footnoteLink(stream, state) {
	    if (stream.match(/^([^\]\\]|\\.)*\]:/, false)) {
	      state.f = footnoteLinkInside;
	      stream.next(); // Consume [
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      state.linkText = true;
	      return getType(state);
	    }
	    return switchInline(stream, state, inlineNormal);
	  }

	  function footnoteLinkInside(stream, state) {
	    if (stream.match(/^\]:/, true)) {
	      state.f = state.inline = footnoteUrl;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var returnType = getType(state);
	      state.linkText = false;
	      return returnType;
	    }

	    stream.match(/^([^\]\\]|\\.)+/, true);

	    return tokenTypes.linkText;
	  }

	  function footnoteUrl(stream, state) {
	    // Check if space, and return NULL if so (to avoid marking the space)
	    if(stream.eatSpace()){
	      return null;
	    }
	    // Match URL
	    stream.match(/^[^\s]+/, true);
	    // Check for link title
	    if (stream.peek() === undefined) { // End of line, set flag to check next line
	      state.linkTitle = true;
	    } else { // More content on line, check if link title
	      stream.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, true);
	    }
	    state.f = state.inline = inlineNormal;
	    return tokenTypes.linkHref + " url";
	  }

	  var mode = {
	    startState: function() {
	      return {
	        f: blockNormal,

	        prevLine: null,
	        thisLine: null,

	        block: blockNormal,
	        htmlState: null,
	        indentation: 0,

	        inline: inlineNormal,
	        text: handleText,

	        formatting: false,
	        linkText: false,
	        linkHref: false,
	        linkTitle: false,
	        code: 0,
	        em: false,
	        strong: false,
	        header: 0,
	        hr: false,
	        taskList: false,
	        list: false,
	        listStack: [],
	        quote: 0,
	        trailingSpace: 0,
	        trailingSpaceNewLine: false,
	        strikethrough: false,
	        fencedChars: null
	      };
	    },

	    copyState: function(s) {
	      return {
	        f: s.f,

	        prevLine: s.prevLine,
	        thisLine: s.thisLine,

	        block: s.block,
	        htmlState: s.htmlState && CodeMirror.copyState(htmlMode, s.htmlState),
	        indentation: s.indentation,

	        localMode: s.localMode,
	        localState: s.localMode ? CodeMirror.copyState(s.localMode, s.localState) : null,

	        inline: s.inline,
	        text: s.text,
	        formatting: false,
	        linkTitle: s.linkTitle,
	        code: s.code,
	        em: s.em,
	        strong: s.strong,
	        strikethrough: s.strikethrough,
	        header: s.header,
	        hr: s.hr,
	        taskList: s.taskList,
	        list: s.list,
	        listStack: s.listStack.slice(0),
	        quote: s.quote,
	        indentedCode: s.indentedCode,
	        trailingSpace: s.trailingSpace,
	        trailingSpaceNewLine: s.trailingSpaceNewLine,
	        md_inside: s.md_inside,
	        fencedChars: s.fencedChars
	      };
	    },

	    token: function(stream, state) {

	      // Reset state.formatting
	      state.formatting = false;

	      if (stream != state.thisLine) {
	        var forceBlankLine = state.header || state.hr;

	        // Reset state.header and state.hr
	        state.header = 0;
	        state.hr = false;

	        if (stream.match(/^\s*$/, true) || forceBlankLine) {
	          blankLine(state);
	          if (!forceBlankLine) return null
	          state.prevLine = null
	        }

	        state.prevLine = state.thisLine
	        state.thisLine = stream

	        // Reset state.taskList
	        state.taskList = false;

	        // Reset state.trailingSpace
	        state.trailingSpace = 0;
	        state.trailingSpaceNewLine = false;

	        state.f = state.block;
	        var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, '    ').length;
	        state.indentationDiff = Math.min(indentation - state.indentation, 4);
	        state.indentation = state.indentation + state.indentationDiff;
	        if (indentation > 0) return null;
	      }
	      return state.f(stream, state);
	    },

	    innerMode: function(state) {
	      if (state.block == htmlBlock) return {state: state.htmlState, mode: htmlMode};
	      if (state.localState) return {state: state.localState, mode: state.localMode};
	      return {state: state, mode: mode};
	    },

	    blankLine: blankLine,

	    getType: getType,

	    closeBrackets: "()[]{}''\"\"``",
	    fold: "markdown"
	  };
	  return mode;
	}, "xml");

	CodeMirror.defineMIME("text/x-markdown", "markdown");

	});


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(222));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	var htmlConfig = {
	  autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
	                    'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
	                    'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
	                    'track': true, 'wbr': true, 'menuitem': true},
	  implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
	                     'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
	                     'th': true, 'tr': true},
	  contextGrabbers: {
	    'dd': {'dd': true, 'dt': true},
	    'dt': {'dd': true, 'dt': true},
	    'li': {'li': true},
	    'option': {'option': true, 'optgroup': true},
	    'optgroup': {'optgroup': true},
	    'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
	          'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
	          'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
	          'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
	          'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
	    'rp': {'rp': true, 'rt': true},
	    'rt': {'rp': true, 'rt': true},
	    'tbody': {'tbody': true, 'tfoot': true},
	    'td': {'td': true, 'th': true},
	    'tfoot': {'tbody': true},
	    'th': {'td': true, 'th': true},
	    'thead': {'tbody': true, 'tfoot': true},
	    'tr': {'tr': true}
	  },
	  doNotIndent: {"pre": true},
	  allowUnquoted: true,
	  allowMissing: true,
	  caseFold: true
	}

	var xmlConfig = {
	  autoSelfClosers: {},
	  implicitlyClosed: {},
	  contextGrabbers: {},
	  doNotIndent: {},
	  allowUnquoted: false,
	  allowMissing: false,
	  caseFold: false
	}

	CodeMirror.defineMode("xml", function(editorConf, config_) {
	  var indentUnit = editorConf.indentUnit
	  var config = {}
	  var defaults = config_.htmlMode ? htmlConfig : xmlConfig
	  for (var prop in defaults) config[prop] = defaults[prop]
	  for (var prop in config_) config[prop] = config_[prop]

	  // Return variables for tokenizers
	  var type, setStyle;

	  function inText(stream, state) {
	    function chain(parser) {
	      state.tokenize = parser;
	      return parser(stream, state);
	    }

	    var ch = stream.next();
	    if (ch == "<") {
	      if (stream.eat("!")) {
	        if (stream.eat("[")) {
	          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
	          else return null;
	        } else if (stream.match("--")) {
	          return chain(inBlock("comment", "-->"));
	        } else if (stream.match("DOCTYPE", true, true)) {
	          stream.eatWhile(/[\w\._\-]/);
	          return chain(doctype(1));
	        } else {
	          return null;
	        }
	      } else if (stream.eat("?")) {
	        stream.eatWhile(/[\w\._\-]/);
	        state.tokenize = inBlock("meta", "?>");
	        return "meta";
	      } else {
	        type = stream.eat("/") ? "closeTag" : "openTag";
	        state.tokenize = inTag;
	        return "tag bracket";
	      }
	    } else if (ch == "&") {
	      var ok;
	      if (stream.eat("#")) {
	        if (stream.eat("x")) {
	          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
	        } else {
	          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
	        }
	      } else {
	        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
	      }
	      return ok ? "atom" : "error";
	    } else {
	      stream.eatWhile(/[^&<]/);
	      return null;
	    }
	  }
	  inText.isInText = true;

	  function inTag(stream, state) {
	    var ch = stream.next();
	    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
	      state.tokenize = inText;
	      type = ch == ">" ? "endTag" : "selfcloseTag";
	      return "tag bracket";
	    } else if (ch == "=") {
	      type = "equals";
	      return null;
	    } else if (ch == "<") {
	      state.tokenize = inText;
	      state.state = baseState;
	      state.tagName = state.tagStart = null;
	      var next = state.tokenize(stream, state);
	      return next ? next + " tag error" : "tag error";
	    } else if (/[\'\"]/.test(ch)) {
	      state.tokenize = inAttribute(ch);
	      state.stringStartCol = stream.column();
	      return state.tokenize(stream, state);
	    } else {
	      stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
	      return "word";
	    }
	  }

	  function inAttribute(quote) {
	    var closure = function(stream, state) {
	      while (!stream.eol()) {
	        if (stream.next() == quote) {
	          state.tokenize = inTag;
	          break;
	        }
	      }
	      return "string";
	    };
	    closure.isInAttribute = true;
	    return closure;
	  }

	  function inBlock(style, terminator) {
	    return function(stream, state) {
	      while (!stream.eol()) {
	        if (stream.match(terminator)) {
	          state.tokenize = inText;
	          break;
	        }
	        stream.next();
	      }
	      return style;
	    };
	  }
	  function doctype(depth) {
	    return function(stream, state) {
	      var ch;
	      while ((ch = stream.next()) != null) {
	        if (ch == "<") {
	          state.tokenize = doctype(depth + 1);
	          return state.tokenize(stream, state);
	        } else if (ch == ">") {
	          if (depth == 1) {
	            state.tokenize = inText;
	            break;
	          } else {
	            state.tokenize = doctype(depth - 1);
	            return state.tokenize(stream, state);
	          }
	        }
	      }
	      return "meta";
	    };
	  }

	  function Context(state, tagName, startOfLine) {
	    this.prev = state.context;
	    this.tagName = tagName;
	    this.indent = state.indented;
	    this.startOfLine = startOfLine;
	    if (config.doNotIndent.hasOwnProperty(tagName) || (state.context && state.context.noIndent))
	      this.noIndent = true;
	  }
	  function popContext(state) {
	    if (state.context) state.context = state.context.prev;
	  }
	  function maybePopContext(state, nextTagName) {
	    var parentTagName;
	    while (true) {
	      if (!state.context) {
	        return;
	      }
	      parentTagName = state.context.tagName;
	      if (!config.contextGrabbers.hasOwnProperty(parentTagName) ||
	          !config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
	        return;
	      }
	      popContext(state);
	    }
	  }

	  function baseState(type, stream, state) {
	    if (type == "openTag") {
	      state.tagStart = stream.column();
	      return tagNameState;
	    } else if (type == "closeTag") {
	      return closeTagNameState;
	    } else {
	      return baseState;
	    }
	  }
	  function tagNameState(type, stream, state) {
	    if (type == "word") {
	      state.tagName = stream.current();
	      setStyle = "tag";
	      return attrState;
	    } else {
	      setStyle = "error";
	      return tagNameState;
	    }
	  }
	  function closeTagNameState(type, stream, state) {
	    if (type == "word") {
	      var tagName = stream.current();
	      if (state.context && state.context.tagName != tagName &&
	          config.implicitlyClosed.hasOwnProperty(state.context.tagName))
	        popContext(state);
	      if ((state.context && state.context.tagName == tagName) || config.matchClosing === false) {
	        setStyle = "tag";
	        return closeState;
	      } else {
	        setStyle = "tag error";
	        return closeStateErr;
	      }
	    } else {
	      setStyle = "error";
	      return closeStateErr;
	    }
	  }

	  function closeState(type, _stream, state) {
	    if (type != "endTag") {
	      setStyle = "error";
	      return closeState;
	    }
	    popContext(state);
	    return baseState;
	  }
	  function closeStateErr(type, stream, state) {
	    setStyle = "error";
	    return closeState(type, stream, state);
	  }

	  function attrState(type, _stream, state) {
	    if (type == "word") {
	      setStyle = "attribute";
	      return attrEqState;
	    } else if (type == "endTag" || type == "selfcloseTag") {
	      var tagName = state.tagName, tagStart = state.tagStart;
	      state.tagName = state.tagStart = null;
	      if (type == "selfcloseTag" ||
	          config.autoSelfClosers.hasOwnProperty(tagName)) {
	        maybePopContext(state, tagName);
	      } else {
	        maybePopContext(state, tagName);
	        state.context = new Context(state, tagName, tagStart == state.indented);
	      }
	      return baseState;
	    }
	    setStyle = "error";
	    return attrState;
	  }
	  function attrEqState(type, stream, state) {
	    if (type == "equals") return attrValueState;
	    if (!config.allowMissing) setStyle = "error";
	    return attrState(type, stream, state);
	  }
	  function attrValueState(type, stream, state) {
	    if (type == "string") return attrContinuedState;
	    if (type == "word" && config.allowUnquoted) {setStyle = "string"; return attrState;}
	    setStyle = "error";
	    return attrState(type, stream, state);
	  }
	  function attrContinuedState(type, stream, state) {
	    if (type == "string") return attrContinuedState;
	    return attrState(type, stream, state);
	  }

	  return {
	    startState: function(baseIndent) {
	      var state = {tokenize: inText,
	                   state: baseState,
	                   indented: baseIndent || 0,
	                   tagName: null, tagStart: null,
	                   context: null}
	      if (baseIndent != null) state.baseIndent = baseIndent
	      return state
	    },

	    token: function(stream, state) {
	      if (!state.tagName && stream.sol())
	        state.indented = stream.indentation();

	      if (stream.eatSpace()) return null;
	      type = null;
	      var style = state.tokenize(stream, state);
	      if ((style || type) && style != "comment") {
	        setStyle = null;
	        state.state = state.state(type || style, stream, state);
	        if (setStyle)
	          style = setStyle == "error" ? style + " error" : setStyle;
	      }
	      return style;
	    },

	    indent: function(state, textAfter, fullLine) {
	      var context = state.context;
	      // Indent multi-line strings (e.g. css).
	      if (state.tokenize.isInAttribute) {
	        if (state.tagStart == state.indented)
	          return state.stringStartCol + 1;
	        else
	          return state.indented + indentUnit;
	      }
	      if (context && context.noIndent) return CodeMirror.Pass;
	      if (state.tokenize != inTag && state.tokenize != inText)
	        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
	      // Indent the starts of attribute names.
	      if (state.tagName) {
	        if (config.multilineTagIndentPastTag !== false)
	          return state.tagStart + state.tagName.length + 2;
	        else
	          return state.tagStart + indentUnit * (config.multilineTagIndentFactor || 1);
	      }
	      if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
	      var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
	      if (tagAfter && tagAfter[1]) { // Closing tag spotted
	        while (context) {
	          if (context.tagName == tagAfter[2]) {
	            context = context.prev;
	            break;
	          } else if (config.implicitlyClosed.hasOwnProperty(context.tagName)) {
	            context = context.prev;
	          } else {
	            break;
	          }
	        }
	      } else if (tagAfter) { // Opening tag spotted
	        while (context) {
	          var grabbers = config.contextGrabbers[context.tagName];
	          if (grabbers && grabbers.hasOwnProperty(tagAfter[2]))
	            context = context.prev;
	          else
	            break;
	        }
	      }
	      while (context && context.prev && !context.startOfLine)
	        context = context.prev;
	      if (context) return context.indent + indentUnit;
	      else return state.baseIndent || 0;
	    },

	    electricInput: /<\/[\s\w:]+>$/,
	    blockCommentStart: "<!--",
	    blockCommentEnd: "-->",

	    configuration: config.htmlMode ? "html" : "xml",
	    helperType: config.htmlMode ? "html" : "xml",

	    skipAttribute: function(state) {
	      if (state.state == attrValueState)
	        state.state = attrState
	    }
	  };
	});

	CodeMirror.defineMIME("text/xml", "xml");
	CodeMirror.defineMIME("application/xml", "xml");
	if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
	  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

	});


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(222));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  "use strict";

	  CodeMirror.modeInfo = [
	    {name: "APL", mime: "text/apl", mode: "apl", ext: ["dyalog", "apl"]},
	    {name: "PGP", mimes: ["application/pgp", "application/pgp-keys", "application/pgp-signature"], mode: "asciiarmor", ext: ["pgp"]},
	    {name: "ASN.1", mime: "text/x-ttcn-asn", mode: "asn.1", ext: ["asn", "asn1"]},
	    {name: "Asterisk", mime: "text/x-asterisk", mode: "asterisk", file: /^extensions\.conf$/i},
	    {name: "Brainfuck", mime: "text/x-brainfuck", mode: "brainfuck", ext: ["b", "bf"]},
	    {name: "C", mime: "text/x-csrc", mode: "clike", ext: ["c", "h"]},
	    {name: "C++", mime: "text/x-c++src", mode: "clike", ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"], alias: ["cpp"]},
	    {name: "Cobol", mime: "text/x-cobol", mode: "cobol", ext: ["cob", "cpy"]},
	    {name: "C#", mime: "text/x-csharp", mode: "clike", ext: ["cs"], alias: ["csharp"]},
	    {name: "Clojure", mime: "text/x-clojure", mode: "clojure", ext: ["clj", "cljc", "cljx"]},
	    {name: "ClojureScript", mime: "text/x-clojurescript", mode: "clojure", ext: ["cljs"]},
	    {name: "Closure Stylesheets (GSS)", mime: "text/x-gss", mode: "css", ext: ["gss"]},
	    {name: "CMake", mime: "text/x-cmake", mode: "cmake", ext: ["cmake", "cmake.in"], file: /^CMakeLists.txt$/},
	    {name: "CoffeeScript", mime: "text/x-coffeescript", mode: "coffeescript", ext: ["coffee"], alias: ["coffee", "coffee-script"]},
	    {name: "Common Lisp", mime: "text/x-common-lisp", mode: "commonlisp", ext: ["cl", "lisp", "el"], alias: ["lisp"]},
	    {name: "Cypher", mime: "application/x-cypher-query", mode: "cypher", ext: ["cyp", "cypher"]},
	    {name: "Cython", mime: "text/x-cython", mode: "python", ext: ["pyx", "pxd", "pxi"]},
	    {name: "Crystal", mime: "text/x-crystal", mode: "crystal", ext: ["cr"]},
	    {name: "CSS", mime: "text/css", mode: "css", ext: ["css"]},
	    {name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"]},
	    {name: "D", mime: "text/x-d", mode: "d", ext: ["d"]},
	    {name: "Dart", mimes: ["application/dart", "text/x-dart"], mode: "dart", ext: ["dart"]},
	    {name: "diff", mime: "text/x-diff", mode: "diff", ext: ["diff", "patch"]},
	    {name: "Django", mime: "text/x-django", mode: "django"},
	    {name: "Dockerfile", mime: "text/x-dockerfile", mode: "dockerfile", file: /^Dockerfile$/},
	    {name: "DTD", mime: "application/xml-dtd", mode: "dtd", ext: ["dtd"]},
	    {name: "Dylan", mime: "text/x-dylan", mode: "dylan", ext: ["dylan", "dyl", "intr"]},
	    {name: "EBNF", mime: "text/x-ebnf", mode: "ebnf"},
	    {name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"]},
	    {name: "edn", mime: "application/edn", mode: "clojure", ext: ["edn"]},
	    {name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"]},
	    {name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"]},
	    {name: "Embedded Javascript", mime: "application/x-ejs", mode: "htmlembedded", ext: ["ejs"]},
	    {name: "Embedded Ruby", mime: "application/x-erb", mode: "htmlembedded", ext: ["erb"]},
	    {name: "Erlang", mime: "text/x-erlang", mode: "erlang", ext: ["erl"]},
	    {name: "Factor", mime: "text/x-factor", mode: "factor", ext: ["factor"]},
	    {name: "FCL", mime: "text/x-fcl", mode: "fcl"},
	    {name: "Forth", mime: "text/x-forth", mode: "forth", ext: ["forth", "fth", "4th"]},
	    {name: "Fortran", mime: "text/x-fortran", mode: "fortran", ext: ["f", "for", "f77", "f90"]},
	    {name: "F#", mime: "text/x-fsharp", mode: "mllike", ext: ["fs"], alias: ["fsharp"]},
	    {name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"]},
	    {name: "Gherkin", mime: "text/x-feature", mode: "gherkin", ext: ["feature"]},
	    {name: "GitHub Flavored Markdown", mime: "text/x-gfm", mode: "gfm", file: /^(readme|contributing|history).md$/i},
	    {name: "Go", mime: "text/x-go", mode: "go", ext: ["go"]},
	    {name: "Groovy", mime: "text/x-groovy", mode: "groovy", ext: ["groovy", "gradle"], file: /^Jenkinsfile$/},
	    {name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"]},
	    {name: "Haskell", mime: "text/x-haskell", mode: "haskell", ext: ["hs"]},
	    {name: "Haskell (Literate)", mime: "text/x-literate-haskell", mode: "haskell-literate", ext: ["lhs"]},
	    {name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"]},
	    {name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"]},
	    {name: "ASP.NET", mime: "application/x-aspx", mode: "htmlembedded", ext: ["aspx"], alias: ["asp", "aspx"]},
	    {name: "HTML", mime: "text/html", mode: "htmlmixed", ext: ["html", "htm"], alias: ["xhtml"]},
	    {name: "HTTP", mime: "message/http", mode: "http"},
	    {name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"]},
	    {name: "Pug", mime: "text/x-pug", mode: "pug", ext: ["jade", "pug"], alias: ["jade"]},
	    {name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"]},
	    {name: "Java Server Pages", mime: "application/x-jsp", mode: "htmlembedded", ext: ["jsp"], alias: ["jsp"]},
	    {name: "JavaScript", mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
	     mode: "javascript", ext: ["js"], alias: ["ecmascript", "js", "node"]},
	    {name: "JSON", mimes: ["application/json", "application/x-json"], mode: "javascript", ext: ["json", "map"], alias: ["json5"]},
	    {name: "JSON-LD", mime: "application/ld+json", mode: "javascript", ext: ["jsonld"], alias: ["jsonld"]},
	    {name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"]},
	    {name: "Jinja2", mime: "null", mode: "jinja2"},
	    {name: "Julia", mime: "text/x-julia", mode: "julia", ext: ["jl"]},
	    {name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"]},
	    {name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"]},
	    {name: "LiveScript", mime: "text/x-livescript", mode: "livescript", ext: ["ls"], alias: ["ls"]},
	    {name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"]},
	    {name: "Markdown", mime: "text/x-markdown", mode: "markdown", ext: ["markdown", "md", "mkd"]},
	    {name: "mIRC", mime: "text/mirc", mode: "mirc"},
	    {name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql"},
	    {name: "Mathematica", mime: "text/x-mathematica", mode: "mathematica", ext: ["m", "nb"]},
	    {name: "Modelica", mime: "text/x-modelica", mode: "modelica", ext: ["mo"]},
	    {name: "MUMPS", mime: "text/x-mumps", mode: "mumps", ext: ["mps"]},
	    {name: "MS SQL", mime: "text/x-mssql", mode: "sql"},
	    {name: "mbox", mime: "application/mbox", mode: "mbox", ext: ["mbox"]},
	    {name: "MySQL", mime: "text/x-mysql", mode: "sql"},
	    {name: "Nginx", mime: "text/x-nginx-conf", mode: "nginx", file: /nginx.*\.conf$/i},
	    {name: "NSIS", mime: "text/x-nsis", mode: "nsis", ext: ["nsh", "nsi"]},
	    {name: "NTriples", mime: "text/n-triples", mode: "ntriples", ext: ["nt"]},
	    {name: "Objective C", mime: "text/x-objectivec", mode: "clike", ext: ["m", "mm"], alias: ["objective-c", "objc"]},
	    {name: "OCaml", mime: "text/x-ocaml", mode: "mllike", ext: ["ml", "mli", "mll", "mly"]},
	    {name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"]},
	    {name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"]},
	    {name: "Pascal", mime: "text/x-pascal", mode: "pascal", ext: ["p", "pas"]},
	    {name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"]},
	    {name: "Perl", mime: "text/x-perl", mode: "perl", ext: ["pl", "pm"]},
	    {name: "PHP", mime: "application/x-httpd-php", mode: "php", ext: ["php", "php3", "php4", "php5", "phtml"]},
	    {name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"]},
	    {name: "Plain Text", mime: "text/plain", mode: "null", ext: ["txt", "text", "conf", "def", "list", "log"]},
	    {name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"]},
	    {name: "PowerShell", mime: "application/x-powershell", mode: "powershell", ext: ["ps1", "psd1", "psm1"]},
	    {name: "Properties files", mime: "text/x-properties", mode: "properties", ext: ["properties", "ini", "in"], alias: ["ini", "properties"]},
	    {name: "ProtoBuf", mime: "text/x-protobuf", mode: "protobuf", ext: ["proto"]},
	    {name: "Python", mime: "text/x-python", mode: "python", ext: ["BUILD", "bzl", "py", "pyw"], file: /^(BUCK|BUILD)$/},
	    {name: "Puppet", mime: "text/x-puppet", mode: "puppet", ext: ["pp"]},
	    {name: "Q", mime: "text/x-q", mode: "q", ext: ["q"]},
	    {name: "R", mime: "text/x-rsrc", mode: "r", ext: ["r", "R"], alias: ["rscript"]},
	    {name: "reStructuredText", mime: "text/x-rst", mode: "rst", ext: ["rst"], alias: ["rst"]},
	    {name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm"},
	    {name: "RPM Spec", mime: "text/x-rpm-spec", mode: "rpm", ext: ["spec"]},
	    {name: "Ruby", mime: "text/x-ruby", mode: "ruby", ext: ["rb"], alias: ["jruby", "macruby", "rake", "rb", "rbx"]},
	    {name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"]},
	    {name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"]},
	    {name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"]},
	    {name: "Scala", mime: "text/x-scala", mode: "clike", ext: ["scala"]},
	    {name: "Scheme", mime: "text/x-scheme", mode: "scheme", ext: ["scm", "ss"]},
	    {name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"]},
	    {name: "Shell", mime: "text/x-sh", mode: "shell", ext: ["sh", "ksh", "bash"], alias: ["bash", "sh", "zsh"], file: /^PKGBUILD$/},
	    {name: "Sieve", mime: "application/sieve", mode: "sieve", ext: ["siv", "sieve"]},
	    {name: "Slim", mimes: ["text/x-slim", "application/x-slim"], mode: "slim", ext: ["slim"]},
	    {name: "Smalltalk", mime: "text/x-stsrc", mode: "smalltalk", ext: ["st"]},
	    {name: "Smarty", mime: "text/x-smarty", mode: "smarty", ext: ["tpl"]},
	    {name: "Solr", mime: "text/x-solr", mode: "solr"},
	    {name: "Soy", mime: "text/x-soy", mode: "soy", ext: ["soy"], alias: ["closure template"]},
	    {name: "SPARQL", mime: "application/sparql-query", mode: "sparql", ext: ["rq", "sparql"], alias: ["sparul"]},
	    {name: "Spreadsheet", mime: "text/x-spreadsheet", mode: "spreadsheet", alias: ["excel", "formula"]},
	    {name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"]},
	    {name: "Squirrel", mime: "text/x-squirrel", mode: "clike", ext: ["nut"]},
	    {name: "Stylus", mime: "text/x-styl", mode: "stylus", ext: ["styl"]},
	    {name: "Swift", mime: "text/x-swift", mode: "swift", ext: ["swift"]},
	    {name: "sTeX", mime: "text/x-stex", mode: "stex"},
	    {name: "LaTeX", mime: "text/x-latex", mode: "stex", ext: ["text", "ltx"], alias: ["tex"]},
	    {name: "SystemVerilog", mime: "text/x-systemverilog", mode: "verilog", ext: ["v"]},
	    {name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"]},
	    {name: "Textile", mime: "text/x-textile", mode: "textile", ext: ["textile"]},
	    {name: "TiddlyWiki ", mime: "text/x-tiddlywiki", mode: "tiddlywiki"},
	    {name: "Tiki wiki", mime: "text/tiki", mode: "tiki"},
	    {name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"]},
	    {name: "Tornado", mime: "text/x-tornado", mode: "tornado"},
	    {name: "troff", mime: "text/troff", mode: "troff", ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]},
	    {name: "TTCN", mime: "text/x-ttcn", mode: "ttcn", ext: ["ttcn", "ttcn3", "ttcnpp"]},
	    {name: "TTCN_CFG", mime: "text/x-ttcn-cfg", mode: "ttcn-cfg", ext: ["cfg"]},
	    {name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"]},
	    {name: "TypeScript", mime: "application/typescript", mode: "javascript", ext: ["ts"], alias: ["ts"]},
	    {name: "Twig", mime: "text/x-twig", mode: "twig"},
	    {name: "Web IDL", mime: "text/x-webidl", mode: "webidl", ext: ["webidl"]},
	    {name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"]},
	    {name: "VBScript", mime: "text/vbscript", mode: "vbscript", ext: ["vbs"]},
	    {name: "Velocity", mime: "text/velocity", mode: "velocity", ext: ["vtl"]},
	    {name: "Verilog", mime: "text/x-verilog", mode: "verilog", ext: ["v"]},
	    {name: "VHDL", mime: "text/x-vhdl", mode: "vhdl", ext: ["vhd", "vhdl"]},
	    {name: "Vue.js Component", mimes: ["script/x-vue", "text/x-vue"], mode: "vue", ext: ["vue"]},
	    {name: "XML", mimes: ["application/xml", "text/xml"], mode: "xml", ext: ["xml", "xsl", "xsd"], alias: ["rss", "wsdl", "xsd"]},
	    {name: "XQuery", mime: "application/xquery", mode: "xquery", ext: ["xy", "xquery"]},
	    {name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"]},
	    {name: "YAML", mimes: ["text/x-yaml", "text/yaml"], mode: "yaml", ext: ["yaml", "yml"], alias: ["yml"]},
	    {name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"]},
	    {name: "mscgen", mime: "text/x-mscgen", mode: "mscgen", ext: ["mscgen", "mscin", "msc"]},
	    {name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"]},
	    {name: "msgenny", mime: "text/x-msgenny", mode: "mscgen", ext: ["msgenny"]}
	  ];
	  // Ensure all modes have a mime property for backwards compatibility
	  for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	    var info = CodeMirror.modeInfo[i];
	    if (info.mimes) info.mime = info.mimes[0];
	  }

	  CodeMirror.findModeByMIME = function(mime) {
	    mime = mime.toLowerCase();
	    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	      var info = CodeMirror.modeInfo[i];
	      if (info.mime == mime) return info;
	      if (info.mimes) for (var j = 0; j < info.mimes.length; j++)
	        if (info.mimes[j] == mime) return info;
	    }
	  };

	  CodeMirror.findModeByExtension = function(ext) {
	    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	      var info = CodeMirror.modeInfo[i];
	      if (info.ext) for (var j = 0; j < info.ext.length; j++)
	        if (info.ext[j] == ext) return info;
	    }
	  };

	  CodeMirror.findModeByFileName = function(filename) {
	    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	      var info = CodeMirror.modeInfo[i];
	      if (info.file && info.file.test(filename)) return info;
	    }
	    var dot = filename.lastIndexOf(".");
	    var ext = dot > -1 && filename.substring(dot + 1, filename.length);
	    if (ext) return CodeMirror.findModeByExtension(ext);
	  };

	  CodeMirror.findModeByName = function(name) {
	    name = name.toLowerCase();
	    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	      var info = CodeMirror.modeInfo[i];
	      if (info.name.toLowerCase() == name) return info;
	      if (info.alias) for (var j = 0; j < info.alias.length; j++)
	        if (info.alias[j].toLowerCase() == name) return info;
	    }
	  };
	});


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var popsicle = __webpack_require__(232);

	var GITHUB_API_URL = "https://api.github.com/";

	var Github = function () {
	  function Github(props) {
	    _classCallCheck(this, Github);

	    this.props = Object.assign({}, props);
	  }

	  _createClass(Github, [{
	    key: "doAuthRequest",
	    value: function doAuthRequest(request) {
	      var headers = {};
	      if (this.props.token && this.props.username) {
	        headers = {
	          "Authorization": " Basic " + btoa(this.props.username + ":" + this.props.token)
	        };
	      }

	      Object.assign(request, { headers: headers });

	      return popsicle.request(request).then(function (res) {
	        if (res.code != 200) {
	          return JSON.parse(res.body);
	        }
	        return null;
	      });
	    }
	  }, {
	    key: "getRepo",
	    value: function getRepo(username, repo) {
	      return this.doAuthRequest({
	        url: GITHUB_API_URL + "repos/" + username + "/" + repo,
	        method: 'GET'
	      });
	    }
	  }, {
	    key: "getFile",
	    value: function getFile(username, repo, filename) {
	      return this.doAuthRequest({
	        url: GITHUB_API_URL + "repos/" + username + "/" + repo + "/contents/" + filename,
	        method: 'GET'
	      });
	    }
	  }]);

	  return Github;
	}();

	exports.default = Github;

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var FormData = __webpack_require__(233);
	exports.FormData = FormData;
	var request_1 = __webpack_require__(234);
	var plugins = __webpack_require__(246);
	exports.plugins = plugins;
	var form_1 = __webpack_require__(249);
	exports.form = form_1.default;
	var jar_1 = __webpack_require__(250);
	exports.jar = jar_1.default;
	var error_1 = __webpack_require__(243);
	exports.PopsicleError = error_1.default;
	var index_1 = __webpack_require__(252);
	exports.createTransport = index_1.createTransport;
	function defaults(defaultsOptions) {
	    var transport = index_1.createTransport({ type: 'text' });
	    var defaults = Object.assign({}, { transport: transport }, defaultsOptions);
	    return function popsicle(options) {
	        var opts = Object.assign({}, defaults, typeof options === 'string' ? { url: options } : options);
	        if (typeof opts.url !== 'string') {
	            throw new TypeError('The URL must be a string');
	        }
	        return new request_1.Request(opts);
	    };
	}
	exports.defaults = defaults;
	exports.request = defaults({});
	exports.get = defaults({ method: 'get' });
	exports.post = defaults({ method: 'post' });
	exports.put = defaults({ method: 'put' });
	exports.patch = defaults({ method: 'patch' });
	exports.del = defaults({ method: 'delete' });
	exports.head = defaults({ method: 'head' });
	__export(__webpack_require__(235));
	__export(__webpack_require__(234));
	__export(__webpack_require__(253));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = exports.request;
	//# sourceMappingURL=common.js.map

/***/ },
/* 233 */
/***/ function(module, exports) {

	"use strict";
	module.exports = FormData;
	//# sourceMappingURL=form-data.js.map

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_1 = __webpack_require__(235);
	var support_1 = __webpack_require__(242);
	var error_1 = __webpack_require__(243);
	var Request = (function (_super) {
	    __extends(Request, _super);
	    function Request(options) {
	        var _this = _super.call(this, options) || this;
	        _this.middleware = [];
	        _this.opened = false;
	        _this.aborted = false;
	        _this.uploaded = 0;
	        _this.downloaded = 0;
	        _this.timeout = (options.timeout | 0);
	        _this.method = (options.method || 'GET').toUpperCase();
	        _this.body = options.body;
	        _this.events = options.events || Object.create(null);
	        _this.transport = Object.assign({}, options.transport);
	        _this.use(options.use || _this.transport.use);
	        _this._promise = Promise.resolve().then(function () { return exec(_this); });
	        _this.once('abort', function () {
	            if (_this.completed === 1) {
	                return;
	            }
	            _this.aborted = true;
	        });
	        return _this;
	    }
	    Request.prototype.error = function (message, code, original) {
	        return new error_1.default(message, code, original, this);
	    };
	    Request.prototype.then = function (onFulfilled, onRejected) {
	        return this._promise.then(onFulfilled, onRejected);
	    };
	    Request.prototype.catch = function (onRejected) {
	        return this._promise.then(null, onRejected);
	    };
	    Request.prototype.exec = function (cb) {
	        this.then(function (res) { return cb(null, res); }, cb);
	    };
	    Request.prototype.toOptions = function () {
	        return {
	            url: this.url,
	            method: this.method,
	            body: this.body,
	            transport: this.transport,
	            timeout: this.timeout,
	            rawHeaders: this.rawHeaders,
	            use: this.middleware,
	            events: this.events
	        };
	    };
	    Request.prototype.toJSON = function () {
	        return {
	            url: this.url,
	            method: this.method,
	            headers: this.headers,
	            body: this.body,
	            timeout: this.timeout
	        };
	    };
	    Request.prototype.clone = function () {
	        return new Request(this.toOptions());
	    };
	    Request.prototype.use = function (fn) {
	        if (Array.isArray(fn)) {
	            (_a = this.middleware).push.apply(_a, fn);
	        }
	        else {
	            this.middleware.push(fn);
	        }
	        return this;
	        var _a;
	    };
	    Request.prototype.on = function (event, fn) {
	        if (Object.prototype.hasOwnProperty.call(this.events, event)) {
	            this.events[event].push(fn);
	        }
	        else {
	            this.events[event] = [fn];
	        }
	        return this;
	    };
	    Request.prototype.off = function (event, fn) {
	        if (Object.prototype.hasOwnProperty.call(this.events, event)) {
	            var list = this.events[event];
	            var index = -1;
	            for (var i = 0; i < list.length; i++) {
	                if (list[i] === fn || list[i].listener === fn) {
	                    index = i;
	                    break;
	                }
	            }
	            if (index > -1) {
	                if (list.length === 1) {
	                    delete this.events[event];
	                }
	                else {
	                    support_1.splice(this.events[event], index);
	                }
	            }
	        }
	        return this;
	    };
	    Request.prototype.once = function (event, fn) {
	        return this.on(event, wrapOnce(this, event, fn));
	    };
	    Request.prototype.emit = function (event) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        if (!Object.prototype.hasOwnProperty.call(this.events, event)) {
	            return this;
	        }
	        var listeners = this.events[event];
	        if (listeners.length === 1) {
	            args.length === 0 ? listeners[0].call(this) : listeners[0].apply(this, args);
	        }
	        else {
	            for (var _a = 0, _b = listeners.slice(); _a < _b.length; _a++) {
	                var listener = _b[_a];
	                args.length === 0 ? listener.call(this) : listener.apply(this, args);
	            }
	        }
	        return this;
	    };
	    Request.prototype.abort = function () {
	        return this.emit('abort');
	    };
	    Request.prototype.handle = function () {
	        var _this = this;
	        this.opened = true;
	        if (/^https?\:\/*(?:[~#\\\?;\:]|$)/.test(this.url)) {
	            return Promise.reject(this.error("Refused to connect to invalid URL \"" + this.url + "\"", 'EINVALID'));
	        }
	        var timeout = this.timeout;
	        var timer;
	        var result = new Promise(function (resolve, reject) {
	            if (timeout > 0) {
	                timer = setTimeout(function () {
	                    reject(_this.error("Timeout of " + timeout + "ms exceeded", 'ETIMEOUT'));
	                    _this.abort();
	                }, timeout);
	            }
	            _this.once('abort', function () {
	                _this.emit('progress');
	                reject(_this.error('Request aborted', 'EABORT'));
	                if (_this.transport.abort) {
	                    _this.transport.abort(_this);
	                }
	            });
	            Promise.resolve(_this.transport.open(_this)).then(function (res) { return resolve(res); }, function (err) { return reject(err); });
	        });
	        if (timeout > 0) {
	            result.then(function () { return clearTimeout(timer); }, function () { return clearTimeout(timer); });
	        }
	        return result;
	    };
	    Object.defineProperty(Request.prototype, "completed", {
	        get: function () {
	            return (this.uploaded + this.downloaded) / 2;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Request.prototype, "completedBytes", {
	        get: function () {
	            return this.uploadedBytes + this.downloadedBytes;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Request.prototype, "totalBytes", {
	        get: function () {
	            return this.uploadLength + this.downloadLength;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Request.prototype._setUploadedBytes = function (bytes, uploaded) {
	        if (bytes !== this.uploadedBytes) {
	            this.uploaded = uploaded || bytes / this.uploadLength;
	            this.uploadedBytes = bytes;
	            this.emit('progress');
	        }
	    };
	    Request.prototype._setDownloadedBytes = function (bytes, downloaded) {
	        if (bytes !== this.downloadedBytes) {
	            this.downloaded = downloaded || bytes / this.downloadLength;
	            this.downloadedBytes = bytes;
	            this.emit('progress');
	        }
	    };
	    return Request;
	}(base_1.Base));
	exports.Request = Request;
	function wrapOnce(target, event, fn) {
	    var fired = false;
	    var g = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        if (!fired) {
	            fired = true;
	            target.off(event, fn);
	            args.length === 0 ? fn.call(target) : fn.apply(target, args);
	        }
	    };
	    g.listener = fn;
	    return g;
	}
	function exec(req) {
	    var index = -1;
	    function dispatch(pos) {
	        if (pos <= index) {
	            throw new TypeError('`next()` called multiple times');
	        }
	        if (req.aborted) {
	            return Promise.reject(req.error('Request aborted', 'EABORT'));
	        }
	        index = pos;
	        var fn = req.middleware[pos] || (function () { return req.handle(); });
	        return new Promise(function (resolve) {
	            return resolve(fn(req, function next() {
	                return dispatch(pos + 1);
	            }));
	        });
	    }
	    return dispatch(0);
	}
	//# sourceMappingURL=request.js.map

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var url_1 = __webpack_require__(236);
	var querystring_1 = __webpack_require__(239);
	var support_1 = __webpack_require__(242);
	function lowerHeader(key) {
	    var lower = key.toLowerCase();
	    if (lower === 'referrer') {
	        return 'referer';
	    }
	    return lower;
	}
	function type(str) {
	    return str == null ? null : str.split(/ *; */, 1)[0];
	}
	function concat(a, b) {
	    if (a == null) {
	        return b;
	    }
	    return Array.isArray(a) ? a.concat(b) : [a, b];
	}
	var Base = (function () {
	    function Base(_a) {
	        var url = _a.url, headers = _a.headers, rawHeaders = _a.rawHeaders, query = _a.query;
	        this.Url = {};
	        this.rawHeaders = [];
	        if (url != null) {
	            this.url = url;
	        }
	        if (query != null) {
	            this.query = Object.assign(this.query, typeof query === 'string' ? querystring_1.parse(query) : query);
	        }
	        if (rawHeaders) {
	            if (rawHeaders.length % 2 === 1) {
	                throw new TypeError("Expected raw headers length to be even, was " + rawHeaders.length);
	            }
	            this.rawHeaders = rawHeaders.slice(0);
	        }
	        else {
	            this.headers = headers;
	        }
	    }
	    Object.defineProperty(Base.prototype, "url", {
	        get: function () {
	            return url_1.format(this.Url);
	        },
	        set: function (url) {
	            this.Url = url_1.parse(url, true, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Base.prototype, "query", {
	        get: function () {
	            return this.Url.query;
	        },
	        set: function (query) {
	            this.Url.query = typeof query === 'string' ? querystring_1.parse(query) : query;
	            this.Url.search = null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Base.prototype, "headers", {
	        get: function () {
	            var headers = {};
	            for (var i = 0; i < this.rawHeaders.length; i += 2) {
	                var key = lowerHeader(this.rawHeaders[i]);
	                var value = concat(headers[key], this.rawHeaders[i + 1]);
	                headers[key] = value;
	            }
	            return headers;
	        },
	        set: function (headers) {
	            this.rawHeaders = [];
	            if (headers) {
	                for (var _i = 0, _a = Object.keys(headers); _i < _a.length; _i++) {
	                    var key = _a[_i];
	                    this.append(key, headers[key]);
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Base.prototype.toHeaders = function () {
	        var headers = {};
	        for (var i = 0; i < this.rawHeaders.length; i += 2) {
	            var key = this.rawHeaders[i];
	            var value = concat(headers[key], this.rawHeaders[i + 1]);
	            headers[key] = value;
	        }
	        return headers;
	    };
	    Base.prototype.set = function (name, value) {
	        this.remove(name);
	        this.append(name, value);
	        return this;
	    };
	    Base.prototype.append = function (name, value) {
	        if (Array.isArray(value)) {
	            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
	                var val = value_1[_i];
	                if (val != null) {
	                    this.rawHeaders.push(name, val);
	                }
	            }
	        }
	        else {
	            if (value != null) {
	                this.rawHeaders.push(name, value);
	            }
	        }
	        return this;
	    };
	    Base.prototype.name = function (name) {
	        var lowered = lowerHeader(name);
	        for (var i = 0; i < this.rawHeaders.length; i += 2) {
	            if (lowerHeader(this.rawHeaders[i]) === lowered) {
	                return this.rawHeaders[i];
	            }
	        }
	        return undefined;
	    };
	    Base.prototype.get = function (name) {
	        var lowered = lowerHeader(name);
	        for (var i = 0; i < this.rawHeaders.length; i += 2) {
	            if (lowerHeader(this.rawHeaders[i]) === lowered) {
	                return this.rawHeaders[i + 1];
	            }
	        }
	        return undefined;
	    };
	    Base.prototype.getAll = function (name) {
	        var lowered = lowerHeader(name);
	        var result = [];
	        for (var i = 0; i < this.rawHeaders.length; i += 2) {
	            if (lowerHeader(this.rawHeaders[i]) === lowered) {
	                result.push(this.rawHeaders[i + 1]);
	            }
	        }
	        return result;
	    };
	    Base.prototype.remove = function (name) {
	        var lowered = lowerHeader(name);
	        for (var i = 0; i < this.rawHeaders.length; i += 2) {
	            if (lowerHeader(this.rawHeaders[i]) === lowered) {
	                support_1.splice(this.rawHeaders, i, 2);
	            }
	        }
	        return this;
	    };
	    Base.prototype.type = function (value) {
	        if (arguments.length === 0) {
	            return type(this.get('Content-Type'));
	        }
	        return this.set('Content-Type', value);
	    };
	    return Base;
	}());
	exports.Base = Base;
	//# sourceMappingURL=base.js.map

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var punycode = __webpack_require__(237);
	var util = __webpack_require__(238);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(239);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(203)(module), (function() { return this; }())))

/***/ },
/* 238 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(240);
	exports.encode = exports.stringify = __webpack_require__(241);


/***/ },
/* 240 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },
/* 241 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 242 */
/***/ function(module, exports) {

	"use strict";
	function splice(arr, start, count) {
	    if (count === void 0) { count = 1; }
	    for (var i = start; i < arr.length - count; i++) {
	        arr[i] = arr[i + count];
	    }
	    arr.length -= count;
	}
	exports.splice = splice;
	//# sourceMappingURL=support.js.map

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var makeErrorCause = __webpack_require__(244);
	var PopsicleError = (function (_super) {
	    __extends(PopsicleError, _super);
	    function PopsicleError(message, code, original, popsicle) {
	        var _this = _super.call(this, message, original) || this;
	        _this.name = 'PopsicleError';
	        _this.code = code;
	        _this.popsicle = popsicle;
	        return _this;
	    }
	    return PopsicleError;
	}(makeErrorCause.BaseError));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = PopsicleError;
	//# sourceMappingURL=error.js.map

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var makeError = __webpack_require__(245);
	function makeErrorCause(value, _super) {
	    if (_super === void 0) { _super = makeErrorCause.BaseError; }
	    return makeError(value, _super);
	}
	var makeErrorCause;
	(function (makeErrorCause) {
	    var BaseError = (function (_super) {
	        __extends(BaseError, _super);
	        function BaseError(message, cause) {
	            _super.call(this, message);
	            this.cause = cause;
	        }
	        BaseError.prototype.toString = function () {
	            return _super.prototype.toString.call(this) + (this.cause ? "\nCaused by: " + this.cause.toString() : '');
	        };
	        return BaseError;
	    }(makeError.BaseError));
	    makeErrorCause.BaseError = BaseError;
	})(makeErrorCause || (makeErrorCause = {}));
	module.exports = makeErrorCause;
	//# sourceMappingURL=index.js.map

/***/ },
/* 245 */
/***/ function(module, exports) {

	// ISC @ Julien Fontanet

	'use strict'

	// ===================================================================

	var defineProperty = Object.defineProperty

	// -------------------------------------------------------------------

	var captureStackTrace = Error.captureStackTrace
	if (!captureStackTrace) {
	  captureStackTrace = function captureStackTrace (error) {
	    var container = new Error()

	    defineProperty(error, 'stack', {
	      configurable: true,
	      get: function getStack () {
	        var stack = container.stack

	        // Replace property with value for faster future accesses.
	        defineProperty(this, 'stack', {
	          value: stack
	        })

	        return stack
	      },
	      set: function setStack (stack) {
	        defineProperty(error, 'stack', {
	          configurable: true,
	          value: stack,
	          writable: true
	        })
	      }
	    })
	  }
	}

	// -------------------------------------------------------------------

	function BaseError (message) {
	  if (message) {
	    defineProperty(this, 'message', {
	      configurable: true,
	      value: message,
	      writable: true
	    })
	  }

	  var cname = this.constructor.name
	  if (
	    cname &&
	    cname !== this.name
	  ) {
	    defineProperty(this, 'name', {
	      configurable: true,
	      value: cname,
	      writable: true
	    })
	  }

	  captureStackTrace(this, this.constructor)
	}

	BaseError.prototype = Object.create(Error.prototype, {
	  // See: https://github.com/JsCommunity/make-error/issues/4
	  constructor: {
	    configurable: true,
	    value: BaseError,
	    writable: true
	  }
	})

	// -------------------------------------------------------------------

	// Sets the name of a function if possible (depends of the JS engine).
	var setFunctionName = (function () {
	  function setFunctionName (fn, name) {
	    return defineProperty(fn, 'name', {
	      configurable: true,
	      value: name
	    })
	  }
	  try {
	    var f = function () {}
	    setFunctionName(f, 'foo')
	    if (f.name === 'foo') {
	      return setFunctionName
	    }
	  } catch (_) {}
	})()

	// -------------------------------------------------------------------

	function makeError (constructor, super_) {
	  if (super_ == null || super_ === Error) {
	    super_ = BaseError
	  } else if (typeof super_ !== 'function') {
	    throw new TypeError('super_ should be a function')
	  }

	  var name
	  if (typeof constructor === 'string') {
	    name = constructor
	    constructor = function () { super_.apply(this, arguments) }

	    // If the name can be set, do it once and for all.
	    if (setFunctionName) {
	      setFunctionName(constructor, name)
	      name = null
	    }
	  } else if (typeof constructor !== 'function') {
	    throw new TypeError('constructor should be either a string or a function')
	  }

	  // Also register the super constructor also as `constructor.super_` just
	  // like Node's `util.inherits()`.
	  constructor.super_ = constructor['super'] = super_

	  var properties = {
	    constructor: {
	      configurable: true,
	      value: constructor,
	      writable: true
	    }
	  }

	  // If the name could not be set on the constructor, set it on the
	  // prototype.
	  if (name != null) {
	    properties.name = {
	      configurable: true,
	      value: name,
	      writable: true
	    }
	  }
	  constructor.prototype = Object.create(super_.prototype, properties)

	  return constructor
	}
	exports = module.exports = makeError
	exports.BaseError = BaseError


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(247));
	//# sourceMappingURL=browser.js.map

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FormData = __webpack_require__(233);
	var querystring_1 = __webpack_require__(239);
	var index_1 = __webpack_require__(248);
	var form_1 = __webpack_require__(249);
	var JSON_MIME_REGEXP = /^application\/(?:[\w!#\$%&\*`\-\.\^~]*\+)?json$/i;
	var URL_ENCODED_MIME_REGEXP = /^application\/x-www-form-urlencoded$/i;
	var FORM_MIME_REGEXP = /^multipart\/form-data$/i;
	var JSON_PROTECTION_PREFIX = /^\)\]\}',?\n/;
	function wrap(value) {
	    return function () { return value; };
	}
	exports.wrap = wrap;
	exports.headers = wrap(function (request, next) {
	    if (!request.get('Accept')) {
	        request.set('Accept', '*/*');
	    }
	    request.remove('Host');
	    return next();
	});
	exports.stringify = wrap(function (request, next) {
	    var body = request.body;
	    if (Object(body) !== body) {
	        request.body = body == null ? null : String(body);
	        return next();
	    }
	    if (index_1.default(body)) {
	        return next();
	    }
	    var type = request.type();
	    if (!type) {
	        type = 'application/json';
	        request.type(type);
	    }
	    try {
	        if (JSON_MIME_REGEXP.test(type)) {
	            request.body = JSON.stringify(body);
	        }
	        else if (FORM_MIME_REGEXP.test(type)) {
	            request.body = form_1.default(body);
	        }
	        else if (URL_ENCODED_MIME_REGEXP.test(type)) {
	            request.body = querystring_1.stringify(body);
	        }
	    }
	    catch (err) {
	        return Promise.reject(request.error('Unable to stringify request body: ' + err.message, 'ESTRINGIFY', err));
	    }
	    if (request.body instanceof FormData) {
	        request.remove('Content-Type');
	    }
	    return next();
	});
	function parse(type, strict) {
	    var types = Array.isArray(type) ? type : [type];
	    for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
	        var type_1 = types_1[_i];
	        if (type_1 !== 'json' && type_1 !== 'urlencoded') {
	            throw new TypeError("Unexpected parse type: " + type_1);
	        }
	    }
	    return function (request, next) {
	        return next()
	            .then(function (response) {
	            var body = response.body;
	            var responseType = response.type();
	            if (body == null || body === '') {
	                response.body = null;
	                return response;
	            }
	            if (responseType == null) {
	                throw request.error("Unable to parse empty response content type", 'EPARSE');
	            }
	            if (typeof body !== 'string') {
	                throw request.error("Unable to parse non-string response body", 'EPARSE');
	            }
	            for (var _i = 0, types_2 = types; _i < types_2.length; _i++) {
	                var type_2 = types_2[_i];
	                if (type_2 === 'json' && JSON_MIME_REGEXP.test(responseType)) {
	                    try {
	                        response.body = JSON.parse(body.replace(JSON_PROTECTION_PREFIX, ''));
	                    }
	                    catch (err) {
	                        throw request.error("Unable to parse response body: " + err.message, 'EPARSE', err);
	                    }
	                    return response;
	                }
	                if (type_2 === 'urlencoded' && URL_ENCODED_MIME_REGEXP.test(responseType)) {
	                    response.body = querystring_1.parse(body);
	                    return response;
	                }
	            }
	            if (strict !== false) {
	                throw request.error("Unhandled response type: " + responseType, 'EPARSE');
	            }
	            return response;
	        });
	    };
	}
	exports.parse = parse;
	//# sourceMappingURL=common.js.map

/***/ },
/* 248 */
/***/ function(module, exports) {

	"use strict";
	function isHostObject(object) {
	    var str = Object.prototype.toString.call(object);
	    switch (str) {
	        case '[object File]':
	        case '[object Blob]':
	        case '[object FormData]':
	        case '[object ArrayBuffer]':
	            return true;
	        default:
	            return false;
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = isHostObject;
	//# sourceMappingURL=browser.js.map

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FormData = __webpack_require__(233);
	function form(obj) {
	    var form = new FormData();
	    if (obj) {
	        Object.keys(obj).forEach(function (name) {
	            form.append(name, obj[name]);
	        });
	    }
	    return form;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = form;
	//# sourceMappingURL=form.js.map

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tough_cookie_1 = __webpack_require__(251);
	function cookieJar(store) {
	    return new tough_cookie_1.CookieJar(store);
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = cookieJar;
	//# sourceMappingURL=jar.js.map

/***/ },
/* 251 */
/***/ function(module, exports) {

	"use strict";
	var CookieJar = (function () {
	    function CookieJar() {
	        throw new TypeError('Cookie jars are not available in browsers');
	    }
	    return CookieJar;
	}());
	exports.CookieJar = CookieJar;
	//# sourceMappingURL=tough-cookie.js.map

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var response_1 = __webpack_require__(253);
	var index_1 = __webpack_require__(246);
	function createTransport(options) {
	    return {
	        use: use,
	        abort: abort,
	        open: function (request) {
	            return handle(request, options);
	        }
	    };
	}
	exports.createTransport = createTransport;
	var use = [index_1.stringify(), index_1.headers()];
	function handle(request, options) {
	    return new Promise(function (resolve, reject) {
	        var type = options.type || 'text';
	        var url = request.url, method = request.method;
	        if (window.location.protocol === 'https:' && /^http\:/.test(url)) {
	            return reject(request.error("The request to \"" + url + "\" was blocked", 'EBLOCKED'));
	        }
	        var xhr = request._raw = new XMLHttpRequest();
	        function done() {
	            return new Promise(function (resolve) {
	                return resolve(new response_1.Response({
	                    status: xhr.status === 1223 ? 204 : xhr.status,
	                    statusText: xhr.statusText,
	                    rawHeaders: parseToRawHeaders(xhr.getAllResponseHeaders()),
	                    body: type === 'text' ? xhr.responseText : xhr.response,
	                    url: xhr.responseURL
	                }));
	            });
	        }
	        xhr.onload = function () { return resolve(done()); };
	        xhr.onabort = function () { return resolve(done()); };
	        xhr.onerror = function () {
	            return reject(request.error("Unable to connect to \"" + request.url + "\"", 'EUNAVAILABLE'));
	        };
	        xhr.onprogress = function (e) {
	            if (e.lengthComputable) {
	                request.downloadLength = e.total;
	            }
	            request._setDownloadedBytes(e.loaded);
	        };
	        xhr.upload.onloadend = function () { return request.downloaded = 1; };
	        if (method === 'GET' || method === 'HEAD' || !xhr.upload) {
	            request.uploadLength = 0;
	            request._setUploadedBytes(0, 1);
	        }
	        else {
	            xhr.upload.onprogress = function (e) {
	                if (e.lengthComputable) {
	                    request.uploadLength = e.total;
	                }
	                request._setUploadedBytes(e.loaded);
	            };
	            xhr.upload.onloadend = function () { return request.uploaded = 1; };
	        }
	        try {
	            xhr.open(method, url);
	        }
	        catch (e) {
	            return reject(request.error("Refused to connect to \"" + url + "\"", 'ECSP', e));
	        }
	        if (options.withCredentials) {
	            xhr.withCredentials = true;
	        }
	        if (options.overrideMimeType) {
	            xhr.overrideMimeType(options.overrideMimeType);
	        }
	        if (type !== 'text') {
	            try {
	                xhr.responseType = type;
	            }
	            finally {
	                if (xhr.responseType !== type) {
	                    return reject(request.error("Unsupported type: " + type, 'ETYPE'));
	                }
	            }
	        }
	        for (var i = 0; i < request.rawHeaders.length; i += 2) {
	            xhr.setRequestHeader(request.rawHeaders[i], request.rawHeaders[i + 1]);
	        }
	        xhr.send(request.body);
	    });
	}
	function abort(request) {
	    request._raw.abort();
	}
	function parseToRawHeaders(headers) {
	    var rawHeaders = [];
	    var lines = headers.split(/\r?\n/);
	    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
	        var line = lines_1[_i];
	        if (line) {
	            var indexOf = line.indexOf(':');
	            var name_1 = line.substr(0, indexOf).trim();
	            var value = line.substr(indexOf + 1).trim();
	            rawHeaders.push(name_1, value);
	        }
	    }
	    return rawHeaders;
	}
	//# sourceMappingURL=browser.js.map

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_1 = __webpack_require__(235);
	var Response = (function (_super) {
	    __extends(Response, _super);
	    function Response(options) {
	        var _this = _super.call(this, options) || this;
	        _this.body = options.body;
	        _this.status = options.status;
	        _this.statusText = options.statusText;
	        return _this;
	    }
	    Response.prototype.statusType = function () {
	        return ~~(this.status / 100);
	    };
	    Response.prototype.toJSON = function () {
	        return {
	            url: this.url,
	            headers: this.headers,
	            body: this.body,
	            status: this.status,
	            statusText: this.statusText
	        };
	    };
	    return Response;
	}(base_1.Base));
	exports.Response = Response;
	//# sourceMappingURL=response.js.map

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(178);

	var _document = __webpack_require__(219);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    credentials: state.credentials
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {

	  return {

	    setCredentials: function setCredentials(cred) {
	      dispatch(function (dispatch) {
	        localStorage.setItem('credentials', JSON.stringify(cred));
	        dispatch({
	          type: 'SET_CREDENTIALS',
	          cred: cred
	        });
	      });
	    }
	  };
	};

	var LogginComponent = function (_React$Component) {
	  _inherits(LogginComponent, _React$Component);

	  function LogginComponent(props) {
	    _classCallCheck(this, LogginComponent);

	    var _this = _possibleConstructorReturn(this, (LogginComponent.__proto__ || Object.getPrototypeOf(LogginComponent)).call(this, props));

	    var rawCred = localStorage.getItem('credentials');
	    _this.props.setCredentials(JSON.parse(rawCred));
	    return _this;
	  }

	  _createClass(LogginComponent, [{
	    key: 'onClickButton',
	    value: function onClickButton(event) {
	      var cred = {
	        token: this.refs.token.value,
	        name: this.refs.name.value
	      };
	      this.props.setCredentials(cred);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('input', { type: 'text', ref: 'name' })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('input', { type: 'text', ref: 'token' })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'button',
	            { onClick: this.onClickButton.bind(this) },
	            ' Connection '
	          )
	        )
	      );
	    }
	  }]);

	  return LogginComponent;
	}(_react2.default.Component);

	var Loggin = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LogginComponent);

	exports.default = Loggin;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _RaisedButton = __webpack_require__(256);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _RaisedButton2.default;

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(257);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(295);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(349);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(350);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _colorManipulator = __webpack_require__(351);

	var _childUtils = __webpack_require__(352);

	var _EnhancedButton = __webpack_require__(355);

	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

	var _Paper = __webpack_require__(381);

	var _Paper2 = _interopRequireDefault(_Paper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function validateLabel(props, propName, componentName) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
	      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	    }
	  }
	}

	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      button = _context$muiTheme.button,
	      raisedButton = _context$muiTheme.raisedButton;
	  var disabled = props.disabled,
	      disabledBackgroundColor = props.disabledBackgroundColor,
	      disabledLabelColor = props.disabledLabelColor,
	      fullWidth = props.fullWidth,
	      icon = props.icon,
	      label = props.label,
	      labelPosition = props.labelPosition,
	      primary = props.primary,
	      secondary = props.secondary,
	      style = props.style;


	  var amount = primary || secondary ? 0.4 : 0.08;

	  var backgroundColor = raisedButton.color;
	  var labelColor = raisedButton.textColor;

	  if (disabled) {
	    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
	    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
	  } else if (primary) {
	    backgroundColor = raisedButton.primaryColor;
	    labelColor = raisedButton.primaryTextColor;
	  } else if (secondary) {
	    backgroundColor = raisedButton.secondaryColor;
	    labelColor = raisedButton.secondaryTextColor;
	  } else {
	    if (props.backgroundColor) {
	      backgroundColor = props.backgroundColor;
	    }
	    if (props.labelColor) {
	      labelColor = props.labelColor;
	    }
	  }

	  var buttonHeight = style && style.height || button.height;
	  var borderRadius = 2;

	  return {
	    root: {
	      display: 'inline-block',
	      transition: _transitions2.default.easeOut(),
	      minWidth: fullWidth ? '100%' : button.minWidth
	    },
	    button: {
	      height: buttonHeight,
	      lineHeight: buttonHeight + 'px',
	      width: '100%',
	      padding: 0,
	      borderRadius: borderRadius,
	      transition: _transitions2.default.easeOut(),
	      backgroundColor: backgroundColor,
	      // That's the default value for a button but not a link
	      textAlign: 'center'
	    },
	    label: {
	      position: 'relative',
	      opacity: 1,
	      fontSize: raisedButton.fontSize,
	      letterSpacing: 0,
	      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
	      fontWeight: raisedButton.fontWeight,
	      margin: 0,
	      userSelect: 'none',
	      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      color: labelColor
	    },
	    icon: {
	      verticalAlign: 'middle',
	      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	      marginRight: label && labelPosition === 'before' ? 12 : 0
	    },
	    overlay: {
	      height: buttonHeight,
	      borderRadius: borderRadius,
	      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    ripple: {
	      color: labelColor,
	      opacity: !(primary || secondary) ? 0.1 : 0.16
	    }
	  };
	}

	var RaisedButton = function (_Component) {
	  (0, _inherits3.default)(RaisedButton, _Component);

	  function RaisedButton() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, RaisedButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      keyboardFocused: false,
	      touched: false,
	      initialZDepth: 0,
	      zDepth: 0
	    }, _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth + 1
	        });
	      }
	      if (_this.props.onMouseDown) {
	        _this.props.onMouseDown(event);
	      }
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({
	        zDepth: _this.state.initialZDepth
	      });
	      if (_this.props.onMouseUp) {
	        _this.props.onMouseUp(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.state.keyboardFocused) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth,
	          hovered: false
	        });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.state.keyboardFocused && !_this.state.touched) {
	        _this.setState({
	          hovered: true
	        });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth + 1
	      });

	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth
	      });

	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;

	      _this.setState({
	        zDepth: zDepth,
	        keyboardFocused: keyboardFocused
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(RaisedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var zDepth = this.props.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var zDepth = nextProps.disabled ? 0 : 1;
	      var nextState = {
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      };

	      if (nextProps.disabled) {
	        nextState.hovered = false;
	      }

	      this.setState(nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          backgroundColor = _props.backgroundColor,
	          buttonStyle = _props.buttonStyle,
	          children = _props.children,
	          className = _props.className,
	          disabled = _props.disabled,
	          disabledBackgroundColor = _props.disabledBackgroundColor,
	          disabledLabelColor = _props.disabledLabelColor,
	          fullWidth = _props.fullWidth,
	          icon = _props.icon,
	          label = _props.label,
	          labelColor = _props.labelColor,
	          labelPosition = _props.labelPosition,
	          labelStyle = _props.labelStyle,
	          overlayStyle = _props.overlayStyle,
	          primary = _props.primary,
	          rippleStyle = _props.rippleStyle,
	          secondary = _props.secondary,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);
	      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);

	      var buttonEventHandlers = disabled ? {} : {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };

	      var labelElement = label && _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
	        label
	      );

	      var iconCloned = icon && (0, _react.cloneElement)(icon, {
	        color: icon.props.color || styles.label.color,
	        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
	      });

	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };

	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);

	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          className: className,
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: this.state.zDepth
	        },
	        _react2.default.createElement(
	          _EnhancedButton2.default,
	          (0, _extends3.default)({}, other, buttonEventHandlers, {
	            ref: 'container',
	            disabled: disabled,
	            style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
	            focusRippleColor: mergedRippleStyles.color,
	            touchRippleColor: mergedRippleStyles.color,
	            focusRippleOpacity: mergedRippleStyles.opacity,
	            touchRippleOpacity: mergedRippleStyles.opacity
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'overlay',
	              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle))
	            },
	            enhancedButtonChildren
	          )
	        )
	      );
	    }
	  }]);
	  return RaisedButton;
	}(_react.Component);

	RaisedButton.muiName = 'RaisedButton';
	RaisedButton.defaultProps = {
	  disabled: false,
	  labelPosition: 'after',
	  fullWidth: false,
	  primary: false,
	  secondary: false
	};
	RaisedButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? RaisedButton.propTypes = {
	  /**
	   * Override the default background color for the button,
	   * but not the default disabled background color
	   * (use `disabledBackgroundColor` for this).
	   */
	  backgroundColor: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the button element.
	   */
	  buttonStyle: _react.PropTypes.object,
	  /**
	   * The content of the button.
	   * If a label is provided via the `label` prop, the text within the label
	   * will be displayed in addition to the content provided here.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * If true, the button will be disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Override the default background color for the button
	   * when it is disabled.
	   */
	  disabledBackgroundColor: _react.PropTypes.string,
	  /**
	   * The color of the button's label when the button is disabled.
	   */
	  disabledLabelColor: _react.PropTypes.string,
	  /**
	   * If true, the button will take up the full width of its container.
	   */
	  fullWidth: _react.PropTypes.bool,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * An icon to be displayed within the button.
	   */
	  icon: _react.PropTypes.node,
	  /**
	   * The label to be displayed within the button.
	   * If content is provided via the `children` prop, that content will be
	   * displayed in addition to the label provided here.
	   */
	  label: validateLabel,
	  /**
	   * The color of the button's label.
	   */
	  labelColor: _react.PropTypes.string,
	  /**
	   * The position of the button's label relative to the button's `children`.
	   */
	  labelPosition: _react.PropTypes.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _react.PropTypes.object,
	  /** @ignore */
	  onMouseDown: _react.PropTypes.func,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /** @ignore */
	  onMouseUp: _react.PropTypes.func,
	  /** @ignore */
	  onTouchEnd: _react.PropTypes.func,
	  /** @ignore */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * Override the inline style of the button overlay.
	   */
	  overlayStyle: _react.PropTypes.object,
	  /**
	   * If true, the button will use the theme's primary color.
	   */
	  primary: _react.PropTypes.bool,
	  /**
	   * Override the inline style of the ripple element.
	   */
	  rippleStyle: _react.PropTypes.object,
	  /**
	   * If true, the button will use the theme's secondary color.
	   * If both `secondary` and `primary` are true, the button will use
	   * the theme's primary color.
	   */
	  secondary: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = RaisedButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(258);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(259), __esModule: true };

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(260);
	module.exports = __webpack_require__(263).Object.assign;

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(261);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(276)});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(262)
	  , core      = __webpack_require__(263)
	  , ctx       = __webpack_require__(264)
	  , hide      = __webpack_require__(266)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 262 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 263 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(265);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 265 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(267)
	  , createDesc = __webpack_require__(275);
	module.exports = __webpack_require__(271) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(268)
	  , IE8_DOM_DEFINE = __webpack_require__(270)
	  , toPrimitive    = __webpack_require__(274)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(271) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(269);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 269 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(271) && !__webpack_require__(272)(function(){
	  return Object.defineProperty(__webpack_require__(273)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(272)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(269)
	  , document = __webpack_require__(262).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(269);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 275 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(277)
	  , gOPS     = __webpack_require__(292)
	  , pIE      = __webpack_require__(293)
	  , toObject = __webpack_require__(294)
	  , IObject  = __webpack_require__(281)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(272)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(278)
	  , enumBugKeys = __webpack_require__(291);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(279)
	  , toIObject    = __webpack_require__(280)
	  , arrayIndexOf = __webpack_require__(284)(false)
	  , IE_PROTO     = __webpack_require__(288)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 279 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(281)
	  , defined = __webpack_require__(283);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(282);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 282 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 283 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(280)
	  , toLength  = __webpack_require__(285)
	  , toIndex   = __webpack_require__(287);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(286)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 286 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(286)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(289)('keys')
	  , uid    = __webpack_require__(290);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(262)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 290 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 291 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 292 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 293 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(283);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 295 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(297), __esModule: true };

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(298);
	module.exports = __webpack_require__(263).Object.getPrototypeOf;

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(294)
	  , $getPrototypeOf = __webpack_require__(299);

	__webpack_require__(300)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(279)
	  , toObject    = __webpack_require__(294)
	  , IE_PROTO    = __webpack_require__(288)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(261)
	  , core    = __webpack_require__(263)
	  , fails   = __webpack_require__(272);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 301 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(303);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(304), __esModule: true };

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(305);
	var $Object = __webpack_require__(263).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(261);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(271), 'Object', {defineProperty: __webpack_require__(267).f});

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(307);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(308);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(327);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(309), __esModule: true };

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(310);
	__webpack_require__(322);
	module.exports = __webpack_require__(326).f('iterator');

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(311)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(312)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(286)
	  , defined   = __webpack_require__(283);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(313)
	  , $export        = __webpack_require__(261)
	  , redefine       = __webpack_require__(314)
	  , hide           = __webpack_require__(266)
	  , has            = __webpack_require__(279)
	  , Iterators      = __webpack_require__(315)
	  , $iterCreate    = __webpack_require__(316)
	  , setToStringTag = __webpack_require__(320)
	  , getPrototypeOf = __webpack_require__(299)
	  , ITERATOR       = __webpack_require__(321)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 313 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(266);

/***/ },
/* 315 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(317)
	  , descriptor     = __webpack_require__(275)
	  , setToStringTag = __webpack_require__(320)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(266)(IteratorPrototype, __webpack_require__(321)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(268)
	  , dPs         = __webpack_require__(318)
	  , enumBugKeys = __webpack_require__(291)
	  , IE_PROTO    = __webpack_require__(288)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(273)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(319).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(267)
	  , anObject = __webpack_require__(268)
	  , getKeys  = __webpack_require__(277);

	module.exports = __webpack_require__(271) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(262).document && document.documentElement;

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(267).f
	  , has = __webpack_require__(279)
	  , TAG = __webpack_require__(321)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(289)('wks')
	  , uid        = __webpack_require__(290)
	  , Symbol     = __webpack_require__(262).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(323);
	var global        = __webpack_require__(262)
	  , hide          = __webpack_require__(266)
	  , Iterators     = __webpack_require__(315)
	  , TO_STRING_TAG = __webpack_require__(321)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(324)
	  , step             = __webpack_require__(325)
	  , Iterators        = __webpack_require__(315)
	  , toIObject        = __webpack_require__(280);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(312)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 324 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 325 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(321);

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(328), __esModule: true };

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(329);
	__webpack_require__(338);
	__webpack_require__(339);
	__webpack_require__(340);
	module.exports = __webpack_require__(263).Symbol;

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(262)
	  , has            = __webpack_require__(279)
	  , DESCRIPTORS    = __webpack_require__(271)
	  , $export        = __webpack_require__(261)
	  , redefine       = __webpack_require__(314)
	  , META           = __webpack_require__(330).KEY
	  , $fails         = __webpack_require__(272)
	  , shared         = __webpack_require__(289)
	  , setToStringTag = __webpack_require__(320)
	  , uid            = __webpack_require__(290)
	  , wks            = __webpack_require__(321)
	  , wksExt         = __webpack_require__(326)
	  , wksDefine      = __webpack_require__(331)
	  , keyOf          = __webpack_require__(332)
	  , enumKeys       = __webpack_require__(333)
	  , isArray        = __webpack_require__(334)
	  , anObject       = __webpack_require__(268)
	  , toIObject      = __webpack_require__(280)
	  , toPrimitive    = __webpack_require__(274)
	  , createDesc     = __webpack_require__(275)
	  , _create        = __webpack_require__(317)
	  , gOPNExt        = __webpack_require__(335)
	  , $GOPD          = __webpack_require__(337)
	  , $DP            = __webpack_require__(267)
	  , $keys          = __webpack_require__(277)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(336).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(293).f  = $propertyIsEnumerable;
	  __webpack_require__(292).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(313)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(266)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(290)('meta')
	  , isObject = __webpack_require__(269)
	  , has      = __webpack_require__(279)
	  , setDesc  = __webpack_require__(267).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(272)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(262)
	  , core           = __webpack_require__(263)
	  , LIBRARY        = __webpack_require__(313)
	  , wksExt         = __webpack_require__(326)
	  , defineProperty = __webpack_require__(267).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(277)
	  , toIObject = __webpack_require__(280);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(277)
	  , gOPS    = __webpack_require__(292)
	  , pIE     = __webpack_require__(293);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(282);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(280)
	  , gOPN      = __webpack_require__(336).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(278)
	  , hiddenKeys = __webpack_require__(291).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(293)
	  , createDesc     = __webpack_require__(275)
	  , toIObject      = __webpack_require__(280)
	  , toPrimitive    = __webpack_require__(274)
	  , has            = __webpack_require__(279)
	  , IE8_DOM_DEFINE = __webpack_require__(270)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(271) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 338 */
/***/ function(module, exports) {

	

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(331)('asyncIterator');

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(331)('observable');

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(342);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(346);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(307);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(343), __esModule: true };

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(344);
	module.exports = __webpack_require__(263).Object.setPrototypeOf;

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(261);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(345).set});

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(269)
	  , anObject = __webpack_require__(268);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(264)(Function.call, __webpack_require__(337).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(347), __esModule: true };

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(348);
	var $Object = __webpack_require__(263).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(261)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(317)});

/***/ },
/* 349 */
/***/ function(module, exports) {

	module.exports = function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	  return target;
	};


/***/ },
/* 350 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	    easeFunction = easeFunction || this.easeOutFunction;

	    if (property && Object.prototype.toString.call(property) === '[object Array]') {
	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }

	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';

	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};

/***/ },
/* 351 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.convertColorToString = convertColorToString;
	exports.convertHexToRGB = convertHexToRGB;
	exports.decomposeColor = decomposeColor;
	exports.getContrastRatio = getContrastRatio;
	exports.getLuminance = getLuminance;
	exports.emphasize = emphasize;
	exports.fade = fade;
	exports.darken = darken;
	exports.lighten = lighten;
	/**
	 * Returns a number whose value is limited to the given range.
	 *
	 * @param {number} value The value to be clamped
	 * @param {number} min The lower boundary of the output range
	 * @param {number} max The upper boundary of the output range
	 * @returns {number} A number in the range [min, max]
	 */
	function clamp(value, min, max) {
	  if (value < min) {
	    return min;
	  }
	  if (value > max) {
	    return max;
	  }
	  return value;
	}

	/**
	 * Converts a color object with type and values to a string.
	 *
	 * @param {object} color - Decomposed color
	 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
	 * @param {array} color.values - [n,n,n] or [n,n,n,n]
	 * @returns {string} A CSS color string
	 */
	function convertColorToString(color) {
	  var type = color.type,
	      values = color.values;


	  if (type.indexOf('rgb') > -1) {
	    // Only convert the first 3 values to int (i.e. not alpha)
	    for (var i = 0; i < 3; i++) {
	      values[i] = parseInt(values[i]);
	    }
	  }

	  var colorString = void 0;

	  if (type.indexOf('hsl') > -1) {
	    colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
	  } else {
	    colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
	  }

	  if (values.length === 4) {
	    colorString += ', ' + color.values[3] + ')';
	  } else {
	    colorString += ')';
	  }

	  return colorString;
	}

	/**
	 * Converts a color from CSS hex format to CSS rgb format.
	 *
	 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
	 *  @returns {string} A CSS rgb color string
	 */
	function convertHexToRGB(color) {
	  if (color.length === 4) {
	    var extendedColor = '#';
	    for (var i = 1; i < color.length; i++) {
	      extendedColor += color.charAt(i) + color.charAt(i);
	    }
	    color = extendedColor;
	  }

	  var values = {
	    r: parseInt(color.substr(1, 2), 16),
	    g: parseInt(color.substr(3, 2), 16),
	    b: parseInt(color.substr(5, 2), 16)
	  };

	  return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
	}

	/**
	 * Returns an object with the type and values of a color.
	 *
	 * Note: Does not support rgb % values.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {{type: string, values: number[]}} A MUI color object
	 */
	function decomposeColor(color) {
	  if (color.charAt(0) === '#') {
	    return decomposeColor(convertHexToRGB(color));
	  }

	  var marker = color.indexOf('(');
	  var type = color.substring(0, marker);
	  var values = color.substring(marker + 1, color.length - 1).split(',');
	  values = values.map(function (value) {
	    return parseFloat(value);
	  });

	  return { type: type, values: values };
	}

	/**
	 * Calculates the contrast ratio between two colors.
	 *
	 * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
	 *
	 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
	 */
	function getContrastRatio(foreground, background) {
	  var lumA = getLuminance(foreground);
	  var lumB = getLuminance(background);
	  var contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);

	  return Number(contrastRatio.toFixed(2)); // Truncate at two digits
	}

	/**
	 * The relative brightness of any point in a color space,
	 * normalized to 0 for darkest black and 1 for lightest white.
	 *
	 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} The relative brightness of the color in the range 0 - 1
	 */
	function getLuminance(color) {
	  color = decomposeColor(color);

	  if (color.type.indexOf('rgb') > -1) {
	    var rgb = color.values.map(function (val) {
	      val /= 255; // normalized
	      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	    });
	    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)); // Truncate at 3 digits
	  } else if (color.type.indexOf('hsl') > -1) {
	    return color.values[2] / 100;
	  }
	}

	/**
	 * Darken or lighten a colour, depending on its luminance.
	 * Light colors are darkened, dark colors are lightened.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function emphasize(color) {
	  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;

	  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
	}

	/**
	 * Set the absolute transparency of a color.
	 * Any existing alpha values are overwritten.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} value - value to set the alpha channel to in the range 0 -1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function fade(color, value) {
	  color = decomposeColor(color);
	  value = clamp(value, 0, 1);

	  if (color.type === 'rgb' || color.type === 'hsl') {
	    color.type += 'a';
	  }
	  color.values[3] = value;

	  return convertColorToString(color);
	}

	/**
	 * Darkens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function darken(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient, 0, 1);

	  if (color.type.indexOf('hsl') > -1) {
	    color.values[2] *= 1 - coefficient;
	  } else if (color.type.indexOf('rgb') > -1) {
	    for (var i = 0; i < 3; i++) {
	      color.values[i] *= 1 - coefficient;
	    }
	  }
	  return convertColorToString(color);
	}

	/**
	 * Lightens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function lighten(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient, 0, 1);

	  if (color.type.indexOf('hsl') > -1) {
	    color.values[2] += (100 - color.values[2]) * coefficient;
	  } else if (color.type.indexOf('rgb') > -1) {
	    for (var i = 0; i < 3; i++) {
	      color.values[i] += (255 - color.values[i]) * coefficient;
	    }
	  }

	  return convertColorToString(color);
	}

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createChildFragment = createChildFragment;
	exports.extendChildren = extendChildren;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCreateFragment = __webpack_require__(353);

	var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createChildFragment(fragments) {
	  var newFragments = {};
	  var validChildrenCount = 0;
	  var firstKey = void 0;

	  // Only create non-empty key fragments
	  for (var key in fragments) {
	    var currentChild = fragments[key];

	    if (currentChild) {
	      if (validChildrenCount === 0) firstKey = key;
	      newFragments[key] = currentChild;
	      validChildrenCount++;
	    }
	  }

	  if (validChildrenCount === 0) return undefined;
	  if (validChildrenCount === 1) return newFragments[firstKey];
	  return (0, _reactAddonsCreateFragment2.default)(newFragments);
	}

	function extendChildren(children, extendedProps, extendedChildren) {
	  return _react2.default.Children.map(children, function (child) {
	    if (!_react2.default.isValidElement(child)) {
	      return child;
	    }

	    var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;

	    var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;

	    return _react2.default.cloneElement(child, newProps, newChildren);
	  });
	}

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(354).create;

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactChildren = __webpack_require__(5);
	var ReactElement = __webpack_require__(9);

	var emptyFunction = __webpack_require__(12);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);

	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set or fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is an array.
	 */

	var numericPropertyRegex = /^\d+$/;

	var warnedAboutNumeric = false;

	var ReactFragment = {
	  /**
	   * Wrap a keyed object in an opaque proxy that warns you if you access any
	   * of its properties.
	   * See https://facebook.github.io/react/docs/create-fragment.html
	   */
	  create: function (object) {
	    if (typeof object !== 'object' || !object || Array.isArray(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : void 0;
	      return object;
	    }
	    if (ReactElement.isValidElement(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : void 0;
	      return object;
	    }

	    !(object.nodeType !== 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.') : _prodInvariant('0') : void 0;

	    var result = [];

	    for (var key in object) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : void 0;
	          warnedAboutNumeric = true;
	        }
	      }
	      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
	    }

	    return result;
	  }
	};

	module.exports = ReactFragment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(257);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(295);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(349);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _childUtils = __webpack_require__(352);

	var _events = __webpack_require__(356);

	var _events2 = _interopRequireDefault(_events);

	var _keycode = __webpack_require__(357);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _FocusRipple = __webpack_require__(358);

	var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

	var _TouchRipple = __webpack_require__(367);

	var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styleInjected = false;
	var listening = false;
	var tabPressed = false;

	function injectStyle() {
	  if (!styleInjected) {
	    // Remove inner padding and border in Firefox 4+.
	    var style = document.createElement('style');
	    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';

	    document.body.appendChild(style);
	    styleInjected = true;
	  }
	}

	function listenForTabPresses() {
	  if (!listening) {
	    _events2.default.on(window, 'keydown', function (event) {
	      tabPressed = (0, _keycode2.default)(event) === 'tab';
	    });
	    listening = true;
	  }
	}

	var EnhancedButton = function (_Component) {
	  (0, _inherits3.default)(EnhancedButton, _Component);

	  function EnhancedButton() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, EnhancedButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedButton.__proto__ || (0, _getPrototypeOf2.default)(EnhancedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isKeyboardFocused: false
	    }, _this.handleKeyDown = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'enter' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	        if ((0, _keycode2.default)(event) === 'esc' && _this.state.isKeyboardFocused) {
	          _this.removeKeyboardFocus(event);
	        }
	      }
	      _this.props.onKeyDown(event);
	    }, _this.handleKeyUp = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'space' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	      }
	      _this.props.onKeyUp(event);
	    }, _this.handleBlur = function (event) {
	      _this.cancelFocusTimeout();
	      _this.removeKeyboardFocus(event);
	      _this.props.onBlur(event);
	    }, _this.handleFocus = function (event) {
	      if (event) event.persist();
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        // setTimeout is needed because the focus event fires first
	        // Wait so that we can capture if this was a keyboard focus
	        // or touch focus
	        _this.focusTimeout = setTimeout(function () {
	          if (tabPressed) {
	            _this.setKeyboardFocus(event);
	            tabPressed = false;
	          }
	        }, 150);

	        _this.props.onFocus(event);
	      }
	    }, _this.handleClick = function (event) {
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.props.onClick(event);
	      }
	    }, _this.handleTouchTap = function (event) {
	      _this.cancelFocusTimeout();
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.removeKeyboardFocus(event);
	        _this.props.onTouchTap(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(EnhancedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          disabled = _props.disabled,
	          disableKeyboardFocus = _props.disableKeyboardFocus,
	          keyboardFocused = _props.keyboardFocused;

	      if (!disabled && keyboardFocused && !disableKeyboardFocus) {
	        this.setState({ isKeyboardFocused: true });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      injectStyle();
	      listenForTabPresses();
	      if (this.state.isKeyboardFocused) {
	        this.refs.enhancedButton.focus();
	        this.props.onKeyboardFocus(null, true);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        if (nextProps.onKeyboardFocus) {
	          nextProps.onKeyboardFocus(null, false);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.focusTimeout);
	    }
	  }, {
	    key: 'isKeyboardFocused',
	    value: function isKeyboardFocused() {
	      return this.state.isKeyboardFocused;
	    }
	  }, {
	    key: 'removeKeyboardFocus',
	    value: function removeKeyboardFocus(event) {
	      if (this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        this.props.onKeyboardFocus(event, false);
	      }
	    }
	  }, {
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus(event) {
	      if (!this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: true });
	        this.props.onKeyboardFocus(event, true);
	      }
	    }
	  }, {
	    key: 'cancelFocusTimeout',
	    value: function cancelFocusTimeout() {
	      if (this.focusTimeout) {
	        clearTimeout(this.focusTimeout);
	        this.focusTimeout = null;
	      }
	    }
	  }, {
	    key: 'createButtonChildren',
	    value: function createButtonChildren() {
	      var _props2 = this.props,
	          centerRipple = _props2.centerRipple,
	          children = _props2.children,
	          disabled = _props2.disabled,
	          disableFocusRipple = _props2.disableFocusRipple,
	          disableKeyboardFocus = _props2.disableKeyboardFocus,
	          disableTouchRipple = _props2.disableTouchRipple,
	          focusRippleColor = _props2.focusRippleColor,
	          focusRippleOpacity = _props2.focusRippleOpacity,
	          touchRippleColor = _props2.touchRippleColor,
	          touchRippleOpacity = _props2.touchRippleOpacity;
	      var isKeyboardFocused = this.state.isKeyboardFocused;

	      // Focus Ripple

	      var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_FocusRipple2.default, {
	        color: focusRippleColor,
	        opacity: focusRippleOpacity,
	        show: isKeyboardFocused
	      }) : undefined;

	      // Touch Ripple
	      var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
	        _TouchRipple2.default,
	        {
	          centerRipple: centerRipple,
	          color: touchRippleColor,
	          opacity: touchRippleOpacity
	        },
	        children
	      ) : undefined;

	      return (0, _childUtils.createChildFragment)({
	        focusRipple: focusRipple,
	        touchRipple: touchRipple,
	        children: touchRipple ? undefined : children
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          centerRipple = _props3.centerRipple,
	          children = _props3.children,
	          containerElement = _props3.containerElement,
	          disabled = _props3.disabled,
	          disableFocusRipple = _props3.disableFocusRipple,
	          disableKeyboardFocus = _props3.disableKeyboardFocus,
	          disableTouchRipple = _props3.disableTouchRipple,
	          focusRippleColor = _props3.focusRippleColor,
	          focusRippleOpacity = _props3.focusRippleOpacity,
	          href = _props3.href,
	          keyboardFocused = _props3.keyboardFocused,
	          touchRippleColor = _props3.touchRippleColor,
	          touchRippleOpacity = _props3.touchRippleOpacity,
	          onBlur = _props3.onBlur,
	          onClick = _props3.onClick,
	          onFocus = _props3.onFocus,
	          onKeyUp = _props3.onKeyUp,
	          onKeyDown = _props3.onKeyDown,
	          onKeyboardFocus = _props3.onKeyboardFocus,
	          onTouchTap = _props3.onTouchTap,
	          style = _props3.style,
	          tabIndex = _props3.tabIndex,
	          type = _props3.type,
	          other = (0, _objectWithoutProperties3.default)(_props3, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'href', 'keyboardFocused', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onClick', 'onFocus', 'onKeyUp', 'onKeyDown', 'onKeyboardFocus', 'onTouchTap', 'style', 'tabIndex', 'type']);
	      var _context$muiTheme = this.context.muiTheme,
	          prepareStyles = _context$muiTheme.prepareStyles,
	          enhancedButton = _context$muiTheme.enhancedButton;


	      var mergedStyles = (0, _simpleAssign2.default)({
	        border: 10,
	        boxSizing: 'border-box',
	        display: 'inline-block',
	        fontFamily: this.context.muiTheme.baseTheme.fontFamily,
	        WebkitTapHighlightColor: enhancedButton.tapHighlightColor, // Remove mobile color flashing (deprecated)
	        cursor: disabled ? 'default' : 'pointer',
	        textDecoration: 'none',
	        margin: 0,
	        padding: 0,
	        outline: 'none',
	        fontSize: 'inherit',
	        fontWeight: 'inherit',
	        position: 'relative', // This is needed so that ripples do not bleed past border radius.
	        verticalAlign: href ? 'middle' : null
	      }, style);

	      // Passing both background:none & backgroundColor can break due to object iteration order
	      if (!mergedStyles.backgroundColor && !mergedStyles.background) {
	        mergedStyles.background = 'none';
	      }

	      if (disabled && href) {
	        return _react2.default.createElement(
	          'span',
	          (0, _extends3.default)({}, other, {
	            style: mergedStyles
	          }),
	          children
	        );
	      }

	      var buttonProps = (0, _extends3.default)({}, other, {
	        style: prepareStyles(mergedStyles),
	        ref: 'enhancedButton',
	        disabled: disabled,
	        href: href,
	        onBlur: this.handleBlur,
	        onClick: this.handleClick,
	        onFocus: this.handleFocus,
	        onKeyUp: this.handleKeyUp,
	        onKeyDown: this.handleKeyDown,
	        onTouchTap: this.handleTouchTap,
	        tabIndex: disabled || disableKeyboardFocus ? -1 : tabIndex
	      });

	      var buttonChildren = this.createButtonChildren();

	      if (_react2.default.isValidElement(containerElement)) {
	        return _react2.default.cloneElement(containerElement, buttonProps, buttonChildren);
	      }

	      if (!href && containerElement === 'button') {
	        buttonProps.type = type;
	      }

	      return _react2.default.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
	    }
	  }]);
	  return EnhancedButton;
	}(_react.Component);

	EnhancedButton.defaultProps = {
	  containerElement: 'button',
	  onBlur: function onBlur() {},
	  onClick: function onClick() {},
	  onFocus: function onFocus() {},
	  onKeyDown: function onKeyDown() {},
	  onKeyUp: function onKeyUp() {},
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onTouchTap: function onTouchTap() {},
	  tabIndex: 0,
	  type: 'button'
	};
	EnhancedButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? EnhancedButton.propTypes = {
	  centerRipple: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  containerElement: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	  disableFocusRipple: _react.PropTypes.bool,
	  disableKeyboardFocus: _react.PropTypes.bool,
	  disableTouchRipple: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  focusRippleColor: _react.PropTypes.string,
	  focusRippleOpacity: _react.PropTypes.number,
	  href: _react.PropTypes.string,
	  keyboardFocused: _react.PropTypes.bool,
	  onBlur: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onKeyDown: _react.PropTypes.func,
	  onKeyUp: _react.PropTypes.func,
	  onKeyboardFocus: _react.PropTypes.func,
	  onTouchTap: _react.PropTypes.func,
	  style: _react.PropTypes.object,
	  tabIndex: _react.PropTypes.number,
	  touchRippleColor: _react.PropTypes.string,
	  touchRippleOpacity: _react.PropTypes.number,
	  type: _react.PropTypes.string
	} : void 0;
	exports.default = EnhancedButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 356 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  once: function once(el, type, callback) {
	    var typeArray = type ? type.split(' ') : [];
	    var recursiveFunction = function recursiveFunction(event) {
	      event.target.removeEventListener(event.type, recursiveFunction);
	      return callback(event);
	    };

	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(el, typeArray[i], recursiveFunction);
	    }
	  },
	  on: function on(el, type, callback) {
	    if (el.addEventListener) {
	      el.addEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.attachEvent('on' + type, function () {
	        callback.call(el);
	      });
	    }
	  },
	  off: function off(el, type, callback) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.detachEvent('on' + type, callback);
	    }
	  },
	  isKeyboard: function isKeyboard(event) {
	    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
	  }
	};

/***/ },
/* 357 */
/***/ function(module, exports) {

	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */

	exports = module.exports = function(searchInput) {
	  // Keyboard Events
	  if (searchInput && 'object' === typeof searchInput) {
	    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
	    if (hasKeyCode) searchInput = hasKeyCode
	  }

	  // Numbers
	  if ('number' === typeof searchInput) return names[searchInput]

	  // Everything else (cast to string)
	  var search = String(searchInput)

	  // check codes
	  var foundNamedKey = codes[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey

	  // check aliases
	  var foundNamedKey = aliases[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey

	  // weird character?
	  if (search.length === 1) return search.charCodeAt(0)

	  return undefined
	}

	/**
	 * Get by name
	 *
	 *   exports.code['enter'] // => 13
	 */

	var codes = exports.code = exports.codes = {
	  'backspace': 8,
	  'tab': 9,
	  'enter': 13,
	  'shift': 16,
	  'ctrl': 17,
	  'alt': 18,
	  'pause/break': 19,
	  'caps lock': 20,
	  'esc': 27,
	  'space': 32,
	  'page up': 33,
	  'page down': 34,
	  'end': 35,
	  'home': 36,
	  'left': 37,
	  'up': 38,
	  'right': 39,
	  'down': 40,
	  'insert': 45,
	  'delete': 46,
	  'command': 91,
	  'left command': 91,
	  'right command': 93,
	  'numpad *': 106,
	  'numpad +': 107,
	  'numpad -': 109,
	  'numpad .': 110,
	  'numpad /': 111,
	  'num lock': 144,
	  'scroll lock': 145,
	  'my computer': 182,
	  'my calculator': 183,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  "'": 222
	}

	// Helper aliases

	var aliases = exports.aliases = {
	  'windows': 91,
	  '⇧': 16,
	  '⌥': 18,
	  '⌃': 17,
	  '⌘': 91,
	  'ctl': 17,
	  'control': 17,
	  'option': 18,
	  'pause': 19,
	  'break': 19,
	  'caps': 20,
	  'return': 13,
	  'escape': 27,
	  'spc': 32,
	  'pgup': 33,
	  'pgdn': 34,
	  'ins': 45,
	  'del': 46,
	  'cmd': 91
	}


	/*!
	 * Programatically add the following
	 */

	// lower case chars
	for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

	// numbers
	for (var i = 48; i < 58; i++) codes[i - 48] = i

	// function keys
	for (i = 1; i < 13; i++) codes['f'+i] = i + 111

	// numpad keys
	for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

	/**
	 * Get by code
	 *
	 *   exports.name[13] // => 'Enter'
	 */

	var names = exports.names = exports.title = {} // title for backward compat

	// Create reverse mapping
	for (i in codes) names[codes[i]] = i

	// Add aliases
	for (var alias in aliases) {
	  codes[alias] = aliases[alias]
	}


/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(349);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _shallowEqual = __webpack_require__(359);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _autoPrefix = __webpack_require__(360);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(350);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _ScaleIn = __webpack_require__(361);

	var _ScaleIn2 = _interopRequireDefault(_ScaleIn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pulsateDuration = 750;

	var FocusRipple = function (_Component) {
	  (0, _inherits3.default)(FocusRipple, _Component);

	  function FocusRipple() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, FocusRipple);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FocusRipple.__proto__ || (0, _getPrototypeOf2.default)(FocusRipple)).call.apply(_ref, [this].concat(args))), _this), _this.pulsate = function () {
	      var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
	      if (!innerCircle) return;

	      var startScale = 'scale(1)';
	      var endScale = 'scale(0.85)';
	      var currentScale = innerCircle.style.transform || startScale;
	      var nextScale = currentScale === startScale ? endScale : startScale;

	      _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
	      _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(FocusRipple, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      } else {
	        if (this.timeout) clearTimeout(this.timeout);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'getRippleElement',
	    value: function getRippleElement(props) {
	      var color = props.color,
	          innerStyle = props.innerStyle,
	          opacity = props.opacity;
	      var _context$muiTheme = this.context.muiTheme,
	          prepareStyles = _context$muiTheme.prepareStyles,
	          ripple = _context$muiTheme.ripple;


	      var innerStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        opacity: opacity ? opacity : 0.16,
	        backgroundColor: color || ripple.color,
	        transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
	      }, innerStyle);

	      return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _simpleAssign2.default)({}, innerStyles)) });
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	      var height = el.offsetHeight;
	      var width = el.offsetWidth;
	      var size = Math.max(height, width);

	      var oldTop = 0;
	      // For browsers that don't support endsWith()
	      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	        oldTop = parseInt(el.style.top);
	      }
	      el.style.height = size + 'px';
	      el.style.top = height / 2 - size / 2 + oldTop + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          show = _props.show,
	          style = _props.style;


	      var mergedRootStyles = (0, _simpleAssign2.default)({
	        height: '100%',
	        width: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0
	      }, style);

	      var ripple = show ? this.getRippleElement(this.props) : null;

	      return _react2.default.createElement(
	        _ScaleIn2.default,
	        {
	          maxScale: 0.85,
	          style: mergedRootStyles
	        },
	        ripple
	      );
	    }
	  }]);
	  return FocusRipple;
	}(_react.Component);

	FocusRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? FocusRipple.propTypes = {
	  color: _react.PropTypes.string,
	  innerStyle: _react.PropTypes.object,
	  opacity: _react.PropTypes.number,
	  show: _react.PropTypes.bool,
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = FocusRipple;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _shallowEqual = __webpack_require__(123);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _shallowEqual2.default;

/***/ },
/* 360 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  set: function set(style, key, value) {
	    style[key] = value;
	  }
	};

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(257);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(295);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(349);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsTransitionGroup = __webpack_require__(362);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	var _ScaleInChild = __webpack_require__(366);

	var _ScaleInChild2 = _interopRequireDefault(_ScaleInChild);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ScaleIn = function (_Component) {
	  (0, _inherits3.default)(ScaleIn, _Component);

	  function ScaleIn() {
	    (0, _classCallCheck3.default)(this, ScaleIn);
	    return (0, _possibleConstructorReturn3.default)(this, (ScaleIn.__proto__ || (0, _getPrototypeOf2.default)(ScaleIn)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ScaleIn, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          childStyle = _props.childStyle,
	          enterDelay = _props.enterDelay,
	          maxScale = _props.maxScale,
	          minScale = _props.minScale,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;


	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'relative',
	        overflow: 'hidden',
	        height: '100%'
	      }, style);

	      var newChildren = _react2.default.Children.map(children, function (child) {
	        return _react2.default.createElement(
	          _ScaleInChild2.default,
	          {
	            key: child.key,
	            enterDelay: enterDelay,
	            maxScale: maxScale,
	            minScale: minScale,
	            style: childStyle
	          },
	          child
	        );
	      });

	      return _react2.default.createElement(
	        _reactAddonsTransitionGroup2.default,
	        (0, _extends3.default)({}, other, {
	          style: prepareStyles(mergedRootStyles),
	          component: 'div'
	        }),
	        newChildren
	      );
	    }
	  }]);
	  return ScaleIn;
	}(_react.Component);

	ScaleIn.defaultProps = {
	  enterDelay: 0
	};
	ScaleIn.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? ScaleIn.propTypes = {
	  childStyle: _react.PropTypes.object,
	  children: _react.PropTypes.node,
	  enterDelay: _react.PropTypes.number,
	  maxScale: _react.PropTypes.number,
	  minScale: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = ScaleIn;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(363);

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactTransitionChildMapping = __webpack_require__(364);

	var emptyFunction = __webpack_require__(12);

	/**
	 * A basis for animations. When children are declaratively added or removed,
	 * special lifecycle hooks are called.
	 * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
	 */

	var ReactTransitionGroup = function (_React$Component) {
	  _inherits(ReactTransitionGroup, _React$Component);

	  function ReactTransitionGroup() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, ReactTransitionGroup);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      // TODO: can we get useful debug information to show at this point?
	      children: ReactTransitionChildMapping.getChildMapping(_this.props.children)
	    }, _this.performAppear = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;

	      var component = _this.refs[key];

	      if (component.componentWillAppear) {
	        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key));
	      } else {
	        _this._handleDoneAppearing(key);
	      }
	    }, _this._handleDoneAppearing = function (key) {
	      var component = _this.refs[key];
	      if (component.componentDidAppear) {
	        component.componentDidAppear();
	      }

	      delete _this.currentlyTransitioningKeys[key];

	      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully appeared. Remove it.
	        _this.performLeave(key);
	      }
	    }, _this.performEnter = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;

	      var component = _this.refs[key];

	      if (component.componentWillEnter) {
	        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key));
	      } else {
	        _this._handleDoneEntering(key);
	      }
	    }, _this._handleDoneEntering = function (key) {
	      var component = _this.refs[key];
	      if (component.componentDidEnter) {
	        component.componentDidEnter();
	      }

	      delete _this.currentlyTransitioningKeys[key];

	      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully entered. Remove it.
	        _this.performLeave(key);
	      }
	    }, _this.performLeave = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;

	      var component = _this.refs[key];
	      if (component.componentWillLeave) {
	        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key));
	      } else {
	        // Note that this is somewhat dangerous b/c it calls setState()
	        // again, effectively mutating the component before all the work
	        // is done.
	        _this._handleDoneLeaving(key);
	      }
	    }, _this._handleDoneLeaving = function (key) {
	      var component = _this.refs[key];

	      if (component.componentDidLeave) {
	        component.componentDidLeave();
	      }

	      delete _this.currentlyTransitioningKeys[key];

	      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);

	      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	        // This entered again before it fully left. Add it again.
	        _this.performEnter(key);
	      } else {
	        _this.setState(function (state) {
	          var newChildren = _assign({}, state.children);
	          delete newChildren[key];
	          return { children: newChildren };
	        });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  ReactTransitionGroup.prototype.componentWillMount = function componentWillMount() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  };

	  ReactTransitionGroup.prototype.componentDidMount = function componentDidMount() {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  };

	  ReactTransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;

	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });

	    var key;

	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }

	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }

	    // If we want to someday check for reordering, we could do it here.
	  };

	  ReactTransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);

	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  };

	  ReactTransitionGroup.prototype.render = function render() {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }

	    // Do not forward ReactTransitionGroup props to primitive DOM nodes
	    var props = _assign({}, this.props);
	    delete props.transitionLeave;
	    delete props.transitionName;
	    delete props.transitionAppear;
	    delete props.transitionEnter;
	    delete props.childFactory;
	    delete props.transitionLeaveTimeout;
	    delete props.transitionEnterTimeout;
	    delete props.transitionAppearTimeout;
	    delete props.component;

	    return React.createElement(this.props.component, props, childrenToRender);
	  };

	  return ReactTransitionGroup;
	}(React.Component);

	ReactTransitionGroup.displayName = 'ReactTransitionGroup';
	ReactTransitionGroup.propTypes = {
	  component: React.PropTypes.any,
	  childFactory: React.PropTypes.func
	};
	ReactTransitionGroup.defaultProps = {
	  component: 'span',
	  childFactory: emptyFunction.thatReturnsArgument
	};


	module.exports = ReactTransitionGroup;

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var flattenChildren = __webpack_require__(365);

	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @param {number=} selfDebugID Optional debugID of the current internal instance.
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children, selfDebugID) {
	    if (!children) {
	      return children;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      return flattenChildren(children, selfDebugID);
	    }

	    return flattenChildren(children);
	  },

	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};

	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }

	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};

	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }

	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }

	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }

	    return childMapping;
	  }
	};

	module.exports = ReactTransitionChildMapping;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var KeyEscapeUtils = __webpack_require__(17);
	var traverseAllChildren = __webpack_require__(15);
	var warning = __webpack_require__(11);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(26);
	}

	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 * @param {number=} selfDebugID Optional debugID of the current internal instance.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
	  // We found a component instance.
	  if (traverseContext && typeof traverseContext === 'object') {
	    var result = traverseContext;
	    var keyUnique = result[name] === undefined;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!ReactComponentTreeHook) {
	        ReactComponentTreeHook = __webpack_require__(26);
	      }
	      if (!keyUnique) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
	      }
	    }
	    if (keyUnique && child != null) {
	      result[name] = child;
	    }
	  }
	}

	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children, selfDebugID) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};

	  if (process.env.NODE_ENV !== 'production') {
	    traverseAllChildren(children, function (traverseContext, child, name) {
	      return flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
	    }, result);
	  } else {
	    traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  }
	  return result;
	}

	module.exports = flattenChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(257);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(295);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(349);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _autoPrefix = __webpack_require__(360);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(350);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ScaleInChild = function (_Component) {
	  (0, _inherits3.default)(ScaleInChild, _Component);

	  function ScaleInChild() {
	    (0, _classCallCheck3.default)(this, ScaleInChild);
	    return (0, _possibleConstructorReturn3.default)(this, (ScaleInChild.__proto__ || (0, _getPrototypeOf2.default)(ScaleInChild)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ScaleInChild, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;

	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');

	      this.leaveTimer = setTimeout(callback, 450);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;

	      style.opacity = '1';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;

	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');

	      this.enterTimer = setTimeout(callback, this.props.enterDelay);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          enterDelay = _props.enterDelay,
	          maxScale = _props.maxScale,
	          minScale = _props.minScale,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'maxScale', 'minScale', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;


	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        top: 0,
	        left: 0,
	        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
	      }, style);

	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
	        children
	      );
	    }
	  }]);
	  return ScaleInChild;
	}(_react.Component);

	ScaleInChild.defaultProps = {
	  enterDelay: 0,
	  maxScale: 1,
	  minScale: 0
	};
	ScaleInChild.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? ScaleInChild.propTypes = {
	  children: _react.PropTypes.node,
	  enterDelay: _react.PropTypes.number,
	  maxScale: _react.PropTypes.number,
	  minScale: _react.PropTypes.number,
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = ScaleInChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(368);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _toArray2 = __webpack_require__(378);

	var _toArray3 = _interopRequireDefault(_toArray2);

	var _simpleAssign = __webpack_require__(349);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsTransitionGroup = __webpack_require__(362);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	var _dom = __webpack_require__(379);

	var _dom2 = _interopRequireDefault(_dom);

	var _CircleRipple = __webpack_require__(380);

	var _CircleRipple2 = _interopRequireDefault(_CircleRipple);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Remove the first element of the array
	var shift = function shift(_ref) {
	  var _ref2 = (0, _toArray3.default)(_ref),
	      newArray = _ref2.slice(1);

	  return newArray;
	};

	var TouchRipple = function (_Component) {
	  (0, _inherits3.default)(TouchRipple, _Component);

	  function TouchRipple(props, context) {
	    (0, _classCallCheck3.default)(this, TouchRipple);

	    // Touch start produces a mouse down event for compat reasons. To avoid
	    // showing ripples twice we skip showing a ripple for the first mouse down
	    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
	    // to avoid re-rendering when we change it.
	    var _this = (0, _possibleConstructorReturn3.default)(this, (TouchRipple.__proto__ || (0, _getPrototypeOf2.default)(TouchRipple)).call(this, props, context));

	    _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.start(event, false);
	      }
	    };

	    _this.handleMouseUp = function () {
	      _this.end();
	    };

	    _this.handleMouseLeave = function () {
	      _this.end();
	    };

	    _this.handleTouchStart = function (event) {
	      event.stopPropagation();
	      // If the user is swiping (not just tapping), save the position so we can
	      // abort ripples if the user appears to be scrolling.
	      if (_this.props.abortOnScroll && event.touches) {
	        _this.startListeningForScrollAbort(event);
	        _this.startTime = Date.now();
	      }
	      _this.start(event, true);
	    };

	    _this.handleTouchEnd = function () {
	      _this.end();
	    };

	    _this.handleTouchMove = function (event) {
	      // Stop trying to abort if we're already 300ms into the animation
	      var timeSinceStart = Math.abs(Date.now() - _this.startTime);
	      if (timeSinceStart > 300) {
	        _this.stopListeningForScrollAbort();
	        return;
	      }

	      // If the user is scrolling...
	      var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
	      var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
	      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
	      if (deltaY > 6 || deltaX > 6) {
	        var currentRipples = _this.state.ripples;
	        var ripple = currentRipples[0];
	        // This clone will replace the ripple in ReactTransitionGroup with a
	        // version that will disappear immediately when removed from the DOM
	        var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
	        // Remove the old ripple and replace it with the new updated one
	        currentRipples = shift(currentRipples);
	        currentRipples = [].concat((0, _toConsumableArray3.default)(currentRipples), [abortedRipple]);
	        _this.setState({ ripples: currentRipples }, function () {
	          // Call end after we've set the ripple to abort otherwise the setState
	          // in end() merges with this and the ripple abort fails
	          _this.end();
	        });
	      }
	    };

	    _this.ignoreNextMouseDown = false;

	    _this.state = {
	      // This prop allows us to only render the ReactTransitionGroup
	      // on the first click of the component, making the inital render faster.
	      hasRipples: false,
	      nextKey: 0,
	      ripples: []
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(TouchRipple, [{
	    key: 'start',
	    value: function start(event, isRippleTouchGenerated) {
	      var theme = this.context.muiTheme.ripple;

	      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
	        this.ignoreNextMouseDown = false;
	        return;
	      }

	      var ripples = this.state.ripples;

	      // Add a ripple to the ripples array
	      ripples = [].concat((0, _toConsumableArray3.default)(ripples), [_react2.default.createElement(_CircleRipple2.default, {
	        key: this.state.nextKey,
	        style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
	        color: this.props.color || theme.color,
	        opacity: this.props.opacity,
	        touchGenerated: isRippleTouchGenerated
	      })]);

	      this.ignoreNextMouseDown = isRippleTouchGenerated;
	      this.setState({
	        hasRipples: true,
	        nextKey: this.state.nextKey + 1,
	        ripples: ripples
	      });
	    }
	  }, {
	    key: 'end',
	    value: function end() {
	      var currentRipples = this.state.ripples;
	      this.setState({
	        ripples: shift(currentRipples)
	      });
	      if (this.props.abortOnScroll) {
	        this.stopListeningForScrollAbort();
	      }
	    }

	    // Check if the user seems to be scrolling and abort the animation if so

	  }, {
	    key: 'startListeningForScrollAbort',
	    value: function startListeningForScrollAbort(event) {
	      this.firstTouchY = event.touches[0].clientY;
	      this.firstTouchX = event.touches[0].clientX;
	      // Note that when scolling Chrome throttles this event to every 200ms
	      // Also note we don't listen for scroll events directly as there's no general
	      // way to cover cases like scrolling within containers on the page
	      document.body.addEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'stopListeningForScrollAbort',
	    value: function stopListeningForScrollAbort() {
	      document.body.removeEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'getRippleStyle',
	    value: function getRippleStyle(event) {
	      var el = _reactDom2.default.findDOMNode(this);
	      var elHeight = el.offsetHeight;
	      var elWidth = el.offsetWidth;
	      var offset = _dom2.default.offset(el);
	      var isTouchEvent = event.touches && event.touches.length;
	      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
	      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
	      var pointerX = pageX - offset.left;
	      var pointerY = pageY - offset.top;
	      var topLeftDiag = this.calcDiag(pointerX, pointerY);
	      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
	      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
	      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
	      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	      var rippleSize = rippleRadius * 2;
	      var left = pointerX - rippleRadius;
	      var top = pointerY - rippleRadius;

	      return {
	        directionInvariant: true,
	        height: rippleSize,
	        width: rippleSize,
	        top: top,
	        left: left
	      };
	    }
	  }, {
	    key: 'calcDiag',
	    value: function calcDiag(a, b) {
	      return Math.sqrt(a * a + b * b);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          style = _props.style;
	      var _state = this.state,
	          hasRipples = _state.hasRipples,
	          ripples = _state.ripples;
	      var prepareStyles = this.context.muiTheme.prepareStyles;


	      var rippleGroup = void 0;

	      if (hasRipples) {
	        var mergedStyles = (0, _simpleAssign2.default)({
	          height: '100%',
	          width: '100%',
	          position: 'absolute',
	          top: 0,
	          left: 0,
	          overflow: 'hidden',
	          pointerEvents: 'none'
	        }, style);

	        rippleGroup = _react2.default.createElement(
	          _reactAddonsTransitionGroup2.default,
	          { style: prepareStyles(mergedStyles) },
	          ripples
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        {
	          onMouseUp: this.handleMouseUp,
	          onMouseDown: this.handleMouseDown,
	          onMouseLeave: this.handleMouseLeave,
	          onTouchStart: this.handleTouchStart,
	          onTouchEnd: this.handleTouchEnd
	        },
	        rippleGroup,
	        children
	      );
	    }
	  }]);
	  return TouchRipple;
	}(_react.Component);

	TouchRipple.defaultProps = {
	  abortOnScroll: true
	};
	TouchRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? TouchRipple.propTypes = {
	  abortOnScroll: _react.PropTypes.bool,
	  centerRipple: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  color: _react.PropTypes.string,
	  opacity: _react.PropTypes.number,
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = TouchRipple;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(369);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(370), __esModule: true };

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(310);
	__webpack_require__(371);
	module.exports = __webpack_require__(263).Array.from;

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(264)
	  , $export        = __webpack_require__(261)
	  , toObject       = __webpack_require__(294)
	  , call           = __webpack_require__(372)
	  , isArrayIter    = __webpack_require__(373)
	  , toLength       = __webpack_require__(285)
	  , createProperty = __webpack_require__(374)
	  , getIterFn      = __webpack_require__(375);

	$export($export.S + $export.F * !__webpack_require__(377)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(268);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(315)
	  , ITERATOR   = __webpack_require__(321)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(267)
	  , createDesc      = __webpack_require__(275);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(376)
	  , ITERATOR  = __webpack_require__(321)('iterator')
	  , Iterators = __webpack_require__(315);
	module.exports = __webpack_require__(263).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(282)
	  , TAG = __webpack_require__(321)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(321)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(369);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
	};

/***/ },
/* 379 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  isDescendant: function isDescendant(parent, child) {
	    var node = child.parentNode;

	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }

	    return false;
	  },
	  offset: function offset(el) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top + document.body.scrollTop,
	      left: rect.left + document.body.scrollLeft
	    };
	  }
	};

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(257);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(295);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(349);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _shallowEqual = __webpack_require__(359);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _autoPrefix = __webpack_require__(360);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(350);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CircleRipple = function (_Component) {
	  (0, _inherits3.default)(CircleRipple, _Component);

	  function CircleRipple() {
	    (0, _classCallCheck3.default)(this, CircleRipple);
	    return (0, _possibleConstructorReturn3.default)(this, (CircleRipple.__proto__ || (0, _getPrototypeOf2.default)(CircleRipple)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(CircleRipple, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = 0;
	      // If the animation is aborted, remove from the DOM immediately
	      var removeAfter = this.props.aborted ? 0 : 2000;
	      this.enterTimer = setTimeout(callback, removeAfter);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
	      _autoPrefix2.default.set(style, 'transition', transitionValue);
	      _autoPrefix2.default.set(style, 'transform', 'scale(1)');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = this.props.opacity;
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	      this.leaveTimer = setTimeout(callback, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          aborted = _props.aborted,
	          color = _props.color,
	          opacity = _props.opacity,
	          style = _props.style,
	          touchGenerated = _props.touchGenerated,
	          other = (0, _objectWithoutProperties3.default)(_props, ['aborted', 'color', 'opacity', 'style', 'touchGenerated']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;


	      var mergedStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        backgroundColor: color
	      }, style);

	      return _react2.default.createElement('div', (0, _extends3.default)({}, other, { style: prepareStyles(mergedStyles) }));
	    }
	  }]);
	  return CircleRipple;
	}(_react.Component);

	CircleRipple.defaultProps = {
	  opacity: 0.1,
	  aborted: false
	};
	CircleRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? CircleRipple.propTypes = {
	  aborted: _react.PropTypes.bool,
	  color: _react.PropTypes.string,
	  opacity: _react.PropTypes.number,
	  style: _react.PropTypes.object,
	  touchGenerated: _react.PropTypes.bool
	} : void 0;
	exports.default = CircleRipple;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _Paper = __webpack_require__(382);

	var _Paper2 = _interopRequireDefault(_Paper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Paper2.default;

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(257);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(295);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(349);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(383);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _transitions = __webpack_require__(350);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context) {
	  var rounded = props.rounded,
	      circle = props.circle,
	      transitionEnabled = props.transitionEnabled,
	      zDepth = props.zDepth;
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      paper = _context$muiTheme.paper;


	  return {
	    root: {
	      color: paper.color,
	      backgroundColor: paper.backgroundColor,
	      transition: transitionEnabled && _transitions2.default.easeOut(),
	      boxSizing: 'border-box',
	      fontFamily: baseTheme.fontFamily,
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
	      borderRadius: circle ? '50%' : rounded ? '2px' : '0px'
	    }
	  };
	}

	var Paper = function (_Component) {
	  (0, _inherits3.default)(Paper, _Component);

	  function Paper() {
	    (0, _classCallCheck3.default)(this, Paper);
	    return (0, _possibleConstructorReturn3.default)(this, (Paper.__proto__ || (0, _getPrototypeOf2.default)(Paper)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Paper, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          circle = _props.circle,
	          rounded = _props.rounded,
	          style = _props.style,
	          transitionEnabled = _props.transitionEnabled,
	          zDepth = _props.zDepth,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context);

	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        children
	      );
	    }
	  }]);
	  return Paper;
	}(_react.Component);

	Paper.defaultProps = {
	  circle: false,
	  rounded: true,
	  transitionEnabled: true,
	  zDepth: 1
	};
	Paper.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? Paper.propTypes = {
	  /**
	   * Children passed into the paper element.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Set to true to generate a circlular paper container.
	   */
	  circle: _react.PropTypes.bool,
	  /**
	   * By default, the paper container will have a border radius.
	   * Set this to false to generate a container with sharp corners.
	   */
	  rounded: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Set to false to disable CSS transitions for the paper element.
	   */
	  transitionEnabled: _react.PropTypes.bool,
	  /**
	   * This number represents the zDepth of the paper shadow.
	   */
	  zDepth: _propTypes2.default.zDepth
	} : void 0;
	exports.default = Paper;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var horizontal = _react.PropTypes.oneOf(['left', 'middle', 'right']);
	var vertical = _react.PropTypes.oneOf(['top', 'center', 'bottom']);

	exports.default = {

	  corners: _react.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

	  horizontal: horizontal,

	  vertical: vertical,

	  origin: _react.PropTypes.shape({
	    horizontal: horizontal,
	    vertical: vertical
	  }),

	  cornersAndCenter: _react.PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

	  stringOrNumber: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

	  zDepth: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5])

	};

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _AppBar = __webpack_require__(385);

	var _AppBar2 = _interopRequireDefault(_AppBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _AppBar2.default;

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(257);

	var _extends3 = _interopRequireDefault(_extends2);

	var _keys = __webpack_require__(386);

	var _keys2 = _interopRequireDefault(_keys);

	var _objectWithoutProperties2 = __webpack_require__(295);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	exports.getStyles = getStyles;

	var _simpleAssign = __webpack_require__(349);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _IconButton = __webpack_require__(389);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _menu = __webpack_require__(394);

	var _menu2 = _interopRequireDefault(_menu);

	var _Paper = __webpack_require__(381);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _propTypes = __webpack_require__(383);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _warning = __webpack_require__(406);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context) {
	  var _context$muiTheme = context.muiTheme,
	      appBar = _context$muiTheme.appBar,
	      iconButtonSize = _context$muiTheme.button.iconButtonSize,
	      zIndex = _context$muiTheme.zIndex;


	  var flatButtonSize = 36;

	  var styles = {
	    root: {
	      position: 'relative',
	      zIndex: zIndex.appBar,
	      width: '100%',
	      display: 'flex',
	      backgroundColor: appBar.color,
	      paddingLeft: appBar.padding,
	      paddingRight: appBar.padding
	    },
	    title: {
	      whiteSpace: 'nowrap',
	      overflow: 'hidden',
	      textOverflow: 'ellipsis',
	      margin: 0,
	      paddingTop: 0,
	      letterSpacing: 0,
	      fontSize: 24,
	      fontWeight: appBar.titleFontWeight,
	      color: appBar.textColor,
	      height: appBar.height,
	      lineHeight: appBar.height + 'px'
	    },
	    mainElement: {
	      boxFlex: 1,
	      flex: '1'
	    },
	    iconButtonStyle: {
	      marginTop: (appBar.height - iconButtonSize) / 2,
	      marginRight: 8,
	      marginLeft: -16
	    },
	    iconButtonIconStyle: {
	      fill: appBar.textColor,
	      color: appBar.textColor
	    },
	    flatButton: {
	      color: appBar.textColor,
	      marginTop: (iconButtonSize - flatButtonSize) / 2 + 1
	    }
	  };

	  return styles;
	}

	var AppBar = function (_Component) {
	  (0, _inherits3.default)(AppBar, _Component);

	  function AppBar() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, AppBar);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AppBar.__proto__ || (0, _getPrototypeOf2.default)(AppBar)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchTapLeftIconButton = function (event) {
	      if (_this.props.onLeftIconButtonTouchTap) {
	        _this.props.onLeftIconButtonTouchTap(event);
	      }
	    }, _this.handleTouchTapRightIconButton = function (event) {
	      if (_this.props.onRightIconButtonTouchTap) {
	        _this.props.onRightIconButtonTouchTap(event);
	      }
	    }, _this.handleTitleTouchTap = function (event) {
	      if (_this.props.onTitleTouchTap) {
	        _this.props.onTitleTouchTap(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(AppBar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementLeft || !this.props.iconClassNameLeft, 'Material-UI: Properties iconElementLeft\n      and iconClassNameLeft cannot be simultaneously defined. Please use one or the other.') : void 0;

	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementRight || !this.props.iconClassNameRight, 'Material-UI: Properties iconElementRight\n      and iconClassNameRight cannot be simultaneously defined. Please use one or the other.') : void 0;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          title = _props.title,
	          titleStyle = _props.titleStyle,
	          iconStyleLeft = _props.iconStyleLeft,
	          iconStyleRight = _props.iconStyleRight,
	          onTitleTouchTap = _props.onTitleTouchTap,
	          showMenuIconButton = _props.showMenuIconButton,
	          iconElementLeft = _props.iconElementLeft,
	          iconElementRight = _props.iconElementRight,
	          iconClassNameLeft = _props.iconClassNameLeft,
	          iconClassNameRight = _props.iconClassNameRight,
	          onLeftIconButtonTouchTap = _props.onLeftIconButtonTouchTap,
	          onRightIconButtonTouchTap = _props.onRightIconButtonTouchTap,
	          className = _props.className,
	          style = _props.style,
	          zDepth = _props.zDepth,
	          children = _props.children,
	          other = (0, _objectWithoutProperties3.default)(_props, ['title', 'titleStyle', 'iconStyleLeft', 'iconStyleRight', 'onTitleTouchTap', 'showMenuIconButton', 'iconElementLeft', 'iconElementRight', 'iconClassNameLeft', 'iconClassNameRight', 'onLeftIconButtonTouchTap', 'onRightIconButtonTouchTap', 'className', 'style', 'zDepth', 'children']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context);

	      var menuElementLeft = void 0;
	      var menuElementRight = void 0;

	      // If the title is a string, wrap in an h1 tag.
	      // If not, wrap in a div tag.
	      var titleComponent = typeof title === 'string' || title instanceof String ? 'h1' : 'div';

	      var titleElement = _react2.default.createElement(titleComponent, {
	        onTouchTap: this.handleTitleTouchTap,
	        style: prepareStyles((0, _simpleAssign2.default)(styles.title, styles.mainElement, titleStyle))
	      }, title);

	      var iconLeftStyle = (0, _simpleAssign2.default)({}, styles.iconButtonStyle, iconStyleLeft);

	      if (showMenuIconButton) {
	        if (iconElementLeft) {
	          var iconElementLeftProps = {};

	          if (iconElementLeft.type.muiName === 'IconButton') {
	            var iconElemLeftChildren = iconElementLeft.props.children;
	            var iconButtonIconStyle = !(iconElemLeftChildren && iconElemLeftChildren.props && iconElemLeftChildren.props.color) ? styles.iconButtonIconStyle : null;

	            iconElementLeftProps.iconStyle = (0, _simpleAssign2.default)({}, iconButtonIconStyle, iconElementLeft.props.iconStyle);
	          }

	          if (!iconElementLeft.props.onTouchTap && this.props.onLeftIconButtonTouchTap) {
	            iconElementLeftProps.onTouchTap = this.handleTouchTapLeftIconButton;
	          }

	          menuElementLeft = _react2.default.createElement(
	            'div',
	            { style: prepareStyles(iconLeftStyle) },
	            (0, _keys2.default)(iconElementLeftProps).length > 0 ? (0, _react.cloneElement)(iconElementLeft, iconElementLeftProps) : iconElementLeft
	          );
	        } else {
	          menuElementLeft = _react2.default.createElement(
	            _IconButton2.default,
	            {
	              style: iconLeftStyle,
	              iconStyle: styles.iconButtonIconStyle,
	              iconClassName: iconClassNameLeft,
	              onTouchTap: this.handleTouchTapLeftIconButton
	            },
	            iconClassNameLeft ? '' : _react2.default.createElement(_menu2.default, { style: (0, _simpleAssign2.default)({}, styles.iconButtonIconStyle) })
	          );
	        }
	      }

	      var iconRightStyle = (0, _simpleAssign2.default)({}, styles.iconButtonStyle, {
	        marginRight: -16,
	        marginLeft: 'auto'
	      }, iconStyleRight);

	      if (iconElementRight) {
	        var iconElementRightProps = {};

	        switch (iconElementRight.type.muiName) {
	          case 'IconMenu':
	          case 'IconButton':
	            var iconElemRightChildren = iconElementRight.props.children;
	            var _iconButtonIconStyle = !(iconElemRightChildren && iconElemRightChildren.props && iconElemRightChildren.props.color) ? styles.iconButtonIconStyle : null;

	            iconElementRightProps.iconStyle = (0, _simpleAssign2.default)({}, _iconButtonIconStyle, iconElementRight.props.iconStyle);
	            break;

	          case 'FlatButton':
	            iconElementRightProps.style = (0, _simpleAssign2.default)({}, styles.flatButton, iconElementRight.props.style);
	            break;

	          default:
	        }

	        if (!iconElementRight.props.onTouchTap && this.props.onRightIconButtonTouchTap) {
	          iconElementRightProps.onTouchTap = this.handleTouchTapRightIconButton;
	        }

	        menuElementRight = _react2.default.createElement(
	          'div',
	          { style: prepareStyles(iconRightStyle) },
	          (0, _keys2.default)(iconElementRightProps).length > 0 ? (0, _react.cloneElement)(iconElementRight, iconElementRightProps) : iconElementRight
	        );
	      } else if (iconClassNameRight) {
	        menuElementRight = _react2.default.createElement(_IconButton2.default, {
	          style: iconRightStyle,
	          iconStyle: styles.iconButtonIconStyle,
	          iconClassName: iconClassNameRight,
	          onTouchTap: this.handleTouchTapRightIconButton
	        });
	      }

	      return _react2.default.createElement(
	        _Paper2.default,
	        (0, _extends3.default)({}, other, {
	          rounded: false,
	          className: className,
	          style: (0, _simpleAssign2.default)({}, styles.root, style),
	          zDepth: zDepth
	        }),
	        menuElementLeft,
	        titleElement,
	        menuElementRight,
	        children
	      );
	    }
	  }]);
	  return AppBar;
	}(_react.Component);

	AppBar.muiName = 'AppBar';
	AppBar.defaultProps = {
	  showMenuIconButton: true,
	  title: '',
	  zDepth: 1
	};
	AppBar.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? AppBar.propTypes = {
	  /**
	   * Can be used to render a tab inside an app bar for instance.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Applied to the app bar's root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The classname of the icon on the left of the app bar.
	   * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
	   */
	  iconClassNameLeft: _react.PropTypes.string,
	  /**
	   * Similiar to the iconClassNameLeft prop except that
	   * it applies to the icon displayed on the right of the app bar.
	   */
	  iconClassNameRight: _react.PropTypes.string,
	  /**
	   * The custom element to be displayed on the left side of the
	   * app bar such as an SvgIcon.
	   */
	  iconElementLeft: _react.PropTypes.element,
	  /**
	   * Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
	   */
	  iconElementRight: _react.PropTypes.element,
	  /**
	   * Override the inline-styles of the element displayed on the left side of the app bar.
	   */
	  iconStyleLeft: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the element displayed on the right side of the app bar.
	   */
	  iconStyleRight: _react.PropTypes.object,
	  /**
	   * Callback function for when the left icon is selected via a touch tap.
	   *
	   * @param {object} event TouchTap event targeting the left `IconButton`.
	   */
	  onLeftIconButtonTouchTap: _react.PropTypes.func,
	  /**
	   * Callback function for when the right icon is selected via a touch tap.
	   *
	   * @param {object} event TouchTap event targeting the right `IconButton`.
	   */
	  onRightIconButtonTouchTap: _react.PropTypes.func,
	  /**
	   * Callback function for when the title text is selected via a touch tap.
	   *
	   * @param {object} event TouchTap event targeting the `title` node.
	   */
	  onTitleTouchTap: _react.PropTypes.func,
	  /**
	   * Determines whether or not to display the Menu icon next to the title.
	   * Setting this prop to false will hide the icon.
	   */
	  showMenuIconButton: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The title to display on the app bar.
	   */
	  title: _react.PropTypes.node,
	  /**
	   * Override the inline-styles of the app bar's title element.
	   */
	  titleStyle: _react.PropTypes.object,
	  /**
	   * The zDepth of the component.
	   * The shadow of the app bar is also dependent on this property.
	   */
	  zDepth: _propTypes2.default.zDepth
	} : void 0;
	exports.default = AppBar;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(387), __esModule: true };

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(388);
	module.exports = __webpack_require__(263).Object.keys;

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(294)
	  , $keys    = __webpack_require__(277);

	__webpack_require__(300)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _IconButton = __webpack_require__(390);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _IconButton2.default;

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(257);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(295);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(349);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(350);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _propTypes = __webpack_require__(383);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _EnhancedButton = __webpack_require__(355);

	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

	var _FontIcon = __webpack_require__(391);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	var _Tooltip = __webpack_require__(393);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _childUtils = __webpack_require__(352);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;


	  return {
	    root: {
	      boxSizing: 'border-box',
	      overflow: 'visible',
	      transition: _transitions2.default.easeOut(),
	      padding: baseTheme.spacing.iconSize / 2,
	      width: baseTheme.spacing.iconSize * 2,
	      height: baseTheme.spacing.iconSize * 2,
	      fontSize: 0
	    },
	    tooltip: {
	      boxSizing: 'border-box'
	    },
	    disabled: {
	      color: baseTheme.palette.disabledColor,
	      fill: baseTheme.palette.disabledColor,
	      cursor: 'not-allowed'
	    }
	  };
	}

	var IconButton = function (_Component) {
	  (0, _inherits3.default)(IconButton, _Component);

	  function IconButton() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, IconButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconButton.__proto__ || (0, _getPrototypeOf2.default)(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      // Not to be confonded with the touch property.
	      // This state is to determined if it's a mobile device.
	      touch: false,
	      tooltipShown: false
	    }, _this.handleBlur = function (event) {
	      _this.hideTooltip();
	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	    }, _this.handleFocus = function (event) {
	      _this.showTooltip();
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.button.isKeyboardFocused()) {
	        _this.hideTooltip();
	      }
	      _this.setState({ hovered: false });
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseOut = function (event) {
	      if (_this.props.disabled) _this.hideTooltip();
	      if (_this.props.onMouseOut) _this.props.onMouseOut(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.showTooltip();

	      // Cancel hover styles for touch devices
	      if (!_this.state.touch) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });

	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      var _this$props = _this.props,
	          disabled = _this$props.disabled,
	          onFocus = _this$props.onFocus,
	          onBlur = _this$props.onBlur,
	          onKeyboardFocus = _this$props.onKeyboardFocus;

	      if (isKeyboardFocused && !disabled) {
	        _this.showTooltip();
	        if (onFocus) {
	          onFocus(event);
	        }
	      } else {
	        _this.hideTooltip();
	        if (onBlur) {
	          onBlur(event);
	        }
	      }

	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      if (onKeyboardFocus) {
	        onKeyboardFocus(event, isKeyboardFocused);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(IconButton, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.disabled) {
	        this.setState({ hovered: false });
	      }
	    }
	  }, {
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus() {
	      this.button.setKeyboardFocus();
	    }
	  }, {
	    key: 'showTooltip',
	    value: function showTooltip() {
	      if (this.props.tooltip) {
	        this.setState({ tooltipShown: true });
	      }
	    }
	  }, {
	    key: 'hideTooltip',
	    value: function hideTooltip() {
	      if (this.props.tooltip) this.setState({ tooltipShown: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          disabled = _props.disabled,
	          hoveredStyle = _props.hoveredStyle,
	          disableTouchRipple = _props.disableTouchRipple,
	          children = _props.children,
	          iconClassName = _props.iconClassName,
	          style = _props.style,
	          tooltip = _props.tooltip,
	          tooltipPositionProp = _props.tooltipPosition,
	          tooltipStyles = _props.tooltipStyles,
	          touch = _props.touch,
	          iconStyle = _props.iconStyle,
	          other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'hoveredStyle', 'disableTouchRipple', 'children', 'iconClassName', 'style', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch', 'iconStyle']);

	      var fonticon = void 0;

	      var styles = getStyles(this.props, this.context);
	      var tooltipPosition = tooltipPositionProp.split('-');

	      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style, hovered ? hoveredStyle : {});

	      var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
	        label: tooltip,
	        show: this.state.tooltipShown,
	        touch: touch,
	        style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyles),
	        verticalPosition: tooltipPosition[0],
	        horizontalPosition: tooltipPosition[1]
	      }) : null;

	      if (iconClassName) {
	        var iconHoverColor = iconStyle.iconHoverColor,
	            iconStyleFontIcon = (0, _objectWithoutProperties3.default)(iconStyle, ['iconHoverColor']);


	        fonticon = _react2.default.createElement(
	          _FontIcon2.default,
	          {
	            className: iconClassName,
	            hoverColor: disabled ? null : iconHoverColor,
	            style: (0, _simpleAssign2.default)({}, disabled && styles.disabled, iconStyleFontIcon),
	            color: this.context.muiTheme.baseTheme.palette.textColor
	          },
	          children
	        );
	      }

	      var childrenStyle = disabled ? (0, _simpleAssign2.default)({}, iconStyle, styles.disabled) : iconStyle;

	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        (0, _extends3.default)({
	          ref: function ref(_ref2) {
	            return _this2.button = _ref2;
	          }
	        }, other, {
	          centerRipple: true,
	          disabled: disabled,
	          onTouchStart: this.handleTouchStart,
	          style: mergedRootStyles,
	          disableTouchRipple: disableTouchRipple,
	          onBlur: this.handleBlur,
	          onFocus: this.handleFocus,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter,
	          onMouseOut: this.handleMouseOut,
	          onKeyboardFocus: this.handleKeyboardFocus
	        }),
	        tooltipElement,
	        fonticon,
	        (0, _childUtils.extendChildren)(children, {
	          style: childrenStyle
	        })
	      );
	    }
	  }]);
	  return IconButton;
	}(_react.Component);

	IconButton.muiName = 'IconButton';
	IconButton.defaultProps = {
	  disabled: false,
	  disableTouchRipple: false,
	  iconStyle: {},
	  tooltipPosition: 'bottom-center',
	  touch: false
	};
	IconButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? IconButton.propTypes = {
	  /**
	   * Can be used to pass a `FontIcon` element as the icon for the button.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * If true, the element's ripple effect will be disabled.
	   */
	  disableTouchRipple: _react.PropTypes.bool,
	  /**
	   * If true, the element will be disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element when the component is hovered.
	   */
	  hoveredStyle: _react.PropTypes.object,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * The CSS class name of the icon. Used for setting the icon with a stylesheet.
	   */
	  iconClassName: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the icon element.
	   * Note: you can specify iconHoverColor as a String inside this object.
	   */
	  iconStyle: _react.PropTypes.object,
	  /** @ignore */
	  onBlur: _react.PropTypes.func,
	  /** @ignore */
	  onFocus: _react.PropTypes.func,
	  /**
	   * Callback function fired when the element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the element.
	   * @param {boolean} keyboardFocused Indicates whether the element is focused.
	   */
	  onKeyboardFocus: _react.PropTypes.func,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /** @ignore */
	  onMouseOut: _react.PropTypes.func,
	  /** @ignore */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The text to supply to the element's tooltip.
	   */
	  tooltip: _react.PropTypes.node,
	  /**
	   * The vertical and horizontal positions, respectively, of the element's tooltip.
	   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
	   * "bottom-left", and "top-left".
	   */
	  tooltipPosition: _propTypes2.default.cornersAndCenter,
	  /**
	   * Override the inline-styles of the tooltip element.
	   */
	  tooltipStyles: _react.PropTypes.object,
	  /**
	   * If true, increase the tooltip element's size. Useful for increasing tooltip
	   * readability on mobile devices.
	   */
	  touch: _react.PropTypes.bool
	} : void 0;
	exports.default = IconButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _FontIcon = __webpack_require__(392);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FontIcon2.default;

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(257);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(295);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(349);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(350);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context, state) {
	  var color = props.color,
	      hoverColor = props.hoverColor;
	  var baseTheme = context.muiTheme.baseTheme;

	  var offColor = color || baseTheme.palette.textColor;
	  var onColor = hoverColor || offColor;

	  return {
	    root: {
	      color: state.hovered ? onColor : offColor,
	      position: 'relative',
	      fontSize: baseTheme.spacing.iconSize,
	      display: 'inline-block',
	      userSelect: 'none',
	      transition: _transitions2.default.easeOut()
	    }
	  };
	}

	var FontIcon = function (_Component) {
	  (0, _inherits3.default)(FontIcon, _Component);

	  function FontIcon() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, FontIcon);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FontIcon.__proto__ || (0, _getPrototypeOf2.default)(FontIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) {
	        _this.setState({ hovered: false });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(FontIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          hoverColor = _props.hoverColor,
	          onMouseLeave = _props.onMouseLeave,
	          onMouseEnter = _props.onMouseEnter,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);

	      return _react2.default.createElement('span', (0, _extends3.default)({}, other, {
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	      }));
	    }
	  }]);
	  return FontIcon;
	}(_react.Component);

	FontIcon.muiName = 'FontIcon';
	FontIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {}
	};
	FontIcon.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? FontIcon.propTypes = {
	  /**
	   * This is the font color of the font icon. If not specified,
	   * this component will default to muiTheme.palette.textColor.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _react.PropTypes.string,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = FontIcon;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(257);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(295);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(349);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(350);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStyles(props, context, state) {
	  var verticalPosition = props.verticalPosition;
	  var horizontalPosition = props.horizontalPosition;
	  var touchMarginOffset = props.touch ? 10 : 0;
	  var touchOffsetTop = props.touch ? -20 : -10;
	  var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;

	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      zIndex = _context$muiTheme.zIndex,
	      tooltip = _context$muiTheme.tooltip;


	  var styles = {
	    root: {
	      position: 'absolute',
	      fontFamily: baseTheme.fontFamily,
	      fontSize: '10px',
	      lineHeight: '22px',
	      padding: '0 8px',
	      zIndex: zIndex.tooltip,
	      color: tooltip.color,
	      overflow: 'hidden',
	      top: -10000,
	      borderRadius: 2,
	      userSelect: 'none',
	      opacity: 0,
	      right: horizontalPosition === 'left' ? 12 : null,
	      left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : null,
	      transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    label: {
	      position: 'relative',
	      whiteSpace: 'nowrap'
	    },
	    ripple: {
	      position: 'absolute',
	      left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
	      top: verticalPosition === 'bottom' ? 0 : '100%',
	      transform: 'translate(-50%, -50%)',
	      borderRadius: '50%',
	      backgroundColor: 'transparent',
	      transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    },
	    rootWhenShown: {
	      top: verticalPosition === 'top' ? touchOffsetTop : 36,
	      opacity: 0.9,
	      transform: 'translate(0px, ' + offset + 'px)',
	      transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    rootWhenTouched: {
	      fontSize: '14px',
	      lineHeight: '32px',
	      padding: '0 16px'
	    },
	    rippleWhenShown: {
	      backgroundColor: tooltip.rippleBackgroundColor,
	      transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    }
	  };

	  return styles;
	}

	var Tooltip = function (_Component) {
	  (0, _inherits3.default)(Tooltip, _Component);

	  function Tooltip() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, Tooltip);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      offsetWidth: null
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(Tooltip, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setRippleSize();
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setRippleSize();
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var ripple = this.refs.ripple;
	      var tooltip = this.refs.tooltip;
	      var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
	      var tooltipHeight = parseInt(tooltip.offsetHeight, 10);

	      var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
	      if (this.props.show) {
	        ripple.style.height = rippleDiameter + 'px';
	        ripple.style.width = rippleDiameter + 'px';
	      } else {
	        ripple.style.width = '0px';
	        ripple.style.height = '0px';
	      }
	    }
	  }, {
	    key: 'setTooltipPosition',
	    value: function setTooltipPosition() {
	      this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          horizontalPosition = _props.horizontalPosition,
	          label = _props.label,
	          show = _props.show,
	          touch = _props.touch,
	          verticalPosition = _props.verticalPosition,
	          other = (0, _objectWithoutProperties3.default)(_props, ['horizontalPosition', 'label', 'show', 'touch', 'verticalPosition']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;

	      var styles = getStyles(this.props, this.context, this.state);

	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, {
	          ref: 'tooltip',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
	        }),
	        _react2.default.createElement('div', {
	          ref: 'ripple',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
	        }),
	        _react2.default.createElement(
	          'span',
	          { style: prepareStyles(styles.label) },
	          label
	        )
	      );
	    }
	  }]);
	  return Tooltip;
	}(_react.Component);

	Tooltip.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? Tooltip.propTypes = {
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  horizontalPosition: _react.PropTypes.oneOf(['left', 'right', 'center']),
	  label: _react.PropTypes.node.isRequired,
	  show: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  touch: _react.PropTypes.bool,
	  verticalPosition: _react.PropTypes.oneOf(['top', 'bottom'])
	} : void 0;
	exports.default = Tooltip;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(395);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(404);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationMenu = function NavigationMenu(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
	  );
	};
	NavigationMenu = (0, _pure2.default)(NavigationMenu);
	NavigationMenu.displayName = 'NavigationMenu';
	NavigationMenu.muiName = 'SvgIcon';

	exports.default = NavigationMenu;

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _shouldUpdate = __webpack_require__(396);

	var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

	var _shallowEqual = __webpack_require__(359);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _createHelper = __webpack_require__(397);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pure = (0, _shouldUpdate2.default)(function (props, nextProps) {
	  return !(0, _shallowEqual2.default)(props, nextProps);
	});

	exports.default = (0, _createHelper2.default)(pure, 'pure', true, true);

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _createHelper = __webpack_require__(397);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(400);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var shouldUpdate = function shouldUpdate(test) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    return function (_Component) {
	      _inherits(_class, _Component);

	      function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }

	      _class.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return test(this.props, nextProps);
	      };

	      _class.prototype.render = function render() {
	        return factory(this.props);
	      };

	      return _class;
	    }(_react.Component);
	  };
	};

	exports.default = (0, _createHelper2.default)(shouldUpdate, 'shouldUpdate');

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	var createHelper = function createHelper(func, helperName) {
	  var setDisplayName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  var noArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
	    var _ret = function () {
	      /* eslint-disable global-require */
	      var wrapDisplayName = __webpack_require__(398).default;
	      /* eslint-enable global-require */

	      if (noArgs) {
	        return {
	          v: function v(BaseComponent) {
	            var Component = func(BaseComponent);
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	            return Component;
	          }
	        };
	      }

	      return {
	        v: function v() {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }

	          return function (BaseComponent) {
	            var Component = func.apply(undefined, args)(BaseComponent);
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	            return Component;
	          };
	        }
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }

	  return func;
	};

	exports.default = createHelper;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _getDisplayName = __webpack_require__(399);

	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
	  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
	};

	exports.default = wrapDisplayName;

/***/ },
/* 399 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var getDisplayName = function getDisplayName(Component) {
	  if (typeof Component === 'string') {
	    return Component;
	  }

	  if (!Component) {
	    return undefined;
	  }

	  return Component.displayName || Component.name || 'Component';
	};

	exports.default = getDisplayName;

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createEagerElementUtil = __webpack_require__(401);

	var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);

	var _isReferentiallyTransparentFunctionComponent = __webpack_require__(402);

	var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createFactory = function createFactory(type) {
	  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
	  return function (p, c) {
	    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
	  };
	};

	exports.default = createFactory;

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
	  if (!hasKey && isReferentiallyTransparent) {
	    if (children) {
	      return type(_extends({}, props, { children: children }));
	    }
	    return type(props);
	  }

	  var Component = type;

	  if (children) {
	    return _react2.default.createElement(
	      Component,
	      props,
	      children
	    );
	  }

	  return _react2.default.createElement(Component, props);
	};

	exports.default = createEagerElementUtil;

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _isClassComponent = __webpack_require__(403);

	var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
	  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && (process.env.NODE_ENV === 'production' || !Component.propTypes));
	};

	exports.default = isReferentiallyTransparentFunctionComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 403 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var isClassComponent = function isClassComponent(Component) {
	  return Boolean(Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object');
	};

	exports.default = isClassComponent;

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _SvgIcon = __webpack_require__(405);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SvgIcon2.default;

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(257);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(295);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _simpleAssign = __webpack_require__(349);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(350);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SvgIcon = function (_Component) {
	  (0, _inherits3.default)(SvgIcon, _Component);

	  function SvgIcon() {
	    var _ref;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, SvgIcon);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(SvgIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          color = _props.color,
	          hoverColor = _props.hoverColor,
	          onMouseEnter = _props.onMouseEnter,
	          onMouseLeave = _props.onMouseLeave,
	          style = _props.style,
	          viewBox = _props.viewBox,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
	      var _context$muiTheme = this.context.muiTheme,
	          svgIcon = _context$muiTheme.svgIcon,
	          prepareStyles = _context$muiTheme.prepareStyles;


	      var offColor = color ? color : 'currentColor';
	      var onColor = hoverColor ? hoverColor : offColor;

	      var mergedStyles = (0, _simpleAssign2.default)({
	        display: 'inline-block',
	        color: svgIcon.color,
	        fill: this.state.hovered ? onColor : offColor,
	        height: 24,
	        width: 24,
	        userSelect: 'none',
	        transition: _transitions2.default.easeOut()
	      }, style);

	      return _react2.default.createElement(
	        'svg',
	        (0, _extends3.default)({}, other, {
	          onMouseEnter: this.handleMouseEnter,
	          onMouseLeave: this.handleMouseLeave,
	          style: prepareStyles(mergedStyles),
	          viewBox: viewBox
	        }),
	        children
	      );
	    }
	  }]);
	  return SvgIcon;
	}(_react.Component);

	SvgIcon.muiName = 'SvgIcon';
	SvgIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  viewBox: '0 0 24 24'
	};
	SvgIcon.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? SvgIcon.propTypes = {
	  /**
	   * Elements passed into the SVG Icon.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * This is the fill color of the svg icon.
	   * If not specified, this component will default
	   * to muiTheme.palette.textColor.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _react.PropTypes.string,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Allows you to redefine what the coordinates
	   * without units mean inside an svg element. For example,
	   * if the SVG element is 500 (width) by 200 (height), and you
	   * pass viewBox="0 0 50 20", this means that the coordinates inside
	   * the svg will go from the top left corner (0,0) to bottom right (50,20)
	   * and each unit will be worth 10px.
	   */
	  viewBox: _react.PropTypes.string
	} : void 0;
	exports.default = SvgIcon;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(296);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(302);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(306);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(341);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _getMuiTheme = __webpack_require__(408);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MuiThemeProvider = function (_Component) {
	  (0, _inherits3.default)(MuiThemeProvider, _Component);

	  function MuiThemeProvider() {
	    (0, _classCallCheck3.default)(this, MuiThemeProvider);
	    return (0, _possibleConstructorReturn3.default)(this, (MuiThemeProvider.__proto__ || (0, _getPrototypeOf2.default)(MuiThemeProvider)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(MuiThemeProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: this.props.muiTheme || (0, _getMuiTheme2.default)()
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return MuiThemeProvider;
	}(_react.Component);

	MuiThemeProvider.childContextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? MuiThemeProvider.propTypes = {
	  children: _react.PropTypes.element,
	  muiTheme: _react.PropTypes.object
	} : void 0;
	exports.default = MuiThemeProvider;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(368);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	exports.default = getMuiTheme;

	var _lodash = __webpack_require__(409);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _colorManipulator = __webpack_require__(351);

	var _lightBaseTheme = __webpack_require__(410);

	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

	var _zIndex = __webpack_require__(413);

	var _zIndex2 = _interopRequireDefault(_zIndex);

	var _autoprefixer = __webpack_require__(414);

	var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

	var _callOnce = __webpack_require__(450);

	var _callOnce2 = _interopRequireDefault(_callOnce);

	var _rtl = __webpack_require__(451);

	var _rtl2 = _interopRequireDefault(_rtl);

	var _compose = __webpack_require__(452);

	var _compose2 = _interopRequireDefault(_compose);

	var _typography = __webpack_require__(453);

	var _typography2 = _interopRequireDefault(_typography);

	var _colors = __webpack_require__(411);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get the MUI theme corresponding to a base theme.
	 * It's possible to override the computed theme values
	 * by providing a second argument. The calculated
	 * theme will be deeply merged with the second argument.
	 */
	function getMuiTheme(muiTheme) {
	  for (var _len = arguments.length, more = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    more[_key - 1] = arguments[_key];
	  }

	  muiTheme = _lodash2.default.apply(undefined, [{
	    zIndex: _zIndex2.default,
	    isRtl: false,
	    userAgent: undefined
	  }, _lightBaseTheme2.default, muiTheme].concat(more));

	  var _muiTheme = muiTheme,
	      spacing = _muiTheme.spacing,
	      fontFamily = _muiTheme.fontFamily,
	      palette = _muiTheme.palette;

	  var baseTheme = { spacing: spacing, fontFamily: fontFamily, palette: palette };

	  muiTheme = (0, _lodash2.default)({
	    appBar: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      height: spacing.desktopKeylineIncrement,
	      titleFontWeight: _typography2.default.fontWeightNormal,
	      padding: spacing.desktopGutter
	    },
	    avatar: {
	      color: palette.canvasColor,
	      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.26)
	    },
	    badge: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.primary1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    bottomNavigation: {
	      backgroundColor: palette.canvasColor,
	      unselectedColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      selectedColor: palette.primary1Color,
	      height: 56,
	      unselectedFontSize: 12,
	      selectedFontSize: 14
	    },
	    button: {
	      height: 36,
	      minWidth: 88,
	      iconButtonSize: spacing.iconSize * 2
	    },
	    card: {
	      titleColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      subtitleColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    cardMedia: {
	      color: _colors.darkWhite,
	      overlayContentBackground: _colors.lightBlack,
	      titleColor: _colors.darkWhite,
	      subtitleColor: _colors.lightWhite
	    },
	    cardText: {
	      textColor: palette.textColor
	    },
	    checkbox: {
	      boxColor: palette.textColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    chip: {
	      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12),
	      deleteIconColor: (0, _colorManipulator.fade)(palette.textColor, 0.26),
	      textColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      fontSize: 14,
	      fontWeight: _typography2.default.fontWeightNormal,
	      shadow: '0 1px 6px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12) + ',\n        0 1px 4px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12)
	    },
	    datePicker: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      calendarTextColor: palette.textColor,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor,
	      calendarYearBackgroundColor: palette.canvasColor
	    },
	    dialog: {
	      titleFontSize: 22,
	      bodyFontSize: 16,
	      bodyColor: (0, _colorManipulator.fade)(palette.textColor, 0.6)
	    },
	    dropDownMenu: {
	      accentColor: palette.borderColor
	    },
	    enhancedButton: {
	      tapHighlightColor: _colors.transparent
	    },
	    flatButton: {
	      color: _colors.transparent,
	      buttonFilterColor: '#999999',
	      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
	      textColor: palette.textColor,
	      primaryTextColor: palette.primary1Color,
	      secondaryTextColor: palette.accent1Color,
	      fontSize: _typography2.default.fontStyleButtonFontSize,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    floatingActionButton: {
	      buttonSize: 56,
	      miniSize: 40,
	      color: palette.primary1Color,
	      iconColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryIconColor: palette.alternateTextColor,
	      disabledTextColor: palette.disabledColor,
	      disabledColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12)
	    },
	    gridTile: {
	      textColor: _colors.white
	    },
	    icon: {
	      color: palette.canvasColor,
	      backgroundColor: palette.primary1Color
	    },
	    inkBar: {
	      backgroundColor: palette.accent1Color
	    },
	    drawer: {
	      width: spacing.desktopKeylineIncrement * 4,
	      color: palette.canvasColor
	    },
	    listItem: {
	      nestedLevelDepth: 18,
	      secondaryTextColor: palette.secondaryTextColor,
	      leftIconColor: _colors.grey600,
	      rightIconColor: _colors.grey600
	    },
	    menu: {
	      backgroundColor: palette.canvasColor,
	      containerBackgroundColor: palette.canvasColor
	    },
	    menuItem: {
	      dataHeight: 32,
	      height: 48,
	      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.1),
	      padding: spacing.desktopGutter,
	      selectedTextColor: palette.accent1Color,
	      rightIconDesktopFill: _colors.grey600
	    },
	    menuSubheader: {
	      padding: spacing.desktopGutter,
	      borderColor: palette.borderColor,
	      textColor: palette.primary1Color
	    },
	    overlay: {
	      backgroundColor: _colors.lightBlack
	    },
	    paper: {
	      color: palette.textColor,
	      backgroundColor: palette.canvasColor,
	      zDepthShadows: [[1, 6, 0.12, 1, 4, 0.12], [3, 10, 0.16, 3, 10, 0.23], [10, 30, 0.19, 6, 10, 0.23], [14, 45, 0.25, 10, 18, 0.22], [19, 60, 0.30, 15, 20, 0.22]].map(function (d) {
	        return '0 ' + d[0] + 'px ' + d[1] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[2]) + ',\n         0 ' + d[3] + 'px ' + d[4] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[5]);
	      })
	    },
	    radioButton: {
	      borderColor: palette.textColor,
	      backgroundColor: palette.alternateTextColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      size: 24,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    raisedButton: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.primary1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      disabledColor: (0, _colorManipulator.darken)(palette.alternateTextColor, 0.1),
	      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
	      fontSize: _typography2.default.fontStyleButtonFontSize,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    refreshIndicator: {
	      strokeColor: palette.borderColor,
	      loadingStrokeColor: palette.primary1Color
	    },
	    ripple: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.87)
	    },
	    slider: {
	      trackSize: 2,
	      trackColor: palette.primary3Color,
	      trackColorSelected: palette.accent3Color,
	      handleSize: 12,
	      handleSizeDisabled: 8,
	      handleSizeActive: 18,
	      handleColorZero: palette.primary3Color,
	      handleFillColor: palette.alternateTextColor,
	      selectionColor: palette.primary1Color,
	      rippleColor: palette.primary1Color
	    },
	    snackbar: {
	      textColor: palette.alternateTextColor,
	      backgroundColor: palette.textColor,
	      actionColor: palette.accent1Color
	    },
	    subheader: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    stepper: {
	      backgroundColor: 'transparent',
	      hoverBackgroundColor: (0, _colorManipulator.fade)(_colors.black, 0.06),
	      iconColor: palette.primary1Color,
	      hoveredIconColor: _colors.grey700,
	      inactiveIconColor: _colors.grey500,
	      textColor: (0, _colorManipulator.fade)(_colors.black, 0.87),
	      disabledTextColor: (0, _colorManipulator.fade)(_colors.black, 0.26),
	      connectorLineColor: _colors.grey400
	    },
	    svgIcon: {
	      color: palette.textColor
	    },
	    table: {
	      backgroundColor: palette.canvasColor
	    },
	    tableFooter: {
	      borderColor: palette.borderColor,
	      textColor: palette.accent3Color
	    },
	    tableHeader: {
	      borderColor: palette.borderColor
	    },
	    tableHeaderColumn: {
	      textColor: palette.accent3Color,
	      height: 56,
	      spacing: 24
	    },
	    tableRow: {
	      hoverColor: palette.accent2Color,
	      stripeColor: (0, _colorManipulator.fade)((0, _colorManipulator.lighten)(palette.primary1Color, 0.5), 0.4),
	      selectedColor: palette.borderColor,
	      textColor: palette.textColor,
	      borderColor: palette.borderColor,
	      height: 48
	    },
	    tableRowColumn: {
	      height: 48,
	      spacing: 24
	    },
	    tabs: {
	      backgroundColor: palette.primary1Color,
	      textColor: (0, _colorManipulator.fade)(palette.alternateTextColor, 0.7),
	      selectedTextColor: palette.alternateTextColor
	    },
	    textField: {
	      textColor: palette.textColor,
	      hintColor: palette.disabledColor,
	      floatingLabelColor: palette.disabledColor,
	      disabledTextColor: palette.disabledColor,
	      errorColor: _colors.red500,
	      focusColor: palette.primary1Color,
	      backgroundColor: 'transparent',
	      borderColor: palette.borderColor
	    },
	    timePicker: {
	      color: palette.alternateTextColor,
	      textColor: palette.alternateTextColor,
	      accentColor: palette.primary1Color,
	      clockColor: palette.textColor,
	      clockCircleColor: palette.clockCircleColor,
	      headerColor: palette.pickerHeaderColor || palette.primary1Color,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor
	    },
	    toggle: {
	      thumbOnColor: palette.primary1Color,
	      thumbOffColor: palette.accent2Color,
	      thumbDisabledColor: palette.borderColor,
	      thumbRequiredColor: palette.primary1Color,
	      trackOnColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5),
	      trackOffColor: palette.primary3Color,
	      trackDisabledColor: palette.primary3Color,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor,
	      trackRequiredColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5)
	    },
	    toolbar: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      backgroundColor: (0, _colorManipulator.darken)(palette.accent2Color, 0.05),
	      height: 56,
	      titleFontSize: 20,
	      iconColor: (0, _colorManipulator.fade)(palette.textColor, 0.4),
	      separatorColor: (0, _colorManipulator.fade)(palette.textColor, 0.175),
	      menuHoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.1)
	    },
	    tooltip: {
	      color: _colors.white,
	      rippleBackgroundColor: _colors.grey700
	    }
	  }, muiTheme, {
	    baseTheme: baseTheme, // To provide backward compatibility.
	    rawTheme: baseTheme });

	  var transformers = [_autoprefixer2.default, _rtl2.default, _callOnce2.default].map(function (t) {
	    return t(muiTheme);
	  }).filter(function (t) {
	    return t;
	  });

	  muiTheme.prepareStyles = _compose2.default.apply(undefined, (0, _toConsumableArray3.default)(transformers));

	  return muiTheme;
	}

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  if (!(isArray(source) || isTypedArray(source))) {
	    var props = baseKeysIn(source);
	  }
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	      else {
	        newValue = objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = merge;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(203)(module)))

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _colors = __webpack_require__(411);

	var _colorManipulator = __webpack_require__(351);

	var _spacing = __webpack_require__(412);

	var _spacing2 = _interopRequireDefault(_spacing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 *  Light Theme is the default theme used in material-ui. It is guaranteed to
	 *  have all theme variables needed for every component. Variables not defined
	 *  in a custom theme will default to these values.
	 */
	exports.default = {
	  spacing: _spacing2.default,
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: _colors.cyan500,
	    primary2Color: _colors.cyan700,
	    primary3Color: _colors.grey400,
	    accent1Color: _colors.pinkA200,
	    accent2Color: _colors.grey100,
	    accent3Color: _colors.grey500,
	    textColor: _colors.darkBlack,
	    secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
	    alternateTextColor: _colors.white,
	    canvasColor: _colors.white,
	    borderColor: _colors.grey300,
	    disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
	    pickerHeaderColor: _colors.cyan500,
	    clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
	    shadowColor: _colors.fullBlack
	  }
	}; /**
	    * NB: If you update this file, please also update `docs/src/app/customization/Themes.js`
	    */

/***/ },
/* 411 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var red50 = exports.red50 = '#ffebee';
	var red100 = exports.red100 = '#ffcdd2';
	var red200 = exports.red200 = '#ef9a9a';
	var red300 = exports.red300 = '#e57373';
	var red400 = exports.red400 = '#ef5350';
	var red500 = exports.red500 = '#f44336';
	var red600 = exports.red600 = '#e53935';
	var red700 = exports.red700 = '#d32f2f';
	var red800 = exports.red800 = '#c62828';
	var red900 = exports.red900 = '#b71c1c';
	var redA100 = exports.redA100 = '#ff8a80';
	var redA200 = exports.redA200 = '#ff5252';
	var redA400 = exports.redA400 = '#ff1744';
	var redA700 = exports.redA700 = '#d50000';

	var pink50 = exports.pink50 = '#fce4ec';
	var pink100 = exports.pink100 = '#f8bbd0';
	var pink200 = exports.pink200 = '#f48fb1';
	var pink300 = exports.pink300 = '#f06292';
	var pink400 = exports.pink400 = '#ec407a';
	var pink500 = exports.pink500 = '#e91e63';
	var pink600 = exports.pink600 = '#d81b60';
	var pink700 = exports.pink700 = '#c2185b';
	var pink800 = exports.pink800 = '#ad1457';
	var pink900 = exports.pink900 = '#880e4f';
	var pinkA100 = exports.pinkA100 = '#ff80ab';
	var pinkA200 = exports.pinkA200 = '#ff4081';
	var pinkA400 = exports.pinkA400 = '#f50057';
	var pinkA700 = exports.pinkA700 = '#c51162';

	var purple50 = exports.purple50 = '#f3e5f5';
	var purple100 = exports.purple100 = '#e1bee7';
	var purple200 = exports.purple200 = '#ce93d8';
	var purple300 = exports.purple300 = '#ba68c8';
	var purple400 = exports.purple400 = '#ab47bc';
	var purple500 = exports.purple500 = '#9c27b0';
	var purple600 = exports.purple600 = '#8e24aa';
	var purple700 = exports.purple700 = '#7b1fa2';
	var purple800 = exports.purple800 = '#6a1b9a';
	var purple900 = exports.purple900 = '#4a148c';
	var purpleA100 = exports.purpleA100 = '#ea80fc';
	var purpleA200 = exports.purpleA200 = '#e040fb';
	var purpleA400 = exports.purpleA400 = '#d500f9';
	var purpleA700 = exports.purpleA700 = '#aa00ff';

	var deepPurple50 = exports.deepPurple50 = '#ede7f6';
	var deepPurple100 = exports.deepPurple100 = '#d1c4e9';
	var deepPurple200 = exports.deepPurple200 = '#b39ddb';
	var deepPurple300 = exports.deepPurple300 = '#9575cd';
	var deepPurple400 = exports.deepPurple400 = '#7e57c2';
	var deepPurple500 = exports.deepPurple500 = '#673ab7';
	var deepPurple600 = exports.deepPurple600 = '#5e35b1';
	var deepPurple700 = exports.deepPurple700 = '#512da8';
	var deepPurple800 = exports.deepPurple800 = '#4527a0';
	var deepPurple900 = exports.deepPurple900 = '#311b92';
	var deepPurpleA100 = exports.deepPurpleA100 = '#b388ff';
	var deepPurpleA200 = exports.deepPurpleA200 = '#7c4dff';
	var deepPurpleA400 = exports.deepPurpleA400 = '#651fff';
	var deepPurpleA700 = exports.deepPurpleA700 = '#6200ea';

	var indigo50 = exports.indigo50 = '#e8eaf6';
	var indigo100 = exports.indigo100 = '#c5cae9';
	var indigo200 = exports.indigo200 = '#9fa8da';
	var indigo300 = exports.indigo300 = '#7986cb';
	var indigo400 = exports.indigo400 = '#5c6bc0';
	var indigo500 = exports.indigo500 = '#3f51b5';
	var indigo600 = exports.indigo600 = '#3949ab';
	var indigo700 = exports.indigo700 = '#303f9f';
	var indigo800 = exports.indigo800 = '#283593';
	var indigo900 = exports.indigo900 = '#1a237e';
	var indigoA100 = exports.indigoA100 = '#8c9eff';
	var indigoA200 = exports.indigoA200 = '#536dfe';
	var indigoA400 = exports.indigoA400 = '#3d5afe';
	var indigoA700 = exports.indigoA700 = '#304ffe';

	var blue50 = exports.blue50 = '#e3f2fd';
	var blue100 = exports.blue100 = '#bbdefb';
	var blue200 = exports.blue200 = '#90caf9';
	var blue300 = exports.blue300 = '#64b5f6';
	var blue400 = exports.blue400 = '#42a5f5';
	var blue500 = exports.blue500 = '#2196f3';
	var blue600 = exports.blue600 = '#1e88e5';
	var blue700 = exports.blue700 = '#1976d2';
	var blue800 = exports.blue800 = '#1565c0';
	var blue900 = exports.blue900 = '#0d47a1';
	var blueA100 = exports.blueA100 = '#82b1ff';
	var blueA200 = exports.blueA200 = '#448aff';
	var blueA400 = exports.blueA400 = '#2979ff';
	var blueA700 = exports.blueA700 = '#2962ff';

	var lightBlue50 = exports.lightBlue50 = '#e1f5fe';
	var lightBlue100 = exports.lightBlue100 = '#b3e5fc';
	var lightBlue200 = exports.lightBlue200 = '#81d4fa';
	var lightBlue300 = exports.lightBlue300 = '#4fc3f7';
	var lightBlue400 = exports.lightBlue400 = '#29b6f6';
	var lightBlue500 = exports.lightBlue500 = '#03a9f4';
	var lightBlue600 = exports.lightBlue600 = '#039be5';
	var lightBlue700 = exports.lightBlue700 = '#0288d1';
	var lightBlue800 = exports.lightBlue800 = '#0277bd';
	var lightBlue900 = exports.lightBlue900 = '#01579b';
	var lightBlueA100 = exports.lightBlueA100 = '#80d8ff';
	var lightBlueA200 = exports.lightBlueA200 = '#40c4ff';
	var lightBlueA400 = exports.lightBlueA400 = '#00b0ff';
	var lightBlueA700 = exports.lightBlueA700 = '#0091ea';

	var cyan50 = exports.cyan50 = '#e0f7fa';
	var cyan100 = exports.cyan100 = '#b2ebf2';
	var cyan200 = exports.cyan200 = '#80deea';
	var cyan300 = exports.cyan300 = '#4dd0e1';
	var cyan400 = exports.cyan400 = '#26c6da';
	var cyan500 = exports.cyan500 = '#00bcd4';
	var cyan600 = exports.cyan600 = '#00acc1';
	var cyan700 = exports.cyan700 = '#0097a7';
	var cyan800 = exports.cyan800 = '#00838f';
	var cyan900 = exports.cyan900 = '#006064';
	var cyanA100 = exports.cyanA100 = '#84ffff';
	var cyanA200 = exports.cyanA200 = '#18ffff';
	var cyanA400 = exports.cyanA400 = '#00e5ff';
	var cyanA700 = exports.cyanA700 = '#00b8d4';

	var teal50 = exports.teal50 = '#e0f2f1';
	var teal100 = exports.teal100 = '#b2dfdb';
	var teal200 = exports.teal200 = '#80cbc4';
	var teal300 = exports.teal300 = '#4db6ac';
	var teal400 = exports.teal400 = '#26a69a';
	var teal500 = exports.teal500 = '#009688';
	var teal600 = exports.teal600 = '#00897b';
	var teal700 = exports.teal700 = '#00796b';
	var teal800 = exports.teal800 = '#00695c';
	var teal900 = exports.teal900 = '#004d40';
	var tealA100 = exports.tealA100 = '#a7ffeb';
	var tealA200 = exports.tealA200 = '#64ffda';
	var tealA400 = exports.tealA400 = '#1de9b6';
	var tealA700 = exports.tealA700 = '#00bfa5';

	var green50 = exports.green50 = '#e8f5e9';
	var green100 = exports.green100 = '#c8e6c9';
	var green200 = exports.green200 = '#a5d6a7';
	var green300 = exports.green300 = '#81c784';
	var green400 = exports.green400 = '#66bb6a';
	var green500 = exports.green500 = '#4caf50';
	var green600 = exports.green600 = '#43a047';
	var green700 = exports.green700 = '#388e3c';
	var green800 = exports.green800 = '#2e7d32';
	var green900 = exports.green900 = '#1b5e20';
	var greenA100 = exports.greenA100 = '#b9f6ca';
	var greenA200 = exports.greenA200 = '#69f0ae';
	var greenA400 = exports.greenA400 = '#00e676';
	var greenA700 = exports.greenA700 = '#00c853';

	var lightGreen50 = exports.lightGreen50 = '#f1f8e9';
	var lightGreen100 = exports.lightGreen100 = '#dcedc8';
	var lightGreen200 = exports.lightGreen200 = '#c5e1a5';
	var lightGreen300 = exports.lightGreen300 = '#aed581';
	var lightGreen400 = exports.lightGreen400 = '#9ccc65';
	var lightGreen500 = exports.lightGreen500 = '#8bc34a';
	var lightGreen600 = exports.lightGreen600 = '#7cb342';
	var lightGreen700 = exports.lightGreen700 = '#689f38';
	var lightGreen800 = exports.lightGreen800 = '#558b2f';
	var lightGreen900 = exports.lightGreen900 = '#33691e';
	var lightGreenA100 = exports.lightGreenA100 = '#ccff90';
	var lightGreenA200 = exports.lightGreenA200 = '#b2ff59';
	var lightGreenA400 = exports.lightGreenA400 = '#76ff03';
	var lightGreenA700 = exports.lightGreenA700 = '#64dd17';

	var lime50 = exports.lime50 = '#f9fbe7';
	var lime100 = exports.lime100 = '#f0f4c3';
	var lime200 = exports.lime200 = '#e6ee9c';
	var lime300 = exports.lime300 = '#dce775';
	var lime400 = exports.lime400 = '#d4e157';
	var lime500 = exports.lime500 = '#cddc39';
	var lime600 = exports.lime600 = '#c0ca33';
	var lime700 = exports.lime700 = '#afb42b';
	var lime800 = exports.lime800 = '#9e9d24';
	var lime900 = exports.lime900 = '#827717';
	var limeA100 = exports.limeA100 = '#f4ff81';
	var limeA200 = exports.limeA200 = '#eeff41';
	var limeA400 = exports.limeA400 = '#c6ff00';
	var limeA700 = exports.limeA700 = '#aeea00';

	var yellow50 = exports.yellow50 = '#fffde7';
	var yellow100 = exports.yellow100 = '#fff9c4';
	var yellow200 = exports.yellow200 = '#fff59d';
	var yellow300 = exports.yellow300 = '#fff176';
	var yellow400 = exports.yellow400 = '#ffee58';
	var yellow500 = exports.yellow500 = '#ffeb3b';
	var yellow600 = exports.yellow600 = '#fdd835';
	var yellow700 = exports.yellow700 = '#fbc02d';
	var yellow800 = exports.yellow800 = '#f9a825';
	var yellow900 = exports.yellow900 = '#f57f17';
	var yellowA100 = exports.yellowA100 = '#ffff8d';
	var yellowA200 = exports.yellowA200 = '#ffff00';
	var yellowA400 = exports.yellowA400 = '#ffea00';
	var yellowA700 = exports.yellowA700 = '#ffd600';

	var amber50 = exports.amber50 = '#fff8e1';
	var amber100 = exports.amber100 = '#ffecb3';
	var amber200 = exports.amber200 = '#ffe082';
	var amber300 = exports.amber300 = '#ffd54f';
	var amber400 = exports.amber400 = '#ffca28';
	var amber500 = exports.amber500 = '#ffc107';
	var amber600 = exports.amber600 = '#ffb300';
	var amber700 = exports.amber700 = '#ffa000';
	var amber800 = exports.amber800 = '#ff8f00';
	var amber900 = exports.amber900 = '#ff6f00';
	var amberA100 = exports.amberA100 = '#ffe57f';
	var amberA200 = exports.amberA200 = '#ffd740';
	var amberA400 = exports.amberA400 = '#ffc400';
	var amberA700 = exports.amberA700 = '#ffab00';

	var orange50 = exports.orange50 = '#fff3e0';
	var orange100 = exports.orange100 = '#ffe0b2';
	var orange200 = exports.orange200 = '#ffcc80';
	var orange300 = exports.orange300 = '#ffb74d';
	var orange400 = exports.orange400 = '#ffa726';
	var orange500 = exports.orange500 = '#ff9800';
	var orange600 = exports.orange600 = '#fb8c00';
	var orange700 = exports.orange700 = '#f57c00';
	var orange800 = exports.orange800 = '#ef6c00';
	var orange900 = exports.orange900 = '#e65100';
	var orangeA100 = exports.orangeA100 = '#ffd180';
	var orangeA200 = exports.orangeA200 = '#ffab40';
	var orangeA400 = exports.orangeA400 = '#ff9100';
	var orangeA700 = exports.orangeA700 = '#ff6d00';

	var deepOrange50 = exports.deepOrange50 = '#fbe9e7';
	var deepOrange100 = exports.deepOrange100 = '#ffccbc';
	var deepOrange200 = exports.deepOrange200 = '#ffab91';
	var deepOrange300 = exports.deepOrange300 = '#ff8a65';
	var deepOrange400 = exports.deepOrange400 = '#ff7043';
	var deepOrange500 = exports.deepOrange500 = '#ff5722';
	var deepOrange600 = exports.deepOrange600 = '#f4511e';
	var deepOrange700 = exports.deepOrange700 = '#e64a19';
	var deepOrange800 = exports.deepOrange800 = '#d84315';
	var deepOrange900 = exports.deepOrange900 = '#bf360c';
	var deepOrangeA100 = exports.deepOrangeA100 = '#ff9e80';
	var deepOrangeA200 = exports.deepOrangeA200 = '#ff6e40';
	var deepOrangeA400 = exports.deepOrangeA400 = '#ff3d00';
	var deepOrangeA700 = exports.deepOrangeA700 = '#dd2c00';

	var brown50 = exports.brown50 = '#efebe9';
	var brown100 = exports.brown100 = '#d7ccc8';
	var brown200 = exports.brown200 = '#bcaaa4';
	var brown300 = exports.brown300 = '#a1887f';
	var brown400 = exports.brown400 = '#8d6e63';
	var brown500 = exports.brown500 = '#795548';
	var brown600 = exports.brown600 = '#6d4c41';
	var brown700 = exports.brown700 = '#5d4037';
	var brown800 = exports.brown800 = '#4e342e';
	var brown900 = exports.brown900 = '#3e2723';

	var blueGrey50 = exports.blueGrey50 = '#eceff1';
	var blueGrey100 = exports.blueGrey100 = '#cfd8dc';
	var blueGrey200 = exports.blueGrey200 = '#b0bec5';
	var blueGrey300 = exports.blueGrey300 = '#90a4ae';
	var blueGrey400 = exports.blueGrey400 = '#78909c';
	var blueGrey500 = exports.blueGrey500 = '#607d8b';
	var blueGrey600 = exports.blueGrey600 = '#546e7a';
	var blueGrey700 = exports.blueGrey700 = '#455a64';
	var blueGrey800 = exports.blueGrey800 = '#37474f';
	var blueGrey900 = exports.blueGrey900 = '#263238';

	var grey50 = exports.grey50 = '#fafafa';
	var grey100 = exports.grey100 = '#f5f5f5';
	var grey200 = exports.grey200 = '#eeeeee';
	var grey300 = exports.grey300 = '#e0e0e0';
	var grey400 = exports.grey400 = '#bdbdbd';
	var grey500 = exports.grey500 = '#9e9e9e';
	var grey600 = exports.grey600 = '#757575';
	var grey700 = exports.grey700 = '#616161';
	var grey800 = exports.grey800 = '#424242';
	var grey900 = exports.grey900 = '#212121';

	var black = exports.black = '#000000';
	var white = exports.white = '#ffffff';

	var transparent = exports.transparent = 'rgba(0, 0, 0, 0)';
	var fullBlack = exports.fullBlack = 'rgba(0, 0, 0, 1)';
	var darkBlack = exports.darkBlack = 'rgba(0, 0, 0, 0.87)';
	var lightBlack = exports.lightBlack = 'rgba(0, 0, 0, 0.54)';
	var minBlack = exports.minBlack = 'rgba(0, 0, 0, 0.26)';
	var faintBlack = exports.faintBlack = 'rgba(0, 0, 0, 0.12)';
	var fullWhite = exports.fullWhite = 'rgba(255, 255, 255, 1)';
	var darkWhite = exports.darkWhite = 'rgba(255, 255, 255, 0.87)';
	var lightWhite = exports.lightWhite = 'rgba(255, 255, 255, 0.54)';

/***/ },
/* 412 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  iconSize: 24,

	  desktopGutter: 24,
	  desktopGutterMore: 32,
	  desktopGutterLess: 16,
	  desktopGutterMini: 8,
	  desktopKeylineIncrement: 64,
	  desktopDropDownMenuItemHeight: 32,
	  desktopDropDownMenuFontSize: 15,
	  desktopDrawerMenuItemHeight: 48,
	  desktopSubheaderHeight: 48,
	  desktopToolbarHeight: 56
	};

/***/ },
/* 413 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  menu: 1000,
	  appBar: 1100,
	  drawerOverlay: 1200,
	  drawer: 1300,
	  dialogOverlay: 1400,
	  dialog: 1500,
	  layer: 2000,
	  popover: 2100,
	  snackbar: 2900,
	  tooltip: 3000
	};

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(307);

	var _typeof3 = _interopRequireDefault(_typeof2);

	exports.default = function (muiTheme) {
	  var isClient = typeof navigator !== 'undefined';
	  var userAgent = muiTheme.userAgent;

	  if (userAgent === undefined && isClient) {
	    userAgent = navigator.userAgent;
	  }

	  if (userAgent === undefined && !hasWarnedAboutUserAgent) {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: userAgent should be supplied in the muiTheme context\n      for server-side rendering.') : void 0;

	    hasWarnedAboutUserAgent = true;
	  }

	  if (userAgent === false) {
	    // Disabled autoprefixer
	    return null;
	  } else if (userAgent === 'all' || userAgent === undefined) {
	    // Prefix for all user agent
	    return function (style) {
	      var isFlex = ['flex', 'inline-flex'].indexOf(style.display) !== -1;
	      var stylePrefixed = _inlineStylePrefixer2.default.prefixAll(style);

	      if (isFlex) {
	        var display = stylePrefixed.display;
	        if (isClient) {
	          // We can't apply this join with react-dom:
	          // #https://github.com/facebook/react/issues/6467
	          stylePrefixed.display = display[display.length - 1];
	        } else {
	          stylePrefixed.display = display.join('; display: ');
	        }
	      }

	      return stylePrefixed;
	    };
	  } else {
	    var _ret = function () {
	      var prefixer = new _inlineStylePrefixer2.default({
	        userAgent: userAgent
	      });

	      return {
	        v: function v(style) {
	          return prefixer.prefix(style);
	        }
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	  }
	};

	var _inlineStylePrefixer = __webpack_require__(415);

	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

	var _warning = __webpack_require__(406);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hasWarnedAboutUserAgent = false;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// special flexbox specifications


	var _prefixAll2 = __webpack_require__(416);

	var _prefixAll3 = _interopRequireDefault(_prefixAll2);

	var _getBrowserInformation = __webpack_require__(433);

	var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);

	var _getPrefixedKeyframes = __webpack_require__(436);

	var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);

	var _capitalizeString = __webpack_require__(418);

	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

	var _sortPrefixedStyle = __webpack_require__(419);

	var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

	var _prefixProps = __webpack_require__(437);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var _position = __webpack_require__(438);

	var _position2 = _interopRequireDefault(_position);

	var _calc = __webpack_require__(440);

	var _calc2 = _interopRequireDefault(_calc);

	var _zoomCursor = __webpack_require__(441);

	var _zoomCursor2 = _interopRequireDefault(_zoomCursor);

	var _grabCursor = __webpack_require__(442);

	var _grabCursor2 = _interopRequireDefault(_grabCursor);

	var _flex = __webpack_require__(443);

	var _flex2 = _interopRequireDefault(_flex);

	var _sizing = __webpack_require__(444);

	var _sizing2 = _interopRequireDefault(_sizing);

	var _gradient = __webpack_require__(445);

	var _gradient2 = _interopRequireDefault(_gradient);

	var _transition = __webpack_require__(446);

	var _transition2 = _interopRequireDefault(_transition);

	var _flexboxIE = __webpack_require__(448);

	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

	var _flexboxOld = __webpack_require__(449);

	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var plugins = [_position2.default, _calc2.default, _zoomCursor2.default, _grabCursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default,
	// this must be run AFTER the flexbox specs
	_flex2.default];

	var Prefixer = function () {
	  /**
	   * Instantiante a new prefixer
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   * @param {string} keepUnprefixed - keeps unprefixed properties and values
	   */

	  function Prefixer() {
	    var _this = this;

	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Prefixer);

	    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

	    this._userAgent = options.userAgent || defaultUserAgent;
	    this._keepUnprefixed = options.keepUnprefixed || false;

	    this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);

	    // Checks if the userAgent was resolved correctly
	    if (this._browserInfo && this._browserInfo.prefix) {
	      // set additional prefix information
	      this.cssPrefix = this._browserInfo.prefix.css;
	      this.jsPrefix = this._browserInfo.prefix.inline;
	      this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo);
	    } else {
	      this._usePrefixAllFallback = true;
	      return false;
	    }

	    var data = this._browserInfo.browser && _prefixProps2.default[this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        result[name] = true;
	        return result;
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      this._usePrefixAllFallback = true;
	    }
	  }

	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */


	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;

	      // use prefixAll as fallback if userAgent can not be resolved
	      if (this._usePrefixAllFallback) {
	        return (0, _prefixAll3.default)(styles);
	      }

	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }

	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object && !Array.isArray(value)) {
	          // recurse through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
	            if (!_this2._keepUnprefixed) {
	              delete styles[property];
	            }
	          }
	        }
	      });

	      Object.keys(styles).forEach(function (property) {
	        [].concat(styles[property]).forEach(function (value) {
	          // resolve plugins
	          plugins.forEach(function (plugin) {
	            // generates a new plugin interface with current data
	            assignStyles(styles, plugin({
	              property: property,
	              value: value,
	              styles: styles,
	              browserInfo: _this2._browserInfo,
	              prefix: {
	                js: _this2.jsPrefix,
	                css: _this2.cssPrefix,
	                keyframes: _this2.prefixedKeyframes
	              },
	              keepUnprefixed: _this2._keepUnprefixed,
	              requiresPrefix: _this2._requiresPrefix
	            }), value, _this2._keepUnprefixed);
	          });
	        });
	      });

	      return (0, _sortPrefixedStyle2.default)(styles);
	    }

	    /**
	     * Returns a prefixed version of the style object using all vendor prefixes
	     * @param {Object} styles - Style object that gets prefixed properties added
	     * @returns {Object} - Style object with prefixed properties and values
	     */

	  }], [{
	    key: 'prefixAll',
	    value: function prefixAll(styles) {
	      return (0, _prefixAll3.default)(styles);
	    }
	  }]);

	  return Prefixer;
	}();

	exports.default = Prefixer;


	function assignStyles(base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var value = arguments[2];
	  var keepUnprefixed = arguments[3];

	  Object.keys(extend).forEach(function (property) {
	    var baseValue = base[property];
	    if (Array.isArray(baseValue)) {
	      [].concat(extend[property]).forEach(function (val) {
	        if (base[property].indexOf(val) === -1) {
	          base[property].splice(baseValue.indexOf(value), keepUnprefixed ? 0 : 1, val);
	        }
	      });
	    } else {
	      base[property] = extend[property];
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixAll;

	var _prefixProps = __webpack_require__(417);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var _capitalizeString = __webpack_require__(418);

	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

	var _sortPrefixedStyle = __webpack_require__(419);

	var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

	var _position = __webpack_require__(421);

	var _position2 = _interopRequireDefault(_position);

	var _calc = __webpack_require__(422);

	var _calc2 = _interopRequireDefault(_calc);

	var _cursor = __webpack_require__(425);

	var _cursor2 = _interopRequireDefault(_cursor);

	var _flex = __webpack_require__(426);

	var _flex2 = _interopRequireDefault(_flex);

	var _sizing = __webpack_require__(427);

	var _sizing2 = _interopRequireDefault(_sizing);

	var _gradient = __webpack_require__(428);

	var _gradient2 = _interopRequireDefault(_gradient);

	var _transition = __webpack_require__(429);

	var _transition2 = _interopRequireDefault(_transition);

	var _flexboxIE = __webpack_require__(431);

	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

	var _flexboxOld = __webpack_require__(432);

	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// special flexbox specifications


	var plugins = [_position2.default, _calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];

	/**
	 * Returns a prefixed version of the style object using all vendor prefixes
	 * @param {Object} styles - Style object that gets prefixed properties added
	 * @returns {Object} - Style object with prefixed properties and values
	 */
	function prefixAll(styles) {
	  Object.keys(styles).forEach(function (property) {
	    var value = styles[property];
	    if (value instanceof Object && !Array.isArray(value)) {
	      // recurse through nested style objects
	      styles[property] = prefixAll(value);
	    } else {
	      Object.keys(_prefixProps2.default).forEach(function (prefix) {
	        var properties = _prefixProps2.default[prefix];
	        // add prefixes if needed
	        if (properties[property]) {
	          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
	        }
	      });
	    }
	  });

	  Object.keys(styles).forEach(function (property) {
	    [].concat(styles[property]).forEach(function (value, index) {
	      // resolve every special plugins
	      plugins.forEach(function (plugin) {
	        return assignStyles(styles, plugin(property, value));
	      });
	    });
	  });

	  return (0, _sortPrefixedStyle2.default)(styles);
	}

	function assignStyles(base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  Object.keys(extend).forEach(function (property) {
	    var baseValue = base[property];
	    if (Array.isArray(baseValue)) {
	      [].concat(extend[property]).forEach(function (value) {
	        var valueIndex = baseValue.indexOf(value);
	        if (valueIndex > -1) {
	          base[property].splice(valueIndex, 1);
	        }
	        base[property].push(value);
	      });
	    } else {
	      base[property] = extend[property];
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 417 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	module.exports = exports["default"];

/***/ },
/* 418 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// helper to capitalize strings

	exports.default = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	module.exports = exports["default"];

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sortPrefixedStyle;

	var _isPrefixedProperty = __webpack_require__(420);

	var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function sortPrefixedStyle(style) {
	  return Object.keys(style).sort(function (left, right) {
	    if ((0, _isPrefixedProperty2.default)(left) && !(0, _isPrefixedProperty2.default)(right)) {
	      return -1;
	    } else if (!(0, _isPrefixedProperty2.default)(left) && (0, _isPrefixedProperty2.default)(right)) {
	      return 1;
	    }
	    return 0;
	  }).reduce(function (sortedStyle, prop) {
	    sortedStyle[prop] = style[prop];
	    return sortedStyle;
	  }, {});
	}
	module.exports = exports['default'];

/***/ },
/* 420 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (property) {
	  return property.match(/^(Webkit|Moz|O|ms)/) !== null;
	};

	module.exports = exports["default"];

/***/ },
/* 421 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = position;
	function position(property, value) {
	  if (property === 'position' && value === 'sticky') {
	    return { position: ['-webkit-sticky', 'sticky'] };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;

	var _joinPrefixedValue = __webpack_require__(423);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	var _isPrefixedValue = __webpack_require__(424);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function calc(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
	    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 423 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	// returns a style object with a single concated prefixed value string

	exports.default = function (property, value) {
	  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
	    return prefix + value;
	  } : arguments[2];
	  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
	    return replacer(prefix, value);
	  }));
	};

	module.exports = exports['default'];

/***/ },
/* 424 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value) {
	  if (Array.isArray(value)) value = value.join(',');

	  return value.match(/-webkit-|-moz-|-ms-/) !== null;
	};

	module.exports = exports['default'];

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cursor;

	var _joinPrefixedValue = __webpack_require__(423);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  grab: true,
	  grabbing: true
	};

	function cursor(property, value) {
	  if (property === 'cursor' && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 426 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;
	var values = { flex: true, 'inline-flex': true };

	function flex(property, value) {
	  if (property === 'display' && values[value]) {
	    return {
	      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;

	var _joinPrefixedValue = __webpack_require__(423);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(property, value) {
	  if (properties[property] && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;

	var _joinPrefixedValue = __webpack_require__(423);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	var _isPrefixedValue = __webpack_require__(424);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transition;

	var _hyphenateStyleName = __webpack_require__(430);

	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

	var _capitalizeString = __webpack_require__(418);

	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

	var _isPrefixedValue = __webpack_require__(424);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	var _prefixProps = __webpack_require__(417);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true
	};

	function transition(property, value) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties[property]) {
	    var _ref2;

	    var outputValue = prefixValue(value);
	    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
	      return value.match(/-moz-|-ms-/) === null;
	    }).join(',');

	    // if the property is already prefixed
	    if (property.indexOf('Webkit') > -1) {
	      return _defineProperty({}, property, webkitOutput);
	    }

	    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
	  }
	}

	function prefixValue(value) {
	  if ((0, _isPrefixedValue2.default)(value)) {
	    return value;
	  }

	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	  // iterate each single value and check for transitioned properties
	  // that need to be prefixed as well
	  multipleValues.forEach(function (val, index) {
	    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
	      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

	      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
	        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

	        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
	          // join all prefixes and create a new value
	          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
	        }
	      });
	      return out;
	    }, val);
	  });

	  return multipleValues.join(',');
	}
	module.exports = exports['default'];

/***/ },
/* 430 */
/***/ function(module, exports) {

	'use strict';

	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache = {};

	function hyphenateStyleName(string) {
	    return string in cache
	    ? cache[string]
	    : cache[string] = string
	      .replace(uppercasePattern, '-$&')
	      .toLowerCase()
	      .replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;


/***/ },
/* 431 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	function flexboxIE(property, value) {
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 432 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	function flexboxOld(property, value) {
	  if (property === 'flexDirection' && typeof value === 'string') {
	    return {
	      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	    };
	  }
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bowser = __webpack_require__(434);

	var _bowser2 = _interopRequireDefault(_bowser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var vendorPrefixes = {
	  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen', 'chromium', 'vivaldi'],
	  Moz: ['firefox', 'seamonkey', 'sailfish'],
	  ms: ['msie', 'msedge']
	};
	var browsers = {
	  chrome: [['chrome'], ['chromium']],
	  safari: [['safari']],
	  firefox: [['firefox']],
	  edge: [['msedge']],
	  opera: [['opera'], ['vivaldi']],
	  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
	  ie: [['msie']],
	  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
	  and_uc: [['android', 'mobile'], ['android', 'tablet']],
	  android: [['android', 'mobile'], ['android', 'tablet']]
	};

	var browserByInfo = function browserByInfo(info) {
	  if (info.firefox) {
	    return 'firefox';
	  }
	  var name = '';

	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });

	  return name;
	};

	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */

	exports.default = function (userAgent) {
	  if (!userAgent) {
	    return false;
	  }
	  var info = _bowser2.default._detect(userAgent);

	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          css: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });

	  info.browser = browserByInfo(info);

	  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
	  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);
	  info.osversion = parseFloat(info.osversion);

	  // iOS forces all browsers to use Safari under the hood
	  // as the Safari version seems to match the iOS version
	  // we just explicitely use the osversion instead
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
	  if (info.browser === 'ios_saf' && info.version > info.osversion) {
	    info.version = info.osversion;
	    info.safari = true;
	  }

	  // seperate native android chrome
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
	  if (info.browser === 'android' && info.chrome && info.version > 37) {
	    info.browser = 'and_chr';
	  }

	  // For android < 4.4 we want to check the osversion
	  // not the chrome version, see issue #26
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
	  if (info.browser === 'android' && info.osversion < 5) {
	    info.version = info.osversion;
	  }

	  return info;
	};

	module.exports = exports['default'];

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Bowser - a browser detector
	 * https://github.com/ded/bowser
	 * MIT License | (c) Dustin Diaz 2015
	 */

	!function (root, name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) __webpack_require__(435)(name, definition)
	  else root[name] = definition()
	}(this, 'bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */

	  var t = true

	  function detect(ua) {

	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }

	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }

	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
	      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
	      , chromeos = /CrOS/.test(ua)
	      , silk = /silk/i.test(ua)
	      , sailfish = /sailfish/i.test(ua)
	      , tizen = /tizen/i.test(ua)
	      , webos = /(web|hpw)os/i.test(ua)
	      , windowsphone = /windows phone/i.test(ua)
	      , samsungBrowser = /SamsungBrowser/i.test(ua)
	      , windows = !windowsphone && /windows/i.test(ua)
	      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
	      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
	      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , xbox = /xbox/i.test(ua)
	      , result

	    if (/opera/i.test(ua)) {
	      //  an old Opera
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
	      }
	    } else if (/opr|opios/i.test(ua)) {
	      // a new Opera
	      result = {
	        name: 'Opera'
	        , opera: t
	        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (/SamsungBrowser/i.test(ua)) {
	      result = {
	        name: 'Samsung Internet for Android'
	        , samsungBrowser: t
	        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/coast/i.test(ua)) {
	      result = {
	        name: 'Opera Coast'
	        , coast: t
	        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/ucbrowser/i.test(ua)) {
	      result = {
	          name: 'UC Browser'
	        , ucbrowser: t
	        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/mxios/i.test(ua)) {
	      result = {
	        name: 'Maxthon'
	        , maxthon: t
	        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/epiphany/i.test(ua)) {
	      result = {
	        name: 'Epiphany'
	        , epiphany: t
	        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/puffin/i.test(ua)) {
	      result = {
	        name: 'Puffin'
	        , puffin: t
	        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
	      }
	    }
	    else if (/sleipnir/i.test(ua)) {
	      result = {
	        name: 'Sleipnir'
	        , sleipnir: t
	        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/k-meleon/i.test(ua)) {
	      result = {
	        name: 'K-Meleon'
	        , kMeleon: t
	        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (windowsphone) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeos) {
	      result = {
	        name: 'Chrome'
	      , chromeos: t
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/vivaldi/i.test(ua)) {
	      result = {
	        name: 'Vivaldi'
	        , vivaldi: t
	        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (sailfish) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel|fxios/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (silk) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/slimerjs/i.test(ua)) {
	      result = {
	        name: 'SlimerJS'
	        , slimer: t
	        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (webos) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (tizen) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/qupzilla/i.test(ua)) {
	      result = {
	        name: 'QupZilla'
	        , qupzilla: t
	        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
	      }
	    }
	    else if (/chromium/i.test(ua)) {
	      result = {
	        name: 'Chromium'
	        , chromium: t
	        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	        , chrome: t
	        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	        , version: versionIdentifier
	      }
	    }
	    else if (/safari|applewebkit/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      }
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if(/googlebot/i.test(ua)) {
	      result = {
	        name: 'Googlebot'
	      , googlebot: t
	      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }

	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      if (/(apple)?webkit\/537\.36/i.test(ua)) {
	        result.name = result.name || "Blink"
	        result.blink = t
	      } else {
	        result.name = result.name || "Webkit"
	        result.webkit = t
	      }
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }

	    // set OS flags for platforms that have multiple browsers
	    if (!result.windowsphone && !result.msedge && (android || result.silk)) {
	      result.android = t
	    } else if (!result.windowsphone && !result.msedge && iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    } else if (mac) {
	      result.mac = t
	    } else if (xbox) {
	      result.xbox = t
	    } else if (windows) {
	      result.windows = t
	    } else if (linux) {
	      result.linux = t
	    }

	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }

	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (
	         tablet
	      || nexusTablet
	      || iosdevice == 'ipad'
	      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
	      || result.silk
	    ) {
	      result.tablet = t
	    } else if (
	         mobile
	      || iosdevice == 'iphone'
	      || iosdevice == 'ipod'
	      || android
	      || nexusMobile
	      || result.blackberry
	      || result.webos
	      || result.bada
	    ) {
	      result.mobile = t
	    }

	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
			    (result.vivaldi && result.version >= 1.0) ||
	        (result.chrome && result.version >= 20) ||
	        (result.samsungBrowser && result.version >= 4) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        || (result.chromium && result.version >= 20)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        || (result.chromium && result.version < 20)
	        ) {
	      result.c = t
	    } else result.x = t

	    return result
	  }

	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }

	  /**
	   * Get version precisions count
	   *
	   * @example
	   *   getVersionPrecision("1.10.3") // 3
	   *
	   * @param  {string} version
	   * @return {number}
	   */
	  function getVersionPrecision(version) {
	    return version.split(".").length;
	  }

	  /**
	   * Array::map polyfill
	   *
	   * @param  {Array} arr
	   * @param  {Function} iterator
	   * @return {Array}
	   */
	  function map(arr, iterator) {
	    var result = [], i;
	    if (Array.prototype.map) {
	      return Array.prototype.map.call(arr, iterator);
	    }
	    for (i = 0; i < arr.length; i++) {
	      result.push(iterator(arr[i]));
	    }
	    return result;
	  }

	  /**
	   * Calculate browser version weight
	   *
	   * @example
	   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
	   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
	   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
	   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
	   *
	   * @param  {Array<String>} versions versions to compare
	   * @return {Number} comparison result
	   */
	  function compareVersions(versions) {
	    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
	    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
	    var chunks = map(versions, function (version) {
	      var delta = precision - getVersionPrecision(version);

	      // 2) "9" -> "9.0" (for precision = 2)
	      version = version + new Array(delta + 1).join(".0");

	      // 3) "9.0" -> ["000000000"", "000000009"]
	      return map(version.split("."), function (chunk) {
	        return new Array(20 - chunk.length).join("0") + chunk;
	      }).reverse();
	    });

	    // iterate in reverse order by reversed chunks array
	    while (--precision >= 0) {
	      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
	      if (chunks[0][precision] > chunks[1][precision]) {
	        return 1;
	      }
	      else if (chunks[0][precision] === chunks[1][precision]) {
	        if (precision === 0) {
	          // all version chunks are same
	          return 0;
	        }
	      }
	      else {
	        return -1;
	      }
	    }
	  }

	  /**
	   * Check if browser is unsupported
	   *
	   * @example
	   *   bowser.isUnsupportedBrowser({
	   *     msie: "10",
	   *     firefox: "23",
	   *     chrome: "29",
	   *     safari: "5.1",
	   *     opera: "16",
	   *     phantom: "534"
	   *   });
	   *
	   * @param  {Object}  minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function isUnsupportedBrowser(minVersions, strictMode, ua) {
	    var _bowser = bowser;

	    // make strictMode param optional with ua param usage
	    if (typeof strictMode === 'string') {
	      ua = strictMode;
	      strictMode = void(0);
	    }

	    if (strictMode === void(0)) {
	      strictMode = false;
	    }
	    if (ua) {
	      _bowser = detect(ua);
	    }

	    var version = "" + _bowser.version;
	    for (var browser in minVersions) {
	      if (minVersions.hasOwnProperty(browser)) {
	        if (_bowser[browser]) {
	          if (typeof minVersions[browser] !== 'string') {
	            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
	          }

	          // browser version and min supported version.
	          return compareVersions([version, minVersions[browser]]) < 0;
	        }
	      }
	    }

	    return strictMode; // not found
	  }

	  /**
	   * Check if browser is supported
	   *
	   * @param  {Object} minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function check(minVersions, strictMode, ua) {
	    return !isUnsupportedBrowser(minVersions, strictMode, ua);
	  }

	  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
	  bowser.compareVersions = compareVersions;
	  bowser.check = check;

	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;

	  return bowser
	});


/***/ },
/* 435 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 436 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var browser = _ref.browser;
	  var version = _ref.version;
	  var prefix = _ref.prefix;

	  var prefixedKeyframes = 'keyframes';

	  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
	    prefixedKeyframes = prefix.css + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	};

	module.exports = exports['default'];

/***/ },
/* 437 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 55, "userSelect": 55, "fontKerning": 32, "textEmphasisPosition": 55, "textEmphasis": 55, "textEmphasisStyle": 55, "textEmphasisColor": 55, "boxDecorationBreak": 55, "clipPath": 55, "maskImage": 55, "maskMode": 55, "maskRepeat": 55, "maskPosition": 55, "maskClip": 55, "maskOrigin": 55, "maskSize": 55, "maskComposite": 55, "mask": 55, "maskBorderSource": 55, "maskBorderMode": 55, "maskBorderSlice": 55, "maskBorderWidth": 55, "maskBorderOutset": 55, "maskBorderRepeat": 55, "maskBorder": 55, "maskType": 55, "textDecorationStyle": 55, "textDecorationSkip": 55, "textDecorationLine": 55, "textDecorationColor": 55, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 49, "breakBefore": 49, "breakInside": 49, "columnCount": 49, "columnFill": 49, "columnGap": 49, "columnRule": 49, "columnRuleColor": 49, "columnRuleStyle": 49, "columnRuleWidth": 49, "columns": 49, "columnSpan": 49, "columnWidth": 49 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 10, "userSelect": 10, "backdropFilter": 10, "fontKerning": 9, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 10, "clipPath": 10, "maskImage": 10, "maskMode": 10, "maskRepeat": 10, "maskPosition": 10, "maskClip": 10, "maskOrigin": 10, "maskSize": 10, "maskComposite": 10, "mask": 10, "maskBorderSource": 10, "maskBorderMode": 10, "maskBorderSlice": 10, "maskBorderWidth": 10, "maskBorderOutset": 10, "maskBorderRepeat": 10, "maskBorder": 10, "maskType": 10, "textDecorationStyle": 10, "textDecorationSkip": 10, "textDecorationLine": 10, "textDecorationColor": 10, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10, "flowInto": 10, "flowFrom": 10, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 10, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 51, "userSelect": 51, "boxSizing": 28, "textAlignLast": 48, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 51, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 41, "userSelect": 41, "fontKerning": 19, "textEmphasisPosition": 41, "textEmphasis": 41, "textEmphasisStyle": 41, "textEmphasisColor": 41, "boxDecorationBreak": 41, "clipPath": 41, "maskImage": 41, "maskMode": 41, "maskRepeat": 41, "maskPosition": 41, "maskClip": 41, "maskOrigin": 41, "maskSize": 41, "maskComposite": 41, "mask": 41, "maskBorderSource": 41, "maskBorderMode": 41, "maskBorderSlice": 41, "maskBorderWidth": 41, "maskBorderOutset": 41, "maskBorderRepeat": 41, "maskBorder": 41, "maskType": 41, "textDecorationStyle": 41, "textDecorationSkip": 41, "textDecorationLine": 41, "textDecorationColor": 41, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36 }, "ie": { "flex": 10, "flexDirection": 10, "flexFlow": 10, "flexWrap": 10, "transform": 9, "transformOrigin": 9, "transformOriginX": 9, "transformOriginY": 9, "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "touchAction": 10, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 14, "wrapFlow": 14, "wrapThrough": 14, "wrapMargin": 14, "scrollSnapType": 14, "scrollSnapPointsX": 14, "scrollSnapPointsY": 14, "scrollSnapDestination": 14, "scrollSnapCoordinate": 14, "hyphens": 14, "flowInto": 14, "flowFrom": 14, "breakBefore": 14, "breakAfter": 14, "breakInside": 14, "regionFragment": 14, "gridTemplateColumns": 14, "gridTemplateRows": 14, "gridTemplateAreas": 14, "gridTemplate": 14, "gridAutoColumns": 14, "gridAutoRows": 14, "gridAutoFlow": 14, "grid": 14, "gridRowStart": 14, "gridColumnStart": 14, "gridRowEnd": 14, "gridRow": 14, "gridColumn": 14, "gridColumnEnd": 14, "gridColumnGap": 14, "gridRowGap": 14, "gridArea": 14, "gridGap": 14 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 9.3, "userSelect": 9.3, "backdropFilter": 9.3, "fontKerning": 9.3, "scrollSnapType": 9.3, "scrollSnapPointsX": 9.3, "scrollSnapPointsY": 9.3, "scrollSnapDestination": 9.3, "scrollSnapCoordinate": 9.3, "boxDecorationBreak": 9.3, "clipPath": 9.3, "maskImage": 9.3, "maskMode": 9.3, "maskRepeat": 9.3, "maskPosition": 9.3, "maskClip": 9.3, "maskOrigin": 9.3, "maskSize": 9.3, "maskComposite": 9.3, "mask": 9.3, "maskBorderSource": 9.3, "maskBorderMode": 9.3, "maskBorderSlice": 9.3, "maskBorderWidth": 9.3, "maskBorderOutset": 9.3, "maskBorderRepeat": 9.3, "maskBorder": 9.3, "maskType": 9.3, "textSizeAdjust": 9.3, "textDecorationStyle": 9.3, "textDecorationSkip": 9.3, "textDecorationLine": 9.3, "textDecorationColor": 9.3, "shapeImageThreshold": 9.3, "shapeImageMargin": 9.3, "shapeImageOutside": 9.3, "filter": 9, "hyphens": 9.3, "flowInto": 9.3, "flowFrom": 9.3, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 9.3, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 51, "userSelect": 51, "fontKerning": 4.4, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "filter": 51, "fontFeatureSettings": 4.4, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "and_chr": { "appearance": 51, "userSelect": 51, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "textDecorationStyle": 51, "textDecorationSkip": 51, "textDecorationLine": 51, "textDecorationColor": 51, "filter": 51 }, "and_uc": { "flex": 9.9, "flexBasis": 9.9, "flexDirection": 9.9, "flexGrow": 9.9, "flexFlow": 9.9, "flexShrink": 9.9, "flexWrap": 9.9, "alignContent": 9.9, "alignItems": 9.9, "alignSelf": 9.9, "justifyContent": 9.9, "order": 9.9, "transition": 9.9, "transitionDelay": 9.9, "transitionDuration": 9.9, "transitionProperty": 9.9, "transitionTimingFunction": 9.9, "transform": 9.9, "transformOrigin": 9.9, "transformOriginX": 9.9, "transformOriginY": 9.9, "backfaceVisibility": 9.9, "perspective": 9.9, "perspectiveOrigin": 9.9, "transformStyle": 9.9, "transformOriginZ": 9.9, "animation": 9.9, "animationDelay": 9.9, "animationDirection": 9.9, "animationFillMode": 9.9, "animationDuration": 9.9, "animationIterationCount": 9.9, "animationName": 9.9, "animationPlayState": 9.9, "animationTimingFunction": 9.9, "appearance": 9.9, "userSelect": 9.9, "fontKerning": 9.9, "textEmphasisPosition": 9.9, "textEmphasis": 9.9, "textEmphasisStyle": 9.9, "textEmphasisColor": 9.9, "maskImage": 9.9, "maskMode": 9.9, "maskRepeat": 9.9, "maskPosition": 9.9, "maskClip": 9.9, "maskOrigin": 9.9, "maskSize": 9.9, "maskComposite": 9.9, "mask": 9.9, "maskBorderSource": 9.9, "maskBorderMode": 9.9, "maskBorderSlice": 9.9, "maskBorderWidth": 9.9, "maskBorderOutset": 9.9, "maskBorderRepeat": 9.9, "maskBorder": 9.9, "maskType": 9.9, "textSizeAdjust": 9.9, "filter": 9.9, "hyphens": 9.9, "flowInto": 9.9, "flowFrom": 9.9, "breakBefore": 9.9, "breakAfter": 9.9, "breakInside": 9.9, "regionFragment": 9.9, "fontFeatureSettings": 9.9, "columnCount": 9.9, "columnFill": 9.9, "columnGap": 9.9, "columnRule": 9.9, "columnRuleColor": 9.9, "columnRuleStyle": 9.9, "columnRuleWidth": 9.9, "columns": 9.9, "columnSpan": 9.9, "columnWidth": 9.9 }, "op_mini": {} };
	module.exports = exports["default"];

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = position;

	var _getPrefixedValue = __webpack_require__(439);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function position(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var browser = _ref.browserInfo.browser;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (property === 'position' && value === 'sticky' && (browser === 'safari' || browser === 'ios_saf')) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 439 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (prefixedValue, value, keepUnprefixed) {
	  return keepUnprefixed ? [prefixedValue, value] : prefixedValue;
	};

	module.exports = exports["default"];

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;

	var _getPrefixedValue = __webpack_require__(439);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function calc(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, css + 'calc('), value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = zoomCursor;

	var _getPrefixedValue = __webpack_require__(439);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var values = { 'zoom-in': true, 'zoom-out': true };

	function zoomCursor(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (property === 'cursor' && values[value] && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    return {
	      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = grabCursor;

	var _getPrefixedValue = __webpack_require__(439);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var values = { grab: true, grabbing: true };

	function grabCursor(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var browser = _ref.browserInfo.browser;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  // adds prefixes for firefox, chrome, safari, and opera regardless of version until a reliable brwoser support info can be found (see: https://github.com/rofrischmann/inline-style-prefixer/issues/79)
	  if (property === 'cursor' && values[value] && (browser === 'firefox' || browser === 'chrome' || browser === 'safari' || browser === 'opera')) {
	    return {
	      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;

	var _getPrefixedValue = __webpack_require__(439);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var values = { flex: true, 'inline-flex': true };

	function flex(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (property === 'display' && values[value] && (browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
	    return {
	      display: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;

	var _getPrefixedValue = __webpack_require__(439);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  // This might change in the future
	  // Keep an eye on it
	  if (properties[property] && values[value]) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;

	var _getPrefixedValue = __webpack_require__(439);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (typeof value === 'string' && value.match(values) !== null && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = transition;

	var _hyphenateStyleName = __webpack_require__(430);

	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

	var _unprefixProperty = __webpack_require__(447);

	var _unprefixProperty2 = _interopRequireDefault(_unprefixProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var properties = { transition: true, transitionProperty: true };

	function transition(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var css = _ref.prefix.css;
	  var requiresPrefix = _ref.requiresPrefix;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  // also check for already prefixed transitions
	  var unprefixedProperty = (0, _unprefixProperty2.default)(property);

	  if (typeof value === 'string' && properties[unprefixedProperty]) {
	    var _ret = function () {
	      // TODO: memoize this array
	      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
	        return (0, _hyphenateStyleName2.default)(prop);
	      });

	      // only split multi values, not cubic beziers
	      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	      requiresPrefixDashCased.forEach(function (prop) {
	        multipleValues.forEach(function (val, index) {
	          if (val.indexOf(prop) > -1 && prop !== 'order') {
	            multipleValues[index] = val.replace(prop, css + prop) + (keepUnprefixed ? ',' + val : '');
	          }
	        });
	      });

	      return {
	        v: _defineProperty({}, property, multipleValues.join(','))
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 447 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (property) {
	  var unprefixed = property.replace(/^(ms|Webkit|Moz|O)/, '');
	  return unprefixed.charAt(0).toLowerCase() + unprefixed.slice(1);
	};

	module.exports = exports['default'];

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;

	var _getPrefixedValue = __webpack_require__(439);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: 'flexbox',
	  'inline-flex': 'inline-flexbox'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	function flexboxIE(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var styles = _ref.styles;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if ((alternativeProps[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
	    if (!keepUnprefixed && !Array.isArray(styles[property])) {
	      delete styles[property];
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;

	var _getPrefixedValue = __webpack_require__(439);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
	var properties = Object.keys(alternativeProps).concat(otherProps);

	function flexboxOld(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var styles = _ref.styles;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (!keepUnprefixed && !Array.isArray(styles[property])) {
	      delete styles[property];
	    }
	    if (property === 'flexDirection' && typeof value === 'string') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = callOnce;

	var _warning = __webpack_require__(406);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CALLED_ONCE = 'muiPrepared';

	function callOnce() {
	  if (process.env.NODE_ENV !== 'production') {
	    return function (style) {
	      if (style[CALLED_ONCE]) {
	        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: You cannot call prepareStyles() on the same style object more than once.') : void 0;
	      }
	      style[CALLED_ONCE] = true;
	      return style;
	    };
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(386);

	var _keys2 = _interopRequireDefault(_keys);

	exports.default = rtl;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;

	/**
	 * This function ensures that `style` supports both ltr and rtl directions by
	 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
	 * necessary.
	 */
	function rtl(muiTheme) {
	  if (muiTheme.isRtl) {
	    return function (style) {
	      if (style.directionInvariant === true) {
	        return style;
	      }

	      var flippedAttributes = {
	        // Keys and their replacements.
	        right: 'left',
	        left: 'right',
	        marginRight: 'marginLeft',
	        marginLeft: 'marginRight',
	        paddingRight: 'paddingLeft',
	        paddingLeft: 'paddingRight',
	        borderRight: 'borderLeft',
	        borderLeft: 'borderRight'
	      };

	      var newStyle = {};

	      (0, _keys2.default)(style).forEach(function (attribute) {
	        var value = style[attribute];
	        var key = attribute;

	        if (flippedAttributes.hasOwnProperty(attribute)) {
	          key = flippedAttributes[attribute];
	        }

	        switch (attribute) {
	          case 'float':
	          case 'textAlign':
	            if (value === 'right') {
	              value = 'left';
	            } else if (value === 'left') {
	              value = 'right';
	            }
	            break;

	          case 'direction':
	            if (value === 'ltr') {
	              value = 'rtl';
	            } else if (value === 'rtl') {
	              value = 'ltr';
	            }
	            break;

	          case 'transform':
	            if (!value) break;
	            var matches = void 0;
	            if (matches = value.match(reTranslate)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	            }
	            if (matches = value.match(reSkew)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ', ' + (-parseFloat(matches[7]) + matches[8]) : '');
	            }
	            break;

	          case 'transformOrigin':
	            if (!value) break;
	            if (value.indexOf('right') > -1) {
	              value = value.replace('right', 'left');
	            } else if (value.indexOf('left') > -1) {
	              value = value.replace('left', 'right');
	            }
	            break;
	        }

	        newStyle[key] = value;
	      });

	      return newStyle;
	    };
	  }
	}

/***/ },
/* 452 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = compose;
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(301);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _colors = __webpack_require__(411);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Typography = function Typography() {
	  (0, _classCallCheck3.default)(this, Typography);

	  // text colors
	  this.textFullBlack = _colors.fullBlack;
	  this.textDarkBlack = _colors.darkBlack;
	  this.textLightBlack = _colors.lightBlack;
	  this.textMinBlack = _colors.minBlack;
	  this.textFullWhite = _colors.fullWhite;
	  this.textDarkWhite = _colors.darkWhite;
	  this.textLightWhite = _colors.lightWhite;

	  // font weight
	  this.fontWeightLight = 300;
	  this.fontWeightNormal = 400;
	  this.fontWeightMedium = 500;

	  this.fontStyleButtonFontSize = 14;
	};

	exports.default = new Typography();

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var invariant = __webpack_require__(8);
	var defaultClickRejectionStrategy = __webpack_require__(455);

	var alreadyInjected = false;

	module.exports = function injectTapEventPlugin (strategyOverrides) {
	  strategyOverrides = strategyOverrides || {}
	  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;

	  if (process.env.NODE_ENV !== 'production') {
	    invariant(
	      !alreadyInjected,
	      'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
	It is recommended to call injectTapEventPlugin() just before you call \
	ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
	itself, please contact the maintainer as it shouldn\'t be called in library code and \
	should be injected by the application.'
	    )
	  }

	  alreadyInjected = true;

	  __webpack_require__(42).injection.injectEventPluginsByName({
	    'TapEventPlugin':       __webpack_require__(456)(shouldRejectClick)
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 455 */
/***/ function(module, exports) {

	module.exports = function(lastTouchEvent, clickTimestamp) {
	  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
	    return true;
	  }
	};


/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */

	"use strict";

	var EventConstants = __webpack_require__(457);
	var EventPluginUtils = __webpack_require__(44);
	var EventPropagators = __webpack_require__(41);
	var SyntheticUIEvent = __webpack_require__(75);
	var TouchEventUtils = __webpack_require__(458);
	var ViewportMetrics = __webpack_require__(76);

	var keyOf = __webpack_require__(459);
	var topLevelTypes = EventConstants.topLevelTypes;

	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;

	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    'topTouchCancel',
	    'topTouchEnd',
	    'topTouchStart',
	    'topTouchMove'
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}

	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;

	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};

	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}

	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}

	var touchEvents = [
	  'topTouchStart',
	  'topTouchCancel',
	  'topTouchEnd',
	  'topTouchMove',
	];

	var dependencies = [
	  'topMouseDown',
	  'topMouseMove',
	  'topMouseUp',
	].concat(touchEvents);

	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};

	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();

	function createTapEventPlugin(shouldRejectClick) {
	  return {

	    tapMoveThreshold: tapMoveThreshold,

	    ignoreMouseThreshold: ignoreMouseThreshold,

	    eventTypes: eventTypes,

	    /**
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {DOMEventTarget} targetInst The listening component root node.
	     * @param {object} nativeEvent Native browser event.
	     * @return {*} An accumulation of synthetic events.
	     * @see {EventPluginHub.extractEvents}
	     */
	    extractEvents: function(
	      topLevelType,
	      targetInst,
	      nativeEvent,
	      nativeEventTarget
	    ) {

	      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	        return null;
	      }

	      if (isTouch(topLevelType)) {
	        lastTouchEvent = now();
	      } else {
	        if (shouldRejectClick(lastTouchEvent, now())) {
	          return null;
	        }
	      }

	      var event = null;
	      var distance = getDistance(startCoords, nativeEvent);
	      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	        event = SyntheticUIEvent.getPooled(
	          eventTypes.touchTap,
	          targetInst,
	          nativeEvent,
	          nativeEventTarget
	        );
	      }
	      if (isStartish(topLevelType)) {
	        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	      } else if (isEndish(topLevelType)) {
	        startCoords.x = 0;
	        startCoords.y = 0;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }

	  };
	}

	module.exports = createTapEventPlugin;


/***/ },
/* 457 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = {
	  topAbort: null,
	  topAnimationEnd: null,
	  topAnimationIteration: null,
	  topAnimationStart: null,
	  topBlur: null,
	  topCanPlay: null,
	  topCanPlayThrough: null,
	  topChange: null,
	  topClick: null,
	  topCompositionEnd: null,
	  topCompositionStart: null,
	  topCompositionUpdate: null,
	  topContextMenu: null,
	  topCopy: null,
	  topCut: null,
	  topDoubleClick: null,
	  topDrag: null,
	  topDragEnd: null,
	  topDragEnter: null,
	  topDragExit: null,
	  topDragLeave: null,
	  topDragOver: null,
	  topDragStart: null,
	  topDrop: null,
	  topDurationChange: null,
	  topEmptied: null,
	  topEncrypted: null,
	  topEnded: null,
	  topError: null,
	  topFocus: null,
	  topInput: null,
	  topInvalid: null,
	  topKeyDown: null,
	  topKeyPress: null,
	  topKeyUp: null,
	  topLoad: null,
	  topLoadedData: null,
	  topLoadedMetadata: null,
	  topLoadStart: null,
	  topMouseDown: null,
	  topMouseMove: null,
	  topMouseOut: null,
	  topMouseOver: null,
	  topMouseUp: null,
	  topPaste: null,
	  topPause: null,
	  topPlay: null,
	  topPlaying: null,
	  topProgress: null,
	  topRateChange: null,
	  topReset: null,
	  topScroll: null,
	  topSeeked: null,
	  topSeeking: null,
	  topSelectionChange: null,
	  topStalled: null,
	  topSubmit: null,
	  topSuspend: null,
	  topTextInput: null,
	  topTimeUpdate: null,
	  topTouchCancel: null,
	  topTouchEnd: null,
	  topTouchMove: null,
	  topTouchStart: null,
	  topTransitionEnd: null,
	  topVolumeChange: null,
	  topWaiting: null,
	  topWheel: null
	};

	var EventConstants = {
	  topLevelTypes: topLevelTypes
	};

	module.exports = EventConstants;

/***/ },
/* 458 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */

	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;

	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};

	module.exports = TouchEventUtils;


/***/ },
/* 459 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "styles.css";

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "show-hint.css";

/***/ }
]);