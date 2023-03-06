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
___CSS_LOADER_EXPORT___.push([module.id, "/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=list],\nol[role=list] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 3rem;\n  left: 0;\n  top: 0;\n  width: 100%;\n  color: black;\n}\n\n.modal-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 5px;\n  position: relative;\n  margin: auto;\n  border: 1px solid #888;\n  width: 92%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0.8rem;\n  width: 100%;\n  border-bottom: 1px solid lightgrey;\n}\n.modal-header h5 {\n  font-size: 1.25rem;\n  font-weight: 550;\n}\n.modal-header span {\n  color: #aaa;\n  font-size: 1.75rem;\n  font-weight: bold;\n}\n.modal-header span:hover,\n.modal-header span:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-body {\n  padding: 0.15rem 0.7rem;\n  margin: 0.5rem 0 1rem 0;\n}\n.modal-body form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n}\n.modal-body textarea {\n  resize: none;\n  min-height: 3.5rem;\n  max-height: 12rem;\n}\n\n.deckname,\n.deckcategory,\n.deckduedate,\n.deckdescription {\n  padding: 0.2em;\n}\n\n.deckdescription {\n  width: 100%;\n  height: 5rem;\n  resize: none;\n}\n\n.disabledinputtag {\n  position: relative;\n  bottom: 40px;\n  left: 195px;\n  color: grey;\n  padding: 0 0 0 0.5em;\n  pointer-events: none;\n}\n\n.invalid {\n  border: 0.125rem solid red;\n}\n\n.submitbutton {\n  width: 50%;\n  margin-left: auto;\n  padding: 0.1em;\n}\n\n.questiondiv,\n.answerdiv {\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n  margin-bottom: 0.5em;\n}\n\n.useroptionsdiv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.3em;\n  margin-top: 2em;\n}\n.useroptionsdiv button {\n  font-size: 0.9em;\n  padding: 0.3em;\n  margin: 0.2em;\n}\n\n.newcardtitlediv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0.2em 0.5em 0.5em 0.5em;\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.deckdisplay {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.deck {\n  display: flex;\n  justify-content: center;\n  min-height: 7rem;\n  width: 95%;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  border-radius: 0.5em;\n  padding: 0rem 0.5rem 0rem 0.5rem;\n  background-color: #2e3856;\n}\n\n.deckimageandname {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-right: 1px solid #ffcd1e;\n  margin: 0.7em 0 0.7em 1em;\n  padding-right: 1em;\n  gap: 0.5rem;\n}\n.deckimageandname button {\n  padding: 0.2em;\n}\n.deckimageandname h3 {\n  font-size: 1rem;\n}\n.deckimageandname p {\n  color: rgba(253, 253, 253, 0.681);\n  font-size: 0.9rem;\n}\n\n.deckdescriptiondiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-width: 70%;\n  margin: 0.7em 0 0.7em 0;\n}\n.deckdescriptiondiv p {\n  padding: 0.5em;\n  text-align: center;\n}\n.deckdescriptiondiv :nth-child(2) {\n  color: rgba(253, 253, 253, 0.681);\n  font-size: 0.9rem;\n}\n\n.itsemptymessage {\n  text-align: center;\n  padding: 1em;\n}\n\n.rowofcards {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n  padding: 0.5rem;\n}\n\n.overviewcard {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid lightgrey;\n  color: black;\n  border-radius: 5px;\n  background-color: white;\n}\n.overviewcard div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.2rem;\n  padding-top: 0.5rem;\n}\n.overviewcard img {\n  width: max(1.5rem, 5vw);\n}\n.overviewcard h3 {\n  font-size: 0.9rem;\n}\n\n.greencardunderline,\n.brickcardunderline,\n.bluecardunderline,\n.sunshinecardunderline {\n  text-align: center;\n  font-size: 1.5rem;\n  padding-bottom: 0.5rem;\n  text-decoration: underline;\n  text-decoration-thickness: 1.5px;\n  text-underline-offset: 5px;\n}\n\n.greencardunderline {\n  text-decoration-color: #34C381;\n}\n\n.bluecardunderline {\n  text-decoration-color: #046FC6;\n}\n\n.brickcardunderline {\n  text-decoration-color: #ED6D47;\n}\n\n.sunshinecardunderline {\n  text-decoration-color: #FFBA17;\n}\n\n.settingssection select {\n  padding: 0.3em;\n}\n\n.deckdeleteoptions {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.deletedeckdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1em;\n}\n.deletedeckdiv button {\n  padding: 0.1em;\n}\n\n.resetbutton {\n  display: block;\n  margin: 1rem auto auto auto;\n  color: red;\n  border: 1px solid red;\n  padding: 0.2em;\n}\n\n.innerheaderdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.8rem;\n  border-bottom: 1px solid #282e3e;\n}\n.innerheaderdiv h3 {\n  font-size: 1.6rem;\n  border-bottom: 1px solid #ffcd1e;\n}\n\n.containerdiv {\n  height: 38.4px;\n}\n\nsvg {\n  width: 40px;\n  height: 40px;\n}\nsvg path {\n  stroke: white;\n  stroke-width: 2px;\n  stroke-linecap: round;\n}\n\n.bannerbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  height: 2.4rem;\n  width: 2.4rem;\n  padding: 0em;\n  border-radius: 50%;\n  background-color: #4255ff;\n}\n\n.bannerbutton:hover {\n  background-color: #423ed9;\n}\n\n.menu {\n  position: absolute;\n  right: 1rem;\n  border-radius: 0.5rem;\n  color: black;\n  background-color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  z-index: 1;\n  display: none;\n}\n.menu button {\n  min-width: 8rem;\n  padding: 0.7em;\n  background-color: #0a082d;\n  color: white;\n  border: 1px solid #282e3e;\n  border-radius: 0.3rem;\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n.menu button:hover {\n  background-color: #0a082d;\n  opacity: 0.9;\n}\n\n.menu.show {\n  display: block;\n}\n\n.nav-right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 8rem;\n}\n.nav-right p {\n  width: 100%;\n}\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgb(246, 246, 246);\n  overflow-x: hidden;\n  margin-top: 42.3px;\n  transition: 0.3s;\n}\n\n.sidenav.active {\n  width: 15rem;\n}\n\n.sidenavinnerdiv {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 0 0 2rem;\n}\n.sidenavinnerdiv a {\n  padding: 0.3rem 0.5rem 0.4rem 1rem;\n  margin-right: 1.5rem;\n  text-decoration: none;\n  font-size: 1.1rem;\n  color: black;\n  display: block;\n  transition: 0.2 0.5s;\n}\n.sidenavinnerdiv li {\n  list-style: none;\n  white-space: nowrap;\n}\n.sidenavinnerdiv li:hover {\n  background-color: white;\n}\n\n.studycarddiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 1em;\n}\n.studycarddiv div {\n  flex-direction: column;\n  padding: 0.5em;\n  min-width: 50%;\n  min-height: 5rem;\n}\n.studycarddiv p {\n  text-align: center;\n}\n\n.inactive {\n  background-color: rgba(121, 121, 121, 0.9);\n  pointer-events: none;\n  border-color: rgba(121, 121, 121, 0.9);\n}\n\n.numberofcards {\n  margin-bottom: 3em;\n}\n\n.studydiv {\n  margin: 0 1.2em 0 1.2em;\n}\n.studydiv h1 {\n  margin-top: 0.5 em;\n  font-size: 1.8rem;\n}\n\n.flip-card {\n  background-color: transparent;\n  border-radius: 25% 10%;\n  width: 300px;\n  height: 300px;\n  perspective: 1000px;\n}\n\n.flip-card-inner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 25% 10%;\n  cursor: pointer;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.4s;\n  transform-style: preserve-3d;\n}\n\n.flip-card-inner.activated {\n  transform: rotateY(180deg);\n}\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.flip-card-front {\n  border: 2px solid #ffcd1e;\n  border-radius: 25% 10%;\n  background-color: #bbb;\n  color: black;\n}\n\n.flip-card-back {\n  border: 2px solid #ffcd1e;\n  border-radius: 25% 10%;\n  background-color: #2980b9;\n  color: white;\n  transform: rotateY(180deg);\n}\n\n.buttonsspan {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  margin: 1em;\n}\n.buttonsspan button {\n  padding: 0.3em;\n}\n\n.congratsdiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 3em;\n  margin: 3em 1em 1em 1em;\n}\n.congratsdiv button {\n  padding: 0.2em;\n}\n\nhtml,\nbody {\n  background-color: #0a082d;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.6;\n  color: white;\n}\n\nmain {\n  border-top: 1px solid black;\n  min-height: fit-content;\n}\n\n.mobilenav {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  border: 1px solid grey;\n  min-height: 4rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.mobilenav img {\n  width: 2rem;\n  pointer-events: none;\n}\n.mobilenav button {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.2rem;\n  gap: 0.5rem;\n}\n.mobilenav h3 {\n  font-size: 0.9rem;\n  color: grey;\n  pointer-events: none;\n}\n\nsection h1 {\n  text-align: left;\n  padding: 1rem;\n  font-size: 1.3rem;\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./src/scss/_reset.scss","webpack://./src/scss/css/style.css","webpack://./src/scss/_modal.scss","webpack://./src/scss/_mixins.scss","webpack://./src/scss/_yourdecks.scss","webpack://./src/scss/_config.scss","webpack://./src/scss/_overview.scss","webpack://./src/scss/_decksettings.scss","webpack://./src/scss/_banner.scss","webpack://./src/scss/_sidenav.scss","webpack://./src/scss/_studysession.scss","webpack://./src/scss/style.scss"],"names":[],"mappings":"AAAA,qBAAA;AACA;;;EAGE,sBAAA;EACA,SAAA;EACA,UAAA;ACCF;;ADEA,0BAAA;AACA;;;;;;;;;;EAUE,SAAA;ACCF;;ADEA,2GAAA;AACA;;EAEE,gBAAA;ACCF;;ADEA,2BAAA;AACA;EACE,uBAAA;ACCF;;ADEA,2BAAA;AACA;EACE,iBAAA;EACA,6BAAA;EACA,gBAAA;ACCF;;ADEA,0DAAA;AACA;EACE,8BAAA;ACCF;;ADEA,oCAAA;AACA;;EAEE,eAAA;EACA,cAAA;ACCF;;ADEA,yCAAA;AACA;;;;EAIE,aAAA;ACCF;;ADEA,gGAAA;AACA;EACE;IACC,qBAAA;ECCD;EDEA;;;IAGE,qCAAA;IACA,uCAAA;IACA,sCAAA;IACA,gCAAA;ECAF;AACF;ACxEA;EACI,aAAA;EACA,eAAA;EACA,UAAA;EACA,iBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;AD0EJ;;ACvEA;ECFI,aAAA;EACA,uBAAA;EACA,mBAAA;EDEA,sBAAA;EAEA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,UAAA;EACA,4EAAA;EACA,0BAAA;EACA,wBAAA;AD2EJ;;ACxEA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,kCAAA;AD2EJ;ACzEI;EACI,kBAAA;EACA,gBAAA;AD2ER;ACxEI;EACI,WAAA;EACA,kBAAA;EACA,iBAAA;AD0ER;ACvEI;;EAEQ,YAAA;EACA,qBAAA;EACA,eAAA;ADyEZ;;ACrEA;EACI,uBAAA;EACA,uBAAA;ADwEJ;ACtEI;EACI,aAAA;EACA,sBAAA;EACA,WAAA;ADwER;ACrEI;EACI,YAAA;EACA,kBAAA;EACA,iBAAA;ADuER;;ACnEA;;;;EAII,cAAA;ADsEJ;;ACnEA;EACI,WAAA;EACA,YAAA;EACA,YAAA;ADsEJ;;ACnEA;EACI,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;EACA,oBAAA;ADsEJ;;ACnEA;EACI,0BAAA;ADsEJ;;ACnEA;EACI,UAAA;EACA,iBAAA;EACA,cAAA;ADsEJ;;ACnEA;;EAEI,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,UAAA;EACA,oBAAA;ADsEJ;;ACnEA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;ADsEJ;ACpEI;EACI,gBAAA;EACA,cAAA;EACA,aAAA;ADsER;;AClEA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,+BAAA;ADqEJ;;ACjEA;EACI;IAAM,WAAA;IAAa,UAAA;EDsErB;ECrEE;IAAI,MAAA;IAAQ,UAAA;EDyEd;AACF;AG/MA;EDOI,aAAA;EACA,uBAAA;EACA,mBAAA;ECPA,sBAAA;AHmNJ;;AGhNA;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,UAAA;EACA,cAAA;EACA,iBAAA;EACA,oBAAA;EACA,gCAAA;EACA,yBCN2B;AJyN/B;;AGhNA;EDVI,aAAA;EACA,uBAAA;EACA,mBAAA;ECUA,sBAAA;EACA,+BAAA;EACA,yBAAA;EACA,kBAAA;EACA,WAAA;AHqNJ;AGnNI;EAAS,cAAA;AHsNb;AGrNI;EAAK,eAAA;AHwNT;AGvNI;EACI,iCAAA;EACA,iBAAA;AHyNR;;AGrNA;ED1BI,aAAA;EACA,uBAAA;EACA,mBAAA;EC0BA,sBAAA;EACA,cAAA;EACA,uBAAA;AH0NJ;AGxNI;EACI,cAAA;EACA,kBAAA;AH0NR;AGvNI;EACI,iCAAA;EACA,iBAAA;AHyNR;;AGrNA;EACI,kBAAA;EACA,YAAA;AHwNJ;;AK7QA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;EACA,eAAA;ALgRJ;;AK7QA;EACI,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,YAAA;EACA,kBAAA;EACA,uBAAA;ALgRJ;AK9QI;EHTA,aAAA;EACA,uBAAA;EACA,mBAAA;EGSI,WAAA;EACA,mBAAA;ALkRR;AKhRI;EACI,uBAAA;ALkRR;AKhRI;EACI,iBAAA;ALkRR;;AK9QA;;;;EAII,kBAAA;EACA,iBAAA;EACA,sBAAA;EAEA,0BAAA;EACA,gCAAA;EACA,0BAAA;ALgRJ;;AK7QA;EACI,8BDzCgB;AJyTpB;;AK7QA;EACI,8BD5Cc;AJ4TlB;;AK7QA;EACI,8BDnDU;AJmUd;;AK7QA;EACI,8BDtDa;AJsUjB;;AMxUI;EAAS,cAAA;AN4Ub;;AMzUA;EJKI,aAAA;EACA,uBAAA;EACA,mBAAA;EILA,sBAAA;EACA,WAAA;AN8UJ;;AM3UA;EJDI,aAAA;EACA,uBAAA;EACA,mBAAA;EICA,SAAA;EACA,kBAAA;ANgVJ;AM9UI;EAAQ,cAAA;ANiVZ;;AM9UA;EACI,cAAA;EACA,2BAAA;EACA,UAAA;EACA,qBAAA;EACA,cAAA;ANiVJ;;AOvWA;ELQI,aAAA;EACA,uBAAA;EACA,mBAAA;EKRA,SAAA;EACA,eAAA;EACA,gCAAA;AP4WJ;AO1WI;EACI,iBAAA;EACA,gCAAA;AP4WR;;AOxWA;EAII,cAAA;APwWJ;;AOrWA;EACI,WAAA;EACA,YAAA;APwWJ;AOtWI;EACI,aAAA;EACA,iBAAA;EACA,qBAAA;APwWR;;AOpWA;EL/BI,gBAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EK4BA,cAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,yBHzBmB;AJqYvB;;AOzWA;EACI,yBH5ByB;AJwY7B;;AOzWA;EACI,kBAAA;EACA,WAAA;EACA,qBAAA;EACA,YAAA;EACA,uBAAA;EACA,wCAAA;EACA,UAAA;EACA,aAAA;AP4WJ;AO1WI;EACI,eAAA;EACA,cAAA;EACA,yBHhDmB;EGiDnB,YAAA;EACA,yBAAA;EACA,qBAAA;EACA,iBAAA;EACA,eAAA;AP4WR;AOzWI;EACI,yBHzDmB;EG0DnB,YAAA;AP2WR;;AOvWE;EACE,cAAA;AP0WJ;;AQlbA;ENSI,aAAA;EACA,uBAAA;EACA,mBAAA;EMTA,WAAA;ARubJ;AQrbI;EACI,WAAA;ARubR;;AQnbA;EACI,YAAA;EACA,QAAA;EACA,eAAA;EACA,UAAA;EACA,MAAA;EACA,OAAA;EACA,oCAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;ARsbJ;;AQnbA;EACI,YAAA;ARsbJ;;AQnbA;EACI,aAAA;EACA,sBAAA;EAEA,sBAAA;ARqbJ;AQlbI;EACI,kCAAA;EACA,oBAAA;EACA,qBAAA;EACA,iBAAA;EACA,YAAA;EACA,cAAA;EACA,oBAAA;ARobR;AQjbI;EACI,gBAAA;EAEA,mBAAA;ARkbR;AQ/aI;EACI,uBAAA;ARibR;;ASleA;EPQI,aAAA;EACA,uBAAA;EACA,mBAAA;EORF,sBAAA;EACA,eAAA;ATueF;ASneE;EACI,sBAAA;EACA,cAAA;EACA,cAAA;EACA,gBAAA;ATqeN;ASleE;EACI,kBAAA;AToeN;;ASheA;EACE,0CAAA;EACA,oBAAA;EACA,sCAAA;ATmeF;;ASheA;EACE,kBAAA;ATmeF;;ASheA;EACI,uBAAA;ATmeJ;ASjeI;EACI,kBAAA;EACA,iBAAA;ATmeR;;AS/dA;EACI,6BAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;ATkeJ;;AS/dE;EPtCE,aAAA;EACA,uBAAA;EACA,mBAAA;EOsCA,sBAAA;EACA,eAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,0BAAA;EACA,4BAAA;AToeJ;;ASheE;EACE,0BAAA;ATmeJ;;ASheE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,mCAAA;EACA,2BAAA;ATmeJ;;ASheE;EACE,yBAAA;EACA,sBAAA;EACA,sBAAA;EACA,YAAA;ATmeJ;;ASheE;EACE,yBAAA;EACA,sBAAA;EACA,yBAAA;EACA,YAAA;EACA,0BAAA;ATmeJ;;ASheE;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,mBAAA;EACA,WAAA;EACA,WAAA;ATmeJ;ASjeI;EACI,cAAA;ATmeR;;AS/dE;EP3FE,aAAA;EACA,uBAAA;EACA,mBAAA;EO2FA,sBAAA;EACA,QAAA;EACA,uBAAA;AToeJ;ASleI;EACE,cAAA;AToeN;;AUrkBA;;EAEI,yBNHuB;EMIvB,yCNdS;EMeT,gBAAA;EACA,YAAA;AVwkBJ;;AUrkBA;EACI,2BAAA;EACA,uBAAA;AVwkBJ;;AUrkBA;EACI,eAAA;EACA,SAAA;EACA,WAAA;EACA,iBAAA;EACA,sBAAA;EACA,gBAAA;EAEA,aAAA;EACA,qCAAA;AVukBJ;AUrkBI;EACI,WAAA;EACA,oBAAA;AVukBR;AUpkBI;ERvCA,gBAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EQoCI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,WAAA;AV2kBR;AUxkBI;EACI,iBAAA;EACA,WAAA;EACA,oBAAA;AV0kBR;;AUrkBI;EACI,gBAAA;EACA,aAAA;EACA,iBAAA;AVwkBR;;AAEA,oCAAoC","sourceRoot":""}]);
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

const controller = (function(){

    _pubsub__WEBPACK_IMPORTED_MODULE_2__.Observable.subscribe('DataReset', resetDataAndView);
    
    const data = {
        preBuiltDecks: _prebuiltdecks__WEBPACK_IMPORTED_MODULE_3__.preBuiltDecks,
        defaultPageID: 'studypage',
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
        _model__WEBPACK_IMPORTED_MODULE_0__.model.setCurrentPage(data.defaultPageID);
        _view__WEBPACK_IMPORTED_MODULE_1__.view.renderDefaultView(data.defaultPageID);  
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



    function renderSectionTitle(titleName) {
        const h1 = document.createElement('h1');
        h1.innerText = titleName;
        h1.id = titleName.slice().toLowerCase() + 'title';
        return h1;
    };

    function addBannerButtonFunctionality() {
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

    function renderDefaultView(pageID) {
        renderBanner();
        addBannerButtonFunctionality();
        makeNewAddDeckButtonWork();
        renderMobileNavigation();
        updateMobileNavButtons();
        addMobileNavEventListeners();
        renderPage(pageID)
        changeTabColor(pageID);
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

        const title = document.createElement('h3');
        title.innerText = 'Study Decks';

        const button = document.createElement('button');
        button.id = 'thebutttton';
        button.textContent = 'Add a Deck';
 
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonbuffer');
        buttonDiv.appendChild(button);

        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu');
        menuDiv.id = 'menu';
        menuDiv.appendChild(buttonDiv);

        const containerDiv = document.createElement('div');
        containerDiv.id = 'containerdiv';
        containerDiv.className = 'containerdiv';
        containerDiv.append(bannerButton, menuDiv);

        const innerHeaderDiv = document.createElement('div');
        innerHeaderDiv.className = 'innerheaderdiv';
        innerHeaderDiv.append(title, containerDiv);

        const mainHeader = document.createElement('header');
        mainHeader.id = 'mainheader';
        mainHeader.appendChild(innerHeaderDiv);

        const body = document.getElementsByTagName("body")[0];
        body.insertBefore(mainHeader, body.firstChild);
        
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxRQUFRLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLFNBQVMsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLGFBQWEsUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsYUFBYSxRQUFRLE1BQU0sYUFBYSxRQUFRLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLFFBQVEsWUFBWSxZQUFZLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFX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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQ1g7QUFDL0Isb0VBQTJCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3Njc3MvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNGdXR1cmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9zcmMvc2Nzcy9jc3Mvc3R5bGUuY3NzP2M4OWEiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3N0dWR5ZGVja3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvY2FyZC5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvZGVjay5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3ByZWJ1aWx0ZGVja3MuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvdXNlcmRhdGEuanMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy8uL3NyYy9zY3JpcHRzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvdmlldy5qcyIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3N0dWR5ZGVja3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3R1ZHlkZWNrcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zdHVkeWRlY2tzLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9bGlzdF0sXFxub2xbcm9sZT1saXN0XSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDkyJTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XFxufVxcbi5tb2RhbC1oZWFkZXIgaDUge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXG59XFxuLm1vZGFsLWhlYWRlciBzcGFuIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5tb2RhbC1oZWFkZXIgc3Bhbjpob3ZlcixcXG4ubW9kYWwtaGVhZGVyIHNwYW46Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtYm9keSB7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDAuN3JlbTtcXG4gIG1hcmdpbjogMC41cmVtIDAgMXJlbSAwO1xcbn1cXG4ubW9kYWwtYm9keSBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjdyZW07XFxufVxcbi5tb2RhbC1ib2R5IHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG1pbi1oZWlnaHQ6IDMuNXJlbTtcXG4gIG1heC1oZWlnaHQ6IDEycmVtO1xcbn1cXG5cXG4uZGVja25hbWUsXFxuLmRlY2tjYXRlZ29yeSxcXG4uZGVja2R1ZWRhdGUsXFxuLmRlY2tkZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLmRlY2tkZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmRpc2FibGVkaW5wdXR0YWcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiA0MHB4O1xcbiAgbGVmdDogMTk1cHg7XFxuICBjb2xvcjogZ3JleTtcXG4gIHBhZGRpbmc6IDAgMCAwIDAuNWVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5pbnZhbGlkIHtcXG4gIGJvcmRlcjogMC4xMjVyZW0gc29saWQgcmVkO1xcbn1cXG5cXG4uc3VibWl0YnV0dG9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBhZGRpbmc6IDAuMWVtO1xcbn1cXG5cXG4ucXVlc3Rpb25kaXYsXFxuLmFuc3dlcmRpdiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi51c2Vyb3B0aW9uc2RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG4udXNlcm9wdGlvbnNkaXYgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIG1hcmdpbjogMC4yZW07XFxufVxcblxcbi5uZXdjYXJkdGl0bGVkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuMmVtIDAuNWVtIDAuNWVtIDAuNWVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5kZWNrZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRlY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLWhlaWdodDogN3JlbTtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW4tdG9wOiAyJTtcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBwYWRkaW5nOiAwcmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTM4NTY7XFxufVxcblxcbi5kZWNraW1hZ2VhbmRuYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmY2QxZTtcXG4gIG1hcmdpbjogMC43ZW0gMCAwLjdlbSAxZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLmRlY2tpbWFnZWFuZG5hbWUgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbn1cXG4uZGVja2ltYWdlYW5kbmFtZSBoMyB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5kZWNraW1hZ2VhbmRuYW1lIHAge1xcbiAgY29sb3I6IHJnYmEoMjUzLCAyNTMsIDI1MywgMC42ODEpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5kZWNrZGVzY3JpcHRpb25kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4td2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMC43ZW0gMCAwLjdlbSAwO1xcbn1cXG4uZGVja2Rlc2NyaXB0aW9uZGl2IHAge1xcbiAgcGFkZGluZzogMC41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5kZWNrZGVzY3JpcHRpb25kaXYgOm50aC1jaGlsZCgyKSB7XFxuICBjb2xvcjogcmdiYSgyNTMsIDI1MywgMjUzLCAwLjY4MSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLml0c2VtcHR5bWVzc2FnZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5yb3dvZmNhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLm92ZXJ2aWV3Y2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ub3ZlcnZpZXdjYXJkIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjJyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG4ub3ZlcnZpZXdjYXJkIGltZyB7XFxuICB3aWR0aDogbWF4KDEuNXJlbSwgNXZ3KTtcXG59XFxuLm92ZXJ2aWV3Y2FyZCBoMyB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmdyZWVuY2FyZHVuZGVybGluZSxcXG4uYnJpY2tjYXJkdW5kZXJsaW5lLFxcbi5ibHVlY2FyZHVuZGVybGluZSxcXG4uc3Vuc2hpbmVjYXJkdW5kZXJsaW5lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMS41cHg7XFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXG59XFxuXFxuLmdyZWVuY2FyZHVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMzNEMzODE7XFxufVxcblxcbi5ibHVlY2FyZHVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwNDZGQzY7XFxufVxcblxcbi5icmlja2NhcmR1bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjRUQ2RDQ3O1xcbn1cXG5cXG4uc3Vuc2hpbmVjYXJkdW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI0ZGQkExNztcXG59XFxuXFxuLnNldHRpbmdzc2VjdGlvbiBzZWxlY3Qge1xcbiAgcGFkZGluZzogMC4zZW07XFxufVxcblxcbi5kZWNrZGVsZXRlb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZGVsZXRlZGVja2RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4uZGVsZXRlZGVja2RpdiBidXR0b24ge1xcbiAgcGFkZGluZzogMC4xZW07XFxufVxcblxcbi5yZXNldGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMXJlbSBhdXRvIGF1dG8gYXV0bztcXG4gIGNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLmlubmVyaGVhZGVyZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MmUzZTtcXG59XFxuLmlubmVyaGVhZGVyZGl2IGgzIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmNkMWU7XFxufVxcblxcbi5jb250YWluZXJkaXYge1xcbiAgaGVpZ2h0OiAzOC40cHg7XFxufVxcblxcbnN2ZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuc3ZnIHBhdGgge1xcbiAgc3Ryb2tlOiB3aGl0ZTtcXG4gIHN0cm9rZS13aWR0aDogMnB4O1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbn1cXG5cXG4uYmFubmVyYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogMi40cmVtO1xcbiAgcGFkZGluZzogMGVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNTVmZjtcXG59XFxuXFxuLmJhbm5lcmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzZWQ5O1xcbn1cXG5cXG4ubWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWVudSBidXR0b24ge1xcbiAgbWluLXdpZHRoOiA4cmVtO1xcbiAgcGFkZGluZzogMC43ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwODJkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4MmUzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVudSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMDgyZDtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLm1lbnUuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm5hdi1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDhyZW07XFxufVxcbi5uYXYtcmlnaHQgcCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpZGVuYXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG1hcmdpbi10b3A6IDQyLjNweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5zaWRlbmF2LmFjdGl2ZSB7XFxuICB3aWR0aDogMTVyZW07XFxufVxcblxcbi5zaWRlbmF2aW5uZXJkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAycmVtIDAgMCAycmVtO1xcbn1cXG4uc2lkZW5hdmlubmVyZGl2IGEge1xcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbSAwLjRyZW0gMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zaXRpb246IDAuMiAwLjVzO1xcbn1cXG4uc2lkZW5hdmlubmVyZGl2IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uc2lkZW5hdmlubmVyZGl2IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3R1ZHljYXJkZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG4uc3R1ZHljYXJkZGl2IGRpdiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtaW4td2lkdGg6IDUwJTtcXG4gIG1pbi1oZWlnaHQ6IDVyZW07XFxufVxcbi5zdHVkeWNhcmRkaXYgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuOSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMjEsIDEyMSwgMTIxLCAwLjkpO1xcbn1cXG5cXG4ubnVtYmVyb2ZjYXJkcyB7XFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxufVxcblxcbi5zdHVkeWRpdiB7XFxuICBtYXJnaW46IDAgMS4yZW0gMCAxLjJlbTtcXG59XFxuLnN0dWR5ZGl2IGgxIHtcXG4gIG1hcmdpbi10b3A6IDAuNSBlbTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uZmxpcC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjUlIDEwJTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbn1cXG5cXG4uZmxpcC1jYXJkLWlubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyNSUgMTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbi5mbGlwLWNhcmQtaW5uZXIuYWN0aXZhdGVkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4uZmxpcC1jYXJkLWZyb250LCAuZmxpcC1jYXJkLWJhY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmZsaXAtY2FyZC1mcm9udCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZjZDFlO1xcbiAgYm9yZGVyLXJhZGl1czogMjUlIDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5mbGlwLWNhcmQtYmFjayB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZjZDFlO1xcbiAgYm9yZGVyLXJhZGl1czogMjUlIDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuXFxuLmJ1dHRvbnNzcGFuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDFlbTtcXG59XFxuLmJ1dHRvbnNzcGFuIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG59XFxuXFxuLmNvbmdyYXRzZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzZW07XFxuICBtYXJnaW46IDNlbSAxZW0gMWVtIDFlbTtcXG59XFxuLmNvbmdyYXRzZGl2IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTA4MmQ7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbm1haW4ge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5tb2JpbGVuYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBtaW4taGVpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcbi5tb2JpbGVuYXYgaW1nIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5tb2JpbGVuYXYgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLm1vYmlsZW5hdiBoMyB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbnNlY3Rpb24gaDEge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jc3Mvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbW9kYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9feW91cmRlY2tzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX292ZXJ2aWV3LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19kZWNrc2V0dGluZ3Muc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2Jhbm5lci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fc2lkZW5hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fc3R1ZHlzZXNzaW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQUE7QUFDQTs7O0VBR0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBLDBCQUFBO0FBQ0E7Ozs7Ozs7Ozs7RUFVRSxTQUFBO0FDQ0Y7O0FERUEsMkdBQUE7QUFDQTs7RUFFRSxnQkFBQTtBQ0NGOztBREVBLDJCQUFBO0FBQ0E7RUFDRSx1QkFBQTtBQ0NGOztBREVBLDJCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQSwwREFBQTtBQUNBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQSxvQ0FBQTtBQUNBOztFQUVFLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUEseUNBQUE7QUFDQTs7OztFQUlFLGFBQUE7QUNDRjs7QURFQSxnR0FBQTtBQUNBO0VBQ0U7SUFDQyxxQkFBQTtF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QkFBQTtBVnVrQlI7QVVwa0JJO0VSdkNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VRb0NJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBVjJrQlI7QVV4a0JJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QVYwa0JSOztBVXJrQkk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBVndrQlI7O0FBRUEsb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNGdXR1cmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgZnV0dXJlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGUgZnV0dXJlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDMxIERlY2VtYmVyIDIwMTQgaW4gdGhlIGZ1dHVyZT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzRnV0dXJlKG5ldyBEYXRlKDIwMTQsIDExLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Z1dHVyZShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCkgPiBEYXRlLm5vdygpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgQ2FyZCA9IHtcbiAgICBxdWVzdGlvbjogbnVsbCxcbiAgICBhbnN3ZXI6IG51bGwsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJkKGZvcm1EYXRhT2JqKSB7XG5cbiAgICBjb25zdCBuZXdDYXJkID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKENhcmQpLCB7XG4gICAgICAgIHF1ZXN0aW9uOiBmb3JtRGF0YU9iai5xdWVzdGlvbmlucHV0LFxuICAgICAgICBhbnN3ZXI6IGZvcm1EYXRhT2JqLmFuc3dlcmlucHV0LFxuICAgIH0pO1xuICAgIHJldHVybiBuZXdDYXJkO1xufSIsImltcG9ydCB7IG1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcbmltcG9ydCB7IHZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgeyBwcmVCdWlsdERlY2tzIH0gZnJvbSBcIi4vcHJlYnVpbHRkZWNrc1wiO1xuXG4vL1RPRE8gcmVzcG9uc2l2ZSBkZXNpZ25cblxuZXhwb3J0IGNvbnN0IGNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcblxuICAgIE9ic2VydmFibGUuc3Vic2NyaWJlKCdEYXRhUmVzZXQnLCByZXNldERhdGFBbmRWaWV3KTtcbiAgICBcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBwcmVCdWlsdERlY2tzOiBwcmVCdWlsdERlY2tzLFxuICAgICAgICBkZWZhdWx0UGFnZUlEOiAnc3R1ZHlwYWdlJyxcbiAgICAgICAgbG9jYWxEZWNrczogbW9kZWwuZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpLFxuICAgICAgICBQYW5lbHM6IG1vZGVsLmRhdGFQYW5lbHMsXG5cbiAgICAgICAgVXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGVja3MoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFuZWxzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdXBkYXRlRGVja3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbERlY2tzID0gbW9kZWwuZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVwZGF0ZVBhbmVsczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLlBhbmVscyA9IG1vZGVsLmdldExvY2FsUGFuZWxzKCk7XG4gICAgICAgIH0sXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHN0YXJ0QXBwbGljYXRpb24oKSB7XG4gICAgICAgIG1vZGVsLmNoZWNrSWZUaGVyZUlzQWxyZWFkeUxvY2FsbHlTdG9yZWREYXRhKCk7XG4gICAgICAgIGRhdGEuVXBkYXRlKCk7XG4gICAgICAgIG1vZGVsLnNldEN1cnJlbnRQYWdlKGRhdGEuZGVmYXVsdFBhZ2VJRCk7XG4gICAgICAgIHZpZXcucmVuZGVyRGVmYXVsdFZpZXcoZGF0YS5kZWZhdWx0UGFnZUlEKTsgIFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVEZWNrQ3JlYXRpb25Gb3JtKCkge1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNrbmFtZScpO1xuICAgICAgICBjb25zdCBjYXRlZ29yeUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVja2NhdGVnb3J5Jyk7XG4gICAgICAgIGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2tkdWVkYXRlJyk7XG5cbiAgICAgICAgY29uc3QgbmFtZUNoZWNrZXIgPSAgbW9kZWwudmFsaWRhdG9ycy5uYW1lVmFsaWRhdG9yO1xuICAgICAgICBjb25zdCBjYXRlZ29yeUNoZWNrZXIgPSBtb2RlbC52YWxpZGF0b3JzLmNhdGVnb3J5VmFsaWRhdG9yO1xuICAgICAgICBjb25zdCBkYXRlQ2hlY2tlciA9IG1vZGVsLnZhbGlkYXRvcnMuZGF0ZVZhbGlkYXRvcjtcblxuICAgICAgICBuYW1lQ2hlY2tlci5zZXREYXRhKG5hbWVFbGVtZW50LCBuYW1lRWxlbWVudC52YWx1ZS50cmltKCkpO1xuICAgICAgICBjYXRlZ29yeUNoZWNrZXIuc2V0RGF0YShjYXRlZ29yeUVsZW1lbnQsIGNhdGVnb3J5RWxlbWVudC52YWx1ZS50cmltKCkpO1xuICAgICAgICBkYXRlQ2hlY2tlci5zZXREYXRhKGRhdGVFbGVtZW50LCBkYXRlRWxlbWVudC52YWx1ZS50cmltKCkpO1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSBbbmFtZUNoZWNrZXIsIGNhdGVnb3J5Q2hlY2tlciwgZGF0ZUNoZWNrZXJdO1xuICAgICAgICB2YWxpZGF0b3JzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBpbnB1dC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgICAgICBpbnB1dC5zZXRWYWxpZGl0eUNsYXNzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaW52YWxpZElucHV0cyA9IHZhbGlkYXRvcnMuZmlsdGVyKGlucHV0ID0+IGlucHV0LmlzVmFsaWQgPT09IGZhbHNlKTtcbiAgICAgICAgaWYgKGludmFsaWRJbnB1dHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW52YWxpZElucHV0cy5mb3JFYWNoKChpbnZhbGlkSW5wdXQpID0+IHtcbiAgICAgICAgICAgICAgICBpbnZhbGlkSW5wdXQuZGlzcGxheVdhcm5pbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhT2JqZWN0ID0gbW9kZWwuY3JlYXRlRm9ybURhdGFPYmplY3QoZm9ybSk7XG4gICAgICAgICAgICBjb25zdCBuZXdEZWNrID0gbW9kZWwuY3JlYXRlRGVjayhmb3JtRGF0YU9iamVjdCk7XG4gICAgICAgICAgICBtb2RlbC5hZGREZWNrVG9Mb2NhbFN0b3JhZ2UobmV3RGVjayk7XG4gICAgICAgICAgICBtb2RlbC5pbmNyZW1lbnRVc2VyRGF0YSgnZGVja3NDcmVhdGVkJyk7XG4gICAgICAgICAgICBkYXRhLlVwZGF0ZSgpO1xuICAgICAgICAgICAgdXBkYXRlRGF0YU9uQ3VycmVudFBhZ2UoKTtcbiAgICAgICAgICAgIHZpZXcucmVzZXRGb3JtKGZvcm0pO1xuICAgICAgICAgICAgbW9kZWwudmFsaWRhdG9ycy5yZXNldElucHV0VmFsaWRpdHkodmFsaWRhdG9ycyk7XG4gICAgICAgICAgICB2aWV3LnJlbmRlckFkZENhcmRNb2RhbEJvZHkobmV3RGVjayk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkQ2FyZHNGb3JtKG5ld0RlY2ssIHN0YXR1cykge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNhcmQtZm9ybScpO1xuICAgICAgICBjb25zdCBxdWVzdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uaW5wdXQnKTtcbiAgICAgICAgY29uc3QgYW5zd2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyaW5wdXQnKTtcblxuICAgICAgICBjb25zdCBxdWVzdGlvbkNoZWNrZXIgPSBtb2RlbC52YWxpZGF0b3JzLnF1ZXN0aW9uVmFsaWRhdG9yO1xuICAgICAgICBjb25zdCBhbnN3ZXJDaGVja2VyID0gbW9kZWwudmFsaWRhdG9ycy5hbnN3ZXJWYWxpZGF0b3I7XG5cbiAgICAgICAgcXVlc3Rpb25DaGVja2VyLnNldERhdGEocXVlc3Rpb25JbnB1dCwgcXVlc3Rpb25JbnB1dC52YWx1ZS50cmltKCkpO1xuICAgICAgICBhbnN3ZXJDaGVja2VyLnNldERhdGEoYW5zd2VySW5wdXQsIGFuc3dlcklucHV0LnZhbHVlLnRyaW0oKSk7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IFtxdWVzdGlvbkNoZWNrZXIsIGFuc3dlckNoZWNrZXJdO1xuICAgICAgICB2YWxpZGF0b3JzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBpbnB1dC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGludmFsaWRJbnB1dHMgPSB2YWxpZGF0b3JzLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5pc1ZhbGlkID09PSBmYWxzZSk7XG4gICAgICAgIGlmIChpbnZhbGlkSW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGludmFsaWRJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uZGlzcGxheVdhcm5pbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YU9iamVjdCA9IG1vZGVsLmNyZWF0ZUZvcm1EYXRhT2JqZWN0KGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IG1vZGVsLmNyZWF0ZUNhcmQoZm9ybURhdGFPYmplY3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZGVja0NvcHkgPSBtb2RlbC5nZXREZWNrRnJvbUxvY2FsU3RvcmFnZShuZXdEZWNrLm5hbWUpO1xuICAgICAgICAgICAgZGVja0NvcHkgPSBtb2RlbC5hZGRDYXJkVG9EZWNrKGNhcmQsIGRlY2tDb3B5KTtcbiAgICAgICAgICAgIG1vZGVsLnVwZGF0ZURlY2tJbkxvY2FsU3RvcmFnZShkZWNrQ29weSk7XG5cbiAgICAgICAgICAgIGRhdGEuVXBkYXRlKCk7XG4gICAgICAgICAgICBtb2RlbC5pbmNyZW1lbnRVc2VyRGF0YSgnY2FyZHNDcmVhdGVkJyk7XG4gICAgICAgICAgICBtb2RlbC52YWxpZGF0b3JzLnJlc2V0SW5wdXRWYWxpZGl0eSh2YWxpZGF0b3JzKTtcbiAgICAgICAgICAgIHVwZGF0ZURhdGFPbkN1cnJlbnRQYWdlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdhZGRtb3JlJykge1xuICAgICAgICAgICAgICAgIHZpZXcucmVuZGVyQWRkQ2FyZE1vZGFsQm9keShkZWNrQ29weSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2RvbmVhZGRpbmcnKSB7XG4gICAgICAgICAgICAgICAgdmlldy5oaWRlTW9kYWwoKTtcbiAgICAgICAgICAgICAgICB2aWV3LnJlc2V0TW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGF0YU9uQ3VycmVudFBhZ2UoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gbW9kZWwuZ2V0Q3VycmVudFBhZ2UoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09PSAnc3R1ZHlwYWdlJykge1xuICAgICAgICAgICAgT2JzZXJ2YWJsZS5wdWJsaXNoKCdOZXdEZWNrQWRkZWQnLCBkYXRhLmxvY2FsRGVja3MpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYnNlcnZhYmxlLnB1Ymxpc2goJ1VwZGF0ZU92ZXJ2aWV3RGF0YScsIGRhdGEuUGFuZWxzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZVBhZ2UocGFnZSkge1xuICAgICAgICB2aWV3LnJlbmRlclBhZ2UocGFnZSk7XG4gICAgICAgIG1vZGVsLnNldEN1cnJlbnRQYWdlKHBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0RGF0YUFuZFZpZXcoKSB7XG4gICAgICAgIG1vZGVsLmNsZWFyTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGRhdGEuVXBkYXRlKCk7XG4gICAgICAgIE9ic2VydmFibGUucHVibGlzaCgnVXBkYXRlT3ZlcnZpZXdEYXRhJywgZGF0YS5QYW5lbHMpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzdGFydFN0dWR5U2Vzc2lvbihkZWNrKSB7XG4gICAgICAgIHZpZXcuc3R1ZHlQYWdlLnJlbmRlclN0dWR5U2Vzc2lvbihkZWNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93TmV4dFN0dWR5Q2FyZChkZWNrLCBvcGVyYXRpb24pIHtcblxuICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnc2hvd25leHQnKSB7XG4gICAgICAgICAgICBpZiAoZGVjay5jdXJyZW50Q2FyZCArIDEgPT09IGRlY2suY2FyZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbW9kZWwudXBkYXRlQ3VycmVudENhcmQoZGVjaywgJ3Jlc2V0Jyk7XG4gICAgICAgICAgICAgICAgdmlldy5yZW1vdmVNYWluVGFnQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R1ZHlQYWdlLnJlbmRlclN0dWR5U2Vzc2lvbkNvbXBsZXRlKGRlY2spO1xuICAgICAgICAgICAgICAgIG1vZGVsLmluY3JlbWVudFVzZXJEYXRhKCdkZWNrc1N0dWRpZWQnKTtcbiAgICAgICAgICAgICAgICBtb2RlbC5pbmNyZW1lbnRVc2VyRGF0YSgnY2FyZHNTdHVkaWVkJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZGVsLnVwZGF0ZUN1cnJlbnRDYXJkKGRlY2ssIG9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgdmlldy5zdHVkeVBhZ2UudXBkYXRlU3R1ZHlDYXJkKGRlY2spO1xuICAgICAgICAgICAgICAgIG1vZGVsLmluY3JlbWVudFVzZXJEYXRhKCdjYXJkc1N0dWRpZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnc2hvd3ByZXZpb3VzJykge1xuICAgICAgICAgICAgbW9kZWwudXBkYXRlQ3VycmVudENhcmQoZGVjaywgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgIHZpZXcuc3R1ZHlQYWdlLnVwZGF0ZVN0dWR5Q2FyZChkZWNrKTtcbiAgICAgICAgICAgIG1vZGVsLmRlY3JlbWVudFVzZXJEYXRhKCdjYXJkc1N0dWRpZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sbGVyLmRhdGEudXBkYXRlRGVja3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVEZWNrKGRlY2tOYW1lKSB7XG4gICAgICAgIG1vZGVsLmRlbGV0ZURlY2tGcm9tTG9jYWxTdG9yYWdlKGRlY2tOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkYXRhLFxuICAgICAgICBjaGFuZ2VQYWdlLFxuICAgICAgICBkZWxldGVEZWNrLFxuICAgICAgICBzdGFydEFwcGxpY2F0aW9uLFxuICAgICAgICBzdGFydFN0dWR5U2Vzc2lvbixcbiAgICAgICAgc2hvd05leHRTdHVkeUNhcmQsXG4gICAgICAgIGhhbmRsZUFkZENhcmRzRm9ybSxcbiAgICAgICAgaGFuZGxlRGVja0NyZWF0aW9uRm9ybSxcbiAgICB9XG59KSgpOyIsImV4cG9ydCBjb25zdCBEZWNrID0ge1xuICAgIG5hbWU6ICdkZWZhdWx0IG5hbWUnLFxuICAgIGRlc2NyaXB0aW9uOiAnZGVmYXVsdCBkZXNjcmlwdGlvbicsXG4gICAgZHVlRGF0ZTogJ2RlZmF1bHQgZHVlRGF0ZScsXG4gICAgY2F0ZWdvcnk6ICdkZWZhdWx0IGNhdGVnb3J5JyxcbiAgICBjdXJyZW50Q2FyZDogMCxcbiAgICBjYXJkQ291bnQ6IDAsXG4gICAgY2FyZHM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IGRlY2tBcnJheSA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVjayhmb3JtRGF0YU9iaikge1xuICAgIFxuICAgIGNvbnN0IG5ld0RlY2sgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoRGVjayksIHtcbiAgICAgICAgbmFtZTogZm9ybURhdGFPYmouZGVja25hbWUsXG4gICAgICAgIGNhdGVnb3J5OiBmb3JtRGF0YU9iai5kZWNrY2F0ZWdvcnksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YU9iai5kZWNrZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IG1ha2VEYXRlUmVhZGFibGUoZm9ybURhdGFPYmouZGVja2R1ZWRhdGUpLFxuICAgICAgICBjdXJyZW50Q2FyZDogMCxcbiAgICAgICAgY2FyZENvdW50OiAwLFxuICAgICAgICBjYXJkczogW10sXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0RlY2s7XG59O1xuXG5mdW5jdGlvbiBtYWtlRGF0ZVJlYWRhYmxlKGRhdGVEYXRhKSB7XG4gICAgY29uc3QgYXJyYXkgPSBkYXRlRGF0YS5zcGxpdCgnLScpO1xuICAgIGNvbnN0IHllYXIgPSBhcnJheVswXTtcbiAgICBjb25zdCBtb250aCA9IGNvbnZlcnRNb250aE51bWJlclRvTW9udGhOYW1lKGFycmF5WzFdKTtcbiAgICBjb25zdCBkYXkgPSBjb252ZXJ0RGF5TnVtYmVyVG9OdGhEYXlPZk1vbnRoKGFycmF5WzJdKTtcbiAgICByZXR1cm4gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWA7XG59O1xuXG5mdW5jdGlvbiBjb252ZXJ0TW9udGhOdW1iZXJUb01vbnRoTmFtZShudW1iZXIpIHtcbiAgICBudW1iZXIgPSBwYXJzZUludChudW1iZXIsIDEwKTtcbiAgICBjb25zdCBtb250aHMgPSB7XG4gICAgICAgIDE6ICdKYW51YXJ5JyxcbiAgICAgICAgMjogJ0ZlYnJ1YXJ5JyxcbiAgICAgICAgMzogJ01hcmNoJyxcbiAgICAgICAgNDogJ0FwcmlsJyxcbiAgICAgICAgNTogJ01heScsXG4gICAgICAgIDY6ICdKdW5lJyxcbiAgICAgICAgNzogJ0p1bHknLFxuICAgICAgICA4OiAnQXVndXN0JyxcbiAgICAgICAgOTogJ1NlcHRlbWJlcicsXG4gICAgICAgIDEwOiAnT2N0b2JlcicsXG4gICAgICAgIDExOiAnTm92ZW1iZXInLFxuICAgICAgICAxMjogJ0RlY2VtYmVyJyxcbiAgICB9XG4gICAgcmV0dXJuIG1vbnRoc1tudW1iZXJdO1xufTtcblxuZnVuY3Rpb24gY29udmVydERheU51bWJlclRvTnRoRGF5T2ZNb250aChudW1iZXIpIHtcbiAgICBjb25zdCBudGhEYXkgPSB7XG4gICAgICAgIDE6ICdzdCcsXG4gICAgICAgIDI6ICduZCcsXG4gICAgICAgIDM6ICdyZCcsXG4gICAgICAgIDQ6ICd0aCcsIDU6ICd0aCcsIDY6ICd0aCcsIDc6ICd0aCcsIDg6ICd0aCcsXG4gICAgICAgIDk6ICd0aCcsIDEwOiAndGgnLCAxMTogJ3RoJywgMTI6ICd0aCcsIFxuICAgICAgICAxMzogJ3RoJywgMTQ6ICd0aCcsIDE1OiAndGgnLCAxNjogJ3RoJywgXG4gICAgICAgIDE3OiAndGgnLCAxODogJ3RoJywgMTk6ICd0aCcsIDIwOiAndGgnLFxuICAgICAgICAyMTogJ3N0JyxcbiAgICAgICAgMjI6ICduZCcsXG4gICAgICAgIDIzOiAncmQnLFxuICAgICAgICAyNDogJ3RoJywgMjU6ICd0aCcsIDI2OiAndGgnLCAyNzogJ3RoJywgXG4gICAgICAgIDI4OiAndGgnLCAyOTogJ3RoJywgMzA6ICd0aCcsXG4gICAgICAgIDMxOiAnc3QnLFxuICAgIH07XG4gICAgcmV0dXJuIGAke251bWJlcn0ke250aERheVtudW1iZXJdfWA7XG59OyIsIlxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWwsIGF0dHJzKSB7XG4gICAgZm9yKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbn1cbiAgIiwiaW1wb3J0IHsgdmFsaWRhdG9ycyB9IGZyb20gJy4vdmFsaWRhdG9yJztcbmltcG9ydCB7IGNyZWF0ZURlY2ssIGRlY2tBcnJheX0gZnJvbSAnLi9kZWNrJztcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IHsgcHJlQnVpbHREZWNrcyB9IGZyb20gJy4vcHJlYnVpbHRkZWNrcyc7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCB7IG5ld1VzZXJEYXRhLCBkYXRhUGFuZWxzfSBmcm9tICcuL3VzZXJkYXRhJztcblxuZXhwb3J0IGNvbnN0IG1vZGVsID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBsZXQgY3VycmVudFBhZ2UgPSAnJztcblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRQYWdlKHBhZ2UpIHtcbiAgICAgICAgY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50UGFnZSgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQYWdlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjaGVja0lmVGhlcmVJc0FscmVhZHlMb2NhbGx5U3RvcmVkRGF0YSgpIHtcbiAgICAgICAgY29uc3QgZGVja3MgPSBtb2RlbC5nZXREZWNrQXJyYXlGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGlmICghZGVja3MgfHwgZGVja3MgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc2V0RGVja0FycmF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYW5lbHMgPSBtb2RlbC5nZXRMb2NhbFBhbmVscygpO1xuICAgICAgICBpZiAoIXBhbmVscyB8fCBwYW5lbHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc2V0RGF0YVBhbmVsRGF0YShkYXRhUGFuZWxzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBtb2RlbC5nZXRVc2VyRGF0YSgpO1xuICAgICAgICBpZiAoIXVzZXJEYXRhIHx8IHVzZXJEYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXNldE5ld1VzZXJEYXRhKG5ld1VzZXJEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIFxuICAgICAgICAvLyByZXR1cm4gQXJyYXkuZnJvbShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZWNrYXJyYXknKSkpOyAgICBcbiAgICAgICAgY29uc3QgaXRlbXMgPSB7IC4uLmxvY2FsU3RvcmFnZX07XG4gICAgICAgIGlmIChpdGVtcy5oYXNPd25Qcm9wZXJ0eSgnZGVja2FycmF5JykpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlY2thcnJheScpKSk7ICAgIFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldERlY2tGcm9tTG9jYWxTdG9yYWdlKGRlY2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IGRlY2tzID0gZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICByZXR1cm4gZGVja3MuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gZGVja05hbWUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRDYXJkdG9EZWNrKGNhcmQsIGRlY2spIHtcbiAgICAgICAgZGVjay5jYXJkcy5wdXNoKGNhcmQpO1xuICAgICAgICByZXR1cm4gZGVjaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldERlY2tBcnJheSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlY2thcnJheScsIEpTT04uc3RyaW5naWZ5KGRlY2tBcnJheSkpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEZWNrSW5Mb2NhbFN0b3JhZ2UoZGVjaykge1xuICAgICAgICBjb25zdCBkZWNrcyA9IGdldERlY2tBcnJheUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgY29uc3QgZm91bmREZWNrID0gZ2V0RGVja0Zyb21Mb2NhbFN0b3JhZ2UoZGVjay5uYW1lKVxuICAgICAgICBmb3VuZERlY2suY2FyZHMgPSBkZWNrLmNhcmRzO1xuICAgICAgICBmb3VuZERlY2suY2FyZENvdW50ID0gZGVjay5jYXJkQ291bnQ7XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSBkZWNrcy5maW5kSW5kZXgoZCA9PiBkLm5hbWUgPT09IGZvdW5kRGVjay5uYW1lKTtcbiAgICAgICAgZGVja3NbaW5kZXhdID0gZm91bmREZWNrO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVja2FycmF5JywgSlNPTi5zdHJpbmdpZnkoZGVja3MpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGREZWNrVG9Mb2NhbFN0b3JhZ2UoZGVjaykge1xuICAgICAgICBjb25zdCBhcnJheU9mRGVja3MgPSBnZXREZWNrQXJyYXlGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGFycmF5T2ZEZWNrcy5wdXNoKGRlY2spO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVja2FycmF5JywgSlNPTi5zdHJpbmdpZnkoYXJyYXlPZkRlY2tzKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFkZENhcmRUb0RlY2soY2FyZCwgZGVjaykge1xuICAgICAgICBkZWNrLmNhcmRzLnB1c2goY2FyZCk7XG4gICAgICAgIGRlY2suY2FyZENvdW50Kys7XG4gICAgICAgIHJldHVybiBkZWNrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZURlY2tGcm9tTG9jYWxTdG9yYWdlKGRlY2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IGRlY2tzID0gZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBjb25zdCBkZWNrVG9EZWxldGUgPSBnZXREZWNrRnJvbUxvY2FsU3RvcmFnZShkZWNrTmFtZSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGVja3MuZmluZEluZGV4KGQgPT4gZC5uYW1lID09PSBkZWNrVG9EZWxldGUubmFtZSk7XG4gICAgICAgIGRlY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWNrYXJyYXknLCBKU09OLnN0cmluZ2lmeShkZWNrcykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0RGF0YVBhbmVsRGF0YSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGFwYW5lbHMnLCBKU09OLnN0cmluZ2lmeShkYXRhUGFuZWxzKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldERhdGFQYW5lbERhdGEodXBkYXRlZFBhbmVscykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YXBhbmVscycsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQYW5lbHMpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxQYW5lbHMoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhcGFuZWxzJykpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRMb2NhbFBhbmVsKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFuZWxzID0gQXJyYXkuZnJvbShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhcGFuZWxzJykpKTtcbiAgICAgICAgcGFuZWxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVzZXROZXdVc2VyRGF0YSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJkYXRhJywgSlNPTi5zdHJpbmdpZnkobmV3VXNlckRhdGEpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0VXNlckRhdGEoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmRhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFVzZXJEYXRhKCkge1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0geyAuLi5sb2NhbFN0b3JhZ2V9O1xuXG4gICAgICAgIGlmIChpdGVtcy5oYXNPd25Qcm9wZXJ0eSgndXNlcmRhdGEnKSkge1xuICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcmRhdGEnKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0Tm9uUGFyc2VkVXNlckRhdGEoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0geyAuLi5sb2NhbFN0b3JhZ2V9O1xuICAgICAgICBpZiAoaXRlbXMuaGFzT3duUHJvcGVydHkoJ3VzZXJkYXRhJykpIHtcblxuICAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJkYXRhJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluY3JlbWVudFVzZXJEYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBnZXRVc2VyRGF0YSgpO1xuICAgICAgICB1c2VyRGF0YVtkYXRhXSA9IHVzZXJEYXRhW2RhdGFdICsgMTtcbiAgICAgICAgc2V0VXNlckRhdGEodXNlckRhdGEpO1xuXG4gICAgICAgIGNvbnN0IHBhbmVscyA9IGdldExvY2FsUGFuZWxzKCk7XG4gICAgICAgIHBhbmVscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShkYXRhKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uc3RhdGlzdGljID0gaXRlbS5zdGF0aXN0aWMgKyAxO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBzZXREYXRhUGFuZWxEYXRhKHBhbmVscyk7XG4gICAgICAgIGNvbnRyb2xsZXIuZGF0YS5VcGRhdGUoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGVjcmVtZW50VXNlckRhdGEoZGF0YSkge1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGdldFVzZXJEYXRhKCk7XG4gICAgICAgIHVzZXJEYXRhW2RhdGFdID0gdXNlckRhdGFbZGF0YV0gLSAxO1xuICAgICAgICBzZXRVc2VyRGF0YSh1c2VyRGF0YSk7XG5cbiAgICAgICAgY29uc3QgbmV3ZGF0YSA9IGdldFVzZXJEYXRhKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRDYXJkKGRlY2ssIG9wZXJhdGlvbikge1xuXG4gICAgICAgIGNvbnN0IGRlY2tJc1ByZWJ1aWx0ID0gY2hlY2tJZkRlY2tJc1ByZUJ1aWx0KGRlY2ssIGNvbnRyb2xsZXIuZGF0YS5wcmVCdWlsdERlY2tzKTtcbiAgICAgICAgaWYgKGRlY2tJc1ByZWJ1aWx0ICYmIG9wZXJhdGlvbiA9PT0gJ3Jlc2V0Jykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcmVCdWlsdERlY2tzLmluZGV4T2YoZGVjayk7XG4gICAgICAgICAgICBjb250cm9sbGVyLmRhdGEucHJlQnVpbHREZWNrc1tpbmRleF0uY3VycmVudENhcmQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJ3Jlc2V0JykgeyBnZXREZWNrRnJvbUxvY2FsU3RvcmFnZShkZWNrLm5hbWUpLmN1cnJlbnRDYXJkID0gMDsgfSBcbiAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnc2hvd25leHQnKSB7IGRlY2suY3VycmVudENhcmQrKzsgfSBcbiAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnc2hvd3ByZXZpb3VzJykgeyBkZWNrLmN1cnJlbnRDYXJkLS07IH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tJZkRlY2tJc1ByZUJ1aWx0KGRlY2ssIHByZUJ1aWx0RGVja3MpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVCdWlsdERlY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJlQnVpbHREZWNrc1tpXSA9PT0gZGVjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICByZXNldE5ld1VzZXJEYXRhKCk7XG4gICAgICAgIHJlc2V0RGF0YVBhbmVsRGF0YSgpXG4gICAgICAgIHJlc2V0RGVja0FycmF5KCk7XG4gICAgICAgIGNvbnRyb2xsZXIuZGF0YS5VcGRhdGUoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9ybURhdGFPYmplY3QoZm9ybSkge1xuICAgICAgICBjb25zdCBteUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICBjb25zdCBmb3JtRGF0YU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhteUZvcm1EYXRhLmVudHJpZXMoKSk7XG4gICAgICAgIHJldHVybiBmb3JtRGF0YU9iajtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YVBhbmVscyxcbiAgICAgICAgdmFsaWRhdG9ycyxcbiAgICAgICAgY3JlYXRlQ2FyZCxcbiAgICAgICAgYWRkQ2FyZFRvRGVjayxcbiAgICAgICAgY3JlYXRlRGVjayxcbiAgICAgICAgZ2V0TG9jYWxQYW5lbCxcbiAgICAgICAgZ2V0TG9jYWxQYW5lbHMsXG4gICAgICAgIHJlc2V0RGF0YVBhbmVsRGF0YSxcbiAgICAgICAgaW5jcmVtZW50VXNlckRhdGEsXG4gICAgICAgIGdldE5vblBhcnNlZFVzZXJEYXRhLFxuICAgICAgICByZXNldERlY2tBcnJheSxcbiAgICAgICAgY2hlY2tJZlRoZXJlSXNBbHJlYWR5TG9jYWxseVN0b3JlZERhdGEsXG4gICAgICAgIGRlbGV0ZURlY2tGcm9tTG9jYWxTdG9yYWdlLFxuICAgICAgICB1cGRhdGVEZWNrSW5Mb2NhbFN0b3JhZ2UsXG4gICAgICAgIGRlY3JlbWVudFVzZXJEYXRhLFxuICAgICAgICBnZXRVc2VyRGF0YSxcbiAgICAgICAgcmVzZXROZXdVc2VyRGF0YSxcbiAgICAgICAgZ2V0RGVja0FycmF5RnJvbUxvY2FsU3RvcmFnZSxcbiAgICAgICAgZ2V0Q3VycmVudFBhZ2UsXG4gICAgICAgIHNldEN1cnJlbnRQYWdlLFxuICAgICAgICAvLyBnZXRMb2NhbERlY2tzLFxuICAgICAgICBhZGRDYXJkdG9EZWNrLFxuICAgICAgICB1cGRhdGVDdXJyZW50Q2FyZCxcbiAgICAgICAgY2xlYXJMb2NhbFN0b3JhZ2UsXG4gICAgICAgIGNyZWF0ZUZvcm1EYXRhT2JqZWN0LFxuICAgICAgICBhZGREZWNrVG9Mb2NhbFN0b3JhZ2UsXG4gICAgICAgIGdldERlY2tGcm9tTG9jYWxTdG9yYWdlLFxuICAgIH07XG59KSgpOyIsImltcG9ydCB7IERlY2sgfSBmcm9tICcuL2RlY2snO1xuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gJy4vY2FyZCc7XG5cbmNvbnN0IGZyZW5jaENhcmRzID0gY3JlYXRlRnJlbmNoQ2FyZHMoKTtcbmNvbnN0IGZyZW5jaERlY2sgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoRGVjayksIHtcbiAgICBuYW1lOiAnRnJlbmNoJyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgZGVjayB0byBsZWFybiAxMCBiYXNpYyBGcmVuY2ggd29yZHMnLFxuICAgIGR1ZURhdGU6ICdOZXh0IFdlZWsnLFxuICAgIGNhdGVnb3J5OiAnTGFuZ3VhZ2VzJyxcbiAgICBjdXJyZW50Q2FyZDogMCxcbiAgICBjYXJkQ291bnQ6IDAsXG4gICAgY2FyZHM6IGZyZW5jaENhcmRzLFxufSk7XG4gICAgXG5mdW5jdGlvbiBjcmVhdGVGcmVuY2hDYXJkcygpIHtcblxuICAgIGNvbnN0IGZyZW5jaENhcmRPbmUgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBtYW5cXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuIGhvbW1lJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRUd28gPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSB0cmVlXFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1biBhcmJyZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkVGhyZWUgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBjaGFpclxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIGNoYWlzZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkRm91ciA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIGNvbXB1dGVyXFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1biBvcmRpbmF0ZXVyJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGZyZW5jaENhcmRGaXZlID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2Egd2luZG93XFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgZmVuw6p0cmUnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZFNpeCA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIHNjaG9vbFxcJyBpbiBGcmVuY2g/JyxcbiAgICAgICAgYW5zd2VyOiAndW5lIMOpY29sZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkU2V2ZW4gPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIHlvdSBzYXkgXFwnYSBtZW51XFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgY2FydGUnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZnJlbmNoQ2FyZEVpZ2h0ID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgZG9jdG9yXFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgdm9pdHVyZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkTmluZSA9IHtcbiAgICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNheSBcXCdhIHNoaXJ0XFwnIGluIEZyZW5jaD8nLFxuICAgICAgICBhbnN3ZXI6ICd1bmUgY2hlbWlzZScsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBmcmVuY2hDYXJkVGVuID0ge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3Ugc2F5IFxcJ2EgcGFydHlcXCcgaW4gRnJlbmNoPycsXG4gICAgICAgIGFuc3dlcjogJ3VuZSBmw6p0ZScsXG4gICAgfTtcblxuICAgIGNvbnN0IGZyZW5jaENhcmRzID0gW2ZyZW5jaENhcmRPbmUsIGZyZW5jaENhcmRUd28sIGZyZW5jaENhcmRUaHJlZSwgXG4gICAgICAgICAgICAgICAgICAgIGZyZW5jaENhcmRGb3VyLCBmcmVuY2hDYXJkRml2ZSwgZnJlbmNoQ2FyZFNpeCwgXG4gICAgICAgICAgICAgICAgICAgIGZyZW5jaENhcmRTZXZlbiwgZnJlbmNoQ2FyZEVpZ2h0LCBmcmVuY2hDYXJkTmluZSxcbiAgICAgICAgICAgICAgICAgICAgZnJlbmNoQ2FyZFRlbl07XG4gICAgXG4gICAgICAgIGZyZW5jaENhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgY2FyZCA9IGNyZWF0ZUNhcmQoY2FyZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZyZW5jaENhcmRzO1xufVxuZXhwb3J0IGNvbnN0IHByZUJ1aWx0RGVja3MgPSBbZnJlbmNoRGVja107IiwiXG5cbmV4cG9ydCBjb25zdCBPYnNlcnZhYmxlICA9IHtcbiAgICBcbiAgICBldmVudHM6IHtcbiAgICB9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24oZXZOYW1lLCBmbikge1xuICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5wdXNoKGZuKVxuICAgIH0sXG4gICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdLmZpbHRlcihmID0+IGYgIT09IGZuKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24oZXZOYW1lLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICAgICAgZihkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJpbXBvcnQgTGVhcm5pbmdJY29uIGZyb20gJy4uL2ltYWdlcy9sZWFybmluZy1jb2xvci5zdmcnO1xuaW1wb3J0IFN0dWR5TGFtcEljb24gZnJvbSAnLi4vaW1hZ2VzL3N0dWR5LWxhbXAtY29sb3Iuc3ZnJztcbmltcG9ydCBTdHVkeURlc2tJY29uIGZyb20gJy4uL2ltYWdlcy9zdHVkeS1kZXNrLWNvbG9yLnN2Zyc7XG5pbXBvcnQgRWR1Y2F0aW9uSWNvbiBmcm9tICcuLi9pbWFnZXMvZWR1Y2F0aW9uLWNvbG9yLnN2Zyc7XG5cbmV4cG9ydCBjb25zdCBuZXdVc2VyRGF0YSA9IHtcbiAgICB0eXBlOiAndXNlcmRhdGEnLFxuICAgIGRlY2tzQ3JlYXRlZDogMCxcbiAgICBkZWNrc1N0dWRpZWQ6IDAsXG4gICAgY2FyZHNDcmVhdGVkOiAwLFxuICAgIGNhcmRzU3R1ZGllZDogMCxcbn07XG5cbmNvbnN0IERhdGFQYW5lbCA9IHtcbiAgICBpbWFnZXNyYzogbnVsbCxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB1bmRlcmxpbmVjb2xvcjogbnVsbCxcbiAgICBzdGF0aXN0aWM6IG51bGxcbn07XG5cbmNvbnN0IGRlY2tzQ3JlYXRlZFBhbmVsID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKERhdGFQYW5lbCksIHtcbiAgICBpbWFnZXNyYzogTGVhcm5pbmdJY29uLFxuICAgIHRpdGxlOiAnRGVja3MgQ3JlYXRlZCcsXG4gICAgdW5kZXJsaW5lY29sb3I6ICdncmVlbmNhcmR1bmRlcmxpbmUnLFxuICAgIGRlY2tzQ3JlYXRlZDogMCxcbiAgICBzdGF0aXN0aWM6IDAsXG59KTtcblxuY29uc3QgZGVja3NTdHVkaWVkUGFuZWwgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoRGF0YVBhbmVsKSwge1xuICAgIGltYWdlc3JjOiBFZHVjYXRpb25JY29uLFxuICAgIHRpdGxlOiAnRGVja3MgU3R1ZGllZCcsXG4gICAgdW5kZXJsaW5lY29sb3I6ICdibHVlY2FyZHVuZGVybGluZScsXG4gICAgc3RhdGlzdGljOiAwLFxuICAgIGRlY2tzU3R1ZGllZDogMCxcbn0pO1xuXG5jb25zdCBjYXJkc0NyZWF0ZWRQYW5lbCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEYXRhUGFuZWwpLCB7XG4gICAgaW1hZ2VzcmM6IFN0dWR5RGVza0ljb24sXG4gICAgdGl0bGU6ICdDYXJkcyBDcmVhdGVkJyxcbiAgICB1bmRlcmxpbmVjb2xvcjogJ2JyaWNrY2FyZHVuZGVybGluZScsXG4gICAgc3RhdGlzdGljOiAwLFxuICAgIGNhcmRzQ3JlYXRlZDogMCxcbn0pO1xuXG5jb25zdCBjYXJkc1N0dWRpZWRQYW5lbCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShEYXRhUGFuZWwpLCB7XG4gICAgaW1hZ2VzcmM6IFN0dWR5TGFtcEljb24sXG4gICAgdGl0bGU6ICdDYXJkcyBTdHVkaWVkJyxcbiAgICB1bmRlcmxpbmVjb2xvcjogJ3N1bnNoaW5lY2FyZHVuZGVybGluZScsXG4gICAgc3RhdGlzdGljOiAwLFxuICAgIGNhcmRzU3R1ZGllZDogMCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGF0YVBhbmVscyA9IFtkZWNrc0NyZWF0ZWRQYW5lbCwgZGVja3NTdHVkaWVkUGFuZWwsIGNhcmRzQ3JlYXRlZFBhbmVsLCBjYXJkc1N0dWRpZWRQYW5lbF07IiwiaW1wb3J0IHsgaXNGdXR1cmUgfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IFZhbGlkYXRvciA9IHtcbiAgICBkYXRhOiBudWxsLFxuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgaXNWYWxpZDogZmFsc2UsXG5cbiAgICBzZXREYXRhOiBmdW5jdGlvbihlbGVtZW50LCBkYXRhKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfSxcblxuICAgIHNldFZhbGlkaXR5Q2xhc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkaXNwbGF5V2FybmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnVGhpcyBmaWVsZCBpcyBpbnZhbGlkJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdG9ycyA9IHtcblxuICAgIG5hbWVWYWxpZGF0b3I6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShWYWxpZGF0b3IpLCB7XG4gICAgICAgIG5hbWVMZW5ndGhJc1ZhbGlkOiBmYWxzZSxcbiAgICAgICAgbmFtZUlzQXZhaWxhYmxlOiBmYWxzZSxcbiAgICBcbiAgICAgICAgY2hlY2tWYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrTGVuZ3RoKCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrTmFtZUF2YWlsYWJpbGl0eSh0aGlzLmlucHV0VmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZUxlbmd0aElzVmFsaWQgJiYgdGhpcy5uYW1lSXNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7dGhpcy5pc1ZhbGlkID0gZmFsc2V9O1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBjaGVja0xlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5uYW1lTGVuZ3RoSXNWYWxpZCA9IHRoaXMuZGF0YS5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBjaGVja05hbWVBdmFpbGFiaWxpdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nRGVja05hbWUgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZpbmQoaXRlbSA9PiBpdGVtID09PSB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZUlzQXZhaWxhYmxlID0gZXhpc3RpbmdEZWNrTmFtZSAhPT0gdGhpcy5kYXRhID8gdHJ1ZTogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGRpc3BsYXlXYXJuaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5uYW1lTGVuZ3RoSXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyIGxvbmcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5uYW1lSXNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0RlY2sgYWxyZWFkeSBleGlzdHMsIGNob29zZSBhIGRpZmZlcmVudCBuYW1lJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSxcbiAgICBcbiAgICBjYXRlZ29yeVZhbGlkYXRvcjogT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFZhbGlkYXRvciksIHtcbiAgICBcbiAgICAgICAgY2hlY2tWYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLmRhdGEgIT09ICcnID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBkaXNwbGF5V2FybmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgY2hvb3NlIGEgY2F0ZWdvcnknKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICBcbiAgICBkYXRlVmFsaWRhdG9yOiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoVmFsaWRhdG9yKSwge1xuICAgIFxuICAgICAgICBjaGVja1ZhbGlkaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IHRoaXMuY29udmVydERhdGFUb0RhdGVPYmplY3QodGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGlzRnV0dXJlKHVzZXJJbnB1dCk7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGNvbnZlcnREYXRhVG9EYXRlT2JqZWN0OiBmdW5jdGlvbihkYXRlRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBkYXRlRGF0YS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGFycmF5WzBdO1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBhcnJheVsxXTtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IGFycmF5WzJdO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBkaXNwbGF5V2FybmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdEYXRlIG11c3QgYmUgaW4gdGhlIGZ1dHVyZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIFxuICAgIHF1ZXN0aW9uVmFsaWRhdG9yOiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoVmFsaWRhdG9yKSwge1xuICAgICAgICBtaW5sZW5ndGg6IDEsXG4gICAgICAgIG1heExlbmd0aDogMzAwLFxuICAgIFxuICAgICAgICBjaGVja1ZhbGlkaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuZGF0YS5sZW5ndGggPiAwICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmxlbmd0aCA8IDMwMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgZGlzcGxheVdhcm5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGJlIGJldHdlZW4gMSBhbmQgMzAwIGNoYXJhY3RlcnMnKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIFxuICAgIGFuc3dlclZhbGlkYXRvcjogT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFZhbGlkYXRvciksIHtcbiAgICAgICAgbWlubGVuZ3RoOiAxLFxuICAgICAgICBtYXhMZW5ndGg6IDMwMCxcbiAgICBcbiAgICAgICAgY2hlY2tWYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLmRhdGEubGVuZ3RoID4gMCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sZW5ndGggPCAzMDEgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIGRpc3BsYXlXYXJuaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDMwMCBjaGFyYWN0ZXJzJyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSxcbiAgICB9KSxcblxuICAgIHJlc2V0SW5wdXRWYWxpZGl0eTogZnVuY3Rpb24oaW5wdXRzKSB7XG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRWYWxpZGl0eUNsYXNzKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuXG4iLCJpbXBvcnQgeyBzZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi9wdWJzdWInO1xuaW1wb3J0IFN0dWR5SWNvbiBmcm9tICcuLi9pbWFnZXMvc3R1ZHlpbmcucG5nJztcbmltcG9ydCBPdmVydmlld0ljb24gZnJvbSAnLi4vaW1hZ2VzL2VkaXQucG5nJztcblxuZXhwb3J0IGNvbnN0IHZpZXcgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIGNvbnN0IHN0dWR5UGFnZSA9IChmdW5jdGlvbigpe1xuICAgICAgICBPYnNlcnZhYmxlLnN1YnNjcmliZSgnTmV3RGVja0FkZGVkJywgbG9jYWxEZWNrcyA9PiB7XG4gICAgICAgICAgICB1cGRhdGVEZWNrRGlzcGxheShsb2NhbERlY2tzKVxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJQYWdlKCkge1xuICAgICAgICAgICAgLy9UaGlzIGlzIGZvciB0aGUgc2xpZGUgaW4gbWVudSBuYXYgYmFyXG4gICAgICAgICAgICAvLyBjb25zdCBvcGVuTmF2QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW5uYXZidG4nKTtcbiAgICAgICAgICAgIC8vIG9wZW5OYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOYXYpO1xuICAgICAgICAgICAgLy9UaGlzIGlzIGZvciB0aGUgc2xpZGUgaW4gbWVudSBuYXYgYmFyXG5cbiAgICAgICAgICAgIHJlbmRlck1vZGFsKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvcERlY2tzU2VjdGlvbiA9IHJlbmRlcllvdXJEZWNrcygpO1xuICAgICAgICAgICAgY29uc3QgcHJlYnVpbHREZWNrc1NlY3Rpb24gPSByZW5kZXJQcmVCdWlsdERlY2tzKCk7XG4gICAgICAgICAgICBjb25zdCBlbXB0eVNwYWNlID0gZ2V0RW1wdHlEaXZGb3JFeHRyYVBhZ2VTcGFjZUF0Qm90dG9tV2l0aE1vYmlsZU5hdkhlaWdodCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtYWluLmFwcGVuZCh0b3BEZWNrc1NlY3Rpb24sIHByZWJ1aWx0RGVja3NTZWN0aW9uLCBlbXB0eVNwYWNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcllvdXJEZWNrcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gcmVuZGVyU2VjdGlvblRpdGxlKCdZb3VyIERlY2tzJyk7XG4gICAgICAgICAgICBjb25zdCBkZWNrRGlzcGxheURpdiA9IHJlbmRlckRlY2tEaXNwbGF5KGNvbnRyb2xsZXIuZGF0YS5sb2NhbERlY2tzKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZCh0aXRsZSwgZGVja0Rpc3BsYXlEaXYpO1xuICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyUHJlQnVpbHREZWNrcygpIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSByZW5kZXJTZWN0aW9uVGl0bGUoJ1ByZWJ1aWx0IERlY2tzJyk7XG4gICAgICAgICAgICBjb25zdCBwcmVidWlsdERlY2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcmVidWlsdERlY2tzRGl2LmNsYXNzTmFtZSA9ICdkZWNrZGlzcGxheSc7XG4gICAgICAgICAgICBjb250cm9sbGVyLmRhdGEucHJlQnVpbHREZWNrcy5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVjayA9IHJlbmRlckRlY2soZGVjayk7XG4gICAgICAgICAgICAgICAgcHJlYnVpbHREZWNrc0Rpdi5hcHBlbmRDaGlsZChkZWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kKHRpdGxlLCBwcmVidWlsdERlY2tzRGl2KTtcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlckRlY2tEaXNwbGF5KGxvY2FsRGVja3MpIHtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlY2tEaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrRGlzcGxheURpdi5jbGFzc05hbWUgPSAnZGVja2Rpc3BsYXknO1xuICAgICAgICAgICAgZGVja0Rpc3BsYXlEaXYuaWQgPSAnZGVja2Rpc3BsYXknO1xuXG4gICAgICAgICAgICBpZiAobG9jYWxEZWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxEZWNrcy5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZW5kZXJEZWNrKGRlY2spO1xuICAgICAgICAgICAgICAgICAgICBkZWNrRGlzcGxheURpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRzRW1wdHlNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIGl0c0VtcHR5TWVzc2FnZS5jbGFzc05hbWUgPSAnaXRzZW1wdHltZXNzYWdlJztcbiAgICAgICAgICAgICAgICBpdHNFbXB0eU1lc3NhZ2UuaW5uZXJUZXh0ID0gYEl0J3MgZW1wdHkgaW4gaGVyZSEgQ2xpY2sgdGhlIGJsdWUgYnV0dG9uIGFib3ZlIHRvIGNyZWF0ZSBhIG5ldyBkZWNrLmA7XG4gICAgICAgICAgICAgICAgZGVja0Rpc3BsYXlEaXYuYXBwZW5kQ2hpbGQoaXRzRW1wdHlNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWNrRGlzcGxheURpdjtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJTdHVkeUNhcmRTaWRlKGNhcmRTaWRlLCBkZWNrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mQ2FyZHNGcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIG51bWJlck9mQ2FyZHNGcm9udC5pbm5lclRleHQgPSBgJHtkZWNrLmN1cnJlbnRDYXJkICsgMX0gLyAke2RlY2suY2FyZHMubGVuZ3RofWA7XG4gICAgICAgICAgICBudW1iZXJPZkNhcmRzRnJvbnQuY2xhc3NOYW1lID0gJ251bWJlcm9mY2FyZHMnO1xuICAgICAgICAgICAgbnVtYmVyT2ZDYXJkc0Zyb250LmlkID0gYCR7Y2FyZFNpZGV9c2VjdGlvbm51bWJlcm9mY2FyZHNgLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICAgICBoZWFkZXIuaW5uZXJUZXh0ID0gYCR7Y2FyZFNpZGV9OmA7XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIHRleHQuaWQgPSBgJHtjYXJkU2lkZX10ZXh0YC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGNhcmRTaWRlID09PSAnUXVlc3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGV4dC5pbm5lclRleHQgPSBkZWNrLmNhcmRzW2RlY2suY3VycmVudENhcmRdLnF1ZXN0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZXh0LmlubmVyVGV4dCA9IGRlY2suY2FyZHNbZGVjay5jdXJyZW50Q2FyZF0uYW5zd2VyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5uZXJEaXYuYXBwZW5kKGhlYWRlciwgdGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNlY3Rpb24uaWQgPSBgJHtjYXJkU2lkZX1zZWN0aW9uYC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgc2VjdGlvbi5jbGFzc05hbWUgPSBgJHtjYXJkU2lkZX1zZWN0aW9uYC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmQobnVtYmVyT2ZDYXJkc0Zyb250LCBpbm5lckRpdik7XG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVN0dWR5Q2FyZChkZWNrKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkNhcmRzRnJvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb25zZWN0aW9ubnVtYmVyb2ZjYXJkcycpO1xuICAgICAgICAgICAgbnVtYmVyT2ZDYXJkc0Zyb250LmlubmVyVGV4dCA9IGAke2RlY2suY3VycmVudENhcmQgKyAxfSAvICR7ZGVjay5jYXJkcy5sZW5ndGh9YDtcblxuICAgICAgICAgICAgY29uc3QgcXVlc3Rpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9udGV4dCcpO1xuICAgICAgICAgICAgcXVlc3Rpb25UZXh0LmlubmVyVGV4dCA9IGRlY2suY2FyZHNbZGVjay5jdXJyZW50Q2FyZF0ucXVlc3Rpb247XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGFuc3dlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VydGV4dCcpO1xuICAgICAgICAgICAgLy8gYW5zd2VyVGV4dC5pbm5lclRleHQgPSBkZWNrLmNhcmRzW2RlY2suY3VycmVudENhcmRdLmFuc3dlcjtcblxuICAgICAgICAgICAgLy9CZWZvcmUsIHlvdSB3b3VsZCBzZWUgdGhlIG5leHQgYW5zd2VyIHRvbyBzb29uIGlmIHlvdSB3ZXJlIG9uIHRoZSBiYWNrc2lkZVxuICAgICAgICAgICAgLy9vZiB0aGUgY2FyZCBhbmQgY2xpY2tlZCBuZXh0LCB3aXRoIHRoaXMgZGVsYXksIHlvdSBubyBsb25nZXIgd2lsbFxuICAgICAgICAgICAgLy9hY2NpZGVudGFsbHkgc2VlIHRoZSBhbnN3ZXIgdG8gdGhlIG5leHQgY2FyZFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYW5zd2VyVGV4dC5pbm5lclRleHQgPSBkZWNrLmNhcmRzW2RlY2suY3VycmVudENhcmRdLmFuc3dlcjtcbiAgICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZDYXJkc0JhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2Vyc2VjdGlvbm51bWJlcm9mY2FyZHMnKTtcbiAgICAgICAgICAgIG51bWJlck9mQ2FyZHNCYWNrLmlubmVyVGV4dCA9IGAke2RlY2suY3VycmVudENhcmQgKyAxfSAvICR7ZGVjay5jYXJkcy5sZW5ndGh9YDtcblxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlvdXNidXR0b24nKTtcbiAgICAgICAgICAgIGlmIChkZWNrLmN1cnJlbnRDYXJkID4gMCkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRlY2suY3VycmVudENhcmQgKyAxID09PSBkZWNrLmNhcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Y2FyZGJ1dHRvbicpLmlubmVyVGV4dCA9ICdGaW5pc2ggU2Vzc2lvbic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJGbGlwQ2FyZChxdWVzdGlvblNlY3Rpb24sIGFuc3dlclNlY3Rpb24pIHtcblxuICAgICAgICAgICAgY29uc3QgZmxpcENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZsaXBDYXJkLmNsYXNzTmFtZSA9ICdmbGlwLWNhcmQnO1xuICAgICAgICAgICAgZmxpcENhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmxpcENhcmRJbm5lci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBmbGlwQ2FyZElubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmbGlwQ2FyZElubmVyLmNsYXNzTmFtZSA9ICdmbGlwLWNhcmQtaW5uZXInO1xuICAgICAgICAgICAgZmxpcENhcmRJbm5lci5pZCA9ICdmbGlwLWNhcmQtaW5uZXInO1xuXG4gICAgICAgICAgICBjb25zdCBmbGlwQ2FyZEZyb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmbGlwQ2FyZEZyb250LmNsYXNzTmFtZSA9ICdmbGlwLWNhcmQtZnJvbnQnO1xuXG4gICAgICAgICAgICBjb25zdCBmbGlwQ2FyZEJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZsaXBDYXJkQmFjay5jbGFzc05hbWUgPSAnZmxpcC1jYXJkLWJhY2snO1xuXG4gICAgICAgICAgICBmbGlwQ2FyZC5hcHBlbmRDaGlsZChmbGlwQ2FyZElubmVyKTtcbiAgICAgICAgICAgIGZsaXBDYXJkSW5uZXIuYXBwZW5kKGZsaXBDYXJkRnJvbnQsIGZsaXBDYXJkQmFjayk7XG4gICAgICAgICAgICBmbGlwQ2FyZEZyb250LmFwcGVuZENoaWxkKHF1ZXN0aW9uU2VjdGlvbik7XG4gICAgICAgICAgICBmbGlwQ2FyZEJhY2suYXBwZW5kQ2hpbGQoYW5zd2VyU2VjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gZmxpcENhcmQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyU3R1ZHlTZXNzaW9uKGRlY2spIHtcblxuICAgICAgICAgICAgY29uc3Qgc3R1ZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHN0dWR5RGl2LmNsYXNzTmFtZSA9ICdzdHVkeWRpdic7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0dWR5Q2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3R1ZHlDYXJkRGl2LmlkID0gJ3N0dWR5Y2FyZGRpdic7XG4gICAgICAgICAgICBzdHVkeUNhcmREaXYuY2xhc3NOYW1lID0gJ3N0dWR5Y2FyZGRpdic7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlY2tOYW1lSGVhZGVyID0gcmVuZGVyU2VjdGlvblRpdGxlKGRlY2submFtZSk7XG4gICAgICAgICAgICBkZWNrTmFtZUhlYWRlci5jbGFzc05hbWUgPSAnZGVja25hbWVoZWFkZXInO1xuXG4gICAgICAgICAgICBjb25zdCBxdWVzdGlvblNlY3Rpb24gPSByZW5kZXJTdHVkeUNhcmRTaWRlKCdRdWVzdGlvbicsIGRlY2spO1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyU2VjdGlvbiA9IHJlbmRlclN0dWR5Q2FyZFNpZGUoJ0Fuc3dlcicsIGRlY2spO1xuXG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uaWQgPSAncHJldmlvdXNidXR0b24nO1xuICAgICAgICAgICAgcHJldmlvdXNCdXR0b24uaW5uZXJUZXh0ID0gJ0xhc3QgQ2FyZCc7XG4gICAgICAgICAgICBwcmV2aW91c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3dOZXh0U3R1ZHlDYXJkKGRlY2ssICdzaG93cHJldmlvdXMnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmbGlwQ2FyZElubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsaXAtY2FyZC1pbm5lcicpO1xuICAgICAgICAgICAgICAgIGZsaXBDYXJkSW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByZXZpb3VzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG5leHRCdXR0b24uaW5uZXJUZXh0ID0gJ05leHQgQ2FyZCc7XG4gICAgICAgICAgICBuZXh0QnV0dG9uLmlkID0gJ25leHRjYXJkYnV0dG9uJztcbiAgICAgICAgICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zaG93TmV4dFN0dWR5Q2FyZChkZWNrLCAnc2hvd25leHQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmbGlwQ2FyZElubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsaXAtY2FyZC1pbm5lcicpO1xuICAgICAgICAgICAgICAgIGZsaXBDYXJkSW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgYnV0dG9uc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBidXR0b25zU3Bhbi5jbGFzc05hbWUgPSAnYnV0dG9uc3NwYW4nO1xuICAgICAgICAgICAgYnV0dG9uc1NwYW4uYXBwZW5kKHByZXZpb3VzQnV0dG9uLCBuZXh0QnV0dG9uKTtcblxuICAgICAgICAgICAgY29uc3QgZmxpcENhcmQgPSByZW5kZXJGbGlwQ2FyZChxdWVzdGlvblNlY3Rpb24sIGFuc3dlclNlY3Rpb24pO1xuXG4gICAgICAgICAgICBzdHVkeUNhcmREaXYuYXBwZW5kKGZsaXBDYXJkLCBidXR0b25zU3Bhbik7XG4gICAgICAgICAgICBzdHVkeURpdi5hcHBlbmQoZGVja05hbWVIZWFkZXIsIHN0dWR5Q2FyZERpdilcbiAgICAgICAgICAgIG1haW4uYXBwZW5kKHN0dWR5RGl2KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJTdHVkeVNlc3Npb25Db21wbGV0ZShkZWNrKSB7XG4gICAgICAgICAgICBjb25zdCBjb25ncmF0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uZ3JhdHNEaXYuY2xhc3NOYW1lID0gJ2NvbmdyYXRzZGl2JztcblxuICAgICAgICAgICAgY29uc3QgY2VsZWJyYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY2VsZWJyYXRpb25UZXh0LmlubmVyVGV4dCA9IGBDb25ncmF0dWxhdGlvbnMsIHlvdSBzdHVkaWVkICR7ZGVjay5jYXJkcy5sZW5ndGh9IGNhcmRzISBDbGljayB0aGUgYnV0dG9uIGJlbG93IHRvIHJldHVybiB0byB5b3VyIGRlY2tzIHBhZ2VgO1xuXG4gICAgICAgICAgICBjb25zdCByZXR1cm5Ub0RlY2tzUGFnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcmV0dXJuVG9EZWNrc1BhZ2VCdXR0b24uaW5uZXJUZXh0ID0gJ1JldHVybiB0byBEZWNrcyBQYWdlJztcbiAgICAgICAgICAgIHJldHVyblRvRGVja3NQYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZpZXcucmVtb3ZlTWFpblRhZ0NvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICByZW5kZXJQYWdlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uZ3JhdHNEaXYuYXBwZW5kKGNlbGVicmF0aW9uVGV4dCwgcmV0dXJuVG9EZWNrc1BhZ2VCdXR0b24pO1xuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb25ncmF0c0Rpdik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVEZWNrc0Zyb21QYWdlKCkge1xuICAgICAgICAgICAgY29uc3QgZGVja0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVja2Rpc3BsYXknKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShkZWNrRGlzcGxheURpdi5jaGlsZHJlbik7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGVja0Rpc3BsYXkobG9jYWxEZWNrcykge1xuICAgICAgICAgICAgY29uc3QgZGVja0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVja2Rpc3BsYXknKTtcbiAgICAgICAgICAgIHJlbW92ZURlY2tzRnJvbVBhZ2UoKTtcblxuICAgICAgICAgICAgbG9jYWxEZWNrcy5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHJlbmRlckRlY2soZGVjayk7XG4gICAgICAgICAgICAgICAgZGVja0Rpc3BsYXlEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJEZWNrKGRlY2spIHtcblxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBuYW1lLmlubmVyVGV4dCA9IGRlY2submFtZTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZHVlRGF0ZVBhcmFncmFwaEVsZW1lbnQuaW5uZXJUZXh0ID0gYER1ZTogJHtkZWNrLmR1ZURhdGV9YDtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlY2tEZXNjcmlwdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGRlY2tEZXNjcmlwdGlvblBhcmFncmFwaC5pbm5lclRleHQgPSBkZWNrLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICBjb25zdCBzdHVkeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3R1ZHlCdXR0b24uaW5uZXJUZXh0ID0gJ1N0dWR5JztcbiAgICAgICAgICAgIHN0dWR5QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWFpblRhZ0NvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnN0YXJ0U3R1ZHlTZXNzaW9uKGRlY2spO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaW1hZ2VBbmROYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbWFnZUFuZE5hbWVEaXYuY2xhc3NOYW1lID0gJ2RlY2tpbWFnZWFuZG5hbWUnO1xuICAgICAgICAgICAgaW1hZ2VBbmROYW1lRGl2LmFwcGVuZChuYW1lLCBzdHVkeUJ1dHRvbik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkZWNrRGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlY2tEZXNjcmlwdGlvbkRpdi5jbGFzc05hbWUgPSAnZGVja2Rlc2NyaXB0aW9uZGl2JztcbiAgICAgICAgICAgIGRlY2tEZXNjcmlwdGlvbkRpdi5hcHBlbmQoZGVja0Rlc2NyaXB0aW9uUGFyYWdyYXBoLCBkdWVEYXRlUGFyYWdyYXBoRWxlbWVudCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrRGl2LmNsYXNzTmFtZSA9ICdkZWNrJztcbiAgICAgICAgICAgIGRlY2tEaXYuYXBwZW5kKGltYWdlQW5kTmFtZURpdiwgZGVja0Rlc2NyaXB0aW9uRGl2KTtcbiAgICAgICAgICAgIHJldHVybiBkZWNrRGl2O1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlbmRlclBhZ2UsXG4gICAgICAgICAgICB1cGRhdGVEZWNrRGlzcGxheSxcbiAgICAgICAgICAgIHJlbmRlclN0dWR5U2Vzc2lvbixcbiAgICAgICAgICAgIHVwZGF0ZVN0dWR5Q2FyZCxcbiAgICAgICAgICAgIHJlbmRlclN0dWR5Q2FyZFNpZGUsXG4gICAgICAgICAgICByZW5kZXJTdHVkeVNlc3Npb25Db21wbGV0ZSxcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3Qgb3ZlcnZpZXdQYWdlID0gKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgT2JzZXJ2YWJsZS5zdWJzY3JpYmUoJ1VwZGF0ZU92ZXJ2aWV3RGF0YScsIGNhcmREYXRhID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZU92ZXJ2aWV3Q2FyZHMoY2FyZERhdGEpO1xuICAgICAgICAgICAgdXBkYXRlRGVsZXRlRGVja09wdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlclBhZ2UoKSB7XG4gICAgICAgICAgICByZW5kZXJNb2RhbCgpO1xuICAgICAgICAgICAgY29uc3Qgb3ZlcnZpZXdTZWN0aW9uID0gcmVuZGVyT3ZlcnZpZXdTZWN0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nc1NlY3Rpb24gPSByZW5kZXJTZXR0aW5nc1NlY3Rpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5U3BhY2VXaXRoTW9iaWxlTmF2SGVpZ2h0ID0gZ2V0RW1wdHlEaXZGb3JFeHRyYVBhZ2VTcGFjZUF0Qm90dG9tV2l0aE1vYmlsZU5hdkhlaWdodCgpO1xuICAgIFxuICAgICAgICAgICAgbWFpbi5hcHBlbmQob3ZlcnZpZXdTZWN0aW9uLCBzZXR0aW5nc1NlY3Rpb24sIGVtcHR5U3BhY2VXaXRoTW9iaWxlTmF2SGVpZ2h0KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJPdmVydmlld1NlY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHJlbmRlclNlY3Rpb25UaXRsZSgnT3ZlcnZpZXcnKTtcbiAgICAgICAgICAgIGNvbnN0IHJvd09mQ2FyZHNEaXYgPSByZW5kZXJPdmVydmlld0NhcmRzKGNvbnRyb2xsZXIuZGF0YS5QYW5lbHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmQodGl0bGUsIHJvd09mQ2FyZHNEaXYpO1xuICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiByZW5kZXJPdmVydmlld0NhcmRzKGNhcmRzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJvd09mQ2FyZHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd09mQ2FyZHNEaXYuY2xhc3NOYW1lID0gJ3Jvd29mY2FyZHMnO1xuICAgICAgICAgICAgcm93T2ZDYXJkc0Rpdi5pZCA9ICdyb3dvZmNhcmRzJztcbiAgICBcbiAgICAgICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkT3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkT3V0ZXJEaXYuY2xhc3NOYW1lID0gJ292ZXJ2aWV3Y2FyZCc7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRJbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gY2FyZC5pbWFnZXNyYztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IGNhcmQudGl0bGU7XG4gICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0aXN0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgc3RhdGlzdGljLmlkID0gY2FyZC51bmRlcmxpbmVjb2xvcjtcbiAgICAgICAgICAgICAgICBzdGF0aXN0aWMuY2xhc3NOYW1lID0gY2FyZC51bmRlcmxpbmVjb2xvcjtcbiAgICAgICAgICAgICAgICBzdGF0aXN0aWMuaW5uZXJUZXh0ID0gY2FyZC5zdGF0aXN0aWM7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNhcmRJbm5lckRpdi5hcHBlbmQoaW1hZ2UsIHRpdGxlKTtcbiAgICAgICAgICAgICAgICBjYXJkT3V0ZXJEaXYuYXBwZW5kKGNhcmRJbm5lckRpdiwgc3RhdGlzdGljKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcm93T2ZDYXJkc0Rpdi5hcHBlbmRDaGlsZChjYXJkT3V0ZXJEaXYpO1xuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcm93T2ZDYXJkc0RpdjtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJTZXR0aW5nc1NlY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICAgICAgc2VjdGlvbi5jbGFzc05hbWUgPSAnc2V0dGluZ3NzZWN0aW9uJztcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gcmVuZGVyU2VjdGlvblRpdGxlKCdTZXR0aW5ncycpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkZWxldGVEZWNrU2VjdGlvbiA9IHJlbmRlckRlbGV0ZURlY2tPcHRpb25zKCk7XG4gICAgICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IHJlbmRlclJlc2V0QnV0dG9uKCk7XG5cbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kKHRpdGxlLCBkZWxldGVEZWNrU2VjdGlvbiwgcmVzZXRCdXR0b24pO1xuICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyRGVsZXRlRGVja09wdGlvbnMoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlY2tzID0gQXJyYXkuZnJvbShjb250cm9sbGVyLmRhdGEubG9jYWxEZWNrcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgZHJvcGRvd25MYWJlbC5odG1sRm9yID0gJ2RlY2tzJztcbiAgICAgICAgICAgIGRyb3Bkb3duTGFiZWwuaW5uZXJUZXh0ID0gJ0Nob29zZSBhIGRlY2sgeW91IHdvdWxkIGxpa2UgdG8gZGVsZXRlJztcblxuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIGRyb3Bkb3duU2VsZWN0Lm5hbWUgPSAnZGVja3MnO1xuICAgICAgICAgICAgZHJvcGRvd25TZWxlY3QuaWQgPSAnZHJvcGRvd25zZWxlY3QnO1xuXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uLmlubmVyVGV4dCA9ICdfX19fX19fX19fXyc7XG4gICAgICAgICAgICBkcm9wZG93blNlbGVjdC5hcHBlbmRDaGlsZChkZWZhdWx0T3B0aW9uKTtcblxuICAgICAgICAgICAgZGVja3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5pZCA9IGl0ZW0ubmFtZSArICdpZCc7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25TZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnZGVja2RlbGV0ZWJ1dHRvbic7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJ0RlbGV0ZSc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlY2tOYW1lID0gZHJvcGRvd25TZWxlY3QudmFsdWU7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5kZWxldGVEZWNrKGRlY2tOYW1lKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmRhdGEuVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVja05hbWUgKyAnaWQnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZURlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlbGV0ZURlY2tEaXYuY2xhc3NOYW1lID0gJ2RlbGV0ZWRlY2tkaXYnO1xuICAgICAgICAgICAgZGVsZXRlRGVja0Rpdi5hcHBlbmQoZHJvcGRvd25TZWxlY3QsIGRlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdkZWNrZGVsZXRlb3B0aW9ucyc7XG4gICAgICAgICAgICBkaXYuYXBwZW5kKGRyb3Bkb3duTGFiZWwsIGRlbGV0ZURlY2tEaXYpO1xuICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVPdmVydmlld0NhcmRzKGNhcmRzKSB7XG4gICAgICAgICAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcnZpZXdDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FyZC51bmRlcmxpbmVjb2xvcik7XG4gICAgICAgICAgICAgICAgb3ZlcnZpZXdDYXJkLmlubmVyVGV4dCA9IGNhcmQuc3RhdGlzdGljO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVEZWxldGVEZWNrT3B0aW9ucygpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duc2VsZWN0Jyk7XG4gICAgICAgICAgICBjb25zdCBkZWNrcyA9IEFycmF5LmZyb20oZHJvcGRvd25TZWxlY3QuY2hpbGRyZW4pO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxEZWNrcyA9IGNvbnRyb2xsZXIuZGF0YS5sb2NhbERlY2tzO1xuXG4gICAgICAgICAgICBkZWNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgIT0gJycpIHsgaXRlbS5yZW1vdmUoKTsgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxvY2FsRGVja3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5pZCA9IGl0ZW0ubmFtZSArICdpZCc7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25TZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlclJlc2V0QnV0dG9uKCkge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJ0RlbGV0ZSBhbGwgc2F2ZWQgZGF0YSc7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ3Jlc2V0YnV0dG9uJztcbiAgICAgICAgICAgIGJ1dHRvbi5hcmlhTGFiZWwgPSAnQ2xpY2sgaGVyZSB0byBkZWxldGUgYWxsIHNhdmVkIGRhdGEnO1xuICAgICAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hvd1Jlc2V0RGF0YUNvbmZpcm1hdGlvbldpbmRvdygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBidXR0b247XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gc2hvd1Jlc2V0RGF0YUNvbmZpcm1hdGlvbldpbmRvdygpIHtcbiAgICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVzZXQgeW91ciBkYXRhPyBZb3UgY2Fubm90IHVuZG8gdGhpcyBhY3Rpb24hJykpIHtcbiAgICAgICAgICAgICAgICBPYnNlcnZhYmxlLnB1Ymxpc2goJ0RhdGFSZXNldCcpOyAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7IHJldHVybjsgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZW5kZXJQYWdlLFxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNb2RhbCgpIHtcblxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbC5pZCA9ICdtb2RhbCc7XG4gICAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbCc7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gcmVuZGVyTW9kYWxIZWFkZXIobW9kYWwpO1xuICAgICAgICBjb25zdCBtb2RhbEZvcm0gPSByZW5kZXJNb2RhbEZvcm0obW9kYWwpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbEJvZHkuY2xhc3NOYW1lID0gJ21vZGFsLWJvZHknO1xuICAgICAgICBtb2RhbEJvZHkuaWQgPSAnbW9kYWwtYm9keSc7XG4gICAgICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChtb2RhbEZvcm0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsQ29udGVudC5jbGFzc05hbWUgPSAnbW9kYWwtY29udGVudCc7XG4gICAgICAgIG1vZGFsQ29udGVudC5pZCA9ICdtb2RhbC1jb250ZW50JztcbiAgICAgICAgbW9kYWxDb250ZW50LmFwcGVuZChtb2RhbEhlYWRlciwgbW9kYWxCb2R5KTtcblxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNb2RhbEhlYWRlcihtb2RhbCkge1xuXG4gICAgICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICAgICAgbW9kYWxIZWFkZXIuaW5uZXJUZXh0ID0gJ1N0ZXAgMTogQ3JlYXRlIERlY2snXG4gICAgICAgIG1vZGFsSGVhZGVyLmlkID0gJ21vZGFsaGVhZGVyaDUnO1xuXG4gICAgICAgIGNvbnN0IGV4aXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBleGl0U3Bhbi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG4gICAgICAgIGV4aXRTcGFuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vZGFsSGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsSGVhZGVyRGl2LmNsYXNzTmFtZSA9ICdtb2RhbC1oZWFkZXInO1xuICAgICAgICBtb2RhbEhlYWRlckRpdi5hcHBlbmQobW9kYWxIZWFkZXIsIGV4aXRTcGFuKTtcbiAgICAgICAgcmV0dXJuIG1vZGFsSGVhZGVyRGl2O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNb2RhbEZvcm0oKSB7XG5cbiAgICAgICAgY29uc3QgbmFtZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBuYW1lSW5wdXRMYWJlbC5odG1sRm9yID0gJ2RlY2tuYW1lJztcbiAgICAgICAgbmFtZUlucHV0TGFiZWwuaW5uZXJUZXh0ID0gYE1heCAyMCBDaGFyYWN0ZXJzYDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIG5hbWVJbnB1dC5taW5MZW5ndGggPSAxO1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKG5hbWVJbnB1dCwge1xuICAgICAgICAgICAgJ2lkJzogJ2RlY2tuYW1lJyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdkZWNrbmFtZScsXG4gICAgICAgICAgICAnbmFtZSc6ICdkZWNrbmFtZScsXG4gICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgICAgICdtYXhMZW5ndGgnOiAnMjAnLFxuICAgICAgICAgICAgJ21pbkxlbmd0aCc6ICcxJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9ICdkZWNrZGVzY3JpcHRpb24nO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9IGBEZXNjcmlwdGlvbiBNYXggNjAgQ2hhcmFjdGVyc2A7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMoZGVzY3JpcHRpb25JbnB1dCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnaWQnOiAnZGVja2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGVja2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdkZWNrZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICdyb3dzJzogJzgnLFxuICAgICAgICAgICAgICAgICdjb2xzJzogJzIwJyxcbiAgICAgICAgICAgICAgICAnbWF4TGVuZ3RoJzogJzYwJyxcbiAgICAgICAgICAgICAgICAnbWluLWhlaWdodCc6ICczcmVtJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gJ2RlY2tkdWVkYXRlJztcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgRGF0ZTonO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMoZHVlRGF0ZUlucHV0LCB7XG4gICAgICAgICAgICAnaWQnOiAnZGVja2R1ZWRhdGUnLFxuICAgICAgICAgICAgJ25hbWUnOiAnZGVja2R1ZWRhdGUnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ2RlY2tkdWVkYXRlJyxcbiAgICAgICAgICAgICd0eXBlJzogJ2RhdGUnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC5odG1sRm9yID0gJ2RlY2tjYXRlZ29yeSc7XG4gICAgICAgIGNhdGVnb3J5TGFiZWwuaW5uZXJUZXh0ID0gJ0NhdGVnb3J5JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGNhdGVnb3J5U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgc2V0QXR0cmlidXRlcyhjYXRlZ29yeVNlbGVjdCwge1xuICAgICAgICAgICAgJ2lkJzogJ2RlY2tjYXRlZ29yeScsXG4gICAgICAgICAgICAnbmFtZSc6ICdkZWNrY2F0ZWdvcnknLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ2RlY2tjYXRlZ29yeScsXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBkZWZhdWx0T3B0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgIGRlZmF1bHRPcHRpb24uaW5uZXJUZXh0ID0gJ1BsZWFzZSBjaG9vc2UgYSBDYXRlZ29yeSc7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBsYW5ndWFnZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBsYW5ndWFnZU9wdGlvbi52YWx1ZSA9ICdMYW5ndWFnZSc7XG4gICAgICAgIGxhbmd1YWdlT3B0aW9uLmlubmVyVGV4dCA9ICdMYW5ndWFnZSc7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBtYXRoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG1hdGhPcHRpb24udmFsdWUgPSAnTWF0aCc7XG4gICAgICAgIG1hdGhPcHRpb24uaW5uZXJUZXh0ID0gJ01hdGgnO1xuXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0LmFwcGVuZChkZWZhdWx0T3B0aW9uLCBsYW5ndWFnZU9wdGlvbiwgbWF0aE9wdGlvbik7XG5cbiAgICAgICAgY29uc3QgaW5wdXRzID0gW25hbWVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0LCBjYXRlZ29yeVNlbGVjdF07XG4gICAgICAgIGNvbnN0IGZvcm1TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZm9ybVN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSAnQ3JlYXRlIERlY2snO1xuICAgICAgICBmb3JtU3VibWl0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgZm9ybVN1Ym1pdEJ1dHRvbi5jbGFzc05hbWUgPSAnc3VibWl0YnV0dG9uJztcblxuICAgICAgICBjb25zdCBhZGRDYXJkc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRDYXJkc0J1dHRvbi5pbm5lclRleHQgPSAnQWRkIENhcmRzJztcbiAgICAgICAgYWRkQ2FyZHNCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBhZGRDYXJkc0J1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmVuZGVyQWRkQ2FyZE1vZGFsQm9keSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvcm1TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLmhhbmRsZURlY2tDcmVhdGlvbkZvcm0pO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NOYW1lID0gJ21vZGFsLWZvcm0nO1xuICAgICAgICBmb3JtLmlkID0gJ21vZGFsLWZvcm0nO1xuICAgICAgICBmb3JtLmFwcGVuZChcbiAgICAgICAgICAgIG5hbWVJbnB1dExhYmVsLCBuYW1lSW5wdXQsIFxuICAgICAgICAgICAgY2F0ZWdvcnlMYWJlbCwgY2F0ZWdvcnlTZWxlY3QsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLCBkZXNjcmlwdGlvbklucHV0LFxuICAgICAgICAgICAgZHVlRGF0ZUxhYmVsLCBkdWVEYXRlSW5wdXQsXG4gICAgICAgICAgICBmb3JtU3VibWl0QnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGZvcm07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldE1vZGFsQXV0b2ZvY3VzKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgbW9kYWxib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJvZHknKTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGV4dCA9IG1vZGFsYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXSB8fCBtb2RhbGJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XG4gICAgICAgICAgICBmaXJzdFRleHQuZm9jdXMoKTtcbiAgICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJBZGRDYXJkTW9kYWxCb2R5KG5ld0RlY2spIHtcbiAgICAgICAgcmVtb3ZlTW9kYWxDb250ZW50KCk7XG4gICAgICAgIHJlbmRlck1vZGFsQWRkQ2FyZElucHV0KG5ld0RlY2spO1xuICAgICAgICByZW5kZXJNb2RhbEFkZENhcmRJbnB1dEhlYWRlcigpO1xuICAgICAgICBzZXRNb2RhbEF1dG9mb2N1cygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0TW9kYWwoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpLnJlbW92ZSgpO1xuICAgICAgICByZW5kZXJNb2RhbCgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNb2RhbEFkZENhcmRJbnB1dChuZXdEZWNrKSB7XG5cbiAgICAgICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJvZHknKTtcblxuICAgICAgICBjb25zdCBjYXJkQ291bnRIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNhcmRDb3VudEgzLmlubmVyVGV4dCA9IGBDYXJkOiAke25ld0RlY2suY2FyZENvdW50ICsgMX1gO1xuICAgICAgICBjYXJkQ291bnRIMy5jbGFzc05hbWUgPSAnY2FyZGNvdW50aDMnO1xuXG4gICAgICAgIGNvbnN0IGRlY2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgZGVja05hbWUuaW5uZXJUZXh0ID0gbmV3RGVjay5uYW1lO1xuXG4gICAgICAgIGNvbnN0IG5ld0NhcmRUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdDYXJkVGl0bGVEaXYuY2xhc3NOYW1lID0gJ25ld2NhcmR0aXRsZWRpdic7XG4gICAgICAgIG5ld0NhcmRUaXRsZURpdi5hcHBlbmQoY2FyZENvdW50SDMsIGRlY2tOYW1lKTtcblxuICAgICAgICBjb25zdCBxdWVzdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcXVlc3Rpb25MYWJlbC5odG1sRm9yID0gJ3F1ZXN0aW9uaW5wdXQnO1xuICAgICAgICBxdWVzdGlvbkxhYmVsLmlubmVyVGV4dCA9ICdRdWVzdGlvbjonO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcXVlc3Rpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHF1ZXN0aW9uSW5wdXQubmFtZSA9ICdxdWVzdGlvbmlucHV0JztcbiAgICAgICAgcXVlc3Rpb25JbnB1dC5pZCA9ICdxdWVzdGlvbmlucHV0JztcbiAgICAgICAgcXVlc3Rpb25JbnB1dC5taW5MZW5ndGggPSAxO1xuICAgICAgICBxdWVzdGlvbklucHV0Lm1heExlbmd0aCA9IDMwMDtcblxuICAgICAgICBjb25zdCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBxdWVzdGlvbkRpdi5jbGFzc05hbWUgPSAncXVlc3Rpb25kaXYnO1xuICAgICAgICBxdWVzdGlvbkRpdi5hcHBlbmQocXVlc3Rpb25MYWJlbCwgcXVlc3Rpb25JbnB1dCk7XG5cbiAgICAgICAgY29uc3QgYW5zd2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBhbnN3ZXJMYWJlbC5odG1sRm9yID0gJ2Fuc3dlcmlucHV0JztcbiAgICAgICAgYW5zd2VyTGFiZWwuaW5uZXJUZXh0ID0gJ0Fuc3dlcjonXG4gICAgICAgIFxuICAgICAgICBjb25zdCBhbnN3ZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGFuc3dlcklucHV0Lm5hbWUgPSAnYW5zd2VyaW5wdXQnO1xuICAgICAgICBhbnN3ZXJJbnB1dC5pZCA9ICdhbnN3ZXJpbnB1dCc7XG4gICAgICAgIGFuc3dlcklucHV0Lm1pbkxlbmd0aCA9IDE7XG4gICAgICAgIGFuc3dlcklucHV0Lm1heExlbmd0aCA9IDMwMDtcblxuICAgICAgICBjb25zdCBhbnN3ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYW5zd2VyRGl2LmNsYXNzTmFtZSA9ICdhbnN3ZXJkaXYnO1xuICAgICAgICBhbnN3ZXJEaXYuYXBwZW5kKGFuc3dlckxhYmVsLCBhbnN3ZXJJbnB1dCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWxDYXJkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgbW9kYWxDYXJkRm9ybS5pZCA9ICdtb2RhbC1jYXJkLWZvcm0nO1xuICAgICAgICBtb2RhbENhcmRGb3JtLmFwcGVuZChxdWVzdGlvbkRpdiwgYW5zd2VyRGl2KTtcblxuICAgICAgICBjb25zdCB1c2VyT3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB1c2VyT3B0aW9uc0Rpdi5jbGFzc05hbWUgPSAndXNlcm9wdGlvbnNkaXYnO1xuXG4gICAgICAgIGNvbnN0IGFkZE5leHRDYXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZE5leHRDYXJkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgbmV4dCBjYXJkJztcbiAgICAgICAgYWRkTmV4dENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmhhbmRsZUFkZENhcmRzRm9ybShuZXdEZWNrLCAnYWRkbW9yZScpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZpbmlzaEFkZGluZ0NhcmRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGZpbmlzaEFkZGluZ0NhcmRzQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgYW5kIEZpbmlzaCc7XG4gICAgICAgIGZpbmlzaEFkZGluZ0NhcmRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbGxlci5oYW5kbGVBZGRDYXJkc0Zvcm0obmV3RGVjaywgJ2RvbmVhZGRpbmcnKVxuICAgICAgICB9KTtcblxuICAgICAgICB1c2VyT3B0aW9uc0Rpdi5hcHBlbmQoYWRkTmV4dENhcmRCdXR0b24sIGZpbmlzaEFkZGluZ0NhcmRzQnV0dG9uKTtcbiAgICAgICAgbW9kYWxCb2R5LmFwcGVuZChuZXdDYXJkVGl0bGVEaXYsIG1vZGFsQ2FyZEZvcm0sIHVzZXJPcHRpb25zRGl2KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNb2RhbEFkZENhcmRJbnB1dEhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxoZWFkZXJoNScpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSAnU3RlcCAyOiBBZGQgQ2FyZHMnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU1vZGFsQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJvZHknKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKG1vZGFsQm9keS5jaGlsZHJlbik7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldEZvcm0oZm9ybSkge1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUGFnZShuZXdQYWdlSUQpIHtcbiAgICAgICAgcmVtb3ZlTWFpblRhZ0NvbnRlbnQoKTtcbiAgICAgICAgc3dpdGNoIChuZXdQYWdlSUQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0dWR5cGFnZSc6XG4gICAgICAgICAgICAgICAgc3R1ZHlQYWdlLnJlbmRlclBhZ2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnb3ZlcnZpZXdwYWdlJzpcbiAgICAgICAgICAgICAgICBvdmVydmlld1BhZ2UucmVuZGVyUGFnZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZVRhYkNvbG9yKG5ld1BhZ2VJRCkge1xuICAgICAgICB2aWV3Lm1vYmlsZU5hdkJ1dHRvbnMuZm9yRWFjaCgobmF2VGFiKSA9PiB7XG4gICAgICAgICAgICBpZiAoIG5hdlRhYi5pZCA9PT0gbmV3UGFnZUlEKSB7XG4gICAgICAgICAgICAgICAgbmF2VGFiLnN0eWxlLmJvcmRlclRvcCA9ICcxcHggc29saWQgYmx1ZSc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bmF2VGFiLmlkfWgzYCkuc3R5bGUuY29sb3IgPSAnYmx1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYXZUYWIuc3R5bGUuYm9yZGVyVG9wID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25hdlRhYi5pZH1oM2ApLnN0eWxlLmNvbG9yID0gJ2dyZXknO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG5cblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyU2VjdGlvblRpdGxlKHRpdGxlTmFtZSkge1xuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGgxLmlubmVyVGV4dCA9IHRpdGxlTmFtZTtcbiAgICAgICAgaDEuaWQgPSB0aXRsZU5hbWUuc2xpY2UoKS50b0xvd2VyQ2FzZSgpICsgJ3RpdGxlJztcbiAgICAgICAgcmV0dXJuIGgxO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRCYW5uZXJCdXR0b25GdW5jdGlvbmFsaXR5KCkge1xuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgICAgICAgbWVudS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYmFubmVyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhbm5lcmJ1dHRvbicpO1xuICAgICAgICBiYW5uZXJCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgZG9jdW1lbnQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghYmFubmVyQnV0dG9uLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtYWtlTmV3QWRkRGVja0J1dHRvbldvcmsoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHR0dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVidXR0dHRvbicpO1xuICAgICAgICBidXR0dHR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldE1vZGFsQXV0b2ZvY3VzKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFpblRhZ0NvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IG1haW5DaGlsZHJlbiA9IEFycmF5LmZyb20obWFpbi5jaGlsZHJlbik7XG4gICAgICAgIG1haW5DaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG59O1xuXG4gICAgZnVuY3Rpb24gZ2V0RW1wdHlEaXZGb3JFeHRyYVBhZ2VTcGFjZUF0Qm90dG9tV2l0aE1vYmlsZU5hdkhlaWdodCgpIHtcbiAgICAgICAgY29uc3QgbW9iaWxlTmF2SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZW5hdicpLm9mZnNldEhlaWdodC50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBlbXB0eVNwYWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVtcHR5U3BhY2VEaXYuc3R5bGUuaGVpZ2h0ID0gYCR7bW9iaWxlTmF2SGVpZ2h0fXB4YDtcbiAgICAgICAgcmV0dXJuIGVtcHR5U3BhY2VEaXY7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlck1vYmlsZU5hdmlnYXRpb24gKCkge1xuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAgICAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XG5cbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgICAgIG5hdi5jbGFzc05hbWUgPSAnbW9iaWxlbmF2JztcbiAgICAgICAgbmF2LmlkID0gJ21vYmlsZW5hdic7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdHVkeUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHN0dWR5SW1hZ2Uuc3JjID0gU3R1ZHlJY29uO1xuICAgICAgICBzdHVkeUltYWdlLmFsdCA9ICdDbGljayBoZXJlIHRvIGFjY2VzcyB0aGUgc3R1ZHkgc2VjdGlvbic7XG5cbiAgICAgICAgY29uc3Qgc3R1ZHlIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHN0dWR5SDMuaWQgPSAnc3R1ZHlwYWdlaDMnXG4gICAgICAgIHN0dWR5SDMuaW5uZXJUZXh0ID0gJ1N0dWR5JztcblxuICAgICAgICBjb25zdCBzdHVkeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdHVkeUJ1dHRvbi5pZCA9ICdzdHVkeXBhZ2UnO1xuICAgICAgICBzdHVkeUJ1dHRvbi5hcHBlbmQoc3R1ZHlJbWFnZSwgc3R1ZHlIMylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG92ZXJ2aWV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgb3ZlcnZpZXdJbWFnZS5zcmMgPSBPdmVydmlld0ljb247XG4gICAgICAgIG92ZXJ2aWV3SW1hZ2UuYWx0ID0gJ0NsaWNrIGhlcmUgdG8gYWNjZXNzIHRoZSBzdHVkeSBzZWN0aW9uJztcblxuICAgICAgICBjb25zdCBvdmVydmlld0gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgb3ZlcnZpZXdIMy5pZCA9ICdvdmVydmlld3BhZ2VoMydcbiAgICAgICAgb3ZlcnZpZXdIMy5pbm5lclRleHQgPSAnT3ZlcnZpZXcnO1xuXG4gICAgICAgIGNvbnN0IG92ZXJ2aWV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG92ZXJ2aWV3QnV0dG9uLmlkID0gJ292ZXJ2aWV3cGFnZSc7XG4gICAgICAgIG92ZXJ2aWV3QnV0dG9uLmFwcGVuZChvdmVydmlld0ltYWdlLCBvdmVydmlld0gzKVxuXG4gICAgICAgIG5hdi5hcHBlbmQoc3R1ZHlCdXR0b24sIG92ZXJ2aWV3QnV0dG9uKTtcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlTW9iaWxlTmF2QnV0dG9ucygpIHtcbiAgICAgICAgdmlldy5tb2JpbGVOYXZCdXR0b25zID0gQXJyYXkuZnJvbShbXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3R1ZHlwYWdlJyksXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcnZpZXdwYWdlJyksXG4gICAgICAgICAgICBdKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYWRkTW9iaWxlTmF2RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHZpZXcubW9iaWxlTmF2QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRhYklEID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgICAgICAgICAgcmVtb3ZlTWFpblRhZ0NvbnRlbnQoKTtcbiAgICAgICAgICAgIGNoYW5nZVRhYkNvbG9yKGN1cnJlbnRUYWJJRCk7XG4gICAgICAgICAgICBjb250cm9sbGVyLmNoYW5nZVBhZ2UoY3VycmVudFRhYklEKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyRGVmYXVsdFZpZXcocGFnZUlEKSB7XG4gICAgICAgIHJlbmRlckJhbm5lcigpO1xuICAgICAgICBhZGRCYW5uZXJCdXR0b25GdW5jdGlvbmFsaXR5KCk7XG4gICAgICAgIG1ha2VOZXdBZGREZWNrQnV0dG9uV29yaygpO1xuICAgICAgICByZW5kZXJNb2JpbGVOYXZpZ2F0aW9uKCk7XG4gICAgICAgIHVwZGF0ZU1vYmlsZU5hdkJ1dHRvbnMoKTtcbiAgICAgICAgYWRkTW9iaWxlTmF2RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmVuZGVyUGFnZShwYWdlSUQpXG4gICAgICAgIGNoYW5nZVRhYkNvbG9yKHBhZ2VJRCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckJhbm5lcigpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTEyIDZWMThNNiAxMkgxOCcpO1xuXG4gICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcblxuICAgICAgICBjb25zdCBiYW5uZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYmFubmVyQnV0dG9uLmlkID0gJ2Jhbm5lcmJ1dHRvbic7XG4gICAgICAgIGJhbm5lckJ1dHRvbi5jbGFzc05hbWUgPSAnYmFubmVyYnV0dG9uJztcbiAgICAgICAgYmFubmVyQnV0dG9uLmFwcGVuZENoaWxkKHN2Zyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSAnU3R1ZHkgRGVja3MnO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uaWQgPSAndGhlYnV0dHR0b24nO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIGEgRGVjayc7XG4gXG4gICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uYnVmZmVyJyk7XG4gICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgICAgIG1lbnVEaXYuaWQgPSAnbWVudSc7XG4gICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuICAgICAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyRGl2LmlkID0gJ2NvbnRhaW5lcmRpdic7XG4gICAgICAgIGNvbnRhaW5lckRpdi5jbGFzc05hbWUgPSAnY29udGFpbmVyZGl2JztcbiAgICAgICAgY29udGFpbmVyRGl2LmFwcGVuZChiYW5uZXJCdXR0b24sIG1lbnVEaXYpO1xuXG4gICAgICAgIGNvbnN0IGlubmVySGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlubmVySGVhZGVyRGl2LmNsYXNzTmFtZSA9ICdpbm5lcmhlYWRlcmRpdic7XG4gICAgICAgIGlubmVySGVhZGVyRGl2LmFwcGVuZCh0aXRsZSwgY29udGFpbmVyRGl2KTtcblxuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIG1haW5IZWFkZXIuaWQgPSAnbWFpbmhlYWRlcic7XG4gICAgICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoaW5uZXJIZWFkZXJEaXYpO1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKG1haW5IZWFkZXIsIGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN0dWR5UGFnZSxcbiAgICAgICAgcmVzZXRNb2RhbCxcbiAgICAgICAgaGlkZU1vZGFsLFxuICAgICAgICByZXNldEZvcm0sXG4gICAgICAgIHJlbmRlclBhZ2UsXG4gICAgICAgIHJlbmRlckRlZmF1bHRWaWV3LFxuICAgICAgICByZW1vdmVNYWluVGFnQ29udGVudCxcbiAgICAgICAgcmVuZGVyQWRkQ2FyZE1vZGFsQm9keSxcbiAgICAgICAgfTtcbn0pKCk7XG5cbi8vU2lkZS1iYXIgTmF2XG5cbi8vdGVtcG9yYXJpbHkgYWRkaW5nIG1lbnUgZXZlbnQgbGlzdGVuZXJzIGhlcmVcbi8vVGhlc2UgYXJlIHRoZSBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBsZWZ0IHNsaWRlLWluIG5hdmJhclxuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcnZpZXdvcHRpb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgICAgXG4vLyAgICAgcmVtb3ZlTWFpblRhZ0NvbnRlbnQoKTtcbi8vICAgICByZW5kZXIoKVxuLy8gICAgIHRvZ2dsZU5hdigpO1xuLy8gfSk7XG5cblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGRlY2tvcHRpb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICByZW1vdmVNYWluVGFnQ29udGVudCgpO1xuLy8gICAgIFJlbmRlcigpO1xuLy8gICAgIHRvZ2dsZU5hdigpO1xuLy8gfSk7XG5cbi8vIGZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcbi8vICAgICBjb25zdCBzaWRlTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215U2lkZW5hdicpO1xuLy8gICAgIHNpZGVOYXYuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4vLyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCAnLi4vc2Nzcy9jc3Mvc3R5bGUuY3NzJztcbmNvbnRyb2xsZXIuc3RhcnRBcHBsaWNhdGlvbigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==