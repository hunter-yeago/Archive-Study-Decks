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






// TODO - No way to leave Study Session early
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxhQUFhLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxhQUFhLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFX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QUFzQjtBQUMvRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBNkI7QUFDekMsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNFQUE2QjtBQUN6QyxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaHhCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7OztBQ0EwQztBQUNYO0FBQy9CLG9FQUEyQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3NzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRnV0dXJlL2luZGV4LmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3Njc3MvY3NzL3N0eWxlLmNzcz9jODlhIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL2RlY2suanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL21vZGVsLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2NyaXB0cy9wcmVidWlsdGRlY2tzLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2NyaXB0cy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3VzZXJkYXRhLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2NyaXB0cy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bFtyb2xlPWxpc3RdLFxcbm9sW3JvbGU9bGlzdF0ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiBtaW4oMzByZW0sIDg1JSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG4ubW9kYWwtaGVhZGVyIGg1IHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxufVxcbi5tb2RhbC1oZWFkZXIgc3BhbiB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubW9kYWwtaGVhZGVyIHNwYW46aG92ZXIsXFxuLm1vZGFsLWhlYWRlciBzcGFuOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWJvZHkge1xcbiAgcGFkZGluZzogMC4xNXJlbSAwLjdyZW07XFxuICBtYXJnaW46IDAuNXJlbSAwIDFyZW0gMDtcXG4gIHdpZHRoOiA5MCU7XFxufVxcbi5tb2RhbC1ib2R5IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuN3JlbTtcXG59XFxuLm1vZGFsLWJvZHkgdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgbWluLWhlaWdodDogMy41cmVtO1xcbiAgbWF4LWhlaWdodDogMTJyZW07XFxufVxcblxcbi5kZWNrbmFtZSxcXG4uZGVja2NhdGVnb3J5LFxcbi5kZWNrZHVlZGF0ZSxcXG4uZGVja2Rlc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbn1cXG5cXG4uZGVja2Rlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZGlzYWJsZWRpbnB1dHRhZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDQwcHg7XFxuICBsZWZ0OiAxOTVweDtcXG4gIGNvbG9yOiBncmV5O1xcbiAgcGFkZGluZzogMCAwIDAgMC41ZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmludmFsaWQge1xcbiAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCByZWQ7XFxufVxcblxcbi5zdWJtaXRidXR0b24ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgcGFkZGluZzogMC4xZW07XFxufVxcblxcbi5xdWVzdGlvbmRpdixcXG4uYW5zd2VyZGl2IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLnVzZXJvcHRpb25zZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICBtYXJnaW4tdG9wOiAyZW07XFxufVxcbi51c2Vyb3B0aW9uc2RpdiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbiAgbWFyZ2luOiAwLjJlbTtcXG59XFxuXFxuLm5ld2NhcmR0aXRsZWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMC4yZW0gMC41ZW0gMC41ZW0gMC41ZW07XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmRlY2tkaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMjBweCwgMWZyKSk7XFxuICBnYXA6IDFlbTtcXG4gIG1hcmdpbjogMC41ZW07XFxufVxcblxcbi5kZWNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcmVtIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgbWluLXdpZHRoOiA5MCU7XFxuICBtaW4taGVpZ2h0OiA4ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzODU2O1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCA1LjV2dywgMS4xcmVtKTtcXG59XFxuXFxuLmRlY2tpbWFnZWFuZG5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZjZDFlO1xcbiAgbWFyZ2luOiAwLjdlbSAwIDAuN2VtIDFlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4uZGVja2ltYWdlYW5kbmFtZSBidXR0b24ge1xcbiAgcGFkZGluZzogMC4yZW07XFxufVxcbi5kZWNraW1hZ2VhbmRuYW1lIGgzIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmRlY2tpbWFnZWFuZG5hbWUgcCB7XFxuICBjb2xvcjogcmdiYSgyNTMsIDI1MywgMjUzLCAwLjY4MSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmRlY2tkZXNjcmlwdGlvbmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi13aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAwLjdlbSAwO1xcbn1cXG4uZGVja2Rlc2NyaXB0aW9uZGl2IHAge1xcbiAgcGFkZGluZzogMC41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5kZWNrZGVzY3JpcHRpb25kaXYgOm50aC1jaGlsZCgyKSB7XFxuICBjb2xvcjogcmdiYSgyNTMsIDI1MywgMjUzLCAwLjY4MSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLml0c2VtcHR5bWVzc2FnZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5yb3dvZmNhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiBjbGFtcCgwLjVlbSwgMy41dncsIDJlbSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGdhcDogY2xhbXAoMC4zZW0sIDJ2dywgMS41ZW0pO1xcbn1cXG5cXG4ub3ZlcnZpZXdmbGV4Ym94ZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAwLjNlbTtcXG59XFxuXFxuLm92ZXJ2aWV3Y2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbiAgcGFkZGluZzogY2xhbXAoMC4zZW0sIDJ2dywgMWVtKTtcXG59XFxuLm92ZXJ2aWV3Y2FyZCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxuLm92ZXJ2aWV3Y2FyZCBpbWcge1xcbiAgd2lkdGg6IGNsYW1wKDEuNnJlbSwgMy41dncsIDJyZW0pO1xcbn1cXG4ub3ZlcnZpZXdjYXJkIGgzIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC45cmVtLCAzLjV2dywgMS4xcmVtKTtcXG59XFxuLm92ZXJ2aWV3Y2FyZCBwIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4zcmVtLCA1LjV2dywgMnJlbSk7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjEycmVtO1xcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA1cHg7XFxufVxcblxcbi5ncmVlbmNhcmR1bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMzRDMzgxICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ibHVlY2FyZHVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwNDZGQzYgIWltcG9ydGFudDtcXG59XFxuXFxuLmJyaWNrY2FyZHVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNFRDZENDcgIWltcG9ydGFudDtcXG59XFxuXFxuLnN1bnNoaW5lY2FyZHVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNGRkJBMTcgIWltcG9ydGFudDtcXG59XFxuXFxuLnNldHRpbmdzc2VjdGlvbiBzZWxlY3Qge1xcbiAgcGFkZGluZzogMC4zZW07XFxufVxcblxcbi5kZWNrZGVsZXRlb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZGVsZXRlZGVja2RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4uZGVsZXRlZGVja2RpdiBidXR0b24ge1xcbiAgcGFkZGluZzogMC4xZW07XFxufVxcblxcbi5yZXNldGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMXJlbSBhdXRvIGF1dG8gYXV0bztcXG4gIGNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLmlubmVyaGVhZGVyZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtIDAgMS41cmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MmUzZTtcXG59XFxuLmlubmVyaGVhZGVyZGl2IGgxIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZjZDFlO1xcbn1cXG5cXG4uY29udGFpbmVyZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuc3ZnIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG59XFxuc3ZnIHBhdGgge1xcbiAgc3Ryb2tlOiB3aGl0ZTtcXG4gIHN0cm9rZS13aWR0aDogMnB4O1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbn1cXG5cXG4uYmFubmVyYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogMi40cmVtO1xcbiAgcGFkZGluZzogMGVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNTVmZjtcXG59XFxuXFxuLmJhbm5lcmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzZWQ5O1xcbn1cXG5cXG4ubWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLXRvcDogM2VtO1xcbn1cXG4ubWVudSBidXR0b24ge1xcbiAgbWluLXdpZHRoOiA4cmVtO1xcbiAgcGFkZGluZzogMC43ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwODJkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4MmUzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVudSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMDgyZDtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLm1lbnUuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm5hdi1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDhyZW07XFxufVxcbi5uYXYtcmlnaHQgcCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpZGVuYXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG1hcmdpbi10b3A6IDQyLjNweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5zaWRlbmF2LmFjdGl2ZSB7XFxuICB3aWR0aDogMTVyZW07XFxufVxcblxcbi5zaWRlbmF2aW5uZXJkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAycmVtIDAgMCAycmVtO1xcbn1cXG4uc2lkZW5hdmlubmVyZGl2IGEge1xcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbSAwLjRyZW0gMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zaXRpb246IDAuMiAwLjVzO1xcbn1cXG4uc2lkZW5hdmlubmVyZGl2IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uc2lkZW5hdmlubmVyZGl2IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3R1ZHljYXJkZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG4uc3R1ZHljYXJkZGl2IGRpdiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtaW4td2lkdGg6IDUwJTtcXG4gIG1pbi1oZWlnaHQ6IDVyZW07XFxufVxcbi5zdHVkeWNhcmRkaXYgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuOSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMjEsIDEyMSwgMTIxLCAwLjkpO1xcbn1cXG5cXG4ubnVtYmVyb2ZjYXJkcyB7XFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxufVxcblxcbi5zdHVkeWRpdiB7XFxuICBtYXJnaW46IDAgMS4yZW0gMCAxLjJlbTtcXG59XFxuLnN0dWR5ZGl2IGgxIHtcXG4gIG1hcmdpbi10b3A6IDAuNSBlbTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uZmxpcC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjUlIDEwJTtcXG4gIHdpZHRoOiBjbGFtcCgxOC43NXJlbSwgMzB2dywgMjVyZW0pO1xcbiAgaGVpZ2h0OiBjbGFtcCgxOC43NXJlbSwgMzB2dywgMjVyZW0pO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG59XFxuXFxuLmZsaXAtY2FyZC1pbm5lciB7XFxuICB3aWR0aDogY2xhbXAoMTguNzVyZW0sIDMwdncsIDI1cmVtKTtcXG4gIGhlaWdodDogY2xhbXAoMTguNzVyZW0sIDMwdncsIDI1cmVtKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyNSUgMTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbi5mbGlwLWNhcmQtaW5uZXIuYWN0aXZhdGVkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4uZmxpcC1jYXJkLWZyb250LCAuZmxpcC1jYXJkLWJhY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmZsaXAtY2FyZC1mcm9udCB7XFxuICB3aWR0aDogY2xhbXAoMTguNzVyZW0sIDMwdncsIDI1cmVtKTtcXG4gIGhlaWdodDogY2xhbXAoMTguNzVyZW0sIDMwdncsIDI1cmVtKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmNkMWU7XFxuICBib3JkZXItcmFkaXVzOiAyNSUgMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmZsaXAtY2FyZC1iYWNrIHtcXG4gIHdpZHRoOiBjbGFtcCgxOC43NXJlbSwgMzB2dywgMjVyZW0pO1xcbiAgaGVpZ2h0OiBjbGFtcCgxOC43NXJlbSwgMzB2dywgMjVyZW0pO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmY2QxZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JSAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcblxcbi5idXR0b25zc3BhbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAxZW07XFxufVxcbi5idXR0b25zc3BhbiBidXR0b24ge1xcbiAgcGFkZGluZzogY2xhbXAoMC4zcmVtLCAyLjV2dywgMC43cmVtKTtcXG59XFxuXFxuLmNvbmdyYXRzZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzZW07XFxuICBtYXJnaW46IDNlbSAxZW0gMWVtIDFlbTtcXG59XFxuLmNvbmdyYXRzZGl2IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAucm93b2ZjYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAwLjdlbTtcXG4gIH1cXG4gIC5kZWNrZGlzcGxheSB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNjBweCwgMWZyKSk7XFxuICB9XFxuICAuZGVjayB7XFxuICAgIG1pbi1oZWlnaHQ6IDExZW07XFxuICB9XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwODJkO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLm1vYmlsZW5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIG1pbi1oZWlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuLm1vYmlsZW5hdiBpbWcge1xcbiAgd2lkdGg6IDJyZW07XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLm1vYmlsZW5hdiBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4ubW9iaWxlbmF2IGgzIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGdyZXk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAuNWVtIGNsYW1wKDAuMmVtLCAydncsIDEuNWVtKTtcXG59XFxuc2VjdGlvbiBoMSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjZyZW0sIDJ2dywgMy41cmVtKTtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jc3Mvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbW9kYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9feW91cmRlY2tzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX292ZXJ2aWV3LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19kZWNrc2V0dGluZ3Muc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2Jhbm5lci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fc2lkZW5hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fc3R1ZHlzZXNzaW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19icmVha3BvaW50LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQUE7QUFDQTs7O0VBR0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBLDBCQUFBO0FBQ0E7Ozs7Ozs7Ozs7RUFVRSxTQUFBO0FDQ0Y7O0FERUEsMkdBQUE7QUFDQTs7RUFFRSxnQkFBQTtBQ0NGOztBREVBLDJCQUFBO0FBQ0E7RUFDRSx1QkFBQTtBQ0NGOztBREVBLDJCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQSwwREFBQTtBQUNBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQSxvQ0FBQTtBQUNBOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUEseUNBQUE7QUFDQTs7OztFQUlFLGFBQUE7QUNDRjs7QURFQSxnR0FBQTtBQUNBO0VBQ0U7SUFDQyxxQkFBQTtFQ0NEO0VERUE7OztJQUdFLHFDQUFBO0lBQ0EsdUNBQUE7SUFDQSxzQ0FBQTtJQUNBLGdDQUFBO0VDQUY7QUFDRjtBQ3hFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRDBFSjs7QUN2RUE7RUNGSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFREVBLHNCQUFBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Es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RUFDQSxvQkFBQTtBWDBsQlI7QVd2bEJJO0VUNUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VTeUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBWDhsQlI7QVczbEJJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QVg2bEJSOztBV3psQkE7RVRwREksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RVNvREEsc0JBQUE7RUFDQSx1Q0FBQTtBWDhsQko7QVc3bEJJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QVgrbEJSOztBQUVBLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRnV0dXJlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBmdXR1cmU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIGZ1dHVyZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAzMSBEZWNlbWJlciAyMDE0IGluIHRoZSBmdXR1cmU/XG4gKiBjb25zdCByZXN1bHQgPSBpc0Z1dHVyZShuZXcgRGF0ZSgyMDE0LCAxMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGdXR1cmUoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpID4gRGF0ZS5ub3coKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IENhcmQgPSB7XG4gICAgcXVlc3Rpb246IG51bGwsXG4gICAgYW5zd2VyOiBudWxsLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZChmb3JtRGF0YU9iaikge1xuXG4gICAgY29uc3QgbmV3Q2FyZCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShDYXJkKSwge1xuICAgICAgICBxdWVzdGlvbjogZm9ybURhdGFPYmoucXVlc3Rpb25pbnB1dCxcbiAgICAgICAgYW5zd2VyOiBmb3JtRGF0YU9iai5hbnN3ZXJpbnB1dCxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3Q2FyZDtcbn0iLCJpbXBvcnQgeyBtb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XG5pbXBvcnQgeyB2aWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgcHJlQnVpbHREZWNrcyB9IGZyb20gXCIuL3ByZWJ1aWx0ZGVja3NcIjtcblxuXG4vLyBUT0RPIC0gTm8gd2F5IHRvIGxlYXZlIFN0dWR5IFNlc3Npb24gZWFybHlcbi8vIFRPRE8gdGhlcmVzIGEgYnVnIHRoYXQgYWx3YXlzIHBvcHMgdXAgYXQgdGhlIGVuZCBvZiBteSBzdHVkeSBzZXNzaW9ucywgYWx0aG91Z2ggaXQgZG9lc24ndCBicmVlYWsgdGhlIGFwcFxuLy8gVE9ETyBzdGlsbCBoYXZlIHRoYXQgYnVnIHdpdGggaXQgc2F5aW5nIGl0cyBub3QgaW4gdGhlIGZ1dHVyZSBqdXN0IGJlY2F1c2UgdGhlIG1vbnRoZSBpc24ndCBmdXJ0aGVyIVxuLy8gVE9ETyBDTEVBTlxuLy8gVE9ETyBSZWFkTWVcblxuZXhwb3J0IGNvbnN0IGNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcbiAgICBPYnNlcnZhYmxlLnN1YnNjcmliZSgnRGF0YVJlc2V0JywgcmVzZXREYXRhQW5kVmlldyk7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcHJlQnVpbHREZWNrczogcHJlQnVpbHREZWNrcyxcbiAgICAgICAgbG9jYWxEZWNrczogbW9kZWwuZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpLFxuICAgICAgICBQYW5lbHM6IG1vZGVsLmRhdGFQYW5lbHMsXG5cbiAgICAgICAgVXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGVja3MoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFuZWxzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdXBkYXRlRGVja3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbERlY2tzID0gbW9kZWwuZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVwZGF0ZVBhbmVsczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLlBhbmVscyA9IG1vZGVsLmdldExvY2FsUGFuZWxzKCk7XG4gICAgICAgIH0sXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHN0YXJ0QXBwbGljYXRpb24oKSB7XG4gICAgICAgIG1vZGVsLmNoZWNrSWZUaGVyZUlzQWxyZWFkeUxvY2FsbHlTdG9yZWREYXRhKCk7XG4gICAgICAgIGRhdGEuVXBkYXRlKCk7XG4gICAgICAgIHZpZXcucmVuZGVyUGFnZSgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVEZWNrQ3JlYXRpb25Gb3JtKCkge1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNrbmFtZScpO1xuICAgICAgICBjb25zdCBjYXRlZ29yeUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVja2NhdGVnb3J5Jyk7XG4gICAgICAgIGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2tkdWVkYXRlJyk7XG5cbiAgICAgICAgY29uc3QgbmFtZUNoZWNrZXIgPSAgbW9kZWwudmFsaWRhdG9ycy5uYW1lVmFsaWRhdG9yO1xuICAgICAgICBjb25zdCBjYXRlZ29yeUNoZWNrZXIgPSBtb2RlbC52YWxpZGF0b3JzLmNhdGVnb3J5VmFsaWRhdG9yO1xuICAgICAgICBjb25zdCBkYXRlQ2hlY2tlciA9IG1vZGVsLnZhbGlkYXRvcnMuZGF0ZVZhbGlkYXRvcjtcblxuICAgICAgICBuYW1lQ2hlY2tlci5zZXREYXRhKG5hbWVFbGVtZW50LCBuYW1lRWxlbWVudC52YWx1ZS50cmltKCkpO1xuICAgICAgICBjYXRlZ29yeUNoZWNrZXIuc2V0RGF0YShjYXRlZ29yeUVsZW1lbnQsIGNhdGVnb3J5RWxlbWVudC52YWx1ZS50cmltKCkpO1xuICAgICAgICBkYXRlQ2hlY2tlci5zZXREYXRhKGRhdGVFbGVtZW50LCBkYXRlRWxlbWVudC52YWx1ZS50cmltKCkpO1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSBbbmFtZUNoZWNrZXIsIGNhdGVnb3J5Q2hlY2tlciwgZGF0ZUNoZWNrZXJdO1xuICAgICAgICB2YWxpZGF0b3JzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBpbnB1dC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgICAgICBpbnB1dC5zZXRWYWxpZGl0eUNsYXNzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW52YWxpZElucHV0cyA9IHZhbGlkYXRvcnMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmlzVmFsaWQgPT09IGZhbHNlKTtcbiAgICAgICAgaWYgKGludmFsaWRJbnB1dHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW52YWxpZElucHV0cy5mb3JFYWNoKChpbnZhbGlkSW5wdXQpID0+IHtcbiAgICAgICAgICAgICAgICBpbnZhbGlkSW5wdXQuZGlzcGxheVdhcm5pbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhT2JqZWN0ID0gbW9kZWwuY3JlYXRlRm9ybURhdGFPYmplY3QoZm9ybSk7XG4gICAgICAgICAgICBjb25zdCBuZXdEZWNrID0gbW9kZWwuY3JlYXRlRGVjayhmb3JtRGF0YU9iamVjdCk7XG4gICAgICAgICAgICBtb2RlbC5hZGREZWNrVG9Mb2NhbFN0b3JhZ2UobmV3RGVjayk7XG4gICAgICAgICAgICBtb2RlbC5pbmNyZW1lbnRVc2VyRGF0YSgnZGVja3NDcmVhdGVkJyk7XG4gICAgICAgICAgICBkYXRhLlVwZGF0ZSgpO1xuICAgICAgICAgICAgdmlldy5yZXNldEZvcm0oZm9ybSk7XG4gICAgICAgICAgICBtb2RlbC52YWxpZGF0b3JzLnJlc2V0SW5wdXRWYWxpZGl0eSh2YWxpZGF0b3JzKTtcbiAgICAgICAgICAgIHZpZXcucmVuZGVyQWRkQ2FyZE1vZGFsQm9keShuZXdEZWNrKTtcbiAgICAgICAgICAgIE9ic2VydmFibGUucHVibGlzaCgnRGVja3NVcGRhdGVkJywgZGF0YS5sb2NhbERlY2tzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVBZGRDYXJkc0Zvcm0obmV3RGVjaywgc3RhdHVzKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY2FyZC1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb25pbnB1dCcpO1xuICAgICAgICBjb25zdCBhbnN3ZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXJpbnB1dCcpO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uQ2hlY2tlciA9IG1vZGVsLnZhbGlkYXRvcnMucXVlc3Rpb25WYWxpZGF0b3I7XG4gICAgICAgIGNvbnN0IGFuc3dlckNoZWNrZXIgPSBtb2RlbC52YWxpZGF0b3JzLmFuc3dlclZhbGlkYXRvcjtcblxuICAgICAgICBxdWVzdGlvbkNoZWNrZXIuc2V0RGF0YShxdWVzdGlvbklucHV0LCBxdWVzdGlvbklucHV0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgIGFuc3dlckNoZWNrZXIuc2V0RGF0YShhbnN3ZXJJbnB1dCwgYW5zd2VySW5wdXQudmFsdWUudHJpbSgpKTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gW3F1ZXN0aW9uQ2hlY2tlciwgYW5zd2VyQ2hlY2tlcl07XG4gICAgICAgIHZhbGlkYXRvcnMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW52YWxpZElucHV0cyA9IHZhbGlkYXRvcnMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmlzVmFsaWQgPT09IGZhbHNlKTtcbiAgICAgICAgaWYgKGludmFsaWRJbnB1dHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW52YWxpZElucHV0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5kaXNwbGF5V2FybmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhT2JqZWN0ID0gbW9kZWwuY3JlYXRlRm9ybURhdGFPYmplY3QoZm9ybSk7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gbW9kZWwuY3JlYXRlQ2FyZChmb3JtRGF0YU9iamVjdCk7XG4gICAgICAgICAgICBsZXQgZGVja0NvcHkgPSBtb2RlbC5nZXREZWNrRnJvbUxvY2FsU3RvcmFnZShuZXdEZWNrLm5hbWUpO1xuICAgICAgICAgICAgZGVja0NvcHkgPSBtb2RlbC5hZGRDYXJkVG9EZWNrKGNhcmQsIGRlY2tDb3B5KTtcbiAgICAgICAgICAgIG1vZGVsLnVwZGF0ZURlY2tJbkxvY2FsU3RvcmFnZShkZWNrQ29weSk7XG4gICAgICAgICAgICBkYXRhLlVwZGF0ZSgpO1xuICAgICAgICAgICAgbW9kZWwuaW5jcmVtZW50VXNlckRhdGEoJ2NhcmRzQ3JlYXRlZCcpO1xuICAgICAgICAgICAgbW9kZWwudmFsaWRhdG9ycy5yZXNldElucHV0VmFsaWRpdHkodmFsaWRhdG9ycyk7XG4gICAgICAgICAgICBPYnNlcnZhYmxlLnB1Ymxpc2goJ1VwZGF0ZU92ZXJ2aWV3RGF0YScsIGRhdGEuUGFuZWxzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2FkZG1vcmUnKSB7XG4gICAgICAgICAgICAgICAgdmlldy5yZW5kZXJBZGRDYXJkTW9kYWxCb2R5KGRlY2tDb3B5KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnZG9uZWFkZGluZycpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmhpZGVNb2RhbCgpO1xuICAgICAgICAgICAgICAgIHZpZXcucmVzZXRNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldERhdGFBbmRWaWV3KCkge1xuICAgICAgICBtb2RlbC5jbGVhckxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBkYXRhLlVwZGF0ZSgpO1xuICAgICAgICBPYnNlcnZhYmxlLnB1Ymxpc2goJ0RlY2tzVXBkYXRlZCcsIGRhdGEubG9jYWxEZWNrcyk7XG4gICAgICAgIE9ic2VydmFibGUucHVibGlzaCgnVXBkYXRlT3ZlcnZpZXdEYXRhJywgZGF0YS5QYW5lbHMpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzdGFydFN0dWR5U2Vzc2lvbihkZWNrKSB7XG4gICAgICAgIHZpZXcucmVuZGVyU3R1ZHlTZXNzaW9uKGRlY2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dOZXh0U3R1ZHlDYXJkKGRlY2ssIG9wZXJhdGlvbikge1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICdzaG93bmV4dCcpIHtcbiAgICAgICAgICAgIGlmIChkZWNrLmN1cnJlbnRDYXJkICsgMSA9PT0gZGVjay5jYXJkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBtb2RlbC51cGRhdGVDdXJyZW50Q2FyZChkZWNrLCAncmVzZXQnKTtcbiAgICAgICAgICAgICAgICB2aWV3LnJlbW92ZU1haW5UYWdDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgdmlldy5yZW5kZXJTdHVkeVNlc3Npb25Db21wbGV0ZShkZWNrKTtcbiAgICAgICAgICAgICAgICBtb2RlbC5pbmNyZW1lbnRVc2VyRGF0YSgnZGVja3NTdHVkaWVkJyk7XG4gICAgICAgICAgICAgICAgbW9kZWwuaW5jcmVtZW50VXNlckRhdGEoJ2NhcmRzU3R1ZGllZCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbC51cGRhdGVDdXJyZW50Q2FyZChkZWNrLCBvcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgIHZpZXcudXBkYXRlU3R1ZHlDYXJkKGRlY2spO1xuICAgICAgICAgICAgICAgIG1vZGVsLmluY3JlbWVudFVzZXJEYXRhKCdjYXJkc1N0dWRpZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnc2hvd3ByZXZpb3VzJykge1xuICAgICAgICAgICAgbW9kZWwudXBkYXRlQ3VycmVudENhcmQoZGVjaywgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgIHZpZXcudXBkYXRlU3R1ZHlDYXJkKGRlY2spO1xuICAgICAgICAgICAgbW9kZWwuZGVjcmVtZW50VXNlckRhdGEoJ2NhcmRzU3R1ZGllZCcpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlRGVjayhkZWNrTmFtZSkge1xuICAgICAgICBtb2RlbC5kZWxldGVEZWNrRnJvbUxvY2FsU3RvcmFnZShkZWNrTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZGVsZXRlRGVjayxcbiAgICAgICAgc3RhcnRBcHBsaWNhdGlvbixcbiAgICAgICAgc3RhcnRTdHVkeVNlc3Npb24sXG4gICAgICAgIHNob3dOZXh0U3R1ZHlDYXJkLFxuICAgICAgICBoYW5kbGVBZGRDYXJkc0Zvcm0sXG4gICAgICAgIGhhbmRsZURlY2tDcmVhdGlvbkZvcm0sXG4gICAgfVxufSkoKTsiLCJleHBvcnQgY29uc3QgRGVjayA9IHtcbiAgICBuYW1lOiAnZGVmYXVsdCBuYW1lJyxcbiAgICBkZXNjcmlwdGlvbjogJ2RlZmF1bHQgZGVzY3JpcHRpb24nLFxuICAgIGR1ZURhdGU6ICdkZWZhdWx0IGR1ZURhdGUnLFxuICAgIGNhdGVnb3J5OiAnZGVmYXVsdCBjYXRlZ29yeScsXG4gICAgY3VycmVudENhcmQ6IDAsXG4gICAgY2FyZENvdW50OiAwLFxuICAgIGNhcmRzOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWNrQXJyYXkgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlY2soZm9ybURhdGFPYmopIHtcbiAgICBcbiAgICBjb25zdCBuZXdEZWNrID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKERlY2spLCB7XG4gICAgICAgIG5hbWU6IGZvcm1EYXRhT2JqLmRlY2tuYW1lLFxuICAgICAgICBjYXRlZ29yeTogZm9ybURhdGFPYmouZGVja2NhdGVnb3J5LFxuICAgICAgICBkZXNjcmlwdGlvbjogZm9ybURhdGFPYmouZGVja2Rlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBtYWtlRGF0ZVJlYWRhYmxlKGZvcm1EYXRhT2JqLmRlY2tkdWVkYXRlKSxcbiAgICAgICAgY3VycmVudENhcmQ6IDAsXG4gICAgICAgIGNhcmRDb3VudDogMCxcbiAgICAgICAgY2FyZHM6IFtdLFxuICAgIH0pO1xuICAgIHJldHVybiBuZXdEZWNrO1xufTtcblxuZnVuY3Rpb24gbWFrZURhdGVSZWFkYWJsZShkYXRlRGF0YSkge1xuICAgIGNvbnN0IGFycmF5ID0gZGF0ZURhdGEuc3BsaXQoJy0nKTtcbiAgICBjb25zdCB5ZWFyID0gYXJyYXlbMF07XG4gICAgY29uc3QgbW9udGggPSBjb252ZXJ0TW9udGhOdW1iZXJUb01vbnRoTmFtZShhcnJheVsxXSk7XG4gICAgY29uc3QgZGF5ID0gY29udmVydERheU51bWJlclRvTnRoRGF5T2ZNb250aChhcnJheVsyXSk7XG4gICAgcmV0dXJuIGAke21vbnRofSAke2RheX0sICR7eWVhcn1gO1xufTtcblxuZnVuY3Rpb24gY29udmVydE1vbnRoTnVtYmVyVG9Nb250aE5hbWUobnVtYmVyKSB7XG4gICAgbnVtYmVyID0gcGFyc2VJbnQobnVtYmVyLCAxMCk7XG4gICAgY29uc3QgbW9udGhzID0ge1xuICAgICAgICAxOiAnSmFudWFyeScsXG4gICAgICAgIDI6ICdGZWJydWFyeScsXG4gICAgICAgIDM6ICdNYXJjaCcsXG4gICAgICAgIDQ6ICdBcHJpbCcsXG4gICAgICAgIDU6ICdNYXknLFxuICAgICAgICA2OiAnSnVuZScsXG4gICAgICAgIDc6ICdKdWx5JyxcbiAgICAgICAgODogJ0F1Z3VzdCcsXG4gICAgICAgIDk6ICdTZXB0ZW1iZXInLFxuICAgICAgICAxMDogJ09jdG9iZXInLFxuICAgICAgICAxMTogJ05vdmVtYmVyJyxcbiAgICAgICAgMTI6ICdEZWNlbWJlcicsXG4gICAgfVxuICAgIHJldHVybiBtb250aHNbbnVtYmVyXTtcbn07XG5cbmZ1bmN0aW9uIGNvbnZlcnREYXlOdW1iZXJUb050aERheU9mTW9udGgobnVtYmVyKSB7XG4gICAgY29uc3QgbnRoRGF5ID0ge1xuICAgICAgICAxOiAnc3QnLFxuICAgICAgICAyOiAnbmQnLFxuICAgICAgICAzOiAncmQnLFxuICAgICAgICA0OiAndGgnLCA1OiAndGgnLCA2OiAndGgnLCA3OiAndGgnLCA4OiAndGgnLFxuICAgICAgICA5OiAndGgnLCAxMDogJ3RoJywgMTE6ICd0aCcsIDEyOiAndGgnLCBcbiAgICAgICAgMTM6ICd0aCcsIDE0OiAndGgnLCAxNTogJ3RoJywgMTY6ICd0aCcsIFxuICAgICAgICAxNzogJ3RoJywgMTg6ICd0aCcsIDE5OiAndGgnLCAyMDogJ3RoJyxcbiAgICAgICAgMjE6ICdzdCcsXG4gICAgICAgIDIyOiAnbmQnLFxuICAgICAgICAyMzogJ3JkJyxcbiAgICAgICAgMjQ6ICd0aCcsIDI1OiAndGgnLCAyNjogJ3RoJywgMjc6ICd0aCcsIFxuICAgICAgICAyODogJ3RoJywgMjk6ICd0aCcsIDMwOiAndGgnLFxuICAgICAgICAzMTogJ3N0JyxcbiAgICB9O1xuICAgIHJldHVybiBgJHtudW1iZXJ9JHtudGhEYXlbbnVtYmVyXX1gO1xufTsiLCJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRycykge1xuICAgIGZvcih2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG59XG4gICIsImltcG9ydCB7IHZhbGlkYXRvcnMgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBjcmVhdGVEZWNrLCBkZWNrQXJyYXl9IGZyb20gJy4vZGVjayc7XG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSAnLi9jYXJkJztcbmltcG9ydCB7IHByZUJ1aWx0RGVja3MgfSBmcm9tICcuL3ByZWJ1aWx0ZGVja3MnO1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgeyBuZXdVc2VyRGF0YSwgZGF0YVBhbmVsc30gZnJvbSAnLi91c2VyZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBtb2RlbCA9IChmdW5jdGlvbigpe1xuXG4gICAgbGV0IGN1cnJlbnRQYWdlID0gJyc7XG5cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50UGFnZShwYWdlKSB7XG4gICAgICAgIGN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50UGFnZTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tJZlRoZXJlSXNBbHJlYWR5TG9jYWxseVN0b3JlZERhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRlY2tzID0gbW9kZWwuZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBpZiAoIWRlY2tzIHx8IGRlY2tzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXNldERlY2tBcnJheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFuZWxzID0gbW9kZWwuZ2V0TG9jYWxQYW5lbHMoKTtcbiAgICAgICAgaWYgKCFwYW5lbHMgfHwgcGFuZWxzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXNldERhdGFQYW5lbERhdGEoZGF0YVBhbmVscyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gbW9kZWwuZ2V0VXNlckRhdGEoKTtcbiAgICAgICAgaWYgKCF1c2VyRGF0YSB8fCB1c2VyRGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzZXROZXdVc2VyRGF0YShuZXdVc2VyRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREZWNrQXJyYXlGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaXRlbXMgPSB7IC4uLmxvY2FsU3RvcmFnZX07XG4gICAgICAgIGlmIChpdGVtcy5oYXNPd25Qcm9wZXJ0eSgnZGVja2FycmF5JykpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlY2thcnJheScpKSk7ICAgIFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldERlY2tGcm9tTG9jYWxTdG9yYWdlKGRlY2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IGRlY2tzID0gZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICByZXR1cm4gZGVja3MuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gZGVja05hbWUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRDYXJkdG9EZWNrKGNhcmQsIGRlY2spIHtcbiAgICAgICAgZGVjay5jYXJkcy5wdXNoKGNhcmQpO1xuICAgICAgICByZXR1cm4gZGVjaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldERlY2tBcnJheSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlY2thcnJheScsIEpTT04uc3RyaW5naWZ5KGRlY2tBcnJheSkpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEZWNrSW5Mb2NhbFN0b3JhZ2UoZGVjaykge1xuICAgICAgICBjb25zdCBkZWNrcyA9IGdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgY29uc3QgZm91bmREZWNrID0gZ2V0RGVja0Zyb21Mb2NhbFN0b3JhZ2UoZGVjay5uYW1lKVxuICAgICAgICBmb3VuZERlY2suY2FyZHMgPSBkZWNrLmNhcmRzO1xuICAgICAgICBmb3VuZERlY2suY2FyZENvdW50ID0gZGVjay5jYXJkQ291bnQ7XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSBkZWNrcy5maW5kSW5kZXgoZCA9PiBkLm5hbWUgPT09IGZvdW5kRGVjay5uYW1lKTtcbiAgICAgICAgZGVja3NbaW5kZXhdID0gZm91bmREZWNrO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVja2FycmF5JywgSlNPTi5zdHJpbmdpZnkoZGVja3MpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGREZWNrVG9Mb2NhbFN0b3JhZ2UoZGVjaykge1xuICAgICAgICBjb25zdCBhcnJheU9mRGVja3MgPSBnZXREZWNrQXJyYXlGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGFycmF5T2ZEZWNrcy5wdXNoKGRlY2spO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVja2FycmF5JywgSlNPTi5zdHJpbmdpZnkoYXJyYXlPZkRlY2tzKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFkZENhcmRUb0RlY2soY2FyZCwgZGVjaykge1xuICAgICAgICBkZWNrLmNhcmRzLnB1c2goY2FyZCk7XG4gICAgICAgIGRlY2suY2FyZENvdW50Kys7XG4gICAgICAgIHJldHVybiBkZWNrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZURlY2tGcm9tTG9jYWxTdG9yYWdlKGRlY2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IGRlY2tzID0gZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBjb25zdCBkZWNrVG9EZWxldGUgPSBnZXREZWNrRnJvbUxvY2FsU3RvcmFnZShkZWNrTmFtZSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGVja3MuZmluZEluZGV4KGQgPT4gZC5uYW1lID09PSBkZWNrVG9EZWxldGUubmFtZSk7XG4gICAgICAgIGRlY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWNrYXJyYXknLCBKU09OLnN0cmluZ2lmeShkZWNrcykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0RGF0YVBhbmVsRGF0YSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGFwYW5lbHMnLCBKU09OLnN0cmluZ2lmeShkYXRhUGFuZWxzKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldERhdGFQYW5lbERhdGEodXBkYXRlZFBhbmVscykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YXBhbmVscycsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQYW5lbHMpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxQYW5lbHMoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhcGFuZWxzJykpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRMb2NhbFBhbmVsKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFuZWxzID0gQXJyYXkuZnJvbShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhcGFuZWxzJykpKTtcbiAgICAgICAgcGFuZWxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVzZXROZXdVc2VyRGF0YSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJkYXRhJywgSlNPTi5zdHJpbmdpZnkobmV3VXNlckRhdGEpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0VXNlckRhdGEoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmRhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFVzZXJEYXRhKCkge1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0geyAuLi5sb2NhbFN0b3JhZ2V9O1xuXG4gICAgICAgIGlmIChpdGVtcy5oYXNPd25Qcm9wZXJ0eSgndXNlcmRhdGEnKSkge1xuICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcmRhdGEnKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0Tm9uUGFyc2VkVXNlckRhdGEoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0geyAuLi5sb2NhbFN0b3JhZ2V9O1xuICAgICAgICBpZiAoaXRlbXMuaGFzT3duUHJvcGVydHkoJ3VzZXJkYXRhJykpIHtcblxuICAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJkYXRhJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluY3JlbWVudFVzZXJEYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBnZXRVc2VyRGF0YSgpO1xuICAgICAgICB1c2VyRGF0YVtkYXRhXSA9IHVzZXJEYXRhW2RhdGFdICsgMTtcbiAgICAgICAgc2V0VXNlckRhdGEodXNlckRhdGEpO1xuXG4gICAgICAgIGNvbnN0IHBhbmVscyA9IGdldExvY2FsUGFuZWxzKCk7XG4gICAgICAgIHBhbmVscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShkYXRhKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uc3RhdGlzdGljID0gaXRlbS5zdGF0aXN0aWMgKyAxO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBzZXREYXRhUGFuZWxEYXRhKHBhbmVscyk7XG4gICAgICAgIGNvbnRyb2xsZXIuZGF0YS5VcGRhdGUoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGVjcmVtZW50VXNlckRhdGEoZGF0YSkge1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGdldFVzZXJEYXRhKCk7XG4gICAgICAgIHVzZXJEYXRhW2RhdGFdID0gdXNlckRhdGFbZGF0YV0gLSAxO1xuICAgICAgICBzZXRVc2VyRGF0YSh1c2VyRGF0YSk7XG5cbiAgICAgICAgY29uc3QgbmV3ZGF0YSA9IGdldFVzZXJEYXRhKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRDYXJkKGRlY2ssIG9wZXJhdGlvbikge1xuXG4gICAgICAgIGNvbnN0IGRlY2tJc1ByZWJ1aWx0ID0gY2hlY2tJZkRlY2tJc1ByZUJ1aWx0KGRlY2ssIGNvbnRyb2xsZXIuZGF0YS5wcmVCdWlsdERlY2tzKTtcbiAgICAgICAgaWYgKGRlY2tJc1ByZWJ1aWx0ICYmIG9wZXJhdGlvbiA9PT0gJ3Jlc2V0Jykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcmVCdWlsdERlY2tzLmluZGV4T2YoZGVjayk7XG4gICAgICAgICAgICBjb250cm9sbGVyLmRhdGEucHJlQnVpbHREZWNrc1tpbmRleF0uY3VycmVudENhcmQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJ3Jlc2V0JykgeyBnZXREZWNrRnJvbUxvY2FsU3RvcmFnZShkZWNrLm5hbWUpLmN1cnJlbnRDYXJkID0gMDsgfSBcbiAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnc2hvd25leHQnKSB7IGRlY2suY3VycmVudENhcmQrKzsgfSBcbiAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnc2hvd3ByZXZpb3VzJykgeyBkZWNrLmN1cnJlbnRDYXJkLS07IH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tJZkRlY2tJc1ByZUJ1aWx0KGRlY2ssIHByZUJ1aWx0RGVja3MpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVCdWlsdERlY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJlQnVpbHREZWNrc1tpXSA9PT0gZGVjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICByZXNldE5ld1VzZXJEYXRhKCk7XG4gICAgICAgIHJlc2V0RGF0YVBhbmVsRGF0YSgpXG4gICAgICAgIHJlc2V0RGVja0FycmF5KCk7XG4gICAgICAgIGNvbnRyb2xsZXIuZGF0YS5VcGRhdGUoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9ybURhdGFPYmplY3QoZm9ybSkge1xuICAgICAgICBjb25zdCBteUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICBjb25zdCBmb3JtRGF0YU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhteUZvcm1EYXRhLmVudHJpZXMoKSk7XG4gICAgICAgIHJldHVybiBmb3JtRGF0YU9iajtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YVBhbmVscyxcbiAgICAgICAgdmFsaWRhdG9ycyxcbiAgICAgICAgY3JlYXRlQ2FyZCxcbiAgICAgICAgYWRkQ2FyZFRvRGVjayxcbiAgICAgICAgY3JlYXRlRGVjayxcbiAgICAgICAgZ2V0TG9jYWxQYW5lbCxcbiAgICAgICAgZ2V0TG9jYWxQYW5lbHMsXG4gICAgICAgIHJlc2V0RGF0YVBhbmVsRGF0YSxcbiAgICAgICAgaW5jcmVtZW50VXNlckRhdGEsXG4gICAgICAgIGdldE5vblBhcnNlZFVzZXJEYXRhLFxuICAgICAgICByZXNldERlY2tBcnJheSxcbiAgICAgICAgY2hlY2tJZlRoZXJlSXNBbHJlYWR5TG9jYWxseVN0b3JlZERhdGEsXG4gICAgICAgIGRlbGV0ZURlY2tGcm9tTG9jYWxTdG9yYWdlLFxuICAgICAgICB1cGRhdGVEZWNrSW5Mb2NhbFN0b3JhZ2UsXG4gICAgICAgIGRlY3JlbWVudFVzZXJEYXRhLFxuICAgICAgICBnZXRVc2VyRGF0YSxcbiAgICAgICAgcmVzZXROZXdVc2VyRGF0YSxcbiAgICAgICAgZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSxcbiAgICAgICAgZ2V0Q3VycmVudFBhZ2UsXG4gICAgICAgIHNldEN1cnJlbnRQYWdlLFxuICAgICAgICBhZGRDYXJkdG9EZWNrLFxuICAgICAgICB1cGRhdGVDdXJyZW50Q2FyZCxcbiAgICAgICAgY2xlYXJMb2NhbFN0b3JhZ2UsXG4gICAgICAgIGNyZWF0ZUZvcm1EYXRhT2JqZWN0LFxuICAgICAgICBhZGREZWNrVG9Mb2NhbFN0b3JhZ2UsXG4gICAgICAgIGdldERlY2tGcm9tTG9jYWxTdG9yYWdlLFxuICAgIH07XG59KSgpOyIsImltcG9ydCB7IERlY2sgfSBmcm9tICcuL2RlY2snO1xuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gJy4vY2FyZCc7XG5cbmNvbnN0IGZyZW5jaENhcmRzID0gY3JlYXRlRnJlbmNoQ2FyZHMoKTtcbmNvbnN0IGZyZW5jaERlY2sgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoRGVjayksIHtcbiAgICBuYW1lOiAnRnJlbmNoJyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgZGVjayB0byBsZWFybiAxMCBiYXNpYyBGcmVuY2ggd29yZHMnLFxuICAgIGR1ZURhdGU6ICdOZXh0IFdlZWsnLFxuICAgIGNhdGVnb3J5OiAnTGFuZ3VhZ2VzJyxcbiAgICBjdXJyZW50Q2FyZDogMCxcbiAgICBjYXJkQ291bnQ6IDAsXG4gICAgY2FyZHM6IGZyZW5jaENhcmRzLFxufSk7XG4gICAgXG5mdW5jdGlvbiBjcmVhdGVGcmVuY2hDYXJkcygpIHtcblxuICAgIGNvbnN0IGZyZW5jaENhcmRPbmUgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBtYW5cXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuIGhvbW1lJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRUd28gPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSB0cmVlXFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1biBhcmJyZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkVGhyZWUgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBjaGFpclxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIGNoYWlzZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkRm91ciA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIGNvbXB1dGVyXFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1biBvcmRpbmF0ZXVyJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRGaXZlID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2Egd2luZG93XFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgZmVuw6p0cmUnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZFNpeCA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIHNjaG9vbFxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIMOpY29sZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkU2V2ZW4gPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBtZW51XFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgY2FydGUnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZEVpZ2h0ID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgZG9jdG9yXFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgdm9pdHVyZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkTmluZSA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIHNoaXJ0XFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgY2hlbWlzZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkVGVuID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgcGFydHlcXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuZSBmw6p0ZScsXG4gICAgfTtcblxuICAgIGNvbnN0IGZyZW5jaENhcmRzID0gW2ZyZW5jaENhcmRPbmUsIGZyZW5jaENhcmRUd28sIGZyZW5jaENhcmRUaHJlZSwgXG4gICAgICAgICAgICAgICAgICAgIGZyZW5jaENhcmRGb3VyLCBmcmVuY2hDYXJkRml2ZSwgZnJlbmNoQ2FyZFNpeCwgXG4gICAgICAgICAgICAgICAgICAgIGZyZW5jaENhcmRTZXZlbiwgZnJlbmNoQ2FyZEVpZ2h0LCBmcmVuY2hDYXJkTmluZSxcbiAgICAgICAgICAgICAgICAgICAgZnJlbmNoQ2FyZFRlbl07XG4gICAgXG4gICAgICAgIGZyZW5jaENhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgY2FyZCA9IGNyZWF0ZUNhcmQoY2FyZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZyZW5jaENhcmRzO1xufVxuZXhwb3J0IGNvbnN0IHByZUJ1aWx0RGVja3MgPSBbZnJlbmNoRGVjaywgZnJlbmNoRGVjaywgZnJlbmNoRGVjaywgZnJlbmNoRGVja107IiwiXG5cbmV4cG9ydCBjb25zdCBPYnNlcnZhYmxlICA9IHtcbiAgICBcbiAgICBldmVudHM6IHtcbiAgICB9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24oZXZOYW1lLCBmbikge1xuICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5wdXNoKGZuKVxuICAgIH0sXG4gICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdLmZpbHRlcihmID0+IGYgIT09IGZuKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24oZXZOYW1lLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICAgICAgZihkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJpbXBvcnQgTGVhcm5pbmdJY29uIGZyb20gJy4uL2ltYWdlcy9sZWFybmluZy1jb2xvci5zdmcnO1xuaW1wb3J0IFN0dWR5TGFtcEljb24gZnJvbSAnLi4vaW1hZ2VzL3N0dWR5LWxhbXAtY29sb3Iuc3ZnJztcbmltcG9ydCBTdHVkeURlc2tJY29uIGZyb20gJy4uL2ltYWdlcy9zdHVkeS1kZXNrLWNvbG9yLnN2Zyc7XG5pbXBvcnQgRWR1Y2F0aW9uSWNvbiBmcm9tICcuLi9pbWFnZXMvZWR1Y2F0aW9uLWNvbG9yLnN2Zyc7XG5cbmV4cG9ydCBjb25zdCBuZXdVc2VyRGF0YSA9IHtcbiAgICB0eXBlOiAndXNlcmRhdGEnLFxuICAgIGRlY2tzQ3JlYXRlZDogMCxcbiAgICBkZWNrc1N0dWRpZWQ6IDAsXG4gICAgY2FyZHNDcmVhdGVkOiAwLFxuICAgIGNhcmRzU3R1ZGllZDogMCxcbn07XG5cbmNvbnN0IERhdGFQYW5lbCA9IHtcbiAgICBpbWFnZXNyYzogbnVsbCxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB1bmRlcmxpbmVjb2xvcjogbnVsbCxcbiAgICBzdGF0aXN0aWM6IG51bGxcbn07XG5cbmNvbnN0IGRlY2tzQ3JlYXRlZFBhbmVsID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKERhdGFQYW5lbCksIHtcbiAgICBpbWFnZXNyYzogTGVhcm5pbmdJY29uLFxuICAgIHRpdGxlOiAnRGVja3MgQ3JlYXRlZCcsXG4gICAgdW5kZXJsaW5lY29sb3I6ICdncmVlbmNhcmR1bmRlcmxpbmUnLFxuICAgIGRlY2tzQ3JlYXRlZDogMCxcbiAgICBzdGF0aXN0aWM6IDAsXG59KTtcblxuY29uc3QgZGVja3NTdHVkaWVkUGFuZWwgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoRGF0YVBhbmVsKSwge1xuICAgIGltYWdlc3JjOiBFZHVjYXRpb25JY29uLFxuICAgIHRpdGxlOiAnRGVja3MgU3R1ZGllZCcsXG4gICAgdW5kZXJsaW5lY29sb3I6ICdibHVlY2FyZHVuZGVybGluZScsXG4gICAgc3RhdGlzdGljOiAwLFxuICAgIGRlY2tzU3R1ZGllZDogMCxcbn0pO1xuXG5jb25zdCBjYXJkc0NyZWF0ZWRQYW5lbCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEYXRhUGFuZWwpLCB7XG4gICAgaW1hZ2VzcmM6IFN0dWR5RGVza0ljb24sXG4gICAgdGl0bGU6ICdDYXJkcyBDcmVhdGVkJyxcbiAgICB1bmRlcmxpbmVjb2xvcjogJ2JyaWNrY2FyZHVuZGVybGluZScsXG4gICAgc3RhdGlzdGljOiAwLFxuICAgIGNhcmRzQ3JlYXRlZDogMCxcbn0pO1xuXG5jb25zdCBjYXJkc1N0dWRpZWRQYW5lbCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEYXRhUGFuZWwpLCB7XG4gICAgaW1hZ2VzcmM6IFN0dWR5TGFtcEljb24sXG4gICAgdGl0bGU6ICdDYXJkcyBTdHVkaWVkJyxcbiAgICB1bmRlcmxpbmVjb2xvcjogJ3N1bnNoaW5lY2FyZHVuZGVybGluZScsXG4gICAgc3RhdGlzdGljOiAwLFxuICAgIGNhcmRzU3R1ZGllZDogMCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGF0YVBhbmVscyA9IFtkZWNrc0NyZWF0ZWRQYW5lbCwgZGVja3NTdHVkaWVkUGFuZWwsIGNhcmRzQ3JlYXRlZFBhbmVsLCBjYXJkc1N0dWRpZWRQYW5lbF07IiwiaW1wb3J0IHsgaXNGdXR1cmUgfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IFZhbGlkYXRvciA9IHtcbiAgICBkYXRhOiBudWxsLFxuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgaXNWYWxpZDogZmFsc2UsXG5cbiAgICBzZXREYXRhOiBmdW5jdGlvbihlbGVtZW50LCBkYXRhKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfSxcblxuICAgIHNldFZhbGlkaXR5Q2xhc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkaXNwbGF5V2FybmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnVGhpcyBmaWVsZCBpcyBpbnZhbGlkJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdG9ycyA9IHtcblxuICAgIG5hbWVWYWxpZGF0b3I6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShWYWxpZGF0b3IpLCB7XG4gICAgICAgIG5hbWVMZW5ndGhJc1ZhbGlkOiBmYWxzZSxcbiAgICAgICAgbmFtZUlzQXZhaWxhYmxlOiBmYWxzZSxcbiAgICBcbiAgICAgICAgY2hlY2tWYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrTGVuZ3RoKCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrTmFtZUF2YWlsYWJpbGl0eSh0aGlzLmlucHV0VmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZUxlbmd0aElzVmFsaWQgJiYgdGhpcy5uYW1lSXNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7dGhpcy5pc1ZhbGlkID0gZmFsc2V9O1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBjaGVja0xlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5uYW1lTGVuZ3RoSXNWYWxpZCA9IHRoaXMuZGF0YS5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBjaGVja05hbWVBdmFpbGFiaWxpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nRGVja05hbWUgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZpbmQoaXRlbSA9PiBpdGVtID09PSB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZUlzQXZhaWxhYmxlID0gZXhpc3RpbmdEZWNrTmFtZSAhPT0gdGhpcy5kYXRhID8gdHJ1ZTogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGRpc3BsYXlXYXJuaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5uYW1lTGVuZ3RoSXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyIGxvbmcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5uYW1lSXNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0RlY2sgYWxyZWFkeSBleGlzdHMsIGNob29zZSBhIGRpZmZlcmVudCBuYW1lJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSxcbiAgICBcbiAgICBjYXRlZ29yeVZhbGlkYXRvcjogT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFZhbGlkYXRvciksIHtcbiAgICBcbiAgICAgICAgY2hlY2tWYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLmRhdGEgIT09ICcnID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBkaXNwbGF5V2FybmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgY2hvb3NlIGEgY2F0ZWdvcnknKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICBcbiAgICBkYXRlVmFsaWRhdG9yOiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoVmFsaWRhdG9yKSwge1xuICAgIFxuICAgICAgICBjaGVja1ZhbGlkaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IHRoaXMuY29udmVydERhdGFUb0RhdGVPYmplY3QodGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGlzRnV0dXJlKHVzZXJJbnB1dCk7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGNvbnZlcnREYXRhVG9EYXRlT2JqZWN0OiBmdW5jdGlvbihkYXRlRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBkYXRlRGF0YS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGFycmF5WzBdO1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBhcnJheVsxXTtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IGFycmF5WzJdO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBkaXNwbGF5V2FybmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdEYXRlIG11c3QgYmUgaW4gdGhlIGZ1dHVyZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIFxuICAgIHF1ZXN0aW9uVmFsaWRhdG9yOiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoVmFsaWRhdG9yKSwge1xuICAgICAgICBtaW5sZW5ndGg6IDEsXG4gICAgICAgIG1heExlbmd0aDogMzAwLFxuICAgIFxuICAgICAgICBjaGVja1ZhbGlkaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuZGF0YS5sZW5ndGggPiAwICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmxlbmd0aCA8IDMwMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgZGlzcGxheVdhcm5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGJlIGJldHdlZW4gMSBhbmQgMzAwIGNoYXJhY3RlcnMnKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIFxuICAgIGFuc3dlclZhbGlkYXRvcjogT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFZhbGlkYXRvciksIHtcbiAgICAgICAgbWlubGVuZ3RoOiAxLFxuICAgICAgICBtYXhMZW5ndGg6IDMwMCxcbiAgICBcbiAgICAgICAgY2hlY2tWYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLmRhdGEubGVuZ3RoID4gMCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sZW5ndGggPCAzMDEgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGRpc3BsYXlXYXJuaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDMwMCBjaGFyYWN0ZXJzJyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcblxuICAgIHJlc2V0SW5wdXRWYWxpZGl0eTogZnVuY3Rpb24oaW5wdXRzKSB7XG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRWYWxpZGl0eUNsYXNzKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuXG4iLCJpbXBvcnQgeyBzZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi9wdWJzdWInO1xuaW1wb3J0IFN0dWR5SWNvbiBmcm9tICcuLi9pbWFnZXMvc3R1ZHlpbmcucG5nJztcbmltcG9ydCBPdmVydmlld0ljb24gZnJvbSAnLi4vaW1hZ2VzL2VkaXQucG5nJztcblxuZXhwb3J0IGNvbnN0IHZpZXcgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5cbiAgICBPYnNlcnZhYmxlLnN1YnNjcmliZSgnRGVja3NVcGRhdGVkJywgbG9jYWxEZWNrcyA9PiB7XG4gICAgICAgIHVwZGF0ZURlY2tEaXNwbGF5KGxvY2FsRGVja3MpO1xuICAgICAgICB1cGRhdGVEZWxldGVEZWNrT3B0aW9ucyhsb2NhbERlY2tzKVxuICAgIH0pO1xuICAgIE9ic2VydmFibGUuc3Vic2NyaWJlKCdVcGRhdGVPdmVydmlld0RhdGEnLCBjYXJkRGF0YSA9PiB7XG4gICAgICAgIHVwZGF0ZU92ZXJ2aWV3Q2FyZHMoY2FyZERhdGEpO1xuICAgIH0pO1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbmRlcllvdXJEZWNrcygpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSByZW5kZXJTZWN0aW9uVGl0bGUoJ1lvdXIgRGVja3MnKTtcbiAgICAgICAgY29uc3QgZGVja0Rpc3BsYXlEaXYgPSByZW5kZXJEZWNrRGlzcGxheShjb250cm9sbGVyLmRhdGEubG9jYWxEZWNrcyk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kKHRpdGxlLCBkZWNrRGlzcGxheURpdik7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQcmVCdWlsdERlY2tzKCkgeyAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGUgPSByZW5kZXJTZWN0aW9uVGl0bGUoJ1ByZWJ1aWx0IERlY2tzJyk7XG4gICAgICAgIGNvbnN0IHByZWJ1aWx0RGVja3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJlYnVpbHREZWNrc0Rpdi5jbGFzc05hbWUgPSAnZGVja2Rpc3BsYXknO1xuICAgICAgICBjb250cm9sbGVyLmRhdGEucHJlQnVpbHREZWNrcy5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICBkZWNrID0gcmVuZGVyRGVjayhkZWNrKTtcbiAgICAgICAgICAgIHByZWJ1aWx0RGVja3NEaXYuYXBwZW5kQ2hpbGQoZGVjayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kKHRpdGxlLCBwcmVidWlsdERlY2tzRGl2KTtcbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckRlY2tEaXNwbGF5KGxvY2FsRGVja3MpIHtcblxuICAgICAgICBjb25zdCBkZWNrRGlzcGxheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWNrRGlzcGxheURpdi5jbGFzc05hbWUgPSAnZGVja2Rpc3BsYXknO1xuICAgICAgICBkZWNrRGlzcGxheURpdi5pZCA9ICdkZWNrZGlzcGxheSc7XG5cbiAgICAgICAgY29uc3QgeW91ckRlY2tzU2VjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3lvdXJEZWNrc1NlY3Rpb25EaXYnKTtcbiAgICAgICAgeW91ckRlY2tzU2VjdGlvbkRpdi5pZCA9ICd5b3VyZGVja3NzZWN0aW9uZGl2JztcbiAgICAgICAgeW91ckRlY2tzU2VjdGlvbkRpdi5hcHBlbmRDaGlsZChkZWNrRGlzcGxheURpdik7XG5cbiAgICAgICAgaWYgKGxvY2FsRGVja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbG9jYWxEZWNrcy5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHJlbmRlckRlY2soZGVjayk7XG4gICAgICAgICAgICAgICAgZGVja0Rpc3BsYXlEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGl0c0VtcHR5TWVzc2FnZSA9IHJlbmRlckl0c0VtcHR5TWVzc2FnZSgpO1xuICAgICAgICAgICAgZGVja0Rpc3BsYXlEaXYuYXBwZW5kQ2hpbGQoaXRzRW1wdHlNZXNzYWdlKTtcbiAgICAgICAgICAgIHlvdXJEZWNrc1NlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoaXRzRW1wdHlNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geW91ckRlY2tzU2VjdGlvbkRpdjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyU3R1ZHlDYXJkU2lkZShjYXJkU2lkZSwgZGVjaykge1xuXG4gICAgICAgIGNvbnN0IG51bWJlck9mQ2FyZHNGcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbnVtYmVyT2ZDYXJkc0Zyb250LmlubmVyVGV4dCA9IGAke2RlY2suY3VycmVudENhcmQgKyAxfSAvICR7ZGVjay5jYXJkcy5sZW5ndGh9YDtcbiAgICAgICAgbnVtYmVyT2ZDYXJkc0Zyb250LmNsYXNzTmFtZSA9ICdudW1iZXJvZmNhcmRzJztcbiAgICAgICAgbnVtYmVyT2ZDYXJkc0Zyb250LmlkID0gYCR7Y2FyZFNpZGV9c2VjdGlvbm51bWJlcm9mY2FyZHNgLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9IGAke2NhcmRTaWRlfTpgO1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgdGV4dC5pZCA9IGAke2NhcmRTaWRlfXRleHRgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChjYXJkU2lkZSA9PT0gJ1F1ZXN0aW9uJykge1xuICAgICAgICAgICAgdGV4dC5pbm5lclRleHQgPSBkZWNrLmNhcmRzW2RlY2suY3VycmVudENhcmRdLnF1ZXN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dC5pbm5lclRleHQgPSBkZWNrLmNhcmRzW2RlY2suY3VycmVudENhcmRdLmFuc3dlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlubmVyRGl2LmFwcGVuZChoZWFkZXIsIHRleHQpO1xuXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2VjdGlvbi5pZCA9IGAke2NhcmRTaWRlfXNlY3Rpb25gLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHNlY3Rpb24uY2xhc3NOYW1lID0gYCR7Y2FyZFNpZGV9c2VjdGlvbmAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmQobnVtYmVyT2ZDYXJkc0Zyb250LCBpbm5lckRpdik7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVN0dWR5Q2FyZChkZWNrKSB7XG4gICAgICAgIGNvbnN0IG51bWJlck9mQ2FyZHNGcm9udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbnNlY3Rpb25udW1iZXJvZmNhcmRzJyk7XG4gICAgICAgIG51bWJlck9mQ2FyZHNGcm9udC5pbm5lclRleHQgPSBgJHtkZWNrLmN1cnJlbnRDYXJkICsgMX0gLyAke2RlY2suY2FyZHMubGVuZ3RofWA7XG5cbiAgICAgICAgY29uc3QgcXVlc3Rpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9udGV4dCcpO1xuICAgICAgICBxdWVzdGlvblRleHQuaW5uZXJUZXh0ID0gZGVjay5jYXJkc1tkZWNrLmN1cnJlbnRDYXJkXS5xdWVzdGlvbjtcblxuICAgICAgICBjb25zdCBhbnN3ZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcnRleHQnKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFuc3dlclRleHQuaW5uZXJUZXh0ID0gZGVjay5jYXJkc1tkZWNrLmN1cnJlbnRDYXJkXS5hbnN3ZXI7XG4gICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICBjb25zdCBudW1iZXJPZkNhcmRzQmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXJzZWN0aW9ubnVtYmVyb2ZjYXJkcycpO1xuICAgICAgICBudW1iZXJPZkNhcmRzQmFjay5pbm5lclRleHQgPSBgJHtkZWNrLmN1cnJlbnRDYXJkICsgMX0gLyAke2RlY2suY2FyZHMubGVuZ3RofWA7XG5cbiAgICAgICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlvdXNidXR0b24nKTtcbiAgICAgICAgaWYgKGRlY2suY3VycmVudENhcmQgPiAwKSB7XG4gICAgICAgICAgICBwcmV2aW91c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmV2aW91c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlY2suY3VycmVudENhcmQgKyAxID09PSBkZWNrLmNhcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRjYXJkYnV0dG9uJykuaW5uZXJUZXh0ID0gJ0ZpbmlzaCBTZXNzaW9uJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckZsaXBDYXJkKHF1ZXN0aW9uU2VjdGlvbiwgYW5zd2VyU2VjdGlvbikge1xuXG4gICAgICAgIGNvbnN0IGZsaXBDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZsaXBDYXJkLmNsYXNzTmFtZSA9ICdmbGlwLWNhcmQnO1xuICAgICAgICBmbGlwQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZsaXBDYXJkSW5uZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZhdGVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZsaXBDYXJkSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmxpcENhcmRJbm5lci5jbGFzc05hbWUgPSAnZmxpcC1jYXJkLWlubmVyJztcbiAgICAgICAgZmxpcENhcmRJbm5lci5pZCA9ICdmbGlwLWNhcmQtaW5uZXInO1xuXG4gICAgICAgIGNvbnN0IGZsaXBDYXJkRnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmxpcENhcmRGcm9udC5jbGFzc05hbWUgPSAnZmxpcC1jYXJkLWZyb250JztcblxuICAgICAgICBjb25zdCBmbGlwQ2FyZEJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmxpcENhcmRCYWNrLmNsYXNzTmFtZSA9ICdmbGlwLWNhcmQtYmFjayc7XG5cbiAgICAgICAgZmxpcENhcmQuYXBwZW5kQ2hpbGQoZmxpcENhcmRJbm5lcik7XG4gICAgICAgIGZsaXBDYXJkSW5uZXIuYXBwZW5kKGZsaXBDYXJkRnJvbnQsIGZsaXBDYXJkQmFjayk7XG4gICAgICAgIGZsaXBDYXJkRnJvbnQuYXBwZW5kQ2hpbGQocXVlc3Rpb25TZWN0aW9uKTtcbiAgICAgICAgZmxpcENhcmRCYWNrLmFwcGVuZENoaWxkKGFuc3dlclNlY3Rpb24pO1xuICAgICAgICByZXR1cm4gZmxpcENhcmQ7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclN0dWR5U2Vzc2lvbihkZWNrKSB7XG5cbiAgICAgICAgY29uc3Qgc3R1ZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3R1ZHlEaXYuY2xhc3NOYW1lID0gJ3N0dWR5ZGl2JztcblxuICAgICAgICBjb25zdCBzdHVkeUNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3R1ZHlDYXJkRGl2LmlkID0gJ3N0dWR5Y2FyZGRpdic7XG4gICAgICAgIHN0dWR5Q2FyZERpdi5jbGFzc05hbWUgPSAnc3R1ZHljYXJkZGl2JztcblxuICAgICAgICBjb25zdCBkZWNrTmFtZUhlYWRlciA9IHJlbmRlclNlY3Rpb25UaXRsZShkZWNrLm5hbWUpO1xuICAgICAgICBkZWNrTmFtZUhlYWRlci5jbGFzc05hbWUgPSAnZGVja25hbWVoZWFkZXInO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uU2VjdGlvbiA9IHJlbmRlclN0dWR5Q2FyZFNpZGUoJ1F1ZXN0aW9uJywgZGVjayk7XG4gICAgICAgIGNvbnN0IGFuc3dlclNlY3Rpb24gPSByZW5kZXJTdHVkeUNhcmRTaWRlKCdBbnN3ZXInLCBkZWNrKTtcblxuICAgICAgICBjb25zdCBwcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcmV2aW91c0J1dHRvbi5pZCA9ICdwcmV2aW91c2J1dHRvbic7XG4gICAgICAgIHByZXZpb3VzQnV0dG9uLmlubmVyVGV4dCA9ICdMYXN0IENhcmQnO1xuICAgICAgICBwcmV2aW91c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuc2hvd05leHRTdHVkeUNhcmQoZGVjaywgJ3Nob3dwcmV2aW91cycpO1xuICAgICAgICAgICAgY29uc3QgZmxpcENhcmRJbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGlwLWNhcmQtaW5uZXInKTtcbiAgICAgICAgICAgIGZsaXBDYXJkSW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZhdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcmV2aW91c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuXG4gICAgICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV4dEJ1dHRvbi5pbm5lclRleHQgPSAnTmV4dCBDYXJkJztcbiAgICAgICAgbmV4dEJ1dHRvbi5pZCA9ICduZXh0Y2FyZGJ1dHRvbic7XG4gICAgICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLnNob3dOZXh0U3R1ZHlDYXJkKGRlY2ssICdzaG93bmV4dCcpO1xuICAgICAgICAgICAgY29uc3QgZmxpcENhcmRJbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGlwLWNhcmQtaW5uZXInKTtcbiAgICAgICAgICAgIGZsaXBDYXJkSW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZhdGVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbnNTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBidXR0b25zU3Bhbi5jbGFzc05hbWUgPSAnYnV0dG9uc3NwYW4nO1xuICAgICAgICBidXR0b25zU3Bhbi5hcHBlbmQocHJldmlvdXNCdXR0b24sIG5leHRCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGZsaXBDYXJkID0gcmVuZGVyRmxpcENhcmQocXVlc3Rpb25TZWN0aW9uLCBhbnN3ZXJTZWN0aW9uKTtcblxuICAgICAgICBzdHVkeUNhcmREaXYuYXBwZW5kKGZsaXBDYXJkLCBidXR0b25zU3Bhbik7XG4gICAgICAgIHN0dWR5RGl2LmFwcGVuZChkZWNrTmFtZUhlYWRlciwgc3R1ZHlDYXJkRGl2KVxuICAgICAgICBtYWluLmFwcGVuZChzdHVkeURpdik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclN0dWR5U2Vzc2lvbkNvbXBsZXRlKGRlY2spIHtcbiAgICAgICAgY29uc3QgY29uZ3JhdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uZ3JhdHNEaXYuY2xhc3NOYW1lID0gJ2NvbmdyYXRzZGl2JztcblxuICAgICAgICBjb25zdCBjZWxlYnJhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNlbGVicmF0aW9uVGV4dC5pbm5lclRleHQgPSBgQ29uZ3JhdHVsYXRpb25zLCB5b3Ugc3R1ZGllZCAke2RlY2suY2FyZHMubGVuZ3RofSBjYXJkcyEgQ2xpY2sgdGhlIGJ1dHRvbiBiZWxvdyB0byByZXR1cm4gdG8geW91ciBkZWNrcyBwYWdlYDtcblxuICAgICAgICBjb25zdCByZXR1cm5Ub0RlY2tzUGFnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZXR1cm5Ub0RlY2tzUGFnZUJ1dHRvbi5pbm5lclRleHQgPSAnUmV0dXJuIHRvIERlY2tzIFBhZ2UnO1xuICAgICAgICByZXR1cm5Ub0RlY2tzUGFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHZpZXcucmVtb3ZlTWFpblRhZ0NvbnRlbnQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluaGVhZGVyJykucmVtb3ZlKCk7XG4gICAgICAgICAgICByZW5kZXJQYWdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbmdyYXRzRGl2LmFwcGVuZChjZWxlYnJhdGlvblRleHQsIHJldHVyblRvRGVja3NQYWdlQnV0dG9uKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb25ncmF0c0Rpdik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRGVja3NGcm9tUGFnZSgpIHtcbiAgICAgICAgY29uc3QgZGVja0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVja2Rpc3BsYXknKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKGRlY2tEaXNwbGF5RGl2LmNoaWxkcmVuKTtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGVja0Rpc3BsYXkobG9jYWxEZWNrcykge1xuICAgICAgICBjb25zdCBkZWNrRGlzcGxheURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNrZGlzcGxheScpO1xuICAgICAgICBjb25zdCB5b3VyRGVja3NTZWN0aW9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3lvdXJkZWNrc3NlY3Rpb25kaXYnKTtcbiAgICAgICAgcmVtb3ZlRGVja3NGcm9tUGFnZSgpO1xuXG4gICAgICAgIGlmIChsb2NhbERlY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdHNlbXB0eW1lc3NhZ2UnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGxvY2FsRGVja3MuZm9yRWFjaCgoZGVjaykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZW5kZXJEZWNrKGRlY2spO1xuICAgICAgICAgICAgICAgIGRlY2tEaXNwbGF5RGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ0l0c0VtcHR5TWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdHNlbXB0eW1lc3NhZ2UnKTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0l0c0VtcHR5TWVzc2FnZSkgeyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRzZW1wdHltZXNzYWdlJykucmVtb3ZlKCk7IH1cbiAgICAgICAgICAgIGNvbnN0IGl0c0VtcHR5TWVzc2FnZSA9IHJlbmRlckl0c0VtcHR5TWVzc2FnZSgpO1xuICAgICAgICAgICAgeW91ckRlY2tzU2VjdGlvbkRpdi5hcHBlbmRDaGlsZChpdHNFbXB0eU1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckl0c0VtcHR5TWVzc2FnZSgpIHtcbiAgICAgICAgY29uc3QgaXRzRW1wdHlNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdHNFbXB0eU1lc3NhZ2UuaWQgPSAnaXRzZW1wdHltZXNzYWdlJztcbiAgICAgICAgaXRzRW1wdHlNZXNzYWdlLmNsYXNzTmFtZSA9ICdpdHNlbXB0eW1lc3NhZ2UnO1xuICAgICAgICBpdHNFbXB0eU1lc3NhZ2UuaW5uZXJUZXh0ID0gYEl0J3MgZW1wdHkgaW4gaGVyZSEgQ2xpY2sgdGhlIGJsdWUgYnV0dG9uIGFib3ZlIHRvIGNyZWF0ZSBhIG5ldyBkZWNrLmA7XG4gICAgICAgIHJldHVybiBpdHNFbXB0eU1lc3NhZ2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyRGVjayhkZWNrKSB7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG5hbWUuaW5uZXJUZXh0ID0gZGVjay5uYW1lO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkdWVEYXRlUGFyYWdyYXBoRWxlbWVudC5pbm5lclRleHQgPSBgRHVlOiAke2RlY2suZHVlRGF0ZX1gO1xuXG4gICAgICAgIGNvbnN0IGRlY2tEZXNjcmlwdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVja0Rlc2NyaXB0aW9uUGFyYWdyYXBoLmlubmVyVGV4dCA9IGRlY2suZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3Qgc3R1ZHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3R1ZHlCdXR0b24uaW5uZXJUZXh0ID0gJ1N0dWR5JztcbiAgICAgICAgc3R1ZHlCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZU1haW5UYWdDb250ZW50KCk7XG4gICAgICAgICAgICBjb250cm9sbGVyLnN0YXJ0U3R1ZHlTZXNzaW9uKGRlY2spO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGltYWdlQW5kTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbWFnZUFuZE5hbWVEaXYuY2xhc3NOYW1lID0gJ2RlY2tpbWFnZWFuZG5hbWUnO1xuICAgICAgICBpbWFnZUFuZE5hbWVEaXYuYXBwZW5kKG5hbWUsIHN0dWR5QnV0dG9uKTtcblxuICAgICAgICBjb25zdCBkZWNrRGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVja0Rlc2NyaXB0aW9uRGl2LmNsYXNzTmFtZSA9ICdkZWNrZGVzY3JpcHRpb25kaXYnO1xuICAgICAgICBkZWNrRGVzY3JpcHRpb25EaXYuYXBwZW5kKGRlY2tEZXNjcmlwdGlvblBhcmFncmFwaCwgZHVlRGF0ZVBhcmFncmFwaEVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IGRlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVja0Rpdi5jbGFzc05hbWUgPSAnZGVjayc7XG4gICAgICAgIGRlY2tEaXYuYXBwZW5kKGltYWdlQW5kTmFtZURpdiwgZGVja0Rlc2NyaXB0aW9uRGl2KTtcbiAgICAgICAgcmV0dXJuIGRlY2tEaXY7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck92ZXJ2aWV3U2VjdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSByZW5kZXJTZWN0aW9uVGl0bGUoJ092ZXJ2aWV3Jyk7XG4gICAgICAgIGNvbnN0IHJvd09mQ2FyZHNEaXYgPSByZW5kZXJPdmVydmlld0NhcmRzKGNvbnRyb2xsZXIuZGF0YS5QYW5lbHMpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmQodGl0bGUsIHJvd09mQ2FyZHNEaXYpO1xuICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbmRlck92ZXJ2aWV3Q2FyZHMoY2FyZHMpIHtcblxuICAgICAgICBjb25zdCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvdzEuY2xhc3NOYW1lID0gJ292ZXJ2aWV3ZmxleGJveGRpdidcbiAgICAgICAgcm93MS5jbGFzc0xpc3QuYWRkKCdmbGV4ZW5kZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93Mi5jbGFzc05hbWUgPSAnb3ZlcnZpZXdmbGV4Ym94ZGl2JztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmRPdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyZE91dGVyRGl2LmNsYXNzTmFtZSA9ICdvdmVydmlld2NhcmQnO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgY2FyZElubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBjYXJkc1tpXS5pbWFnZXNyYztcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IGNhcmRzW2ldLnRpdGxlO1xuICAgICBcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpc3RpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHN0YXRpc3RpYy5pZCA9IGNhcmRzW2ldLnVuZGVybGluZWNvbG9yO1xuICAgICAgICAgICAgc3RhdGlzdGljLmNsYXNzTmFtZSA9IGNhcmRzW2ldLnVuZGVybGluZWNvbG9yO1xuICAgICAgICAgICAgc3RhdGlzdGljLmlubmVyVGV4dCA9IGNhcmRzW2ldLnN0YXRpc3RpYztcbiAgICBcbiAgICAgICAgICAgIGNhcmRJbm5lckRpdi5hcHBlbmQoaW1hZ2UsIHRpdGxlKTtcbiAgICAgICAgICAgIGNhcmRPdXRlckRpdi5hcHBlbmQoY2FyZElubmVyRGl2LCBzdGF0aXN0aWMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpICUgMiA9PT0gMCA/IHJvdzEuYXBwZW5kQ2hpbGQoY2FyZE91dGVyRGl2KSA6IHJvdzIuYXBwZW5kQ2hpbGQoY2FyZE91dGVyRGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvd09mQ2FyZHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93T2ZDYXJkc0Rpdi5jbGFzc05hbWUgPSAncm93b2ZjYXJkcyc7XG4gICAgICAgIHJvd09mQ2FyZHNEaXYuaWQgPSAncm93b2ZjYXJkcyc7XG4gICAgICAgIHJvd09mQ2FyZHNEaXYuYXBwZW5kKHJvdzEsIHJvdzIpO1xuICAgICAgICByZXR1cm4gcm93T2ZDYXJkc0RpdjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlT3ZlcnZpZXdDYXJkcyhjYXJkcykge1xuICAgICAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvdmVydmlld0NhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXJkLnVuZGVybGluZWNvbG9yKTtcbiAgICAgICAgICAgIG92ZXJ2aWV3Q2FyZC5pbm5lclRleHQgPSBjYXJkLnN0YXRpc3RpYztcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyU2V0dGluZ3NTZWN0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBzZWN0aW9uLmNsYXNzTmFtZSA9ICdzZXR0aW5nc3NlY3Rpb24nO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gcmVuZGVyU2VjdGlvblRpdGxlKCdTZXR0aW5ncycpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVsZXRlRGVja1NlY3Rpb24gPSByZW5kZXJEZWxldGVEZWNrT3B0aW9ucygpO1xuICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IHJlbmRlclJlc2V0QnV0dG9uKCk7XG5cbiAgICAgICAgc2VjdGlvbi5hcHBlbmQodGl0bGUsIGRlbGV0ZURlY2tTZWN0aW9uLCByZXNldEJ1dHRvbik7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJEZWxldGVEZWNrT3B0aW9ucygpIHtcblxuICAgICAgICBjb25zdCBkZWNrcyA9IEFycmF5LmZyb20oY29udHJvbGxlci5kYXRhLmxvY2FsRGVja3MpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZHJvcGRvd25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRyb3Bkb3duTGFiZWwuaHRtbEZvciA9ICdkZWNrcyc7XG4gICAgICAgIGRyb3Bkb3duTGFiZWwuaW5uZXJUZXh0ID0gJ0Nob29zZSBhIGRlY2sgeW91IHdvdWxkIGxpa2UgdG8gZGVsZXRlJztcblxuICAgICAgICBjb25zdCBkcm9wZG93blNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBkcm9wZG93blNlbGVjdC5uYW1lID0gJ2RlY2tzJztcbiAgICAgICAgZHJvcGRvd25TZWxlY3QuaWQgPSAnZHJvcGRvd25zZWxlY3QnO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgZGVmYXVsdE9wdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICBkZWZhdWx0T3B0aW9uLmlubmVyVGV4dCA9ICdfX19fX19fX19fXyc7XG4gICAgICAgIGRyb3Bkb3duU2VsZWN0LmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb24pO1xuXG4gICAgICAgIGRlY2tzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLmlkID0gaXRlbS5uYW1lICsgJ2lkJztcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICBkcm9wZG93blNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdkZWNrZGVsZXRlYnV0dG9uJztcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICdEZWxldGUnO1xuICAgICAgICBcbiAgICAgICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWNrTmFtZSA9IGRyb3Bkb3duU2VsZWN0LnZhbHVlO1xuICAgICAgICAgICAgY29udHJvbGxlci5kZWxldGVEZWNrKGRlY2tOYW1lKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZGF0YS5VcGRhdGUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlY2tOYW1lICsgJ2lkJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBPYnNlcnZhYmxlLnB1Ymxpc2goJ0RlY2tzVXBkYXRlZCcsIGNvbnRyb2xsZXIuZGF0YS5sb2NhbERlY2tzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkZWxldGVEZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlbGV0ZURlY2tEaXYuY2xhc3NOYW1lID0gJ2RlbGV0ZWRlY2tkaXYnO1xuICAgICAgICBkZWxldGVEZWNrRGl2LmFwcGVuZChkcm9wZG93blNlbGVjdCwgZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdkZWNrZGVsZXRlb3B0aW9ucyc7XG4gICAgICAgIGRpdi5hcHBlbmQoZHJvcGRvd25MYWJlbCwgZGVsZXRlRGVja0Rpdik7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZURlbGV0ZURlY2tPcHRpb25zKGxvY2FsRGVja3MpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd25zZWxlY3QnKTtcbiAgICAgICAgY29uc3QgZGVja3MgPSBBcnJheS5mcm9tKGRyb3Bkb3duU2VsZWN0LmNoaWxkcmVuKTtcblxuICAgICAgICBkZWNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS52YWx1ZSAhPSAnJykgeyBpdGVtLnJlbW92ZSgpOyB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgbG9jYWxEZWNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi5pZCA9IGl0ZW0ubmFtZSArICdpZCc7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgZHJvcGRvd25TZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclJlc2V0QnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdEZWxldGUgYWxsIHNhdmVkIGRhdGEnO1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ3Jlc2V0YnV0dG9uJztcbiAgICAgICAgYnV0dG9uLmFyaWFMYWJlbCA9ICdDbGljayBoZXJlIHRvIGRlbGV0ZSBhbGwgc2F2ZWQgZGF0YSc7XG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZXNldCB5b3VyIGRhdGE/IFlvdSBjYW5ub3QgdW5kbyB0aGlzIGFjdGlvbiEnKSkge1xuICAgICAgICAgICAgICAgIE9ic2VydmFibGUucHVibGlzaCgnRGF0YVJlc2V0Jyk7ICAgIFxuICAgICAgICAgICAgfSBlbHNlIHsgcmV0dXJuOyB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsKCkge1xuXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLmlkID0gJ21vZGFsJztcbiAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsJztcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWxIZWFkZXIgPSByZW5kZXJNb2RhbEhlYWRlcihtb2RhbCk7XG4gICAgICAgIGNvbnN0IG1vZGFsRm9ybSA9IHJlbmRlck1vZGFsRm9ybShtb2RhbCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsQm9keS5jbGFzc05hbWUgPSAnbW9kYWwtYm9keSc7XG4gICAgICAgIG1vZGFsQm9keS5pZCA9ICdtb2RhbC1ib2R5JztcbiAgICAgICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKG1vZGFsRm9ybSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcbiAgICAgICAgbW9kYWxDb250ZW50LmlkID0gJ21vZGFsLWNvbnRlbnQnO1xuICAgICAgICBtb2RhbENvbnRlbnQuYXBwZW5kKG1vZGFsSGVhZGVyLCBtb2RhbEJvZHkpO1xuXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsSGVhZGVyKG1vZGFsKSB7XG5cbiAgICAgICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgICAgICBtb2RhbEhlYWRlci5pbm5lclRleHQgPSAnU3RlcCAxOiBDcmVhdGUgRGVjaydcbiAgICAgICAgbW9kYWxIZWFkZXIuaWQgPSAnbW9kYWxoZWFkZXJoNSc7XG5cbiAgICAgICAgY29uc3QgZXhpdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGV4aXRTcGFuLmlubmVySFRNTCA9ICcmdGltZXM7JztcbiAgICAgICAgZXhpdFNwYW4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9kYWxIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWxIZWFkZXJEaXYuY2xhc3NOYW1lID0gJ21vZGFsLWhlYWRlcic7XG4gICAgICAgIG1vZGFsSGVhZGVyRGl2LmFwcGVuZChtb2RhbEhlYWRlciwgZXhpdFNwYW4pO1xuICAgICAgICByZXR1cm4gbW9kYWxIZWFkZXJEaXY7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsRm9ybSgpIHtcblxuICAgICAgICBjb25zdCBuYW1lSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIG5hbWVJbnB1dExhYmVsLmh0bWxGb3IgPSAnZGVja25hbWUnO1xuICAgICAgICBuYW1lSW5wdXRMYWJlbC5pbm5lclRleHQgPSBgTWF4IDIwIENoYXJhY3RlcnNgO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgbmFtZUlucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMobmFtZUlucHV0LCB7XG4gICAgICAgICAgICAnaWQnOiAnZGVja25hbWUnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ2RlY2tuYW1lJyxcbiAgICAgICAgICAgICduYW1lJzogJ2RlY2tuYW1lJyxcbiAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgJ21heExlbmd0aCc6ICcyMCcsXG4gICAgICAgICAgICAnbWluTGVuZ3RoJzogJzEnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gJ2RlY2tkZXNjcmlwdGlvbic7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gYERlc2NyaXB0aW9uIE1heCA2MCBDaGFyYWN0ZXJzYDtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgc2V0QXR0cmlidXRlcyhkZXNjcmlwdGlvbklucHV0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdpZCc6ICdkZWNrZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICdjbGFzcyc6ICdkZWNrZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ2RlY2tkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgJ3Jvd3MnOiAnOCcsXG4gICAgICAgICAgICAgICAgJ2NvbHMnOiAnMjAnLFxuICAgICAgICAgICAgICAgICdtYXhMZW5ndGgnOiAnNjAnLFxuICAgICAgICAgICAgICAgICdtaW4taGVpZ2h0JzogJzNyZW0nLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSAnZGVja2R1ZWRhdGUnO1xuICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlOic7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgc2V0QXR0cmlidXRlcyhkdWVEYXRlSW5wdXQsIHtcbiAgICAgICAgICAgICdpZCc6ICdkZWNrZHVlZGF0ZScsXG4gICAgICAgICAgICAnbmFtZSc6ICdkZWNrZHVlZGF0ZScsXG4gICAgICAgICAgICAnY2xhc3MnOiAnZGVja2R1ZWRhdGUnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnZGF0ZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjYXRlZ29yeUxhYmVsLmh0bWxGb3IgPSAnZGVja2NhdGVnb3J5JztcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC5pbm5lclRleHQgPSAnQ2F0ZWdvcnknO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKGNhdGVnb3J5U2VsZWN0LCB7XG4gICAgICAgICAgICAnaWQnOiAnZGVja2NhdGVnb3J5JyxcbiAgICAgICAgICAgICduYW1lJzogJ2RlY2tjYXRlZ29yeScsXG4gICAgICAgICAgICAnY2xhc3MnOiAnZGVja2NhdGVnb3J5JyxcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGRlZmF1bHRPcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgZGVmYXVsdE9wdGlvbi5pbm5lclRleHQgPSAnUGxlYXNlIGNob29zZSBhIENhdGVnb3J5JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxhbmd1YWdlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGxhbmd1YWdlT3B0aW9uLnZhbHVlID0gJ0xhbmd1YWdlJztcbiAgICAgICAgbGFuZ3VhZ2VPcHRpb24uaW5uZXJUZXh0ID0gJ0xhbmd1YWdlJztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1hdGhPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbWF0aE9wdGlvbi52YWx1ZSA9ICdNYXRoJztcbiAgICAgICAgbWF0aE9wdGlvbi5pbm5lclRleHQgPSAnTWF0aCc7XG5cbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QuYXBwZW5kKGRlZmF1bHRPcHRpb24sIGxhbmd1YWdlT3B0aW9uLCBtYXRoT3B0aW9uKTtcblxuICAgICAgICBjb25zdCBpbnB1dHMgPSBbbmFtZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBkdWVEYXRlSW5wdXQsIGNhdGVnb3J5U2VsZWN0XTtcbiAgICAgICAgY29uc3QgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBmb3JtU3VibWl0QnV0dG9uLmlubmVyVGV4dCA9ICdDcmVhdGUgRGVjayc7XG4gICAgICAgIGZvcm1TdWJtaXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBmb3JtU3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9ICdzdWJtaXRidXR0b24nO1xuICAgICAgICBmb3JtU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlci5oYW5kbGVEZWNrQ3JlYXRpb25Gb3JtKTtcbiAgICAgICAgY29uc3QgYWRkQ2FyZHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkQ2FyZHNCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBDYXJkcyc7XG4gICAgICAgIGFkZENhcmRzQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYWRkQ2FyZHNCdXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJlbmRlckFkZENhcmRNb2RhbEJvZHkoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBcblxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLmNsYXNzTmFtZSA9ICdtb2RhbC1mb3JtJztcbiAgICAgICAgZm9ybS5pZCA9ICdtb2RhbC1mb3JtJztcbiAgICAgICAgZm9ybS5hcHBlbmQoXG4gICAgICAgICAgICBuYW1lSW5wdXRMYWJlbCwgbmFtZUlucHV0LCBcbiAgICAgICAgICAgIGNhdGVnb3J5TGFiZWwsIGNhdGVnb3J5U2VsZWN0LFxuICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCxcbiAgICAgICAgICAgIGR1ZURhdGVMYWJlbCwgZHVlRGF0ZUlucHV0LFxuICAgICAgICAgICAgZm9ybVN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIHJldHVybiBmb3JtO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXRNb2RhbEF1dG9mb2N1cygpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1ib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCBmaXJzdFRleHQgPSBtb2RhbGJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF0gfHwgbW9kYWxib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpWzBdO1xuICAgICAgICAgICAgZmlyc3RUZXh0LmZvY3VzKCk7XG4gICAgICAgICAgfSwgMSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckFkZENhcmRNb2RhbEJvZHkobmV3RGVjaykge1xuICAgICAgICByZW1vdmVNb2RhbENvbnRlbnQoKTtcbiAgICAgICAgcmVuZGVyTW9kYWxBZGRDYXJkSW5wdXQobmV3RGVjayk7XG4gICAgICAgIHJlbmRlck1vZGFsQWRkQ2FyZElucHV0SGVhZGVyKCk7XG4gICAgICAgIHNldE1vZGFsQXV0b2ZvY3VzKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlc2V0TW9kYWwoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpLnJlbW92ZSgpO1xuICAgICAgICByZW5kZXJNb2RhbCgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNb2RhbEFkZENhcmRJbnB1dChuZXdEZWNrKSB7XG5cbiAgICAgICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJvZHknKTtcblxuICAgICAgICBjb25zdCBjYXJkQ291bnRIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNhcmRDb3VudEgzLmlubmVyVGV4dCA9IGBDYXJkOiAke25ld0RlY2suY2FyZENvdW50ICsgMX1gO1xuICAgICAgICBjYXJkQ291bnRIMy5jbGFzc05hbWUgPSAnY2FyZGNvdW50aDMnO1xuXG4gICAgICAgIGNvbnN0IGRlY2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgZGVja05hbWUuaW5uZXJUZXh0ID0gbmV3RGVjay5uYW1lO1xuXG4gICAgICAgIGNvbnN0IG5ld0NhcmRUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdDYXJkVGl0bGVEaXYuY2xhc3NOYW1lID0gJ25ld2NhcmR0aXRsZWRpdic7XG4gICAgICAgIG5ld0NhcmRUaXRsZURpdi5hcHBlbmQoY2FyZENvdW50SDMsIGRlY2tOYW1lKTtcblxuICAgICAgICBjb25zdCBxdWVzdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcXVlc3Rpb25MYWJlbC5odG1sRm9yID0gJ3F1ZXN0aW9uaW5wdXQnO1xuICAgICAgICBxdWVzdGlvbkxhYmVsLmlubmVyVGV4dCA9ICdRdWVzdGlvbjonO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcXVlc3Rpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHF1ZXN0aW9uSW5wdXQubmFtZSA9ICdxdWVzdGlvbmlucHV0JztcbiAgICAgICAgcXVlc3Rpb25JbnB1dC5pZCA9ICdxdWVzdGlvbmlucHV0JztcbiAgICAgICAgcXVlc3Rpb25JbnB1dC5taW5MZW5ndGggPSAxO1xuICAgICAgICBxdWVzdGlvbklucHV0Lm1heExlbmd0aCA9IDMwMDtcblxuICAgICAgICBjb25zdCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBxdWVzdGlvbkRpdi5jbGFzc05hbWUgPSAncXVlc3Rpb25kaXYnO1xuICAgICAgICBxdWVzdGlvbkRpdi5hcHBlbmQocXVlc3Rpb25MYWJlbCwgcXVlc3Rpb25JbnB1dCk7XG5cbiAgICAgICAgY29uc3QgYW5zd2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBhbnN3ZXJMYWJlbC5odG1sRm9yID0gJ2Fuc3dlcmlucHV0JztcbiAgICAgICAgYW5zd2VyTGFiZWwuaW5uZXJUZXh0ID0gJ0Fuc3dlcjonXG4gICAgICAgIFxuICAgICAgICBjb25zdCBhbnN3ZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGFuc3dlcklucHV0Lm5hbWUgPSAnYW5zd2VyaW5wdXQnO1xuICAgICAgICBhbnN3ZXJJbnB1dC5pZCA9ICdhbnN3ZXJpbnB1dCc7XG4gICAgICAgIGFuc3dlcklucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgICAgIGFuc3dlcklucHV0Lm1heExlbmd0aCA9IDMwMDtcblxuICAgICAgICBjb25zdCBhbnN3ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYW5zd2VyRGl2LmNsYXNzTmFtZSA9ICdhbnN3ZXJkaXYnO1xuICAgICAgICBhbnN3ZXJEaXYuYXBwZW5kKGFuc3dlckxhYmVsLCBhbnN3ZXJJbnB1dCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWxDYXJkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgbW9kYWxDYXJkRm9ybS5pZCA9ICdtb2RhbC1jYXJkLWZvcm0nO1xuICAgICAgICBtb2RhbENhcmRGb3JtLmFwcGVuZChxdWVzdGlvbkRpdiwgYW5zd2VyRGl2KTtcblxuICAgICAgICBjb25zdCB1c2VyT3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB1c2VyT3B0aW9uc0Rpdi5jbGFzc05hbWUgPSAndXNlcm9wdGlvbnNkaXYnO1xuXG4gICAgICAgIGNvbnN0IGFkZE5leHRDYXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZE5leHRDYXJkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgbmV4dCBjYXJkJztcbiAgICAgICAgYWRkTmV4dENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmhhbmRsZUFkZENhcmRzRm9ybShuZXdEZWNrLCAnYWRkbW9yZScpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZpbmlzaEFkZGluZ0NhcmRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGZpbmlzaEFkZGluZ0NhcmRzQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgYW5kIEZpbmlzaCc7XG4gICAgICAgIGZpbmlzaEFkZGluZ0NhcmRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbGxlci5oYW5kbGVBZGRDYXJkc0Zvcm0obmV3RGVjaywgJ2RvbmVhZGRpbmcnKVxuICAgICAgICB9KTtcblxuICAgICAgICB1c2VyT3B0aW9uc0Rpdi5hcHBlbmQoYWRkTmV4dENhcmRCdXR0b24sIGZpbmlzaEFkZGluZ0NhcmRzQnV0dG9uKTtcbiAgICAgICAgbW9kYWxCb2R5LmFwcGVuZChuZXdDYXJkVGl0bGVEaXYsIG1vZGFsQ2FyZEZvcm0sIHVzZXJPcHRpb25zRGl2KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyTW9kYWxBZGRDYXJkSW5wdXRIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsaGVhZGVyaDUnKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1N0ZXAgMjogQWRkIENhcmRzJztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTW9kYWxDb250ZW50KCkge1xuICAgICAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYm9keScpO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20obW9kYWxCb2R5LmNoaWxkcmVuKTtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldEZvcm0oZm9ybSkge1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclNlY3Rpb25UaXRsZSh0aXRsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoMS5pbm5lclRleHQgPSB0aXRsZU5hbWU7XG4gICAgICAgIGgxLmlkID0gdGl0bGVOYW1lLnNsaWNlKCkudG9Mb3dlckNhc2UoKSArICd0aXRsZSc7XG4gICAgICAgIHJldHVybiBoMTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2hvd0FkZERlY2tCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICAgICAgICBtZW51Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBiYW5uZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyYnV0dG9uJyk7XG4gICAgICAgIGJhbm5lckJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZG9jdW1lbnQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghYmFubmVyQnV0dG9uLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzaG93TW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IGFkZERlY2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkZGVja2J1dHRvbicpO1xuICAgICAgICBhZGREZWNrQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBzZXRNb2RhbEF1dG9mb2N1cygpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZU1haW5UYWdDb250ZW50KCkge1xuICAgICAgICBjb25zdCBtYWluQ2hpbGRyZW4gPSBBcnJheS5mcm9tKG1haW4uY2hpbGRyZW4pO1xuICAgICAgICBtYWluQ2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xufTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclBhZ2UoKSB7XG4gICAgICAgIHJlbW92ZU1haW5UYWdDb250ZW50KCk7XG4gICAgICAgIHJlbmRlck1vZGFsKCk7XG4gICAgICAgIHJlbmRlckJhbm5lcigpO1xuICAgICAgICBzaG93QWRkRGVja0J1dHRvbigpO1xuICAgICAgICBzaG93TW9kYWwoKTtcblxuICAgICAgICBjb25zdCBvdmVydmlld1NlY3Rpb24gPSByZW5kZXJPdmVydmlld1NlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgdG9wRGVja3NTZWN0aW9uID0gcmVuZGVyWW91ckRlY2tzKCk7XG4gICAgICAgIGNvbnN0IHByZWJ1aWx0RGVja3NTZWN0aW9uID0gcmVuZGVyUHJlQnVpbHREZWNrcygpO1xuICAgICAgICBjb25zdCBzZXR0aW5nc1NlY3Rpb24gPSByZW5kZXJTZXR0aW5nc1NlY3Rpb24oKVxuICAgICAgICBtYWluLmFwcGVuZChvdmVydmlld1NlY3Rpb24sdG9wRGVja3NTZWN0aW9uLCBwcmVidWlsdERlY2tzU2VjdGlvbiwgc2V0dGluZ3NTZWN0aW9uKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyQmFubmVyKCkge1xuICAgICAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xuICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNMTIgNlYxOE02IDEySDE4Jyk7XG5cbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGJhbm5lckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBiYW5uZXJCdXR0b24uaWQgPSAnYmFubmVyYnV0dG9uJztcbiAgICAgICAgYmFubmVyQnV0dG9uLmNsYXNzTmFtZSA9ICdiYW5uZXJidXR0b24nO1xuICAgICAgICBiYW5uZXJCdXR0b24uYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAgICAgICBjb25zdCBzaXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBzaXRlVGl0bGUuY2xhc3NOYW1lID0gJ3NpdGV0aXRsZSc7XG4gICAgICAgIHNpdGVUaXRsZS5pbm5lclRleHQgPSAnU3R1ZHkgRGVja3MnO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uaWQgPSAnYWRkZGVja2J1dHRvbic7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgYSBEZWNrJztcblxuICAgICAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgICAgICBtZW51RGl2LmlkID0gJ21lbnUnO1xuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lckRpdi5pZCA9ICdjb250YWluZXJkaXYnO1xuICAgICAgICBjb250YWluZXJEaXYuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcmRpdic7XG4gICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmQobWVudURpdiwgYmFubmVyQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBpbm5lckhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lckhlYWRlckRpdi5jbGFzc05hbWUgPSAnaW5uZXJoZWFkZXJkaXYnO1xuICAgICAgICBpbm5lckhlYWRlckRpdi5hcHBlbmQoc2l0ZVRpdGxlLCBjb250YWluZXJEaXYpO1xuXG4gICAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgbWFpbkhlYWRlci5pZCA9ICdtYWluaGVhZGVyJztcbiAgICAgICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChpbm5lckhlYWRlckRpdik7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUobWFpbkhlYWRlciwgYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXNldE1vZGFsLFxuICAgICAgICBoaWRlTW9kYWwsXG4gICAgICAgIHJlc2V0Rm9ybSxcbiAgICAgICAgcmVuZGVyUGFnZSxcbiAgICAgICAgcmVuZGVyU3R1ZHlTZXNzaW9uLFxuICAgICAgICByZW5kZXJTdHVkeVNlc3Npb25Db21wbGV0ZSxcbiAgICAgICAgdXBkYXRlU3R1ZHlDYXJkLFxuICAgICAgICByZW1vdmVNYWluVGFnQ29udGVudCxcbiAgICAgICAgcmVuZGVyQWRkQ2FyZE1vZGFsQm9keSxcbiAgICAgICAgfTtcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0ICcuLi9zY3NzL2Nzcy9zdHlsZS5jc3MnO1xuY29udHJvbGxlci5zdGFydEFwcGxpY2F0aW9uKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9