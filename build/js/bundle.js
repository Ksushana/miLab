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

/***/ "../node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js":
/*!******************************************************************!*\
  !*** ../node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js ***!
  \******************************************************************/
/*! exports provided: disableBodyScroll, clearAllBodyScrollLocks, enableBodyScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return disableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAllBodyScrollLocks", function() { return clearAllBodyScrollLocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return enableBodyScroll; });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + 'px';
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }

  var lock = {
    targetElement: targetElement,
    options: options || {}
  };

  locks = [].concat(_toConsumableArray(locks), [lock]);

  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }

  locks = [];
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
    return;
  }

  locks = locks.filter(function (lock) {
    return lock.targetElement !== targetElement;
  });

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }
  } else if (!locks.length) {
    restoreOverflowSetting();
  }
};



/***/ }),

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
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animation */ "./scripts/modules/animation.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_animation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_show_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/show-article */ "./scripts/modules/show-article.js");
/* harmony import */ var _modules_show_article__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_show_article__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_clear_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/clear-filter */ "./scripts/modules/clear-filter.js");
/* harmony import */ var _modules_clear_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_clear_filter__WEBPACK_IMPORTED_MODULE_3__);

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

/***/ "./scripts/modules/animation.js":
/*!**************************************!*\
  !*** ./scripts/modules/animation.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// (function() {
//   let ys = [-10, 1, 3, 5, 8, 8, 10, 11, 11, 11, 11, 11, 12, 13, 16, 19, 20, 30];
// const minY = ys[0]
// const maxY = ys[ys.length - 1]
// const v0 = 0.1;
// const deltaV = 0.002;
// const particles = ys.map(y => {
//   return {
//     y: y,
//     v: (Math.random() - 0.5) * v0
//   };
// });
// const particles2 = ys.map(y => {
//   return {
//     y: y - 20,
//     v: (Math.random() - 0.5) * v0
//   };
// });
// const data = [{
//     y: particles.map(p => p.y),
//     boxpoints: "all",
//     jitter: 0.5,
//     pointpos: 0,
//     type: 'box',
//     marker: {
//       size: 53,
//       color: "#E8A4B4"
//     }
//   }
// ];
// const layout = {
//     xaxis: {
//       showgrid: false,
//       zeroline: false,
//     },
//     yaxis: {
//       showgrid: false,
//       zeroline: false,
//     },
//     font: {size: 0},
//     showlegend: false,
//     height: 600,
//     width: 671,
//     paper_bgcolor: "#dedede",
//     margin:0
// }
// function randomize(p) {
//   p.v = p.v + (Math.random() - 0.5) * deltaV;
//   p.y = p.y + p.v;
//   if (p.y < minY) {
//     p.v = Math.abs(p.v);
//   }
//   if (p.y > maxY) {
//     p.v = -Math.abs(p.v);
//   }
// }
// const duration = 0;
// Plotly.newPlot('myDiv', data, layout, {displayModeBar: false});
// function animate() {
//   particles.forEach(randomize);
//   Plotly.animate('myDiv', {
//     data: [{
//       y: particles.map(p => p.y),
//     },
//     {
//       y: particles2.map(p => p.y + 20),
//     }],
//     // traces: [0],
//     layout: {}
//   }, {
//     transition: {
//       duration,
//     },
//     frame: {
//       duration
//     }
//   });
//   requestAnimationFrame(animate);
// }
// animate();
// })();

/***/ }),

/***/ "./scripts/modules/clear-filter.js":
/*!*****************************************!*\
  !*** ./scripts/modules/clear-filter.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var clearBtn = document.querySelector(".services__clear button");
  var form = document.querySelector(".services__form");

  if (!clearBtn) {
    return;
  }

  var clearFilter = function clearFilter() {
    form.reset();
  };

  clearBtn.addEventListener("click", clearFilter);
})();

/***/ }),

/***/ "./scripts/modules/mobile-menu.js":
/*!****************************************!*\
  !*** ./scripts/modules/mobile-menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  var openBtn = document.querySelector(".header__burger button");
  var open = document.querySelector(".header__burger");
  var closeBtn = document.querySelector(".header__close button");
  var close = document.querySelector(".header__close");

  var bodyScrollLock = __webpack_require__(/*! body-scroll-lock */ "../node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");

  var disableBodyScroll = bodyScrollLock.disableBodyScroll;
  var enableBodyScroll = bodyScrollLock.enableBodyScroll;
  var menu = document.querySelector(".header__menu");

  var openCatalogMenu = function openCatalogMenu() {
    menu.classList.add('is-shown');
    close.classList.remove('visually-hidden');
    close.classList.add('is-shown');
    open.classList.add('visually-hidden');
    open.classList.add('is-hidden');
    disableBodyScroll(menu);
  };

  var closeCatalogMenu = function closeCatalogMenu() {
    menu.classList.remove('is-shown');
    close.classList.add('visually-hidden');
    close.classList.remove('is-shown');
    open.classList.remove('visually-hidden');
    open.classList.remove('is-hidden');
    enableBodyScroll(menu);
  };

  openBtn.addEventListener("click", openCatalogMenu);
  closeBtn.addEventListener("click", closeCatalogMenu);
})();

/***/ }),

/***/ "./scripts/modules/show-article.js":
/*!*****************************************!*\
  !*** ./scripts/modules/show-article.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// (function() {
//   let accordionButtons = document.getElementsByClassName('.publications__more--mob');
//   for (let i = 0; i < accordionButtons.length; i++) {
//     accordionButtons[i].addEventListener('click', function() {
//         this.classList.toggle('rotate');
//         let accordionContent = this.nextElementSibling;
//         if (accordionContent.style.maxHeight) {
//             accordionContent.style.maxHeight = null;
//         }
//           else {
//             accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
//         }
//     });
//   }
// })();
(function () {
  var accordionBlocks = document.querySelectorAll('.publications__list-item-inner');

  for (var i = 0; i < accordionBlocks.length; i++) {
    accordionBlocks[i].addEventListener('click', function () {
      this.classList.toggle('rotate');
      var accordionContent = this.nextElementSibling;

      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  }
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