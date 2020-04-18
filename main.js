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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initpages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initpages.js */ \"./src/initpages.js\");\n\nObject(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"initPages\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initpages.js":
/*!**************************!*\
  !*** ./src/initpages.js ***!
  \**************************/
/*! exports provided: domObjects, initPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"domObjects\", function() { return domObjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPages\", function() { return initPages; });\nvar domObjects = {\n  content: document.getElementById(\"content\"),\n  topBar: document.getElementById(\"topBar\"),\n  bodyDiv: document.getElementById(\"bodyDiv\")\n};\n\nfunction createElement(parent, type, atrName) {\n  var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"\";\n  var innerHTML = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"\";\n  var atr = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : \"id\";\n  var element = document.createElement(type);\n\n  if (className !== \"\") {\n    element.classList.add(className);\n  }\n\n  element.setAttribute(atr, atrName);\n  element.innerHTML = innerHTML;\n  parent.appendChild(element);\n  domObjects[atrName] = document.getElementById(atrName);\n}\n\nfunction createProjectsPage() {\n  createElement(domObjects.topBar, \"button\", \"addProjectBtn\", \"addBtn\", \"+\");\n  createElement(domObjects.bodyDiv, \"div\", \"projectsBody\");\n  createElement(domObjects.projectsBody, \"h1\", \"projectsTitle\", \"pageTitle\", \"PROJECTS\");\n  createElement(domObjects.projectsBody, \"table\", \"projectsTable\");\n}\n\nfunction initPages() {\n  createProjectsPage();\n  console.log(domObjects);\n}\n\n//# sourceURL=webpack:///./src/initpages.js?");

/***/ })

/******/ });