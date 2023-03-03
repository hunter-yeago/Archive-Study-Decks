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
___CSS_LOADER_EXPORT___.push([module.id, "/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=list],\nol[role=list] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 3rem;\n  left: 0;\n  top: 0;\n  width: 100%;\n  color: black;\n}\n\n.modal-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 5px;\n  position: relative;\n  margin: auto;\n  border: 1px solid #888;\n  width: 92%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0.8rem;\n  width: 100%;\n  border-bottom: 1px solid lightgrey;\n}\n.modal-header h5 {\n  font-size: 1.25rem;\n  font-weight: 550;\n}\n.modal-header span {\n  color: #aaa;\n  font-size: 1.75rem;\n  font-weight: bold;\n}\n.modal-header span:hover,\n.modal-header span:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-body {\n  padding: 0.15rem 1rem;\n  margin: 0.5rem 0 1rem 0;\n  width: 100%;\n}\n.modal-body form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n}\n.modal-body textarea {\n  resize: none;\n  min-height: 3.5rem;\n  max-height: 12rem;\n}\n\n.deckname,\n.deckcategory,\n.deckduedate,\n.deckdescription {\n  padding: 0.2em;\n}\n\n.deckdescription {\n  width: 100%;\n  height: 5rem;\n  resize: none;\n}\n\n.disabledinputtag {\n  position: relative;\n  bottom: 40px;\n  left: 195px;\n  color: grey;\n  padding: 0 0 0 0.5em;\n  pointer-events: none;\n}\n\n.invalid {\n  border: 0.125rem solid red;\n}\n\n.submitbutton {\n  width: 40%;\n  margin-left: auto;\n}\n\n.questiondiv,\n.answerdiv {\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n  margin-bottom: 0.5em;\n}\n\n.useroptionsdiv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5em;\n  margin-top: 3em;\n}\n.useroptionsdiv button {\n  font-size: 0.9em;\n  padding: 0.2em;\n}\n\n.newcardtitlediv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0.2em 0.5em 0.5em 0.5em;\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.deckdisplay {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.deck {\n  display: flex;\n  justify-content: center;\n  min-height: 7rem;\n  width: 95vw;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  border-radius: 0.5em;\n  padding: 0rem 0.5rem 0rem 0.5rem;\n  background-color: #2e3856;\n}\n\n.deckimageandname {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-right: 1px solid #ffcd1e;\n  margin: 0.7em 0 0.7em 0;\n  padding-right: 1em;\n  min-width: 30%;\n}\n.deckimageandname h3 {\n  font-size: 1rem;\n}\n.deckimageandname p {\n  color: rgba(253, 253, 253, 0.681);\n  font-size: 0.9rem;\n}\n\n.deckdescriptiondiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-width: 70%;\n  margin: 0.7em 0 0.7em 0;\n}\n.deckdescriptiondiv p {\n  padding: 0.5em;\n  min-width: 100%;\n  text-align: center;\n}\n.deckdescriptiondiv :nth-child(2) {\n  color: rgba(253, 253, 253, 0.681);\n  font-size: 0.9rem;\n}\n\n.itsemptymessage {\n  text-align: center;\n  padding: 1em;\n}\n\n.rowofcards {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n  padding: 0.5rem;\n}\n\n.overviewcard {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid lightgrey;\n  color: black;\n  border-radius: 5px;\n  background-color: white;\n}\n.overviewcard div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.2rem;\n  padding-top: 0.5rem;\n}\n.overviewcard img {\n  width: max(1.5rem, 5vw);\n}\n.overviewcard h3 {\n  font-size: 0.9rem;\n}\n\n.greencardunderline,\n.brickcardunderline,\n.bluecardunderline,\n.sunshinecardunderline {\n  text-align: center;\n  font-size: 1.5rem;\n  padding-bottom: 0.5rem;\n  text-decoration: underline;\n  text-decoration-thickness: 1.5px;\n  text-underline-offset: 5px;\n}\n\n.greencardunderline {\n  text-decoration-color: #34C381;\n}\n\n.bluecardunderline {\n  text-decoration-color: #046FC6;\n}\n\n.brickcardunderline {\n  text-decoration-color: #ED6D47;\n}\n\n.sunshinecardunderline {\n  text-decoration-color: #FFBA17;\n}\n\n.settingssection button {\n  padding: 0.2em;\n}\n.settingssection select {\n  padding: 0.3em;\n}\n\n.deckdeleteoptions {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.horizontaldiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1em;\n}\n\n.resetbutton {\n  display: block;\n  margin: 1rem auto auto auto;\n  color: red;\n  border: 1px solid red;\n}\n\n.innerheaderdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.8rem;\n  border-bottom: 1px solid #282e3e;\n}\n.innerheaderdiv h3 {\n  font-size: 1.6rem;\n  border-bottom: 1px solid #ffcd1e;\n}\n\n.containerdiv {\n  height: 38.4px;\n}\n\n.bannerbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  height: 2.4rem;\n  width: 2.4rem;\n  border-radius: 50%;\n  background-color: #4255ff;\n}\n\n.bannerbutton:hover {\n  background-color: #423ed9;\n}\n\n.menu {\n  position: absolute;\n  right: 1rem;\n  border-radius: 0.5rem;\n  color: black;\n  background-color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  z-index: 1;\n  display: none;\n}\n.menu button {\n  min-width: 8rem;\n  padding: 0.7em;\n  background-color: #0a082d;\n  color: white;\n  border: 1px solid #282e3e;\n  border-radius: 0.3rem;\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n.menu button:hover {\n  background-color: #0a082d;\n  opacity: 0.9;\n}\n\n.menu.show {\n  display: block;\n}\n\n.nav-right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 8rem;\n}\n.nav-right p {\n  width: 100%;\n}\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgb(246, 246, 246);\n  overflow-x: hidden;\n  margin-top: 42.3px;\n  transition: 0.3s;\n}\n\n.sidenav.active {\n  width: 15rem;\n}\n\n.sidenavinnerdiv {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 0 0 2rem;\n}\n.sidenavinnerdiv a {\n  padding: 0.3rem 0.5rem 0.4rem 1rem;\n  margin-right: 1.5rem;\n  text-decoration: none;\n  font-size: 1.1rem;\n  color: black;\n  display: block;\n  transition: 0.2 0.5s;\n}\n.sidenavinnerdiv li {\n  list-style: none;\n  white-space: nowrap;\n}\n.sidenavinnerdiv li:hover {\n  background-color: white;\n}\n\n.studycarddiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 1em;\n}\n.studycarddiv div {\n  flex-direction: column;\n  padding: 0.5em;\n  min-width: 50%;\n  min-height: 5rem;\n}\n.studycarddiv p {\n  text-align: center;\n}\n\n.inactive {\n  background-color: rgba(121, 121, 121, 0.9);\n  pointer-events: none;\n  border-color: rgba(121, 121, 121, 0.9);\n}\n\n.numberofcards {\n  margin-bottom: 3em;\n}\n\n.studydiv {\n  margin: 0 1.2em 0 1.2em;\n}\n.studydiv h1 {\n  margin-top: 0.5 em;\n  font-size: 1.8rem;\n}\n\n.flip-card {\n  background-color: transparent;\n  border-radius: 25% 10%;\n  width: 300px;\n  height: 300px;\n  perspective: 1000px;\n}\n\n.flip-card-inner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 25% 10%;\n  cursor: pointer;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.4s;\n  transform-style: preserve-3d;\n}\n\n.flip-card-inner.activated {\n  transform: rotateY(180deg);\n}\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.flip-card-front {\n  border: 2px solid #ffcd1e;\n  border-radius: 25% 10%;\n  background-color: #bbb;\n  color: black;\n}\n\n.flip-card-back {\n  border: 2px solid #ffcd1e;\n  border-radius: 25% 10%;\n  background-color: #2980b9;\n  color: white;\n  transform: rotateY(180deg);\n}\n\n.buttonsspan {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  margin: 1em;\n}\n.buttonsspan button {\n  padding: 0.3em;\n}\n\n.congratsdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 3em;\n  margin: 3em 1em 1em 1em;\n}\n\nhtml,\nbody {\n  background-color: #0a082d;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.6;\n  color: white;\n}\n\nmain {\n  border-top: 1px solid black;\n  min-height: fit-content;\n}\n\n.mobilenav {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  border: 1px solid grey;\n  min-height: 4rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.mobilenav img {\n  width: 2rem;\n  pointer-events: none;\n}\n.mobilenav button {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.2rem;\n  gap: 0.5rem;\n}\n.mobilenav h3 {\n  font-size: 0.9rem;\n  color: grey;\n  pointer-events: none;\n}\n\nsection h1 {\n  text-align: left;\n  padding: 1rem;\n  font-size: 1.3rem;\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./src/scss/_reset.scss","webpack://./src/scss/css/style.css","webpack://./src/scss/_modal.scss","webpack://./src/scss/_mixins.scss","webpack://./src/scss/_yourdecks.scss","webpack://./src/scss/_config.scss","webpack://./src/scss/_overview.scss","webpack://./src/scss/_decksettings.scss","webpack://./src/scss/_banner.scss","webpack://./src/scss/_sidenav.scss","webpack://./src/scss/_studysession.scss","webpack://./src/scss/style.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
        defaultTabID: 'studybutton',
        localDecks: Array.from(_model__WEBPACK_IMPORTED_MODULE_0__.model.getLocalStorage()),
        Panels: _model__WEBPACK_IMPORTED_MODULE_0__.model.dataPanels,

        updateDecks: function() {
            this.localDecks = Array.from(_model__WEBPACK_IMPORTED_MODULE_0__.model.getLocalStorage());
        },
    }
    
    function startApplication() {
        _view__WEBPACK_IMPORTED_MODULE_1__.view.renderDefaultView(data.defaultTabID);
        _model__WEBPACK_IMPORTED_MODULE_0__.model.setCurrentPage(data.defaultTabID);
        console.log(data.preBuiltDecks[0].cards[0].question);
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
            data.updateDecks();
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
            const newCard = _model__WEBPACK_IMPORTED_MODULE_0__.model.createCard(formDataObject);
            const deckCopy = _model__WEBPACK_IMPORTED_MODULE_0__.model.getDeckFromLocalStorage(newDeck.name);
            deckCopy.cards.push(newCard);
            deckCopy.cardCount = deckCopy.cardCount + 1;

            const deckData = JSON.stringify(deckCopy);
            localStorage.setItem(deckCopy.name, deckData);

            data.updateDecks();
            _model__WEBPACK_IMPORTED_MODULE_0__.model.validators.resetInputValidity(validators);
            
            if (status === 'addmore') {
                _view__WEBPACK_IMPORTED_MODULE_1__.view.renderAddCardModalBody(deckCopy);
            } else if (status === 'doneadding') {
                _view__WEBPACK_IMPORTED_MODULE_1__.view.hideModal();
                _view__WEBPACK_IMPORTED_MODULE_1__.view.resetModal();
            }
            
            const currentPage = _model__WEBPACK_IMPORTED_MODULE_0__.model.getCurrentPage();
            if (currentPage === 'studybutton') {
                _view__WEBPACK_IMPORTED_MODULE_1__.view.studyPage.updateDeckDisplay(data.localDecks);
            }
        };
    }

    function changePage(page) {
        _view__WEBPACK_IMPORTED_MODULE_1__.view.renderPage(page);
        _model__WEBPACK_IMPORTED_MODULE_0__.model.setCurrentPage(page);
    }

    function resetDataAndView() {
        _model__WEBPACK_IMPORTED_MODULE_0__.model.clearLocalStorage();
        data.updateDecks();
        _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.publish('UpdateOverviewData');
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
            } else {
                _model__WEBPACK_IMPORTED_MODULE_0__.model.updateCurrentCard(deck, operation);
                _view__WEBPACK_IMPORTED_MODULE_1__.view.studyPage.updateStudyCard(deck);
            }
        } 
        else if (operation === 'showprevious') {
            _model__WEBPACK_IMPORTED_MODULE_0__.model.updateCurrentCard(deck, operation);
            _view__WEBPACK_IMPORTED_MODULE_1__.view.studyPage.updateStudyCard(deck);
        }
        controller.data.updateDecks();
    }

    return {
        data,
        changePage,
        startApplication,
        startStudySession,
        showNextStudyCard,
        handleAddCardsForm,
        handleDeckCreationForm,
    }
})();

/***/ }),

/***/ "./src/scripts/datapanel.js":
/*!**********************************!*\
  !*** ./src/scripts/datapanel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataPanels": () => (/* binding */ dataPanels)
/* harmony export */ });
/* harmony import */ var _images_learning_color_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/learning-color.svg */ "./src/images/learning-color.svg");
/* harmony import */ var _images_study_lamp_color_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/study-lamp-color.svg */ "./src/images/study-lamp-color.svg");
/* harmony import */ var _images_study_desk_color_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/study-desk-color.svg */ "./src/images/study-desk-color.svg");
/* harmony import */ var _images_education_color_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/education-color.svg */ "./src/images/education-color.svg");





const DataPanel = {
    imagesrc: null,
    title: null,
    underlinecolor: null,
    statistic: null
};

const dataPanel1 = Object.assign(Object.create(DataPanel), {
    imagesrc: _images_learning_color_svg__WEBPACK_IMPORTED_MODULE_0__,
    title: 'Decks Created',
    underlinecolor: 'greencardunderline',
    statistic: '18',
});

const dataPanel2 = Object.assign(Object.create(DataPanel), {
    imagesrc: _images_education_color_svg__WEBPACK_IMPORTED_MODULE_3__,
    title: 'Card 2 Title',
    underlinecolor: 'bluecardunderline',
    statistic: '73',
});

const dataPanel3 = Object.assign(Object.create(DataPanel), {
    imagesrc: _images_study_desk_color_svg__WEBPACK_IMPORTED_MODULE_2__,
    title: 'Card 3 Title',
    underlinecolor: 'brickcardunderline',
    statistic: '9',
});

const dataPanel4 = Object.assign(Object.create(DataPanel), {
    imagesrc: _images_study_lamp_color_svg__WEBPACK_IMPORTED_MODULE_1__,
    title: 'Card 4 Title',
    underlinecolor: 'sunshinecardunderline',
    statistic: '100',
});

const dataPanels = [dataPanel1, dataPanel2, dataPanel3, dataPanel4];

/***/ }),

/***/ "./src/scripts/deck.js":
/*!*****************************!*\
  !*** ./src/scripts/deck.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deck": () => (/* binding */ Deck),
/* harmony export */   "createDeck": () => (/* binding */ createDeck)
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
/* harmony import */ var _datapanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datapanel */ "./src/scripts/datapanel.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ "./src/scripts/validator.js");
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deck */ "./src/scripts/deck.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ "./src/scripts/card.js");
/* harmony import */ var _prebuiltdecks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prebuiltdecks */ "./src/scripts/prebuiltdecks.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller */ "./src/scripts/controller.js");







const model = (function(){

    let currentPage = '';

    function setCurrentPage(page) {
        currentPage = page;
    };

    function getCurrentPage() {
        return currentPage;
    };

    function getLocalStorage() {
        const deckArray = [];

          for (let i = 0; i < localStorage.length; i++) {
                const deck = JSON.parse(localStorage.getItem(localStorage.key(i)));
                deckArray.push(deck);
            }
            return deckArray;
    };

    function updateCurrentCard(deck, operation) {

        const deckIsPrebuilt = checkIfDeckIsPreBuilt(deck, _controller__WEBPACK_IMPORTED_MODULE_5__.controller.data.preBuiltDecks);
        if (deckIsPrebuilt && operation === 'reset') {
            const index = _prebuiltdecks__WEBPACK_IMPORTED_MODULE_4__.preBuiltDecks.indexOf(deck);
            _controller__WEBPACK_IMPORTED_MODULE_5__.controller.data.preBuiltDecks[index].currentCard = 0;
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
    }

    function getDeckFromLocalStorage(deckName) {
        const deck = JSON.parse(localStorage.getItem(deckName));
        return deck;
    };

    function addDeckToLocalStorage(deck) {
        localStorage.setItem(deck.name, JSON.stringify(deck));
    };

    function clearLocalStorage() {
        localStorage.clear();
    };

    function createFormDataObject(form) {
        const myFormData = new FormData(form);
        const formDataObj = Object.fromEntries(myFormData.entries());
        return formDataObj;
    };

    return {
        dataPanels: _datapanel__WEBPACK_IMPORTED_MODULE_0__.dataPanels,
        validators: _validator__WEBPACK_IMPORTED_MODULE_1__.validators,
        createCard: _card__WEBPACK_IMPORTED_MODULE_3__.createCard,
        createDeck: _deck__WEBPACK_IMPORTED_MODULE_2__.createDeck,
        getCurrentPage,
        setCurrentPage,
        getLocalStorage,
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
            return new Date(`${year}/${month}/${day}`);
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
            const section = document.createElement('section');
            const title = renderSectionTitle('Your Decks');
            const localDecks = _controller__WEBPACK_IMPORTED_MODULE_1__.controller.data.localDecks;
            
            const deckDisplayDiv = renderDeckDisplay(localDecks);
            
            section.append(title, deckDisplayDiv);
            
            return section;
        };

        function renderPreBuiltDecks() {

            const section = document.createElement('section');
        
            const title = renderSectionTitle('Prebuilt Decks');
    
            const prebuiltDecksDiv = document.createElement('div');
            prebuiltDecksDiv.className = 'deckdisplay';
    


            _controller__WEBPACK_IMPORTED_MODULE_1__.controller.data.preBuiltDecks.forEach((deck) => {
                console.log(deck);
                deck = renderDeck(deck);
                prebuiltDecksDiv.appendChild(deck);
            });
            // const deck1 = renderDeck();
            // const deck2 = renderDeck();
            // const deck3 = renderDeck();
    
            // const prebuiltDecks = [deck1, deck2, deck3];
            // prebuiltDecks.forEach((deck) => {
            //     prebuiltDecksDiv.appendChild(deck);
            // });
    
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
            answerText.innerText = deck.cards[deck.currentCard].answer;

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
            });
            previousButton.classList.add('inactive');

            const nextButton = document.createElement('button');
            nextButton.innerText = 'Next Card';
            nextButton.id = 'nextcardbutton';
            nextButton.addEventListener('click', () => {
                _controller__WEBPACK_IMPORTED_MODULE_1__.controller.showNextStudyCard(deck, 'shownext');
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
    
            const imageAndNameDiv = document.createElement('div');
            imageAndNameDiv.className = 'deckimageandname';
            imageAndNameDiv.append(name);
    
            const deckDescriptionParagraph = document.createElement('p');
            deckDescriptionParagraph.innerText = deck.description;

            const studyButton = document.createElement('button');
            studyButton.innerText = 'Study';
            
            //this is colliding with the name for my mobile nav button
            // studyButton.id = 'studybutton';
            // studyButton.className = 'studybutton';
            studyButton.onclick = () => {
                removeMainTagContent();
                _controller__WEBPACK_IMPORTED_MODULE_1__.controller.startStudySession(deck);
            };
    
            const deckDescriptionDiv = document.createElement('div');
            deckDescriptionDiv.className = 'deckdescriptiondiv';
            deckDescriptionDiv.append(deckDescriptionParagraph, dueDateParagraphElement, studyButton);
    
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

        _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.subscribe('UpdateOverviewData', updateDeleteDeckOptions);

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
                statistic.className = card.underlinecolor;
                statistic.innerText = card.statistic;
        
                cardInnerDiv.append(image, title);
                cardOuterDiv.append(cardInnerDiv, statistic);
        
                rowOfCardsDiv.appendChild(cardOuterDiv);
            });
    
            return rowOfCardsDiv;
        };

        function updateOverviewCards() {
            
        }

        function renderSettingsSection() {
            const section = document.createElement('section');
            section.className = 'settingssection';
    
            const title = renderSectionTitle('Settings');
            
            const deleteDeckSection = renderDeleteDeckOptions();
            const resetButton = renderResetButton();

            section.append(title, deleteDeckSection, resetButton);
            return section;
        }

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
                const deck = dropdownSelect.value;
                localStorage.removeItem(deck);
                document.getElementById(deck + 'id').remove();
            };
            //update the page somehow?

            const horizontalDiv = document.createElement('div');
            horizontalDiv.className = 'horizontaldiv';
            horizontalDiv.append(dropdownSelect, deleteButton);

            const div = document.createElement('div');
            div.className = 'deckdeleteoptions';
            div.append(dropdownLabel, horizontalDiv);
            return div;
        }

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
        }

        function renderResetButton() {
            const button = document.createElement('button');
            button.innerText = 'Delete all saved data';
            button.className = 'resetbutton';
            button.ariaLabel = 'Click here to delete all saved data';
            button.onclick = () => {
                showResetDataConfirmationWindow();
            };
            return button;
        }

        function showResetDataConfirmationWindow() {
            if (confirm('Are you sure you want to reset your data? You cannot undo this action!')) {
                _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.publish('DataReset');
                
            } else { return; }
        }

        return {
            renderPage,
        }
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
        addNextCardButton.innerText = 'Add Next Card';
        addNextCardButton.addEventListener('click', () => {
            _controller__WEBPACK_IMPORTED_MODULE_1__.controller.handleAddCardsForm(newDeck, 'addmore')
        });

        const finishAddingCardsButton = document.createElement('button');
        finishAddingCardsButton.innerText = 'Done Adding Cards';
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
            case 'studybutton':
                studyPage.renderPage();
                break;

            case 'overviewbutton':
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
    }

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
    }

    function makeNewAddDeckButtonWork() {
        const buttttton = document.getElementById('thebutttton');
        buttttton.onclick = () => {
            setModalAutofocus();
            document.getElementById('modal').style.display = 'block';
        }
    }
    
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
    }

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
        studyH3.id = 'studybuttonh3'
        studyH3.innerText = 'Study';

        const studyButton = document.createElement('button');
        studyButton.id = 'studybutton';
        studyButton.append(studyImage, studyH3)
        
        const overviewImage = document.createElement('img');
        overviewImage.src = _images_edit_png__WEBPACK_IMPORTED_MODULE_4__;
        overviewImage.alt = 'Click here to access the study section';

        const overviewH3 = document.createElement('h3');
        overviewH3.id = 'overviewbuttonh3'
        overviewH3.innerText = 'Overview';

        const overviewButton = document.createElement('button');
        overviewButton.id = 'overviewbutton';
        overviewButton.append(overviewImage, overviewH3)

        nav.append(studyButton, overviewButton);
        footer.appendChild(nav);

        const body = document.getElementsByTagName('body')[0];
        body.appendChild(footer);
    }

    function updateMobileNavButtons() {
        view.mobileNavButtons = Array.from([
            document.getElementById('studybutton'),
            document.getElementById('overviewbutton'),
            ]);
    }

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
    }

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

    //     const title = document.createElement('h3');
    //     title.innerText = 'Study Decks';

    //     const innerHeaderDiv = document.createElement('div');
    //     innerHeaderDiv.className = 'innerheaderdiv';
    //     innerHeaderDiv.append(title, addDeckButton);

    //     const mainHeader = document.getElementById('mainheader');
    //     mainHeader.appendChild(innerHeaderDiv);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZkFBeWYsT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLFdBQVcsY0FBYyxVQUFVLE1BQU0sV0FBVyxNQUFNLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLE1BQU0sV0FBVyxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsUUFBUSxVQUFVLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLFNBQVMsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksUUFBUSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLFNBQVMsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLGFBQWEsUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxZQUFZLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxXQUFXLE9BQU8sUUFBUSxZQUFZLFlBQVksV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFX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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvNEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQ1g7QUFDL0Isb0VBQTJCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3Njc3MvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNGdXR1cmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2Nzcy9jc3Mvc3R5bGUuY3NzP2M4OWEiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvY2FyZC5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvZGF0YXBhbmVsLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2NyaXB0cy9kZWNrLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2NyaXB0cy9oZWxwZXJzLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2NyaXB0cy9tb2RlbC5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvcHJlYnVpbHRkZWNrcy5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvcHVic3ViLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2NyaXB0cy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPWxpc3RdLFxcbm9sW3JvbGU9bGlzdF0ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA5MiU7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG4ubW9kYWwtaGVhZGVyIGg1IHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxufVxcbi5tb2RhbC1oZWFkZXIgc3BhbiB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubW9kYWwtaGVhZGVyIHNwYW46aG92ZXIsXFxuLm1vZGFsLWhlYWRlciBzcGFuOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWJvZHkge1xcbiAgcGFkZGluZzogMC4xNXJlbSAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW0gMCAxcmVtIDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsLWJvZHkgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC43cmVtO1xcbn1cXG4ubW9kYWwtYm9keSB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBtaW4taGVpZ2h0OiAzLjVyZW07XFxuICBtYXgtaGVpZ2h0OiAxMnJlbTtcXG59XFxuXFxuLmRlY2tuYW1lLFxcbi5kZWNrY2F0ZWdvcnksXFxuLmRlY2tkdWVkYXRlLFxcbi5kZWNrZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogMC4yZW07XFxufVxcblxcbi5kZWNrZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5kaXNhYmxlZGlucHV0dGFnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogNDBweDtcXG4gIGxlZnQ6IDE5NXB4O1xcbiAgY29sb3I6IGdyZXk7XFxuICBwYWRkaW5nOiAwIDAgMCAwLjVlbTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHJlZDtcXG59XFxuXFxuLnN1Ym1pdGJ1dHRvbiB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5xdWVzdGlvbmRpdixcXG4uYW5zd2VyZGl2IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLnVzZXJvcHRpb25zZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtYXJnaW4tdG9wOiAzZW07XFxufVxcbi51c2Vyb3B0aW9uc2RpdiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbn1cXG5cXG4ubmV3Y2FyZHRpdGxlZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjJlbSAwLjVlbSAwLjVlbSAwLjVlbTtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uZGVja2Rpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kZWNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDdyZW07XFxuICB3aWR0aDogOTV2dztcXG4gIG1hcmdpbi10b3A6IDIlO1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDByZW0gMC41cmVtIDByZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzg1NjtcXG59XFxuXFxuLmRlY2tpbWFnZWFuZG5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZjZDFlO1xcbiAgbWFyZ2luOiAwLjdlbSAwIDAuN2VtIDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICBtaW4td2lkdGg6IDMwJTtcXG59XFxuLmRlY2tpbWFnZWFuZG5hbWUgaDMge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uZGVja2ltYWdlYW5kbmFtZSBwIHtcXG4gIGNvbG9yOiByZ2JhKDI1MywgMjUzLCAyNTMsIDAuNjgxKTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZGVja2Rlc2NyaXB0aW9uZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLXdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDAuN2VtIDAgMC43ZW0gMDtcXG59XFxuLmRlY2tkZXNjcmlwdGlvbmRpdiBwIHtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZGVja2Rlc2NyaXB0aW9uZGl2IDpudGgtY2hpbGQoMikge1xcbiAgY29sb3I6IHJnYmEoMjUzLCAyNTMsIDI1MywgMC42ODEpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5pdHNlbXB0eW1lc3NhZ2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4ucm93b2ZjYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5vdmVydmlld2NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm92ZXJ2aWV3Y2FyZCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4ycmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxuLm92ZXJ2aWV3Y2FyZCBpbWcge1xcbiAgd2lkdGg6IG1heCgxLjVyZW0sIDV2dyk7XFxufVxcbi5vdmVydmlld2NhcmQgaDMge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5ncmVlbmNhcmR1bmRlcmxpbmUsXFxuLmJyaWNrY2FyZHVuZGVybGluZSxcXG4uYmx1ZWNhcmR1bmRlcmxpbmUsXFxuLnN1bnNoaW5lY2FyZHVuZGVybGluZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDEuNXB4O1xcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA1cHg7XFxufVxcblxcbi5ncmVlbmNhcmR1bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMzRDMzgxO1xcbn1cXG5cXG4uYmx1ZWNhcmR1bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMDQ2RkM2O1xcbn1cXG5cXG4uYnJpY2tjYXJkdW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI0VENkQ0NztcXG59XFxuXFxuLnN1bnNoaW5lY2FyZHVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNGRkJBMTc7XFxufVxcblxcbi5zZXR0aW5nc3NlY3Rpb24gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbn1cXG4uc2V0dGluZ3NzZWN0aW9uIHNlbGVjdCB7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG59XFxuXFxuLmRlY2tkZWxldGVvcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5ob3Jpem9udGFsZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5yZXNldGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMXJlbSBhdXRvIGF1dG8gYXV0bztcXG4gIGNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5pbm5lcmhlYWRlcmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMC44cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODJlM2U7XFxufVxcbi5pbm5lcmhlYWRlcmRpdiBoMyB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZjZDFlO1xcbn1cXG5cXG4uY29udGFpbmVyZGl2IHtcXG4gIGhlaWdodDogMzguNHB4O1xcbn1cXG5cXG4uYmFubmVyYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogMi40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNTVmZjtcXG59XFxuXFxuLmJhbm5lcmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzZWQ5O1xcbn1cXG5cXG4ubWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWVudSBidXR0b24ge1xcbiAgbWluLXdpZHRoOiA4cmVtO1xcbiAgcGFkZGluZzogMC43ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwODJkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4MmUzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVudSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMDgyZDtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLm1lbnUuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm5hdi1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDhyZW07XFxufVxcbi5uYXYtcmlnaHQgcCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpZGVuYXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG1hcmdpbi10b3A6IDQyLjNweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5zaWRlbmF2LmFjdGl2ZSB7XFxuICB3aWR0aDogMTVyZW07XFxufVxcblxcbi5zaWRlbmF2aW5uZXJkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAycmVtIDAgMCAycmVtO1xcbn1cXG4uc2lkZW5hdmlubmVyZGl2IGEge1xcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbSAwLjRyZW0gMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zaXRpb246IDAuMiAwLjVzO1xcbn1cXG4uc2lkZW5hdmlubmVyZGl2IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uc2lkZW5hdmlubmVyZGl2IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3R1ZHljYXJkZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG4uc3R1ZHljYXJkZGl2IGRpdiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtaW4td2lkdGg6IDUwJTtcXG4gIG1pbi1oZWlnaHQ6IDVyZW07XFxufVxcbi5zdHVkeWNhcmRkaXYgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuOSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMjEsIDEyMSwgMTIxLCAwLjkpO1xcbn1cXG5cXG4ubnVtYmVyb2ZjYXJkcyB7XFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxufVxcblxcbi5zdHVkeWRpdiB7XFxuICBtYXJnaW46IDAgMS4yZW0gMCAxLjJlbTtcXG59XFxuLnN0dWR5ZGl2IGgxIHtcXG4gIG1hcmdpbi10b3A6IDAuNSBlbTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uZmxpcC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjUlIDEwJTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbn1cXG5cXG4uZmxpcC1jYXJkLWlubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyNSUgMTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbi5mbGlwLWNhcmQtaW5uZXIuYWN0aXZhdGVkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4uZmxpcC1jYXJkLWZyb250LCAuZmxpcC1jYXJkLWJhY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmZsaXAtY2FyZC1mcm9udCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZjZDFlO1xcbiAgYm9yZGVyLXJhZGl1czogMjUlIDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5mbGlwLWNhcmQtYmFjayB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZjZDFlO1xcbiAgYm9yZGVyLXJhZGl1czogMjUlIDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuXFxuLmJ1dHRvbnNzcGFuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDFlbTtcXG59XFxuLmJ1dHRvbnNzcGFuIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG59XFxuXFxuLmNvbmdyYXRzZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzZW07XFxuICBtYXJnaW46IDNlbSAxZW0gMWVtIDFlbTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTA4MmQ7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbm1haW4ge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5tb2JpbGVuYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBtaW4taGVpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcbi5tb2JpbGVuYXYgaW1nIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5tb2JpbGVuYXYgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLm1vYmlsZW5hdiBoMyB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbnNlY3Rpb24gaDEge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jc3Mvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbW9kYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9feW91cmRlY2tzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX292ZXJ2aWV3LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19kZWNrc2V0dGluZ3Muc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2Jhbm5lci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fc2lkZW5hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fc3R1ZHlzZXNzaW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQUE7QUFDQTs7O0VBR0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBLDBCQUFBO0FBQ0E7Ozs7Ozs7Ozs7RUFVRSxTQUFBO0FDQ0Y7O0FERUEsMkdBQUE7QUFDQTs7RUFFRSxnQkFBQTtBQ0NGOztBREVBLDJCQUFBO0FBQ0E7RUFDRSx1QkFBQTtBQ0NGOztBREVBLDJCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNB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Qko7QVVuakJJO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0FWcWpCUjtBVWxqQkk7RVJ2Q0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RVFvQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FWeWpCUjtBVXRqQkk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBVndqQlI7O0FVbmpCSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FWc2pCUjs7QUFFQSxvQ0FBb0NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0Z1dHVyZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgZnV0dXJlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBmdXR1cmU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoZSBmdXR1cmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMzEgRGVjZW1iZXIgMjAxNCBpbiB0aGUgZnV0dXJlP1xuICogY29uc3QgcmVzdWx0ID0gaXNGdXR1cmUobmV3IERhdGUoMjAxNCwgMTEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRnV0dXJlKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKSA+IERhdGUubm93KCk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBDYXJkID0ge1xuICAgIHF1ZXN0aW9uOiBudWxsLFxuICAgIGFuc3dlcjogbnVsbCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcmQoZm9ybURhdGFPYmopIHtcblxuICAgIGNvbnN0IG5ld0NhcmQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoQ2FyZCksIHtcbiAgICAgICAgcXVlc3Rpb246IGZvcm1EYXRhT2JqLnF1ZXN0aW9uaW5wdXQsXG4gICAgICAgIGFuc3dlcjogZm9ybURhdGFPYmouYW5zd2VyaW5wdXQsXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0NhcmQ7XG59IiwiaW1wb3J0IHsgbW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xuaW1wb3J0IHsgdmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7IHByZUJ1aWx0RGVja3MgfSBmcm9tIFwiLi9wcmVidWlsdGRlY2tzXCI7XG5cbi8vVE9ETyByZXNwb25zaXZlIGRlc2lnblxuLy9UT0RPIGR5bmFtaWNhbGx5IHJlbmRlciBBTEwgSFRNTFxuXG5leHBvcnQgY29uc3QgY29udHJvbGxlciA9IChmdW5jdGlvbigpe1xuXG4gICAgT2JzZXJ2YWJsZS5zdWJzY3JpYmUoJ0RhdGFSZXNldCcsIHJlc2V0RGF0YUFuZFZpZXcpO1xuICAgIFxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHByZUJ1aWx0RGVja3M6IHByZUJ1aWx0RGVja3MsXG4gICAgICAgIGRlZmF1bHRUYWJJRDogJ3N0dWR5YnV0dG9uJyxcbiAgICAgICAgbG9jYWxEZWNrczogQXJyYXkuZnJvbShtb2RlbC5nZXRMb2NhbFN0b3JhZ2UoKSksXG4gICAgICAgIFBhbmVsczogbW9kZWwuZGF0YVBhbmVscyxcblxuICAgICAgICB1cGRhdGVEZWNrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGVja3MgPSBBcnJheS5mcm9tKG1vZGVsLmdldExvY2FsU3RvcmFnZSgpKTtcbiAgICAgICAgfSxcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc3RhcnRBcHBsaWNhdGlvbigpIHtcbiAgICAgICAgdmlldy5yZW5kZXJEZWZhdWx0VmlldyhkYXRhLmRlZmF1bHRUYWJJRCk7XG4gICAgICAgIG1vZGVsLnNldEN1cnJlbnRQYWdlKGRhdGEuZGVmYXVsdFRhYklEKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5wcmVCdWlsdERlY2tzWzBdLmNhcmRzWzBdLnF1ZXN0aW9uKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVja0NyZWF0aW9uRm9ybSgpIHtcblxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWZvcm0nKTtcbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVja25hbWUnKTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2tjYXRlZ29yeScpO1xuICAgICAgICBjb25zdCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNrZHVlZGF0ZScpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVDaGVja2VyID0gIG1vZGVsLnZhbGlkYXRvcnMubmFtZVZhbGlkYXRvcjtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlDaGVja2VyID0gbW9kZWwudmFsaWRhdG9ycy5jYXRlZ29yeVZhbGlkYXRvcjtcbiAgICAgICAgY29uc3QgZGF0ZUNoZWNrZXIgPSBtb2RlbC52YWxpZGF0b3JzLmRhdGVWYWxpZGF0b3I7XG5cbiAgICAgICAgbmFtZUNoZWNrZXIuc2V0RGF0YShuYW1lRWxlbWVudCwgbmFtZUVsZW1lbnQudmFsdWUudHJpbSgpKTtcbiAgICAgICAgY2F0ZWdvcnlDaGVja2VyLnNldERhdGEoY2F0ZWdvcnlFbGVtZW50LCBjYXRlZ29yeUVsZW1lbnQudmFsdWUudHJpbSgpKTtcbiAgICAgICAgZGF0ZUNoZWNrZXIuc2V0RGF0YShkYXRlRWxlbWVudCwgZGF0ZUVsZW1lbnQudmFsdWUudHJpbSgpKTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gW25hbWVDaGVja2VyLCBjYXRlZ29yeUNoZWNrZXIsIGRhdGVDaGVja2VyXTtcbiAgICAgICAgdmFsaWRhdG9ycy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICAgICAgaW5wdXQuc2V0VmFsaWRpdHlDbGFzcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGludmFsaWRJbnB1dHMgPSB2YWxpZGF0b3JzLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5pc1ZhbGlkID09PSBmYWxzZSk7XG4gICAgICAgIGlmIChpbnZhbGlkSW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGludmFsaWRJbnB1dHMuZm9yRWFjaCgoaW52YWxpZElucHV0KSA9PiB7XG4gICAgICAgICAgICAgICAgaW52YWxpZElucHV0LmRpc3BsYXlXYXJuaW5nKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YU9iamVjdCA9IG1vZGVsLmNyZWF0ZUZvcm1EYXRhT2JqZWN0KGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgbmV3RGVjayA9IG1vZGVsLmNyZWF0ZURlY2soZm9ybURhdGFPYmplY3QpO1xuICAgICAgICAgICAgbW9kZWwuYWRkRGVja1RvTG9jYWxTdG9yYWdlKG5ld0RlY2spO1xuICAgICAgICAgICAgZGF0YS51cGRhdGVEZWNrcygpO1xuICAgICAgICAgICAgdmlldy5yZXNldEZvcm0oZm9ybSk7XG4gICAgICAgICAgICBtb2RlbC52YWxpZGF0b3JzLnJlc2V0SW5wdXRWYWxpZGl0eSh2YWxpZGF0b3JzKTtcbiAgICAgICAgICAgIHZpZXcucmVuZGVyQWRkQ2FyZE1vZGFsQm9keShuZXdEZWNrKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVBZGRDYXJkc0Zvcm0obmV3RGVjaywgc3RhdHVzKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY2FyZC1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb25pbnB1dCcpO1xuICAgICAgICBjb25zdCBhbnN3ZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXJpbnB1dCcpO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uQ2hlY2tlciA9IG1vZGVsLnZhbGlkYXRvcnMucXVlc3Rpb25WYWxpZGF0b3I7XG4gICAgICAgIGNvbnN0IGFuc3dlckNoZWNrZXIgPSBtb2RlbC52YWxpZGF0b3JzLmFuc3dlclZhbGlkYXRvcjtcblxuICAgICAgICBxdWVzdGlvbkNoZWNrZXIuc2V0RGF0YShxdWVzdGlvbklucHV0LCBxdWVzdGlvbklucHV0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgIGFuc3dlckNoZWNrZXIuc2V0RGF0YShhbnN3ZXJJbnB1dCwgYW5zd2VySW5wdXQudmFsdWUudHJpbSgpKTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gW3F1ZXN0aW9uQ2hlY2tlciwgYW5zd2VyQ2hlY2tlcl07XG4gICAgICAgIHZhbGlkYXRvcnMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW52YWxpZElucHV0cyA9IHZhbGlkYXRvcnMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmlzVmFsaWQgPT09IGZhbHNlKTtcbiAgICAgICAgaWYgKGludmFsaWRJbnB1dHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW52YWxpZElucHV0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5kaXNwbGF5V2FybmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhT2JqZWN0ID0gbW9kZWwuY3JlYXRlRm9ybURhdGFPYmplY3QoZm9ybSk7XG4gICAgICAgICAgICBjb25zdCBuZXdDYXJkID0gbW9kZWwuY3JlYXRlQ2FyZChmb3JtRGF0YU9iamVjdCk7XG4gICAgICAgICAgICBjb25zdCBkZWNrQ29weSA9IG1vZGVsLmdldERlY2tGcm9tTG9jYWxTdG9yYWdlKG5ld0RlY2submFtZSk7XG4gICAgICAgICAgICBkZWNrQ29weS5jYXJkcy5wdXNoKG5ld0NhcmQpO1xuICAgICAgICAgICAgZGVja0NvcHkuY2FyZENvdW50ID0gZGVja0NvcHkuY2FyZENvdW50ICsgMTtcblxuICAgICAgICAgICAgY29uc3QgZGVja0RhdGEgPSBKU09OLnN0cmluZ2lmeShkZWNrQ29weSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkZWNrQ29weS5uYW1lLCBkZWNrRGF0YSk7XG5cbiAgICAgICAgICAgIGRhdGEudXBkYXRlRGVja3MoKTtcbiAgICAgICAgICAgIG1vZGVsLnZhbGlkYXRvcnMucmVzZXRJbnB1dFZhbGlkaXR5KHZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAnYWRkbW9yZScpIHtcbiAgICAgICAgICAgICAgICB2aWV3LnJlbmRlckFkZENhcmRNb2RhbEJvZHkoZGVja0NvcHkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdkb25lYWRkaW5nJykge1xuICAgICAgICAgICAgICAgIHZpZXcuaGlkZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgdmlldy5yZXNldE1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gbW9kZWwuZ2V0Q3VycmVudFBhZ2UoKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PT0gJ3N0dWR5YnV0dG9uJykge1xuICAgICAgICAgICAgICAgIHZpZXcuc3R1ZHlQYWdlLnVwZGF0ZURlY2tEaXNwbGF5KGRhdGEubG9jYWxEZWNrcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlUGFnZShwYWdlKSB7XG4gICAgICAgIHZpZXcucmVuZGVyUGFnZShwYWdlKTtcbiAgICAgICAgbW9kZWwuc2V0Q3VycmVudFBhZ2UocGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXREYXRhQW5kVmlldygpIHtcbiAgICAgICAgbW9kZWwuY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgZGF0YS51cGRhdGVEZWNrcygpO1xuICAgICAgICBPYnNlcnZhYmxlLnB1Ymxpc2goJ1VwZGF0ZU92ZXJ2aWV3RGF0YScpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzdGFydFN0dWR5U2Vzc2lvbihkZWNrKSB7XG4gICAgICAgIHZpZXcuc3R1ZHlQYWdlLnJlbmRlclN0dWR5U2Vzc2lvbihkZWNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93TmV4dFN0dWR5Q2FyZChkZWNrLCBvcGVyYXRpb24pIHtcblxuICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnc2hvd25leHQnKSB7XG4gICAgICAgICAgICBpZiAoZGVjay5jdXJyZW50Q2FyZCArIDEgPT09IGRlY2suY2FyZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbW9kZWwudXBkYXRlQ3VycmVudENhcmQoZGVjaywgJ3Jlc2V0Jyk7XG4gICAgICAgICAgICAgICAgdmlldy5yZW1vdmVNYWluVGFnQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R1ZHlQYWdlLnJlbmRlclN0dWR5U2Vzc2lvbkNvbXBsZXRlKGRlY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbC51cGRhdGVDdXJyZW50Q2FyZChkZWNrLCBvcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R1ZHlQYWdlLnVwZGF0ZVN0dWR5Q2FyZChkZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnc2hvd3ByZXZpb3VzJykge1xuICAgICAgICAgICAgbW9kZWwudXBkYXRlQ3VycmVudENhcmQoZGVjaywgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgIHZpZXcuc3R1ZHlQYWdlLnVwZGF0ZVN0dWR5Q2FyZChkZWNrKTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sbGVyLmRhdGEudXBkYXRlRGVja3MoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkYXRhLFxuICAgICAgICBjaGFuZ2VQYWdlLFxuICAgICAgICBzdGFydEFwcGxpY2F0aW9uLFxuICAgICAgICBzdGFydFN0dWR5U2Vzc2lvbixcbiAgICAgICAgc2hvd05leHRTdHVkeUNhcmQsXG4gICAgICAgIGhhbmRsZUFkZENhcmRzRm9ybSxcbiAgICAgICAgaGFuZGxlRGVja0NyZWF0aW9uRm9ybSxcbiAgICB9XG59KSgpOyIsImltcG9ydCBMZWFybmluZ0ljb24gZnJvbSAnLi4vaW1hZ2VzL2xlYXJuaW5nLWNvbG9yLnN2Zyc7XG5pbXBvcnQgU3R1ZHlMYW1wSWNvbiBmcm9tICcuLi9pbWFnZXMvc3R1ZHktbGFtcC1jb2xvci5zdmcnO1xuaW1wb3J0IFN0dWR5RGVza0ljb24gZnJvbSAnLi4vaW1hZ2VzL3N0dWR5LWRlc2stY29sb3Iuc3ZnJztcbmltcG9ydCBFZHVjYXRpb25JY29uIGZyb20gJy4uL2ltYWdlcy9lZHVjYXRpb24tY29sb3Iuc3ZnJztcblxuY29uc3QgRGF0YVBhbmVsID0ge1xuICAgIGltYWdlc3JjOiBudWxsLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHVuZGVybGluZWNvbG9yOiBudWxsLFxuICAgIHN0YXRpc3RpYzogbnVsbFxufTtcblxuY29uc3QgZGF0YVBhbmVsMSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEYXRhUGFuZWwpLCB7XG4gICAgaW1hZ2VzcmM6IExlYXJuaW5nSWNvbixcbiAgICB0aXRsZTogJ0RlY2tzIENyZWF0ZWQnLFxuICAgIHVuZGVybGluZWNvbG9yOiAnZ3JlZW5jYXJkdW5kZXJsaW5lJyxcbiAgICBzdGF0aXN0aWM6ICcxOCcsXG59KTtcblxuY29uc3QgZGF0YVBhbmVsMiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEYXRhUGFuZWwpLCB7XG4gICAgaW1hZ2VzcmM6IEVkdWNhdGlvbkljb24sXG4gICAgdGl0bGU6ICdDYXJkIDIgVGl0bGUnLFxuICAgIHVuZGVybGluZWNvbG9yOiAnYmx1ZWNhcmR1bmRlcmxpbmUnLFxuICAgIHN0YXRpc3RpYzogJzczJyxcbn0pO1xuXG5jb25zdCBkYXRhUGFuZWwzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKERhdGFQYW5lbCksIHtcbiAgICBpbWFnZXNyYzogU3R1ZHlEZXNrSWNvbixcbiAgICB0aXRsZTogJ0NhcmQgMyBUaXRsZScsXG4gICAgdW5kZXJsaW5lY29sb3I6ICdicmlja2NhcmR1bmRlcmxpbmUnLFxuICAgIHN0YXRpc3RpYzogJzknLFxufSk7XG5cbmNvbnN0IGRhdGFQYW5lbDQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoRGF0YVBhbmVsKSwge1xuICAgIGltYWdlc3JjOiBTdHVkeUxhbXBJY29uLFxuICAgIHRpdGxlOiAnQ2FyZCA0IFRpdGxlJyxcbiAgICB1bmRlcmxpbmVjb2xvcjogJ3N1bnNoaW5lY2FyZHVuZGVybGluZScsXG4gICAgc3RhdGlzdGljOiAnMTAwJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGF0YVBhbmVscyA9IFtkYXRhUGFuZWwxLCBkYXRhUGFuZWwyLCBkYXRhUGFuZWwzLCBkYXRhUGFuZWw0XTsiLCJleHBvcnQgY29uc3QgRGVjayA9IHtcbiAgICBuYW1lOiAnZGVmYXVsdCBuYW1lJyxcbiAgICBkZXNjcmlwdGlvbjogJ2RlZmF1bHQgZGVzY3JpcHRpb24nLFxuICAgIGR1ZURhdGU6ICdkZWZhdWx0IGR1ZURhdGUnLFxuICAgIGNhdGVnb3J5OiAnZGVmYXVsdCBjYXRlZ29yeScsXG4gICAgY3VycmVudENhcmQ6IDAsXG4gICAgY2FyZENvdW50OiAwLFxuICAgIGNhcmRzOiBbXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWNrKGZvcm1EYXRhT2JqKSB7XG4gICAgXG4gICAgY29uc3QgbmV3RGVjayA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEZWNrKSwge1xuICAgICAgICBuYW1lOiBmb3JtRGF0YU9iai5kZWNrbmFtZSxcbiAgICAgICAgY2F0ZWdvcnk6IGZvcm1EYXRhT2JqLmRlY2tjYXRlZ29yeSxcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhT2JqLmRlY2tkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogbWFrZURhdGVSZWFkYWJsZShmb3JtRGF0YU9iai5kZWNrZHVlZGF0ZSksXG4gICAgICAgIGN1cnJlbnRDYXJkOiAwLFxuICAgICAgICBjYXJkQ291bnQ6IDAsXG4gICAgICAgIGNhcmRzOiBbXSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3RGVjaztcbn07XG5cbmZ1bmN0aW9uIG1ha2VEYXRlUmVhZGFibGUoZGF0ZURhdGEpIHtcbiAgICBjb25zdCBhcnJheSA9IGRhdGVEYXRhLnNwbGl0KCctJyk7XG4gICAgY29uc3QgeWVhciA9IGFycmF5WzBdO1xuICAgIGNvbnN0IG1vbnRoID0gY29udmVydE1vbnRoTnVtYmVyVG9Nb250aE5hbWUoYXJyYXlbMV0pO1xuICAgIGNvbnN0IGRheSA9IGNvbnZlcnREYXlOdW1iZXJUb050aERheU9mTW9udGgoYXJyYXlbMl0pO1xuICAgIHJldHVybiBgJHttb250aH0gJHtkYXl9LCAke3llYXJ9YDtcbn07XG5cbmZ1bmN0aW9uIGNvbnZlcnRNb250aE51bWJlclRvTW9udGhOYW1lKG51bWJlcikge1xuICAgIG51bWJlciA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuICAgIGNvbnN0IG1vbnRocyA9IHtcbiAgICAgICAgMTogJ0phbnVhcnknLFxuICAgICAgICAyOiAnRmVicnVhcnknLFxuICAgICAgICAzOiAnTWFyY2gnLFxuICAgICAgICA0OiAnQXByaWwnLFxuICAgICAgICA1OiAnTWF5JyxcbiAgICAgICAgNjogJ0p1bmUnLFxuICAgICAgICA3OiAnSnVseScsXG4gICAgICAgIDg6ICdBdWd1c3QnLFxuICAgICAgICA5OiAnU2VwdGVtYmVyJyxcbiAgICAgICAgMTA6ICdPY3RvYmVyJyxcbiAgICAgICAgMTE6ICdOb3ZlbWJlcicsXG4gICAgICAgIDEyOiAnRGVjZW1iZXInLFxuICAgIH1cbiAgICByZXR1cm4gbW9udGhzW251bWJlcl07XG59O1xuXG5mdW5jdGlvbiBjb252ZXJ0RGF5TnVtYmVyVG9OdGhEYXlPZk1vbnRoKG51bWJlcikge1xuICAgIGNvbnN0IG50aERheSA9IHtcbiAgICAgICAgMTogJ3N0JyxcbiAgICAgICAgMjogJ25kJyxcbiAgICAgICAgMzogJ3JkJyxcbiAgICAgICAgNDogJ3RoJywgNTogJ3RoJywgNjogJ3RoJywgNzogJ3RoJywgODogJ3RoJyxcbiAgICAgICAgOTogJ3RoJywgMTA6ICd0aCcsIDExOiAndGgnLCAxMjogJ3RoJywgXG4gICAgICAgIDEzOiAndGgnLCAxNDogJ3RoJywgMTU6ICd0aCcsIDE2OiAndGgnLCBcbiAgICAgICAgMTc6ICd0aCcsIDE4OiAndGgnLCAxOTogJ3RoJywgMjA6ICd0aCcsXG4gICAgICAgIDIxOiAnc3QnLFxuICAgICAgICAyMjogJ25kJyxcbiAgICAgICAgMjM6ICdyZCcsXG4gICAgICAgIDI0OiAndGgnLCAyNTogJ3RoJywgMjY6ICd0aCcsIDI3OiAndGgnLCBcbiAgICAgICAgMjg6ICd0aCcsIDI5OiAndGgnLCAzMDogJ3RoJyxcbiAgICAgICAgMzE6ICdzdCcsXG4gICAgfTtcbiAgICByZXR1cm4gYCR7bnVtYmVyfSR7bnRoRGF5W251bWJlcl19YDtcbn07IiwiXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbCwgYXR0cnMpIHtcbiAgICBmb3IodmFyIGtleSBpbiBhdHRycykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxufVxuICAiLCJpbXBvcnQgeyBkYXRhUGFuZWxzIH0gZnJvbSAnLi9kYXRhcGFuZWwnO1xuaW1wb3J0IHsgdmFsaWRhdG9ycyB9IGZyb20gJy4vdmFsaWRhdG9yJztcbmltcG9ydCB7IGNyZWF0ZURlY2sgfSBmcm9tICcuL2RlY2snO1xuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gJy4vY2FyZCc7XG5pbXBvcnQgeyBwcmVCdWlsdERlY2tzIH0gZnJvbSAnLi9wcmVidWlsdGRlY2tzJztcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuXG5leHBvcnQgY29uc3QgbW9kZWwgPSAoZnVuY3Rpb24oKXtcblxuICAgIGxldCBjdXJyZW50UGFnZSA9ICcnO1xuXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFBhZ2UocGFnZSkge1xuICAgICAgICBjdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFBhZ2U7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgY29uc3QgZGVja0FycmF5ID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcbiAgICAgICAgICAgICAgICBkZWNrQXJyYXkucHVzaChkZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWNrQXJyYXk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRDYXJkKGRlY2ssIG9wZXJhdGlvbikge1xuXG4gICAgICAgIGNvbnN0IGRlY2tJc1ByZWJ1aWx0ID0gY2hlY2tJZkRlY2tJc1ByZUJ1aWx0KGRlY2ssIGNvbnRyb2xsZXIuZGF0YS5wcmVCdWlsdERlY2tzKTtcbiAgICAgICAgaWYgKGRlY2tJc1ByZWJ1aWx0ICYmIG9wZXJhdGlvbiA9PT0gJ3Jlc2V0Jykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcmVCdWlsdERlY2tzLmluZGV4T2YoZGVjayk7XG4gICAgICAgICAgICBjb250cm9sbGVyLmRhdGEucHJlQnVpbHREZWNrc1tpbmRleF0uY3VycmVudENhcmQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJ3Jlc2V0JykgeyBnZXREZWNrRnJvbUxvY2FsU3RvcmFnZShkZWNrLm5hbWUpLmN1cnJlbnRDYXJkID0gMDsgfSBcbiAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnc2hvd25leHQnKSB7IGRlY2suY3VycmVudENhcmQrKzsgfSBcbiAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnc2hvd3ByZXZpb3VzJykgeyBkZWNrLmN1cnJlbnRDYXJkLS07IH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tJZkRlY2tJc1ByZUJ1aWx0KGRlY2ssIHByZUJ1aWx0RGVja3MpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVCdWlsdERlY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJlQnVpbHREZWNrc1tpXSA9PT0gZGVjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGVja0Zyb21Mb2NhbFN0b3JhZ2UoZGVja05hbWUpIHtcbiAgICAgICAgY29uc3QgZGVjayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGVja05hbWUpKTtcbiAgICAgICAgcmV0dXJuIGRlY2s7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFkZERlY2tUb0xvY2FsU3RvcmFnZShkZWNrKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRlY2submFtZSwgSlNPTi5zdHJpbmdpZnkoZGVjaykpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjbGVhckxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvcm1EYXRhT2JqZWN0KGZvcm0pIHtcbiAgICAgICAgY29uc3QgbXlGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGFPYmogPSBPYmplY3QuZnJvbUVudHJpZXMobXlGb3JtRGF0YS5lbnRyaWVzKCkpO1xuICAgICAgICByZXR1cm4gZm9ybURhdGFPYmo7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGFQYW5lbHMsXG4gICAgICAgIHZhbGlkYXRvcnMsXG4gICAgICAgIGNyZWF0ZUNhcmQsXG4gICAgICAgIGNyZWF0ZURlY2ssXG4gICAgICAgIGdldEN1cnJlbnRQYWdlLFxuICAgICAgICBzZXRDdXJyZW50UGFnZSxcbiAgICAgICAgZ2V0TG9jYWxTdG9yYWdlLFxuICAgICAgICB1cGRhdGVDdXJyZW50Q2FyZCxcbiAgICAgICAgY2xlYXJMb2NhbFN0b3JhZ2UsXG4gICAgICAgIGNyZWF0ZUZvcm1EYXRhT2JqZWN0LFxuICAgICAgICBhZGREZWNrVG9Mb2NhbFN0b3JhZ2UsXG4gICAgICAgIGdldERlY2tGcm9tTG9jYWxTdG9yYWdlLFxuICAgIH07XG59KSgpOyIsImltcG9ydCB7IERlY2sgfSBmcm9tICcuL2RlY2snO1xuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gJy4vY2FyZCc7XG5cbmNvbnN0IGZyZW5jaENhcmRzID0gY3JlYXRlRnJlbmNoQ2FyZHMoKTtcbmNvbnN0IGZyZW5jaERlY2sgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoRGVjayksIHtcbiAgICBuYW1lOiAnRnJlbmNoJyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgZGVjayB0byBsZWFybiAxMCBiYXNpYyBGcmVuY2ggd29yZHMnLFxuICAgIGR1ZURhdGU6ICdOZXh0IFdlZWsnLFxuICAgIGNhdGVnb3J5OiAnTGFuZ3VhZ2VzJyxcbiAgICBjdXJyZW50Q2FyZDogMCxcbiAgICBjYXJkQ291bnQ6IDAsXG4gICAgY2FyZHM6IGZyZW5jaENhcmRzLFxufSk7XG4gICAgXG5mdW5jdGlvbiBjcmVhdGVGcmVuY2hDYXJkcygpIHtcblxuICAgIGNvbnN0IGZyZW5jaENhcmRPbmUgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBtYW5cXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuIGhvbW1lJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRUd28gPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSB0cmVlXFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1biBhcmJyZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkVGhyZWUgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBjaGFpclxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIGNoYWlzZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkRm91ciA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIGNvbXB1dGVyXFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1biBvcmRpbmF0ZXVyJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRGaXZlID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2Egd2luZG93XFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgZmVuw6p0cmUnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZFNpeCA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIHNjaG9vbFxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIMOpY29sZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkU2V2ZW4gPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBtZW51XFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgY2FydGUnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZEVpZ2h0ID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgZG9jdG9yXFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgdm9pdHVyZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkTmluZSA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIHNoaXJ0XFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgY2hlbWlzZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkVGVuID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgcGFydHlcXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuZSBmw6p0ZScsXG4gICAgfTtcblxuICAgIGNvbnN0IGZyZW5jaENhcmRzID0gW2ZyZW5jaENhcmRPbmUsIGZyZW5jaENhcmRUd28sIGZyZW5jaENhcmRUaHJlZSwgXG4gICAgICAgICAgICAgICAgICAgIGZyZW5jaENhcmRGb3VyLCBmcmVuY2hDYXJkRml2ZSwgZnJlbmNoQ2FyZFNpeCwgXG4gICAgICAgICAgICAgICAgICAgIGZyZW5jaENhcmRTZXZlbiwgZnJlbmNoQ2FyZEVpZ2h0LCBmcmVuY2hDYXJkTmluZSxcbiAgICAgICAgICAgICAgICAgICAgZnJlbmNoQ2FyZFRlbl07XG4gICAgXG4gICAgICAgIGZyZW5jaENhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgY2FyZCA9IGNyZWF0ZUNhcmQoY2FyZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZyZW5jaENhcmRzO1xufVxuZXhwb3J0IGNvbnN0IHByZUJ1aWx0RGVja3MgPSBbZnJlbmNoRGVja107IiwiXG5cbmV4cG9ydCBjb25zdCBPYnNlcnZhYmxlICA9IHtcbiAgICBcbiAgICBldmVudHM6IHtcbiAgICB9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24oZXZOYW1lLCBmbikge1xuICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5wdXNoKGZuKVxuICAgIH0sXG4gICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdLmZpbHRlcihmID0+IGYgIT09IGZuKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24oZXZOYW1lLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICAgICAgZihkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJpbXBvcnQgeyBpc0Z1dHVyZSB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgVmFsaWRhdG9yID0ge1xuICAgIGRhdGE6IG51bGwsXG4gICAgZWxlbWVudDogbnVsbCxcbiAgICBpc1ZhbGlkOiBmYWxzZSxcblxuICAgIHNldERhdGE6IGZ1bmN0aW9uKGVsZW1lbnQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9LFxuXG4gICAgc2V0VmFsaWRpdHlDbGFzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgfSxcblxuICAgIGRpc3BsYXlXYXJuaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdUaGlzIGZpZWxkIGlzIGludmFsaWQnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0b3JzID0ge1xuXG4gICAgbmFtZVZhbGlkYXRvcjogT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFZhbGlkYXRvciksIHtcbiAgICAgICAgbmFtZUxlbmd0aElzVmFsaWQ6IGZhbHNlLFxuICAgICAgICBuYW1lSXNBdmFpbGFibGU6IGZhbHNlLFxuICAgIFxuICAgICAgICBjaGVja1ZhbGlkaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tMZW5ndGgoKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tOYW1lQXZhaWxhYmlsaXR5KHRoaXMuaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5uYW1lTGVuZ3RoSXNWYWxpZCAmJiB0aGlzLm5hbWVJc0F2YWlsYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHt0aGlzLmlzVmFsaWQgPSBmYWxzZX07XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGNoZWNrTGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWVMZW5ndGhJc1ZhbGlkID0gdGhpcy5kYXRhLmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGNoZWNrTmFtZUF2YWlsYWJpbGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdEZWNrTmFtZSA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZmluZChpdGVtID0+IGl0ZW0gPT09IHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lSXNBdmFpbGFibGUgPSBleGlzdGluZ0RlY2tOYW1lICE9PSB0aGlzLmRhdGEgPyB0cnVlOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgZGlzcGxheVdhcm5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5hbWVMZW5ndGhJc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdOYW1lIG11c3QgYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIgbG9uZycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLm5hbWVJc0F2YWlsYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnRGVjayBhbHJlYWR5IGV4aXN0cywgY2hvb3NlIGEgZGlmZmVyZW50IG5hbWUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pLFxuICAgIFxuICAgIGNhdGVnb3J5VmFsaWRhdG9yOiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoVmFsaWRhdG9yKSwge1xuICAgIFxuICAgICAgICBjaGVja1ZhbGlkaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuZGF0YSAhPT0gJycgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGRpc3BsYXlXYXJuaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBjaG9vc2UgYSBjYXRlZ29yeScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIFxuICAgIGRhdGVWYWxpZGF0b3I6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShWYWxpZGF0b3IpLCB7XG4gICAgXG4gICAgICAgIGNoZWNrVmFsaWRpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgdXNlcklucHV0ID0gdGhpcy5jb252ZXJ0RGF0YVRvRGF0ZU9iamVjdCh0aGlzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gaXNGdXR1cmUodXNlcklucHV0KTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgY29udmVydERhdGFUb0RhdGVPYmplY3Q6IGZ1bmN0aW9uKGRhdGVEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheSA9IGRhdGVEYXRhLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gYXJyYXlbMF07XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IGFycmF5WzFdO1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gYXJyYXlbMl07XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYCR7eWVhcn0vJHttb250aH0vJHtkYXl9YCk7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGRpc3BsYXlXYXJuaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0RhdGUgbXVzdCBiZSBpbiB0aGUgZnV0dXJlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgXG4gICAgcXVlc3Rpb25WYWxpZGF0b3I6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShWYWxpZGF0b3IpLCB7XG4gICAgICAgIG1pbmxlbmd0aDogMSxcbiAgICAgICAgbWF4TGVuZ3RoOiAzMDAsXG4gICAgXG4gICAgICAgIGNoZWNrVmFsaWRpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5kYXRhLmxlbmd0aCA+IDAgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEubGVuZ3RoIDwgMzAxID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBkaXNwbGF5V2FybmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgYmUgYmV0d2VlbiAxIGFuZCAzMDAgY2hhcmFjdGVycycpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgXG4gICAgYW5zd2VyVmFsaWRhdG9yOiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoVmFsaWRhdG9yKSwge1xuICAgICAgICBtaW5sZW5ndGg6IDEsXG4gICAgICAgIG1heExlbmd0aDogMzAwLFxuICAgIFxuICAgICAgICBjaGVja1ZhbGlkaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuZGF0YS5sZW5ndGggPiAwICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmxlbmd0aCA8IDMwMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgZGlzcGxheVdhcm5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGJlIGJldHdlZW4gMSBhbmQgMzAwIGNoYXJhY3RlcnMnKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuXG4gICAgcmVzZXRJbnB1dFZhbGlkaXR5OiBmdW5jdGlvbihpbnB1dHMpIHtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnNldFZhbGlkaXR5Q2xhc3MoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cbiIsImltcG9ydCB7IHNldEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuL3B1YnN1Yic7XG5pbXBvcnQgU3R1ZHlJY29uIGZyb20gJy4uL2ltYWdlcy9zdHVkeWluZy5wbmcnO1xuaW1wb3J0IE92ZXJ2aWV3SWNvbiBmcm9tICcuLi9pbWFnZXMvZWRpdC5wbmcnO1xuXG5leHBvcnQgY29uc3QgdmlldyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgY29uc3Qgc3R1ZHlQYWdlID0gKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcbiAgICAgICAgICAgIC8vVGhpcyBpcyBmb3IgdGhlIHNsaWRlIGluIG1lbnUgbmF2IGJhclxuICAgICAgICAgICAgLy8gY29uc3Qgb3Blbk5hdkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVubmF2YnRuJyk7XG4gICAgICAgICAgICAvLyBvcGVuTmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTmF2KTtcbiAgICAgICAgICAgIC8vVGhpcyBpcyBmb3IgdGhlIHNsaWRlIGluIG1lbnUgbmF2IGJhclxuXG4gICAgICAgICAgICByZW5kZXJNb2RhbCgpO1xuXG4gICAgICAgICAgICBjb25zdCB0b3BEZWNrc1NlY3Rpb24gPSByZW5kZXJZb3VyRGVja3MoKTtcbiAgICAgICAgICAgIGNvbnN0IHByZWJ1aWx0RGVja3NTZWN0aW9uID0gcmVuZGVyUHJlQnVpbHREZWNrcygpO1xuICAgICAgICAgICAgY29uc3QgZW1wdHlTcGFjZSA9IGdldEVtcHR5RGl2Rm9yRXh0cmFQYWdlU3BhY2VBdEJvdHRvbVdpdGhNb2JpbGVOYXZIZWlnaHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbWFpbi5hcHBlbmQodG9wRGVja3NTZWN0aW9uLCBwcmVidWlsdERlY2tzU2VjdGlvbiwgZW1wdHlTcGFjZSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiByZW5kZXJZb3VyRGVja3MoKSB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSByZW5kZXJTZWN0aW9uVGl0bGUoJ1lvdXIgRGVja3MnKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsRGVja3MgPSBjb250cm9sbGVyLmRhdGEubG9jYWxEZWNrcztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGVja0Rpc3BsYXlEaXYgPSByZW5kZXJEZWNrRGlzcGxheShsb2NhbERlY2tzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmQodGl0bGUsIGRlY2tEaXNwbGF5RGl2KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyUHJlQnVpbHREZWNrcygpIHtcblxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHJlbmRlclNlY3Rpb25UaXRsZSgnUHJlYnVpbHQgRGVja3MnKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHByZWJ1aWx0RGVja3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByZWJ1aWx0RGVja3NEaXYuY2xhc3NOYW1lID0gJ2RlY2tkaXNwbGF5JztcbiAgICBcblxuXG4gICAgICAgICAgICBjb250cm9sbGVyLmRhdGEucHJlQnVpbHREZWNrcy5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGVjayk7XG4gICAgICAgICAgICAgICAgZGVjayA9IHJlbmRlckRlY2soZGVjayk7XG4gICAgICAgICAgICAgICAgcHJlYnVpbHREZWNrc0Rpdi5hcHBlbmRDaGlsZChkZWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uc3QgZGVjazEgPSByZW5kZXJEZWNrKCk7XG4gICAgICAgICAgICAvLyBjb25zdCBkZWNrMiA9IHJlbmRlckRlY2soKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGRlY2szID0gcmVuZGVyRGVjaygpO1xuICAgIFxuICAgICAgICAgICAgLy8gY29uc3QgcHJlYnVpbHREZWNrcyA9IFtkZWNrMSwgZGVjazIsIGRlY2szXTtcbiAgICAgICAgICAgIC8vIHByZWJ1aWx0RGVja3MuZm9yRWFjaCgoZGVjaykgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHByZWJ1aWx0RGVja3NEaXYuYXBwZW5kQ2hpbGQoZGVjayk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICBcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kKHRpdGxlLCBwcmVidWlsdERlY2tzRGl2KTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlckRlY2tEaXNwbGF5KGxvY2FsRGVja3MpIHtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlY2tEaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrRGlzcGxheURpdi5jbGFzc05hbWUgPSAnZGVja2Rpc3BsYXknO1xuICAgICAgICAgICAgZGVja0Rpc3BsYXlEaXYuaWQgPSAnZGVja2Rpc3BsYXknO1xuXG4gICAgICAgICAgICBpZiAobG9jYWxEZWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxEZWNrcy5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZW5kZXJEZWNrKGRlY2spO1xuICAgICAgICAgICAgICAgICAgICBkZWNrRGlzcGxheURpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRzRW1wdHlNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIGl0c0VtcHR5TWVzc2FnZS5jbGFzc05hbWUgPSAnaXRzZW1wdHltZXNzYWdlJztcbiAgICAgICAgICAgICAgICBpdHNFbXB0eU1lc3NhZ2UuaW5uZXJUZXh0ID0gYEl0J3MgZW1wdHkgaW4gaGVyZSEgQ2xpY2sgdGhlIGJsdWUgYnV0dG9uIGFib3ZlIHRvIGNyZWF0ZSBhIG5ldyBkZWNrLmA7XG4gICAgICAgICAgICAgICAgZGVja0Rpc3BsYXlEaXYuYXBwZW5kQ2hpbGQoaXRzRW1wdHlNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBkZWNrRGlzcGxheURpdjtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJTdHVkeUNhcmRTaWRlKGNhcmRTaWRlLCBkZWNrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mQ2FyZHNGcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIG51bWJlck9mQ2FyZHNGcm9udC5pbm5lclRleHQgPSBgJHtkZWNrLmN1cnJlbnRDYXJkICsgMX0gLyAke2RlY2suY2FyZHMubGVuZ3RofWA7XG4gICAgICAgICAgICBudW1iZXJPZkNhcmRzRnJvbnQuY2xhc3NOYW1lID0gJ251bWJlcm9mY2FyZHMnO1xuICAgICAgICAgICAgbnVtYmVyT2ZDYXJkc0Zyb250LmlkID0gYCR7Y2FyZFNpZGV9c2VjdGlvbm51bWJlcm9mY2FyZHNgLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICAgICBoZWFkZXIuaW5uZXJUZXh0ID0gYCR7Y2FyZFNpZGV9OmA7XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIHRleHQuaWQgPSBgJHtjYXJkU2lkZX10ZXh0YC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGNhcmRTaWRlID09PSAnUXVlc3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGV4dC5pbm5lclRleHQgPSBkZWNrLmNhcmRzW2RlY2suY3VycmVudENhcmRdLnF1ZXN0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZXh0LmlubmVyVGV4dCA9IGRlY2suY2FyZHNbZGVjay5jdXJyZW50Q2FyZF0uYW5zd2VyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5uZXJEaXYuYXBwZW5kKGhlYWRlciwgdGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNlY3Rpb24uaWQgPSBgJHtjYXJkU2lkZX1zZWN0aW9uYC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgc2VjdGlvbi5jbGFzc05hbWUgPSBgJHtjYXJkU2lkZX1zZWN0aW9uYC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmQobnVtYmVyT2ZDYXJkc0Zyb250LCBpbm5lckRpdik7XG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVN0dWR5Q2FyZChkZWNrKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkNhcmRzRnJvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb25zZWN0aW9ubnVtYmVyb2ZjYXJkcycpO1xuICAgICAgICAgICAgbnVtYmVyT2ZDYXJkc0Zyb250LmlubmVyVGV4dCA9IGAke2RlY2suY3VycmVudENhcmQgKyAxfSAvICR7ZGVjay5jYXJkcy5sZW5ndGh9YDtcblxuICAgICAgICAgICAgY29uc3QgcXVlc3Rpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9udGV4dCcpO1xuICAgICAgICAgICAgcXVlc3Rpb25UZXh0LmlubmVyVGV4dCA9IGRlY2suY2FyZHNbZGVjay5jdXJyZW50Q2FyZF0ucXVlc3Rpb247XG5cbiAgICAgICAgICAgIGNvbnN0IGFuc3dlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VydGV4dCcpO1xuICAgICAgICAgICAgYW5zd2VyVGV4dC5pbm5lclRleHQgPSBkZWNrLmNhcmRzW2RlY2suY3VycmVudENhcmRdLmFuc3dlcjtcblxuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZDYXJkc0JhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2Vyc2VjdGlvbm51bWJlcm9mY2FyZHMnKTtcbiAgICAgICAgICAgIG51bWJlck9mQ2FyZHNCYWNrLmlubmVyVGV4dCA9IGAke2RlY2suY3VycmVudENhcmQgKyAxfSAvICR7ZGVjay5jYXJkcy5sZW5ndGh9YDtcblxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlvdXNidXR0b24nKTtcbiAgICAgICAgICAgIGlmIChkZWNrLmN1cnJlbnRDYXJkID4gMCkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRlY2suY3VycmVudENhcmQgKyAxID09PSBkZWNrLmNhcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Y2FyZGJ1dHRvbicpLmlubmVyVGV4dCA9ICdGaW5pc2ggU2Vzc2lvbic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJGbGlwQ2FyZChxdWVzdGlvblNlY3Rpb24sIGFuc3dlclNlY3Rpb24pIHtcblxuICAgICAgICAgICAgY29uc3QgZmxpcENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZsaXBDYXJkLmNsYXNzTmFtZSA9ICdmbGlwLWNhcmQnO1xuICAgICAgICAgICAgZmxpcENhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmxpcENhcmRJbm5lci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBmbGlwQ2FyZElubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmbGlwQ2FyZElubmVyLmNsYXNzTmFtZSA9ICdmbGlwLWNhcmQtaW5uZXInO1xuXG4gICAgICAgICAgICBjb25zdCBmbGlwQ2FyZEZyb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmbGlwQ2FyZEZyb250LmNsYXNzTmFtZSA9ICdmbGlwLWNhcmQtZnJvbnQnO1xuXG4gICAgICAgICAgICBjb25zdCBmbGlwQ2FyZEJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZsaXBDYXJkQmFjay5jbGFzc05hbWUgPSAnZmxpcC1jYXJkLWJhY2snO1xuXG4gICAgICAgICAgICBmbGlwQ2FyZC5hcHBlbmRDaGlsZChmbGlwQ2FyZElubmVyKTtcbiAgICAgICAgICAgIGZsaXBDYXJkSW5uZXIuYXBwZW5kKGZsaXBDYXJkRnJvbnQsIGZsaXBDYXJkQmFjayk7XG4gICAgICAgICAgICBmbGlwQ2FyZEZyb250LmFwcGVuZENoaWxkKHF1ZXN0aW9uU2VjdGlvbik7XG4gICAgICAgICAgICBmbGlwQ2FyZEJhY2suYXBwZW5kQ2hpbGQoYW5zd2VyU2VjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gZmxpcENhcmQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyU3R1ZHlTZXNzaW9uKGRlY2spIHtcblxuICAgICAgICAgICAgY29uc3Qgc3R1ZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHN0dWR5RGl2LmNsYXNzTmFtZSA9ICdzdHVkeWRpdic7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0dWR5Q2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3R1ZHlDYXJkRGl2LmlkID0gJ3N0dWR5Y2FyZGRpdic7XG4gICAgICAgICAgICBzdHVkeUNhcmREaXYuY2xhc3NOYW1lID0gJ3N0dWR5Y2FyZGRpdic7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlY2tOYW1lSGVhZGVyID0gcmVuZGVyU2VjdGlvblRpdGxlKGRlY2submFtZSk7XG4gICAgICAgICAgICBkZWNrTmFtZUhlYWRlci5jbGFzc05hbWUgPSAnZGVja25hbWVoZWFkZXInO1xuXG4gICAgICAgICAgICBjb25zdCBxdWVzdGlvblNlY3Rpb24gPSByZW5kZXJTdHVkeUNhcmRTaWRlKCdRdWVzdGlvbicsIGRlY2spO1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyU2VjdGlvbiA9IHJlbmRlclN0dWR5Q2FyZFNpZGUoJ0Fuc3dlcicsIGRlY2spO1xuXG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uaWQgPSAncHJldmlvdXNidXR0b24nO1xuICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uaW5uZXJUZXh0ID0gJ0xhc3QgQ2FyZCc7XG4gICAgICAgICAgICBwcmV2aW91c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3dOZXh0U3R1ZHlDYXJkKGRlY2ssICdzaG93cHJldmlvdXMnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbmV4dEJ1dHRvbi5pbm5lclRleHQgPSAnTmV4dCBDYXJkJztcbiAgICAgICAgICAgIG5leHRCdXR0b24uaWQgPSAnbmV4dGNhcmRidXR0b24nO1xuICAgICAgICAgICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3dOZXh0U3R1ZHlDYXJkKGRlY2ssICdzaG93bmV4dCcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgYnV0dG9uc1NwYW4uY2xhc3NOYW1lID0gJ2J1dHRvbnNzcGFuJztcbiAgICAgICAgICAgIGJ1dHRvbnNTcGFuLmFwcGVuZChwcmV2aW91c0J1dHRvbiwgbmV4dEJ1dHRvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGZsaXBDYXJkID0gcmVuZGVyRmxpcENhcmQocXVlc3Rpb25TZWN0aW9uLCBhbnN3ZXJTZWN0aW9uKTtcblxuICAgICAgICAgICAgc3R1ZHlDYXJkRGl2LmFwcGVuZChmbGlwQ2FyZCwgYnV0dG9uc1NwYW4pO1xuICAgICAgICAgICAgc3R1ZHlEaXYuYXBwZW5kKGRlY2tOYW1lSGVhZGVyLCBzdHVkeUNhcmREaXYpXG4gICAgICAgICAgICBtYWluLmFwcGVuZChzdHVkeURpdik7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyU3R1ZHlTZXNzaW9uQ29tcGxldGUoZGVjaykge1xuICAgICAgICAgICAgY29uc3QgY29uZ3JhdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbmdyYXRzRGl2LmNsYXNzTmFtZSA9ICdjb25ncmF0c2Rpdic7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGVicmF0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNlbGVicmF0aW9uVGV4dC5pbm5lclRleHQgPSBgQ29uZ3JhdHVsYXRpb25zLCB5b3Ugc3R1ZGllZCAke2RlY2suY2FyZHMubGVuZ3RofSBjYXJkcyEgQ2xpY2sgdGhlIGJ1dHRvbiBiZWxvdyB0byByZXR1cm4gdG8geW91ciBkZWNrcyBwYWdlYDtcblxuICAgICAgICAgICAgY29uc3QgcmV0dXJuVG9EZWNrc1BhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHJldHVyblRvRGVja3NQYWdlQnV0dG9uLmlubmVyVGV4dCA9ICdSZXR1cm4gdG8gRGVja3MgUGFnZSc7XG4gICAgICAgICAgICByZXR1cm5Ub0RlY2tzUGFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB2aWV3LnJlbW92ZU1haW5UYWdDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyUGFnZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbmdyYXRzRGl2LmFwcGVuZChjZWxlYnJhdGlvblRleHQsIHJldHVyblRvRGVja3NQYWdlQnV0dG9uKTtcbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY29uZ3JhdHNEaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlRGVja3NGcm9tUGFnZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2tEaXNwbGF5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2tkaXNwbGF5Jyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20oZGVja0Rpc3BsYXlEaXYuY2hpbGRyZW4pO1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURlY2tEaXNwbGF5KGxvY2FsRGVja3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2tEaXNwbGF5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2tkaXNwbGF5Jyk7XG4gICAgICAgICAgICByZW1vdmVEZWNrc0Zyb21QYWdlKCk7XG5cbiAgICAgICAgICAgIGxvY2FsRGVja3MuZm9yRWFjaCgoZGVjaykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZW5kZXJEZWNrKGRlY2spO1xuICAgICAgICAgICAgICAgIGRlY2tEaXNwbGF5RGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyRGVjayhkZWNrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgbmFtZS5pbm5lclRleHQgPSBkZWNrLm5hbWU7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGR1ZURhdGVQYXJhZ3JhcGhFbGVtZW50LmlubmVyVGV4dCA9IGBEdWU6ICR7ZGVjay5kdWVEYXRlfWA7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBpbWFnZUFuZE5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGltYWdlQW5kTmFtZURpdi5jbGFzc05hbWUgPSAnZGVja2ltYWdlYW5kbmFtZSc7XG4gICAgICAgICAgICBpbWFnZUFuZE5hbWVEaXYuYXBwZW5kKG5hbWUpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVja0Rlc2NyaXB0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZGVja0Rlc2NyaXB0aW9uUGFyYWdyYXBoLmlubmVyVGV4dCA9IGRlY2suZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgIGNvbnN0IHN0dWR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdHVkeUJ1dHRvbi5pbm5lclRleHQgPSAnU3R1ZHknO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL3RoaXMgaXMgY29sbGlkaW5nIHdpdGggdGhlIG5hbWUgZm9yIG15IG1vYmlsZSBuYXYgYnV0dG9uXG4gICAgICAgICAgICAvLyBzdHVkeUJ1dHRvbi5pZCA9ICdzdHVkeWJ1dHRvbic7XG4gICAgICAgICAgICAvLyBzdHVkeUJ1dHRvbi5jbGFzc05hbWUgPSAnc3R1ZHlidXR0b24nO1xuICAgICAgICAgICAgc3R1ZHlCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVNYWluVGFnQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc3RhcnRTdHVkeVNlc3Npb24oZGVjayk7XG4gICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVja0Rlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrRGVzY3JpcHRpb25EaXYuY2xhc3NOYW1lID0gJ2RlY2tkZXNjcmlwdGlvbmRpdic7XG4gICAgICAgICAgICBkZWNrRGVzY3JpcHRpb25EaXYuYXBwZW5kKGRlY2tEZXNjcmlwdGlvblBhcmFncmFwaCwgZHVlRGF0ZVBhcmFncmFwaEVsZW1lbnQsIHN0dWR5QnV0dG9uKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlY2tEaXYuY2xhc3NOYW1lID0gJ2RlY2snO1xuICAgICAgICAgICAgZGVja0Rpdi5hcHBlbmQoaW1hZ2VBbmROYW1lRGl2LCBkZWNrRGVzY3JpcHRpb25EaXYpO1xuICAgICAgICAgICAgcmV0dXJuIGRlY2tEaXY7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVuZGVyUGFnZSxcbiAgICAgICAgICAgIHVwZGF0ZURlY2tEaXNwbGF5LFxuICAgICAgICAgICAgcmVuZGVyU3R1ZHlTZXNzaW9uLFxuICAgICAgICAgICAgdXBkYXRlU3R1ZHlDYXJkLFxuICAgICAgICAgICAgcmVuZGVyU3R1ZHlDYXJkU2lkZSxcbiAgICAgICAgICAgIHJlbmRlclN0dWR5U2Vzc2lvbkNvbXBsZXRlLFxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBvdmVydmlld1BhZ2UgPSAoZnVuY3Rpb24oKXtcblxuICAgICAgICBPYnNlcnZhYmxlLnN1YnNjcmliZSgnVXBkYXRlT3ZlcnZpZXdEYXRhJywgdXBkYXRlRGVsZXRlRGVja09wdGlvbnMpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlclBhZ2UoKSB7XG4gICAgICAgICAgICByZW5kZXJNb2RhbCgpO1xuICAgICAgICAgICAgY29uc3Qgb3ZlcnZpZXdTZWN0aW9uID0gcmVuZGVyT3ZlcnZpZXdTZWN0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nc1NlY3Rpb24gPSByZW5kZXJTZXR0aW5nc1NlY3Rpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5U3BhY2VXaXRoTW9iaWxlTmF2SGVpZ2h0ID0gZ2V0RW1wdHlEaXZGb3JFeHRyYVBhZ2VTcGFjZUF0Qm90dG9tV2l0aE1vYmlsZU5hdkhlaWdodCgpO1xuICAgIFxuICAgICAgICAgICAgbWFpbi5hcHBlbmQob3ZlcnZpZXdTZWN0aW9uLCBzZXR0aW5nc1NlY3Rpb24sIGVtcHR5U3BhY2VXaXRoTW9iaWxlTmF2SGVpZ2h0KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJPdmVydmlld1NlY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHJlbmRlclNlY3Rpb25UaXRsZSgnT3ZlcnZpZXcnKTtcbiAgICAgICAgICAgIGNvbnN0IHJvd09mQ2FyZHNEaXYgPSByZW5kZXJPdmVydmlld0NhcmRzKGNvbnRyb2xsZXIuZGF0YS5QYW5lbHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmQodGl0bGUsIHJvd09mQ2FyZHNEaXYpO1xuICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiByZW5kZXJPdmVydmlld0NhcmRzKGNhcmRzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJvd09mQ2FyZHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd09mQ2FyZHNEaXYuY2xhc3NOYW1lID0gJ3Jvd29mY2FyZHMnO1xuICAgICAgICAgICAgcm93T2ZDYXJkc0Rpdi5pZCA9ICdyb3dvZmNhcmRzJztcbiAgICBcbiAgICAgICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkT3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkT3V0ZXJEaXYuY2xhc3NOYW1lID0gJ292ZXJ2aWV3Y2FyZCc7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRJbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gY2FyZC5pbWFnZXNyYztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IGNhcmQudGl0bGU7XG4gICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0aXN0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgc3RhdGlzdGljLmNsYXNzTmFtZSA9IGNhcmQudW5kZXJsaW5lY29sb3I7XG4gICAgICAgICAgICAgICAgc3RhdGlzdGljLmlubmVyVGV4dCA9IGNhcmQuc3RhdGlzdGljO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXJkSW5uZXJEaXYuYXBwZW5kKGltYWdlLCB0aXRsZSk7XG4gICAgICAgICAgICAgICAgY2FyZE91dGVyRGl2LmFwcGVuZChjYXJkSW5uZXJEaXYsIHN0YXRpc3RpYyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHJvd09mQ2FyZHNEaXYuYXBwZW5kQ2hpbGQoY2FyZE91dGVyRGl2KTtcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJvd09mQ2FyZHNEaXY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlT3ZlcnZpZXdDYXJkcygpIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyU2V0dGluZ3NTZWN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NOYW1lID0gJ3NldHRpbmdzc2VjdGlvbic7XG4gICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHJlbmRlclNlY3Rpb25UaXRsZSgnU2V0dGluZ3MnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGVsZXRlRGVja1NlY3Rpb24gPSByZW5kZXJEZWxldGVEZWNrT3B0aW9ucygpO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSByZW5kZXJSZXNldEJ1dHRvbigpO1xuXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZCh0aXRsZSwgZGVsZXRlRGVja1NlY3Rpb24sIHJlc2V0QnV0dG9uKTtcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyRGVsZXRlRGVja09wdGlvbnMoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlY2tzID0gQXJyYXkuZnJvbShjb250cm9sbGVyLmRhdGEubG9jYWxEZWNrcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgZHJvcGRvd25MYWJlbC5odG1sRm9yID0gJ2RlY2tzJztcbiAgICAgICAgICAgIGRyb3Bkb3duTGFiZWwuaW5uZXJUZXh0ID0gJ0Nob29zZSBhIGRlY2sgeW91IHdvdWxkIGxpa2UgdG8gZGVsZXRlJztcblxuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIGRyb3Bkb3duU2VsZWN0Lm5hbWUgPSAnZGVja3MnO1xuICAgICAgICAgICAgZHJvcGRvd25TZWxlY3QuaWQgPSAnZHJvcGRvd25zZWxlY3QnO1xuXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uLmlubmVyVGV4dCA9ICdfX19fX19fX19fXyc7XG4gICAgICAgICAgICBkcm9wZG93blNlbGVjdC5hcHBlbmRDaGlsZChkZWZhdWx0T3B0aW9uKTtcblxuICAgICAgICAgICAgZGVja3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5pZCA9IGl0ZW0ubmFtZSArICdpZCc7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25TZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnZGVja2RlbGV0ZWJ1dHRvbic7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJ0RlbGV0ZSc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlY2sgPSBkcm9wZG93blNlbGVjdC52YWx1ZTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShkZWNrKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWNrICsgJ2lkJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy91cGRhdGUgdGhlIHBhZ2Ugc29tZWhvdz9cblxuICAgICAgICAgICAgY29uc3QgaG9yaXpvbnRhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaG9yaXpvbnRhbERpdi5jbGFzc05hbWUgPSAnaG9yaXpvbnRhbGRpdic7XG4gICAgICAgICAgICBob3Jpem9udGFsRGl2LmFwcGVuZChkcm9wZG93blNlbGVjdCwgZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ2RlY2tkZWxldGVvcHRpb25zJztcbiAgICAgICAgICAgIGRpdi5hcHBlbmQoZHJvcGRvd25MYWJlbCwgaG9yaXpvbnRhbERpdik7XG4gICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGVsZXRlRGVja09wdGlvbnMoKSB7XG4gICAgICAgICAgICBjb25zdCBkcm9wZG93blNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wZG93bnNlbGVjdCcpO1xuICAgICAgICAgICAgY29uc3QgZGVja3MgPSBBcnJheS5mcm9tKGRyb3Bkb3duU2VsZWN0LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsRGVja3MgPSBjb250cm9sbGVyLmRhdGEubG9jYWxEZWNrcztcblxuICAgICAgICAgICAgZGVja3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlICE9ICcnKSB7IGl0ZW0ucmVtb3ZlKCk7IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsb2NhbERlY2tzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uaWQgPSBpdGVtLm5hbWUgKyAnaWQnO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlclJlc2V0QnV0dG9uKCkge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJ0RlbGV0ZSBhbGwgc2F2ZWQgZGF0YSc7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ3Jlc2V0YnV0dG9uJztcbiAgICAgICAgICAgIGJ1dHRvbi5hcmlhTGFiZWwgPSAnQ2xpY2sgaGVyZSB0byBkZWxldGUgYWxsIHNhdmVkIGRhdGEnO1xuICAgICAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hvd1Jlc2V0RGF0YUNvbmZpcm1hdGlvbldpbmRvdygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBidXR0b247XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzaG93UmVzZXREYXRhQ29uZmlybWF0aW9uV2luZG93KCkge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZXNldCB5b3VyIGRhdGE/IFlvdSBjYW5ub3QgdW5kbyB0aGlzIGFjdGlvbiEnKSkge1xuICAgICAgICAgICAgICAgIE9ic2VydmFibGUucHVibGlzaCgnRGF0YVJlc2V0Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgeyByZXR1cm47IH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZW5kZXJQYWdlLFxuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsKCkge1xuXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLmlkID0gJ21vZGFsJztcbiAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsJztcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWxIZWFkZXIgPSByZW5kZXJNb2RhbEhlYWRlcihtb2RhbCk7XG4gICAgICAgIGNvbnN0IG1vZGFsRm9ybSA9IHJlbmRlck1vZGFsRm9ybShtb2RhbCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsQm9keS5jbGFzc05hbWUgPSAnbW9kYWwtYm9keSc7XG4gICAgICAgIG1vZGFsQm9keS5pZCA9ICdtb2RhbC1ib2R5JztcbiAgICAgICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKG1vZGFsRm9ybSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcbiAgICAgICAgbW9kYWxDb250ZW50LmlkID0gJ21vZGFsLWNvbnRlbnQnO1xuICAgICAgICBtb2RhbENvbnRlbnQuYXBwZW5kKG1vZGFsSGVhZGVyLCBtb2RhbEJvZHkpO1xuXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsSGVhZGVyKG1vZGFsKSB7XG5cbiAgICAgICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgICAgICBtb2RhbEhlYWRlci5pbm5lclRleHQgPSAnU3RlcCAxOiBDcmVhdGUgRGVjaydcbiAgICAgICAgbW9kYWxIZWFkZXIuaWQgPSAnbW9kYWxoZWFkZXJoNSc7XG5cbiAgICAgICAgY29uc3QgZXhpdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGV4aXRTcGFuLmlubmVySFRNTCA9ICcmdGltZXM7JztcbiAgICAgICAgZXhpdFNwYW4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9kYWxIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWxIZWFkZXJEaXYuY2xhc3NOYW1lID0gJ21vZGFsLWhlYWRlcic7XG4gICAgICAgIG1vZGFsSGVhZGVyRGl2LmFwcGVuZChtb2RhbEhlYWRlciwgZXhpdFNwYW4pO1xuICAgICAgICByZXR1cm4gbW9kYWxIZWFkZXJEaXY7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsRm9ybSgpIHtcblxuICAgICAgICBjb25zdCBuYW1lSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIG5hbWVJbnB1dExhYmVsLmh0bWxGb3IgPSAnZGVja25hbWUnO1xuICAgICAgICBuYW1lSW5wdXRMYWJlbC5pbm5lclRleHQgPSBgTWF4IDIwIENoYXJhY3RlcnNgO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgbmFtZUlucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMobmFtZUlucHV0LCB7XG4gICAgICAgICAgICAnaWQnOiAnZGVja25hbWUnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ2RlY2tuYW1lJyxcbiAgICAgICAgICAgICduYW1lJzogJ2RlY2tuYW1lJyxcbiAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgJ21heExlbmd0aCc6ICcyMCcsXG4gICAgICAgICAgICAnbWluTGVuZ3RoJzogJzEnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gJ2RlY2tkZXNjcmlwdGlvbic7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gYERlc2NyaXB0aW9uIE1heCA2MCBDaGFyYWN0ZXJzYDtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgc2V0QXR0cmlidXRlcyhkZXNjcmlwdGlvbklucHV0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdpZCc6ICdkZWNrZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICdjbGFzcyc6ICdkZWNrZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ2RlY2tkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgJ3Jvd3MnOiAnOCcsXG4gICAgICAgICAgICAgICAgJ2NvbHMnOiAnMjAnLFxuICAgICAgICAgICAgICAgICdtYXhMZW5ndGgnOiAnNjAnLFxuICAgICAgICAgICAgICAgICdtaW4taGVpZ2h0JzogJzNyZW0nLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSAnZGVja2R1ZWRhdGUnO1xuICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlOic7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgc2V0QXR0cmlidXRlcyhkdWVEYXRlSW5wdXQsIHtcbiAgICAgICAgICAgICdpZCc6ICdkZWNrZHVlZGF0ZScsXG4gICAgICAgICAgICAnbmFtZSc6ICdkZWNrZHVlZGF0ZScsXG4gICAgICAgICAgICAnY2xhc3MnOiAnZGVja2R1ZWRhdGUnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnZGF0ZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjYXRlZ29yeUxhYmVsLmh0bWxGb3IgPSAnZGVja2NhdGVnb3J5JztcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC5pbm5lclRleHQgPSAnQ2F0ZWdvcnknO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKGNhdGVnb3J5U2VsZWN0LCB7XG4gICAgICAgICAgICAnaWQnOiAnZGVja2NhdGVnb3J5JyxcbiAgICAgICAgICAgICduYW1lJzogJ2RlY2tjYXRlZ29yeScsXG4gICAgICAgICAgICAnY2xhc3MnOiAnZGVja2NhdGVnb3J5JyxcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGRlZmF1bHRPcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgZGVmYXVsdE9wdGlvbi5pbm5lclRleHQgPSAnUGxlYXNlIGNob29zZSBhIENhdGVnb3J5JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxhbmd1YWdlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxhbmd1YWdlT3B0aW9uLnZhbHVlID0gJ0xhbmd1YWdlJztcbiAgICAgICAgbGFuZ3VhZ2VPcHRpb24uaW5uZXJUZXh0ID0gJ0xhbmd1YWdlJztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1hdGhPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbWF0aE9wdGlvbi52YWx1ZSA9ICdNYXRoJztcbiAgICAgICAgbWF0aE9wdGlvbi5pbm5lclRleHQgPSAnTWF0aCc7XG5cbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kKGRlZmF1bHRPcHRpb24sIGxhbmd1YWdlT3B0aW9uLCBtYXRoT3B0aW9uKTtcblxuICAgICAgICBjb25zdCBpbnB1dHMgPSBbbmFtZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBkdWVEYXRlSW5wdXQsIGNhdGVnb3J5U2VsZWN0XTtcbiAgICAgICAgY29uc3QgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBmb3JtU3VibWl0QnV0dG9uLmlubmVyVGV4dCA9ICdDcmVhdGUgRGVjayc7XG4gICAgICAgIGZvcm1TdWJtaXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBmb3JtU3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9ICdzdWJtaXRidXR0b24nO1xuXG4gICAgICAgIGNvbnN0IGFkZENhcmRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZENhcmRzQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgQ2FyZHMnO1xuICAgICAgICBhZGRDYXJkc0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGFkZENhcmRzQnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZW5kZXJBZGRDYXJkTW9kYWxCb2R5KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9ybVN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIuaGFuZGxlRGVja0NyZWF0aW9uRm9ybSk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc05hbWUgPSAnbW9kYWwtZm9ybSc7XG4gICAgICAgIGZvcm0uaWQgPSAnbW9kYWwtZm9ybSc7XG4gICAgICAgIGZvcm0uYXBwZW5kKFxuICAgICAgICAgICAgbmFtZUlucHV0TGFiZWwsIG5hbWVJbnB1dCwgXG4gICAgICAgICAgICBjYXRlZ29yeUxhYmVsLCBjYXRlZ29yeVNlbGVjdCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgICAgICAgICBkdWVEYXRlTGFiZWwsIGR1ZURhdGVJbnB1dCxcbiAgICAgICAgICAgIGZvcm1TdWJtaXRCdXR0b24pO1xuICAgICAgICByZXR1cm4gZm9ybTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0TW9kYWxBdXRvZm9jdXMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYm9keScpO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXh0ID0gbW9kYWxib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdIHx8IG1vZGFsYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcbiAgICAgICAgICAgIGZpcnN0VGV4dC5mb2N1cygpO1xuICAgICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckFkZENhcmRNb2RhbEJvZHkobmV3RGVjaykge1xuICAgICAgICByZW1vdmVNb2RhbENvbnRlbnQoKTtcbiAgICAgICAgcmVuZGVyTW9kYWxBZGRDYXJkSW5wdXQobmV3RGVjayk7XG4gICAgICAgIHJlbmRlck1vZGFsQWRkQ2FyZElucHV0SGVhZGVyKCk7XG4gICAgICAgIHNldE1vZGFsQXV0b2ZvY3VzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRNb2RhbCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJykucmVtb3ZlKCk7XG4gICAgICAgIHJlbmRlck1vZGFsKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsQWRkQ2FyZElucHV0KG5ld0RlY2spIHtcblxuICAgICAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYm9keScpO1xuXG4gICAgICAgIGNvbnN0IGNhcmRDb3VudEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY2FyZENvdW50SDMuaW5uZXJUZXh0ID0gYENhcmQ6ICR7bmV3RGVjay5jYXJkQ291bnQgKyAxfWA7XG4gICAgICAgIGNhcmRDb3VudEgzLmNsYXNzTmFtZSA9ICdjYXJkY291bnRoMyc7XG5cbiAgICAgICAgY29uc3QgZGVja05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBkZWNrTmFtZS5pbm5lclRleHQgPSBuZXdEZWNrLm5hbWU7XG5cbiAgICAgICAgY29uc3QgbmV3Q2FyZFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0NhcmRUaXRsZURpdi5jbGFzc05hbWUgPSAnbmV3Y2FyZHRpdGxlZGl2JztcbiAgICAgICAgbmV3Q2FyZFRpdGxlRGl2LmFwcGVuZChjYXJkQ291bnRIMywgZGVja05hbWUpO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBxdWVzdGlvbkxhYmVsLmh0bWxGb3IgPSAncXVlc3Rpb25pbnB1dCc7XG4gICAgICAgIHF1ZXN0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ1F1ZXN0aW9uOic7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBxdWVzdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgcXVlc3Rpb25JbnB1dC5uYW1lID0gJ3F1ZXN0aW9uaW5wdXQnO1xuICAgICAgICBxdWVzdGlvbklucHV0LmlkID0gJ3F1ZXN0aW9uaW5wdXQnO1xuICAgICAgICBxdWVzdGlvbklucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgICAgIHF1ZXN0aW9uSW5wdXQubWF4TGVuZ3RoID0gMzAwO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHF1ZXN0aW9uRGl2LmNsYXNzTmFtZSA9ICdxdWVzdGlvbmRpdic7XG4gICAgICAgIHF1ZXN0aW9uRGl2LmFwcGVuZChxdWVzdGlvbkxhYmVsLCBxdWVzdGlvbklucHV0KTtcblxuICAgICAgICBjb25zdCBhbnN3ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGFuc3dlckxhYmVsLmh0bWxGb3IgPSAnYW5zd2VyaW5wdXQnO1xuICAgICAgICBhbnN3ZXJMYWJlbC5pbm5lclRleHQgPSAnQW5zd2VyOidcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFuc3dlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgYW5zd2VySW5wdXQubmFtZSA9ICdhbnN3ZXJpbnB1dCc7XG4gICAgICAgIGFuc3dlcklucHV0LmlkID0gJ2Fuc3dlcmlucHV0JztcbiAgICAgICAgYW5zd2VySW5wdXQubWluTGVuZ3RoID0gMTtcbiAgICAgICAgYW5zd2VySW5wdXQubWF4TGVuZ3RoID0gMzAwO1xuXG4gICAgICAgIGNvbnN0IGFuc3dlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhbnN3ZXJEaXYuY2xhc3NOYW1lID0gJ2Fuc3dlcmRpdic7XG4gICAgICAgIGFuc3dlckRpdi5hcHBlbmQoYW5zd2VyTGFiZWwsIGFuc3dlcklucHV0KTtcblxuICAgICAgICBjb25zdCBtb2RhbENhcmRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBtb2RhbENhcmRGb3JtLmlkID0gJ21vZGFsLWNhcmQtZm9ybSc7XG4gICAgICAgIG1vZGFsQ2FyZEZvcm0uYXBwZW5kKHF1ZXN0aW9uRGl2LCBhbnN3ZXJEaXYpO1xuXG4gICAgICAgIGNvbnN0IHVzZXJPcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHVzZXJPcHRpb25zRGl2LmNsYXNzTmFtZSA9ICd1c2Vyb3B0aW9uc2Rpdic7XG5cbiAgICAgICAgY29uc3QgYWRkTmV4dENhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkTmV4dENhcmRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBOZXh0IENhcmQnO1xuICAgICAgICBhZGROZXh0Q2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlQWRkQ2FyZHNGb3JtKG5ld0RlY2ssICdhZGRtb3JlJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmluaXNoQWRkaW5nQ2FyZHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZmluaXNoQWRkaW5nQ2FyZHNCdXR0b24uaW5uZXJUZXh0ID0gJ0RvbmUgQWRkaW5nIENhcmRzJztcbiAgICAgICAgZmluaXNoQWRkaW5nQ2FyZHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmhhbmRsZUFkZENhcmRzRm9ybShuZXdEZWNrLCAnZG9uZWFkZGluZycpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVzZXJPcHRpb25zRGl2LmFwcGVuZChhZGROZXh0Q2FyZEJ1dHRvbiwgZmluaXNoQWRkaW5nQ2FyZHNCdXR0b24pO1xuXG4gICAgICAgIG1vZGFsQm9keS5hcHBlbmQobmV3Q2FyZFRpdGxlRGl2LCBtb2RhbENhcmRGb3JtLCB1c2VyT3B0aW9uc0Rpdik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTW9kYWxBZGRDYXJkSW5wdXRIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsaGVhZGVyaDUnKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1N0ZXAgMjogQWRkIENhcmRzJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVNb2RhbENvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1ib2R5Jyk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShtb2RhbEJvZHkuY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVzZXRGb3JtKGZvcm0pIHtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclBhZ2UobmV3UGFnZUlEKSB7XG4gICAgICAgIHJlbW92ZU1haW5UYWdDb250ZW50KCk7XG4gICAgICAgIHN3aXRjaCAobmV3UGFnZUlEKSB7XG4gICAgICAgICAgICBjYXNlICdzdHVkeWJ1dHRvbic6XG4gICAgICAgICAgICAgICAgc3R1ZHlQYWdlLnJlbmRlclBhZ2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnb3ZlcnZpZXdidXR0b24nOlxuICAgICAgICAgICAgICAgIG92ZXJ2aWV3UGFnZS5yZW5kZXJQYWdlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlVGFiQ29sb3IobmV3UGFnZUlEKSB7XG4gICAgICAgIHZpZXcubW9iaWxlTmF2QnV0dG9ucy5mb3JFYWNoKChuYXZUYWIpID0+IHtcbiAgICAgICAgICAgIGlmICggbmF2VGFiLmlkID09PSBuZXdQYWdlSUQpIHtcbiAgICAgICAgICAgICAgICBuYXZUYWIuc3R5bGUuYm9yZGVyVG9wID0gJzFweCBzb2xpZCBibHVlJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtuYXZUYWIuaWR9aDNgKS5zdHlsZS5jb2xvciA9ICdibHVlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5hdlRhYi5zdHlsZS5ib3JkZXJUb3AgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bmF2VGFiLmlkfWgzYCkuc3R5bGUuY29sb3IgPSAnZ3JleSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckJhbm5lcigpIHtcbiAgICAgICAgYWRkQmFubmVyQnV0dG9uRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICBtYWtlTmV3QWRkRGVja0J1dHRvbldvcmsoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyU2VjdGlvblRpdGxlKHRpdGxlTmFtZSkge1xuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGgxLmlubmVyVGV4dCA9IHRpdGxlTmFtZTtcbiAgICAgICAgaDEuaWQgPSB0aXRsZU5hbWUuc2xpY2UoKS50b0xvd2VyQ2FzZSgpICsgJ3RpdGxlJztcbiAgICAgICAgcmV0dXJuIGgxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEJhbm5lckJ1dHRvbkZ1bmN0aW9uYWxpdHkoKSB7XG4gICAgICAgIGNvbnN0IGJhbm5lckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYW5uZXJidXR0b24nKTtcbiAgICAgICAgYmFubmVyQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgICAgICAgbWVudS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZG9jdW1lbnQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghYmFubmVyQnV0dG9uLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VOZXdBZGREZWNrQnV0dG9uV29yaygpIHtcbiAgICAgICAgY29uc3QgYnV0dHR0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZWJ1dHR0dG9uJyk7XG4gICAgICAgIGJ1dHR0dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgc2V0TW9kYWxBdXRvZm9jdXMoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZU1haW5UYWdDb250ZW50KCkge1xuICAgICAgICBjb25zdCBtYWluQ2hpbGRyZW4gPSBBcnJheS5mcm9tKG1haW4uY2hpbGRyZW4pO1xuICAgICAgICBtYWluQ2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xufTtcblxuICAgIGZ1bmN0aW9uIGdldEVtcHR5RGl2Rm9yRXh0cmFQYWdlU3BhY2VBdEJvdHRvbVdpdGhNb2JpbGVOYXZIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IG1vYmlsZU5hdkhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGVuYXYnKS5vZmZzZXRIZWlnaHQudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgZW1wdHlTcGFjZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbXB0eVNwYWNlRGl2LnN0eWxlLmhlaWdodCA9IGAke21vYmlsZU5hdkhlaWdodH1weGA7XG4gICAgICAgIHJldHVybiBlbXB0eVNwYWNlRGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vYmlsZU5hdmlnYXRpb24gKCkge1xuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAgICAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XG5cbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgICAgIG5hdi5jbGFzc05hbWUgPSAnbW9iaWxlbmF2JztcbiAgICAgICAgbmF2LmlkID0gJ21vYmlsZW5hdic7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdHVkeUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHN0dWR5SW1hZ2Uuc3JjID0gU3R1ZHlJY29uO1xuICAgICAgICBzdHVkeUltYWdlLmFsdCA9ICdDbGljayBoZXJlIHRvIGFjY2VzcyB0aGUgc3R1ZHkgc2VjdGlvbic7XG5cbiAgICAgICAgY29uc3Qgc3R1ZHlIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHN0dWR5SDMuaWQgPSAnc3R1ZHlidXR0b25oMydcbiAgICAgICAgc3R1ZHlIMy5pbm5lclRleHQgPSAnU3R1ZHknO1xuXG4gICAgICAgIGNvbnN0IHN0dWR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN0dWR5QnV0dG9uLmlkID0gJ3N0dWR5YnV0dG9uJztcbiAgICAgICAgc3R1ZHlCdXR0b24uYXBwZW5kKHN0dWR5SW1hZ2UsIHN0dWR5SDMpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBvdmVydmlld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIG92ZXJ2aWV3SW1hZ2Uuc3JjID0gT3ZlcnZpZXdJY29uO1xuICAgICAgICBvdmVydmlld0ltYWdlLmFsdCA9ICdDbGljayBoZXJlIHRvIGFjY2VzcyB0aGUgc3R1ZHkgc2VjdGlvbic7XG5cbiAgICAgICAgY29uc3Qgb3ZlcnZpZXdIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG92ZXJ2aWV3SDMuaWQgPSAnb3ZlcnZpZXdidXR0b25oMydcbiAgICAgICAgb3ZlcnZpZXdIMy5pbm5lclRleHQgPSAnT3ZlcnZpZXcnO1xuXG4gICAgICAgIGNvbnN0IG92ZXJ2aWV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG92ZXJ2aWV3QnV0dG9uLmlkID0gJ292ZXJ2aWV3YnV0dG9uJztcbiAgICAgICAgb3ZlcnZpZXdCdXR0b24uYXBwZW5kKG92ZXJ2aWV3SW1hZ2UsIG92ZXJ2aWV3SDMpXG5cbiAgICAgICAgbmF2LmFwcGVuZChzdHVkeUJ1dHRvbiwgb3ZlcnZpZXdCdXR0b24pO1xuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1vYmlsZU5hdkJ1dHRvbnMoKSB7XG4gICAgICAgIHZpZXcubW9iaWxlTmF2QnV0dG9ucyA9IEFycmF5LmZyb20oW1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0dWR5YnV0dG9uJyksXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcnZpZXdidXR0b24nKSxcbiAgICAgICAgICAgIF0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE1vYmlsZU5hdkV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB2aWV3Lm1vYmlsZU5hdkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYWJJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgICAgIHJlbW92ZU1haW5UYWdDb250ZW50KCk7XG4gICAgICAgICAgICBjaGFuZ2VUYWJDb2xvcihjdXJyZW50VGFiSUQpO1xuICAgICAgICAgICAgY29udHJvbGxlci5jaGFuZ2VQYWdlKGN1cnJlbnRUYWJJRCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyRGVmYXVsdFZpZXcoZGVmYXVsdFRhYklEKSB7XG4gICAgICAgIHJlbmRlck1vYmlsZU5hdmlnYXRpb24oKTtcbiAgICAgICAgdXBkYXRlTW9iaWxlTmF2QnV0dG9ucygpO1xuICAgICAgICBhZGRNb2JpbGVOYXZFdmVudExpc3RlbmVycygpO1xuICAgICAgICByZW5kZXJCYW5uZXIoKTtcbiAgICAgICAgcmVuZGVyUGFnZShkZWZhdWx0VGFiSUQpXG4gICAgICAgIGNoYW5nZVRhYkNvbG9yKGRlZmF1bHRUYWJJRCk7XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gcmVuZGVyQmFubmVyKCkge1xuXG4gICAgLy8gICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwYXRoJyk7XG4gICAgLy8gICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgJ00xMiA2VjE4TTYgMTJIMTgnKTtcbiAgICAvLyAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdjdXJyZW50Q29sb3InKTtcbiAgICAvLyAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcyJyk7XG4gICAgLy8gICAgIHBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xuICAgIC8vICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XG5cbiAgICAvLyAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAvLyAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzQwcHgnKTtcbiAgICAvLyAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnNDBweCcpO1xuICAgIC8vICAgICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgIC8vICAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG5cbiAgICAvLyAgICAgY29uc3QgYWRkRGVja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vICAgICBhZGREZWNrQnV0dG9uLmlkID0gJ2Jhbm5lcmJ1dHRvbic7XG4gICAgLy8gICAgIGFkZERlY2tCdXR0b24uYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAgIC8vICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgLy8gICAgIHRpdGxlLmlubmVyVGV4dCA9ICdTdHVkeSBEZWNrcyc7XG5cbiAgICAvLyAgICAgY29uc3QgaW5uZXJIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgICAgaW5uZXJIZWFkZXJEaXYuY2xhc3NOYW1lID0gJ2lubmVyaGVhZGVyZGl2JztcbiAgICAvLyAgICAgaW5uZXJIZWFkZXJEaXYuYXBwZW5kKHRpdGxlLCBhZGREZWNrQnV0dG9uKTtcblxuICAgIC8vICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5oZWFkZXInKTtcbiAgICAvLyAgICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChpbm5lckhlYWRlckRpdik7XG5cbiAgICAvLyB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdHVkeVBhZ2UsXG4gICAgICAgIHJlc2V0TW9kYWwsXG4gICAgICAgIGhpZGVNb2RhbCxcbiAgICAgICAgcmVzZXRGb3JtLFxuICAgICAgICByZW5kZXJQYWdlLFxuICAgICAgICByZW5kZXJEZWZhdWx0VmlldyxcbiAgICAgICAgcmVtb3ZlTWFpblRhZ0NvbnRlbnQsXG4gICAgICAgIHJlbmRlckFkZENhcmRNb2RhbEJvZHksXG4gICAgICAgIH07XG59KSgpO1xuXG4vL1NpZGUtYmFyIE5hdlxuXG4vL3RlbXBvcmFyaWx5IGFkZGluZyBtZW51IGV2ZW50IGxpc3RlbmVycyBoZXJlXG4vL1RoZXNlIGFyZSB0aGUgZXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgbGVmdCBzbGlkZS1pbiBuYXZiYXJcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJ2aWV3b3B0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7ICAgIFxuLy8gICAgIHJlbW92ZU1haW5UYWdDb250ZW50KCk7XG4vLyAgICAgcmVuZGVyKClcbi8vICAgICB0b2dnbGVOYXYoKTtcbi8vIH0pO1xuXG5cbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRkZWNrb3B0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgcmVtb3ZlTWFpblRhZ0NvbnRlbnQoKTtcbi8vICAgICBSZW5kZXIoKTtcbi8vICAgICB0b2dnbGVOYXYoKTtcbi8vIH0pO1xuXG4vLyBmdW5jdGlvbiB0b2dnbGVOYXYoKSB7XG4vLyAgICAgY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteVNpZGVuYXYnKTtcbi8vICAgICBzaWRlTmF2LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuLy8gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgJy4uL3Njc3MvY3NzL3N0eWxlLmNzcyc7XG5jb250cm9sbGVyLnN0YXJ0QXBwbGljYXRpb24oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=