(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/atoms/Button/index.tsx":
/*!*******************************************!*\
  !*** ./components/atoms/Button/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/atoms/Button/style.ts");

var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\atoms\\Button\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Button(_ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.SButton, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./components/atoms/Button/style.ts":
/*!******************************************!*\
  !*** ./components/atoms/Button/style.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SButton": () => (/* binding */ SButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "style__SButton",
  componentId: "sc-msm8wy-0"
})(["border:0;background-color:inherit;padding:0;:focus{outline:none;}"]);

/***/ }),

/***/ "./components/atoms/Icon/index.tsx":
/*!*****************************************!*\
  !*** ./components/atoms/Icon/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\atoms\\Icon\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function Icon(_ref) {
  let {
    height = '2rem',
    alt = ''
  } = _ref,
      props = _objectWithoutProperties(_ref, ["height", "alt"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SImg, _objectSpread({
    height: height,
    alt: alt
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

const SImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
  displayName: "Icon__SImg",
  componentId: "sc-lkmalw-0"
})(["height:", ";border-radius:", ";"], props => props.height, (0,styled_tools__WEBPACK_IMPORTED_MODULE_3__.ifProp)('circular', '50%', ''));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./components/atoms/Input/index.tsx":
/*!******************************************!*\
  !*** ./components/atoms/Input/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\atoms\\Input\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Input(_ref) {
  let {
    autoComplete = 'off'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["autoComplete"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SInput, _objectSpread({
    autoComplete: autoComplete
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

const SInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default().input.withConfig({
  displayName: "Input__SInput",
  componentId: "sc-99b9kt-0"
})(["margin:0;"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./components/atoms/index.ts":
/*!***********************************!*\
  !*** ./components/atoms/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Icon": () => (/* reexport safe */ _Icon__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Input": () => (/* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./components/atoms/Button/index.tsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./components/atoms/Icon/index.tsx");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/atoms/Input/index.tsx");




/***/ }),

/***/ "./components/molecules/Concert/index.tsx":
/*!************************************************!*\
  !*** ./components/molecules/Concert/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/images */ "./public/assets/images/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/molecules/Concert/style.ts");


var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\molecules\\Concert\\index.tsx";






function Concert({
  imgThumbnail,
  authorNickname,
  interestList,
  createdAt,
  title,
  text,
  commentNum,
  likeNum,
  onClickFunc
}) {
  const interestDivide = interestList === null || interestList === void 0 ? void 0 : interestList.join(' | ');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.ConcertWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Info, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: authorNickname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: interestDivide
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: `${dayjs__WEBPACK_IMPORTED_MODULE_1___default()(createdAt).format('YY.MM.DD')}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Content, {
        onClick: onClickFunc,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          dangerouslySetInnerHTML: {
            __html: `${text}`
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.ThumbnailContainer, {
        onClick: onClickFunc,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: imgThumbnail,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.ThumbnailOverlay, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.ThumbnailInfo, {
            children: [likeNum === undefined ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: public_assets_images__WEBPACK_IMPORTED_MODULE_3__.ThumbnailLikeIcon,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: [" ", likeNum]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }, this)]
            }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: public_assets_images__WEBPACK_IMPORTED_MODULE_3__.ThumbnailCommentIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: [" ", commentNum]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Concert);

/***/ }),

/***/ "./components/molecules/Concert/style.ts":
/*!***********************************************!*\
  !*** ./components/molecules/Concert/style.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Info": () => (/* binding */ Info),
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "ThumbnailContainer": () => (/* binding */ ThumbnailContainer),
/* harmony export */   "ThumbnailOverlay": () => (/* binding */ ThumbnailOverlay),
/* harmony export */   "ThumbnailInfo": () => (/* binding */ ThumbnailInfo),
/* harmony export */   "ConcertWrapper": () => (/* binding */ ConcertWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_1__);


const Info = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Info",
  componentId: "sc-vlfzf9-0"
})(["display:flex;flex-direction:column;width:111px;height:84px;color:#404040;", ";& p:nth-of-type(1){margin:0 38px 12px 0;width:100px;", ";}:hover{cursor:pointer;}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.body1'), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.subhead3'));
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Content",
  componentId: "sc-vlfzf9-1"
})(["display:flex;flex-direction:column;width:524px;height:84px;color:", ";", ";& p:nth-of-type(2){display:-webkit-box;margin-top:12px;width:524px;height:2.79em;overflow:hidden;text-align:left;text-overflow:ellipsis;white-space:normal;word-wrap:break-word;color:", ";", ";-webkit-line-clamp:3;-webkit-box-orient:vertical;}:hover{cursor:pointer;}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 9), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.subhead3'), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 7), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.body2'));
const ThumbnailContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__ThumbnailContainer",
  componentId: "sc-vlfzf9-2"
})(["position:relative;img{width:170px;height:84px;object-fit:cover;}:hover{cursor:pointer;}"]);
const ThumbnailOverlay = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__ThumbnailOverlay",
  componentId: "sc-vlfzf9-3"
})(["position:absolute;bottom:0;transition:.5s ease;opacity:0;background:rgb(0,0,0);width:100%;height:100%;:hover{opacity:0.6;}"]);
const ThumbnailInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__ThumbnailInfo",
  componentId: "sc-vlfzf9-4"
})(["display:flex;position:absolute;top:50%;left:50%;align-items:center;transform:translate(-50%,-50%);color:", ";", ";img{margin-right:5px;width:20px;height:20px;}p{margin-right:10px;}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 0), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.body2_eng'));
const ConcertWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__ConcertWrapper",
  componentId: "sc-vlfzf9-5"
})(["display:flex;flex-direction:row;align-items:center;justify-content:space-around;border-bottom:1px solid #DFDFDF;height:144px;"]);

/***/ }),

/***/ "./components/molecules/SearchBar/index.tsx":
/*!**************************************************!*\
  !*** ./components/molecules/SearchBar/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_assets_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/assets/images */ "./public/assets/images/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./components/molecules/SearchBar/style.ts");

var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\molecules\\SearchBar\\index.tsx";





function SearchBar({
  onClickSearch,
  onChangeKeyword
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.SearchBarWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.SearchInput, {
      name: "searchBar",
      onChange: onChangeKeyword,
      placeholder: "\uD0A4\uC6CC\uB4DC\uB97C \uAC80\uC0C9\uD574 \uC8FC\uC138\uC694"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.SearchButton, {
      onClick: onClickSearch,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: public_assets_images__WEBPACK_IMPORTED_MODULE_2__.SearchIcon,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

/***/ }),

/***/ "./components/molecules/SearchBar/style.ts":
/*!*************************************************!*\
  !*** ./components/molecules/SearchBar/style.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchInput": () => (/* binding */ SearchInput),
/* harmony export */   "SearchButton": () => (/* binding */ SearchButton),
/* harmony export */   "SearchBarWrapper": () => (/* binding */ SearchBarWrapper)
/* harmony export */ });
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/atoms */ "./components/atoms/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_2__);



const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_atoms__WEBPACK_IMPORTED_MODULE_0__.Input).withConfig({
  displayName: "style__SearchInput",
  componentId: "sc-ouv9h4-0"
})(["border:1px solid #dfdfdf;border-radius:72px;background-color:rgba(223,223,223,0.2);padding:9px 18px 9px 20px;width:298px;height:46px;color:", ";font-size:18px;:focus{outline:none;}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.palette)('grayscale', 2));
const SearchButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_atoms__WEBPACK_IMPORTED_MODULE_0__.Button).withConfig({
  displayName: "style__SearchButton",
  componentId: "sc-ouv9h4-1"
})(["opacity:50%;margin-bottom:4px;margin-left:-50px;border:#ffffff;background-color:rgba(223,223,223,0.2);width:24px;height:24px;;"]);
const SearchBarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__SearchBarWrapper",
  componentId: "sc-ouv9h4-2"
})(["display:flex;flex-direction:row;align-items:center;margin-right:33px;"]);

/***/ }),

/***/ "./components/molecules/index.ts":
/*!***************************************!*\
  !*** ./components/molecules/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Concert": () => (/* reexport safe */ _Concert__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "SearchBar": () => (/* reexport safe */ _SearchBar__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _Concert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Concert */ "./components/molecules/Concert/index.tsx");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar */ "./components/molecules/SearchBar/index.tsx");



/***/ }),

/***/ "./components/organisms/Footer/index.tsx":
/*!***********************************************!*\
  !*** ./components/organisms/Footer/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_assets_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/assets/images */ "./public/assets/images/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./components/organisms/Footer/style.ts");

var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\organisms\\Footer\\index.tsx";





function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.FooterWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Logo, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: public_assets_images__WEBPACK_IMPORTED_MODULE_2__.HeaderLogoIcon,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Text, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Info, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Open Together"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "\uC774\uC6A9\uC57D\uAD00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "\uACF5\uC9C0\uC0AC\uD56D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Copyright \xA9 2021 Open Together, O2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Member, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Planner, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Planner"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Eunsol"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Heeyoung"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Designer, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Hyunkyung"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Suah"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Subin"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Developer, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Developer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Yeongwoo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Subin"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Hyoin"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Jiyoung"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Server, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Server"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Hyunjin"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Seongyong"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./components/organisms/Footer/style.ts":
/*!**********************************************!*\
  !*** ./components/organisms/Footer/style.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "Info": () => (/* binding */ Info),
/* harmony export */   "Member": () => (/* binding */ Member),
/* harmony export */   "Planner": () => (/* binding */ Planner),
/* harmony export */   "Designer": () => (/* binding */ Designer),
/* harmony export */   "Developer": () => (/* binding */ Developer),
/* harmony export */   "Server": () => (/* binding */ Server),
/* harmony export */   "Logo": () => (/* binding */ Logo),
/* harmony export */   "FooterWrapper": () => (/* binding */ FooterWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_1__);


const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Text",
  componentId: "sc-dsr5hu-0"
})(["display:flex;color:", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 7));
const Info = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Info",
  componentId: "sc-dsr5hu-1"
})(["& span:nth-of-type(1){", ";}span{margin-right:20px;", ";}p{margin-top:10px;", ";}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.subhead3_eng'), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.body3'), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.body2_eng'));
const Member = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Member",
  componentId: "sc-dsr5hu-2"
})(["display:flex;margin-left:140px;", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.body1_eng'));
const Planner = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Planner",
  componentId: "sc-dsr5hu-3"
})(["margin-right:50px;& p:nth-of-type(1){", ";}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.subhead1_eng'));
const Designer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Designer",
  componentId: "sc-dsr5hu-4"
})(["margin-right:50px;& p:nth-of-type(1){", ";}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.subhead1_eng'));
const Developer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Developer",
  componentId: "sc-dsr5hu-5"
})(["margin-right:50px;& p:nth-of-type(1){", ";}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.subhead1_eng'));
const Server = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Server",
  componentId: "sc-dsr5hu-6"
})(["margin-right:50px;& p:nth-of-type(1){", ";}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.subhead1_eng'));
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Logo",
  componentId: "sc-dsr5hu-7"
})(["margin-right:985px;margin-bottom:27px;"]);
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__FooterWrapper",
  componentId: "sc-dsr5hu-8"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#fbfbfb;width:100%;height:278px;"]);

/***/ }),

/***/ "./components/organisms/NoticeHeader/index.tsx":
/*!*****************************************************!*\
  !*** ./components/organisms/NoticeHeader/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/images */ "./public/assets/images/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/organisms/NoticeHeader/style.ts");

var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\organisms\\NoticeHeader\\index.tsx";






function NoticeHeader() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.NoticeHeaderWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Background, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.IconContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: public_assets_images__WEBPACK_IMPORTED_MODULE_3__.NoticeHeaderIcon,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Text, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "\uB2E4\uC74C \uAC15\uC5F0\uC774\uC5D0\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "\uCC3D\uC5C5\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uAC83"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.ConcertButton, {
          children: "\uB354 \uC54C\uC544\uBCF4\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoticeHeader);

/***/ }),

/***/ "./components/organisms/NoticeHeader/style.ts":
/*!****************************************************!*\
  !*** ./components/organisms/NoticeHeader/style.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Background": () => (/* binding */ Background),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "ConcertButton": () => (/* binding */ ConcertButton),
/* harmony export */   "IconContainer": () => (/* binding */ IconContainer),
/* harmony export */   "NoticeHeaderWrapper": () => (/* binding */ NoticeHeaderWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_1__);


const Background = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Background",
  componentId: "sc-17bepkq-0"
})(["width:100%;height:310px;background-image:linear-gradient(to right,#36c8f5,#13e2dd );"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Text",
  componentId: "sc-17bepkq-1"
})(["display:flex;position:absolute;top:60%;left:30%;flex-direction:column;transform:translate( -50%,-50% );color:white;& p:nth-of-type(1){", ";}& p:nth-of-type(2){", ";}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.dp4'), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.subhead4'));
const ConcertButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "style__ConcertButton",
  componentId: "sc-17bepkq-2"
})(["display:flex;justify-content:center;align-items:center;margin-top:37px;margin-bottom:85px;border-radius:4px;background-color:white;width:175px;height:44px;color:", ";", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('primary', 0), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.subhead4'));
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__IconContainer",
  componentId: "sc-17bepkq-3"
})(["position:absolute;top:15%;left:60%;"]);
const NoticeHeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__NoticeHeaderWrapper",
  componentId: "sc-17bepkq-4"
})(["position:relative;margin-bottom:138px;"]);

/***/ }),

/***/ "./components/organisms/NoticeList/index.tsx":
/*!***************************************************!*\
  !*** ./components/organisms/NoticeList/index.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/molecules */ "./components/molecules/index.ts");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/images */ "./public/assets/images/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./components/organisms/NoticeList/style.ts");


var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\organisms\\NoticeList\\index.tsx";







function NoticeList({
  noticeList,
  totalNoticeNum,
  currentPage,
  setCurrentPage
}) {
  const history = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useHistory)();
  const {
    0: startPage,
    1: setStartPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const {
    0: endPage,
    1: setEndPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(8);
  const commentsOfPage = 8;
  const totalPage = Math.ceil(totalNoticeNum / commentsOfPage);
  const pageIndex = [...Array(totalPage)].map((_, i) => i + 1);
  const target = pageIndex.slice(startPage, endPage);

  const handlePageClick = e => {
    setCurrentPage(parseInt(e.currentTarget.value));
  };

  const handlePrevPageClick = () => {
    if (startPage !== 0) {
      setStartPage(startPage - 8);
      setEndPage(startPage);
      setCurrentPage(startPage);
    }
  };

  const handleNextPageClick = () => {
    if (endPage !== totalPage) {
      if (startPage + 8 <= totalPage) {
        setStartPage(startPage + 8);
        setCurrentPage(startPage + 9);

        if (endPage + 8 <= totalPage) {
          setEndPage(endPage + 8);
        } else {
          setEndPage(totalPage);
        }
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.NoticeListWrapper, {
      children: [noticeList === null || noticeList === void 0 ? void 0 : noticeList.map(notice => notice && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_molecules__WEBPACK_IMPORTED_MODULE_1__.Concert, {
        imgThumbnail: notice.imgThumbnail,
        authorNickname: notice.user.nickname,
        interestList: notice.interest,
        createdAt: notice.createdAt,
        title: notice.title,
        text: notice.text,
        commentNum: notice.commentNum,
        onClickFunc: () => history.push(`/notice/${notice._id}`)
      }, notice._id, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.NavigationContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.PageNavi, {
          onClick: handlePrevPageClick,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: public_assets_images__WEBPACK_IMPORTED_MODULE_3__.SmallLeftArrowIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: target.map(pageIdx => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.PageNumber, {
              value: `${pageIdx}`,
              onClick: handlePageClick,
              isSelected: currentPage === pageIdx,
              children: `${pageIdx}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, this)
          }, pageIdx, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.PageNavi, {
          onClick: handleNextPageClick,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: public_assets_images__WEBPACK_IMPORTED_MODULE_3__.SmallRightArrowIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoticeList);

/***/ }),

/***/ "./components/organisms/NoticeList/style.ts":
/*!**************************************************!*\
  !*** ./components/organisms/NoticeList/style.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNumber": () => (/* binding */ PageNumber),
/* harmony export */   "PageNavi": () => (/* binding */ PageNavi),
/* harmony export */   "NavigationContainer": () => (/* binding */ NavigationContainer),
/* harmony export */   "NoticeListWrapper": () => (/* binding */ NoticeListWrapper)
/* harmony export */ });
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/atoms */ "./components/atoms/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_2__);



const PageNumber = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_atoms__WEBPACK_IMPORTED_MODULE_0__.Button).withConfig({
  displayName: "style__PageNumber",
  componentId: "sc-wgrmth-0"
})(["", ";color:", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.theme)('font.subhead4_eng'), (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.ifProp)('isSelected', '#03b6ce', '#6f6f6f'));
const PageNavi = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_atoms__WEBPACK_IMPORTED_MODULE_0__.Button).withConfig({
  displayName: "style__PageNavi",
  componentId: "sc-wgrmth-1"
})(["margin:0 25px;"]);
const NavigationContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__NavigationContainer",
  componentId: "sc-wgrmth-2"
})(["display:flex;align-items:center;justify-content:center;margin:60px auto 76px;img{width:24px;height:24px;}ul li{float:left;margin:0 15px;}"]);
const NoticeListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__NoticeListWrapper",
  componentId: "sc-wgrmth-3"
})(["margin-top:60px;"]);

/***/ }),

/***/ "./components/organisms/SearchForm/index.tsx":
/*!***************************************************!*\
  !*** ./components/organisms/SearchForm/index.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/molecules */ "./components/molecules/index.ts");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/images */ "./public/assets/images/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/organisms/SearchForm/style.ts");

var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\organisms\\SearchForm\\index.tsx";






function SearchForm({
  reRenderKeyword,
  selectedCategory,
  contentListNum,
  keywordChange
}) {
  const {
    0: searchValue,
    1: setSearchValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');

  const onChangeKeyword = event => {
    setSearchValue(event.currentTarget.value);
  };

  const onClickSearch = event => {
    event.preventDefault();
    reRenderKeyword && reRenderKeyword(searchValue);
    keywordChange && keywordChange();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.SearchFormWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Main, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: public_assets_images__WEBPACK_IMPORTED_MODULE_3__.DiamondIcon,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: selectedCategory
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_molecules__WEBPACK_IMPORTED_MODULE_1__.SearchBar, {
        onChangeKeyword: onChangeKeyword,
        onClickSearch: onClickSearch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Detail, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [contentListNum, "\uAC1C\uC758 \uCF58\uD150\uCE20"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchForm);

/***/ }),

/***/ "./components/organisms/SearchForm/style.ts":
/*!**************************************************!*\
  !*** ./components/organisms/SearchForm/style.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main),
/* harmony export */   "Detail": () => (/* binding */ Detail),
/* harmony export */   "SearchFormWrapper": () => (/* binding */ SearchFormWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_1__);


const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Main",
  componentId: "sc-17zn63n-0"
})(["display:flex;flex-direction:row;align-items:center;img{width:22px;height:22px;}p{flex:1;margin-left:10px;color:", ";", ";}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 8), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.h2'));
const Detail = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Detail",
  componentId: "sc-17zn63n-1"
})(["margin-top:12px;color:", ";", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 7), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.body3_eng'));
const SearchFormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__SearchFormWrapper",
  componentId: "sc-17zn63n-2"
})(["display:flex;flex-direction:column;height:80px;"]);

/***/ }),

/***/ "./components/organisms/index.ts":
/*!***************************************!*\
  !*** ./components/organisms/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "NoticeHeader": () => (/* reexport safe */ _NoticeHeader__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "NoticeList": () => (/* reexport safe */ _NoticeList__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "SearchForm": () => (/* reexport safe */ _SearchForm__WEBPACK_IMPORTED_MODULE_3__.default)
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./components/organisms/Footer/index.tsx");
/* harmony import */ var _NoticeHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoticeHeader */ "./components/organisms/NoticeHeader/index.tsx");
/* harmony import */ var _NoticeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoticeList */ "./components/organisms/NoticeList/index.tsx");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchForm */ "./components/organisms/SearchForm/index.tsx");





/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": true,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": true,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

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
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/organisms */ "./components/organisms/index.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/GlobalStyles */ "./styles/GlobalStyles.ts");
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/theme */ "./styles/theme.ts");
/* harmony import */ var _public_assets_fonts_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/fonts/index.css */ "./public/assets/fonts/index.css");
/* harmony import */ var _public_assets_fonts_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_fonts_index_css__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "O2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
      theme: styles_theme__WEBPACK_IMPORTED_MODULE_6__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_3__.RecoilRoot, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_organisms__WEBPACK_IMPORTED_MODULE_1__.Footer, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./public/assets/images/index.ts":
/*!***************************************!*\
  !*** ./public/assets/images/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertIcon": () => (/* reexport safe */ _alertIcon_svg__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "AllFeedIcon": () => (/* reexport safe */ _allfeedIcon_svg__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "ArrowDownIcon": () => (/* reexport safe */ _arrowDown_svg__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "ArrowUpIcon": () => (/* reexport safe */ _arrowUp_svg__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "CautionIcon": () => (/* reexport safe */ _cautionIcon_png__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "ChallengeImg": () => (/* reexport safe */ _challengeregister_img_png__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "CharacterBlackIcon": () => (/* reexport safe */ _character_black_Img_svg__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "CharacterColor1Icon": () => (/* reexport safe */ _character_color1_Img_svg__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "CharacterColor2Icon": () => (/* reexport safe */ _character_color2_Img_svg__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "CharacterColor3Icon": () => (/* reexport safe */ _character_color3_Img_svg__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "CheckAllOffIcon": () => (/* reexport safe */ _checkall_off_svg__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "CheckAllOnIcon": () => (/* reexport safe */ _checkall_on_svg__WEBPACK_IMPORTED_MODULE_11__.default),
/* harmony export */   "CheckedIcon": () => (/* reexport safe */ _checkedIcon_svg__WEBPACK_IMPORTED_MODULE_12__.default),
/* harmony export */   "CheckIcon": () => (/* reexport safe */ _checkWhiteIcon_svg__WEBPACK_IMPORTED_MODULE_13__.default),
/* harmony export */   "CheckCircleIcon": () => (/* reexport safe */ _check_circleIcon_png__WEBPACK_IMPORTED_MODULE_14__.default),
/* harmony export */   "CheckOffIcon": () => (/* reexport safe */ _check_off_svg__WEBPACK_IMPORTED_MODULE_15__.default),
/* harmony export */   "CheckOnIcon": () => (/* reexport safe */ _check_on_svg__WEBPACK_IMPORTED_MODULE_16__.default),
/* harmony export */   "ColorScrapIcon": () => (/* reexport safe */ _color_scrapIcon_svg__WEBPACK_IMPORTED_MODULE_17__.default),
/* harmony export */   "CommentIcon": () => (/* reexport safe */ _comment_svg__WEBPACK_IMPORTED_MODULE_18__.default),
/* harmony export */   "CommentCountIcon": () => (/* reexport safe */ _commentIcon_svg__WEBPACK_IMPORTED_MODULE_19__.default),
/* harmony export */   "DeleteIcon": () => (/* reexport safe */ _deleteIcon_svg__WEBPACK_IMPORTED_MODULE_20__.default),
/* harmony export */   "DeleteModalImg": () => (/* reexport safe */ _delete_modal_png__WEBPACK_IMPORTED_MODULE_21__.default),
/* harmony export */   "DiamondIcon": () => (/* reexport safe */ _diamond_svg__WEBPACK_IMPORTED_MODULE_22__.default),
/* harmony export */   "EditIcon": () => (/* reexport safe */ _editIcon_svg__WEBPACK_IMPORTED_MODULE_23__.default),
/* harmony export */   "EmptyBookmarkIcon": () => (/* reexport safe */ _emptyBookmark_svg__WEBPACK_IMPORTED_MODULE_24__.default),
/* harmony export */   "EmptyCheckBoxIcon": () => (/* reexport safe */ _emptyCheckBox_svg__WEBPACK_IMPORTED_MODULE_25__.default),
/* harmony export */   "ErrorIcon": () => (/* reexport safe */ _errIcon_svg__WEBPACK_IMPORTED_MODULE_26__.default),
/* harmony export */   "FilledBookmarkIcon": () => (/* reexport safe */ _filledBookmark_svg__WEBPACK_IMPORTED_MODULE_27__.default),
/* harmony export */   "FilledCheckBoxIcon": () => (/* reexport safe */ _filledCheckBox_svg__WEBPACK_IMPORTED_MODULE_28__.default),
/* harmony export */   "HamburgerIcon": () => (/* reexport safe */ _hamburgerLogo_svg__WEBPACK_IMPORTED_MODULE_29__.default),
/* harmony export */   "HamChallengeIcon": () => (/* reexport safe */ _hamChallengeicon_svg__WEBPACK_IMPORTED_MODULE_30__.default),
/* harmony export */   "HamUnchallengeIcon": () => (/* reexport safe */ _hamUnchallengeicon_svg__WEBPACK_IMPORTED_MODULE_31__.default),
/* harmony export */   "HamArrowDownIcon": () => (/* reexport safe */ _ham_arrowDown_svg__WEBPACK_IMPORTED_MODULE_32__.default),
/* harmony export */   "HamArrowUpIcon": () => (/* reexport safe */ _ham_arrowUp_svg__WEBPACK_IMPORTED_MODULE_33__.default),
/* harmony export */   "HeaderLogoIcon": () => (/* reexport safe */ _header_logo_svg__WEBPACK_IMPORTED_MODULE_34__.default),
/* harmony export */   "O2Icon": () => (/* reexport safe */ _header_logo_svg__WEBPACK_IMPORTED_MODULE_34__.default),
/* harmony export */   "LikeIcon": () => (/* reexport safe */ _heart_svg__WEBPACK_IMPORTED_MODULE_35__.default),
/* harmony export */   "ClickGoodIcon": () => (/* reexport safe */ _heartIcon_svg__WEBPACK_IMPORTED_MODULE_36__.default),
/* harmony export */   "LikeFilledIcon": () => (/* reexport safe */ _heart_filled_svg__WEBPACK_IMPORTED_MODULE_37__.default),
/* harmony export */   "EditWhiteIcon": () => (/* reexport safe */ _Icons_editwhite_svg__WEBPACK_IMPORTED_MODULE_38__.default),
/* harmony export */   "SearchIcon": () => (/* reexport safe */ _icons_search_svg__WEBPACK_IMPORTED_MODULE_39__.default),
/* harmony export */   "JoinErrIcon": () => (/* reexport safe */ _joinInputErrIcon_svg__WEBPACK_IMPORTED_MODULE_40__.default),
/* harmony export */   "LandingBackImg": () => (/* reexport safe */ _landingBack_svg__WEBPACK_IMPORTED_MODULE_41__.default),
/* harmony export */   "LargeLeftArrowIcon": () => (/* reexport safe */ _largeLeftArrow_svg__WEBPACK_IMPORTED_MODULE_42__.default),
/* harmony export */   "LargeRightArrowIcon": () => (/* reexport safe */ _largeRightArrow_svg__WEBPACK_IMPORTED_MODULE_43__.default),
/* harmony export */   "LineIcon": () => (/* reexport safe */ _line_svg__WEBPACK_IMPORTED_MODULE_44__.default),
/* harmony export */   "LoginAlertIcon": () => (/* reexport safe */ _loginAlert_svg__WEBPACK_IMPORTED_MODULE_45__.default),
/* harmony export */   "LoginIcon": () => (/* reexport safe */ _loginIcon_svg__WEBPACK_IMPORTED_MODULE_46__.default),
/* harmony export */   "Logo": () => (/* reexport safe */ _logo_svg__WEBPACK_IMPORTED_MODULE_47__.default),
/* harmony export */   "MainCard1Img": () => (/* reexport safe */ _mainCard1_png__WEBPACK_IMPORTED_MODULE_48__.default),
/* harmony export */   "MainCard2Img": () => (/* reexport safe */ _mainCard2_png__WEBPACK_IMPORTED_MODULE_49__.default),
/* harmony export */   "MainCard3Img": () => (/* reexport safe */ _mainCard3_png__WEBPACK_IMPORTED_MODULE_50__.default),
/* harmony export */   "MainCard4Img": () => (/* reexport safe */ _mainCard4_png__WEBPACK_IMPORTED_MODULE_51__.default),
/* harmony export */   "MenuBarIcon": () => (/* reexport safe */ _menu_barIcon_svg__WEBPACK_IMPORTED_MODULE_52__.default),
/* harmony export */   "MinusIcon": () => (/* reexport safe */ _minusIcon_svg__WEBPACK_IMPORTED_MODULE_53__.default),
/* harmony export */   "ModalCloseIcon": () => (/* reexport safe */ _modalClose_svg__WEBPACK_IMPORTED_MODULE_54__.default),
/* harmony export */   "MoreIcon": () => (/* reexport safe */ _moreButtonIcon_svg__WEBPACK_IMPORTED_MODULE_55__.default),
/* harmony export */   "MoreClickedIcon": () => (/* reexport safe */ _moreIcon_svg__WEBPACK_IMPORTED_MODULE_56__.default),
/* harmony export */   "MoreViewArrowIcon": () => (/* reexport safe */ _moreViewArrow_svg__WEBPACK_IMPORTED_MODULE_57__.default),
/* harmony export */   "MyFeedIcon": () => (/* reexport safe */ _myfeedIcon_svg__WEBPACK_IMPORTED_MODULE_58__.default),
/* harmony export */   "NextIcon": () => (/* reexport safe */ _nextIcon_svg__WEBPACK_IMPORTED_MODULE_60__.default),
/* harmony export */   "NoticeHeaderIcon": () => (/* reexport safe */ _noticeHeaderIcon_svg__WEBPACK_IMPORTED_MODULE_61__.default),
/* harmony export */   "PlusIcon": () => (/* reexport safe */ _plusIcon_svg__WEBPACK_IMPORTED_MODULE_62__.default),
/* harmony export */   "GreyPlusIcon": () => (/* reexport safe */ _plusIconGrey_svg__WEBPACK_IMPORTED_MODULE_63__.default),
/* harmony export */   "GreydfPlusIcon": () => (/* reexport safe */ _plusIcon_dfdfdf_svg__WEBPACK_IMPORTED_MODULE_64__.default),
/* harmony export */   "PrevIcon": () => (/* reexport safe */ _prevCategoryButton_svg__WEBPACK_IMPORTED_MODULE_65__.default),
/* harmony export */   "ScrapIcon": () => (/* reexport safe */ _scrap_svg__WEBPACK_IMPORTED_MODULE_66__.default),
/* harmony export */   "GrayScrapIcon": () => (/* reexport safe */ _scrapIcon_svg__WEBPACK_IMPORTED_MODULE_67__.default),
/* harmony export */   "ScrapFilledIcon": () => (/* reexport safe */ _scrap_filled_svg__WEBPACK_IMPORTED_MODULE_68__.default),
/* harmony export */   "Concert1Img": () => (/* reexport safe */ _sharePhoto1_png__WEBPACK_IMPORTED_MODULE_69__.default),
/* harmony export */   "Concert2Img": () => (/* reexport safe */ _sharePhoto2_png__WEBPACK_IMPORTED_MODULE_70__.default),
/* harmony export */   "SmallLeftArrowIcon": () => (/* reexport safe */ _smallLeftArrow_svg__WEBPACK_IMPORTED_MODULE_71__.default),
/* harmony export */   "SmallRightArrowIcon": () => (/* reexport safe */ _smallRightArrow_svg__WEBPACK_IMPORTED_MODULE_72__.default),
/* harmony export */   "SpeakerBadge1Img": () => (/* reexport safe */ _speakerBadge1_png__WEBPACK_IMPORTED_MODULE_73__.default),
/* harmony export */   "SpeakerBadge2Img": () => (/* reexport safe */ _speakerBadge2_png__WEBPACK_IMPORTED_MODULE_74__.default),
/* harmony export */   "SpeakerBadge3Img": () => (/* reexport safe */ _speakerBadge3_png__WEBPACK_IMPORTED_MODULE_75__.default),
/* harmony export */   "ThumbnailCommentIcon": () => (/* reexport safe */ _thumnailComment_svg__WEBPACK_IMPORTED_MODULE_76__.default),
/* harmony export */   "ThumbnailLikeIcon": () => (/* reexport safe */ _thumnailHeart_svg__WEBPACK_IMPORTED_MODULE_77__.default),
/* harmony export */   "UserImg": () => (/* reexport safe */ _userImage_png__WEBPACK_IMPORTED_MODULE_78__.default),
/* harmony export */   "WriteIcon": () => (/* reexport safe */ _writeIcon_svg__WEBPACK_IMPORTED_MODULE_79__.default),
/* harmony export */   "XIcon": () => (/* reexport safe */ _xIcon_svg__WEBPACK_IMPORTED_MODULE_80__.default)
/* harmony export */ });
/* harmony import */ var _alertIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alertIcon.svg */ "./public/assets/images/alertIcon.svg");
/* harmony import */ var _allfeedIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allfeedIcon.svg */ "./public/assets/images/allfeedIcon.svg");
/* harmony import */ var _arrowDown_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrowDown.svg */ "./public/assets/images/arrowDown.svg");
/* harmony import */ var _arrowUp_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arrowUp.svg */ "./public/assets/images/arrowUp.svg");
/* harmony import */ var _cautionIcon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cautionIcon.png */ "./public/assets/images/cautionIcon.png");
/* harmony import */ var _challengeregister_img_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./challengeregister_img.png */ "./public/assets/images/challengeregister_img.png");
/* harmony import */ var _character_black_Img_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character_black_Img.svg */ "./public/assets/images/character_black_Img.svg");
/* harmony import */ var _character_color1_Img_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./character_color1_Img.svg */ "./public/assets/images/character_color1_Img.svg");
/* harmony import */ var _character_color2_Img_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./character_color2_Img.svg */ "./public/assets/images/character_color2_Img.svg");
/* harmony import */ var _character_color3_Img_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./character_color3_Img.svg */ "./public/assets/images/character_color3_Img.svg");
/* harmony import */ var _checkall_off_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkall_off.svg */ "./public/assets/images/checkall_off.svg");
/* harmony import */ var _checkall_on_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkall_on.svg */ "./public/assets/images/checkall_on.svg");
/* harmony import */ var _checkedIcon_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkedIcon.svg */ "./public/assets/images/checkedIcon.svg");
/* harmony import */ var _checkWhiteIcon_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checkWhiteIcon.svg */ "./public/assets/images/checkWhiteIcon.svg");
/* harmony import */ var _check_circleIcon_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./check_circleIcon.png */ "./public/assets/images/check_circleIcon.png");
/* harmony import */ var _check_off_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./check_off.svg */ "./public/assets/images/check_off.svg");
/* harmony import */ var _check_on_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./check_on.svg */ "./public/assets/images/check_on.svg");
/* harmony import */ var _color_scrapIcon_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./color_scrapIcon.svg */ "./public/assets/images/color_scrapIcon.svg");
/* harmony import */ var _comment_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comment.svg */ "./public/assets/images/comment.svg");
/* harmony import */ var _commentIcon_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./commentIcon.svg */ "./public/assets/images/commentIcon.svg");
/* harmony import */ var _deleteIcon_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./deleteIcon.svg */ "./public/assets/images/deleteIcon.svg");
/* harmony import */ var _delete_modal_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./delete_modal.png */ "./public/assets/images/delete_modal.png");
/* harmony import */ var _diamond_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./diamond.svg */ "./public/assets/images/diamond.svg");
/* harmony import */ var _editIcon_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./editIcon.svg */ "./public/assets/images/editIcon.svg");
/* harmony import */ var _emptyBookmark_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./emptyBookmark.svg */ "./public/assets/images/emptyBookmark.svg");
/* harmony import */ var _emptyCheckBox_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./emptyCheckBox.svg */ "./public/assets/images/emptyCheckBox.svg");
/* harmony import */ var _errIcon_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./errIcon.svg */ "./public/assets/images/errIcon.svg");
/* harmony import */ var _filledBookmark_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./filledBookmark.svg */ "./public/assets/images/filledBookmark.svg");
/* harmony import */ var _filledCheckBox_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./filledCheckBox.svg */ "./public/assets/images/filledCheckBox.svg");
/* harmony import */ var _hamburgerLogo_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./hamburgerLogo.svg */ "./public/assets/images/hamburgerLogo.svg");
/* harmony import */ var _hamChallengeicon_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./hamChallengeicon.svg */ "./public/assets/images/hamChallengeicon.svg");
/* harmony import */ var _hamUnchallengeicon_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./hamUnchallengeicon.svg */ "./public/assets/images/hamUnchallengeicon.svg");
/* harmony import */ var _ham_arrowDown_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ham_arrowDown.svg */ "./public/assets/images/ham_arrowDown.svg");
/* harmony import */ var _ham_arrowUp_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ham_arrowUp.svg */ "./public/assets/images/ham_arrowUp.svg");
/* harmony import */ var _header_logo_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./header_logo.svg */ "./public/assets/images/header_logo.svg");
/* harmony import */ var _heart_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./heart.svg */ "./public/assets/images/heart.svg");
/* harmony import */ var _heartIcon_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./heartIcon.svg */ "./public/assets/images/heartIcon.svg");
/* harmony import */ var _heart_filled_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./heart_filled.svg */ "./public/assets/images/heart_filled.svg");
/* harmony import */ var _Icons_editwhite_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Icons_editwhite.svg */ "./public/assets/images/Icons_editwhite.svg");
/* harmony import */ var _icons_search_svg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./icons_search.svg */ "./public/assets/images/icons_search.svg");
/* harmony import */ var _joinInputErrIcon_svg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./joinInputErrIcon.svg */ "./public/assets/images/joinInputErrIcon.svg");
/* harmony import */ var _landingBack_svg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./landingBack.svg */ "./public/assets/images/landingBack.svg");
/* harmony import */ var _largeLeftArrow_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./largeLeftArrow.svg */ "./public/assets/images/largeLeftArrow.svg");
/* harmony import */ var _largeRightArrow_svg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./largeRightArrow.svg */ "./public/assets/images/largeRightArrow.svg");
/* harmony import */ var _line_svg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./line.svg */ "./public/assets/images/line.svg");
/* harmony import */ var _loginAlert_svg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./loginAlert.svg */ "./public/assets/images/loginAlert.svg");
/* harmony import */ var _loginIcon_svg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./loginIcon.svg */ "./public/assets/images/loginIcon.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./logo.svg */ "./public/assets/images/logo.svg");
/* harmony import */ var _mainCard1_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./mainCard1.png */ "./public/assets/images/mainCard1.png");
/* harmony import */ var _mainCard2_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./mainCard2.png */ "./public/assets/images/mainCard2.png");
/* harmony import */ var _mainCard3_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./mainCard3.png */ "./public/assets/images/mainCard3.png");
/* harmony import */ var _mainCard4_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./mainCard4.png */ "./public/assets/images/mainCard4.png");
/* harmony import */ var _menu_barIcon_svg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./menu_barIcon.svg */ "./public/assets/images/menu_barIcon.svg");
/* harmony import */ var _minusIcon_svg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./minusIcon.svg */ "./public/assets/images/minusIcon.svg");
/* harmony import */ var _modalClose_svg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./modalClose.svg */ "./public/assets/images/modalClose.svg");
/* harmony import */ var _moreButtonIcon_svg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./moreButtonIcon.svg */ "./public/assets/images/moreButtonIcon.svg");
/* harmony import */ var _moreIcon_svg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./moreIcon.svg */ "./public/assets/images/moreIcon.svg");
/* harmony import */ var _moreViewArrow_svg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./moreViewArrow.svg */ "./public/assets/images/moreViewArrow.svg");
/* harmony import */ var _myfeedIcon_svg__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./myfeedIcon.svg */ "./public/assets/images/myfeedIcon.svg");
/* harmony import */ var _mypage__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./mypage */ "./public/assets/images/mypage/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _mypage__WEBPACK_IMPORTED_MODULE_59__) if(["default","AlertIcon","AllFeedIcon","ArrowDownIcon","ArrowUpIcon","CautionIcon","ChallengeImg","CharacterBlackIcon","CharacterColor1Icon","CharacterColor2Icon","CharacterColor3Icon","CheckAllOffIcon","CheckAllOnIcon","CheckedIcon","CheckIcon","CheckCircleIcon","CheckOffIcon","CheckOnIcon","ColorScrapIcon","CommentIcon","CommentCountIcon","DeleteIcon","DeleteModalImg","DiamondIcon","EditIcon","EmptyBookmarkIcon","EmptyCheckBoxIcon","ErrorIcon","FilledBookmarkIcon","FilledCheckBoxIcon","HamburgerIcon","HamChallengeIcon","HamUnchallengeIcon","HamArrowDownIcon","HamArrowUpIcon","HeaderLogoIcon","O2Icon","LikeIcon","ClickGoodIcon","LikeFilledIcon","EditWhiteIcon","SearchIcon","JoinErrIcon","LandingBackImg","LargeLeftArrowIcon","LargeRightArrowIcon","LineIcon","LoginAlertIcon","LoginIcon","Logo","MainCard1Img","MainCard2Img","MainCard3Img","MainCard4Img","MenuBarIcon","MinusIcon","ModalCloseIcon","MoreIcon","MoreClickedIcon","MoreViewArrowIcon","MyFeedIcon","NextIcon","NoticeHeaderIcon","PlusIcon","GreyPlusIcon","GreydfPlusIcon","PrevIcon","ScrapIcon","GrayScrapIcon","ScrapFilledIcon","Concert1Img","Concert2Img","SmallLeftArrowIcon","SmallRightArrowIcon","SpeakerBadge1Img","SpeakerBadge2Img","SpeakerBadge3Img","ThumbnailCommentIcon","ThumbnailLikeIcon","UserImg","WriteIcon","XIcon"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _mypage__WEBPACK_IMPORTED_MODULE_59__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _nextIcon_svg__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./nextIcon.svg */ "./public/assets/images/nextIcon.svg");
/* harmony import */ var _noticeHeaderIcon_svg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./noticeHeaderIcon.svg */ "./public/assets/images/noticeHeaderIcon.svg");
/* harmony import */ var _plusIcon_svg__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./plusIcon.svg */ "./public/assets/images/plusIcon.svg");
/* harmony import */ var _plusIconGrey_svg__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./plusIconGrey.svg */ "./public/assets/images/plusIconGrey.svg");
/* harmony import */ var _plusIcon_dfdfdf_svg__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./plusIcon_dfdfdf.svg */ "./public/assets/images/plusIcon_dfdfdf.svg");
/* harmony import */ var _prevCategoryButton_svg__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./prevCategoryButton.svg */ "./public/assets/images/prevCategoryButton.svg");
/* harmony import */ var _scrap_svg__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./scrap.svg */ "./public/assets/images/scrap.svg");
/* harmony import */ var _scrapIcon_svg__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./scrapIcon.svg */ "./public/assets/images/scrapIcon.svg");
/* harmony import */ var _scrap_filled_svg__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./scrap_filled.svg */ "./public/assets/images/scrap_filled.svg");
/* harmony import */ var _sharePhoto1_png__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./sharePhoto1.png */ "./public/assets/images/sharePhoto1.png");
/* harmony import */ var _sharePhoto2_png__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./sharePhoto2.png */ "./public/assets/images/sharePhoto2.png");
/* harmony import */ var _smallLeftArrow_svg__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./smallLeftArrow.svg */ "./public/assets/images/smallLeftArrow.svg");
/* harmony import */ var _smallRightArrow_svg__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./smallRightArrow.svg */ "./public/assets/images/smallRightArrow.svg");
/* harmony import */ var _speakerBadge1_png__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./speakerBadge1.png */ "./public/assets/images/speakerBadge1.png");
/* harmony import */ var _speakerBadge2_png__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./speakerBadge2.png */ "./public/assets/images/speakerBadge2.png");
/* harmony import */ var _speakerBadge3_png__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./speakerBadge3.png */ "./public/assets/images/speakerBadge3.png");
/* harmony import */ var _thumnailComment_svg__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./thumnailComment.svg */ "./public/assets/images/thumnailComment.svg");
/* harmony import */ var _thumnailHeart_svg__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./thumnailHeart.svg */ "./public/assets/images/thumnailHeart.svg");
/* harmony import */ var _userImage_png__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./userImage.png */ "./public/assets/images/userImage.png");
/* harmony import */ var _writeIcon_svg__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./writeIcon.svg */ "./public/assets/images/writeIcon.svg");
/* harmony import */ var _xIcon_svg__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./xIcon.svg */ "./public/assets/images/xIcon.svg");


















































































/***/ }),

/***/ "./public/assets/images/mypage/index.ts":
/*!**********************************************!*\
  !*** ./public/assets/images/mypage/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Percent20Icon": () => (/* reexport safe */ _0_20img_svg__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Percent100Icon": () => (/* reexport safe */ _100img_svg__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Percent40Icon": () => (/* reexport safe */ _21_50img_svg__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "Percent60Icon": () => (/* reexport safe */ _51_80img_svg__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Percent80Icon": () => (/* reexport safe */ _81_99img_svg__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "CommunicationKingIcon": () => (/* reexport safe */ _communicationKing_svg__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "CommunicationKingFillIcon": () => (/* reexport safe */ _communicationKing_fill_svg__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "MyPageEditIcon": () => (/* reexport safe */ _edit_svg__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "EmpathizingIcon": () => (/* reexport safe */ _empathizing_svg__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "EmpathizingFillIcon": () => (/* reexport safe */ _empathizing_fill_svg__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "FirstCommentIcon": () => (/* reexport safe */ _firstComment_svg__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "FirstCommentFillIcon": () => (/* reexport safe */ _firstComment_fill_svg__WEBPACK_IMPORTED_MODULE_11__.default),
/* harmony export */   "GetChallengeIcon": () => (/* reexport safe */ _getChallenge_svg__WEBPACK_IMPORTED_MODULE_12__.default),
/* harmony export */   "GetChallengeFillIcon": () => (/* reexport safe */ _getChallenge_fill_svg__WEBPACK_IMPORTED_MODULE_13__.default),
/* harmony export */   "GrowingTogetherIcon": () => (/* reexport safe */ _growingTogether_svg__WEBPACK_IMPORTED_MODULE_14__.default),
/* harmony export */   "GrowingTogetherFillIcon": () => (/* reexport safe */ _growingTogether_fill_svg__WEBPACK_IMPORTED_MODULE_15__.default),
/* harmony export */   "NaturalBornO2Icon": () => (/* reexport safe */ _naturalBornO2_svg__WEBPACK_IMPORTED_MODULE_16__.default),
/* harmony export */   "NaturalBornO2FillIcon": () => (/* reexport safe */ _naturalBornO2_fill_svg__WEBPACK_IMPORTED_MODULE_17__.default),
/* harmony export */   "ReadyForCommunicationIcon": () => (/* reexport safe */ _readyForCommunication_svg__WEBPACK_IMPORTED_MODULE_18__.default),
/* harmony export */   "ReadyForCommunicationFillIcon": () => (/* reexport safe */ _readyForCommunication_fill_svg__WEBPACK_IMPORTED_MODULE_19__.default),
/* harmony export */   "ReadyForGrowIcon": () => (/* reexport safe */ _readyForGrow_svg__WEBPACK_IMPORTED_MODULE_20__.default),
/* harmony export */   "ReadyForGrowFillIcon": () => (/* reexport safe */ _readyForGrow_fill_svg__WEBPACK_IMPORTED_MODULE_21__.default),
/* harmony export */   "ShyEmailIcon": () => (/* reexport safe */ _shyEmail_svg__WEBPACK_IMPORTED_MODULE_22__.default),
/* harmony export */   "ShyEmailFillIcon": () => (/* reexport safe */ _shyEmail_fill_svg__WEBPACK_IMPORTED_MODULE_23__.default),
/* harmony export */   "SympathyKingIcon": () => (/* reexport safe */ _sympathyKing_svg__WEBPACK_IMPORTED_MODULE_24__.default),
/* harmony export */   "SympathyKingFillIcon": () => (/* reexport safe */ _sympathyKing_fill_svg__WEBPACK_IMPORTED_MODULE_25__.default),
/* harmony export */   "UsefulLearnMyselfIcon": () => (/* reexport safe */ _usefulLearnMyself_svg__WEBPACK_IMPORTED_MODULE_26__.default),
/* harmony export */   "UsefulLearnMyselfFillIcon": () => (/* reexport safe */ _usefulLearnMyself_fill_svg__WEBPACK_IMPORTED_MODULE_27__.default),
/* harmony export */   "UsefulShareTogetherIcon": () => (/* reexport safe */ _usefulShareTogether_svg__WEBPACK_IMPORTED_MODULE_28__.default),
/* harmony export */   "UsefulShareTogetherFillIcon": () => (/* reexport safe */ _usefulShareTogether_fill_svg__WEBPACK_IMPORTED_MODULE_29__.default),
/* harmony export */   "WelcomeToO2Icon": () => (/* reexport safe */ _welcomeToO2_svg__WEBPACK_IMPORTED_MODULE_30__.default),
/* harmony export */   "WelcomeToO2FillIcon": () => (/* reexport safe */ _welcomeToO2_fill_svg__WEBPACK_IMPORTED_MODULE_31__.default)
/* harmony export */ });
/* harmony import */ var _0_20img_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./0-20img.svg */ "./public/assets/images/mypage/0-20img.svg");
/* harmony import */ var _100img_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./100img.svg */ "./public/assets/images/mypage/100img.svg");
/* harmony import */ var _21_50img_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./21-50img.svg */ "./public/assets/images/mypage/21-50img.svg");
/* harmony import */ var _51_80img_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./51-80img.svg */ "./public/assets/images/mypage/51-80img.svg");
/* harmony import */ var _81_99img_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./81-99img.svg */ "./public/assets/images/mypage/81-99img.svg");
/* harmony import */ var _communicationKing_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./communicationKing.svg */ "./public/assets/images/mypage/communicationKing.svg");
/* harmony import */ var _communicationKing_fill_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./communicationKing_fill.svg */ "./public/assets/images/mypage/communicationKing_fill.svg");
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit.svg */ "./public/assets/images/mypage/edit.svg");
/* harmony import */ var _empathizing_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./empathizing.svg */ "./public/assets/images/mypage/empathizing.svg");
/* harmony import */ var _empathizing_fill_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./empathizing_fill.svg */ "./public/assets/images/mypage/empathizing_fill.svg");
/* harmony import */ var _firstComment_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./firstComment.svg */ "./public/assets/images/mypage/firstComment.svg");
/* harmony import */ var _firstComment_fill_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./firstComment_fill.svg */ "./public/assets/images/mypage/firstComment_fill.svg");
/* harmony import */ var _getChallenge_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getChallenge.svg */ "./public/assets/images/mypage/getChallenge.svg");
/* harmony import */ var _getChallenge_fill_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getChallenge_fill.svg */ "./public/assets/images/mypage/getChallenge_fill.svg");
/* harmony import */ var _growingTogether_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./growingTogether.svg */ "./public/assets/images/mypage/growingTogether.svg");
/* harmony import */ var _growingTogether_fill_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./growingTogether_fill.svg */ "./public/assets/images/mypage/growingTogether_fill.svg");
/* harmony import */ var _naturalBornO2_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./naturalBornO2.svg */ "./public/assets/images/mypage/naturalBornO2.svg");
/* harmony import */ var _naturalBornO2_fill_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./naturalBornO2_fill.svg */ "./public/assets/images/mypage/naturalBornO2_fill.svg");
/* harmony import */ var _readyForCommunication_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./readyForCommunication.svg */ "./public/assets/images/mypage/readyForCommunication.svg");
/* harmony import */ var _readyForCommunication_fill_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./readyForCommunication_fill.svg */ "./public/assets/images/mypage/readyForCommunication_fill.svg");
/* harmony import */ var _readyForGrow_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./readyForGrow.svg */ "./public/assets/images/mypage/readyForGrow.svg");
/* harmony import */ var _readyForGrow_fill_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./readyForGrow_fill.svg */ "./public/assets/images/mypage/readyForGrow_fill.svg");
/* harmony import */ var _shyEmail_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shyEmail.svg */ "./public/assets/images/mypage/shyEmail.svg");
/* harmony import */ var _shyEmail_fill_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shyEmail_fill.svg */ "./public/assets/images/mypage/shyEmail_fill.svg");
/* harmony import */ var _sympathyKing_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sympathyKing.svg */ "./public/assets/images/mypage/sympathyKing.svg");
/* harmony import */ var _sympathyKing_fill_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sympathyKing_fill.svg */ "./public/assets/images/mypage/sympathyKing_fill.svg");
/* harmony import */ var _usefulLearnMyself_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./usefulLearnMyself.svg */ "./public/assets/images/mypage/usefulLearnMyself.svg");
/* harmony import */ var _usefulLearnMyself_fill_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./usefulLearnMyself_fill.svg */ "./public/assets/images/mypage/usefulLearnMyself_fill.svg");
/* harmony import */ var _usefulShareTogether_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./usefulShareTogether.svg */ "./public/assets/images/mypage/usefulShareTogether.svg");
/* harmony import */ var _usefulShareTogether_fill_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./usefulShareTogether_fill.svg */ "./public/assets/images/mypage/usefulShareTogether_fill.svg");
/* harmony import */ var _welcomeToO2_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./welcomeToO2.svg */ "./public/assets/images/mypage/welcomeToO2.svg");
/* harmony import */ var _welcomeToO2_fill_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./welcomeToO2_fill.svg */ "./public/assets/images/mypage/welcomeToO2_fill.svg");

































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

/***/ "./public/assets/images/Icons_editwhite.svg":
/*!**************************************************!*\
  !*** ./public/assets/images/Icons_editwhite.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/Icons_editwhite.2eabe479ed32e625cde94939ccb7e1aa.svg","height":45,"width":45});

/***/ }),

/***/ "./public/assets/images/alertIcon.svg":
/*!********************************************!*\
  !*** ./public/assets/images/alertIcon.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/alertIcon.31457a3d8da052831abcc8e1c20102ec.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/allfeedIcon.svg":
/*!**********************************************!*\
  !*** ./public/assets/images/allfeedIcon.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/allfeedIcon.a41a19396b9d13d8902e3a809005a9a6.svg","height":94,"width":94});

/***/ }),

/***/ "./public/assets/images/arrowDown.svg":
/*!********************************************!*\
  !*** ./public/assets/images/arrowDown.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/arrowDown.5a2301177f1ea487579177c42f99c827.svg","height":11,"width":15});

/***/ }),

/***/ "./public/assets/images/arrowUp.svg":
/*!******************************************!*\
  !*** ./public/assets/images/arrowUp.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/arrowUp.71a1eba52d19d9cba45c8f92b6d9fe32.svg","height":10,"width":15});

/***/ }),

/***/ "./public/assets/images/cautionIcon.png":
/*!**********************************************!*\
  !*** ./public/assets/images/cautionIcon.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/cautionIcon.7016abe85f1bbebb03e19babd2c42ed2.png","height":18,"width":18,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FcautionIcon.7016abe85f1bbebb03e19babd2c42ed2.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/challengeregister_img.png":
/*!********************************************************!*\
  !*** ./public/assets/images/challengeregister_img.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/challengeregister_img.71419c981443d1cd2a0037576c4210c2.png","height":1414,"width":677,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Fchallengeregister_img.71419c981443d1cd2a0037576c4210c2.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/character_black_Img.svg":
/*!******************************************************!*\
  !*** ./public/assets/images/character_black_Img.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/character_black_Img.ff45c6e844c808bb5d2f6c31c657aab6.svg","height":55,"width":55});

/***/ }),

/***/ "./public/assets/images/character_color1_Img.svg":
/*!*******************************************************!*\
  !*** ./public/assets/images/character_color1_Img.svg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/character_color1_Img.d5c9b105485d748716315ec76865ac0f.svg","height":55,"width":55});

/***/ }),

/***/ "./public/assets/images/character_color2_Img.svg":
/*!*******************************************************!*\
  !*** ./public/assets/images/character_color2_Img.svg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/character_color2_Img.60f7a561af901d1f50796bcf10e64f11.svg","height":86,"width":130});

/***/ }),

/***/ "./public/assets/images/character_color3_Img.svg":
/*!*******************************************************!*\
  !*** ./public/assets/images/character_color3_Img.svg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/character_color3_Img.2722e369242467729363ab3fda2e0d92.svg","height":86,"width":130});

/***/ }),

/***/ "./public/assets/images/checkWhiteIcon.svg":
/*!*************************************************!*\
  !*** ./public/assets/images/checkWhiteIcon.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/checkWhiteIcon.ad8e38f97e5b5f455d2773a885e5cf18.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/check_circleIcon.png":
/*!***************************************************!*\
  !*** ./public/assets/images/check_circleIcon.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/check_circleIcon.00722cc2dc122f18cddf646de82ba1ea.png","height":90,"width":90,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Fcheck_circleIcon.00722cc2dc122f18cddf646de82ba1ea.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/check_off.svg":
/*!********************************************!*\
  !*** ./public/assets/images/check_off.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/check_off.bd1f1274c05b4e725226e4bccb30e642.svg","height":13,"width":18});

/***/ }),

/***/ "./public/assets/images/check_on.svg":
/*!*******************************************!*\
  !*** ./public/assets/images/check_on.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/check_on.30deeae8612f0baf4a5fb3596145084c.svg","height":13,"width":18});

/***/ }),

/***/ "./public/assets/images/checkall_off.svg":
/*!***********************************************!*\
  !*** ./public/assets/images/checkall_off.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/checkall_off.982f43b23dccd1a7a9a83f67aaa305f9.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/checkall_on.svg":
/*!**********************************************!*\
  !*** ./public/assets/images/checkall_on.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/checkall_on.99db0389c3a5ddc1f40c0e83cd6a32cf.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/checkedIcon.svg":
/*!**********************************************!*\
  !*** ./public/assets/images/checkedIcon.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/checkedIcon.5cfc01fab562e7bfccbdbfd1786f9c42.svg","height":26,"width":35});

/***/ }),

/***/ "./public/assets/images/color_scrapIcon.svg":
/*!**************************************************!*\
  !*** ./public/assets/images/color_scrapIcon.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/color_scrapIcon.b49c96edf1f80950f701f6911ad3be58.svg","height":28,"width":28});

/***/ }),

/***/ "./public/assets/images/comment.svg":
/*!******************************************!*\
  !*** ./public/assets/images/comment.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/comment.9912af1888929b0e56176a98abeff02b.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/commentIcon.svg":
/*!**********************************************!*\
  !*** ./public/assets/images/commentIcon.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/commentIcon.8e6d44002f5a4431e0b84df5e3359889.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/deleteIcon.svg":
/*!*********************************************!*\
  !*** ./public/assets/images/deleteIcon.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/deleteIcon.1207113d8f721c2cd9351ffc6ae3e16e.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/delete_modal.png":
/*!***********************************************!*\
  !*** ./public/assets/images/delete_modal.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/delete_modal.0aae97314cb0909831d40fb5f73fd132.png","height":90,"width":90,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2Fdelete_modal.0aae97314cb0909831d40fb5f73fd132.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/diamond.svg":
/*!******************************************!*\
  !*** ./public/assets/images/diamond.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/diamond.862c88b4bac892f5ff4aad08503097b0.svg","height":22,"width":22});

/***/ }),

/***/ "./public/assets/images/editIcon.svg":
/*!*******************************************!*\
  !*** ./public/assets/images/editIcon.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/editIcon.c9bf3c12a771aab47900a3c49d8ad12f.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/emptyBookmark.svg":
/*!************************************************!*\
  !*** ./public/assets/images/emptyBookmark.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/emptyBookmark.e2aa2b42e305f706a62af5db18a37b91.svg","height":28,"width":28});

/***/ }),

/***/ "./public/assets/images/emptyCheckBox.svg":
/*!************************************************!*\
  !*** ./public/assets/images/emptyCheckBox.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/emptyCheckBox.80d2a8e2b354f8da2030b71fe4a18f51.svg","height":20,"width":20});

/***/ }),

/***/ "./public/assets/images/errIcon.svg":
/*!******************************************!*\
  !*** ./public/assets/images/errIcon.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/errIcon.2fc6e204e0086a1808fe926f9d0d40e0.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/filledBookmark.svg":
/*!*************************************************!*\
  !*** ./public/assets/images/filledBookmark.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/filledBookmark.74d98168f2c13df888ac132d63d269d7.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/filledCheckBox.svg":
/*!*************************************************!*\
  !*** ./public/assets/images/filledCheckBox.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/filledCheckBox.c3afe959cb819e0cd50228f2a69e4e8a.svg","height":20,"width":20});

/***/ }),

/***/ "./public/assets/images/hamChallengeicon.svg":
/*!***************************************************!*\
  !*** ./public/assets/images/hamChallengeicon.svg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/hamChallengeicon.da05cfdf71f2352c1f52e9e1d213febe.svg","height":20,"width":20});

/***/ }),

/***/ "./public/assets/images/hamUnchallengeicon.svg":
/*!*****************************************************!*\
  !*** ./public/assets/images/hamUnchallengeicon.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/hamUnchallengeicon.96ec186dd67cf6f7891a572e9f26c6b0.svg","height":20,"width":20});

/***/ }),

/***/ "./public/assets/images/ham_arrowDown.svg":
/*!************************************************!*\
  !*** ./public/assets/images/ham_arrowDown.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/ham_arrowDown.aaa3bc1a4c66182796816dcafe63694f.svg","height":20,"width":20});

/***/ }),

/***/ "./public/assets/images/ham_arrowUp.svg":
/*!**********************************************!*\
  !*** ./public/assets/images/ham_arrowUp.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/ham_arrowUp.ae8e83b16b7f7bf94daff86c29dd87d3.svg","height":20,"width":20});

/***/ }),

/***/ "./public/assets/images/hamburgerLogo.svg":
/*!************************************************!*\
  !*** ./public/assets/images/hamburgerLogo.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/hamburgerLogo.9ca0e2a5cc312f1eed43b6d9436b52e1.svg","height":32,"width":32});

/***/ }),

/***/ "./public/assets/images/header_logo.svg":
/*!**********************************************!*\
  !*** ./public/assets/images/header_logo.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/header_logo.a48c0da0e80cf216956577e7bae87f1a.svg","height":30,"width":32});

/***/ }),

/***/ "./public/assets/images/heart.svg":
/*!****************************************!*\
  !*** ./public/assets/images/heart.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/heart.6296ac8d7a4d2ac44a39bc2f785ad2ea.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/heartIcon.svg":
/*!********************************************!*\
  !*** ./public/assets/images/heartIcon.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/heartIcon.6844285bf330f0c8e69e6d5b57b34660.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/heart_filled.svg":
/*!***********************************************!*\
  !*** ./public/assets/images/heart_filled.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/heart_filled.fdffe974dde4d350c1d4df4a96d64bd4.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/icons_search.svg":
/*!***********************************************!*\
  !*** ./public/assets/images/icons_search.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/icons_search.6b3706b28dc6d000a86513f3e22f0f2d.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/joinInputErrIcon.svg":
/*!***************************************************!*\
  !*** ./public/assets/images/joinInputErrIcon.svg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/joinInputErrIcon.2fc6e204e0086a1808fe926f9d0d40e0.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/landingBack.svg":
/*!**********************************************!*\
  !*** ./public/assets/images/landingBack.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/landingBack.5869e0c633895bba70d47cbc94757bb4.svg","height":6114,"width":1920});

/***/ }),

/***/ "./public/assets/images/largeLeftArrow.svg":
/*!*************************************************!*\
  !*** ./public/assets/images/largeLeftArrow.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/largeLeftArrow.208ee9f60414d99cf4759e742797f35c.svg","height":48,"width":48});

/***/ }),

/***/ "./public/assets/images/largeRightArrow.svg":
/*!**************************************************!*\
  !*** ./public/assets/images/largeRightArrow.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/largeRightArrow.aee3f1b8d52da1631c36ab5be66c382c.svg","height":48,"width":48});

/***/ }),

/***/ "./public/assets/images/line.svg":
/*!***************************************!*\
  !*** ./public/assets/images/line.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/line.d1fb654754f7ee79c6d93cc05b874f2d.svg","height":16,"width":1});

/***/ }),

/***/ "./public/assets/images/loginAlert.svg":
/*!*********************************************!*\
  !*** ./public/assets/images/loginAlert.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/loginAlert.be5686c9f1b820a72d9fc1160ef8a6ff.svg","height":90,"width":90});

/***/ }),

/***/ "./public/assets/images/loginIcon.svg":
/*!********************************************!*\
  !*** ./public/assets/images/loginIcon.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/loginIcon.0889a8ea4bef219697af53a1258731cb.svg","height":20,"width":20});

/***/ }),

/***/ "./public/assets/images/logo.svg":
/*!***************************************!*\
  !*** ./public/assets/images/logo.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/logo.e7bb2505a77b8f53e107108c31993568.svg","height":100,"width":100});

/***/ }),

/***/ "./public/assets/images/mainCard1.png":
/*!********************************************!*\
  !*** ./public/assets/images/mainCard1.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mainCard1.aa262c13da6fcdca8285b62cd689630f.png","height":921,"width":906,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FmainCard1.aa262c13da6fcdca8285b62cd689630f.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/mainCard2.png":
/*!********************************************!*\
  !*** ./public/assets/images/mainCard2.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mainCard2.faaf2199d1d6539caf1f920d5c5b9d0c.png","height":921,"width":906,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FmainCard2.faaf2199d1d6539caf1f920d5c5b9d0c.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/mainCard3.png":
/*!********************************************!*\
  !*** ./public/assets/images/mainCard3.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mainCard3.8e97761d767f9305035d7d960f4f1c71.png","height":921,"width":906,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FmainCard3.8e97761d767f9305035d7d960f4f1c71.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/mainCard4.png":
/*!********************************************!*\
  !*** ./public/assets/images/mainCard4.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mainCard4.d5450a188c12b85d148662c38e2c3f74.png","height":921,"width":906,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FmainCard4.d5450a188c12b85d148662c38e2c3f74.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/menu_barIcon.svg":
/*!***********************************************!*\
  !*** ./public/assets/images/menu_barIcon.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/menu_barIcon.41397448a563a7fb88d04721d24b6e40.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/minusIcon.svg":
/*!********************************************!*\
  !*** ./public/assets/images/minusIcon.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/minusIcon.d96544204c46a11bb60fcb1396542794.svg","height":20,"width":20});

/***/ }),

/***/ "./public/assets/images/modalClose.svg":
/*!*********************************************!*\
  !*** ./public/assets/images/modalClose.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/modalClose.1cb0e1a8985247c503fa48c6c7e47c93.svg","height":18,"width":18});

/***/ }),

/***/ "./public/assets/images/moreButtonIcon.svg":
/*!*************************************************!*\
  !*** ./public/assets/images/moreButtonIcon.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/moreButtonIcon.78e009e7ec94df704f3582ecc7f22b08.svg","height":60,"width":60});

/***/ }),

/***/ "./public/assets/images/moreIcon.svg":
/*!*******************************************!*\
  !*** ./public/assets/images/moreIcon.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/moreIcon.999abcdea275d37c5ac15a1d07a66495.svg","height":60,"width":60});

/***/ }),

/***/ "./public/assets/images/moreViewArrow.svg":
/*!************************************************!*\
  !*** ./public/assets/images/moreViewArrow.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/moreViewArrow.6128bbec0a5fbe766f76f0e8d394aaab.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/myfeedIcon.svg":
/*!*********************************************!*\
  !*** ./public/assets/images/myfeedIcon.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/myfeedIcon.07f0095a0737c3597e576a5db79cdf68.svg","height":94,"width":94});

/***/ }),

/***/ "./public/assets/images/mypage/0-20img.svg":
/*!*************************************************!*\
  !*** ./public/assets/images/mypage/0-20img.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/0-20img.9eb67cbe8e2bf8780f6f11b5c1e0ea56.svg","height":115,"width":180});

/***/ }),

/***/ "./public/assets/images/mypage/100img.svg":
/*!************************************************!*\
  !*** ./public/assets/images/mypage/100img.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/100img.1a45e02e2753a37b3bedb0e6cf69e192.svg","height":115,"width":180});

/***/ }),

/***/ "./public/assets/images/mypage/21-50img.svg":
/*!**************************************************!*\
  !*** ./public/assets/images/mypage/21-50img.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/21-50img.ee53bb6ed310032febd1e00a147aa68b.svg","height":115,"width":180});

/***/ }),

/***/ "./public/assets/images/mypage/51-80img.svg":
/*!**************************************************!*\
  !*** ./public/assets/images/mypage/51-80img.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/51-80img.97aef0ff214472150098660ce84bf7ce.svg","height":115,"width":180});

/***/ }),

/***/ "./public/assets/images/mypage/81-99img.svg":
/*!**************************************************!*\
  !*** ./public/assets/images/mypage/81-99img.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/81-99img.2affa1d7c0fded47ac3efc2be512fb2f.svg","height":115,"width":180});

/***/ }),

/***/ "./public/assets/images/mypage/communicationKing.svg":
/*!***********************************************************!*\
  !*** ./public/assets/images/mypage/communicationKing.svg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/communicationKing.ea94287a56fefa4d68a7c6c6a1708791.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/communicationKing_fill.svg":
/*!****************************************************************!*\
  !*** ./public/assets/images/mypage/communicationKing_fill.svg ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/communicationKing_fill.6a3a5df77289fdf6ba9e56218408550a.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/edit.svg":
/*!**********************************************!*\
  !*** ./public/assets/images/mypage/edit.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/edit.4fff2303b2af2d7852348ec64b08d24c.svg","height":20,"width":20});

/***/ }),

/***/ "./public/assets/images/mypage/empathizing.svg":
/*!*****************************************************!*\
  !*** ./public/assets/images/mypage/empathizing.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/empathizing.548efc393029301f8fc0c16f89387416.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/empathizing_fill.svg":
/*!**********************************************************!*\
  !*** ./public/assets/images/mypage/empathizing_fill.svg ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/empathizing_fill.f22c79b4da3313cb1c8d677743f5f69a.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/firstComment.svg":
/*!******************************************************!*\
  !*** ./public/assets/images/mypage/firstComment.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/firstComment.51bed457cc909249f0f826a229418333.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/firstComment_fill.svg":
/*!***********************************************************!*\
  !*** ./public/assets/images/mypage/firstComment_fill.svg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/firstComment_fill.c26b6e8e851768a6dd2806ea12d5a074.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/getChallenge.svg":
/*!******************************************************!*\
  !*** ./public/assets/images/mypage/getChallenge.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/getChallenge.6f6ddef078269de9058ef976f27456ee.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/getChallenge_fill.svg":
/*!***********************************************************!*\
  !*** ./public/assets/images/mypage/getChallenge_fill.svg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/getChallenge_fill.27e0d4bc26b6086aee5ccf6494ff85dd.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/growingTogether.svg":
/*!*********************************************************!*\
  !*** ./public/assets/images/mypage/growingTogether.svg ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/growingTogether.3bfc8c86753bf4b1d18b2ee5b9b48b25.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/growingTogether_fill.svg":
/*!**************************************************************!*\
  !*** ./public/assets/images/mypage/growingTogether_fill.svg ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/growingTogether_fill.9b6f117d0b1c204582760544c8ba7698.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/naturalBornO2.svg":
/*!*******************************************************!*\
  !*** ./public/assets/images/mypage/naturalBornO2.svg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/naturalBornO2.c35cd57b2972ed8ff8a4c2001fbed722.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/naturalBornO2_fill.svg":
/*!************************************************************!*\
  !*** ./public/assets/images/mypage/naturalBornO2_fill.svg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/naturalBornO2_fill.7bb1001f1d5f4154c4cfcb022d0711fe.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/readyForCommunication.svg":
/*!***************************************************************!*\
  !*** ./public/assets/images/mypage/readyForCommunication.svg ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/readyForCommunication.222b76a00b0484cd76fde6232094422a.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/readyForCommunication_fill.svg":
/*!********************************************************************!*\
  !*** ./public/assets/images/mypage/readyForCommunication_fill.svg ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/readyForCommunication_fill.2299acae6f29410fb68b4aa6b827b8e3.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/readyForGrow.svg":
/*!******************************************************!*\
  !*** ./public/assets/images/mypage/readyForGrow.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/readyForGrow.b84db5d65a07ef6ec99f4eac62697957.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/readyForGrow_fill.svg":
/*!***********************************************************!*\
  !*** ./public/assets/images/mypage/readyForGrow_fill.svg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/readyForGrow_fill.1d6cf2b69227ac6f2dd950d604462d0b.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/shyEmail.svg":
/*!**************************************************!*\
  !*** ./public/assets/images/mypage/shyEmail.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/shyEmail.b46e19d19a8a893252653175c8e75b8c.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/shyEmail_fill.svg":
/*!*******************************************************!*\
  !*** ./public/assets/images/mypage/shyEmail_fill.svg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/shyEmail_fill.40ce6121dd58ba7a247aab56ea098cb3.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/sympathyKing.svg":
/*!******************************************************!*\
  !*** ./public/assets/images/mypage/sympathyKing.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/sympathyKing.68a84ca67cb43c00c086d9bad7a6446a.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/sympathyKing_fill.svg":
/*!***********************************************************!*\
  !*** ./public/assets/images/mypage/sympathyKing_fill.svg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/sympathyKing_fill.2e7d0e424f8102e06bf36a207debab46.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/usefulLearnMyself.svg":
/*!***********************************************************!*\
  !*** ./public/assets/images/mypage/usefulLearnMyself.svg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/usefulLearnMyself.5fe4456557a9a91ded33cc560a705557.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/usefulLearnMyself_fill.svg":
/*!****************************************************************!*\
  !*** ./public/assets/images/mypage/usefulLearnMyself_fill.svg ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/usefulLearnMyself_fill.ca954898a4e1b8ddd41b19c3f58b2087.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/usefulShareTogether.svg":
/*!*************************************************************!*\
  !*** ./public/assets/images/mypage/usefulShareTogether.svg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/usefulShareTogether.2cf7373415283c22651cc92625e00c83.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/usefulShareTogether_fill.svg":
/*!******************************************************************!*\
  !*** ./public/assets/images/mypage/usefulShareTogether_fill.svg ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/usefulShareTogether_fill.0dc1d659ce1f7770abb39dc854699b64.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/welcomeToO2.svg":
/*!*****************************************************!*\
  !*** ./public/assets/images/mypage/welcomeToO2.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/welcomeToO2.ee5e16caf7d4fa726e3aab93ac923647.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/mypage/welcomeToO2_fill.svg":
/*!**********************************************************!*\
  !*** ./public/assets/images/mypage/welcomeToO2_fill.svg ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/mypage/welcomeToO2_fill.14069a6f207fadabdeb4ddefc25e1098.svg","height":70,"width":70});

/***/ }),

/***/ "./public/assets/images/nextIcon.svg":
/*!*******************************************!*\
  !*** ./public/assets/images/nextIcon.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/nextIcon.cf25c410e81631097c9af759d2d26023.svg","height":60,"width":60});

/***/ }),

/***/ "./public/assets/images/noticeHeaderIcon.svg":
/*!***************************************************!*\
  !*** ./public/assets/images/noticeHeaderIcon.svg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/noticeHeaderIcon.035cf836b9fa70c7ad2f7b3ac0574995.svg","height":350,"width":350});

/***/ }),

/***/ "./public/assets/images/plusIcon.svg":
/*!*******************************************!*\
  !*** ./public/assets/images/plusIcon.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/plusIcon.2e4e9474fc5a672fd4a7dd6c2b893c3c.svg","height":20,"width":20});

/***/ }),

/***/ "./public/assets/images/plusIconGrey.svg":
/*!***********************************************!*\
  !*** ./public/assets/images/plusIconGrey.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/plusIconGrey.5b842a61c39c29c03b09082c6f7bf839.svg","height":38,"width":38});

/***/ }),

/***/ "./public/assets/images/plusIcon_dfdfdf.svg":
/*!**************************************************!*\
  !*** ./public/assets/images/plusIcon_dfdfdf.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/plusIcon_dfdfdf.2e344a2022491edadd15d06f2543cdca.svg","height":140,"width":140});

/***/ }),

/***/ "./public/assets/images/prevCategoryButton.svg":
/*!*****************************************************!*\
  !*** ./public/assets/images/prevCategoryButton.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/prevCategoryButton.3d100753e8904ac8bfd01e7215a41c7e.svg","height":60,"width":60});

/***/ }),

/***/ "./public/assets/images/scrap.svg":
/*!****************************************!*\
  !*** ./public/assets/images/scrap.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/scrap.f13c99ae8ddfe8cdd956449075acfd89.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/scrapIcon.svg":
/*!********************************************!*\
  !*** ./public/assets/images/scrapIcon.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/scrapIcon.e2aa2b42e305f706a62af5db18a37b91.svg","height":28,"width":28});

/***/ }),

/***/ "./public/assets/images/scrap_filled.svg":
/*!***********************************************!*\
  !*** ./public/assets/images/scrap_filled.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/scrap_filled.9ca91de5d8c0adad7a3009ddc61bf958.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/sharePhoto1.png":
/*!**********************************************!*\
  !*** ./public/assets/images/sharePhoto1.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/sharePhoto1.9907382205a56733bcb4c2288dce1089.png","height":497,"width":720,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FsharePhoto1.9907382205a56733bcb4c2288dce1089.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/sharePhoto2.png":
/*!**********************************************!*\
  !*** ./public/assets/images/sharePhoto2.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/sharePhoto2.51763894b10f0116f4563466169e0bd0.png","height":793,"width":512,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FsharePhoto2.51763894b10f0116f4563466169e0bd0.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/smallLeftArrow.svg":
/*!*************************************************!*\
  !*** ./public/assets/images/smallLeftArrow.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/smallLeftArrow.6db9dfc03df40c22ff8d2df497cf2282.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/smallRightArrow.svg":
/*!**************************************************!*\
  !*** ./public/assets/images/smallRightArrow.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/smallRightArrow.e60086d6af5a82553a7afac521d4ad3b.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/images/speakerBadge1.png":
/*!************************************************!*\
  !*** ./public/assets/images/speakerBadge1.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/speakerBadge1.ebb337e5f8a63d7f4367c6a1c2c74b08.png","height":780,"width":780,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FspeakerBadge1.ebb337e5f8a63d7f4367c6a1c2c74b08.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/speakerBadge2.png":
/*!************************************************!*\
  !*** ./public/assets/images/speakerBadge2.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/speakerBadge2.45f88c05384c5f08e2d7fba50806ed54.png","height":780,"width":780,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FspeakerBadge2.45f88c05384c5f08e2d7fba50806ed54.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/speakerBadge3.png":
/*!************************************************!*\
  !*** ./public/assets/images/speakerBadge3.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/speakerBadge3.4db1842acca7d601d526b5dcb5d8b172.png","height":780,"width":780,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FspeakerBadge3.4db1842acca7d601d526b5dcb5d8b172.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/thumnailComment.svg":
/*!**************************************************!*\
  !*** ./public/assets/images/thumnailComment.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/thumnailComment.ce23780c1d9b9931270bef4b4fa9c79f.svg","height":20,"width":20});

/***/ }),

/***/ "./public/assets/images/thumnailHeart.svg":
/*!************************************************!*\
  !*** ./public/assets/images/thumnailHeart.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/thumnailHeart.e0a94812223260cd8054ee42deda67d3.svg","height":20,"width":20});

/***/ }),

/***/ "./public/assets/images/userImage.png":
/*!********************************************!*\
  !*** ./public/assets/images/userImage.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/userImage.6e561eae8aaeb0d262d5182cc21568c0.png","height":100,"width":100,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FuserImage.6e561eae8aaeb0d262d5182cc21568c0.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/writeIcon.svg":
/*!********************************************!*\
  !*** ./public/assets/images/writeIcon.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/writeIcon.57b23902973acc84dcba6f8e03e13e3c.svg","height":94,"width":94});

/***/ }),

/***/ "./public/assets/images/xIcon.svg":
/*!****************************************!*\
  !*** ./public/assets/images/xIcon.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/xIcon.403165d3f32c127fa6f683ece4af3acf.svg","height":24,"width":24});

/***/ }),

/***/ "./public/assets/fonts/index.css":
/*!***************************************!*\
  !*** ./public/assets/fonts/index.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");

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

/***/ }),

/***/ "styled-tools":
/*!*******************************!*\
  !*** external "styled-tools" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-tools");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNqT2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDLENBQUM7QUFDRixFQUFFLGtKQUF5RDtBQUMzRDs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL28yLy4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24vc3R5bGUudHMiLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL2F0b21zL0ljb24vaW5kZXgudHN4Iiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9hdG9tcy9JbnB1dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL2F0b21zL2luZGV4LnRzIiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvQ29uY2VydC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL21vbGVjdWxlcy9Db25jZXJ0L3N0eWxlLnRzIiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvU2VhcmNoQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1NlYXJjaEJhci9zdHlsZS50cyIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL2luZGV4LnRzIiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvRm9vdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0Zvb3Rlci9zdHlsZS50cyIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05vdGljZUhlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Ob3RpY2VIZWFkZXIvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Ob3RpY2VMaXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05vdGljZUxpc3Qvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9TZWFyY2hGb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1NlYXJjaEZvcm0vc3R5bGUudHMiLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9pbmRleC50cyIsIndlYnBhY2s6Ly9vMi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL28yLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9vMi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9vMi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9vMi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9vMi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9vMi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbzIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9vMi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL28yLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9vMi8uL3N0eWxlcy9HbG9iYWxTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vbzIvLi9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9JY29uc19lZGl0d2hpdGUuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvYWxlcnRJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2FsbGZlZWRJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2Fycm93RG93bi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9hcnJvd1VwLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NhdXRpb25JY29uLnBuZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoYWxsZW5nZXJlZ2lzdGVyX2ltZy5wbmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGFyYWN0ZXJfYmxhY2tfSW1nLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoYXJhY3Rlcl9jb2xvcjFfSW1nLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoYXJhY3Rlcl9jb2xvcjJfSW1nLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoYXJhY3Rlcl9jb2xvcjNfSW1nLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoZWNrV2hpdGVJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoZWNrX2NpcmNsZUljb24ucG5nIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvY2hlY2tfb2ZmLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoZWNrX29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoZWNrYWxsX29mZi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGVja2FsbF9vbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGVja2VkSWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jb2xvcl9zY3JhcEljb24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvY29tbWVudC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jb21tZW50SWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9kZWxldGVJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2RlbGV0ZV9tb2RhbC5wbmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9kaWFtb25kLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2VkaXRJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2VtcHR5Qm9va21hcmsuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvZW1wdHlDaGVja0JveC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9lcnJJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ZpbGxlZEJvb2ttYXJrLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ZpbGxlZENoZWNrQm94LnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2hhbUNoYWxsZW5nZWljb24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaGFtVW5jaGFsbGVuZ2VpY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2hhbV9hcnJvd0Rvd24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaGFtX2Fycm93VXAuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaGFtYnVyZ2VyTG9nby5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9oZWFkZXJfbG9nby5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9oZWFydC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9oZWFydEljb24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaGVhcnRfZmlsbGVkLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb25zX3NlYXJjaC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9qb2luSW5wdXRFcnJJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xhbmRpbmdCYWNrLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xhcmdlTGVmdEFycm93LnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xhcmdlUmlnaHRBcnJvdy5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9saW5lLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xvZ2luQWxlcnQuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbG9naW5JY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbWFpbkNhcmQxLnBuZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21haW5DYXJkMi5wbmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tYWluQ2FyZDMucG5nIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbWFpbkNhcmQ0LnBuZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21lbnVfYmFySWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9taW51c0ljb24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbW9kYWxDbG9zZS5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tb3JlQnV0dG9uSWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tb3JlSWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tb3JlVmlld0Fycm93LnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215ZmVlZEljb24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlLzAtMjBpbWcuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlLzEwMGltZy5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvMjEtNTBpbWcuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlLzUxLTgwaW1nLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS84MS05OWltZy5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvY29tbXVuaWNhdGlvbktpbmcuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2NvbW11bmljYXRpb25LaW5nX2ZpbGwuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2VkaXQuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2VtcGF0aGl6aW5nLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9lbXBhdGhpemluZ19maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9maXJzdENvbW1lbnQuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2ZpcnN0Q29tbWVudF9maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9nZXRDaGFsbGVuZ2Uuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2dldENoYWxsZW5nZV9maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9ncm93aW5nVG9nZXRoZXIuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2dyb3dpbmdUb2dldGhlcl9maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9uYXR1cmFsQm9ybk8yLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9uYXR1cmFsQm9ybk8yX2ZpbGwuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3JlYWR5Rm9yQ29tbXVuaWNhdGlvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvcmVhZHlGb3JDb21tdW5pY2F0aW9uX2ZpbGwuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3JlYWR5Rm9yR3Jvdy5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvcmVhZHlGb3JHcm93X2ZpbGwuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3NoeUVtYWlsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9zaHlFbWFpbF9maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9zeW1wYXRoeUtpbmcuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3N5bXBhdGh5S2luZ19maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS91c2VmdWxMZWFybk15c2VsZi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvdXNlZnVsTGVhcm5NeXNlbGZfZmlsbC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvdXNlZnVsU2hhcmVUb2dldGhlci5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvdXNlZnVsU2hhcmVUb2dldGhlcl9maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS93ZWxjb21lVG9PMi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2Uvd2VsY29tZVRvTzJfZmlsbC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9uZXh0SWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9ub3RpY2VIZWFkZXJJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BsdXNJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BsdXNJY29uR3JleS5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wbHVzSWNvbl9kZmRmZGYuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcHJldkNhdGVnb3J5QnV0dG9uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NjcmFwLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NjcmFwSWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zY3JhcF9maWxsZWQuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc2hhcmVQaG90bzEucG5nIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc2hhcmVQaG90bzIucG5nIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc21hbGxMZWZ0QXJyb3cuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc21hbGxSaWdodEFycm93LnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NwZWFrZXJCYWRnZTEucG5nIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc3BlYWtlckJhZGdlMi5wbmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zcGVha2VyQmFkZ2UzLnBuZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3RodW1uYWlsQ29tbWVudC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy90aHVtbmFpbEhlYXJ0LnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3VzZXJJbWFnZS5wbmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy93cml0ZUljb24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMveEljb24uc3ZnIiwid2VicGFjazovL28yLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbzIvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL28yLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9vMi8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcImRheWpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL28yL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL28yL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL28yL2V4dGVybmFsIFwicmVjb2lsXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL28yL2V4dGVybmFsIFwic3R5bGVkLXJlc2V0XCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJzdHlsZWQtdG9vbHNcIiIsIndlYnBhY2s6Ly9vMi9pZ25vcmVkfEM6XFxVc2Vyc1xcU0VPXFxEZXNrdG9wXFxGcm9udC1lbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU0J1dHRvbiB9IGZyb20gJy4vc3R5bGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbih7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBJUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIHJldHVybiA8U0J1dHRvbiB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1NCdXR0b24+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNCdXR0b24gPSBTdHlsZWQuYnV0dG9uYFxyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIHBhZGRpbmcgOiAwO1xyXG4gIDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lIDogbm9uZTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBpZlByb3AgfSBmcm9tICdzdHlsZWQtdG9vbHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSZWFjdC5JbWdIVE1MQXR0cmlidXRlczxIVE1MSW1hZ2VFbGVtZW50PiB7XHJcbiAgaGVpZ2h0Pzogc3RyaW5nO1xyXG4gIGNpcmN1bGFyPzogYm9vbGVhbjtcclxufVxyXG5cclxuZnVuY3Rpb24gSWNvbih7IGhlaWdodCA9ICcycmVtJywgYWx0ID0gJycsIC4uLnByb3BzIH06IElQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgcmV0dXJuIDxTSW1nIGhlaWdodD17aGVpZ2h0fSBhbHQ9e2FsdH0gey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuY29uc3QgU0ltZyA9IFN0eWxlZC5pbWdgXHJcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMuaGVpZ2h0fTtcclxuICBib3JkZXItcmFkaXVzOiAke2lmUHJvcCgnY2lyY3VsYXInLCAnNTAlJywgJycpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcclxuICBhdXRvQ29tcGxldGU/OiBzdHJpbmc7XHJcbiAgcmVmPzogUmVhY3QuUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbnB1dCh7IGF1dG9Db21wbGV0ZSA9ICdvZmYnLCAuLi5wcm9wcyB9OiBJUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIHJldHVybiA8U0lucHV0IGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfSB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5jb25zdCBTSW5wdXQgPSBTdHlsZWQuaW5wdXRgXHJcbiAgICBtYXJnaW4gOiAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb24gfSBmcm9tICcuL0ljb24nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0IH0gZnJvbSAnLi9JbnB1dCc7XHJcbiIsImltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgVGh1bWJuYWlsQ29tbWVudEljb24sIFRodW1ibmFpbExpa2VJY29uIH0gZnJvbSAncHVibGljL2Fzc2V0cy9pbWFnZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb25jZXJ0V3JhcHBlciwgQ29udGVudCwgSW5mbywgVGh1bWJuYWlsQ29udGFpbmVyLCBUaHVtYm5haWxJbmZvLCBUaHVtYm5haWxPdmVybGF5IH0gZnJvbSAnLi9zdHlsZSc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICBpbWdUaHVtYm5haWw6IHN0cmluZztcclxuICBhdXRob3JOaWNrbmFtZTogc3RyaW5nO1xyXG4gIGludGVyZXN0TGlzdDogc3RyaW5nW107XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgY29tbWVudE51bTogbnVtYmVyO1xyXG4gIGxpa2VOdW0/OiBudW1iZXI7XHJcbiAgb25DbGlja0Z1bmM6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbmNlcnQoe1xyXG4gIGltZ1RodW1ibmFpbCxcclxuICBhdXRob3JOaWNrbmFtZSxcclxuICBpbnRlcmVzdExpc3QsXHJcbiAgY3JlYXRlZEF0LFxyXG4gIHRpdGxlLFxyXG4gIHRleHQsXHJcbiAgY29tbWVudE51bSxcclxuICBsaWtlTnVtLFxyXG4gIG9uQ2xpY2tGdW5jLFxyXG59OiBJUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IGludGVyZXN0RGl2aWRlID0gaW50ZXJlc3RMaXN0Py5qb2luKCcgfCAnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbmNlcnRXcmFwcGVyPlxyXG4gICAgICAgIDxJbmZvPlxyXG4gICAgICAgICAgPHA+e2F1dGhvck5pY2tuYW1lfTwvcD5cclxuICAgICAgICAgIDxwPntpbnRlcmVzdERpdmlkZX08L3A+XHJcbiAgICAgICAgICA8cD57YCR7ZGF5anMoY3JlYXRlZEF0KS5mb3JtYXQoJ1lZLk1NLkREJyl9YH08L3A+XHJcbiAgICAgICAgPC9JbmZvPlxyXG4gICAgICAgIDxDb250ZW50IG9uQ2xpY2s9e29uQ2xpY2tGdW5jfT5cclxuICAgICAgICAgIDxwPnt0aXRsZX08L3A+XHJcbiAgICAgICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGAke3RleHR9YCB9fSAvPlxyXG4gICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICA8VGh1bWJuYWlsQ29udGFpbmVyIG9uQ2xpY2s9e29uQ2xpY2tGdW5jfT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWdUaHVtYm5haWx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8VGh1bWJuYWlsT3ZlcmxheT5cclxuICAgICAgICAgICAgPFRodW1ibmFpbEluZm8+XHJcbiAgICAgICAgICAgICAge2xpa2VOdW0gPT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1RodW1ibmFpbExpa2VJY29ufSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cD4ge2xpa2VOdW19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtUaHVtYm5haWxDb21tZW50SWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8cD4ge2NvbW1lbnROdW19PC9wPlxyXG4gICAgICAgICAgICA8L1RodW1ibmFpbEluZm8+XHJcbiAgICAgICAgICA8L1RodW1ibmFpbE92ZXJsYXk+XHJcbiAgICAgICAgPC9UaHVtYm5haWxDb250YWluZXI+XHJcbiAgICAgIDwvQ29uY2VydFdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25jZXJ0O1xyXG4iLCJpbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgcGFsZXR0ZSwgdGhlbWUgfSBmcm9tICdzdHlsZWQtdG9vbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm8gPSBTdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTExcHg7XHJcbiAgaGVpZ2h0OiA4NHB4O1xyXG4gIGNvbG9yOiAjNDA0MDQwO1xyXG4gICR7dGhlbWUoJ2ZvbnQuYm9keTEnKX07XHJcbiAgJiBwOm50aC1vZi10eXBlKDEpIHtcclxuICAgIG1hcmdpbjogMCAzOHB4IDEycHggMDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgICR7dGhlbWUoJ2ZvbnQuc3ViaGVhZDMnKX07XHJcbiAgfVxyXG4gIDpob3ZlcntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gU3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDUyNHB4O1xyXG4gIGhlaWdodDogODRweDtcclxuICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA5KX07XHJcbiAgJHt0aGVtZSgnZm9udC5zdWJoZWFkMycpfTtcclxuICAmIHA6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgd2lkdGg6IDUyNHB4O1xyXG4gICAgaGVpZ2h0OiAyLjc5ZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgXHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA3KX07XHJcbiAgICAke3RoZW1lKCdmb250LmJvZHkyJyl9O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzOyBcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgfVxyXG4gIDpob3ZlcntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaHVtYm5haWxDb250YWluZXIgPSBTdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgaGVpZ2h0OiA4NHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIDpob3ZlcntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaHVtYm5haWxPdmVybGF5ID0gU3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gIG9wYWNpdHk6MDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OjAuNjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGh1bWJuYWlsSW5mbyA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcclxuICAke3RoZW1lKCdmb250LmJvZHkyX2VuZycpfTtcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb25jZXJ0V3JhcHBlciA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERkRGREY7XHJcbiAgaGVpZ2h0OiAxNDRweDtcclxuYDtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAncHVibGljL2Fzc2V0cy9pbWFnZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXJXcmFwcGVyLCBTZWFyY2hCdXR0b24sIFNlYXJjaElucHV0IH0gZnJvbSAnLi9zdHlsZSc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgb25DbGlja1NlYXJjaD86IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG4gIG9uQ2hhbmdlS2V5d29yZDogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hCYXIoeyBvbkNsaWNrU2VhcmNoLCBvbkNoYW5nZUtleXdvcmQgfTogSVByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaEJhcldyYXBwZXI+XHJcbiAgICAgIDxTZWFyY2hJbnB1dCBuYW1lPVwic2VhcmNoQmFyXCIgb25DaGFuZ2U9e29uQ2hhbmdlS2V5d29yZH0gcGxhY2Vob2xkZXI9XCLtgqTsm4zrk5zrpbwg6rKA7IOJ7ZW0IOyjvOyEuOyalFwiPjwvU2VhcmNoSW5wdXQ+XHJcbiAgICAgIDxTZWFyY2hCdXR0b24gb25DbGljaz17b25DbGlja1NlYXJjaH0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17U2VhcmNoSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgPC9TZWFyY2hCdXR0b24+XHJcbiAgICA8L1NlYXJjaEJhcldyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iLCJpbXBvcnQgeyBCdXR0b24sIElucHV0IH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnc3R5bGVkLXRvb2xzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJbnB1dCA9IFN0eWxlZChJbnB1dClgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcclxuICBib3JkZXItcmFkaXVzOiA3MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAyMjMsIDIyMywgMC4yKTtcclxuICBwYWRkaW5nOiA5cHggMThweCA5cHggMjBweDtcclxuICB3aWR0aDogMjk4cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDIpfTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgOmZvY3VzIHtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoQnV0dG9uID0gU3R5bGVkKEJ1dHRvbilgXHJcbiAgb3BhY2l0eTogNTAlO1xyXG4gIG1hcmdpbi1ib3R0b206NHB4O1xyXG4gIG1hcmdpbi1sZWZ0Oi01MHB4O1xyXG4gIGJvcmRlcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMjIzLCAyMjMsIDAuMik7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4OztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hCYXJXcmFwcGVyID0gU3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDMzcHg7XHJcbmA7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ29uY2VydCB9IGZyb20gJy4vQ29uY2VydCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoQmFyIH0gZnJvbSAnLi9TZWFyY2hCYXInO1xyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IEhlYWRlckxvZ29JY29uIH0gZnJvbSAncHVibGljL2Fzc2V0cy9pbWFnZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEZXNpZ25lciwgRGV2ZWxvcGVyLCBGb290ZXJXcmFwcGVyLCBJbmZvLCBMb2dvLCBNZW1iZXIsIFBsYW5uZXIsIFNlcnZlciwgVGV4dCB9IGZyb20gJy4vc3R5bGUnO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb290ZXJXcmFwcGVyPlxyXG4gICAgICA8TG9nbz5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtIZWFkZXJMb2dvSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgPC9Mb2dvPlxyXG4gICAgICA8VGV4dD5cclxuICAgICAgICA8SW5mbz5cclxuICAgICAgICAgIDxzcGFuPk9wZW4gVG9nZXRoZXI8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7snbTsmqnslb3qtIA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7qsJzsnbjsoJXrs7Qg7LKY66as67Cp7LmoPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+6rO17KeA7IKs7ZWtPC9zcGFuPlxyXG4gICAgICAgICAgPHA+Q29weXJpZ2h0IMKpIDIwMjEgT3BlbiBUb2dldGhlciwgTzI8L3A+XHJcbiAgICAgICAgPC9JbmZvPlxyXG4gICAgICAgIDxNZW1iZXI+XHJcbiAgICAgICAgICA8UGxhbm5lcj5cclxuICAgICAgICAgICAgPHA+UGxhbm5lcjwvcD5cclxuICAgICAgICAgICAgPHA+RXVuc29sPC9wPlxyXG4gICAgICAgICAgICA8cD5IZWV5b3VuZzwvcD5cclxuICAgICAgICAgIDwvUGxhbm5lcj5cclxuICAgICAgICAgIDxEZXNpZ25lcj5cclxuICAgICAgICAgICAgPHA+RGVzaWduZXI8L3A+XHJcbiAgICAgICAgICAgIDxwPkh5dW5reXVuZzwvcD5cclxuICAgICAgICAgICAgPHA+U3VhaDwvcD5cclxuICAgICAgICAgICAgPHA+U3ViaW48L3A+XHJcbiAgICAgICAgICA8L0Rlc2lnbmVyPlxyXG4gICAgICAgICAgPERldmVsb3Blcj5cclxuICAgICAgICAgICAgPHA+RGV2ZWxvcGVyPC9wPlxyXG4gICAgICAgICAgICA8cD5ZZW9uZ3dvbzwvcD5cclxuICAgICAgICAgICAgPHA+U3ViaW48L3A+XHJcbiAgICAgICAgICAgIDxwPkh5b2luPC9wPlxyXG4gICAgICAgICAgICA8cD5KaXlvdW5nPC9wPlxyXG4gICAgICAgICAgPC9EZXZlbG9wZXI+XHJcbiAgICAgICAgICA8U2VydmVyPlxyXG4gICAgICAgICAgICA8cD5TZXJ2ZXI8L3A+XHJcbiAgICAgICAgICAgIDxwPkh5dW5qaW48L3A+XHJcbiAgICAgICAgICAgIDxwPlNlb25neW9uZzwvcD5cclxuICAgICAgICAgIDwvU2VydmVyPlxyXG4gICAgICAgIDwvTWVtYmVyPlxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L0Zvb3RlcldyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgcGFsZXR0ZSwgdGhlbWUgfSBmcm9tICdzdHlsZWQtdG9vbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHQgPSBTdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgNyl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm8gPSBTdHlsZWQuZGl2YFxyXG4gICYgc3BhbjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAke3RoZW1lKCdmb250LnN1YmhlYWQzX2VuZycpfTtcclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcclxuICAgICR7dGhlbWUoJ2ZvbnQuYm9keTMnKX07XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICR7dGhlbWUoJ2ZvbnQuYm9keTJfZW5nJyl9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW1iZXIgPSBTdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE0MHB4O1xyXG4gICR7dGhlbWUoJ2ZvbnQuYm9keTFfZW5nJyl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYW5uZXIgPSBTdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAmIHA6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgJHt0aGVtZSgnZm9udC5zdWJoZWFkMV9lbmcnKX07XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgRGVzaWduZXIgPSBTdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAmIHA6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgJHt0aGVtZSgnZm9udC5zdWJoZWFkMV9lbmcnKX07XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgRGV2ZWxvcGVyID0gU3R5bGVkLmRpdmBcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgJiBwOm50aC1vZi10eXBlKDEpIHtcclxuICAgICR7dGhlbWUoJ2ZvbnQuc3ViaGVhZDFfZW5nJyl9O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFNlcnZlciA9IFN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICYgcDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAke3RoZW1lKCdmb250LnN1YmhlYWQxX2VuZycpfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nbyA9IFN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXJpZ2h0OiA5ODVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyN3B4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlcldyYXBwZXIgPSBTdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNzhweDtcclxuYDtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBOb3RpY2VIZWFkZXJJY29uIH0gZnJvbSAncHVibGljL2Fzc2V0cy9pbWFnZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kLCBDb25jZXJ0QnV0dG9uLCBJY29uQ29udGFpbmVyLCBOb3RpY2VIZWFkZXJXcmFwcGVyLCBUZXh0IH0gZnJvbSAnLi9zdHlsZSc7XHJcbmZ1bmN0aW9uIE5vdGljZUhlYWRlcigpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Tm90aWNlSGVhZGVyV3JhcHBlcj5cclxuICAgICAgPEJhY2tncm91bmQgLz5cclxuICAgICAgPEljb25Db250YWluZXI+XHJcbiAgICAgICAgPEltYWdlIHNyYz17Tm90aWNlSGVhZGVySWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgPC9JY29uQ29udGFpbmVyPlxyXG4gICAgICA8VGV4dD5cclxuICAgICAgICA8cD7ri6TsnYwg6rCV7Jew7J207JeQ7JqUPC9wPlxyXG4gICAgICAgIDxwPuywveyXheyXkCDrjIDtlZwg66qo65OgIOqygzwvcD5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPENvbmNlcnRCdXR0b24+642UIOyVjOyVhOuztOq4sDwvQ29uY2VydEJ1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvVGV4dD5cclxuICAgIDwvTm90aWNlSGVhZGVyV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpY2VIZWFkZXI7XHJcbiIsImltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBwYWxldHRlLCB0aGVtZSB9IGZyb20gJ3N0eWxlZC10b29scyc7XHJcbmV4cG9ydCBjb25zdCBCYWNrZ3JvdW5kID0gU3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMxMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMzZjOGY1LCMxM2UyZGQgKTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0ID0gU3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYwJTtcclxuICBsZWZ0OiAzMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTUwJSwgLTUwJSApO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAmIHA6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgJHt0aGVtZSgnZm9udC5kcDQnKX07XHJcbiAgfVxyXG4gICYgcDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAke3RoZW1lKCdmb250LnN1YmhlYWQ0Jyl9O1xyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29uY2VydEJ1dHRvbiA9IFN0eWxlZC5hYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOjM3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTo4NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XHJcbiAgJHt0aGVtZSgnZm9udC5zdWJoZWFkNCcpfTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEljb25Db250YWluZXIgPSBTdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1JTtcclxuICBsZWZ0OiA2MCU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWNlSGVhZGVyV3JhcHBlciA9IFN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEzOHB4O1xyXG5gO1xyXG4iLCJpbXBvcnQgeyBDb25jZXJ0IH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IFNtYWxsTGVmdEFycm93SWNvbiwgU21hbGxSaWdodEFycm93SWNvbiB9IGZyb20gJ3B1YmxpYy9hc3NldHMvaW1hZ2VzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgSU5vdGljZSB9IGZyb20gJ3R5cGVzL25vdGljZS50eXBlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbnRhaW5lciwgTm90aWNlTGlzdFdyYXBwZXIsIFBhZ2VOYXZpLCBQYWdlTnVtYmVyIH0gZnJvbSAnLi9zdHlsZSc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICBub3RpY2VMaXN0OiBBcnJheTxJTm90aWNlPjtcclxuICB0b3RhbE5vdGljZU51bTogbnVtYmVyO1xyXG4gIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcbiAgc2V0Q3VycmVudFBhZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcbmZ1bmN0aW9uIE5vdGljZUxpc3QoeyBub3RpY2VMaXN0LCB0b3RhbE5vdGljZU51bSwgY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlIH06IElQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBjb25zdCBbc3RhcnRQYWdlLCBzZXRTdGFydFBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2VuZFBhZ2UsIHNldEVuZFBhZ2VdID0gdXNlU3RhdGUoOCk7XHJcbiAgY29uc3QgY29tbWVudHNPZlBhZ2UgPSA4O1xyXG4gIGNvbnN0IHRvdGFsUGFnZSA9IE1hdGguY2VpbCh0b3RhbE5vdGljZU51bSAvIGNvbW1lbnRzT2ZQYWdlKTtcclxuICBjb25zdCBwYWdlSW5kZXg6IG51bWJlcltdID0gWy4uLkFycmF5KHRvdGFsUGFnZSldLm1hcCgoXywgaSkgPT4gaSArIDEpO1xyXG4gIGNvbnN0IHRhcmdldCA9IHBhZ2VJbmRleC5zbGljZShzdGFydFBhZ2UsIGVuZFBhZ2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlKHBhcnNlSW50KGUuY3VycmVudFRhcmdldC52YWx1ZSkpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUHJldlBhZ2VDbGljayA9ICgpID0+IHtcclxuICAgIGlmIChzdGFydFBhZ2UgIT09IDApIHtcclxuICAgICAgc2V0U3RhcnRQYWdlKHN0YXJ0UGFnZSAtIDgpO1xyXG4gICAgICBzZXRFbmRQYWdlKHN0YXJ0UGFnZSk7XHJcbiAgICAgIHNldEN1cnJlbnRQYWdlKHN0YXJ0UGFnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVOZXh0UGFnZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGVuZFBhZ2UgIT09IHRvdGFsUGFnZSkge1xyXG4gICAgICBpZiAoc3RhcnRQYWdlICsgOCA8PSB0b3RhbFBhZ2UpIHtcclxuICAgICAgICBzZXRTdGFydFBhZ2Uoc3RhcnRQYWdlICsgOCk7XHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2Uoc3RhcnRQYWdlICsgOSk7XHJcbiAgICAgICAgaWYgKGVuZFBhZ2UgKyA4IDw9IHRvdGFsUGFnZSkge1xyXG4gICAgICAgICAgc2V0RW5kUGFnZShlbmRQYWdlICsgOCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldEVuZFBhZ2UodG90YWxQYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5vdGljZUxpc3RXcmFwcGVyPlxyXG4gICAgICAgIHtub3RpY2VMaXN0Py5tYXAoXHJcbiAgICAgICAgICAobm90aWNlOiBJTm90aWNlKSA9PlxyXG4gICAgICAgICAgICBub3RpY2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxDb25jZXJ0XHJcbiAgICAgICAgICAgICAgICBpbWdUaHVtYm5haWw9e25vdGljZS5pbWdUaHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgICBhdXRob3JOaWNrbmFtZT17bm90aWNlLnVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICBpbnRlcmVzdExpc3Q9e25vdGljZS5pbnRlcmVzdH1cclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdD17bm90aWNlLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtub3RpY2UudGl0bGV9XHJcbiAgICAgICAgICAgICAgICB0ZXh0PXtub3RpY2UudGV4dH1cclxuICAgICAgICAgICAgICAgIGNvbW1lbnROdW09e25vdGljZS5jb21tZW50TnVtfVxyXG4gICAgICAgICAgICAgICAga2V5PXtub3RpY2UuX2lkfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja0Z1bmM9eygpID0+IGhpc3RvcnkucHVzaChgL25vdGljZS8ke25vdGljZS5faWR9YCl9XHJcbiAgICAgICAgICAgICAgPjwvQ29uY2VydD5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICApfVxyXG4gICAgICAgIDxOYXZpZ2F0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFBhZ2VOYXZpIG9uQ2xpY2s9e2hhbmRsZVByZXZQYWdlQ2xpY2t9PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtTbWFsbExlZnRBcnJvd0ljb259IC8+XHJcbiAgICAgICAgICA8L1BhZ2VOYXZpPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7dGFyZ2V0Lm1hcCgocGFnZUlkeDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17cGFnZUlkeH0+XHJcbiAgICAgICAgICAgICAgICA8UGFnZU51bWJlciB2YWx1ZT17YCR7cGFnZUlkeH1gfSBvbkNsaWNrPXtoYW5kbGVQYWdlQ2xpY2t9IGlzU2VsZWN0ZWQ9e2N1cnJlbnRQYWdlID09PSBwYWdlSWR4fT5cclxuICAgICAgICAgICAgICAgICAge2Ake3BhZ2VJZHh9YH1cclxuICAgICAgICAgICAgICAgIDwvUGFnZU51bWJlcj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8UGFnZU5hdmkgb25DbGljaz17aGFuZGxlTmV4dFBhZ2VDbGlja30+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e1NtYWxsUmlnaHRBcnJvd0ljb259IC8+XHJcbiAgICAgICAgICA8L1BhZ2VOYXZpPlxyXG4gICAgICAgIDwvTmF2aWdhdGlvbkNvbnRhaW5lcj5cclxuICAgICAgPC9Ob3RpY2VMaXN0V3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGljZUxpc3Q7XHJcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgaWZQcm9wLCB0aGVtZSB9IGZyb20gJ3N0eWxlZC10b29scyc7XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZU51bWJlciA9IFN0eWxlZChCdXR0b24pPHsgaXNTZWxlY3RlZD86IGJvb2xlYW4gfT5gXHJcbiAgJHt0aGVtZSgnZm9udC5zdWJoZWFkNF9lbmcnKX07XHJcbiAgY29sb3I6ICR7aWZQcm9wKCdpc1NlbGVjdGVkJywgJyMwM2I2Y2UnLCAnIzZmNmY2ZicpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlTmF2aSA9IFN0eWxlZChCdXR0b24pYFxyXG4gIG1hcmdpbjogMCAyNXB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25Db250YWluZXIgPSBTdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDYwcHggYXV0byA3NnB4O1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbiAgdWwgbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWNlTGlzdFdyYXBwZXIgPSBTdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbmA7XHJcbiIsImltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBEaWFtb25kSWNvbiB9IGZyb20gJ3B1YmxpYy9hc3NldHMvaW1hZ2VzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEZXRhaWwsIE1haW4sIFNlYXJjaEZvcm1XcmFwcGVyIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIHJlUmVuZGVyS2V5d29yZD86IChrZXl3b3JkOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgc2VsZWN0ZWRDYXRlZ29yeT86IHN0cmluZztcclxuICBjb250ZW50TGlzdE51bT86IG51bWJlcjtcclxuICBrZXl3b3JkQ2hhbmdlPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gU2VhcmNoRm9ybSh7IHJlUmVuZGVyS2V5d29yZCwgc2VsZWN0ZWRDYXRlZ29yeSwgY29udGVudExpc3ROdW0sIGtleXdvcmRDaGFuZ2UgfTogSVByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbkNoYW5nZUtleXdvcmQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRTZWFyY2hWYWx1ZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQ2xpY2tTZWFyY2ggPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByZVJlbmRlcktleXdvcmQgJiYgcmVSZW5kZXJLZXl3b3JkKHNlYXJjaFZhbHVlKTtcclxuICAgIGtleXdvcmRDaGFuZ2UgJiYga2V5d29yZENoYW5nZSgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hGb3JtV3JhcHBlcj5cclxuICAgICAgPE1haW4+XHJcbiAgICAgICAgPEltYWdlIHNyYz17RGlhbW9uZEljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPHA+e3NlbGVjdGVkQ2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgIDxTZWFyY2hCYXIgb25DaGFuZ2VLZXl3b3JkPXtvbkNoYW5nZUtleXdvcmR9IG9uQ2xpY2tTZWFyY2g9e29uQ2xpY2tTZWFyY2h9PjwvU2VhcmNoQmFyPlxyXG4gICAgICA8L01haW4+XHJcbiAgICAgIDxEZXRhaWw+XHJcbiAgICAgICAgPHA+e2NvbnRlbnRMaXN0TnVtfeqwnOydmCDsvZjthZDsuKA8L3A+XHJcbiAgICAgIDwvRGV0YWlsPlxyXG4gICAgPC9TZWFyY2hGb3JtV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGb3JtO1xyXG4iLCJpbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgcGFsZXR0ZSwgdGhlbWUgfSBmcm9tICdzdHlsZWQtdG9vbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW4gPSBTdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmbGV4OjE7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDgpfTtcclxuICAgICR7dGhlbWUoJ2ZvbnQuaDInKX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbCA9IFN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA3KX07XHJcbiAgJHt0aGVtZSgnZm9udC5ib2R5M19lbmcnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoRm9ybVdyYXBwZXIgPSBTdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbmA7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRm9vdGVyIH0gZnJvbSAnLi9Gb290ZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vdGljZUhlYWRlciB9IGZyb20gJy4vTm90aWNlSGVhZGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBOb3RpY2VMaXN0IH0gZnJvbSAnLi9Ob3RpY2VMaXN0JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hGb3JtIH0gZnJvbSAnLi9TZWFyY2hGb3JtJztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAhaXNWaXNpYmxlICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgc3JjLFxuICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgIHNpemVzLFxuICAgICAgICBsb2FkZXJcbiAgICB9KSwge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiB0cnVlLFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgfSkpKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGltZ0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgcHJpb3JpdHkgPyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICBrZXk6ICdfX25pbWctJyArIGltZ0F0dHJpYnV0ZXMuc3JjICsgaW1nQXR0cmlidXRlcy5zcmNTZXQgKyBpbWdBdHRyaWJ1dGVzLnNpemVzLFxuICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICBhczogXCJpbWFnZVwiLFxuICAgICAgICBocmVmOiBpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzcmNzZXQ6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0LFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNpemVzOiBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgfSkpIDogbnVsbCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYykge1xuICAgIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyYztcbn1cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0Jyk7XG4gICAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpO1xuICAgIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1YWxpdHkpIHtcbiAgICAgICAgcGFyYW1zLnNldCgncScsIHF1YWxpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwuaHJlZjtcbn1cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAgfSkge1xuICAgIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO1xufVxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgJ2ZfYXV0bycsXG4gICAgICAgICdjX2xpbWl0JyxcbiAgICAgICAgJ3dfJyArIHdpZHRoLFxuICAgICAgICAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKVxuICAgIF07XG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLyc7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO1xufVxuZnVuY3Rpb24gY3VzdG9tTG9hZGVyKHsgc3JjICB9KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIG1pc3NpbmcgXCJsb2FkZXJcIiBwcm9wLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYCk7XG59XG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO1xuICAgICAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7XG4gICAgICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU3JjO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICsgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgeyBGb290ZXIgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJ3N0eWxlcy9HbG9iYWxTdHlsZXMnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL2ZvbnRzL2luZGV4LmNzcyc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPHRpdGxlPk8yPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgICAgICA8UmVjb2lsUm9vdD5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JlY29pbFJvb3Q+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFsZXJ0SWNvbiB9IGZyb20gJy4vYWxlcnRJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWxsRmVlZEljb24gfSBmcm9tICcuL2FsbGZlZWRJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3dEb3duSWNvbiB9IGZyb20gJy4vYXJyb3dEb3duLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3dVcEljb24gfSBmcm9tICcuL2Fycm93VXAuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXV0aW9uSWNvbiB9IGZyb20gJy4vY2F1dGlvbkljb24ucG5nJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGFsbGVuZ2VJbWcgfSBmcm9tICcuL2NoYWxsZW5nZXJlZ2lzdGVyX2ltZy5wbmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoYXJhY3RlckJsYWNrSWNvbiB9IGZyb20gJy4vY2hhcmFjdGVyX2JsYWNrX0ltZy5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoYXJhY3RlckNvbG9yMUljb24gfSBmcm9tICcuL2NoYXJhY3Rlcl9jb2xvcjFfSW1nLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hhcmFjdGVyQ29sb3IySWNvbiB9IGZyb20gJy4vY2hhcmFjdGVyX2NvbG9yMl9JbWcuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGFyYWN0ZXJDb2xvcjNJY29uIH0gZnJvbSAnLi9jaGFyYWN0ZXJfY29sb3IzX0ltZy5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrQWxsT2ZmSWNvbiB9IGZyb20gJy4vY2hlY2thbGxfb2ZmLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tBbGxPbkljb24gfSBmcm9tICcuL2NoZWNrYWxsX29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tlZEljb24gfSBmcm9tICcuL2NoZWNrZWRJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tJY29uIH0gZnJvbSAnLi9jaGVja1doaXRlSWNvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrQ2lyY2xlSWNvbiB9IGZyb20gJy4vY2hlY2tfY2lyY2xlSWNvbi5wbmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrT2ZmSWNvbiB9IGZyb20gJy4vY2hlY2tfb2ZmLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tPbkljb24gfSBmcm9tICcuL2NoZWNrX29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sb3JTY3JhcEljb24gfSBmcm9tICcuL2NvbG9yX3NjcmFwSWNvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbW1lbnRJY29uIH0gZnJvbSAnLi9jb21tZW50LnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tbWVudENvdW50SWNvbiB9IGZyb20gJy4vY29tbWVudEljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWxldGVJY29uIH0gZnJvbSAnLi9kZWxldGVJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVsZXRlTW9kYWxJbWcgfSBmcm9tICcuL2RlbGV0ZV9tb2RhbC5wbmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERpYW1vbmRJY29uIH0gZnJvbSAnLi9kaWFtb25kLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRpdEljb24gfSBmcm9tICcuL2VkaXRJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW1wdHlCb29rbWFya0ljb24gfSBmcm9tICcuL2VtcHR5Qm9va21hcmsuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbXB0eUNoZWNrQm94SWNvbiB9IGZyb20gJy4vZW1wdHlDaGVja0JveC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVycm9ySWNvbiB9IGZyb20gJy4vZXJySWNvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbGxlZEJvb2ttYXJrSWNvbiB9IGZyb20gJy4vZmlsbGVkQm9va21hcmsuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaWxsZWRDaGVja0JveEljb24gfSBmcm9tICcuL2ZpbGxlZENoZWNrQm94LnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGFtYnVyZ2VySWNvbiB9IGZyb20gJy4vaGFtYnVyZ2VyTG9nby5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhhbUNoYWxsZW5nZUljb24gfSBmcm9tICcuL2hhbUNoYWxsZW5nZWljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIYW1VbmNoYWxsZW5nZUljb24gfSBmcm9tICcuL2hhbVVuY2hhbGxlbmdlaWNvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhhbUFycm93RG93bkljb24gfSBmcm9tICcuL2hhbV9hcnJvd0Rvd24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIYW1BcnJvd1VwSWNvbiB9IGZyb20gJy4vaGFtX2Fycm93VXAuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXJMb2dvSWNvbiwgZGVmYXVsdCBhcyBPMkljb24gfSBmcm9tICcuL2hlYWRlcl9sb2dvLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlrZUljb24gfSBmcm9tICcuL2hlYXJ0LnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xpY2tHb29kSWNvbiB9IGZyb20gJy4vaGVhcnRJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlrZUZpbGxlZEljb24gfSBmcm9tICcuL2hlYXJ0X2ZpbGxlZC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRXaGl0ZUljb24gfSBmcm9tICcuL0ljb25zX2VkaXR3aGl0ZS5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaEljb24gfSBmcm9tICcuL2ljb25zX3NlYXJjaC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEpvaW5FcnJJY29uIH0gZnJvbSAnLi9qb2luSW5wdXRFcnJJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGFuZGluZ0JhY2tJbWcgfSBmcm9tICcuL2xhbmRpbmdCYWNrLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGFyZ2VMZWZ0QXJyb3dJY29uIH0gZnJvbSAnLi9sYXJnZUxlZnRBcnJvdy5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExhcmdlUmlnaHRBcnJvd0ljb24gfSBmcm9tICcuL2xhcmdlUmlnaHRBcnJvdy5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmVJY29uIH0gZnJvbSAnLi9saW5lLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9naW5BbGVydEljb24gfSBmcm9tICcuL2xvZ2luQWxlcnQuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dpbkljb24gfSBmcm9tICcuL2xvZ2luSWNvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ28gfSBmcm9tICcuL2xvZ28uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYWluQ2FyZDFJbWcgfSBmcm9tICcuL21haW5DYXJkMS5wbmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haW5DYXJkMkltZyB9IGZyb20gJy4vbWFpbkNhcmQyLnBuZyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFpbkNhcmQzSW1nIH0gZnJvbSAnLi9tYWluQ2FyZDMucG5nJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYWluQ2FyZDRJbWcgfSBmcm9tICcuL21haW5DYXJkNC5wbmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lbnVCYXJJY29uIH0gZnJvbSAnLi9tZW51X2Jhckljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNaW51c0ljb24gfSBmcm9tICcuL21pbnVzSWNvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsQ2xvc2VJY29uIH0gZnJvbSAnLi9tb2RhbENsb3NlLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9yZUljb24gfSBmcm9tICcuL21vcmVCdXR0b25JY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9yZUNsaWNrZWRJY29uIH0gZnJvbSAnLi9tb3JlSWNvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vcmVWaWV3QXJyb3dJY29uIH0gZnJvbSAnLi9tb3JlVmlld0Fycm93LnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTXlGZWVkSWNvbiB9IGZyb20gJy4vbXlmZWVkSWNvbi5zdmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL215cGFnZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmV4dEljb24gfSBmcm9tICcuL25leHRJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm90aWNlSGVhZGVySWNvbiB9IGZyb20gJy4vbm90aWNlSGVhZGVySWNvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsdXNJY29uIH0gZnJvbSAnLi9wbHVzSWNvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyZXlQbHVzSWNvbiB9IGZyb20gJy4vcGx1c0ljb25HcmV5LnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR3JleWRmUGx1c0ljb24gfSBmcm9tICcuL3BsdXNJY29uX2RmZGZkZi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByZXZJY29uIH0gZnJvbSAnLi9wcmV2Q2F0ZWdvcnlCdXR0b24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY3JhcEljb24gfSBmcm9tICcuL3NjcmFwLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR3JheVNjcmFwSWNvbiB9IGZyb20gJy4vc2NyYXBJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2NyYXBGaWxsZWRJY29uIH0gZnJvbSAnLi9zY3JhcF9maWxsZWQuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb25jZXJ0MUltZyB9IGZyb20gJy4vc2hhcmVQaG90bzEucG5nJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb25jZXJ0MkltZyB9IGZyb20gJy4vc2hhcmVQaG90bzIucG5nJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTbWFsbExlZnRBcnJvd0ljb24gfSBmcm9tICcuL3NtYWxsTGVmdEFycm93LnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU21hbGxSaWdodEFycm93SWNvbiB9IGZyb20gJy4vc21hbGxSaWdodEFycm93LnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3BlYWtlckJhZGdlMUltZyB9IGZyb20gJy4vc3BlYWtlckJhZGdlMS5wbmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNwZWFrZXJCYWRnZTJJbWcgfSBmcm9tICcuL3NwZWFrZXJCYWRnZTIucG5nJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTcGVha2VyQmFkZ2UzSW1nIH0gZnJvbSAnLi9zcGVha2VyQmFkZ2UzLnBuZyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGh1bWJuYWlsQ29tbWVudEljb24gfSBmcm9tICcuL3RodW1uYWlsQ29tbWVudC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRodW1ibmFpbExpa2VJY29uIH0gZnJvbSAnLi90aHVtbmFpbEhlYXJ0LnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckltZyB9IGZyb20gJy4vdXNlckltYWdlLnBuZyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV3JpdGVJY29uIH0gZnJvbSAnLi93cml0ZUljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBYSWNvbiB9IGZyb20gJy4veEljb24uc3ZnJztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQZXJjZW50MjBJY29uIH0gZnJvbSAnLi8wLTIwaW1nLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGVyY2VudDEwMEljb24gfSBmcm9tICcuLzEwMGltZy5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBlcmNlbnQ0MEljb24gfSBmcm9tICcuLzIxLTUwaW1nLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGVyY2VudDYwSWNvbiB9IGZyb20gJy4vNTEtODBpbWcuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQZXJjZW50ODBJY29uIH0gZnJvbSAnLi84MS05OWltZy5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbW11bmljYXRpb25LaW5nSWNvbiB9IGZyb20gJy4vY29tbXVuaWNhdGlvbktpbmcuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21tdW5pY2F0aW9uS2luZ0ZpbGxJY29uIH0gZnJvbSAnLi9jb21tdW5pY2F0aW9uS2luZ19maWxsLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTXlQYWdlRWRpdEljb24gfSBmcm9tICcuL2VkaXQuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbXBhdGhpemluZ0ljb24gfSBmcm9tICcuL2VtcGF0aGl6aW5nLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW1wYXRoaXppbmdGaWxsSWNvbiB9IGZyb20gJy4vZW1wYXRoaXppbmdfZmlsbC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpcnN0Q29tbWVudEljb24gfSBmcm9tICcuL2ZpcnN0Q29tbWVudC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpcnN0Q29tbWVudEZpbGxJY29uIH0gZnJvbSAnLi9maXJzdENvbW1lbnRfZmlsbC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdldENoYWxsZW5nZUljb24gfSBmcm9tICcuL2dldENoYWxsZW5nZS5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdldENoYWxsZW5nZUZpbGxJY29uIH0gZnJvbSAnLi9nZXRDaGFsbGVuZ2VfZmlsbC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyb3dpbmdUb2dldGhlckljb24gfSBmcm9tICcuL2dyb3dpbmdUb2dldGhlci5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyb3dpbmdUb2dldGhlckZpbGxJY29uIH0gZnJvbSAnLi9ncm93aW5nVG9nZXRoZXJfZmlsbC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdHVyYWxCb3JuTzJJY29uIH0gZnJvbSAnLi9uYXR1cmFsQm9ybk8yLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF0dXJhbEJvcm5PMkZpbGxJY29uIH0gZnJvbSAnLi9uYXR1cmFsQm9ybk8yX2ZpbGwuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkeUZvckNvbW11bmljYXRpb25JY29uIH0gZnJvbSAnLi9yZWFkeUZvckNvbW11bmljYXRpb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkeUZvckNvbW11bmljYXRpb25GaWxsSWNvbiB9IGZyb20gJy4vcmVhZHlGb3JDb21tdW5pY2F0aW9uX2ZpbGwuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkeUZvckdyb3dJY29uIH0gZnJvbSAnLi9yZWFkeUZvckdyb3cuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkeUZvckdyb3dGaWxsSWNvbiB9IGZyb20gJy4vcmVhZHlGb3JHcm93X2ZpbGwuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaHlFbWFpbEljb24gfSBmcm9tICcuL3NoeUVtYWlsLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2h5RW1haWxGaWxsSWNvbiB9IGZyb20gJy4vc2h5RW1haWxfZmlsbC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN5bXBhdGh5S2luZ0ljb24gfSBmcm9tICcuL3N5bXBhdGh5S2luZy5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN5bXBhdGh5S2luZ0ZpbGxJY29uIH0gZnJvbSAnLi9zeW1wYXRoeUtpbmdfZmlsbC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZWZ1bExlYXJuTXlzZWxmSWNvbiB9IGZyb20gJy4vdXNlZnVsTGVhcm5NeXNlbGYuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VmdWxMZWFybk15c2VsZkZpbGxJY29uIH0gZnJvbSAnLi91c2VmdWxMZWFybk15c2VsZl9maWxsLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlZnVsU2hhcmVUb2dldGhlckljb24gfSBmcm9tICcuL3VzZWZ1bFNoYXJlVG9nZXRoZXIuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VmdWxTaGFyZVRvZ2V0aGVyRmlsbEljb24gfSBmcm9tICcuL3VzZWZ1bFNoYXJlVG9nZXRoZXJfZmlsbC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFdlbGNvbWVUb08ySWNvbiB9IGZyb20gJy4vd2VsY29tZVRvTzIuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBXZWxjb21lVG9PMkZpbGxJY29uIH0gZnJvbSAnLi93ZWxjb21lVG9PMl9maWxsLnN2Zyc7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyByZXNldCB9IGZyb20gJ3N0eWxlZC1yZXNldCc7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAke3Jlc2V0fVxyXG4gIFxyXG4gICosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB9XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgfVxyXG4gIGEsIGJ1dHRvbiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIHVsIGxpIHtsaXN0LXN0eWxlLXR5cGU6IG5vbmU7fVxyXG5cclxuICBhIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogYmxhY2s7IH1cclxuICBhOnZpc2l0ZWQgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuICBhOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiAgYTpmb2N1cyB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG4gIGE6aG92ZXIsIGE6YWN0aXZlIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEuOHZ3O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlcztcclxuIiwiY29uc3QgYmFja2dyb3VuZCA9IFsnI2YzZmNmZicsICcjZjBmN2ZmJywgJyNkZGZiZmEnLCAnI2YwZmFmYiddO1xyXG5cclxuY29uc3QgcHJpbWFyeSA9IFsnIzEzZTJkZCcsICcjMDRkNmUwJywgJyM1OGUyZmYnLCAnIzM2YzhmNScsICcjMDBiYWY0JywgJyMwM2I2Y2UnLCAnI2Y2NjQzNicsICcjZTA0NzQ3J107XHJcblxyXG5jb25zdCBncmF5c2NhbGUgPSBbXHJcbiAgJyNmZmZmZmYnLFxyXG4gICcjZGZkZmRmJyxcclxuICAnI2MxYzFjMScsXHJcbiAgJyNhNWE1YTUnLFxyXG4gICcjOGI4YjhiJyxcclxuICAnIzZmNmY2ZicsXHJcbiAgJyM1NTU1NTUnLFxyXG4gICcjM2QzZDNkJyxcclxuICAnIzI0MjQyNCcsXHJcbiAgJyMwZDBkMGQnLFxyXG4gICcjYzRjNGM0JyxcclxuXTtcclxuXHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIGJhY2tncm91bmQsXHJcbiAgICBwcmltYXJ5LFxyXG4gICAgZ3JheXNjYWxlLFxyXG4gICAgZW1wdHlJbWFnZTogJyMwMjkyYTUnLFxyXG4gIH0sXHJcbiAgc2l6ZToge1xyXG4gICAgbW9iaWxlOiAnKG1heC13aWR0aDogNjAwcHgpJyxcclxuICAgIHRhYmxldDogJyhtYXgtd2lkdGg6IDkwMHB4KScsXHJcbiAgICBsYXB0b3A6ICcobWF4LXdpZHRoOiAxMjAwcHgpJyxcclxuICAgIGRlc2t0b3A6ICcobWluLXdpZHRoOiAxODAwcHgpJyxcclxuICB9LFxyXG4gIGZvbnQ6IHtcclxuICAgIGRwMTogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4yMjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBkcDFfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE3O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgYCxcclxuICAgIGRwMjogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBkcDJfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIGRwM19lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIGRwNDogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS40MjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBoMTogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4zNjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBoMV9lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjE7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIGgyOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjMxO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nO1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIGgyX2VuZzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4xOTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdIb21lcGFnZUJhdWthc3Rlbic7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgc3ViaGVhZDE6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBzdWJoZWFkMV9lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIHN1YmhlYWQyOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQzO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIHN1YmhlYWQyX2VuZzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4yOTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdIb21lcGFnZUJhdWthc3Rlbic7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgc3ViaGVhZDM6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgc3ViaGVhZDNfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBzdWJoZWFkNDogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4zMztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBzdWJoZWFkNF9lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIHN1YmhlYWQ1OiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIHN1YmhlYWQ1X2VuZzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4zMztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdIb21lcGFnZUJhdWthc3Rlbic7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgYm9keTE6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIGJvZHkxX2VuZzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4zMztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdIb21lcGFnZUJhdWthc3Rlbic7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBib2R5MjogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgYm9keTJfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI5O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIGJvZHkzOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBib2R5M19lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgYm9keTQ6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTY7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBib2R5NF9lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL0ljb25zX2VkaXR3aGl0ZS4yZWFiZTQ3OWVkMzJlNjI1Y2RlOTQ5MzljY2I3ZTFhYS5zdmdcIixcImhlaWdodFwiOjQ1LFwid2lkdGhcIjo0NX07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2FsZXJ0SWNvbi4zMTQ1N2EzZDhkYTA1MjgzMWFiY2M4ZTFjMjAxMDJlYy5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2FsbGZlZWRJY29uLmE0MWExOTM5NmI5ZDEzZDg5MDJlM2E4MDkwMDVhOWE2LnN2Z1wiLFwiaGVpZ2h0XCI6OTQsXCJ3aWR0aFwiOjk0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvYXJyb3dEb3duLjVhMjMwMTE3N2YxZWE0ODc1NzkxNzdjNDJmOTljODI3LnN2Z1wiLFwiaGVpZ2h0XCI6MTEsXCJ3aWR0aFwiOjE1fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvYXJyb3dVcC43MWExZWJhNTJkMTlkOWNiYTQ1YzhmOTJiNmQ5ZmUzMi5zdmdcIixcImhlaWdodFwiOjEwLFwid2lkdGhcIjoxNX07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NhdXRpb25JY29uLjcwMTZhYmU4NWYxYmJlYmIwM2UxOWJhYmQyYzQyZWQyLnBuZ1wiLFwiaGVpZ2h0XCI6MTgsXCJ3aWR0aFwiOjE4LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmFzc2V0cyUyRmltYWdlcyUyRmNhdXRpb25JY29uLjcwMTZhYmU4NWYxYmJlYmIwM2UxOWJhYmQyYzQyZWQyLnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvY2hhbGxlbmdlcmVnaXN0ZXJfaW1nLjcxNDE5Yzk4MTQ0M2QxY2QyYTAwMzc1NzZjNDIxMGMyLnBuZ1wiLFwiaGVpZ2h0XCI6MTQxNCxcIndpZHRoXCI6Njc3LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmFzc2V0cyUyRmltYWdlcyUyRmNoYWxsZW5nZXJlZ2lzdGVyX2ltZy43MTQxOWM5ODE0NDNkMWNkMmEwMDM3NTc2YzQyMTBjMi5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoYXJhY3Rlcl9ibGFja19JbWcuZmY0NWM2ZTg0NGM4MDhiYjVkMmY2YzMxYzY1N2FhYjYuc3ZnXCIsXCJoZWlnaHRcIjo1NSxcIndpZHRoXCI6NTV9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGFyYWN0ZXJfY29sb3IxX0ltZy5kNWM5YjEwNTQ4NWQ3NDg3MTYzMTVlYzc2ODY1YWMwZi5zdmdcIixcImhlaWdodFwiOjU1LFwid2lkdGhcIjo1NX07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoYXJhY3Rlcl9jb2xvcjJfSW1nLjYwZjdhNTYxYWY5MDFkMWY1MDc5NmJjZjEwZTY0ZjExLnN2Z1wiLFwiaGVpZ2h0XCI6ODYsXCJ3aWR0aFwiOjEzMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoYXJhY3Rlcl9jb2xvcjNfSW1nLjI3MjJlMzY5MjQyNDY3NzI5MzYzYWIzZmRhMmUwZDkyLnN2Z1wiLFwiaGVpZ2h0XCI6ODYsXCJ3aWR0aFwiOjEzMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoZWNrV2hpdGVJY29uLmFkOGUzOGY5N2U1YjVmNDU1ZDI3NzNhODg1ZTVjZjE4LnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvY2hlY2tfY2lyY2xlSWNvbi4wMDcyMmNjMmRjMTIyZjE4Y2RkZjY0NmRlODJiYTFlYS5wbmdcIixcImhlaWdodFwiOjkwLFwid2lkdGhcIjo5MCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZhc3NldHMlMkZpbWFnZXMlMkZjaGVja19jaXJjbGVJY29uLjAwNzIyY2MyZGMxMjJmMThjZGRmNjQ2ZGU4MmJhMWVhLnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvY2hlY2tfb2ZmLmJkMWYxMjc0YzA1YjRlNzI1MjI2ZTRiY2NiMzBlNjQyLnN2Z1wiLFwiaGVpZ2h0XCI6MTMsXCJ3aWR0aFwiOjE4fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvY2hlY2tfb24uMzBkZWVhZTg2MTJmMGJhZjRhNWZiMzU5NjE0NTA4NGMuc3ZnXCIsXCJoZWlnaHRcIjoxMyxcIndpZHRoXCI6MTh9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGVja2FsbF9vZmYuOTgyZjQzYjIzZGNjZDFhN2E5YTgzZjY3YWFhMzA1Zjkuc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGVja2FsbF9vbi45OWRiMDM4OWMzYTVkZGMxZjQwYzBlODNjZDZhMzJjZi5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoZWNrZWRJY29uLjVjZmMwMWZhYjU2MmU3YmZjY2JkYmZkMTc4NmY5YzQyLnN2Z1wiLFwiaGVpZ2h0XCI6MjYsXCJ3aWR0aFwiOjM1fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvY29sb3Jfc2NyYXBJY29uLmI0OWM5NmVkZjFmODA5NTBmNzAxZjY5MTFhZDNiZTU4LnN2Z1wiLFwiaGVpZ2h0XCI6MjgsXCJ3aWR0aFwiOjI4fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvY29tbWVudC45OTEyYWYxODg4OTI5YjBlNTYxNzZhOThhYmVmZjAyYi5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NvbW1lbnRJY29uLjhlNmQ0NDAwMmY1YTQ0MzFlMGI4NGRmNWUzMzU5ODg5LnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvZGVsZXRlSWNvbi4xMjA3MTEzZDhmNzIxYzJjZDkzNTFmZmM2YWUzZTE2ZS5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2RlbGV0ZV9tb2RhbC4wYWFlOTczMTRjYjA5MDk4MzFkNDBmYjVmNzNmZDEzMi5wbmdcIixcImhlaWdodFwiOjkwLFwid2lkdGhcIjo5MCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZhc3NldHMlMkZpbWFnZXMlMkZkZWxldGVfbW9kYWwuMGFhZTk3MzE0Y2IwOTA5ODMxZDQwZmI1ZjczZmQxMzIucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9kaWFtb25kLjg2MmM4OGI0YmFjODkyZjVmZjRhYWQwODUwMzA5N2IwLnN2Z1wiLFwiaGVpZ2h0XCI6MjIsXCJ3aWR0aFwiOjIyfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvZWRpdEljb24uYzliZjNjMTJhNzcxYWFiNDc5MDBhM2M0OWQ4YWQxMmYuc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9lbXB0eUJvb2ttYXJrLmUyYWEyYjQyZTMwNWY3MDZhNjJhZjVkYjE4YTM3YjkxLnN2Z1wiLFwiaGVpZ2h0XCI6MjgsXCJ3aWR0aFwiOjI4fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvZW1wdHlDaGVja0JveC44MGQyYThlMmIzNTRmOGRhMjAzMGI3MWZlNGExOGY1MS5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2Vyckljb24uMmZjNmUyMDRlMDA4NmExODA4ZmU5MjZmOWQwZDQwZTAuc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9maWxsZWRCb29rbWFyay43NGQ5ODE2OGYyYzEzZGY4ODhhYzEzMmQ2M2QyNjlkNy5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ZpbGxlZENoZWNrQm94LmMzYWZlOTU5Y2I4MTllMGNkNTAyMjhmMmE2OWU0ZThhLnN2Z1wiLFwiaGVpZ2h0XCI6MjAsXCJ3aWR0aFwiOjIwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvaGFtQ2hhbGxlbmdlaWNvbi5kYTA1Y2ZkZjcxZjIzNTJjMWY1MmU5ZTFkMjEzZmViZS5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2hhbVVuY2hhbGxlbmdlaWNvbi45NmVjMTg2ZGQ2N2NmNmY3ODkxYTU3MmU5ZjI2YzZiMC5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2hhbV9hcnJvd0Rvd24uYWFhM2JjMWE0YzY2MTgyNzk2ODE2ZGNhZmU2MzY5NGYuc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9oYW1fYXJyb3dVcC5hZThlODNiMTZiN2Y3YmY5NGRhZmY4NmMyOWRkODdkMy5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2hhbWJ1cmdlckxvZ28uOWNhMGUyYTVjYzMxMmYxZWVkNDNiNmQ5NDM2YjUyZTEuc3ZnXCIsXCJoZWlnaHRcIjozMixcIndpZHRoXCI6MzJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9oZWFkZXJfbG9nby5hNDhjMGRhMGU4MGNmMjE2OTU2NTc3ZTdiYWU4N2YxYS5zdmdcIixcImhlaWdodFwiOjMwLFwid2lkdGhcIjozMn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2hlYXJ0LjYyOTZhYzhkN2E0ZDJhYzQ0YTM5YmMyZjc4NWFkMmVhLnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvaGVhcnRJY29uLjY4NDQyODViZjMzMGYwYzhlNjllNmQ1YjU3YjM0NjYwLnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvaGVhcnRfZmlsbGVkLmZkZmZlOTc0ZGRlNGQzNTBjMWQ0ZGY0YTk2ZDY0YmQ0LnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbnNfc2VhcmNoLjZiMzcwNmIyOGRjNmQwMDBhODY1MTNmM2UyMmYwZjJkLnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvam9pbklucHV0RXJySWNvbi4yZmM2ZTIwNGUwMDg2YTE4MDhmZTkyNmY5ZDBkNDBlMC5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xhbmRpbmdCYWNrLjU4NjllMGM2MzM4OTViYmE3MGQ0N2NiYzk0NzU3YmI0LnN2Z1wiLFwiaGVpZ2h0XCI6NjExNCxcIndpZHRoXCI6MTkyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xhcmdlTGVmdEFycm93LjIwOGVlOWY2MDQxNGQ5OWNmNDc1OWU3NDI3OTdmMzVjLnN2Z1wiLFwiaGVpZ2h0XCI6NDgsXCJ3aWR0aFwiOjQ4fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbGFyZ2VSaWdodEFycm93LmFlZTNmMWI4ZDUyZGExNjMxYzM2YWI1YmU2NmMzODJjLnN2Z1wiLFwiaGVpZ2h0XCI6NDgsXCJ3aWR0aFwiOjQ4fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbGluZS5kMWZiNjU0NzU0ZjdlZTc5YzZkOTNjYzA1Yjg3NGYyZC5zdmdcIixcImhlaWdodFwiOjE2LFwid2lkdGhcIjoxfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbG9naW5BbGVydC5iZTU2ODZjOWYxYjgyMGE3MmQ5ZmMxMTYwZWY4YTZmZi5zdmdcIixcImhlaWdodFwiOjkwLFwid2lkdGhcIjo5MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xvZ2luSWNvbi4wODg5YThlYTRiZWYyMTk2OTdhZjUzYTEyNTg3MzFjYi5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xvZ28uZTdiYjI1MDVhNzdiOGY1M2UxMDcxMDhjMzE5OTM1Njguc3ZnXCIsXCJoZWlnaHRcIjoxMDAsXCJ3aWR0aFwiOjEwMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21haW5DYXJkMS5hYTI2MmMxM2RhNmZjZGNhODI4NWI2MmNkNjg5NjMwZi5wbmdcIixcImhlaWdodFwiOjkyMSxcIndpZHRoXCI6OTA2LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmFzc2V0cyUyRmltYWdlcyUyRm1haW5DYXJkMS5hYTI2MmMxM2RhNmZjZGNhODI4NWI2MmNkNjg5NjMwZi5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21haW5DYXJkMi5mYWFmMjE5OWQxZDY1MzljYWYxZjkyMGQ1YzViOWQwYy5wbmdcIixcImhlaWdodFwiOjkyMSxcIndpZHRoXCI6OTA2LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmFzc2V0cyUyRmltYWdlcyUyRm1haW5DYXJkMi5mYWFmMjE5OWQxZDY1MzljYWYxZjkyMGQ1YzViOWQwYy5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21haW5DYXJkMy44ZTk3NzYxZDc2N2Y5MzA1MDM1ZDdkOTYwZjRmMWM3MS5wbmdcIixcImhlaWdodFwiOjkyMSxcIndpZHRoXCI6OTA2LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmFzc2V0cyUyRmltYWdlcyUyRm1haW5DYXJkMy44ZTk3NzYxZDc2N2Y5MzA1MDM1ZDdkOTYwZjRmMWM3MS5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21haW5DYXJkNC5kNTQ1MGExODhjMTJiODVkMTQ4NjYyYzM4ZTJjM2Y3NC5wbmdcIixcImhlaWdodFwiOjkyMSxcIndpZHRoXCI6OTA2LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmFzc2V0cyUyRmltYWdlcyUyRm1haW5DYXJkNC5kNTQ1MGExODhjMTJiODVkMTQ4NjYyYzM4ZTJjM2Y3NC5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21lbnVfYmFySWNvbi40MTM5NzQ0OGE1NjNhN2ZiODhkMDQ3MjFkMjRiNmU0MC5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21pbnVzSWNvbi5kOTY1NDQyMDRjNDZhMTFiYjYwZmNiMTM5NjU0Mjc5NC5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21vZGFsQ2xvc2UuMWNiMGUxYTg5ODUyNDdjNTAzZmE0OGM2YzdlNDdjOTMuc3ZnXCIsXCJoZWlnaHRcIjoxOCxcIndpZHRoXCI6MTh9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tb3JlQnV0dG9uSWNvbi43OGUwMDllN2VjOTRkZjcwNGYzNTgyZWNjN2YyMmIwOC5zdmdcIixcImhlaWdodFwiOjYwLFwid2lkdGhcIjo2MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21vcmVJY29uLjk5OWFiY2RlYTI3NWQzN2M1YWMxNWExZDA3YTY2NDk1LnN2Z1wiLFwiaGVpZ2h0XCI6NjAsXCJ3aWR0aFwiOjYwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbW9yZVZpZXdBcnJvdy42MTI4YmJlYzBhNWZiZTc2NmY3NmYwZThkMzk0YWFhYi5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215ZmVlZEljb24uMDdmMDA5NWEwNzM3YzM1OTdlNTc2YTVkYjc5Y2RmNjguc3ZnXCIsXCJoZWlnaHRcIjo5NCxcIndpZHRoXCI6OTR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvMC0yMGltZy45ZWI2N2NiZThlMmJmODc4MGY2ZjExYjVjMWUwZWE1Ni5zdmdcIixcImhlaWdodFwiOjExNSxcIndpZHRoXCI6MTgwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlLzEwMGltZy4xYTQ1ZTAyZTI3NTNhMzdiM2JlZGIwZTZjZjY5ZTE5Mi5zdmdcIixcImhlaWdodFwiOjExNSxcIndpZHRoXCI6MTgwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlLzIxLTUwaW1nLmVlNTNiYjZlZDMxMDAzMmZlYmQxZTAwYTE0N2FhNjhiLnN2Z1wiLFwiaGVpZ2h0XCI6MTE1LFwid2lkdGhcIjoxODB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvNTEtODBpbWcuOTdhZWYwZmYyMTQ0NzIxNTAwOTg2NjBjZTg0YmY3Y2Uuc3ZnXCIsXCJoZWlnaHRcIjoxMTUsXCJ3aWR0aFwiOjE4MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS84MS05OWltZy4yYWZmYTFkN2MwZmRlZDQ3YWMzZWZjMmJlNTEyZmIyZi5zdmdcIixcImhlaWdodFwiOjExNSxcIndpZHRoXCI6MTgwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2NvbW11bmljYXRpb25LaW5nLmVhOTQyODdhNTZmZWZhNGQ2OGE3YzZjNmExNzA4NzkxLnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2NvbW11bmljYXRpb25LaW5nX2ZpbGwuNmEzYTVkZjc3Mjg5ZmRmNmJhOWU1NjIxODQwODU1MGEuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvZWRpdC40ZmZmMjMwM2IyYWYyZDc4NTIzNDhlYzY0YjA4ZDI0Yy5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9lbXBhdGhpemluZy41NDhlZmMzOTMwMjkzMDFmOGZjMGMxNmY4OTM4NzQxNi5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9lbXBhdGhpemluZ19maWxsLmYyMmM3OWI0ZGEzMzEzY2IxYzhkNjc3NzQzZjVmNjlhLnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2ZpcnN0Q29tbWVudC41MWJlZDQ1N2NjOTA5MjQ5ZjBmODI2YTIyOTQxODMzMy5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9maXJzdENvbW1lbnRfZmlsbC5jMjZiNmU4ZTg1MTc2OGE2ZGQyODA2ZWExMmQ1YTA3NC5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9nZXRDaGFsbGVuZ2UuNmY2ZGRlZjA3ODI2OWRlOTA1OGVmOTc2ZjI3NDU2ZWUuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvZ2V0Q2hhbGxlbmdlX2ZpbGwuMjdlMGQ0YmMyNmI2MDg2YWVlNWNjZjY0OTRmZjg1ZGQuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvZ3Jvd2luZ1RvZ2V0aGVyLjNiZmM4Yzg2NzUzYmY0YjFkMThiMmVlNWI5YjQ4YjI1LnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2dyb3dpbmdUb2dldGhlcl9maWxsLjliNmYxMTdkMGIxYzIwNDU4Mjc2MDU0NGM4YmE3Njk4LnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL25hdHVyYWxCb3JuTzIuYzM1Y2Q1N2IyOTcyZWQ4ZmY4YTRjMjAwMWZiZWQ3MjIuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvbmF0dXJhbEJvcm5PMl9maWxsLjdiYjEwMDFmMWQ1ZjQxNTRjNGNmY2IwMjJkMDcxMWZlLnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3JlYWR5Rm9yQ29tbXVuaWNhdGlvbi4yMjJiNzZhMDBiMDQ4NGNkNzZmZGU2MjMyMDk0NDIyYS5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9yZWFkeUZvckNvbW11bmljYXRpb25fZmlsbC4yMjk5YWNhZTZmMjk0MTBmYjY4YjRhYTZiODI3YjhlMy5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9yZWFkeUZvckdyb3cuYjg0ZGI1ZDY1YTA3ZWY2ZWM5OWY0ZWFjNjI2OTc5NTcuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvcmVhZHlGb3JHcm93X2ZpbGwuMWQ2Y2YyYjY5MjI3YWM2ZjJkZDk1MGQ2MDQ0NjJkMGIuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2Uvc2h5RW1haWwuYjQ2ZTE5ZDE5YThhODkzMjUyNjUzMTc1YzhlNzViOGMuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2Uvc2h5RW1haWxfZmlsbC40MGNlNjEyMWRkNThiYTdhMjQ3YWFiNTZlYTA5OGNiMy5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9zeW1wYXRoeUtpbmcuNjhhODRjYTY3Y2I0M2MwMGMwODZkOWJhZDdhNjQ0NmEuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2Uvc3ltcGF0aHlLaW5nX2ZpbGwuMmU3ZDBlNDI0ZjgxMDJlMDZiZjM2YTIwN2RlYmFiNDYuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvdXNlZnVsTGVhcm5NeXNlbGYuNWZlNDQ1NjU1N2E5YTkxZGVkMzNjYzU2MGE3MDU1NTcuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvdXNlZnVsTGVhcm5NeXNlbGZfZmlsbC5jYTk1NDg5OGE0ZTFiOGRkZDQxYjE5YzNmNThiMjA4Ny5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS91c2VmdWxTaGFyZVRvZ2V0aGVyLjJjZjczNzM0MTUyODNjMjI2NTFjYzkyNjI1ZTAwYzgzLnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3VzZWZ1bFNoYXJlVG9nZXRoZXJfZmlsbC4wZGMxZDY1OWNlMWY3NzcwYWJiMzlkYzg1NDY5OWI2NC5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS93ZWxjb21lVG9PMi5lZTVlMTZjYWY3ZDRmYTcyNmUzYWFiOTNhYzkyMzY0Ny5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS93ZWxjb21lVG9PMl9maWxsLjE0MDY5YTZmMjA3ZmFkYWJkZWI0ZGRlZmMyNWUxMDk4LnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbmV4dEljb24uY2YyNWM0MTBlODE2MzEwOTdjOWFmNzU5ZDJkMjYwMjMuc3ZnXCIsXCJoZWlnaHRcIjo2MCxcIndpZHRoXCI6NjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9ub3RpY2VIZWFkZXJJY29uLjAzNWNmODM2YjlmYTcwYzdhZDJmN2IzYWMwNTc0OTk1LnN2Z1wiLFwiaGVpZ2h0XCI6MzUwLFwid2lkdGhcIjozNTB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wbHVzSWNvbi4yZTRlOTQ3NGZjNWE2NzJmZDRhN2RkNmMyYjg5M2MzYy5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BsdXNJY29uR3JleS41Yjg0MmE2MWMzOWMyOWMwM2IwOTA4MmM2ZjdiZjgzOS5zdmdcIixcImhlaWdodFwiOjM4LFwid2lkdGhcIjozOH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BsdXNJY29uX2RmZGZkZi4yZTM0NGEyMDIyNDkxZWRhZGQxNWQwNmYyNTQzY2RjYS5zdmdcIixcImhlaWdodFwiOjE0MCxcIndpZHRoXCI6MTQwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvcHJldkNhdGVnb3J5QnV0dG9uLjNkMTAwNzUzZTg5MDRhYzhiZmQwMWU3MjE1YTQxYzdlLnN2Z1wiLFwiaGVpZ2h0XCI6NjAsXCJ3aWR0aFwiOjYwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvc2NyYXAuZjEzYzk5YWU4ZGRmZThjZGQ5NTY0NDkwNzVhY2ZkODkuc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zY3JhcEljb24uZTJhYTJiNDJlMzA1ZjcwNmE2MmFmNWRiMThhMzdiOTEuc3ZnXCIsXCJoZWlnaHRcIjoyOCxcIndpZHRoXCI6Mjh9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zY3JhcF9maWxsZWQuOWNhOTFkZTVkOGMwYWRhZDdhMzAwOWRkYzYxYmY5NTguc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zaGFyZVBob3RvMS45OTA3MzgyMjA1YTU2NzMzYmNiNGMyMjg4ZGNlMTA4OS5wbmdcIixcImhlaWdodFwiOjQ5NyxcIndpZHRoXCI6NzIwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmFzc2V0cyUyRmltYWdlcyUyRnNoYXJlUGhvdG8xLjk5MDczODIyMDVhNTY3MzNiY2I0YzIyODhkY2UxMDg5LnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvc2hhcmVQaG90bzIuNTE3NjM4OTRiMTBmMDExNmY0NTYzNDY2MTY5ZTBiZDAucG5nXCIsXCJoZWlnaHRcIjo3OTMsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZhc3NldHMlMkZpbWFnZXMlMkZzaGFyZVBob3RvMi41MTc2Mzg5NGIxMGYwMTE2ZjQ1NjM0NjYxNjllMGJkMC5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NtYWxsTGVmdEFycm93LjZkYjlkZmMwM2RmNDBjMjJmZjhkMmRmNDk3Y2YyMjgyLnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvc21hbGxSaWdodEFycm93LmU2MDA4NmQ2YWY1YTgyNTUzYTdhZmFjNTIxZDRhZDNiLnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvc3BlYWtlckJhZGdlMS5lYmIzMzdlNWY4YTYzZDdmNDM2N2M2YTFjMmM3NGIwOC5wbmdcIixcImhlaWdodFwiOjc4MCxcIndpZHRoXCI6NzgwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmFzc2V0cyUyRmltYWdlcyUyRnNwZWFrZXJCYWRnZTEuZWJiMzM3ZTVmOGE2M2Q3ZjQzNjdjNmExYzJjNzRiMDgucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zcGVha2VyQmFkZ2UyLjQ1Zjg4YzA1Mzg0YzVmMDhlMmQ3ZmJhNTA4MDZlZDU0LnBuZ1wiLFwiaGVpZ2h0XCI6NzgwLFwid2lkdGhcIjo3ODAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGcHVibGljJTJGYXNzZXRzJTJGaW1hZ2VzJTJGc3BlYWtlckJhZGdlMi40NWY4OGMwNTM4NGM1ZjA4ZTJkN2ZiYTUwODA2ZWQ1NC5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NwZWFrZXJCYWRnZTMuNGRiMTg0MmFjY2E3ZDYwMWQ1MjZiNWRjYjVkOGIxNzIucG5nXCIsXCJoZWlnaHRcIjo3ODAsXCJ3aWR0aFwiOjc4MCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZhc3NldHMlMkZpbWFnZXMlMkZzcGVha2VyQmFkZ2UzLjRkYjE4NDJhY2NhN2Q2MDFkNTI2YjVkY2I1ZDhiMTcyLnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvdGh1bW5haWxDb21tZW50LmNlMjM3ODBjMWQ5Yjk5MzEyNzBiZWY0YjRmYTljNzlmLnN2Z1wiLFwiaGVpZ2h0XCI6MjAsXCJ3aWR0aFwiOjIwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvdGh1bW5haWxIZWFydC5lMGE5NDgxMjIyMzI2MGNkODA1NGVlNDJkZWRhNjdkMy5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3VzZXJJbWFnZS42ZTU2MWVhZThhYWViMGQyNjJkNTE4MmNjMjE1NjhjMC5wbmdcIixcImhlaWdodFwiOjEwMCxcIndpZHRoXCI6MTAwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmFzc2V0cyUyRmltYWdlcyUyRnVzZXJJbWFnZS42ZTU2MWVhZThhYWViMGQyNjJkNTE4MmNjMjE1NjhjMC5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3dyaXRlSWNvbi41N2IyMzkwMjk3M2FjYzg0ZGNiYTZmOGUwM2UxM2UzYy5zdmdcIixcImhlaWdodFwiOjk0LFwid2lkdGhcIjo5NH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3hJY29uLjQwMzE2NWQzZjMyYzEyN2ZhNmY2ODNlY2U0YWYzYWNmLnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY29pbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtcmVzZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXRvb2xzXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJSZWFjdCIsIlNCdXR0b24iLCJCdXR0b24iLCJjaGlsZHJlbiIsInByb3BzIiwiU3R5bGVkIiwiYnV0dG9uIiwiaWZQcm9wIiwiSWNvbiIsImhlaWdodCIsImFsdCIsIlNJbWciLCJpbWciLCJJbnB1dCIsImF1dG9Db21wbGV0ZSIsIlNJbnB1dCIsImlucHV0IiwiZGVmYXVsdCIsImRheWpzIiwiSW1hZ2UiLCJUaHVtYm5haWxDb21tZW50SWNvbiIsIlRodW1ibmFpbExpa2VJY29uIiwiQ29uY2VydFdyYXBwZXIiLCJDb250ZW50IiwiSW5mbyIsIlRodW1ibmFpbENvbnRhaW5lciIsIlRodW1ibmFpbEluZm8iLCJUaHVtYm5haWxPdmVybGF5IiwiQ29uY2VydCIsImltZ1RodW1ibmFpbCIsImF1dGhvck5pY2tuYW1lIiwiaW50ZXJlc3RMaXN0IiwiY3JlYXRlZEF0IiwidGl0bGUiLCJ0ZXh0IiwiY29tbWVudE51bSIsImxpa2VOdW0iLCJvbkNsaWNrRnVuYyIsImludGVyZXN0RGl2aWRlIiwiam9pbiIsImZvcm1hdCIsIl9faHRtbCIsInVuZGVmaW5lZCIsInBhbGV0dGUiLCJ0aGVtZSIsImRpdiIsIlNlYXJjaEljb24iLCJTZWFyY2hCYXJXcmFwcGVyIiwiU2VhcmNoQnV0dG9uIiwiU2VhcmNoSW5wdXQiLCJTZWFyY2hCYXIiLCJvbkNsaWNrU2VhcmNoIiwib25DaGFuZ2VLZXl3b3JkIiwiSGVhZGVyTG9nb0ljb24iLCJEZXNpZ25lciIsIkRldmVsb3BlciIsIkZvb3RlcldyYXBwZXIiLCJMb2dvIiwiTWVtYmVyIiwiUGxhbm5lciIsIlNlcnZlciIsIlRleHQiLCJGb290ZXIiLCJMaW5rIiwiTm90aWNlSGVhZGVySWNvbiIsIkJhY2tncm91bmQiLCJDb25jZXJ0QnV0dG9uIiwiSWNvbkNvbnRhaW5lciIsIk5vdGljZUhlYWRlcldyYXBwZXIiLCJOb3RpY2VIZWFkZXIiLCJhIiwiU21hbGxMZWZ0QXJyb3dJY29uIiwiU21hbGxSaWdodEFycm93SWNvbiIsInVzZVN0YXRlIiwidXNlSGlzdG9yeSIsIk5hdmlnYXRpb25Db250YWluZXIiLCJOb3RpY2VMaXN0V3JhcHBlciIsIlBhZ2VOYXZpIiwiUGFnZU51bWJlciIsIk5vdGljZUxpc3QiLCJub3RpY2VMaXN0IiwidG90YWxOb3RpY2VOdW0iLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiaGlzdG9yeSIsInN0YXJ0UGFnZSIsInNldFN0YXJ0UGFnZSIsImVuZFBhZ2UiLCJzZXRFbmRQYWdlIiwiY29tbWVudHNPZlBhZ2UiLCJ0b3RhbFBhZ2UiLCJNYXRoIiwiY2VpbCIsInBhZ2VJbmRleCIsIkFycmF5IiwibWFwIiwiXyIsImkiLCJ0YXJnZXQiLCJzbGljZSIsImhhbmRsZVBhZ2VDbGljayIsImUiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVByZXZQYWdlQ2xpY2siLCJoYW5kbGVOZXh0UGFnZUNsaWNrIiwibm90aWNlIiwidXNlciIsIm5pY2tuYW1lIiwiaW50ZXJlc3QiLCJwdXNoIiwiX2lkIiwicGFnZUlkeCIsIkRpYW1vbmRJY29uIiwiRGV0YWlsIiwiTWFpbiIsIlNlYXJjaEZvcm1XcmFwcGVyIiwiU2VhcmNoRm9ybSIsInJlUmVuZGVyS2V5d29yZCIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJjb250ZW50TGlzdE51bSIsImtleXdvcmRDaGFuZ2UiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsIkltYWdlMSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJfdG9CYXNlNjQiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19lc01vZHVsZSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImIiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwic21hbGxlc3RSYXRpbyIsIm1pbiIsIndpZHRocyIsInMiLCJraW5kIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJwcmlvcml0eSIsImxvYWRpbmciLCJsYXp5Qm91bmRhcnkiLCJjbGFzc05hbWUiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlZiIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInVybCIsIlVSTCIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJlcnIiLCJlcnJvciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsInNwbGl0Iiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkhlYWQiLCJSZWNvaWxSb290IiwiVGhlbWVQcm92aWRlciIsIkdsb2JhbFN0eWxlcyIsIk15QXBwIiwiQWxlcnRJY29uIiwiQWxsRmVlZEljb24iLCJBcnJvd0Rvd25JY29uIiwiQXJyb3dVcEljb24iLCJDYXV0aW9uSWNvbiIsIkNoYWxsZW5nZUltZyIsIkNoYXJhY3RlckJsYWNrSWNvbiIsIkNoYXJhY3RlckNvbG9yMUljb24iLCJDaGFyYWN0ZXJDb2xvcjJJY29uIiwiQ2hhcmFjdGVyQ29sb3IzSWNvbiIsIkNoZWNrQWxsT2ZmSWNvbiIsIkNoZWNrQWxsT25JY29uIiwiQ2hlY2tlZEljb24iLCJDaGVja0ljb24iLCJDaGVja0NpcmNsZUljb24iLCJDaGVja09mZkljb24iLCJDaGVja09uSWNvbiIsIkNvbG9yU2NyYXBJY29uIiwiQ29tbWVudEljb24iLCJDb21tZW50Q291bnRJY29uIiwiRGVsZXRlSWNvbiIsIkRlbGV0ZU1vZGFsSW1nIiwiRWRpdEljb24iLCJFbXB0eUJvb2ttYXJrSWNvbiIsIkVtcHR5Q2hlY2tCb3hJY29uIiwiRXJyb3JJY29uIiwiRmlsbGVkQm9va21hcmtJY29uIiwiRmlsbGVkQ2hlY2tCb3hJY29uIiwiSGFtYnVyZ2VySWNvbiIsIkhhbUNoYWxsZW5nZUljb24iLCJIYW1VbmNoYWxsZW5nZUljb24iLCJIYW1BcnJvd0Rvd25JY29uIiwiSGFtQXJyb3dVcEljb24iLCJPMkljb24iLCJMaWtlSWNvbiIsIkNsaWNrR29vZEljb24iLCJMaWtlRmlsbGVkSWNvbiIsIkVkaXRXaGl0ZUljb24iLCJKb2luRXJySWNvbiIsIkxhbmRpbmdCYWNrSW1nIiwiTGFyZ2VMZWZ0QXJyb3dJY29uIiwiTGFyZ2VSaWdodEFycm93SWNvbiIsIkxpbmVJY29uIiwiTG9naW5BbGVydEljb24iLCJMb2dpbkljb24iLCJNYWluQ2FyZDFJbWciLCJNYWluQ2FyZDJJbWciLCJNYWluQ2FyZDNJbWciLCJNYWluQ2FyZDRJbWciLCJNZW51QmFySWNvbiIsIk1pbnVzSWNvbiIsIk1vZGFsQ2xvc2VJY29uIiwiTW9yZUljb24iLCJNb3JlQ2xpY2tlZEljb24iLCJNb3JlVmlld0Fycm93SWNvbiIsIk15RmVlZEljb24iLCJOZXh0SWNvbiIsIlBsdXNJY29uIiwiR3JleVBsdXNJY29uIiwiR3JleWRmUGx1c0ljb24iLCJQcmV2SWNvbiIsIlNjcmFwSWNvbiIsIkdyYXlTY3JhcEljb24iLCJTY3JhcEZpbGxlZEljb24iLCJDb25jZXJ0MUltZyIsIkNvbmNlcnQySW1nIiwiU3BlYWtlckJhZGdlMUltZyIsIlNwZWFrZXJCYWRnZTJJbWciLCJTcGVha2VyQmFkZ2UzSW1nIiwiVXNlckltZyIsIldyaXRlSWNvbiIsIlhJY29uIiwiUGVyY2VudDIwSWNvbiIsIlBlcmNlbnQxMDBJY29uIiwiUGVyY2VudDQwSWNvbiIsIlBlcmNlbnQ2MEljb24iLCJQZXJjZW50ODBJY29uIiwiQ29tbXVuaWNhdGlvbktpbmdJY29uIiwiQ29tbXVuaWNhdGlvbktpbmdGaWxsSWNvbiIsIk15UGFnZUVkaXRJY29uIiwiRW1wYXRoaXppbmdJY29uIiwiRW1wYXRoaXppbmdGaWxsSWNvbiIsIkZpcnN0Q29tbWVudEljb24iLCJGaXJzdENvbW1lbnRGaWxsSWNvbiIsIkdldENoYWxsZW5nZUljb24iLCJHZXRDaGFsbGVuZ2VGaWxsSWNvbiIsIkdyb3dpbmdUb2dldGhlckljb24iLCJHcm93aW5nVG9nZXRoZXJGaWxsSWNvbiIsIk5hdHVyYWxCb3JuTzJJY29uIiwiTmF0dXJhbEJvcm5PMkZpbGxJY29uIiwiUmVhZHlGb3JDb21tdW5pY2F0aW9uSWNvbiIsIlJlYWR5Rm9yQ29tbXVuaWNhdGlvbkZpbGxJY29uIiwiUmVhZHlGb3JHcm93SWNvbiIsIlJlYWR5Rm9yR3Jvd0ZpbGxJY29uIiwiU2h5RW1haWxJY29uIiwiU2h5RW1haWxGaWxsSWNvbiIsIlN5bXBhdGh5S2luZ0ljb24iLCJTeW1wYXRoeUtpbmdGaWxsSWNvbiIsIlVzZWZ1bExlYXJuTXlzZWxmSWNvbiIsIlVzZWZ1bExlYXJuTXlzZWxmRmlsbEljb24iLCJVc2VmdWxTaGFyZVRvZ2V0aGVySWNvbiIsIlVzZWZ1bFNoYXJlVG9nZXRoZXJGaWxsSWNvbiIsIldlbGNvbWVUb08ySWNvbiIsIldlbGNvbWVUb08yRmlsbEljb24iLCJjcmVhdGVHbG9iYWxTdHlsZSIsInJlc2V0IiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJncmF5c2NhbGUiLCJlbXB0eUltYWdlIiwibW9iaWxlIiwidGFibGV0IiwibGFwdG9wIiwiZGVza3RvcCIsImZvbnQiLCJkcDEiLCJkcDFfZW5nIiwiZHAyIiwiZHAyX2VuZyIsImRwM19lbmciLCJkcDQiLCJoMSIsImgxX2VuZyIsImgyIiwiaDJfZW5nIiwic3ViaGVhZDEiLCJzdWJoZWFkMV9lbmciLCJzdWJoZWFkMiIsInN1YmhlYWQyX2VuZyIsInN1YmhlYWQzIiwic3ViaGVhZDNfZW5nIiwic3ViaGVhZDQiLCJzdWJoZWFkNF9lbmciLCJzdWJoZWFkNSIsInN1YmhlYWQ1X2VuZyIsImJvZHkxIiwiYm9keTFfZW5nIiwiYm9keTIiLCJib2R5Ml9lbmciLCJib2R5MyIsImJvZHkzX2VuZyIsImJvZHk0IiwiYm9keTRfZW5nIl0sInNvdXJjZVJvb3QiOiIifQ==