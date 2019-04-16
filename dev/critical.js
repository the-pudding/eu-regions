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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/critical.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js":
/*!**********************************************************************!*\
  !*** ./node_modules/fontfaceobserver/fontfaceobserver.standalone.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Applications/MAMP/htdocs/pudding-eu-regions/node_modules/fontfaceobserver/fontfaceobserver.standalone.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZm9udGZhY2VvYnNlcnZlci9mb250ZmFjZW9ic2VydmVyLnN0YW5kYWxvbmUuanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/fontfaceobserver/fontfaceobserver.standalone.js\n");

/***/ }),

/***/ "./node_modules/promise-polyfill/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/src/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Applications/MAMP/htdocs/pudding-eu-regions/node_modules/promise-polyfill/src/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/promise-polyfill/src/index.js\n");

/***/ }),

/***/ "./src/js/critical.js":
/*!****************************!*\
  !*** ./src/js/critical.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-polyfill */ \"./node_modules/promise-polyfill/src/index.js\");\n/* harmony import */ var _polyfills_startsWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills/startsWith */ \"./src/js/polyfills/startsWith.js\");\n/* harmony import */ var _polyfills_startsWith__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polyfills_startsWith__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _polyfills_endsWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfills/endsWith */ \"./src/js/polyfills/endsWith.js\");\n/* harmony import */ var _polyfills_endsWith__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_polyfills_endsWith__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _polyfills_findIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polyfills/findIndex */ \"./src/js/polyfills/findIndex.js\");\n/* harmony import */ var _polyfills_findIndex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_polyfills_findIndex__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _polyfills_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyfills/find */ \"./src/js/polyfills/find.js\");\n/* harmony import */ var _polyfills_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_polyfills_find__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _polyfills_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polyfills/includes */ \"./src/js/polyfills/includes.js\");\n/* harmony import */ var _polyfills_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_polyfills_includes__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_load_font__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/load-font */ \"./src/js/utils/load-font.js\");\n\n\n\n\n\n\n\nvar canela = [{\n  family: 'Canela Web',\n  weight: 300\n}, {\n  family: 'Canela Web',\n  weight: 700\n}];\nvar publico = [{\n  family: 'Publico Text Web',\n  weight: 400\n}, {\n  family: 'Publico Text Web',\n  weight: 700\n}];\nvar atlas = [{\n  family: 'Atlas Grotesk Web',\n  weight: 400\n}, {\n  family: 'Atlas Grotesk Web',\n  weight: 500\n}, {\n  family: 'Atlas Grotesk Web',\n  weight: 600\n}]; // polyfill promise\n\nif (!window.Promise) window.Promise = promise_polyfill__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; // load fonts\n\nObject(_utils_load_font__WEBPACK_IMPORTED_MODULE_6__[\"loadFontGroup\"])(canela);\nObject(_utils_load_font__WEBPACK_IMPORTED_MODULE_6__[\"loadFontGroup\"])(publico);\nObject(_utils_load_font__WEBPACK_IMPORTED_MODULE_6__[\"loadFontGroup\"])(atlas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY3JpdGljYWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JpdGljYWwuanM/NjZmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvbWlzZSBmcm9tICdwcm9taXNlLXBvbHlmaWxsJztcbmltcG9ydCAnLi9wb2x5ZmlsbHMvc3RhcnRzV2l0aCc7XG5pbXBvcnQgJy4vcG9seWZpbGxzL2VuZHNXaXRoJztcbmltcG9ydCAnLi9wb2x5ZmlsbHMvZmluZEluZGV4JztcbmltcG9ydCAnLi9wb2x5ZmlsbHMvZmluZCc7XG5pbXBvcnQgJy4vcG9seWZpbGxzL2luY2x1ZGVzJztcbmltcG9ydCB7IGxvYWRGb250R3JvdXAgfSBmcm9tICcuL3V0aWxzL2xvYWQtZm9udCc7XG5cbmNvbnN0IGNhbmVsYSA9IFtcblx0eyBmYW1pbHk6ICdDYW5lbGEgV2ViJywgd2VpZ2h0OiAzMDAgfSxcblx0eyBmYW1pbHk6ICdDYW5lbGEgV2ViJywgd2VpZ2h0OiA3MDAgfVxuXTtcblxuY29uc3QgcHVibGljbyA9IFtcblx0eyBmYW1pbHk6ICdQdWJsaWNvIFRleHQgV2ViJywgd2VpZ2h0OiA0MDAgfSxcblx0eyBmYW1pbHk6ICdQdWJsaWNvIFRleHQgV2ViJywgd2VpZ2h0OiA3MDAgfVxuXTtcblxuY29uc3QgYXRsYXMgPSBbXG5cdHsgZmFtaWx5OiAnQXRsYXMgR3JvdGVzayBXZWInLCB3ZWlnaHQ6IDQwMCB9LFxuXHR7IGZhbWlseTogJ0F0bGFzIEdyb3Rlc2sgV2ViJywgd2VpZ2h0OiA1MDAgfSxcblx0eyBmYW1pbHk6ICdBdGxhcyBHcm90ZXNrIFdlYicsIHdlaWdodDogNjAwIH1cbl07XG5cbi8vIHBvbHlmaWxsIHByb21pc2VcbmlmICghd2luZG93LlByb21pc2UpIHdpbmRvdy5Qcm9taXNlID0gUHJvbWlzZTtcblxuLy8gbG9hZCBmb250c1xubG9hZEZvbnRHcm91cChjYW5lbGEpO1xubG9hZEZvbnRHcm91cChwdWJsaWNvKTtcbmxvYWRGb250R3JvdXAoYXRsYXMpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/critical.js\n");

/***/ }),

/***/ "./src/js/polyfills/endsWith.js":
/*!**************************************!*\
  !*** ./src/js/polyfills/endsWith.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (!String.prototype.endsWith) {\n  String.prototype.endsWith = function (searchString, position) {\n    var subjectString = this.toString();\n\n    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {\n      position = subjectString.length;\n    }\n\n    position -= searchString.length;\n    var lastIndex = subjectString.lastIndexOf(searchString, position);\n    return lastIndex !== -1 && lastIndex === position;\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcG9seWZpbGxzL2VuZHNXaXRoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BvbHlmaWxscy9lbmRzV2l0aC5qcz80YTg2Il0sInNvdXJjZXNDb250ZW50IjpbImlmICghU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCkge1xuICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24oc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikge1xuICAgICAgdmFyIHN1YmplY3RTdHJpbmcgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICBpZiAodHlwZW9mIHBvc2l0aW9uICE9PSAnbnVtYmVyJyB8fCAhaXNGaW5pdGUocG9zaXRpb24pIHx8IE1hdGguZmxvb3IocG9zaXRpb24pICE9PSBwb3NpdGlvbiB8fCBwb3NpdGlvbiA+IHN1YmplY3RTdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgIHBvc2l0aW9uID0gc3ViamVjdFN0cmluZy5sZW5ndGg7XG4gICAgICB9XG4gICAgICBwb3NpdGlvbiAtPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICAgICAgdmFyIGxhc3RJbmRleCA9IHN1YmplY3RTdHJpbmcubGFzdEluZGV4T2Yoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbik7XG4gICAgICByZXR1cm4gbGFzdEluZGV4ICE9PSAtMSAmJiBsYXN0SW5kZXggPT09IHBvc2l0aW9uO1xuICB9O1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/polyfills/endsWith.js\n");

/***/ }),

/***/ "./src/js/polyfills/find.js":
/*!**********************************!*\
  !*** ./src/js/polyfills/find.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (!Array.prototype.find) {\n  Object.defineProperty(Array.prototype, 'find', {\n    value: function value(predicate) {\n      'use strict';\n\n      if (this == null) {\n        throw new TypeError('Array.prototype.find called on null or undefined');\n      }\n\n      if (typeof predicate !== 'function') {\n        throw new TypeError('predicate must be a function');\n      }\n\n      var list = Object(this);\n      var length = list.length >>> 0;\n      var thisArg = arguments[1];\n      var value;\n\n      for (var i = 0; i < length; i++) {\n        value = list[i];\n\n        if (predicate.call(thisArg, value, i, list)) {\n          return value;\n        }\n      }\n\n      return undefined;\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcG9seWZpbGxzL2ZpbmQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcG9seWZpbGxzL2ZpbmQuanM/MzdiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoIUFycmF5LnByb3RvdHlwZS5maW5kKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsICdmaW5kJywge1xuICAgIHZhbHVlOiBmdW5jdGlvbihwcmVkaWNhdGUpIHtcbiAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkucHJvdG90eXBlLmZpbmQgY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgIH1cbiAgICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwcmVkaWNhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgIH1cbiAgICAgdmFyIGxpc3QgPSBPYmplY3QodGhpcyk7XG4gICAgIHZhciBsZW5ndGggPSBsaXN0Lmxlbmd0aCA+Pj4gMDtcbiAgICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMV07XG4gICAgIHZhciB2YWx1ZTtcblxuICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgdmFsdWUgPSBsaXN0W2ldO1xuICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaSwgbGlzdCkpIHtcbiAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICB9XG4gICAgIH1cbiAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH0pO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFyQkE7QUF1QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/polyfills/find.js\n");

/***/ }),

/***/ "./src/js/polyfills/findIndex.js":
/*!***************************************!*\
  !*** ./src/js/polyfills/findIndex.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (!Array.prototype.findIndex) {\n  Object.defineProperty(Array.prototype, 'findIndex', {\n    value: function value(predicate) {\n      'use strict';\n\n      if (this == null) {\n        throw new TypeError('Array.prototype.findIndex called on null or undefined');\n      }\n\n      if (typeof predicate !== 'function') {\n        throw new TypeError('predicate must be a function');\n      }\n\n      var list = Object(this);\n      var length = list.length >>> 0;\n      var thisArg = arguments[1];\n      var value;\n\n      for (var i = 0; i < length; i++) {\n        value = list[i];\n\n        if (predicate.call(thisArg, value, i, list)) {\n          return i;\n        }\n      }\n\n      return -1;\n    },\n    enumerable: false,\n    configurable: false,\n    writable: false\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcG9seWZpbGxzL2ZpbmRJbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9wb2x5ZmlsbHMvZmluZEluZGV4LmpzPzRmZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKCFBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsICdmaW5kSW5kZXgnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uKHByZWRpY2F0ZSkge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5wcm90b3R5cGUuZmluZEluZGV4IGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgdmFyIGxpc3QgPSBPYmplY3QodGhpcyk7XG4gICAgICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGggPj4+IDA7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IGxpc3RbaV07XG4gICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaSwgbGlzdCkpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQTBCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/polyfills/findIndex.js\n");

/***/ }),

/***/ "./src/js/polyfills/includes.js":
/*!**************************************!*\
  !*** ./src/js/polyfills/includes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://tc39.github.io/ecma262/#sec-array.prototype.includes\nif (!Array.prototype.includes) {\n  Object.defineProperty(Array.prototype, 'includes', {\n    value: function value(searchElement, fromIndex) {\n      // 1. Let O be ? ToObject(this value).\n      if (this == null) {\n        throw new TypeError('\"this\" is null or not defined');\n      }\n\n      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, \"length\")).\n\n      var len = o.length >>> 0; // 3. If len is 0, return false.\n\n      if (len === 0) {\n        return false;\n      } // 4. Let n be ? ToInteger(fromIndex).\n      //    (If fromIndex is undefined, this step produces the value 0.)\n\n\n      var n = fromIndex | 0; // 5. If n ≥ 0, then\n      //  a. Let k be n.\n      // 6. Else n < 0,\n      //  a. Let k be len + n.\n      //  b. If k < 0, let k be 0.\n\n      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0); // 7. Repeat, while k < len\n\n      while (k < len) {\n        // a. Let elementK be the result of ? Get(O, ! ToString(k)).\n        // b. If SameValueZero(searchElement, elementK) is true, return true.\n        // c. Increase k by 1.\n        // NOTE: === provides the correct \"SameValueZero\" comparison needed here.\n        if (o[k] === searchElement) {\n          return true;\n        }\n\n        k++;\n      } // 8. Return false\n\n\n      return false;\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcG9seWZpbGxzL2luY2x1ZGVzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BvbHlmaWxscy9pbmNsdWRlcy5qcz80OWIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgJ2luY2x1ZGVzJywge1xuICAgIHZhbHVlOiBmdW5jdGlvbihzZWFyY2hFbGVtZW50LCBmcm9tSW5kZXgpIHtcblxuICAgICAgLy8gMS4gTGV0IE8gYmUgPyBUb09iamVjdCh0aGlzIHZhbHVlKS5cbiAgICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ0aGlzXCIgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbyA9IE9iamVjdCh0aGlzKTtcblxuICAgICAgLy8gMi4gTGV0IGxlbiBiZSA/IFRvTGVuZ3RoKD8gR2V0KE8sIFwibGVuZ3RoXCIpKS5cbiAgICAgIHZhciBsZW4gPSBvLmxlbmd0aCA+Pj4gMDtcblxuICAgICAgLy8gMy4gSWYgbGVuIGlzIDAsIHJldHVybiBmYWxzZS5cbiAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyA0LiBMZXQgbiBiZSA/IFRvSW50ZWdlcihmcm9tSW5kZXgpLlxuICAgICAgLy8gICAgKElmIGZyb21JbmRleCBpcyB1bmRlZmluZWQsIHRoaXMgc3RlcCBwcm9kdWNlcyB0aGUgdmFsdWUgMC4pXG4gICAgICB2YXIgbiA9IGZyb21JbmRleCB8IDA7XG5cbiAgICAgIC8vIDUuIElmIG4g4omlIDAsIHRoZW5cbiAgICAgIC8vICBhLiBMZXQgayBiZSBuLlxuICAgICAgLy8gNi4gRWxzZSBuIDwgMCxcbiAgICAgIC8vICBhLiBMZXQgayBiZSBsZW4gKyBuLlxuICAgICAgLy8gIGIuIElmIGsgPCAwLCBsZXQgayBiZSAwLlxuICAgICAgdmFyIGsgPSBNYXRoLm1heChuID49IDAgPyBuIDogbGVuIC0gTWF0aC5hYnMobiksIDApO1xuXG4gICAgICAvLyA3LiBSZXBlYXQsIHdoaWxlIGsgPCBsZW5cbiAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgIC8vIGEuIExldCBlbGVtZW50SyBiZSB0aGUgcmVzdWx0IG9mID8gR2V0KE8sICEgVG9TdHJpbmcoaykpLlxuICAgICAgICAvLyBiLiBJZiBTYW1lVmFsdWVaZXJvKHNlYXJjaEVsZW1lbnQsIGVsZW1lbnRLKSBpcyB0cnVlLCByZXR1cm4gdHJ1ZS5cbiAgICAgICAgLy8gYy4gSW5jcmVhc2UgayBieSAxLlxuICAgICAgICAvLyBOT1RFOiA9PT0gcHJvdmlkZXMgdGhlIGNvcnJlY3QgXCJTYW1lVmFsdWVaZXJvXCIgY29tcGFyaXNvbiBuZWVkZWQgaGVyZS5cbiAgICAgICAgaWYgKG9ba10gPT09IHNlYXJjaEVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBrKys7XG4gICAgICB9XG5cbiAgICAgIC8vIDguIFJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQ0E7QUE2Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/polyfills/includes.js\n");

/***/ }),

/***/ "./src/js/polyfills/startsWith.js":
/*!****************************************!*\
  !*** ./src/js/polyfills/startsWith.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (!String.prototype.startsWith) {\n  String.prototype.startsWith = function (searchString, position) {\n    return this.substr(position || 0, searchString.length) === searchString;\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcG9seWZpbGxzL3N0YXJ0c1dpdGguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcG9seWZpbGxzL3N0YXJ0c1dpdGguanM/NThjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoIVN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCkge1xuXHRTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBmdW5jdGlvbihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3Vic3RyKHBvc2l0aW9uIHx8IDAsIHNlYXJjaFN0cmluZy5sZW5ndGgpID09PSBzZWFyY2hTdHJpbmc7XG5cdH07XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/polyfills/startsWith.js\n");

/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/*! exports provided: select, selectAll, find, removeClass, addClass, hasClass, jumpTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectAll\", function() { return selectAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClass\", function() { return removeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasClass\", function() { return hasClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jumpTo\", function() { return jumpTo; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// DOM helper functions\n// public\nfunction select(selector) {\n  return document.querySelector(selector);\n}\n\nfunction selectAll(selector) {\n  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  return _toConsumableArray(parent.querySelectorAll(selector));\n}\n\nfunction find(el, selector) {\n  return _toConsumableArray(el.querySelectorAll(selector));\n}\n\nfunction removeClass(el, className) {\n  if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp(\"(^|\\\\b)\".concat(className.split(' ').join('|'), \"(\\\\b|$)\"), 'gi'), ' ');\n}\n\nfunction addClass(el, className) {\n  if (el.classList) el.classList.add(className);else el.className = \"\".concat(el.className, \" \").concat(className);\n}\n\nfunction hasClass(el, className) {\n  if (el.classList) return el.classList.contains(className);\n  return new RegExp(\"(^| )\".concat(className, \"( |$)\"), 'gi').test(el.className);\n}\n\nfunction jumpTo(el, offset) {\n  offset = offset || 0;\n  var top = el.getBoundingClientRect().top + offset;\n  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n  var destY = scrollTop + top;\n  window.scrollTo(0, destY);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvZG9tLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2RvbS5qcz8zZjkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERPTSBoZWxwZXIgZnVuY3Rpb25zXG5cbi8vIHB1YmxpY1xuZnVuY3Rpb24gc2VsZWN0KHNlbGVjdG9yKSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0QWxsKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudCkge1xuXHRyZXR1cm4gWy4uLnBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV07XG59XG5cbmZ1bmN0aW9uIGZpbmQoZWwsIHNlbGVjdG9yKSB7XG5cdHJldHVybiBbLi4uZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcildO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG5cdGlmIChlbC5jbGFzc0xpc3QpIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcblx0ZWxzZVxuXHRcdGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKFxuXHRcdFx0bmV3IFJlZ0V4cChgKF58XFxcXGIpJHtjbGFzc05hbWUuc3BsaXQoJyAnKS5qb2luKCd8Jyl9KFxcXFxifCQpYCwgJ2dpJyksXG5cdFx0XHQnICcsXG5cdFx0KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuXHRpZiAoZWwuY2xhc3NMaXN0KSBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdGVsc2UgZWwuY2xhc3NOYW1lID0gYCR7ZWwuY2xhc3NOYW1lfSAke2NsYXNzTmFtZX1gO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG5cdGlmIChlbC5jbGFzc0xpc3QpIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcblx0cmV0dXJuIG5ldyBSZWdFeHAoYChefCApJHtjbGFzc05hbWV9KCB8JClgLCAnZ2knKS50ZXN0KGVsLmNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGp1bXBUbyhlbCwgb2Zmc2V0KSB7XG5cdG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXHRjb25zdCB0b3AgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBvZmZzZXQ7XG5cdGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRjb25zdCBkZXN0WSA9IHNjcm9sbFRvcCArIHRvcDtcblx0d2luZG93LnNjcm9sbFRvKDAsIGRlc3RZKTtcbn1cblxuZXhwb3J0IHsgc2VsZWN0LCBzZWxlY3RBbGwsIGZpbmQsIHJlbW92ZUNsYXNzLCBhZGRDbGFzcywgaGFzQ2xhc3MsIGp1bXBUbyB9O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/utils/dom.js\n");

/***/ }),

/***/ "./src/js/utils/load-font.js":
/*!***********************************!*\
  !*** ./src/js/utils/load-font.js ***!
  \***********************************/
/*! exports provided: loadFont, loadFontGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadFont\", function() { return loadFont; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadFontGroup\", function() { return loadFontGroup; });\n/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fontfaceobserver */ \"./node_modules/fontfaceobserver/fontfaceobserver.standalone.js\");\n/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fontfaceobserver__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/js/utils/dom.js\");\n\n\nvar htmlEl = document.documentElement;\nvar TIMEOUT = 5000;\n\nfunction addFont(family) {\n  var first = family.split(' ')[0];\n  var name = first.toLowerCase().replace(/ /g, '-');\n  var className = \"loaded-\".concat(name);\n  Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"addClass\"])(htmlEl, className);\n}\n\nfunction handleError(err) {\n  console.error(err);\n}\n\nfunction loadFont(font) {\n  var family = font.family,\n      _font$weight = font.weight,\n      weight = _font$weight === void 0 ? 'normal' : _font$weight;\n  var fontObserver = new fontfaceobserver__WEBPACK_IMPORTED_MODULE_0___default.a(family, {\n    weight: weight\n  });\n  fontObserver.load(null, TIMEOUT).then(function () {\n    return addFont(font);\n  }).catch(handleError);\n}\n\nfunction loadFontGroup(group) {\n  var promises = group.map(function (font) {\n    return new Promise(function (resolve, reject) {\n      var family = font.family,\n          weight = font.weight,\n          _font$style = font.style,\n          style = _font$style === void 0 ? 'normal' : _font$style;\n      var fontObserver = new fontfaceobserver__WEBPACK_IMPORTED_MODULE_0___default.a(family, {\n        weight: weight,\n        style: style\n      });\n      return fontObserver.load(null, TIMEOUT).then(function () {\n        return resolve(family);\n      }).catch(function (err) {\n        return reject(err);\n      });\n    });\n  });\n  Promise.all(promises).then(function (result) {\n    return addFont(result[0]);\n  }).catch(handleError);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvbG9hZC1mb250LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2xvYWQtZm9udC5qcz8yNjJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb250RmFjZU9ic2VydmVyIGZyb20gJ2ZvbnRmYWNlb2JzZXJ2ZXInXG5pbXBvcnQgeyBhZGRDbGFzcyB9IGZyb20gJy4vZG9tJ1xuXG5jb25zdCBodG1sRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbmNvbnN0IFRJTUVPVVQgPSA1MDAwXG5cbmZ1bmN0aW9uIGFkZEZvbnQoZmFtaWx5KSB7XG5cdGNvbnN0IGZpcnN0ID0gZmFtaWx5LnNwbGl0KCcgJylbMF1cblx0Y29uc3QgbmFtZSA9IGZpcnN0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnLScpXG5cdGNvbnN0IGNsYXNzTmFtZSA9IGBsb2FkZWQtJHtuYW1lfWBcblx0YWRkQ2xhc3MoaHRtbEVsLCBjbGFzc05hbWUpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycikge1xuXHRjb25zb2xlLmVycm9yKGVycilcbn1cblxuZnVuY3Rpb24gbG9hZEZvbnQoZm9udCkge1xuXHRjb25zdCB7IGZhbWlseSwgd2VpZ2h0ID0gJ25vcm1hbCcgfSA9IGZvbnRcblx0Y29uc3QgZm9udE9ic2VydmVyID0gbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoZmFtaWx5LCB7IHdlaWdodCB9KVxuXHRmb250T2JzZXJ2ZXJcblx0XHQubG9hZChudWxsLCBUSU1FT1VUKVxuXHRcdC50aGVuKCgpID0+IGFkZEZvbnQoZm9udCkpXG5cdFx0LmNhdGNoKGhhbmRsZUVycm9yKVxufVxuXG5mdW5jdGlvbiBsb2FkRm9udEdyb3VwKGdyb3VwKSB7XG5cdGNvbnN0IHByb21pc2VzID0gZ3JvdXAubWFwKGZvbnQgPT5cblx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRjb25zdCB7IGZhbWlseSwgd2VpZ2h0LCBzdHlsZSA9ICdub3JtYWwnIH0gPSBmb250XG5cblx0XHRcdGNvbnN0IGZvbnRPYnNlcnZlciA9IG5ldyBGb250RmFjZU9ic2VydmVyKGZhbWlseSwgeyB3ZWlnaHQsIHN0eWxlIH0pXG5cdFx0XHRyZXR1cm4gZm9udE9ic2VydmVyXG5cdFx0XHRcdC5sb2FkKG51bGwsIFRJTUVPVVQpXG5cdFx0XHRcdC50aGVuKCgpID0+IHJlc29sdmUoZmFtaWx5KSlcblx0XHRcdFx0LmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSlcblx0XHR9KVxuXHQpXG5cblx0UHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0LnRoZW4ocmVzdWx0ID0+IGFkZEZvbnQocmVzdWx0WzBdKSlcblx0XHQuY2F0Y2goaGFuZGxlRXJyb3IpXG59XG5cbmV4cG9ydCB7IGxvYWRGb250LCBsb2FkRm9udEdyb3VwIH1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQUE7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/utils/load-font.js\n");

/***/ })

/******/ });