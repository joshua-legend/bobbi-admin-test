/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=next%2Fdist%2Fpages%2F_app&page=%2F_app!":
/*!*********************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=next%2Fdist%2Fpages%2F_app&page=%2F_app! ***!
  \*********************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/_app\",\n      function () {\n        return __webpack_require__(/*! next/dist/pages/_app */ \"../node_modules/next/dist/pages/_app.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/_app\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzP2Fic29sdXRlUGFnZVBhdGg9bmV4dCUyRmRpc3QlMkZwYWdlcyUyRl9hcHAmcGFnZT0lMkZfYXBwIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHFFQUFzQjtBQUM3QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/Yjg1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJuZXh0L2Rpc3QvcGFnZXMvX2FwcFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvX2FwcFwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=next%2Fdist%2Fpages%2F_app&page=%2F_app!\n");

/***/ }),

/***/ "../node_modules/next/dist/pages/_app.js":
/*!***********************************************!*\
  !*** ../node_modules/next/dist/pages/_app.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _classCallCheck = __webpack_require__(/*! ../node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck */ \"../node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js\");\n\nvar _createClass = __webpack_require__(/*! ../node_modules/next/dist/compiled/@babel/runtime/helpers/createClass */ \"../node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js\");\n\nvar _inherits = __webpack_require__(/*! ../node_modules/next/dist/compiled/@babel/runtime/helpers/inherits */ \"../node_modules/next/dist/compiled/@babel/runtime/helpers/inherits.js\");\n\nvar _possibleConstructorReturn = __webpack_require__(/*! ../node_modules/next/dist/compiled/@babel/runtime/helpers/possibleConstructorReturn */ \"../node_modules/next/dist/compiled/@babel/runtime/helpers/possibleConstructorReturn.js\");\n\nvar _getPrototypeOf = __webpack_require__(/*! ../node_modules/next/dist/compiled/@babel/runtime/helpers/getPrototypeOf */ \"../node_modules/next/dist/compiled/@babel/runtime/helpers/getPrototypeOf.js\");\n\nvar _regeneratorRuntime = __webpack_require__(/*! ../node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"../node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n  enumerable: true,\n  get: function get() {\n    return _utils.AppInitialProps;\n  }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n  enumerable: true,\n  get: function get() {\n    return _utils.NextWebVitalsMetric;\n  }\n}));\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"../node_modules/react/index.js\"));\n\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../node_modules/next/dist/shared/lib/utils.js\");\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nfunction appGetInitialProps(_) {\n  return _appGetInitialProps.apply(this, arguments);\n}\n\nfunction _appGetInitialProps() {\n  _appGetInitialProps =\n  /**\n  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n  * This allows for keeping state between navigation, custom error handling, injecting additional data.\n  */\n  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {\n    var Component, ctx, pageProps;\n    return _regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            Component = _ref.Component, ctx = _ref.ctx;\n            _context.next = 3;\n            return (0, _utils).loadGetInitialProps(Component, ctx);\n\n          case 3:\n            pageProps = _context.sent;\n            return _context.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _appGetInitialProps.apply(this, arguments);\n}\n\nvar App = /*#__PURE__*/function (_react$default$Compon) {\n  _inherits(App, _react$default$Compon);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          Component = _this$props.Component,\n          pageProps = _this$props.pageProps;\n      return /*#__PURE__*/_react[\"default\"].createElement(Component, Object.assign({}, pageProps));\n    }\n  }]);\n\n  return App;\n}(_react[\"default\"].Component);\n\nexports[\"default\"] = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDYkEsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUgsbURBQWtEO0FBQzlDSSxFQUFBQSxVQUFVLEVBQUUsSUFEa0M7QUFFOUNDLEVBQUFBLEdBQUcsRUFBRSxlQUFXO0FBQ1osV0FBT0MsTUFBTSxDQUFDQyxlQUFkO0FBQ0g7QUFKNkMsQ0FBbEQ7QUFNQVAsdURBQXNEO0FBQ2xESSxFQUFBQSxVQUFVLEVBQUUsSUFEc0M7QUFFbERDLEVBQUFBLEdBQUcsRUFBRSxlQUFXO0FBQ1osV0FBT0MsTUFBTSxDQUFDRSxtQkFBZDtBQUNIO0FBSmlELENBQXREO0FBTUFOLGtCQUFBLEdBQWtCLEtBQUssQ0FBdkI7O0FBQ0EsSUFBSU8sTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw2Q0FBRCxDQUFSLENBQW5DOztBQUNBLElBQUlMLE1BQU0sR0FBR0ssbUJBQU8sQ0FBQywwRUFBRCxDQUFwQjs7QUFDQSxTQUFTQyxrQkFBVCxDQUE0QkMsR0FBNUIsRUFBaUNDLE9BQWpDLEVBQTBDQyxNQUExQyxFQUFrREMsS0FBbEQsRUFBeURDLE1BQXpELEVBQWlFQyxHQUFqRSxFQUFzRUMsR0FBdEUsRUFBMkU7QUFDdkUsTUFBSTtBQUNBLFFBQUlDLElBQUksR0FBR1AsR0FBRyxDQUFDSyxHQUFELENBQUgsQ0FBU0MsR0FBVCxDQUFYO0FBQ0EsUUFBSWhCLEtBQUssR0FBR2lCLElBQUksQ0FBQ2pCLEtBQWpCO0FBQ0gsR0FIRCxDQUdFLE9BQU9rQixLQUFQLEVBQWM7QUFDWk4sSUFBQUEsTUFBTSxDQUFDTSxLQUFELENBQU47QUFDQTtBQUNIOztBQUNELE1BQUlELElBQUksQ0FBQ0UsSUFBVCxFQUFlO0FBQ1hSLElBQUFBLE9BQU8sQ0FBQ1gsS0FBRCxDQUFQO0FBQ0gsR0FGRCxNQUVPO0FBQ0hvQixJQUFBQSxPQUFPLENBQUNULE9BQVIsQ0FBZ0JYLEtBQWhCLEVBQXVCcUIsSUFBdkIsQ0FBNEJSLEtBQTVCLEVBQW1DQyxNQUFuQztBQUNIO0FBQ0o7O0FBQ0QsU0FBU1EsaUJBQVQsQ0FBMkJDLEVBQTNCLEVBQStCO0FBQzNCLFNBQU8sWUFBVztBQUNkLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQUEsUUFBaUJDLElBQUksR0FBR0MsU0FBeEI7QUFDQSxXQUFPLElBQUlOLE9BQUosQ0FBWSxVQUFTVCxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QyxVQUFJRixHQUFHLEdBQUdhLEVBQUUsQ0FBQ0ksS0FBSCxDQUFTSCxJQUFULEVBQWVDLElBQWYsQ0FBVjs7QUFDQSxlQUFTWixLQUFULENBQWViLEtBQWYsRUFBc0I7QUFDbEJTLFFBQUFBLGtCQUFrQixDQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBZUMsTUFBZixFQUF1QkMsS0FBdkIsRUFBOEJDLE1BQTlCLEVBQXNDLE1BQXRDLEVBQThDZCxLQUE5QyxDQUFsQjtBQUNIOztBQUNELGVBQVNjLE1BQVQsQ0FBZ0JjLEdBQWhCLEVBQXFCO0FBQ2pCbkIsUUFBQUEsa0JBQWtCLENBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFlQyxNQUFmLEVBQXVCQyxLQUF2QixFQUE4QkMsTUFBOUIsRUFBc0MsT0FBdEMsRUFBK0NjLEdBQS9DLENBQWxCO0FBQ0g7O0FBQ0RmLE1BQUFBLEtBQUssQ0FBQ2dCLFNBQUQsQ0FBTDtBQUNILEtBVE0sQ0FBUDtBQVVILEdBWkQ7QUFhSDs7QUFDRCxTQUFTdEIsc0JBQVQsQ0FBZ0N1QixHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakMsZUFBU0E7QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxTQUFTRSxrQkFBVCxDQUE0QkMsQ0FBNUIsRUFBK0I7QUFDM0IsU0FBT0MsbUJBQW1CLENBQUNQLEtBQXBCLENBQTBCLElBQTFCLEVBQWdDRCxTQUFoQyxDQUFQO0FBQ0g7O0FBQ0QsU0FBU1EsbUJBQVQsR0FBK0I7QUFDM0JBLEVBQUFBLG1CQUFtQjtBQUFHO0FBQzFCO0FBQ0E7QUFDQTtBQUFJWixFQUFBQSxpQkFBaUIsd0NBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVlhLFlBQUFBLFNBQVosUUFBWUEsU0FBWixFQUF3QkMsR0FBeEIsUUFBd0JBLEdBQXhCO0FBQUE7QUFDSSxtQkFBTSxDQUFDLEdBQUdqQyxNQUFKLEVBQVlrQyxtQkFBWixDQUFnQ0YsU0FBaEMsRUFBMkNDLEdBQTNDLENBQU47O0FBREo7QUFDUkUsWUFBQUEsU0FEUTtBQUFBLDZDQUVQO0FBQ0hBLGNBQUFBLFNBQVMsRUFBVEE7QUFERyxhQUZPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsRUFIakI7QUFTQSxTQUFPSixtQkFBbUIsQ0FBQ1AsS0FBcEIsQ0FBMEIsSUFBMUIsRUFBZ0NELFNBQWhDLENBQVA7QUFDSDs7SUFDS2EsRzs7Ozs7Ozs7Ozs7OztXQUNGLGtCQUFTO0FBQ0wsd0JBQW1DLEtBQUtDLEtBQXhDO0FBQUEsVUFBUUwsU0FBUixlQUFRQSxTQUFSO0FBQUEsVUFBb0JHLFNBQXBCLGVBQW9CQSxTQUFwQjtBQUNBLGFBQU8sYUFBY2hDLE1BQU0sV0FBTixDQUFlbUMsYUFBZixDQUE2Qk4sU0FBN0IsRUFBd0N0QyxNQUFNLENBQUM2QyxNQUFQLENBQWMsRUFBZCxFQUFrQkosU0FBbEIsQ0FBeEMsQ0FBckI7QUFDSDs7OztFQUphaEMsTUFBTSxXQUFOLENBQWU2QixTOztBQU1qQ3BDLGtCQUFBLEdBQWtCd0MsR0FBbEI7QUFDQUEsR0FBRyxDQUFDSSxtQkFBSixHQUEwQlgsa0JBQTFCO0FBQ0FPLEdBQUcsQ0FBQ0ssZUFBSixHQUFzQlosa0JBQXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanM/MWVmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFwcEluaXRpYWxQcm9wc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLkFwcEluaXRpYWxQcm9wcztcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5leHRXZWJWaXRhbHNNZXRyaWNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5OZXh0V2ViVml0YWxzTWV0cmljO1xuICAgIH1cbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi91dGlsc1wiKTtcbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoXykge1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfYXBwR2V0SW5pdGlhbFByb3BzKCkge1xuICAgIF9hcHBHZXRJbml0aWFsUHJvcHMgPSAvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKih7IENvbXBvbmVudCAsIGN0eCAgfSkge1xuICAgICAgICBjb25zdCBwYWdlUHJvcHMgPSB5aWVsZCAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VQcm9wc1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQgLCBwYWdlUHJvcHMgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgcGFnZVByb3BzKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcbkFwcC5vcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX3V0aWxzIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiXyIsIl9hcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwicGFnZVByb3BzIiwiQXBwIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiYXNzaWduIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/next/dist/pages/_app.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=next%2Fdist%2Fpages%2F_app&page=%2F_app!"), __webpack_exec__("../node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);