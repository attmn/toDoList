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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initpages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initpages.js */ \"./src/initpages.js\");\n/* harmony import */ var _projectsDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsDOM.js */ \"./src/projectsDOM.js\");\n/* harmony import */ var _projectsLogic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsLogic.js */ \"./src/projectsLogic.js\");\n/* harmony import */ var _listsLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listsLogic.js */ \"./src/listsLogic.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initpages.js":
/*!**************************!*\
  !*** ./src/initpages.js ***!
  \**************************/
/*! exports provided: shortenStr, createElement, maxLimitForContenteditableDiv, clearPage, initPagesExport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shortenStr\", function() { return shortenStr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maxLimitForContenteditableDiv\", function() { return maxLimitForContenteditableDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearPage\", function() { return clearPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPagesExport\", function() { return initPagesExport; });\nvar domObjects = {\n  content: document.getElementById(\"content\"),\n  topBar: document.getElementById(\"topBar\"),\n  bodyDiv: document.getElementById(\"bodyDiv\")\n};\nfunction shortenStr(str, maxLen) {\n  if (str.length <= maxLen) return str;\n  return str.substr(0, maxLen) + \"...\";\n}\nfunction createElement(parent, type, atrName) {\n  var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"\";\n  var innerHTML = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"\";\n  var atr = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : \"id\";\n  var element = document.createElement(type);\n\n  if (className !== \"\") {\n    element.classList.add(className);\n  }\n\n  element.setAttribute(atr, atrName);\n  element.innerHTML = innerHTML;\n  parent.appendChild(element);\n  domObjects[atrName] = document.getElementById(atrName);\n}\nfunction maxLimitForContenteditableDiv(e, element, limit) {\n  var allowedKeys = false;\n\n  if (e.type === \"keydown\") {\n    allowedKeys = e.which === 8\n    /* BACKSPACE */\n    || e.which === 35\n    /* END */\n    || e.which === 36\n    /* HOME */\n    || e.which === 37\n    /* LEFT */\n    || e.which === 38\n    /* UP */\n    || e.which === 39\n    /* RIGHT*/\n    || e.which === 40\n    /* DOWN */\n    || e.which === 46\n    /* DEL*/\n    || e.ctrlKey === true && e.which === 65\n    /* CTRL + A */\n    || e.ctrlKey === true && e.which === 88\n    /* CTRL + X */\n    || e.ctrlKey === true && e.which === 67\n    /* CTRL + C */\n    || e.ctrlKey === true && e.which === 86\n    /* CTRL + V */\n    || e.ctrlKey === true && e.which === 90\n    /* CTRL + Z */\n    ;\n  }\n\n  if (e.type === \"paste\") {\n    setTimeout(function () {\n      e.target.textContent = e.target.textContent.slice(0, limit);\n      element.style.background = \"pink\";\n    });\n  } else {\n    element.style.background = \"\";\n  }\n\n  if (!allowedKeys && e.target.textContent.length >= limit) {\n    e.preventDefault();\n    element.style.background = \"pink\";\n  } else {\n    element.style.background = \"\";\n  }\n}\nfunction clearPage(pageName) {\n  var pageNameMid = pageName[0].toUpperCase() + pageName.slice(1).toLowerCase();\n  domObjects[\"add\".concat(pageNameMid, \"Btn\")].remove();\n  domObjects[\"\".concat(pageName, \"sBody\")].remove();\n}\nvar initPagesExport = {\n  domObjects: domObjects\n};\n\n//# sourceURL=webpack:///./src/initpages.js?");

/***/ }),

/***/ "./src/listsDOM.js":
/*!*************************!*\
  !*** ./src/listsDOM.js ***!
  \*************************/
/*! exports provided: buildLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildLists\", function() { return buildLists; });\n/* harmony import */ var _initpages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initpages.js */ \"./src/initpages.js\");\n\nfunction buildLists(project) {\n  document.body.firstElementChild.tabIndex = 1;\n  var domObjects = _initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"initPagesExport\"].domObjects;\n  Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects.topBar, \"button\", \"addListBtn\", \"addBtn\", \"+\");\n  Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects.bodyDiv, \"div\", \"listsBody\");\n  Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects.listsBody, \"h1\", \"listsPageTitle\", \"pageTitle\", \"\");\n  var listsPageTitle = domObjects[\"listsPageTitle\"];\n  listsPageTitle.outerHTML = \"<h2 id=\\\"listsPageTitle\\\" class=\\\"pageTitle\\\"><a href=\\\"\\\" class=\\\"pageTitle\\\">\".concat(project.title, \"</a> > Lists</h2>\");\n  Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects.listsBody, \"div\", \"listsTable\");\n\n  while (domObjects.listsTable.firstChild) {\n    domObjects.listsTable.removeChild(domObjects.listsTable.lastChild);\n  }\n\n  for (var i = 0; i < project.lists.length; i++) {\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects.listsTable, \"div\", \"list\".concat(i, \"CellDiv\"), \"listCellDiv\");\n    var listCellDiv = domObjects[\"list\".concat(i, \"CellDiv\")];\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(listCellDiv, \"div\", \"list\".concat(i, \"Options\"), \"options\");\n    var listOptions = domObjects[\"list\".concat(i, \"Options\")];\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(listOptions, \"a\", \"list\".concat(i, \"OptionsBtn\"), \"optionsBtn\");\n    var listOptionsBtn = domObjects[\"list\".concat(i, \"OptionsBtn\")];\n    listOptionsBtn.innerHTML = \"...\";\n    listOptionsBtn.setAttribute(\"data-list-id\", i); //Project div\n\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(listCellDiv, \"div\", \"list\".concat(i), \"listCell\");\n    var list = domObjects[\"list\".concat(i)]; //Project element\n\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(list, \"h2\", \"list\".concat(i, \"Title\"), \"listTitle\");\n    var listTitle = domObjects[\"list\".concat(i, \"Title\")];\n    listTitle.innerHTML = Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"shortenStr\"])(project.lists[i].title, 20);\n    listTitle.setAttribute(\"contentEditable\", \"true\");\n    listTitle.setAttribute(\"spellcheck\", \"false\");\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(list, \"div\", \"list\".concat(i, \"Color\"), \"listColor\");\n    var listColor = domObjects[\"list\".concat(i, \"Color\")];\n    listColor.style.background = \"linear-gradient(232.33deg, \".concat(project.lists[i].color1, \" 0%, \").concat(project.lists[i].color2, \" 100.01%)\");\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(list, \"h3\", \"list\".concat(i, \"ListHeading\"), \"listListHeading\");\n    var listListHeading = domObjects[\"list\".concat(i, \"ListHeading\")];\n    listListHeading.innerHTML = \"ITEMS\";\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(list, \"div\", \"list\".concat(i, \"ItemsDiv\"), \"listItemsDiv\");\n    var listItemsDiv = domObjects[\"list\".concat(i, \"ItemsDiv\")];\n\n    if (project.lists[i].items.length > 0) {\n      for (var index = 0; index < 4; index++) {\n        Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(listItemsDiv, \"div\", \"list\".concat(i, \"Items\").concat(index, \"Box\"), \"listListBox\");\n        var listItemBox = domObjects[\"list\".concat(i, \"Item\").concat(index, \"Box\")];\n        Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(listItemBox, \"p\", \"list\".concat(i, \"Item\").concat(index), \"listItem\");\n        var listItem = domObjects[\"list\".concat(i, \"Item\").concat(index)];\n        listItem.innerHTML = project.lists[i].items[index].title;\n      }\n    } else {\n      Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(listItemsDiv, \"div\", \"list\".concat(i, \"NoItemBox\"), \"listItemBox\");\n      var listNoItemBox = domObjects[\"list\".concat(i, \"NoItemBox\")];\n      Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(listNoItemBox, \"p\", \"list\".concat(i, \"NoItem\"), \"listNoItem\");\n      var listNoItem = domObjects[\"list\".concat(i, \"NoItem\")];\n      listNoItem.innerHTML = \"Add new item\";\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/listsDOM.js?");

/***/ }),

/***/ "./src/listsLogic.js":
/*!***************************!*\
  !*** ./src/listsLogic.js ***!
  \***************************/
/*! exports provided: createList, listsLogic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createList\", function() { return createList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listsLogic\", function() { return listsLogic; });\n/* harmony import */ var _initpages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initpages.js */ \"./src/initpages.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _listsDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listsDOM.js */ \"./src/listsDOM.js\");\n\n\n\n\nvar list = function list(title, color1, color2) {\n  var items = [];\n  return {\n    title: title,\n    color1: color1,\n    color2: color2,\n    items: items\n  };\n};\n\nfunction createList(parentProject, title) {\n  var color1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"#4DB4FF\";\n  var color2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : color1;\n  var listName = list(title, color1, color2);\n  parentProject.unshift(listName);\n}\nfunction listsLogic(currentProject, projectsArray) {\n  var domObjects = _initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"initPagesExport\"].domObjects;\n  var listsArray = currentProject.lists;\n\n  function buildListsLogic() {\n    var _loop = function _loop(i) {\n      var listOptionsBtn = document.getElementById(\"list\".concat(i, \"OptionsBtn\"));\n      listOptionsBtn.addEventListener(\"click\", function (e) {\n        deleteList(e.target.getAttribute(\"data-list-id\"));\n      });\n      var listTitle = domObjects[\"list\".concat(i, \"Title\")];\n      listTitle.addEventListener(\"keydown\", function (e) {\n        Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"maxLimitForContenteditableDiv\"])(e, listTitle, 20);\n      });\n      listTitle.addEventListener(\"paste\", function (e) {\n        Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"maxLimitForContenteditableDiv\"])(e, listTitle, 20);\n      });\n      listTitle.addEventListener(\"focus\", function (e) {\n        e.target.setAttribute(\"style\", \"border: solid 1px \".concat(listsArray[i].color1, \";\\n                box-shadow: 0px 0px 4px \").concat(listsArray[i].color1, \";\"));\n      });\n      listTitle.addEventListener(\"blur\", function (e) {\n        e.target.setAttribute(\"style\", \"\");\n        listsArray[i].title = listTitle.innerHTML;\n        Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"writeToLocal\"])(projectsArray);\n      });\n    };\n\n    for (var i = 0; i < listsArray.length; i++) {\n      _loop(i);\n    }\n  }\n\n  buildListsLogic();\n\n  function deleteList(id) {\n    listsArray.splice(id, 1);\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"clearPage\"])(\"list\");\n    Object(_listsDOM_js__WEBPACK_IMPORTED_MODULE_2__[\"buildLists\"])(currentProject);\n    buildListsLogic();\n    addListBtn();\n    Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"writeToLocal\"])(projectsArray);\n  }\n\n  function addListBtn() {\n    domObjects.addListBtn.addEventListener(\"click\", function () {\n      createList(currentProject.lists, \"New list\");\n      Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"clearPage\"])(\"list\");\n      Object(_listsDOM_js__WEBPACK_IMPORTED_MODULE_2__[\"buildLists\"])(currentProject);\n      buildListsLogic();\n      addListBtn();\n      Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"writeToLocal\"])(projectsArray);\n    });\n  }\n\n  addListBtn();\n}\n\n//# sourceURL=webpack:///./src/listsLogic.js?");

/***/ }),

/***/ "./src/projectsDOM.js":
/*!****************************!*\
  !*** ./src/projectsDOM.js ***!
  \****************************/
/*! exports provided: buildProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildProjects\", function() { return buildProjects; });\n/* harmony import */ var _initpages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initpages.js */ \"./src/initpages.js\");\n\n\n(function staticBuildProjects() {\n  var domObjects = _initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"initPagesExport\"].domObjects;\n  Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects.topBar, \"button\", \"addProjectBtn\", \"addBtn\", \"+\");\n  Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects.bodyDiv, \"div\", \"projectsBody\");\n  Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects.projectsBody, \"h1\", \"projectsPageTitle\", \"pageTitle\", \"PROJECTS\");\n  Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects.projectsBody, \"div\", \"projectsTable\");\n})();\n\nfunction buildProjects(projectsArray) {\n  document.body.firstElementChild.tabIndex = 1;\n  var domObjects = _initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"initPagesExport\"].domObjects;\n\n  while (domObjects.projectsTable.firstChild) {\n    domObjects.projectsTable.removeChild(domObjects.projectsTable.lastChild);\n  }\n\n  for (var i = 0; i < projectsArray.length; i++) {\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(domObjects.projectsTable, \"div\", \"project\".concat(i, \"CellDiv\"), \"projectCellDiv\");\n    var projectCellDiv = domObjects[\"project\".concat(i, \"CellDiv\")];\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(projectCellDiv, \"div\", \"project\".concat(i, \"Options\"), \"options\");\n    var projectOptions = domObjects[\"project\".concat(i, \"Options\")];\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(projectOptions, \"a\", \"project\".concat(i, \"OptionsBtn\"), \"optionsBtn\");\n    var projectOptionsBtn = domObjects[\"project\".concat(i, \"OptionsBtn\")];\n    projectOptionsBtn.innerHTML = \"...\";\n    projectOptionsBtn.setAttribute(\"data-project-id\", i); //Project div\n\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(projectCellDiv, \"div\", \"project\".concat(i), \"projectCell\");\n    var project = domObjects[\"project\".concat(i)]; //Project element\n\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(project, \"h2\", \"project\".concat(i, \"Title\"), \"projectTitle\");\n    var projectTitle = domObjects[\"project\".concat(i, \"Title\")];\n    projectTitle.innerHTML = Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"shortenStr\"])(projectsArray[i].title, 20);\n    projectTitle.setAttribute(\"contentEditable\", \"true\");\n    projectTitle.setAttribute(\"spellcheck\", \"false\");\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(project, \"div\", \"project\".concat(i, \"Color\"), \"projectColor\");\n    var projectColor = domObjects[\"project\".concat(i, \"Color\")];\n    projectColor.style.background = \"linear-gradient(232.33deg, \".concat(projectsArray[i].color1, \" 0%, \").concat(projectsArray[i].color2, \" 100.01%)\");\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(project, \"h3\", \"project\".concat(i, \"ListHeading\"), \"projectListHeading\");\n    var projectListHeading = domObjects[\"project\".concat(i, \"ListHeading\")];\n    projectListHeading.innerHTML = \"LISTS\";\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(project, \"div\", \"project\".concat(i, \"ListsDiv\"), \"projectListsDiv\");\n    var projectListsDiv = domObjects[\"project\".concat(i, \"ListsDiv\")];\n\n    if (projectsArray[i].lists.length > 0) {\n      var listsInProject = void 0;\n\n      if (projectsArray[i].lists.length < 4) {\n        listsInProject = projectsArray[i].lists.length;\n      } else {\n        listsInProject = 4;\n      }\n\n      for (var index = 0; index < listsInProject; index++) {\n        Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(projectListsDiv, \"div\", \"project\".concat(i, \"List\").concat(index, \"Box\"), \"projectListBox\");\n        var projectListBox = domObjects[\"project\".concat(i, \"List\").concat(index, \"Box\")];\n        Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(projectListBox, \"p\", \"project\".concat(i, \"List\").concat(index), \"projectList\");\n        var projectList = domObjects[\"project\".concat(i, \"List\").concat(index)];\n        projectList.innerHTML = projectsArray[i].lists[index].title;\n      }\n    } else {\n      Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(projectListsDiv, \"div\", \"project\".concat(i, \"NoListBox\"), \"projectListBox\");\n      var projectNoListBox = domObjects[\"project\".concat(i, \"NoListBox\")];\n      Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(projectNoListBox, \"p\", \"project\".concat(i, \"NoList\"), \"projectNoList\");\n      var projectNoList = domObjects[\"project\".concat(i, \"NoList\")];\n      projectNoList.innerHTML = \"View project to add new list\";\n    }\n\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(project, \"div\", \"project\".concat(i, \"ViewDiv\"), \"projectViewDiv\");\n    var projectViewDiv = domObjects[\"project\".concat(i, \"ViewDiv\")];\n    Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(projectViewDiv, \"a\", \"project\".concat(i, \"ViewLink\"), \"projectViewLink\");\n    var projectViewLink = domObjects[\"project\".concat(i, \"ViewLink\")];\n    projectViewLink.innerHTML = \"VIEW\";\n  }\n}\n\n//# sourceURL=webpack:///./src/projectsDOM.js?");

/***/ }),

/***/ "./src/projectsLogic.js":
/*!******************************!*\
  !*** ./src/projectsLogic.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initpages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initpages.js */ \"./src/initpages.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsDOM.js */ \"./src/projectsDOM.js\");\n/* harmony import */ var _listsLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listsLogic.js */ \"./src/listsLogic.js\");\n/* harmony import */ var _listsDOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listsDOM.js */ \"./src/listsDOM.js\");\n\n\n\n\n\n\n(function projectsLogic() {\n  var projectsArray = Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"importStored\"])(\"project\").array.values;\n  document.body.firstElementChild.tabIndex = 1;\n\n  var project = function project(title, description, color1, color2) {\n    var lists = [];\n    return {\n      title: title,\n      description: description,\n      color1: color1,\n      color2: color2,\n      lists: lists\n    };\n  };\n\n  var domObjects = _initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"initPagesExport\"].domObjects;\n\n  function createProject(title) {\n    var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n    var color1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"#4DB4FF\";\n    var color2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : color1;\n    var projName = project(title, description, color1, color2);\n    projectsArray.unshift(projName);\n  }\n\n  function deleteProject(id) {\n    projectsArray.splice(id, 1);\n    Object(_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__[\"buildProjects\"])(projectsArray);\n    buildProjectsLogic();\n    Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"writeToLocal\"])(projectsArray);\n  }\n\n  function buildProjectsLogic() {\n    var _loop = function _loop(i) {\n      var projectOptionsBtn = document.getElementById(\"project\".concat(i, \"OptionsBtn\"));\n      projectOptionsBtn.addEventListener(\"click\", function (e) {\n        console.log(e);\n        deleteProject(e.target.getAttribute(\"data-project-id\"));\n      });\n      var projectTitle = domObjects[\"project\".concat(i, \"Title\")];\n      projectTitle.addEventListener(\"keydown\", function (e) {\n        Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"maxLimitForContenteditableDiv\"])(e, projectTitle, 20);\n      });\n      projectTitle.addEventListener(\"paste\", function (e) {\n        Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"maxLimitForContenteditableDiv\"])(e, projectTitle, 20);\n      });\n      projectTitle.addEventListener(\"focus\", function (e) {\n        e.target.setAttribute(\"style\", \"border: solid 1px \".concat(projectsArray[i].color1, \";\\n                box-shadow: 0px 0px 4px \").concat(projectsArray[i].color1, \";\"));\n      });\n      projectTitle.addEventListener(\"blur\", function (e) {\n        e.target.setAttribute(\"style\", \"\");\n        projectsArray[i].title = projectTitle.innerHTML;\n        Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"writeToLocal\"])(projectsArray);\n      });\n      var projectView = domObjects[\"project\".concat(i, \"ViewLink\")];\n      projectView.addEventListener(\"click\", function (e) {\n        Object(_initpages_js__WEBPACK_IMPORTED_MODULE_0__[\"clearPage\"])(\"project\");\n        Object(_listsDOM_js__WEBPACK_IMPORTED_MODULE_4__[\"buildLists\"])(projectsArray[i]);\n        Object(_listsLogic_js__WEBPACK_IMPORTED_MODULE_3__[\"listsLogic\"])(projectsArray[i], projectsArray);\n      });\n    };\n\n    for (var i = 0; i < projectsArray.length; i++) {\n      _loop(i);\n    }\n  }\n\n  Object(_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__[\"buildProjects\"])(projectsArray);\n  buildProjectsLogic();\n\n  (function addProjectBtn() {\n    domObjects.addProjectBtn.addEventListener(\"click\", function () {\n      createProject(\"New Project\", \"\");\n      Object(_projectsDOM_js__WEBPACK_IMPORTED_MODULE_2__[\"buildProjects\"])(projectsArray);\n      buildProjectsLogic();\n      Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"writeToLocal\"])(projectsArray);\n    });\n  })();\n})();\n\n//# sourceURL=webpack:///./src/projectsLogic.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: writeToLocal, importStored */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"writeToLocal\", function() { return writeToLocal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importStored\", function() { return importStored; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n//Check if storage is available\nfunction storageAvailable(type) {\n  var storage;\n\n  try {\n    storage = window[type];\n    var x = \"__storage_test__\";\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (e) {\n    return e instanceof DOMException && ( // everything except Firefox\n    e.code === 22 || // Firefox\n    e.code === 1014 || // test name field too, because code might not be present\n    // everything except Firefox\n    e.name === \"QuotaExceededError\" || // Firefox\n    e.name === \"NS_ERROR_DOM_QUOTA_REACHED\") && // acknowledge QuotaExceededError only if there's something already stored\n    storage && storage.length !== 0;\n  }\n}\n\nvar data = {\n  set: function set(key, value) {\n    if (!key || !value) {\n      return;\n    }\n\n    if (_typeof(value) === \"object\") {\n      value = JSON.stringify(value);\n    }\n\n    localStorage.setItem(key, value);\n  },\n  get: function get(key) {\n    var value = localStorage.getItem(key);\n\n    if (!value) {\n      return;\n    } // assume it is an object that has been stringified\n\n\n    if (value[0] === \"{\") {\n      value = JSON.parse(value);\n    }\n\n    return value;\n  }\n}; //Save to localstorage\n\n/*export function writeToLocal(array) {\n  if (storageAvailable(\"localStorage\")) {\n    localStorage.clear();\n    for (let i = 0; i < array.length; i++) {\n      //Number of projects in total\n      for (let index = 0; index < Object.entries(array[i]).length; index++) {\n        //Entries inside each object\n        let id = document.getElementById(`project${i}`).id;\n        let key = Object.entries(array[i])[index][0]; //Key\n        let value = Object.entries(array[i])[index][1]; //Value\n        data.set(id + key, value);\n      }\n    }\n  }\n} */\n\nfunction writeToLocal(array) {\n  if (storageAvailable(\"localStorage\")) {\n    localStorage.clear();\n\n    for (var i = 0; i < array.length; i++) {\n      var id = \"project\".concat(i);\n      var arrayObject = array[i];\n      localStorage.setItem(id, JSON.stringify(arrayObject));\n    }\n  }\n}\n\nfunction getStored(keyName) {\n  if (storageAvailable(\"localStorage\")) {\n    var entries = Object.entries(localStorage);\n    var values = [];\n    var validEntries = [];\n\n    for (var i = 0; i < entries.length; i++) {\n      if (entries[i][0].includes(keyName)) {\n        validEntries.push(entries[i][0]);\n      }\n    }\n\n    for (var index = 0; index < validEntries.length; index++) {\n      var storedObject = localStorage.getItem(keyName + index);\n      values.push(JSON.parse(storedObject));\n    }\n\n    return {\n      values: values\n    };\n  }\n\n  return false;\n}\n\nfunction importStored(keyName) {\n  var array;\n  var storedArray = getStored(keyName);\n\n  if (storedArray != false) {\n    array = storedArray;\n  } else {\n    array = [];\n  }\n\n  return {\n    array: array\n  };\n}\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ })

/******/ });