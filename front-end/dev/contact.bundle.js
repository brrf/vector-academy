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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/js/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/js/contact.js":
/*!**********************************!*\
  !*** ./src/public/js/contact.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner */ \"./src/public/js/spinner.js\");\n\n\n\nvar button = document.querySelector(\"#contact-form button\");\nvar form = document.getElementById(\"contact-form\");\nbutton.addEventListener(\"click\", submitForm); // repaint DOM when server responds without error\n\nfunction repaintDOM() {\n  document.querySelector('h2').innerHTML = 'Message Received!';\n  document.querySelector('form').remove();\n  var text = document.createElement('p');\n  text.innerHTML = 'We appreciate your reaching out. We will be in touch shortly with a reply.';\n  document.querySelector('.contact-form-container').appendChild(text);\n}\n\nfunction submitForm(e) {\n  e.preventDefault();\n  var firstName = document.getElementById(\"contact-form\").elements[\"firstName\"].value;\n  var lastName = document.getElementById(\"contact-form\").elements[\"lastName\"].value;\n  var email = document.getElementById(\"contact-form\").elements[\"email\"].value;\n  var message = document.getElementById(\"contact-form\").elements[\"message\"].value; //form Validation\n\n  if (!firstName || !lastName || !email || !message) {\n    return;\n  }\n\n  var element = document.querySelector('#contact-form div');\n  Object(_spinner__WEBPACK_IMPORTED_MODULE_0__[\"addSpinner\"])(element);\n  var body = {\n    firstName: firstName,\n    lastName: lastName,\n    email: email,\n    message: message\n  };\n  fetch(\"\".concat(\"http://localhost:3001\", \"/contact\"), {\n    method: 'POST',\n    body: JSON.stringify(body),\n    headers: {\n      \"Content-Type\": \"application/json\"\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (resObject) {\n    if (!resObject.err) {\n      alert('hello');\n      Object(_spinner__WEBPACK_IMPORTED_MODULE_0__[\"removeSpinner\"])();\n      repaintDOM();\n    } else {\n      alert('error');\n      Object(_spinner__WEBPACK_IMPORTED_MODULE_0__[\"removeSpinner\"])();\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/public/js/contact.js?");

/***/ }),

/***/ "./src/public/js/spinner.js":
/*!**********************************!*\
  !*** ./src/public/js/spinner.js ***!
  \**********************************/
/*! exports provided: addSpinner, removeSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addSpinner\", function() { return addSpinner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeSpinner\", function() { return removeSpinner; });\nfunction addSpinner(element) {\n  var spinner = document.createElement('div');\n  spinner.classList.add('spinner-box');\n  spinner.innerHTML = '<div class=\"circle-border\"><div class=\"circle-core\"></div></div>';\n  element.appendChild(spinner);\n}\nfunction removeSpinner() {\n  document.querySelector('.spinner-box').remove();\n}\n\n//# sourceURL=webpack:///./src/public/js/spinner.js?");

/***/ })

/******/ });