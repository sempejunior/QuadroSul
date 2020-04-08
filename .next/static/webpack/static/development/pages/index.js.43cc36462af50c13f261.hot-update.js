webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Agency/Banner.js":
/*!*************************************!*\
  !*** ./components/Agency/Banner.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _novasImagens_fundo_fundo5_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../novasImagens/fundo/fundo5.png */ "./novasImagens/fundo/fundo5.png");
/* harmony import */ var _novasImagens_fundo_fundo5_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_novasImagens_fundo_fundo5_png__WEBPACK_IMPORTED_MODULE_11__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var Banner =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Banner, _Component);

  function Banner() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Banner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Banner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openModal", function () {
      _this.setState({
        isOpen: true
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Banner, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        id: "home",
        className: "main-banner jarallax",
        "data-jarallax": "{\"speed\": 0.2}",
        style: {
          backgroundImage: "url(".concat(_novasImagens_fundo_fundo5_png__WEBPACK_IMPORTED_MODULE_11___default.a, ")"),
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat'
        }
      }, __jsx("div", {
        className: "d-table"
      }, __jsx("div", {
        className: "d-table-cell"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "main-banner-content"
      }, __jsx("a", {
        className: "navbar-brand"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../imagensQuadroSul/logoTitulo.png */ "./imagensQuadroSul/logoTitulo.png"),
        alt: "logo"
      })), __jsx("p", null, "Empresa especializada na produ\xE7\xE3o de quadros e de outros elementos essenciais para uma boa comunica\xE7\xE3o visual"), __jsx("div", {
        className: "btn-box"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, __jsx("a", {
        className: "popup-youtube video-btn",
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.openModal();
        }
      }, __jsx("i", {
        className: "fab fa-google-play"
      }), "Watch our video")))))))), __jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_9___default.a, {
        channel: "youtube",
        isOpen: this.state.isOpen,
        videoId: "szuchBiLrEM",
        onClose: function onClose() {
          return _this2.setState({
            isOpen: false
          });
        }
      }));
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./novasImagens/fundo/fundo5.png":
/*!***************************************!*\
  !*** ./novasImagens/fundo/fundo5.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./novasImagens/fundo/fundoTeste3.png":
false

})
//# sourceMappingURL=index.js.43cc36462af50c13f261.hot-update.js.map