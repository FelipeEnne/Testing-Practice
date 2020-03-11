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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const calculator = {\n  add: function (a, b) {\n    return a + b;\n  },\n\n  subtract: function (a, b) {\n    return a - b;\n  },\n\n  divide: function (a, b) {\n    return a / b;\n  },\n\n  multiply: function (a, b) {\n    return a * b;\n  }\n}\n\nmodule.exports = calculator;\n\n//# sourceURL=webpack:///./src/calculator.js?");

/***/ }),

/***/ "./src/capitalize.js":
/*!***************************!*\
  !*** ./src/capitalize.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function capitalize(string) {\n    let s = string.split('')\n    s[0] = s[0].toUpperCase()\n\n    return s.join('');\n}\n\nmodule.exports = capitalize;\n\n\n//# sourceURL=webpack:///./src/capitalize.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize */ \"./src/capitalize.js\");\n/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capitalize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reverseString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reverseString */ \"./src/reverseString.js\");\n/* harmony import */ var _reverseString__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reverseString__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator */ \"./src/calculator.js\");\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_calculator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconsole.log(_capitalize__WEBPACK_IMPORTED_MODULE_0___default()('string')); \nconsole.log(_reverseString__WEBPACK_IMPORTED_MODULE_1___default()('string'));\nconsole.log(_calculator__WEBPACK_IMPORTED_MODULE_2___default.a.add(1, 2));\nconsole.log(_calculator__WEBPACK_IMPORTED_MODULE_2___default.a.subtract(1, 2));\nconsole.log(_calculator__WEBPACK_IMPORTED_MODULE_2___default.a.divide(1, 2));\nconsole.log(_calculator__WEBPACK_IMPORTED_MODULE_2___default.a.multiply(1, 2));\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/reverseString.js":
/*!******************************!*\
  !*** ./src/reverseString.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function reverseString(string) {\n  string = string.split(\"\");\n  let arr = [];\n  for(let i = 0; i < string.length; i++) {\n    arr.unshift(string[i]);\n  }\n  return arr.join('');\n}\n\nmodule.exports = reverseString;\n\n//# sourceURL=webpack:///./src/reverseString.js?");

/***/ })

/******/ });