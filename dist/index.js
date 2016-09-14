(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactImageLens"] = factory(require("react"), require("react-dom"));
	else
		root["ReactImageLens"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ImageMagnifier = __webpack_require__(1);

	var _ImageMagnifier2 = _interopRequireDefault(_ImageMagnifier);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ImageMagnifier2.default; /**
	                                             * Created by Freeman on 2016/9/12.
	                                             */

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Magnifier = __webpack_require__(4);

	var _Magnifier2 = _interopRequireDefault(_Magnifier);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 图片放大镜组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Freeman on 2016/9/9.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ImageMagnifier = function (_Component) {
	  _inherits(ImageMagnifier, _Component);

	  function ImageMagnifier(props) {
	    _classCallCheck(this, ImageMagnifier);

	    var _this = _possibleConstructorReturn(this, (ImageMagnifier.__proto__ || Object.getPrototypeOf(ImageMagnifier)).call(this, props));

	    _this.onMouseMove = _this.onMouseMove.bind(_this);
	    _this.portalElement = null;
	    _this.state = {
	      x: 0,
	      y: 0,
	      offsetX: -1,
	      offsetY: -1
	    };
	    return _this;
	  }

	  _createClass(ImageMagnifier, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      document.addEventListener('mousemove', this.onMouseMove);
	      if (!this.portalElement) {
	        this.portalElement = document.createElement('div');
	        document.body.appendChild(this.portalElement);
	      }
	      this.componentDidUpdate();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('mousemove', this.onMouseMove);
	      document.body.removeChild(this.portalElement);
	      this.portalElement = null;
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(e) {
	      var offset = getOffset(this.refs.giraffe);
	      //fix ie scrollX scrollY
	      //fix ff not support e.x e.y
	      this.setState({
	        x: e.clientX + (window.scrollX || window.pageXOffset),
	        y: e.clientY + (window.scrollY || window.pageYOffset),
	        offsetX: e.clientX - offset.x,
	        offsetY: e.clientY - offset.y
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      _reactDom2.default.render(_react2.default.createElement(_Magnifier2.default, _extends({
	        size: this.props.size,
	        smallImage: this.props.image,
	        zoomImage: this.props.zoomImage,
	        cursorOffset: this.props.cursorOffset
	      }, this.state)), this.portalElement);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('img', { src: this.props.image.src, ref: 'giraffe' });
	    }
	  }]);

	  return ImageMagnifier;
	}(_react.Component);

	ImageMagnifier.propTypes = {
	  // the size of the magnifier window
	  size: _react.PropTypes.number,

	  // the offset of the zoom bubble from the cursor
	  cursorOffset: _react.PropTypes.shape({
	    x: _react.PropTypes.number.isRequired,
	    y: _react.PropTypes.number.isRequired
	  }),

	  // the size of the non-zoomed-in image
	  image: _react.PropTypes.shape({
	    src: _react.PropTypes.string.isRequired,
	    width: _react.PropTypes.number.isRequired,
	    height: _react.PropTypes.number.isRequired
	  }).isRequired,

	  // the size of the zoomed-in image
	  zoomImage: _react.PropTypes.shape({
	    src: _react.PropTypes.string.isRequired,
	    width: _react.PropTypes.number.isRequired,
	    height: _react.PropTypes.number.isRequired
	  }).isRequired
	};
	ImageMagnifier.defaultProps = {
	  size: 200,
	  cursorOffset: { x: 0, y: 0 }
	};
	function getOffset(el) {
	  var x = 0;
	  var y = 0;
	  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
	    x += el.offsetLeft - el.scrollLeft;
	    y += el.offsetTop - el.scrollTop;
	    el = el.offsetParent;
	  }
	  return { x: x, y: y };
	}
	exports.default = ImageMagnifier;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Magnifier = function Magnifier(props) {

	  var halfSize = props.size / 2;
	  var magX = props.zoomImage.width / props.smallImage.width;
	  var magY = props.zoomImage.height / props.smallImage.height;
	  var bgX = -(props.offsetX * magX - halfSize);
	  var bgY = -(props.offsetY * magY - halfSize);
	  var isVisible = props.offsetY < props.smallImage.height && props.offsetX < props.smallImage.width && props.offsetY > 0 && props.offsetX > 0;

	  return _react2.default.createElement(
	    'div',
	    { style: {
	        position: 'absolute',
	        display: isVisible ? 'block' : 'none',
	        top: props.y,
	        left: props.x,
	        width: props.size,
	        height: props.size,
	        marginLeft: -halfSize + props.cursorOffset.x,
	        marginTop: -halfSize + props.cursorOffset.y,
	        backgroundColor: 'white',
	        borderRadius: props.size,
	        boxShadow: '1px 1px 6px rgba(0,0,0,0.3)'
	      } },
	    _react2.default.createElement('div', { style: {
	        width: props.size,
	        height: props.size,
	        backgroundImage: 'url(' + props.zoomImage.src + ')',
	        backgroundRepeat: 'no-repeat',
	        backgroundPosition: bgX + 'px ' + bgY + 'px',
	        borderRadius: props.size
	      } })
	  );
	}; /**
	    * Created by Freeman on 2016/9/9.
	    */

	Magnifier.propTypes = {
	  // the size of the magnifier window
	  size: _react.PropTypes.number.isRequired,

	  // x position on screen
	  x: _react.PropTypes.number.isRequired,

	  // y position on screen
	  y: _react.PropTypes.number.isRequired,

	  // x position relative to the image
	  offsetX: _react.PropTypes.number.isRequired,

	  // y position relative to the image
	  offsetY: _react.PropTypes.number.isRequired,

	  // the offset of the zoom bubble from the cursor
	  cursorOffset: _react.PropTypes.shape({
	    x: _react.PropTypes.number.isRequired,
	    y: _react.PropTypes.number.isRequired
	  }).isRequired,

	  // the size of the non-zoomed-in image
	  smallImage: _react.PropTypes.shape({
	    src: _react.PropTypes.string.isRequired,
	    width: _react.PropTypes.number.isRequired,
	    height: _react.PropTypes.number.isRequired
	  }).isRequired,

	  // the size of the zoomed-in image
	  zoomImage: _react.PropTypes.shape({
	    src: _react.PropTypes.string.isRequired,
	    width: _react.PropTypes.number.isRequired,
	    height: _react.PropTypes.number.isRequired
	  }).isRequired
	};

	exports.default = Magnifier;

/***/ }
/******/ ])
});
;