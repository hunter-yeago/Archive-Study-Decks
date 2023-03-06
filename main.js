/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/scss/css/style.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/scss/css/style.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=list],\nol[role=list] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 3rem;\n  left: 0;\n  top: 0;\n  width: 100%;\n  color: black;\n}\n\n.modal-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 5px;\n  position: relative;\n  margin: auto;\n  border: 1px solid #888;\n  width: 92%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0.8rem;\n  width: 100%;\n  border-bottom: 1px solid lightgrey;\n}\n.modal-header h5 {\n  font-size: 1.25rem;\n  font-weight: 550;\n}\n.modal-header span {\n  color: #aaa;\n  font-size: 1.75rem;\n  font-weight: bold;\n}\n.modal-header span:hover,\n.modal-header span:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-body {\n  padding: 0.15rem 0.7rem;\n  margin: 0.5rem 0 1rem 0;\n}\n.modal-body form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n}\n.modal-body textarea {\n  resize: none;\n  min-height: 3.5rem;\n  max-height: 12rem;\n}\n\n.deckname,\n.deckcategory,\n.deckduedate,\n.deckdescription {\n  padding: 0.2em;\n}\n\n.deckdescription {\n  width: 100%;\n  height: 5rem;\n  resize: none;\n}\n\n.disabledinputtag {\n  position: relative;\n  bottom: 40px;\n  left: 195px;\n  color: grey;\n  padding: 0 0 0 0.5em;\n  pointer-events: none;\n}\n\n.invalid {\n  border: 0.125rem solid red;\n}\n\n.submitbutton {\n  width: 50%;\n  margin-left: auto;\n  padding: 0.1em;\n}\n\n.questiondiv,\n.answerdiv {\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n  margin-bottom: 0.5em;\n}\n\n.useroptionsdiv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.3em;\n  margin-top: 2em;\n}\n.useroptionsdiv button {\n  font-size: 0.9em;\n  padding: 0.3em;\n  margin: 0.2em;\n}\n\n.newcardtitlediv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0.2em 0.5em 0.5em 0.5em;\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.deckdisplay {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.deck {\n  display: flex;\n  justify-content: center;\n  min-height: 7rem;\n  width: 95%;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  border-radius: 0.5em;\n  padding: 0rem 0.5rem 0rem 0.5rem;\n  background-color: #2e3856;\n}\n\n.deckimageandname {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-right: 1px solid #ffcd1e;\n  margin: 0.7em 0 0.7em 1em;\n  padding-right: 1em;\n  gap: 0.5rem;\n}\n.deckimageandname button {\n  padding: 0.2em;\n}\n.deckimageandname h3 {\n  font-size: 1rem;\n}\n.deckimageandname p {\n  color: rgba(253, 253, 253, 0.681);\n  font-size: 0.9rem;\n}\n\n.deckdescriptiondiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-width: 70%;\n  margin: 0.7em 0 0.7em 0;\n}\n.deckdescriptiondiv p {\n  padding: 0.5em;\n  text-align: center;\n}\n.deckdescriptiondiv :nth-child(2) {\n  color: rgba(253, 253, 253, 0.681);\n  font-size: 0.9rem;\n}\n\n.itsemptymessage {\n  text-align: center;\n  padding: 1em;\n}\n\n.rowofcards {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n  padding: 0.5rem;\n}\n\n.overviewcard {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid lightgrey;\n  color: black;\n  border-radius: 5px;\n  background-color: white;\n}\n.overviewcard div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.2rem;\n  padding-top: 0.5rem;\n}\n.overviewcard img {\n  width: max(1.5rem, 5vw);\n}\n.overviewcard h3 {\n  font-size: 0.9rem;\n}\n\n.greencardunderline,\n.brickcardunderline,\n.bluecardunderline,\n.sunshinecardunderline {\n  text-align: center;\n  font-size: 1.5rem;\n  padding-bottom: 0.5rem;\n  text-decoration: underline;\n  text-decoration-thickness: 1.5px;\n  text-underline-offset: 5px;\n}\n\n.greencardunderline {\n  text-decoration-color: #34C381;\n}\n\n.bluecardunderline {\n  text-decoration-color: #046FC6;\n}\n\n.brickcardunderline {\n  text-decoration-color: #ED6D47;\n}\n\n.sunshinecardunderline {\n  text-decoration-color: #FFBA17;\n}\n\n.settingssection select {\n  padding: 0.3em;\n}\n\n.deckdeleteoptions {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.deletedeckdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1em;\n}\n.deletedeckdiv button {\n  padding: 0.1em;\n}\n\n.resetbutton {\n  display: block;\n  margin: 1rem auto auto auto;\n  color: red;\n  border: 1px solid red;\n  padding: 0.2em;\n}\n\n.innerheaderdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.8rem;\n  border-bottom: 1px solid #282e3e;\n}\n.innerheaderdiv h3 {\n  font-size: 1.6rem;\n  border-bottom: 1px solid #ffcd1e;\n}\n\n.containerdiv {\n  height: 38.4px;\n}\n\n.bannerbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  height: 2.4rem;\n  width: 2.4rem;\n  padding: 0em;\n  border-radius: 50%;\n  background-color: #4255ff;\n}\n\n.bannerbutton:hover {\n  background-color: #423ed9;\n}\n\n.menu {\n  position: absolute;\n  right: 1rem;\n  border-radius: 0.5rem;\n  color: black;\n  background-color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  z-index: 1;\n  display: none;\n}\n.menu button {\n  min-width: 8rem;\n  padding: 0.7em;\n  background-color: #0a082d;\n  color: white;\n  border: 1px solid #282e3e;\n  border-radius: 0.3rem;\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n.menu button:hover {\n  background-color: #0a082d;\n  opacity: 0.9;\n}\n\n.menu.show {\n  display: block;\n}\n\n.nav-right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 8rem;\n}\n.nav-right p {\n  width: 100%;\n}\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgb(246, 246, 246);\n  overflow-x: hidden;\n  margin-top: 42.3px;\n  transition: 0.3s;\n}\n\n.sidenav.active {\n  width: 15rem;\n}\n\n.sidenavinnerdiv {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 0 0 2rem;\n}\n.sidenavinnerdiv a {\n  padding: 0.3rem 0.5rem 0.4rem 1rem;\n  margin-right: 1.5rem;\n  text-decoration: none;\n  font-size: 1.1rem;\n  color: black;\n  display: block;\n  transition: 0.2 0.5s;\n}\n.sidenavinnerdiv li {\n  list-style: none;\n  white-space: nowrap;\n}\n.sidenavinnerdiv li:hover {\n  background-color: white;\n}\n\n.studycarddiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 1em;\n}\n.studycarddiv div {\n  flex-direction: column;\n  padding: 0.5em;\n  min-width: 50%;\n  min-height: 5rem;\n}\n.studycarddiv p {\n  text-align: center;\n}\n\n.inactive {\n  background-color: rgba(121, 121, 121, 0.9);\n  pointer-events: none;\n  border-color: rgba(121, 121, 121, 0.9);\n}\n\n.numberofcards {\n  margin-bottom: 3em;\n}\n\n.studydiv {\n  margin: 0 1.2em 0 1.2em;\n}\n.studydiv h1 {\n  margin-top: 0.5 em;\n  font-size: 1.8rem;\n}\n\n.flip-card {\n  background-color: transparent;\n  border-radius: 25% 10%;\n  width: 300px;\n  height: 300px;\n  perspective: 1000px;\n}\n\n.flip-card-inner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 25% 10%;\n  cursor: pointer;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.4s;\n  transform-style: preserve-3d;\n}\n\n.flip-card-inner.activated {\n  transform: rotateY(180deg);\n}\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.flip-card-front {\n  border: 2px solid #ffcd1e;\n  border-radius: 25% 10%;\n  background-color: #bbb;\n  color: black;\n}\n\n.flip-card-back {\n  border: 2px solid #ffcd1e;\n  border-radius: 25% 10%;\n  background-color: #2980b9;\n  color: white;\n  transform: rotateY(180deg);\n}\n\n.buttonsspan {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  margin: 1em;\n}\n.buttonsspan button {\n  padding: 0.3em;\n}\n\n.congratsdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 3em;\n  margin: 3em 1em 1em 1em;\n}\n.congratsdiv button {\n  padding: 0.2em;\n}\n\nhtml,\nbody {\n  background-color: #0a082d;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.6;\n  color: white;\n}\n\nmain {\n  border-top: 1px solid black;\n  min-height: fit-content;\n}\n\n.mobilenav {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  border: 1px solid grey;\n  min-height: 4rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.mobilenav img {\n  width: 2rem;\n  pointer-events: none;\n}\n.mobilenav button {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.2rem;\n  gap: 0.5rem;\n}\n.mobilenav h3 {\n  font-size: 0.9rem;\n  color: grey;\n  pointer-events: none;\n}\n\nsection h1 {\n  text-align: left;\n  padding: 1rem;\n  font-size: 1.3rem;\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./src/scss/_reset.scss","webpack://./src/scss/css/style.css","webpack://./src/scss/_modal.scss","webpack://./src/scss/_mixins.scss","webpack://./src/scss/_yourdecks.scss","webpack://./src/scss/_config.scss","webpack://./src/scss/_overview.scss","webpack://./src/scss/_decksettings.scss","webpack://./src/scss/_banner.scss","webpack://./src/scss/_sidenav.scss","webpack://./src/scss/_studysession.scss","webpack://./src/scss/style.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isFuture/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isFuture/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isFuture)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * const result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */

function isFuture(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime() > Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/scss/css/style.css":
/*!********************************!*\
  !*** ./src/scss/css/style.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/scss/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCard": () => (/* binding */ createCard)
/* harmony export */ });
const Card = {
    question: null,
    answer: null,
}

function createCard(formDataObj) {

    const newCard = Object.assign(Object.create(Card), {
        question: formDataObj.questioninput,
        answer: formDataObj.answerinput,
    });
    return newCard;
}

/***/ }),

/***/ "./src/scripts/controller.js":
/*!***********************************!*\
  !*** ./src/scripts/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controller": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/scripts/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/scripts/view.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.js");
/* harmony import */ var _prebuiltdecks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prebuiltdecks */ "./src/scripts/prebuiltdecks.js");





//TODO responsive design
//TODO dynamically render ALL HTML

const controller = (function(){

    _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.subscribe('DataReset', resetDataAndView);
    
    const data = {
        preBuiltDecks: _prebuiltdecks__WEBPACK_IMPORTED_MODULE_3__.preBuiltDecks,
        defaultTabID: 'studypage',
        localDecks: _model__WEBPACK_IMPORTED_MODULE_0__.model.getDeckArrayFromLocalStorage(),
        Panels: _model__WEBPACK_IMPORTED_MODULE_0__.model.dataPanels,

        Update: function() {
            this.updateDecks();
            this.updatePanels();
        },

        updateDecks: function() {
            this.localDecks = _model__WEBPACK_IMPORTED_MODULE_0__.model.getDeckArrayFromLocalStorage();
        },

        updatePanels: function() {
            this.Panels = _model__WEBPACK_IMPORTED_MODULE_0__.model.getLocalPanels();
        },
    }
    
    function startApplication() {
        _model__WEBPACK_IMPORTED_MODULE_0__.model.checkIfThereIsAlreadyLocallyStoredData();
        data.Update();
        _model__WEBPACK_IMPORTED_MODULE_0__.model.setCurrentPage(data.defaultTabID);
        _view__WEBPACK_IMPORTED_MODULE_1__.view.renderDefaultView(data.defaultTabID);  
    };

    function handleDeckCreationForm() {

        const form = document.getElementById('modal-form');
        const nameElement = document.getElementById('deckname');
        const categoryElement = document.getElementById('deckcategory');
        const dateElement = document.getElementById('deckduedate');

        const nameChecker =  _model__WEBPACK_IMPORTED_MODULE_0__.model.validators.nameValidator;
        const categoryChecker = _model__WEBPACK_IMPORTED_MODULE_0__.model.validators.categoryValidator;
        const dateChecker = _model__WEBPACK_IMPORTED_MODULE_0__.model.validators.dateValidator;

        nameChecker.setData(nameElement, nameElement.value.trim());
        categoryChecker.setData(categoryElement, categoryElement.value.trim());
        dateChecker.setData(dateElement, dateElement.value.trim());

        const validators = [nameChecker, categoryChecker, dateChecker];
        validators.forEach((input) => {
            input.checkValidity();
            input.setValidityClass();
        });
        
        const invalidInputs = validators.filter(input => input.isValid === false);
        if (invalidInputs.length > 0) {
            invalidInputs.forEach((invalidInput) => {
                invalidInput.displayWarning();
                return;
            });
        } else {
            const formDataObject = _model__WEBPACK_IMPORTED_MODULE_0__.model.createFormDataObject(form);
            const newDeck = _model__WEBPACK_IMPORTED_MODULE_0__.model.createDeck(formDataObject);
            _model__WEBPACK_IMPORTED_MODULE_0__.model.addDeckToLocalStorage(newDeck);
            _model__WEBPACK_IMPORTED_MODULE_0__.model.incrementUserData('decksCreated');
            data.Update();
            updateDataOnCurrentPage();
            _view__WEBPACK_IMPORTED_MODULE_1__.view.resetForm(form);
            _model__WEBPACK_IMPORTED_MODULE_0__.model.validators.resetInputValidity(validators);
            _view__WEBPACK_IMPORTED_MODULE_1__.view.renderAddCardModalBody(newDeck);
        }
    };

    function handleAddCardsForm(newDeck, status) {
        const form = document.getElementById('modal-card-form');
        const questionInput = document.getElementById('questioninput');
        const answerInput = document.getElementById('answerinput');

        const questionChecker = _model__WEBPACK_IMPORTED_MODULE_0__.model.validators.questionValidator;
        const answerChecker = _model__WEBPACK_IMPORTED_MODULE_0__.model.validators.answerValidator;

        questionChecker.setData(questionInput, questionInput.value.trim());
        answerChecker.setData(answerInput, answerInput.value.trim());

        const validators = [questionChecker, answerChecker];
        validators.forEach((input) => {
            input.checkValidity();
        });

        const invalidInputs = validators.filter(input => input.isValid === false);
        if (invalidInputs.length > 0) {
            invalidInputs.forEach((item) => {
                item.displayWarning();
                return;
            });
         } else {
            const formDataObject = _model__WEBPACK_IMPORTED_MODULE_0__.model.createFormDataObject(form);
            const card = _model__WEBPACK_IMPORTED_MODULE_0__.model.createCard(formDataObject);
            
            let deckCopy = _model__WEBPACK_IMPORTED_MODULE_0__.model.getDeckFromLocalStorage(newDeck.name);
            deckCopy = _model__WEBPACK_IMPORTED_MODULE_0__.model.addCardToDeck(card, deckCopy);
            _model__WEBPACK_IMPORTED_MODULE_0__.model.updateDeckInLocalStorage(deckCopy);

            data.Update();
            _model__WEBPACK_IMPORTED_MODULE_0__.model.incrementUserData('cardsCreated');
            _model__WEBPACK_IMPORTED_MODULE_0__.model.validators.resetInputValidity(validators);
            updateDataOnCurrentPage();
            
            if (status === 'addmore') {
                _view__WEBPACK_IMPORTED_MODULE_1__.view.renderAddCardModalBody(deckCopy);
            } else if (status === 'doneadding') {
                _view__WEBPACK_IMPORTED_MODULE_1__.view.hideModal();
                _view__WEBPACK_IMPORTED_MODULE_1__.view.resetModal();
            }
        };
    };

    function updateDataOnCurrentPage() {
        const currentPage = _model__WEBPACK_IMPORTED_MODULE_0__.model.getCurrentPage();
        if (currentPage === 'studypage') {
            _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.publish('NewDeckAdded', data.localDecks)
        } else {
            _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.publish('UpdateOverviewData', data.Panels);
        }
    }

    function changePage(page) {
        _view__WEBPACK_IMPORTED_MODULE_1__.view.renderPage(page);
        _model__WEBPACK_IMPORTED_MODULE_0__.model.setCurrentPage(page);
    }

    function resetDataAndView() {
        _model__WEBPACK_IMPORTED_MODULE_0__.model.clearLocalStorage();
        data.Update();
        _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.publish('UpdateOverviewData', data.Panels);
    };

    function startStudySession(deck) {
        _view__WEBPACK_IMPORTED_MODULE_1__.view.studyPage.renderStudySession(deck);
    }

    function showNextStudyCard(deck, operation) {

        if (operation === 'shownext') {
            if (deck.currentCard + 1 === deck.cards.length) {
                _model__WEBPACK_IMPORTED_MODULE_0__.model.updateCurrentCard(deck, 'reset');
                _view__WEBPACK_IMPORTED_MODULE_1__.view.removeMainTagContent();
                _view__WEBPACK_IMPORTED_MODULE_1__.view.studyPage.renderStudySessionComplete(deck);
                _model__WEBPACK_IMPORTED_MODULE_0__.model.incrementUserData('decksStudied');
                _model__WEBPACK_IMPORTED_MODULE_0__.model.incrementUserData('cardsStudied');
                
            } else {
                _model__WEBPACK_IMPORTED_MODULE_0__.model.updateCurrentCard(deck, operation);
                _view__WEBPACK_IMPORTED_MODULE_1__.view.studyPage.updateStudyCard(deck);
                _model__WEBPACK_IMPORTED_MODULE_0__.model.incrementUserData('cardsStudied');
            }
        } 
        else if (operation === 'showprevious') {
            _model__WEBPACK_IMPORTED_MODULE_0__.model.updateCurrentCard(deck, operation);
            _view__WEBPACK_IMPORTED_MODULE_1__.view.studyPage.updateStudyCard(deck);
            _model__WEBPACK_IMPORTED_MODULE_0__.model.decrementUserData('cardsStudied');
        }
        controller.data.updateDecks();
    }

    function deleteDeck(deckName) {
        _model__WEBPACK_IMPORTED_MODULE_0__.model.deleteDeckFromLocalStorage(deckName);
    }

    return {
        data,
        changePage,
        deleteDeck,
        startApplication,
        startStudySession,
        showNextStudyCard,
        handleAddCardsForm,
        handleDeckCreationForm,
    }
})();

/***/ }),

/***/ "./src/scripts/deck.js":
/*!*****************************!*\
  !*** ./src/scripts/deck.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deck": () => (/* binding */ Deck),
/* harmony export */   "createDeck": () => (/* binding */ createDeck),
/* harmony export */   "deckArray": () => (/* binding */ deckArray)
/* harmony export */ });
const Deck = {
    name: 'default name',
    description: 'default description',
    dueDate: 'default dueDate',
    category: 'default category',
    currentCard: 0,
    cardCount: 0,
    cards: [],
};

const deckArray = [];

function createDeck(formDataObj) {
    
    const newDeck = Object.assign(Object.create(Deck), {
        name: formDataObj.deckname,
        category: formDataObj.deckcategory,
        description: formDataObj.deckdescription,
        dueDate: makeDateReadable(formDataObj.deckduedate),
        currentCard: 0,
        cardCount: 0,
        cards: [],
    });
    return newDeck;
};

function makeDateReadable(dateData) {
    const array = dateData.split('-');
    const year = array[0];
    const month = convertMonthNumberToMonthName(array[1]);
    const day = convertDayNumberToNthDayOfMonth(array[2]);
    return `${month} ${day}, ${year}`;
};

function convertMonthNumberToMonthName(number) {
    number = parseInt(number, 10);
    const months = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
    }
    return months[number];
};

function convertDayNumberToNthDayOfMonth(number) {
    const nthDay = {
        1: 'st',
        2: 'nd',
        3: 'rd',
        4: 'th', 5: 'th', 6: 'th', 7: 'th', 8: 'th',
        9: 'th', 10: 'th', 11: 'th', 12: 'th', 
        13: 'th', 14: 'th', 15: 'th', 16: 'th', 
        17: 'th', 18: 'th', 19: 'th', 20: 'th',
        21: 'st',
        22: 'nd',
        23: 'rd',
        24: 'th', 25: 'th', 26: 'th', 27: 'th', 
        28: 'th', 29: 'th', 30: 'th',
        31: 'st',
    };
    return `${number}${nthDay[number]}`;
};

/***/ }),

/***/ "./src/scripts/helpers.js":
/*!********************************!*\
  !*** ./src/scripts/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setAttributes": () => (/* binding */ setAttributes)
/* harmony export */ });

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}
  

/***/ }),

/***/ "./src/scripts/model.js":
/*!******************************!*\
  !*** ./src/scripts/model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "model": () => (/* binding */ model)
/* harmony export */ });
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ "./src/scripts/validator.js");
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deck */ "./src/scripts/deck.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./src/scripts/card.js");
/* harmony import */ var _prebuiltdecks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prebuiltdecks */ "./src/scripts/prebuiltdecks.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller */ "./src/scripts/controller.js");
/* harmony import */ var _userdata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userdata */ "./src/scripts/userdata.js");







const model = (function(){

    let currentPage = '';

    function setCurrentPage(page) {
        currentPage = page;
    };

    function getCurrentPage() {
        return currentPage;
    };

    function checkIfThereIsAlreadyLocallyStoredData() {
        const decks = model.getDeckArrayFromLocalStorage();
        if (!decks || decks === null) {
            resetDeckArray();
        }

        const panels = model.getLocalPanels();
        if (!panels || panels === null) {
            resetDataPanelData(_userdata__WEBPACK_IMPORTED_MODULE_5__.dataPanels);
        }
        
        const userData = model.getUserData();
        if (!userData || userData === null) {
            resetNewUserData(_userdata__WEBPACK_IMPORTED_MODULE_5__.newUserData);
        }
    }

    function getDeckArrayFromLocalStorage() {
        
        // return Array.from(JSON.parse(localStorage.getItem('deckarray')));    
        const items = { ...localStorage};
        if (items.hasOwnProperty('deckarray')) {
            return Array.from(JSON.parse(localStorage.getItem('deckarray')));    
        }
    };

    function getDeckFromLocalStorage(deckName) {
        const decks = getDeckArrayFromLocalStorage();
        return decks.find(item => item.name === deckName);
    };

    function addCardtoDeck(card, deck) {
        deck.cards.push(card);
        return deck;
    }

    function resetDeckArray() {
        localStorage.setItem('deckarray', JSON.stringify(_deck__WEBPACK_IMPORTED_MODULE_1__.deckArray));
    };

    function updateDeckInLocalStorage(deck) {
        const decks = getDeckArrayFromLocalStorage();
        const foundDeck = getDeckFromLocalStorage(deck.name)
        foundDeck.cards = deck.cards;
        foundDeck.cardCount = deck.cardCount;

        const index = decks.findIndex(d => d.name === foundDeck.name);
        decks[index] = foundDeck;
        localStorage.setItem('deckarray', JSON.stringify(decks));
    }

    function addDeckToLocalStorage(deck) {
        const arrayOfDecks = getDeckArrayFromLocalStorage();
        arrayOfDecks.push(deck);
        localStorage.setItem('deckarray', JSON.stringify(arrayOfDecks));
    };

    function addCardToDeck(card, deck) {
        deck.cards.push(card);
        deck.cardCount++;
        return deck;
    }

    function deleteDeckFromLocalStorage(deckName) {
        const decks = getDeckArrayFromLocalStorage();
        const deckToDelete = getDeckFromLocalStorage(deckName);
        const index = decks.findIndex(d => d.name === deckToDelete.name);
        decks.splice(index, 1);
        localStorage.setItem('deckarray', JSON.stringify(decks));
    }

    function resetDataPanelData() {
        localStorage.setItem('datapanels', JSON.stringify(_userdata__WEBPACK_IMPORTED_MODULE_5__.dataPanels));
    };

    function setDataPanelData(updatedPanels) {
        localStorage.setItem('datapanels', JSON.stringify(updatedPanels));
    };

    function getLocalPanels() {
        return JSON.parse(localStorage.getItem('datapanels'));
    };

    function getLocalPanel(data) {
        const panels = Array.from(JSON.parse(localStorage.getItem('datapanels')));
        panels.forEach((item) => {
            if (item.hasOwnProperty(data)) {
                return item;
            };
        });
    };

    function resetNewUserData() {
        localStorage.setItem('userdata', JSON.stringify(_userdata__WEBPACK_IMPORTED_MODULE_5__.newUserData));
    };

    function setUserData(data) {
        localStorage.setItem('userdata', JSON.stringify(data));
    };

    function getUserData() {

        const items = { ...localStorage};

        if (items.hasOwnProperty('userdata')) {
           return JSON.parse(localStorage.getItem('userdata'));
        }
    };

    function getNonParsedUserData() {
        const items = { ...localStorage};
        if (items.hasOwnProperty('userdata')) {

           return localStorage.getItem('userdata');
        }

    }

    function incrementUserData(data) {
        const userData = getUserData();
        userData[data] = userData[data] + 1;
        setUserData(userData);

        const panels = getLocalPanels();
        panels.forEach((item) => {
            if (item.hasOwnProperty(data)) {
                item.statistic = item.statistic + 1;
            };
        });
        
        setDataPanelData(panels);
        _controller__WEBPACK_IMPORTED_MODULE_4__.controller.data.Update();
    };

    function decrementUserData(data) {
        const userData = getUserData();
        userData[data] = userData[data] - 1;
        setUserData(userData);

        const newdata = getUserData();
    };

    function updateCurrentCard(deck, operation) {

        const deckIsPrebuilt = checkIfDeckIsPreBuilt(deck, _controller__WEBPACK_IMPORTED_MODULE_4__.controller.data.preBuiltDecks);
        if (deckIsPrebuilt && operation === 'reset') {
            const index = _prebuiltdecks__WEBPACK_IMPORTED_MODULE_3__.preBuiltDecks.indexOf(deck);
            _controller__WEBPACK_IMPORTED_MODULE_4__.controller.data.preBuiltDecks[index].currentCard = 0;
            return;
        }

        if (operation === 'reset') { getDeckFromLocalStorage(deck.name).currentCard = 0; } 
        else if (operation === 'shownext') { deck.currentCard++; } 
        else if (operation === 'showprevious') { deck.currentCard--; }
    };

    function checkIfDeckIsPreBuilt(deck, preBuiltDecks) {
        for (let i = 0; i < preBuiltDecks.length; i++) {
            if (preBuiltDecks[i] === deck) {
                return true;
            }
            else {
                return false;
            }
        }
    };

    function clearLocalStorage() {
        resetNewUserData();
        resetDataPanelData()
        resetDeckArray();
        _controller__WEBPACK_IMPORTED_MODULE_4__.controller.data.Update();
    };

    function createFormDataObject(form) {
        const myFormData = new FormData(form);
        const formDataObj = Object.fromEntries(myFormData.entries());
        return formDataObj;
    };

    return {
        dataPanels: _userdata__WEBPACK_IMPORTED_MODULE_5__.dataPanels,
        validators: _validator__WEBPACK_IMPORTED_MODULE_0__.validators,
        createCard: _card__WEBPACK_IMPORTED_MODULE_2__.createCard,
        addCardToDeck,
        createDeck: _deck__WEBPACK_IMPORTED_MODULE_1__.createDeck,
        getLocalPanel,
        getLocalPanels,
        resetDataPanelData,
        incrementUserData,
        getNonParsedUserData,
        resetDeckArray,
        checkIfThereIsAlreadyLocallyStoredData,
        deleteDeckFromLocalStorage,
        updateDeckInLocalStorage,
        decrementUserData,
        getUserData,
        resetNewUserData,
        getDeckArrayFromLocalStorage,
        getCurrentPage,
        setCurrentPage,
        // getLocalDecks,
        addCardtoDeck,
        updateCurrentCard,
        clearLocalStorage,
        createFormDataObject,
        addDeckToLocalStorage,
        getDeckFromLocalStorage,
    };
})();

/***/ }),

/***/ "./src/scripts/prebuiltdecks.js":
/*!**************************************!*\
  !*** ./src/scripts/prebuiltdecks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preBuiltDecks": () => (/* binding */ preBuiltDecks)
/* harmony export */ });
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deck */ "./src/scripts/deck.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/scripts/card.js");



const frenchCards = createFrenchCards();
const frenchDeck = Object.assign(Object.create(_deck__WEBPACK_IMPORTED_MODULE_0__.Deck), {
    name: 'French',
    description: 'A deck to learn 10 basic French words',
    dueDate: 'Next Week',
    category: 'Languages',
    currentCard: 0,
    cardCount: 0,
    cards: frenchCards,
});
    
function createFrenchCards() {

    const frenchCardOne = {
        question: 'How do you say \'a man\' in French?',
        answer: 'un homme',
    };
    
    const frenchCardTwo = {
        question: 'How do you say \'a tree\' in French?',
        answer: 'un arbre',
    };
    
    const frenchCardThree = {
        question: 'How do you say \'a chair\' in French?',
        answer: 'une chaise',
    };
    
    const frenchCardFour = {
        question: 'How do you say \'a computer\' in French?',
        answer: 'un ordinateur',
    };
    
    const frenchCardFive = {
        question: 'How do you say \'a window\' in French?',
        answer: 'une fenêtre',
    };
    
    const frenchCardSix = {
        question: 'How do you say \'a school\' in French?',
        answer: 'une école',
    };
    
    const frenchCardSeven = {
        question: 'How do you say \'a menu\' in French?',
        answer: 'une carte',
    };
    
    const frenchCardEight = {
        question: 'How do you say \'a doctor\' in French?',
        answer: 'une voiture',
    };
    
    const frenchCardNine = {
        question: 'How do you say \'a shirt\' in French?',
        answer: 'une chemise',
    };
    
    const frenchCardTen = {
        question: 'How do you say \'a party\' in French?',
        answer: 'une fête',
    };

    const frenchCards = [frenchCardOne, frenchCardTwo, frenchCardThree, 
                    frenchCardFour, frenchCardFive, frenchCardSix, 
                    frenchCardSeven, frenchCardEight, frenchCardNine,
                    frenchCardTen];
    
        frenchCards.forEach((card) => {
        card = (0,_card__WEBPACK_IMPORTED_MODULE_1__.createCard)(card);
    });
    return frenchCards;
}
const preBuiltDecks = [frenchDeck];

/***/ }),

/***/ "./src/scripts/pubsub.js":
/*!*******************************!*\
  !*** ./src/scripts/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });


const Observable  = {
    
    events: {
    },
    subscribe: function(evName, fn) {
        this.events[evName] = this.events[evName] || [];
        this.events[evName].push(fn)
    },
    unsubscribe: function(evName, fn) {
        if (this.events[evName]) {
            this.events[evName] = this.events[evName].filter(f => f !== fn);
        }
    },
    publish: function(evName, data) {
        if (this.events[evName]) {
            this.events[evName].forEach(f => {
                f(data);
            });
        }
    }
};

/***/ }),

/***/ "./src/scripts/userdata.js":
/*!*********************************!*\
  !*** ./src/scripts/userdata.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataPanels": () => (/* binding */ dataPanels),
/* harmony export */   "newUserData": () => (/* binding */ newUserData)
/* harmony export */ });
/* harmony import */ var _images_learning_color_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/learning-color.svg */ "./src/images/learning-color.svg");
/* harmony import */ var _images_study_lamp_color_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/study-lamp-color.svg */ "./src/images/study-lamp-color.svg");
/* harmony import */ var _images_study_desk_color_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/study-desk-color.svg */ "./src/images/study-desk-color.svg");
/* harmony import */ var _images_education_color_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/education-color.svg */ "./src/images/education-color.svg");





const newUserData = {
    type: 'userdata',
    decksCreated: 0,
    decksStudied: 0,
    cardsCreated: 0,
    cardsStudied: 0,
};

const DataPanel = {
    imagesrc: null,
    title: null,
    underlinecolor: null,
    statistic: null
};

const decksCreatedPanel = Object.assign(Object.create(DataPanel), {
    imagesrc: _images_learning_color_svg__WEBPACK_IMPORTED_MODULE_0__,
    title: 'Decks Created',
    underlinecolor: 'greencardunderline',
    decksCreated: 0,
    statistic: 0,
});

const decksStudiedPanel = Object.assign(Object.create(DataPanel), {
    imagesrc: _images_education_color_svg__WEBPACK_IMPORTED_MODULE_3__,
    title: 'Decks Studied',
    underlinecolor: 'bluecardunderline',
    statistic: 0,
    decksStudied: 0,
});

const cardsCreatedPanel = Object.assign(Object.create(DataPanel), {
    imagesrc: _images_study_desk_color_svg__WEBPACK_IMPORTED_MODULE_2__,
    title: 'Cards Created',
    underlinecolor: 'brickcardunderline',
    statistic: 0,
    cardsCreated: 0,
});

const cardsStudiedPanel = Object.assign(Object.create(DataPanel), {
    imagesrc: _images_study_lamp_color_svg__WEBPACK_IMPORTED_MODULE_1__,
    title: 'Cards Studied',
    underlinecolor: 'sunshinecardunderline',
    statistic: 0,
    cardsStudied: 0,
});

const dataPanels = [decksCreatedPanel, decksStudiedPanel, cardsCreatedPanel, cardsStudiedPanel];

/***/ }),

/***/ "./src/scripts/validator.js":
/*!**********************************!*\
  !*** ./src/scripts/validator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validators": () => (/* binding */ validators)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isFuture/index.js");


const Validator = {
    data: null,
    element: null,
    isValid: false,

    setData: function(element, data) {
        this.element = element;
        this.data = data;
    },

    setValidityClass: function() {
            if (this.isValid) {
                this.element.classList.remove('invalid');
            }
            else {
                this.element.classList.add('invalid');
            }
    },

    displayWarning: function() {
        this.element.setCustomValidity('This field is invalid');
        this.element.reportValidity();
    },
};

const validators = {

    nameValidator: Object.assign(Object.create(Validator), {
        nameLengthIsValid: false,
        nameIsAvailable: false,
    
        checkValidity: function() {
            this.checkLength();
            this.checkNameAvailability(this.inputValue);
            if (this.nameLengthIsValid && this.nameIsAvailable) {
                this.isValid = true;
            }
            else {this.isValid = false};
        },
    
        checkLength: function () {
            this.nameLengthIsValid = this.data.length > 0 ? true : false;
        },
    
        checkNameAvailability: function() {
                const existingDeckName = Object.keys(localStorage).find(item => item === this.data);
                this.nameIsAvailable = existingDeckName !== this.data ? true: false;
        },
    
        displayWarning: function() {
            if (!this.nameLengthIsValid) {
                this.element.setCustomValidity('Name must be at least 1 character long');
                this.element.reportValidity();
                return;
            }
            else if (!this.nameIsAvailable) {
                this.element.setCustomValidity('Deck already exists, choose a different name');
                this.element.reportValidity();
            }
        }
    }),
    
    categoryValidator: Object.assign(Object.create(Validator), {
    
        checkValidity: function() {
            this.isValid = this.data !== '' ? true : false;
        },
    
        displayWarning: function() {
                this.element.setCustomValidity('Please choose a category');
                this.element.reportValidity();
        },
    }),
    
    dateValidator: Object.assign(Object.create(Validator), {
    
        checkValidity: function() {
            const userInput = this.convertDataToDateObject(this.data);
            this.isValid = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(userInput);
        },
    
        convertDataToDateObject: function(dateData) {
            const array = dateData.split('-');
            const year = array[0];
            const month = array[1];
            const day = array[2];
            return new Date(year, month, day);
        },
    
        displayWarning: function() {
                this.element.setCustomValidity('Date must be in the future');
                this.element.reportValidity();
        },
    }),
    
    questionValidator: Object.assign(Object.create(Validator), {
        minlength: 1,
        maxLength: 300,
    
        checkValidity: function() {
            this.isValid = this.data.length > 0 && 
                           this.data.length < 301 ? true : false;
        },
    
        displayWarning: function() {
            this.element.setCustomValidity('Must be between 1 and 300 characters');
            this.element.reportValidity();
        },
    }),
    
    answerValidator: Object.assign(Object.create(Validator), {
        minlength: 1,
        maxLength: 300,
    
        checkValidity: function() {
            this.isValid = this.data.length > 0 && 
                           this.data.length < 301 ? true : false;
        },
    
        displayWarning: function() {
            this.element.setCustomValidity('Must be between 1 and 300 characters');
            this.element.reportValidity();
        },
    }),

    resetInputValidity: function(inputs) {
        inputs.forEach(element => {
            element.setValidityClass();
        });
    },
};



/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "view": () => (/* binding */ view)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/scripts/helpers.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/scripts/controller.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.js");
/* harmony import */ var _images_studying_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/studying.png */ "./src/images/studying.png");
/* harmony import */ var _images_edit_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/edit.png */ "./src/images/edit.png");






const view = (function() {
    const main = document.querySelector('main');

    const studyPage = (function(){
        _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.subscribe('NewDeckAdded', localDecks => {
            updateDeckDisplay(localDecks)
        });

        function renderPage() {
            //This is for the slide in menu nav bar
            // const openNavButton = document.getElementById('opennavbtn');
            // openNavButton.addEventListener('click', toggleNav);
            //This is for the slide in menu nav bar

            renderModal();

            const topDecksSection = renderYourDecks();
            const prebuiltDecksSection = renderPreBuiltDecks();
            const emptySpace = getEmptyDivForExtraPageSpaceAtBottomWithMobileNavHeight();
            
            main.append(topDecksSection, prebuiltDecksSection, emptySpace);
        };
        
        function renderYourDecks() {
            const title = renderSectionTitle('Your Decks');
            const deckDisplayDiv = renderDeckDisplay(_controller__WEBPACK_IMPORTED_MODULE_1__.controller.data.localDecks);
            const section = document.createElement('section');
            section.append(title, deckDisplayDiv);
            return section;
        };

        function renderPreBuiltDecks() {            
            
            const title = renderSectionTitle('Prebuilt Decks');
            const prebuiltDecksDiv = document.createElement('div');
            prebuiltDecksDiv.className = 'deckdisplay';
            _controller__WEBPACK_IMPORTED_MODULE_1__.controller.data.preBuiltDecks.forEach((deck) => {
                deck = renderDeck(deck);
                prebuiltDecksDiv.appendChild(deck);
            });
    
            const section = document.createElement('section');
            section.append(title, prebuiltDecksDiv);
            return section;
        };

        function renderDeckDisplay(localDecks) {
    
            const deckDisplayDiv = document.createElement('div');
            deckDisplayDiv.className = 'deckdisplay';
            deckDisplayDiv.id = 'deckdisplay';

            if (localDecks.length > 0) {
                localDecks.forEach((deck) => {
                    const element = renderDeck(deck);
                    deckDisplayDiv.appendChild(element);
                });
            } else {
                const itsEmptyMessage = document.createElement('p');
                itsEmptyMessage.className = 'itsemptymessage';
                itsEmptyMessage.innerText = `It's empty in here! Click the blue button above to create a new deck.`;
                deckDisplayDiv.appendChild(itsEmptyMessage);
            }
            return deckDisplayDiv;
        };

        function renderStudyCardSide(cardSide, deck) {

            const numberOfCardsFront = document.createElement('p');
            numberOfCardsFront.innerText = `${deck.currentCard + 1} / ${deck.cards.length}`;
            numberOfCardsFront.className = 'numberofcards';
            numberOfCardsFront.id = `${cardSide}sectionnumberofcards`.toLowerCase();

            const header = document.createElement('h4');
            header.innerText = `${cardSide}:`;

            const text = document.createElement('p')
            text.id = `${cardSide}text`.toLowerCase();
            if (cardSide === 'Question') {
                text.innerText = deck.cards[deck.currentCard].question;
            } else {
                text.innerText = deck.cards[deck.currentCard].answer;
            }

            const innerDiv = document.createElement('div');
            innerDiv.append(header, text);

            const section = document.createElement('div');
            section.id = `${cardSide}section`.toLowerCase();
            section.className = `${cardSide}section`.toLowerCase();
            section.append(numberOfCardsFront, innerDiv);
            return section;

        };

        function updateStudyCard(deck) {
            const numberOfCardsFront = document.getElementById('questionsectionnumberofcards');
            numberOfCardsFront.innerText = `${deck.currentCard + 1} / ${deck.cards.length}`;

            const questionText = document.getElementById('questiontext');
            questionText.innerText = deck.cards[deck.currentCard].question;

            
              
            const answerText = document.getElementById('answertext');
            // answerText.innerText = deck.cards[deck.currentCard].answer;

            //Before, you would see the next answer too soon if you were on the backside
            //of the card and clicked next, with this delay, you no longer will
            //accidentally see the answer to the next card
            setTimeout(() => {
                answerText.innerText = deck.cards[deck.currentCard].answer;
              }, 100);

            const numberOfCardsBack = document.getElementById('answersectionnumberofcards');
            numberOfCardsBack.innerText = `${deck.currentCard + 1} / ${deck.cards.length}`;

            const previousButton = document.getElementById('previousbutton');
            if (deck.currentCard > 0) {
                previousButton.classList.remove('inactive')
            } else {
                previousButton.classList.add('inactive');
            }

            if (deck.currentCard + 1 === deck.cards.length) {
                document.getElementById('nextcardbutton').innerText = 'Finish Session';
            }
        }

        function renderFlipCard(questionSection, answerSection) {

            const flipCard = document.createElement('div');
            flipCard.className = 'flip-card';
            flipCard.addEventListener('click', () => {
                flipCardInner.classList.toggle('activated');
            });

            const flipCardInner = document.createElement('div');
            flipCardInner.className = 'flip-card-inner';
            flipCardInner.id = 'flip-card-inner';

            const flipCardFront = document.createElement('div');
            flipCardFront.className = 'flip-card-front';

            const flipCardBack = document.createElement('div');
            flipCardBack.className = 'flip-card-back';

            flipCard.appendChild(flipCardInner);
            flipCardInner.append(flipCardFront, flipCardBack);
            flipCardFront.appendChild(questionSection);
            flipCardBack.appendChild(answerSection);
            return flipCard;
        };

        function renderStudySession(deck) {

            const studyDiv = document.createElement('div');
            studyDiv.className = 'studydiv';

            const studyCardDiv = document.createElement('div');
            studyCardDiv.id = 'studycarddiv';
            studyCardDiv.className = 'studycarddiv';

            const deckNameHeader = renderSectionTitle(deck.name);
            deckNameHeader.className = 'decknameheader';

            const questionSection = renderStudyCardSide('Question', deck);
            const answerSection = renderStudyCardSide('Answer', deck);

            const previousButton = document.createElement('button');
            previousButton.id = 'previousbutton';
            previousButton.innerText = 'Last Card';
            previousButton.addEventListener('click', () => {
                _controller__WEBPACK_IMPORTED_MODULE_1__.controller.showNextStudyCard(deck, 'showprevious');
                const flipCardInner = document.getElementById('flip-card-inner');
                flipCardInner.classList.remove('activated');
            });
            previousButton.classList.add('inactive');

            const nextButton = document.createElement('button');
            nextButton.innerText = 'Next Card';
            nextButton.id = 'nextcardbutton';
            nextButton.addEventListener('click', () => {
                _controller__WEBPACK_IMPORTED_MODULE_1__.controller.showNextStudyCard(deck, 'shownext');
                const flipCardInner = document.getElementById('flip-card-inner');
                flipCardInner.classList.remove('activated');
            });

            const buttonsSpan = document.createElement('span');
            buttonsSpan.className = 'buttonsspan';
            buttonsSpan.append(previousButton, nextButton);

            const flipCard = renderFlipCard(questionSection, answerSection);

            studyCardDiv.append(flipCard, buttonsSpan);
            studyDiv.append(deckNameHeader, studyCardDiv)
            main.append(studyDiv);
        };

        function renderStudySessionComplete(deck) {
            const congratsDiv = document.createElement('div');
            congratsDiv.className = 'congratsdiv';

            const celebrationText = document.createElement('p');
            celebrationText.innerText = `Congratulations, you studied ${deck.cards.length} cards! Click the button below to return to your decks page`;

            const returnToDecksPageButton = document.createElement('button');
            returnToDecksPageButton.innerText = 'Return to Decks Page';
            returnToDecksPageButton.addEventListener('click', () => {
                view.removeMainTagContent();
                renderPage();
            });

            congratsDiv.append(celebrationText, returnToDecksPageButton);
            main.appendChild(congratsDiv);
        }

        function removeDecksFromPage() {
            const deckDisplayDiv = document.getElementById('deckdisplay');
            const children = Array.from(deckDisplayDiv.children);
            children.forEach((child) => {
                child.remove();
            });
        };

        function updateDeckDisplay(localDecks) {
            const deckDisplayDiv = document.getElementById('deckdisplay');
            removeDecksFromPage();

            localDecks.forEach((deck) => {
                const element = renderDeck(deck);
                deckDisplayDiv.appendChild(element);
            });
        };

        function renderDeck(deck) {

            const name = document.createElement('h3');
            name.innerText = deck.name;
    
            const dueDateParagraphElement = document.createElement('p');
            dueDateParagraphElement.innerText = `Due: ${deck.dueDate}`;
    
            const deckDescriptionParagraph = document.createElement('p');
            deckDescriptionParagraph.innerText = deck.description;

            const studyButton = document.createElement('button');
            studyButton.innerText = 'Study';
            studyButton.onclick = () => {
                removeMainTagContent();
                _controller__WEBPACK_IMPORTED_MODULE_1__.controller.startStudySession(deck);
            };

            const imageAndNameDiv = document.createElement('div');
            imageAndNameDiv.className = 'deckimageandname';
            imageAndNameDiv.append(name, studyButton);
    
            const deckDescriptionDiv = document.createElement('div');
            deckDescriptionDiv.className = 'deckdescriptiondiv';
            deckDescriptionDiv.append(deckDescriptionParagraph, dueDateParagraphElement);
    
            const deckDiv = document.createElement('div');
            deckDiv.className = 'deck';
            deckDiv.append(imageAndNameDiv, deckDescriptionDiv);
            return deckDiv;
        };
        
        return {
            renderPage,
            updateDeckDisplay,
            renderStudySession,
            updateStudyCard,
            renderStudyCardSide,
            renderStudySessionComplete,
        };
    })();

    const overviewPage = (function(){

        _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.subscribe('UpdateOverviewData', cardData => {
            updateOverviewCards(cardData);
            updateDeleteDeckOptions();
        }
        );

        function renderPage() {
            renderModal();
            const overviewSection = renderOverviewSection();
            const settingsSection = renderSettingsSection();
            const emptySpaceWithMobileNavHeight = getEmptyDivForExtraPageSpaceAtBottomWithMobileNavHeight();
    
            main.append(overviewSection, settingsSection, emptySpaceWithMobileNavHeight);
        };

        function renderOverviewSection() {
            const title = renderSectionTitle('Overview');
            const rowOfCardsDiv = renderOverviewCards(_controller__WEBPACK_IMPORTED_MODULE_1__.controller.data.Panels);
            
            const section = document.createElement('section');
            section.append(title, rowOfCardsDiv);
            return section;
        };
        
        function renderOverviewCards(cards) {

            const rowOfCardsDiv = document.createElement('div');
            rowOfCardsDiv.className = 'rowofcards';
            rowOfCardsDiv.id = 'rowofcards';
    
            cards.forEach((card) => {
                
                const cardOuterDiv = document.createElement('div');
                cardOuterDiv.className = 'overviewcard';
        
                const cardInnerDiv = document.createElement('div');
                
                const image = document.createElement('img');
                image.src = card.imagesrc;
        
                const title = document.createElement('h3');
                title.innerText = card.title;
         
                const statistic = document.createElement('p');
                statistic.id = card.underlinecolor;
                statistic.className = card.underlinecolor;
                statistic.innerText = card.statistic;
        
                cardInnerDiv.append(image, title);
                cardOuterDiv.append(cardInnerDiv, statistic);
        
                rowOfCardsDiv.appendChild(cardOuterDiv);
            });
    
            return rowOfCardsDiv;
        };

        function renderSettingsSection() {
            const section = document.createElement('section');
            section.className = 'settingssection';
    
            const title = renderSectionTitle('Settings');
            
            const deleteDeckSection = renderDeleteDeckOptions();
            const resetButton = renderResetButton();

            section.append(title, deleteDeckSection, resetButton);
            return section;
        };

        function renderDeleteDeckOptions() {

            const decks = Array.from(_controller__WEBPACK_IMPORTED_MODULE_1__.controller.data.localDecks);
            
            const dropdownLabel = document.createElement('label');
            dropdownLabel.htmlFor = 'decks';
            dropdownLabel.innerText = 'Choose a deck you would like to delete';

            const dropdownSelect = document.createElement('select');
            dropdownSelect.name = 'decks';
            dropdownSelect.id = 'dropdownselect';

            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.innerText = '___________';
            dropdownSelect.appendChild(defaultOption);

            decks.forEach((item) => {
                const option = document.createElement('option');
                option.id = item.name + 'id';
                option.value = item.name;
                option.innerText = item.name;
                dropdownSelect.appendChild(option);
            });

            const deleteButton = document.createElement('button');
            deleteButton.className = 'deckdeletebutton';
            deleteButton.innerHTML = 'Delete';
            
            deleteButton.onclick = () => {
                const deckName = dropdownSelect.value;
                _controller__WEBPACK_IMPORTED_MODULE_1__.controller.deleteDeck(deckName);
                _controller__WEBPACK_IMPORTED_MODULE_1__.controller.data.Update();
                document.getElementById(deckName + 'id').remove();
            };

            const deleteDeckDiv = document.createElement('div');
            deleteDeckDiv.className = 'deletedeckdiv';
            deleteDeckDiv.append(dropdownSelect, deleteButton);

            const div = document.createElement('div');
            div.className = 'deckdeleteoptions';
            div.append(dropdownLabel, deleteDeckDiv);
            return div;
        };

        function updateOverviewCards(cards) {
            cards.forEach((card) => {
                const overviewCard = document.getElementById(card.underlinecolor);
                overviewCard.innerText = card.statistic;
            });

        };

        function updateDeleteDeckOptions() {
            const dropdownSelect = document.getElementById('dropdownselect');
            const decks = Array.from(dropdownSelect.children);
            const localDecks = _controller__WEBPACK_IMPORTED_MODULE_1__.controller.data.localDecks;

            decks.forEach((item) => {
                if (item.value != '') { item.remove(); }
            });
            
            localDecks.forEach((item) => {
                const option = document.createElement('option');
                option.id = item.name + 'id';
                option.value = item.name;
                option.innerText = item.name;
                dropdownSelect.appendChild(option);
            });
        };

        function renderResetButton() {
            const button = document.createElement('button');
            button.innerText = 'Delete all saved data';
            button.className = 'resetbutton';
            button.ariaLabel = 'Click here to delete all saved data';
            button.onclick = () => {
                showResetDataConfirmationWindow();
            };
            return button;
        };

        function showResetDataConfirmationWindow() {
            if (confirm('Are you sure you want to reset your data? You cannot undo this action!')) {
                _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.publish('DataReset');    
            } else { return; }
        };

        return {
            renderPage,
        };
    })();

    function renderModal() {

        const modal = document.createElement('div');
        modal.id = 'modal';
        modal.className = 'modal';
        main.appendChild(modal);

        const modalHeader = renderModalHeader(modal);
        const modalForm = renderModalForm(modal);

        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body';
        modalBody.id = 'modal-body';
        modalBody.appendChild(modalForm);
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        modalContent.id = 'modal-content';
        modalContent.append(modalHeader, modalBody);

        modal.appendChild(modalContent);
    };

    function renderModalHeader(modal) {

        const modalHeader = document.createElement('h5');
        modalHeader.innerText = 'Step 1: Create Deck'
        modalHeader.id = 'modalheaderh5';

        const exitSpan = document.createElement('span');
        exitSpan.innerHTML = '&times;';
        exitSpan.onclick = () => {
            modal.style.display = 'none';
        }
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        const modalHeaderDiv = document.createElement('div');
        modalHeaderDiv.className = 'modal-header';
        modalHeaderDiv.append(modalHeader, exitSpan);
        return modalHeaderDiv;
    };

    function renderModalForm() {

        const nameInputLabel = document.createElement('label');
        nameInputLabel.htmlFor = 'deckname';
        nameInputLabel.innerText = `Max 20 Characters`;
        
        const nameInput = document.createElement('input');
        nameInput.required = true;
        nameInput.minLength = 1;
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(nameInput, {
            'id': 'deckname',
            'class': 'deckname',
            'name': 'deckname',
            'type': 'text',
            'maxLength': '20',
            'minLength': '1',
        });

        const descriptionLabel = document.createElement('label');
        descriptionLabel.htmlFor = 'deckdescription';
        descriptionLabel.innerText = `Description Max 60 Characters`;

        const descriptionInput = document.createElement('textarea');
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(descriptionInput,
            {
                'id': 'deckdescription',
                'class': 'deckdescription',
                'name': 'deckdescription',
                'rows': '8',
                'cols': '20',
                'maxLength': '60',
                'min-height': '3rem',
            });

        const dueDateLabel = document.createElement('label');
        dueDateLabel.htmlFor = 'deckduedate';
        dueDateLabel.innerText = 'Due Date:';

        const dueDateInput = document.createElement('input');
        dueDateInput.required = true;
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(dueDateInput, {
            'id': 'deckduedate',
            'name': 'deckduedate',
            'class': 'deckduedate',
            'type': 'date',
        });

        const categoryLabel = document.createElement('label');
        categoryLabel.htmlFor = 'deckcategory';
        categoryLabel.innerText = 'Category';
        
        const categorySelect = document.createElement('select');
        categorySelect.required = true;
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(categorySelect, {
            'id': 'deckcategory',
            'name': 'deckcategory',
            'class': 'deckcategory',
        });
        
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.innerText = 'Please choose a Category';
        
        const languageOption = document.createElement('option');
        languageOption.value = 'Language';
        languageOption.innerText = 'Language';
        
        const mathOption = document.createElement('option');
        mathOption.value = 'Math';
        mathOption.innerText = 'Math';

        categorySelect.append(defaultOption, languageOption, mathOption);

        const inputs = [nameInput, descriptionInput, dueDateInput, categorySelect];
        const formSubmitButton = document.createElement('button');
        formSubmitButton.innerText = 'Create Deck';
        formSubmitButton.type = 'button';
        formSubmitButton.className = 'submitbutton';

        const addCardsButton = document.createElement('button');
        addCardsButton.innerText = 'Add Cards';
        addCardsButton.type = 'button';
        addCardsButton.onclick = (event) => {
            event.preventDefault();
            renderAddCardModalBody();
        };

        formSubmitButton.addEventListener('click', _controller__WEBPACK_IMPORTED_MODULE_1__.controller.handleDeckCreationForm);

        const form = document.createElement('form');
        form.className = 'modal-form';
        form.id = 'modal-form';
        form.append(
            nameInputLabel, nameInput, 
            categoryLabel, categorySelect,
            descriptionLabel, descriptionInput,
            dueDateLabel, dueDateInput,
            formSubmitButton);
        return form;
    };

    function setModalAutofocus() {
        setTimeout(function() {
            const modalbody = document.getElementById('modal-body');
            const firstText = modalbody.getElementsByTagName('input')[0] || modalbody.getElementsByTagName('textarea')[0];
            firstText.focus();
          }, 1);
    }

    function renderAddCardModalBody(newDeck) {
        removeModalContent();
        renderModalAddCardInput(newDeck);
        renderModalAddCardInputHeader();
        setModalAutofocus();
    }

    function resetModal() {
        document.getElementById('modal').remove();
        renderModal();
    };

    function renderModalAddCardInput(newDeck) {

        const modalBody = document.getElementById('modal-body');

        const cardCountH3 = document.createElement('h3');
        cardCountH3.innerText = `Card: ${newDeck.cardCount + 1}`;
        cardCountH3.className = 'cardcounth3';

        const deckName = document.createElement('h3');
        deckName.innerText = newDeck.name;

        const newCardTitleDiv = document.createElement('div');
        newCardTitleDiv.className = 'newcardtitlediv';
        newCardTitleDiv.append(cardCountH3, deckName);

        const questionLabel = document.createElement('label');
        questionLabel.htmlFor = 'questioninput';
        questionLabel.innerText = 'Question:';
        
        const questionInput = document.createElement('textarea');
        questionInput.name = 'questioninput';
        questionInput.id = 'questioninput';
        questionInput.minLength = 1;
        questionInput.maxLength = 300;

        const questionDiv = document.createElement('div');
        questionDiv.className = 'questiondiv';
        questionDiv.append(questionLabel, questionInput);

        const answerLabel = document.createElement('label');
        answerLabel.htmlFor = 'answerinput';
        answerLabel.innerText = 'Answer:'
        
        const answerInput = document.createElement('textarea');
        answerInput.name = 'answerinput';
        answerInput.id = 'answerinput';
        answerInput.minLength = 1;
        answerInput.maxLength = 300;

        const answerDiv = document.createElement('div');
        answerDiv.className = 'answerdiv';
        answerDiv.append(answerLabel, answerInput);

        const modalCardForm = document.createElement('form');
        modalCardForm.id = 'modal-card-form';
        modalCardForm.append(questionDiv, answerDiv);

        const userOptionsDiv = document.createElement('div');
        userOptionsDiv.className = 'useroptionsdiv';

        const addNextCardButton = document.createElement('button');
        addNextCardButton.innerText = 'Add next card';
        addNextCardButton.addEventListener('click', () => {
            _controller__WEBPACK_IMPORTED_MODULE_1__.controller.handleAddCardsForm(newDeck, 'addmore')
        });

        const finishAddingCardsButton = document.createElement('button');
        finishAddingCardsButton.innerText = 'Add and Finish';
        finishAddingCardsButton.addEventListener('click', () => {
            _controller__WEBPACK_IMPORTED_MODULE_1__.controller.handleAddCardsForm(newDeck, 'doneadding')
        });

        userOptionsDiv.append(addNextCardButton, finishAddingCardsButton);
        modalBody.append(newCardTitleDiv, modalCardForm, userOptionsDiv);
    }

    function renderModalAddCardInputHeader() {
        const title = document.getElementById('modalheaderh5');
        title.innerText = 'Step 2: Add Cards';
    }

    function removeModalContent() {
        const modalBody = document.getElementById('modal-body');
        const children = Array.from(modalBody.children);
        children.forEach((child) => {
            child.remove();
        });
    }

    function hideModal() {
        document.getElementById('modal').style.display = 'none';
    };

    function resetForm(form) {
        form.reset();
    }

    function renderPage(newPageID) {
        removeMainTagContent();
        switch (newPageID) {
            case 'studypage':
                studyPage.renderPage();
                break;

            case 'overviewpage':
                overviewPage.renderPage();
                break;
        }
    };

    function changeTabColor(newPageID) {
        view.mobileNavButtons.forEach((navTab) => {
            if ( navTab.id === newPageID) {
                navTab.style.borderTop = '1px solid blue';
                document.getElementById(`${navTab.id}h3`).style.color = 'blue';
            }
            else {
                navTab.style.borderTop = 'none';
                document.getElementById(`${navTab.id}h3`).style.color = 'grey';
            }
        })
    };

    function renderBanner() {
        addBannerButtonFunctionality();
        makeNewAddDeckButtonWork();
    };

    function renderSectionTitle(titleName) {
        const h1 = document.createElement('h1');
        h1.innerText = titleName;
        h1.id = titleName.slice().toLowerCase() + 'title';
        return h1;
    };

    function addBannerButtonFunctionality() {
        const bannerButton = document.getElementById('bannerbutton');
        bannerButton.onclick = () => {
            menu.classList.toggle('show');
        };

        const menu = document.getElementById('menu');
        menu.onclick = () => {
            menu.classList.remove('show');
        };

        document.onclick = () => {
            if (!bannerButton.contains(event.target)) {
                menu.classList.remove('show');
            }
        }
    };

    function makeNewAddDeckButtonWork() {
        const buttttton = document.getElementById('thebutttton');
        buttttton.onclick = () => {
            setModalAutofocus();
            document.getElementById('modal').style.display = 'block';
        }
    };
    
    function removeMainTagContent() {
        const mainChildren = Array.from(main.children);
        mainChildren.forEach(element => {
            element.remove();
        });
};

    function getEmptyDivForExtraPageSpaceAtBottomWithMobileNavHeight() {
        const mobileNavHeight = document.getElementById('mobilenav').offsetHeight.toString();
        const emptySpaceDiv = document.createElement('div');
        emptySpaceDiv.style.height = `${mobileNavHeight}px`;
        return emptySpaceDiv;
    };

    function renderMobileNavigation () {
        const footer = document.createElement('footer');
        footer.id = 'footer';

        const nav = document.createElement('nav');
        nav.className = 'mobilenav';
        nav.id = 'mobilenav';
        
        const studyImage = document.createElement('img');
        studyImage.src = _images_studying_png__WEBPACK_IMPORTED_MODULE_3__;
        studyImage.alt = 'Click here to access the study section';

        const studyH3 = document.createElement('h3');
        studyH3.id = 'studypageh3'
        studyH3.innerText = 'Study';

        const studyButton = document.createElement('button');
        studyButton.id = 'studypage';
        studyButton.append(studyImage, studyH3)
        
        const overviewImage = document.createElement('img');
        overviewImage.src = _images_edit_png__WEBPACK_IMPORTED_MODULE_4__;
        overviewImage.alt = 'Click here to access the study section';

        const overviewH3 = document.createElement('h3');
        overviewH3.id = 'overviewpageh3'
        overviewH3.innerText = 'Overview';

        const overviewButton = document.createElement('button');
        overviewButton.id = 'overviewpage';
        overviewButton.append(overviewImage, overviewH3)

        nav.append(studyButton, overviewButton);
        footer.appendChild(nav);

        const body = document.getElementsByTagName('body')[0];
        body.appendChild(footer);
    };

    function updateMobileNavButtons() {
        view.mobileNavButtons = Array.from([
            document.getElementById('studypage'),
            document.getElementById('overviewpage'),
            ]);
    };

    function addMobileNavEventListeners() {
        view.mobileNavButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
            const currentTabID = event.target.id;
            removeMainTagContent();
            changeTabColor(currentTabID);
            _controller__WEBPACK_IMPORTED_MODULE_1__.controller.changePage(currentTabID);
            });
        });
};

    function renderDefaultView(defaultTabID) {
        renderMobileNavigation();
        updateMobileNavButtons();
        addMobileNavEventListeners();
        renderBanner();
        renderPage(defaultTabID)
        changeTabColor(defaultTabID);
    };

    // function renderBanner() {

    //     const path = document.createElement('path');
    //     path.setAttribute('d', 'M12 6V18M6 12H18');
    //     path.setAttribute('stroke', 'currentColor');
    //     path.setAttribute('stroke-width', '2');
    //     path.setAttribute('stroke-linecap', 'round');
    //     path.setAttribute('stroke-linejoin', 'round');

    //     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    //     svg.setAttribute('height', '40px');
    //     svg.setAttribute('width', '40px');
    //     svg.setAttribute('viewBox', '0 0 24 24');
    //     svg.appendChild(path);

    //     const addDeckButton = document.createElement('button');
    //     addDeckButton.id = 'bannerbutton';
    //     addDeckButton.appendChild(svg);

        // const title = document.createElement('h3');
        // title.innerText = 'Study Decks';

        // const innerHeaderDiv = document.createElement('div');
        // innerHeaderDiv.className = 'innerheaderdiv';
        // innerHeaderDiv.append(title, addDeckButton);

        // const mainHeader = document.getElementById('mainheader');
        // mainHeader.appendChild(innerHeaderDiv);

    // }

    return {
        studyPage,
        resetModal,
        hideModal,
        resetForm,
        renderPage,
        renderDefaultView,
        removeMainTagContent,
        renderAddCardModalBody,
        };
})();

//Side-bar Nav

//temporarily adding menu event listeners here
//These are the event listeners for the left slide-in navbar

// document.getElementById('overviewoption').addEventListener('click', () => {    
//     removeMainTagContent();
//     render()
//     toggleNav();
// });


// document.getElementById('adddeckoption').addEventListener('click', () => {
//     removeMainTagContent();
//     Render();
//     toggleNav();
// });

// function toggleNav() {
//     const sideNav = document.getElementById('mySidenav');
//     sideNav.classList.toggle('active');
// };

/***/ }),

/***/ "./src/images/edit.png":
/*!*****************************!*\
  !*** ./src/images/edit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8862eb642fe93982ff92.png";

/***/ }),

/***/ "./src/images/education-color.svg":
/*!****************************************!*\
  !*** ./src/images/education-color.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f055a93bcdaef10b9b2.svg";

/***/ }),

/***/ "./src/images/learning-color.svg":
/*!***************************************!*\
  !*** ./src/images/learning-color.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "545fed308587cd49af3f.svg";

/***/ }),

/***/ "./src/images/study-desk-color.svg":
/*!*****************************************!*\
  !*** ./src/images/study-desk-color.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e83d71116ece79d60cc.svg";

/***/ }),

/***/ "./src/images/study-lamp-color.svg":
/*!*****************************************!*\
  !*** ./src/images/study-lamp-color.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56a2609cc3bf24c832f2.svg";

/***/ }),

/***/ "./src/images/studying.png":
/*!*********************************!*\
  !*** ./src/images/studying.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf62005ce12d2bac3df2.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/scripts/controller.js");
/* harmony import */ var _scss_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/css/style.css */ "./src/scss/css/style.css");


_controller__WEBPACK_IMPORTED_MODULE_0__.controller.startApplication();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXlCLEdBQUcsZ0JBQWdCLHFCQUFxQixrQkFBa0Isc0JBQXNCLEdBQUcsa0RBQWtELHlmQUF5ZixPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sV0FBVyxjQUFjLFVBQVUsTUFBTSxXQUFXLE1BQU0sV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsTUFBTSxXQUFXLE1BQU0sVUFBVSxVQUFVLE1BQU0sV0FBVyxRQUFRLFVBQVUsTUFBTSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLFNBQVMsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFFBQVEsTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sU0FBUyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sYUFBYSxRQUFRLE1BQU0sWUFBWSxRQUFRLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sUUFBUSxZQUFZLFlBQVksV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFFBQVEsNkJBQTZCO0FBQ3Y1Z0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSndDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLFNBQVM7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxTQUFTLDREQUFNO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7OztBQzNCQSx3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFM1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLHlEQUF5RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSwwT0FBME87O0FBRTFPO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQXlHO0FBQ3pHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJbUQ7QUFDM0UsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaZ0M7QUFDRjtBQUNRO0FBQ1U7O0FBRWhEO0FBQ0E7O0FBRU87O0FBRVAsSUFBSSx5REFBb0I7QUFDeEI7QUFDQTtBQUNBLHVCQUF1Qix5REFBYTtBQUNwQztBQUNBLG9CQUFvQixzRUFBa0M7QUFDdEQsZ0JBQWdCLG9EQUFnQjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLDhCQUE4QixzRUFBa0M7QUFDaEUsU0FBUzs7QUFFVDtBQUNBLDBCQUEwQix3REFBb0I7QUFDOUMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0ZBQTRDO0FBQ3BEO0FBQ0EsUUFBUSx3REFBb0I7QUFDNUIsUUFBUSx5REFBc0I7QUFDOUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLGtFQUE4QjtBQUMzRCxnQ0FBZ0Msc0VBQWtDO0FBQ2xFLDRCQUE0QixrRUFBOEI7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWLG1DQUFtQyw4REFBMEI7QUFDN0QsNEJBQTRCLG9EQUFnQjtBQUM1QyxZQUFZLCtEQUEyQjtBQUN2QyxZQUFZLDJEQUF1QjtBQUNuQztBQUNBO0FBQ0EsWUFBWSxpREFBYztBQUMxQixZQUFZLHVFQUFtQztBQUMvQyxZQUFZLDhEQUEyQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxzRUFBa0M7QUFDbEUsOEJBQThCLG9FQUFnQzs7QUFFOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLG1DQUFtQyw4REFBMEI7QUFDN0QseUJBQXlCLG9EQUFnQjtBQUN6QztBQUNBLDJCQUEyQixpRUFBNkI7QUFDeEQsdUJBQXVCLHVEQUFtQjtBQUMxQyxZQUFZLGtFQUE4Qjs7QUFFMUM7QUFDQSxZQUFZLDJEQUF1QjtBQUNuQyxZQUFZLHVFQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOERBQTJCO0FBQzNDLGNBQWM7QUFDZCxnQkFBZ0IsaURBQWM7QUFDOUIsZ0JBQWdCLGtEQUFlO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qix3REFBb0I7QUFDaEQ7QUFDQSxZQUFZLHVEQUFrQjtBQUM5QixVQUFVO0FBQ1YsWUFBWSx1REFBa0I7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLFFBQVEsa0RBQWU7QUFDdkIsUUFBUSx3REFBb0I7QUFDNUI7O0FBRUE7QUFDQSxRQUFRLDJEQUF1QjtBQUMvQjtBQUNBLFFBQVEsdURBQWtCO0FBQzFCOztBQUVBO0FBQ0EsUUFBUSxvRUFBaUM7QUFDekM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiwyREFBdUI7QUFDdkMsZ0JBQWdCLDREQUF5QjtBQUN6QyxnQkFBZ0IsNEVBQXlDO0FBQ3pELGdCQUFnQiwyREFBdUI7QUFDdkMsZ0JBQWdCLDJEQUF1QjtBQUN2QztBQUNBLGNBQWM7QUFDZCxnQkFBZ0IsMkRBQXVCO0FBQ3ZDLGdCQUFnQixpRUFBOEI7QUFDOUMsZ0JBQWdCLDJEQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUF1QjtBQUNuQyxZQUFZLGlFQUE4QjtBQUMxQyxZQUFZLDJEQUF1QjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG9FQUFnQztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TE07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTyxFQUFFLElBQUksSUFBSSxLQUFLO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTyxFQUFFLGVBQWU7QUFDdEM7Ozs7Ozs7Ozs7Ozs7OztBQ3JFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0s7QUFDVjtBQUNZO0FBQ047QUFDVTs7QUFFN0M7O0FBRVA7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsaURBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0RBQVc7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQsNENBQVM7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQsaURBQVU7QUFDcEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSx3REFBd0Qsa0RBQVc7QUFDbkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLCtEQUFzQjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDJEQUEyRCxzRUFBNkI7QUFDeEY7QUFDQSwwQkFBMEIsaUVBQXFCO0FBQy9DLFlBQVksc0VBQTZCO0FBQ3pDO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDLDZDQUE2QztBQUM3QyxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFzQjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTzZCO0FBQ007O0FBRXBDO0FBQ0EsK0NBQStDLHVDQUFJO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBVTtBQUN6QixLQUFLO0FBQ0w7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ3RDtBQUNHO0FBQ0E7QUFDRDs7QUFFbkQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyx1REFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxjQUFjLHdEQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGNBQWMseURBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsY0FBYyx5REFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU07Ozs7Ozs7Ozs7Ozs7OztBQ3BENkI7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9EQUFRO0FBQ25DLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJMEM7QUFDQTtBQUNOO0FBQ1c7QUFDRDs7QUFFdkM7QUFDUDs7QUFFQTtBQUNBLFFBQVEseURBQW9CO0FBQzVCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxtRUFBMEI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOEVBQXFDO0FBQ2pEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhDQUE4QyxzQkFBc0IsSUFBSSxrQkFBa0I7QUFDMUY7QUFDQSx1Q0FBdUMsU0FBUzs7QUFFaEQ7QUFDQSxrQ0FBa0MsU0FBUzs7QUFFM0M7QUFDQSx5QkFBeUIsU0FBUztBQUNsQztBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixTQUFTO0FBQ3JDLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxzQkFBc0IsSUFBSSxrQkFBa0I7O0FBRTFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQSw2Q0FBNkMsc0JBQXNCLElBQUksa0JBQWtCOztBQUV6RjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFFQUE0QjtBQUM1QztBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFFQUE0QjtBQUM1QztBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0VBQXdFLG1CQUFtQjs7QUFFM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxhQUFhO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRUFBNEI7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLFFBQVEseURBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRCwrREFBc0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUNBQXFDLG1FQUEwQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOERBQXFCO0FBQ3JDLGdCQUFnQiwrREFBc0I7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1FQUEwQjs7QUFFekQ7QUFDQSx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQWtCO0FBQ2xDLGNBQWMsT0FBTztBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHVEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1ELDBFQUFpQzs7QUFFcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHlDQUF5QyxzQkFBc0I7QUFDL0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0VBQTZCO0FBQ3pDLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBNkI7QUFDekMsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFVBQVU7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFVBQVU7QUFDckQ7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0JBQWdCO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQVM7QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkNBQVk7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBcUI7QUFDakMsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvNEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQ1g7QUFDL0Isb0VBQTJCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3Njc3MvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNGdXR1cmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2Nzcy9jc3Mvc3R5bGUuY3NzP2M4OWEiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvY2FyZC5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvZGVjay5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3ByZWJ1aWx0ZGVja3MuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvdXNlcmRhdGEuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvdmlldy5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9bGlzdF0sXFxub2xbcm9sZT1saXN0XSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDkyJTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XFxufVxcbi5tb2RhbC1oZWFkZXIgaDUge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXG59XFxuLm1vZGFsLWhlYWRlciBzcGFuIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5tb2RhbC1oZWFkZXIgc3Bhbjpob3ZlcixcXG4ubW9kYWwtaGVhZGVyIHNwYW46Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtYm9keSB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuN3JlbTtcXG4gIG1hcmdpbjogMC41cmVtIDAgMXJlbSAwO1xcbn1cXG4ubW9kYWwtYm9keSBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjdyZW07XFxufVxcbi5tb2RhbC1ib2R5IHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG1pbi1oZWlnaHQ6IDMuNXJlbTtcXG4gIG1heC1oZWlnaHQ6IDEycmVtO1xcbn1cXG5cXG4uZGVja25hbWUsXFxuLmRlY2tjYXRlZ29yeSxcXG4uZGVja2R1ZWRhdGUsXFxuLmRlY2tkZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLmRlY2tkZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmRpc2FibGVkaW5wdXR0YWcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiA0MHB4O1xcbiAgbGVmdDogMTk1cHg7XFxuICBjb2xvcjogZ3JleTtcXG4gIHBhZGRpbmc6IDAgMCAwIDAuNWVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5pbnZhbGlkIHtcXG4gIGJvcmRlcjogMC4xMjVyZW0gc29saWQgcmVkO1xcbn1cXG5cXG4uc3VibWl0YnV0dG9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBhZGRpbmc6IDAuMWVtO1xcbn1cXG5cXG4ucXVlc3Rpb25kaXYsXFxuLmFuc3dlcmRpdiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi51c2Vyb3B0aW9uc2RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG4udXNlcm9wdGlvbnNkaXYgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIG1hcmdpbjogMC4yZW07XFxufVxcblxcbi5uZXdjYXJkdGl0bGVkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuMmVtIDAuNWVtIDAuNWVtIDAuNWVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5kZWNrZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRlY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLWhlaWdodDogN3JlbTtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW4tdG9wOiAyJTtcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBwYWRkaW5nOiAwcmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTM4NTY7XFxufVxcblxcbi5kZWNraW1hZ2VhbmRuYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmY2QxZTtcXG4gIG1hcmdpbjogMC43ZW0gMCAwLjdlbSAxZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLmRlY2tpbWFnZWFuZG5hbWUgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbn1cXG4uZGVja2ltYWdlYW5kbmFtZSBoMyB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5kZWNraW1hZ2VhbmRuYW1lIHAge1xcbiAgY29sb3I6IHJnYmEoMjUzLCAyNTMsIDI1MywgMC42ODEpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5kZWNrZGVzY3JpcHRpb25kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4td2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMC43ZW0gMCAwLjdlbSAwO1xcbn1cXG4uZGVja2Rlc2NyaXB0aW9uZGl2IHAge1xcbiAgcGFkZGluZzogMC41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5kZWNrZGVzY3JpcHRpb25kaXYgOm50aC1jaGlsZCgyKSB7XFxuICBjb2xvcjogcmdiYSgyNTMsIDI1MywgMjUzLCAwLjY4MSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLml0c2VtcHR5bWVzc2FnZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5yb3dvZmNhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLm92ZXJ2aWV3Y2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ub3ZlcnZpZXdjYXJkIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjJyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG4ub3ZlcnZpZXdjYXJkIGltZyB7XFxuICB3aWR0aDogbWF4KDEuNXJlbSwgNXZ3KTtcXG59XFxuLm92ZXJ2aWV3Y2FyZCBoMyB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmdyZWVuY2FyZHVuZGVybGluZSxcXG4uYnJpY2tjYXJkdW5kZXJsaW5lLFxcbi5ibHVlY2FyZHVuZGVybGluZSxcXG4uc3Vuc2hpbmVjYXJkdW5kZXJsaW5lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMS41cHg7XFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXG59XFxuXFxuLmdyZWVuY2FyZHVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMzNEMzODE7XFxufVxcblxcbi5ibHVlY2FyZHVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwNDZGQzY7XFxufVxcblxcbi5icmlja2NhcmR1bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjRUQ2RDQ3O1xcbn1cXG5cXG4uc3Vuc2hpbmVjYXJkdW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI0ZGQkExNztcXG59XFxuXFxuLnNldHRpbmdzc2VjdGlvbiBzZWxlY3Qge1xcbiAgcGFkZGluZzogMC4zZW07XFxufVxcblxcbi5kZWNrZGVsZXRlb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZGVsZXRlZGVja2RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4uZGVsZXRlZGVja2RpdiBidXR0b24ge1xcbiAgcGFkZGluZzogMC4xZW07XFxufVxcblxcbi5yZXNldGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMXJlbSBhdXRvIGF1dG8gYXV0bztcXG4gIGNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLmlubmVyaGVhZGVyZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MmUzZTtcXG59XFxuLmlubmVyaGVhZGVyZGl2IGgzIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmNkMWU7XFxufVxcblxcbi5jb250YWluZXJkaXYge1xcbiAgaGVpZ2h0OiAzOC40cHg7XFxufVxcblxcbi5iYW5uZXJidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAyLjRyZW07XFxuICBwYWRkaW5nOiAwZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI1NWZmO1xcbn1cXG5cXG4uYmFubmVyYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjNlZDk7XFxufVxcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tZW51IGJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDhyZW07XFxuICBwYWRkaW5nOiAwLjdlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTA4MmQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjgyZTNlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tZW51IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwODJkO1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4ubWVudS5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubmF2LXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOHJlbTtcXG59XFxuLm5hdi1yaWdodCBwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lkZW5hdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjQ2LCAyNDYpO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgbWFyZ2luLXRvcDogNDIuM3B4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnNpZGVuYXYuYWN0aXZlIHtcXG4gIHdpZHRoOiAxNXJlbTtcXG59XFxuXFxuLnNpZGVuYXZpbm5lcmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW0gMCAwIDJyZW07XFxufVxcbi5zaWRlbmF2aW5uZXJkaXYgYSB7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtIDAuNHJlbSAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNpdGlvbjogMC4yIDAuNXM7XFxufVxcbi5zaWRlbmF2aW5uZXJkaXYgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5zaWRlbmF2aW5uZXJkaXYgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdHVkeWNhcmRkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcbi5zdHVkeWNhcmRkaXYgZGl2IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1pbi13aWR0aDogNTAlO1xcbiAgbWluLWhlaWdodDogNXJlbTtcXG59XFxuLnN0dWR5Y2FyZGRpdiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIxLCAxMjEsIDEyMSwgMC45KTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuOSk7XFxufVxcblxcbi5udW1iZXJvZmNhcmRzIHtcXG4gIG1hcmdpbi1ib3R0b206IDNlbTtcXG59XFxuXFxuLnN0dWR5ZGl2IHtcXG4gIG1hcmdpbjogMCAxLjJlbSAwIDEuMmVtO1xcbn1cXG4uc3R1ZHlkaXYgaDEge1xcbiAgbWFyZ2luLXRvcDogMC41IGVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5mbGlwLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAyNSUgMTAlO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxufVxcblxcbi5mbGlwLWNhcmQtaW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JSAxMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG59XFxuXFxuLmZsaXAtY2FyZC1pbm5lci5hY3RpdmF0ZWQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcblxcbi5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFjayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZmxpcC1jYXJkLWZyb250IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmNkMWU7XFxuICBib3JkZXItcmFkaXVzOiAyNSUgMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmZsaXAtY2FyZC1iYWNrIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmNkMWU7XFxuICBib3JkZXItcmFkaXVzOiAyNSUgMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4uYnV0dG9uc3NwYW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMWVtO1xcbn1cXG4uYnV0dG9uc3NwYW4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbn1cXG5cXG4uY29uZ3JhdHNkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNlbTtcXG4gIG1hcmdpbjogM2VtIDFlbSAxZW0gMWVtO1xcbn1cXG4uY29uZ3JhdHNkaXYgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMDgyZDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubWFpbiB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLm1vYmlsZW5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIG1pbi1oZWlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuLm1vYmlsZW5hdiBpbWcge1xcbiAgd2lkdGg6IDJyZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLm1vYmlsZW5hdiBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4ubW9iaWxlbmF2IGgzIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGdyZXk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuc2VjdGlvbiBoMSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Nzcy9zdHlsZS5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19tb2RhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL195b3VyZGVja3Muc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2NvbmZpZy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fb3ZlcnZpZXcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2RlY2tzZXR0aW5ncy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fYmFubmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19zaWRlbmF2LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19zdHVkeXNlc3Npb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBQTtBQUNBOzs7RUFHRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUEsMEJBQUE7QUFDQTs7Ozs7Ozs7OztFQVVFLFNBQUE7QUNDRjs7QURFQSwyR0FBQTtBQUNBOztFQUVFLGdCQUFBO0FDQ0Y7O0FERUEsMkJBQUE7QUFDQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUEsMkJBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBLDBEQUFBO0FBQ0E7RUFDRSw4QkFBQTtBQ0NGOztBREVBLG9DQUFBO0FBQ0E7O0VBRUUsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQSx5Q0FBQTtBQUNBOzs7O0VBSUUsYUFBQTtBQ0NGOztBREVBLGdHQUFBO0FBQ0E7RUFDRTtJQUNDLHFCQUFBO0VDQ0Q7RURFQTs7O0lBR0UscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLHNDQUFBO0lBQ0EsZ0NBQUE7RUNBRjtBQUNGO0FDeEVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEMEVKOztBQ3ZFQTtFQ0ZJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VERUEsc0JBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEVBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FEMkVKOztBQ3hFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QUQyRUo7QUN6RUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FEMkVSO0FDeEVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUQwRVI7QUN2RUk7O0VBRVEsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRHlFWjs7QUNyRUE7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0FEd0VKO0FDdEVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBRHdFUjtBQ3JFSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEdUVSOztBQ25FQTs7OztFQUlJLGNBQUE7QURzRUo7O0FDbkVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEc0VKOztBQ25FQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBRHNFSjs7QUNuRUE7RUFDSSwwQkFBQTtBRHNFSjs7QUNuRUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEc0VKOztBQ25FQTs7RUFFSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBRHNFSjs7QUNuRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEc0VKO0FDcEVJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBRHNFUjs7QUNsRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FEcUVKOztBQ2pFQTtFQUNJO0lBQU0sV0FBQTtJQUFhLFVBQUE7RURzRXJCO0VDckVFO0lBQUksTUFBQTtJQUFRLFVBQUE7RUR5RWQ7QUFDRjtBRy9NQTtFRE9JLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VDUEEsc0JBQUE7QUhtTko7O0FHaE5BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQ04yQjtBSnlOL0I7O0FHaE5BO0VEVkksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUNVQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUhxTko7QUduTkk7RUFBUyxjQUFBO0FIc05iO0FHck5JO0VBQUssZUFBQTtBSHdOVDtBR3ZOSTtFQUNJLGlDQUFBO0VBQ0EsaUJBQUE7QUh5TlI7O0FHck5BO0VEMUJJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VDMEJBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FIME5KO0FHeE5JO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FIME5SO0FHdk5JO0VBQ0ksaUNBQUE7RUFDQSxpQkFBQTtBSHlOUjs7QUdyTkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUh3Tko7O0FLN1FBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FMZ1JKOztBSzdRQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUxnUko7QUs5UUk7RUhUQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFR1NJLFdBQUE7RUFDQSxtQkFBQTtBTGtSUjtBS2hSSTtFQUNJLHVCQUFBO0FMa1JSO0FLaFJJO0VBQ0ksaUJBQUE7QUxrUlI7O0FLOVFBOzs7O0VBSUksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBRUEsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0FMZ1JKOztBSzdRQTtFQUNJLDhCRHpDZ0I7QUp5VHBCOztBSzdRQTtFQUNJLDhCRDVDYztBSjRUbEI7O0FLN1FBO0VBQ0ksOEJEbkRVO0FKbVVkOztBSzdRQTtFQUNJLDhCRHREYTtBSnNVakI7O0FNeFVJO0VBQVMsY0FBQTtBTjRVYjs7QU16VUE7RUpLSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFSUxBLHNCQUFBO0VBQ0EsV0FBQTtBTjhVSjs7QU0zVUE7RUpESSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFSUNBLFNBQUE7RUFDQSxrQkFBQTtBTmdWSjtBTTlVSTtFQUFRLGNBQUE7QU5pVlo7O0FNOVVBO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBTmlWSjs7QU92V0E7RUxRSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFS1JBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QVA0V0o7QU8xV0k7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0FQNFdSOztBT3hXQTtFQUlJLGNBQUE7QVB3V0o7O0FPcldBO0VMcEJJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VLaUJBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJIZG1CO0FKMlh2Qjs7QU8xV0E7RUFDSSx5QkhqQnlCO0FKOFg3Qjs7QU8xV0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QVA2V0o7QU8zV0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCSHJDbUI7RUdzQ25CLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FQNldSO0FPMVdJO0VBQ0kseUJIOUNtQjtFRytDbkIsWUFBQTtBUDRXUjs7QU94V0U7RUFDRSxjQUFBO0FQMldKOztBUXhhQTtFTlNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VNVEEsV0FBQTtBUjZhSjtBUTNhSTtFQUNJLFdBQUE7QVI2YVI7O0FRemFBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QVI0YUo7O0FRemFBO0VBQ0ksWUFBQTtBUjRhSjs7QVF6YUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxzQkFBQTtBUjJhSjtBUXhhSTtFQUNJLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBUjBhUjtBUXZhSTtFQUNJLGdCQUFBO0VBRUEsbUJBQUE7QVJ3YVI7QVFyYUk7RUFDSSx1QkFBQTtBUnVhUjs7QVN4ZEE7RVBRSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFT1JGLHNCQUFBO0VBQ0EsZUFBQTtBVDZkRjtBU3pkRTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBVDJkTjtBU3hkRTtFQUNJLGtCQUFBO0FUMGROOztBU3RkQTtFQUNFLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtBVHlkRjs7QVN0ZEE7RUFDRSxrQkFBQTtBVHlkRjs7QVN0ZEE7RUFDSSx1QkFBQTtBVHlkSjtBU3ZkSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QVR5ZFI7O0FTcmRBO0VBQ0ksNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QVR3ZEo7O0FTcmRFO0VQdENFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VPc0NBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QVQwZEo7O0FTdGRFO0VBQ0UsMEJBQUE7QVR5ZEo7O0FTdGRFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QVR5ZEo7O0FTdGRFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBVHlkSjs7QVN0ZEU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QVR5ZEo7O0FTdGRFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FUeWRKO0FTdmRJO0VBQ0ksY0FBQTtBVHlkUjs7QVNyZEU7RVAzRkUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RU8yRkEsc0JBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7QVQwZEo7QVN4ZEk7RUFDRSxjQUFBO0FUMGROOztBVTNqQkE7O0VBRUkseUJOSHVCO0VNSXZCLHlDTmRTO0VNZVQsZ0JBQUE7RUFDQSxZQUFBO0FWOGpCSjs7QVUzakJBO0VBQ0ksMkJBQUE7RUFDQSx1QkFBQTtBVjhqQko7O0FVM2pCQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxxQ0FBQTtBVjZqQko7QVUzakJJO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0FWNmpCUjtBVTFqQkk7RVJ2Q0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RVFvQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FWaWtCUjtBVTlqQkk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBVmdrQlI7O0FVM2pCSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FWOGpCUjs7QUFFQSxvQ0FBb0NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0Z1dHVyZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgZnV0dXJlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBmdXR1cmU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoZSBmdXR1cmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMzEgRGVjZW1iZXIgMjAxNCBpbiB0aGUgZnV0dXJlP1xuICogY29uc3QgcmVzdWx0ID0gaXNGdXR1cmUobmV3IERhdGUoMjAxNCwgMTEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRnV0dXJlKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKSA+IERhdGUubm93KCk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBDYXJkID0ge1xuICAgIHF1ZXN0aW9uOiBudWxsLFxuICAgIGFuc3dlcjogbnVsbCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcmQoZm9ybURhdGFPYmopIHtcblxuICAgIGNvbnN0IG5ld0NhcmQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoQ2FyZCksIHtcbiAgICAgICAgcXVlc3Rpb246IGZvcm1EYXRhT2JqLnF1ZXN0aW9uaW5wdXQsXG4gICAgICAgIGFuc3dlcjogZm9ybURhdGFPYmouYW5zd2VyaW5wdXQsXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0NhcmQ7XG59IiwiaW1wb3J0IHsgbW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xuaW1wb3J0IHsgdmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7IHByZUJ1aWx0RGVja3MgfSBmcm9tIFwiLi9wcmVidWlsdGRlY2tzXCI7XG5cbi8vVE9ETyByZXNwb25zaXZlIGRlc2lnblxuLy9UT0RPIGR5bmFtaWNhbGx5IHJlbmRlciBBTEwgSFRNTFxuXG5leHBvcnQgY29uc3QgY29udHJvbGxlciA9IChmdW5jdGlvbigpe1xuXG4gICAgT2JzZXJ2YWJsZS5zdWJzY3JpYmUoJ0RhdGFSZXNldCcsIHJlc2V0RGF0YUFuZFZpZXcpO1xuICAgIFxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHByZUJ1aWx0RGVja3M6IHByZUJ1aWx0RGVja3MsXG4gICAgICAgIGRlZmF1bHRUYWJJRDogJ3N0dWR5cGFnZScsXG4gICAgICAgIGxvY2FsRGVja3M6IG1vZGVsLmdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKSxcbiAgICAgICAgUGFuZWxzOiBtb2RlbC5kYXRhUGFuZWxzLFxuXG4gICAgICAgIFVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURlY2tzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhbmVscygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVwZGF0ZURlY2tzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEZWNrcyA9IG1vZGVsLmdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVQYW5lbHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5QYW5lbHMgPSBtb2RlbC5nZXRMb2NhbFBhbmVscygpO1xuICAgICAgICB9LFxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzdGFydEFwcGxpY2F0aW9uKCkge1xuICAgICAgICBtb2RlbC5jaGVja0lmVGhlcmVJc0FscmVhZHlMb2NhbGx5U3RvcmVkRGF0YSgpO1xuICAgICAgICBkYXRhLlVwZGF0ZSgpO1xuICAgICAgICBtb2RlbC5zZXRDdXJyZW50UGFnZShkYXRhLmRlZmF1bHRUYWJJRCk7XG4gICAgICAgIHZpZXcucmVuZGVyRGVmYXVsdFZpZXcoZGF0YS5kZWZhdWx0VGFiSUQpOyAgXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZURlY2tDcmVhdGlvbkZvcm0oKSB7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1mb3JtJyk7XG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2tuYW1lJyk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNrY2F0ZWdvcnknKTtcbiAgICAgICAgY29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVja2R1ZWRhdGUnKTtcblxuICAgICAgICBjb25zdCBuYW1lQ2hlY2tlciA9ICBtb2RlbC52YWxpZGF0b3JzLm5hbWVWYWxpZGF0b3I7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5Q2hlY2tlciA9IG1vZGVsLnZhbGlkYXRvcnMuY2F0ZWdvcnlWYWxpZGF0b3I7XG4gICAgICAgIGNvbnN0IGRhdGVDaGVja2VyID0gbW9kZWwudmFsaWRhdG9ycy5kYXRlVmFsaWRhdG9yO1xuXG4gICAgICAgIG5hbWVDaGVja2VyLnNldERhdGEobmFtZUVsZW1lbnQsIG5hbWVFbGVtZW50LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgIGNhdGVnb3J5Q2hlY2tlci5zZXREYXRhKGNhdGVnb3J5RWxlbWVudCwgY2F0ZWdvcnlFbGVtZW50LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgIGRhdGVDaGVja2VyLnNldERhdGEoZGF0ZUVsZW1lbnQsIGRhdGVFbGVtZW50LnZhbHVlLnRyaW0oKSk7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IFtuYW1lQ2hlY2tlciwgY2F0ZWdvcnlDaGVja2VyLCBkYXRlQ2hlY2tlcl07XG4gICAgICAgIHZhbGlkYXRvcnMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIGlucHV0LnNldFZhbGlkaXR5Q2xhc3MoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbnZhbGlkSW5wdXRzID0gdmFsaWRhdG9ycy5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuaXNWYWxpZCA9PT0gZmFsc2UpO1xuICAgICAgICBpZiAoaW52YWxpZElucHV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpbnZhbGlkSW5wdXRzLmZvckVhY2goKGludmFsaWRJbnB1dCkgPT4ge1xuICAgICAgICAgICAgICAgIGludmFsaWRJbnB1dC5kaXNwbGF5V2FybmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGFPYmplY3QgPSBtb2RlbC5jcmVhdGVGb3JtRGF0YU9iamVjdChmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0RlY2sgPSBtb2RlbC5jcmVhdGVEZWNrKGZvcm1EYXRhT2JqZWN0KTtcbiAgICAgICAgICAgIG1vZGVsLmFkZERlY2tUb0xvY2FsU3RvcmFnZShuZXdEZWNrKTtcbiAgICAgICAgICAgIG1vZGVsLmluY3JlbWVudFVzZXJEYXRhKCdkZWNrc0NyZWF0ZWQnKTtcbiAgICAgICAgICAgIGRhdGEuVXBkYXRlKCk7XG4gICAgICAgICAgICB1cGRhdGVEYXRhT25DdXJyZW50UGFnZSgpO1xuICAgICAgICAgICAgdmlldy5yZXNldEZvcm0oZm9ybSk7XG4gICAgICAgICAgICBtb2RlbC52YWxpZGF0b3JzLnJlc2V0SW5wdXRWYWxpZGl0eSh2YWxpZGF0b3JzKTtcbiAgICAgICAgICAgIHZpZXcucmVuZGVyQWRkQ2FyZE1vZGFsQm9keShuZXdEZWNrKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVBZGRDYXJkc0Zvcm0obmV3RGVjaywgc3RhdHVzKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY2FyZC1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb25pbnB1dCcpO1xuICAgICAgICBjb25zdCBhbnN3ZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXJpbnB1dCcpO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uQ2hlY2tlciA9IG1vZGVsLnZhbGlkYXRvcnMucXVlc3Rpb25WYWxpZGF0b3I7XG4gICAgICAgIGNvbnN0IGFuc3dlckNoZWNrZXIgPSBtb2RlbC52YWxpZGF0b3JzLmFuc3dlclZhbGlkYXRvcjtcblxuICAgICAgICBxdWVzdGlvbkNoZWNrZXIuc2V0RGF0YShxdWVzdGlvbklucHV0LCBxdWVzdGlvbklucHV0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgIGFuc3dlckNoZWNrZXIuc2V0RGF0YShhbnN3ZXJJbnB1dCwgYW5zd2VySW5wdXQudmFsdWUudHJpbSgpKTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gW3F1ZXN0aW9uQ2hlY2tlciwgYW5zd2VyQ2hlY2tlcl07XG4gICAgICAgIHZhbGlkYXRvcnMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW52YWxpZElucHV0cyA9IHZhbGlkYXRvcnMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmlzVmFsaWQgPT09IGZhbHNlKTtcbiAgICAgICAgaWYgKGludmFsaWRJbnB1dHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW52YWxpZElucHV0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5kaXNwbGF5V2FybmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhT2JqZWN0ID0gbW9kZWwuY3JlYXRlRm9ybURhdGFPYmplY3QoZm9ybSk7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gbW9kZWwuY3JlYXRlQ2FyZChmb3JtRGF0YU9iamVjdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBkZWNrQ29weSA9IG1vZGVsLmdldERlY2tGcm9tTG9jYWxTdG9yYWdlKG5ld0RlY2submFtZSk7XG4gICAgICAgICAgICBkZWNrQ29weSA9IG1vZGVsLmFkZENhcmRUb0RlY2soY2FyZCwgZGVja0NvcHkpO1xuICAgICAgICAgICAgbW9kZWwudXBkYXRlRGVja0luTG9jYWxTdG9yYWdlKGRlY2tDb3B5KTtcblxuICAgICAgICAgICAgZGF0YS5VcGRhdGUoKTtcbiAgICAgICAgICAgIG1vZGVsLmluY3JlbWVudFVzZXJEYXRhKCdjYXJkc0NyZWF0ZWQnKTtcbiAgICAgICAgICAgIG1vZGVsLnZhbGlkYXRvcnMucmVzZXRJbnB1dFZhbGlkaXR5KHZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgdXBkYXRlRGF0YU9uQ3VycmVudFBhZ2UoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2FkZG1vcmUnKSB7XG4gICAgICAgICAgICAgICAgdmlldy5yZW5kZXJBZGRDYXJkTW9kYWxCb2R5KGRlY2tDb3B5KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnZG9uZWFkZGluZycpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmhpZGVNb2RhbCgpO1xuICAgICAgICAgICAgICAgIHZpZXcucmVzZXRNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEYXRhT25DdXJyZW50UGFnZSgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSBtb2RlbC5nZXRDdXJyZW50UGFnZSgpO1xuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT09ICdzdHVkeXBhZ2UnKSB7XG4gICAgICAgICAgICBPYnNlcnZhYmxlLnB1Ymxpc2goJ05ld0RlY2tBZGRlZCcsIGRhdGEubG9jYWxEZWNrcylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE9ic2VydmFibGUucHVibGlzaCgnVXBkYXRlT3ZlcnZpZXdEYXRhJywgZGF0YS5QYW5lbHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlUGFnZShwYWdlKSB7XG4gICAgICAgIHZpZXcucmVuZGVyUGFnZShwYWdlKTtcbiAgICAgICAgbW9kZWwuc2V0Q3VycmVudFBhZ2UocGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXREYXRhQW5kVmlldygpIHtcbiAgICAgICAgbW9kZWwuY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgZGF0YS5VcGRhdGUoKTtcbiAgICAgICAgT2JzZXJ2YWJsZS5wdWJsaXNoKCdVcGRhdGVPdmVydmlld0RhdGEnLCBkYXRhLlBhbmVscyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0U3R1ZHlTZXNzaW9uKGRlY2spIHtcbiAgICAgICAgdmlldy5zdHVkeVBhZ2UucmVuZGVyU3R1ZHlTZXNzaW9uKGRlY2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dOZXh0U3R1ZHlDYXJkKGRlY2ssIG9wZXJhdGlvbikge1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICdzaG93bmV4dCcpIHtcbiAgICAgICAgICAgIGlmIChkZWNrLmN1cnJlbnRDYXJkICsgMSA9PT0gZGVjay5jYXJkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBtb2RlbC51cGRhdGVDdXJyZW50Q2FyZChkZWNrLCAncmVzZXQnKTtcbiAgICAgICAgICAgICAgICB2aWV3LnJlbW92ZU1haW5UYWdDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgdmlldy5zdHVkeVBhZ2UucmVuZGVyU3R1ZHlTZXNzaW9uQ29tcGxldGUoZGVjayk7XG4gICAgICAgICAgICAgICAgbW9kZWwuaW5jcmVtZW50VXNlckRhdGEoJ2RlY2tzU3R1ZGllZCcpO1xuICAgICAgICAgICAgICAgIG1vZGVsLmluY3JlbWVudFVzZXJEYXRhKCdjYXJkc1N0dWRpZWQnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kZWwudXBkYXRlQ3VycmVudENhcmQoZGVjaywgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICB2aWV3LnN0dWR5UGFnZS51cGRhdGVTdHVkeUNhcmQoZGVjayk7XG4gICAgICAgICAgICAgICAgbW9kZWwuaW5jcmVtZW50VXNlckRhdGEoJ2NhcmRzU3R1ZGllZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdzaG93cHJldmlvdXMnKSB7XG4gICAgICAgICAgICBtb2RlbC51cGRhdGVDdXJyZW50Q2FyZChkZWNrLCBvcGVyYXRpb24pO1xuICAgICAgICAgICAgdmlldy5zdHVkeVBhZ2UudXBkYXRlU3R1ZHlDYXJkKGRlY2spO1xuICAgICAgICAgICAgbW9kZWwuZGVjcmVtZW50VXNlckRhdGEoJ2NhcmRzU3R1ZGllZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xsZXIuZGF0YS51cGRhdGVEZWNrcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZURlY2soZGVja05hbWUpIHtcbiAgICAgICAgbW9kZWwuZGVsZXRlRGVja0Zyb21Mb2NhbFN0b3JhZ2UoZGVja05hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGNoYW5nZVBhZ2UsXG4gICAgICAgIGRlbGV0ZURlY2ssXG4gICAgICAgIHN0YXJ0QXBwbGljYXRpb24sXG4gICAgICAgIHN0YXJ0U3R1ZHlTZXNzaW9uLFxuICAgICAgICBzaG93TmV4dFN0dWR5Q2FyZCxcbiAgICAgICAgaGFuZGxlQWRkQ2FyZHNGb3JtLFxuICAgICAgICBoYW5kbGVEZWNrQ3JlYXRpb25Gb3JtLFxuICAgIH1cbn0pKCk7IiwiZXhwb3J0IGNvbnN0IERlY2sgPSB7XG4gICAgbmFtZTogJ2RlZmF1bHQgbmFtZScsXG4gICAgZGVzY3JpcHRpb246ICdkZWZhdWx0IGRlc2NyaXB0aW9uJyxcbiAgICBkdWVEYXRlOiAnZGVmYXVsdCBkdWVEYXRlJyxcbiAgICBjYXRlZ29yeTogJ2RlZmF1bHQgY2F0ZWdvcnknLFxuICAgIGN1cnJlbnRDYXJkOiAwLFxuICAgIGNhcmRDb3VudDogMCxcbiAgICBjYXJkczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgZGVja0FycmF5ID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWNrKGZvcm1EYXRhT2JqKSB7XG4gICAgXG4gICAgY29uc3QgbmV3RGVjayA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEZWNrKSwge1xuICAgICAgICBuYW1lOiBmb3JtRGF0YU9iai5kZWNrbmFtZSxcbiAgICAgICAgY2F0ZWdvcnk6IGZvcm1EYXRhT2JqLmRlY2tjYXRlZ29yeSxcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhT2JqLmRlY2tkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogbWFrZURhdGVSZWFkYWJsZShmb3JtRGF0YU9iai5kZWNrZHVlZGF0ZSksXG4gICAgICAgIGN1cnJlbnRDYXJkOiAwLFxuICAgICAgICBjYXJkQ291bnQ6IDAsXG4gICAgICAgIGNhcmRzOiBbXSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3RGVjaztcbn07XG5cbmZ1bmN0aW9uIG1ha2VEYXRlUmVhZGFibGUoZGF0ZURhdGEpIHtcbiAgICBjb25zdCBhcnJheSA9IGRhdGVEYXRhLnNwbGl0KCctJyk7XG4gICAgY29uc3QgeWVhciA9IGFycmF5WzBdO1xuICAgIGNvbnN0IG1vbnRoID0gY29udmVydE1vbnRoTnVtYmVyVG9Nb250aE5hbWUoYXJyYXlbMV0pO1xuICAgIGNvbnN0IGRheSA9IGNvbnZlcnREYXlOdW1iZXJUb050aERheU9mTW9udGgoYXJyYXlbMl0pO1xuICAgIHJldHVybiBgJHttb250aH0gJHtkYXl9LCAke3llYXJ9YDtcbn07XG5cbmZ1bmN0aW9uIGNvbnZlcnRNb250aE51bWJlclRvTW9udGhOYW1lKG51bWJlcikge1xuICAgIG51bWJlciA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuICAgIGNvbnN0IG1vbnRocyA9IHtcbiAgICAgICAgMTogJ0phbnVhcnknLFxuICAgICAgICAyOiAnRmVicnVhcnknLFxuICAgICAgICAzOiAnTWFyY2gnLFxuICAgICAgICA0OiAnQXByaWwnLFxuICAgICAgICA1OiAnTWF5JyxcbiAgICAgICAgNjogJ0p1bmUnLFxuICAgICAgICA3OiAnSnVseScsXG4gICAgICAgIDg6ICdBdWd1c3QnLFxuICAgICAgICA5OiAnU2VwdGVtYmVyJyxcbiAgICAgICAgMTA6ICdPY3RvYmVyJyxcbiAgICAgICAgMTE6ICdOb3ZlbWJlcicsXG4gICAgICAgIDEyOiAnRGVjZW1iZXInLFxuICAgIH1cbiAgICByZXR1cm4gbW9udGhzW251bWJlcl07XG59O1xuXG5mdW5jdGlvbiBjb252ZXJ0RGF5TnVtYmVyVG9OdGhEYXlPZk1vbnRoKG51bWJlcikge1xuICAgIGNvbnN0IG50aERheSA9IHtcbiAgICAgICAgMTogJ3N0JyxcbiAgICAgICAgMjogJ25kJyxcbiAgICAgICAgMzogJ3JkJyxcbiAgICAgICAgNDogJ3RoJywgNTogJ3RoJywgNjogJ3RoJywgNzogJ3RoJywgODogJ3RoJyxcbiAgICAgICAgOTogJ3RoJywgMTA6ICd0aCcsIDExOiAndGgnLCAxMjogJ3RoJywgXG4gICAgICAgIDEzOiAndGgnLCAxNDogJ3RoJywgMTU6ICd0aCcsIDE2OiAndGgnLCBcbiAgICAgICAgMTc6ICd0aCcsIDE4OiAndGgnLCAxOTogJ3RoJywgMjA6ICd0aCcsXG4gICAgICAgIDIxOiAnc3QnLFxuICAgICAgICAyMjogJ25kJyxcbiAgICAgICAgMjM6ICdyZCcsXG4gICAgICAgIDI0OiAndGgnLCAyNTogJ3RoJywgMjY6ICd0aCcsIDI3OiAndGgnLCBcbiAgICAgICAgMjg6ICd0aCcsIDI5OiAndGgnLCAzMDogJ3RoJyxcbiAgICAgICAgMzE6ICdzdCcsXG4gICAgfTtcbiAgICByZXR1cm4gYCR7bnVtYmVyfSR7bnRoRGF5W251bWJlcl19YDtcbn07IiwiXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbCwgYXR0cnMpIHtcbiAgICBmb3IodmFyIGtleSBpbiBhdHRycykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxufVxuICAiLCJpbXBvcnQgeyB2YWxpZGF0b3JzIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuaW1wb3J0IHsgY3JlYXRlRGVjaywgZGVja0FycmF5fSBmcm9tICcuL2RlY2snO1xuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gJy4vY2FyZCc7XG5pbXBvcnQgeyBwcmVCdWlsdERlY2tzIH0gZnJvbSAnLi9wcmVidWlsdGRlY2tzJztcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgbmV3VXNlckRhdGEsIGRhdGFQYW5lbHN9IGZyb20gJy4vdXNlcmRhdGEnO1xuXG5leHBvcnQgY29uc3QgbW9kZWwgPSAoZnVuY3Rpb24oKXtcblxuICAgIGxldCBjdXJyZW50UGFnZSA9ICcnO1xuXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFBhZ2UocGFnZSkge1xuICAgICAgICBjdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFBhZ2U7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrSWZUaGVyZUlzQWxyZWFkeUxvY2FsbHlTdG9yZWREYXRhKCkge1xuICAgICAgICBjb25zdCBkZWNrcyA9IG1vZGVsLmdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgaWYgKCFkZWNrcyB8fCBkZWNrcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzZXREZWNrQXJyYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhbmVscyA9IG1vZGVsLmdldExvY2FsUGFuZWxzKCk7XG4gICAgICAgIGlmICghcGFuZWxzIHx8IHBhbmVscyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzZXREYXRhUGFuZWxEYXRhKGRhdGFQYW5lbHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IG1vZGVsLmdldFVzZXJEYXRhKCk7XG4gICAgICAgIGlmICghdXNlckRhdGEgfHwgdXNlckRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc2V0TmV3VXNlckRhdGEobmV3VXNlckRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHJldHVybiBBcnJheS5mcm9tKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlY2thcnJheScpKSk7ICAgIFxuICAgICAgICBjb25zdCBpdGVtcyA9IHsgLi4ubG9jYWxTdG9yYWdlfTtcbiAgICAgICAgaWYgKGl0ZW1zLmhhc093blByb3BlcnR5KCdkZWNrYXJyYXknKSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVja2FycmF5JykpKTsgICAgXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0RGVja0Zyb21Mb2NhbFN0b3JhZ2UoZGVja05hbWUpIHtcbiAgICAgICAgY29uc3QgZGVja3MgPSBnZXREZWNrQXJyYXlGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIHJldHVybiBkZWNrcy5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBkZWNrTmFtZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFkZENhcmR0b0RlY2soY2FyZCwgZGVjaykge1xuICAgICAgICBkZWNrLmNhcmRzLnB1c2goY2FyZCk7XG4gICAgICAgIHJldHVybiBkZWNrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0RGVja0FycmF5KCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVja2FycmF5JywgSlNPTi5zdHJpbmdpZnkoZGVja0FycmF5KSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZURlY2tJbkxvY2FsU3RvcmFnZShkZWNrKSB7XG4gICAgICAgIGNvbnN0IGRlY2tzID0gZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBjb25zdCBmb3VuZERlY2sgPSBnZXREZWNrRnJvbUxvY2FsU3RvcmFnZShkZWNrLm5hbWUpXG4gICAgICAgIGZvdW5kRGVjay5jYXJkcyA9IGRlY2suY2FyZHM7XG4gICAgICAgIGZvdW5kRGVjay5jYXJkQ291bnQgPSBkZWNrLmNhcmRDb3VudDtcblxuICAgICAgICBjb25zdCBpbmRleCA9IGRlY2tzLmZpbmRJbmRleChkID0+IGQubmFtZSA9PT0gZm91bmREZWNrLm5hbWUpO1xuICAgICAgICBkZWNrc1tpbmRleF0gPSBmb3VuZERlY2s7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWNrYXJyYXknLCBKU09OLnN0cmluZ2lmeShkZWNrcykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZERlY2tUb0xvY2FsU3RvcmFnZShkZWNrKSB7XG4gICAgICAgIGNvbnN0IGFycmF5T2ZEZWNrcyA9IGdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgYXJyYXlPZkRlY2tzLnB1c2goZGVjayk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWNrYXJyYXknLCBKU09OLnN0cmluZ2lmeShhcnJheU9mRGVja3MpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYWRkQ2FyZFRvRGVjayhjYXJkLCBkZWNrKSB7XG4gICAgICAgIGRlY2suY2FyZHMucHVzaChjYXJkKTtcbiAgICAgICAgZGVjay5jYXJkQ291bnQrKztcbiAgICAgICAgcmV0dXJuIGRlY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlRGVja0Zyb21Mb2NhbFN0b3JhZ2UoZGVja05hbWUpIHtcbiAgICAgICAgY29uc3QgZGVja3MgPSBnZXREZWNrQXJyYXlGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IGRlY2tUb0RlbGV0ZSA9IGdldERlY2tGcm9tTG9jYWxTdG9yYWdlKGRlY2tOYW1lKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBkZWNrcy5maW5kSW5kZXgoZCA9PiBkLm5hbWUgPT09IGRlY2tUb0RlbGV0ZS5uYW1lKTtcbiAgICAgICAgZGVja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlY2thcnJheScsIEpTT04uc3RyaW5naWZ5KGRlY2tzKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXREYXRhUGFuZWxEYXRhKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YXBhbmVscycsIEpTT04uc3RyaW5naWZ5KGRhdGFQYW5lbHMpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0RGF0YVBhbmVsRGF0YSh1cGRhdGVkUGFuZWxzKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhcGFuZWxzJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFBhbmVscykpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRMb2NhbFBhbmVscygpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFwYW5lbHMnKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldExvY2FsUGFuZWwoZGF0YSkge1xuICAgICAgICBjb25zdCBwYW5lbHMgPSBBcnJheS5mcm9tKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFwYW5lbHMnKSkpO1xuICAgICAgICBwYW5lbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldE5ld1VzZXJEYXRhKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmRhdGEnLCBKU09OLnN0cmluZ2lmeShuZXdVc2VyRGF0YSkpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXRVc2VyRGF0YShkYXRhKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyZGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0VXNlckRhdGEoKSB7XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSB7IC4uLmxvY2FsU3RvcmFnZX07XG5cbiAgICAgICAgaWYgKGl0ZW1zLmhhc093blByb3BlcnR5KCd1c2VyZGF0YScpKSB7XG4gICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyZGF0YScpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXROb25QYXJzZWRVc2VyRGF0YSgpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB7IC4uLmxvY2FsU3RvcmFnZX07XG4gICAgICAgIGlmIChpdGVtcy5oYXNPd25Qcm9wZXJ0eSgndXNlcmRhdGEnKSkge1xuXG4gICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcmRhdGEnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5jcmVtZW50VXNlckRhdGEoZGF0YSkge1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGdldFVzZXJEYXRhKCk7XG4gICAgICAgIHVzZXJEYXRhW2RhdGFdID0gdXNlckRhdGFbZGF0YV0gKyAxO1xuICAgICAgICBzZXRVc2VyRGF0YSh1c2VyRGF0YSk7XG5cbiAgICAgICAgY29uc3QgcGFuZWxzID0gZ2V0TG9jYWxQYW5lbHMoKTtcbiAgICAgICAgcGFuZWxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5zdGF0aXN0aWMgPSBpdGVtLnN0YXRpc3RpYyArIDE7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHNldERhdGFQYW5lbERhdGEocGFuZWxzKTtcbiAgICAgICAgY29udHJvbGxlci5kYXRhLlVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkZWNyZW1lbnRVc2VyRGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gZ2V0VXNlckRhdGEoKTtcbiAgICAgICAgdXNlckRhdGFbZGF0YV0gPSB1c2VyRGF0YVtkYXRhXSAtIDE7XG4gICAgICAgIHNldFVzZXJEYXRhKHVzZXJEYXRhKTtcblxuICAgICAgICBjb25zdCBuZXdkYXRhID0gZ2V0VXNlckRhdGEoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ3VycmVudENhcmQoZGVjaywgb3BlcmF0aW9uKSB7XG5cbiAgICAgICAgY29uc3QgZGVja0lzUHJlYnVpbHQgPSBjaGVja0lmRGVja0lzUHJlQnVpbHQoZGVjaywgY29udHJvbGxlci5kYXRhLnByZUJ1aWx0RGVja3MpO1xuICAgICAgICBpZiAoZGVja0lzUHJlYnVpbHQgJiYgb3BlcmF0aW9uID09PSAncmVzZXQnKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHByZUJ1aWx0RGVja3MuaW5kZXhPZihkZWNrKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZGF0YS5wcmVCdWlsdERlY2tzW2luZGV4XS5jdXJyZW50Q2FyZCA9IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3BlcmF0aW9uID09PSAncmVzZXQnKSB7IGdldERlY2tGcm9tTG9jYWxTdG9yYWdlKGRlY2submFtZSkuY3VycmVudENhcmQgPSAwOyB9IFxuICAgICAgICBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdzaG93bmV4dCcpIHsgZGVjay5jdXJyZW50Q2FyZCsrOyB9IFxuICAgICAgICBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdzaG93cHJldmlvdXMnKSB7IGRlY2suY3VycmVudENhcmQtLTsgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjaGVja0lmRGVja0lzUHJlQnVpbHQoZGVjaywgcHJlQnVpbHREZWNrcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZUJ1aWx0RGVja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcmVCdWlsdERlY2tzW2ldID09PSBkZWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIHJlc2V0TmV3VXNlckRhdGEoKTtcbiAgICAgICAgcmVzZXREYXRhUGFuZWxEYXRhKClcbiAgICAgICAgcmVzZXREZWNrQXJyYXkoKTtcbiAgICAgICAgY29udHJvbGxlci5kYXRhLlVwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGb3JtRGF0YU9iamVjdChmb3JtKSB7XG4gICAgICAgIGNvbnN0IG15Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhT2JqID0gT2JqZWN0LmZyb21FbnRyaWVzKG15Rm9ybURhdGEuZW50cmllcygpKTtcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhT2JqO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkYXRhUGFuZWxzLFxuICAgICAgICB2YWxpZGF0b3JzLFxuICAgICAgICBjcmVhdGVDYXJkLFxuICAgICAgICBhZGRDYXJkVG9EZWNrLFxuICAgICAgICBjcmVhdGVEZWNrLFxuICAgICAgICBnZXRMb2NhbFBhbmVsLFxuICAgICAgICBnZXRMb2NhbFBhbmVscyxcbiAgICAgICAgcmVzZXREYXRhUGFuZWxEYXRhLFxuICAgICAgICBpbmNyZW1lbnRVc2VyRGF0YSxcbiAgICAgICAgZ2V0Tm9uUGFyc2VkVXNlckRhdGEsXG4gICAgICAgIHJlc2V0RGVja0FycmF5LFxuICAgICAgICBjaGVja0lmVGhlcmVJc0FscmVhZHlMb2NhbGx5U3RvcmVkRGF0YSxcbiAgICAgICAgZGVsZXRlRGVja0Zyb21Mb2NhbFN0b3JhZ2UsXG4gICAgICAgIHVwZGF0ZURlY2tJbkxvY2FsU3RvcmFnZSxcbiAgICAgICAgZGVjcmVtZW50VXNlckRhdGEsXG4gICAgICAgIGdldFVzZXJEYXRhLFxuICAgICAgICByZXNldE5ld1VzZXJEYXRhLFxuICAgICAgICBnZXREZWNrQXJyYXlGcm9tTG9jYWxTdG9yYWdlLFxuICAgICAgICBnZXRDdXJyZW50UGFnZSxcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UsXG4gICAgICAgIC8vIGdldExvY2FsRGVja3MsXG4gICAgICAgIGFkZENhcmR0b0RlY2ssXG4gICAgICAgIHVwZGF0ZUN1cnJlbnRDYXJkLFxuICAgICAgICBjbGVhckxvY2FsU3RvcmFnZSxcbiAgICAgICAgY3JlYXRlRm9ybURhdGFPYmplY3QsXG4gICAgICAgIGFkZERlY2tUb0xvY2FsU3RvcmFnZSxcbiAgICAgICAgZ2V0RGVja0Zyb21Mb2NhbFN0b3JhZ2UsXG4gICAgfTtcbn0pKCk7IiwiaW1wb3J0IHsgRGVjayB9IGZyb20gJy4vZGVjayc7XG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSAnLi9jYXJkJztcblxuY29uc3QgZnJlbmNoQ2FyZHMgPSBjcmVhdGVGcmVuY2hDYXJkcygpO1xuY29uc3QgZnJlbmNoRGVjayA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEZWNrKSwge1xuICAgIG5hbWU6ICdGcmVuY2gnLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBkZWNrIHRvIGxlYXJuIDEwIGJhc2ljIEZyZW5jaCB3b3JkcycsXG4gICAgZHVlRGF0ZTogJ05leHQgV2VlaycsXG4gICAgY2F0ZWdvcnk6ICdMYW5ndWFnZXMnLFxuICAgIGN1cnJlbnRDYXJkOiAwLFxuICAgIGNhcmRDb3VudDogMCxcbiAgICBjYXJkczogZnJlbmNoQ2FyZHMsXG59KTtcbiAgICBcbmZ1bmN0aW9uIGNyZWF0ZUZyZW5jaENhcmRzKCkge1xuXG4gICAgY29uc3QgZnJlbmNoQ2FyZE9uZSA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIG1hblxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW4gaG9tbWUnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZFR3byA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIHRyZWVcXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuIGFyYnJlJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRUaHJlZSA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIGNoYWlyXFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgY2hhaXNlJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRGb3VyID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgY29tcHV0ZXJcXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuIG9yZGluYXRldXInLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZEZpdmUgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSB3aW5kb3dcXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuZSBmZW7DqnRyZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkU2l4ID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2Egc2Nob29sXFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgw6ljb2xlJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRTZXZlbiA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIG1lbnVcXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuZSBjYXJ0ZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkRWlnaHQgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBkb2N0b3JcXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuZSB2b2l0dXJlJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmROaW5lID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2Egc2hpcnRcXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuZSBjaGVtaXNlJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRUZW4gPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBwYXJ0eVxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIGbDqnRlJyxcbiAgICB9O1xuXG4gICAgY29uc3QgZnJlbmNoQ2FyZHMgPSBbZnJlbmNoQ2FyZE9uZSwgZnJlbmNoQ2FyZFR3bywgZnJlbmNoQ2FyZFRocmVlLCBcbiAgICAgICAgICAgICAgICAgICAgZnJlbmNoQ2FyZEZvdXIsIGZyZW5jaENhcmRGaXZlLCBmcmVuY2hDYXJkU2l4LCBcbiAgICAgICAgICAgICAgICAgICAgZnJlbmNoQ2FyZFNldmVuLCBmcmVuY2hDYXJkRWlnaHQsIGZyZW5jaENhcmROaW5lLFxuICAgICAgICAgICAgICAgICAgICBmcmVuY2hDYXJkVGVuXTtcbiAgICBcbiAgICAgICAgZnJlbmNoQ2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICBjYXJkID0gY3JlYXRlQ2FyZChjYXJkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZnJlbmNoQ2FyZHM7XG59XG5leHBvcnQgY29uc3QgcHJlQnVpbHREZWNrcyA9IFtmcmVuY2hEZWNrXTsiLCJcblxuZXhwb3J0IGNvbnN0IE9ic2VydmFibGUgID0ge1xuICAgIFxuICAgIGV2ZW50czoge1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdIHx8IFtdO1xuICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLnB1c2goZm4pXG4gICAgfSxcbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24oZXZOYW1lLCBmbikge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0uZmlsdGVyKGYgPT4gZiAhPT0gZm4pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwdWJsaXNoOiBmdW5jdGlvbihldk5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgICAgICBmKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59OyIsImltcG9ydCBMZWFybmluZ0ljb24gZnJvbSAnLi4vaW1hZ2VzL2xlYXJuaW5nLWNvbG9yLnN2Zyc7XG5pbXBvcnQgU3R1ZHlMYW1wSWNvbiBmcm9tICcuLi9pbWFnZXMvc3R1ZHktbGFtcC1jb2xvci5zdmcnO1xuaW1wb3J0IFN0dWR5RGVza0ljb24gZnJvbSAnLi4vaW1hZ2VzL3N0dWR5LWRlc2stY29sb3Iuc3ZnJztcbmltcG9ydCBFZHVjYXRpb25JY29uIGZyb20gJy4uL2ltYWdlcy9lZHVjYXRpb24tY29sb3Iuc3ZnJztcblxuZXhwb3J0IGNvbnN0IG5ld1VzZXJEYXRhID0ge1xuICAgIHR5cGU6ICd1c2VyZGF0YScsXG4gICAgZGVja3NDcmVhdGVkOiAwLFxuICAgIGRlY2tzU3R1ZGllZDogMCxcbiAgICBjYXJkc0NyZWF0ZWQ6IDAsXG4gICAgY2FyZHNTdHVkaWVkOiAwLFxufTtcblxuY29uc3QgRGF0YVBhbmVsID0ge1xuICAgIGltYWdlc3JjOiBudWxsLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHVuZGVybGluZWNvbG9yOiBudWxsLFxuICAgIHN0YXRpc3RpYzogbnVsbFxufTtcblxuY29uc3QgZGVja3NDcmVhdGVkUGFuZWwgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoRGF0YVBhbmVsKSwge1xuICAgIGltYWdlc3JjOiBMZWFybmluZ0ljb24sXG4gICAgdGl0bGU6ICdEZWNrcyBDcmVhdGVkJyxcbiAgICB1bmRlcmxpbmVjb2xvcjogJ2dyZWVuY2FyZHVuZGVybGluZScsXG4gICAgZGVja3NDcmVhdGVkOiAwLFxuICAgIHN0YXRpc3RpYzogMCxcbn0pO1xuXG5jb25zdCBkZWNrc1N0dWRpZWRQYW5lbCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEYXRhUGFuZWwpLCB7XG4gICAgaW1hZ2VzcmM6IEVkdWNhdGlvbkljb24sXG4gICAgdGl0bGU6ICdEZWNrcyBTdHVkaWVkJyxcbiAgICB1bmRlcmxpbmVjb2xvcjogJ2JsdWVjYXJkdW5kZXJsaW5lJyxcbiAgICBzdGF0aXN0aWM6IDAsXG4gICAgZGVja3NTdHVkaWVkOiAwLFxufSk7XG5cbmNvbnN0IGNhcmRzQ3JlYXRlZFBhbmVsID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKERhdGFQYW5lbCksIHtcbiAgICBpbWFnZXNyYzogU3R1ZHlEZXNrSWNvbixcbiAgICB0aXRsZTogJ0NhcmRzIENyZWF0ZWQnLFxuICAgIHVuZGVybGluZWNvbG9yOiAnYnJpY2tjYXJkdW5kZXJsaW5lJyxcbiAgICBzdGF0aXN0aWM6IDAsXG4gICAgY2FyZHNDcmVhdGVkOiAwLFxufSk7XG5cbmNvbnN0IGNhcmRzU3R1ZGllZFBhbmVsID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKERhdGFQYW5lbCksIHtcbiAgICBpbWFnZXNyYzogU3R1ZHlMYW1wSWNvbixcbiAgICB0aXRsZTogJ0NhcmRzIFN0dWRpZWQnLFxuICAgIHVuZGVybGluZWNvbG9yOiAnc3Vuc2hpbmVjYXJkdW5kZXJsaW5lJyxcbiAgICBzdGF0aXN0aWM6IDAsXG4gICAgY2FyZHNTdHVkaWVkOiAwLFxufSk7XG5cbmV4cG9ydCBjb25zdCBkYXRhUGFuZWxzID0gW2RlY2tzQ3JlYXRlZFBhbmVsLCBkZWNrc1N0dWRpZWRQYW5lbCwgY2FyZHNDcmVhdGVkUGFuZWwsIGNhcmRzU3R1ZGllZFBhbmVsXTsiLCJpbXBvcnQgeyBpc0Z1dHVyZSB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgVmFsaWRhdG9yID0ge1xuICAgIGRhdGE6IG51bGwsXG4gICAgZWxlbWVudDogbnVsbCxcbiAgICBpc1ZhbGlkOiBmYWxzZSxcblxuICAgIHNldERhdGE6IGZ1bmN0aW9uKGVsZW1lbnQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9LFxuXG4gICAgc2V0VmFsaWRpdHlDbGFzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgfSxcblxuICAgIGRpc3BsYXlXYXJuaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdUaGlzIGZpZWxkIGlzIGludmFsaWQnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0b3JzID0ge1xuXG4gICAgbmFtZVZhbGlkYXRvcjogT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFZhbGlkYXRvciksIHtcbiAgICAgICAgbmFtZUxlbmd0aElzVmFsaWQ6IGZhbHNlLFxuICAgICAgICBuYW1lSXNBdmFpbGFibGU6IGZhbHNlLFxuICAgIFxuICAgICAgICBjaGVja1ZhbGlkaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tMZW5ndGgoKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tOYW1lQXZhaWxhYmlsaXR5KHRoaXMuaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5uYW1lTGVuZ3RoSXNWYWxpZCAmJiB0aGlzLm5hbWVJc0F2YWlsYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHt0aGlzLmlzVmFsaWQgPSBmYWxzZX07XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGNoZWNrTGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWVMZW5ndGhJc1ZhbGlkID0gdGhpcy5kYXRhLmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGNoZWNrTmFtZUF2YWlsYWJpbGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdEZWNrTmFtZSA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZmluZChpdGVtID0+IGl0ZW0gPT09IHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lSXNBdmFpbGFibGUgPSBleGlzdGluZ0RlY2tOYW1lICE9PSB0aGlzLmRhdGEgPyB0cnVlOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgZGlzcGxheVdhcm5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5hbWVMZW5ndGhJc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdOYW1lIG11c3QgYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIgbG9uZycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLm5hbWVJc0F2YWlsYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnRGVjayBhbHJlYWR5IGV4aXN0cywgY2hvb3NlIGEgZGlmZmVyZW50IG5hbWUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pLFxuICAgIFxuICAgIGNhdGVnb3J5VmFsaWRhdG9yOiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoVmFsaWRhdG9yKSwge1xuICAgIFxuICAgICAgICBjaGVja1ZhbGlkaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuZGF0YSAhPT0gJycgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGRpc3BsYXlXYXJuaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBjaG9vc2UgYSBjYXRlZ29yeScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIFxuICAgIGRhdGVWYWxpZGF0b3I6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShWYWxpZGF0b3IpLCB7XG4gICAgXG4gICAgICAgIGNoZWNrVmFsaWRpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgdXNlcklucHV0ID0gdGhpcy5jb252ZXJ0RGF0YVRvRGF0ZU9iamVjdCh0aGlzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gaXNGdXR1cmUodXNlcklucHV0KTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgY29udmVydERhdGFUb0RhdGVPYmplY3Q6IGZ1bmN0aW9uKGRhdGVEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheSA9IGRhdGVEYXRhLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gYXJyYXlbMF07XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IGFycmF5WzFdO1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gYXJyYXlbMl07XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGRpc3BsYXlXYXJuaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0RhdGUgbXVzdCBiZSBpbiB0aGUgZnV0dXJlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgXG4gICAgcXVlc3Rpb25WYWxpZGF0b3I6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShWYWxpZGF0b3IpLCB7XG4gICAgICAgIG1pbmxlbmd0aDogMSxcbiAgICAgICAgbWF4TGVuZ3RoOiAzMDAsXG4gICAgXG4gICAgICAgIGNoZWNrVmFsaWRpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5kYXRhLmxlbmd0aCA+IDAgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEubGVuZ3RoIDwgMzAxID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBkaXNwbGF5V2FybmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgYmUgYmV0d2VlbiAxIGFuZCAzMDAgY2hhcmFjdGVycycpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgXG4gICAgYW5zd2VyVmFsaWRhdG9yOiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoVmFsaWRhdG9yKSwge1xuICAgICAgICBtaW5sZW5ndGg6IDEsXG4gICAgICAgIG1heExlbmd0aDogMzAwLFxuICAgIFxuICAgICAgICBjaGVja1ZhbGlkaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuZGF0YS5sZW5ndGggPiAwICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmxlbmd0aCA8IDMwMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgZGlzcGxheVdhcm5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGJlIGJldHdlZW4gMSBhbmQgMzAwIGNoYXJhY3RlcnMnKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuXG4gICAgcmVzZXRJbnB1dFZhbGlkaXR5OiBmdW5jdGlvbihpbnB1dHMpIHtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnNldFZhbGlkaXR5Q2xhc3MoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cbiIsImltcG9ydCB7IHNldEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuL3B1YnN1Yic7XG5pbXBvcnQgU3R1ZHlJY29uIGZyb20gJy4uL2ltYWdlcy9zdHVkeWluZy5wbmcnO1xuaW1wb3J0IE92ZXJ2aWV3SWNvbiBmcm9tICcuLi9pbWFnZXMvZWRpdC5wbmcnO1xuXG5leHBvcnQgY29uc3QgdmlldyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgY29uc3Qgc3R1ZHlQYWdlID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgIE9ic2VydmFibGUuc3Vic2NyaWJlKCdOZXdEZWNrQWRkZWQnLCBsb2NhbERlY2tzID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZURlY2tEaXNwbGF5KGxvY2FsRGVja3MpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlclBhZ2UoKSB7XG4gICAgICAgICAgICAvL1RoaXMgaXMgZm9yIHRoZSBzbGlkZSBpbiBtZW51IG5hdiBiYXJcbiAgICAgICAgICAgIC8vIGNvbnN0IG9wZW5OYXZCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbm5hdmJ0bicpO1xuICAgICAgICAgICAgLy8gb3Blbk5hdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU5hdik7XG4gICAgICAgICAgICAvL1RoaXMgaXMgZm9yIHRoZSBzbGlkZSBpbiBtZW51IG5hdiBiYXJcblxuICAgICAgICAgICAgcmVuZGVyTW9kYWwoKTtcblxuICAgICAgICAgICAgY29uc3QgdG9wRGVja3NTZWN0aW9uID0gcmVuZGVyWW91ckRlY2tzKCk7XG4gICAgICAgICAgICBjb25zdCBwcmVidWlsdERlY2tzU2VjdGlvbiA9IHJlbmRlclByZUJ1aWx0RGVja3MoKTtcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5U3BhY2UgPSBnZXRFbXB0eURpdkZvckV4dHJhUGFnZVNwYWNlQXRCb3R0b21XaXRoTW9iaWxlTmF2SGVpZ2h0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1haW4uYXBwZW5kKHRvcERlY2tzU2VjdGlvbiwgcHJlYnVpbHREZWNrc1NlY3Rpb24sIGVtcHR5U3BhY2UpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyWW91ckRlY2tzKCkge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSByZW5kZXJTZWN0aW9uVGl0bGUoJ1lvdXIgRGVja3MnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlY2tEaXNwbGF5RGl2ID0gcmVuZGVyRGVja0Rpc3BsYXkoY29udHJvbGxlci5kYXRhLmxvY2FsRGVja3MpO1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kKHRpdGxlLCBkZWNrRGlzcGxheURpdik7XG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJQcmVCdWlsdERlY2tzKCkgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHJlbmRlclNlY3Rpb25UaXRsZSgnUHJlYnVpbHQgRGVja3MnKTtcbiAgICAgICAgICAgIGNvbnN0IHByZWJ1aWx0RGVja3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByZWJ1aWx0RGVja3NEaXYuY2xhc3NOYW1lID0gJ2RlY2tkaXNwbGF5JztcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZGF0YS5wcmVCdWlsdERlY2tzLmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgICAgICAgICBkZWNrID0gcmVuZGVyRGVjayhkZWNrKTtcbiAgICAgICAgICAgICAgICBwcmVidWlsdERlY2tzRGl2LmFwcGVuZENoaWxkKGRlY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmQodGl0bGUsIHByZWJ1aWx0RGVja3NEaXYpO1xuICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyRGVja0Rpc3BsYXkobG9jYWxEZWNrcykge1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVja0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlY2tEaXNwbGF5RGl2LmNsYXNzTmFtZSA9ICdkZWNrZGlzcGxheSc7XG4gICAgICAgICAgICBkZWNrRGlzcGxheURpdi5pZCA9ICdkZWNrZGlzcGxheSc7XG5cbiAgICAgICAgICAgIGlmIChsb2NhbERlY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsb2NhbERlY2tzLmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHJlbmRlckRlY2soZGVjayk7XG4gICAgICAgICAgICAgICAgICAgIGRlY2tEaXNwbGF5RGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdHNFbXB0eU1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgaXRzRW1wdHlNZXNzYWdlLmNsYXNzTmFtZSA9ICdpdHNlbXB0eW1lc3NhZ2UnO1xuICAgICAgICAgICAgICAgIGl0c0VtcHR5TWVzc2FnZS5pbm5lclRleHQgPSBgSXQncyBlbXB0eSBpbiBoZXJlISBDbGljayB0aGUgYmx1ZSBidXR0b24gYWJvdmUgdG8gY3JlYXRlIGEgbmV3IGRlY2suYDtcbiAgICAgICAgICAgICAgICBkZWNrRGlzcGxheURpdi5hcHBlbmRDaGlsZChpdHNFbXB0eU1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlY2tEaXNwbGF5RGl2O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlclN0dWR5Q2FyZFNpZGUoY2FyZFNpZGUsIGRlY2spIHtcblxuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZDYXJkc0Zyb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbnVtYmVyT2ZDYXJkc0Zyb250LmlubmVyVGV4dCA9IGAke2RlY2suY3VycmVudENhcmQgKyAxfSAvICR7ZGVjay5jYXJkcy5sZW5ndGh9YDtcbiAgICAgICAgICAgIG51bWJlck9mQ2FyZHNGcm9udC5jbGFzc05hbWUgPSAnbnVtYmVyb2ZjYXJkcyc7XG4gICAgICAgICAgICBudW1iZXJPZkNhcmRzRnJvbnQuaWQgPSBgJHtjYXJkU2lkZX1zZWN0aW9ubnVtYmVyb2ZjYXJkc2AudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIGhlYWRlci5pbm5lclRleHQgPSBgJHtjYXJkU2lkZX06YDtcblxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgdGV4dC5pZCA9IGAke2NhcmRTaWRlfXRleHRgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoY2FyZFNpZGUgPT09ICdRdWVzdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LmlubmVyVGV4dCA9IGRlY2suY2FyZHNbZGVjay5jdXJyZW50Q2FyZF0ucXVlc3Rpb247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gZGVjay5jYXJkc1tkZWNrLmN1cnJlbnRDYXJkXS5hbnN3ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbm5lckRpdi5hcHBlbmQoaGVhZGVyLCB0ZXh0KTtcblxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2VjdGlvbi5pZCA9IGAke2NhcmRTaWRlfXNlY3Rpb25gLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBzZWN0aW9uLmNsYXNzTmFtZSA9IGAke2NhcmRTaWRlfXNlY3Rpb25gLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZChudW1iZXJPZkNhcmRzRnJvbnQsIGlubmVyRGl2KTtcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU3R1ZHlDYXJkKGRlY2spIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mQ2FyZHNGcm9udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbnNlY3Rpb25udW1iZXJvZmNhcmRzJyk7XG4gICAgICAgICAgICBudW1iZXJPZkNhcmRzRnJvbnQuaW5uZXJUZXh0ID0gYCR7ZGVjay5jdXJyZW50Q2FyZCArIDF9IC8gJHtkZWNrLmNhcmRzLmxlbmd0aH1gO1xuXG4gICAgICAgICAgICBjb25zdCBxdWVzdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb250ZXh0Jyk7XG4gICAgICAgICAgICBxdWVzdGlvblRleHQuaW5uZXJUZXh0ID0gZGVjay5jYXJkc1tkZWNrLmN1cnJlbnRDYXJkXS5xdWVzdGlvbjtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYW5zd2VyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXJ0ZXh0Jyk7XG4gICAgICAgICAgICAvLyBhbnN3ZXJUZXh0LmlubmVyVGV4dCA9IGRlY2suY2FyZHNbZGVjay5jdXJyZW50Q2FyZF0uYW5zd2VyO1xuXG4gICAgICAgICAgICAvL0JlZm9yZSwgeW91IHdvdWxkIHNlZSB0aGUgbmV4dCBhbnN3ZXIgdG9vIHNvb24gaWYgeW91IHdlcmUgb24gdGhlIGJhY2tzaWRlXG4gICAgICAgICAgICAvL29mIHRoZSBjYXJkIGFuZCBjbGlja2VkIG5leHQsIHdpdGggdGhpcyBkZWxheSwgeW91IG5vIGxvbmdlciB3aWxsXG4gICAgICAgICAgICAvL2FjY2lkZW50YWxseSBzZWUgdGhlIGFuc3dlciB0byB0aGUgbmV4dCBjYXJkXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBhbnN3ZXJUZXh0LmlubmVyVGV4dCA9IGRlY2suY2FyZHNbZGVjay5jdXJyZW50Q2FyZF0uYW5zd2VyO1xuICAgICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkNhcmRzQmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXJzZWN0aW9ubnVtYmVyb2ZjYXJkcycpO1xuICAgICAgICAgICAgbnVtYmVyT2ZDYXJkc0JhY2suaW5uZXJUZXh0ID0gYCR7ZGVjay5jdXJyZW50Q2FyZCArIDF9IC8gJHtkZWNrLmNhcmRzLmxlbmd0aH1gO1xuXG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aW91c2J1dHRvbicpO1xuICAgICAgICAgICAgaWYgKGRlY2suY3VycmVudENhcmQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGVjay5jdXJyZW50Q2FyZCArIDEgPT09IGRlY2suY2FyZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRjYXJkYnV0dG9uJykuaW5uZXJUZXh0ID0gJ0ZpbmlzaCBTZXNzaW9uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlckZsaXBDYXJkKHF1ZXN0aW9uU2VjdGlvbiwgYW5zd2VyU2VjdGlvbikge1xuXG4gICAgICAgICAgICBjb25zdCBmbGlwQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZmxpcENhcmQuY2xhc3NOYW1lID0gJ2ZsaXAtY2FyZCc7XG4gICAgICAgICAgICBmbGlwQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBmbGlwQ2FyZElubmVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2YXRlZCcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZsaXBDYXJkSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZsaXBDYXJkSW5uZXIuY2xhc3NOYW1lID0gJ2ZsaXAtY2FyZC1pbm5lcic7XG4gICAgICAgICAgICBmbGlwQ2FyZElubmVyLmlkID0gJ2ZsaXAtY2FyZC1pbm5lcic7XG5cbiAgICAgICAgICAgIGNvbnN0IGZsaXBDYXJkRnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZsaXBDYXJkRnJvbnQuY2xhc3NOYW1lID0gJ2ZsaXAtY2FyZC1mcm9udCc7XG5cbiAgICAgICAgICAgIGNvbnN0IGZsaXBDYXJkQmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZmxpcENhcmRCYWNrLmNsYXNzTmFtZSA9ICdmbGlwLWNhcmQtYmFjayc7XG5cbiAgICAgICAgICAgIGZsaXBDYXJkLmFwcGVuZENoaWxkKGZsaXBDYXJkSW5uZXIpO1xuICAgICAgICAgICAgZmxpcENhcmRJbm5lci5hcHBlbmQoZmxpcENhcmRGcm9udCwgZmxpcENhcmRCYWNrKTtcbiAgICAgICAgICAgIGZsaXBDYXJkRnJvbnQuYXBwZW5kQ2hpbGQocXVlc3Rpb25TZWN0aW9uKTtcbiAgICAgICAgICAgIGZsaXBDYXJkQmFjay5hcHBlbmRDaGlsZChhbnN3ZXJTZWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBmbGlwQ2FyZDtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJTdHVkeVNlc3Npb24oZGVjaykge1xuXG4gICAgICAgICAgICBjb25zdCBzdHVkeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3R1ZHlEaXYuY2xhc3NOYW1lID0gJ3N0dWR5ZGl2JztcblxuICAgICAgICAgICAgY29uc3Qgc3R1ZHlDYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzdHVkeUNhcmREaXYuaWQgPSAnc3R1ZHljYXJkZGl2JztcbiAgICAgICAgICAgIHN0dWR5Q2FyZERpdi5jbGFzc05hbWUgPSAnc3R1ZHljYXJkZGl2JztcblxuICAgICAgICAgICAgY29uc3QgZGVja05hbWVIZWFkZXIgPSByZW5kZXJTZWN0aW9uVGl0bGUoZGVjay5uYW1lKTtcbiAgICAgICAgICAgIGRlY2tOYW1lSGVhZGVyLmNsYXNzTmFtZSA9ICdkZWNrbmFtZWhlYWRlcic7XG5cbiAgICAgICAgICAgIGNvbnN0IHF1ZXN0aW9uU2VjdGlvbiA9IHJlbmRlclN0dWR5Q2FyZFNpZGUoJ1F1ZXN0aW9uJywgZGVjayk7XG4gICAgICAgICAgICBjb25zdCBhbnN3ZXJTZWN0aW9uID0gcmVuZGVyU3R1ZHlDYXJkU2lkZSgnQW5zd2VyJywgZGVjayk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBwcmV2aW91c0J1dHRvbi5pZCA9ICdwcmV2aW91c2J1dHRvbic7XG4gICAgICAgICAgICBwcmV2aW91c0J1dHRvbi5pbm5lclRleHQgPSAnTGFzdCBDYXJkJztcbiAgICAgICAgICAgIHByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2hvd05leHRTdHVkeUNhcmQoZGVjaywgJ3Nob3dwcmV2aW91cycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsaXBDYXJkSW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxpcC1jYXJkLWlubmVyJyk7XG4gICAgICAgICAgICAgICAgZmxpcENhcmRJbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbmV4dEJ1dHRvbi5pbm5lclRleHQgPSAnTmV4dCBDYXJkJztcbiAgICAgICAgICAgIG5leHRCdXR0b24uaWQgPSAnbmV4dGNhcmRidXR0b24nO1xuICAgICAgICAgICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3dOZXh0U3R1ZHlDYXJkKGRlY2ssICdzaG93bmV4dCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsaXBDYXJkSW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxpcC1jYXJkLWlubmVyJyk7XG4gICAgICAgICAgICAgICAgZmxpcENhcmRJbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25zU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGJ1dHRvbnNTcGFuLmNsYXNzTmFtZSA9ICdidXR0b25zc3Bhbic7XG4gICAgICAgICAgICBidXR0b25zU3Bhbi5hcHBlbmQocHJldmlvdXNCdXR0b24sIG5leHRCdXR0b24pO1xuXG4gICAgICAgICAgICBjb25zdCBmbGlwQ2FyZCA9IHJlbmRlckZsaXBDYXJkKHF1ZXN0aW9uU2VjdGlvbiwgYW5zd2VyU2VjdGlvbik7XG5cbiAgICAgICAgICAgIHN0dWR5Q2FyZERpdi5hcHBlbmQoZmxpcENhcmQsIGJ1dHRvbnNTcGFuKTtcbiAgICAgICAgICAgIHN0dWR5RGl2LmFwcGVuZChkZWNrTmFtZUhlYWRlciwgc3R1ZHlDYXJkRGl2KVxuICAgICAgICAgICAgbWFpbi5hcHBlbmQoc3R1ZHlEaXYpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlclN0dWR5U2Vzc2lvbkNvbXBsZXRlKGRlY2spIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmdyYXRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25ncmF0c0Rpdi5jbGFzc05hbWUgPSAnY29uZ3JhdHNkaXYnO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxlYnJhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjZWxlYnJhdGlvblRleHQuaW5uZXJUZXh0ID0gYENvbmdyYXR1bGF0aW9ucywgeW91IHN0dWRpZWQgJHtkZWNrLmNhcmRzLmxlbmd0aH0gY2FyZHMhIENsaWNrIHRoZSBidXR0b24gYmVsb3cgdG8gcmV0dXJuIHRvIHlvdXIgZGVja3MgcGFnZWA7XG5cbiAgICAgICAgICAgIGNvbnN0IHJldHVyblRvRGVja3NQYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICByZXR1cm5Ub0RlY2tzUGFnZUJ1dHRvbi5pbm5lclRleHQgPSAnUmV0dXJuIHRvIERlY2tzIFBhZ2UnO1xuICAgICAgICAgICAgcmV0dXJuVG9EZWNrc1BhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmlldy5yZW1vdmVNYWluVGFnQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIHJlbmRlclBhZ2UoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25ncmF0c0Rpdi5hcHBlbmQoY2VsZWJyYXRpb25UZXh0LCByZXR1cm5Ub0RlY2tzUGFnZUJ1dHRvbik7XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbmdyYXRzRGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZURlY2tzRnJvbVBhZ2UoKSB7XG4gICAgICAgICAgICBjb25zdCBkZWNrRGlzcGxheURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNrZGlzcGxheScpO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKGRlY2tEaXNwbGF5RGl2LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVEZWNrRGlzcGxheShsb2NhbERlY2tzKSB7XG4gICAgICAgICAgICBjb25zdCBkZWNrRGlzcGxheURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNrZGlzcGxheScpO1xuICAgICAgICAgICAgcmVtb3ZlRGVja3NGcm9tUGFnZSgpO1xuXG4gICAgICAgICAgICBsb2NhbERlY2tzLmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVuZGVyRGVjayhkZWNrKTtcbiAgICAgICAgICAgICAgICBkZWNrRGlzcGxheURpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlckRlY2soZGVjaykge1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIG5hbWUuaW5uZXJUZXh0ID0gZGVjay5uYW1lO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZVBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkdWVEYXRlUGFyYWdyYXBoRWxlbWVudC5pbm5lclRleHQgPSBgRHVlOiAke2RlY2suZHVlRGF0ZX1gO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVja0Rlc2NyaXB0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZGVja0Rlc2NyaXB0aW9uUGFyYWdyYXBoLmlubmVyVGV4dCA9IGRlY2suZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgIGNvbnN0IHN0dWR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdHVkeUJ1dHRvbi5pbm5lclRleHQgPSAnU3R1ZHknO1xuICAgICAgICAgICAgc3R1ZHlCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVNYWluVGFnQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc3RhcnRTdHVkeVNlc3Npb24oZGVjayk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBpbWFnZUFuZE5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGltYWdlQW5kTmFtZURpdi5jbGFzc05hbWUgPSAnZGVja2ltYWdlYW5kbmFtZSc7XG4gICAgICAgICAgICBpbWFnZUFuZE5hbWVEaXYuYXBwZW5kKG5hbWUsIHN0dWR5QnV0dG9uKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlY2tEZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVja0Rlc2NyaXB0aW9uRGl2LmNsYXNzTmFtZSA9ICdkZWNrZGVzY3JpcHRpb25kaXYnO1xuICAgICAgICAgICAgZGVja0Rlc2NyaXB0aW9uRGl2LmFwcGVuZChkZWNrRGVzY3JpcHRpb25QYXJhZ3JhcGgsIGR1ZURhdGVQYXJhZ3JhcGhFbGVtZW50KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlY2tEaXYuY2xhc3NOYW1lID0gJ2RlY2snO1xuICAgICAgICAgICAgZGVja0Rpdi5hcHBlbmQoaW1hZ2VBbmROYW1lRGl2LCBkZWNrRGVzY3JpcHRpb25EaXYpO1xuICAgICAgICAgICAgcmV0dXJuIGRlY2tEaXY7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVuZGVyUGFnZSxcbiAgICAgICAgICAgIHVwZGF0ZURlY2tEaXNwbGF5LFxuICAgICAgICAgICAgcmVuZGVyU3R1ZHlTZXNzaW9uLFxuICAgICAgICAgICAgdXBkYXRlU3R1ZHlDYXJkLFxuICAgICAgICAgICAgcmVuZGVyU3R1ZHlDYXJkU2lkZSxcbiAgICAgICAgICAgIHJlbmRlclN0dWR5U2Vzc2lvbkNvbXBsZXRlLFxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBvdmVydmlld1BhZ2UgPSAoZnVuY3Rpb24oKXtcblxuICAgICAgICBPYnNlcnZhYmxlLnN1YnNjcmliZSgnVXBkYXRlT3ZlcnZpZXdEYXRhJywgY2FyZERhdGEgPT4ge1xuICAgICAgICAgICAgdXBkYXRlT3ZlcnZpZXdDYXJkcyhjYXJkRGF0YSk7XG4gICAgICAgICAgICB1cGRhdGVEZWxldGVEZWNrT3B0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcbiAgICAgICAgICAgIHJlbmRlck1vZGFsKCk7XG4gICAgICAgICAgICBjb25zdCBvdmVydmlld1NlY3Rpb24gPSByZW5kZXJPdmVydmlld1NlY3Rpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzU2VjdGlvbiA9IHJlbmRlclNldHRpbmdzU2VjdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZW1wdHlTcGFjZVdpdGhNb2JpbGVOYXZIZWlnaHQgPSBnZXRFbXB0eURpdkZvckV4dHJhUGFnZVNwYWNlQXRCb3R0b21XaXRoTW9iaWxlTmF2SGVpZ2h0KCk7XG4gICAgXG4gICAgICAgICAgICBtYWluLmFwcGVuZChvdmVydmlld1NlY3Rpb24sIHNldHRpbmdzU2VjdGlvbiwgZW1wdHlTcGFjZVdpdGhNb2JpbGVOYXZIZWlnaHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlck92ZXJ2aWV3U2VjdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gcmVuZGVyU2VjdGlvblRpdGxlKCdPdmVydmlldycpO1xuICAgICAgICAgICAgY29uc3Qgcm93T2ZDYXJkc0RpdiA9IHJlbmRlck92ZXJ2aWV3Q2FyZHMoY29udHJvbGxlci5kYXRhLlBhbmVscyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZCh0aXRsZSwgcm93T2ZDYXJkc0Rpdik7XG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlck92ZXJ2aWV3Q2FyZHMoY2FyZHMpIHtcblxuICAgICAgICAgICAgY29uc3Qgcm93T2ZDYXJkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93T2ZDYXJkc0Rpdi5jbGFzc05hbWUgPSAncm93b2ZjYXJkcyc7XG4gICAgICAgICAgICByb3dPZkNhcmRzRGl2LmlkID0gJ3Jvd29mY2FyZHMnO1xuICAgIFxuICAgICAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRPdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNhcmRPdXRlckRpdi5jbGFzc05hbWUgPSAnb3ZlcnZpZXdjYXJkJztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZElubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBjYXJkLmltYWdlc3JjO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gY2FyZC50aXRsZTtcbiAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpc3RpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBzdGF0aXN0aWMuaWQgPSBjYXJkLnVuZGVybGluZWNvbG9yO1xuICAgICAgICAgICAgICAgIHN0YXRpc3RpYy5jbGFzc05hbWUgPSBjYXJkLnVuZGVybGluZWNvbG9yO1xuICAgICAgICAgICAgICAgIHN0YXRpc3RpYy5pbm5lclRleHQgPSBjYXJkLnN0YXRpc3RpYztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FyZElubmVyRGl2LmFwcGVuZChpbWFnZSwgdGl0bGUpO1xuICAgICAgICAgICAgICAgIGNhcmRPdXRlckRpdi5hcHBlbmQoY2FyZElubmVyRGl2LCBzdGF0aXN0aWMpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICByb3dPZkNhcmRzRGl2LmFwcGVuZENoaWxkKGNhcmRPdXRlckRpdik7XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiByb3dPZkNhcmRzRGl2O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlclNldHRpbmdzU2VjdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgICAgICBzZWN0aW9uLmNsYXNzTmFtZSA9ICdzZXR0aW5nc3NlY3Rpb24nO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSByZW5kZXJTZWN0aW9uVGl0bGUoJ1NldHRpbmdzJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZURlY2tTZWN0aW9uID0gcmVuZGVyRGVsZXRlRGVja09wdGlvbnMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gcmVuZGVyUmVzZXRCdXR0b24oKTtcblxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmQodGl0bGUsIGRlbGV0ZURlY2tTZWN0aW9uLCByZXNldEJ1dHRvbik7XG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJEZWxldGVEZWNrT3B0aW9ucygpIHtcblxuICAgICAgICAgICAgY29uc3QgZGVja3MgPSBBcnJheS5mcm9tKGNvbnRyb2xsZXIuZGF0YS5sb2NhbERlY2tzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBkcm9wZG93bkxhYmVsLmh0bWxGb3IgPSAnZGVja3MnO1xuICAgICAgICAgICAgZHJvcGRvd25MYWJlbC5pbm5lclRleHQgPSAnQ2hvb3NlIGEgZGVjayB5b3Ugd291bGQgbGlrZSB0byBkZWxldGUnO1xuXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93blNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgZHJvcGRvd25TZWxlY3QubmFtZSA9ICdkZWNrcyc7XG4gICAgICAgICAgICBkcm9wZG93blNlbGVjdC5pZCA9ICdkcm9wZG93bnNlbGVjdCc7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb24uaW5uZXJUZXh0ID0gJ19fX19fX19fX19fJztcbiAgICAgICAgICAgIGRyb3Bkb3duU2VsZWN0LmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb24pO1xuXG4gICAgICAgICAgICBkZWNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmlkID0gaXRlbS5uYW1lICsgJ2lkJztcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICBkcm9wZG93blNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdkZWNrZGVsZXRlYnV0dG9uJztcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnRGVsZXRlJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVja05hbWUgPSBkcm9wZG93blNlbGVjdC52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmRlbGV0ZURlY2soZGVja05hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZGF0YS5VcGRhdGUoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWNrTmFtZSArICdpZCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlRGVja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVsZXRlRGVja0Rpdi5jbGFzc05hbWUgPSAnZGVsZXRlZGVja2Rpdic7XG4gICAgICAgICAgICBkZWxldGVEZWNrRGl2LmFwcGVuZChkcm9wZG93blNlbGVjdCwgZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ2RlY2tkZWxldGVvcHRpb25zJztcbiAgICAgICAgICAgIGRpdi5hcHBlbmQoZHJvcGRvd25MYWJlbCwgZGVsZXRlRGVja0Rpdik7XG4gICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZU92ZXJ2aWV3Q2FyZHMoY2FyZHMpIHtcbiAgICAgICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdmVydmlld0NhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXJkLnVuZGVybGluZWNvbG9yKTtcbiAgICAgICAgICAgICAgICBvdmVydmlld0NhcmQuaW5uZXJUZXh0ID0gY2FyZC5zdGF0aXN0aWM7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURlbGV0ZURlY2tPcHRpb25zKCkge1xuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd25zZWxlY3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlY2tzID0gQXJyYXkuZnJvbShkcm9wZG93blNlbGVjdC5jaGlsZHJlbik7XG4gICAgICAgICAgICBjb25zdCBsb2NhbERlY2tzID0gY29udHJvbGxlci5kYXRhLmxvY2FsRGVja3M7XG5cbiAgICAgICAgICAgIGRlY2tzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52YWx1ZSAhPSAnJykgeyBpdGVtLnJlbW92ZSgpOyB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbG9jYWxEZWNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmlkID0gaXRlbS5uYW1lICsgJ2lkJztcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICBkcm9wZG93blNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyUmVzZXRCdXR0b24oKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnRGVsZXRlIGFsbCBzYXZlZCBkYXRhJztcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAncmVzZXRidXR0b24nO1xuICAgICAgICAgICAgYnV0dG9uLmFyaWFMYWJlbCA9ICdDbGljayBoZXJlIHRvIGRlbGV0ZSBhbGwgc2F2ZWQgZGF0YSc7XG4gICAgICAgICAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzaG93UmVzZXREYXRhQ29uZmlybWF0aW9uV2luZG93KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBzaG93UmVzZXREYXRhQ29uZmlybWF0aW9uV2luZG93KCkge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZXNldCB5b3VyIGRhdGE/IFlvdSBjYW5ub3QgdW5kbyB0aGlzIGFjdGlvbiEnKSkge1xuICAgICAgICAgICAgICAgIE9ic2VydmFibGUucHVibGlzaCgnRGF0YVJlc2V0Jyk7ICAgIFxuICAgICAgICAgICAgfSBlbHNlIHsgcmV0dXJuOyB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlbmRlclBhZ2UsXG4gICAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsKCkge1xuXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLmlkID0gJ21vZGFsJztcbiAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsJztcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWxIZWFkZXIgPSByZW5kZXJNb2RhbEhlYWRlcihtb2RhbCk7XG4gICAgICAgIGNvbnN0IG1vZGFsRm9ybSA9IHJlbmRlck1vZGFsRm9ybShtb2RhbCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsQm9keS5jbGFzc05hbWUgPSAnbW9kYWwtYm9keSc7XG4gICAgICAgIG1vZGFsQm9keS5pZCA9ICdtb2RhbC1ib2R5JztcbiAgICAgICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKG1vZGFsRm9ybSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcbiAgICAgICAgbW9kYWxDb250ZW50LmlkID0gJ21vZGFsLWNvbnRlbnQnO1xuICAgICAgICBtb2RhbENvbnRlbnQuYXBwZW5kKG1vZGFsSGVhZGVyLCBtb2RhbEJvZHkpO1xuXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsSGVhZGVyKG1vZGFsKSB7XG5cbiAgICAgICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgICAgICBtb2RhbEhlYWRlci5pbm5lclRleHQgPSAnU3RlcCAxOiBDcmVhdGUgRGVjaydcbiAgICAgICAgbW9kYWxIZWFkZXIuaWQgPSAnbW9kYWxoZWFkZXJoNSc7XG5cbiAgICAgICAgY29uc3QgZXhpdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGV4aXRTcGFuLmlubmVySFRNTCA9ICcmdGltZXM7JztcbiAgICAgICAgZXhpdFNwYW4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9kYWxIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWxIZWFkZXJEaXYuY2xhc3NOYW1lID0gJ21vZGFsLWhlYWRlcic7XG4gICAgICAgIG1vZGFsSGVhZGVyRGl2LmFwcGVuZChtb2RhbEhlYWRlciwgZXhpdFNwYW4pO1xuICAgICAgICByZXR1cm4gbW9kYWxIZWFkZXJEaXY7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsRm9ybSgpIHtcblxuICAgICAgICBjb25zdCBuYW1lSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIG5hbWVJbnB1dExhYmVsLmh0bWxGb3IgPSAnZGVja25hbWUnO1xuICAgICAgICBuYW1lSW5wdXRMYWJlbC5pbm5lclRleHQgPSBgTWF4IDIwIENoYXJhY3RlcnNgO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgbmFtZUlucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMobmFtZUlucHV0LCB7XG4gICAgICAgICAgICAnaWQnOiAnZGVja25hbWUnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ2RlY2tuYW1lJyxcbiAgICAgICAgICAgICduYW1lJzogJ2RlY2tuYW1lJyxcbiAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgJ21heExlbmd0aCc6ICcyMCcsXG4gICAgICAgICAgICAnbWluTGVuZ3RoJzogJzEnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gJ2RlY2tkZXNjcmlwdGlvbic7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gYERlc2NyaXB0aW9uIE1heCA2MCBDaGFyYWN0ZXJzYDtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgc2V0QXR0cmlidXRlcyhkZXNjcmlwdGlvbklucHV0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdpZCc6ICdkZWNrZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICdjbGFzcyc6ICdkZWNrZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ2RlY2tkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgJ3Jvd3MnOiAnOCcsXG4gICAgICAgICAgICAgICAgJ2NvbHMnOiAnMjAnLFxuICAgICAgICAgICAgICAgICdtYXhMZW5ndGgnOiAnNjAnLFxuICAgICAgICAgICAgICAgICdtaW4taGVpZ2h0JzogJzNyZW0nLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSAnZGVja2R1ZWRhdGUnO1xuICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlOic7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgc2V0QXR0cmlidXRlcyhkdWVEYXRlSW5wdXQsIHtcbiAgICAgICAgICAgICdpZCc6ICdkZWNrZHVlZGF0ZScsXG4gICAgICAgICAgICAnbmFtZSc6ICdkZWNrZHVlZGF0ZScsXG4gICAgICAgICAgICAnY2xhc3MnOiAnZGVja2R1ZWRhdGUnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnZGF0ZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjYXRlZ29yeUxhYmVsLmh0bWxGb3IgPSAnZGVja2NhdGVnb3J5JztcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC5pbm5lclRleHQgPSAnQ2F0ZWdvcnknO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKGNhdGVnb3J5U2VsZWN0LCB7XG4gICAgICAgICAgICAnaWQnOiAnZGVja2NhdGVnb3J5JyxcbiAgICAgICAgICAgICduYW1lJzogJ2RlY2tjYXRlZ29yeScsXG4gICAgICAgICAgICAnY2xhc3MnOiAnZGVja2NhdGVnb3J5JyxcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGRlZmF1bHRPcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgZGVmYXVsdE9wdGlvbi5pbm5lclRleHQgPSAnUGxlYXNlIGNob29zZSBhIENhdGVnb3J5JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxhbmd1YWdlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxhbmd1YWdlT3B0aW9uLnZhbHVlID0gJ0xhbmd1YWdlJztcbiAgICAgICAgbGFuZ3VhZ2VPcHRpb24uaW5uZXJUZXh0ID0gJ0xhbmd1YWdlJztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1hdGhPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbWF0aE9wdGlvbi52YWx1ZSA9ICdNYXRoJztcbiAgICAgICAgbWF0aE9wdGlvbi5pbm5lclRleHQgPSAnTWF0aCc7XG5cbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kKGRlZmF1bHRPcHRpb24sIGxhbmd1YWdlT3B0aW9uLCBtYXRoT3B0aW9uKTtcblxuICAgICAgICBjb25zdCBpbnB1dHMgPSBbbmFtZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBkdWVEYXRlSW5wdXQsIGNhdGVnb3J5U2VsZWN0XTtcbiAgICAgICAgY29uc3QgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBmb3JtU3VibWl0QnV0dG9uLmlubmVyVGV4dCA9ICdDcmVhdGUgRGVjayc7XG4gICAgICAgIGZvcm1TdWJtaXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBmb3JtU3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9ICdzdWJtaXRidXR0b24nO1xuXG4gICAgICAgIGNvbnN0IGFkZENhcmRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZENhcmRzQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgQ2FyZHMnO1xuICAgICAgICBhZGRDYXJkc0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGFkZENhcmRzQnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZW5kZXJBZGRDYXJkTW9kYWxCb2R5KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9ybVN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIuaGFuZGxlRGVja0NyZWF0aW9uRm9ybSk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc05hbWUgPSAnbW9kYWwtZm9ybSc7XG4gICAgICAgIGZvcm0uaWQgPSAnbW9kYWwtZm9ybSc7XG4gICAgICAgIGZvcm0uYXBwZW5kKFxuICAgICAgICAgICAgbmFtZUlucHV0TGFiZWwsIG5hbWVJbnB1dCwgXG4gICAgICAgICAgICBjYXRlZ29yeUxhYmVsLCBjYXRlZ29yeVNlbGVjdCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgICAgICAgICBkdWVEYXRlTGFiZWwsIGR1ZURhdGVJbnB1dCxcbiAgICAgICAgICAgIGZvcm1TdWJtaXRCdXR0b24pO1xuICAgICAgICByZXR1cm4gZm9ybTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0TW9kYWxBdXRvZm9jdXMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYm9keScpO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXh0ID0gbW9kYWxib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdIHx8IG1vZGFsYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcbiAgICAgICAgICAgIGZpcnN0VGV4dC5mb2N1cygpO1xuICAgICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckFkZENhcmRNb2RhbEJvZHkobmV3RGVjaykge1xuICAgICAgICByZW1vdmVNb2RhbENvbnRlbnQoKTtcbiAgICAgICAgcmVuZGVyTW9kYWxBZGRDYXJkSW5wdXQobmV3RGVjayk7XG4gICAgICAgIHJlbmRlck1vZGFsQWRkQ2FyZElucHV0SGVhZGVyKCk7XG4gICAgICAgIHNldE1vZGFsQXV0b2ZvY3VzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRNb2RhbCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJykucmVtb3ZlKCk7XG4gICAgICAgIHJlbmRlck1vZGFsKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsQWRkQ2FyZElucHV0KG5ld0RlY2spIHtcblxuICAgICAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYm9keScpO1xuXG4gICAgICAgIGNvbnN0IGNhcmRDb3VudEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY2FyZENvdW50SDMuaW5uZXJUZXh0ID0gYENhcmQ6ICR7bmV3RGVjay5jYXJkQ291bnQgKyAxfWA7XG4gICAgICAgIGNhcmRDb3VudEgzLmNsYXNzTmFtZSA9ICdjYXJkY291bnRoMyc7XG5cbiAgICAgICAgY29uc3QgZGVja05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBkZWNrTmFtZS5pbm5lclRleHQgPSBuZXdEZWNrLm5hbWU7XG5cbiAgICAgICAgY29uc3QgbmV3Q2FyZFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0NhcmRUaXRsZURpdi5jbGFzc05hbWUgPSAnbmV3Y2FyZHRpdGxlZGl2JztcbiAgICAgICAgbmV3Q2FyZFRpdGxlRGl2LmFwcGVuZChjYXJkQ291bnRIMywgZGVja05hbWUpO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBxdWVzdGlvbkxhYmVsLmh0bWxGb3IgPSAncXVlc3Rpb25pbnB1dCc7XG4gICAgICAgIHF1ZXN0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ1F1ZXN0aW9uOic7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBxdWVzdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgcXVlc3Rpb25JbnB1dC5uYW1lID0gJ3F1ZXN0aW9uaW5wdXQnO1xuICAgICAgICBxdWVzdGlvbklucHV0LmlkID0gJ3F1ZXN0aW9uaW5wdXQnO1xuICAgICAgICBxdWVzdGlvbklucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgICAgIHF1ZXN0aW9uSW5wdXQubWF4TGVuZ3RoID0gMzAwO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHF1ZXN0aW9uRGl2LmNsYXNzTmFtZSA9ICdxdWVzdGlvbmRpdic7XG4gICAgICAgIHF1ZXN0aW9uRGl2LmFwcGVuZChxdWVzdGlvbkxhYmVsLCBxdWVzdGlvbklucHV0KTtcblxuICAgICAgICBjb25zdCBhbnN3ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGFuc3dlckxhYmVsLmh0bWxGb3IgPSAnYW5zd2VyaW5wdXQnO1xuICAgICAgICBhbnN3ZXJMYWJlbC5pbm5lclRleHQgPSAnQW5zd2VyOidcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFuc3dlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgYW5zd2VySW5wdXQubmFtZSA9ICdhbnN3ZXJpbnB1dCc7XG4gICAgICAgIGFuc3dlcklucHV0LmlkID0gJ2Fuc3dlcmlucHV0JztcbiAgICAgICAgYW5zd2VySW5wdXQubWluTGVuZ3RoID0gMTtcbiAgICAgICAgYW5zd2VySW5wdXQubWF4TGVuZ3RoID0gMzAwO1xuXG4gICAgICAgIGNvbnN0IGFuc3dlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhbnN3ZXJEaXYuY2xhc3NOYW1lID0gJ2Fuc3dlcmRpdic7XG4gICAgICAgIGFuc3dlckRpdi5hcHBlbmQoYW5zd2VyTGFiZWwsIGFuc3dlcklucHV0KTtcblxuICAgICAgICBjb25zdCBtb2RhbENhcmRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBtb2RhbENhcmRGb3JtLmlkID0gJ21vZGFsLWNhcmQtZm9ybSc7XG4gICAgICAgIG1vZGFsQ2FyZEZvcm0uYXBwZW5kKHF1ZXN0aW9uRGl2LCBhbnN3ZXJEaXYpO1xuXG4gICAgICAgIGNvbnN0IHVzZXJPcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHVzZXJPcHRpb25zRGl2LmNsYXNzTmFtZSA9ICd1c2Vyb3B0aW9uc2Rpdic7XG5cbiAgICAgICAgY29uc3QgYWRkTmV4dENhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkTmV4dENhcmRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBuZXh0IGNhcmQnO1xuICAgICAgICBhZGROZXh0Q2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlQWRkQ2FyZHNGb3JtKG5ld0RlY2ssICdhZGRtb3JlJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmluaXNoQWRkaW5nQ2FyZHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZmluaXNoQWRkaW5nQ2FyZHNCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBhbmQgRmluaXNoJztcbiAgICAgICAgZmluaXNoQWRkaW5nQ2FyZHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmhhbmRsZUFkZENhcmRzRm9ybShuZXdEZWNrLCAnZG9uZWFkZGluZycpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVzZXJPcHRpb25zRGl2LmFwcGVuZChhZGROZXh0Q2FyZEJ1dHRvbiwgZmluaXNoQWRkaW5nQ2FyZHNCdXR0b24pO1xuICAgICAgICBtb2RhbEJvZHkuYXBwZW5kKG5ld0NhcmRUaXRsZURpdiwgbW9kYWxDYXJkRm9ybSwgdXNlck9wdGlvbnNEaXYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsQWRkQ2FyZElucHV0SGVhZGVyKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbGhlYWRlcmg1Jyk7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9ICdTdGVwIDI6IEFkZCBDYXJkcyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTW9kYWxDb250ZW50KCkge1xuICAgICAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYm9keScpO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20obW9kYWxCb2R5LmNoaWxkcmVuKTtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTW9kYWwoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybShmb3JtKSB7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQYWdlKG5ld1BhZ2VJRCkge1xuICAgICAgICByZW1vdmVNYWluVGFnQ29udGVudCgpO1xuICAgICAgICBzd2l0Y2ggKG5ld1BhZ2VJRCkge1xuICAgICAgICAgICAgY2FzZSAnc3R1ZHlwYWdlJzpcbiAgICAgICAgICAgICAgICBzdHVkeVBhZ2UucmVuZGVyUGFnZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdvdmVydmlld3BhZ2UnOlxuICAgICAgICAgICAgICAgIG92ZXJ2aWV3UGFnZS5yZW5kZXJQYWdlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlVGFiQ29sb3IobmV3UGFnZUlEKSB7XG4gICAgICAgIHZpZXcubW9iaWxlTmF2QnV0dG9ucy5mb3JFYWNoKChuYXZUYWIpID0+IHtcbiAgICAgICAgICAgIGlmICggbmF2VGFiLmlkID09PSBuZXdQYWdlSUQpIHtcbiAgICAgICAgICAgICAgICBuYXZUYWIuc3R5bGUuYm9yZGVyVG9wID0gJzFweCBzb2xpZCBibHVlJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtuYXZUYWIuaWR9aDNgKS5zdHlsZS5jb2xvciA9ICdibHVlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5hdlRhYi5zdHlsZS5ib3JkZXJUb3AgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bmF2VGFiLmlkfWgzYCkuc3R5bGUuY29sb3IgPSAnZ3JleSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckJhbm5lcigpIHtcbiAgICAgICAgYWRkQmFubmVyQnV0dG9uRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICBtYWtlTmV3QWRkRGVja0J1dHRvbldvcmsoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyU2VjdGlvblRpdGxlKHRpdGxlTmFtZSkge1xuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGgxLmlubmVyVGV4dCA9IHRpdGxlTmFtZTtcbiAgICAgICAgaDEuaWQgPSB0aXRsZU5hbWUuc2xpY2UoKS50b0xvd2VyQ2FzZSgpICsgJ3RpdGxlJztcbiAgICAgICAgcmV0dXJuIGgxO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRCYW5uZXJCdXR0b25GdW5jdGlvbmFsaXR5KCkge1xuICAgICAgICBjb25zdCBiYW5uZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyYnV0dG9uJyk7XG4gICAgICAgIGJhbm5lckJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gICAgICAgIG1lbnUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWJhbm5lckJ1dHRvbi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbWFrZU5ld0FkZERlY2tCdXR0b25Xb3JrKCkge1xuICAgICAgICBjb25zdCBidXR0dHR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlYnV0dHR0b24nKTtcbiAgICAgICAgYnV0dHR0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBzZXRNb2RhbEF1dG9mb2N1cygpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZU1haW5UYWdDb250ZW50KCkge1xuICAgICAgICBjb25zdCBtYWluQ2hpbGRyZW4gPSBBcnJheS5mcm9tKG1haW4uY2hpbGRyZW4pO1xuICAgICAgICBtYWluQ2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xufTtcblxuICAgIGZ1bmN0aW9uIGdldEVtcHR5RGl2Rm9yRXh0cmFQYWdlU3BhY2VBdEJvdHRvbVdpdGhNb2JpbGVOYXZIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IG1vYmlsZU5hdkhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGVuYXYnKS5vZmZzZXRIZWlnaHQudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgZW1wdHlTcGFjZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbXB0eVNwYWNlRGl2LnN0eWxlLmhlaWdodCA9IGAke21vYmlsZU5hdkhlaWdodH1weGA7XG4gICAgICAgIHJldHVybiBlbXB0eVNwYWNlRGl2O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNb2JpbGVOYXZpZ2F0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGZvb3Rlci5pZCA9ICdmb290ZXInO1xuXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgICAgICBuYXYuY2xhc3NOYW1lID0gJ21vYmlsZW5hdic7XG4gICAgICAgIG5hdi5pZCA9ICdtb2JpbGVuYXYnO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc3R1ZHlJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBzdHVkeUltYWdlLnNyYyA9IFN0dWR5SWNvbjtcbiAgICAgICAgc3R1ZHlJbWFnZS5hbHQgPSAnQ2xpY2sgaGVyZSB0byBhY2Nlc3MgdGhlIHN0dWR5IHNlY3Rpb24nO1xuXG4gICAgICAgIGNvbnN0IHN0dWR5SDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBzdHVkeUgzLmlkID0gJ3N0dWR5cGFnZWgzJ1xuICAgICAgICBzdHVkeUgzLmlubmVyVGV4dCA9ICdTdHVkeSc7XG5cbiAgICAgICAgY29uc3Qgc3R1ZHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3R1ZHlCdXR0b24uaWQgPSAnc3R1ZHlwYWdlJztcbiAgICAgICAgc3R1ZHlCdXR0b24uYXBwZW5kKHN0dWR5SW1hZ2UsIHN0dWR5SDMpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBvdmVydmlld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIG92ZXJ2aWV3SW1hZ2Uuc3JjID0gT3ZlcnZpZXdJY29uO1xuICAgICAgICBvdmVydmlld0ltYWdlLmFsdCA9ICdDbGljayBoZXJlIHRvIGFjY2VzcyB0aGUgc3R1ZHkgc2VjdGlvbic7XG5cbiAgICAgICAgY29uc3Qgb3ZlcnZpZXdIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG92ZXJ2aWV3SDMuaWQgPSAnb3ZlcnZpZXdwYWdlaDMnXG4gICAgICAgIG92ZXJ2aWV3SDMuaW5uZXJUZXh0ID0gJ092ZXJ2aWV3JztcblxuICAgICAgICBjb25zdCBvdmVydmlld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBvdmVydmlld0J1dHRvbi5pZCA9ICdvdmVydmlld3BhZ2UnO1xuICAgICAgICBvdmVydmlld0J1dHRvbi5hcHBlbmQob3ZlcnZpZXdJbWFnZSwgb3ZlcnZpZXdIMylcblxuICAgICAgICBuYXYuYXBwZW5kKHN0dWR5QnV0dG9uLCBvdmVydmlld0J1dHRvbik7XG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1vYmlsZU5hdkJ1dHRvbnMoKSB7XG4gICAgICAgIHZpZXcubW9iaWxlTmF2QnV0dG9ucyA9IEFycmF5LmZyb20oW1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0dWR5cGFnZScpLFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJ2aWV3cGFnZScpLFxuICAgICAgICAgICAgXSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFkZE1vYmlsZU5hdkV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB2aWV3Lm1vYmlsZU5hdkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYWJJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgICAgIHJlbW92ZU1haW5UYWdDb250ZW50KCk7XG4gICAgICAgICAgICBjaGFuZ2VUYWJDb2xvcihjdXJyZW50VGFiSUQpO1xuICAgICAgICAgICAgY29udHJvbGxlci5jaGFuZ2VQYWdlKGN1cnJlbnRUYWJJRCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyRGVmYXVsdFZpZXcoZGVmYXVsdFRhYklEKSB7XG4gICAgICAgIHJlbmRlck1vYmlsZU5hdmlnYXRpb24oKTtcbiAgICAgICAgdXBkYXRlTW9iaWxlTmF2QnV0dG9ucygpO1xuICAgICAgICBhZGRNb2JpbGVOYXZFdmVudExpc3RlbmVycygpO1xuICAgICAgICByZW5kZXJCYW5uZXIoKTtcbiAgICAgICAgcmVuZGVyUGFnZShkZWZhdWx0VGFiSUQpXG4gICAgICAgIGNoYW5nZVRhYkNvbG9yKGRlZmF1bHRUYWJJRCk7XG4gICAgfTtcblxuICAgIC8vIGZ1bmN0aW9uIHJlbmRlckJhbm5lcigpIHtcblxuICAgIC8vICAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcpO1xuICAgIC8vICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNMTIgNlYxOE02IDEySDE4Jyk7XG4gICAgLy8gICAgIHBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnY3VycmVudENvbG9yJyk7XG4gICAgLy8gICAgIHBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMicpO1xuICAgIC8vICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcbiAgICAvLyAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xuXG4gICAgLy8gICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgLy8gICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICc0MHB4Jyk7XG4gICAgLy8gICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzQwcHgnKTtcbiAgICAvLyAgICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICAvLyAgICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuXG4gICAgLy8gICAgIGNvbnN0IGFkZERlY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyAgICAgYWRkRGVja0J1dHRvbi5pZCA9ICdiYW5uZXJidXR0b24nO1xuICAgIC8vICAgICBhZGREZWNrQnV0dG9uLmFwcGVuZENoaWxkKHN2Zyk7XG5cbiAgICAgICAgLy8gY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAvLyB0aXRsZS5pbm5lclRleHQgPSAnU3R1ZHkgRGVja3MnO1xuXG4gICAgICAgIC8vIGNvbnN0IGlubmVySGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIGlubmVySGVhZGVyRGl2LmNsYXNzTmFtZSA9ICdpbm5lcmhlYWRlcmRpdic7XG4gICAgICAgIC8vIGlubmVySGVhZGVyRGl2LmFwcGVuZCh0aXRsZSwgYWRkRGVja0J1dHRvbik7XG5cbiAgICAgICAgLy8gY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluaGVhZGVyJyk7XG4gICAgICAgIC8vIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoaW5uZXJIZWFkZXJEaXYpO1xuXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3R1ZHlQYWdlLFxuICAgICAgICByZXNldE1vZGFsLFxuICAgICAgICBoaWRlTW9kYWwsXG4gICAgICAgIHJlc2V0Rm9ybSxcbiAgICAgICAgcmVuZGVyUGFnZSxcbiAgICAgICAgcmVuZGVyRGVmYXVsdFZpZXcsXG4gICAgICAgIHJlbW92ZU1haW5UYWdDb250ZW50LFxuICAgICAgICByZW5kZXJBZGRDYXJkTW9kYWxCb2R5LFxuICAgICAgICB9O1xufSkoKTtcblxuLy9TaWRlLWJhciBOYXZcblxuLy90ZW1wb3JhcmlseSBhZGRpbmcgbWVudSBldmVudCBsaXN0ZW5lcnMgaGVyZVxuLy9UaGVzZSBhcmUgdGhlIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIGxlZnQgc2xpZGUtaW4gbmF2YmFyXG5cbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVydmlld29wdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAgICBcbi8vICAgICByZW1vdmVNYWluVGFnQ29udGVudCgpO1xuLy8gICAgIHJlbmRlcigpXG4vLyAgICAgdG9nZ2xlTmF2KCk7XG4vLyB9KTtcblxuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkZGVja29wdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIHJlbW92ZU1haW5UYWdDb250ZW50KCk7XG4vLyAgICAgUmVuZGVyKCk7XG4vLyAgICAgdG9nZ2xlTmF2KCk7XG4vLyB9KTtcblxuLy8gZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuLy8gICAgIGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlTaWRlbmF2Jyk7XG4vLyAgICAgc2lkZU5hdi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbi8vIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0ICcuLi9zY3NzL2Nzcy9zdHlsZS5jc3MnO1xuY29udHJvbGxlci5zdGFydEFwcGxpY2F0aW9uKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9