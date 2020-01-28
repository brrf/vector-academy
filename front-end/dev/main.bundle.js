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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/body.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/body.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html {\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*:before,\\n*:after {\\n  box-sizing: inherit;\\n}\\n\\nhtml,\\nbody {\\n  height: 100%;\\n}\\n\\nbody {\\n\\tcolor: #19225C;\\n\\tbackground-color: #fbfcfd;\\n\\tmargin: 0;\\n\\tfont-family: 'Lato', sans-serif;\\n\\tbackground-color: #f4f5f947;\\n}\\n\\nmain {\\n\\tmargin-top: 50px;\\n\\tdisplay: block;\\n}\\n\\n.top-section {\\n\\tpadding: 2vw 1.5vw 0 1.5vw;\\n}\\n\\nh1 {\\n\\tcursor: pointer;\\n\\tmargin-left: 2vw;\\n\\tfont-family: 'Bitter', serif;\\n\\tfont-size: 36px;\\n}\\n\\nh2 {\\n\\tfont-family: 'Bitter', serif;\\n\\tfont-weight: bold;\\n\\tfont-size: 2.5vw;\\n\\tmargin: 0;\\n}\\n\\nh3 {\\n\\tmargin: 0.3vw 0;\\n\\tfont-size: 1.5vw;\\n\\tfont-weight: bold;\\n\\tfont-family: 'Bitter', serif;\\n}\\n\\nh4 {\\n\\tmargin: 0;\\n\\tfont-weight: normal;\\n\\tfont-size: 1.4vw;\\t\\n}\\n\\nh5 {\\n\\tfont-size: 1.3vw;\\n\\tmargin: 0;\\n\\tz-index: 1;\\n}\\n\\np {\\n\\tmargin: 0;\\n\\tline-height: 1.4vw;\\n\\tfont-size: 1.2vw;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n\\tcolor: inherit;\\n}\\n\\na:hover {\\n\\ttext-shadow: 0 0 1px grey;\\n}\\n\\nbutton {\\n\\t cursor: pointer; \\n\\t background-color: #212A65;\\n\\t max-width: 200px;\\n\\t width: 10vw;\\n\\t min-width: 150px;\\n\\t color: white; \\n\\t border: none; \\n\\t font-size: 18px;\\n\\t padding: 8px; \\n}\\n\\nbutton:hover {\\n\\topacity: 0.9;\\n}\\n\\nul {\\n    padding: 0;\\n    list-style: none;\\n}\\n\\nimg {\\n\\twidth: 150px;\\n\\tmargin-left: 10px;\\n\\tmargin-top: 5px;\\n}\\n\\ntextarea {\\n\\tfont-family: inherit;\\n}\\n\\n.center {\\n\\ttext-align: center;\\n}\\n\\n.center h4 {\\n\\tpadding: 0.6vw 12vw 1.5vw 12vw;\\n}\\n\\n/*tablet*/\\n@media (max-width: 990px) {\\n\\tbody {\\n\\t\\t-webkit-text-size-adjust: none;\\n\\t}\\n\\tmain {\\n\\t\\tmargin-top: 50px;\\n\\t}\\n\\n\\th1:hover {\\n\\t\\topacity: 0.7;\\n\\t}\\n\\n\\th2 {\\n\\t\\tfont-size: 3.1vw;\\n\\t\\tmargin: 0;\\n\\t}\\n\\n\\th3 {\\n\\t\\tfont-size: 2.5vw;\\n\\t}\\n\\n\\th4 {\\n\\t\\tfont-size: 2.4vw;\\n\\t}\\n\\n\\th5 {\\n\\t\\tfont-size: 2vw;\\n\\t}\\n\\n\\tp {\\n\\t\\tfont-size: 1.8vw;\\n\\t\\tline-height: 2.2vw;\\n\\t}\\n}\\n\\n\\n/*mobile*/\\n@media (max-width: 550px) {\\n\\th1 {\\n\\t\\tfont-size: 28px;\\n\\t}\\n\\n\\th1:hover {\\n\\t\\topacity: 0.7;\\n\\t}\\n\\n\\th2 {\\n\\t\\tfont-size: 6vw;\\n\\t\\tmargin: 3vw 0;\\n\\t}\\n\\n\\th3 {\\n\\t\\tfont-size: 4.8vw;\\n\\t}\\n\\n\\th4 {\\n\\t\\tfont-size: 4.5vw;\\n\\t\\tmargin-bottom: 3vw;\\n\\t}\\n\\n\\th5 {\\n\\t\\tfont-size: 4.2vw;\\n\\t}\\n\\n\\tp {\\n\\t\\tfont-size: 3.9vw;\\n\\t\\tline-height: 4.5vw;\\n\\t}\\n\\timg {\\n\\t\\twidth: 120px;\\n\\t\\tmargin-left: 10px;\\n\\t}\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/css/body.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/contact.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/contact.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".contact-form-container {\\n\\twidth: 50%;\\n}\\n\\n@media (max-width: 990px) {\\n\\t.contact-form-container {\\n\\t\\twidth: 70%;\\n\\t}\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/css/contact.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/faq.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/faq.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".faq-category {\\n\\tmargin: 3vw 11vw;\\n}\\n\\n.accordion {\\n    border-top: 1px solid #e5e5e5;\\n}\\n\\n.accordion-item {\\n    border-bottom: 1px solid #e5e5e5;\\n}\\n\\n/* Thumb */\\n.accordion-thumb {\\n    cursor: pointer;\\n    padding: 1vw 0;\\n    margin: 0;\\n}\\n\\n.accordion-thumb::before {\\n    content: '';\\n    display: inline-block;\\n    height: 0.8vw;\\n    width: 0.8vw;\\n    margin-right: 1.2vw;\\n    margin-left: .6vw;\\n    margin-bottom: 0.15vw;\\n    vertical-align: middle;\\n    border-right: 1px solid;\\n    border-bottom: 1px solid;\\n    transform: rotate(-45deg);\\n    transition: transform .2s ease-out;\\n}\\n\\n/* Panel */\\n.accordion-panel {\\n    margin: 0 0 0 2.6vw;\\n    padding-bottom: .8rem;\\n    display: none;\\n    color: #383651;\\n}\\n\\n.accordion-panel p {\\n\\tmargin-bottom: 1vw;\\n}\\n\\n.accordion-panel ul {\\n\\tlist-style-type: disc;\\n\\tmargin: 0 0 1vw 3vw;\\n}\\n\\n.accordion-panel ul li {\\n\\tline-height: 2vw;\\n\\tfont-size: 1.2vw;\\n}\\n\\n/* Active */\\n.accordion-item.is-active .accordion-thumb::before {\\n    transform: rotate(45deg);\\n}\\n\\n.accordion-panel.display {\\n\\tdisplay: block;\\n}\\n\\n@media (max-width: 990px) {\\n\\t#faq-section {\\n\\t\\tpadding-top: 10px;\\n\\t}\\n\\t.accordion-thumb::before {\\n\\t\\theight: 1.0vw;\\n\\t\\twidth: 1.0vw;\\n\\t\\tmargin-right: 2.2vw;\\n\\t}\\n\\t.accordion-panel {\\n\\t\\tmargin: 0 0 0 4.0vw;\\n\\t}\\n\\t.accordion-panel ul {\\n\\t\\tmargin: 0 0 2vw 4vw;\\n\\t}\\n\\t.accordion-panel ul li {\\n\\t\\tfont-size: 1.8vw;\\n\\t\\tline-height: 2.2vw;\\n\\t}\\n}\\n\\n@media (max-width: 550px) {\\n\\t.accordion-thumb {\\n\\t\\tpadding: 1vw 0 2vw 0;\\n\\t}\\n\\n\\t.accordion-thumb::before {\\n\\t\\theight: 1.5vw;\\n\\t\\twidth: 1.5vw;\\n\\t\\tmargin-right: 2.2vw;\\n\\t}\\n\\n\\t.accordion-panel {\\n\\t\\tmargin: 0 0 0 4.5vw;\\n\\t}\\n\\n\\t.accordion-panel p {\\n\\t\\tmargin-bottom: 2vw;\\n\\t}\\n\\n\\t.accordion-panel ul {\\n\\t\\tmargin: 0 0 2vw 6vw;\\n\\t}\\n\\n\\t.accordion-panel ul li {\\n\\t\\tfont-size: 3.9vw;\\n\\t\\tline-height: 4.5vw;\\n\\t}\\n}\\n\\n\\n\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/css/faq.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/footer.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/footer.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"footer {\\n\\tbackground-color: #040A2B;\\n\\tcolor: #f0edee;\\n\\tpadding: 1.5vw 2.8vw;\\n}\\n\\n.footer-container {\\n\\tdisplay: flex;\\n\\tflex-flow: row nowrap;\\n\\tjustify-content: space-between;\\t\\n}\\n\\n.footer-container div {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n}\\n\\n.footer-container div:first-child {\\n\\tflex-basis: 50%;\\n\\tjustify-content: space-between;\\n}\\n\\n.footer-container h1 {\\n\\tmargin: 0;\\n}\\n\\nfooter p {\\n\\tcolor: #55575e;\\n}\\n\\nfooter li {\\n\\tmargin-bottom: 0.5em;\\n\\tfont-size: 1vw;\\n}\\n\\n/*tablet*/\\n@media (max-width: 990px) {\\t\\n\\tfooter li {\\n\\t\\tfont-size: 1.6vw;\\n\\t}\\n\\n\\tfooter p {\\n\\t\\tfont-size: 1.3vw;\\n\\t}\\n}\\n\\n/*mobile*/\\n@media (max-width: 550px) {\\n\\n\\t.footer-container {\\n\\t\\tmin-height: 350px;\\n\\t\\tflex-flow: column nowrap;\\n\\t\\tjustify-content: space-around;\\n\\t\\talign-items: flex-start;\\n\\t\\tmargin-left: 40%;\\n\\t}\\n\\n\\t.footer-container h3 {\\n\\t\\tfont-size: 4vw;\\n\\t}\\n\\n\\tfooter p {\\n\\t\\ttext-align: center;\\n\\t\\tfont-size: 3vw;\\n\\t}\\n\\n\\tfooter li {\\n\\t\\tfont-size: 3.4vw;\\n\\t}\\n}\\n\\n.hidden {\\n\\tdisplay: none;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/css/footer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/forms.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/forms.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#form-container {\\n\\tmargin: 10vw auto;\\n\\tbox-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);\\n\\tborder-radius: 10px;\\n\\tpadding: 2.5vw;\\n\\tposition: relative;\\n\\tbackground-color: #fbfcfd;\\n}\\n\\n#form-container h2 {\\n\\tmargin-bottom: 2vw;\\n\\ttext-align: center;\\n}\\n\\n#form-container span {\\n\\tposition: absolute;\\n\\tleft: 92%;\\n\\ttop: 0.5vw;\\n\\tcolor: black;\\n\\tfont-size: 25px;\\n}\\n\\n#form-container span:hover, #form-container span:focus {\\n\\tcolor: grey;\\n\\tcursor: pointer;\\n}\\n\\n#form-container form {\\n\\tdisplay: flex;\\n\\tflex-flow: row wrap;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n}\\n\\nform > div {\\n\\tflex-basis: 100%;\\n\\tposition: relative;\\n}\\n\\n.form-half-width {\\n\\tflex-basis: 49%;\\n}\\n\\n.form-half-width.first {\\n\\tmargin-right: 1%;\\n}\\n\\n.form-half-width.second {\\n\\tmargin-left: 1%;\\n}\\n\\n.form-full-width {\\n\\tflex-basis: 100%;\\n}\\n\\nform input {\\n\\tmargin-bottom: 20px;\\n}\\n\\ninput, textarea {\\n\\tborder: 1px solid #d5d8e4;\\n\\tborder-radius: 3px;\\n\\tbackground-color: white;\\n\\tpadding: 6px;\\n}\\ninput {\\n\\theight: 35px;\\n}\\n\\ntextarea {\\n\\tmargin-bottom: 30px;\\n}\\n\\n@media (max-width: 990px) {\\n\\t#form-container {\\n\\t\\tmargin: 10vw auto;\\n\\t}\\n\\t#form-container h2 {\\n\\t\\tmargin: 2vw 0;\\n\\t}\\n}\\n\\n@media (max-width: 550px) {\\n\\t#form-container {\\n\\t\\tbox-shadow: none;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\t#form-container h2 {\\n\\t\\tmargin-bottom: 4vw;\\n\\t}\\n}\\n\\n.warning {\\n\\tcolor: #721c24;\\n    background-color: #f8d7da;\\n    border-color: #f5c6cb;\\n\\tmargin: 15px auto;\\n\\tpadding: 6px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/css/forms.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/hamburger.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/hamburger.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*\\n * Hamburgers\\n * @description Tasty CSS-animated hamburgers\\n * @author Jonathan Suh @jonsuh\\n * @site https://jonsuh.com/hamburgers\\n * @link https://github.com/jonsuh/hamburgers\\n */\\n.hamburger {\\n  padding: 15px 15px;\\n  display: inline-block;\\n  transition-property: opacity, filter;\\n  transition-duration: 0.15s;\\n  transition-timing-function: linear;\\n  font: inherit;\\n  color: inherit;\\n  text-transform: none;\\n  background-color: transparent;\\n  border: 0;\\n  margin: 0;\\n  overflow: visible;\\n}\\n  .hamburger:hover {\\n    opacity: 0.7; }\\n  .hamburger.is-active:hover {\\n    opacity: 0.7; }\\n  .hamburger.is-active .hamburger-inner,\\n  .hamburger.is-active .hamburger-inner::before,\\n  .hamburger.is-active .hamburger-inner::after {\\n    background-color: #000; }\\n\\n.hamburger-inner {\\n  display: block;\\n  margin-top: -2px;\\n  }\\n  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\\n    width: 40px;\\n    height: 2px;\\n    background-color: #19225C;\\n    border-radius: 4px;\\n    position: absolute;\\n    transition-property: transform;\\n    transition-duration: 0.15s;\\n    transition-timing-function: ease;\\n    }\\n  .hamburger-inner::before, .hamburger-inner::after {\\n    content: \\\"\\\";\\n    display: block; }\\n  .hamburger-inner::before {\\n    top: -8px; }\\n  .hamburger-inner::after {\\n    bottom: -8px; }\\n\\n    /*\\n   * Spin\\n   */\\n.hamburger--spin .hamburger-inner {\\n  transition-duration: 0.22s;\\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\\n  .hamburger--spin .hamburger-inner::before {\\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }\\n  .hamburger--spin .hamburger-inner::after {\\n    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\\n\\n.hamburger--spin.is-active .hamburger-inner {\\n  transform: rotate(225deg);\\n  transition-delay: 0.12s;\\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\\n  .hamburger--spin.is-active .hamburger-inner::before {\\n    top: 0;\\n    opacity: 0;\\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }\\n  .hamburger--spin.is-active .hamburger-inner::after {\\n    bottom: 0;\\n    transform: rotate(-90deg);\\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/css/hamburger.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/header.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/header.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#navbar-container {\\n\\tz-index: 1000;\\n\\tdisplay: flex;\\n\\tflex-flow: row nowrap;\\n\\tjustify-content: space-between;\\n\\talign-items: center;\\n\\tposition: fixed;\\n\\twidth: 100%;\\n\\ttop: 0;\\n\\tbackground-color: white;\\n\\tpadding: 0.7vw;\\n\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.3);\\n\\theight: 60px;\\n}\\n\\n.navbar-mobile {\\n\\tdisplay: none;\\n}\\n\\n.navbar-links {\\n\\tdisplay: flex;\\n\\tflex-flow: row nowrap;\\n\\tjustify-content: flex-end;\\n\\talign-items: center;\\n}\\n\\nul li {\\n    position: relative;\\n}\\n\\n.navbar-links > li {\\n\\tcursor: pointer;\\n\\tmargin: 0.3vw 0.3vw 0.3vw 1.8vw;\\n\\tfont-family: 'Lato', sans-serif;\\n\\tfont-size: 16px; \\n\\tcolor: #4F588F;\\n}\\n\\n.navbar-links > li:hover {\\n\\ttext-shadow: 0 0 0.01px black;\\n}\\n\\n.dropdown {\\n    min-width: 100%; \\n    background-color: white;\\n    padding: 1vw 0.2vw;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-start;\\n    text-align: left;\\n    position: absolute;\\n    z-index: 3;\\n    left: -2vw;\\n    box-shadow: 0 0 11px 1px rgba(0,0,0,.15);\\n    border: 1px solid #e2e2e2;\\n    border-radius: 5%;\\n    text-shadow: none;\\n\\n}\\n\\n.dropdown li {\\n\\tpadding: 0.3vw 0.5vw;\\n}\\n\\n.dropdown > li:hover {\\n\\ttext-shadow: 0 0 0.01px black;\\n}\\n\\n.login-modal {\\n\\tbackground-color: rgba(0,0,0,0.6);\\n\\tposition: fixed;\\n\\ttop: 55px;\\n\\tleft: 0;\\n\\theight: 100%;\\n\\twidth: 100%;\\n\\tz-index: 2;\\n}\\n\\n.login-modal button {\\n\\tmargin-bottom: 20px;\\n}\\n\\n.login-form-container {\\n\\twidth: 425px;\\n}\\n\\n.student-register-modal button {\\n\\tcursor: not-allowed;\\n}\\n\\n.student-register-modal u:hover, .student-login-modal u:hover {\\n\\tcursor: pointer;\\n}\\n\\n/*tablet*/\\n@media (max-width: 990px) {\\n\\t.navbar-links li {\\n\\t\\tmargin: 0.5vw 0.5vw 0.5vw 2.4vw;\\n\\t}\\n}\\n\\n/*mobile*/\\n@media (max-width: 550px) {\\n\\t.navbar-mobile {\\n\\t\\tdisplay: block;\\n\\t\\twidth: 15vw;\\n\\t}\\n\\n\\t#navbar-container {\\n\\t\\tpadding: 0 2.5vw 0 0;\\n\\t\\theight: 50px;\\n\\t}\\n\\n\\t.navbar-large {\\n\\t\\tdisplay: none;\\n\\t}\\n\\t.main-inactive-menu {\\n\\t\\tbackground-color: #4F588F;\\n\\t\\tcolor: white;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: flex-start;\\n\\t\\talign-items: center;\\n\\t\\theight: 96vh;\\n\\t\\tpadding-top: 80px;\\n\\t}\\n\\n\\t.main-inactive-menu a, .main-inactive-menu h3 {\\n\\t\\tmargin-top: 2vw;\\n\\t\\theight: 37px;\\n\\t}\\n\\n\\t.main-inactive-menu h3:hover {\\n\\t\\tcursor: pointer;\\n\\t\\tcolor: #9197BE;\\n\\t}\\n\\n\\t.main-inactive-menu a:hover {\\n\\t\\tcolor: #9197BE;\\n\\t}\\n\\n\\t.main-inactive-menu a > button {\\n\\t\\tbackground-color: #040A2B;\\n\\t\\tmargin-top: 3vw;\\n\\t}\\n\\n}\\n\\n.hidden {\\n\\tdisplay: none;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/css/header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/index_0_0_1.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/index_0_0_1.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/featureimage_web.jpeg */ \"./src/public/assets/featureimage_web.jpeg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/manlearning_web.jpg */ \"./src/public/assets/manlearning_web.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../assets/experience_web.jpg */ \"./src/public/assets/experience_web.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../assets/salary_web.jpg */ \"./src/public/assets/salary_web.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../assets/pencil_web.jpg */ \"./src/public/assets/pencil_web.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../assets/interview_web.jpg */ \"./src/public/assets/interview_web.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../assets/firstday_web.jpg */ \"./src/public/assets/firstday_web.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../assets/juniorapprentice_web.jpg */ \"./src/public/assets/juniorapprentice_web.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../assets/seniorapprentice_web.jpg */ \"./src/public/assets/seniorapprentice_web.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../assets/jumpstart_web.jpeg */ \"./src/public/assets/jumpstart_web.jpeg\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../assets/AdobeStock_181153776.jpeg */ \"./src/public/assets/AdobeStock_181153776.jpeg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\n// Module\nexports.push([module.i, \".first-third-width {\\n\\tmargin-left: 5vw;\\n}\\n\\n.third-third-width {\\t\\n\\tmargin-right: 5vw;\\n}\\n\\n.features-third {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tpadding-top: 1.4vw;\\n\\tbox-shadow: 0 4px 4px -4px #232323;\\n}\\n\\n#top-content-section-large {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n\\tbackground-size: cover;\\n\\tbackground-position: 50% 20%;\\n\\tbackground-color: #9197BE;\\n\\theight: 40vw;\\n\\tmax-height: 83vh;\\n\\tmin-height: 450px;\\n\\tpadding: 7vw 7vw;\\n}\\n\\n#top-content-section-mobile {\\n\\tdisplay: none;\\n}\\n\\n.top-content-container {\\n\\tbackground-color: rgba(255,223,186,0.75);\\n\\tcolor: #19225C;\\n\\twidth: 45%;\\n\\tpadding: 0.5vw 0.8vw;\\n\\theight: 20vw;\\n}\\n\\n.top-content-container > div {\\n\\tpadding: 0.7vw 1.4vw;\\n}\\n\\n.top-content-title {\\n\\tmargin-top: 0.5vw;\\n}\\n\\n.top-content-text {\\t\\n\\twidth: 84%;\\n\\tmargin: 0 0 1.5vw 0;\\n\\tfont-size: 1.4vw;\\n}\\n\\n.about-content {\\n\\tpadding: 1.5vw 1.5vw 0 1.5vw;\\n\\tbackground-color: white;\\n}\\n\\n#features-section {\\n\\tdisplay: flex;\\n\\tflex-flow: row nowrap;\\n\\tjustify-content: space-around;\\n\\tmargin-bottom: 0.6vw;\\n\\tbackground-color: white;\\n\\tpadding-bottom: 4.5vw;\\n\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.2);\\n}\\n\\n.feature-text {\\n\\tpadding: 0.3vw;\\n}\\n\\n.features-third > div:last-child {\\n\\ttext-align: center;\\n\\twidth: 26vw;\\n\\theight: 7.1vw;\\n\\tbackground-color: #fff8efb5;\\n}\\n\\n.features-image {\\n\\theight: 17.4vw;\\n\\tbackground-size: cover;\\n}\\n\\n.education {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\t\\n}\\n\\n.experience {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n\\n.salary {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n\\n.highschool-junior {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n}\\n\\n.highschool-senior {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n\\tbackground-position: 100%;\\n}\\n\\n.junior-apprentice-1 {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n\\tbackground-position: 45%;\\n}\\n\\n.junior-apprentice-2 {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n\\tbackground-position: 30%;\\n}\\n\\n.senior-apprentice {\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n\\tbackground-position: 60%;\\n}\\n\\n#howitworks-section {\\n\\tpadding: 2.7vw 1.5vw 0 1.5vw;\\n\\tdisplay: flex;\\n\\tflex-flow: row wrap;\\n\\tjustify-content: space-around;\\n\\tpadding-bottom: 2.25vw;\\n\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.2);\\n}\\n\\n.howitworks-year-container {\\n\\tdisplay: flex;\\n\\tflex-flow: row nowrap;\\n\\tflex-basis: 40%;\\n\\tmargin-bottom: 2.8vw;\\n}\\n\\n.howitworks-image {\\n\\twidth: 15.3vw;\\n\\theight: 15.3vw;\\n\\tborder-radius: 5%;\\n\\tflex-basis: auto;\\n\\tbackground-size: cover;\\n}\\n\\n.howitworks-content {\\n\\tflex-basis: 20%;\\n\\tflex-grow: 9;\\n\\tdisplay: flex;\\n\\tflex-flow: column nowrap;\\n\\tmargin: 1vw 0 1.7vw -2.1vw;\\n}\\n\\n.year-header {\\n\\tdisplay: flex;\\n\\tflex-direction: row;\\n\\talign-items: center;\\n\\tmargin-bottom: 1.7vw;\\n}\\n\\n.year-label {\\n\\tbackground: #f9f8f1;\\n\\tborder-radius: 100%;\\n\\tbox-shadow: 10px 10px 30px rgba(0,0,0,.15);\\n\\tcontent: \\\" \\\";\\n\\tposition: relative;\\n\\theight: 4.2vw;\\n\\twidth: 4.2vw;\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n}\\n\\n.year-name {\\n\\tmargin: 0 0 0 2.1vw;\\n}\\n\\n.howitworks-content > p {\\n\\tmargin-left: 6.25vw;\\n}\\n\\n#jumpstart-section {\\n\\theight: 30vw;\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\n\\tbackground-size: cover;\\n\\tbackground-position: 50% 55%;\\n\\tposition: relative;\\n}\\n\\n#jumpstart-section > div {\\n\\tbackground-color: rgba(255,223,186,0.8);\\n\\tmargin: 0;\\n\\tposition: absolute;\\n\\ttop: 50%;\\n\\tleft: 50%;\\n\\t-ms-transform: translate(-50%, -50%);\\n\\ttransform: translate(-50%, -50%);\\n\\theight: 40%;\\n\\tpadding: 1.3vw;\\n}\\n\\n#jumpstart-section h2 {\\n\\tmargin-bottom: 7%;\\n}\\n\\n/*tablet*/\\n@media (max-width: 990px) {\\n\\n\\t#top-content-section-large {\\n\\t\\tpadding: 70px 4vw;\\n\\t\\tbackground-position: 60% 20%;\\n\\t\\tdisplay: flex;\\n\\t}\\n\\n\\t.top-content-container {\\t\\t\\n\\t\\theight: 32vw;\\n\\t\\twidth: 45vw;\\n\\t}\\n\\n\\t.top-content-title {\\n\\t\\tmargin: 1vw 0;\\n\\t}\\n\\n\\t.top-content-text {\\t\\n\\t\\tfont-size: 2.2vw;\\n\\t\\tmargin: 0 0 3vw 0;\\n\\t}\\n\\n\\t#features-section {\\n\\t\\tflex-flow: column nowrap;\\n\\t\\talign-items: center;\\n\\t}\\n\\t.first-third-width,\\n\\t.third-third-width {\\n\\t\\tmargin: 0;\\n\\t}\\n\\t.features-third {\\n\\t\\tmargin-bottom: 3vw;\\n\\t}\\n\\t.features-image {\\n\\t\\twidth: 60vw;\\n\\t\\theight: 40vw;\\n\\t\\tbackground-repeat: cover;\\n\\t}\\n\\n\\t.features-third > div:last-child {\\n\\t\\twidth: 60vw;\\n\\t\\theight: 10vw;\\n\\t\\tbackground-color: #fff8efb5;\\n\\t}\\n\\t#howitworks-section {\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\t.howitworks-year-container {\\n\\t\\twidth: 70%;\\n\\t\\tmargin-left: auto;\\n\\t\\tmargin-right: auto;\\n\\t}\\n\\n\\t.howitworks-image {\\n\\t\\twidth: 20vw;\\n\\t\\theight: 20vw;\\n\\t}\\n\\n\\t.howitworks-content {\\n\\t\\tmargin-top: 0.6vw;\\n\\t}\\n\\n\\t.year-header {\\n\\t\\tmargin-bottom: 1vw;\\n\\t}\\n\\n\\t.year-name {\\n\\t\\tmargin-top: -1vw;\\n\\t}\\n\\n\\t.howitworks-content > p {\\n\\t\\tmargin-top: 0vw;\\n\\t\\twidth: 90%;\\n\\t\\tfont-size: 2.5vw;\\n\\t\\tline-height: 3vw;\\n\\t}\\n\\n\\t.login-form-container {\\n\\t\\twidth: 55%;\\n\\t}\\n\\n\\t#jumpstart-section {\\n\\t\\theight: 50vw;\\n\\t}\\n\\n\\t#jumpstart-section div {\\n\\t\\theight: 20vw;\\n\\t\\twidth: 60vw;\\n\\t}\\n\\n\\t#jumpstart-section h2 {\\n\\t\\tmargin: 2vw 0;\\n\\t}\\n}\\n\\n/*mobile*/\\n@media (max-width: 550px) {\\n\\t.login-form-container {\\n\\t\\twidth: 65%;\\n\\t}\\n\\n\\t.login-form-container p {\\n\\t\\tmargin: 20px 0 10px 0;\\n\\t\\tfont-size: 16px;\\n\\t}\\n\\n\\t.student-register-modal-mobile button {\\n\\tcursor: not-allowed;\\n\\t}\\n\\n\\t.student-register-modal-mobile u:hover, .student-login-modal-mobile u:hover {\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t#top-content-section-large {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\t#top-content-section-mobile {\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\t.top-content-image {\\n\\t\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n\\t\\tbackground-size: cover;\\n\\t\\tbackground-position: 75%;\\n\\t\\tbackground-color: #9197BE;\\n\\t\\theight: 50vh;\\n\\t\\tmin-height: 280px;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.top-content-container {\\n\\t\\tbackground-color: #E4E5F0;\\n\\t\\theight: 63vw;\\n\\t\\tmax-height: 315px;\\n\\t\\tpadding-top: 3vw;\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-flow: column nowrap;\\n\\t\\talign-items: center;\\n\\t\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.2);\\n\\t}\\n\\n\\t.top-content-title {\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.top-content-text {\\t\\n\\t\\tfont-size: 4.5vw;\\n\\t\\tmargin: 0 0 4vw 0;\\n\\t\\ttext-align: center;\\n\\t\\tline-height: 6vw;\\n\\t}\\n\\n\\t.features-third {\\n\\t\\tmargin-bottom: 5vw;\\n\\t}\\n\\n\\t.features-image {\\n\\t\\twidth: 75vw;\\n\\t\\theight: 50vw;\\n\\t}\\n\\n\\t.features-third > div:last-child {\\n\\t\\twidth: 75vw;\\n\\t\\theight: 20vw;\\n\\t}\\n\\n\\t#howitworks-section {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t}\\n\\n\\t.howitworks-content {\\n\\t\\tmargin: 0.7vw 0 3.4vw -3.3vw;\\n\\t}\\n\\n\\t.howitworks-year-container {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-flow: row nowrap;\\n\\t\\tflex-basis: 40%;\\n\\t\\tmargin: 0 0 4vw 0;\\n\\t\\twidth: inherit;\\n\\t}\\n\\n\\t.howitworks-image {\\n\\t\\twidth: 28vw;\\n\\t\\theight: 28vw;\\n\\t}\\n\\n\\t.year-header {\\n\\t\\tmargin-bottom: 0;\\n\\t}\\n\\n\\t.year-label {\\n\\t\\theight: 7vw;\\n\\t\\twidth: 7vw;\\n\\t}\\n\\n\\t.howitworks-content > p {\\n\\t\\tmargin-left: 10vw;\\n\\t\\twidth: inherit;\\n\\t\\tmargin-top: -1vw;\\n\\t\\tfont-size: 3.9vw;\\n   \\t\\tline-height: 4.5vw;\\n\\t}\\n\\n\\t#jumpstart-section {\\n\\t\\theight: 65vw;\\n\\t}\\n\\n\\t#jumpstart-section div {\\n\\t\\theight: 44vw;\\n\\t\\twidth: 75vw;\\n\\t}\\n\\n\\t#jumpstart-section h2 {\\n\\t\\tmargin: 5vw 0;\\n\\t}\\n\\n\\thr {\\n\\t  width: 50%;\\n\\t  margin: 50px 0 30px 0;\\n\\t}\\n}\\n\\n.hidden {\\n\\tdisplay: none;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/css/index_0_0_1.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/privacy.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/privacy.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".privacy-policy-container {\\n\\tpadding: 0 8vw;\\n}\\n\\n#privacy-policy-intro {\\n\\tmargin: 0 13vw;\\n}\\n\\n.privacy-policy-container p, .privacy-policy-container ul {\\n\\tline-height: 1.9vw;\\n}\\n\\n.privacy-policy-container ul {\\n\\tlist-style-type: disc;\\n}\\n\\n.privacy-policy-container li {\\n\\tmargin-bottom: 0.7vw;\\n}\\n\\n.privacy-policy-container hr {\\n\\twidth: 100%;\\n\\tmargin: 0;\\n}\\n\\nstrong {\\n\\t font-weight: 900; \\n}\\n\\n.privacy-section {\\n\\tmargin-top: 4vw;\\n}\\n\\n.privacy-section > h3 {\\n\\tmargin-bottom: 1.5vw;\\n}\\n\\n.privacy-section > h4 {\\n\\tmargin: 1.5vw 0;\\n}\\n\\n.privacy-policy-container p, .privacy-policy-container li {\\n\\tmargin-right: 30vw;\\n\\tfont-size: 1.2vw;\\n\\tcolor: #383651;\\n\\tline-height: 1.9vw;\\n}\\n\\n.privacy-policy-container div:last-child {\\n\\tmargin-bottom: 3vw;\\n}\\n\\n@media (max-width: 990px) {\\n\\tp, ul {\\n\\t\\tline-height: 2.5vw;\\n\\t}\\n\\t.privacy-policy-container p, .privacy-policy-container li {\\n\\t\\tmargin-right: 25vw;\\n\\t\\tfont-size: 2.2vw;\\n\\t\\tline-height: 3.3vw;\\n\\t}\\n}\\n\\n@media (max-width: 550px) {\\n\\t#privacy-policy-intro {\\n\\t\\tmargin: 0 8vw;\\n\\t}\\n\\tp, ul {\\n\\t\\tline-height: 4.5vw;\\n\\t}\\n\\t.privacy-policy-container p, .privacy-policy-container li {\\n\\t\\tmargin-right: 20vw;\\n\\t\\tfont-size: 3vw;\\n\\t\\tline-height: 4.5vw;\\n\\t}\\n\\tli {\\n\\tmargin-bottom: 1.4vw;\\n\\t}\\n\\t.privacy-policy-container div:last-child {\\n\\t\\tmargin-bottom: 7vw;\\n}\\n}\\n\\n\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/css/privacy.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/spinner.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/spinner.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n@keyframes spin {\\n  from {\\n    transform: rotate(0);\\n  }\\n  to{\\n    transform: rotate(359deg);\\n  }\\n}\\n\\n.spinner-box {\\n  position: absolute;\\n  top: 9px;\\n  left: 155px;\\n  margin-left: 10px;\\n  width: 40px;\\n  height: 40px;\\n  align-items: center;\\n  background-color: transparent;\\n}\\n\\n.circle-border {\\n  width: 20px;\\n  height: 20px;\\n  padding: 2px;\\n  align-items: center;\\n  border-radius: 50%;\\n  background: linear-gradient(0deg, rgba(32,42,101,0.1) 33%, rgba(32,42,101,1) 100%);\\n  animation: spin .8s linear 0s infinite;\\n}\\n\\n.circle-core {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #fbfcfd;\\n  border-radius: 50%;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/css/spinner.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app/utils/template-page.js":
/*!****************************************!*\
  !*** ./src/app/utils/template-page.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return templatePage; });\n/* harmony import */ var _public_assets_Vector_01_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/assets/Vector-01.png */ \"./src/public/assets/Vector-01.png\");\n/* harmony import */ var _public_assets_Vector_01_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_assets_Vector_01_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_js_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/js/spinner */ \"./src/public/js/spinner.js\");\n\n\n\"use strict\";\n\nfunction templatePage() {\n  var mainActive = document.querySelector('.main-active');\n  var header = document.createElement('header');\n  header.id = 'navbar-container';\n  header.innerHTML = \"<a href=\\\"./\\\"><img src=\".concat(_public_assets_Vector_01_png__WEBPACK_IMPORTED_MODULE_0___default.a, \" alt=\\\"logo\\\"></a><div class='navbar-large'><ul class='navbar-links'><li>About &#9662<ul class='dropdown hidden'><li><a href=\\\"./howitworks\\\">How it works</a></li><li><a href=\\\"./prereqs\\\">Prerequisites</a></li><li><a href=\\\"./faqs\\\">FAQs</a></li></ul></li><li id=\\\"employer-login\\\">Employer Login</li><li id=\\\"student-login\\\">Student Login</li><li><button>Apply</button></li></ul></div><div class='navbar-mobile'><button class=\\\"hamburger hamburger--spin\\\" type=\\\"button\\\"><span class=\\\"hamburger-inner\\\"></span></button></div><div class=\\\"login-modal employer-modal hidden\\\"><div id='form-container' class=\\\"login-form-container\\\"><span>&times;</span><h2>Employer Login</h2><form><input data-type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"institutionID\\\" maxlength=\\\"50\\\" placeholder=\\\"Institution ID\\\" autofocus required><input type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"password\\\" maxlength=\\\"50\\\" placeholder=\\\"Password\\\" required> \\t<div><button>Login</button>\\t</div></form><p>Don't have an account?   <a href=\\\"./contact\\\"><u>Contact us!</u></a></p></div></div><div class=\\\"login-modal student-login-modal hidden\\\"><div id='form-container' class=\\\"login-form-container\\\"><span>&times;</span><h2>Student Login</h2><form><input data-type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"username\\\" maxlength=\\\"50\\\" placeholder=\\\"Username\\\" autofocus required><input type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"password\\\" maxlength=\\\"50\\\" placeholder=\\\"Password\\\" required> \\t<div><button>Login</button></div></form><p>Don't have an account?   <u>Sign up here!</u></p></div></div><div class=\\\"login-modal student-register-modal hidden\\\"><div id='form-container' class=\\\"login-form-container\\\"><span>&times;</span><h2>Register</h2><div class=\\\"warning\\\">Enrollment opens August 1<sup>st</sup>, 2020.</div><form><input data-type=\\\"text\\\" type=\\\"e-mail\\\" class=\\\"form-full-width\\\" name=\\\"email\\\" maxlength=\\\"50\\\" placeholder=\\\"E-mail\\\" autofocus required disabled><input data-type=\\\"text\\\" type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"username\\\" maxlength=\\\"50\\\" placeholder=\\\"Username\\\" required disabled><input type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"password\\\" maxlength=\\\"50\\\" placeholder=\\\"Password\\\" required disabled><input type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"password2\\\" maxlength=\\\"50\\\" placeholder=\\\"Confirm Password\\\" required disabled>\\t<div><button disabled >Register</button>\\t</div></form><p>Already have an account?   <u>Sign in here!</u></p></div></div>\");\n  document.body.insertBefore(header, mainActive);\n  var mainInactive = document.createElement('main');\n  mainInactive.className = 'main-inactive hidden';\n  mainInactive.innerHTML = \"<div class=\\\"main-inactive-menu\\\"><a href=\\\"./howitworks\\\"><h3>How it works</h3></a><a href=\\\"./prereqs\\\"><h3>Prerequisites</h3></a><a href=\\\"./faqs\\\"><h3>FAQs</h3></a><hr><h3 id=\\\"employer-login-mobile\\\">Employer Login</h3><h3 id=\\\"student-login-mobile\\\">Student Login</h3><a href=\\\"'./apply\\\"><button>Apply</button></a></div><div class=\\\"employer-modal-mobile hidden\\\"><div id='form-container' class=\\\"login-form-container\\\"><h2>Employer Login</h2><form><input data-type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"institutionID\\\" maxlength=\\\"50\\\" placeholder=\\\"Institution ID\\\" autofocus required><input type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"password\\\" maxlength=\\\"50\\\" placeholder=\\\"Password\\\" required><div><button>Login</button>\t</div></form><p>Don't have an account?   <a href=\\\"./contact\\\"><u>Contact us!</u></a></p></div></div><div class=\\\"student-login-modal-mobile hidden\\\"><div id='form-container' class=\\\"login-form-container\\\"><h2>Student Login</h2><form><input data-type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"username\\\" maxlength=\\\"50\\\" placeholder=\\\"Username\\\" autofocus required><input type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"password\\\" maxlength=\\\"50\\\" placeholder=\\\"Password\\\" required> \t<div><button>Login</button>\t</div></form><p>Don't have an account?   <u>Sign up here!</u></p></div></div><div class=\\\"student-register-modal-mobile hidden\\\"><div id='form-container' class=\\\"login-form-container\\\"><h2>Register</h2><div class=\\\"warning\\\">Enrollment opens August 1<sup>st</sup>, 2020.</div><form><input data-type=\\\"text\\\" type=\\\"e-mail\\\" class=\\\"form-full-width\\\" name=\\\"email\\\" maxlength=\\\"50\\\" placeholder=\\\"E-mail\\\" autofocus required disabled><input data-type=\\\"text\\\" type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"username\\\" maxlength=\\\"50\\\" placeholder=\\\"Username\\\" required disabled><input type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"password\\\" maxlength=\\\"50\\\" placeholder=\\\"Password\\\" required disabled><input type=\\\"text\\\" class=\\\"form-full-width\\\" name=\\\"password2\\\" maxlength=\\\"50\\\" placeholder=\\\"Confirm Password\\\" required disabled><div><button disabled >Register</button></div></form><p>Already have an account?   <u>Sign in here!</u></p></div></div>\";\n  document.body.appendChild(mainInactive);\n  var footer = document.createElement('footer');\n  footer.innerHTML = \"<div class='footer-container'><h1><a href=\\\"./index\\\">Vector</a></h1><div><h3>About</h3><ul><li><a href=\\\"./privacy\\\">Privacy Policy</a></li><li><a href=\\\"./contact\\\">Contact</a></li></ul></div><div><h3>Resources</h3><ul><li><a href=\\\"./faqs\\\">FAQ</a></li><li><a href=\\\"./privacy\\\">How it works</a></li><li><a href=\\\"./privacy\\\">Application</a></li></ul></div></div><p></p>\";\n  document.body.appendChild(footer); //toggle mobile login forms\n\n  var employerOpenBtnMobile = document.getElementById('employer-login-mobile');\n  var studentOpenBtnMobile = document.getElementById('student-login-mobile');\n  var employerModalMobile = document.querySelector('.employer-modal-mobile');\n  var studentLoginModalMobile = document.querySelector('.student-login-modal-mobile');\n  var studentRegisterModalMobile = document.querySelector('.student-register-modal-mobile');\n  var signUpHereMobile = document.querySelector('.student-login-modal-mobile u');\n  var loginHereMobile = document.querySelector('.student-register-modal-mobile u');\n  var mainInactiveMenu = document.querySelector('.main-inactive-menu');\n  employerOpenBtnMobile.addEventListener('click', openEmployerMobile);\n  studentOpenBtnMobile.addEventListener('click', openLoginStudentMobile);\n  signUpHereMobile.addEventListener('click', openRegisterStudentMobile);\n  loginHereMobile.addEventListener('click', openLoginStudentMobile);\n\n  function openEmployerMobile(e) {\n    mainInactiveMenu.classList.add('hidden');\n    employerModalMobile.classList.remove('hidden');\n  }\n\n  function openLoginStudentMobile(e) {\n    mainInactiveMenu.classList.add('hidden');\n    if (!studentRegisterModalMobile.classList.contains('hidden')) studentRegisterModalMobile.classList.add('hidden');\n    studentLoginModalMobile.classList.remove('hidden');\n  }\n\n  function openRegisterStudentMobile(e) {\n    studentLoginModalMobile.classList.add('hidden');\n    studentRegisterModalMobile.classList.remove('hidden');\n  } //handle mobile login requests\n\n\n  var employerLoginBtn = document.querySelector(\".employer-modal-mobile button\");\n  var studentLoginBtn = document.querySelector(\".student-login-modal-mobile button\");\n  employerLoginBtn.addEventListener('click', handleEmployerLogin);\n  studentLoginBtn.addEventListener('click', handleStudentLogin);\n\n  function tempResponse(userType) {\n    var container = document.querySelector(\".\".concat(userType, \"-modal-mobile .login-form-container\"));\n    Object(_public_js_spinner__WEBPACK_IMPORTED_MODULE_1__[\"removeSpinner\"])(); //remove a warning if already present\n\n    if (document.querySelector(\".\".concat(userType, \"-modal-mobile .warning\"))) {\n      var deleteWarning = document.querySelector(\".\".concat(userType, \"-modal-mobile .login-form-container .warning\"));\n      container.removeChild(deleteWarning);\n    }\n\n    var h2 = document.querySelector(\".\".concat(userType, \"-modal-mobile .login-form-container h2\"));\n    var warning = document.createElement('p');\n    warning.classList = 'warning';\n    warning.innerHTML = 'No such user exists';\n    container.insertBefore(warning, h2);\n  }\n\n  function handleEmployerLogin(e) {\n    e.preventDefault(); //form Validation\n\n    var institutionID = document.querySelector(\".employer-modal-mobile form\").elements[\"institutionID\"].value;\n    var password = document.querySelector(\".employer-modal-mobile form\").elements[\"password\"].value;\n\n    if (!institutionID || !password) {\n      return;\n    } else {\n      var element = document.querySelector('.employer-modal-mobile form div');\n      Object(_public_js_spinner__WEBPACK_IMPORTED_MODULE_1__[\"addSpinner\"])(element);\n      setTimeout(tempResponse, 800, 'employer');\n    }\n  }\n\n  function handleStudentLogin(e) {\n    e.preventDefault(); //form Validation\n\n    var username = document.querySelector(\".student-login-modal-mobile form\").elements[\"username\"].value;\n    var password = document.querySelector(\".student-login-modal-mobile form\").elements[\"password\"].value;\n\n    if (!username || !password) {\n      return;\n    } else {\n      var element = document.querySelector('.student-login-modal-mobile form div');\n      Object(_public_js_spinner__WEBPACK_IMPORTED_MODULE_1__[\"addSpinner\"])(element);\n      setTimeout(tempResponse, 800, 'student-login');\n    }\n  } //update copyright by year\n\n\n  var copyright = document.querySelector('footer p');\n  var year = new Date().getFullYear();\n  copyright.innerHTML = \"Copyright &copy; \".concat(year, \" Vector Training Academy. All Rights Reserved.\"); //toggle active of hamburger\n\n  var hamburger = document.querySelector('.hamburger');\n  hamburger.addEventListener(\"click\", function () {\n    hamburger.classList.toggle('is-active');\n    mainActive.classList.toggle('hidden');\n    mainInactive.classList.toggle('hidden');\n    mainInactiveMenu.classList.remove('hidden');\n    employerModalMobile.classList.add('hidden');\n    studentRegisterModalMobile.classList.add('hidden');\n    studentLoginModalMobile.classList.add('hidden');\n    footer.classList.toggle('hidden');\n  }); //toggle dropdown list (no :hover event on mobile)\n\n  var dropdownParent = document.querySelector('.navbar-links li:first-child');\n  var dropdownList = document.querySelector('.dropdown');\n  dropdownParent.addEventListener(\"click\", function () {\n    dropdownList.classList.toggle('hidden');\n  });\n  dropdownParent.addEventListener(\"mouseover\", function () {\n    dropdownList.classList.remove('hidden');\n  });\n  dropdownParent.addEventListener(\"mouseout\", function () {\n    dropdownList.classList.add('hidden');\n  });\n}\n;\n\n//# sourceURL=webpack:///./src/app/utils/template-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_utils_template_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/utils/template-page */ \"./src/app/utils/template-page.js\");\n/* harmony import */ var _public_js_header_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/js/header-modals */ \"./src/public/js/header-modals.js\");\n/* harmony import */ var _public_css_hamburger_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/css/hamburger.css */ \"./src/public/css/hamburger.css\");\n/* harmony import */ var _public_css_hamburger_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_hamburger_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_css_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/css/header.css */ \"./src/public/css/header.css\");\n/* harmony import */ var _public_css_header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_header_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_css_footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public/css/footer.css */ \"./src/public/css/footer.css\");\n/* harmony import */ var _public_css_footer_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_footer_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_css_body_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./public/css/body.css */ \"./src/public/css/body.css\");\n/* harmony import */ var _public_css_body_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_css_body_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_css_forms_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public/css/forms.css */ \"./src/public/css/forms.css\");\n/* harmony import */ var _public_css_forms_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_css_forms_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_css_index_0_0_1_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public/css/index_0_0_1.css */ \"./src/public/css/index_0_0_1.css\");\n/* harmony import */ var _public_css_index_0_0_1_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_css_index_0_0_1_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_css_faq_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./public/css/faq.css */ \"./src/public/css/faq.css\");\n/* harmony import */ var _public_css_faq_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_faq_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_css_privacy_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./public/css/privacy.css */ \"./src/public/css/privacy.css\");\n/* harmony import */ var _public_css_privacy_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_css_privacy_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_css_spinner_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./public/css/spinner.css */ \"./src/public/css/spinner.css\");\n/* harmony import */ var _public_css_spinner_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_css_spinner_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_css_contact_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./public/css/contact.css */ \"./src/public/css/contact.css\");\n/* harmony import */ var _public_css_contact_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_css_contact_css__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nObject(_app_utils_template_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_public_js_header_modals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/assets/AdobeStock_181153776.jpeg":
/*!*****************************************************!*\
  !*** ./src/public/assets/AdobeStock_181153776.jpeg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/AdobeStock_181153776.dbbd5cac886d421f319c529d13e961c2.jpeg\";\n\n//# sourceURL=webpack:///./src/public/assets/AdobeStock_181153776.jpeg?");

/***/ }),

/***/ "./src/public/assets/Vector-01.png":
/*!*****************************************!*\
  !*** ./src/public/assets/Vector-01.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/Vector-01.bba7e71bd4c0e5ed51e36e0db36ab028.png\";\n\n//# sourceURL=webpack:///./src/public/assets/Vector-01.png?");

/***/ }),

/***/ "./src/public/assets/experience_web.jpg":
/*!**********************************************!*\
  !*** ./src/public/assets/experience_web.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/experience_web.9b009bb1228676c562fbb814028da008.jpg\";\n\n//# sourceURL=webpack:///./src/public/assets/experience_web.jpg?");

/***/ }),

/***/ "./src/public/assets/featureimage_web.jpeg":
/*!*************************************************!*\
  !*** ./src/public/assets/featureimage_web.jpeg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/featureimage_web.5e788c8b4f386caa86f47de432c45034.jpeg\";\n\n//# sourceURL=webpack:///./src/public/assets/featureimage_web.jpeg?");

/***/ }),

/***/ "./src/public/assets/firstday_web.jpg":
/*!********************************************!*\
  !*** ./src/public/assets/firstday_web.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/firstday_web.f6006cb8a460b411ca677006b057b2b5.jpg\";\n\n//# sourceURL=webpack:///./src/public/assets/firstday_web.jpg?");

/***/ }),

/***/ "./src/public/assets/interview_web.jpg":
/*!*********************************************!*\
  !*** ./src/public/assets/interview_web.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/interview_web.e53b6d1ce5a7cbe61c46a3c36fc9ebba.jpg\";\n\n//# sourceURL=webpack:///./src/public/assets/interview_web.jpg?");

/***/ }),

/***/ "./src/public/assets/jumpstart_web.jpeg":
/*!**********************************************!*\
  !*** ./src/public/assets/jumpstart_web.jpeg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/jumpstart_web.aa688362533d500814a097a06165db94.jpeg\";\n\n//# sourceURL=webpack:///./src/public/assets/jumpstart_web.jpeg?");

/***/ }),

/***/ "./src/public/assets/juniorapprentice_web.jpg":
/*!****************************************************!*\
  !*** ./src/public/assets/juniorapprentice_web.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/juniorapprentice_web.14fe7dd483a5a203b9f387151854ee1a.jpg\";\n\n//# sourceURL=webpack:///./src/public/assets/juniorapprentice_web.jpg?");

/***/ }),

/***/ "./src/public/assets/manlearning_web.jpg":
/*!***********************************************!*\
  !*** ./src/public/assets/manlearning_web.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/manlearning_web.4fdd44ac17976358b56799953bd05e6e.jpg\";\n\n//# sourceURL=webpack:///./src/public/assets/manlearning_web.jpg?");

/***/ }),

/***/ "./src/public/assets/pencil_web.jpg":
/*!******************************************!*\
  !*** ./src/public/assets/pencil_web.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/pencil_web.718360a32e33c1aa62d79c4287e900a4.jpg\";\n\n//# sourceURL=webpack:///./src/public/assets/pencil_web.jpg?");

/***/ }),

/***/ "./src/public/assets/salary_web.jpg":
/*!******************************************!*\
  !*** ./src/public/assets/salary_web.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/salary_web.ad9a91911aef9b56845ad48aab837302.jpg\";\n\n//# sourceURL=webpack:///./src/public/assets/salary_web.jpg?");

/***/ }),

/***/ "./src/public/assets/seniorapprentice_web.jpg":
/*!****************************************************!*\
  !*** ./src/public/assets/seniorapprentice_web.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/seniorapprentice_web.9b6add97496c1df5d68a08436107952e.jpg\";\n\n//# sourceURL=webpack:///./src/public/assets/seniorapprentice_web.jpg?");

/***/ }),

/***/ "./src/public/css/body.css":
/*!*********************************!*\
  !*** ./src/public/css/body.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./body.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/body.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/css/body.css?");

/***/ }),

/***/ "./src/public/css/contact.css":
/*!************************************!*\
  !*** ./src/public/css/contact.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./contact.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/contact.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/css/contact.css?");

/***/ }),

/***/ "./src/public/css/faq.css":
/*!********************************!*\
  !*** ./src/public/css/faq.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./faq.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/faq.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/css/faq.css?");

/***/ }),

/***/ "./src/public/css/footer.css":
/*!***********************************!*\
  !*** ./src/public/css/footer.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./footer.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/footer.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/css/footer.css?");

/***/ }),

/***/ "./src/public/css/forms.css":
/*!**********************************!*\
  !*** ./src/public/css/forms.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./forms.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/forms.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/css/forms.css?");

/***/ }),

/***/ "./src/public/css/hamburger.css":
/*!**************************************!*\
  !*** ./src/public/css/hamburger.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./hamburger.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/hamburger.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/css/hamburger.css?");

/***/ }),

/***/ "./src/public/css/header.css":
/*!***********************************!*\
  !*** ./src/public/css/header.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./header.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/header.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/css/header.css?");

/***/ }),

/***/ "./src/public/css/index_0_0_1.css":
/*!****************************************!*\
  !*** ./src/public/css/index_0_0_1.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./index_0_0_1.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/index_0_0_1.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/css/index_0_0_1.css?");

/***/ }),

/***/ "./src/public/css/privacy.css":
/*!************************************!*\
  !*** ./src/public/css/privacy.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./privacy.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/privacy.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/css/privacy.css?");

/***/ }),

/***/ "./src/public/css/spinner.css":
/*!************************************!*\
  !*** ./src/public/css/spinner.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./spinner.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/spinner.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/public/css/spinner.css?");

/***/ }),

/***/ "./src/public/js/header-modals.js":
/*!****************************************!*\
  !*** ./src/public/js/header-modals.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return loadModals; });\n/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner */ \"./src/public/js/spinner.js\");\n\nfunction loadModals() {\n  var employerOpenBtn = document.getElementById('employer-login');\n  var studentOpenBtn = document.getElementById('student-login');\n  var employerModal = document.querySelector('.employer-modal');\n  var studentLoginModal = document.querySelector('.student-login-modal');\n  var studentRegisterModal = document.querySelector('.student-register-modal');\n  var studentApplyModal = document.querySelector('#navbar-container button');\n  var signUpHere = document.querySelector('.student-login-modal u');\n  var loginHere = document.querySelector('.student-register-modal u');\n  employerOpenBtn.addEventListener('click', openEmployer);\n  studentOpenBtn.addEventListener('click', openLoginStudent);\n  employerModal.addEventListener('click', handleCloseEmployer);\n  studentLoginModal.addEventListener('click', handleCloseStudentLogin);\n  studentRegisterModal.addEventListener('click', handleCloseStudentRegister);\n  studentApplyModal.addEventListener('click', openApplyStudent);\n  signUpHere.addEventListener('click', openRegisterStudent);\n  loginHere.addEventListener('click', openLoginStudent);\n\n  function openEmployer(e) {\n    if (!studentLoginModal.classList.contains('hidden')) studentLoginModal.classList.add('hidden');\n    if (!studentRegisterModal.classList.contains('hidden')) studentRegisterModal.classList.add('hidden');\n    employerModal.classList.remove('hidden');\n  }\n\n  function openLoginStudent(e) {\n    if (!employerModal.classList.contains('hidden')) employerModal.classList.add('hidden');\n    if (!studentRegisterModal.classList.contains('hidden')) studentRegisterModal.classList.add('hidden');\n    studentLoginModal.classList.remove('hidden');\n  }\n\n  function openApplyStudent(e) {\n    if (!studentLoginModal.classList.contains('hidden')) studentLoginModal.classList.add('hidden');\n    if (!employerModal.classList.contains('hidden')) employerModal.classList.add('hidden');\n    studentRegisterModal.classList.remove('hidden');\n  }\n\n  function openRegisterStudent(e) {\n    studentLoginModal.classList.add('hidden');\n    studentRegisterModal.classList.remove('hidden');\n  }\n\n  function handleCloseEmployer(e) {\n    if (e.target.nodeName === 'SPAN' || e.target.classList.contains('employer-modal')) {\n      employerModal.classList.add('hidden');\n    }\n  }\n\n  function handleCloseStudentLogin(e) {\n    if (e.target.nodeName === 'SPAN' || e.target.classList.contains('student-login-modal')) {\n      studentLoginModal.classList.add('hidden');\n    }\n  }\n\n  function handleCloseStudentRegister(e) {\n    if (e.target.nodeName === 'SPAN' || e.target.classList.contains('student-register-modal')) {\n      studentRegisterModal.classList.add('hidden');\n    }\n  } //respond to login requests\n\n\n  var employerLoginBtn = document.querySelector(\".employer-modal button\");\n  var studentLoginBtn = document.querySelector(\".student-login-modal button\");\n  employerLoginBtn.addEventListener('click', handleEmployerLogin);\n  studentLoginBtn.addEventListener('click', handleStudentLogin);\n\n  function tempResponse(userType) {\n    var container = document.querySelector(\".\".concat(userType, \"-modal .login-form-container\"));\n    Object(_spinner__WEBPACK_IMPORTED_MODULE_0__[\"removeSpinner\"])(); //remove a warning if already present\n\n    if (document.querySelector(\".\".concat(userType, \"-modal .warning\"))) {\n      var deleteWarning = document.querySelector(\".\".concat(userType, \"-modal .login-form-container .warning\"));\n      container.removeChild(deleteWarning);\n    }\n\n    var h2 = document.querySelector(\".\".concat(userType, \"-modal .login-form-container h2\"));\n    var warning = document.createElement('p');\n    warning.classList = 'warning';\n    warning.innerHTML = 'No such user exists';\n    container.insertBefore(warning, h2);\n  }\n\n  function handleEmployerLogin(e) {\n    e.preventDefault(); //form Validation\n\n    var institutionID = document.querySelector(\".employer-modal form\").elements[\"institutionID\"].value;\n    var password = document.querySelector(\".employer-modal form\").elements[\"password\"].value;\n\n    if (!institutionID || !password) {\n      return;\n    } else {\n      var element = document.querySelector('.employer-modal form div');\n      Object(_spinner__WEBPACK_IMPORTED_MODULE_0__[\"addSpinner\"])(element);\n      setTimeout(tempResponse, 800, 'employer');\n    }\n  }\n\n  function handleStudentLogin(e) {\n    e.preventDefault(); //form Validation\n\n    var username = document.querySelector(\".student-login-modal form\").elements[\"username\"].value;\n    var password = document.querySelector(\".student-login-modal form\").elements[\"password\"].value;\n\n    if (!username || !password) {\n      return;\n    } else {\n      var element = document.querySelector('.student-login-modal form div');\n      Object(_spinner__WEBPACK_IMPORTED_MODULE_0__[\"addSpinner\"])(element);\n      setTimeout(tempResponse, 800, 'student-login');\n    }\n  }\n}\n;\n\n//# sourceURL=webpack:///./src/public/js/header-modals.js?");

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