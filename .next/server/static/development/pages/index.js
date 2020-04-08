module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Agency/Banner.js":
/*!*************************************!*\
  !*** ./components/Agency/Banner.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-video */ "react-modal-video");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novasImagens_fundo_whiteboard1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../novasImagens/fundo/whiteboard1.jpg */ "./novasImagens/fundo/whiteboard1.jpg");
/* harmony import */ var _novasImagens_fundo_whiteboard1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novasImagens_fundo_whiteboard1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _novasImagens_logos_logo6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../novasImagens/logos/logo6.png */ "./novasImagens/logos/logo6.png");
/* harmony import */ var _novasImagens_logos_logo6_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_novasImagens_logos_logo6_png__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Banner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isOpen: false
    });

    _defineProperty(this, "openModal", () => {
      this.setState({
        isOpen: true
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      id: "home",
      className: "main-banner jarallax",
      "data-jarallax": "{\"speed\": 0.2}",
      style: {
        backgroundImage: `url(${_novasImagens_fundo_whiteboard1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a})`,
        backgroundPosition: 'center',
        // backgroundSize: '1700px 1300px',
        backgroundRepeat: 'no-repeat'
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
      src: _novasImagens_logos_logo6_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "logo",
      style: {
        maxWidth: 350
      }
    })), __jsx("p", null, __jsx("strong", null, "Empresa especializada na produ\xE7\xE3o de quadros e de outros elementos essenciais para uma boa comunica\xE7\xE3o visual")), __jsx("div", {
      className: "btn-box"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "popup-youtube video-btn",
      onClick: e => {
        e.preventDefault();
        this.openModal();
      }
    }, __jsx("i", {
      className: "fab fa-google-play"
    }), "Watch our video")))))))), __jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_2___default.a, {
      channel: "youtube",
      isOpen: this.state.isOpen,
      videoId: "szuchBiLrEM",
      onClose: () => this.setState({
        isOpen: false
      })
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Agency/Contact.js":
/*!**************************************!*\
  !*** ./components/Agency/Contact.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Contact extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      id: "contact",
      className: "contact-area ptb-100 bg-f9f9f9"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Contact Us"), __jsx("p", null, "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.")), __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-8 col-md-12"
    }, __jsx("form", {
      id: "contactForm"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Nome"), __jsx("input", {
      type: "text",
      className: "form-control",
      required: true,
      "data-error": "Coloque seu nome"
    }), __jsx("div", {
      className: "help-block with-errors"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Email"), __jsx("input", {
      type: "email",
      className: "form-control",
      required: true,
      "data-error": "Coloque seu email"
    }), __jsx("div", {
      className: "help-block with-errors"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Assunto"), __jsx("input", {
      type: "text",
      className: "form-control",
      required: true,
      "data-error": "Coloque o assunto"
    }), __jsx("div", {
      className: "help-block with-errors"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Telefone para contato"), __jsx("input", {
      type: "text",
      className: "form-control",
      required: true,
      "data-error": "Coloque o telefone"
    }), __jsx("div", {
      className: "help-block with-errors"
    }))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Mensagem"), __jsx("textarea", {
      className: "form-control",
      cols: "30",
      rows: "4",
      required: true,
      "data-error": "Escreva a mensagem"
    }), __jsx("div", {
      className: "help-block with-errors"
    }))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-primary"
    }, "Enviar"), __jsx("div", {
      id: "msgSubmit",
      className: "h3 text-center hidden"
    }), __jsx("div", {
      className: "clearfix"
    }))))), __jsx("div", {
      className: "col-lg-4 col-md-12"
    }, __jsx("div", {
      className: "contact-info-box"
    }, __jsx("ul", null, __jsx("li", null, __jsx("i", {
      className: "fas fa-map-marker-alt"
    }), __jsx("span", null, "Endere\xE7o:"), "Rua Irm\xE3o Inocencio Luis, 670 ", __jsx("br", null), "Bairro: Jardim Itu Sabara ", __jsx("br", null), "Cidade: Porto Alegre / RS ", __jsx("br", null)), __jsx("li", null, __jsx("i", {
      className: "fas fa-envelope"
    }), __jsx("span", null, "Email:"), __jsx("a", {
      href: "#"
    }, "quadrosul@terra.com.br")), __jsx("li", null, __jsx("i", {
      className: "fas fa-phone"
    }), __jsx("span", null, "Telefone:"), __jsx("a", {
      href: "#"
    }, "(51) 3374-3668"), __jsx("a", {
      href: "#"
    }, "(51) 3374-2873"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Agency/Faq.js":
/*!**********************************!*\
  !*** ./components/Agency/Faq.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-accessible-accordion */ "react-accessible-accordion");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Demo styles, see 'Styles' section below for some notes on use.



class Faq extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      id: "faq",
      className: "faq-area ptb-100 bg-f9f9f9"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Frequently Asked ", __jsx("span", null, "Question")), __jsx("p", null, "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "faq-accordion"
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "How do permissions work in Google Play Instant?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "Is Smart Lock required for instant apps?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "Is Smart Lock required for instant apps?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "Is Smart Lock required for instant apps?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "Is Smart Lock required for instant apps?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.")))))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "faq-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/faq-bg.jpg */ "./images/faq-bg.jpg"),
      alt: "img"
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Faq);

/***/ }),

/***/ "./components/Agency/Partner.js":
/*!**************************************!*\
  !*** ./components/Agency/Partner.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    1024: {
      items: 4
    },
    1200: {
      items: 6
    }
  }
};

class Partner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return __jsx("section", {
      className: "partner-area-three"
    }, __jsx("div", {
      className: "container"
    }, __jsx("h3", null, "Nossos clientes"), __jsx("div", {
      className: "row"
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "partner-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/parceiros/clipel.jpg */ "./novasImagens/parceiros/clipel.jpg"),
      alt: "logo"
    }))))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/parceiros/laSalle.jpg */ "./novasImagens/parceiros/laSalle.jpg"),
      alt: "logo"
    }))))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/parceiros/livrariaRossi.jpg */ "./novasImagens/parceiros/livrariaRossi.jpg"),
      alt: "logo"
    }))))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/parceiros/maxplin.jpg */ "./novasImagens/parceiros/maxplin.jpg"),
      alt: "logo"
    }))))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/parceiros/ucs.jpg */ "./novasImagens/parceiros/ucs.jpg"),
      alt: "logo"
    }))))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/parceiros/upf.png */ "./novasImagens/parceiros/upf.png"),
      alt: "logo"
    }))))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/parceiros/multiSports.jpg */ "./novasImagens/parceiros/multiSports.jpg"),
      alt: "logo"
    }))))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/parceiros/unisc.jpg */ "./novasImagens/parceiros/unisc.jpg"),
      alt: "logo"
    }))))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/parceiros/univates.jpg */ "./novasImagens/parceiros/univates.jpg"),
      alt: "logo"
    })))))) : '')));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Partner);

/***/ }),

/***/ "./components/Agency/Portifolio.js":
/*!*****************************************!*\
  !*** ./components/Agency/Portifolio.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-lightbox */ "react-image-lightbox");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const isServer = true;
const mixitup = !isServer ? __webpack_require__(/*! mixitup */ "mixitup") : null;
const images = [__webpack_require__(/*! ../../images/work-img1.jpg */ "./images/work-img1.jpg"), __webpack_require__(/*! ../../images/work-img2.jpg */ "./images/work-img2.jpg"), __webpack_require__(/*! ../../images/work-img3.jpg */ "./images/work-img3.jpg"), __webpack_require__(/*! ../../images/work-img4.jpg */ "./images/work-img4.jpg"), __webpack_require__(/*! ../../images/work-img5.jpg */ "./images/work-img5.jpg"), __webpack_require__(/*! ../../images/work-img6.jpg */ "./images/work-img6.jpg")];

class Works extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      photoIndex: 0,
      isOpen: false
    });
  }

  componentDidMount() {
    mixitup("#mix-wrapper", {
      animation: {
        effects: "fade rotateZ(0deg)",
        duration: 700
      },
      classNames: {
        block: "programs",
        elementFilter: "filter-btn"
      },
      selectors: {
        target: ".mix-target"
      }
    });
  }

  render() {
    const {
      photoIndex,
      isOpen
    } = this.state;
    return __jsx("section", {
      id: "portfolio",
      className: "portfolio-area ptb-100 bg-f9f9f9"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "freelancer-section-title"
    }, __jsx("h2", null, "My Latest ", __jsx("span", null, "Work")), __jsx("p", null, "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "shorting-menu"
    }, __jsx("button", {
      className: "filter",
      "data-filter": "all"
    }, "All"), __jsx("button", {
      className: "filter",
      "data-filter": ".design"
    }, "Design"), __jsx("button", {
      className: "filter",
      "data-filter": ".seo"
    }, "SEO"), __jsx("button", {
      className: "filter",
      "data-filter": ".branding"
    }, "Branding"), __jsx("button", {
      className: "filter",
      "data-filter": ".print"
    }, "Print"), __jsx("button", {
      className: "filter",
      "data-filter": ".video"
    }, "Video")))), __jsx("div", {
      className: "shorting"
    }, __jsx("div", {
      className: "row",
      id: "mix-wrapper"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6 mix design mix-target"
    }, __jsx("div", {
      className: "single-work"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          photoIndex: 0,
          isOpen: true
        });
      }
    })), __jsx("div", {
      className: "work-image"
    }, __jsx("img", {
      src: images[0],
      alt: "work-image"
    }), __jsx("div", {
      className: "work-overlay"
    }, __jsx("h3", null, "Digital Marketing"), __jsx("span", null, "UI/UX"))))), __jsx("div", {
      className: "col-lg-4 col-md-6 mix print seo mix-target"
    }, __jsx("div", {
      className: "single-work"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          photoIndex: 1,
          isOpen: true
        });
      }
    })), __jsx("div", {
      className: "work-image"
    }, __jsx("img", {
      src: images[1],
      alt: "work-image"
    }), __jsx("div", {
      className: "work-overlay"
    }, __jsx("h3", null, "Digital Marketing"), __jsx("span", null, "UI/UX"))))), __jsx("div", {
      className: "col-lg-4 col-md-6 mix video branding mix-target"
    }, __jsx("div", {
      className: "single-work"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          photoIndex: 2,
          isOpen: true
        });
      }
    })), __jsx("div", {
      className: "work-image"
    }, __jsx("img", {
      src: images[2],
      alt: "work-image"
    }), __jsx("div", {
      className: "work-overlay"
    }, __jsx("h3", null, "Digital Marketing"), __jsx("span", null, "UI/UX"))))), __jsx("div", {
      className: "col-lg-4 col-md-6 mix design print mix-target"
    }, __jsx("div", {
      className: "single-work"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          photoIndex: 3,
          isOpen: true
        });
      }
    })), __jsx("div", {
      className: "work-image"
    }, __jsx("img", {
      src: images[3],
      alt: "work-image"
    }), __jsx("div", {
      className: "work-overlay"
    }, __jsx("h3", null, "Digital Marketing"), __jsx("span", null, "UI/UX"))))), __jsx("div", {
      className: "col-lg-4 col-md-6 mix branding video mix-target"
    }, __jsx("div", {
      className: "single-work"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          photoIndex: 4,
          isOpen: true
        });
      }
    })), __jsx("div", {
      className: "work-image"
    }, __jsx("img", {
      src: images[4],
      alt: "work-image"
    }), __jsx("div", {
      className: "work-overlay"
    }, __jsx("h3", null, "Digital Marketing"), __jsx("span", null, "UI/UX"))))), __jsx("div", {
      className: "col-lg-4 col-md-6 mix seo design mix-target"
    }, __jsx("div", {
      className: "single-work"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          photoIndex: 5,
          isOpen: true
        });
      }
    })), __jsx("div", {
      className: "work-image"
    }, __jsx("img", {
      src: images[5],
      alt: "work-image"
    }), __jsx("div", {
      className: "work-overlay"
    }, __jsx("h3", null, "Digital Marketing"), __jsx("span", null, "UI/UX")))))))), isOpen && __jsx(react_image_lightbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
      mainSrc: images[photoIndex],
      nextSrc: images[(photoIndex + 1) % images.length],
      prevSrc: images[(photoIndex + images.length - 1) % images.length],
      imageTitle: photoIndex + 1 + "/" + images.length,
      onCloseRequest: () => this.setState({
        isOpen: false
      }),
      onMovePrevRequest: () => this.setState({
        photoIndex: (photoIndex + images.length - 1) % images.length
      }),
      onMoveNextRequest: () => this.setState({
        photoIndex: (photoIndex + 1) % images.length
      })
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Works);

/***/ }),

/***/ "./components/Agency/Services.js":
/*!***************************************!*\
  !*** ./components/Agency/Services.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Services extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      id: "services",
      className: "services-area-two ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "car-subscription-section-title"
    }, __jsx("span", null, "Nossos produtos"), __jsx("h2", null, "Trabalhamos com todos os tipos de solu\xE7oes para melhor atende-los"), __jsx("img", {
      src: __webpack_require__(/*! ../../images/car-icon.png */ "./images/car-icon.png"),
      alt: "services"
    })), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/2.jpg */ "./novasImagens/quadros/2.jpg"),
      alt: "services"
    }), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "QUADRO BRANCO N\xC3O MAGN\xC9TICO"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/3.jpg */ "./novasImagens/quadros/3.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "QUADRO BRANCO MAGN\xC9TICO"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/4.jpg */ "./novasImagens/quadros/4.jpg"),
      alt: "services"
    }), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "Choice"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/5.jpg */ "./novasImagens/quadros/5.jpg"),
      alt: "services"
    }), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "Insurance"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/6.jpg */ "./novasImagens/quadros/6.jpg"),
      alt: "services"
    }), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "Service & Registration"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/7.jpg */ "./novasImagens/quadros/7.jpg"),
      alt: "services"
    }), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/8.jpg */ "./novasImagens/quadros/8.jpg"),
      alt: "services"
    }), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/9.jpg */ "./novasImagens/quadros/9.jpg"),
      alt: "services"
    }), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/10.jpg */ "./novasImagens/quadros/10.jpg"),
      alt: "services"
    }), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/11.jpg */ "./novasImagens/quadros/11.jpg"),
      alt: "services"
    }), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/12.jpg */ "./novasImagens/quadros/12.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/13.jpg */ "./novasImagens/quadros/13.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/14.jpg */ "./novasImagens/quadros/14.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/15.jpg */ "./novasImagens/quadros/15.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/16.jpg */ "./novasImagens/quadros/16.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/17.jpg */ "./novasImagens/quadros/17.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/18.jpg */ "./novasImagens/quadros/18.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/19.jpg */ "./novasImagens/quadros/19.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/20.jpg */ "./novasImagens/quadros/20.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/21.jpg */ "./novasImagens/quadros/21.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/22.jpg */ "./novasImagens/quadros/22.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/24.jpg */ "./novasImagens/quadros/24.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/quadroAzul.jpg */ "./novasImagens/quadros/quadroAzul.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "services-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/quadros/16.jpg */ "./novasImagens/quadros/16.jpg"),
      alt: "services"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("div", {
      className: "services-content"
    }, __jsx("h3", null, "No Surprises"), __jsx("p", null, "This should be used to tell a story and talk about your product.")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./components/Agency/Sobre.js":
/*!************************************!*\
  !*** ./components/Agency/Sobre.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class About extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      id: "about",
      className: "about-area ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "about-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../novasImagens/trabalho/IMG-20200217-WA0030.jpg */ "./novasImagens/trabalho/IMG-20200217-WA0030.jpg"),
      alt: "image"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "about-content"
    }, __jsx("h2", null, "Sobre N\xF3s"), __jsx("p", null, "A Quadrosul \xE9 uma empresa especializada na produ\xE7\xE3o de quadros e de outros elementos essenciais para uma boa comunica\xE7\xE3o visual. A tradi\xE7\xE3o no modo de produzir vem de seus mais 30 anos de mercado. N\xF3s produzimos quadros escolares, cavaletes, e demais acess\xF3rios e servi\xE7os com moldura, sempre com as melhores mat\xE9rias-primas. A qualidade da marca tamb\xE9m se d\xE1 pelo excelente acabamento, em cada detalhe."), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "single-inner-content"
    }, __jsx("div", {
      className: "title"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      class: "fas fa-radiation-alt"
    })), __jsx("h3", null, "Miss\xE3o")), __jsx("p", null, "Atender nossos clientes de uma forma cordial, acatando as suas necessidades e superando suas expectativas, oferecendo-lhes produtos e servi\xE7os de alta qualidade, sempre mantendo o mesmo padr\xE3o de desenvolver, produzir e comercializar quadros, mantendo a satisfa\xE7\xE3o do cliente em cada atendimento prestado."))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "single-inner-content"
    }, __jsx("div", {
      className: "title"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      class: "far fa-eye"
    })), __jsx("h3", null, "Vis\xE3o")), __jsx("p", null, "Ser uma empresa referencia no mercado de quadros escolares, ganhar destaque pela qualidade dos produtos ofertados, ser reconhecida como a melhor op\xE7\xE3o pelos seus clientes, colaboladores e fornecedores pelos servi\xE7os prestados e seus relacionamentos como um todos."))), __jsx("div", {
      className: "col-lg-12 col-md-6"
    }, __jsx("div", {
      className: "single-inner-content"
    }, __jsx("div", {
      className: "title"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      class: "fas fa-dollar-sign"
    })), __jsx("h3", null, "Valores")), __jsx("p", null, "-Fidelizar clientes;  ", __jsx("br", null), "-Apoiar e sustentar um bom relacionamento entre nossos colaboladores e todos que participam do nosso dia a dia; ", __jsx("br", null), "-Manter a \xE9tica, transparencia e comprometimento da nossa empresa; ", __jsx("br", null), "-Satisfa\xE7\xE3o dos nossos clientes;", __jsx("br", null), "-Valoriza\xE7\xE3o e respeito com todas as pessoas que conosco convivem; ", __jsx("br", null), "-Ter responsabilidade social e respeito ao meio ambiente. ", __jsx("br", null))))))))), __jsx("div", {
      className: "circle"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/circle.png */ "./images/circle.png"),
      alt: "cricle"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/Agency/Subscribe.js":
/*!****************************************!*\
  !*** ./components/Agency/Subscribe.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Subscribe extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "subscribe-area ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "subscribe-content"
    }, __jsx("h2", null, "Subscribe our Newsletter"), __jsx("p", null, "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), __jsx("form", {
      className: "newsletter-form",
      "data-toggle": "validator"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-8 col-md-8"
    }, __jsx("input", {
      type: "email",
      className: "form-control",
      placeholder: "Email address",
      name: "EMAIL",
      required: true,
      autoComplete: "off"
    })), __jsx("div", {
      className: "col-lg-4 col-md-4"
    }, __jsx("button", {
      type: "submit"
    }, "Subscribe"), __jsx("div", {
      id: "validator-newsletter",
      className: "form-result"
    })))))), __jsx("div", {
      className: "rocket"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/rocket.png */ "./images/rocket.png"),
      alt: "rocket"
    })), __jsx("div", {
      className: "map"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/map.png */ "./images/map.png"),
      alt: "map"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ }),

/***/ "./components/Agency/Testimonials.js":
/*!*******************************************!*\
  !*** ./components/Agency/Testimonials.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
};

class Testimonials extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return __jsx("section", {
      id: "testimonials",
      className: "feedback-area ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Our customer feedback"), __jsx("p", null, "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.")), __jsx("div", {
      className: "row"
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "feedback-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "feedback-item"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/client1.png */ "./images/client1.png"),
      alt: "client"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), __jsx("div", {
      className: "client-info"
    }, __jsx("h3", null, "Jason Sthatham"), __jsx("span", null, "CEO ThemeForest")), __jsx("i", {
      className: "fas fa-quote-left"
    }))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "feedback-item"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/client2.png */ "./images/client2.png"),
      alt: "client"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), __jsx("div", {
      className: "client-info"
    }, __jsx("h3", null, "Steven Smith"), __jsx("span", null, "CEO EnvyTheme")), __jsx("i", {
      className: "fas fa-quote-left"
    }))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "feedback-item"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/client3.png */ "./images/client3.png"),
      alt: "client"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), __jsx("div", {
      className: "client-info"
    }, __jsx("h3", null, "David Warner"), __jsx("span", null, "CEO Company")), __jsx("i", {
      className: "fas fa-quote-left"
    })))) : '')));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

/***/ }),

/***/ "./components/Layouts/Footer.js":
/*!**************************************!*\
  !*** ./components/Layouts/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("footer", {
      className: "footer-area bg-fffcf4"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/agency"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/black-logo.png */ "./images/black-logo.png"),
      alt: "logo"
    })))), __jsx("ul", {
      className: "contact-info"
    }, __jsx("li", null, "1828 Johns Drive Glenview, IL 60025"), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "(224) 228-8475"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "support@pluck.com"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "www.pluck.com")))))), __jsx("div", {
      className: "col-lg-2 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget pl-3"
    }, __jsx("h3", null, "Quick Links"), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Home"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Features"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Screenshots"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Pricing"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "News")))))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget pl-5"
    }, __jsx("h3", null, "Support"), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Quick Support"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Privacy Policy"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Copyright"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Terms & Conditions"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Testimonials")))))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "My Account"), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Managed Account"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Create Account"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Download Software"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Support Center"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Account Security")))))))), __jsx("div", {
      className: "copyright-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-7 col-md-7"
    }, __jsx("p", null, __jsx("i", {
      className: "far fa-copyright"
    }), " 2019 ", __jsx("a", {
      href: "/"
    }, "Genial"), ". All Rights Reserved")), __jsx("div", {
      className: "col-lg-5 col-md-5"
    }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-facebook-f"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-instagram"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-linkedin-in"
    }))))))))), __jsx("div", {
      className: "map2"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/map2.png */ "./images/map2.png"),
      alt: "map"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layouts/Navbar.js":
/*!**************************************!*\
  !*** ./components/Layouts/Navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SeoSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SeoSection */ "./components/Layouts/SeoSection.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      collapsed: true
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });

    _defineProperty(this, "menuActiveClass", () => {
      let mainNavLinks = document.querySelectorAll("nav ul li a");
      window.addEventListener("scroll", () => {
        let fromTop = window.scrollY;
        mainNavLinks.forEach(link => {
          if (link.hash) {
            let section = document.querySelector(link.hash);

            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          }
        });
      });
    });
  }

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    elementId.classList.add("is-sticky"); // document.addEventListener("scroll", () => {
    //     // if (window.scrollY > 170) {
    //     // } else {
    //     //     elementId.classList.remove("is-sticky");
    //     // }
    // });

    window.scrollTo(0, 0);
    this.menuActiveClass();
  }

  render() {
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SeoSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Quadro Sul",
      desc: "Quadrosul Ind\xFAstria e Com\xE9rcio de Quadros Ltda",
      url: "https://genial-react.envytheme.com/agency"
    }), __jsx("nav", {
      id: "navbar",
      className: "navbar navbar-expand-lg navbar-style-one navbar-light bg-light"
    }, __jsx("div", {
      className: "container"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/agency"
    }, __jsx("a", {
      className: "navbar-brand"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../imagensQuadroSul/logo.png */ "./imagensQuadroSul/logo.png"),
      alt: "logo"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../imagensQuadroSul/logo.png */ "./imagensQuadroSul/logo.png"),
      alt: "logo"
    }))), __jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, __jsx("span", {
      className: "navbar-toggler-icon"
    })), __jsx("div", {
      className: classOne,
      id: "navbarSupportedContent"
    }, __jsx("ul", {
      className: "navbar-nav ml-auto"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: this.toggleNavbar,
      offset: () => 100,
      className: "nav-link active",
      href: "#home"
    }, "Home")), __jsx("li", {
      className: "nav-item"
    }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: this.toggleNavbar,
      offset: () => 0,
      className: "nav-link",
      href: "#about"
    }, "Sobre n\xF3s")), __jsx("li", {
      className: "nav-item"
    }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: this.toggleNavbar,
      offset: () => -10,
      className: "nav-link",
      href: "#services"
    }, "Servi\xE7os")), __jsx("li", {
      className: "nav-item"
    }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: this.toggleNavbar,
      offset: () => -10,
      className: "nav-link",
      href: "#testimonials"
    }, "Coment\xE1rios")), __jsx("li", {
      className: "nav-item"
    }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: this.toggleNavbar,
      offset: () => -10,
      className: "nav-link",
      href: "#faq"
    }, "D\xFAvidas Frequentes")), __jsx("li", {
      className: "nav-item"
    }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: this.toggleNavbar,
      offset: () => -10,
      className: "nav-link",
      href: "#contact"
    }, "Contact"))), __jsx("ul", {
      className: "others-option"
    }, __jsx("li", null, __jsx("a", {
      href: "/signin",
      className: "btn btn-primary"
    }, "sign in")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layouts/SeoSection.js":
/*!******************************************!*\
  !*** ./components/Layouts/SeoSection.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  desc,
  url
}) => __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
  title: title,
  description: desc,
  canonical: "https://www.canonical.ie/",
  openGraph: {
    url: url,
    title: title,
    description: desc
  }
}));

/***/ }),

/***/ "./imagensQuadroSul/logo.png":
/*!***********************************!*\
  !*** ./imagensQuadroSul/logo.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-8ba77b65835fcd9bdfc8eed52ed86787.png";

/***/ }),

/***/ "./images/black-logo.png":
/*!*******************************!*\
  !*** ./images/black-logo.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/car-icon.png":
/*!*****************************!*\
  !*** ./images/car-icon.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzlCN0MxODk2MEJGMTFFOUE2ODBFOThFMUExMEQzQzEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzlCN0MxODg2MEJGMTFFOUE2ODBFOThFMUExMEQzQzEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzBiZTEwYTAtYmUxNi04MTQyLTg0ZTUtMDE1MDkyNjc5OGVkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqgqvYAAAAVsSURBVHja1JgLTFZlGMcP9KkEigZqy8lC3bJwYmu6dMQqtQsl09yy8jJZWoEXTNu8NaerMbsxWReyVkPtIior0WrCLDVNRzNKSpaJiSFYakp4xU/F/zP/hz17d4DzxTnj89l+e8/3fuc753/e77mdN2LjvqDlg90GvgWjwLHWThybHAj54pGWPzYc3MXRc/NDdDRYzOPF/By2opMpshwkgSyO5ZxPDkfR00EOGAg2g484DuT89HAUnQ1iwQLwJNjLcQHns726UcBjdzsD3gC9wUsgl5/DPhDFvjDGG0K0uMZMjr6KltRUAgZ4cN1LIJ9ju6y44vIAUAKinUQPAw+DNCu8LI26hulAjACDQB7nXga/gh/A5Y5SipUVbSnUI5aHuSkY98tKl1HkEJAOOoHt4ASIUtd5GuwD0qw0eQWEXAA7QKoSHMX7b6eedOoTnWURaJhGcnIGqKFPfwq+Aut4ncngE/Al2OKFryqLAZPAUJCKBqqMwp/CMIb3PgQSGCebI1SXlwne5xcz1UXFfarAL2AbmOdx1mnkNd8EByF6rOEm73FBs/DdSrO4bKLgYoeOrT+YBTaA79hPeBloy4EIegsi4yDulNbNPmaTU0WsA4ngL+Oik/jdLfwrXwR/eii6nMIkXm5i6f9A9duleJBEjHXNf30bLwEBCl4D7gTxYITHiaIz+JtC75Hgh8D721MRR4Ne4GvwCPjM69QGgZfods+AtRKMWNmE9ogW1zjA9lICcr1PaflzcDv/1UY+wP8SfTN4gqsr4reC4z6J3gmOgnHswSe25bODwUYGgW25TO4xTPCvgFfB3T5UPvtwF4NQUm8R5pOY6sao089JNguwmEhKex1cBI+BqfyrJNH35Q+WEL/tCKinhgwu2l5mNpmL1ylPCst//EEu3+mWgVJwn09trKzcVbpigJW2ioGfzTbibfAjNUy11Ili1Q7+nkP8sjlMdfVGn6OtxPgcDHAlH2e+FLsXLOTFtvgoWFZ4J1JeI/z3IRz3NL7PZEs6i64qdhrn15rFpRt7jH/ZFgb9duCWdpjwIFIfKsBvIh7nNbWU8t4FtzLlBK0ONIg8wUAczZdky6mMp7MpeRYUcC6BpVvbH+C8h/rieR9ttRQtK76CqW8Q5qrMhmkONw0L1NzPDqJfA4uMucFcke6tiDvOwlFjzK9mTGmTNPcgjxcyf2fZK65F93foLaSBiaOvB5nHq4xzlrD4XGijYvYBsmpTjHYgg7UgRqXBOuUmEqg/6RfuSCPFXVGf+1KMPPX3YA8bmmnqdyN4Tg53kRJbIY4t6Cpu5tg7APPolrvIN2A+hHZTWprc7DD1oEhJg+/w3SyGnV4enzqbcWBvPha58N8eLCTyilfIIiIP/jHYzTQ4nK6QAuEpWOmrbrfF0rjSiSyrthXQPeZStKxUA2/mxuo5SiHpBx6Qjg7CCtU5ayF2K1dfevhKt6IPqO2Epdb13XxpTVMZFL+rcw+zO3NrTSow5SFegMgKCK9ktrgDw2xwVvu2G9HlfLmVHuQ5cBJ05QpVGq1jkkML4LbvGM9eej/ENnA+lvebgAepD3XXNJ9bCI+yQb/IarnDCNhTDC63tlQdb2PWGsUNI/tfLoXg8263eqMYLLZdYbCYpd62Luy780IUHW3cx84cze+NWPnO6nMnXaF1RazmioarFWP1x5krfZhBMjfMxHah+9U4uccKJv8JzKENYSC4JxNCJF9SrJZ2mGa09TbcAZZpp0SnQJSgquWrjWUESlGIAReqfcjxeTUXy52nf1rLHo3MxxnGfFc+ULXXSu2XAGSL09zOzTCymWX29qboQiZ8U/RBfuen5dNvzXuXsmlrtmsCDAAcPKcihKN8bAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/circle.png":
/*!***************************!*\
  !*** ./images/circle.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/circle-7a4341a83567d21e76228244892671dc.png";

/***/ }),

/***/ "./images/client1.png":
/*!****************************!*\
  !*** ./images/client1.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAClBAMAAADPBSDpAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACWklEQVRoge2YTW/aQBCGX5s19tGbGMPRED5yNKCUqyFp1SNtIs6QQsnRcEA9GiLxu7vjGmwEldJVq+Ywj7S72tn1o2HGvgAwDMMwDMMwDMMwDMMwDMMwDMMwb8eM4DRCzOT1WawsZajl3EYYLVpo9wdnMfNbP9ZRvsoIE6xxeyFmJlpZYjOLsISAl+5WSamZx4xIz0kP1j7EovadkjKnw/ExhuH+Rdt5LauOlDW1sWu9PIatlImmU/gPz3blc5t2z9U8htXTbqrrrGGLSA3FdlqICTiuphNu2o20I6vgJJa1TsPZxNBOMKRdu5LH8ANCO887TEqBeiMBy+tGxxh6sKa6zm2/6viP1PdhOAyPMWwX3UTXaTdi7Hz6DLtRyctjTn2ppWQYhmEYhmEYhmEYhmHeLW423oXTkDfRm5wG7aSUrhEA9XQLiJ4fQ8z8CFeA6R6v3v/uP+wLTpqNF9izzDl6ckI1fWzCT7DJnSIoNUI0EYsAX2+ASj1dei26UlFHS3Wl6NygvMqcd9n0iOoUy6Jz8rDAQLh2aM3vx/AjWqz5J7riq6MdSuOi00x2RuZsZtMI7q0TFH97U8VerU4pMSOVkQda1KArnjoqx6O08KqWqdOeLg9ON5sMuJtyfHSqHtFV09yb9JxLyVAnDvU04ASDk3qiE1zI01wjz5OCKplNea8STB+kpZAnWsGp88vYOKuna1VOnFRPq2O3YM9FqE5oKdQTq/jUSePXnPe9+JLQGfXd8YQHrK8SOqEl7zvWuOBM6yO6h/fzTz+Qf/CvrB38facqBMP8F34CF5xizstFoYAAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/client2.png":
/*!****************************!*\
  !*** ./images/client2.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAClBAMAAADPBSDpAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACWklEQVRoge2YTW/aQBCGX5s19tGbGMPRED5yNKCUqyFp1SNtIs6QQsnRcEA9GiLxu7vjGmwEldJVq+Ywj7S72tn1o2HGvgAwDMMwDMMwDMMwDMMwDMMwDMMwb8eM4DRCzOT1WawsZajl3EYYLVpo9wdnMfNbP9ZRvsoIE6xxeyFmJlpZYjOLsISAl+5WSamZx4xIz0kP1j7EovadkjKnw/ExhuH+Rdt5LauOlDW1sWu9PIatlImmU/gPz3blc5t2z9U8htXTbqrrrGGLSA3FdlqICTiuphNu2o20I6vgJJa1TsPZxNBOMKRdu5LH8ANCO887TEqBeiMBy+tGxxh6sKa6zm2/6viP1PdhOAyPMWwX3UTXaTdi7Hz6DLtRyctjTn2ppWQYhmEYhmEYhmEYhmHeLW423oXTkDfRm5wG7aSUrhEA9XQLiJ4fQ8z8CFeA6R6v3v/uP+wLTpqNF9izzDl6ckI1fWzCT7DJnSIoNUI0EYsAX2+ASj1dei26UlFHS3Wl6NygvMqcd9n0iOoUy6Jz8rDAQLh2aM3vx/AjWqz5J7riq6MdSuOi00x2RuZsZtMI7q0TFH97U8VerU4pMSOVkQda1KArnjoqx6O08KqWqdOeLg9ON5sMuJtyfHSqHtFV09yb9JxLyVAnDvU04ASDk3qiE1zI01wjz5OCKplNea8STB+kpZAnWsGp88vYOKuna1VOnFRPq2O3YM9FqE5oKdQTq/jUSePXnPe9+JLQGfXd8YQHrK8SOqEl7zvWuOBM6yO6h/fzTz+Qf/CvrB38facqBMP8F34CF5xizstFoYAAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/client3.png":
/*!****************************!*\
  !*** ./images/client3.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAClBAMAAADPBSDpAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACWklEQVRoge2YTW/aQBCGX5s19tGbGMPRED5yNKCUqyFp1SNtIs6QQsnRcEA9GiLxu7vjGmwEldJVq+Ywj7S72tn1o2HGvgAwDMMwDMMwDMMwDMMwDMMwDMMwb8eM4DRCzOT1WawsZajl3EYYLVpo9wdnMfNbP9ZRvsoIE6xxeyFmJlpZYjOLsISAl+5WSamZx4xIz0kP1j7EovadkjKnw/ExhuH+Rdt5LauOlDW1sWu9PIatlImmU/gPz3blc5t2z9U8htXTbqrrrGGLSA3FdlqICTiuphNu2o20I6vgJJa1TsPZxNBOMKRdu5LH8ANCO887TEqBeiMBy+tGxxh6sKa6zm2/6viP1PdhOAyPMWwX3UTXaTdi7Hz6DLtRyctjTn2ppWQYhmEYhmEYhmEYhmHeLW423oXTkDfRm5wG7aSUrhEA9XQLiJ4fQ8z8CFeA6R6v3v/uP+wLTpqNF9izzDl6ckI1fWzCT7DJnSIoNUI0EYsAX2+ASj1dei26UlFHS3Wl6NygvMqcd9n0iOoUy6Jz8rDAQLh2aM3vx/AjWqz5J7riq6MdSuOi00x2RuZsZtMI7q0TFH97U8VerU4pMSOVkQda1KArnjoqx6O08KqWqdOeLg9ON5sMuJtyfHSqHtFV09yb9JxLyVAnDvU04ASDk3qiE1zI01wjz5OCKplNea8STB+kpZAnWsGp88vYOKuna1VOnFRPq2O3YM9FqE5oKdQTq/jUSePXnPe9+JLQGfXd8YQHrK8SOqEl7zvWuOBM6yO6h/fzTz+Qf/CvrB38facqBMP8F34CF5xizstFoYAAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/faq-bg.jpg":
/*!***************************!*\
  !*** ./images/faq-bg.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/faq-bg-44ae83caaf0b09932d17613431b76fea.jpg";

/***/ }),

/***/ "./images/map.png":
/*!************************!*\
  !*** ./images/map.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-2f9be5ade8974cbfcf3bccdaec87082d.png";

/***/ }),

/***/ "./images/map2.png":
/*!*************************!*\
  !*** ./images/map2.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map2-39fb2c0187172150d8f66690a3be0dcd.png";

/***/ }),

/***/ "./images/rocket.png":
/*!***************************!*\
  !*** ./images/rocket.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/rocket-9d16d80294b65bab663e9d5522e379a4.png";

/***/ }),

/***/ "./images/work-img1.jpg":
/*!******************************!*\
  !*** ./images/work-img1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/work-img1-6c4cc116c092f8bee84c55ebed0761b9.jpg";

/***/ }),

/***/ "./images/work-img2.jpg":
/*!******************************!*\
  !*** ./images/work-img2.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/work-img2-6c4cc116c092f8bee84c55ebed0761b9.jpg";

/***/ }),

/***/ "./images/work-img3.jpg":
/*!******************************!*\
  !*** ./images/work-img3.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/work-img3-6c4cc116c092f8bee84c55ebed0761b9.jpg";

/***/ }),

/***/ "./images/work-img4.jpg":
/*!******************************!*\
  !*** ./images/work-img4.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/work-img4-6c4cc116c092f8bee84c55ebed0761b9.jpg";

/***/ }),

/***/ "./images/work-img5.jpg":
/*!******************************!*\
  !*** ./images/work-img5.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/work-img5-6c4cc116c092f8bee84c55ebed0761b9.jpg";

/***/ }),

/***/ "./images/work-img6.jpg":
/*!******************************!*\
  !*** ./images/work-img6.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/work-img6-6c4cc116c092f8bee84c55ebed0761b9.jpg";

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-modal-video/scss/modal-video.scss":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal-video/scss/modal-video.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./novasImagens/fundo/whiteboard1.jpg":
/*!********************************************!*\
  !*** ./novasImagens/fundo/whiteboard1.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/whiteboard1-deb44aa807a7b2d2cedc927502621f0a.jpg";

/***/ }),

/***/ "./novasImagens/logos/logo6.png":
/*!**************************************!*\
  !*** ./novasImagens/logos/logo6.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo6-6b8835d7314db7bc01114f43b3e16acb.png";

/***/ }),

/***/ "./novasImagens/parceiros/clipel.jpg":
/*!*******************************************!*\
  !*** ./novasImagens/parceiros/clipel.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/clipel-58e79db3b68e372154d9e01b40c23530.jpg";

/***/ }),

/***/ "./novasImagens/parceiros/laSalle.jpg":
/*!********************************************!*\
  !*** ./novasImagens/parceiros/laSalle.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/laSalle-cbf8b800862a8c45811db68ea1e1e4fa.jpg";

/***/ }),

/***/ "./novasImagens/parceiros/livrariaRossi.jpg":
/*!**************************************************!*\
  !*** ./novasImagens/parceiros/livrariaRossi.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/livrariaRossi-05dbe29dd93a852fdf48d5b71ddb96da.jpg";

/***/ }),

/***/ "./novasImagens/parceiros/maxplin.jpg":
/*!********************************************!*\
  !*** ./novasImagens/parceiros/maxplin.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./novasImagens/parceiros/multiSports.jpg":
/*!************************************************!*\
  !*** ./novasImagens/parceiros/multiSports.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./novasImagens/parceiros/ucs.jpg":
/*!****************************************!*\
  !*** ./novasImagens/parceiros/ucs.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ucs-6fd0f688fa5f415b7458d69e6145563c.jpg";

/***/ }),

/***/ "./novasImagens/parceiros/unisc.jpg":
/*!******************************************!*\
  !*** ./novasImagens/parceiros/unisc.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/unisc-36ecc6ddeb1386a9eac0037985cfa897.jpg";

/***/ }),

/***/ "./novasImagens/parceiros/univates.jpg":
/*!*********************************************!*\
  !*** ./novasImagens/parceiros/univates.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/univates-94f061cda161bc29a6a818a3815c64dc.jpg";

/***/ }),

/***/ "./novasImagens/parceiros/upf.png":
/*!****************************************!*\
  !*** ./novasImagens/parceiros/upf.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./novasImagens/quadros/10.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/10.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/10-f414a8bd0021a379ec8e82e682dcb0ae.jpg";

/***/ }),

/***/ "./novasImagens/quadros/11.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/11.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/11-7da21499b1cc75fa982fd3d6f992844c.jpg";

/***/ }),

/***/ "./novasImagens/quadros/12.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/12.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/12-f3372f308e4eab609f5759b0b3c498f3.jpg";

/***/ }),

/***/ "./novasImagens/quadros/13.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/13.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/13-02c3d619fdcac507f85648ce37f98eed.jpg";

/***/ }),

/***/ "./novasImagens/quadros/14.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/14.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/14-29107020b86cc24ba5f4db2bfe536115.jpg";

/***/ }),

/***/ "./novasImagens/quadros/15.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/15.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/15-0d89ec13f0eb92fd4ae93f3b207c0acd.jpg";

/***/ }),

/***/ "./novasImagens/quadros/16.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/16.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/16-f562e492dd54697089d8f107de8fa6b1.jpg";

/***/ }),

/***/ "./novasImagens/quadros/17.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/17.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/17-abf2f415b8b8350afaf1fa8010470d43.jpg";

/***/ }),

/***/ "./novasImagens/quadros/18.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/18.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/18-05370fec91aea76c6941fea17659b92e.jpg";

/***/ }),

/***/ "./novasImagens/quadros/19.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/19.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/19-69e1398b7a89faddacd808112e3d0bf2.jpg";

/***/ }),

/***/ "./novasImagens/quadros/2.jpg":
/*!************************************!*\
  !*** ./novasImagens/quadros/2.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-a9ec4371e83ee7a21108fe0d68afc736.jpg";

/***/ }),

/***/ "./novasImagens/quadros/20.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/20.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20-37b83165df385f3d89c8d4eef40ea0aa.jpg";

/***/ }),

/***/ "./novasImagens/quadros/21.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/21.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/21-8f1d52b44471e1642f3cfac8109149a4.jpg";

/***/ }),

/***/ "./novasImagens/quadros/22.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/22.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/22-a806b74f2643898a4f0e5b3b7adfc6fb.jpg";

/***/ }),

/***/ "./novasImagens/quadros/24.jpg":
/*!*************************************!*\
  !*** ./novasImagens/quadros/24.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/24-c8546c614b96a791f4bc68f7c2986476.jpg";

/***/ }),

/***/ "./novasImagens/quadros/3.jpg":
/*!************************************!*\
  !*** ./novasImagens/quadros/3.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-796cd881fe9b3009afdc66816680bc86.jpg";

/***/ }),

/***/ "./novasImagens/quadros/4.jpg":
/*!************************************!*\
  !*** ./novasImagens/quadros/4.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/4-2d562f1d6996f29d3cbc1527db976cb3.jpg";

/***/ }),

/***/ "./novasImagens/quadros/5.jpg":
/*!************************************!*\
  !*** ./novasImagens/quadros/5.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/5-0773c8613294848dfdf4f8008df53dd5.jpg";

/***/ }),

/***/ "./novasImagens/quadros/6.jpg":
/*!************************************!*\
  !*** ./novasImagens/quadros/6.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/6-968effe2e8630060568258fe02914e77.jpg";

/***/ }),

/***/ "./novasImagens/quadros/7.jpg":
/*!************************************!*\
  !*** ./novasImagens/quadros/7.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/7-21e8e0820bab4b4d19932db3b2081ebc.jpg";

/***/ }),

/***/ "./novasImagens/quadros/8.jpg":
/*!************************************!*\
  !*** ./novasImagens/quadros/8.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/8-4133da7bbafd05833f67c8cf2088fbb2.jpg";

/***/ }),

/***/ "./novasImagens/quadros/9.jpg":
/*!************************************!*\
  !*** ./novasImagens/quadros/9.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/9-b3b356ef15d991dad37af9bf1a984643.jpg";

/***/ }),

/***/ "./novasImagens/quadros/quadroAzul.jpg":
/*!*********************************************!*\
  !*** ./novasImagens/quadros/quadroAzul.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/quadroAzul-4c930717b34b5de74df37ee030ee7f56.jpg";

/***/ }),

/***/ "./novasImagens/trabalho/IMG-20200217-WA0030.jpg":
/*!*******************************************************!*\
  !*** ./novasImagens/trabalho/IMG-20200217-WA0030.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/IMG-20200217-WA0030-b1119db75c2c2e06e228ffdb66c593df.jpg";

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layouts/Navbar */ "./components/Layouts/Navbar.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");
/* harmony import */ var _components_Agency_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Agency/Banner */ "./components/Agency/Banner.js");
/* harmony import */ var _components_Agency_Sobre__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Agency/Sobre */ "./components/Agency/Sobre.js");
/* harmony import */ var _components_Agency_Services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Agency/Services */ "./components/Agency/Services.js");
/* harmony import */ var _components_Agency_Testimonials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Agency/Testimonials */ "./components/Agency/Testimonials.js");
/* harmony import */ var _components_Agency_Partner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Agency/Partner */ "./components/Agency/Partner.js");
/* harmony import */ var _components_Agency_Portifolio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Agency/Portifolio */ "./components/Agency/Portifolio.js");
/* harmony import */ var _components_Agency_Faq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Agency/Faq */ "./components/Agency/Faq.js");
/* harmony import */ var _components_Agency_Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Agency/Contact */ "./components/Agency/Contact.js");
/* harmony import */ var _components_Agency_Subscribe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Agency/Subscribe */ "./components/Agency/Subscribe.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_Agency_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_Agency_Partner__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_components_Agency_Sobre__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_Agency_Services__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_components_Agency_Testimonials__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_components_Agency_Portifolio__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_components_Agency_Faq__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_components_Agency_Contact__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_components_Agency_Subscribe__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carlos/Desktop/Estudos/quadroSul/frontQuadroSul/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "mixitup":
/*!**************************!*\
  !*** external "mixitup" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mixitup");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-accessible-accordion":
/*!*********************************************!*\
  !*** external "react-accessible-accordion" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-image-lightbox":
/*!***************************************!*\
  !*** external "react-image-lightbox" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-lightbox");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-modal-video":
/*!************************************!*\
  !*** external "react-modal-video" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),

/***/ "react-owl-carousel3":
/*!**************************************!*\
  !*** external "react-owl-carousel3" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map