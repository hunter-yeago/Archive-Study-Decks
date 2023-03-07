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
___CSS_LOADER_EXPORT___.push([module.id, "/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=list],\nol[role=list] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 3rem;\n  left: 0;\n  top: 0;\n  width: 100%;\n  color: black;\n}\n\n.modal-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 5px;\n  position: relative;\n  margin: auto;\n  border: 1px solid #888;\n  width: min(30rem, 85%);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0.8rem;\n  width: 100%;\n  border-bottom: 1px solid lightgrey;\n}\n.modal-header h5 {\n  font-size: 1.25rem;\n  font-weight: 550;\n}\n.modal-header span {\n  color: #aaa;\n  font-size: 1.75rem;\n  font-weight: bold;\n}\n.modal-header span:hover,\n.modal-header span:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-body {\n  padding: 0.15rem 0.7rem;\n  margin: 0.5rem 0 1rem 0;\n  width: 90%;\n}\n.modal-body form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n}\n.modal-body textarea {\n  resize: none;\n  min-height: 3.5rem;\n  max-height: 12rem;\n}\n\n.deckname,\n.deckcategory,\n.deckduedate,\n.deckdescription {\n  padding: 0.2em;\n}\n\n.deckdescription {\n  width: 100%;\n  height: 5rem;\n  resize: none;\n}\n\n.disabledinputtag {\n  position: relative;\n  bottom: 40px;\n  left: 195px;\n  color: grey;\n  padding: 0 0 0 0.5em;\n  pointer-events: none;\n}\n\n.invalid {\n  border: 0.125rem solid red;\n}\n\n.submitbutton {\n  width: 50%;\n  margin-left: auto;\n  padding: 0.1em;\n}\n\n.questiondiv,\n.answerdiv {\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n  margin-bottom: 0.5em;\n}\n\n.useroptionsdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.3em;\n  margin-top: 2em;\n}\n.useroptionsdiv button {\n  padding: clamp(0.1em, 2vw, 0.3em);\n  font-size: 0.9em;\n  margin: 0.2em clamp(0.2em, 3vw, 2em);\n}\n\n.newcardtitlediv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0.2em 0.5em 0.5em 0.5em;\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.deckdisplay {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1em;\n  margin: 0.5em;\n  width: min(35rem, 80%);\n}\n\n.yourdeckssectiondiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n\n.deck {\n  justify-self: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: clamp(16.25rem, 5vw, 25rem);\n  padding: 0rem 0.5em;\n  border-radius: 0.5rem;\n  min-height: 11rem;\n  background-color: #2e3856;\n}\n\n.deckimageandname {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-right: 1px solid #ffcd1e;\n  margin: 0.7em 0 0.7em 1em;\n  padding-right: 1em;\n  gap: 0.5rem;\n}\n.deckimageandname button {\n  padding: 0.2em;\n}\n.deckimageandname h3 {\n  font-size: 1rem;\n}\n.deckimageandname p {\n  color: rgba(253, 253, 253, 0.681);\n  font-size: 0.9rem;\n}\n\n.deckdescriptiondiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-width: 70%;\n  margin: 0.7em 0;\n}\n.deckdescriptiondiv p {\n  padding: 0.5em;\n  text-align: center;\n  font-size: clamp(1rem, 4vw, 1.1rem);\n}\n.deckdescriptiondiv :nth-child(2) {\n  color: rgba(253, 253, 253, 0.681);\n  font-size: 0.9rem;\n}\n\n.itsemptymessage {\n  text-align: center;\n  padding: 1em;\n}\n\n.rowofcards {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(0.5em, 3.5vw, 2em);\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: clamp(0.3em, 2vw, 1.5em);\n  width: min(50rem, 100%);\n}\n\n.overviewflexboxdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: clamp(0.3em, 2vw, 1.5em);\n}\n\n.overviewcard {\n  border: 1px solid lightgrey;\n  color: black;\n  border-radius: 5px;\n  background-color: white;\n  text-align: center;\n  padding: clamp(0.3em, 3vw, 0.7em);\n}\n.overviewcard div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.3rem;\n  padding-top: 0.5rem;\n}\n.overviewcard img {\n  width: clamp(1.6rem, 3.5vw, 2rem);\n}\n.overviewcard h3 {\n  font-size: clamp(0.9rem, 3.5vw, 1.1rem);\n}\n.overviewcard p {\n  font-size: clamp(1.3rem, 5.5vw, 2rem);\n  padding-bottom: 0.5rem;\n  text-decoration: underline;\n  text-decoration-thickness: 0.12rem;\n  text-underline-offset: 5px;\n}\n\n.greencardunderline {\n  text-decoration-color: #34C381 !important;\n}\n\n.bluecardunderline {\n  text-decoration-color: #046FC6 !important;\n}\n\n.brickcardunderline {\n  text-decoration-color: #ED6D47 !important;\n}\n\n.sunshinecardunderline {\n  text-decoration-color: #FFBA17 !important;\n}\n\n.settingssection select {\n  padding: 0.3em;\n}\n\n.deckdeleteoptions {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.deletedeckdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1em;\n}\n.deletedeckdiv button {\n  padding: 0.1em;\n}\n\n.resetbutton {\n  display: block;\n  margin: 1rem auto auto auto;\n  color: red;\n  border: 1px solid red;\n  padding: 0.2em;\n}\n\n.innerheaderdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 0 1.5rem 0;\n  border-bottom: 1px solid #282e3e;\n}\n.innerheaderdiv h1 {\n  border-bottom: 1px solid #ffcd1e;\n}\n\n.containerdiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nsvg {\n  width: 2.5rem;\n  height: 2.5rem;\n}\nsvg path {\n  stroke: white;\n  stroke-width: 2px;\n  stroke-linecap: round;\n}\n\n.bannerbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  height: 2.4rem;\n  width: 2.4rem;\n  padding: 0em;\n  border-radius: 50%;\n  background-color: #4255ff;\n}\n\n.bannerbutton:hover {\n  background-color: #423ed9;\n}\n\n.menu {\n  position: absolute;\n  display: none;\n  margin-top: 3em;\n}\n.menu button {\n  min-width: 8rem;\n  padding: 0.7em;\n  background-color: #0a082d;\n  color: white;\n  border: 1px solid #282e3e;\n  border-radius: 0.3rem;\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n.menu button:hover {\n  background-color: #0a082d;\n  opacity: 0.9;\n}\n\n.menu.show {\n  display: block;\n}\n\n.nav-right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 8rem;\n}\n.nav-right p {\n  width: 100%;\n}\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgb(246, 246, 246);\n  overflow-x: hidden;\n  margin-top: 42.3px;\n  transition: 0.3s;\n}\n\n.sidenav.active {\n  width: 15rem;\n}\n\n.sidenavinnerdiv {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 0 0 2rem;\n}\n.sidenavinnerdiv a {\n  padding: 0.3rem 0.5rem 0.4rem 1rem;\n  margin-right: 1.5rem;\n  text-decoration: none;\n  font-size: 1.1rem;\n  color: black;\n  display: block;\n  transition: 0.2 0.5s;\n}\n.sidenavinnerdiv li {\n  list-style: none;\n  white-space: nowrap;\n}\n.sidenavinnerdiv li:hover {\n  background-color: white;\n}\n\n.studycarddiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 1em;\n}\n.studycarddiv div {\n  flex-direction: column;\n  padding: 0.5em;\n  min-width: 50%;\n  min-height: 5rem;\n}\n.studycarddiv p {\n  text-align: center;\n}\n\n.inactive {\n  background-color: rgba(121, 121, 121, 0.9);\n  pointer-events: none;\n  border-color: rgba(121, 121, 121, 0.9);\n}\n\n.numberofcards {\n  margin-bottom: 3em;\n}\n\n.studydiv {\n  margin: 1.2em;\n}\n.studydiv h1 {\n  margin-top: 0.5 em;\n  font-size: 1.8rem;\n  text-align: center;\n}\n\n.flip-card {\n  background-color: transparent;\n  border-radius: 25% 10%;\n  width: clamp(18.75rem, 30vw, 25rem);\n  height: clamp(18.75rem, 30vw, 25rem);\n  perspective: 1000px;\n}\n\n.flip-card-inner {\n  width: clamp(18.75rem, 30vw, 25rem);\n  height: clamp(18.75rem, 30vw, 25rem);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 25% 10%;\n  cursor: pointer;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.4s;\n  transform-style: preserve-3d;\n}\n\n.flip-card-inner.activated {\n  transform: rotateY(180deg);\n}\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.flip-card-front {\n  width: clamp(18.75rem, 30vw, 25rem);\n  height: clamp(18.75rem, 30vw, 25rem);\n  border: 2px solid #ffcd1e;\n  border-radius: 25% 10%;\n  background-color: #bbb;\n  color: black;\n}\n\n.flip-card-back {\n  width: clamp(18.75rem, 30vw, 25rem);\n  height: clamp(18.75rem, 30vw, 25rem);\n  border: 2px solid #ffcd1e;\n  border-radius: 25% 10%;\n  background-color: #2980b9;\n  color: white;\n  transform: rotateY(180deg);\n}\n\n.buttonsspan {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1em;\n  width: max(40vw, 40%);\n  margin: 1em;\n}\n.buttonsspan button {\n  min-width: 5rem;\n  padding: clamp(0.3rem, 2.5vw, 0.7rem);\n}\n\n.congratsdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 3em;\n  margin: 3em 1em 1em 1em;\n}\n.congratsdiv button {\n  padding: 0.2em;\n}\n\nhtml,\nbody {\n  background-color: #0a082d;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.6;\n  color: white;\n}\n\nmain {\n  border-top: 1px solid black;\n  min-height: fit-content;\n  margin-bottom: 3rem;\n}\n\n.mobilenav {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  border: 1px solid grey;\n  min-height: 4rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.mobilenav img {\n  width: 2rem;\n  pointer-events: none;\n}\n.mobilenav button {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.2rem;\n  gap: 0.5rem;\n}\n.mobilenav h3 {\n  font-size: 0.9rem;\n  color: grey;\n  pointer-events: none;\n}\n\nsection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 0.5em clamp(0.2em, 2vw, 1.5em);\n}\nsection h1 {\n  text-align: left;\n  padding: 0.5rem;\n  font-size: clamp(1.6rem, 2vw, 3.5rem);\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./src/scss/_reset.scss","webpack://./src/scss/css/style.css","webpack://./src/scss/_modal.scss","webpack://./src/scss/_mixins.scss","webpack://./src/scss/_yourdecks.scss","webpack://./src/scss/_config.scss","webpack://./src/scss/_overview.scss","webpack://./src/scss/_decksettings.scss","webpack://./src/scss/_banner.scss","webpack://./src/scss/_sidenav.scss","webpack://./src/scss/_studysession.scss","webpack://./src/scss/style.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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

    function endStudySessionEarly(deck) {
        _model__WEBPACK_IMPORTED_MODULE_0__.model.updateCurrentCard(deck, 'reset');
    }

    function showNextStudyCard(deck, operation) {

        if (operation === 'shownext') {
            if (deck.currentCard + 1 === deck.cards.length) {
                console.log('firing end study session');
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
        endStudySessionEarly,
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
                this.element.setCustomValidity('Please enter a valid date that is in the future');
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

        const yourDecksSectionDiv = document.createElement('div');
        yourDecksSectionDiv.className = 'yourdeckssectiondiv';
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
            previousButton.tabIndex = '';

        } else {
            previousButton.classList.add('inactive');
            previousButton.tabIndex = '-1';
            document.activeElement.blur();
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
            if (flipCardInner) {
                flipCardInner.classList.remove('activated');
            }
            
        });
        previousButton.classList.add('inactive');
        previousButton.tabIndex = '-1';
        document.activeElement.blur();

        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next Card';
        nextButton.id = 'nextcardbutton';
        nextButton.addEventListener('click', () => {
            _controller__WEBPACK_IMPORTED_MODULE_1__.controller.showNextStudyCard(deck, 'shownext');
            const flipCardInner = document.getElementById('flip-card-inner');
            if (flipCardInner) {
                flipCardInner.classList.remove('activated');
            }
            
        });

        const stopStudyingButton = document.createElement('button');
        stopStudyingButton.innerText = 'Stop Studying';
        stopStudyingButton.addEventListener('click', () => {
            document.getElementById('mainheader').remove();
            removeMainTagContent();
            renderPage();
            _controller__WEBPACK_IMPORTED_MODULE_1__.controller.endStudySessionEarly(deck);
        });

        const buttonsSpan = document.createElement('span');
        buttonsSpan.className = 'buttonsspan';
        buttonsSpan.append(previousButton, nextButton, stopStudyingButton);

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
            if (document.getElementById('itsemptymessage')) {
                document.getElementById('itsemptymessage').remove();
            }
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
        if (document.getElementById('mainheader')) {
            document.getElementById('meainheader').remove();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsUUFBUSxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxRQUFRLE1BQU0sWUFBWSxRQUFRLE1BQU0sWUFBWSxRQUFRLE1BQU0sWUFBWSxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLGFBQWEsUUFBUSxNQUFNLGFBQWEsUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxXQUFXLFVB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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1eUJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQ1g7QUFDL0Isb0VBQTJCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3Njc3MvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNGdXR1cmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2Nzcy9jc3Mvc3R5bGUuY3NzP2M4OWEiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvY2FyZC5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvZGVjay5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3ByZWJ1aWx0ZGVja3MuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvdXNlcmRhdGEuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvdmlldy5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9bGlzdF0sXFxub2xbcm9sZT1saXN0XSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IG1pbigzMHJlbSwgODUlKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XFxufVxcbi5tb2RhbC1oZWFkZXIgaDUge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXG59XFxuLm1vZGFsLWhlYWRlciBzcGFuIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5tb2RhbC1oZWFkZXIgc3Bhbjpob3ZlcixcXG4ubW9kYWwtaGVhZGVyIHNwYW46Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtYm9keSB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuN3JlbTtcXG4gIG1hcmdpbjogMC41cmVtIDAgMXJlbSAwO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuLm1vZGFsLWJvZHkgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC43cmVtO1xcbn1cXG4ubW9kYWwtYm9keSB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBtaW4taGVpZ2h0OiAzLjVyZW07XFxuICBtYXgtaGVpZ2h0OiAxMnJlbTtcXG59XFxuXFxuLmRlY2tuYW1lLFxcbi5kZWNrY2F0ZWdvcnksXFxuLmRlY2tkdWVkYXRlLFxcbi5kZWNrZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogMC4yZW07XFxufVxcblxcbi5kZWNrZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5kaXNhYmxlZGlucHV0dGFnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogNDBweDtcXG4gIGxlZnQ6IDE5NXB4O1xcbiAgY29sb3I6IGdyZXk7XFxuICBwYWRkaW5nOiAwIDAgMCAwLjVlbTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHJlZDtcXG59XFxuXFxuLnN1Ym1pdGJ1dHRvbiB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBwYWRkaW5nOiAwLjFlbTtcXG59XFxuXFxuLnF1ZXN0aW9uZGl2LFxcbi5hbnN3ZXJkaXYge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4udXNlcm9wdGlvbnNkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG4udXNlcm9wdGlvbnNkaXYgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IGNsYW1wKDAuMWVtLCAydncsIDAuM2VtKTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBtYXJnaW46IDAuMmVtIGNsYW1wKDAuMmVtLCAzdncsIDJlbSk7XFxufVxcblxcbi5uZXdjYXJkdGl0bGVkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuMmVtIDAuNWVtIDAuNWVtIDAuNWVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5kZWNrZGlzcGxheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBnYXA6IDFlbTtcXG4gIG1hcmdpbjogMC41ZW07XFxuICB3aWR0aDogbWluKDM1cmVtLCA4MCUpO1xcbn1cXG5cXG4ueW91cmRlY2tzc2VjdGlvbmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGVjayB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogY2xhbXAoMTYuMjVyZW0sIDV2dywgMjVyZW0pO1xcbiAgcGFkZGluZzogMHJlbSAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDExcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzg1NjtcXG59XFxuXFxuLmRlY2tpbWFnZWFuZG5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZjZDFlO1xcbiAgbWFyZ2luOiAwLjdlbSAwIDAuN2VtIDFlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4uZGVja2ltYWdlYW5kbmFtZSBidXR0b24ge1xcbiAgcGFkZGluZzogMC4yZW07XFxufVxcbi5kZWNraW1hZ2VhbmRuYW1lIGgzIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmRlY2tpbWFnZWFuZG5hbWUgcCB7XFxuICBjb2xvcjogcmdiYSgyNTMsIDI1MywgMjUzLCAwLjY4MSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmRlY2tkZXNjcmlwdGlvbmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi13aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAwLjdlbSAwO1xcbn1cXG4uZGVja2Rlc2NyaXB0aW9uZGl2IHAge1xcbiAgcGFkZGluZzogMC41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDR2dywgMS4xcmVtKTtcXG59XFxuLmRlY2tkZXNjcmlwdGlvbmRpdiA6bnRoLWNoaWxkKDIpIHtcXG4gIGNvbG9yOiByZ2JhKDI1MywgMjUzLCAyNTMsIDAuNjgxKTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uaXRzZW1wdHltZXNzYWdlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLnJvd29mY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IGNsYW1wKDAuNWVtLCAzLjV2dywgMmVtKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzIwcHgsIDFmcikpO1xcbiAgZ2FwOiBjbGFtcCgwLjNlbSwgMnZ3LCAxLjVlbSk7XFxuICB3aWR0aDogbWluKDUwcmVtLCAxMDAlKTtcXG59XFxuXFxuLm92ZXJ2aWV3ZmxleGJveGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogY2xhbXAoMC4zZW0sIDJ2dywgMS41ZW0pO1xcbn1cXG5cXG4ub3ZlcnZpZXdjYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogY2xhbXAoMC4zZW0sIDN2dywgMC43ZW0pO1xcbn1cXG4ub3ZlcnZpZXdjYXJkIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG4ub3ZlcnZpZXdjYXJkIGltZyB7XFxuICB3aWR0aDogY2xhbXAoMS42cmVtLCAzLjV2dywgMnJlbSk7XFxufVxcbi5vdmVydmlld2NhcmQgaDMge1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIDMuNXZ3LCAxLjFyZW0pO1xcbn1cXG4ub3ZlcnZpZXdjYXJkIHAge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjNyZW0sIDUuNXZ3LCAycmVtKTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDAuMTJyZW07XFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXG59XFxuXFxuLmdyZWVuY2FyZHVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMzNEMzODEgIWltcG9ydGFudDtcXG59XFxuXFxuLmJsdWVjYXJkdW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzA0NkZDNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYnJpY2tjYXJkdW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI0VENkQ0NyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc3Vuc2hpbmVjYXJkdW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI0ZGQkExNyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2V0dGluZ3NzZWN0aW9uIHNlbGVjdCB7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG59XFxuXFxuLmRlY2tkZWxldGVvcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5kZWxldGVkZWNrZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5kZWxldGVkZWNrZGl2IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjFlbTtcXG59XFxuXFxuLnJlc2V0YnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG8gYXV0byBhdXRvO1xcbiAgY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbn1cXG5cXG4uaW5uZXJoZWFkZXJkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMCAxLjVyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyZTNlO1xcbn1cXG4uaW5uZXJoZWFkZXJkaXYgaDEge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmNkMWU7XFxufVxcblxcbi5jb250YWluZXJkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5zdmcge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbn1cXG5zdmcgcGF0aCB7XFxuICBzdHJva2U6IHdoaXRlO1xcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxufVxcblxcbi5iYW5uZXJidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAyLjRyZW07XFxuICBwYWRkaW5nOiAwZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI1NWZmO1xcbn1cXG5cXG4uYmFubmVyYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjNlZDk7XFxufVxcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAzZW07XFxufVxcbi5tZW51IGJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDhyZW07XFxuICBwYWRkaW5nOiAwLjdlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTA4MmQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjgyZTNlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tZW51IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwODJkO1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4ubWVudS5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubmF2LXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOHJlbTtcXG59XFxuLm5hdi1yaWdodCBwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lkZW5hdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjQ2LCAyNDYpO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgbWFyZ2luLXRvcDogNDIuM3B4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnNpZGVuYXYuYWN0aXZlIHtcXG4gIHdpZHRoOiAxNXJlbTtcXG59XFxuXFxuLnNpZGVuYXZpbm5lcmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW0gMCAwIDJyZW07XFxufVxcbi5zaWRlbmF2aW5uZXJkaXYgYSB7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtIDAuNHJlbSAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNpdGlvbjogMC4yIDAuNXM7XFxufVxcbi5zaWRlbmF2aW5uZXJkaXYgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5zaWRlbmF2aW5uZXJkaXYgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdHVkeWNhcmRkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcbi5zdHVkeWNhcmRkaXYgZGl2IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1pbi13aWR0aDogNTAlO1xcbiAgbWluLWhlaWdodDogNXJlbTtcXG59XFxuLnN0dWR5Y2FyZGRpdiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIxLCAxMjEsIDEyMSwgMC45KTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuOSk7XFxufVxcblxcbi5udW1iZXJvZmNhcmRzIHtcXG4gIG1hcmdpbi1ib3R0b206IDNlbTtcXG59XFxuXFxuLnN0dWR5ZGl2IHtcXG4gIG1hcmdpbjogMS4yZW07XFxufVxcbi5zdHVkeWRpdiBoMSB7XFxuICBtYXJnaW4tdG9wOiAwLjUgZW07XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZsaXAtY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JSAxMCU7XFxuICB3aWR0aDogY2xhbXAoMTguNzVyZW0sIDMwdncsIDI1cmVtKTtcXG4gIGhlaWdodDogY2xhbXAoMTguNzVyZW0sIDMwdncsIDI1cmVtKTtcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxufVxcblxcbi5mbGlwLWNhcmQtaW5uZXIge1xcbiAgd2lkdGg6IGNsYW1wKDE4Ljc1cmVtLCAzMHZ3LCAyNXJlbSk7XFxuICBoZWlnaHQ6IGNsYW1wKDE4Ljc1cmVtLCAzMHZ3LCAyNXJlbSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjUlIDEwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbn1cXG5cXG4uZmxpcC1jYXJkLWlubmVyLmFjdGl2YXRlZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuXFxuLmZsaXAtY2FyZC1mcm9udCwgLmZsaXAtY2FyZC1iYWNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5mbGlwLWNhcmQtZnJvbnQge1xcbiAgd2lkdGg6IGNsYW1wKDE4Ljc1cmVtLCAzMHZ3LCAyNXJlbSk7XFxuICBoZWlnaHQ6IGNsYW1wKDE4Ljc1cmVtLCAzMHZ3LCAyNXJlbSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZjZDFlO1xcbiAgYm9yZGVyLXJhZGl1czogMjUlIDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5mbGlwLWNhcmQtYmFjayB7XFxuICB3aWR0aDogY2xhbXAoMTguNzVyZW0sIDMwdncsIDI1cmVtKTtcXG4gIGhlaWdodDogY2xhbXAoMTguNzVyZW0sIDMwdncsIDI1cmVtKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmNkMWU7XFxuICBib3JkZXItcmFkaXVzOiAyNSUgMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4uYnV0dG9uc3NwYW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbiAgd2lkdGg6IG1heCg0MHZ3LCA0MCUpO1xcbiAgbWFyZ2luOiAxZW07XFxufVxcbi5idXR0b25zc3BhbiBidXR0b24ge1xcbiAgbWluLXdpZHRoOiA1cmVtO1xcbiAgcGFkZGluZzogY2xhbXAoMC4zcmVtLCAyLjV2dywgMC43cmVtKTtcXG59XFxuXFxuLmNvbmdyYXRzZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzZW07XFxuICBtYXJnaW46IDNlbSAxZW0gMWVtIDFlbTtcXG59XFxuLmNvbmdyYXRzZGl2IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTA4MmQ7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbm1haW4ge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4ubW9iaWxlbmF2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgbWluLWhlaWdodDogNHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG4ubW9iaWxlbmF2IGltZyB7XFxuICB3aWR0aDogMnJlbTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ubW9iaWxlbmF2IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5tb2JpbGVuYXYgaDMge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogZ3JleTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMC41ZW0gY2xhbXAoMC4yZW0sIDJ2dywgMS41ZW0pO1xcbn1cXG5zZWN0aW9uIGgxIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IGNsYW1wKDEuNnJlbSwgMnZ3LCAzLjVyZW0pO1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Nzcy9zdHlsZS5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19tb2RhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL195b3VyZGVja3Muc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2NvbmZpZy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fb3ZlcnZpZXcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2RlY2tzZXR0aW5ncy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fYmFubmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19zaWRlbmF2LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19zdHVkeXNlc3Npb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBQTtBQUNBOzs7RUFHRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUEsMEJBQUE7QUFDQTs7Ozs7Ozs7OztFQVVFLFNBQUE7QUNDRjs7QURFQSwyR0FBQTtBQUNBOztFQUVFLGdCQUFBO0FDQ0Y7O0FERUEsMkJBQUE7QUFDQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUEsMkJBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBLDBEQUFBO0FBQ0E7RUFDRSw4QkFBQTtBQ0NGOztBREVBLG9DQUFBO0FBQ0E7O0VBRUUsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQSx5Q0FBQTtBQUNBOzs7O0VBSUUsYUFBQTtBQ0NGOztBREVBLGdHQUFBO0FBQ0E7RUFDRTtJQUNDLHFCQUFBO0VDQ0Q7RURFQTs7O0lBR0UscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLHNDQUFBO0lBQ0EsZ0NBQUE7RUNBRjtBQUNGO0FDeEVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxP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Q0EsbUJBQUE7QVYwbEJKOztBVXZsQkE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EscUNBQUE7QVZ5bEJKO0FVdmxCSTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBVnlsQlI7QVV0bEJJO0VSM0NBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VRd0NJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBVjZsQlI7QVUxbEJJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QVY0bEJSOztBVXhsQkE7RVJuREksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RVFtREEsc0JBQUE7RUFDQSx1Q0FBQTtBVjZsQko7QVU1bEJJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QVY4bEJSOztBQUVBLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRnV0dXJlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBmdXR1cmU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIGZ1dHVyZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAzMSBEZWNlbWJlciAyMDE0IGluIHRoZSBmdXR1cmU/XG4gKiBjb25zdCByZXN1bHQgPSBpc0Z1dHVyZShuZXcgRGF0ZSgyMDE0LCAxMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGdXR1cmUoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpID4gRGF0ZS5ub3coKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IENhcmQgPSB7XG4gICAgcXVlc3Rpb246IG51bGwsXG4gICAgYW5zd2VyOiBudWxsLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZChmb3JtRGF0YU9iaikge1xuXG4gICAgY29uc3QgbmV3Q2FyZCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShDYXJkKSwge1xuICAgICAgICBxdWVzdGlvbjogZm9ybURhdGFPYmoucXVlc3Rpb25pbnB1dCxcbiAgICAgICAgYW5zd2VyOiBmb3JtRGF0YU9iai5hbnN3ZXJpbnB1dCxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3Q2FyZDtcbn0iLCJpbXBvcnQgeyBtb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XG5pbXBvcnQgeyB2aWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHsgcHJlQnVpbHREZWNrcyB9IGZyb20gXCIuL3ByZWJ1aWx0ZGVja3NcIjtcblxuLy8gVE9ETyBDTEVBTlxuLy8gVE9ETyBSZWFkTWVcblxuZXhwb3J0IGNvbnN0IGNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcbiAgICBPYnNlcnZhYmxlLnN1YnNjcmliZSgnRGF0YVJlc2V0JywgcmVzZXREYXRhQW5kVmlldyk7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcHJlQnVpbHREZWNrczogcHJlQnVpbHREZWNrcyxcbiAgICAgICAgbG9jYWxEZWNrczogbW9kZWwuZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpLFxuICAgICAgICBQYW5lbHM6IG1vZGVsLmRhdGFQYW5lbHMsXG5cbiAgICAgICAgVXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGVja3MoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFuZWxzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdXBkYXRlRGVja3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbERlY2tzID0gbW9kZWwuZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVwZGF0ZVBhbmVsczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLlBhbmVscyA9IG1vZGVsLmdldExvY2FsUGFuZWxzKCk7XG4gICAgICAgIH0sXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHN0YXJ0QXBwbGljYXRpb24oKSB7XG4gICAgICAgIG1vZGVsLmNoZWNrSWZUaGVyZUlzQWxyZWFkeUxvY2FsbHlTdG9yZWREYXRhKCk7XG4gICAgICAgIGRhdGEuVXBkYXRlKCk7XG4gICAgICAgIHZpZXcucmVuZGVyUGFnZSgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVEZWNrQ3JlYXRpb25Gb3JtKCkge1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNrbmFtZScpO1xuICAgICAgICBjb25zdCBjYXRlZ29yeUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVja2NhdGVnb3J5Jyk7XG4gICAgICAgIGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2tkdWVkYXRlJyk7XG5cbiAgICAgICAgY29uc3QgbmFtZUNoZWNrZXIgPSAgbW9kZWwudmFsaWRhdG9ycy5uYW1lVmFsaWRhdG9yO1xuICAgICAgICBjb25zdCBjYXRlZ29yeUNoZWNrZXIgPSBtb2RlbC52YWxpZGF0b3JzLmNhdGVnb3J5VmFsaWRhdG9yO1xuICAgICAgICBjb25zdCBkYXRlQ2hlY2tlciA9IG1vZGVsLnZhbGlkYXRvcnMuZGF0ZVZhbGlkYXRvcjtcblxuICAgICAgICBuYW1lQ2hlY2tlci5zZXREYXRhKG5hbWVFbGVtZW50LCBuYW1lRWxlbWVudC52YWx1ZS50cmltKCkpO1xuICAgICAgICBjYXRlZ29yeUNoZWNrZXIuc2V0RGF0YShjYXRlZ29yeUVsZW1lbnQsIGNhdGVnb3J5RWxlbWVudC52YWx1ZS50cmltKCkpO1xuICAgICAgICBkYXRlQ2hlY2tlci5zZXREYXRhKGRhdGVFbGVtZW50LCBkYXRlRWxlbWVudC52YWx1ZS50cmltKCkpO1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSBbbmFtZUNoZWNrZXIsIGNhdGVnb3J5Q2hlY2tlciwgZGF0ZUNoZWNrZXJdO1xuICAgICAgICB2YWxpZGF0b3JzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBpbnB1dC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgICAgICBpbnB1dC5zZXRWYWxpZGl0eUNsYXNzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW52YWxpZElucHV0cyA9IHZhbGlkYXRvcnMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmlzVmFsaWQgPT09IGZhbHNlKTtcbiAgICAgICAgaWYgKGludmFsaWRJbnB1dHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW52YWxpZElucHV0cy5mb3JFYWNoKChpbnZhbGlkSW5wdXQpID0+IHtcbiAgICAgICAgICAgICAgICBpbnZhbGlkSW5wdXQuZGlzcGxheVdhcm5pbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhT2JqZWN0ID0gbW9kZWwuY3JlYXRlRm9ybURhdGFPYmplY3QoZm9ybSk7XG4gICAgICAgICAgICBjb25zdCBuZXdEZWNrID0gbW9kZWwuY3JlYXRlRGVjayhmb3JtRGF0YU9iamVjdCk7XG4gICAgICAgICAgICBtb2RlbC5hZGREZWNrVG9Mb2NhbFN0b3JhZ2UobmV3RGVjayk7XG4gICAgICAgICAgICBtb2RlbC5pbmNyZW1lbnRVc2VyRGF0YSgnZGVja3NDcmVhdGVkJyk7XG4gICAgICAgICAgICBkYXRhLlVwZGF0ZSgpO1xuICAgICAgICAgICAgdmlldy5yZXNldEZvcm0oZm9ybSk7XG4gICAgICAgICAgICBtb2RlbC52YWxpZGF0b3JzLnJlc2V0SW5wdXRWYWxpZGl0eSh2YWxpZGF0b3JzKTtcbiAgICAgICAgICAgIHZpZXcucmVuZGVyQWRkQ2FyZE1vZGFsQm9keShuZXdEZWNrKTtcbiAgICAgICAgICAgIE9ic2VydmFibGUucHVibGlzaCgnRGVja3NVcGRhdGVkJywgZGF0YS5sb2NhbERlY2tzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVBZGRDYXJkc0Zvcm0obmV3RGVjaywgc3RhdHVzKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY2FyZC1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb25pbnB1dCcpO1xuICAgICAgICBjb25zdCBhbnN3ZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXJpbnB1dCcpO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uQ2hlY2tlciA9IG1vZGVsLnZhbGlkYXRvcnMucXVlc3Rpb25WYWxpZGF0b3I7XG4gICAgICAgIGNvbnN0IGFuc3dlckNoZWNrZXIgPSBtb2RlbC52YWxpZGF0b3JzLmFuc3dlclZhbGlkYXRvcjtcblxuICAgICAgICBxdWVzdGlvbkNoZWNrZXIuc2V0RGF0YShxdWVzdGlvbklucHV0LCBxdWVzdGlvbklucHV0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgIGFuc3dlckNoZWNrZXIuc2V0RGF0YShhbnN3ZXJJbnB1dCwgYW5zd2VySW5wdXQudmFsdWUudHJpbSgpKTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gW3F1ZXN0aW9uQ2hlY2tlciwgYW5zd2VyQ2hlY2tlcl07XG4gICAgICAgIHZhbGlkYXRvcnMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW52YWxpZElucHV0cyA9IHZhbGlkYXRvcnMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmlzVmFsaWQgPT09IGZhbHNlKTtcbiAgICAgICAgaWYgKGludmFsaWRJbnB1dHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW52YWxpZElucHV0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5kaXNwbGF5V2FybmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhT2JqZWN0ID0gbW9kZWwuY3JlYXRlRm9ybURhdGFPYmplY3QoZm9ybSk7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gbW9kZWwuY3JlYXRlQ2FyZChmb3JtRGF0YU9iamVjdCk7XG4gICAgICAgICAgICBsZXQgZGVja0NvcHkgPSBtb2RlbC5nZXREZWNrRnJvbUxvY2FsU3RvcmFnZShuZXdEZWNrLm5hbWUpO1xuICAgICAgICAgICAgZGVja0NvcHkgPSBtb2RlbC5hZGRDYXJkVG9EZWNrKGNhcmQsIGRlY2tDb3B5KTtcbiAgICAgICAgICAgIG1vZGVsLnVwZGF0ZURlY2tJbkxvY2FsU3RvcmFnZShkZWNrQ29weSk7XG4gICAgICAgICAgICBkYXRhLlVwZGF0ZSgpO1xuICAgICAgICAgICAgbW9kZWwuaW5jcmVtZW50VXNlckRhdGEoJ2NhcmRzQ3JlYXRlZCcpO1xuICAgICAgICAgICAgbW9kZWwudmFsaWRhdG9ycy5yZXNldElucHV0VmFsaWRpdHkodmFsaWRhdG9ycyk7XG4gICAgICAgICAgICBPYnNlcnZhYmxlLnB1Ymxpc2goJ1VwZGF0ZU92ZXJ2aWV3RGF0YScsIGRhdGEuUGFuZWxzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2FkZG1vcmUnKSB7XG4gICAgICAgICAgICAgICAgdmlldy5yZW5kZXJBZGRDYXJkTW9kYWxCb2R5KGRlY2tDb3B5KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnZG9uZWFkZGluZycpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmhpZGVNb2RhbCgpO1xuICAgICAgICAgICAgICAgIHZpZXcucmVzZXRNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldERhdGFBbmRWaWV3KCkge1xuICAgICAgICBtb2RlbC5jbGVhckxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBkYXRhLlVwZGF0ZSgpO1xuICAgICAgICBPYnNlcnZhYmxlLnB1Ymxpc2goJ0RlY2tzVXBkYXRlZCcsIGRhdGEubG9jYWxEZWNrcyk7XG4gICAgICAgIE9ic2VydmFibGUucHVibGlzaCgnVXBkYXRlT3ZlcnZpZXdEYXRhJywgZGF0YS5QYW5lbHMpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzdGFydFN0dWR5U2Vzc2lvbihkZWNrKSB7XG4gICAgICAgIHZpZXcucmVuZGVyU3R1ZHlTZXNzaW9uKGRlY2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZFN0dWR5U2Vzc2lvbkVhcmx5KGRlY2spIHtcbiAgICAgICAgbW9kZWwudXBkYXRlQ3VycmVudENhcmQoZGVjaywgJ3Jlc2V0Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd05leHRTdHVkeUNhcmQoZGVjaywgb3BlcmF0aW9uKSB7XG5cbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJ3Nob3duZXh0Jykge1xuICAgICAgICAgICAgaWYgKGRlY2suY3VycmVudENhcmQgKyAxID09PSBkZWNrLmNhcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaXJpbmcgZW5kIHN0dWR5IHNlc3Npb24nKTtcbiAgICAgICAgICAgICAgICBtb2RlbC51cGRhdGVDdXJyZW50Q2FyZChkZWNrLCAncmVzZXQnKTtcbiAgICAgICAgICAgICAgICB2aWV3LnJlbW92ZU1haW5UYWdDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgdmlldy5yZW5kZXJTdHVkeVNlc3Npb25Db21wbGV0ZShkZWNrKTtcbiAgICAgICAgICAgICAgICBtb2RlbC5pbmNyZW1lbnRVc2VyRGF0YSgnZGVja3NTdHVkaWVkJyk7XG4gICAgICAgICAgICAgICAgbW9kZWwuaW5jcmVtZW50VXNlckRhdGEoJ2NhcmRzU3R1ZGllZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbC51cGRhdGVDdXJyZW50Q2FyZChkZWNrLCBvcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgIHZpZXcudXBkYXRlU3R1ZHlDYXJkKGRlY2spO1xuICAgICAgICAgICAgICAgIG1vZGVsLmluY3JlbWVudFVzZXJEYXRhKCdjYXJkc1N0dWRpZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnc2hvd3ByZXZpb3VzJykge1xuICAgICAgICAgICAgbW9kZWwudXBkYXRlQ3VycmVudENhcmQoZGVjaywgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgIHZpZXcudXBkYXRlU3R1ZHlDYXJkKGRlY2spO1xuICAgICAgICAgICAgbW9kZWwuZGVjcmVtZW50VXNlckRhdGEoJ2NhcmRzU3R1ZGllZCcpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlRGVjayhkZWNrTmFtZSkge1xuICAgICAgICBtb2RlbC5kZWxldGVEZWNrRnJvbUxvY2FsU3RvcmFnZShkZWNrTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZGVsZXRlRGVjayxcbiAgICAgICAgZW5kU3R1ZHlTZXNzaW9uRWFybHksXG4gICAgICAgIHN0YXJ0QXBwbGljYXRpb24sXG4gICAgICAgIHN0YXJ0U3R1ZHlTZXNzaW9uLFxuICAgICAgICBzaG93TmV4dFN0dWR5Q2FyZCxcbiAgICAgICAgaGFuZGxlQWRkQ2FyZHNGb3JtLFxuICAgICAgICBoYW5kbGVEZWNrQ3JlYXRpb25Gb3JtLFxuICAgIH1cbn0pKCk7IiwiZXhwb3J0IGNvbnN0IERlY2sgPSB7XG4gICAgbmFtZTogJ2RlZmF1bHQgbmFtZScsXG4gICAgZGVzY3JpcHRpb246ICdkZWZhdWx0IGRlc2NyaXB0aW9uJyxcbiAgICBkdWVEYXRlOiAnZGVmYXVsdCBkdWVEYXRlJyxcbiAgICBjYXRlZ29yeTogJ2RlZmF1bHQgY2F0ZWdvcnknLFxuICAgIGN1cnJlbnRDYXJkOiAwLFxuICAgIGNhcmRDb3VudDogMCxcbiAgICBjYXJkczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgZGVja0FycmF5ID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWNrKGZvcm1EYXRhT2JqKSB7XG4gICAgXG4gICAgY29uc3QgbmV3RGVjayA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEZWNrKSwge1xuICAgICAgICBuYW1lOiBmb3JtRGF0YU9iai5kZWNrbmFtZSxcbiAgICAgICAgY2F0ZWdvcnk6IGZvcm1EYXRhT2JqLmRlY2tjYXRlZ29yeSxcbiAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhT2JqLmRlY2tkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogbWFrZURhdGVSZWFkYWJsZShmb3JtRGF0YU9iai5kZWNrZHVlZGF0ZSksXG4gICAgICAgIGN1cnJlbnRDYXJkOiAwLFxuICAgICAgICBjYXJkQ291bnQ6IDAsXG4gICAgICAgIGNhcmRzOiBbXSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3RGVjaztcbn07XG5cbmZ1bmN0aW9uIG1ha2VEYXRlUmVhZGFibGUoZGF0ZURhdGEpIHtcbiAgICBjb25zdCBhcnJheSA9IGRhdGVEYXRhLnNwbGl0KCctJyk7XG4gICAgY29uc3QgeWVhciA9IGFycmF5WzBdO1xuICAgIGNvbnN0IG1vbnRoID0gY29udmVydE1vbnRoTnVtYmVyVG9Nb250aE5hbWUoYXJyYXlbMV0pO1xuICAgIGNvbnN0IGRheSA9IGNvbnZlcnREYXlOdW1iZXJUb050aERheU9mTW9udGgoYXJyYXlbMl0pO1xuICAgIHJldHVybiBgJHttb250aH0gJHtkYXl9LCAke3llYXJ9YDtcbn07XG5cbmZ1bmN0aW9uIGNvbnZlcnRNb250aE51bWJlclRvTW9udGhOYW1lKG51bWJlcikge1xuICAgIG51bWJlciA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuICAgIGNvbnN0IG1vbnRocyA9IHtcbiAgICAgICAgMTogJ0phbnVhcnknLFxuICAgICAgICAyOiAnRmVicnVhcnknLFxuICAgICAgICAzOiAnTWFyY2gnLFxuICAgICAgICA0OiAnQXByaWwnLFxuICAgICAgICA1OiAnTWF5JyxcbiAgICAgICAgNjogJ0p1bmUnLFxuICAgICAgICA3OiAnSnVseScsXG4gICAgICAgIDg6ICdBdWd1c3QnLFxuICAgICAgICA5OiAnU2VwdGVtYmVyJyxcbiAgICAgICAgMTA6ICdPY3RvYmVyJyxcbiAgICAgICAgMTE6ICdOb3ZlbWJlcicsXG4gICAgICAgIDEyOiAnRGVjZW1iZXInLFxuICAgIH1cbiAgICByZXR1cm4gbW9udGhzW251bWJlcl07XG59O1xuXG5mdW5jdGlvbiBjb252ZXJ0RGF5TnVtYmVyVG9OdGhEYXlPZk1vbnRoKG51bWJlcikge1xuICAgIGNvbnN0IG50aERheSA9IHtcbiAgICAgICAgMTogJ3N0JyxcbiAgICAgICAgMjogJ25kJyxcbiAgICAgICAgMzogJ3JkJyxcbiAgICAgICAgNDogJ3RoJywgNTogJ3RoJywgNjogJ3RoJywgNzogJ3RoJywgODogJ3RoJyxcbiAgICAgICAgOTogJ3RoJywgMTA6ICd0aCcsIDExOiAndGgnLCAxMjogJ3RoJywgXG4gICAgICAgIDEzOiAndGgnLCAxNDogJ3RoJywgMTU6ICd0aCcsIDE2OiAndGgnLCBcbiAgICAgICAgMTc6ICd0aCcsIDE4OiAndGgnLCAxOTogJ3RoJywgMjA6ICd0aCcsXG4gICAgICAgIDIxOiAnc3QnLFxuICAgICAgICAyMjogJ25kJyxcbiAgICAgICAgMjM6ICdyZCcsXG4gICAgICAgIDI0OiAndGgnLCAyNTogJ3RoJywgMjY6ICd0aCcsIDI3OiAndGgnLCBcbiAgICAgICAgMjg6ICd0aCcsIDI5OiAndGgnLCAzMDogJ3RoJyxcbiAgICAgICAgMzE6ICdzdCcsXG4gICAgfTtcbiAgICByZXR1cm4gYCR7bnVtYmVyfSR7bnRoRGF5W251bWJlcl19YDtcbn07IiwiXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbCwgYXR0cnMpIHtcbiAgICBmb3IodmFyIGtleSBpbiBhdHRycykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxufVxuICAiLCJpbXBvcnQgeyB2YWxpZGF0b3JzIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuaW1wb3J0IHsgY3JlYXRlRGVjaywgZGVja0FycmF5fSBmcm9tICcuL2RlY2snO1xuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gJy4vY2FyZCc7XG5pbXBvcnQgeyBwcmVCdWlsdERlY2tzIH0gZnJvbSAnLi9wcmVidWlsdGRlY2tzJztcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgbmV3VXNlckRhdGEsIGRhdGFQYW5lbHN9IGZyb20gJy4vdXNlcmRhdGEnO1xuXG5leHBvcnQgY29uc3QgbW9kZWwgPSAoZnVuY3Rpb24oKXtcblxuICAgIGxldCBjdXJyZW50UGFnZSA9ICcnO1xuXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFBhZ2UocGFnZSkge1xuICAgICAgICBjdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFBhZ2U7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrSWZUaGVyZUlzQWxyZWFkeUxvY2FsbHlTdG9yZWREYXRhKCkge1xuICAgICAgICBjb25zdCBkZWNrcyA9IG1vZGVsLmdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgaWYgKCFkZWNrcyB8fCBkZWNrcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzZXREZWNrQXJyYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhbmVscyA9IG1vZGVsLmdldExvY2FsUGFuZWxzKCk7XG4gICAgICAgIGlmICghcGFuZWxzIHx8IHBhbmVscyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzZXREYXRhUGFuZWxEYXRhKGRhdGFQYW5lbHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IG1vZGVsLmdldFVzZXJEYXRhKCk7XG4gICAgICAgIGlmICghdXNlckRhdGEgfHwgdXNlckRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc2V0TmV3VXNlckRhdGEobmV3VXNlckRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGl0ZW1zID0geyAuLi5sb2NhbFN0b3JhZ2V9O1xuICAgICAgICBpZiAoaXRlbXMuaGFzT3duUHJvcGVydHkoJ2RlY2thcnJheScpKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZWNrYXJyYXknKSkpOyAgICBcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXREZWNrRnJvbUxvY2FsU3RvcmFnZShkZWNrTmFtZSkge1xuICAgICAgICBjb25zdCBkZWNrcyA9IGdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgcmV0dXJuIGRlY2tzLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGRlY2tOYW1lKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYWRkQ2FyZHRvRGVjayhjYXJkLCBkZWNrKSB7XG4gICAgICAgIGRlY2suY2FyZHMucHVzaChjYXJkKTtcbiAgICAgICAgcmV0dXJuIGRlY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXREZWNrQXJyYXkoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWNrYXJyYXknLCBKU09OLnN0cmluZ2lmeShkZWNrQXJyYXkpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGVja0luTG9jYWxTdG9yYWdlKGRlY2spIHtcbiAgICAgICAgY29uc3QgZGVja3MgPSBnZXREZWNrQXJyYXlGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IGZvdW5kRGVjayA9IGdldERlY2tGcm9tTG9jYWxTdG9yYWdlKGRlY2submFtZSlcbiAgICAgICAgZm91bmREZWNrLmNhcmRzID0gZGVjay5jYXJkcztcbiAgICAgICAgZm91bmREZWNrLmNhcmRDb3VudCA9IGRlY2suY2FyZENvdW50O1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGVja3MuZmluZEluZGV4KGQgPT4gZC5uYW1lID09PSBmb3VuZERlY2submFtZSk7XG4gICAgICAgIGRlY2tzW2luZGV4XSA9IGZvdW5kRGVjaztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlY2thcnJheScsIEpTT04uc3RyaW5naWZ5KGRlY2tzKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRGVja1RvTG9jYWxTdG9yYWdlKGRlY2spIHtcbiAgICAgICAgY29uc3QgYXJyYXlPZkRlY2tzID0gZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBhcnJheU9mRGVja3MucHVzaChkZWNrKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlY2thcnJheScsIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZEZWNrcykpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRDYXJkVG9EZWNrKGNhcmQsIGRlY2spIHtcbiAgICAgICAgZGVjay5jYXJkcy5wdXNoKGNhcmQpO1xuICAgICAgICBkZWNrLmNhcmRDb3VudCsrO1xuICAgICAgICByZXR1cm4gZGVjaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVEZWNrRnJvbUxvY2FsU3RvcmFnZShkZWNrTmFtZSkge1xuICAgICAgICBjb25zdCBkZWNrcyA9IGdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgY29uc3QgZGVja1RvRGVsZXRlID0gZ2V0RGVja0Zyb21Mb2NhbFN0b3JhZ2UoZGVja05hbWUpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGRlY2tzLmZpbmRJbmRleChkID0+IGQubmFtZSA9PT0gZGVja1RvRGVsZXRlLm5hbWUpO1xuICAgICAgICBkZWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVja2FycmF5JywgSlNPTi5zdHJpbmdpZnkoZGVja3MpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldERhdGFQYW5lbERhdGEoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhcGFuZWxzJywgSlNPTi5zdHJpbmdpZnkoZGF0YVBhbmVscykpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXREYXRhUGFuZWxEYXRhKHVwZGF0ZWRQYW5lbHMpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGFwYW5lbHMnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUGFuZWxzKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldExvY2FsUGFuZWxzKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YXBhbmVscycpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxQYW5lbChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHBhbmVscyA9IEFycmF5LmZyb20oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YXBhbmVscycpKSk7XG4gICAgICAgIHBhbmVscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShkYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlc2V0TmV3VXNlckRhdGEoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyZGF0YScsIEpTT04uc3RyaW5naWZ5KG5ld1VzZXJEYXRhKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldFVzZXJEYXRhKGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJkYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRVc2VyRGF0YSgpIHtcblxuICAgICAgICBjb25zdCBpdGVtcyA9IHsgLi4ubG9jYWxTdG9yYWdlfTtcblxuICAgICAgICBpZiAoaXRlbXMuaGFzT3duUHJvcGVydHkoJ3VzZXJkYXRhJykpIHtcbiAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJkYXRhJykpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldE5vblBhcnNlZFVzZXJEYXRhKCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHsgLi4ubG9jYWxTdG9yYWdlfTtcbiAgICAgICAgaWYgKGl0ZW1zLmhhc093blByb3BlcnR5KCd1c2VyZGF0YScpKSB7XG5cbiAgICAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyZGF0YScpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbmNyZW1lbnRVc2VyRGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gZ2V0VXNlckRhdGEoKTtcbiAgICAgICAgdXNlckRhdGFbZGF0YV0gPSB1c2VyRGF0YVtkYXRhXSArIDE7XG4gICAgICAgIHNldFVzZXJEYXRhKHVzZXJEYXRhKTtcblxuICAgICAgICBjb25zdCBwYW5lbHMgPSBnZXRMb2NhbFBhbmVscygpO1xuICAgICAgICBwYW5lbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnN0YXRpc3RpYyA9IGl0ZW0uc3RhdGlzdGljICsgMTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgc2V0RGF0YVBhbmVsRGF0YShwYW5lbHMpO1xuICAgICAgICBjb250cm9sbGVyLmRhdGEuVXBkYXRlKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRlY3JlbWVudFVzZXJEYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBnZXRVc2VyRGF0YSgpO1xuICAgICAgICB1c2VyRGF0YVtkYXRhXSA9IHVzZXJEYXRhW2RhdGFdIC0gMTtcbiAgICAgICAgc2V0VXNlckRhdGEodXNlckRhdGEpO1xuXG4gICAgICAgIGNvbnN0IG5ld2RhdGEgPSBnZXRVc2VyRGF0YSgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDdXJyZW50Q2FyZChkZWNrLCBvcGVyYXRpb24pIHtcblxuICAgICAgICBjb25zdCBkZWNrSXNQcmVidWlsdCA9IGNoZWNrSWZEZWNrSXNQcmVCdWlsdChkZWNrLCBjb250cm9sbGVyLmRhdGEucHJlQnVpbHREZWNrcyk7XG4gICAgICAgIGlmIChkZWNrSXNQcmVidWlsdCAmJiBvcGVyYXRpb24gPT09ICdyZXNldCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJlQnVpbHREZWNrcy5pbmRleE9mKGRlY2spO1xuICAgICAgICAgICAgY29udHJvbGxlci5kYXRhLnByZUJ1aWx0RGVja3NbaW5kZXhdLmN1cnJlbnRDYXJkID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICdyZXNldCcpIHsgZ2V0RGVja0Zyb21Mb2NhbFN0b3JhZ2UoZGVjay5uYW1lKS5jdXJyZW50Q2FyZCA9IDA7IH0gXG4gICAgICAgIGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ3Nob3duZXh0JykgeyBkZWNrLmN1cnJlbnRDYXJkKys7IH0gXG4gICAgICAgIGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ3Nob3dwcmV2aW91cycpIHsgZGVjay5jdXJyZW50Q2FyZC0tOyB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrSWZEZWNrSXNQcmVCdWlsdChkZWNrLCBwcmVCdWlsdERlY2tzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlQnVpbHREZWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByZUJ1aWx0RGVja3NbaV0gPT09IGRlY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjbGVhckxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgcmVzZXROZXdVc2VyRGF0YSgpO1xuICAgICAgICByZXNldERhdGFQYW5lbERhdGEoKVxuICAgICAgICByZXNldERlY2tBcnJheSgpO1xuICAgICAgICBjb250cm9sbGVyLmRhdGEuVXBkYXRlKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvcm1EYXRhT2JqZWN0KGZvcm0pIHtcbiAgICAgICAgY29uc3QgbXlGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGFPYmogPSBPYmplY3QuZnJvbUVudHJpZXMobXlGb3JtRGF0YS5lbnRyaWVzKCkpO1xuICAgICAgICByZXR1cm4gZm9ybURhdGFPYmo7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGFQYW5lbHMsXG4gICAgICAgIHZhbGlkYXRvcnMsXG4gICAgICAgIGNyZWF0ZUNhcmQsXG4gICAgICAgIGFkZENhcmRUb0RlY2ssXG4gICAgICAgIGNyZWF0ZURlY2ssXG4gICAgICAgIGdldExvY2FsUGFuZWwsXG4gICAgICAgIGdldExvY2FsUGFuZWxzLFxuICAgICAgICByZXNldERhdGFQYW5lbERhdGEsXG4gICAgICAgIGluY3JlbWVudFVzZXJEYXRhLFxuICAgICAgICBnZXROb25QYXJzZWRVc2VyRGF0YSxcbiAgICAgICAgcmVzZXREZWNrQXJyYXksXG4gICAgICAgIGNoZWNrSWZUaGVyZUlzQWxyZWFkeUxvY2FsbHlTdG9yZWREYXRhLFxuICAgICAgICBkZWxldGVEZWNrRnJvbUxvY2FsU3RvcmFnZSxcbiAgICAgICAgdXBkYXRlRGVja0luTG9jYWxTdG9yYWdlLFxuICAgICAgICBkZWNyZW1lbnRVc2VyRGF0YSxcbiAgICAgICAgZ2V0VXNlckRhdGEsXG4gICAgICAgIHJlc2V0TmV3VXNlckRhdGEsXG4gICAgICAgIGdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UsXG4gICAgICAgIGdldEN1cnJlbnRQYWdlLFxuICAgICAgICBzZXRDdXJyZW50UGFnZSxcbiAgICAgICAgYWRkQ2FyZHRvRGVjayxcbiAgICAgICAgdXBkYXRlQ3VycmVudENhcmQsXG4gICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlLFxuICAgICAgICBjcmVhdGVGb3JtRGF0YU9iamVjdCxcbiAgICAgICAgYWRkRGVja1RvTG9jYWxTdG9yYWdlLFxuICAgICAgICBnZXREZWNrRnJvbUxvY2FsU3RvcmFnZSxcbiAgICB9O1xufSkoKTsiLCJpbXBvcnQgeyBEZWNrIH0gZnJvbSAnLi9kZWNrJztcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tICcuL2NhcmQnO1xuXG5jb25zdCBmcmVuY2hDYXJkcyA9IGNyZWF0ZUZyZW5jaENhcmRzKCk7XG5jb25zdCBmcmVuY2hEZWNrID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKERlY2spLCB7XG4gICAgbmFtZTogJ0ZyZW5jaCcsXG4gICAgZGVzY3JpcHRpb246ICdBIGRlY2sgdG8gbGVhcm4gMTAgYmFzaWMgRnJlbmNoIHdvcmRzJyxcbiAgICBkdWVEYXRlOiAnTmV4dCBXZWVrJyxcbiAgICBjYXRlZ29yeTogJ0xhbmd1YWdlcycsXG4gICAgY3VycmVudENhcmQ6IDAsXG4gICAgY2FyZENvdW50OiAwLFxuICAgIGNhcmRzOiBmcmVuY2hDYXJkcyxcbn0pO1xuICAgIFxuZnVuY3Rpb24gY3JlYXRlRnJlbmNoQ2FyZHMoKSB7XG5cbiAgICBjb25zdCBmcmVuY2hDYXJkT25lID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgbWFuXFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1biBob21tZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkVHdvID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgdHJlZVxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW4gYXJicmUnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZFRocmVlID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgY2hhaXJcXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuZSBjaGFpc2UnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZEZvdXIgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBjb21wdXRlclxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW4gb3JkaW5hdGV1cicsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkRml2ZSA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIHdpbmRvd1xcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIGZlbsOqdHJlJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRTaXggPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBzY2hvb2xcXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuZSDDqWNvbGUnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZFNldmVuID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgbWVudVxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIGNhcnRlJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRFaWdodCA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIGRvY3RvclxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIHZvaXR1cmUnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZE5pbmUgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBzaGlydFxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIGNoZW1pc2UnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZFRlbiA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIHBhcnR5XFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgZsOqdGUnLFxuICAgIH07XG5cbiAgICBjb25zdCBmcmVuY2hDYXJkcyA9IFtmcmVuY2hDYXJkT25lLCBmcmVuY2hDYXJkVHdvLCBmcmVuY2hDYXJkVGhyZWUsIFxuICAgICAgICAgICAgICAgICAgICBmcmVuY2hDYXJkRm91ciwgZnJlbmNoQ2FyZEZpdmUsIGZyZW5jaENhcmRTaXgsIFxuICAgICAgICAgICAgICAgICAgICBmcmVuY2hDYXJkU2V2ZW4sIGZyZW5jaENhcmRFaWdodCwgZnJlbmNoQ2FyZE5pbmUsXG4gICAgICAgICAgICAgICAgICAgIGZyZW5jaENhcmRUZW5dO1xuICAgIFxuICAgICAgICBmcmVuY2hDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNhcmQgPSBjcmVhdGVDYXJkKGNhcmQpO1xuICAgIH0pO1xuICAgIHJldHVybiBmcmVuY2hDYXJkcztcbn1cbmV4cG9ydCBjb25zdCBwcmVCdWlsdERlY2tzID0gW2ZyZW5jaERlY2ssIGZyZW5jaERlY2ssIGZyZW5jaERlY2ssIGZyZW5jaERlY2tdOyIsIlxuXG5leHBvcnQgY29uc3QgT2JzZXJ2YWJsZSAgPSB7XG4gICAgXG4gICAgZXZlbnRzOiB7XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0ucHVzaChmbilcbiAgICB9LFxuICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXS5maWx0ZXIoZiA9PiBmICE9PSBmbik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uKGV2TmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgICAgIGYoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiaW1wb3J0IExlYXJuaW5nSWNvbiBmcm9tICcuLi9pbWFnZXMvbGVhcm5pbmctY29sb3Iuc3ZnJztcbmltcG9ydCBTdHVkeUxhbXBJY29uIGZyb20gJy4uL2ltYWdlcy9zdHVkeS1sYW1wLWNvbG9yLnN2Zyc7XG5pbXBvcnQgU3R1ZHlEZXNrSWNvbiBmcm9tICcuLi9pbWFnZXMvc3R1ZHktZGVzay1jb2xvci5zdmcnO1xuaW1wb3J0IEVkdWNhdGlvbkljb24gZnJvbSAnLi4vaW1hZ2VzL2VkdWNhdGlvbi1jb2xvci5zdmcnO1xuXG5leHBvcnQgY29uc3QgbmV3VXNlckRhdGEgPSB7XG4gICAgdHlwZTogJ3VzZXJkYXRhJyxcbiAgICBkZWNrc0NyZWF0ZWQ6IDAsXG4gICAgZGVja3NTdHVkaWVkOiAwLFxuICAgIGNhcmRzQ3JlYXRlZDogMCxcbiAgICBjYXJkc1N0dWRpZWQ6IDAsXG59O1xuXG5jb25zdCBEYXRhUGFuZWwgPSB7XG4gICAgaW1hZ2VzcmM6IG51bGwsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdW5kZXJsaW5lY29sb3I6IG51bGwsXG4gICAgc3RhdGlzdGljOiBudWxsXG59O1xuXG5jb25zdCBkZWNrc0NyZWF0ZWRQYW5lbCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEYXRhUGFuZWwpLCB7XG4gICAgaW1hZ2VzcmM6IExlYXJuaW5nSWNvbixcbiAgICB0aXRsZTogJ0RlY2tzIENyZWF0ZWQnLFxuICAgIHVuZGVybGluZWNvbG9yOiAnZ3JlZW5jYXJkdW5kZXJsaW5lJyxcbiAgICBkZWNrc0NyZWF0ZWQ6IDAsXG4gICAgc3RhdGlzdGljOiAwLFxufSk7XG5cbmNvbnN0IGRlY2tzU3R1ZGllZFBhbmVsID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKERhdGFQYW5lbCksIHtcbiAgICBpbWFnZXNyYzogRWR1Y2F0aW9uSWNvbixcbiAgICB0aXRsZTogJ0RlY2tzIFN0dWRpZWQnLFxuICAgIHVuZGVybGluZWNvbG9yOiAnYmx1ZWNhcmR1bmRlcmxpbmUnLFxuICAgIHN0YXRpc3RpYzogMCxcbiAgICBkZWNrc1N0dWRpZWQ6IDAsXG59KTtcblxuY29uc3QgY2FyZHNDcmVhdGVkUGFuZWwgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoRGF0YVBhbmVsKSwge1xuICAgIGltYWdlc3JjOiBTdHVkeURlc2tJY29uLFxuICAgIHRpdGxlOiAnQ2FyZHMgQ3JlYXRlZCcsXG4gICAgdW5kZXJsaW5lY29sb3I6ICdicmlja2NhcmR1bmRlcmxpbmUnLFxuICAgIHN0YXRpc3RpYzogMCxcbiAgICBjYXJkc0NyZWF0ZWQ6IDAsXG59KTtcblxuY29uc3QgY2FyZHNTdHVkaWVkUGFuZWwgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoRGF0YVBhbmVsKSwge1xuICAgIGltYWdlc3JjOiBTdHVkeUxhbXBJY29uLFxuICAgIHRpdGxlOiAnQ2FyZHMgU3R1ZGllZCcsXG4gICAgdW5kZXJsaW5lY29sb3I6ICdzdW5zaGluZWNhcmR1bmRlcmxpbmUnLFxuICAgIHN0YXRpc3RpYzogMCxcbiAgICBjYXJkc1N0dWRpZWQ6IDAsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRhdGFQYW5lbHMgPSBbZGVja3NDcmVhdGVkUGFuZWwsIGRlY2tzU3R1ZGllZFBhbmVsLCBjYXJkc0NyZWF0ZWRQYW5lbCwgY2FyZHNTdHVkaWVkUGFuZWxdOyIsImltcG9ydCB7IGlzRnV0dXJlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBWYWxpZGF0b3IgPSB7XG4gICAgZGF0YTogbnVsbCxcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIGlzVmFsaWQ6IGZhbHNlLFxuXG4gICAgc2V0RGF0YTogZnVuY3Rpb24oZWxlbWVudCwgZGF0YSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH0sXG5cbiAgICBzZXRWYWxpZGl0eUNsYXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGlzcGxheVdhcm5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1RoaXMgZmllbGQgaXMgaW52YWxpZCcpO1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRvcnMgPSB7XG5cbiAgICBuYW1lVmFsaWRhdG9yOiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoVmFsaWRhdG9yKSwge1xuICAgICAgICBuYW1lTGVuZ3RoSXNWYWxpZDogZmFsc2UsXG4gICAgICAgIG5hbWVJc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgXG4gICAgICAgIGNoZWNrVmFsaWRpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0xlbmd0aCgpO1xuICAgICAgICAgICAgdGhpcy5jaGVja05hbWVBdmFpbGFiaWxpdHkodGhpcy5pbnB1dFZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5hbWVMZW5ndGhJc1ZhbGlkICYmIHRoaXMubmFtZUlzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge3RoaXMuaXNWYWxpZCA9IGZhbHNlfTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgY2hlY2tMZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZUxlbmd0aElzVmFsaWQgPSB0aGlzLmRhdGEubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgY2hlY2tOYW1lQXZhaWxhYmlsaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0RlY2tOYW1lID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5maW5kKGl0ZW0gPT4gaXRlbSA9PT0gdGhpcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVJc0F2YWlsYWJsZSA9IGV4aXN0aW5nRGVja05hbWUgIT09IHRoaXMuZGF0YSA/IHRydWU6IGZhbHNlO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBkaXNwbGF5V2FybmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubmFtZUxlbmd0aElzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ05hbWUgbXVzdCBiZSBhdCBsZWFzdCAxIGNoYXJhY3RlciBsb25nJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMubmFtZUlzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdEZWNrIGFscmVhZHkgZXhpc3RzLCBjaG9vc2UgYSBkaWZmZXJlbnQgbmFtZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSksXG4gICAgXG4gICAgY2F0ZWdvcnlWYWxpZGF0b3I6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShWYWxpZGF0b3IpLCB7XG4gICAgXG4gICAgICAgIGNoZWNrVmFsaWRpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5kYXRhICE9PSAnJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgZGlzcGxheVdhcm5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGNob29zZSBhIGNhdGVnb3J5Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgXG4gICAgZGF0ZVZhbGlkYXRvcjogT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFZhbGlkYXRvciksIHtcbiAgICBcbiAgICAgICAgY2hlY2tWYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VySW5wdXQgPSB0aGlzLmNvbnZlcnREYXRhVG9EYXRlT2JqZWN0KHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBpc0Z1dHVyZSh1c2VySW5wdXQpO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBjb252ZXJ0RGF0YVRvRGF0ZU9iamVjdDogZnVuY3Rpb24oZGF0ZURhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gZGF0ZURhdGEuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBhcnJheVswXTtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gYXJyYXlbMV07XG4gICAgICAgICAgICBjb25zdCBkYXkgPSBhcnJheVsyXTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgZGlzcGxheVdhcm5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZSB0aGF0IGlzIGluIHRoZSBmdXR1cmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICBcbiAgICBxdWVzdGlvblZhbGlkYXRvcjogT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFZhbGlkYXRvciksIHtcbiAgICAgICAgbWlubGVuZ3RoOiAxLFxuICAgICAgICBtYXhMZW5ndGg6IDMwMCxcbiAgICBcbiAgICAgICAgY2hlY2tWYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLmRhdGEubGVuZ3RoID4gMCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sZW5ndGggPCAzMDEgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGRpc3BsYXlXYXJuaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDMwMCBjaGFyYWN0ZXJzJyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICBcbiAgICBhbnN3ZXJWYWxpZGF0b3I6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShWYWxpZGF0b3IpLCB7XG4gICAgICAgIG1pbmxlbmd0aDogMSxcbiAgICAgICAgbWF4TGVuZ3RoOiAzMDAsXG4gICAgXG4gICAgICAgIGNoZWNrVmFsaWRpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5kYXRhLmxlbmd0aCA+IDAgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEubGVuZ3RoIDwgMzAxID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBkaXNwbGF5V2FybmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgYmUgYmV0d2VlbiAxIGFuZCAzMDAgY2hhcmFjdGVycycpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0sXG4gICAgfSksXG5cbiAgICByZXNldElucHV0VmFsaWRpdHk6IGZ1bmN0aW9uKGlucHV0cykge1xuICAgICAgICBpbnB1dHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0VmFsaWRpdHlDbGFzcygpO1xuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuIiwiaW1wb3J0IHsgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4vcHVic3ViJztcbmltcG9ydCBTdHVkeUljb24gZnJvbSAnLi4vaW1hZ2VzL3N0dWR5aW5nLnBuZyc7XG5pbXBvcnQgT3ZlcnZpZXdJY29uIGZyb20gJy4uL2ltYWdlcy9lZGl0LnBuZyc7XG5pbXBvcnQgeyBwcmV2aW91c1NhdHVyZGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBjb25zdCB2aWV3ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuXG4gICAgT2JzZXJ2YWJsZS5zdWJzY3JpYmUoJ0RlY2tzVXBkYXRlZCcsIGxvY2FsRGVja3MgPT4ge1xuICAgICAgICB1cGRhdGVEZWNrRGlzcGxheShsb2NhbERlY2tzKTtcbiAgICAgICAgdXBkYXRlRGVsZXRlRGVja09wdGlvbnMobG9jYWxEZWNrcylcbiAgICB9KTtcbiAgICBPYnNlcnZhYmxlLnN1YnNjcmliZSgnVXBkYXRlT3ZlcnZpZXdEYXRhJywgY2FyZERhdGEgPT4ge1xuICAgICAgICB1cGRhdGVPdmVydmlld0NhcmRzKGNhcmREYXRhKTtcbiAgICB9KTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW5kZXJZb3VyRGVja3MoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gcmVuZGVyU2VjdGlvblRpdGxlKCdZb3VyIERlY2tzJyk7XG4gICAgICAgIGNvbnN0IGRlY2tEaXNwbGF5RGl2ID0gcmVuZGVyRGVja0Rpc3BsYXkoY29udHJvbGxlci5kYXRhLmxvY2FsRGVja3MpO1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZCh0aXRsZSwgZGVja0Rpc3BsYXlEaXYpO1xuICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJlQnVpbHREZWNrcygpIHsgICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gcmVuZGVyU2VjdGlvblRpdGxlKCdQcmVidWlsdCBEZWNrcycpO1xuICAgICAgICBjb25zdCBwcmVidWlsdERlY2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByZWJ1aWx0RGVja3NEaXYuY2xhc3NOYW1lID0gJ2RlY2tkaXNwbGF5JztcbiAgICAgICAgY29udHJvbGxlci5kYXRhLnByZUJ1aWx0RGVja3MuZm9yRWFjaCgoZGVjaykgPT4ge1xuICAgICAgICAgICAgZGVjayA9IHJlbmRlckRlY2soZGVjayk7XG4gICAgICAgICAgICBwcmVidWlsdERlY2tzRGl2LmFwcGVuZENoaWxkKGRlY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZCh0aXRsZSwgcHJlYnVpbHREZWNrc0Rpdik7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJEZWNrRGlzcGxheShsb2NhbERlY2tzKSB7XG5cbiAgICAgICAgY29uc3QgZGVja0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVja0Rpc3BsYXlEaXYuY2xhc3NOYW1lID0gJ2RlY2tkaXNwbGF5JztcbiAgICAgICAgZGVja0Rpc3BsYXlEaXYuaWQgPSAnZGVja2Rpc3BsYXknO1xuXG4gICAgICAgIGNvbnN0IHlvdXJEZWNrc1NlY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgeW91ckRlY2tzU2VjdGlvbkRpdi5jbGFzc05hbWUgPSAneW91cmRlY2tzc2VjdGlvbmRpdic7XG4gICAgICAgIHlvdXJEZWNrc1NlY3Rpb25EaXYuaWQgPSAneW91cmRlY2tzc2VjdGlvbmRpdic7XG4gICAgICAgIHlvdXJEZWNrc1NlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoZGVja0Rpc3BsYXlEaXYpO1xuXG4gICAgICAgIGlmIChsb2NhbERlY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxvY2FsRGVja3MuZm9yRWFjaCgoZGVjaykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZW5kZXJEZWNrKGRlY2spO1xuICAgICAgICAgICAgICAgIGRlY2tEaXNwbGF5RGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpdHNFbXB0eU1lc3NhZ2UgPSByZW5kZXJJdHNFbXB0eU1lc3NhZ2UoKTtcbiAgICAgICAgICAgIGRlY2tEaXNwbGF5RGl2LmFwcGVuZENoaWxkKGl0c0VtcHR5TWVzc2FnZSk7XG4gICAgICAgICAgICB5b3VyRGVja3NTZWN0aW9uRGl2LmFwcGVuZENoaWxkKGl0c0VtcHR5TWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHlvdXJEZWNrc1NlY3Rpb25EaXY7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclN0dWR5Q2FyZFNpZGUoY2FyZFNpZGUsIGRlY2spIHtcblxuICAgICAgICBjb25zdCBudW1iZXJPZkNhcmRzRnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG51bWJlck9mQ2FyZHNGcm9udC5pbm5lclRleHQgPSBgJHtkZWNrLmN1cnJlbnRDYXJkICsgMX0gLyAke2RlY2suY2FyZHMubGVuZ3RofWA7XG4gICAgICAgIG51bWJlck9mQ2FyZHNGcm9udC5jbGFzc05hbWUgPSAnbnVtYmVyb2ZjYXJkcyc7XG4gICAgICAgIG51bWJlck9mQ2FyZHNGcm9udC5pZCA9IGAke2NhcmRTaWRlfXNlY3Rpb25udW1iZXJvZmNhcmRzYC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGhlYWRlci5pbm5lclRleHQgPSBgJHtjYXJkU2lkZX06YDtcblxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHRleHQuaWQgPSBgJHtjYXJkU2lkZX10ZXh0YC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoY2FyZFNpZGUgPT09ICdRdWVzdGlvbicpIHtcbiAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gZGVjay5jYXJkc1tkZWNrLmN1cnJlbnRDYXJkXS5xdWVzdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gZGVjay5jYXJkc1tkZWNrLmN1cnJlbnRDYXJkXS5hbnN3ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lckRpdi5hcHBlbmQoaGVhZGVyLCB0ZXh0KTtcblxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNlY3Rpb24uaWQgPSBgJHtjYXJkU2lkZX1zZWN0aW9uYC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBzZWN0aW9uLmNsYXNzTmFtZSA9IGAke2NhcmRTaWRlfXNlY3Rpb25gLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kKG51bWJlck9mQ2FyZHNGcm9udCwgaW5uZXJEaXYpO1xuICAgICAgICByZXR1cm4gc2VjdGlvbjtcblxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTdHVkeUNhcmQoZGVjaykge1xuICAgICAgICBjb25zdCBudW1iZXJPZkNhcmRzRnJvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb25zZWN0aW9ubnVtYmVyb2ZjYXJkcycpO1xuICAgICAgICBudW1iZXJPZkNhcmRzRnJvbnQuaW5uZXJUZXh0ID0gYCR7ZGVjay5jdXJyZW50Q2FyZCArIDF9IC8gJHtkZWNrLmNhcmRzLmxlbmd0aH1gO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbnRleHQnKTtcbiAgICAgICAgcXVlc3Rpb25UZXh0LmlubmVyVGV4dCA9IGRlY2suY2FyZHNbZGVjay5jdXJyZW50Q2FyZF0ucXVlc3Rpb247XG5cbiAgICAgICAgY29uc3QgYW5zd2VyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXJ0ZXh0Jyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhbnN3ZXJUZXh0LmlubmVyVGV4dCA9IGRlY2suY2FyZHNbZGVjay5jdXJyZW50Q2FyZF0uYW5zd2VyO1xuICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgY29uc3QgbnVtYmVyT2ZDYXJkc0JhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2Vyc2VjdGlvbm51bWJlcm9mY2FyZHMnKTtcbiAgICAgICAgbnVtYmVyT2ZDYXJkc0JhY2suaW5uZXJUZXh0ID0gYCR7ZGVjay5jdXJyZW50Q2FyZCArIDF9IC8gJHtkZWNrLmNhcmRzLmxlbmd0aH1gO1xuXG4gICAgICAgIGNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzYnV0dG9uJyk7XG4gICAgICAgIGlmIChkZWNrLmN1cnJlbnRDYXJkID4gMCkge1xuICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKVxuICAgICAgICAgICAgcHJldmlvdXNCdXR0b24udGFiSW5kZXggPSAnJztcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIHByZXZpb3VzQnV0dG9uLnRhYkluZGV4ID0gJy0xJztcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlY2suY3VycmVudENhcmQgKyAxID09PSBkZWNrLmNhcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRjYXJkYnV0dG9uJykuaW5uZXJUZXh0ID0gJ0ZpbmlzaCBTZXNzaW9uJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckZsaXBDYXJkKHF1ZXN0aW9uU2VjdGlvbiwgYW5zd2VyU2VjdGlvbikge1xuXG4gICAgICAgIGNvbnN0IGZsaXBDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZsaXBDYXJkLmNsYXNzTmFtZSA9ICdmbGlwLWNhcmQnO1xuICAgICAgICBmbGlwQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZsaXBDYXJkSW5uZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZhdGVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZsaXBDYXJkSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmxpcENhcmRJbm5lci5jbGFzc05hbWUgPSAnZmxpcC1jYXJkLWlubmVyJztcbiAgICAgICAgZmxpcENhcmRJbm5lci5pZCA9ICdmbGlwLWNhcmQtaW5uZXInO1xuXG4gICAgICAgIGNvbnN0IGZsaXBDYXJkRnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmxpcENhcmRGcm9udC5jbGFzc05hbWUgPSAnZmxpcC1jYXJkLWZyb250JztcblxuICAgICAgICBjb25zdCBmbGlwQ2FyZEJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmxpcENhcmRCYWNrLmNsYXNzTmFtZSA9ICdmbGlwLWNhcmQtYmFjayc7XG5cbiAgICAgICAgZmxpcENhcmQuYXBwZW5kQ2hpbGQoZmxpcENhcmRJbm5lcik7XG4gICAgICAgIGZsaXBDYXJkSW5uZXIuYXBwZW5kKGZsaXBDYXJkRnJvbnQsIGZsaXBDYXJkQmFjayk7XG4gICAgICAgIGZsaXBDYXJkRnJvbnQuYXBwZW5kQ2hpbGQocXVlc3Rpb25TZWN0aW9uKTtcbiAgICAgICAgZmxpcENhcmRCYWNrLmFwcGVuZENoaWxkKGFuc3dlclNlY3Rpb24pO1xuICAgICAgICByZXR1cm4gZmxpcENhcmQ7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclN0dWR5U2Vzc2lvbihkZWNrKSB7XG5cbiAgICAgICAgY29uc3Qgc3R1ZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3R1ZHlEaXYuY2xhc3NOYW1lID0gJ3N0dWR5ZGl2JztcblxuICAgICAgICBjb25zdCBzdHVkeUNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3R1ZHlDYXJkRGl2LmlkID0gJ3N0dWR5Y2FyZGRpdic7XG4gICAgICAgIHN0dWR5Q2FyZERpdi5jbGFzc05hbWUgPSAnc3R1ZHljYXJkZGl2JztcblxuICAgICAgICBjb25zdCBkZWNrTmFtZUhlYWRlciA9IHJlbmRlclNlY3Rpb25UaXRsZShkZWNrLm5hbWUpO1xuICAgICAgICBkZWNrTmFtZUhlYWRlci5jbGFzc05hbWUgPSAnZGVja25hbWVoZWFkZXInO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uU2VjdGlvbiA9IHJlbmRlclN0dWR5Q2FyZFNpZGUoJ1F1ZXN0aW9uJywgZGVjayk7XG4gICAgICAgIGNvbnN0IGFuc3dlclNlY3Rpb24gPSByZW5kZXJTdHVkeUNhcmRTaWRlKCdBbnN3ZXInLCBkZWNrKTtcblxuICAgICAgICBjb25zdCBwcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcmV2aW91c0J1dHRvbi5pZCA9ICdwcmV2aW91c2J1dHRvbic7XG4gICAgICAgIHByZXZpb3VzQnV0dG9uLmlubmVyVGV4dCA9ICdMYXN0IENhcmQnO1xuICAgICAgICBwcmV2aW91c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuc2hvd05leHRTdHVkeUNhcmQoZGVjaywgJ3Nob3dwcmV2aW91cycpO1xuICAgICAgICAgICAgY29uc3QgZmxpcENhcmRJbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGlwLWNhcmQtaW5uZXInKTtcbiAgICAgICAgICAgIGlmIChmbGlwQ2FyZElubmVyKSB7XG4gICAgICAgICAgICAgICAgZmxpcENhcmRJbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgcHJldmlvdXNCdXR0b24udGFiSW5kZXggPSAnLTEnO1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcblxuICAgICAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5leHRCdXR0b24uaW5uZXJUZXh0ID0gJ05leHQgQ2FyZCc7XG4gICAgICAgIG5leHRCdXR0b24uaWQgPSAnbmV4dGNhcmRidXR0b24nO1xuICAgICAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbGxlci5zaG93TmV4dFN0dWR5Q2FyZChkZWNrLCAnc2hvd25leHQnKTtcbiAgICAgICAgICAgIGNvbnN0IGZsaXBDYXJkSW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxpcC1jYXJkLWlubmVyJyk7XG4gICAgICAgICAgICBpZiAoZmxpcENhcmRJbm5lcikge1xuICAgICAgICAgICAgICAgIGZsaXBDYXJkSW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc3RvcFN0dWR5aW5nQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN0b3BTdHVkeWluZ0J1dHRvbi5pbm5lclRleHQgPSAnU3RvcCBTdHVkeWluZyc7XG4gICAgICAgIHN0b3BTdHVkeWluZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluaGVhZGVyJykucmVtb3ZlKCk7XG4gICAgICAgICAgICByZW1vdmVNYWluVGFnQ29udGVudCgpO1xuICAgICAgICAgICAgcmVuZGVyUGFnZSgpO1xuICAgICAgICAgICAgY29udHJvbGxlci5lbmRTdHVkeVNlc3Npb25FYXJseShkZWNrKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGJ1dHRvbnNTcGFuLmNsYXNzTmFtZSA9ICdidXR0b25zc3Bhbic7XG4gICAgICAgIGJ1dHRvbnNTcGFuLmFwcGVuZChwcmV2aW91c0J1dHRvbiwgbmV4dEJ1dHRvbiwgc3RvcFN0dWR5aW5nQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBmbGlwQ2FyZCA9IHJlbmRlckZsaXBDYXJkKHF1ZXN0aW9uU2VjdGlvbiwgYW5zd2VyU2VjdGlvbik7XG5cbiAgICAgICAgc3R1ZHlDYXJkRGl2LmFwcGVuZChmbGlwQ2FyZCwgYnV0dG9uc1NwYW4pO1xuICAgICAgICBzdHVkeURpdi5hcHBlbmQoZGVja05hbWVIZWFkZXIsIHN0dWR5Q2FyZERpdilcbiAgICAgICAgbWFpbi5hcHBlbmQoc3R1ZHlEaXYpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTdHVkeVNlc3Npb25Db21wbGV0ZShkZWNrKSB7XG4gICAgICAgIGNvbnN0IGNvbmdyYXRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbmdyYXRzRGl2LmNsYXNzTmFtZSA9ICdjb25ncmF0c2Rpdic7XG5cbiAgICAgICAgY29uc3QgY2VsZWJyYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjZWxlYnJhdGlvblRleHQuaW5uZXJUZXh0ID0gYENvbmdyYXR1bGF0aW9ucywgeW91IHN0dWRpZWQgJHtkZWNrLmNhcmRzLmxlbmd0aH0gY2FyZHMhIENsaWNrIHRoZSBidXR0b24gYmVsb3cgdG8gcmV0dXJuIHRvIHlvdXIgZGVja3MgcGFnZWA7XG5cbiAgICAgICAgY29uc3QgcmV0dXJuVG9EZWNrc1BhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcmV0dXJuVG9EZWNrc1BhZ2VCdXR0b24uaW5uZXJUZXh0ID0gJ1JldHVybiB0byBEZWNrcyBQYWdlJztcbiAgICAgICAgcmV0dXJuVG9EZWNrc1BhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB2aWV3LnJlbW92ZU1haW5UYWdDb250ZW50KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbmhlYWRlcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmVuZGVyUGFnZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25ncmF0c0Rpdi5hcHBlbmQoY2VsZWJyYXRpb25UZXh0LCByZXR1cm5Ub0RlY2tzUGFnZUJ1dHRvbik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY29uZ3JhdHNEaXYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZURlY2tzRnJvbVBhZ2UoKSB7XG4gICAgICAgIGNvbnN0IGRlY2tEaXNwbGF5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2tkaXNwbGF5Jyk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShkZWNrRGlzcGxheURpdi5jaGlsZHJlbik7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZURlY2tEaXNwbGF5KGxvY2FsRGVja3MpIHtcbiAgICAgICAgY29uc3QgZGVja0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVja2Rpc3BsYXknKTtcbiAgICAgICAgY29uc3QgeW91ckRlY2tzU2VjdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5b3VyZGVja3NzZWN0aW9uZGl2Jyk7XG4gICAgICAgIHJlbW92ZURlY2tzRnJvbVBhZ2UoKTtcblxuICAgICAgICBpZiAobG9jYWxEZWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0c2VtcHR5bWVzc2FnZScpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0c2VtcHR5bWVzc2FnZScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxEZWNrcy5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHJlbmRlckRlY2soZGVjayk7XG4gICAgICAgICAgICAgICAgZGVja0Rpc3BsYXlEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nSXRzRW1wdHlNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0c2VtcHR5bWVzc2FnZScpO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nSXRzRW1wdHlNZXNzYWdlKSB7IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdHNlbXB0eW1lc3NhZ2UnKS5yZW1vdmUoKTsgfVxuICAgICAgICAgICAgY29uc3QgaXRzRW1wdHlNZXNzYWdlID0gcmVuZGVySXRzRW1wdHlNZXNzYWdlKCk7XG4gICAgICAgICAgICB5b3VyRGVja3NTZWN0aW9uRGl2LmFwcGVuZENoaWxkKGl0c0VtcHR5TWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVySXRzRW1wdHlNZXNzYWdlKCkge1xuICAgICAgICBjb25zdCBpdHNFbXB0eU1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0c0VtcHR5TWVzc2FnZS5pZCA9ICdpdHNlbXB0eW1lc3NhZ2UnO1xuICAgICAgICBpdHNFbXB0eU1lc3NhZ2UuY2xhc3NOYW1lID0gJ2l0c2VtcHR5bWVzc2FnZSc7XG4gICAgICAgIGl0c0VtcHR5TWVzc2FnZS5pbm5lclRleHQgPSBgSXQncyBlbXB0eSBpbiBoZXJlISBDbGljayB0aGUgYmx1ZSBidXR0b24gYWJvdmUgdG8gY3JlYXRlIGEgbmV3IGRlY2suYDtcbiAgICAgICAgcmV0dXJuIGl0c0VtcHR5TWVzc2FnZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJEZWNrKGRlY2spIHtcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgbmFtZS5pbm5lclRleHQgPSBkZWNrLm5hbWU7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZVBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGR1ZURhdGVQYXJhZ3JhcGhFbGVtZW50LmlubmVyVGV4dCA9IGBEdWU6ICR7ZGVjay5kdWVEYXRlfWA7XG5cbiAgICAgICAgY29uc3QgZGVja0Rlc2NyaXB0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZWNrRGVzY3JpcHRpb25QYXJhZ3JhcGguaW5uZXJUZXh0ID0gZGVjay5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBzdHVkeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdHVkeUJ1dHRvbi5pbm5lclRleHQgPSAnU3R1ZHknO1xuICAgICAgICBzdHVkeUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTWFpblRhZ0NvbnRlbnQoKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuc3RhcnRTdHVkeVNlc3Npb24oZGVjayk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaW1hZ2VBbmROYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGltYWdlQW5kTmFtZURpdi5jbGFzc05hbWUgPSAnZGVja2ltYWdlYW5kbmFtZSc7XG4gICAgICAgIGltYWdlQW5kTmFtZURpdi5hcHBlbmQobmFtZSwgc3R1ZHlCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGRlY2tEZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWNrRGVzY3JpcHRpb25EaXYuY2xhc3NOYW1lID0gJ2RlY2tkZXNjcmlwdGlvbmRpdic7XG4gICAgICAgIGRlY2tEZXNjcmlwdGlvbkRpdi5hcHBlbmQoZGVja0Rlc2NyaXB0aW9uUGFyYWdyYXBoLCBkdWVEYXRlUGFyYWdyYXBoRWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgZGVja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWNrRGl2LmNsYXNzTmFtZSA9ICdkZWNrJztcbiAgICAgICAgZGVja0Rpdi5hcHBlbmQoaW1hZ2VBbmROYW1lRGl2LCBkZWNrRGVzY3JpcHRpb25EaXYpO1xuICAgICAgICByZXR1cm4gZGVja0RpdjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyT3ZlcnZpZXdTZWN0aW9uKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHJlbmRlclNlY3Rpb25UaXRsZSgnT3ZlcnZpZXcnKTtcbiAgICAgICAgY29uc3Qgcm93T2ZDYXJkc0RpdiA9IHJlbmRlck92ZXJ2aWV3Q2FyZHMoY29udHJvbGxlci5kYXRhLlBhbmVscyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZCh0aXRsZSwgcm93T2ZDYXJkc0Rpdik7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gcmVuZGVyT3ZlcnZpZXdDYXJkcyhjYXJkcykge1xuXG4gICAgICAgIGNvbnN0IHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93MS5jbGFzc05hbWUgPSAnb3ZlcnZpZXdmbGV4Ym94ZGl2J1xuICAgICAgICByb3cxLmNsYXNzTGlzdC5hZGQoJ2ZsZXhlbmRkaXYnKTtcbiAgICAgICAgY29uc3Qgcm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3cyLmNsYXNzTmFtZSA9ICdvdmVydmlld2ZsZXhib3hkaXYnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgY29uc3QgY2FyZE91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkT3V0ZXJEaXYuY2xhc3NOYW1lID0gJ292ZXJ2aWV3Y2FyZCc7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBjYXJkSW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IGNhcmRzW2ldLmltYWdlc3JjO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gY2FyZHNbaV0udGl0bGU7XG4gICAgIFxuICAgICAgICAgICAgY29uc3Qgc3RhdGlzdGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgc3RhdGlzdGljLmlkID0gY2FyZHNbaV0udW5kZXJsaW5lY29sb3I7XG4gICAgICAgICAgICBzdGF0aXN0aWMuY2xhc3NOYW1lID0gY2FyZHNbaV0udW5kZXJsaW5lY29sb3I7XG4gICAgICAgICAgICBzdGF0aXN0aWMuaW5uZXJUZXh0ID0gY2FyZHNbaV0uc3RhdGlzdGljO1xuICAgIFxuICAgICAgICAgICAgY2FyZElubmVyRGl2LmFwcGVuZChpbWFnZSwgdGl0bGUpO1xuICAgICAgICAgICAgY2FyZE91dGVyRGl2LmFwcGVuZChjYXJkSW5uZXJEaXYsIHN0YXRpc3RpYyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGkgJSAyID09PSAwID8gcm93MS5hcHBlbmRDaGlsZChjYXJkT3V0ZXJEaXYpIDogcm93Mi5hcHBlbmRDaGlsZChjYXJkT3V0ZXJEaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm93T2ZDYXJkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3dPZkNhcmRzRGl2LmNsYXNzTmFtZSA9ICdyb3dvZmNhcmRzJztcbiAgICAgICAgcm93T2ZDYXJkc0Rpdi5pZCA9ICdyb3dvZmNhcmRzJztcbiAgICAgICAgcm93T2ZDYXJkc0Rpdi5hcHBlbmQocm93MSwgcm93Mik7XG4gICAgICAgIHJldHVybiByb3dPZkNhcmRzRGl2O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVPdmVydmlld0NhcmRzKGNhcmRzKSB7XG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJ2aWV3Q2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcmQudW5kZXJsaW5lY29sb3IpO1xuICAgICAgICAgICAgb3ZlcnZpZXdDYXJkLmlubmVyVGV4dCA9IGNhcmQuc3RhdGlzdGljO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTZXR0aW5nc1NlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIHNlY3Rpb24uY2xhc3NOYW1lID0gJ3NldHRpbmdzc2VjdGlvbic7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSByZW5kZXJTZWN0aW9uVGl0bGUoJ1NldHRpbmdzJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZWxldGVEZWNrU2VjdGlvbiA9IHJlbmRlckRlbGV0ZURlY2tPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gcmVuZGVyUmVzZXRCdXR0b24oKTtcblxuICAgICAgICBzZWN0aW9uLmFwcGVuZCh0aXRsZSwgZGVsZXRlRGVja1NlY3Rpb24sIHJlc2V0QnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckRlbGV0ZURlY2tPcHRpb25zKCkge1xuXG4gICAgICAgIGNvbnN0IGRlY2tzID0gQXJyYXkuZnJvbShjb250cm9sbGVyLmRhdGEubG9jYWxEZWNrcyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkcm9wZG93bkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZHJvcGRvd25MYWJlbC5odG1sRm9yID0gJ2RlY2tzJztcbiAgICAgICAgZHJvcGRvd25MYWJlbC5pbm5lclRleHQgPSAnQ2hvb3NlIGEgZGVjayB5b3Ugd291bGQgbGlrZSB0byBkZWxldGUnO1xuXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGRyb3Bkb3duU2VsZWN0Lm5hbWUgPSAnZGVja3MnO1xuICAgICAgICBkcm9wZG93blNlbGVjdC5pZCA9ICdkcm9wZG93bnNlbGVjdCc7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBkZWZhdWx0T3B0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgIGRlZmF1bHRPcHRpb24uaW5uZXJUZXh0ID0gJ19fX19fX19fX19fJztcbiAgICAgICAgZHJvcGRvd25TZWxlY3QuYXBwZW5kQ2hpbGQoZGVmYXVsdE9wdGlvbik7XG5cbiAgICAgICAgZGVja3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24uaWQgPSBpdGVtLm5hbWUgKyAnaWQnO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgIGRyb3Bkb3duU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ2RlY2tkZWxldGVidXR0b24nO1xuICAgICAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJ0RlbGV0ZSc7XG4gICAgICAgIFxuICAgICAgICBkZWxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2tOYW1lID0gZHJvcGRvd25TZWxlY3QudmFsdWU7XG4gICAgICAgICAgICBjb250cm9sbGVyLmRlbGV0ZURlY2soZGVja05hbWUpO1xuICAgICAgICAgICAgY29udHJvbGxlci5kYXRhLlVwZGF0ZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVja05hbWUgKyAnaWQnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIE9ic2VydmFibGUucHVibGlzaCgnRGVja3NVcGRhdGVkJywgY29udHJvbGxlci5kYXRhLmxvY2FsRGVja3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZURlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVsZXRlRGVja0Rpdi5jbGFzc05hbWUgPSAnZGVsZXRlZGVja2Rpdic7XG4gICAgICAgIGRlbGV0ZURlY2tEaXYuYXBwZW5kKGRyb3Bkb3duU2VsZWN0LCBkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ2RlY2tkZWxldGVvcHRpb25zJztcbiAgICAgICAgZGl2LmFwcGVuZChkcm9wZG93bkxhYmVsLCBkZWxldGVEZWNrRGl2KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGVsZXRlRGVja09wdGlvbnMobG9jYWxEZWNrcykge1xuICAgICAgICBjb25zdCBkcm9wZG93blNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wZG93bnNlbGVjdCcpO1xuICAgICAgICBjb25zdCBkZWNrcyA9IEFycmF5LmZyb20oZHJvcGRvd25TZWxlY3QuY2hpbGRyZW4pO1xuXG4gICAgICAgIGRlY2tzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlICE9ICcnKSB7IGl0ZW0ucmVtb3ZlKCk7IH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBsb2NhbERlY2tzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLmlkID0gaXRlbS5uYW1lICsgJ2lkJztcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICBkcm9wZG93blNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyUmVzZXRCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJ0RlbGV0ZSBhbGwgc2F2ZWQgZGF0YSc7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAncmVzZXRidXR0b24nO1xuICAgICAgICBidXR0b24uYXJpYUxhYmVsID0gJ0NsaWNrIGhlcmUgdG8gZGVsZXRlIGFsbCBzYXZlZCBkYXRhJztcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2V0IHlvdXIgZGF0YT8gWW91IGNhbm5vdCB1bmRvIHRoaXMgYWN0aW9uIScpKSB7XG4gICAgICAgICAgICAgICAgT2JzZXJ2YWJsZS5wdWJsaXNoKCdEYXRhUmVzZXQnKTsgICAgXG4gICAgICAgICAgICB9IGVsc2UgeyByZXR1cm47IH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyTW9kYWwoKSB7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWwuaWQgPSAnbW9kYWwnO1xuICAgICAgICBtb2RhbC5jbGFzc05hbWUgPSAnbW9kYWwnO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgICAgICBjb25zdCBtb2RhbEhlYWRlciA9IHJlbmRlck1vZGFsSGVhZGVyKG1vZGFsKTtcbiAgICAgICAgY29uc3QgbW9kYWxGb3JtID0gcmVuZGVyTW9kYWxGb3JtKG1vZGFsKTtcblxuICAgICAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWxCb2R5LmNsYXNzTmFtZSA9ICdtb2RhbC1ib2R5JztcbiAgICAgICAgbW9kYWxCb2R5LmlkID0gJ21vZGFsLWJvZHknO1xuICAgICAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQobW9kYWxGb3JtKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbENvbnRlbnQuY2xhc3NOYW1lID0gJ21vZGFsLWNvbnRlbnQnO1xuICAgICAgICBtb2RhbENvbnRlbnQuaWQgPSAnbW9kYWwtY29udGVudCc7XG4gICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmQobW9kYWxIZWFkZXIsIG1vZGFsQm9keSk7XG5cbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyTW9kYWxIZWFkZXIobW9kYWwpIHtcblxuICAgICAgICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIG1vZGFsSGVhZGVyLmlubmVyVGV4dCA9ICdTdGVwIDE6IENyZWF0ZSBEZWNrJ1xuICAgICAgICBtb2RhbEhlYWRlci5pZCA9ICdtb2RhbGhlYWRlcmg1JztcblxuICAgICAgICBjb25zdCBleGl0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZXhpdFNwYW4uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuICAgICAgICBleGl0U3Bhbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2RhbEhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbEhlYWRlckRpdi5jbGFzc05hbWUgPSAnbW9kYWwtaGVhZGVyJztcbiAgICAgICAgbW9kYWxIZWFkZXJEaXYuYXBwZW5kKG1vZGFsSGVhZGVyLCBleGl0U3Bhbik7XG4gICAgICAgIHJldHVybiBtb2RhbEhlYWRlckRpdjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyTW9kYWxGb3JtKCkge1xuXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbmFtZUlucHV0TGFiZWwuaHRtbEZvciA9ICdkZWNrbmFtZSc7XG4gICAgICAgIG5hbWVJbnB1dExhYmVsLmlubmVyVGV4dCA9IGBNYXggMjAgQ2hhcmFjdGVyc2A7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBuYW1lSW5wdXQubWluTGVuZ3RoID0gMTtcbiAgICAgICAgc2V0QXR0cmlidXRlcyhuYW1lSW5wdXQsIHtcbiAgICAgICAgICAgICdpZCc6ICdkZWNrbmFtZScsXG4gICAgICAgICAgICAnY2xhc3MnOiAnZGVja25hbWUnLFxuICAgICAgICAgICAgJ25hbWUnOiAnZGVja25hbWUnLFxuICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICAgICAnbWF4TGVuZ3RoJzogJzIwJyxcbiAgICAgICAgICAgICdtaW5MZW5ndGgnOiAnMScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSAnZGVja2Rlc2NyaXB0aW9uJztcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5pbm5lclRleHQgPSBgRGVzY3JpcHRpb24gTWF4IDYwIENoYXJhY3RlcnNgO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2lkJzogJ2RlY2tkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2RlY2tkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnZGVja2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAncm93cyc6ICc4JyxcbiAgICAgICAgICAgICAgICAnY29scyc6ICcyMCcsXG4gICAgICAgICAgICAgICAgJ21heExlbmd0aCc6ICc2MCcsXG4gICAgICAgICAgICAgICAgJ21pbi1oZWlnaHQnOiAnM3JlbScsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9ICdkZWNrZHVlZGF0ZSc7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIERhdGU6JztcblxuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKGR1ZURhdGVJbnB1dCwge1xuICAgICAgICAgICAgJ2lkJzogJ2RlY2tkdWVkYXRlJyxcbiAgICAgICAgICAgICduYW1lJzogJ2RlY2tkdWVkYXRlJyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdkZWNrZHVlZGF0ZScsXG4gICAgICAgICAgICAndHlwZSc6ICdkYXRlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2F0ZWdvcnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNhdGVnb3J5TGFiZWwuaHRtbEZvciA9ICdkZWNrY2F0ZWdvcnknO1xuICAgICAgICBjYXRlZ29yeUxhYmVsLmlubmVyVGV4dCA9ICdDYXRlZ29yeSc7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjYXRlZ29yeVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBjYXRlZ29yeVNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMoY2F0ZWdvcnlTZWxlY3QsIHtcbiAgICAgICAgICAgICdpZCc6ICdkZWNrY2F0ZWdvcnknLFxuICAgICAgICAgICAgJ25hbWUnOiAnZGVja2NhdGVnb3J5JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdkZWNrY2F0ZWdvcnknLFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgZGVmYXVsdE9wdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICBkZWZhdWx0T3B0aW9uLmlubmVyVGV4dCA9ICdQbGVhc2UgY2hvb3NlIGEgQ2F0ZWdvcnknO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbGFuZ3VhZ2VPcHRpb24udmFsdWUgPSAnTGFuZ3VhZ2UnO1xuICAgICAgICBsYW5ndWFnZU9wdGlvbi5pbm5lclRleHQgPSAnTGFuZ3VhZ2UnO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbWF0aE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBtYXRoT3B0aW9uLnZhbHVlID0gJ01hdGgnO1xuICAgICAgICBtYXRoT3B0aW9uLmlubmVyVGV4dCA9ICdNYXRoJztcblxuICAgICAgICBjYXRlZ29yeVNlbGVjdC5hcHBlbmQoZGVmYXVsdE9wdGlvbiwgbGFuZ3VhZ2VPcHRpb24sIG1hdGhPcHRpb24pO1xuXG4gICAgICAgIGNvbnN0IGlucHV0cyA9IFtuYW1lSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVJbnB1dCwgY2F0ZWdvcnlTZWxlY3RdO1xuICAgICAgICBjb25zdCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGZvcm1TdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gJ0NyZWF0ZSBEZWNrJztcbiAgICAgICAgZm9ybVN1Ym1pdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGZvcm1TdWJtaXRCdXR0b24uY2xhc3NOYW1lID0gJ3N1Ym1pdGJ1dHRvbic7XG4gICAgICAgIGZvcm1TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLmhhbmRsZURlY2tDcmVhdGlvbkZvcm0pO1xuICAgICAgICBjb25zdCBhZGRDYXJkc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRDYXJkc0J1dHRvbi5pbm5lclRleHQgPSAnQWRkIENhcmRzJztcbiAgICAgICAgYWRkQ2FyZHNCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBhZGRDYXJkc0J1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmVuZGVyQWRkQ2FyZE1vZGFsQm9keSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NOYW1lID0gJ21vZGFsLWZvcm0nO1xuICAgICAgICBmb3JtLmlkID0gJ21vZGFsLWZvcm0nO1xuICAgICAgICBmb3JtLmFwcGVuZChcbiAgICAgICAgICAgIG5hbWVJbnB1dExhYmVsLCBuYW1lSW5wdXQsIFxuICAgICAgICAgICAgY2F0ZWdvcnlMYWJlbCwgY2F0ZWdvcnlTZWxlY3QsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLCBkZXNjcmlwdGlvbklucHV0LFxuICAgICAgICAgICAgZHVlRGF0ZUxhYmVsLCBkdWVEYXRlSW5wdXQsXG4gICAgICAgICAgICBmb3JtU3VibWl0QnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGZvcm07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldE1vZGFsQXV0b2ZvY3VzKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgbW9kYWxib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJvZHknKTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGV4dCA9IG1vZGFsYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXSB8fCBtb2RhbGJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XG4gICAgICAgICAgICBmaXJzdFRleHQuZm9jdXMoKTtcbiAgICAgICAgICB9LCAxKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyQWRkQ2FyZE1vZGFsQm9keShuZXdEZWNrKSB7XG4gICAgICAgIHJlbW92ZU1vZGFsQ29udGVudCgpO1xuICAgICAgICByZW5kZXJNb2RhbEFkZENhcmRJbnB1dChuZXdEZWNrKTtcbiAgICAgICAgcmVuZGVyTW9kYWxBZGRDYXJkSW5wdXRIZWFkZXIoKTtcbiAgICAgICAgc2V0TW9kYWxBdXRvZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVzZXRNb2RhbCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJykucmVtb3ZlKCk7XG4gICAgICAgIHJlbmRlck1vZGFsKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vZGFsQWRkQ2FyZElucHV0KG5ld0RlY2spIHtcblxuICAgICAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYm9keScpO1xuXG4gICAgICAgIGNvbnN0IGNhcmRDb3VudEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY2FyZENvdW50SDMuaW5uZXJUZXh0ID0gYENhcmQ6ICR7bmV3RGVjay5jYXJkQ291bnQgKyAxfWA7XG4gICAgICAgIGNhcmRDb3VudEgzLmNsYXNzTmFtZSA9ICdjYXJkY291bnRoMyc7XG5cbiAgICAgICAgY29uc3QgZGVja05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBkZWNrTmFtZS5pbm5lclRleHQgPSBuZXdEZWNrLm5hbWU7XG5cbiAgICAgICAgY29uc3QgbmV3Q2FyZFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0NhcmRUaXRsZURpdi5jbGFzc05hbWUgPSAnbmV3Y2FyZHRpdGxlZGl2JztcbiAgICAgICAgbmV3Q2FyZFRpdGxlRGl2LmFwcGVuZChjYXJkQ291bnRIMywgZGVja05hbWUpO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBxdWVzdGlvbkxhYmVsLmh0bWxGb3IgPSAncXVlc3Rpb25pbnB1dCc7XG4gICAgICAgIHF1ZXN0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ1F1ZXN0aW9uOic7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBxdWVzdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgcXVlc3Rpb25JbnB1dC5uYW1lID0gJ3F1ZXN0aW9uaW5wdXQnO1xuICAgICAgICBxdWVzdGlvbklucHV0LmlkID0gJ3F1ZXN0aW9uaW5wdXQnO1xuICAgICAgICBxdWVzdGlvbklucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgICAgIHF1ZXN0aW9uSW5wdXQubWF4TGVuZ3RoID0gMzAwO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHF1ZXN0aW9uRGl2LmNsYXNzTmFtZSA9ICdxdWVzdGlvbmRpdic7XG4gICAgICAgIHF1ZXN0aW9uRGl2LmFwcGVuZChxdWVzdGlvbkxhYmVsLCBxdWVzdGlvbklucHV0KTtcblxuICAgICAgICBjb25zdCBhbnN3ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGFuc3dlckxhYmVsLmh0bWxGb3IgPSAnYW5zd2VyaW5wdXQnO1xuICAgICAgICBhbnN3ZXJMYWJlbC5pbm5lclRleHQgPSAnQW5zd2VyOidcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFuc3dlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgYW5zd2VySW5wdXQubmFtZSA9ICdhbnN3ZXJpbnB1dCc7XG4gICAgICAgIGFuc3dlcklucHV0LmlkID0gJ2Fuc3dlcmlucHV0JztcbiAgICAgICAgYW5zd2VySW5wdXQubWluTGVuZ3RoID0gMTtcbiAgICAgICAgYW5zd2VySW5wdXQubWF4TGVuZ3RoID0gMzAwO1xuXG4gICAgICAgIGNvbnN0IGFuc3dlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhbnN3ZXJEaXYuY2xhc3NOYW1lID0gJ2Fuc3dlcmRpdic7XG4gICAgICAgIGFuc3dlckRpdi5hcHBlbmQoYW5zd2VyTGFiZWwsIGFuc3dlcklucHV0KTtcblxuICAgICAgICBjb25zdCBtb2RhbENhcmRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBtb2RhbENhcmRGb3JtLmlkID0gJ21vZGFsLWNhcmQtZm9ybSc7XG4gICAgICAgIG1vZGFsQ2FyZEZvcm0uYXBwZW5kKHF1ZXN0aW9uRGl2LCBhbnN3ZXJEaXYpO1xuXG4gICAgICAgIGNvbnN0IHVzZXJPcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHVzZXJPcHRpb25zRGl2LmNsYXNzTmFtZSA9ICd1c2Vyb3B0aW9uc2Rpdic7XG5cbiAgICAgICAgY29uc3QgYWRkTmV4dENhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkTmV4dENhcmRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBuZXh0IGNhcmQnO1xuICAgICAgICBhZGROZXh0Q2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlQWRkQ2FyZHNGb3JtKG5ld0RlY2ssICdhZGRtb3JlJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmluaXNoQWRkaW5nQ2FyZHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZmluaXNoQWRkaW5nQ2FyZHNCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBhbmQgRmluaXNoJztcbiAgICAgICAgZmluaXNoQWRkaW5nQ2FyZHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmhhbmRsZUFkZENhcmRzRm9ybShuZXdEZWNrLCAnZG9uZWFkZGluZycpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVzZXJPcHRpb25zRGl2LmFwcGVuZChhZGROZXh0Q2FyZEJ1dHRvbiwgZmluaXNoQWRkaW5nQ2FyZHNCdXR0b24pO1xuICAgICAgICBtb2RhbEJvZHkuYXBwZW5kKG5ld0NhcmRUaXRsZURpdiwgbW9kYWxDYXJkRm9ybSwgdXNlck9wdGlvbnNEaXYpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNb2RhbEFkZENhcmRJbnB1dEhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxoZWFkZXJoNScpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSAnU3RlcCAyOiBBZGQgQ2FyZHMnO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW1vdmVNb2RhbENvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1ib2R5Jyk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShtb2RhbEJvZHkuY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBoaWRlTW9kYWwoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybShmb3JtKSB7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyU2VjdGlvblRpdGxlKHRpdGxlTmFtZSkge1xuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGgxLmlubmVyVGV4dCA9IHRpdGxlTmFtZTtcbiAgICAgICAgaDEuaWQgPSB0aXRsZU5hbWUuc2xpY2UoKS50b0xvd2VyQ2FzZSgpICsgJ3RpdGxlJztcbiAgICAgICAgcmV0dXJuIGgxO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzaG93QWRkRGVja0J1dHRvbigpIHtcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gICAgICAgIG1lbnUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGJhbm5lckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYW5uZXJidXR0b24nKTtcbiAgICAgICAgYmFubmVyQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFiYW5uZXJCdXR0b24uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgICAgICAgY29uc3QgYWRkRGVja0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRkZWNrYnV0dG9uJyk7XG4gICAgICAgIGFkZERlY2tCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldE1vZGFsQXV0b2ZvY3VzKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFpblRhZ0NvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IG1haW5DaGlsZHJlbiA9IEFycmF5LmZyb20obWFpbi5jaGlsZHJlbik7XG4gICAgICAgIG1haW5DaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG59O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcbiAgICAgICAgcmVtb3ZlTWFpblRhZ0NvbnRlbnQoKTtcbiAgICAgICAgcmVuZGVyTW9kYWwoKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluaGVhZGVyJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFpbmhlYWRlcicpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlckJhbm5lcigpO1xuICAgICAgICBzaG93QWRkRGVja0J1dHRvbigpO1xuICAgICAgICBzaG93TW9kYWwoKTtcblxuICAgICAgICBjb25zdCBvdmVydmlld1NlY3Rpb24gPSByZW5kZXJPdmVydmlld1NlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgdG9wRGVja3NTZWN0aW9uID0gcmVuZGVyWW91ckRlY2tzKCk7XG4gICAgICAgIGNvbnN0IHByZWJ1aWx0RGVja3NTZWN0aW9uID0gcmVuZGVyUHJlQnVpbHREZWNrcygpO1xuICAgICAgICBjb25zdCBzZXR0aW5nc1NlY3Rpb24gPSByZW5kZXJTZXR0aW5nc1NlY3Rpb24oKVxuICAgICAgICBtYWluLmFwcGVuZChvdmVydmlld1NlY3Rpb24sdG9wRGVja3NTZWN0aW9uLCBwcmVidWlsdERlY2tzU2VjdGlvbiwgc2V0dGluZ3NTZWN0aW9uKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyQmFubmVyKCkge1xuICAgICAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xuICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNMTIgNlYxOE02IDEySDE4Jyk7XG5cbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGJhbm5lckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBiYW5uZXJCdXR0b24uaWQgPSAnYmFubmVyYnV0dG9uJztcbiAgICAgICAgYmFubmVyQnV0dG9uLmNsYXNzTmFtZSA9ICdiYW5uZXJidXR0b24nO1xuICAgICAgICBiYW5uZXJCdXR0b24uYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAgICAgICBjb25zdCBzaXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBzaXRlVGl0bGUuY2xhc3NOYW1lID0gJ3NpdGV0aXRsZSc7XG4gICAgICAgIHNpdGVUaXRsZS5pbm5lclRleHQgPSAnU3R1ZHkgRGVja3MnO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uaWQgPSAnYWRkZGVja2J1dHRvbic7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgYSBEZWNrJztcblxuICAgICAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgICAgICBtZW51RGl2LmlkID0gJ21lbnUnO1xuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lckRpdi5pZCA9ICdjb250YWluZXJkaXYnO1xuICAgICAgICBjb250YWluZXJEaXYuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcmRpdic7XG4gICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmQobWVudURpdiwgYmFubmVyQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBpbm5lckhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lckhlYWRlckRpdi5jbGFzc05hbWUgPSAnaW5uZXJoZWFkZXJkaXYnO1xuICAgICAgICBpbm5lckhlYWRlckRpdi5hcHBlbmQoc2l0ZVRpdGxlLCBjb250YWluZXJEaXYpO1xuXG4gICAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgbWFpbkhlYWRlci5pZCA9ICdtYWluaGVhZGVyJztcbiAgICAgICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChpbm5lckhlYWRlckRpdik7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUobWFpbkhlYWRlciwgYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXNldE1vZGFsLFxuICAgICAgICBoaWRlTW9kYWwsXG4gICAgICAgIHJlc2V0Rm9ybSxcbiAgICAgICAgcmVuZGVyUGFnZSxcbiAgICAgICAgcmVuZGVyU3R1ZHlTZXNzaW9uLFxuICAgICAgICByZW5kZXJTdHVkeVNlc3Npb25Db21wbGV0ZSxcbiAgICAgICAgdXBkYXRlU3R1ZHlDYXJkLFxuICAgICAgICByZW1vdmVNYWluVGFnQ29udGVudCxcbiAgICAgICAgcmVuZGVyQWRkQ2FyZE1vZGFsQm9keSxcbiAgICAgICAgfTtcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0ICcuLi9zY3NzL2Nzcy9zdHlsZS5jc3MnO1xuY29udHJvbGxlci5zdGFydEFwcGxpY2F0aW9uKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9