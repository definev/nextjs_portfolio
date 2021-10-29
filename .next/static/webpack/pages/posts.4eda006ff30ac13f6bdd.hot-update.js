"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/posts/series-item.js":
/*!*****************************************!*\
  !*** ./components/posts/series-item.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/image */ \"./node_modules/@chakra-ui/image/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../paragraph */ \"./components/paragraph.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/media/definev/Program/reactjs/craftzdog-homepage/components/posts/series-item.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar SeriesItem = function SeriesItem(_ref) {\n  var title = _ref.title,\n      subtitle = _ref.subtitle,\n      image = _ref.image,\n      seriesHref = _ref.seriesHref;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n    href: seriesHref,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_image__WEBPACK_IMPORTED_MODULE_4__.Image, {\n        src: image\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n        as: \"h4\",\n        my: 5,\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_paragraph__WEBPACK_IMPORTED_MODULE_1__.default, {\n        children: subtitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = SeriesItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SeriesItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"SeriesItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzL3Nlcmllcy1pdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUE0QztBQUFBLE1BQXpDQyxLQUF5QyxRQUF6Q0EsS0FBeUM7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDO0FBQUEsTUFBeEJDLEtBQXdCLFFBQXhCQSxLQUF3QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDN0Qsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBVSxRQUFJLEVBQUVBLFVBQWhCO0FBQUEsMkJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRSw4REFBQyxtREFBRDtBQUFPLFdBQUcsRUFBRUQ7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRSw4REFBQyxzREFBRDtBQUFTLFVBQUUsRUFBQyxJQUFaO0FBQWlCLFVBQUUsRUFBRSxDQUFyQjtBQUFBLGtCQUF5QkY7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUUsOERBQUMsK0NBQUQ7QUFBQSxrQkFBWUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FYRDs7S0FBTUY7QUFhTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvc3RzL3Nlcmllcy1pdGVtLmpzPzNiMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdAY2hha3JhLXVpL2ltYWdlJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJveCwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0J1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuLi9wYXJhZ3JhcGgnXG5cbmNvbnN0IFNlcmllc0l0ZW0gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlLCBzZXJpZXNIcmVmIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TmV4dExpbmsgaHJlZj17c2VyaWVzSHJlZn0+XG4gICAgICA8Qm94PlxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gLz5cblxuICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgbXk9ezV9Pnt0aXRsZX08L0hlYWRpbmc+XG4gICAgICAgIDxQYXJhZ3JhcGg+e3N1YnRpdGxlfTwvUGFyYWdyYXBoPlxuICAgICAgPC9Cb3g+XG4gICAgPC9OZXh0TGluaz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJpZXNJdGVtXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJOZXh0TGluayIsIkJveCIsIkhlYWRpbmciLCJQYXJhZ3JhcGgiLCJTZXJpZXNJdGVtIiwidGl0bGUiLCJzdWJ0aXRsZSIsImltYWdlIiwic2VyaWVzSHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/posts/series-item.js\n");

/***/ })

});