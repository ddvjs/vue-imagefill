module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = __webpack_require__(/*! ./lib */ "./src/lib/index.js");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(/*! ./lib/style/vue-imagefill.css */ "./src/lib/style/vue-imagefill.css");

exports.default = {
  install: function install(Vue) {
    Object.keys(_lib2.default).forEach(function (key) {
      Vue.directive(key, _lib2.default[key]);
    });
  }
};

/***/ }),

/***/ "./src/lib/event.js":
/*!**************************!*\
  !*** ./src/lib/event.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var emptyLeft = '(\\s|^)';
var emptyright = '(\\s|$)';

// class操作兼容
function hasClass(elements, className) {
  return !!elements.className.match(new RegExp(emptyLeft + className + emptyright));
}

function addClass(elements, className) {
  if (!hasClass(elements, className)) {
    elements.className += ' ' + className;
  }
}

function removeClass(elements, className) {
  if (hasClass(elements, className)) {
    elements.className = elements.className.replace(new RegExp(emptyLeft + className + emptyright), ' ');
  }
}

module.exports = {
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass
};

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _event = __webpack_require__(/*! ./event.js */ "./src/lib/event.js");

exports.default = {
  center: {
    inserted: function inserted(el, binding) {
      var hCenter = binding.modifiers.full ? 'Hcenter-full' : 'Hcenter';
      var vCenter = binding.modifiers.full ? 'Vcenter-full' : 'Vcenter';
      if (binding.value) {
        el.src = binding.value;
      }
      el.onload = function (e) {
        var w = el.naturalWidth;
        var h = el.naturalHeight;
        var pw = el.parentNode.offsetWidth;
        var ph = el.parentNode.offsetHeight;
        var ratio = w / h;
        var pRatio = pw / ph;

        if (pRatio > ratio) {
          (0, _event.removeClass)(el, hCenter);
          (0, _event.addClass)(el, vCenter);
        } else {
          (0, _event.removeClass)(el, vCenter);
          (0, _event.addClass)(el, hCenter);
        }
      };
    }
  },
  flex: {
    inserted: function inserted(el, binding) {
      (0, _event.addClass)(el, 'flex-box');
      var div = document.createElement('div');
      div.className = 'expansion';
      div.style.paddingBottom = binding.value * 100 + '%';
      el.appendChild(div);
    }
  }
};

/***/ }),

/***/ "./src/lib/style/vue-imagefill.css":
/*!*****************************************!*\
  !*** ./src/lib/style/vue-imagefill.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map