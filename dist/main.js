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

<<<<<<< HEAD
=======
/***/ "./src/arrayAnalysis.js":
/*!******************************!*\
  !*** ./src/arrayAnalysis.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function arrayAnalysis(array) {\n  const avg = array.reduce((pre, cur) => cur += pre) / array.length;\n  const minimum = Math.min(...array);\n  const maximum = Math.max(...array);\n  const arrLenght = array.length;\n\n  const result = {\n    average: avg,\n    min: minimum,\n    max: maximum,\n    length: arrLenght,\n  };\n\n  return result;\n}\n\nmodule.exports = arrayAnalysis;\n\n\n//# sourceURL=webpack:///./src/arrayAnalysis.js?");

/***/ }),

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const calculator = {\n  add(a, b) {\n    return a + b;\n  },\n\n  subtract(a, b) {\n    return a - b;\n  },\n\n  divide(a, b) {\n    return a / b;\n  },\n\n  multiply(a, b) {\n    return a * b;\n  },\n};\n\nmodule.exports = calculator;\n\n\n//# sourceURL=webpack:///./src/calculator.js?");

/***/ }),

/***/ "./src/capitalize.js":
/*!***************************!*\
  !*** ./src/capitalize.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function capitalize(string) {\n  const s = string.split('');\n  s[0] = s[0].toUpperCase();\n\n  return s.join('');\n}\n\nmodule.exports = capitalize;\n\n\n//# sourceURL=webpack:///./src/capitalize.js?");

/***/ }),

/***/ "./src/ceasarCipher.js":
/*!*****************************!*\
  !*** ./src/ceasarCipher.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ceasarCipher(string) {\n  string = string.split('');\n  for (const i in string) {\n    string[i] = string[i].charCodeAt(0);\n    if ((string[i] >= 97 && string[i] < 122) || (string[i] >= 65 && string[i] < 90)) {\n      string[i] += 1;\n    } else if (string[i] === 122) {\n      string[i] = 97;\n    } else if (string[i] === 90) {\n      string[i] = 65;\n    }\n    string[i] = String.fromCharCode(string[i]);\n  }\n  return string.join('');\n}\n\nmodule.exports = ceasarCipher;\n\n\n//# sourceURL=webpack:///./src/ceasarCipher.js?");

/***/ }),

>>>>>>> b7d0b0d3e18c31d78819854ab49083763c9be518
/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
<<<<<<< HEAD
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import capitalize from './capitalize';\n// import reverseString from './reverseString';\n// import calculator from './calculator';\n// import ceasarCipher from './ceasarCipher';\n// import arrayAnalysis from './arrayAnalysis';\n\n// console.log(capitalize('string'));\n// console.log(reverseString('string'));\n\n// console.log(calculator.add(1, 2));\n// console.log(calculator.subtract(1, 2));\n// console.log(calculator.divide(1, 2));\n// console.log(calculator.multiply(1, 2));\n\n// console.log(ceasarCipher('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));\n// console.log(ceasarCipher('With space'));\n\n\n// console.log(arrayAnalysis([1, 8, 3, 4, 2, 6]).average);\n// console.log(arrayAnalysis([1, 8, 3, 4, 2, 6]));\n\n//# sourceURL=webpack:///./src/index.js?");
=======
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize */ \"./src/capitalize.js\");\n/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capitalize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reverseString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reverseString */ \"./src/reverseString.js\");\n/* harmony import */ var _reverseString__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reverseString__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator */ \"./src/calculator.js\");\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_calculator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ceasarCipher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ceasarCipher */ \"./src/ceasarCipher.js\");\n/* harmony import */ var _ceasarCipher__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ceasarCipher__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _arrayAnalysis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arrayAnalysis */ \"./src/arrayAnalysis.js\");\n/* harmony import */ var _arrayAnalysis__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_arrayAnalysis__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconsole.log(_capitalize__WEBPACK_IMPORTED_MODULE_0___default()('string'));\nconsole.log(_reverseString__WEBPACK_IMPORTED_MODULE_1___default()('string'));\n\nconsole.log(_calculator__WEBPACK_IMPORTED_MODULE_2___default.a.add(1, 2));\nconsole.log(_calculator__WEBPACK_IMPORTED_MODULE_2___default.a.subtract(1, 2));\nconsole.log(_calculator__WEBPACK_IMPORTED_MODULE_2___default.a.divide(1, 2));\nconsole.log(_calculator__WEBPACK_IMPORTED_MODULE_2___default.a.multiply(1, 2));\n\nconsole.log(_ceasarCipher__WEBPACK_IMPORTED_MODULE_3___default()('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));\nconsole.log(_ceasarCipher__WEBPACK_IMPORTED_MODULE_3___default()('With space'));\n\n\nconsole.log(_arrayAnalysis__WEBPACK_IMPORTED_MODULE_4___default()([1, 8, 3, 4, 2, 6]));\nconsole.log(_arrayAnalysis__WEBPACK_IMPORTED_MODULE_4___default()([1, 8, 3, 4, 2, 6]).average);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/reverseString.js":
/*!******************************!*\
  !*** ./src/reverseString.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function reverseString(string) {\n  const s = string.split('');\n  const arr = [];\n  for (let i = 0; i < s.length; i += 1) {\n    arr.unshift(s[i]);\n  }\n  return arr.join('');\n}\n\nmodule.exports = reverseString;\n\n\n//# sourceURL=webpack:///./src/reverseString.js?");
>>>>>>> b7d0b0d3e18c31d78819854ab49083763c9be518

/***/ })

/******/ });