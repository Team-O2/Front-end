(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/GlobalStyles */ "./styles/GlobalStyles.ts");
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/theme */ "./styles/theme.ts");
/* harmony import */ var _public_assets_fonts_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/assets/fonts/index.css */ "./public/assets/fonts/index.css");
/* harmony import */ var _public_assets_fonts_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_fonts_index_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "O2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
      theme: styles_theme__WEBPACK_IMPORTED_MODULE_5__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./styles/GlobalStyles.ts":
/*!********************************!*\
  !*** ./styles/GlobalStyles.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-reset */ "styled-reset");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_1__);


const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["", " *,*::before,*::after{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html{font-size:10px;margin:0;padding:0;}body{height:100%;font-family:'AppleSDGothicNeo';}a,button{text-decoration:none;cursor:pointer;}ul li{list-style-type:none;}a{text-decoration:none;color:black;}a:visited{text-decoration:none;}a:hover{text-decoration:none;}a:focus{text-decoration:none;}a:hover,a:active{text-decoration:none;}@media (max-width:1200px){padding-right:1.8vw;}"], styled_reset__WEBPACK_IMPORTED_MODULE_1__.reset);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const background = ['#f3fcff', '#f0f7ff', '#ddfbfa', '#f0fafb'];
const primary = ['#13e2dd', '#04d6e0', '#58e2ff', '#36c8f5', '#00baf4', '#03b6ce', '#f66436', '#e04747'];
const grayscale = ['#ffffff', '#dfdfdf', '#c1c1c1', '#a5a5a5', '#8b8b8b', '#6f6f6f', '#555555', '#3d3d3d', '#242424', '#0d0d0d', '#c4c4c4'];
const theme = {
  palette: {
    background,
    primary,
    grayscale,
    emptyImage: '#0292a5'
  },
  size: {
    mobile: '(max-width: 600px)',
    tablet: '(max-width: 900px)',
    laptop: '(max-width: 1200px)',
    desktop: '(min-width: 1800px)'
  },
  font: {
    dp1: `
      line-height: 1.22;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 36px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    dp1_eng: `
      line-height: 1.17;
      letter-spacing: -0.5px;
      font-family: 'HomepageBaukasten';
      font-size: 36px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
      `,
    dp2: `
      line-height: 1.25;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 40px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    dp2_eng: `
      line-height: 1.2;
      letter-spacing: -0.5px;
      font-family: 'HomepageBaukasten';
      font-size: 40px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    dp3_eng: `
      line-height: 1.22;
      letter-spacing: -0.5px;
      font-family: 'HomepageBaukasten';
      font-size: 46px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    dp4: `
      line-height: 1.42;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 48px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    h1: `
      line-height: 1.36;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 28px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    h1_eng: `
      line-height: 1.21;
      letter-spacing: -0.5px;
      font-family: 'HomepageBaukasten';
      font-size: 28px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    h2: `
      line-height: 1.31;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 32px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    h2_eng: `
      line-height: 1.19;
      letter-spacing: -0.5px;
      font-family: 'HomepageBaukasten';
      font-size: 32px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead1: `
      line-height: 1.5;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 12px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead1_eng: `
      line-height: 1.33;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 12px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead2: `
      line-height: 1.43;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 14px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead2_eng: `
      line-height: 1.29;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 14px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead3: `
      line-height: 1.38;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 16px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead3_eng: `
      line-height: 1.25;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 16px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead4: `
      line-height: 1.33;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 18px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead4_eng: `
      line-height: 1.33;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 18px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead5: `
      line-height: 1.33;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 24px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    subhead5_eng: `
      line-height: 1.33;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 24px;
      font-stretch: normal;
      font-weight: bold;
      font-style: normal;
    `,
    body1: `
      line-height: 1.5;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 12px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body1_eng: `
      line-height: 1.33;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 12px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body2: `
      line-height: 1.5;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 14px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body2_eng: `
      line-height: 1.29;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 14px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body3: `
      line-height: 1.5;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 16px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body3_eng: `
      line-height: 1.25;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 16px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body4: `
      line-height: 1.56;
      letter-spacing: -0.5px;
      font-family: 'AppleSDGothicNeo';
      font-size: 18px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `,
    body4_eng: `
      line-height: 1.33;
      letter-spacing: normal;
      font-family: 'HomepageBaukasten';
      font-size: 18px;
      font-stretch: normal;
      font-weight: normal;
      font-style: normal;
    `
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "./public/assets/fonts/index.css":
/*!***************************************!*\
  !*** ./public/assets/fonts/index.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-reset");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vMi8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL28yLy4vc3R5bGVzL0dsb2JhbFN0eWxlcy50cyIsIndlYnBhY2s6Ly9vMi8uL3N0eWxlcy90aGVtZS50cyIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL28yL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJyZWNvaWxcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJzdHlsZWQtcmVzZXRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tICdzdHlsZXMvR2xvYmFsU3R5bGVzJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJ3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9mb250cy9pbmRleC5jc3MnO1xyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPHRpdGxlPk8yPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgICAgICA8UmVjb2lsUm9vdD5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1JlY29pbFJvb3Q+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgcmVzZXQgfSBmcm9tICdzdHlsZWQtcmVzZXQnO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgJHtyZXNldH1cclxuICBcclxuICAqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgfVxyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nO1xyXG4gIH1cclxuICBhLCBidXR0b24ge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICB1bCBsaSB7bGlzdC1zdHlsZS10eXBlOiBub25lO31cclxuXHJcbiAgYSB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6IGJsYWNrOyB9XHJcbiAgYTp2aXNpdGVkIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiAgYTpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG4gIGE6Zm9jdXMgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuICBhOmhvdmVyLCBhOmFjdGl2ZSB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjh2dztcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZXM7XHJcbiIsImNvbnN0IGJhY2tncm91bmQgPSBbJyNmM2ZjZmYnLCAnI2YwZjdmZicsICcjZGRmYmZhJywgJyNmMGZhZmInXTtcclxuXHJcbmNvbnN0IHByaW1hcnkgPSBbJyMxM2UyZGQnLCAnIzA0ZDZlMCcsICcjNThlMmZmJywgJyMzNmM4ZjUnLCAnIzAwYmFmNCcsICcjMDNiNmNlJywgJyNmNjY0MzYnLCAnI2UwNDc0NyddO1xyXG5cclxuY29uc3QgZ3JheXNjYWxlID0gW1xyXG4gICcjZmZmZmZmJyxcclxuICAnI2RmZGZkZicsXHJcbiAgJyNjMWMxYzEnLFxyXG4gICcjYTVhNWE1JyxcclxuICAnIzhiOGI4YicsXHJcbiAgJyM2ZjZmNmYnLFxyXG4gICcjNTU1NTU1JyxcclxuICAnIzNkM2QzZCcsXHJcbiAgJyMyNDI0MjQnLFxyXG4gICcjMGQwZDBkJyxcclxuICAnI2M0YzRjNCcsXHJcbl07XHJcblxyXG5jb25zdCB0aGVtZSA9IHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBiYWNrZ3JvdW5kLFxyXG4gICAgcHJpbWFyeSxcclxuICAgIGdyYXlzY2FsZSxcclxuICAgIGVtcHR5SW1hZ2U6ICcjMDI5MmE1JyxcclxuICB9LFxyXG4gIHNpemU6IHtcclxuICAgIG1vYmlsZTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXHJcbiAgICB0YWJsZXQ6ICcobWF4LXdpZHRoOiA5MDBweCknLFxyXG4gICAgbGFwdG9wOiAnKG1heC13aWR0aDogMTIwMHB4KScsXHJcbiAgICBkZXNrdG9wOiAnKG1pbi13aWR0aDogMTgwMHB4KScsXHJcbiAgfSxcclxuICBmb250OiB7XHJcbiAgICBkcDE6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgZHAxX2VuZzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4xNztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdIb21lcGFnZUJhdWthc3Rlbic7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGAsXHJcbiAgICBkcDI6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgZHAyX2VuZzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBkcDNfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjIyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBkcDQ6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgaDE6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzY7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgaDFfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjIxO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBoMjogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4zMTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBoMl9lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMTk7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIHN1YmhlYWQxOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgc3ViaGVhZDFfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBzdWJoZWFkMjogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS40MztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBzdWJoZWFkMl9lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjk7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIHN1YmhlYWQzOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIHN1YmhlYWQzX2VuZzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdIb21lcGFnZUJhdWthc3Rlbic7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgc3ViaGVhZDQ6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgc3ViaGVhZDRfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBzdWJoZWFkNTogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4zMztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBzdWJoZWFkNV9lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIGJvZHkxOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBib2R5MV9lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgYm9keTI6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIGJvZHkyX2VuZzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4yOTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdIb21lcGFnZUJhdWthc3Rlbic7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBib2R5MzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgYm9keTNfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIGJvZHk0OiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU2O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgYm9keTRfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjb2lsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1yZXNldFwiKTsiXSwibmFtZXMiOlsiSGVhZCIsIlJlY29pbFJvb3QiLCJUaGVtZVByb3ZpZGVyIiwiR2xvYmFsU3R5bGVzIiwidGhlbWUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwicmVzZXQiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsImdyYXlzY2FsZSIsInBhbGV0dGUiLCJlbXB0eUltYWdlIiwic2l6ZSIsIm1vYmlsZSIsInRhYmxldCIsImxhcHRvcCIsImRlc2t0b3AiLCJmb250IiwiZHAxIiwiZHAxX2VuZyIsImRwMiIsImRwMl9lbmciLCJkcDNfZW5nIiwiZHA0IiwiaDEiLCJoMV9lbmciLCJoMiIsImgyX2VuZyIsInN1YmhlYWQxIiwic3ViaGVhZDFfZW5nIiwic3ViaGVhZDIiLCJzdWJoZWFkMl9lbmciLCJzdWJoZWFkMyIsInN1YmhlYWQzX2VuZyIsInN1YmhlYWQ0Iiwic3ViaGVhZDRfZW5nIiwic3ViaGVhZDUiLCJzdWJoZWFkNV9lbmciLCJib2R5MSIsImJvZHkxX2VuZyIsImJvZHkyIiwiYm9keTJfZW5nIiwiYm9keTMiLCJib2R5M19lbmciLCJib2R5NCIsImJvZHk0X2VuZyJdLCJzb3VyY2VSb290IjoiIn0=