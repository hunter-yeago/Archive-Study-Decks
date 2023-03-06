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
___CSS_LOADER_EXPORT___.push([module.id, "/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=list],\nol[role=list] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 3rem;\n  left: 0;\n  top: 0;\n  width: 100%;\n  color: black;\n}\n\n.modal-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 5px;\n  position: relative;\n  margin: auto;\n  border: 1px solid #888;\n  width: min(30rem, 85%);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0.8rem;\n  width: 100%;\n  border-bottom: 1px solid lightgrey;\n}\n.modal-header h5 {\n  font-size: 1.25rem;\n  font-weight: 550;\n}\n.modal-header span {\n  color: #aaa;\n  font-size: 1.75rem;\n  font-weight: bold;\n}\n.modal-header span:hover,\n.modal-header span:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-body {\n  padding: 0.15rem 0.7rem;\n  margin: 0.5rem 0 1rem 0;\n  width: 90%;\n}\n.modal-body form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n}\n.modal-body textarea {\n  resize: none;\n  min-height: 3.5rem;\n  max-height: 12rem;\n}\n\n.deckname,\n.deckcategory,\n.deckduedate,\n.deckdescription {\n  padding: 0.2em;\n}\n\n.deckdescription {\n  width: 100%;\n  height: 5rem;\n  resize: none;\n}\n\n.disabledinputtag {\n  position: relative;\n  bottom: 40px;\n  left: 195px;\n  color: grey;\n  padding: 0 0 0 0.5em;\n  pointer-events: none;\n}\n\n.invalid {\n  border: 0.125rem solid red;\n}\n\n.submitbutton {\n  width: 50%;\n  margin-left: auto;\n  padding: 0.1em;\n}\n\n.questiondiv,\n.answerdiv {\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n  margin-bottom: 0.5em;\n}\n\n.useroptionsdiv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.3em;\n  margin-top: 2em;\n}\n.useroptionsdiv button {\n  font-size: 0.9em;\n  padding: 0.3em;\n  margin: 0.2em;\n}\n\n.newcardtitlediv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0.2em 0.5em 0.5em 0.5em;\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.deckdisplay {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1em;\n  margin: 0.5em;\n}\n\n.deck {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0rem 0.5rem;\n  border-radius: 0.5em;\n  min-width: 90%;\n  min-height: 8em;\n  background-color: #2e3856;\n  font-size: clamp(1rem, 5.5vw, 1.1rem);\n}\n\n.deckimageandname {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-right: 1px solid #ffcd1e;\n  margin: 0.7em 0 0.7em 1em;\n  padding-right: 1em;\n  gap: 0.5rem;\n}\n.deckimageandname button {\n  padding: 0.2em;\n}\n.deckimageandname h3 {\n  font-size: 1rem;\n}\n.deckimageandname p {\n  color: rgba(253, 253, 253, 0.681);\n  font-size: 0.9rem;\n}\n\n.deckdescriptiondiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-width: 70%;\n  margin: 0.7em 0;\n}\n.deckdescriptiondiv p {\n  padding: 0.5em;\n  text-align: center;\n}\n.deckdescriptiondiv :nth-child(2) {\n  color: rgba(253, 253, 253, 0.681);\n  font-size: 0.9rem;\n}\n\n.itsemptymessage {\n  text-align: center;\n  padding: 1em;\n}\n\n.rowofcards {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(0.5em, 3.5vw, 2em);\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: clamp(0.3em, 2vw, 1.5em);\n}\n\n.overviewflexboxdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 0.3em;\n}\n\n.overviewcard {\n  border: 1px solid lightgrey;\n  color: black;\n  border-radius: 5px;\n  background-color: white;\n  text-align: center;\n  padding: 0.3em;\n  padding: clamp(0.3em, 2vw, 1em);\n}\n.overviewcard div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.3rem;\n  padding-top: 0.5rem;\n}\n.overviewcard img {\n  width: clamp(1.6rem, 3.5vw, 2rem);\n}\n.overviewcard h3 {\n  font-size: clamp(0.9rem, 3.5vw, 1.1rem);\n}\n.overviewcard p {\n  font-size: clamp(1.3rem, 5.5vw, 2rem);\n  padding-bottom: 0.5rem;\n  text-decoration: underline;\n  text-decoration-thickness: 0.12rem;\n  text-underline-offset: 5px;\n}\n\n.greencardunderline {\n  text-decoration-color: #34C381 !important;\n}\n\n.bluecardunderline {\n  text-decoration-color: #046FC6 !important;\n}\n\n.brickcardunderline {\n  text-decoration-color: #ED6D47 !important;\n}\n\n.sunshinecardunderline {\n  text-decoration-color: #FFBA17 !important;\n}\n\n.settingssection select {\n  padding: 0.3em;\n}\n\n.deckdeleteoptions {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.deletedeckdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1em;\n}\n.deletedeckdiv button {\n  padding: 0.1em;\n}\n\n.resetbutton {\n  display: block;\n  margin: 1rem auto auto auto;\n  color: red;\n  border: 1px solid red;\n  padding: 0.2em;\n}\n\n.innerheaderdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 0 1.5rem 0;\n  border-bottom: 1px solid #282e3e;\n}\n.innerheaderdiv h1 {\n  border-bottom: 1px solid #ffcd1e;\n}\n\n.containerdiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nsvg {\n  width: 2.5rem;\n  height: 2.5rem;\n}\nsvg path {\n  stroke: white;\n  stroke-width: 2px;\n  stroke-linecap: round;\n}\n\n.bannerbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  height: 2.4rem;\n  width: 2.4rem;\n  padding: 0em;\n  border-radius: 50%;\n  background-color: #4255ff;\n}\n\n.bannerbutton:hover {\n  background-color: #423ed9;\n}\n\n.menu {\n  position: absolute;\n  display: none;\n  margin-top: 3em;\n}\n.menu button {\n  min-width: 8rem;\n  padding: 0.7em;\n  background-color: #0a082d;\n  color: white;\n  border: 1px solid #282e3e;\n  border-radius: 0.3rem;\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n.menu button:hover {\n  background-color: #0a082d;\n  opacity: 0.9;\n}\n\n.menu.show {\n  display: block;\n}\n\n.nav-right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 8rem;\n}\n.nav-right p {\n  width: 100%;\n}\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgb(246, 246, 246);\n  overflow-x: hidden;\n  margin-top: 42.3px;\n  transition: 0.3s;\n}\n\n.sidenav.active {\n  width: 15rem;\n}\n\n.sidenavinnerdiv {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 0 0 2rem;\n}\n.sidenavinnerdiv a {\n  padding: 0.3rem 0.5rem 0.4rem 1rem;\n  margin-right: 1.5rem;\n  text-decoration: none;\n  font-size: 1.1rem;\n  color: black;\n  display: block;\n  transition: 0.2 0.5s;\n}\n.sidenavinnerdiv li {\n  list-style: none;\n  white-space: nowrap;\n}\n.sidenavinnerdiv li:hover {\n  background-color: white;\n}\n\n.studycarddiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 1em;\n}\n.studycarddiv div {\n  flex-direction: column;\n  padding: 0.5em;\n  min-width: 50%;\n  min-height: 5rem;\n}\n.studycarddiv p {\n  text-align: center;\n}\n\n.inactive {\n  background-color: rgba(121, 121, 121, 0.9);\n  pointer-events: none;\n  border-color: rgba(121, 121, 121, 0.9);\n}\n\n.numberofcards {\n  margin-bottom: 3em;\n}\n\n.studydiv {\n  margin: 0 1.2em 0 1.2em;\n}\n.studydiv h1 {\n  margin-top: 0.5 em;\n  font-size: 1.8rem;\n}\n\n.flip-card {\n  background-color: transparent;\n  border-radius: 25% 10%;\n  width: clamp(18.75rem, 30vw, 25rem);\n  height: clamp(18.75rem, 30vw, 25rem);\n  perspective: 1000px;\n}\n\n.flip-card-inner {\n  width: clamp(18.75rem, 30vw, 25rem);\n  height: clamp(18.75rem, 30vw, 25rem);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 25% 10%;\n  cursor: pointer;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.4s;\n  transform-style: preserve-3d;\n}\n\n.flip-card-inner.activated {\n  transform: rotateY(180deg);\n}\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.flip-card-front {\n  width: clamp(18.75rem, 30vw, 25rem);\n  height: clamp(18.75rem, 30vw, 25rem);\n  border: 2px solid #ffcd1e;\n  border-radius: 25% 10%;\n  background-color: #bbb;\n  color: black;\n}\n\n.flip-card-back {\n  width: clamp(18.75rem, 30vw, 25rem);\n  height: clamp(18.75rem, 30vw, 25rem);\n  border: 2px solid #ffcd1e;\n  border-radius: 25% 10%;\n  background-color: #2980b9;\n  color: white;\n  transform: rotateY(180deg);\n}\n\n.buttonsspan {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  margin: 1em;\n}\n.buttonsspan button {\n  padding: clamp(0.3rem, 2.5vw, 0.7rem);\n}\n\n.congratsdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 3em;\n  margin: 3em 1em 1em 1em;\n}\n.congratsdiv button {\n  padding: 0.2em;\n}\n\n@media (min-width: 800px) {\n  .rowofcards {\n    display: flex;\n    justify-content: flex-start;\n    gap: 0.7em;\n  }\n  .deckdisplay {\n    width: 80vw;\n    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  }\n  .deck {\n    min-height: 11em;\n  }\n}\nhtml,\nbody {\n  background-color: #0a082d;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.6;\n  color: white;\n}\n\nmain {\n  border-top: 1px solid black;\n  min-height: fit-content;\n  margin-bottom: 3rem;\n}\n\n.mobilenav {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  border: 1px solid grey;\n  min-height: 4rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.mobilenav img {\n  width: 2rem;\n  pointer-events: none;\n}\n.mobilenav button {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.2rem;\n  gap: 0.5rem;\n}\n.mobilenav h3 {\n  font-size: 0.9rem;\n  color: grey;\n  pointer-events: none;\n}\n\nsection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 0.5em clamp(0.2em, 2vw, 1.5em);\n}\nsection h1 {\n  text-align: left;\n  padding: 0.5rem;\n  font-size: clamp(1.6rem, 2vw, 3.5rem);\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./src/scss/_reset.scss","webpack://./src/scss/css/style.css","webpack://./src/scss/_modal.scss","webpack://./src/scss/_mixins.scss","webpack://./src/scss/_yourdecks.scss","webpack://./src/scss/_config.scss","webpack://./src/scss/_overview.scss","webpack://./src/scss/_decksettings.scss","webpack://./src/scss/_banner.scss","webpack://./src/scss/_sidenav.scss","webpack://./src/scss/_studysession.scss","webpack://./src/scss/_breakpoint.scss","webpack://./src/scss/style.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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






// TODO No way to leave Study Session early
// TODO theres a bug that always pops up at the end of my study sessions, although it doesn't breeak the app
// TODO still have that bug with it saying its not in the future just because the monthe isn't further!
// TODO CLEAN
// TODO ReadMe

const controller = (function(){
    _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.subscribe('DataReset', resetDataAndView);
    const data = {
        preBuiltDecks: _prebuiltdecks__WEBPACK_IMPORTED_MODULE_3__.preBuiltDecks,
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
        _view__WEBPACK_IMPORTED_MODULE_1__.view.renderPage();
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
            _view__WEBPACK_IMPORTED_MODULE_1__.view.resetForm(form);
            _model__WEBPACK_IMPORTED_MODULE_0__.model.validators.resetInputValidity(validators);
            _view__WEBPACK_IMPORTED_MODULE_1__.view.renderAddCardModalBody(newDeck);
            _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.publish('DecksUpdated', data.localDecks);
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
            _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.publish('UpdateOverviewData', data.Panels);
            
            if (status === 'addmore') {
                _view__WEBPACK_IMPORTED_MODULE_1__.view.renderAddCardModalBody(deckCopy);
            } else if (status === 'doneadding') {
                _view__WEBPACK_IMPORTED_MODULE_1__.view.hideModal();
                _view__WEBPACK_IMPORTED_MODULE_1__.view.resetModal();
            }
        };
    };

    function resetDataAndView() {
        _model__WEBPACK_IMPORTED_MODULE_0__.model.clearLocalStorage();
        data.Update();
        _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.publish('DecksUpdated', data.localDecks);
        _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.publish('UpdateOverviewData', data.Panels);
    };

    function startStudySession(deck) {
        _view__WEBPACK_IMPORTED_MODULE_1__.view.renderStudySession(deck);
    }

    function showNextStudyCard(deck, operation) {

        if (operation === 'shownext') {
            if (deck.currentCard + 1 === deck.cards.length) {
                _model__WEBPACK_IMPORTED_MODULE_0__.model.updateCurrentCard(deck, 'reset');
                _view__WEBPACK_IMPORTED_MODULE_1__.view.removeMainTagContent();
                _view__WEBPACK_IMPORTED_MODULE_1__.view.renderStudySessionComplete(deck);
                _model__WEBPACK_IMPORTED_MODULE_0__.model.incrementUserData('decksStudied');
                _model__WEBPACK_IMPORTED_MODULE_0__.model.incrementUserData('cardsStudied');
                
            } else {
                _model__WEBPACK_IMPORTED_MODULE_0__.model.updateCurrentCard(deck, operation);
                _view__WEBPACK_IMPORTED_MODULE_1__.view.updateStudyCard(deck);
                _model__WEBPACK_IMPORTED_MODULE_0__.model.incrementUserData('cardsStudied');
            }
        } 
        else if (operation === 'showprevious') {
            _model__WEBPACK_IMPORTED_MODULE_0__.model.updateCurrentCard(deck, operation);
            _view__WEBPACK_IMPORTED_MODULE_1__.view.updateStudyCard(deck);
            _model__WEBPACK_IMPORTED_MODULE_0__.model.decrementUserData('cardsStudied');
        }
        data.Update();
    }

    function deleteDeck(deckName) {
        _model__WEBPACK_IMPORTED_MODULE_0__.model.deleteDeckFromLocalStorage(deckName);
    }

    return {
        data,
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
const preBuiltDecks = [frenchDeck, frenchDeck, frenchDeck, frenchDeck];

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
    const main = document.getElementById('main');

    _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.subscribe('DecksUpdated', localDecks => {
        updateDeckDisplay(localDecks);
        updateDeleteDeckOptions(localDecks)
    });
    _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.subscribe('UpdateOverviewData', cardData => {
        updateOverviewCards(cardData);
    });
    
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

        const yourDecksSectionDiv = document.createElement('yourDecksSectionDiv');
        yourDecksSectionDiv.id = 'yourdeckssectiondiv';
        yourDecksSectionDiv.appendChild(deckDisplayDiv);

        if (localDecks.length > 0) {
            localDecks.forEach((deck) => {
                const element = renderDeck(deck);
                deckDisplayDiv.appendChild(element);
            });
        } else {
            const itsEmptyMessage = renderItsEmptyMessage();
            deckDisplayDiv.appendChild(itsEmptyMessage);
            yourDecksSectionDiv.appendChild(itsEmptyMessage);
        }
        return yourDecksSectionDiv;
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
            document.getElementById('mainheader').remove();
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
        const yourDecksSectionDiv = document.getElementById('yourdeckssectiondiv');
        removeDecksFromPage();

        if (localDecks.length > 0) {
            document.getElementById('itsemptymessage').remove();
            localDecks.forEach((deck) => {
                const element = renderDeck(deck);
                deckDisplayDiv.appendChild(element);
            });
        } else {
            const existingItsEmptyMessage = document.getElementById('itsemptymessage');
            if (existingItsEmptyMessage) { document.getElementById('itsemptymessage').remove(); }
            const itsEmptyMessage = renderItsEmptyMessage();
            yourDecksSectionDiv.appendChild(itsEmptyMessage);
        }
    };

    function renderItsEmptyMessage() {
        const itsEmptyMessage = document.createElement('p');
        itsEmptyMessage.id = 'itsemptymessage';
        itsEmptyMessage.className = 'itsemptymessage';
        itsEmptyMessage.innerText = `It's empty in here! Click the blue button above to create a new deck.`;
        return itsEmptyMessage;
    }

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

    function renderOverviewSection() {
        const title = renderSectionTitle('Overview');
        const rowOfCardsDiv = renderOverviewCards(_controller__WEBPACK_IMPORTED_MODULE_1__.controller.data.Panels);
        
        const section = document.createElement('section');
        section.append(title, rowOfCardsDiv);
        return section;
    };
    
    function renderOverviewCards(cards) {

        const row1 = document.createElement('div');
        row1.className = 'overviewflexboxdiv'
        row1.classList.add('flexenddiv');
        const row2 = document.createElement('div');
        row2.className = 'overviewflexboxdiv';

        for (let i = 0; i < cards.length; i++) {

            const cardOuterDiv = document.createElement('div');
            cardOuterDiv.className = 'overviewcard';
    
            const cardInnerDiv = document.createElement('div');
            
            const image = document.createElement('img');
            image.src = cards[i].imagesrc;
    
            const title = document.createElement('h3');
            title.innerText = cards[i].title;
     
            const statistic = document.createElement('p');
            statistic.id = cards[i].underlinecolor;
            statistic.className = cards[i].underlinecolor;
            statistic.innerText = cards[i].statistic;
    
            cardInnerDiv.append(image, title);
            cardOuterDiv.append(cardInnerDiv, statistic);
            
            i % 2 === 0 ? row1.appendChild(cardOuterDiv) : row2.appendChild(cardOuterDiv);
        }

        const rowOfCardsDiv = document.createElement('div');
        rowOfCardsDiv.className = 'rowofcards';
        rowOfCardsDiv.id = 'rowofcards';
        rowOfCardsDiv.append(row1, row2);
        return rowOfCardsDiv;
    };

    function updateOverviewCards(cards) {
        cards.forEach((card) => {
            const overviewCard = document.getElementById(card.underlinecolor);
            overviewCard.innerText = card.statistic;
        });

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
            _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.publish('DecksUpdated', _controller__WEBPACK_IMPORTED_MODULE_1__.controller.data.localDecks);
        };

        const deleteDeckDiv = document.createElement('div');
        deleteDeckDiv.className = 'deletedeckdiv';
        deleteDeckDiv.append(dropdownSelect, deleteButton);

        const div = document.createElement('div');
        div.className = 'deckdeleteoptions';
        div.append(dropdownLabel, deleteDeckDiv);
        return div;
    };

    function updateDeleteDeckOptions(localDecks) {
        const dropdownSelect = document.getElementById('dropdownselect');
        const decks = Array.from(dropdownSelect.children);

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
            if (confirm('Are you sure you want to reset your data? You cannot undo this action!')) {
                _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.publish('DataReset');    
            } else { return; }
        };
        return button;
    };

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
        formSubmitButton.addEventListener('click', _controller__WEBPACK_IMPORTED_MODULE_1__.controller.handleDeckCreationForm);
        const addCardsButton = document.createElement('button');
        addCardsButton.innerText = 'Add Cards';
        addCardsButton.type = 'button';
        addCardsButton.onclick = (event) => {
            event.preventDefault();
            renderAddCardModalBody();
        };

        

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
    };

    function renderAddCardModalBody(newDeck) {
        removeModalContent();
        renderModalAddCardInput(newDeck);
        renderModalAddCardInputHeader();
        setModalAutofocus();
    };

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
    };

    function renderModalAddCardInputHeader() {
        const title = document.getElementById('modalheaderh5');
        title.innerText = 'Step 2: Add Cards';
    };

    function removeModalContent() {
        const modalBody = document.getElementById('modal-body');
        const children = Array.from(modalBody.children);
        children.forEach((child) => {
            child.remove();
        });
    };

    function hideModal() {
        document.getElementById('modal').style.display = 'none';
    };

    function resetForm(form) {
        form.reset();
    };

    function renderSectionTitle(titleName) {
        const h1 = document.createElement('h1');
        h1.innerText = titleName;
        h1.id = titleName.slice().toLowerCase() + 'title';
        return h1;
    };

    function showAddDeckButton() {
        const menu = document.getElementById('menu');
        menu.onclick = () => {
            menu.classList.remove('show');
        };

        const bannerButton = document.getElementById('bannerbutton');
        bannerButton.onclick = () => {
            menu.classList.toggle('show');
        };

        document.onclick = () => {
            if (!bannerButton.contains(event.target)) {
                menu.classList.remove('show');
            }
        }
    };

    function showModal() {
        const addDeckButton = document.getElementById('adddeckbutton');
        addDeckButton.onclick = () => {
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

    function renderPage() {
        removeMainTagContent();
        renderModal();
        renderBanner();
        showAddDeckButton();
        showModal();

        const overviewSection = renderOverviewSection();
        const topDecksSection = renderYourDecks();
        const prebuiltDecksSection = renderPreBuiltDecks();
        const settingsSection = renderSettingsSection()
        main.append(overviewSection,topDecksSection, prebuiltDecksSection, settingsSection);
    };

    function renderBanner() {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute('d', 'M12 6V18M6 12H18');

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.appendChild(path);

        const bannerButton = document.createElement('button');
        bannerButton.id = 'bannerbutton';
        bannerButton.className = 'bannerbutton';
        bannerButton.appendChild(svg);

        const siteTitle = document.createElement('h1');
        siteTitle.className = 'sitetitle';
        siteTitle.innerText = 'Study Decks';

        const button = document.createElement('button');
        button.id = 'adddeckbutton';
        button.textContent = 'Add a Deck';

        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu');
        menuDiv.id = 'menu';
        menuDiv.appendChild(button);

        const containerDiv = document.createElement('div');
        containerDiv.id = 'containerdiv';
        containerDiv.className = 'containerdiv';
        containerDiv.append(menuDiv, bannerButton);

        const innerHeaderDiv = document.createElement('div');
        innerHeaderDiv.className = 'innerheaderdiv';
        innerHeaderDiv.append(siteTitle, containerDiv);

        const mainHeader = document.createElement('header');
        mainHeader.id = 'mainheader';
        mainHeader.appendChild(innerHeaderDiv);

        const body = document.getElementsByTagName("body")[0];
        body.insertBefore(mainHeader, body.firstChild);
    }

    return {
        resetModal,
        hideModal,
        resetForm,
        renderPage,
        renderStudySession,
        renderStudySessionComplete,
        updateStudyCard,
        removeMainTagContent,
        renderAddCardModalBody,
        };
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxhQUFhLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxhQUFhLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFX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QUFzQjtBQUMvRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBNkI7QUFDekMsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNFQUE2QjtBQUN6QyxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaHhCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7OztBQ0EwQztBQUNYO0FBQy9CLG9FQUEyQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3NzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRnV0dXJlL2luZGV4LmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3Njc3MvY3NzL3N0eWxlLmNzcz9jODlhIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL2RlY2suanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL21vZGVsLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2NyaXB0cy9wcmVidWlsdGRlY2tzLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2NyaXB0cy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3VzZXJkYXRhLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2NyaXB0cy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPWxpc3RdLFxcbm9sW3JvbGU9bGlzdF0ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiBtaW4oMzByZW0sIDg1JSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG4ubW9kYWwtaGVhZGVyIGg1IHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxufVxcbi5tb2RhbC1oZWFkZXIgc3BhbiB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubW9kYWwtaGVhZGVyIHNwYW46aG92ZXIsXFxuLm1vZGFsLWhlYWRlciBzcGFuOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWJvZHkge1xcbiAgcGFkZGluZzogMC4xNXJlbSAwLjdyZW07XFxuICBtYXJnaW46IDAuNXJlbSAwIDFyZW0gMDtcXG4gIHdpZHRoOiA5MCU7XFxufVxcbi5tb2RhbC1ib2R5IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuN3JlbTtcXG59XFxuLm1vZGFsLWJvZHkgdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgbWluLWhlaWdodDogMy41cmVtO1xcbiAgbWF4LWhlaWdodDogMTJyZW07XFxufVxcblxcbi5kZWNrbmFtZSxcXG4uZGVja2NhdGVnb3J5LFxcbi5kZWNrZHVlZGF0ZSxcXG4uZGVja2Rlc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbn1cXG5cXG4uZGVja2Rlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZGlzYWJsZWRpbnB1dHRhZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDQwcHg7XFxuICBsZWZ0OiAxOTVweDtcXG4gIGNvbG9yOiBncmV5O1xcbiAgcGFkZGluZzogMCAwIDAgMC41ZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmludmFsaWQge1xcbiAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCByZWQ7XFxufVxcblxcbi5zdWJtaXRidXR0b24ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgcGFkZGluZzogMC4xZW07XFxufVxcblxcbi5xdWVzdGlvbmRpdixcXG4uYW5zd2VyZGl2IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLnVzZXJvcHRpb25zZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICBtYXJnaW4tdG9wOiAyZW07XFxufVxcbi51c2Vyb3B0aW9uc2RpdiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbiAgbWFyZ2luOiAwLjJlbTtcXG59XFxuXFxuLm5ld2NhcmR0aXRsZWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMC4yZW0gMC41ZW0gMC41ZW0gMC41ZW07XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmRlY2tkaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMjBweCwgMWZyKSk7XFxuICBnYXA6IDFlbTtcXG4gIG1hcmdpbjogMC41ZW07XFxufVxcblxcbi5kZWNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcmVtIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgbWluLXdpZHRoOiA5MCU7XFxuICBtaW4taGVpZ2h0OiA4ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzODU2O1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCA1LjV2dywgMS4xcmVtKTtcXG59XFxuXFxuLmRlY2tpbWFnZWFuZG5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZjZDFlO1xcbiAgbWFyZ2luOiAwLjdlbSAwIDAuN2VtIDFlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4uZGVja2ltYWdlYW5kbmFtZSBidXR0b24ge1xcbiAgcGFkZGluZzogMC4yZW07XFxufVxcbi5kZWNraW1hZ2VhbmRuYW1lIGgzIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmRlY2tpbWFnZWFuZG5hbWUgcCB7XFxuICBjb2xvcjogcmdiYSgyNTMsIDI1MywgMjUzLCAwLjY4MSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmRlY2tkZXNjcmlwdGlvbmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi13aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAwLjdlbSAwO1xcbn1cXG4uZGVja2Rlc2NyaXB0aW9uZGl2IHAge1xcbiAgcGFkZGluZzogMC41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5kZWNrZGVzY3JpcHRpb25kaXYgOm50aC1jaGlsZCgyKSB7XFxuICBjb2xvcjogcmdiYSgyNTMsIDI1MywgMjUzLCAwLjY4MSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLml0c2VtcHR5bWVzc2FnZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5yb3dvZmNhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiBjbGFtcCgwLjVlbSwgMy41dncsIDJlbSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGdhcDogY2xhbXAoMC4zZW0sIDJ2dywgMS41ZW0pO1xcbn1cXG5cXG4ub3ZlcnZpZXdmbGV4Ym94ZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAwLjNlbTtcXG59XFxuXFxuLm92ZXJ2aWV3Y2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbiAgcGFkZGluZzogY2xhbXAoMC4zZW0sIDJ2dywgMWVtKTtcXG59XFxuLm92ZXJ2aWV3Y2FyZCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxuLm92ZXJ2aWV3Y2FyZCBpbWcge1xcbiAgd2lkdGg6IGNsYW1wKDEuNnJlbSwgMy41dncsIDJyZW0pO1xcbn1cXG4ub3ZlcnZpZXdjYXJkIGgzIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC45cmVtLCAzLjV2dywgMS4xcmVtKTtcXG59XFxuLm92ZXJ2aWV3Y2FyZCBwIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4zcmVtLCA1LjV2dywgMnJlbSk7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjEycmVtO1xcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA1cHg7XFxufVxcblxcbi5ncmVlbmNhcmR1bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMzRDMzgxICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ibHVlY2FyZHVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwNDZGQzYgIWltcG9ydGFudDtcXG59XFxuXFxuLmJyaWNrY2FyZHVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNFRDZENDcgIWltcG9ydGFudDtcXG59XFxuXFxuLnN1bnNoaW5lY2FyZHVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNGRkJBMTcgIWltcG9ydGFudDtcXG59XFxuXFxuLnNldHRpbmdzc2VjdGlvbiBzZWxlY3Qge1xcbiAgcGFkZGluZzogMC4zZW07XFxufVxcblxcbi5kZWNrZGVsZXRlb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZGVsZXRlZGVja2RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4uZGVsZXRlZGVja2RpdiBidXR0b24ge1xcbiAgcGFkZGluZzogMC4xZW07XFxufVxcblxcbi5yZXNldGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMXJlbSBhdXRvIGF1dG8gYXV0bztcXG4gIGNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLmlubmVyaGVhZGVyZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtIDAgMS41cmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MmUzZTtcXG59XFxuLmlubmVyaGVhZGVyZGl2IGgxIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZjZDFlO1xcbn1cXG5cXG4uY29udGFpbmVyZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuc3ZnIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG59XFxuc3ZnIHBhdGgge1xcbiAgc3Ryb2tlOiB3aGl0ZTtcXG4gIHN0cm9rZS13aWR0aDogMnB4O1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbn1cXG5cXG4uYmFubmVyYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogMi40cmVtO1xcbiAgcGFkZGluZzogMGVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNTVmZjtcXG59XFxuXFxuLmJhbm5lcmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzZWQ5O1xcbn1cXG5cXG4ubWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLXRvcDogM2VtO1xcbn1cXG4ubWVudSBidXR0b24ge1xcbiAgbWluLXdpZHRoOiA4cmVtO1xcbiAgcGFkZGluZzogMC43ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwODJkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4MmUzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVudSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMDgyZDtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLm1lbnUuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm5hdi1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDhyZW07XFxufVxcbi5uYXYtcmlnaHQgcCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpZGVuYXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG1hcmdpbi10b3A6IDQyLjNweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5zaWRlbmF2LmFjdGl2ZSB7XFxuICB3aWR0aDogMTVyZW07XFxufVxcblxcbi5zaWRlbmF2aW5uZXJkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAycmVtIDAgMCAycmVtO1xcbn1cXG4uc2lkZW5hdmlubmVyZGl2IGEge1xcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbSAwLjRyZW0gMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zaXRpb246IDAuMiAwLjVzO1xcbn1cXG4uc2lkZW5hdmlubmVyZGl2IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uc2lkZW5hdmlubmVyZGl2IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3R1ZHljYXJkZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG4uc3R1ZHljYXJkZGl2IGRpdiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtaW4td2lkdGg6IDUwJTtcXG4gIG1pbi1oZWlnaHQ6IDVyZW07XFxufVxcbi5zdHVkeWNhcmRkaXYgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuOSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMjEsIDEyMSwgMTIxLCAwLjkpO1xcbn1cXG5cXG4ubnVtYmVyb2ZjYXJkcyB7XFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxufVxcblxcbi5zdHVkeWRpdiB7XFxuICBtYXJnaW46IDAgMS4yZW0gMCAxLjJlbTtcXG59XFxuLnN0dWR5ZGl2IGgxIHtcXG4gIG1hcmdpbi10b3A6IDAuNSBlbTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uZmxpcC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjUlIDEwJTtcXG4gIHdpZHRoOiBjbGFtcCgxOC43NXJlbSwgMzB2dywgMjVyZW0pO1xcbiAgaGVpZ2h0OiBjbGFtcCgxOC43NXJlbSwgMzB2dywgMjVyZW0pO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG59XFxuXFxuLmZsaXAtY2FyZC1pbm5lciB7XFxuICB3aWR0aDogY2xhbXAoMTguNzVyZW0sIDMwdncsIDI1cmVtKTtcXG4gIGhlaWdodDogY2xhbXAoMTguNzVyZW0sIDMwdncsIDI1cmVtKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyNSUgMTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbi5mbGlwLWNhcmQtaW5uZXIuYWN0aXZhdGVkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4uZmxpcC1jYXJkLWZyb250LCAuZmxpcC1jYXJkLWJhY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmZsaXAtY2FyZC1mcm9udCB7XFxuICB3aWR0aDogY2xhbXAoMTguNzVyZW0sIDMwdncsIDI1cmVtKTtcXG4gIGhlaWdodDogY2xhbXAoMTguNzVyZW0sIDMwdncsIDI1cmVtKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmNkMWU7XFxuICBib3JkZXItcmFkaXVzOiAyNSUgMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmZsaXAtY2FyZC1iYWNrIHtcXG4gIHdpZHRoOiBjbGFtcCgxOC43NXJlbSwgMzB2dywgMjVyZW0pO1xcbiAgaGVpZ2h0OiBjbGFtcCgxOC43NXJlbSwgMzB2dywgMjVyZW0pO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmY2QxZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JSAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcblxcbi5idXR0b25zc3BhbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAxZW07XFxufVxcbi5idXR0b25zc3BhbiBidXR0b24ge1xcbiAgcGFkZGluZzogY2xhbXAoMC4zcmVtLCAyLjV2dywgMC43cmVtKTtcXG59XFxuXFxuLmNvbmdyYXRzZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzZW07XFxuICBtYXJnaW46IDNlbSAxZW0gMWVtIDFlbTtcXG59XFxuLmNvbmdyYXRzZGl2IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAucm93b2ZjYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAwLjdlbTtcXG4gIH1cXG4gIC5kZWNrZGlzcGxheSB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNjBweCwgMWZyKSk7XFxuICB9XFxuICAuZGVjayB7XFxuICAgIG1pbi1oZWlnaHQ6IDExZW07XFxuICB9XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwODJkO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLm1vYmlsZW5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIG1pbi1oZWlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuLm1vYmlsZW5hdiBpbWcge1xcbiAgd2lkdGg6IDJyZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLm1vYmlsZW5hdiBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4ubW9iaWxlbmF2IGgzIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGdyZXk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAuNWVtIGNsYW1wKDAuMmVtLCAydncsIDEuNWVtKTtcXG59XFxuc2VjdGlvbiBoMSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjZyZW0sIDJ2dywgMy41cmVtKTtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jc3Mvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbW9kYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9feW91cmRlY2tzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX292ZXJ2aWV3LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19kZWNrc2V0dGluZ3Muc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2Jhbm5lci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fc2lkZW5hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fc3R1ZHlzZXNzaW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19icmVha3BvaW50LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQUE7QUFDQTs7O0VBR0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBLDBCQUFBO0FBQ0E7Ozs7Ozs7Ozs7RUFVRSxTQUFBO0FDQ0Y7O0FERUEsMkdBQUE7QUFDQTs7RUFFRSxnQkFBQTtBQ0NGOztBREVBLDJCQUFBO0FBQ0E7RUFDRSx1QkFBQTtBQ0NGOztBREVBLDJCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQSwwREFBQTtBQUNBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQSxvQ0FBQTtBQUNBOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUEseUNBQUE7QUFDQTs7OztFQUlFLGFBQUE7QUNDRjs7QURFQSxnR0FBQTtBQUNBO0VBQ0U7SUFDQyxxQkFBQTtFQ0NEO0VERUE7OztJQUdFLHFDQUFBO0lBQ0EsdUNBQUE7SUFDQSxzQ0FBQTtJQUNBLGdDQUFBO0VDQUY7QUFDRjtBQ3hFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRDBFSjs7QUN2RUE7RUNGSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFREVBLHNCQUFBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Es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RUFDQSxvQkFBQTtBWDBsQlI7QVd2bEJJO0VUNUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VTeUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBWDhsQlI7QVczbEJJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QVg2bEJSOztBV3psQkE7RVRwREksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RVNvREEsc0JBQUE7RUFDQSx1Q0FBQTtBWDhsQko7QVc3bEJJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QVgrbEJSOztBQUVBLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRnV0dXJlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBmdXR1cmU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIGZ1dHVyZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAzMSBEZWNlbWJlciAyMDE0IGluIHRoZSBmdXR1cmU/XG4gKiBjb25zdCByZXN1bHQgPSBpc0Z1dHVyZShuZXcgRGF0ZSgyMDE0LCAxMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGdXR1cmUoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpID4gRGF0ZS5ub3coKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IENhcmQgPSB7XG4gICAgcXVlc3Rpb246IG51bGwsXG4gICAgYW5zd2VyOiBudWxsLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZChmb3JtRGF0YU9iaikge1xuXG4gICAgY29uc3QgbmV3Q2FyZCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShDYXJkKSwge1xuICAgICAgICBxdWVzdGlvbjogZm9ybURhdGFPYmoucXVlc3Rpb25pbnB1dCxcbiAgICAgICAgYW5zd2VyOiBmb3JtRGF0YU9iai5hbnN3ZXJpbnB1dCxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3Q2FyZDtcbn0iLCJpbXBvcnQgeyBtb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XG5pbXBvcnQgeyB2aWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgcHJlQnVpbHREZWNrcyB9IGZyb20gXCIuL3ByZWJ1aWx0ZGVja3NcIjtcblxuXG4vLyBUT0RPIE5vIHdheSB0byBsZWF2ZSBTdHVkeSBTZXNzaW9uIGVhcmx5XG4vLyBUT0RPIHRoZXJlcyBhIGJ1ZyB0aGF0IGFsd2F5cyBwb3BzIHVwIGF0IHRoZSBlbmQgb2YgbXkgc3R1ZHkgc2Vzc2lvbnMsIGFsdGhvdWdoIGl0IGRvZXNuJ3QgYnJlZWFrIHRoZSBhcHBcbi8vIFRPRE8gc3RpbGwgaGF2ZSB0aGF0IGJ1ZyB3aXRoIGl0IHNheWluZyBpdHMgbm90IGluIHRoZSBmdXR1cmUganVzdCBiZWNhdXNlIHRoZSBtb250aGUgaXNuJ3QgZnVydGhlciFcbi8vIFRPRE8gQ0xFQU5cbi8vIFRPRE8gUmVhZE1lXG5cbmV4cG9ydCBjb25zdCBjb250cm9sbGVyID0gKGZ1bmN0aW9uKCl7XG4gICAgT2JzZXJ2YWJsZS5zdWJzY3JpYmUoJ0RhdGFSZXNldCcsIHJlc2V0RGF0YUFuZFZpZXcpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHByZUJ1aWx0RGVja3M6IHByZUJ1aWx0RGVja3MsXG4gICAgICAgIGxvY2FsRGVja3M6IG1vZGVsLmdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKSxcbiAgICAgICAgUGFuZWxzOiBtb2RlbC5kYXRhUGFuZWxzLFxuXG4gICAgICAgIFVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURlY2tzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhbmVscygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVwZGF0ZURlY2tzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEZWNrcyA9IG1vZGVsLmdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVQYW5lbHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5QYW5lbHMgPSBtb2RlbC5nZXRMb2NhbFBhbmVscygpO1xuICAgICAgICB9LFxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzdGFydEFwcGxpY2F0aW9uKCkge1xuICAgICAgICBtb2RlbC5jaGVja0lmVGhlcmVJc0FscmVhZHlMb2NhbGx5U3RvcmVkRGF0YSgpO1xuICAgICAgICBkYXRhLlVwZGF0ZSgpO1xuICAgICAgICB2aWV3LnJlbmRlclBhZ2UoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVja0NyZWF0aW9uRm9ybSgpIHtcblxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWZvcm0nKTtcbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVja25hbWUnKTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2tjYXRlZ29yeScpO1xuICAgICAgICBjb25zdCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNrZHVlZGF0ZScpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVDaGVja2VyID0gIG1vZGVsLnZhbGlkYXRvcnMubmFtZVZhbGlkYXRvcjtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlDaGVja2VyID0gbW9kZWwudmFsaWRhdG9ycy5jYXRlZ29yeVZhbGlkYXRvcjtcbiAgICAgICAgY29uc3QgZGF0ZUNoZWNrZXIgPSBtb2RlbC52YWxpZGF0b3JzLmRhdGVWYWxpZGF0b3I7XG5cbiAgICAgICAgbmFtZUNoZWNrZXIuc2V0RGF0YShuYW1lRWxlbWVudCwgbmFtZUVsZW1lbnQudmFsdWUudHJpbSgpKTtcbiAgICAgICAgY2F0ZWdvcnlDaGVja2VyLnNldERhdGEoY2F0ZWdvcnlFbGVtZW50LCBjYXRlZ29yeUVsZW1lbnQudmFsdWUudHJpbSgpKTtcbiAgICAgICAgZGF0ZUNoZWNrZXIuc2V0RGF0YShkYXRlRWxlbWVudCwgZGF0ZUVsZW1lbnQudmFsdWUudHJpbSgpKTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gW25hbWVDaGVja2VyLCBjYXRlZ29yeUNoZWNrZXIsIGRhdGVDaGVja2VyXTtcbiAgICAgICAgdmFsaWRhdG9ycy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICAgICAgaW5wdXQuc2V0VmFsaWRpdHlDbGFzcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGludmFsaWRJbnB1dHMgPSB2YWxpZGF0b3JzLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5pc1ZhbGlkID09PSBmYWxzZSk7XG4gICAgICAgIGlmIChpbnZhbGlkSW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGludmFsaWRJbnB1dHMuZm9yRWFjaCgoaW52YWxpZElucHV0KSA9PiB7XG4gICAgICAgICAgICAgICAgaW52YWxpZElucHV0LmRpc3BsYXlXYXJuaW5nKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YU9iamVjdCA9IG1vZGVsLmNyZWF0ZUZvcm1EYXRhT2JqZWN0KGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgbmV3RGVjayA9IG1vZGVsLmNyZWF0ZURlY2soZm9ybURhdGFPYmplY3QpO1xuICAgICAgICAgICAgbW9kZWwuYWRkRGVja1RvTG9jYWxTdG9yYWdlKG5ld0RlY2spO1xuICAgICAgICAgICAgbW9kZWwuaW5jcmVtZW50VXNlckRhdGEoJ2RlY2tzQ3JlYXRlZCcpO1xuICAgICAgICAgICAgZGF0YS5VcGRhdGUoKTtcbiAgICAgICAgICAgIHZpZXcucmVzZXRGb3JtKGZvcm0pO1xuICAgICAgICAgICAgbW9kZWwudmFsaWRhdG9ycy5yZXNldElucHV0VmFsaWRpdHkodmFsaWRhdG9ycyk7XG4gICAgICAgICAgICB2aWV3LnJlbmRlckFkZENhcmRNb2RhbEJvZHkobmV3RGVjayk7XG4gICAgICAgICAgICBPYnNlcnZhYmxlLnB1Ymxpc2goJ0RlY2tzVXBkYXRlZCcsIGRhdGEubG9jYWxEZWNrcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkQ2FyZHNGb3JtKG5ld0RlY2ssIHN0YXR1cykge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNhcmQtZm9ybScpO1xuICAgICAgICBjb25zdCBxdWVzdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uaW5wdXQnKTtcbiAgICAgICAgY29uc3QgYW5zd2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyaW5wdXQnKTtcblxuICAgICAgICBjb25zdCBxdWVzdGlvbkNoZWNrZXIgPSBtb2RlbC52YWxpZGF0b3JzLnF1ZXN0aW9uVmFsaWRhdG9yO1xuICAgICAgICBjb25zdCBhbnN3ZXJDaGVja2VyID0gbW9kZWwudmFsaWRhdG9ycy5hbnN3ZXJWYWxpZGF0b3I7XG5cbiAgICAgICAgcXVlc3Rpb25DaGVja2VyLnNldERhdGEocXVlc3Rpb25JbnB1dCwgcXVlc3Rpb25JbnB1dC52YWx1ZS50cmltKCkpO1xuICAgICAgICBhbnN3ZXJDaGVja2VyLnNldERhdGEoYW5zd2VySW5wdXQsIGFuc3dlcklucHV0LnZhbHVlLnRyaW0oKSk7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IFtxdWVzdGlvbkNoZWNrZXIsIGFuc3dlckNoZWNrZXJdO1xuICAgICAgICB2YWxpZGF0b3JzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBpbnB1dC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGludmFsaWRJbnB1dHMgPSB2YWxpZGF0b3JzLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5pc1ZhbGlkID09PSBmYWxzZSk7XG4gICAgICAgIGlmIChpbnZhbGlkSW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGludmFsaWRJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uZGlzcGxheVdhcm5pbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YU9iamVjdCA9IG1vZGVsLmNyZWF0ZUZvcm1EYXRhT2JqZWN0KGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IG1vZGVsLmNyZWF0ZUNhcmQoZm9ybURhdGFPYmplY3QpO1xuICAgICAgICAgICAgbGV0IGRlY2tDb3B5ID0gbW9kZWwuZ2V0RGVja0Zyb21Mb2NhbFN0b3JhZ2UobmV3RGVjay5uYW1lKTtcbiAgICAgICAgICAgIGRlY2tDb3B5ID0gbW9kZWwuYWRkQ2FyZFRvRGVjayhjYXJkLCBkZWNrQ29weSk7XG4gICAgICAgICAgICBtb2RlbC51cGRhdGVEZWNrSW5Mb2NhbFN0b3JhZ2UoZGVja0NvcHkpO1xuICAgICAgICAgICAgZGF0YS5VcGRhdGUoKTtcbiAgICAgICAgICAgIG1vZGVsLmluY3JlbWVudFVzZXJEYXRhKCdjYXJkc0NyZWF0ZWQnKTtcbiAgICAgICAgICAgIG1vZGVsLnZhbGlkYXRvcnMucmVzZXRJbnB1dFZhbGlkaXR5KHZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgT2JzZXJ2YWJsZS5wdWJsaXNoKCdVcGRhdGVPdmVydmlld0RhdGEnLCBkYXRhLlBhbmVscyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdhZGRtb3JlJykge1xuICAgICAgICAgICAgICAgIHZpZXcucmVuZGVyQWRkQ2FyZE1vZGFsQm9keShkZWNrQ29weSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2RvbmVhZGRpbmcnKSB7XG4gICAgICAgICAgICAgICAgdmlldy5oaWRlTW9kYWwoKTtcbiAgICAgICAgICAgICAgICB2aWV3LnJlc2V0TW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVzZXREYXRhQW5kVmlldygpIHtcbiAgICAgICAgbW9kZWwuY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgZGF0YS5VcGRhdGUoKTtcbiAgICAgICAgT2JzZXJ2YWJsZS5wdWJsaXNoKCdEZWNrc1VwZGF0ZWQnLCBkYXRhLmxvY2FsRGVja3MpO1xuICAgICAgICBPYnNlcnZhYmxlLnB1Ymxpc2goJ1VwZGF0ZU92ZXJ2aWV3RGF0YScsIGRhdGEuUGFuZWxzKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc3RhcnRTdHVkeVNlc3Npb24oZGVjaykge1xuICAgICAgICB2aWV3LnJlbmRlclN0dWR5U2Vzc2lvbihkZWNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93TmV4dFN0dWR5Q2FyZChkZWNrLCBvcGVyYXRpb24pIHtcblxuICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnc2hvd25leHQnKSB7XG4gICAgICAgICAgICBpZiAoZGVjay5jdXJyZW50Q2FyZCArIDEgPT09IGRlY2suY2FyZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbW9kZWwudXBkYXRlQ3VycmVudENhcmQoZGVjaywgJ3Jlc2V0Jyk7XG4gICAgICAgICAgICAgICAgdmlldy5yZW1vdmVNYWluVGFnQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIHZpZXcucmVuZGVyU3R1ZHlTZXNzaW9uQ29tcGxldGUoZGVjayk7XG4gICAgICAgICAgICAgICAgbW9kZWwuaW5jcmVtZW50VXNlckRhdGEoJ2RlY2tzU3R1ZGllZCcpO1xuICAgICAgICAgICAgICAgIG1vZGVsLmluY3JlbWVudFVzZXJEYXRhKCdjYXJkc1N0dWRpZWQnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kZWwudXBkYXRlQ3VycmVudENhcmQoZGVjaywgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICB2aWV3LnVwZGF0ZVN0dWR5Q2FyZChkZWNrKTtcbiAgICAgICAgICAgICAgICBtb2RlbC5pbmNyZW1lbnRVc2VyRGF0YSgnY2FyZHNTdHVkaWVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ3Nob3dwcmV2aW91cycpIHtcbiAgICAgICAgICAgIG1vZGVsLnVwZGF0ZUN1cnJlbnRDYXJkKGRlY2ssIG9wZXJhdGlvbik7XG4gICAgICAgICAgICB2aWV3LnVwZGF0ZVN0dWR5Q2FyZChkZWNrKTtcbiAgICAgICAgICAgIG1vZGVsLmRlY3JlbWVudFVzZXJEYXRhKCdjYXJkc1N0dWRpZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLlVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZURlY2soZGVja05hbWUpIHtcbiAgICAgICAgbW9kZWwuZGVsZXRlRGVja0Zyb21Mb2NhbFN0b3JhZ2UoZGVja05hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRlbGV0ZURlY2ssXG4gICAgICAgIHN0YXJ0QXBwbGljYXRpb24sXG4gICAgICAgIHN0YXJ0U3R1ZHlTZXNzaW9uLFxuICAgICAgICBzaG93TmV4dFN0dWR5Q2FyZCxcbiAgICAgICAgaGFuZGxlQWRkQ2FyZHNGb3JtLFxuICAgICAgICBoYW5kbGVEZWNrQ3JlYXRpb25Gb3JtLFxuICAgIH1cbn0pKCk7IiwiZXhwb3J0IGNvbnN0IERlY2sgPSB7XG4gICAgbmFtZTogJ2RlZmF1bHQgbmFtZScsXG4gICAgZGVzY3JpcHRpb246ICdkZWZhdWx0IGRlc2NyaXB0aW9uJyxcbiAgICBkdWVEYXRlOiAnZGVmYXVsdCBkdWVEYXRlJyxcbiAgICBjYXRlZ29yeTogJ2RlZmF1bHQgY2F0ZWdvcnknLFxuICAgIGN1cnJlbnRDYXJkOiAwLFxuICAgIGNhcmRDb3VudDogMCxcbiAgICBjYXJkczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgZGVja0FycmF5ID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWNrKGZvcm1EYXRhT2JqKSB7XG4gICAgXG4gICAgY29uc3QgbmV3RGVjayA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEZWNrKSwge1xuICAgICAgICBuYW1lOiBmb3JtRGF0YU9iai5kZWNrbmFtZSxcbiAgICAgICAgY2F0ZWdvcnk6IGZvcm1EYXRhT2JqLmRlY2tjYXRlZ29yeSxcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhT2JqLmRlY2tkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogbWFrZURhdGVSZWFkYWJsZShmb3JtRGF0YU9iai5kZWNrZHVlZGF0ZSksXG4gICAgICAgIGN1cnJlbnRDYXJkOiAwLFxuICAgICAgICBjYXJkQ291bnQ6IDAsXG4gICAgICAgIGNhcmRzOiBbXSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3RGVjaztcbn07XG5cbmZ1bmN0aW9uIG1ha2VEYXRlUmVhZGFibGUoZGF0ZURhdGEpIHtcbiAgICBjb25zdCBhcnJheSA9IGRhdGVEYXRhLnNwbGl0KCctJyk7XG4gICAgY29uc3QgeWVhciA9IGFycmF5WzBdO1xuICAgIGNvbnN0IG1vbnRoID0gY29udmVydE1vbnRoTnVtYmVyVG9Nb250aE5hbWUoYXJyYXlbMV0pO1xuICAgIGNvbnN0IGRheSA9IGNvbnZlcnREYXlOdW1iZXJUb050aERheU9mTW9udGgoYXJyYXlbMl0pO1xuICAgIHJldHVybiBgJHttb250aH0gJHtkYXl9LCAke3llYXJ9YDtcbn07XG5cbmZ1bmN0aW9uIGNvbnZlcnRNb250aE51bWJlclRvTW9udGhOYW1lKG51bWJlcikge1xuICAgIG51bWJlciA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuICAgIGNvbnN0IG1vbnRocyA9IHtcbiAgICAgICAgMTogJ0phbnVhcnknLFxuICAgICAgICAyOiAnRmVicnVhcnknLFxuICAgICAgICAzOiAnTWFyY2gnLFxuICAgICAgICA0OiAnQXByaWwnLFxuICAgICAgICA1OiAnTWF5JyxcbiAgICAgICAgNjogJ0p1bmUnLFxuICAgICAgICA3OiAnSnVseScsXG4gICAgICAgIDg6ICdBdWd1c3QnLFxuICAgICAgICA5OiAnU2VwdGVtYmVyJyxcbiAgICAgICAgMTA6ICdPY3RvYmVyJyxcbiAgICAgICAgMTE6ICdOb3ZlbWJlcicsXG4gICAgICAgIDEyOiAnRGVjZW1iZXInLFxuICAgIH1cbiAgICByZXR1cm4gbW9udGhzW251bWJlcl07XG59O1xuXG5mdW5jdGlvbiBjb252ZXJ0RGF5TnVtYmVyVG9OdGhEYXlPZk1vbnRoKG51bWJlcikge1xuICAgIGNvbnN0IG50aERheSA9IHtcbiAgICAgICAgMTogJ3N0JyxcbiAgICAgICAgMjogJ25kJyxcbiAgICAgICAgMzogJ3JkJyxcbiAgICAgICAgNDogJ3RoJywgNTogJ3RoJywgNjogJ3RoJywgNzogJ3RoJywgODogJ3RoJyxcbiAgICAgICAgOTogJ3RoJywgMTA6ICd0aCcsIDExOiAndGgnLCAxMjogJ3RoJywgXG4gICAgICAgIDEzOiAndGgnLCAxNDogJ3RoJywgMTU6ICd0aCcsIDE2OiAndGgnLCBcbiAgICAgICAgMTc6ICd0aCcsIDE4OiAndGgnLCAxOTogJ3RoJywgMjA6ICd0aCcsXG4gICAgICAgIDIxOiAnc3QnLFxuICAgICAgICAyMjogJ25kJyxcbiAgICAgICAgMjM6ICdyZCcsXG4gICAgICAgIDI0OiAndGgnLCAyNTogJ3RoJywgMjY6ICd0aCcsIDI3OiAndGgnLCBcbiAgICAgICAgMjg6ICd0aCcsIDI5OiAndGgnLCAzMDogJ3RoJyxcbiAgICAgICAgMzE6ICdzdCcsXG4gICAgfTtcbiAgICByZXR1cm4gYCR7bnVtYmVyfSR7bnRoRGF5W251bWJlcl19YDtcbn07IiwiXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbCwgYXR0cnMpIHtcbiAgICBmb3IodmFyIGtleSBpbiBhdHRycykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxufVxuICAiLCJpbXBvcnQgeyB2YWxpZGF0b3JzIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuaW1wb3J0IHsgY3JlYXRlRGVjaywgZGVja0FycmF5fSBmcm9tICcuL2RlY2snO1xuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gJy4vY2FyZCc7XG5pbXBvcnQgeyBwcmVCdWlsdERlY2tzIH0gZnJvbSAnLi9wcmVidWlsdGRlY2tzJztcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgbmV3VXNlckRhdGEsIGRhdGFQYW5lbHN9IGZyb20gJy4vdXNlcmRhdGEnO1xuXG5leHBvcnQgY29uc3QgbW9kZWwgPSAoZnVuY3Rpb24oKXtcblxuICAgIGxldCBjdXJyZW50UGFnZSA9ICcnO1xuXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFBhZ2UocGFnZSkge1xuICAgICAgICBjdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFBhZ2U7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrSWZUaGVyZUlzQWxyZWFkeUxvY2FsbHlTdG9yZWREYXRhKCkge1xuICAgICAgICBjb25zdCBkZWNrcyA9IG1vZGVsLmdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgaWYgKCFkZWNrcyB8fCBkZWNrcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzZXREZWNrQXJyYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhbmVscyA9IG1vZGVsLmdldExvY2FsUGFuZWxzKCk7XG4gICAgICAgIGlmICghcGFuZWxzIHx8IHBhbmVscyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzZXREYXRhUGFuZWxEYXRhKGRhdGFQYW5lbHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IG1vZGVsLmdldFVzZXJEYXRhKCk7XG4gICAgICAgIGlmICghdXNlckRhdGEgfHwgdXNlckRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc2V0TmV3VXNlckRhdGEobmV3VXNlckRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGl0ZW1zID0geyAuLi5sb2NhbFN0b3JhZ2V9O1xuICAgICAgICBpZiAoaXRlbXMuaGFzT3duUHJvcGVydHkoJ2RlY2thcnJheScpKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZWNrYXJyYXknKSkpOyAgICBcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXREZWNrRnJvbUxvY2FsU3RvcmFnZShkZWNrTmFtZSkge1xuICAgICAgICBjb25zdCBkZWNrcyA9IGdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgcmV0dXJuIGRlY2tzLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGRlY2tOYW1lKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYWRkQ2FyZHRvRGVjayhjYXJkLCBkZWNrKSB7XG4gICAgICAgIGRlY2suY2FyZHMucHVzaChjYXJkKTtcbiAgICAgICAgcmV0dXJuIGRlY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXREZWNrQXJyYXkoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWNrYXJyYXknLCBKU09OLnN0cmluZ2lmeShkZWNrQXJyYXkpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGVja0luTG9jYWxTdG9yYWdlKGRlY2spIHtcbiAgICAgICAgY29uc3QgZGVja3MgPSBnZXREZWNrQXJyYXlGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IGZvdW5kRGVjayA9IGdldERlY2tGcm9tTG9jYWxTdG9yYWdlKGRlY2submFtZSlcbiAgICAgICAgZm91bmREZWNrLmNhcmRzID0gZGVjay5jYXJkcztcbiAgICAgICAgZm91bmREZWNrLmNhcmRDb3VudCA9IGRlY2suY2FyZENvdW50O1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGVja3MuZmluZEluZGV4KGQgPT4gZC5uYW1lID09PSBmb3VuZERlY2submFtZSk7XG4gICAgICAgIGRlY2tzW2luZGV4XSA9IGZvdW5kRGVjaztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlY2thcnJheScsIEpTT04uc3RyaW5naWZ5KGRlY2tzKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRGVja1RvTG9jYWxTdG9yYWdlKGRlY2spIHtcbiAgICAgICAgY29uc3QgYXJyYXlPZkRlY2tzID0gZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBhcnJheU9mRGVja3MucHVzaChkZWNrKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlY2thcnJheScsIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZEZWNrcykpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRDYXJkVG9EZWNrKGNhcmQsIGRlY2spIHtcbiAgICAgICAgZGVjay5jYXJkcy5wdXNoKGNhcmQpO1xuICAgICAgICBkZWNrLmNhcmRDb3VudCsrO1xuICAgICAgICByZXR1cm4gZGVjaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVEZWNrRnJvbUxvY2FsU3RvcmFnZShkZWNrTmFtZSkge1xuICAgICAgICBjb25zdCBkZWNrcyA9IGdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgY29uc3QgZGVja1RvRGVsZXRlID0gZ2V0RGVja0Zyb21Mb2NhbFN0b3JhZ2UoZGVja05hbWUpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGRlY2tzLmZpbmRJbmRleChkID0+IGQubmFtZSA9PT0gZGVja1RvRGVsZXRlLm5hbWUpO1xuICAgICAgICBkZWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVja2FycmF5JywgSlNPTi5zdHJpbmdpZnkoZGVja3MpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldERhdGFQYW5lbERhdGEoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhcGFuZWxzJywgSlNPTi5zdHJpbmdpZnkoZGF0YVBhbmVscykpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXREYXRhUGFuZWxEYXRhKHVwZGF0ZWRQYW5lbHMpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGFwYW5lbHMnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUGFuZWxzKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldExvY2FsUGFuZWxzKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YXBhbmVscycpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxQYW5lbChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHBhbmVscyA9IEFycmF5LmZyb20oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YXBhbmVscycpKSk7XG4gICAgICAgIHBhbmVscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShkYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlc2V0TmV3VXNlckRhdGEoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyZGF0YScsIEpTT04uc3RyaW5naWZ5KG5ld1VzZXJEYXRhKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldFVzZXJEYXRhKGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJkYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRVc2VyRGF0YSgpIHtcblxuICAgICAgICBjb25zdCBpdGVtcyA9IHsgLi4ubG9jYWxTdG9yYWdlfTtcblxuICAgICAgICBpZiAoaXRlbXMuaGFzT3duUHJvcGVydHkoJ3VzZXJkYXRhJykpIHtcbiAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJkYXRhJykpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldE5vblBhcnNlZFVzZXJEYXRhKCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHsgLi4ubG9jYWxTdG9yYWdlfTtcbiAgICAgICAgaWYgKGl0ZW1zLmhhc093blByb3BlcnR5KCd1c2VyZGF0YScpKSB7XG5cbiAgICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyZGF0YScpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbmNyZW1lbnRVc2VyRGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gZ2V0VXNlckRhdGEoKTtcbiAgICAgICAgdXNlckRhdGFbZGF0YV0gPSB1c2VyRGF0YVtkYXRhXSArIDE7XG4gICAgICAgIHNldFVzZXJEYXRhKHVzZXJEYXRhKTtcblxuICAgICAgICBjb25zdCBwYW5lbHMgPSBnZXRMb2NhbFBhbmVscygpO1xuICAgICAgICBwYW5lbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnN0YXRpc3RpYyA9IGl0ZW0uc3RhdGlzdGljICsgMTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgc2V0RGF0YVBhbmVsRGF0YShwYW5lbHMpO1xuICAgICAgICBjb250cm9sbGVyLmRhdGEuVXBkYXRlKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRlY3JlbWVudFVzZXJEYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBnZXRVc2VyRGF0YSgpO1xuICAgICAgICB1c2VyRGF0YVtkYXRhXSA9IHVzZXJEYXRhW2RhdGFdIC0gMTtcbiAgICAgICAgc2V0VXNlckRhdGEodXNlckRhdGEpO1xuXG4gICAgICAgIGNvbnN0IG5ld2RhdGEgPSBnZXRVc2VyRGF0YSgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDdXJyZW50Q2FyZChkZWNrLCBvcGVyYXRpb24pIHtcblxuICAgICAgICBjb25zdCBkZWNrSXNQcmVidWlsdCA9IGNoZWNrSWZEZWNrSXNQcmVCdWlsdChkZWNrLCBjb250cm9sbGVyLmRhdGEucHJlQnVpbHREZWNrcyk7XG4gICAgICAgIGlmIChkZWNrSXNQcmVidWlsdCAmJiBvcGVyYXRpb24gPT09ICdyZXNldCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJlQnVpbHREZWNrcy5pbmRleE9mKGRlY2spO1xuICAgICAgICAgICAgY29udHJvbGxlci5kYXRhLnByZUJ1aWx0RGVja3NbaW5kZXhdLmN1cnJlbnRDYXJkID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICdyZXNldCcpIHsgZ2V0RGVja0Zyb21Mb2NhbFN0b3JhZ2UoZGVjay5uYW1lKS5jdXJyZW50Q2FyZCA9IDA7IH0gXG4gICAgICAgIGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ3Nob3duZXh0JykgeyBkZWNrLmN1cnJlbnRDYXJkKys7IH0gXG4gICAgICAgIGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ3Nob3dwcmV2aW91cycpIHsgZGVjay5jdXJyZW50Q2FyZC0tOyB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrSWZEZWNrSXNQcmVCdWlsdChkZWNrLCBwcmVCdWlsdERlY2tzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlQnVpbHREZWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByZUJ1aWx0RGVja3NbaV0gPT09IGRlY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjbGVhckxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgcmVzZXROZXdVc2VyRGF0YSgpO1xuICAgICAgICByZXNldERhdGFQYW5lbERhdGEoKVxuICAgICAgICByZXNldERlY2tBcnJheSgpO1xuICAgICAgICBjb250cm9sbGVyLmRhdGEuVXBkYXRlKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvcm1EYXRhT2JqZWN0KGZvcm0pIHtcbiAgICAgICAgY29uc3QgbXlGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGFPYmogPSBPYmplY3QuZnJvbUVudHJpZXMobXlGb3JtRGF0YS5lbnRyaWVzKCkpO1xuICAgICAgICByZXR1cm4gZm9ybURhdGFPYmo7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGFQYW5lbHMsXG4gICAgICAgIHZhbGlkYXRvcnMsXG4gICAgICAgIGNyZWF0ZUNhcmQsXG4gICAgICAgIGFkZENhcmRUb0RlY2ssXG4gICAgICAgIGNyZWF0ZURlY2ssXG4gICAgICAgIGdldExvY2FsUGFuZWwsXG4gICAgICAgIGdldExvY2FsUGFuZWxzLFxuICAgICAgICByZXNldERhdGFQYW5lbERhdGEsXG4gICAgICAgIGluY3JlbWVudFVzZXJEYXRhLFxuICAgICAgICBnZXROb25QYXJzZWRVc2VyRGF0YSxcbiAgICAgICAgcmVzZXREZWNrQXJyYXksXG4gICAgICAgIGNoZWNrSWZUaGVyZUlzQWxyZWFkeUxvY2FsbHlTdG9yZWREYXRhLFxuICAgICAgICBkZWxldGVEZWNrRnJvbUxvY2FsU3RvcmFnZSxcbiAgICAgICAgdXBkYXRlRGVja0luTG9jYWxTdG9yYWdlLFxuICAgICAgICBkZWNyZW1lbnRVc2VyRGF0YSxcbiAgICAgICAgZ2V0VXNlckRhdGEsXG4gICAgICAgIHJlc2V0TmV3VXNlckRhdGEsXG4gICAgICAgIGdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UsXG4gICAgICAgIGdldEN1cnJlbnRQYWdlLFxuICAgICAgICBzZXRDdXJyZW50UGFnZSxcbiAgICAgICAgYWRkQ2FyZHRvRGVjayxcbiAgICAgICAgdXBkYXRlQ3VycmVudENhcmQsXG4gICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlLFxuICAgICAgICBjcmVhdGVGb3JtRGF0YU9iamVjdCxcbiAgICAgICAgYWRkRGVja1RvTG9jYWxTdG9yYWdlLFxuICAgICAgICBnZXREZWNrRnJvbUxvY2FsU3RvcmFnZSxcbiAgICB9O1xufSkoKTsiLCJpbXBvcnQgeyBEZWNrIH0gZnJvbSAnLi9kZWNrJztcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tICcuL2NhcmQnO1xuXG5jb25zdCBmcmVuY2hDYXJkcyA9IGNyZWF0ZUZyZW5jaENhcmRzKCk7XG5jb25zdCBmcmVuY2hEZWNrID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKERlY2spLCB7XG4gICAgbmFtZTogJ0ZyZW5jaCcsXG4gICAgZGVzY3JpcHRpb246ICdBIGRlY2sgdG8gbGVhcm4gMTAgYmFzaWMgRnJlbmNoIHdvcmRzJyxcbiAgICBkdWVEYXRlOiAnTmV4dCBXZWVrJyxcbiAgICBjYXRlZ29yeTogJ0xhbmd1YWdlcycsXG4gICAgY3VycmVudENhcmQ6IDAsXG4gICAgY2FyZENvdW50OiAwLFxuICAgIGNhcmRzOiBmcmVuY2hDYXJkcyxcbn0pO1xuICAgIFxuZnVuY3Rpb24gY3JlYXRlRnJlbmNoQ2FyZHMoKSB7XG5cbiAgICBjb25zdCBmcmVuY2hDYXJkT25lID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgbWFuXFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1biBob21tZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkVHdvID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgdHJlZVxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW4gYXJicmUnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZFRocmVlID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgY2hhaXJcXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuZSBjaGFpc2UnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZEZvdXIgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBjb21wdXRlclxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW4gb3JkaW5hdGV1cicsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkRml2ZSA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIHdpbmRvd1xcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIGZlbsOqdHJlJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRTaXggPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBzY2hvb2xcXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuZSDDqWNvbGUnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZFNldmVuID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgbWVudVxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIGNhcnRlJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRFaWdodCA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIGRvY3RvclxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIHZvaXR1cmUnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZE5pbmUgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBzaGlydFxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIGNoZW1pc2UnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZFRlbiA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIHBhcnR5XFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgZsOqdGUnLFxuICAgIH07XG5cbiAgICBjb25zdCBmcmVuY2hDYXJkcyA9IFtmcmVuY2hDYXJkT25lLCBmcmVuY2hDYXJkVHdvLCBmcmVuY2hDYXJkVGhyZWUsIFxuICAgICAgICAgICAgICAgICAgICBmcmVuY2hDYXJkRm91ciwgZnJlbmNoQ2FyZEZpdmUsIGZyZW5jaENhcmRTaXgsIFxuICAgICAgICAgICAgICAgICAgICBmcmVuY2hDYXJkU2V2ZW4sIGZyZW5jaENhcmRFaWdodCwgZnJlbmNoQ2FyZE5pbmUsXG4gICAgICAgICAgICAgICAgICAgIGZyZW5jaENhcmRUZW5dO1xuICAgIFxuICAgICAgICBmcmVuY2hDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNhcmQgPSBjcmVhdGVDYXJkKGNhcmQpO1xuICAgIH0pO1xuICAgIHJldHVybiBmcmVuY2hDYXJkcztcbn1cbmV4cG9ydCBjb25zdCBwcmVCdWlsdERlY2tzID0gW2ZyZW5jaERlY2ssIGZyZW5jaERlY2ssIGZyZW5jaERlY2ssIGZyZW5jaERlY2tdOyIsIlxuXG5leHBvcnQgY29uc3QgT2JzZXJ2YWJsZSAgPSB7XG4gICAgXG4gICAgZXZlbnRzOiB7XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0ucHVzaChmbilcbiAgICB9LFxuICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXS5maWx0ZXIoZiA9PiBmICE9PSBmbik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uKGV2TmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgICAgIGYoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiaW1wb3J0IExlYXJuaW5nSWNvbiBmcm9tICcuLi9pbWFnZXMvbGVhcm5pbmctY29sb3Iuc3ZnJztcbmltcG9ydCBTdHVkeUxhbXBJY29uIGZyb20gJy4uL2ltYWdlcy9zdHVkeS1sYW1wLWNvbG9yLnN2Zyc7XG5pbXBvcnQgU3R1ZHlEZXNrSWNvbiBmcm9tICcuLi9pbWFnZXMvc3R1ZHktZGVzay1jb2xvci5zdmcnO1xuaW1wb3J0IEVkdWNhdGlvbkljb24gZnJvbSAnLi4vaW1hZ2VzL2VkdWNhdGlvbi1jb2xvci5zdmcnO1xuXG5leHBvcnQgY29uc3QgbmV3VXNlckRhdGEgPSB7XG4gICAgdHlwZTogJ3VzZXJkYXRhJyxcbiAgICBkZWNrc0NyZWF0ZWQ6IDAsXG4gICAgZGVja3NTdHVkaWVkOiAwLFxuICAgIGNhcmRzQ3JlYXRlZDogMCxcbiAgICBjYXJkc1N0dWRpZWQ6IDAsXG59O1xuXG5jb25zdCBEYXRhUGFuZWwgPSB7XG4gICAgaW1hZ2VzcmM6IG51bGwsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdW5kZXJsaW5lY29sb3I6IG51bGwsXG4gICAgc3RhdGlzdGljOiBudWxsXG59O1xuXG5jb25zdCBkZWNrc0NyZWF0ZWRQYW5lbCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEYXRhUGFuZWwpLCB7XG4gICAgaW1hZ2VzcmM6IExlYXJuaW5nSWNvbixcbiAgICB0aXRsZTogJ0RlY2tzIENyZWF0ZWQnLFxuICAgIHVuZGVybGluZWNvbG9yOiAnZ3JlZW5jYXJkdW5kZXJsaW5lJyxcbiAgICBkZWNrc0NyZWF0ZWQ6IDAsXG4gICAgc3RhdGlzdGljOiAwLFxufSk7XG5cbmNvbnN0IGRlY2tzU3R1ZGllZFBhbmVsID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKERhdGFQYW5lbCksIHtcbiAgICBpbWFnZXNyYzogRWR1Y2F0aW9uSWNvbixcbiAgICB0aXRsZTogJ0RlY2tzIFN0dWRpZWQnLFxuICAgIHVuZGVybGluZWNvbG9yOiAnYmx1ZWNhcmR1bmRlcmxpbmUnLFxuICAgIHN0YXRpc3RpYzogMCxcbiAgICBkZWNrc1N0dWRpZWQ6IDAsXG59KTtcblxuY29uc3QgY2FyZHNDcmVhdGVkUGFuZWwgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoRGF0YVBhbmVsKSwge1xuICAgIGltYWdlc3JjOiBTdHVkeURlc2tJY29uLFxuICAgIHRpdGxlOiAnQ2FyZHMgQ3JlYXRlZCcsXG4gICAgdW5kZXJsaW5lY29sb3I6ICdicmlja2NhcmR1bmRlcmxpbmUnLFxuICAgIHN0YXRpc3RpYzogMCxcbiAgICBjYXJkc0NyZWF0ZWQ6IDAsXG59KTtcblxuY29uc3QgY2FyZHNTdHVkaWVkUGFuZWwgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoRGF0YVBhbmVsKSwge1xuICAgIGltYWdlc3JjOiBTdHVkeUxhbXBJY29uLFxuICAgIHRpdGxlOiAnQ2FyZHMgU3R1ZGllZCcsXG4gICAgdW5kZXJsaW5lY29sb3I6ICdzdW5zaGluZWNhcmR1bmRlcmxpbmUnLFxuICAgIHN0YXRpc3RpYzogMCxcbiAgICBjYXJkc1N0dWRpZWQ6IDAsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRhdGFQYW5lbHMgPSBbZGVja3NDcmVhdGVkUGFuZWwsIGRlY2tzU3R1ZGllZFBhbmVsLCBjYXJkc0NyZWF0ZWRQYW5lbCwgY2FyZHNTdHVkaWVkUGFuZWxdOyIsImltcG9ydCB7IGlzRnV0dXJlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBWYWxpZGF0b3IgPSB7XG4gICAgZGF0YTogbnVsbCxcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIGlzVmFsaWQ6IGZhbHNlLFxuXG4gICAgc2V0RGF0YTogZnVuY3Rpb24oZWxlbWVudCwgZGF0YSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH0sXG5cbiAgICBzZXRWYWxpZGl0eUNsYXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGlzcGxheVdhcm5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1RoaXMgZmllbGQgaXMgaW52YWxpZCcpO1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRvcnMgPSB7XG5cbiAgICBuYW1lVmFsaWRhdG9yOiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoVmFsaWRhdG9yKSwge1xuICAgICAgICBuYW1lTGVuZ3RoSXNWYWxpZDogZmFsc2UsXG4gICAgICAgIG5hbWVJc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgXG4gICAgICAgIGNoZWNrVmFsaWRpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0xlbmd0aCgpO1xuICAgICAgICAgICAgdGhpcy5jaGVja05hbWVBdmFpbGFiaWxpdHkodGhpcy5pbnB1dFZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5hbWVMZW5ndGhJc1ZhbGlkICYmIHRoaXMubmFtZUlzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge3RoaXMuaXNWYWxpZCA9IGZhbHNlfTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgY2hlY2tMZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZUxlbmd0aElzVmFsaWQgPSB0aGlzLmRhdGEubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgY2hlY2tOYW1lQXZhaWxhYmlsaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0RlY2tOYW1lID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5maW5kKGl0ZW0gPT4gaXRlbSA9PT0gdGhpcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVJc0F2YWlsYWJsZSA9IGV4aXN0aW5nRGVja05hbWUgIT09IHRoaXMuZGF0YSA/IHRydWU6IGZhbHNlO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBkaXNwbGF5V2FybmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubmFtZUxlbmd0aElzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ05hbWUgbXVzdCBiZSBhdCBsZWFzdCAxIGNoYXJhY3RlciBsb25nJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMubmFtZUlzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdEZWNrIGFscmVhZHkgZXhpc3RzLCBjaG9vc2UgYSBkaWZmZXJlbnQgbmFtZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSksXG4gICAgXG4gICAgY2F0ZWdvcnlWYWxpZGF0b3I6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShWYWxpZGF0b3IpLCB7XG4gICAgXG4gICAgICAgIGNoZWNrVmFsaWRpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5kYXRhICE9PSAnJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgZGlzcGxheVdhcm5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGNob29zZSBhIGNhdGVnb3J5Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgXG4gICAgZGF0ZVZhbGlkYXRvcjogT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFZhbGlkYXRvciksIHtcbiAgICBcbiAgICAgICAgY2hlY2tWYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VySW5wdXQgPSB0aGlzLmNvbnZlcnREYXRhVG9EYXRlT2JqZWN0KHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBpc0Z1dHVyZSh1c2VySW5wdXQpO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBjb252ZXJ0RGF0YVRvRGF0ZU9iamVjdDogZnVuY3Rpb24oZGF0ZURhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gZGF0ZURhdGEuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBhcnJheVswXTtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gYXJyYXlbMV07XG4gICAgICAgICAgICBjb25zdCBkYXkgPSBhcnJheVsyXTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgZGlzcGxheVdhcm5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnRGF0ZSBtdXN0IGJlIGluIHRoZSBmdXR1cmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICBcbiAgICBxdWVzdGlvblZhbGlkYXRvcjogT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFZhbGlkYXRvciksIHtcbiAgICAgICAgbWlubGVuZ3RoOiAxLFxuICAgICAgICBtYXhMZW5ndGg6IDMwMCxcbiAgICBcbiAgICAgICAgY2hlY2tWYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLmRhdGEubGVuZ3RoID4gMCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sZW5ndGggPCAzMDEgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGRpc3BsYXlXYXJuaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDMwMCBjaGFyYWN0ZXJzJyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICBcbiAgICBhbnN3ZXJWYWxpZGF0b3I6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShWYWxpZGF0b3IpLCB7XG4gICAgICAgIG1pbmxlbmd0aDogMSxcbiAgICAgICAgbWF4TGVuZ3RoOiAzMDAsXG4gICAgXG4gICAgICAgIGNoZWNrVmFsaWRpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5kYXRhLmxlbmd0aCA+IDAgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEubGVuZ3RoIDwgMzAxID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBkaXNwbGF5V2FybmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgYmUgYmV0d2VlbiAxIGFuZCAzMDAgY2hhcmFjdGVycycpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0sXG4gICAgfSksXG5cbiAgICByZXNldElucHV0VmFsaWRpdHk6IGZ1bmN0aW9uKGlucHV0cykge1xuICAgICAgICBpbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0VmFsaWRpdHlDbGFzcygpO1xuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuIiwiaW1wb3J0IHsgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4vcHVic3ViJztcbmltcG9ydCBTdHVkeUljb24gZnJvbSAnLi4vaW1hZ2VzL3N0dWR5aW5nLnBuZyc7XG5pbXBvcnQgT3ZlcnZpZXdJY29uIGZyb20gJy4uL2ltYWdlcy9lZGl0LnBuZyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuXG4gICAgT2JzZXJ2YWJsZS5zdWJzY3JpYmUoJ0RlY2tzVXBkYXRlZCcsIGxvY2FsRGVja3MgPT4ge1xuICAgICAgICB1cGRhdGVEZWNrRGlzcGxheShsb2NhbERlY2tzKTtcbiAgICAgICAgdXBkYXRlRGVsZXRlRGVja09wdGlvbnMobG9jYWxEZWNrcylcbiAgICB9KTtcbiAgICBPYnNlcnZhYmxlLnN1YnNjcmliZSgnVXBkYXRlT3ZlcnZpZXdEYXRhJywgY2FyZERhdGEgPT4ge1xuICAgICAgICB1cGRhdGVPdmVydmlld0NhcmRzKGNhcmREYXRhKTtcbiAgICB9KTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW5kZXJZb3VyRGVja3MoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gcmVuZGVyU2VjdGlvblRpdGxlKCdZb3VyIERlY2tzJyk7XG4gICAgICAgIGNvbnN0IGRlY2tEaXNwbGF5RGl2ID0gcmVuZGVyRGVja0Rpc3BsYXkoY29udHJvbGxlci5kYXRhLmxvY2FsRGVja3MpO1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZCh0aXRsZSwgZGVja0Rpc3BsYXlEaXYpO1xuICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJlQnVpbHREZWNrcygpIHsgICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gcmVuZGVyU2VjdGlvblRpdGxlKCdQcmVidWlsdCBEZWNrcycpO1xuICAgICAgICBjb25zdCBwcmVidWlsdERlY2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByZWJ1aWx0RGVja3NEaXYuY2xhc3NOYW1lID0gJ2RlY2tkaXNwbGF5JztcbiAgICAgICAgY29udHJvbGxlci5kYXRhLnByZUJ1aWx0RGVja3MuZm9yRWFjaCgoZGVjaykgPT4ge1xuICAgICAgICAgICAgZGVjayA9IHJlbmRlckRlY2soZGVjayk7XG4gICAgICAgICAgICBwcmVidWlsdERlY2tzRGl2LmFwcGVuZENoaWxkKGRlY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZCh0aXRsZSwgcHJlYnVpbHREZWNrc0Rpdik7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJEZWNrRGlzcGxheShsb2NhbERlY2tzKSB7XG5cbiAgICAgICAgY29uc3QgZGVja0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVja0Rpc3BsYXlEaXYuY2xhc3NOYW1lID0gJ2RlY2tkaXNwbGF5JztcbiAgICAgICAgZGVja0Rpc3BsYXlEaXYuaWQgPSAnZGVja2Rpc3BsYXknO1xuXG4gICAgICAgIGNvbnN0IHlvdXJEZWNrc1NlY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd5b3VyRGVja3NTZWN0aW9uRGl2Jyk7XG4gICAgICAgIHlvdXJEZWNrc1NlY3Rpb25EaXYuaWQgPSAneW91cmRlY2tzc2VjdGlvbmRpdic7XG4gICAgICAgIHlvdXJEZWNrc1NlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoZGVja0Rpc3BsYXlEaXYpO1xuXG4gICAgICAgIGlmIChsb2NhbERlY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxvY2FsRGVja3MuZm9yRWFjaCgoZGVjaykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZW5kZXJEZWNrKGRlY2spO1xuICAgICAgICAgICAgICAgIGRlY2tEaXNwbGF5RGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpdHNFbXB0eU1lc3NhZ2UgPSByZW5kZXJJdHNFbXB0eU1lc3NhZ2UoKTtcbiAgICAgICAgICAgIGRlY2tEaXNwbGF5RGl2LmFwcGVuZENoaWxkKGl0c0VtcHR5TWVzc2FnZSk7XG4gICAgICAgICAgICB5b3VyRGVja3NTZWN0aW9uRGl2LmFwcGVuZENoaWxkKGl0c0VtcHR5TWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHlvdXJEZWNrc1NlY3Rpb25EaXY7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclN0dWR5Q2FyZFNpZGUoY2FyZFNpZGUsIGRlY2spIHtcblxuICAgICAgICBjb25zdCBudW1iZXJPZkNhcmRzRnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG51bWJlck9mQ2FyZHNGcm9udC5pbm5lclRleHQgPSBgJHtkZWNrLmN1cnJlbnRDYXJkICsgMX0gLyAke2RlY2suY2FyZHMubGVuZ3RofWA7XG4gICAgICAgIG51bWJlck9mQ2FyZHNGcm9udC5jbGFzc05hbWUgPSAnbnVtYmVyb2ZjYXJkcyc7XG4gICAgICAgIG51bWJlck9mQ2FyZHNGcm9udC5pZCA9IGAke2NhcmRTaWRlfXNlY3Rpb25udW1iZXJvZmNhcmRzYC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGhlYWRlci5pbm5lclRleHQgPSBgJHtjYXJkU2lkZX06YDtcblxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHRleHQuaWQgPSBgJHtjYXJkU2lkZX10ZXh0YC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoY2FyZFNpZGUgPT09ICdRdWVzdGlvbicpIHtcbiAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gZGVjay5jYXJkc1tkZWNrLmN1cnJlbnRDYXJkXS5xdWVzdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gZGVjay5jYXJkc1tkZWNrLmN1cnJlbnRDYXJkXS5hbnN3ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lckRpdi5hcHBlbmQoaGVhZGVyLCB0ZXh0KTtcblxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNlY3Rpb24uaWQgPSBgJHtjYXJkU2lkZX1zZWN0aW9uYC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBzZWN0aW9uLmNsYXNzTmFtZSA9IGAke2NhcmRTaWRlfXNlY3Rpb25gLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kKG51bWJlck9mQ2FyZHNGcm9udCwgaW5uZXJEaXYpO1xuICAgICAgICByZXR1cm4gc2VjdGlvbjtcblxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTdHVkeUNhcmQoZGVjaykge1xuICAgICAgICBjb25zdCBudW1iZXJPZkNhcmRzRnJvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb25zZWN0aW9ubnVtYmVyb2ZjYXJkcycpO1xuICAgICAgICBudW1iZXJPZkNhcmRzRnJvbnQuaW5uZXJUZXh0ID0gYCR7ZGVjay5jdXJyZW50Q2FyZCArIDF9IC8gJHtkZWNrLmNhcmRzLmxlbmd0aH1gO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbnRleHQnKTtcbiAgICAgICAgcXVlc3Rpb25UZXh0LmlubmVyVGV4dCA9IGRlY2suY2FyZHNbZGVjay5jdXJyZW50Q2FyZF0ucXVlc3Rpb247XG5cbiAgICAgICAgY29uc3QgYW5zd2VyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXJ0ZXh0Jyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhbnN3ZXJUZXh0LmlubmVyVGV4dCA9IGRlY2suY2FyZHNbZGVjay5jdXJyZW50Q2FyZF0uYW5zd2VyO1xuICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgY29uc3QgbnVtYmVyT2ZDYXJkc0JhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2Vyc2VjdGlvbm51bWJlcm9mY2FyZHMnKTtcbiAgICAgICAgbnVtYmVyT2ZDYXJkc0JhY2suaW5uZXJUZXh0ID0gYCR7ZGVjay5jdXJyZW50Q2FyZCArIDF9IC8gJHtkZWNrLmNhcmRzLmxlbmd0aH1gO1xuXG4gICAgICAgIGNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzYnV0dG9uJyk7XG4gICAgICAgIGlmIChkZWNrLmN1cnJlbnRDYXJkID4gMCkge1xuICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWNrLmN1cnJlbnRDYXJkICsgMSA9PT0gZGVjay5jYXJkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Y2FyZGJ1dHRvbicpLmlubmVyVGV4dCA9ICdGaW5pc2ggU2Vzc2lvbic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJGbGlwQ2FyZChxdWVzdGlvblNlY3Rpb24sIGFuc3dlclNlY3Rpb24pIHtcblxuICAgICAgICBjb25zdCBmbGlwQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmbGlwQ2FyZC5jbGFzc05hbWUgPSAnZmxpcC1jYXJkJztcbiAgICAgICAgZmxpcENhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBmbGlwQ2FyZElubmVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2YXRlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmbGlwQ2FyZElubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZsaXBDYXJkSW5uZXIuY2xhc3NOYW1lID0gJ2ZsaXAtY2FyZC1pbm5lcic7XG4gICAgICAgIGZsaXBDYXJkSW5uZXIuaWQgPSAnZmxpcC1jYXJkLWlubmVyJztcblxuICAgICAgICBjb25zdCBmbGlwQ2FyZEZyb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZsaXBDYXJkRnJvbnQuY2xhc3NOYW1lID0gJ2ZsaXAtY2FyZC1mcm9udCc7XG5cbiAgICAgICAgY29uc3QgZmxpcENhcmRCYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZsaXBDYXJkQmFjay5jbGFzc05hbWUgPSAnZmxpcC1jYXJkLWJhY2snO1xuXG4gICAgICAgIGZsaXBDYXJkLmFwcGVuZENoaWxkKGZsaXBDYXJkSW5uZXIpO1xuICAgICAgICBmbGlwQ2FyZElubmVyLmFwcGVuZChmbGlwQ2FyZEZyb250LCBmbGlwQ2FyZEJhY2spO1xuICAgICAgICBmbGlwQ2FyZEZyb250LmFwcGVuZENoaWxkKHF1ZXN0aW9uU2VjdGlvbik7XG4gICAgICAgIGZsaXBDYXJkQmFjay5hcHBlbmRDaGlsZChhbnN3ZXJTZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIGZsaXBDYXJkO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTdHVkeVNlc3Npb24oZGVjaykge1xuXG4gICAgICAgIGNvbnN0IHN0dWR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHN0dWR5RGl2LmNsYXNzTmFtZSA9ICdzdHVkeWRpdic7XG5cbiAgICAgICAgY29uc3Qgc3R1ZHlDYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHN0dWR5Q2FyZERpdi5pZCA9ICdzdHVkeWNhcmRkaXYnO1xuICAgICAgICBzdHVkeUNhcmREaXYuY2xhc3NOYW1lID0gJ3N0dWR5Y2FyZGRpdic7XG5cbiAgICAgICAgY29uc3QgZGVja05hbWVIZWFkZXIgPSByZW5kZXJTZWN0aW9uVGl0bGUoZGVjay5uYW1lKTtcbiAgICAgICAgZGVja05hbWVIZWFkZXIuY2xhc3NOYW1lID0gJ2RlY2tuYW1laGVhZGVyJztcblxuICAgICAgICBjb25zdCBxdWVzdGlvblNlY3Rpb24gPSByZW5kZXJTdHVkeUNhcmRTaWRlKCdRdWVzdGlvbicsIGRlY2spO1xuICAgICAgICBjb25zdCBhbnN3ZXJTZWN0aW9uID0gcmVuZGVyU3R1ZHlDYXJkU2lkZSgnQW5zd2VyJywgZGVjayk7XG5cbiAgICAgICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJldmlvdXNCdXR0b24uaWQgPSAncHJldmlvdXNidXR0b24nO1xuICAgICAgICBwcmV2aW91c0J1dHRvbi5pbm5lclRleHQgPSAnTGFzdCBDYXJkJztcbiAgICAgICAgcHJldmlvdXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLnNob3dOZXh0U3R1ZHlDYXJkKGRlY2ssICdzaG93cHJldmlvdXMnKTtcbiAgICAgICAgICAgIGNvbnN0IGZsaXBDYXJkSW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxpcC1jYXJkLWlubmVyJyk7XG4gICAgICAgICAgICBmbGlwQ2FyZElubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2YXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcblxuICAgICAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5leHRCdXR0b24uaW5uZXJUZXh0ID0gJ05leHQgQ2FyZCc7XG4gICAgICAgIG5leHRCdXR0b24uaWQgPSAnbmV4dGNhcmRidXR0b24nO1xuICAgICAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbGxlci5zaG93TmV4dFN0dWR5Q2FyZChkZWNrLCAnc2hvd25leHQnKTtcbiAgICAgICAgICAgIGNvbnN0IGZsaXBDYXJkSW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxpcC1jYXJkLWlubmVyJyk7XG4gICAgICAgICAgICBmbGlwQ2FyZElubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2YXRlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBidXR0b25zU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgYnV0dG9uc1NwYW4uY2xhc3NOYW1lID0gJ2J1dHRvbnNzcGFuJztcbiAgICAgICAgYnV0dG9uc1NwYW4uYXBwZW5kKHByZXZpb3VzQnV0dG9uLCBuZXh0QnV0dG9uKTtcblxuICAgICAgICBjb25zdCBmbGlwQ2FyZCA9IHJlbmRlckZsaXBDYXJkKHF1ZXN0aW9uU2VjdGlvbiwgYW5zd2VyU2VjdGlvbik7XG5cbiAgICAgICAgc3R1ZHlDYXJkRGl2LmFwcGVuZChmbGlwQ2FyZCwgYnV0dG9uc1NwYW4pO1xuICAgICAgICBzdHVkeURpdi5hcHBlbmQoZGVja05hbWVIZWFkZXIsIHN0dWR5Q2FyZERpdilcbiAgICAgICAgbWFpbi5hcHBlbmQoc3R1ZHlEaXYpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTdHVkeVNlc3Npb25Db21wbGV0ZShkZWNrKSB7XG4gICAgICAgIGNvbnN0IGNvbmdyYXRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbmdyYXRzRGl2LmNsYXNzTmFtZSA9ICdjb25ncmF0c2Rpdic7XG5cbiAgICAgICAgY29uc3QgY2VsZWJyYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjZWxlYnJhdGlvblRleHQuaW5uZXJUZXh0ID0gYENvbmdyYXR1bGF0aW9ucywgeW91IHN0dWRpZWQgJHtkZWNrLmNhcmRzLmxlbmd0aH0gY2FyZHMhIENsaWNrIHRoZSBidXR0b24gYmVsb3cgdG8gcmV0dXJuIHRvIHlvdXIgZGVja3MgcGFnZWA7XG5cbiAgICAgICAgY29uc3QgcmV0dXJuVG9EZWNrc1BhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcmV0dXJuVG9EZWNrc1BhZ2VCdXR0b24uaW5uZXJUZXh0ID0gJ1JldHVybiB0byBEZWNrcyBQYWdlJztcbiAgICAgICAgcmV0dXJuVG9EZWNrc1BhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB2aWV3LnJlbW92ZU1haW5UYWdDb250ZW50KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbmhlYWRlcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmVuZGVyUGFnZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25ncmF0c0Rpdi5hcHBlbmQoY2VsZWJyYXRpb25UZXh0LCByZXR1cm5Ub0RlY2tzUGFnZUJ1dHRvbik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY29uZ3JhdHNEaXYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZURlY2tzRnJvbVBhZ2UoKSB7XG4gICAgICAgIGNvbnN0IGRlY2tEaXNwbGF5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2tkaXNwbGF5Jyk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShkZWNrRGlzcGxheURpdi5jaGlsZHJlbik7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZURlY2tEaXNwbGF5KGxvY2FsRGVja3MpIHtcbiAgICAgICAgY29uc3QgZGVja0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVja2Rpc3BsYXknKTtcbiAgICAgICAgY29uc3QgeW91ckRlY2tzU2VjdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5b3VyZGVja3NzZWN0aW9uZGl2Jyk7XG4gICAgICAgIHJlbW92ZURlY2tzRnJvbVBhZ2UoKTtcblxuICAgICAgICBpZiAobG9jYWxEZWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRzZW1wdHltZXNzYWdlJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBsb2NhbERlY2tzLmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVuZGVyRGVjayhkZWNrKTtcbiAgICAgICAgICAgICAgICBkZWNrRGlzcGxheURpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdJdHNFbXB0eU1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRzZW1wdHltZXNzYWdlJyk7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdJdHNFbXB0eU1lc3NhZ2UpIHsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0c2VtcHR5bWVzc2FnZScpLnJlbW92ZSgpOyB9XG4gICAgICAgICAgICBjb25zdCBpdHNFbXB0eU1lc3NhZ2UgPSByZW5kZXJJdHNFbXB0eU1lc3NhZ2UoKTtcbiAgICAgICAgICAgIHlvdXJEZWNrc1NlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoaXRzRW1wdHlNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJJdHNFbXB0eU1lc3NhZ2UoKSB7XG4gICAgICAgIGNvbnN0IGl0c0VtcHR5TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRzRW1wdHlNZXNzYWdlLmlkID0gJ2l0c2VtcHR5bWVzc2FnZSc7XG4gICAgICAgIGl0c0VtcHR5TWVzc2FnZS5jbGFzc05hbWUgPSAnaXRzZW1wdHltZXNzYWdlJztcbiAgICAgICAgaXRzRW1wdHlNZXNzYWdlLmlubmVyVGV4dCA9IGBJdCdzIGVtcHR5IGluIGhlcmUhIENsaWNrIHRoZSBibHVlIGJ1dHRvbiBhYm92ZSB0byBjcmVhdGUgYSBuZXcgZGVjay5gO1xuICAgICAgICByZXR1cm4gaXRzRW1wdHlNZXNzYWdlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckRlY2soZGVjaykge1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBuYW1lLmlubmVyVGV4dCA9IGRlY2submFtZTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZHVlRGF0ZVBhcmFncmFwaEVsZW1lbnQuaW5uZXJUZXh0ID0gYER1ZTogJHtkZWNrLmR1ZURhdGV9YDtcblxuICAgICAgICBjb25zdCBkZWNrRGVzY3JpcHRpb25QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlY2tEZXNjcmlwdGlvblBhcmFncmFwaC5pbm5lclRleHQgPSBkZWNrLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IHN0dWR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN0dWR5QnV0dG9uLmlubmVyVGV4dCA9ICdTdHVkeSc7XG4gICAgICAgIHN0dWR5QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVNYWluVGFnQ29udGVudCgpO1xuICAgICAgICAgICAgY29udHJvbGxlci5zdGFydFN0dWR5U2Vzc2lvbihkZWNrKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbWFnZUFuZE5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW1hZ2VBbmROYW1lRGl2LmNsYXNzTmFtZSA9ICdkZWNraW1hZ2VhbmRuYW1lJztcbiAgICAgICAgaW1hZ2VBbmROYW1lRGl2LmFwcGVuZChuYW1lLCBzdHVkeUJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgZGVja0Rlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlY2tEZXNjcmlwdGlvbkRpdi5jbGFzc05hbWUgPSAnZGVja2Rlc2NyaXB0aW9uZGl2JztcbiAgICAgICAgZGVja0Rlc2NyaXB0aW9uRGl2LmFwcGVuZChkZWNrRGVzY3JpcHRpb25QYXJhZ3JhcGgsIGR1ZURhdGVQYXJhZ3JhcGhFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBkZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlY2tEaXYuY2xhc3NOYW1lID0gJ2RlY2snO1xuICAgICAgICBkZWNrRGl2LmFwcGVuZChpbWFnZUFuZE5hbWVEaXYsIGRlY2tEZXNjcmlwdGlvbkRpdik7XG4gICAgICAgIHJldHVybiBkZWNrRGl2O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJPdmVydmlld1NlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gcmVuZGVyU2VjdGlvblRpdGxlKCdPdmVydmlldycpO1xuICAgICAgICBjb25zdCByb3dPZkNhcmRzRGl2ID0gcmVuZGVyT3ZlcnZpZXdDYXJkcyhjb250cm9sbGVyLmRhdGEuUGFuZWxzKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kKHRpdGxlLCByb3dPZkNhcmRzRGl2KTtcbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW5kZXJPdmVydmlld0NhcmRzKGNhcmRzKSB7XG5cbiAgICAgICAgY29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3cxLmNsYXNzTmFtZSA9ICdvdmVydmlld2ZsZXhib3hkaXYnXG4gICAgICAgIHJvdzEuY2xhc3NMaXN0LmFkZCgnZmxleGVuZGRpdicpO1xuICAgICAgICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvdzIuY2xhc3NOYW1lID0gJ292ZXJ2aWV3ZmxleGJveGRpdic7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkT3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNhcmRPdXRlckRpdi5jbGFzc05hbWUgPSAnb3ZlcnZpZXdjYXJkJztcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNhcmRJbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gY2FyZHNbaV0uaW1hZ2VzcmM7XG4gICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBjYXJkc1tpXS50aXRsZTtcbiAgICAgXG4gICAgICAgICAgICBjb25zdCBzdGF0aXN0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBzdGF0aXN0aWMuaWQgPSBjYXJkc1tpXS51bmRlcmxpbmVjb2xvcjtcbiAgICAgICAgICAgIHN0YXRpc3RpYy5jbGFzc05hbWUgPSBjYXJkc1tpXS51bmRlcmxpbmVjb2xvcjtcbiAgICAgICAgICAgIHN0YXRpc3RpYy5pbm5lclRleHQgPSBjYXJkc1tpXS5zdGF0aXN0aWM7XG4gICAgXG4gICAgICAgICAgICBjYXJkSW5uZXJEaXYuYXBwZW5kKGltYWdlLCB0aXRsZSk7XG4gICAgICAgICAgICBjYXJkT3V0ZXJEaXYuYXBwZW5kKGNhcmRJbm5lckRpdiwgc3RhdGlzdGljKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaSAlIDIgPT09IDAgPyByb3cxLmFwcGVuZENoaWxkKGNhcmRPdXRlckRpdikgOiByb3cyLmFwcGVuZENoaWxkKGNhcmRPdXRlckRpdik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb3dPZkNhcmRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvd09mQ2FyZHNEaXYuY2xhc3NOYW1lID0gJ3Jvd29mY2FyZHMnO1xuICAgICAgICByb3dPZkNhcmRzRGl2LmlkID0gJ3Jvd29mY2FyZHMnO1xuICAgICAgICByb3dPZkNhcmRzRGl2LmFwcGVuZChyb3cxLCByb3cyKTtcbiAgICAgICAgcmV0dXJuIHJvd09mQ2FyZHNEaXY7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU92ZXJ2aWV3Q2FyZHMoY2FyZHMpIHtcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3ZlcnZpZXdDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FyZC51bmRlcmxpbmVjb2xvcik7XG4gICAgICAgICAgICBvdmVydmlld0NhcmQuaW5uZXJUZXh0ID0gY2FyZC5zdGF0aXN0aWM7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclNldHRpbmdzU2VjdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgc2VjdGlvbi5jbGFzc05hbWUgPSAnc2V0dGluZ3NzZWN0aW9uJztcblxuICAgICAgICBjb25zdCB0aXRsZSA9IHJlbmRlclNlY3Rpb25UaXRsZSgnU2V0dGluZ3MnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlbGV0ZURlY2tTZWN0aW9uID0gcmVuZGVyRGVsZXRlRGVja09wdGlvbnMoKTtcbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSByZW5kZXJSZXNldEJ1dHRvbigpO1xuXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kKHRpdGxlLCBkZWxldGVEZWNrU2VjdGlvbiwgcmVzZXRCdXR0b24pO1xuICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyRGVsZXRlRGVja09wdGlvbnMoKSB7XG5cbiAgICAgICAgY29uc3QgZGVja3MgPSBBcnJheS5mcm9tKGNvbnRyb2xsZXIuZGF0YS5sb2NhbERlY2tzKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkcm9wZG93bkxhYmVsLmh0bWxGb3IgPSAnZGVja3MnO1xuICAgICAgICBkcm9wZG93bkxhYmVsLmlubmVyVGV4dCA9ICdDaG9vc2UgYSBkZWNrIHlvdSB3b3VsZCBsaWtlIHRvIGRlbGV0ZSc7XG5cbiAgICAgICAgY29uc3QgZHJvcGRvd25TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgZHJvcGRvd25TZWxlY3QubmFtZSA9ICdkZWNrcyc7XG4gICAgICAgIGRyb3Bkb3duU2VsZWN0LmlkID0gJ2Ryb3Bkb3duc2VsZWN0JztcblxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGRlZmF1bHRPcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgZGVmYXVsdE9wdGlvbi5pbm5lclRleHQgPSAnX19fX19fX19fX18nO1xuICAgICAgICBkcm9wZG93blNlbGVjdC5hcHBlbmRDaGlsZChkZWZhdWx0T3B0aW9uKTtcblxuICAgICAgICBkZWNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi5pZCA9IGl0ZW0ubmFtZSArICdpZCc7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgZHJvcGRvd25TZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnZGVja2RlbGV0ZWJ1dHRvbic7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnRGVsZXRlJztcbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVja05hbWUgPSBkcm9wZG93blNlbGVjdC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZGVsZXRlRGVjayhkZWNrTmFtZSk7XG4gICAgICAgICAgICBjb250cm9sbGVyLmRhdGEuVXBkYXRlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWNrTmFtZSArICdpZCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgT2JzZXJ2YWJsZS5wdWJsaXNoKCdEZWNrc1VwZGF0ZWQnLCBjb250cm9sbGVyLmRhdGEubG9jYWxEZWNrcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGVsZXRlRGVja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWxldGVEZWNrRGl2LmNsYXNzTmFtZSA9ICdkZWxldGVkZWNrZGl2JztcbiAgICAgICAgZGVsZXRlRGVja0Rpdi5hcHBlbmQoZHJvcGRvd25TZWxlY3QsIGRlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSAnZGVja2RlbGV0ZW9wdGlvbnMnO1xuICAgICAgICBkaXYuYXBwZW5kKGRyb3Bkb3duTGFiZWwsIGRlbGV0ZURlY2tEaXYpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEZWxldGVEZWNrT3B0aW9ucyhsb2NhbERlY2tzKSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duc2VsZWN0Jyk7XG4gICAgICAgIGNvbnN0IGRlY2tzID0gQXJyYXkuZnJvbShkcm9wZG93blNlbGVjdC5jaGlsZHJlbik7XG5cbiAgICAgICAgZGVja3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgIT0gJycpIHsgaXRlbS5yZW1vdmUoKTsgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGxvY2FsRGVja3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24uaWQgPSBpdGVtLm5hbWUgKyAnaWQnO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgIGRyb3Bkb3duU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJSZXNldEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnRGVsZXRlIGFsbCBzYXZlZCBkYXRhJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdyZXNldGJ1dHRvbic7XG4gICAgICAgIGJ1dHRvbi5hcmlhTGFiZWwgPSAnQ2xpY2sgaGVyZSB0byBkZWxldGUgYWxsIHNhdmVkIGRhdGEnO1xuICAgICAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVzZXQgeW91ciBkYXRhPyBZb3UgY2Fubm90IHVuZG8gdGhpcyBhY3Rpb24hJykpIHtcbiAgICAgICAgICAgICAgICBPYnNlcnZhYmxlLnB1Ymxpc2goJ0RhdGFSZXNldCcpOyAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7IHJldHVybjsgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNb2RhbCgpIHtcblxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbC5pZCA9ICdtb2RhbCc7XG4gICAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbCc7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gcmVuZGVyTW9kYWxIZWFkZXIobW9kYWwpO1xuICAgICAgICBjb25zdCBtb2RhbEZvcm0gPSByZW5kZXJNb2RhbEZvcm0obW9kYWwpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbEJvZHkuY2xhc3NOYW1lID0gJ21vZGFsLWJvZHknO1xuICAgICAgICBtb2RhbEJvZHkuaWQgPSAnbW9kYWwtYm9keSc7XG4gICAgICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChtb2RhbEZvcm0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsQ29udGVudC5jbGFzc05hbWUgPSAnbW9kYWwtY29udGVudCc7XG4gICAgICAgIG1vZGFsQ29udGVudC5pZCA9ICdtb2RhbC1jb250ZW50JztcbiAgICAgICAgbW9kYWxDb250ZW50LmFwcGVuZChtb2RhbEhlYWRlciwgbW9kYWxCb2R5KTtcblxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNb2RhbEhlYWRlcihtb2RhbCkge1xuXG4gICAgICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICAgICAgbW9kYWxIZWFkZXIuaW5uZXJUZXh0ID0gJ1N0ZXAgMTogQ3JlYXRlIERlY2snXG4gICAgICAgIG1vZGFsSGVhZGVyLmlkID0gJ21vZGFsaGVhZGVyaDUnO1xuXG4gICAgICAgIGNvbnN0IGV4aXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBleGl0U3Bhbi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG4gICAgICAgIGV4aXRTcGFuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vZGFsSGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsSGVhZGVyRGl2LmNsYXNzTmFtZSA9ICdtb2RhbC1oZWFkZXInO1xuICAgICAgICBtb2RhbEhlYWRlckRpdi5hcHBlbmQobW9kYWxIZWFkZXIsIGV4aXRTcGFuKTtcbiAgICAgICAgcmV0dXJuIG1vZGFsSGVhZGVyRGl2O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNb2RhbEZvcm0oKSB7XG5cbiAgICAgICAgY29uc3QgbmFtZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBuYW1lSW5wdXRMYWJlbC5odG1sRm9yID0gJ2RlY2tuYW1lJztcbiAgICAgICAgbmFtZUlucHV0TGFiZWwuaW5uZXJUZXh0ID0gYE1heCAyMCBDaGFyYWN0ZXJzYDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIG5hbWVJbnB1dC5taW5MZW5ndGggPSAxO1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKG5hbWVJbnB1dCwge1xuICAgICAgICAgICAgJ2lkJzogJ2RlY2tuYW1lJyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdkZWNrbmFtZScsXG4gICAgICAgICAgICAnbmFtZSc6ICdkZWNrbmFtZScsXG4gICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgICAgICdtYXhMZW5ndGgnOiAnMjAnLFxuICAgICAgICAgICAgJ21pbkxlbmd0aCc6ICcxJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9ICdkZWNrZGVzY3JpcHRpb24nO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9IGBEZXNjcmlwdGlvbiBNYXggNjAgQ2hhcmFjdGVyc2A7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMoZGVzY3JpcHRpb25JbnB1dCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnaWQnOiAnZGVja2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGVja2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdkZWNrZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICdyb3dzJzogJzgnLFxuICAgICAgICAgICAgICAgICdjb2xzJzogJzIwJyxcbiAgICAgICAgICAgICAgICAnbWF4TGVuZ3RoJzogJzYwJyxcbiAgICAgICAgICAgICAgICAnbWluLWhlaWdodCc6ICczcmVtJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gJ2RlY2tkdWVkYXRlJztcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgRGF0ZTonO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMoZHVlRGF0ZUlucHV0LCB7XG4gICAgICAgICAgICAnaWQnOiAnZGVja2R1ZWRhdGUnLFxuICAgICAgICAgICAgJ25hbWUnOiAnZGVja2R1ZWRhdGUnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ2RlY2tkdWVkYXRlJyxcbiAgICAgICAgICAgICd0eXBlJzogJ2RhdGUnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC5odG1sRm9yID0gJ2RlY2tjYXRlZ29yeSc7XG4gICAgICAgIGNhdGVnb3J5TGFiZWwuaW5uZXJUZXh0ID0gJ0NhdGVnb3J5JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGNhdGVnb3J5U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgc2V0QXR0cmlidXRlcyhjYXRlZ29yeVNlbGVjdCwge1xuICAgICAgICAgICAgJ2lkJzogJ2RlY2tjYXRlZ29yeScsXG4gICAgICAgICAgICAnbmFtZSc6ICdkZWNrY2F0ZWdvcnknLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ2RlY2tjYXRlZ29yeScsXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBkZWZhdWx0T3B0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgIGRlZmF1bHRPcHRpb24uaW5uZXJUZXh0ID0gJ1BsZWFzZSBjaG9vc2UgYSBDYXRlZ29yeSc7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBsYW5ndWFnZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBsYW5ndWFnZU9wdGlvbi52YWx1ZSA9ICdMYW5ndWFnZSc7XG4gICAgICAgIGxhbmd1YWdlT3B0aW9uLmlubmVyVGV4dCA9ICdMYW5ndWFnZSc7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBtYXRoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG1hdGhPcHRpb24udmFsdWUgPSAnTWF0aCc7XG4gICAgICAgIG1hdGhPcHRpb24uaW5uZXJUZXh0ID0gJ01hdGgnO1xuXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0LmFwcGVuZChkZWZhdWx0T3B0aW9uLCBsYW5ndWFnZU9wdGlvbiwgbWF0aE9wdGlvbik7XG5cbiAgICAgICAgY29uc3QgaW5wdXRzID0gW25hbWVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0LCBjYXRlZ29yeVNlbGVjdF07XG4gICAgICAgIGNvbnN0IGZvcm1TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZm9ybVN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSAnQ3JlYXRlIERlY2snO1xuICAgICAgICBmb3JtU3VibWl0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgZm9ybVN1Ym1pdEJ1dHRvbi5jbGFzc05hbWUgPSAnc3VibWl0YnV0dG9uJztcbiAgICAgICAgZm9ybVN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIuaGFuZGxlRGVja0NyZWF0aW9uRm9ybSk7XG4gICAgICAgIGNvbnN0IGFkZENhcmRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZENhcmRzQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgQ2FyZHMnO1xuICAgICAgICBhZGRDYXJkc0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGFkZENhcmRzQnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZW5kZXJBZGRDYXJkTW9kYWxCb2R5KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc05hbWUgPSAnbW9kYWwtZm9ybSc7XG4gICAgICAgIGZvcm0uaWQgPSAnbW9kYWwtZm9ybSc7XG4gICAgICAgIGZvcm0uYXBwZW5kKFxuICAgICAgICAgICAgbmFtZUlucHV0TGFiZWwsIG5hbWVJbnB1dCwgXG4gICAgICAgICAgICBjYXRlZ29yeUxhYmVsLCBjYXRlZ29yeVNlbGVjdCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgICAgICAgICBkdWVEYXRlTGFiZWwsIGR1ZURhdGVJbnB1dCxcbiAgICAgICAgICAgIGZvcm1TdWJtaXRCdXR0b24pO1xuICAgICAgICByZXR1cm4gZm9ybTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0TW9kYWxBdXRvZm9jdXMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYm9keScpO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXh0ID0gbW9kYWxib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdIHx8IG1vZGFsYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKVswXTtcbiAgICAgICAgICAgIGZpcnN0VGV4dC5mb2N1cygpO1xuICAgICAgICAgIH0sIDEpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJBZGRDYXJkTW9kYWxCb2R5KG5ld0RlY2spIHtcbiAgICAgICAgcmVtb3ZlTW9kYWxDb250ZW50KCk7XG4gICAgICAgIHJlbmRlck1vZGFsQWRkQ2FyZElucHV0KG5ld0RlY2spO1xuICAgICAgICByZW5kZXJNb2RhbEFkZENhcmRJbnB1dEhlYWRlcigpO1xuICAgICAgICBzZXRNb2RhbEF1dG9mb2N1cygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldE1vZGFsKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKS5yZW1vdmUoKTtcbiAgICAgICAgcmVuZGVyTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyTW9kYWxBZGRDYXJkSW5wdXQobmV3RGVjaykge1xuXG4gICAgICAgIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1ib2R5Jyk7XG5cbiAgICAgICAgY29uc3QgY2FyZENvdW50SDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjYXJkQ291bnRIMy5pbm5lclRleHQgPSBgQ2FyZDogJHtuZXdEZWNrLmNhcmRDb3VudCArIDF9YDtcbiAgICAgICAgY2FyZENvdW50SDMuY2xhc3NOYW1lID0gJ2NhcmRjb3VudGgzJztcblxuICAgICAgICBjb25zdCBkZWNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGRlY2tOYW1lLmlubmVyVGV4dCA9IG5ld0RlY2submFtZTtcblxuICAgICAgICBjb25zdCBuZXdDYXJkVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3Q2FyZFRpdGxlRGl2LmNsYXNzTmFtZSA9ICduZXdjYXJkdGl0bGVkaXYnO1xuICAgICAgICBuZXdDYXJkVGl0bGVEaXYuYXBwZW5kKGNhcmRDb3VudEgzLCBkZWNrTmFtZSk7XG5cbiAgICAgICAgY29uc3QgcXVlc3Rpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHF1ZXN0aW9uTGFiZWwuaHRtbEZvciA9ICdxdWVzdGlvbmlucHV0JztcbiAgICAgICAgcXVlc3Rpb25MYWJlbC5pbm5lclRleHQgPSAnUXVlc3Rpb246JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBxdWVzdGlvbklucHV0Lm5hbWUgPSAncXVlc3Rpb25pbnB1dCc7XG4gICAgICAgIHF1ZXN0aW9uSW5wdXQuaWQgPSAncXVlc3Rpb25pbnB1dCc7XG4gICAgICAgIHF1ZXN0aW9uSW5wdXQubWluTGVuZ3RoID0gMTtcbiAgICAgICAgcXVlc3Rpb25JbnB1dC5tYXhMZW5ndGggPSAzMDA7XG5cbiAgICAgICAgY29uc3QgcXVlc3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcXVlc3Rpb25EaXYuY2xhc3NOYW1lID0gJ3F1ZXN0aW9uZGl2JztcbiAgICAgICAgcXVlc3Rpb25EaXYuYXBwZW5kKHF1ZXN0aW9uTGFiZWwsIHF1ZXN0aW9uSW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IGFuc3dlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgYW5zd2VyTGFiZWwuaHRtbEZvciA9ICdhbnN3ZXJpbnB1dCc7XG4gICAgICAgIGFuc3dlckxhYmVsLmlubmVyVGV4dCA9ICdBbnN3ZXI6J1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYW5zd2VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBhbnN3ZXJJbnB1dC5uYW1lID0gJ2Fuc3dlcmlucHV0JztcbiAgICAgICAgYW5zd2VySW5wdXQuaWQgPSAnYW5zd2VyaW5wdXQnO1xuICAgICAgICBhbnN3ZXJJbnB1dC5taW5MZW5ndGggPSAxO1xuICAgICAgICBhbnN3ZXJJbnB1dC5tYXhMZW5ndGggPSAzMDA7XG5cbiAgICAgICAgY29uc3QgYW5zd2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFuc3dlckRpdi5jbGFzc05hbWUgPSAnYW5zd2VyZGl2JztcbiAgICAgICAgYW5zd2VyRGl2LmFwcGVuZChhbnN3ZXJMYWJlbCwgYW5zd2VySW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsQ2FyZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIG1vZGFsQ2FyZEZvcm0uaWQgPSAnbW9kYWwtY2FyZC1mb3JtJztcbiAgICAgICAgbW9kYWxDYXJkRm9ybS5hcHBlbmQocXVlc3Rpb25EaXYsIGFuc3dlckRpdik7XG5cbiAgICAgICAgY29uc3QgdXNlck9wdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdXNlck9wdGlvbnNEaXYuY2xhc3NOYW1lID0gJ3VzZXJvcHRpb25zZGl2JztcblxuICAgICAgICBjb25zdCBhZGROZXh0Q2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGROZXh0Q2FyZEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkIG5leHQgY2FyZCc7XG4gICAgICAgIGFkZE5leHRDYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbGxlci5oYW5kbGVBZGRDYXJkc0Zvcm0obmV3RGVjaywgJ2FkZG1vcmUnKVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmaW5pc2hBZGRpbmdDYXJkc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBmaW5pc2hBZGRpbmdDYXJkc0J1dHRvbi5pbm5lclRleHQgPSAnQWRkIGFuZCBGaW5pc2gnO1xuICAgICAgICBmaW5pc2hBZGRpbmdDYXJkc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlQWRkQ2FyZHNGb3JtKG5ld0RlY2ssICdkb25lYWRkaW5nJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXNlck9wdGlvbnNEaXYuYXBwZW5kKGFkZE5leHRDYXJkQnV0dG9uLCBmaW5pc2hBZGRpbmdDYXJkc0J1dHRvbik7XG4gICAgICAgIG1vZGFsQm9keS5hcHBlbmQobmV3Q2FyZFRpdGxlRGl2LCBtb2RhbENhcmRGb3JtLCB1c2VyT3B0aW9uc0Rpdik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsQWRkQ2FyZElucHV0SGVhZGVyKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbGhlYWRlcmg1Jyk7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9ICdTdGVwIDI6IEFkZCBDYXJkcyc7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZU1vZGFsQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJvZHknKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKG1vZGFsQm9keS5jaGlsZHJlbik7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVzZXRGb3JtKGZvcm0pIHtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTZWN0aW9uVGl0bGUodGl0bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaDEuaW5uZXJUZXh0ID0gdGl0bGVOYW1lO1xuICAgICAgICBoMS5pZCA9IHRpdGxlTmFtZS5zbGljZSgpLnRvTG93ZXJDYXNlKCkgKyAndGl0bGUnO1xuICAgICAgICByZXR1cm4gaDE7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNob3dBZGREZWNrQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgICAgICAgbWVudS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYmFubmVyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhbm5lcmJ1dHRvbicpO1xuICAgICAgICBiYW5uZXJCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWJhbm5lckJ1dHRvbi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2hvd01vZGFsKCkge1xuICAgICAgICBjb25zdCBhZGREZWNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGRlY2tidXR0b24nKTtcbiAgICAgICAgYWRkRGVja0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgc2V0TW9kYWxBdXRvZm9jdXMoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVNYWluVGFnQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgbWFpbkNoaWxkcmVuID0gQXJyYXkuZnJvbShtYWluLmNoaWxkcmVuKTtcbiAgICAgICAgbWFpbkNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbn07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQYWdlKCkge1xuICAgICAgICByZW1vdmVNYWluVGFnQ29udGVudCgpO1xuICAgICAgICByZW5kZXJNb2RhbCgpO1xuICAgICAgICByZW5kZXJCYW5uZXIoKTtcbiAgICAgICAgc2hvd0FkZERlY2tCdXR0b24oKTtcbiAgICAgICAgc2hvd01vZGFsKCk7XG5cbiAgICAgICAgY29uc3Qgb3ZlcnZpZXdTZWN0aW9uID0gcmVuZGVyT3ZlcnZpZXdTZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRvcERlY2tzU2VjdGlvbiA9IHJlbmRlcllvdXJEZWNrcygpO1xuICAgICAgICBjb25zdCBwcmVidWlsdERlY2tzU2VjdGlvbiA9IHJlbmRlclByZUJ1aWx0RGVja3MoKTtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NTZWN0aW9uID0gcmVuZGVyU2V0dGluZ3NTZWN0aW9uKClcbiAgICAgICAgbWFpbi5hcHBlbmQob3ZlcnZpZXdTZWN0aW9uLHRvcERlY2tzU2VjdGlvbiwgcHJlYnVpbHREZWNrc1NlY3Rpb24sIHNldHRpbmdzU2VjdGlvbik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckJhbm5lcigpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTEyIDZWMThNNiAxMkgxOCcpO1xuXG4gICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcblxuICAgICAgICBjb25zdCBiYW5uZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYmFubmVyQnV0dG9uLmlkID0gJ2Jhbm5lcmJ1dHRvbic7XG4gICAgICAgIGJhbm5lckJ1dHRvbi5jbGFzc05hbWUgPSAnYmFubmVyYnV0dG9uJztcbiAgICAgICAgYmFubmVyQnV0dG9uLmFwcGVuZENoaWxkKHN2Zyk7XG5cbiAgICAgICAgY29uc3Qgc2l0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgc2l0ZVRpdGxlLmNsYXNzTmFtZSA9ICdzaXRldGl0bGUnO1xuICAgICAgICBzaXRlVGl0bGUuaW5uZXJUZXh0ID0gJ1N0dWR5IERlY2tzJztcblxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmlkID0gJ2FkZGRlY2tidXR0b24nO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIGEgRGVjayc7XG5cbiAgICAgICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICAgICAgbWVudURpdi5pZCA9ICdtZW51JztcbiAgICAgICAgbWVudURpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXJEaXYuaWQgPSAnY29udGFpbmVyZGl2JztcbiAgICAgICAgY29udGFpbmVyRGl2LmNsYXNzTmFtZSA9ICdjb250YWluZXJkaXYnO1xuICAgICAgICBjb250YWluZXJEaXYuYXBwZW5kKG1lbnVEaXYsIGJhbm5lckJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgaW5uZXJIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5uZXJIZWFkZXJEaXYuY2xhc3NOYW1lID0gJ2lubmVyaGVhZGVyZGl2JztcbiAgICAgICAgaW5uZXJIZWFkZXJEaXYuYXBwZW5kKHNpdGVUaXRsZSwgY29udGFpbmVyRGl2KTtcblxuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIG1haW5IZWFkZXIuaWQgPSAnbWFpbmhlYWRlcic7XG4gICAgICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoaW5uZXJIZWFkZXJEaXYpO1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKG1haW5IZWFkZXIsIGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzZXRNb2RhbCxcbiAgICAgICAgaGlkZU1vZGFsLFxuICAgICAgICByZXNldEZvcm0sXG4gICAgICAgIHJlbmRlclBhZ2UsXG4gICAgICAgIHJlbmRlclN0dWR5U2Vzc2lvbixcbiAgICAgICAgcmVuZGVyU3R1ZHlTZXNzaW9uQ29tcGxldGUsXG4gICAgICAgIHVwZGF0ZVN0dWR5Q2FyZCxcbiAgICAgICAgcmVtb3ZlTWFpblRhZ0NvbnRlbnQsXG4gICAgICAgIHJlbmRlckFkZENhcmRNb2RhbEJvZHksXG4gICAgICAgIH07XG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCAnLi4vc2Nzcy9jc3Mvc3R5bGUuY3NzJztcbmNvbnRyb2xsZXIuc3RhcnRBcHBsaWNhdGlvbigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==