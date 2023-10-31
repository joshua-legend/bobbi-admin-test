"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./library/styles/global/global-reset.ts":
/*!***********************************************!*\
  !*** ./common/styles/global/global-reset.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStyle\": () => (/* binding */ GlobalStyle)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ \"styled-normalize\");\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\r\n  ${styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize}\r\n  html {\r\n    box-sizing: border-box;\r\n    font-size: 62.5%;\r\n    min-width: 320px;\r\n  }\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    box-sizing: inherit;\r\n  }\r\n  //* { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';}\r\n  a { cursor: pointer; text-decoration: none; }\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJyYXJ5L3N0eWxlcy9nbG9iYWwvZ2xvYmFsLXJlc2V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9EO0FBQ1Q7QUFDcEMsTUFBTUUsV0FBVyxHQUFHRixnRUFBaUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYnJhcnkvc3R5bGVzL2dsb2JhbC9nbG9iYWwtcmVzZXQudHM/NDZjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7bm9ybWFsaXplfSBmcm9tICdzdHlsZWQtbm9ybWFsaXplJztcclxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgJHtub3JtYWxpemV9XHJcbiAgaHRtbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiA2Mi41JTtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgfVxyXG4gICosXHJcbiAgKjo6YmVmb3JlLFxyXG4gICo6OmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC8vKiB7IGZvbnQtZmFtaWx5OiAnU3BvcWEgSGFuIFNhbnMnLCAnU3BvcWEgSGFuIFNhbnMgSlAnLCAnU2Fucy1zZXJpZic7fVxyXG4gIGEgeyBjdXJzb3I6IHBvaW50ZXI7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG5gO1xyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwibm9ybWFsaXplIiwiR2xvYmFsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common/styles/global/global-reset.ts\n");

/***/ }),

/***/ "./library/styles/global/global-variable.ts":
/*!**************************************************!*\
  !*** ./common/styles/global/global-variable.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"colors\": () => (/* binding */ colors),\n/* harmony export */   \"fontSize\": () => (/* binding */ fontSize),\n/* harmony export */   \"sizes\": () => (/* binding */ sizes)\n/* harmony export */ });\nconst colors = {\n    primary: `#f44336`,\n    white: `#ffffff`,\n    black: \"#1e1f1d\",\n    yellow: \"#edb83c\",\n    orange: \"#eb7952\",\n    gray: \"#6e6e6e\",\n    gray_background: \"#f5f5f5\"\n};\nconst fontSize = {\n    micro: `14px`,\n    tiny: `16px`,\n    petite: `16px`,\n    small: `16px`,\n    little: `16px`,\n    big: `16px`,\n    large: `16px`,\n    huge: `16px`,\n    giant: `16px`,\n    humongous: `16px`\n};\nconst sizes = {\n    sizeXXS: `0.25rem`,\n    sizeXS: `0.5rem`,\n    sizeS: `0.75rem`,\n    sizeM: `1rem`,\n    sizeL: `1.25rem`,\n    sizeXL: `1.5rem`,\n    sizeXXL: `2rem`,\n    sizeXXXL: `4rem`\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJyYXJ5L3N0eWxlcy9nbG9iYWwvZ2xvYmFsLXZhcmlhYmxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLE1BQU0sR0FBRztJQUNwQkMsT0FBTyxFQUFDLENBQUMsT0FBTyxDQUFDO0lBQ2pCQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDaEJDLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxNQUFNLEVBQUUsU0FBUztJQUNqQkMsTUFBTSxFQUFFLFNBQVM7SUFDakJDLElBQUksRUFBRSxTQUFTO0lBQ2ZDLGVBQWUsRUFBRSxTQUFTO0NBQzNCO0FBQ00sTUFBTUMsUUFBUSxHQUFHO0lBQ3RCQyxLQUFLLEVBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWkMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ1pDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztJQUNkQyxLQUFLLEVBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWkMsTUFBTSxFQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2JDLEdBQUcsRUFBQyxDQUFDLElBQUksQ0FBQztJQUNWQyxLQUFLLEVBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWkMsSUFBSSxFQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1hDLEtBQUssRUFBQyxDQUFDLElBQUksQ0FBQztJQUNaQyxTQUFTLEVBQUMsQ0FBQyxJQUFJLENBQUM7Q0FDakI7QUFDTSxNQUFNQyxLQUFLLEdBQUc7SUFDbkJDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztJQUNsQkMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2hCQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDaEJDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDaEJDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNoQkMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2ZDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztDQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYnJhcnkvc3R5bGVzL2dsb2JhbC9nbG9iYWwtdmFyaWFibGUudHM/ODA0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29sb3JzID0ge1xyXG4gIHByaW1hcnk6YCNmNDQzMzZgLFxyXG4gIHdoaXRlOiBgI2ZmZmZmZmAsXHJcbiAgYmxhY2s6ICcjMWUxZjFkJyxcclxuICB5ZWxsb3c6ICcjZWRiODNjJyxcclxuICBvcmFuZ2U6ICcjZWI3OTUyJyxcclxuICBncmF5OiAnIzZlNmU2ZScsXHJcbiAgZ3JheV9iYWNrZ3JvdW5kOiAnI2Y1ZjVmNScsXHJcbn1cclxuZXhwb3J0IGNvbnN0IGZvbnRTaXplID0ge1xyXG4gIG1pY3JvOmAxNHB4YCxcclxuICB0aW55OiBgMTZweGAsXHJcbiAgcGV0aXRlOiBgMTZweGAsXHJcbiAgc21hbGw6YDE2cHhgLFxyXG4gIGxpdHRsZTpgMTZweGAsXHJcbiAgYmlnOmAxNnB4YCxcclxuICBsYXJnZTpgMTZweGAsXHJcbiAgaHVnZTpgMTZweGAsXHJcbiAgZ2lhbnQ6YDE2cHhgLFxyXG4gIGh1bW9uZ291czpgMTZweGAsXHJcbn1cclxuZXhwb3J0IGNvbnN0IHNpemVzID0ge1xyXG4gIHNpemVYWFM6IGAwLjI1cmVtYCxcclxuICBzaXplWFM6IGAwLjVyZW1gLFxyXG4gIHNpemVTOiBgMC43NXJlbWAsXHJcbiAgc2l6ZU06IGAxcmVtYCxcclxuICBzaXplTDogYDEuMjVyZW1gLFxyXG4gIHNpemVYTDogYDEuNXJlbWAsXHJcbiAgc2l6ZVhYTDogYDJyZW1gLFxyXG4gIHNpemVYWFhMOiBgNHJlbWAsXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJjb2xvcnMiLCJwcmltYXJ5Iiwid2hpdGUiLCJibGFjayIsInllbGxvdyIsIm9yYW5nZSIsImdyYXkiLCJncmF5X2JhY2tncm91bmQiLCJmb250U2l6ZSIsIm1pY3JvIiwidGlueSIsInBldGl0ZSIsInNtYWxsIiwibGl0dGxlIiwiYmlnIiwibGFyZ2UiLCJodWdlIiwiZ2lhbnQiLCJodW1vbmdvdXMiLCJzaXplcyIsInNpemVYWFMiLCJzaXplWFMiLCJzaXplUyIsInNpemVNIiwic2l6ZUwiLCJzaXplWEwiLCJzaXplWFhMIiwic2l6ZVhYWEwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common/styles/global/global-variable.ts\n");

/***/ }),

/***/ "./library/styles/theme/theme.config.ts":
/*!**********************************************!*\
  !*** ./common/styles/theme/theme.config.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _global_global_variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/global-variable */ \"./common/styles/global/global-variable.ts\");\n\nconst theme = {\n    breakPoint: \"769px\",\n    colors: {\n        black: _global_global_variable__WEBPACK_IMPORTED_MODULE_0__.colors.black,\n        yellow: _global_global_variable__WEBPACK_IMPORTED_MODULE_0__.colors.yellow,\n        orange: _global_global_variable__WEBPACK_IMPORTED_MODULE_0__.colors.orange,\n        gray: _global_global_variable__WEBPACK_IMPORTED_MODULE_0__.colors.gray,\n        gray_background: _global_global_variable__WEBPACK_IMPORTED_MODULE_0__.colors.gray_background\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJyYXJ5L3N0eWxlcy90aGVtZS90aGVtZS5jb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDaUQ7QUFFMUMsTUFBTUMsS0FBSyxHQUFpQjtJQUMvQkMsVUFBVSxFQUFFLE9BQU87SUFDbkJGLE1BQU0sRUFBRTtRQUNKRyxLQUFLLEVBQUVILGlFQUFZO1FBQ25CSSxNQUFNLEVBQUVKLGtFQUFhO1FBQ3JCSyxNQUFNLEVBQUVMLGtFQUFhO1FBQ3JCTSxJQUFJLEVBQUVOLGdFQUFXO1FBQ2pCTyxlQUFlLEVBQUVQLDJFQUFzQjtLQUMxQztDQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWJyYXJ5L3N0eWxlcy90aGVtZS90aGVtZS5jb25maWcudHM/YmY2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RlZmF1bHRUaGVtZX0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7Y29sb3JzfSBmcm9tIFwiLi4vZ2xvYmFsL2dsb2JhbC12YXJpYWJsZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XHJcbiAgICBicmVha1BvaW50OiAnNzY5cHgnLFxyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgYmxhY2s6IGNvbG9ycy5ibGFjayxcclxuICAgICAgICB5ZWxsb3c6IGNvbG9ycy55ZWxsb3csXHJcbiAgICAgICAgb3JhbmdlOiBjb2xvcnMub3JhbmdlLFxyXG4gICAgICAgIGdyYXk6IGNvbG9ycy5ncmF5LFxyXG4gICAgICAgIGdyYXlfYmFja2dyb3VuZDogY29sb3JzLmdyYXlfYmFja2dyb3VuZCxcclxuICAgIH0sXHJcbn07Il0sIm5hbWVzIjpbImNvbG9ycyIsInRoZW1lIiwiYnJlYWtQb2ludCIsImJsYWNrIiwieWVsbG93Iiwib3JhbmdlIiwiZ3JheSIsImdyYXlfYmFja2dyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/styles/theme/theme.config.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _library_styles_global_global_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/styles/global/global-reset */ \"./common/styles/global/global-reset.ts\");\n/* harmony import */ var _library_styles_theme_theme_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/styles/theme/theme.config */ \"./common/styles/theme/theme.config.ts\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        theme: _library_styles_theme_theme_config__WEBPACK_IMPORTED_MODULE_3__.theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_library_styles_global_global_reset__WEBPACK_IMPORTED_MODULE_2__.GlobalStyle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\1024\\\\WebstormProjects\\\\joshua_tech\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\1024\\\\WebstormProjects\\\\joshua_tech\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\1024\\\\WebstormProjects\\\\joshua_tech\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDZ0Q7QUFDa0I7QUFDUDtBQUUzRCxTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDSSw4REFBQ0wsNERBQWE7UUFBQ0UsS0FBSyxFQUFFQSxxRUFBSzs7MEJBQ3pCLDhEQUFDRCw0RUFBVzs7OztvQkFBRzswQkFDZiw4REFBQ0csU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7O1lBQ2QsQ0FDbEI7Q0FDSDtBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQge1RoZW1lUHJvdmlkZXJ9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtHbG9iYWxTdHlsZX0gZnJvbSBcIi4uL2xpYnJhcnkvc3R5bGVzL2dsb2JhbC9nbG9iYWwtcmVzZXRcIjtcbmltcG9ydCB7dGhlbWV9IGZyb20gXCIuLi9saWJyYXJ5L3N0eWxlcy90aGVtZS90aGVtZS5jb25maWdcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiR2xvYmFsU3R5bGUiLCJ0aGVtZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-normalize");

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