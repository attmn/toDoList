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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initpages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initpages.js */ \"./src/initpages.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n\n\n_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"initPagesExport\"].create;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initpages.js":
/*!**************************!*\
  !*** ./src/initpages.js ***!
  \**************************/
/*! exports provided: shortenStr, createElement, initPagesExport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shortenStr\", function() { return shortenStr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPagesExport\", function() { return initPagesExport; });\nvar domObjects = {\n  content: document.getElementById(\"content\"),\n  topBar: document.getElementById(\"topBar\"),\n  bodyDiv: document.getElementById(\"bodyDiv\")\n};\nfunction shortenStr(str, maxLen) {\n  if (str.length <= maxLen) return str;\n  return str.substr(0, maxLen) + \"...\";\n}\nfunction createElement(parent, type, atrName) {\n  var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"\";\n  var innerHTML = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"\";\n  var atr = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : \"id\";\n  var element = document.createElement(type);\n\n  if (className !== \"\") {\n    element.classList.add(className);\n  }\n\n  element.setAttribute(atr, atrName);\n  element.innerHTML = innerHTML;\n  parent.appendChild(element);\n  domObjects[atrName] = document.getElementById(atrName);\n}\n\nfunction createProjectsPage() {\n  createElement(domObjects.topBar, \"button\", \"addProjectBtn\", \"addBtn\", \"+\");\n  createElement(domObjects.bodyDiv, \"div\", \"projectsBody\");\n  createElement(domObjects.projectsBody, \"h1\", \"projectsTitle\", \"pageTitle\", \"PROJECTS\");\n  createElement(domObjects.projectsBody, \"div\", \"projectsTable\");\n}\n\nfunction initPages() {\n  createProjectsPage();\n}\n\nvar initPagesExport = {\n  create: initPages(),\n  domObjects: domObjects\n};\n\n//# sourceURL=webpack:///./src/initpages.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initpages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initpages.js */ \"./src/initpages.js\");\n\n\n(function projects() {\n  var project = function project(title, description, color1, color2) {\n    return {\n      title: title,\n      description: description,\n      color1: color1,\n      color2: color2\n    };\n  };\n\n  var projectsArray = [];\n  var domObjects = _initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"initPagesExport\"].domObjects;\n\n  function createProject(title, description) {\n    var color1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"#4DB4FF\";\n    var color2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : color1;\n    var projName = project(title, description, color1, color2);\n    projectsArray.unshift(projName);\n  }\n\n  domObjects.addProjectBtn.addEventListener(\"click\", function () {\n    createProject(\"New Project\", \"\");\n    buildProjects();\n  });\n\n  function maxLimitForContenteditableDiv(e, element, limit) {\n    var allowedKeys = false;\n    console.log(e.type);\n\n    if (e.type === \"keydown\") {\n      allowedKeys = e.which === 8\n      /* BACKSPACE */\n      || e.which === 35\n      /* END */\n      || e.which === 36\n      /* HOME */\n      || e.which === 37\n      /* LEFT */\n      || e.which === 38\n      /* UP */\n      || e.which === 39\n      /* RIGHT*/\n      || e.which === 40\n      /* DOWN */\n      || e.which === 46\n      /* DEL*/\n      || e.ctrlKey === true && e.which === 65\n      /* CTRL + A */\n      || e.ctrlKey === true && e.which === 88\n      /* CTRL + X */\n      || e.ctrlKey === true && e.which === 67\n      /* CTRL + C */\n      || e.ctrlKey === true && e.which === 86\n      /* CTRL + V */\n      || e.ctrlKey === true && e.which === 90\n      /* CTRL + Z */\n      ;\n    }\n\n    if (e.type === \"paste\") {\n      setTimeout(function () {\n        e.target.textContent = e.target.textContent.slice(0, limit);\n        element.style.background = \"salmon\";\n      });\n    } else {\n      element.style.background = \"\";\n    }\n\n    if (!allowedKeys && e.target.textContent.length >= limit) {\n      e.preventDefault();\n      element.style.background = \"salmon\";\n    } else {\n      element.style.background = \"\";\n    }\n  }\n\n  createProject(\"Supplyst\", \"DESCRIPTION\", \"#4DFF7E\", \"#0CC656\");\n  createProject(\"The Steam Rooms\", \"DESCRIPTION\", \"#FF4DD8\", \"#C60C9D\");\n  createProject(\"Open Table\", \"DESCRIPTION\");\n  createProject(\"Amazon Incorporated\", \"DESCRIPTION\");\n\n  function buildProjects() {\n    if (projectsArray.length > 0) {\n      while (domObjects.projectsTable.firstChild) {\n        domObjects.projectsTable.removeChild(domObjects.projectsTable.lastChild);\n      }\n    }\n\n    var _loop = function _loop(i) {\n      Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects.projectsTable, \"div\", \"project\".concat(i), \"projectCell\");\n      var projectCell = domObjects[\"project\".concat(i, \"Cell\")];\n      Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects[\"project\".concat(i)], \"span\", \"project\".concat(i, \"Title\"), \"projectTitle\");\n      var projectTitle = domObjects[\"project\".concat(i, \"Title\")];\n      projectTitle.innerHTML = Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"shortenStr\"])(projectsArray[i].title, 20);\n      projectTitle.setAttribute(\"contentEditable\", \"true\");\n      projectTitle.setAttribute(\"spellcheck\", \"false\");\n      projectTitle.addEventListener(\"keydown\", function (e) {\n        maxLimitForContenteditableDiv(e, projectTitle, 20);\n      });\n      projectTitle.addEventListener(\"paste\", function (e) {\n        maxLimitForContenteditableDiv(e, projectTitle, 20);\n      });\n      Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects[\"project\".concat(i)], \"div\", \"project\".concat(i, \"Color\"), \"projectColor\");\n      var projectColor = domObjects[\"project\".concat(i, \"Color\")];\n      projectColor.style.background = \"linear-gradient(232.33deg, \".concat(projectsArray[i].color1, \" 0%, \").concat(projectsArray[i].color2, \" 100.01%)\");\n      Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects[\"project\".concat(i)], \"div\", \"project\".concat(i, \"Lists\"), \"projectLists\");\n      var projectLists = domObjects[\"project\".concat(i, \"Lists\")];\n      Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects[\"project\".concat(i)], \"div\", \"project\".concat(i, \"ViewDiv\"), \"projectViewDiv\");\n      var projectViewDiv = domObjects[\"project\".concat(i, \"ViewDiv\")];\n      Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects[\"project\".concat(i, \"ViewDiv\")], \"a\", \"project\".concat(i, \"ViewLink\"), \"projectViewLink\");\n      var projectViewLink = domObjects[\"project\".concat(i, \"ViewLink\")];\n      projectViewLink.innerHTML = \"VIEW\";\n    };\n\n    for (var i = 0; i < projectsArray.length; i++) {\n      _loop(i);\n    }\n  }\n\n  buildProjects();\n})();\n\n//# sourceURL=webpack:///./src/projects.js?");

/***/ })

/******/ });