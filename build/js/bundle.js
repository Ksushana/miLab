/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/local.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/App.js":
/*!************************!*\
  !*** ./scripts/App.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobile-menu */ "./scripts/modules/mobile-menu.js");
/* harmony import */ var _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_mobile_menu__WEBPACK_IMPORTED_MODULE_0__);

/*========================================
// Polyfills
========================================*/

/*========================================
// Utils
========================================*/

/*========================================
// Modules
========================================*/


/*========================================
// Run Application
========================================*/

var App = {
  init: function init() {
    console.log('App init');
  }
};
App.init();

/***/ }),

/***/ "./scripts/bundle.js":
/*!***************************!*\
  !*** ./scripts/bundle.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*========================================
// Vendor
========================================*/
__webpack_require__(/*! ./vendor.js */ "./scripts/vendor.js");
/*========================================
// App
========================================*/


__webpack_require__(/*! ./App.js */ "./scripts/App.js");

/***/ }),

/***/ "./scripts/local.js":
/*!**************************!*\
  !*** ./scripts/local.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./bundle.js */ "./scripts/bundle.js");

/***/ }),

/***/ "./scripts/modules/mobile-menu.js":
/*!****************************************!*\
  !*** ./scripts/modules/mobile-menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var openBtn = document.querySelector(".header__burger button");
  var open = document.querySelector(".header__burger");
  var closeBtn = document.querySelector(".header__close button");
  var close = document.querySelector(".header__close");
  var menu = document.querySelector(".header__menu");

  var openCatalogMenu = function openCatalogMenu() {
    menu.classList.add('is-shown');
    close.classList.remove('visually-hidden');
    close.classList.add('is-shown');
    open.classList.add('visually-hidden');
    open.classList.add('is-hidden');
  };

  var closeCatalogMenu = function closeCatalogMenu() {
    menu.classList.remove('is-shown');
    close.classList.add('visually-hidden');
    close.classList.remove('is-shown');
    open.classList.remove('visually-hidden');
    open.classList.remove('is-hidden');
  };

  openBtn.addEventListener("click", openCatalogMenu);
  closeBtn.addEventListener("click", closeCatalogMenu);
})();

/***/ }),

/***/ "./scripts/vendor.js":
/*!***************************!*\
  !*** ./scripts/vendor.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// jQuery
// window.$ = window.jQuery = require('jquery');
// jQuery Plugins
// NativeJS

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map