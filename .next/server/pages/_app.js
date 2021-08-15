(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./apis/index.ts":
/*!***********************!*\
  !*** ./apis/index.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notice_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice.api */ "./apis/notice.api.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _notice_api__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _notice_api__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./apis/notice.api.ts":
/*!****************************!*\
  !*** ./apis/notice.api.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNoticeListData": () => (/* binding */ getNoticeListData),
/* harmony export */   "getNoticeData": () => (/* binding */ getNoticeData),
/* harmony export */   "getNoticeSearchData": () => (/* binding */ getNoticeSearchData),
/* harmony export */   "postNoticeComment": () => (/* binding */ postNoticeComment)
/* harmony export */ });
/* harmony import */ var libs_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/axios */ "./libs/axios.ts");

const PREFIX_URL = '/notice';
const getNoticeListData = async ({
  limit = 8,
  offset = 0
}) => {
  try {
    const data = await libs_axios__WEBPACK_IMPORTED_MODULE_0__.serverAxios.get(`${PREFIX_URL}`, {
      params: {
        offset,
        limit
      }
    });

    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return null;
  }
};
const getNoticeData = async noticeID => {
  try {
    const data = await libs_axios__WEBPACK_IMPORTED_MODULE_0__.serverAxios.get(`${PREFIX_URL}/${noticeID}`, {});

    if (data.data.status === 200) {
      return data.data.data[0];
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return null;
  }
};
const getNoticeSearchData = async ({
  limit = 8,
  offset = 0,
  keyword
}) => {
  try {
    const data = await libs_axios__WEBPACK_IMPORTED_MODULE_0__.serverAxios.get(`${PREFIX_URL}/search?keyword=${keyword}`, {
      params: {
        offset,
        limit
      }
    });

    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return null;
  }
};
const postNoticeComment = async (token, noticeID, commentData) => {
  try {
    const data = await libs_axios__WEBPACK_IMPORTED_MODULE_0__.serverAxios.post(`${PREFIX_URL}/comment/${noticeID}`, commentData, {
      headers: {
        Authorization: token
      }
    });

    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return null;
  }
};

/***/ }),

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

/***/ "./components/atoms/HashTag/index.tsx":
/*!********************************************!*\
  !*** ./components/atoms/HashTag/index.tsx ***!
  \********************************************/
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

var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\atoms\\HashTag\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function HashTag(_ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SHashTag, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

const SHashTag = styled_components__WEBPACK_IMPORTED_MODULE_2___default().label.withConfig({
  displayName: "HashTag__SHashTag",
  componentId: "sc-huiw24-0"
})(["padding:5px 10px;border-radius:20px;background-color:#f5f5f5;font-family:'AppleSDGothicNeo';font-size:14px;color:#a5a5a5;margin-right:20px;"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HashTag);

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

/***/ "./components/atoms/Modal/index.tsx":
/*!******************************************!*\
  !*** ./components/atoms/Modal/index.tsx ***!
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
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/atoms/Modal/style.ts");


var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\atoms\\Modal\\index.tsx";



function Modal(_ref) {
  let props = Object.assign({}, _ref);
  const {
    children,
    isOpen,
    setIsOpen,
    isBlur
  } = props;

  const closeHandler = () => {
    setIsOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.SModal, {
    isBlur: isBlur,
    children: isOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modal__background",
        onClick: closeHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modal",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./components/atoms/Modal/style.ts":
/*!*****************************************!*\
  !*** ./components/atoms/Modal/style.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SModal": () => (/* binding */ SModal)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SModal = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__SModal",
  componentId: "sc-uxksyn-0"
})([".modal{position:absolute;z-index:100;&__background{position:fixed;top:0;left:0;width:100vw;height:100vh;opacity:", ";background-color:", ";}}"], props => props.isBlur ? 0.3 : undefined, props => props.isBlur ? 'rgba(0,0,0,0.5)' : undefined);

/***/ }),

/***/ "./components/atoms/TextArea/index.tsx":
/*!*********************************************!*\
  !*** ./components/atoms/TextArea/index.tsx ***!
  \*********************************************/
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

var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\atoms\\TextArea\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function TextArea(_ref) {
  let {
    name,
    autoComplete = 'off'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name", "autoComplete"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(STextArea, _objectSpread({
    name: name,
    autoComplete: autoComplete
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 10
  }, this);
}

const STextArea = styled_components__WEBPACK_IMPORTED_MODULE_2___default().textarea.withConfig({
  displayName: "TextArea__STextArea",
  componentId: "sc-h7k2zn-0"
})(["resize:none;"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);

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
/* harmony export */   "HashTag": () => (/* reexport safe */ _HashTag__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Icon": () => (/* reexport safe */ _Icon__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "Input": () => (/* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Modal": () => (/* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "TextArea": () => (/* reexport safe */ _TextArea__WEBPACK_IMPORTED_MODULE_5__.default)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./components/atoms/Button/index.tsx");
/* harmony import */ var _HashTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HashTag */ "./components/atoms/HashTag/index.tsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./components/atoms/Icon/index.tsx");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./components/atoms/Input/index.tsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./components/atoms/Modal/index.tsx");
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextArea */ "./components/atoms/TextArea/index.tsx");







/***/ }),

/***/ "./components/molecules/CommentWrite/index.tsx":
/*!*****************************************************!*\
  !*** ./components/molecules/CommentWrite/index.tsx ***!
  \*****************************************************/
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
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/molecules/CommentWrite/style.ts");

var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\molecules\\CommentWrite\\index.tsx";



function CommentWrite({
  value,
  isComment,
  handleChange,
  handleSubmit
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.CommentForm, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.CommentTextArea, {
        isCommentCheck: isComment,
        name: "comment",
        onChange: handleChange,
        value: value,
        placeholder: "\uB313\uAE00\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.CommentButton, {
        isCommentCheck: isComment,
        onClick: handleSubmit,
        children: isComment ? '댓글 작성' : '답글 작성'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentWrite);

/***/ }),

/***/ "./components/molecules/CommentWrite/style.ts":
/*!****************************************************!*\
  !*** ./components/molecules/CommentWrite/style.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentForm": () => (/* binding */ CommentForm),
/* harmony export */   "CommentTextArea": () => (/* binding */ CommentTextArea),
/* harmony export */   "CommentButton": () => (/* binding */ CommentButton)
/* harmony export */ });
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/atoms */ "./components/atoms/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_2__);



const CommentForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__CommentForm",
  componentId: "sc-1hrka7j-0"
})(["display:flex;flex-direction:column;margin-left:auto;"]);
const CommentTextArea = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_atoms__WEBPACK_IMPORTED_MODULE_0__.TextArea).withConfig({
  displayName: "style__CommentTextArea",
  componentId: "sc-1hrka7j-1"
})(["border:1px solid #dfdfdf;padding:10px;width:", ";height:", ";:focus{outline:none;}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.ifProp)('isCommentCheck', '100%', '713px'), (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.ifProp)('isCommentCheck', '110px', '53px'));
const CommentButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_atoms__WEBPACK_IMPORTED_MODULE_0__.Button).withConfig({
  displayName: "style__CommentButton",
  componentId: "sc-1hrka7j-2"
})(["display:flex;margin-top:8px;margin-left:auto;color:", ";font-family:'AppleSDGothicNeo';font-size:", ";font-weight:bold;&:hover{opacity:70%;cursor:pointer;}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.palette)('grayscale', 6), (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.ifProp)('isCommentCheck', '16px', '14px'));

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var public_assets_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! public/assets/images */ "./public/assets/images/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./components/molecules/Concert/style.ts");


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
  noticeID
}) {
  const interestDivide = interestList === null || interestList === void 0 ? void 0 : interestList.join(' | ');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: {
      pathname: `/notice/${noticeID}`
    },
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.ConcertWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.Info, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: authorNickname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: interestDivide
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: `${dayjs__WEBPACK_IMPORTED_MODULE_1___default()(createdAt).format('YY.MM.DD')}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.Content, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          dangerouslySetInnerHTML: {
            __html: `${text}`
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.ThumbnailContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: imgThumbnail,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.ThumbnailOverlay, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.ThumbnailInfo, {
            children: [likeNum === undefined ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: public_assets_images__WEBPACK_IMPORTED_MODULE_4__.ThumbnailLikeIcon,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: [" ", likeNum]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 19
              }, this)]
            }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: public_assets_images__WEBPACK_IMPORTED_MODULE_4__.ThumbnailCommentIcon,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: [" ", commentNum]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
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

/***/ "./components/molecules/DetailTitle/index.tsx":
/*!****************************************************!*\
  !*** ./components/molecules/DetailTitle/index.tsx ***!
  \****************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/molecules/DetailTitle/style.ts");


var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\molecules\\DetailTitle\\index.tsx";




function DetailTitle({
  pageName,
  title,
  authorNickname,
  createdAt,
  interestList
}) {
  const interestDivide = interestList === null || interestList === void 0 ? void 0 : interestList.join(' | ');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.DetailTitleWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Top, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: pageName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Middle, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Bottom, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: authorNickname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: `${dayjs__WEBPACK_IMPORTED_MODULE_1___default()(createdAt).format('YY.MM.DD')}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: interestDivide
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailTitle);

/***/ }),

/***/ "./components/molecules/DetailTitle/style.ts":
/*!***************************************************!*\
  !*** ./components/molecules/DetailTitle/style.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Top": () => (/* binding */ Top),
/* harmony export */   "Middle": () => (/* binding */ Middle),
/* harmony export */   "Bottom": () => (/* binding */ Bottom),
/* harmony export */   "DetailTitleWrapper": () => (/* binding */ DetailTitleWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_1__);


const Top = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Top",
  componentId: "sc-el4yyr-0"
})(["margin-bottom:20px;color:", ";", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 3), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.subhead4'));
const Middle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Middle",
  componentId: "sc-el4yyr-1"
})(["margin-bottom:30px;border-bottom:4px solid #3d3d3d;padding-bottom:14px;color:", ";", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 8), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.dp1'));
const Bottom = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Bottom",
  componentId: "sc-el4yyr-2"
})(["display:flex;flex:1;flex-direction:row;align-items:center;color:black;", ";p:nth-of-type(2){flex:1;margin-left:14px;color:", ";", ";}p:nth-of-type(3){color:", ";", ";}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.body4'), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 7), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.body2_eng'), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 3), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.body3'));
const DetailTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__DetailTitleWrapper",
  componentId: "sc-el4yyr-3"
})(["display:flex;flex-direction:column;margin-top:100px;height:164px;"]);

/***/ }),

/***/ "./components/molecules/LoginModal/index.tsx":
/*!***************************************************!*\
  !*** ./components/molecules/LoginModal/index.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/atoms */ "./components/atoms/index.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/images */ "./public/assets/images/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/molecules/LoginModal/style.ts");

var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\molecules\\LoginModal\\index.tsx";






function LoginModal({
  isLoginModalOpen,
  setIsLoginModalOpen
}) {
  const handleCloseButton = () => {
    setIsLoginModalOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_atoms__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    isOpen: isLoginModalOpen,
    setIsOpen: setIsLoginModalOpen,
    isBlur: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.LoginModalWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.LoginNotice, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: public_assets_images__WEBPACK_IMPORTED_MODULE_3__.LoginAlertIcon,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.LoginNoticeTitle, {
          children: "\uC557!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.LoginNoticeDetail, {
          children: "\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD55C \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.ButtonContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.CancelButton, {
          onClick: handleCloseButton,
          children: "\uCDE8\uC18C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.LoginButton, {
            children: "\uB85C\uADF8\uC778\uD558\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginModal);

/***/ }),

/***/ "./components/molecules/LoginModal/style.ts":
/*!**************************************************!*\
  !*** ./components/molecules/LoginModal/style.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginNotice": () => (/* binding */ LoginNotice),
/* harmony export */   "LoginNoticeTitle": () => (/* binding */ LoginNoticeTitle),
/* harmony export */   "LoginNoticeDetail": () => (/* binding */ LoginNoticeDetail),
/* harmony export */   "ButtonContainer": () => (/* binding */ ButtonContainer),
/* harmony export */   "CancelButton": () => (/* binding */ CancelButton),
/* harmony export */   "LoginButton": () => (/* binding */ LoginButton),
/* harmony export */   "LoginModalWrapper": () => (/* binding */ LoginModalWrapper)
/* harmony export */ });
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/atoms */ "./components/atoms/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_2__);



const LoginNotice = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__LoginNotice",
  componentId: "sc-16g4o9u-0"
})(["padding:0px 80px 0px 80px;img{display:flex;margin:auto;margin-top:-40px;}"]);
const LoginNoticeTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__LoginNoticeTitle",
  componentId: "sc-16g4o9u-1"
})(["padding:30px 0px 30px 0px;text-align:center;color:#000000;", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.theme)('font.dp4'));
const LoginNoticeDetail = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__LoginNoticeDetail",
  componentId: "sc-16g4o9u-2"
})(["text-align:center;color:", ";", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.palette)('grayscale', 9), (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.theme)('font.body3'));
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__ButtonContainer",
  componentId: "sc-16g4o9u-3"
})(["padding:50px 100px 0px 100px;text-align:center;justify-content:space-between;display:flex;"]);
const CancelButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_atoms__WEBPACK_IMPORTED_MODULE_0__.Button).withConfig({
  displayName: "style__CancelButton",
  componentId: "sc-16g4o9u-4"
})(["color:", ";", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.palette)('grayscale', 2), (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.theme)('font.subhead4'));
const LoginButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_atoms__WEBPACK_IMPORTED_MODULE_0__.Button).withConfig({
  displayName: "style__LoginButton",
  componentId: "sc-16g4o9u-5"
})(["color:", ";", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.palette)('primary', 5), (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.theme)('font.subhead4'));
const LoginModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__LoginModalWrapper",
  componentId: "sc-16g4o9u-6"
})(["position:fixed;top:0;right:0;bottom:0;left:0;margin:auto;border-radius:16px;border:solid 1px ", ";background-color:", ";width:500px;height:312px;"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.palette)('grayscale', 4), (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.palette)('grayscale', 0));

/***/ }),

/***/ "./components/molecules/NoticeSingleComment/index.tsx":
/*!************************************************************!*\
  !*** ./components/molecules/NoticeSingleComment/index.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis */ "./apis/index.ts");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/molecules */ "./components/molecules/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stores/user */ "./stores/user.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./components/molecules/NoticeSingleComment/style.ts");


var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\molecules\\NoticeSingleComment\\index.tsx";







function NoticeSingleComment({
  parentCommentID,
  userID,
  childrenComment,
  text,
  noticeID,
  isRerender,
  setIsRerender,
  isDeleted
}) {
  const {
    0: isOpenReply,
    1: setIsOpenReply
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: replyValue,
    1: setReplyValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const userStatusData = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(stores_user__WEBPACK_IMPORTED_MODULE_5__.userStatusState);
  const {
    0: isLoginModalOpen,
    1: setIsLoginModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);

  const onClickReplyOpen = () => {
    setIsOpenReply(!isOpenReply);
  };

  const handleChange = event => {
    setReplyValue(event.currentTarget.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (userStatusData) {
      await (0,apis__WEBPACK_IMPORTED_MODULE_1__.postNoticeComment)(userStatusData.token, noticeID, {
        parentID: parentCommentID,
        text: replyValue
      });
      setReplyValue('');
      setIsRerender(!isRerender);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.NoticeSingleCommentWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.CommentContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: userID === null || userID === void 0 ? void 0 : userID.img,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.CommentWriter, {
        children: userID === null || userID === void 0 ? void 0 : userID.nickname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.CommentText, {
        children: isDeleted ? '삭제된 댓글입니다.' : text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.CommentToggle, {
        onClick: onClickReplyOpen,
        children: isOpenReply ? '접기' : '답글보기'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.ReplyContainer, {
      children: isOpenReply && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.ReplyCommentWrite, {
          value: replyValue,
          isComment: false,
          handleChange: handleChange,
          handleSubmit: handleSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.ReplyContent, {
          children: childrenComment.map((data, index) => {
            var _data$userID, _data$userID2;

            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_molecules__WEBPACK_IMPORTED_MODULE_2__.ReplyComment, {
              img: (_data$userID = data.userID) === null || _data$userID === void 0 ? void 0 : _data$userID.img,
              nickname: (_data$userID2 = data.userID) === null || _data$userID2 === void 0 ? void 0 : _data$userID2.nickname,
              text: data.text,
              isDeleted: data.isDeleted
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_molecules__WEBPACK_IMPORTED_MODULE_2__.LoginModal, {
      isLoginModalOpen: isLoginModalOpen,
      setIsLoginModalOpen: setIsLoginModalOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoticeSingleComment);

/***/ }),

/***/ "./components/molecules/NoticeSingleComment/style.ts":
/*!***********************************************************!*\
  !*** ./components/molecules/NoticeSingleComment/style.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentContainer": () => (/* binding */ CommentContainer),
/* harmony export */   "CommentWriter": () => (/* binding */ CommentWriter),
/* harmony export */   "CommentText": () => (/* binding */ CommentText),
/* harmony export */   "CommentToggle": () => (/* binding */ CommentToggle),
/* harmony export */   "ReplyContainer": () => (/* binding */ ReplyContainer),
/* harmony export */   "ReplyCommentWrite": () => (/* binding */ ReplyCommentWrite),
/* harmony export */   "ReplyContent": () => (/* binding */ ReplyContent),
/* harmony export */   "NoticeSingleCommentWrapper": () => (/* binding */ NoticeSingleCommentWrapper)
/* harmony export */ });
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/molecules */ "./components/molecules/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_2__);



const CommentContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__CommentContainer",
  componentId: "sc-qlhvy-0"
})(["display:flex;justify-content:space-between;img{width:28px;height:28px;}"]);
const CommentWriter = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__CommentWriter",
  componentId: "sc-qlhvy-1"
})(["", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.theme)('font.subhead3'));
const CommentText = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__CommentText",
  componentId: "sc-qlhvy-2"
})(["width:647px;color:", ";", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.palette)('grayscale', 5), (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.theme)('font.body3'));
const CommentToggle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__CommentToggle",
  componentId: "sc-qlhvy-3"
})(["width:50px;text-align:right;color:", ";", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.palette)('primary', 3), (0,styled_tools__WEBPACK_IMPORTED_MODULE_2__.theme)('font.subhead2'));
const ReplyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__ReplyContainer",
  componentId: "sc-qlhvy-4"
})(["display:flex;flex-direction:column;margin:16px 0 31px;"]);
const ReplyCommentWrite = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(components_molecules__WEBPACK_IMPORTED_MODULE_0__.CommentWrite).withConfig({
  displayName: "style__ReplyCommentWrite",
  componentId: "sc-qlhvy-5"
})(["display:flex;justify-content:flex-end;"]);
const ReplyContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__ReplyContent",
  componentId: "sc-qlhvy-6"
})(["width:712px;"]);
const NoticeSingleCommentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "style__NoticeSingleCommentWrapper",
  componentId: "sc-qlhvy-7"
})(["display:flex;flex-direction:column;"]);

/***/ }),

/***/ "./components/molecules/ReplyComment/index.tsx":
/*!*****************************************************!*\
  !*** ./components/molecules/ReplyComment/index.tsx ***!
  \*****************************************************/
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
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/molecules/ReplyComment/style.ts");

var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\molecules\\ReplyComment\\index.tsx";



function ReplyComment({
  nickname,
  text,
  img,
  isDeleted
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ReplyCommentWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: img,
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Writer, {
      children: nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Text, {
      children: isDeleted ? '삭제된 댓글입니다.' : text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(ReplyComment));

/***/ }),

/***/ "./components/molecules/ReplyComment/style.ts":
/*!****************************************************!*\
  !*** ./components/molecules/ReplyComment/style.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Writer": () => (/* binding */ Writer),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "ReplyCommentWrapper": () => (/* binding */ ReplyCommentWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_1__);


const Writer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Writer",
  componentId: "sc-c9lxgr-0"
})(["margin-right:10px;width:90px;color:", ";", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 9), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.subhead3'));
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Text",
  componentId: "sc-c9lxgr-1"
})(["width:100%;white-space:normal;word-break:break-all;color:", ";", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 5), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.body3'));
const ReplyCommentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__ReplyCommentWrapper",
  componentId: "sc-c9lxgr-2"
})(["display:flex;justify-content:flex-end;margin:13px 0;margin-left:133px;width:585px;img{margin-right:10px;border-radius:100%;width:26px !important;height:26px !important;}"]);

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
/* harmony export */   "CommentWrite": () => (/* reexport safe */ _CommentWrite__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Concert": () => (/* reexport safe */ _Concert__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "DetailTitle": () => (/* reexport safe */ _DetailTitle__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "LoginModal": () => (/* reexport safe */ _LoginModal__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "NoticeSingleComment": () => (/* reexport safe */ _NoticeSingleComment__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "ChallengeReCommentList": () => (/* reexport safe */ _ReplyComment__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "ReplyComment": () => (/* reexport safe */ _ReplyComment__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "SearchBar": () => (/* reexport safe */ _SearchBar__WEBPACK_IMPORTED_MODULE_6__.default)
/* harmony export */ });
/* harmony import */ var _CommentWrite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentWrite */ "./components/molecules/CommentWrite/index.tsx");
/* harmony import */ var _Concert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Concert */ "./components/molecules/Concert/index.tsx");
/* harmony import */ var _DetailTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailTitle */ "./components/molecules/DetailTitle/index.tsx");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginModal */ "./components/molecules/LoginModal/index.tsx");
/* harmony import */ var _NoticeSingleComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NoticeSingleComment */ "./components/molecules/NoticeSingleComment/index.tsx");
/* harmony import */ var _ReplyComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReplyComment */ "./components/molecules/ReplyComment/index.tsx");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchBar */ "./components/molecules/SearchBar/index.tsx");








/***/ }),

/***/ "./components/organisms/DetailContent/index.tsx":
/*!******************************************************!*\
  !*** ./components/organisms/DetailContent/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/atoms */ "./components/atoms/index.ts");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/images */ "./public/assets/images/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/organisms/DetailContent/style.ts");


var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\organisms\\DetailContent\\index.tsx";






function DetailContent({
  video,
  imgThumbnail,
  desc,
  hashtag,
  likeNum,
  commentNum,
  scrapNum,
  onLike,
  onScrap,
  isUserLike,
  isUserScrap
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Video, {
      children: video ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("video", {
        src: video,
        controls: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 23
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: imgThumbnail
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 62
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Text, {
      dangerouslySetInnerHTML: {
        __html: `${desc}`
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), hashtag ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.HashTagList, {
      children: hashtag === null || hashtag === void 0 ? void 0 : hashtag.map((tag, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_atoms__WEBPACK_IMPORTED_MODULE_1__.HashTag, {
        children: tag
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.IconList, {
      children: [likeNum === undefined ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Like, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          className: "like__img",
          src: isUserLike ? public_assets_images__WEBPACK_IMPORTED_MODULE_3__.LikeFilledIcon : public_assets_images__WEBPACK_IMPORTED_MODULE_3__.LikeIcon,
          onClick: onLike,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this), likeNum]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Comment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          className: "comments__img",
          src: public_assets_images__WEBPACK_IMPORTED_MODULE_3__.CommentIcon,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), commentNum]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), scrapNum === undefined ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Scrap, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          className: "scrap__img",
          src: isUserScrap ? public_assets_images__WEBPACK_IMPORTED_MODULE_3__.ScrapFilledIcon : public_assets_images__WEBPACK_IMPORTED_MODULE_3__.ScrapIcon,
          onClick: onScrap,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this), scrapNum]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailContent);

/***/ }),

/***/ "./components/organisms/DetailContent/style.ts":
/*!*****************************************************!*\
  !*** ./components/organisms/DetailContent/style.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Video": () => (/* binding */ Video),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "HashTagList": () => (/* binding */ HashTagList),
/* harmony export */   "IconList": () => (/* binding */ IconList),
/* harmony export */   "Like": () => (/* binding */ Like),
/* harmony export */   "Comment": () => (/* binding */ Comment),
/* harmony export */   "Scrap": () => (/* binding */ Scrap)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_1__);


const Video = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Video",
  componentId: "sc-1ckn7up-0"
})(["margin-top:60px;height:468px;video{width:100%;height:100%;object-fit:cover;}img{width:100%;height:100%;object-fit:cover;}"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Text",
  componentId: "sc-1ckn7up-1"
})(["margin-top:40px;line-height:1.56;color:", ";", ";h1{", ";}h2{", ";}blockquote{padding-left:20px;border-left:3px solid ", ";}ol{list-style-type:decimal;list-style-position:inside;}ul li{list-style-type:disc;list-style-position:inside;}"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 6), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.body4'), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.h2_eng'), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.h1_eng'), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 6));
const HashTagList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__HashTagList",
  componentId: "sc-1ckn7up-2"
})(["margin-top:60px;"]);
const IconList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__IconList",
  componentId: "sc-1ckn7up-3"
})(["display:flex;flex-direction:row;margin:60px 0 18px;color:", ";", ";"], (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.palette)('grayscale', 7), (0,styled_tools__WEBPACK_IMPORTED_MODULE_1__.theme)('font.body4_eng'));
const Like = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Like",
  componentId: "sc-1ckn7up-4"
})(["display:flex;align-items:center;margin-right:20px;img{margin-right:10px;}"]);
const Comment = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Comment",
  componentId: "sc-1ckn7up-5"
})(["display:flex;align-items:center;margin-right:20px;img{margin-right:10px;}"]);
const Scrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Scrap",
  componentId: "sc-1ckn7up-6"
})(["display:flex;align-items:center;img{margin-right:10px;}"]);

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

/***/ "./components/organisms/NoticeCommentList/index.tsx":
/*!**********************************************************!*\
  !*** ./components/organisms/NoticeCommentList/index.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apis */ "./apis/index.ts");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/molecules */ "./components/molecules/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stores/user */ "./stores/user.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./components/organisms/NoticeCommentList/style.ts");


var _jsxFileName = "C:\\Users\\SEO\\Desktop\\Front-end\\components\\organisms\\NoticeCommentList\\index.tsx";







function NoticeCommentList({
  commentList,
  noticeID,
  isRerender,
  setIsRerender
}) {
  const {
    0: commentValue,
    1: setCommentValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    0: isLoginModalOpen,
    1: setIsLoginModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const userStatusData = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(stores_user__WEBPACK_IMPORTED_MODULE_5__.userStatusState);

  const handleChange = event => {
    setCommentValue(event.currentTarget.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (userStatusData) {
      await (0,apis__WEBPACK_IMPORTED_MODULE_1__.postNoticeComment)(userStatusData.token, noticeID, {
        parentID: null,
        text: commentValue
      });
      setCommentValue('');
      setIsRerender(!isRerender);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.CommentWriteContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_molecules__WEBPACK_IMPORTED_MODULE_2__.CommentWrite, {
        value: commentValue,
        isComment: true,
        handleChange: handleChange,
        handleSubmit: handleSubmit
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), commentList === null || commentList === void 0 ? void 0 : commentList.map((data, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_molecules__WEBPACK_IMPORTED_MODULE_2__.NoticeSingleComment, {
      parentCommentID: data._id,
      userID: data.userID,
      childrenComment: data.childrenComment,
      text: data.text,
      noticeID: noticeID,
      isRerender: isRerender,
      setIsRerender: setIsRerender,
      isDeleted: data.isDeleted
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_molecules__WEBPACK_IMPORTED_MODULE_2__.LoginModal, {
      isLoginModalOpen: isLoginModalOpen,
      setIsLoginModalOpen: setIsLoginModalOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoticeCommentList);

/***/ }),

/***/ "./components/organisms/NoticeCommentList/style.ts":
/*!*********************************************************!*\
  !*** ./components/organisms/NoticeCommentList/style.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentWriteContainer": () => (/* binding */ CommentWriteContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CommentWriteContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__CommentWriteContainer",
  componentId: "sc-15be8oj-0"
})(["margin-bottom:68px;"]);

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
        noticeID: notice._id
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
/* harmony export */   "DetailContent": () => (/* reexport safe */ _DetailContent__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Footer": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "NoticeCommentList": () => (/* reexport safe */ _NoticeCommentList__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "NoticeHeader": () => (/* reexport safe */ _NoticeHeader__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "NoticeList": () => (/* reexport safe */ _NoticeList__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "SearchForm": () => (/* reexport safe */ _SearchForm__WEBPACK_IMPORTED_MODULE_5__.default)
/* harmony export */ });
/* harmony import */ var _DetailContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailContent */ "./components/organisms/DetailContent/index.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./components/organisms/Footer/index.tsx");
/* harmony import */ var _NoticeCommentList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoticeCommentList */ "./components/organisms/NoticeCommentList/index.tsx");
/* harmony import */ var _NoticeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NoticeHeader */ "./components/organisms/NoticeHeader/index.tsx");
/* harmony import */ var _NoticeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NoticeList */ "./components/organisms/NoticeList/index.tsx");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchForm */ "./components/organisms/SearchForm/index.tsx");







/***/ }),

/***/ "./libs/axios.ts":
/*!***********************!*\
  !*** ./libs/axios.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serverAxios": () => (/* binding */ serverAxios)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const serverAxios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${"https://api.opentogether-o2.com/"}`,
  withCredentials: true
});

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

/***/ "./stores/user.ts":
/*!************************!*\
  !*** ./stores/user.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userState": () => (/* binding */ userState),
/* harmony export */   "userStatusState": () => (/* binding */ userStatusState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil-persist */ "recoil-persist");
/* harmony import */ var recoil_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil_persist__WEBPACK_IMPORTED_MODULE_1__);


const {
  persistAtom
} = (0,recoil_persist__WEBPACK_IMPORTED_MODULE_1__.recoilPersist)();
const userState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'user/atom',
  default: null,
  effects_UNSTABLE: [persistAtom]
});
const userStatusState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'userStatus/atom',
  default: null,
  effects_UNSTABLE: [persistAtom]
});

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ "recoil-persist":
/*!*********************************!*\
  !*** external "recoil-persist" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil-persist");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUdBLE1BQU07QUFBRXFHLEVBQUFBO0FBQUYsSUFBa0JELDZEQUFhLEVBQXJDO0FBRU8sTUFBTUUsU0FBUyxHQUFHSCw0Q0FBSSxDQUFvQjtBQUMvQ2x2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Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL28yLy4vYXBpcy9ub3RpY2UuYXBpLnRzIiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24vc3R5bGUudHMiLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL2F0b21zL0hhc2hUYWcvaW5kZXgudHN4Iiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9hdG9tcy9JY29uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvYXRvbXMvSW5wdXQvaW5kZXgudHN4Iiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9hdG9tcy9Nb2RhbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL2F0b21zL01vZGFsL3N0eWxlLnRzIiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9hdG9tcy9UZXh0QXJlYS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL2F0b21zL2luZGV4LnRzIiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvQ29tbWVudFdyaXRlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0NvbW1lbnRXcml0ZS9zdHlsZS50cyIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0NvbmNlcnQvaW5kZXgudHN4Iiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvQ29uY2VydC9zdHlsZS50cyIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0RldGFpbFRpdGxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL0RldGFpbFRpdGxlL3N0eWxlLnRzIiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTG9naW5Nb2RhbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL21vbGVjdWxlcy9Mb2dpbk1vZGFsL3N0eWxlLnRzIiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTm90aWNlU2luZ2xlQ29tbWVudC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL21vbGVjdWxlcy9Ob3RpY2VTaW5nbGVDb21tZW50L3N0eWxlLnRzIiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvUmVwbHlDb21tZW50L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1JlcGx5Q29tbWVudC9zdHlsZS50cyIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1NlYXJjaEJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL21vbGVjdWxlcy9TZWFyY2hCYXIvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL21vbGVjdWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0RldGFpbENvbnRlbnQvaW5kZXgudHN4Iiwid2VicGFjazovL28yLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvRGV0YWlsQ29udGVudC9zdHlsZS50cyIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0Zvb3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Gb290ZXIvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Ob3RpY2VDb21tZW50TGlzdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Ob3RpY2VDb21tZW50TGlzdC9zdHlsZS50cyIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05vdGljZUhlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Ob3RpY2VIZWFkZXIvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Ob3RpY2VMaXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvb3JnYW5pc21zL05vdGljZUxpc3Qvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9TZWFyY2hGb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9vMi8uL2NvbXBvbmVudHMvb3JnYW5pc21zL1NlYXJjaEZvcm0vc3R5bGUudHMiLCJ3ZWJwYWNrOi8vbzIvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9pbmRleC50cyIsIndlYnBhY2s6Ly9vMi8uL2xpYnMvYXhpb3MudHMiLCJ3ZWJwYWNrOi8vbzIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9vMi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbzIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vbzIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbzIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbzIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbzIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL28yLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbzIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9vMi8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbzIvLi9zdG9yZXMvdXNlci50cyIsIndlYnBhY2s6Ly9vMi8uL3N0eWxlcy9HbG9iYWxTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vbzIvLi9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9JY29uc19lZGl0d2hpdGUuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvYWxlcnRJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2FsbGZlZWRJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2Fycm93RG93bi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9hcnJvd1VwLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NhdXRpb25JY29uLnBuZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoYWxsZW5nZXJlZ2lzdGVyX2ltZy5wbmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGFyYWN0ZXJfYmxhY2tfSW1nLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoYXJhY3Rlcl9jb2xvcjFfSW1nLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoYXJhY3Rlcl9jb2xvcjJfSW1nLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoYXJhY3Rlcl9jb2xvcjNfSW1nLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoZWNrV2hpdGVJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoZWNrX2NpcmNsZUljb24ucG5nIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvY2hlY2tfb2ZmLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoZWNrX29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoZWNrYWxsX29mZi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGVja2FsbF9vbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGVja2VkSWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jb2xvcl9zY3JhcEljb24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvY29tbWVudC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jb21tZW50SWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9kZWxldGVJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2RlbGV0ZV9tb2RhbC5wbmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9kaWFtb25kLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2VkaXRJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2VtcHR5Qm9va21hcmsuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvZW1wdHlDaGVja0JveC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9lcnJJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ZpbGxlZEJvb2ttYXJrLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ZpbGxlZENoZWNrQm94LnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2hhbUNoYWxsZW5nZWljb24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaGFtVW5jaGFsbGVuZ2VpY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2hhbV9hcnJvd0Rvd24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaGFtX2Fycm93VXAuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaGFtYnVyZ2VyTG9nby5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9oZWFkZXJfbG9nby5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9oZWFydC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9oZWFydEljb24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaGVhcnRfZmlsbGVkLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb25zX3NlYXJjaC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9qb2luSW5wdXRFcnJJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xhbmRpbmdCYWNrLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xhcmdlTGVmdEFycm93LnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xhcmdlUmlnaHRBcnJvdy5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9saW5lLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xvZ2luQWxlcnQuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbG9naW5JY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbWFpbkNhcmQxLnBuZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21haW5DYXJkMi5wbmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tYWluQ2FyZDMucG5nIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbWFpbkNhcmQ0LnBuZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21lbnVfYmFySWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9taW51c0ljb24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbW9kYWxDbG9zZS5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tb3JlQnV0dG9uSWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tb3JlSWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tb3JlVmlld0Fycm93LnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215ZmVlZEljb24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlLzAtMjBpbWcuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlLzEwMGltZy5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvMjEtNTBpbWcuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlLzUxLTgwaW1nLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS84MS05OWltZy5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvY29tbXVuaWNhdGlvbktpbmcuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2NvbW11bmljYXRpb25LaW5nX2ZpbGwuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2VkaXQuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2VtcGF0aGl6aW5nLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9lbXBhdGhpemluZ19maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9maXJzdENvbW1lbnQuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2ZpcnN0Q29tbWVudF9maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9nZXRDaGFsbGVuZ2Uuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2dldENoYWxsZW5nZV9maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9ncm93aW5nVG9nZXRoZXIuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2dyb3dpbmdUb2dldGhlcl9maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9uYXR1cmFsQm9ybk8yLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9uYXR1cmFsQm9ybk8yX2ZpbGwuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3JlYWR5Rm9yQ29tbXVuaWNhdGlvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvcmVhZHlGb3JDb21tdW5pY2F0aW9uX2ZpbGwuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3JlYWR5Rm9yR3Jvdy5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvcmVhZHlGb3JHcm93X2ZpbGwuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3NoeUVtYWlsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9zaHlFbWFpbF9maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9zeW1wYXRoeUtpbmcuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3N5bXBhdGh5S2luZ19maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS91c2VmdWxMZWFybk15c2VsZi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvdXNlZnVsTGVhcm5NeXNlbGZfZmlsbC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvdXNlZnVsU2hhcmVUb2dldGhlci5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvdXNlZnVsU2hhcmVUb2dldGhlcl9maWxsLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS93ZWxjb21lVG9PMi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2Uvd2VsY29tZVRvTzJfZmlsbC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9uZXh0SWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9ub3RpY2VIZWFkZXJJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BsdXNJY29uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BsdXNJY29uR3JleS5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wbHVzSWNvbl9kZmRmZGYuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcHJldkNhdGVnb3J5QnV0dG9uLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NjcmFwLnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NjcmFwSWNvbi5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zY3JhcF9maWxsZWQuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc2hhcmVQaG90bzEucG5nIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc2hhcmVQaG90bzIucG5nIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc21hbGxMZWZ0QXJyb3cuc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc21hbGxSaWdodEFycm93LnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NwZWFrZXJCYWRnZTEucG5nIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc3BlYWtlckJhZGdlMi5wbmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zcGVha2VyQmFkZ2UzLnBuZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3RodW1uYWlsQ29tbWVudC5zdmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy90aHVtbmFpbEhlYXJ0LnN2ZyIsIndlYnBhY2s6Ly9vMi8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3VzZXJJbWFnZS5wbmciLCJ3ZWJwYWNrOi8vbzIvLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy93cml0ZUljb24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMveEljb24uc3ZnIiwid2VicGFjazovL28yLy4vcHVibGljL2Fzc2V0cy9mb250cy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbzIvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9vMi8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbzIvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL28yLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL28yL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcImRheWpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL28yL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL28yL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL28yL2V4dGVybmFsIFwicmVjb2lsXCIiLCJ3ZWJwYWNrOi8vbzIvZXh0ZXJuYWwgXCJyZWNvaWwtcGVyc2lzdFwiIiwid2VicGFjazovL28yL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9vMi9leHRlcm5hbCBcInN0eWxlZC1yZXNldFwiIiwid2VicGFjazovL28yL2V4dGVybmFsIFwic3R5bGVkLXRvb2xzXCIiLCJ3ZWJwYWNrOi8vbzIvaWdub3JlZHxDOlxcVXNlcnNcXFNFT1xcRGVza3RvcFxcRnJvbnQtZW5kXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlcnZlckF4aW9zIH0gZnJvbSAnbGlicy9heGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgSUZldGNoQ29tbWVudCxcclxuICBJRmV0Y2hQYXJhbWV0ZXIsXHJcbiAgSU5vdGljZSxcclxuICBJTm90aWNlQ29tbWVudERhdGEsXHJcbiAgSU5vdGljZUxpc3QsXHJcbiAgSVNlYXJjaE5vdGljZUxpc3QsXHJcbn0gZnJvbSAnLi4vdHlwZXMvbm90aWNlLnR5cGUnO1xyXG5cclxuY29uc3QgUFJFRklYX1VSTCA9ICcvbm90aWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXROb3RpY2VMaXN0RGF0YSA9IGFzeW5jICh7IGxpbWl0ID0gOCwgb2Zmc2V0ID0gMCB9OiBJRmV0Y2hQYXJhbWV0ZXIpOiBQcm9taXNlPElOb3RpY2VMaXN0IHwgbnVsbD4gPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VydmVyQXhpb3MuZ2V0KGAke1BSRUZJWF9VUkx9YCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBvZmZzZXQsXHJcbiAgICAgICAgbGltaXQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChkYXRhLmRhdGEuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgcmV0dXJuIGRhdGEuZGF0YS5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgYWxlcnQoZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5vdGljZURhdGEgPSBhc3luYyAobm90aWNlSUQ6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxJTm90aWNlIHwgbnVsbD4gPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VydmVyQXhpb3MuZ2V0KGAke1BSRUZJWF9VUkx9LyR7bm90aWNlSUR9YCwge30pO1xyXG4gICAgaWYgKGRhdGEuZGF0YS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gZGF0YS5kYXRhLmRhdGFbMF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBhbGVydChlLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Tm90aWNlU2VhcmNoRGF0YSA9IGFzeW5jICh7XHJcbiAgbGltaXQgPSA4LFxyXG4gIG9mZnNldCA9IDAsXHJcbiAga2V5d29yZCxcclxufTogSUZldGNoUGFyYW1ldGVyKTogUHJvbWlzZTxJU2VhcmNoTm90aWNlTGlzdCB8IG51bGw+ID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlcnZlckF4aW9zLmdldChgJHtQUkVGSVhfVVJMfS9zZWFyY2g/a2V5d29yZD0ke2tleXdvcmR9YCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBvZmZzZXQsXHJcbiAgICAgICAgbGltaXQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChkYXRhLmRhdGEuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgcmV0dXJuIGRhdGEuZGF0YS5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgYWxlcnQoZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3ROb3RpY2VDb21tZW50ID0gYXN5bmMgKFxyXG4gIHRva2VuOiBzdHJpbmcsXHJcbiAgbm90aWNlSUQ6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICBjb21tZW50RGF0YTogSU5vdGljZUNvbW1lbnREYXRhLFxyXG4pOiBQcm9taXNlPElGZXRjaENvbW1lbnQgfCBudWxsPiA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZXJ2ZXJBeGlvcy5wb3N0KGAke1BSRUZJWF9VUkx9L2NvbW1lbnQvJHtub3RpY2VJRH1gLCBjb21tZW50RGF0YSwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChkYXRhLmRhdGEuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgcmV0dXJuIGRhdGEuZGF0YS5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgYWxlcnQoZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTQnV0dG9uIH0gZnJvbSAnLi9zdHlsZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIFJlYWN0LkJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0RWxlbWVudCB8IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gQnV0dG9uKHsgY2hpbGRyZW4sIC4uLnByb3BzIH06IElQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgcmV0dXJuIDxTQnV0dG9uIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvU0J1dHRvbj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU0J1dHRvbiA9IFN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgcGFkZGluZyA6IDA7XHJcbiAgOmZvY3VzIHtcclxuICAgIG91dGxpbmUgOiBub25lO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IExhYmVsSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBMYWJlbEhUTUxBdHRyaWJ1dGVzPEhUTUxMYWJlbEVsZW1lbnQ+IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIYXNoVGFnKHsgY2hpbGRyZW4sIC4uLnByb3BzIH06IElQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgcmV0dXJuIDxTSGFzaFRhZyB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1NIYXNoVGFnPjtcclxufVxyXG5cclxuY29uc3QgU0hhc2hUYWcgPSBTdHlsZWQubGFiZWxgXHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiNhNWE1YTU7XHJcbiAgbWFyZ2luLXJpZ2h0OjIwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYXNoVGFnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgaWZQcm9wIH0gZnJvbSAnc3R5bGVkLXRvb2xzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUmVhY3QuSW1nSFRNTEF0dHJpYnV0ZXM8SFRNTEltYWdlRWxlbWVudD4ge1xyXG4gIGhlaWdodD86IHN0cmluZztcclxuICBjaXJjdWxhcj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEljb24oeyBoZWlnaHQgPSAnMnJlbScsIGFsdCA9ICcnLCAuLi5wcm9wcyB9OiBJUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIHJldHVybiA8U0ltZyBoZWlnaHQ9e2hlaWdodH0gYWx0PXthbHR9IHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmNvbnN0IFNJbWcgPSBTdHlsZWQuaW1nYFxyXG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLmhlaWdodH07XHJcbiAgYm9yZGVyLXJhZGl1czogJHtpZlByb3AoJ2NpcmN1bGFyJywgJzUwJScsICcnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUmVhY3QuSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XHJcbiAgYXV0b0NvbXBsZXRlPzogc3RyaW5nO1xyXG4gIHJlZj86IFJlYWN0LlJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcclxufVxyXG5cclxuZnVuY3Rpb24gSW5wdXQoeyBhdXRvQ29tcGxldGUgPSAnb2ZmJywgLi4ucHJvcHMgfTogSVByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICByZXR1cm4gPFNJbnB1dCBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX0gey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuY29uc3QgU0lucHV0ID0gU3R5bGVkLmlucHV0YFxyXG4gICAgbWFyZ2luIDogMDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTTW9kYWwgfSBmcm9tICcuL3N0eWxlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50O1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBpc09wZW46IGJvb2xlYW47XHJcbiAgc2V0SXNPcGVuOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgaXNCbHVyOiBib29sZWFuOyAvL+uqqOuLrOywveydtCDsvJzsoYzsnYTrlYwg65Kk7JeQIO2ajOyDieycvOuhnCDsspjrpqztlZjripTsp4AgKHRydWXrqbQg7ZqM7IOJ7LKY66as65CoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBNb2RhbCh7IC4uLnByb3BzIH06IElQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgaXNPcGVuLCBzZXRJc09wZW4sIGlzQmx1ciB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xvc2VIYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNNb2RhbCBpc0JsdXI9e2lzQmx1cn0+XHJcbiAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19iYWNrZ3JvdW5kXCIgb25DbGljaz17Y2xvc2VIYW5kbGVyfT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L1NNb2RhbD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIiwiaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU01vZGFsID0gU3R5bGVkLmRpdjx7IGlzQmx1cj86IGJvb2xlYW4gfT5gXHJcbiAgLm1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXggOiAxMDA7XHJcbiAgICAmX19iYWNrZ3JvdW5kIHtcclxuICAgICAgcG9zaXRpb24gOiBmaXhlZDtcclxuICAgICAgdG9wIDogMDtcclxuICAgICAgbGVmdCA6IDA7XHJcbiAgICAgIHdpZHRoIDogMTAwdnc7XHJcbiAgICAgIGhlaWdodCA6IDEwMHZoO1xyXG4gICAgICBvcGFjaXR5IDogJHsocHJvcHMpID0+IChwcm9wcy5pc0JsdXIgPyAwLjMgOiB1bmRlZmluZWQpfTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNCbHVyID8gJ3JnYmEoMCwwLDAsMC41KScgOiB1bmRlZmluZWQpfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlcjtcclxuICBpbnZhbGlkPzogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBhdXRvQ29tcGxldGU/OiBzdHJpbmc7XHJcbiAgb25DaGFuZ2U/OiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWQ7XHJcbiAgb25Gb2N1c091dD86IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gVGV4dEFyZWEoeyBuYW1lLCBhdXRvQ29tcGxldGUgPSAnb2ZmJywgLi4ucHJvcHMgfTogSVByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICByZXR1cm4gPFNUZXh0QXJlYSBuYW1lPXtuYW1lfSBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX0gey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuY29uc3QgU1RleHRBcmVhID0gU3R5bGVkLnRleHRhcmVhYFxyXG4gIHJlc2l6ZTpub25lO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWE7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhhc2hUYWcgfSBmcm9tICcuL0hhc2hUYWcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb24gfSBmcm9tICcuL0ljb24nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0IH0gZnJvbSAnLi9JbnB1dCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWwgfSBmcm9tICcuL01vZGFsJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0QXJlYSB9IGZyb20gJy4vVGV4dEFyZWEnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21tZW50QnV0dG9uLCBDb21tZW50Rm9ybSwgQ29tbWVudFRleHRBcmVhIH0gZnJvbSAnLi9zdHlsZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBpc0NvbW1lbnQ6IGJvb2xlYW47XHJcbiAgaGFuZGxlQ2hhbmdlOiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWQ7XHJcbiAgaGFuZGxlU3VibWl0OiAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRXcml0ZSh7IHZhbHVlLCBpc0NvbW1lbnQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0IH06IElQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb21tZW50Rm9ybT5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPENvbW1lbnRUZXh0QXJlYVxyXG4gICAgICAgICAgaXNDb21tZW50Q2hlY2s9e2lzQ29tbWVudH1cclxuICAgICAgICAgIG5hbWU9XCJjb21tZW50XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuMk+q4gOydhCDsnoXroKXtlbQg7KO87IS47JqUXCJcclxuICAgICAgICA+PC9Db21tZW50VGV4dEFyZWE+XHJcbiAgICAgICAgPENvbW1lbnRCdXR0b24gaXNDb21tZW50Q2hlY2s9e2lzQ29tbWVudH0gb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIHtpc0NvbW1lbnQgPyAn64yT6riAIOyekeyEsScgOiAn64u16riAIOyekeyEsSd9XHJcbiAgICAgICAgPC9Db21tZW50QnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0NvbW1lbnRGb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRXcml0ZTtcclxuIiwiaW1wb3J0IHsgQnV0dG9uLCBUZXh0QXJlYSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgaWZQcm9wLCBwYWxldHRlIH0gZnJvbSAnc3R5bGVkLXRvb2xzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50Rm9ybSA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRUZXh0QXJlYSA9IFN0eWxlZChUZXh0QXJlYSk8eyBpc0NvbW1lbnRDaGVjaz86IGJvb2xlYW4gfT5gXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAke2lmUHJvcCgnaXNDb21tZW50Q2hlY2snLCAnMTAwJScsICc3MTNweCcpfTtcclxuICBoZWlnaHQ6ICR7aWZQcm9wKCdpc0NvbW1lbnRDaGVjaycsICcxMTBweCcsICc1M3B4Jyl9O1xyXG4gIDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRCdXR0b24gPSBTdHlsZWQoQnV0dG9uKTx7IGlzQ29tbWVudENoZWNrPzogYm9vbGVhbiB9PmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA2KX07XHJcbiAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICBmb250LXNpemU6ICR7aWZQcm9wKCdpc0NvbW1lbnRDaGVjaycsICcxNnB4JywgJzE0cHgnKX07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgJjpob3ZlcntcclxuICAgIG9wYWNpdHk6IDcwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgVGh1bWJuYWlsQ29tbWVudEljb24sIFRodW1ibmFpbExpa2VJY29uIH0gZnJvbSAncHVibGljL2Fzc2V0cy9pbWFnZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb25jZXJ0V3JhcHBlciwgQ29udGVudCwgSW5mbywgVGh1bWJuYWlsQ29udGFpbmVyLCBUaHVtYm5haWxJbmZvLCBUaHVtYm5haWxPdmVybGF5IH0gZnJvbSAnLi9zdHlsZSc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICBpbWdUaHVtYm5haWw6IHN0cmluZztcclxuICBhdXRob3JOaWNrbmFtZTogc3RyaW5nO1xyXG4gIGludGVyZXN0TGlzdDogc3RyaW5nW107XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgY29tbWVudE51bTogbnVtYmVyO1xyXG4gIGxpa2VOdW0/OiBudW1iZXI7XHJcbiAgbm90aWNlSUQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbmNlcnQoe1xyXG4gIGltZ1RodW1ibmFpbCxcclxuICBhdXRob3JOaWNrbmFtZSxcclxuICBpbnRlcmVzdExpc3QsXHJcbiAgY3JlYXRlZEF0LFxyXG4gIHRpdGxlLFxyXG4gIHRleHQsXHJcbiAgY29tbWVudE51bSxcclxuICBsaWtlTnVtLFxyXG4gIG5vdGljZUlELFxyXG59OiBJUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IGludGVyZXN0RGl2aWRlID0gaW50ZXJlc3RMaXN0Py5qb2luKCcgfCAnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmtcclxuICAgICAgaHJlZj17e1xyXG4gICAgICAgIHBhdGhuYW1lOiBgL25vdGljZS8ke25vdGljZUlEfWAsXHJcbiAgICAgIH19XHJcbiAgICAgIHBhc3NIcmVmXHJcbiAgICA+XHJcbiAgICAgIDxDb25jZXJ0V3JhcHBlcj5cclxuICAgICAgICA8SW5mbz5cclxuICAgICAgICAgIDxwPnthdXRob3JOaWNrbmFtZX08L3A+XHJcbiAgICAgICAgICA8cD57aW50ZXJlc3REaXZpZGV9PC9wPlxyXG4gICAgICAgICAgPHA+e2Ake2RheWpzKGNyZWF0ZWRBdCkuZm9ybWF0KCdZWS5NTS5ERCcpfWB9PC9wPlxyXG4gICAgICAgIDwvSW5mbz5cclxuICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgIDxwPnt0aXRsZX08L3A+XHJcbiAgICAgICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGAke3RleHR9YCB9fSAvPlxyXG4gICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICA8VGh1bWJuYWlsQ29udGFpbmVyPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltZ1RodW1ibmFpbH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDxUaHVtYm5haWxPdmVybGF5PlxyXG4gICAgICAgICAgICA8VGh1bWJuYWlsSW5mbz5cclxuICAgICAgICAgICAgICB7bGlrZU51bSA9PT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17VGh1bWJuYWlsTGlrZUljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiB7bGlrZU51bX08L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1RodW1ibmFpbENvbW1lbnRJY29ufSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxwPiB7Y29tbWVudE51bX08L3A+XHJcbiAgICAgICAgICAgIDwvVGh1bWJuYWlsSW5mbz5cclxuICAgICAgICAgIDwvVGh1bWJuYWlsT3ZlcmxheT5cclxuICAgICAgICA8L1RodW1ibmFpbENvbnRhaW5lcj5cclxuICAgICAgPC9Db25jZXJ0V3JhcHBlcj5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25jZXJ0O1xyXG4iLCJpbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgcGFsZXR0ZSwgdGhlbWUgfSBmcm9tICdzdHlsZWQtdG9vbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm8gPSBTdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTExcHg7XHJcbiAgaGVpZ2h0OiA4NHB4O1xyXG4gIGNvbG9yOiAjNDA0MDQwO1xyXG4gICR7dGhlbWUoJ2ZvbnQuYm9keTEnKX07XHJcbiAgJiBwOm50aC1vZi10eXBlKDEpIHtcclxuICAgIG1hcmdpbjogMCAzOHB4IDEycHggMDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgICR7dGhlbWUoJ2ZvbnQuc3ViaGVhZDMnKX07XHJcbiAgfVxyXG4gIDpob3ZlcntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gU3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDUyNHB4O1xyXG4gIGhlaWdodDogODRweDtcclxuICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA5KX07XHJcbiAgJHt0aGVtZSgnZm9udC5zdWJoZWFkMycpfTtcclxuICAmIHA6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgd2lkdGg6IDUyNHB4O1xyXG4gICAgaGVpZ2h0OiAyLjc5ZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgXHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA3KX07XHJcbiAgICAke3RoZW1lKCdmb250LmJvZHkyJyl9O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzOyBcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgfVxyXG4gIDpob3ZlcntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaHVtYm5haWxDb250YWluZXIgPSBTdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgaGVpZ2h0OiA4NHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIDpob3ZlcntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaHVtYm5haWxPdmVybGF5ID0gU3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gIG9wYWNpdHk6MDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OjAuNjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGh1bWJuYWlsSW5mbyA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcclxuICAke3RoZW1lKCdmb250LmJvZHkyX2VuZycpfTtcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb25jZXJ0V3JhcHBlciA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERkRGREY7XHJcbiAgaGVpZ2h0OiAxNDRweDtcclxuYDtcclxuIiwiaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm90dG9tLCBEZXRhaWxUaXRsZVdyYXBwZXIsIE1pZGRsZSwgVG9wIH0gZnJvbSAnLi9zdHlsZSc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICBwYWdlTmFtZTogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbiAgYXV0aG9yTmlja25hbWU6IHN0cmluZztcclxuICBpbnRlcmVzdExpc3Q6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxUaXRsZSh7IHBhZ2VOYW1lLCB0aXRsZSwgYXV0aG9yTmlja25hbWUsIGNyZWF0ZWRBdCwgaW50ZXJlc3RMaXN0IH06IElQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgaW50ZXJlc3REaXZpZGUgPSBpbnRlcmVzdExpc3Q/LmpvaW4oJyB8ICcpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RGV0YWlsVGl0bGVXcmFwcGVyPlxyXG4gICAgICAgIDxUb3A+XHJcbiAgICAgICAgICA8cD57cGFnZU5hbWV9PC9wPlxyXG4gICAgICAgIDwvVG9wPlxyXG4gICAgICAgIDxNaWRkbGU+XHJcbiAgICAgICAgICA8cD57dGl0bGV9PC9wPlxyXG4gICAgICAgIDwvTWlkZGxlPlxyXG4gICAgICAgIDxCb3R0b20+XHJcbiAgICAgICAgICA8cD57YXV0aG9yTmlja25hbWV9PC9wPlxyXG4gICAgICAgICAgPHA+e2Ake2RheWpzKGNyZWF0ZWRBdCkuZm9ybWF0KCdZWS5NTS5ERCcpfWB9PC9wPlxyXG4gICAgICAgICAgPHA+e2ludGVyZXN0RGl2aWRlfTwvcD5cclxuICAgICAgICA8L0JvdHRvbT5cclxuICAgICAgPC9EZXRhaWxUaXRsZVdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxUaXRsZTtcclxuIiwiaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHBhbGV0dGUsIHRoZW1lIH0gZnJvbSAnc3R5bGVkLXRvb2xzJztcclxuXHJcbmV4cG9ydCBjb25zdCBUb3AgPSBTdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMyl9O1xyXG4gICR7dGhlbWUoJ2ZvbnQuc3ViaGVhZDQnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWlkZGxlID0gU3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjM2QzZDNkO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDgpfTtcclxuICAke3RoZW1lKCdmb250LmRwMScpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCb3R0b20gPSBTdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gICR7dGhlbWUoJ2ZvbnQuYm9keTQnKX07XHJcbiAgcDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA3KX07XHJcbiAgICAke3RoZW1lKCdmb250LmJvZHkyX2VuZycpfTtcclxuICB9XHJcbiAgcDpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAzKX07XHJcbiAgICAke3RoZW1lKCdmb250LmJvZHkzJyl9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxUaXRsZVdyYXBwZXIgPSBTdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBoZWlnaHQ6IDE2NHB4O1xyXG5gO1xyXG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBMb2dpbkFsZXJ0SWNvbiB9IGZyb20gJ3B1YmxpYy9hc3NldHMvaW1hZ2VzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCdXR0b25Db250YWluZXIsXHJcbiAgQ2FuY2VsQnV0dG9uLFxyXG4gIExvZ2luQnV0dG9uLFxyXG4gIExvZ2luTW9kYWxXcmFwcGVyLFxyXG4gIExvZ2luTm90aWNlLFxyXG4gIExvZ2luTm90aWNlRGV0YWlsLFxyXG4gIExvZ2luTm90aWNlVGl0bGUsXHJcbn0gZnJvbSAnLi9zdHlsZSc7XHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIGlzTG9naW5Nb2RhbE9wZW46IGJvb2xlYW47XHJcbiAgc2V0SXNMb2dpbk1vZGFsT3BlbjogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMb2dpbk1vZGFsKHsgaXNMb2dpbk1vZGFsT3Blbiwgc2V0SXNMb2dpbk1vZGFsT3BlbiB9OiBJUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2dpbk1vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsIGlzT3Blbj17aXNMb2dpbk1vZGFsT3Blbn0gc2V0SXNPcGVuPXtzZXRJc0xvZ2luTW9kYWxPcGVufSBpc0JsdXI9e3RydWV9PlxyXG4gICAgICA8TG9naW5Nb2RhbFdyYXBwZXI+XHJcbiAgICAgICAgPExvZ2luTm90aWNlPlxyXG4gICAgICAgICAgPGltZyBzcmM9e0xvZ2luQWxlcnRJY29ufSBhbHQ9XCJcIj48L2ltZz5cclxuICAgICAgICAgIDxMb2dpbk5vdGljZVRpdGxlPuyVlyE8L0xvZ2luTm90aWNlVGl0bGU+XHJcbiAgICAgICAgICA8TG9naW5Ob3RpY2VEZXRhaWw+66Gc6re47J247J20IO2VhOyalO2VnCDshJzruYTsiqTsnoXri4jri6Q8L0xvZ2luTm90aWNlRGV0YWlsPlxyXG4gICAgICAgIDwvTG9naW5Ob3RpY2U+XHJcbiAgICAgICAgPEJ1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIDxDYW5jZWxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VCdXR0b259Puy3qOyGjDwvQ2FuY2VsQnV0dG9uPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICA8TG9naW5CdXR0b24+66Gc6re47J247ZWY6riwPC9Mb2dpbkJ1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0J1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgPC9Mb2dpbk1vZGFsV3JhcHBlcj5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Nb2RhbDtcclxuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBwYWxldHRlLCB0aGVtZSB9IGZyb20gJ3N0eWxlZC10b29scyc7XHJcblxyXG5leHBvcnQgY29uc3QgTG9naW5Ob3RpY2UgPSBTdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDBweCA4MHB4IDBweCA4MHB4O1xyXG4gIGltZyB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi10b3A6LTQwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luTm90aWNlVGl0bGUgPSBTdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6MzBweCAwcHggMzBweCAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gICR7dGhlbWUoJ2ZvbnQuZHA0Jyl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luTm90aWNlRGV0YWlsID0gU3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgOSl9O1xyXG4gICR7dGhlbWUoJ2ZvbnQuYm9keTMnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQ29udGFpbmVyID0gU3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOjUwcHggMTAwcHggMHB4IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQgOiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYW5jZWxCdXR0b24gPSBTdHlsZWQoQnV0dG9uKWBcclxuICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAyKX07XHJcbiAgJHt0aGVtZSgnZm9udC5zdWJoZWFkNCcpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbkJ1dHRvbiA9IFN0eWxlZChCdXR0b24pYFxyXG4gIGNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCA1KX07XHJcbiAgJHt0aGVtZSgnZm9udC5zdWJoZWFkNCcpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbk1vZGFsV3JhcHBlciA9IFN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDowO1xyXG4gIHJpZ2h0OjA7XHJcbiAgYm90dG9tOjA7XHJcbiAgbGVmdDowO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggJHtwYWxldHRlKCdncmF5c2NhbGUnLCA0KX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMzEycHg7XHJcbmA7XHJcbiIsImltcG9ydCB7IHBvc3ROb3RpY2VDb21tZW50IH0gZnJvbSAnYXBpcyc7XHJcbmltcG9ydCB7IExvZ2luTW9kYWwsIFJlcGx5Q29tbWVudCB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IHVzZXJTdGF0dXNTdGF0ZSB9IGZyb20gJ3N0b3Jlcy91c2VyJztcclxuaW1wb3J0IHsgSVJlcGx5IH0gZnJvbSAndHlwZXMvY2hhbGxlbmdlLnR5cGUnO1xyXG5pbXBvcnQge1xyXG4gIENvbW1lbnRDb250YWluZXIsXHJcbiAgQ29tbWVudFRleHQsXHJcbiAgQ29tbWVudFRvZ2dsZSxcclxuICBDb21tZW50V3JpdGVyLFxyXG4gIE5vdGljZVNpbmdsZUNvbW1lbnRXcmFwcGVyLFxyXG4gIFJlcGx5Q29tbWVudFdyaXRlLFxyXG4gIFJlcGx5Q29udGFpbmVyLFxyXG4gIFJlcGx5Q29udGVudCxcclxufSBmcm9tICcuL3N0eWxlJztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIGNoaWxkcmVuQ29tbWVudDoge1xyXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbjtcclxuICAgIF9pZD86IHN0cmluZztcclxuICAgIHVzZXJJRD86IHtcclxuICAgICAgaW1nOiBzdHJpbmc7XHJcbiAgICAgIF9pZDogc3RyaW5nO1xyXG4gICAgICBuaWNrbmFtZTogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgfVtdO1xyXG4gIGlzRGVsZXRlZDogYm9vbGVhbjtcclxuICBwYXJlbnRDb21tZW50SUQ6IHN0cmluZztcclxuICB1c2VySUQ6IHtcclxuICAgIGltZzogc3RyaW5nO1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICBuaWNrbmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIG5vdGljZUlEPzogc3RyaW5nO1xyXG4gIGlzUmVyZW5kZXI6IGJvb2xlYW47XHJcbiAgc2V0SXNSZXJlbmRlcjogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBOb3RpY2VTaW5nbGVDb21tZW50KHtcclxuICBwYXJlbnRDb21tZW50SUQsXHJcbiAgdXNlcklELFxyXG4gIGNoaWxkcmVuQ29tbWVudCxcclxuICB0ZXh0LFxyXG4gIG5vdGljZUlELFxyXG4gIGlzUmVyZW5kZXIsXHJcbiAgc2V0SXNSZXJlbmRlcixcclxuICBpc0RlbGV0ZWQsXHJcbn06IElQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgW2lzT3BlblJlcGx5LCBzZXRJc09wZW5SZXBseV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JlcGx5VmFsdWUsIHNldFJlcGx5VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHVzZXJTdGF0dXNEYXRhID0gdXNlUmVjb2lsVmFsdWUodXNlclN0YXR1c1N0YXRlKTtcclxuICBjb25zdCBbaXNMb2dpbk1vZGFsT3Blbiwgc2V0SXNMb2dpbk1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tSZXBseU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRJc09wZW5SZXBseSghaXNPcGVuUmVwbHkpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0UmVwbHlWYWx1ZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodXNlclN0YXR1c0RhdGEpIHtcclxuICAgICAgYXdhaXQgcG9zdE5vdGljZUNvbW1lbnQodXNlclN0YXR1c0RhdGEudG9rZW4sIG5vdGljZUlELCB7IHBhcmVudElEOiBwYXJlbnRDb21tZW50SUQsIHRleHQ6IHJlcGx5VmFsdWUgfSk7XHJcbiAgICAgIHNldFJlcGx5VmFsdWUoJycpO1xyXG4gICAgICBzZXRJc1JlcmVuZGVyKCFpc1JlcmVuZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzTG9naW5Nb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOb3RpY2VTaW5nbGVDb21tZW50V3JhcHBlcj5cclxuICAgICAgPENvbW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgPGltZyBzcmM9e3VzZXJJRD8uaW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDxDb21tZW50V3JpdGVyPnt1c2VySUQ/Lm5pY2tuYW1lfTwvQ29tbWVudFdyaXRlcj5cclxuICAgICAgICA8Q29tbWVudFRleHQ+e2lzRGVsZXRlZCA/ICfsgq3soJzrkJwg64yT6riA7J6F64uI64ukLicgOiB0ZXh0fTwvQ29tbWVudFRleHQ+XHJcbiAgICAgICAgPENvbW1lbnRUb2dnbGUgb25DbGljaz17b25DbGlja1JlcGx5T3Blbn0+e2lzT3BlblJlcGx5ID8gJ+ygkeq4sCcgOiAn64u16riA67O06riwJ308L0NvbW1lbnRUb2dnbGU+XHJcbiAgICAgIDwvQ29tbWVudENvbnRhaW5lcj5cclxuICAgICAgPFJlcGx5Q29udGFpbmVyPlxyXG4gICAgICAgIHtpc09wZW5SZXBseSAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8UmVwbHlDb21tZW50V3JpdGVcclxuICAgICAgICAgICAgICB2YWx1ZT17cmVwbHlWYWx1ZX1cclxuICAgICAgICAgICAgICBpc0NvbW1lbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICA+PC9SZXBseUNvbW1lbnRXcml0ZT5cclxuICAgICAgICAgICAgPFJlcGx5Q29udGVudD5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW5Db21tZW50Lm1hcCgoZGF0YTogSVJlcGx5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFJlcGx5Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBpbWc9e2RhdGEudXNlcklEPy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgIG5pY2tuYW1lPXtkYXRhLnVzZXJJRD8ubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e2RhdGEudGV4dH1cclxuICAgICAgICAgICAgICAgICAgaXNEZWxldGVkPXtkYXRhLmlzRGVsZXRlZH1cclxuICAgICAgICAgICAgICAgID48L1JlcGx5Q29tbWVudD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9SZXBseUNvbnRlbnQ+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1JlcGx5Q29udGFpbmVyPlxyXG4gICAgICA8TG9naW5Nb2RhbCBpc0xvZ2luTW9kYWxPcGVuPXtpc0xvZ2luTW9kYWxPcGVufSBzZXRJc0xvZ2luTW9kYWxPcGVuPXtzZXRJc0xvZ2luTW9kYWxPcGVufSAvPlxyXG4gICAgPC9Ob3RpY2VTaW5nbGVDb21tZW50V3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpY2VTaW5nbGVDb21tZW50O1xyXG4iLCJpbXBvcnQgeyBDb21tZW50V3JpdGUgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBwYWxldHRlLCB0aGVtZSB9IGZyb20gJ3N0eWxlZC10b29scyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudENvbnRhaW5lciA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50V3JpdGVyID0gU3R5bGVkLmRpdmBcclxuICAke3RoZW1lKCdmb250LnN1YmhlYWQzJyl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRUZXh0ID0gU3R5bGVkLmRpdmBcclxuICB3aWR0aDogNjQ3cHg7XHJcbiAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgNSl9O1xyXG4gICR7dGhlbWUoJ2ZvbnQuYm9keTMnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudFRvZ2dsZSA9IFN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDMpfTtcclxuICAke3RoZW1lKCdmb250LnN1YmhlYWQyJyl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlcGx5Q29udGFpbmVyID0gU3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAxNnB4IDAgMzFweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXBseUNvbW1lbnRXcml0ZSA9IFN0eWxlZChDb21tZW50V3JpdGUpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXBseUNvbnRlbnQgPSBTdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA3MTJweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpY2VTaW5nbGVDb21tZW50V3JhcHBlciA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZXBseUNvbW1lbnRXcmFwcGVyLCBUZXh0LCBXcml0ZXIgfSBmcm9tICcuL3N0eWxlJztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIG5pY2tuYW1lPzogc3RyaW5nO1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGltZz86IHN0cmluZztcclxuICBpc0RlbGV0ZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZXBseUNvbW1lbnQoeyBuaWNrbmFtZSwgdGV4dCwgaW1nLCBpc0RlbGV0ZWQgfTogSVByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlcGx5Q29tbWVudFdyYXBwZXI+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgIDxXcml0ZXI+e25pY2tuYW1lfTwvV3JpdGVyPlxyXG4gICAgICA8VGV4dD57aXNEZWxldGVkID8gJ+yCreygnOuQnCDrjJPquIDsnoXri4jri6QuJyA6IHRleHR9PC9UZXh0PlxyXG4gICAgPC9SZXBseUNvbW1lbnRXcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhSZXBseUNvbW1lbnQpO1xyXG4iLCJpbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgcGFsZXR0ZSwgdGhlbWUgfSBmcm9tICdzdHlsZWQtdG9vbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyaXRlciA9IFN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoIDogOTBweDtcclxuICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA5KX07XHJcbiAgJHt0aGVtZSgnZm9udC5zdWJoZWFkMycpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0ID0gU3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA1KX07XHJcbiAgJHt0aGVtZSgnZm9udC5ib2R5MycpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXBseUNvbW1lbnRXcmFwcGVyID0gU3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luOjEzcHggMDtcclxuICBtYXJnaW4tbGVmdDogMTMzcHg7XHJcbiAgd2lkdGggOiA1ODVweDtcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHdpZHRoOiAyNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI2cHggIWltcG9ydGFudDsgIFxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAncHVibGljL2Fzc2V0cy9pbWFnZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXJXcmFwcGVyLCBTZWFyY2hCdXR0b24sIFNlYXJjaElucHV0IH0gZnJvbSAnLi9zdHlsZSc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgb25DbGlja1NlYXJjaD86IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG4gIG9uQ2hhbmdlS2V5d29yZDogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hCYXIoeyBvbkNsaWNrU2VhcmNoLCBvbkNoYW5nZUtleXdvcmQgfTogSVByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaEJhcldyYXBwZXI+XHJcbiAgICAgIDxTZWFyY2hJbnB1dCBuYW1lPVwic2VhcmNoQmFyXCIgb25DaGFuZ2U9e29uQ2hhbmdlS2V5d29yZH0gcGxhY2Vob2xkZXI9XCLtgqTsm4zrk5zrpbwg6rKA7IOJ7ZW0IOyjvOyEuOyalFwiPjwvU2VhcmNoSW5wdXQ+XHJcbiAgICAgIDxTZWFyY2hCdXR0b24gb25DbGljaz17b25DbGlja1NlYXJjaH0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17U2VhcmNoSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgPC9TZWFyY2hCdXR0b24+XHJcbiAgICA8L1NlYXJjaEJhcldyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iLCJpbXBvcnQgeyBCdXR0b24sIElucHV0IH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBwYWxldHRlIH0gZnJvbSAnc3R5bGVkLXRvb2xzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJbnB1dCA9IFN0eWxlZChJbnB1dClgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcclxuICBib3JkZXItcmFkaXVzOiA3MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAyMjMsIDIyMywgMC4yKTtcclxuICBwYWRkaW5nOiA5cHggMThweCA5cHggMjBweDtcclxuICB3aWR0aDogMjk4cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDIpfTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgOmZvY3VzIHtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoQnV0dG9uID0gU3R5bGVkKEJ1dHRvbilgXHJcbiAgb3BhY2l0eTogNTAlO1xyXG4gIG1hcmdpbi1ib3R0b206NHB4O1xyXG4gIG1hcmdpbi1sZWZ0Oi01MHB4O1xyXG4gIGJvcmRlcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMjIzLCAyMjMsIDAuMik7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4OztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hCYXJXcmFwcGVyID0gU3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDMzcHg7XHJcbmA7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tbWVudFdyaXRlIH0gZnJvbSAnLi9Db21tZW50V3JpdGUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbmNlcnQgfSBmcm9tICcuL0NvbmNlcnQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERldGFpbFRpdGxlIH0gZnJvbSAnLi9EZXRhaWxUaXRsZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9naW5Nb2RhbCB9IGZyb20gJy4vTG9naW5Nb2RhbCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm90aWNlU2luZ2xlQ29tbWVudCB9IGZyb20gJy4vTm90aWNlU2luZ2xlQ29tbWVudCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hhbGxlbmdlUmVDb21tZW50TGlzdCwgZGVmYXVsdCBhcyBSZXBseUNvbW1lbnQgfSBmcm9tICcuL1JlcGx5Q29tbWVudCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoQmFyIH0gZnJvbSAnLi9TZWFyY2hCYXInO1xyXG4iLCJpbXBvcnQgeyBIYXNoVGFnIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgQ29tbWVudEljb24sIExpa2VGaWxsZWRJY29uLCBMaWtlSWNvbiwgU2NyYXBGaWxsZWRJY29uLCBTY3JhcEljb24gfSBmcm9tICdwdWJsaWMvYXNzZXRzL2ltYWdlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbW1lbnQsIEhhc2hUYWdMaXN0LCBJY29uTGlzdCwgTGlrZSwgU2NyYXAsIFRleHQsIFZpZGVvIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIHZpZGVvPzogc3RyaW5nO1xyXG4gIGltZ1RodW1ibmFpbD86IHN0cmluZztcclxuICBkZXNjOiBzdHJpbmc7XHJcbiAgaGFzaHRhZz86IHN0cmluZ1tdO1xyXG4gIGxpa2VOdW0/OiBudW1iZXI7XHJcbiAgY29tbWVudE51bTogbnVtYmVyO1xyXG4gIHNjcmFwTnVtPzogbnVtYmVyO1xyXG4gIG9uTGlrZT86ICgpID0+IHZvaWQ7XHJcbiAgb25TY3JhcD86ICgpID0+IHZvaWQ7XHJcbiAgaXNVc2VyTGlrZT86IGJvb2xlYW47XHJcbiAgaXNVc2VyU2NyYXA/OiBib29sZWFuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxDb250ZW50KHtcclxuICB2aWRlbyxcclxuICBpbWdUaHVtYm5haWwsXHJcbiAgZGVzYyxcclxuICBoYXNodGFnLFxyXG4gIGxpa2VOdW0sXHJcbiAgY29tbWVudE51bSxcclxuICBzY3JhcE51bSxcclxuICBvbkxpa2UsXHJcbiAgb25TY3JhcCxcclxuICBpc1VzZXJMaWtlLFxyXG4gIGlzVXNlclNjcmFwLFxyXG59OiBJUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VmlkZW8+e3ZpZGVvID8gPHZpZGVvIHNyYz17dmlkZW99IGNvbnRyb2xzPjwvdmlkZW8+IDogPGltZyBzcmM9e2ltZ1RodW1ibmFpbH0gLz59PC9WaWRlbz5cclxuICAgICAgPFRleHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBgJHtkZXNjfWAgfX0gLz5cclxuICAgICAge2hhc2h0YWcgPyAoXHJcbiAgICAgICAgPEhhc2hUYWdMaXN0PlxyXG4gICAgICAgICAge2hhc2h0YWc/Lm1hcCgodGFnLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8SGFzaFRhZyBrZXk9e2luZGV4fT57dGFnfTwvSGFzaFRhZz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSGFzaFRhZ0xpc3Q+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPEljb25MaXN0PlxyXG4gICAgICAgIHtsaWtlTnVtID09PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TGlrZT5cclxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImxpa2VfX2ltZ1wiIHNyYz17aXNVc2VyTGlrZSA/IExpa2VGaWxsZWRJY29uIDogTGlrZUljb259IG9uQ2xpY2s9e29uTGlrZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAge2xpa2VOdW19XHJcbiAgICAgICAgICA8L0xpa2U+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Q29tbWVudD5cclxuICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJjb21tZW50c19faW1nXCIgc3JjPXtDb21tZW50SWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgIHtjb21tZW50TnVtfVxyXG4gICAgICAgIDwvQ29tbWVudD5cclxuICAgICAgICB7c2NyYXBOdW0gPT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxTY3JhcD5cclxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInNjcmFwX19pbWdcIiBzcmM9e2lzVXNlclNjcmFwID8gU2NyYXBGaWxsZWRJY29uIDogU2NyYXBJY29ufSBvbkNsaWNrPXtvblNjcmFwfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICB7c2NyYXBOdW19XHJcbiAgICAgICAgICA8L1NjcmFwPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvSWNvbkxpc3Q+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxDb250ZW50O1xyXG4iLCJpbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgcGFsZXR0ZSwgdGhlbWUgfSBmcm9tICdzdHlsZWQtdG9vbHMnO1xyXG5leHBvcnQgY29uc3QgVmlkZW8gPSBTdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgaGVpZ2h0OiA0NjhweDtcclxuICB2aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dCA9IFN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBsaW5lLWhlaWdodDogMS41NjtcclxuICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA2KX07XHJcbiAgJHt0aGVtZSgnZm9udC5ib2R5NCcpfTtcclxuICBoMSB7XHJcbiAgICAke3RoZW1lKCdmb250LmgyX2VuZycpfTtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgJHt0aGVtZSgnZm9udC5oMV9lbmcnKX07XHJcbiAgfVxyXG4gIGJsb2NrcXVvdGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDYpfTtcclxuICB9XHJcbiAgb2wge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOmRlY2ltYWw7XHJcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uIDogaW5zaWRlO1xyXG4gIH1cclxuICB1bCBsaXtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpkaXNjIDtcclxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb24gOiBpbnNpZGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhhc2hUYWdMaXN0ID0gU3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEljb25MaXN0ID0gU3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luOiA2MHB4IDAgMThweDtcclxuICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA3KX07XHJcbiAgJHt0aGVtZSgnZm9udC5ib2R5NF9lbmcnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlrZSA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnQgPSBTdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTY3JhcCA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgSGVhZGVyTG9nb0ljb24gfSBmcm9tICdwdWJsaWMvYXNzZXRzL2ltYWdlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERlc2lnbmVyLCBEZXZlbG9wZXIsIEZvb3RlcldyYXBwZXIsIEluZm8sIExvZ28sIE1lbWJlciwgUGxhbm5lciwgU2VydmVyLCBUZXh0IH0gZnJvbSAnLi9zdHlsZSc7XHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvb3RlcldyYXBwZXI+XHJcbiAgICAgIDxMb2dvPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e0hlYWRlckxvZ29JY29ufSBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L0xvZ28+XHJcbiAgICAgIDxUZXh0PlxyXG4gICAgICAgIDxJbmZvPlxyXG4gICAgICAgICAgPHNwYW4+T3BlbiBUb2dldGhlcjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPuydtOyaqeyVveq0gDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPuqwnOyduOygleuztCDsspjrpqzrsKnsuag8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7qs7Xsp4Dsgqztla08L3NwYW4+XHJcbiAgICAgICAgICA8cD5Db3B5cmlnaHQgwqkgMjAyMSBPcGVuIFRvZ2V0aGVyLCBPMjwvcD5cclxuICAgICAgICA8L0luZm8+XHJcbiAgICAgICAgPE1lbWJlcj5cclxuICAgICAgICAgIDxQbGFubmVyPlxyXG4gICAgICAgICAgICA8cD5QbGFubmVyPC9wPlxyXG4gICAgICAgICAgICA8cD5FdW5zb2w8L3A+XHJcbiAgICAgICAgICAgIDxwPkhlZXlvdW5nPC9wPlxyXG4gICAgICAgICAgPC9QbGFubmVyPlxyXG4gICAgICAgICAgPERlc2lnbmVyPlxyXG4gICAgICAgICAgICA8cD5EZXNpZ25lcjwvcD5cclxuICAgICAgICAgICAgPHA+SHl1bmt5dW5nPC9wPlxyXG4gICAgICAgICAgICA8cD5TdWFoPC9wPlxyXG4gICAgICAgICAgICA8cD5TdWJpbjwvcD5cclxuICAgICAgICAgIDwvRGVzaWduZXI+XHJcbiAgICAgICAgICA8RGV2ZWxvcGVyPlxyXG4gICAgICAgICAgICA8cD5EZXZlbG9wZXI8L3A+XHJcbiAgICAgICAgICAgIDxwPlllb25nd29vPC9wPlxyXG4gICAgICAgICAgICA8cD5TdWJpbjwvcD5cclxuICAgICAgICAgICAgPHA+SHlvaW48L3A+XHJcbiAgICAgICAgICAgIDxwPkppeW91bmc8L3A+XHJcbiAgICAgICAgICA8L0RldmVsb3Blcj5cclxuICAgICAgICAgIDxTZXJ2ZXI+XHJcbiAgICAgICAgICAgIDxwPlNlcnZlcjwvcD5cclxuICAgICAgICAgICAgPHA+SHl1bmppbjwvcD5cclxuICAgICAgICAgICAgPHA+U2Vvbmd5b25nPC9wPlxyXG4gICAgICAgICAgPC9TZXJ2ZXI+XHJcbiAgICAgICAgPC9NZW1iZXI+XHJcbiAgICAgIDwvVGV4dD5cclxuICAgIDwvRm9vdGVyV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBwYWxldHRlLCB0aGVtZSB9IGZyb20gJ3N0eWxlZC10b29scyc7XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dCA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCA3KX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mbyA9IFN0eWxlZC5kaXZgXHJcbiAgJiBzcGFuOm50aC1vZi10eXBlKDEpIHtcclxuICAgICR7dGhlbWUoJ2ZvbnQuc3ViaGVhZDNfZW5nJyl9O1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG4gICAgJHt0aGVtZSgnZm9udC5ib2R5MycpfTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgJHt0aGVtZSgnZm9udC5ib2R5Ml9lbmcnKX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbWJlciA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMTQwcHg7XHJcbiAgJHt0aGVtZSgnZm9udC5ib2R5MV9lbmcnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGxhbm5lciA9IFN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICYgcDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAke3RoZW1lKCdmb250LnN1YmhlYWQxX2VuZycpfTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBEZXNpZ25lciA9IFN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICYgcDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAke3RoZW1lKCdmb250LnN1YmhlYWQxX2VuZycpfTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBEZXZlbG9wZXIgPSBTdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAmIHA6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgJHt0aGVtZSgnZm9udC5zdWJoZWFkMV9lbmcnKX07XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgU2VydmVyID0gU3R5bGVkLmRpdmBcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgJiBwOm50aC1vZi10eXBlKDEpIHtcclxuICAgICR7dGhlbWUoJ2ZvbnQuc3ViaGVhZDFfZW5nJyl9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0gU3R5bGVkLmRpdmBcclxuICBtYXJnaW4tcmlnaHQ6IDk4NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI3cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI3OHB4O1xyXG5gO1xyXG4iLCJpbXBvcnQgeyBwb3N0Tm90aWNlQ29tbWVudCB9IGZyb20gJ2FwaXMnO1xyXG5pbXBvcnQgeyBDb21tZW50V3JpdGUsIExvZ2luTW9kYWwsIE5vdGljZVNpbmdsZUNvbW1lbnQgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyB1c2VyU3RhdHVzU3RhdGUgfSBmcm9tICdzdG9yZXMvdXNlcic7XHJcbmltcG9ydCB7IElOb3RpY2VDb21tZW50IH0gZnJvbSAndHlwZXMvbm90aWNlLnR5cGUnO1xyXG5pbXBvcnQgeyBDb21tZW50V3JpdGVDb250YWluZXIgfSBmcm9tICcuL3N0eWxlJztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIGNvbW1lbnRMaXN0OiBBcnJheTxJTm90aWNlQ29tbWVudD47XHJcbiAgbm90aWNlSUQ/OiBzdHJpbmc7XHJcbiAgaXNSZXJlbmRlcjogYm9vbGVhbjtcclxuICBzZXRJc1JlcmVuZGVyOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5vdGljZUNvbW1lbnRMaXN0KHsgY29tbWVudExpc3QsIG5vdGljZUlELCBpc1JlcmVuZGVyLCBzZXRJc1JlcmVuZGVyIH06IElQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgW2NvbW1lbnRWYWx1ZSwgc2V0Q29tbWVudFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNMb2dpbk1vZGFsT3Blbiwgc2V0SXNMb2dpbk1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdXNlclN0YXR1c0RhdGEgPSB1c2VSZWNvaWxWYWx1ZSh1c2VyU3RhdHVzU3RhdGUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRDb21tZW50VmFsdWUoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHVzZXJTdGF0dXNEYXRhKSB7XHJcbiAgICAgIGF3YWl0IHBvc3ROb3RpY2VDb21tZW50KHVzZXJTdGF0dXNEYXRhLnRva2VuLCBub3RpY2VJRCwgeyBwYXJlbnRJRDogbnVsbCwgdGV4dDogY29tbWVudFZhbHVlIH0pO1xyXG4gICAgICBzZXRDb21tZW50VmFsdWUoJycpO1xyXG4gICAgICBzZXRJc1JlcmVuZGVyKCFpc1JlcmVuZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzTG9naW5Nb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb21tZW50V3JpdGVDb250YWluZXI+XHJcbiAgICAgICAgPENvbW1lbnRXcml0ZVxyXG4gICAgICAgICAgdmFsdWU9e2NvbW1lbnRWYWx1ZX1cclxuICAgICAgICAgIGlzQ29tbWVudD17dHJ1ZX1cclxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgPjwvQ29tbWVudFdyaXRlPlxyXG4gICAgICA8L0NvbW1lbnRXcml0ZUNvbnRhaW5lcj5cclxuICAgICAge2NvbW1lbnRMaXN0Py5tYXAoKGRhdGE6IElOb3RpY2VDb21tZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxOb3RpY2VTaW5nbGVDb21tZW50XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgcGFyZW50Q29tbWVudElEPXtkYXRhLl9pZH1cclxuICAgICAgICAgIHVzZXJJRD17ZGF0YS51c2VySUR9XHJcbiAgICAgICAgICBjaGlsZHJlbkNvbW1lbnQ9e2RhdGEuY2hpbGRyZW5Db21tZW50fVxyXG4gICAgICAgICAgdGV4dD17ZGF0YS50ZXh0fVxyXG4gICAgICAgICAgbm90aWNlSUQ9e25vdGljZUlEfVxyXG4gICAgICAgICAgaXNSZXJlbmRlcj17aXNSZXJlbmRlcn1cclxuICAgICAgICAgIHNldElzUmVyZW5kZXI9e3NldElzUmVyZW5kZXJ9XHJcbiAgICAgICAgICBpc0RlbGV0ZWQ9e2RhdGEuaXNEZWxldGVkfVxyXG4gICAgICAgID48L05vdGljZVNpbmdsZUNvbW1lbnQ+XHJcbiAgICAgICkpfVxyXG4gICAgICA8TG9naW5Nb2RhbCBpc0xvZ2luTW9kYWxPcGVuPXtpc0xvZ2luTW9kYWxPcGVufSBzZXRJc0xvZ2luTW9kYWxPcGVuPXtzZXRJc0xvZ2luTW9kYWxPcGVufSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWNlQ29tbWVudExpc3Q7XHJcbiIsImltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRXcml0ZUNvbnRhaW5lciA9IFN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTo2OHB4O1xyXG5gO1xyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IE5vdGljZUhlYWRlckljb24gfSBmcm9tICdwdWJsaWMvYXNzZXRzL2ltYWdlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhY2tncm91bmQsIENvbmNlcnRCdXR0b24sIEljb25Db250YWluZXIsIE5vdGljZUhlYWRlcldyYXBwZXIsIFRleHQgfSBmcm9tICcuL3N0eWxlJztcclxuZnVuY3Rpb24gTm90aWNlSGVhZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOb3RpY2VIZWFkZXJXcmFwcGVyPlxyXG4gICAgICA8QmFja2dyb3VuZCAvPlxyXG4gICAgICA8SWNvbkNvbnRhaW5lcj5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtOb3RpY2VIZWFkZXJJY29ufSBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L0ljb25Db250YWluZXI+XHJcbiAgICAgIDxUZXh0PlxyXG4gICAgICAgIDxwPuuLpOydjCDqsJXsl7DsnbTsl5DsmpQ8L3A+XHJcbiAgICAgICAgPHA+7LC97JeF7JeQIOuMgO2VnCDrqqjrk6Ag6rKDPC9wPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8Q29uY2VydEJ1dHRvbj7rjZQg7JWM7JWE67O06riwPC9Db25jZXJ0QnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9UZXh0PlxyXG4gICAgPC9Ob3RpY2VIZWFkZXJXcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGljZUhlYWRlcjtcclxuIiwiaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHBhbGV0dGUsIHRoZW1lIH0gZnJvbSAnc3R5bGVkLXRvb2xzJztcclxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmQgPSBTdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzEwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMzNmM4ZjUsIzEzZTJkZCApO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHQgPSBTdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNjAlO1xyXG4gIGxlZnQ6IDMwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAtNTAlLCAtNTAlICk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gICYgcDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAke3RoZW1lKCdmb250LmRwNCcpfTtcclxuICB9XHJcbiAgJiBwOm50aC1vZi10eXBlKDIpIHtcclxuICAgICR7dGhlbWUoJ2ZvbnQuc3ViaGVhZDQnKX07XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb25jZXJ0QnV0dG9uID0gU3R5bGVkLmFgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6MzdweDtcclxuICBtYXJnaW4tYm90dG9tOjg1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxNzVweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgY29sb3I6ICR7cGFsZXR0ZSgncHJpbWFyeScsIDApfTtcclxuICAke3RoZW1lKCdmb250LnN1YmhlYWQ0Jyl9O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSWNvbkNvbnRhaW5lciA9IFN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUlO1xyXG4gIGxlZnQ6IDYwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpY2VIZWFkZXJXcmFwcGVyID0gU3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTM4cHg7XHJcbmA7XHJcbiIsImltcG9ydCB7IENvbmNlcnQgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgU21hbGxMZWZ0QXJyb3dJY29uLCBTbWFsbFJpZ2h0QXJyb3dJY29uIH0gZnJvbSAncHVibGljL2Fzc2V0cy9pbWFnZXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBJTm90aWNlIH0gZnJvbSAndHlwZXMvbm90aWNlLnR5cGUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29udGFpbmVyLCBOb3RpY2VMaXN0V3JhcHBlciwgUGFnZU5hdmksIFBhZ2VOdW1iZXIgfSBmcm9tICcuL3N0eWxlJztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIG5vdGljZUxpc3Q6IEFycmF5PElOb3RpY2U+O1xyXG4gIHRvdGFsTm90aWNlTnVtOiBudW1iZXI7XHJcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcclxuICBzZXRDdXJyZW50UGFnZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuZnVuY3Rpb24gTm90aWNlTGlzdCh7IG5vdGljZUxpc3QsIHRvdGFsTm90aWNlTnVtLCBjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2UgfTogSVByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gIGNvbnN0IFtzdGFydFBhZ2UsIHNldFN0YXJ0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZW5kUGFnZSwgc2V0RW5kUGFnZV0gPSB1c2VTdGF0ZSg4KTtcclxuICBjb25zdCBjb21tZW50c09mUGFnZSA9IDg7XHJcbiAgY29uc3QgdG90YWxQYWdlID0gTWF0aC5jZWlsKHRvdGFsTm90aWNlTnVtIC8gY29tbWVudHNPZlBhZ2UpO1xyXG4gIGNvbnN0IHBhZ2VJbmRleDogbnVtYmVyW10gPSBbLi4uQXJyYXkodG90YWxQYWdlKV0ubWFwKChfLCBpKSA9PiBpICsgMSk7XHJcbiAgY29uc3QgdGFyZ2V0ID0gcGFnZUluZGV4LnNsaWNlKHN0YXJ0UGFnZSwgZW5kUGFnZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2UocGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVQcmV2UGFnZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHN0YXJ0UGFnZSAhPT0gMCkge1xyXG4gICAgICBzZXRTdGFydFBhZ2Uoc3RhcnRQYWdlIC0gOCk7XHJcbiAgICAgIHNldEVuZFBhZ2Uoc3RhcnRQYWdlKTtcclxuICAgICAgc2V0Q3VycmVudFBhZ2Uoc3RhcnRQYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU5leHRQYWdlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoZW5kUGFnZSAhPT0gdG90YWxQYWdlKSB7XHJcbiAgICAgIGlmIChzdGFydFBhZ2UgKyA4IDw9IHRvdGFsUGFnZSkge1xyXG4gICAgICAgIHNldFN0YXJ0UGFnZShzdGFydFBhZ2UgKyA4KTtcclxuICAgICAgICBzZXRDdXJyZW50UGFnZShzdGFydFBhZ2UgKyA5KTtcclxuICAgICAgICBpZiAoZW5kUGFnZSArIDggPD0gdG90YWxQYWdlKSB7XHJcbiAgICAgICAgICBzZXRFbmRQYWdlKGVuZFBhZ2UgKyA4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0RW5kUGFnZSh0b3RhbFBhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Tm90aWNlTGlzdFdyYXBwZXI+XHJcbiAgICAgICAge25vdGljZUxpc3Q/Lm1hcChcclxuICAgICAgICAgIChub3RpY2U6IElOb3RpY2UpID0+XHJcbiAgICAgICAgICAgIG5vdGljZSAmJiAoXHJcbiAgICAgICAgICAgICAgPENvbmNlcnRcclxuICAgICAgICAgICAgICAgIGltZ1RodW1ibmFpbD17bm90aWNlLmltZ1RodW1ibmFpbH1cclxuICAgICAgICAgICAgICAgIGF1dGhvck5pY2tuYW1lPXtub3RpY2UudXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIGludGVyZXN0TGlzdD17bm90aWNlLmludGVyZXN0fVxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0PXtub3RpY2UuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e25vdGljZS50aXRsZX1cclxuICAgICAgICAgICAgICAgIHRleHQ9e25vdGljZS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgY29tbWVudE51bT17bm90aWNlLmNvbW1lbnROdW19XHJcbiAgICAgICAgICAgICAgICBrZXk9e25vdGljZS5faWR9XHJcbiAgICAgICAgICAgICAgICBub3RpY2VJRD17bm90aWNlLl9pZH1cclxuICAgICAgICAgICAgICA+PC9Db25jZXJ0PlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPE5hdmlnYXRpb25Db250YWluZXI+XHJcbiAgICAgICAgICA8UGFnZU5hdmkgb25DbGljaz17aGFuZGxlUHJldlBhZ2VDbGlja30+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e1NtYWxsTGVmdEFycm93SWNvbn0gLz5cclxuICAgICAgICAgIDwvUGFnZU5hdmk+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHt0YXJnZXQubWFwKChwYWdlSWR4OiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlSWR4fT5cclxuICAgICAgICAgICAgICAgIDxQYWdlTnVtYmVyIHZhbHVlPXtgJHtwYWdlSWR4fWB9IG9uQ2xpY2s9e2hhbmRsZVBhZ2VDbGlja30gaXNTZWxlY3RlZD17Y3VycmVudFBhZ2UgPT09IHBhZ2VJZHh9PlxyXG4gICAgICAgICAgICAgICAgICB7YCR7cGFnZUlkeH1gfVxyXG4gICAgICAgICAgICAgICAgPC9QYWdlTnVtYmVyPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxQYWdlTmF2aSBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZUNsaWNrfT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17U21hbGxSaWdodEFycm93SWNvbn0gLz5cclxuICAgICAgICAgIDwvUGFnZU5hdmk+XHJcbiAgICAgICAgPC9OYXZpZ2F0aW9uQ29udGFpbmVyPlxyXG4gICAgICA8L05vdGljZUxpc3RXcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWNlTGlzdDtcclxuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBpZlByb3AsIHRoZW1lIH0gZnJvbSAnc3R5bGVkLXRvb2xzJztcclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlTnVtYmVyID0gU3R5bGVkKEJ1dHRvbik8eyBpc1NlbGVjdGVkPzogYm9vbGVhbiB9PmBcclxuICAke3RoZW1lKCdmb250LnN1YmhlYWQ0X2VuZycpfTtcclxuICBjb2xvcjogJHtpZlByb3AoJ2lzU2VsZWN0ZWQnLCAnIzAzYjZjZScsICcjNmY2ZjZmJyl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VOYXZpID0gU3R5bGVkKEJ1dHRvbilgXHJcbiAgbWFyZ2luOiAwIDI1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbkNvbnRhaW5lciA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogNjBweCBhdXRvIDc2cHg7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICB1bCBsaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpY2VMaXN0V3JhcHBlciA9IFN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuYDtcclxuIiwiaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IERpYW1vbmRJY29uIH0gZnJvbSAncHVibGljL2Fzc2V0cy9pbWFnZXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERldGFpbCwgTWFpbiwgU2VhcmNoRm9ybVdyYXBwZXIgfSBmcm9tICcuL3N0eWxlJztcclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgcmVSZW5kZXJLZXl3b3JkPzogKGtleXdvcmQ6IHN0cmluZykgPT4gdm9pZDtcclxuICBzZWxlY3RlZENhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIGNvbnRlbnRMaXN0TnVtPzogbnVtYmVyO1xyXG4gIGtleXdvcmRDaGFuZ2U/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hGb3JtKHsgcmVSZW5kZXJLZXl3b3JkLCBzZWxlY3RlZENhdGVnb3J5LCBjb250ZW50TGlzdE51bSwga2V5d29yZENoYW5nZSB9OiBJUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlS2V5d29yZCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFNlYXJjaFZhbHVlKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25DbGlja1NlYXJjaCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJlUmVuZGVyS2V5d29yZCAmJiByZVJlbmRlcktleXdvcmQoc2VhcmNoVmFsdWUpO1xyXG4gICAga2V5d29yZENoYW5nZSAmJiBrZXl3b3JkQ2hhbmdlKCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaEZvcm1XcmFwcGVyPlxyXG4gICAgICA8TWFpbj5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtEaWFtb25kSWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICA8cD57c2VsZWN0ZWRDYXRlZ29yeX08L3A+XHJcbiAgICAgICAgPFNlYXJjaEJhciBvbkNoYW5nZUtleXdvcmQ9e29uQ2hhbmdlS2V5d29yZH0gb25DbGlja1NlYXJjaD17b25DbGlja1NlYXJjaH0+PC9TZWFyY2hCYXI+XHJcbiAgICAgIDwvTWFpbj5cclxuICAgICAgPERldGFpbD5cclxuICAgICAgICA8cD57Y29udGVudExpc3ROdW196rCc7J2YIOy9mO2FkOy4oDwvcD5cclxuICAgICAgPC9EZXRhaWw+XHJcbiAgICA8L1NlYXJjaEZvcm1XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZvcm07XHJcbiIsImltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBwYWxldHRlLCB0aGVtZSB9IGZyb20gJ3N0eWxlZC10b29scyc7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZsZXg6MTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgOCl9O1xyXG4gICAgJHt0aGVtZSgnZm9udC5oMicpfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsID0gU3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDcpfTtcclxuICAke3RoZW1lKCdmb250LmJvZHkzX2VuZycpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hGb3JtV3JhcHBlciA9IFN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogODBweDtcclxuYDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXRhaWxDb250ZW50IH0gZnJvbSAnLi9EZXRhaWxDb250ZW50JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb290ZXIgfSBmcm9tICcuL0Zvb3Rlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm90aWNlQ29tbWVudExpc3QgfSBmcm9tICcuL05vdGljZUNvbW1lbnRMaXN0JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBOb3RpY2VIZWFkZXIgfSBmcm9tICcuL05vdGljZUhlYWRlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm90aWNlTGlzdCB9IGZyb20gJy4vTm90aWNlTGlzdCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoRm9ybSB9IGZyb20gJy4vU2VhcmNoRm9ybSc7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmVyQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFUlZFUl9VUkx9YCxcclxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsICFpc1Zpc2libGUgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IHRydWUsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9KSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiB0cnVlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCB7IEZvb3RlciB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnc3R5bGVzL0dsb2JhbFN0eWxlcyc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICdzdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvZm9udHMvaW5kZXguY3NzJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8dGl0bGU+TzI8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG4gICAgICAgIDxSZWNvaWxSb290PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUmVjb2lsUm9vdD5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQWxlcnRJY29uIH0gZnJvbSAnLi9hbGVydEljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbGxGZWVkSWNvbiB9IGZyb20gJy4vYWxsZmVlZEljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvd0Rvd25JY29uIH0gZnJvbSAnLi9hcnJvd0Rvd24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvd1VwSWNvbiB9IGZyb20gJy4vYXJyb3dVcC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhdXRpb25JY29uIH0gZnJvbSAnLi9jYXV0aW9uSWNvbi5wbmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoYWxsZW5nZUltZyB9IGZyb20gJy4vY2hhbGxlbmdlcmVnaXN0ZXJfaW1nLnBuZyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hhcmFjdGVyQmxhY2tJY29uIH0gZnJvbSAnLi9jaGFyYWN0ZXJfYmxhY2tfSW1nLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hhcmFjdGVyQ29sb3IxSWNvbiB9IGZyb20gJy4vY2hhcmFjdGVyX2NvbG9yMV9JbWcuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGFyYWN0ZXJDb2xvcjJJY29uIH0gZnJvbSAnLi9jaGFyYWN0ZXJfY29sb3IyX0ltZy5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoYXJhY3RlckNvbG9yM0ljb24gfSBmcm9tICcuL2NoYXJhY3Rlcl9jb2xvcjNfSW1nLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tBbGxPZmZJY29uIH0gZnJvbSAnLi9jaGVja2FsbF9vZmYuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGVja0FsbE9uSWNvbiB9IGZyb20gJy4vY2hlY2thbGxfb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGVja2VkSWNvbiB9IGZyb20gJy4vY2hlY2tlZEljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGVja0ljb24gfSBmcm9tICcuL2NoZWNrV2hpdGVJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tDaXJjbGVJY29uIH0gZnJvbSAnLi9jaGVja19jaXJjbGVJY29uLnBuZyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tPZmZJY29uIH0gZnJvbSAnLi9jaGVja19vZmYuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGVja09uSWNvbiB9IGZyb20gJy4vY2hlY2tfb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xvclNjcmFwSWNvbiB9IGZyb20gJy4vY29sb3Jfc2NyYXBJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tbWVudEljb24gfSBmcm9tICcuL2NvbW1lbnQuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21tZW50Q291bnRJY29uIH0gZnJvbSAnLi9jb21tZW50SWNvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERlbGV0ZUljb24gfSBmcm9tICcuL2RlbGV0ZUljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWxldGVNb2RhbEltZyB9IGZyb20gJy4vZGVsZXRlX21vZGFsLnBuZyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlhbW9uZEljb24gfSBmcm9tICcuL2RpYW1vbmQuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0SWNvbiB9IGZyb20gJy4vZWRpdEljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbXB0eUJvb2ttYXJrSWNvbiB9IGZyb20gJy4vZW1wdHlCb29rbWFyay5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVtcHR5Q2hlY2tCb3hJY29uIH0gZnJvbSAnLi9lbXB0eUNoZWNrQm94LnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXJyb3JJY29uIH0gZnJvbSAnLi9lcnJJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmlsbGVkQm9va21hcmtJY29uIH0gZnJvbSAnLi9maWxsZWRCb29rbWFyay5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbGxlZENoZWNrQm94SWNvbiB9IGZyb20gJy4vZmlsbGVkQ2hlY2tCb3guc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIYW1idXJnZXJJY29uIH0gZnJvbSAnLi9oYW1idXJnZXJMb2dvLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGFtQ2hhbGxlbmdlSWNvbiB9IGZyb20gJy4vaGFtQ2hhbGxlbmdlaWNvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhhbVVuY2hhbGxlbmdlSWNvbiB9IGZyb20gJy4vaGFtVW5jaGFsbGVuZ2VpY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGFtQXJyb3dEb3duSWNvbiB9IGZyb20gJy4vaGFtX2Fycm93RG93bi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhhbUFycm93VXBJY29uIH0gZnJvbSAnLi9oYW1fYXJyb3dVcC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlckxvZ29JY29uLCBkZWZhdWx0IGFzIE8ySWNvbiB9IGZyb20gJy4vaGVhZGVyX2xvZ28uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaWtlSWNvbiB9IGZyb20gJy4vaGVhcnQuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDbGlja0dvb2RJY29uIH0gZnJvbSAnLi9oZWFydEljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaWtlRmlsbGVkSWNvbiB9IGZyb20gJy4vaGVhcnRfZmlsbGVkLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRpdFdoaXRlSWNvbiB9IGZyb20gJy4vSWNvbnNfZWRpdHdoaXRlLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoSWNvbiB9IGZyb20gJy4vaWNvbnNfc2VhcmNoLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSm9pbkVyckljb24gfSBmcm9tICcuL2pvaW5JbnB1dEVyckljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYW5kaW5nQmFja0ltZyB9IGZyb20gJy4vbGFuZGluZ0JhY2suc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXJnZUxlZnRBcnJvd0ljb24gfSBmcm9tICcuL2xhcmdlTGVmdEFycm93LnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGFyZ2VSaWdodEFycm93SWNvbiB9IGZyb20gJy4vbGFyZ2VSaWdodEFycm93LnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGluZUljb24gfSBmcm9tICcuL2xpbmUuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dpbkFsZXJ0SWNvbiB9IGZyb20gJy4vbG9naW5BbGVydC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ2luSWNvbiB9IGZyb20gJy4vbG9naW5JY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nbyB9IGZyb20gJy4vbG9nby5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haW5DYXJkMUltZyB9IGZyb20gJy4vbWFpbkNhcmQxLnBuZyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFpbkNhcmQySW1nIH0gZnJvbSAnLi9tYWluQ2FyZDIucG5nJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYWluQ2FyZDNJbWcgfSBmcm9tICcuL21haW5DYXJkMy5wbmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haW5DYXJkNEltZyB9IGZyb20gJy4vbWFpbkNhcmQ0LnBuZyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVudUJhckljb24gfSBmcm9tICcuL21lbnVfYmFySWNvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1pbnVzSWNvbiB9IGZyb20gJy4vbWludXNJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWxDbG9zZUljb24gfSBmcm9tICcuL21vZGFsQ2xvc2Uuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb3JlSWNvbiB9IGZyb20gJy4vbW9yZUJ1dHRvbkljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb3JlQ2xpY2tlZEljb24gfSBmcm9tICcuL21vcmVJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9yZVZpZXdBcnJvd0ljb24gfSBmcm9tICcuL21vcmVWaWV3QXJyb3cuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNeUZlZWRJY29uIH0gZnJvbSAnLi9teWZlZWRJY29uLnN2Zyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbXlwYWdlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBOZXh0SWNvbiB9IGZyb20gJy4vbmV4dEljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBOb3RpY2VIZWFkZXJJY29uIH0gZnJvbSAnLi9ub3RpY2VIZWFkZXJJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGx1c0ljb24gfSBmcm9tICcuL3BsdXNJY29uLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR3JleVBsdXNJY29uIH0gZnJvbSAnLi9wbHVzSWNvbkdyZXkuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBHcmV5ZGZQbHVzSWNvbiB9IGZyb20gJy4vcGx1c0ljb25fZGZkZmRmLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJldkljb24gfSBmcm9tICcuL3ByZXZDYXRlZ29yeUJ1dHRvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNjcmFwSWNvbiB9IGZyb20gJy4vc2NyYXAuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBHcmF5U2NyYXBJY29uIH0gZnJvbSAnLi9zY3JhcEljb24uc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY3JhcEZpbGxlZEljb24gfSBmcm9tICcuL3NjcmFwX2ZpbGxlZC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbmNlcnQxSW1nIH0gZnJvbSAnLi9zaGFyZVBob3RvMS5wbmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbmNlcnQySW1nIH0gZnJvbSAnLi9zaGFyZVBob3RvMi5wbmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNtYWxsTGVmdEFycm93SWNvbiB9IGZyb20gJy4vc21hbGxMZWZ0QXJyb3cuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTbWFsbFJpZ2h0QXJyb3dJY29uIH0gZnJvbSAnLi9zbWFsbFJpZ2h0QXJyb3cuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTcGVha2VyQmFkZ2UxSW1nIH0gZnJvbSAnLi9zcGVha2VyQmFkZ2UxLnBuZyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3BlYWtlckJhZGdlMkltZyB9IGZyb20gJy4vc3BlYWtlckJhZGdlMi5wbmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNwZWFrZXJCYWRnZTNJbWcgfSBmcm9tICcuL3NwZWFrZXJCYWRnZTMucG5nJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaHVtYm5haWxDb21tZW50SWNvbiB9IGZyb20gJy4vdGh1bW5haWxDb21tZW50LnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGh1bWJuYWlsTGlrZUljb24gfSBmcm9tICcuL3RodW1uYWlsSGVhcnQuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VySW1nIH0gZnJvbSAnLi91c2VySW1hZ2UucG5nJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBXcml0ZUljb24gfSBmcm9tICcuL3dyaXRlSWNvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFhJY29uIH0gZnJvbSAnLi94SWNvbi5zdmcnO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFBlcmNlbnQyMEljb24gfSBmcm9tICcuLzAtMjBpbWcuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQZXJjZW50MTAwSWNvbiB9IGZyb20gJy4vMTAwaW1nLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGVyY2VudDQwSWNvbiB9IGZyb20gJy4vMjEtNTBpbWcuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQZXJjZW50NjBJY29uIH0gZnJvbSAnLi81MS04MGltZy5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBlcmNlbnQ4MEljb24gfSBmcm9tICcuLzgxLTk5aW1nLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tbXVuaWNhdGlvbktpbmdJY29uIH0gZnJvbSAnLi9jb21tdW5pY2F0aW9uS2luZy5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbW11bmljYXRpb25LaW5nRmlsbEljb24gfSBmcm9tICcuL2NvbW11bmljYXRpb25LaW5nX2ZpbGwuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNeVBhZ2VFZGl0SWNvbiB9IGZyb20gJy4vZWRpdC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVtcGF0aGl6aW5nSWNvbiB9IGZyb20gJy4vZW1wYXRoaXppbmcuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbXBhdGhpemluZ0ZpbGxJY29uIH0gZnJvbSAnLi9lbXBhdGhpemluZ19maWxsLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmlyc3RDb21tZW50SWNvbiB9IGZyb20gJy4vZmlyc3RDb21tZW50LnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmlyc3RDb21tZW50RmlsbEljb24gfSBmcm9tICcuL2ZpcnN0Q29tbWVudF9maWxsLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2V0Q2hhbGxlbmdlSWNvbiB9IGZyb20gJy4vZ2V0Q2hhbGxlbmdlLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2V0Q2hhbGxlbmdlRmlsbEljb24gfSBmcm9tICcuL2dldENoYWxsZW5nZV9maWxsLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR3Jvd2luZ1RvZ2V0aGVySWNvbiB9IGZyb20gJy4vZ3Jvd2luZ1RvZ2V0aGVyLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR3Jvd2luZ1RvZ2V0aGVyRmlsbEljb24gfSBmcm9tICcuL2dyb3dpbmdUb2dldGhlcl9maWxsLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF0dXJhbEJvcm5PMkljb24gfSBmcm9tICcuL25hdHVyYWxCb3JuTzIuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBOYXR1cmFsQm9ybk8yRmlsbEljb24gfSBmcm9tICcuL25hdHVyYWxCb3JuTzJfZmlsbC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWR5Rm9yQ29tbXVuaWNhdGlvbkljb24gfSBmcm9tICcuL3JlYWR5Rm9yQ29tbXVuaWNhdGlvbi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWR5Rm9yQ29tbXVuaWNhdGlvbkZpbGxJY29uIH0gZnJvbSAnLi9yZWFkeUZvckNvbW11bmljYXRpb25fZmlsbC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWR5Rm9yR3Jvd0ljb24gfSBmcm9tICcuL3JlYWR5Rm9yR3Jvdy5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWR5Rm9yR3Jvd0ZpbGxJY29uIH0gZnJvbSAnLi9yZWFkeUZvckdyb3dfZmlsbC5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNoeUVtYWlsSWNvbiB9IGZyb20gJy4vc2h5RW1haWwuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaHlFbWFpbEZpbGxJY29uIH0gZnJvbSAnLi9zaHlFbWFpbF9maWxsLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3ltcGF0aHlLaW5nSWNvbiB9IGZyb20gJy4vc3ltcGF0aHlLaW5nLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3ltcGF0aHlLaW5nRmlsbEljb24gfSBmcm9tICcuL3N5bXBhdGh5S2luZ19maWxsLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlZnVsTGVhcm5NeXNlbGZJY29uIH0gZnJvbSAnLi91c2VmdWxMZWFybk15c2VsZi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZWZ1bExlYXJuTXlzZWxmRmlsbEljb24gfSBmcm9tICcuL3VzZWZ1bExlYXJuTXlzZWxmX2ZpbGwuc3ZnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VmdWxTaGFyZVRvZ2V0aGVySWNvbiB9IGZyb20gJy4vdXNlZnVsU2hhcmVUb2dldGhlci5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZWZ1bFNoYXJlVG9nZXRoZXJGaWxsSWNvbiB9IGZyb20gJy4vdXNlZnVsU2hhcmVUb2dldGhlcl9maWxsLnN2Zyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2VsY29tZVRvTzJJY29uIH0gZnJvbSAnLi93ZWxjb21lVG9PMi5zdmcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFdlbGNvbWVUb08yRmlsbEljb24gfSBmcm9tICcuL3dlbGNvbWVUb08yX2ZpbGwuc3ZnJztcclxuIiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IHJlY29pbFBlcnNpc3QgfSBmcm9tICdyZWNvaWwtcGVyc2lzdCc7XHJcbmltcG9ydCB7IElVc2VyU3RhdGUsIElVc2VyU3RhdHVzU3RhdGUgfSBmcm9tICd0eXBlcy9nbG9iYWwudHlwZSc7XHJcblxyXG5jb25zdCB7IHBlcnNpc3RBdG9tIH0gPSByZWNvaWxQZXJzaXN0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclN0YXRlID0gYXRvbTxJVXNlclN0YXRlIHwgbnVsbD4oe1xyXG4gIGtleTogJ3VzZXIvYXRvbScsXHJcbiAgZGVmYXVsdDogbnVsbCxcclxuICBlZmZlY3RzX1VOU1RBQkxFOiBbcGVyc2lzdEF0b21dLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU3RhdHVzU3RhdGUgPSBhdG9tPElVc2VyU3RhdHVzU3RhdGUgfCBudWxsPih7XHJcbiAga2V5OiAndXNlclN0YXR1cy9hdG9tJyxcclxuICBkZWZhdWx0OiBudWxsLFxyXG4gIGVmZmVjdHNfVU5TVEFCTEU6IFtwZXJzaXN0QXRvbV0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgcmVzZXQgfSBmcm9tICdzdHlsZWQtcmVzZXQnO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgJHtyZXNldH1cclxuICBcclxuICAqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgfVxyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nO1xyXG4gIH1cclxuICBhLCBidXR0b24ge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICB1bCBsaSB7bGlzdC1zdHlsZS10eXBlOiBub25lO31cclxuXHJcbiAgYSB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6IGJsYWNrOyB9XHJcbiAgYTp2aXNpdGVkIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiAgYTpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG4gIGE6Zm9jdXMgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuICBhOmhvdmVyLCBhOmFjdGl2ZSB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjh2dztcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZXM7XHJcbiIsImNvbnN0IGJhY2tncm91bmQgPSBbJyNmM2ZjZmYnLCAnI2YwZjdmZicsICcjZGRmYmZhJywgJyNmMGZhZmInXTtcclxuXHJcbmNvbnN0IHByaW1hcnkgPSBbJyMxM2UyZGQnLCAnIzA0ZDZlMCcsICcjNThlMmZmJywgJyMzNmM4ZjUnLCAnIzAwYmFmNCcsICcjMDNiNmNlJywgJyNmNjY0MzYnLCAnI2UwNDc0NyddO1xyXG5cclxuY29uc3QgZ3JheXNjYWxlID0gW1xyXG4gICcjZmZmZmZmJyxcclxuICAnI2RmZGZkZicsXHJcbiAgJyNjMWMxYzEnLFxyXG4gICcjYTVhNWE1JyxcclxuICAnIzhiOGI4YicsXHJcbiAgJyM2ZjZmNmYnLFxyXG4gICcjNTU1NTU1JyxcclxuICAnIzNkM2QzZCcsXHJcbiAgJyMyNDI0MjQnLFxyXG4gICcjMGQwZDBkJyxcclxuICAnI2M0YzRjNCcsXHJcbl07XHJcblxyXG5jb25zdCB0aGVtZSA9IHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBiYWNrZ3JvdW5kLFxyXG4gICAgcHJpbWFyeSxcclxuICAgIGdyYXlzY2FsZSxcclxuICAgIGVtcHR5SW1hZ2U6ICcjMDI5MmE1JyxcclxuICB9LFxyXG4gIHNpemU6IHtcclxuICAgIG1vYmlsZTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXHJcbiAgICB0YWJsZXQ6ICcobWF4LXdpZHRoOiA5MDBweCknLFxyXG4gICAgbGFwdG9wOiAnKG1heC13aWR0aDogMTIwMHB4KScsXHJcbiAgICBkZXNrdG9wOiAnKG1pbi13aWR0aDogMTgwMHB4KScsXHJcbiAgfSxcclxuICBmb250OiB7XHJcbiAgICBkcDE6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgZHAxX2VuZzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4xNztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdIb21lcGFnZUJhdWthc3Rlbic7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGAsXHJcbiAgICBkcDI6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgZHAyX2VuZzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBkcDNfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjIyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBkcDQ6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgaDE6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzY7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgaDFfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjIxO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBoMjogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4zMTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBoMl9lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMTk7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIHN1YmhlYWQxOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgc3ViaGVhZDFfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBzdWJoZWFkMjogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS40MztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBzdWJoZWFkMl9lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjk7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIHN1YmhlYWQzOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIHN1YmhlYWQzX2VuZzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdIb21lcGFnZUJhdWthc3Rlbic7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgc3ViaGVhZDQ6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgc3ViaGVhZDRfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBzdWJoZWFkNTogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4zMztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBzdWJoZWFkNV9lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIGJvZHkxOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBib2R5MV9lbmc6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSG9tZXBhZ2VCYXVrYXN0ZW4nO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgYm9keTI6IGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIGJvZHkyX2VuZzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS4yOTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdIb21lcGFnZUJhdWthc3Rlbic7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGAsXHJcbiAgICBib2R5MzogYFxyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgYm9keTNfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICAgIGJvZHk0OiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU2O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBgLFxyXG4gICAgYm9keTRfZW5nOiBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuJztcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYCxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9JY29uc19lZGl0d2hpdGUuMmVhYmU0NzllZDMyZTYyNWNkZTk0OTM5Y2NiN2UxYWEuc3ZnXCIsXCJoZWlnaHRcIjo0NSxcIndpZHRoXCI6NDV9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9hbGVydEljb24uMzE0NTdhM2Q4ZGEwNTI4MzFhYmNjOGUxYzIwMTAyZWMuc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9hbGxmZWVkSWNvbi5hNDFhMTkzOTZiOWQxM2Q4OTAyZTNhODA5MDA1YTlhNi5zdmdcIixcImhlaWdodFwiOjk0LFwid2lkdGhcIjo5NH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2Fycm93RG93bi41YTIzMDExNzdmMWVhNDg3NTc5MTc3YzQyZjk5YzgyNy5zdmdcIixcImhlaWdodFwiOjExLFwid2lkdGhcIjoxNX07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2Fycm93VXAuNzFhMWViYTUyZDE5ZDljYmE0NWM4ZjkyYjZkOWZlMzIuc3ZnXCIsXCJoZWlnaHRcIjoxMCxcIndpZHRoXCI6MTV9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jYXV0aW9uSWNvbi43MDE2YWJlODVmMWJiZWJiMDNlMTliYWJkMmM0MmVkMi5wbmdcIixcImhlaWdodFwiOjE4LFwid2lkdGhcIjoxOCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZhc3NldHMlMkZpbWFnZXMlMkZjYXV0aW9uSWNvbi43MDE2YWJlODVmMWJiZWJiMDNlMTliYWJkMmM0MmVkMi5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoYWxsZW5nZXJlZ2lzdGVyX2ltZy43MTQxOWM5ODE0NDNkMWNkMmEwMDM3NTc2YzQyMTBjMi5wbmdcIixcImhlaWdodFwiOjE0MTQsXCJ3aWR0aFwiOjY3NyxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZhc3NldHMlMkZpbWFnZXMlMkZjaGFsbGVuZ2VyZWdpc3Rlcl9pbWcuNzE0MTljOTgxNDQzZDFjZDJhMDAzNzU3NmM0MjEwYzIucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGFyYWN0ZXJfYmxhY2tfSW1nLmZmNDVjNmU4NDRjODA4YmI1ZDJmNmMzMWM2NTdhYWI2LnN2Z1wiLFwiaGVpZ2h0XCI6NTUsXCJ3aWR0aFwiOjU1fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvY2hhcmFjdGVyX2NvbG9yMV9JbWcuZDVjOWIxMDU0ODVkNzQ4NzE2MzE1ZWM3Njg2NWFjMGYuc3ZnXCIsXCJoZWlnaHRcIjo1NSxcIndpZHRoXCI6NTV9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGFyYWN0ZXJfY29sb3IyX0ltZy42MGY3YTU2MWFmOTAxZDFmNTA3OTZiY2YxMGU2NGYxMS5zdmdcIixcImhlaWdodFwiOjg2LFwid2lkdGhcIjoxMzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGFyYWN0ZXJfY29sb3IzX0ltZy4yNzIyZTM2OTI0MjQ2NzcyOTM2M2FiM2ZkYTJlMGQ5Mi5zdmdcIixcImhlaWdodFwiOjg2LFwid2lkdGhcIjoxMzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGVja1doaXRlSWNvbi5hZDhlMzhmOTdlNWI1ZjQ1NWQyNzczYTg4NWU1Y2YxOC5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoZWNrX2NpcmNsZUljb24uMDA3MjJjYzJkYzEyMmYxOGNkZGY2NDZkZTgyYmExZWEucG5nXCIsXCJoZWlnaHRcIjo5MCxcIndpZHRoXCI6OTAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGcHVibGljJTJGYXNzZXRzJTJGaW1hZ2VzJTJGY2hlY2tfY2lyY2xlSWNvbi4wMDcyMmNjMmRjMTIyZjE4Y2RkZjY0NmRlODJiYTFlYS5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoZWNrX29mZi5iZDFmMTI3NGMwNWI0ZTcyNTIyNmU0YmNjYjMwZTY0Mi5zdmdcIixcImhlaWdodFwiOjEzLFwid2lkdGhcIjoxOH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NoZWNrX29uLjMwZGVlYWU4NjEyZjBiYWY0YTVmYjM1OTYxNDUwODRjLnN2Z1wiLFwiaGVpZ2h0XCI6MTMsXCJ3aWR0aFwiOjE4fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvY2hlY2thbGxfb2ZmLjk4MmY0M2IyM2RjY2QxYTdhOWE4M2Y2N2FhYTMwNWY5LnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvY2hlY2thbGxfb24uOTlkYjAzODljM2E1ZGRjMWY0MGMwZTgzY2Q2YTMyY2Yuc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jaGVja2VkSWNvbi41Y2ZjMDFmYWI1NjJlN2JmY2NiZGJmZDE3ODZmOWM0Mi5zdmdcIixcImhlaWdodFwiOjI2LFwid2lkdGhcIjozNX07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NvbG9yX3NjcmFwSWNvbi5iNDljOTZlZGYxZjgwOTUwZjcwMWY2OTExYWQzYmU1OC5zdmdcIixcImhlaWdodFwiOjI4LFwid2lkdGhcIjoyOH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2NvbW1lbnQuOTkxMmFmMTg4ODkyOWIwZTU2MTc2YTk4YWJlZmYwMmIuc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9jb21tZW50SWNvbi44ZTZkNDQwMDJmNWE0NDMxZTBiODRkZjVlMzM1OTg4OS5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2RlbGV0ZUljb24uMTIwNzExM2Q4ZjcyMWMyY2Q5MzUxZmZjNmFlM2UxNmUuc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9kZWxldGVfbW9kYWwuMGFhZTk3MzE0Y2IwOTA5ODMxZDQwZmI1ZjczZmQxMzIucG5nXCIsXCJoZWlnaHRcIjo5MCxcIndpZHRoXCI6OTAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGcHVibGljJTJGYXNzZXRzJTJGaW1hZ2VzJTJGZGVsZXRlX21vZGFsLjBhYWU5NzMxNGNiMDkwOTgzMWQ0MGZiNWY3M2ZkMTMyLnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvZGlhbW9uZC44NjJjODhiNGJhYzg5MmY1ZmY0YWFkMDg1MDMwOTdiMC5zdmdcIixcImhlaWdodFwiOjIyLFwid2lkdGhcIjoyMn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2VkaXRJY29uLmM5YmYzYzEyYTc3MWFhYjQ3OTAwYTNjNDlkOGFkMTJmLnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvZW1wdHlCb29rbWFyay5lMmFhMmI0MmUzMDVmNzA2YTYyYWY1ZGIxOGEzN2I5MS5zdmdcIixcImhlaWdodFwiOjI4LFwid2lkdGhcIjoyOH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2VtcHR5Q2hlY2tCb3guODBkMmE4ZTJiMzU0ZjhkYTIwMzBiNzFmZTRhMThmNTEuc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9lcnJJY29uLjJmYzZlMjA0ZTAwODZhMTgwOGZlOTI2ZjlkMGQ0MGUwLnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvZmlsbGVkQm9va21hcmsuNzRkOTgxNjhmMmMxM2RmODg4YWMxMzJkNjNkMjY5ZDcuc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9maWxsZWRDaGVja0JveC5jM2FmZTk1OWNiODE5ZTBjZDUwMjI4ZjJhNjllNGU4YS5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2hhbUNoYWxsZW5nZWljb24uZGEwNWNmZGY3MWYyMzUyYzFmNTJlOWUxZDIxM2ZlYmUuc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9oYW1VbmNoYWxsZW5nZWljb24uOTZlYzE4NmRkNjdjZjZmNzg5MWE1NzJlOWYyNmM2YjAuc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9oYW1fYXJyb3dEb3duLmFhYTNiYzFhNGM2NjE4Mjc5NjgxNmRjYWZlNjM2OTRmLnN2Z1wiLFwiaGVpZ2h0XCI6MjAsXCJ3aWR0aFwiOjIwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvaGFtX2Fycm93VXAuYWU4ZTgzYjE2YjdmN2JmOTRkYWZmODZjMjlkZDg3ZDMuc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9oYW1idXJnZXJMb2dvLjljYTBlMmE1Y2MzMTJmMWVlZDQzYjZkOTQzNmI1MmUxLnN2Z1wiLFwiaGVpZ2h0XCI6MzIsXCJ3aWR0aFwiOjMyfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvaGVhZGVyX2xvZ28uYTQ4YzBkYTBlODBjZjIxNjk1NjU3N2U3YmFlODdmMWEuc3ZnXCIsXCJoZWlnaHRcIjozMCxcIndpZHRoXCI6MzJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9oZWFydC42Mjk2YWM4ZDdhNGQyYWM0NGEzOWJjMmY3ODVhZDJlYS5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2hlYXJ0SWNvbi42ODQ0Mjg1YmYzMzBmMGM4ZTY5ZTZkNWI1N2IzNDY2MC5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2hlYXJ0X2ZpbGxlZC5mZGZmZTk3NGRkZTRkMzUwYzFkNGRmNGE5NmQ2NGJkNC5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb25zX3NlYXJjaC42YjM3MDZiMjhkYzZkMDAwYTg2NTEzZjNlMjJmMGYyZC5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2pvaW5JbnB1dEVyckljb24uMmZjNmUyMDRlMDA4NmExODA4ZmU5MjZmOWQwZDQwZTAuc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9sYW5kaW5nQmFjay41ODY5ZTBjNjMzODk1YmJhNzBkNDdjYmM5NDc1N2JiNC5zdmdcIixcImhlaWdodFwiOjYxMTQsXCJ3aWR0aFwiOjE5MjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9sYXJnZUxlZnRBcnJvdy4yMDhlZTlmNjA0MTRkOTljZjQ3NTllNzQyNzk3ZjM1Yy5zdmdcIixcImhlaWdodFwiOjQ4LFwid2lkdGhcIjo0OH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xhcmdlUmlnaHRBcnJvdy5hZWUzZjFiOGQ1MmRhMTYzMWMzNmFiNWJlNjZjMzgyYy5zdmdcIixcImhlaWdodFwiOjQ4LFwid2lkdGhcIjo0OH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xpbmUuZDFmYjY1NDc1NGY3ZWU3OWM2ZDkzY2MwNWI4NzRmMmQuc3ZnXCIsXCJoZWlnaHRcIjoxNixcIndpZHRoXCI6MX07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2xvZ2luQWxlcnQuYmU1Njg2YzlmMWI4MjBhNzJkOWZjMTE2MGVmOGE2ZmYuc3ZnXCIsXCJoZWlnaHRcIjo5MCxcIndpZHRoXCI6OTB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9sb2dpbkljb24uMDg4OWE4ZWE0YmVmMjE5Njk3YWY1M2ExMjU4NzMxY2Iuc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9sb2dvLmU3YmIyNTA1YTc3YjhmNTNlMTA3MTA4YzMxOTkzNTY4LnN2Z1wiLFwiaGVpZ2h0XCI6MTAwLFwid2lkdGhcIjoxMDB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tYWluQ2FyZDEuYWEyNjJjMTNkYTZmY2RjYTgyODViNjJjZDY4OTYzMGYucG5nXCIsXCJoZWlnaHRcIjo5MjEsXCJ3aWR0aFwiOjkwNixcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZhc3NldHMlMkZpbWFnZXMlMkZtYWluQ2FyZDEuYWEyNjJjMTNkYTZmY2RjYTgyODViNjJjZDY4OTYzMGYucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tYWluQ2FyZDIuZmFhZjIxOTlkMWQ2NTM5Y2FmMWY5MjBkNWM1YjlkMGMucG5nXCIsXCJoZWlnaHRcIjo5MjEsXCJ3aWR0aFwiOjkwNixcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZhc3NldHMlMkZpbWFnZXMlMkZtYWluQ2FyZDIuZmFhZjIxOTlkMWQ2NTM5Y2FmMWY5MjBkNWM1YjlkMGMucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tYWluQ2FyZDMuOGU5Nzc2MWQ3NjdmOTMwNTAzNWQ3ZDk2MGY0ZjFjNzEucG5nXCIsXCJoZWlnaHRcIjo5MjEsXCJ3aWR0aFwiOjkwNixcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZhc3NldHMlMkZpbWFnZXMlMkZtYWluQ2FyZDMuOGU5Nzc2MWQ3NjdmOTMwNTAzNWQ3ZDk2MGY0ZjFjNzEucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tYWluQ2FyZDQuZDU0NTBhMTg4YzEyYjg1ZDE0ODY2MmMzOGUyYzNmNzQucG5nXCIsXCJoZWlnaHRcIjo5MjEsXCJ3aWR0aFwiOjkwNixcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZhc3NldHMlMkZpbWFnZXMlMkZtYWluQ2FyZDQuZDU0NTBhMTg4YzEyYjg1ZDE0ODY2MmMzOGUyYzNmNzQucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tZW51X2Jhckljb24uNDEzOTc0NDhhNTYzYTdmYjg4ZDA0NzIxZDI0YjZlNDAuc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9taW51c0ljb24uZDk2NTQ0MjA0YzQ2YTExYmI2MGZjYjEzOTY1NDI3OTQuc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tb2RhbENsb3NlLjFjYjBlMWE4OTg1MjQ3YzUwM2ZhNDhjNmM3ZTQ3YzkzLnN2Z1wiLFwiaGVpZ2h0XCI6MTgsXCJ3aWR0aFwiOjE4fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbW9yZUJ1dHRvbkljb24uNzhlMDA5ZTdlYzk0ZGY3MDRmMzU4MmVjYzdmMjJiMDguc3ZnXCIsXCJoZWlnaHRcIjo2MCxcIndpZHRoXCI6NjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tb3JlSWNvbi45OTlhYmNkZWEyNzVkMzdjNWFjMTVhMWQwN2E2NjQ5NS5zdmdcIixcImhlaWdodFwiOjYwLFwid2lkdGhcIjo2MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21vcmVWaWV3QXJyb3cuNjEyOGJiZWMwYTVmYmU3NjZmNzZmMGU4ZDM5NGFhYWIuc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teWZlZWRJY29uLjA3ZjAwOTVhMDczN2MzNTk3ZTU3NmE1ZGI3OWNkZjY4LnN2Z1wiLFwiaGVpZ2h0XCI6OTQsXCJ3aWR0aFwiOjk0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlLzAtMjBpbWcuOWViNjdjYmU4ZTJiZjg3ODBmNmYxMWI1YzFlMGVhNTYuc3ZnXCIsXCJoZWlnaHRcIjoxMTUsXCJ3aWR0aFwiOjE4MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS8xMDBpbWcuMWE0NWUwMmUyNzUzYTM3YjNiZWRiMGU2Y2Y2OWUxOTIuc3ZnXCIsXCJoZWlnaHRcIjoxMTUsXCJ3aWR0aFwiOjE4MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS8yMS01MGltZy5lZTUzYmI2ZWQzMTAwMzJmZWJkMWUwMGExNDdhYTY4Yi5zdmdcIixcImhlaWdodFwiOjExNSxcIndpZHRoXCI6MTgwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlLzUxLTgwaW1nLjk3YWVmMGZmMjE0NDcyMTUwMDk4NjYwY2U4NGJmN2NlLnN2Z1wiLFwiaGVpZ2h0XCI6MTE1LFwid2lkdGhcIjoxODB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvODEtOTlpbWcuMmFmZmExZDdjMGZkZWQ0N2FjM2VmYzJiZTUxMmZiMmYuc3ZnXCIsXCJoZWlnaHRcIjoxMTUsXCJ3aWR0aFwiOjE4MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9jb21tdW5pY2F0aW9uS2luZy5lYTk0Mjg3YTU2ZmVmYTRkNjhhN2M2YzZhMTcwODc5MS5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9jb21tdW5pY2F0aW9uS2luZ19maWxsLjZhM2E1ZGY3NzI4OWZkZjZiYTllNTYyMTg0MDg1NTBhLnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2VkaXQuNGZmZjIzMDNiMmFmMmQ3ODUyMzQ4ZWM2NGIwOGQyNGMuc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvZW1wYXRoaXppbmcuNTQ4ZWZjMzkzMDI5MzAxZjhmYzBjMTZmODkzODc0MTYuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvZW1wYXRoaXppbmdfZmlsbC5mMjJjNzliNGRhMzMxM2NiMWM4ZDY3Nzc0M2Y1ZjY5YS5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9maXJzdENvbW1lbnQuNTFiZWQ0NTdjYzkwOTI0OWYwZjgyNmEyMjk0MTgzMzMuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvZmlyc3RDb21tZW50X2ZpbGwuYzI2YjZlOGU4NTE3NjhhNmRkMjgwNmVhMTJkNWEwNzQuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvZ2V0Q2hhbGxlbmdlLjZmNmRkZWYwNzgyNjlkZTkwNThlZjk3NmYyNzQ1NmVlLnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2dldENoYWxsZW5nZV9maWxsLjI3ZTBkNGJjMjZiNjA4NmFlZTVjY2Y2NDk0ZmY4NWRkLnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL2dyb3dpbmdUb2dldGhlci4zYmZjOGM4Njc1M2JmNGIxZDE4YjJlZTViOWI0OGIyNS5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9ncm93aW5nVG9nZXRoZXJfZmlsbC45YjZmMTE3ZDBiMWMyMDQ1ODI3NjA1NDRjOGJhNzY5OC5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9uYXR1cmFsQm9ybk8yLmMzNWNkNTdiMjk3MmVkOGZmOGE0YzIwMDFmYmVkNzIyLnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL25hdHVyYWxCb3JuTzJfZmlsbC43YmIxMDAxZjFkNWY0MTU0YzRjZmNiMDIyZDA3MTFmZS5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS9yZWFkeUZvckNvbW11bmljYXRpb24uMjIyYjc2YTAwYjA0ODRjZDc2ZmRlNjIzMjA5NDQyMmEuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvcmVhZHlGb3JDb21tdW5pY2F0aW9uX2ZpbGwuMjI5OWFjYWU2ZjI5NDEwZmI2OGI0YWE2YjgyN2I4ZTMuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvcmVhZHlGb3JHcm93LmI4NGRiNWQ2NWEwN2VmNmVjOTlmNGVhYzYyNjk3OTU3LnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3JlYWR5Rm9yR3Jvd19maWxsLjFkNmNmMmI2OTIyN2FjNmYyZGQ5NTBkNjA0NDYyZDBiLnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3NoeUVtYWlsLmI0NmUxOWQxOWE4YTg5MzI1MjY1MzE3NWM4ZTc1YjhjLnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3NoeUVtYWlsX2ZpbGwuNDBjZTYxMjFkZDU4YmE3YTI0N2FhYjU2ZWEwOThjYjMuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2Uvc3ltcGF0aHlLaW5nLjY4YTg0Y2E2N2NiNDNjMDBjMDg2ZDliYWQ3YTY0NDZhLnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3N5bXBhdGh5S2luZ19maWxsLjJlN2QwZTQyNGY4MTAyZTA2YmYzNmEyMDdkZWJhYjQ2LnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3VzZWZ1bExlYXJuTXlzZWxmLjVmZTQ0NTY1NTdhOWE5MWRlZDMzY2M1NjBhNzA1NTU3LnN2Z1wiLFwiaGVpZ2h0XCI6NzAsXCJ3aWR0aFwiOjcwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbXlwYWdlL3VzZWZ1bExlYXJuTXlzZWxmX2ZpbGwuY2E5NTQ4OThhNGUxYjhkZGQ0MWIxOWMzZjU4YjIwODcuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2UvdXNlZnVsU2hhcmVUb2dldGhlci4yY2Y3MzczNDE1MjgzYzIyNjUxY2M5MjYyNWUwMGM4My5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL215cGFnZS91c2VmdWxTaGFyZVRvZ2V0aGVyX2ZpbGwuMGRjMWQ2NTljZTFmNzc3MGFiYjM5ZGM4NTQ2OTliNjQuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2Uvd2VsY29tZVRvTzIuZWU1ZTE2Y2FmN2Q0ZmE3MjZlM2FhYjkzYWM5MjM2NDcuc3ZnXCIsXCJoZWlnaHRcIjo3MCxcIndpZHRoXCI6NzB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9teXBhZ2Uvd2VsY29tZVRvTzJfZmlsbC4xNDA2OWE2ZjIwN2ZhZGFiZGViNGRkZWZjMjVlMTA5OC5zdmdcIixcImhlaWdodFwiOjcwLFwid2lkdGhcIjo3MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL25leHRJY29uLmNmMjVjNDEwZTgxNjMxMDk3YzlhZjc1OWQyZDI2MDIzLnN2Z1wiLFwiaGVpZ2h0XCI6NjAsXCJ3aWR0aFwiOjYwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvbm90aWNlSGVhZGVySWNvbi4wMzVjZjgzNmI5ZmE3MGM3YWQyZjdiM2FjMDU3NDk5NS5zdmdcIixcImhlaWdodFwiOjM1MCxcIndpZHRoXCI6MzUwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvcGx1c0ljb24uMmU0ZTk0NzRmYzVhNjcyZmQ0YTdkZDZjMmI4OTNjM2Muc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wbHVzSWNvbkdyZXkuNWI4NDJhNjFjMzljMjljMDNiMDkwODJjNmY3YmY4Mzkuc3ZnXCIsXCJoZWlnaHRcIjozOCxcIndpZHRoXCI6Mzh9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wbHVzSWNvbl9kZmRmZGYuMmUzNDRhMjAyMjQ5MWVkYWRkMTVkMDZmMjU0M2NkY2Euc3ZnXCIsXCJoZWlnaHRcIjoxNDAsXCJ3aWR0aFwiOjE0MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3ByZXZDYXRlZ29yeUJ1dHRvbi4zZDEwMDc1M2U4OTA0YWM4YmZkMDFlNzIxNWE0MWM3ZS5zdmdcIixcImhlaWdodFwiOjYwLFwid2lkdGhcIjo2MH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NjcmFwLmYxM2M5OWFlOGRkZmU4Y2RkOTU2NDQ5MDc1YWNmZDg5LnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvc2NyYXBJY29uLmUyYWEyYjQyZTMwNWY3MDZhNjJhZjVkYjE4YTM3YjkxLnN2Z1wiLFwiaGVpZ2h0XCI6MjgsXCJ3aWR0aFwiOjI4fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvc2NyYXBfZmlsbGVkLjljYTkxZGU1ZDhjMGFkYWQ3YTMwMDlkZGM2MWJmOTU4LnN2Z1wiLFwiaGVpZ2h0XCI6MjQsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvc2hhcmVQaG90bzEuOTkwNzM4MjIwNWE1NjczM2JjYjRjMjI4OGRjZTEwODkucG5nXCIsXCJoZWlnaHRcIjo0OTcsXCJ3aWR0aFwiOjcyMCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZhc3NldHMlMkZpbWFnZXMlMkZzaGFyZVBob3RvMS45OTA3MzgyMjA1YTU2NzMzYmNiNGMyMjg4ZGNlMTA4OS5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NoYXJlUGhvdG8yLjUxNzYzODk0YjEwZjAxMTZmNDU2MzQ2NjE2OWUwYmQwLnBuZ1wiLFwiaGVpZ2h0XCI6NzkzLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGcHVibGljJTJGYXNzZXRzJTJGaW1hZ2VzJTJGc2hhcmVQaG90bzIuNTE3NjM4OTRiMTBmMDExNmY0NTYzNDY2MTY5ZTBiZDAucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zbWFsbExlZnRBcnJvdy42ZGI5ZGZjMDNkZjQwYzIyZmY4ZDJkZjQ5N2NmMjI4Mi5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NtYWxsUmlnaHRBcnJvdy5lNjAwODZkNmFmNWE4MjU1M2E3YWZhYzUyMWQ0YWQzYi5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NwZWFrZXJCYWRnZTEuZWJiMzM3ZTVmOGE2M2Q3ZjQzNjdjNmExYzJjNzRiMDgucG5nXCIsXCJoZWlnaHRcIjo3ODAsXCJ3aWR0aFwiOjc4MCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZhc3NldHMlMkZpbWFnZXMlMkZzcGVha2VyQmFkZ2UxLmViYjMzN2U1ZjhhNjNkN2Y0MzY3YzZhMWMyYzc0YjA4LnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbWFnZXMvc3BlYWtlckJhZGdlMi40NWY4OGMwNTM4NGM1ZjA4ZTJkN2ZiYTUwODA2ZWQ1NC5wbmdcIixcImhlaWdodFwiOjc4MCxcIndpZHRoXCI6NzgwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmFzc2V0cyUyRmltYWdlcyUyRnNwZWFrZXJCYWRnZTIuNDVmODhjMDUzODRjNWYwOGUyZDdmYmE1MDgwNmVkNTQucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zcGVha2VyQmFkZ2UzLjRkYjE4NDJhY2NhN2Q2MDFkNTI2YjVkY2I1ZDhiMTcyLnBuZ1wiLFwiaGVpZ2h0XCI6NzgwLFwid2lkdGhcIjo3ODAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGcHVibGljJTJGYXNzZXRzJTJGaW1hZ2VzJTJGc3BlYWtlckJhZGdlMy40ZGIxODQyYWNjYTdkNjAxZDUyNmI1ZGNiNWQ4YjE3Mi5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3RodW1uYWlsQ29tbWVudC5jZTIzNzgwYzFkOWI5OTMxMjcwYmVmNGI0ZmE5Yzc5Zi5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3RodW1uYWlsSGVhcnQuZTBhOTQ4MTIyMjMyNjBjZDgwNTRlZTQyZGVkYTY3ZDMuc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy91c2VySW1hZ2UuNmU1NjFlYWU4YWFlYjBkMjYyZDUxODJjYzIxNTY4YzAucG5nXCIsXCJoZWlnaHRcIjoxMDAsXCJ3aWR0aFwiOjEwMCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZhc3NldHMlMkZpbWFnZXMlMkZ1c2VySW1hZ2UuNmU1NjFlYWU4YWFlYjBkMjYyZDUxODJjYzIxNTY4YzAucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy93cml0ZUljb24uNTdiMjM5MDI5NzNhY2M4NGRjYmE2ZjhlMDNlMTNlM2Muc3ZnXCIsXCJoZWlnaHRcIjo5NCxcIndpZHRoXCI6OTR9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2ltYWdlcy94SWNvbi40MDMxNjVkM2YzMmMxMjdmYTZmNjgzZWNlNGFmM2FjZi5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjoyNH07IiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRheWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWNvaWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjb2lsLXBlcnNpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXJlc2V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC10b29sc1wiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsic2VydmVyQXhpb3MiLCJQUkVGSVhfVVJMIiwiZ2V0Tm90aWNlTGlzdERhdGEiLCJsaW1pdCIsIm9mZnNldCIsImRhdGEiLCJnZXQiLCJwYXJhbXMiLCJzdGF0dXMiLCJlIiwiYWxlcnQiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJnZXROb3RpY2VEYXRhIiwibm90aWNlSUQiLCJnZXROb3RpY2VTZWFyY2hEYXRhIiwia2V5d29yZCIsInBvc3ROb3RpY2VDb21tZW50IiwidG9rZW4iLCJjb21tZW50RGF0YSIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIlJlYWN0IiwiU0J1dHRvbiIsIkJ1dHRvbiIsImNoaWxkcmVuIiwicHJvcHMiLCJTdHlsZWQiLCJidXR0b24iLCJIYXNoVGFnIiwiU0hhc2hUYWciLCJsYWJlbCIsImlmUHJvcCIsIkljb24iLCJoZWlnaHQiLCJhbHQiLCJTSW1nIiwiaW1nIiwiSW5wdXQiLCJhdXRvQ29tcGxldGUiLCJTSW5wdXQiLCJpbnB1dCIsIlNNb2RhbCIsIk1vZGFsIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaXNCbHVyIiwiY2xvc2VIYW5kbGVyIiwiZGl2IiwidW5kZWZpbmVkIiwiVGV4dEFyZWEiLCJuYW1lIiwiU1RleHRBcmVhIiwidGV4dGFyZWEiLCJkZWZhdWx0IiwiQ29tbWVudEJ1dHRvbiIsIkNvbW1lbnRGb3JtIiwiQ29tbWVudFRleHRBcmVhIiwiQ29tbWVudFdyaXRlIiwidmFsdWUiLCJpc0NvbW1lbnQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwYWxldHRlIiwiZGF5anMiLCJJbWFnZSIsIkxpbmsiLCJUaHVtYm5haWxDb21tZW50SWNvbiIsIlRodW1ibmFpbExpa2VJY29uIiwiQ29uY2VydFdyYXBwZXIiLCJDb250ZW50IiwiSW5mbyIsIlRodW1ibmFpbENvbnRhaW5lciIsIlRodW1ibmFpbEluZm8iLCJUaHVtYm5haWxPdmVybGF5IiwiQ29uY2VydCIsImltZ1RodW1ibmFpbCIsImF1dGhvck5pY2tuYW1lIiwiaW50ZXJlc3RMaXN0IiwiY3JlYXRlZEF0IiwidGl0bGUiLCJ0ZXh0IiwiY29tbWVudE51bSIsImxpa2VOdW0iLCJpbnRlcmVzdERpdmlkZSIsImpvaW4iLCJwYXRobmFtZSIsImZvcm1hdCIsIl9faHRtbCIsInRoZW1lIiwiQm90dG9tIiwiRGV0YWlsVGl0bGVXcmFwcGVyIiwiTWlkZGxlIiwiVG9wIiwiRGV0YWlsVGl0bGUiLCJwYWdlTmFtZSIsIkxvZ2luQWxlcnRJY29uIiwiQnV0dG9uQ29udGFpbmVyIiwiQ2FuY2VsQnV0dG9uIiwiTG9naW5CdXR0b24iLCJMb2dpbk1vZGFsV3JhcHBlciIsIkxvZ2luTm90aWNlIiwiTG9naW5Ob3RpY2VEZXRhaWwiLCJMb2dpbk5vdGljZVRpdGxlIiwiTG9naW5Nb2RhbCIsImlzTG9naW5Nb2RhbE9wZW4iLCJzZXRJc0xvZ2luTW9kYWxPcGVuIiwiaGFuZGxlQ2xvc2VCdXR0b24iLCJSZXBseUNvbW1lbnQiLCJ1c2VTdGF0ZSIsInVzZVJlY29pbFZhbHVlIiwidXNlclN0YXR1c1N0YXRlIiwiQ29tbWVudENvbnRhaW5lciIsIkNvbW1lbnRUZXh0IiwiQ29tbWVudFRvZ2dsZSIsIkNvbW1lbnRXcml0ZXIiLCJOb3RpY2VTaW5nbGVDb21tZW50V3JhcHBlciIsIlJlcGx5Q29tbWVudFdyaXRlIiwiUmVwbHlDb250YWluZXIiLCJSZXBseUNvbnRlbnQiLCJOb3RpY2VTaW5nbGVDb21tZW50IiwicGFyZW50Q29tbWVudElEIiwidXNlcklEIiwiY2hpbGRyZW5Db21tZW50IiwiaXNSZXJlbmRlciIsInNldElzUmVyZW5kZXIiLCJpc0RlbGV0ZWQiLCJpc09wZW5SZXBseSIsInNldElzT3BlblJlcGx5IiwicmVwbHlWYWx1ZSIsInNldFJlcGx5VmFsdWUiLCJ1c2VyU3RhdHVzRGF0YSIsIm9uQ2xpY2tSZXBseU9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudElEIiwibmlja25hbWUiLCJtYXAiLCJpbmRleCIsIlJlcGx5Q29tbWVudFdyYXBwZXIiLCJUZXh0IiwiV3JpdGVyIiwibWVtbyIsIlNlYXJjaEljb24iLCJTZWFyY2hCYXJXcmFwcGVyIiwiU2VhcmNoQnV0dG9uIiwiU2VhcmNoSW5wdXQiLCJTZWFyY2hCYXIiLCJvbkNsaWNrU2VhcmNoIiwib25DaGFuZ2VLZXl3b3JkIiwiQ2hhbGxlbmdlUmVDb21tZW50TGlzdCIsIkNvbW1lbnRJY29uIiwiTGlrZUZpbGxlZEljb24iLCJMaWtlSWNvbiIsIlNjcmFwRmlsbGVkSWNvbiIsIlNjcmFwSWNvbiIsIkNvbW1lbnQiLCJIYXNoVGFnTGlzdCIsIkljb25MaXN0IiwiTGlrZSIsIlNjcmFwIiwiVmlkZW8iLCJEZXRhaWxDb250ZW50IiwidmlkZW8iLCJkZXNjIiwiaGFzaHRhZyIsInNjcmFwTnVtIiwib25MaWtlIiwib25TY3JhcCIsImlzVXNlckxpa2UiLCJpc1VzZXJTY3JhcCIsInRhZyIsIkhlYWRlckxvZ29JY29uIiwiRGVzaWduZXIiLCJEZXZlbG9wZXIiLCJGb290ZXJXcmFwcGVyIiwiTG9nbyIsIk1lbWJlciIsIlBsYW5uZXIiLCJTZXJ2ZXIiLCJGb290ZXIiLCJDb21tZW50V3JpdGVDb250YWluZXIiLCJOb3RpY2VDb21tZW50TGlzdCIsImNvbW1lbnRMaXN0IiwiY29tbWVudFZhbHVlIiwic2V0Q29tbWVudFZhbHVlIiwiX2lkIiwiTm90aWNlSGVhZGVySWNvbiIsIkJhY2tncm91bmQiLCJDb25jZXJ0QnV0dG9uIiwiSWNvbkNvbnRhaW5lciIsIk5vdGljZUhlYWRlcldyYXBwZXIiLCJOb3RpY2VIZWFkZXIiLCJhIiwiU21hbGxMZWZ0QXJyb3dJY29uIiwiU21hbGxSaWdodEFycm93SWNvbiIsInVzZUhpc3RvcnkiLCJOYXZpZ2F0aW9uQ29udGFpbmVyIiwiTm90aWNlTGlzdFdyYXBwZXIiLCJQYWdlTmF2aSIsIlBhZ2VOdW1iZXIiLCJOb3RpY2VMaXN0Iiwibm90aWNlTGlzdCIsInRvdGFsTm90aWNlTnVtIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImhpc3RvcnkiLCJzdGFydFBhZ2UiLCJzZXRTdGFydFBhZ2UiLCJlbmRQYWdlIiwic2V0RW5kUGFnZSIsImNvbW1lbnRzT2ZQYWdlIiwidG90YWxQYWdlIiwiTWF0aCIsImNlaWwiLCJwYWdlSW5kZXgiLCJBcnJheSIsIl8iLCJpIiwidGFyZ2V0Iiwic2xpY2UiLCJoYW5kbGVQYWdlQ2xpY2siLCJwYXJzZUludCIsImhhbmRsZVByZXZQYWdlQ2xpY2siLCJoYW5kbGVOZXh0UGFnZUNsaWNrIiwibm90aWNlIiwidXNlciIsImludGVyZXN0IiwicGFnZUlkeCIsIkRpYW1vbmRJY29uIiwiRGV0YWlsIiwiTWFpbiIsIlNlYXJjaEZvcm1XcmFwcGVyIiwiU2VhcmNoRm9ybSIsInJlUmVuZGVyS2V5d29yZCIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJjb250ZW50TGlzdE51bSIsImtleXdvcmRDaGFuZ2UiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NFUlZFUl9VUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJmb3JFYWNoIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsImxvYWRlZEltYWdlVVJMcyIsIlNldCIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIk1hcCIsImRlZmF1bHRMb2FkZXIiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJjdXN0b21Mb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImIiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInNtYWxsZXN0UmF0aW8iLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0IiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJoYW5kbGVMb2FkaW5nIiwicGxhY2Vob2xkZXIiLCJvbkxvYWRpbmdDb21wbGV0ZSIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiYWRkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsImNvbnNvbGUiLCJ3YXJuIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpbWdBdHRyaWJ1dGVzIiwic3JjU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWYiLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJ1cmwiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInNldEludGVyc2VjdGlvblJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsInNwbGl0Iiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyZWxvYWQiLCJiYWNrIiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsIl9pbkZsaWdodFJvdXRlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwibG9jYWxlQ2hhbmdlIiwib25seUFIYXNoQ2hhbmdlIiwiZW1pdCIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiSGVhZCIsIlJlY29pbFJvb3QiLCJUaGVtZVByb3ZpZGVyIiwiR2xvYmFsU3R5bGVzIiwiTXlBcHAiLCJBbGVydEljb24iLCJBbGxGZWVkSWNvbiIsIkFycm93RG93bkljb24iLCJBcnJvd1VwSWNvbiIsIkNhdXRpb25JY29uIiwiQ2hhbGxlbmdlSW1nIiwiQ2hhcmFjdGVyQmxhY2tJY29uIiwiQ2hhcmFjdGVyQ29sb3IxSWNvbiIsIkNoYXJhY3RlckNvbG9yMkljb24iLCJDaGFyYWN0ZXJDb2xvcjNJY29uIiwiQ2hlY2tBbGxPZmZJY29uIiwiQ2hlY2tBbGxPbkljb24iLCJDaGVja2VkSWNvbiIsIkNoZWNrSWNvbiIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNoZWNrT2ZmSWNvbiIsIkNoZWNrT25JY29uIiwiQ29sb3JTY3JhcEljb24iLCJDb21tZW50Q291bnRJY29uIiwiRGVsZXRlSWNvbiIsIkRlbGV0ZU1vZGFsSW1nIiwiRWRpdEljb24iLCJFbXB0eUJvb2ttYXJrSWNvbiIsIkVtcHR5Q2hlY2tCb3hJY29uIiwiRXJyb3JJY29uIiwiRmlsbGVkQm9va21hcmtJY29uIiwiRmlsbGVkQ2hlY2tCb3hJY29uIiwiSGFtYnVyZ2VySWNvbiIsIkhhbUNoYWxsZW5nZUljb24iLCJIYW1VbmNoYWxsZW5nZUljb24iLCJIYW1BcnJvd0Rvd25JY29uIiwiSGFtQXJyb3dVcEljb24iLCJPMkljb24iLCJDbGlja0dvb2RJY29uIiwiRWRpdFdoaXRlSWNvbiIsIkpvaW5FcnJJY29uIiwiTGFuZGluZ0JhY2tJbWciLCJMYXJnZUxlZnRBcnJvd0ljb24iLCJMYXJnZVJpZ2h0QXJyb3dJY29uIiwiTGluZUljb24iLCJMb2dpbkljb24iLCJNYWluQ2FyZDFJbWciLCJNYWluQ2FyZDJJbWciLCJNYWluQ2FyZDNJbWciLCJNYWluQ2FyZDRJbWciLCJNZW51QmFySWNvbiIsIk1pbnVzSWNvbiIsIk1vZGFsQ2xvc2VJY29uIiwiTW9yZUljb24iLCJNb3JlQ2xpY2tlZEljb24iLCJNb3JlVmlld0Fycm93SWNvbiIsIk15RmVlZEljb24iLCJOZXh0SWNvbiIsIlBsdXNJY29uIiwiR3JleVBsdXNJY29uIiwiR3JleWRmUGx1c0ljb24iLCJQcmV2SWNvbiIsIkdyYXlTY3JhcEljb24iLCJDb25jZXJ0MUltZyIsIkNvbmNlcnQySW1nIiwiU3BlYWtlckJhZGdlMUltZyIsIlNwZWFrZXJCYWRnZTJJbWciLCJTcGVha2VyQmFkZ2UzSW1nIiwiVXNlckltZyIsIldyaXRlSWNvbiIsIlhJY29uIiwiUGVyY2VudDIwSWNvbiIsIlBlcmNlbnQxMDBJY29uIiwiUGVyY2VudDQwSWNvbiIsIlBlcmNlbnQ2MEljb24iLCJQZXJjZW50ODBJY29uIiwiQ29tbXVuaWNhdGlvbktpbmdJY29uIiwiQ29tbXVuaWNhdGlvbktpbmdGaWxsSWNvbiIsIk15UGFnZUVkaXRJY29uIiwiRW1wYXRoaXppbmdJY29uIiwiRW1wYXRoaXppbmdGaWxsSWNvbiIsIkZpcnN0Q29tbWVudEljb24iLCJGaXJzdENvbW1lbnRGaWxsSWNvbiIsIkdldENoYWxsZW5nZUljb24iLCJHZXRDaGFsbGVuZ2VGaWxsSWNvbiIsIkdyb3dpbmdUb2dldGhlckljb24iLCJHcm93aW5nVG9nZXRoZXJGaWxsSWNvbiIsIk5hdHVyYWxCb3JuTzJJY29uIiwiTmF0dXJhbEJvcm5PMkZpbGxJY29uIiwiUmVhZHlGb3JDb21tdW5pY2F0aW9uSWNvbiIsIlJlYWR5Rm9yQ29tbXVuaWNhdGlvbkZpbGxJY29uIiwiUmVhZHlGb3JHcm93SWNvbiIsIlJlYWR5Rm9yR3Jvd0ZpbGxJY29uIiwiU2h5RW1haWxJY29uIiwiU2h5RW1haWxGaWxsSWNvbiIsIlN5bXBhdGh5S2luZ0ljb24iLCJTeW1wYXRoeUtpbmdGaWxsSWNvbiIsIlVzZWZ1bExlYXJuTXlzZWxmSWNvbiIsIlVzZWZ1bExlYXJuTXlzZWxmRmlsbEljb24iLCJVc2VmdWxTaGFyZVRvZ2V0aGVySWNvbiIsIlVzZWZ1bFNoYXJlVG9nZXRoZXJGaWxsSWNvbiIsIldlbGNvbWVUb08ySWNvbiIsIldlbGNvbWVUb08yRmlsbEljb24iLCJhdG9tIiwicmVjb2lsUGVyc2lzdCIsInBlcnNpc3RBdG9tIiwidXNlclN0YXRlIiwiZWZmZWN0c19VTlNUQUJMRSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwicmVzZXQiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsImdyYXlzY2FsZSIsImVtcHR5SW1hZ2UiLCJtb2JpbGUiLCJ0YWJsZXQiLCJsYXB0b3AiLCJkZXNrdG9wIiwiZm9udCIsImRwMSIsImRwMV9lbmciLCJkcDIiLCJkcDJfZW5nIiwiZHAzX2VuZyIsImRwNCIsImgxIiwiaDFfZW5nIiwiaDIiLCJoMl9lbmciLCJzdWJoZWFkMSIsInN1YmhlYWQxX2VuZyIsInN1YmhlYWQyIiwic3ViaGVhZDJfZW5nIiwic3ViaGVhZDMiLCJzdWJoZWFkM19lbmciLCJzdWJoZWFkNCIsInN1YmhlYWQ0X2VuZyIsInN1YmhlYWQ1Iiwic3ViaGVhZDVfZW5nIiwiYm9keTEiLCJib2R5MV9lbmciLCJib2R5MiIsImJvZHkyX2VuZyIsImJvZHkzIiwiYm9keTNfZW5nIiwiYm9keTQiLCJib2R5NF9lbmciXSwic291cmNlUm9vdCI6IiJ9