webpackHotUpdate_N_E("pages/gallery",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n\n\n\nvar _jsxFileName = \"/home/alexanderc/code/teamshadowracing.github.io/pages/gallery.js\",\n    _this = undefined;\n\n\n\n\n\nvar galleries = [{\n  title: \"2021 Hyundai Elantra N Line\",\n  photos: [\"https://imgur.com/wcqQOPL.jpg\", \"https://imgur.com/Qm5vKff.jpg\", \"https://imgur.com/HvBYFrS.jpg\", \"https://imgur.com/rmzQItr.jpg\", \"https://imgur.com/LqFbDtu.jpg\", \"https://imgur.com/Oo4NXTp.jpg\", \"https://imgur.com/9c9Nwkw.jpg\", \"https://imgur.com/F07NF6O.jpg\"]\n}];\n\nvar Gallery = function Gallery() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"pt-16 w-full container mx-auto\",\n      children: galleries.map(function (_ref) {\n        var title = _ref.title,\n            photos = _ref.photos;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            className: \"text-4xl pt-4\",\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"grid grid-flow-col\", \"grid-rows-\".concat(Math.ceil(photos.length / 2))),\n            children: photos.map(function (src) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                style: {\n                  position: \"relative\",\n                  objectFit: \"contain\",\n                  height: \"24vw\"\n                },\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n                  src: src,\n                  layout: \"fill\",\n                  objectFit: \"cover\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 17\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 15\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcz83NjYwIl0sIm5hbWVzIjpbImdhbGxlcmllcyIsInRpdGxlIiwicGhvdG9zIiwiR2FsbGVyeSIsIm1hcCIsImNsc3giLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInNyYyIsInBvc2l0aW9uIiwib2JqZWN0Rml0IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLE9BQUssRUFBRSw2QkFEVDtBQUVFQyxRQUFNLEVBQUUsQ0FDTiwrQkFETSxFQUVOLCtCQUZNLEVBR04sK0JBSE0sRUFJTiwrQkFKTSxFQUtOLCtCQUxNLEVBTU4sK0JBTk0sRUFPTiwrQkFQTSxFQVFOLCtCQVJNO0FBRlYsQ0FEZ0IsQ0FBbEI7O0FBZ0JBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsc0JBQ2Q7QUFBQSw0QkFDRSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxnQ0FBZjtBQUFBLGdCQUNHSCxTQUFTLENBQUNJLEdBQVYsQ0FBYztBQUFBLFlBQUdILEtBQUgsUUFBR0EsS0FBSDtBQUFBLFlBQVVDLE1BQVYsUUFBVUEsTUFBVjtBQUFBLDRCQUNiO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLGVBQWQ7QUFBQSxzQkFBK0JEO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLHFCQUFTLEVBQUVJLG9EQUFJLENBQ2Isb0JBRGEsc0JBRUFDLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxNQUFNLENBQUNNLE1BQVAsR0FBZ0IsQ0FBMUIsQ0FGQSxFQURqQjtBQUFBLHNCQU1HTixNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFDSyxHQUFEO0FBQUEsa0NBQ1Y7QUFBSyxxQkFBSyxFQUFFO0FBQ1ZDLDBCQUFRLEVBQUUsVUFEQTtBQUVWQywyQkFBUyxFQUFFLFNBRkQ7QUFHVkMsd0JBQU0sRUFBRTtBQUhFLGlCQUFaO0FBQUEsdUNBS0UscUVBQUMsaURBQUQ7QUFBTyxxQkFBRyxFQUFFSCxHQUFaO0FBQWlCLHdCQUFNLEVBQUMsTUFBeEI7QUFBK0IsMkJBQVMsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEVTtBQUFBLGFBQVg7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUF5QkUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpCRjtBQUFBLGtCQURjO0FBQUEsQ0FBaEI7O0tBQU1OLE87QUE4QlNBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZ2FsbGVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcblxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmNvbnN0IGdhbGxlcmllcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIjIwMjEgSHl1bmRhaSBFbGFudHJhIE4gTGluZVwiLFxuICAgIHBob3RvczogW1xuICAgICAgXCJodHRwczovL2ltZ3VyLmNvbS93Y3FRT1BMLmpwZ1wiLFxuICAgICAgXCJodHRwczovL2ltZ3VyLmNvbS9RbTV2S2ZmLmpwZ1wiLFxuICAgICAgXCJodHRwczovL2ltZ3VyLmNvbS9IdkJZRnJTLmpwZ1wiLFxuICAgICAgXCJodHRwczovL2ltZ3VyLmNvbS9ybXpRSXRyLmpwZ1wiLFxuICAgICAgXCJodHRwczovL2ltZ3VyLmNvbS9McUZiRHR1LmpwZ1wiLFxuICAgICAgXCJodHRwczovL2ltZ3VyLmNvbS9PbzROWFRwLmpwZ1wiLFxuICAgICAgXCJodHRwczovL2ltZ3VyLmNvbS85YzlOd2t3LmpwZ1wiLFxuICAgICAgXCJodHRwczovL2ltZ3VyLmNvbS9GMDdORjZPLmpwZ1wiLFxuICAgIF0sXG4gIH0sXG5dO1xuXG5jb25zdCBHYWxsZXJ5ID0gKCkgPT4gKFxuICA8PlxuICAgIDxOYXYgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTE2IHctZnVsbCBjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAge2dhbGxlcmllcy5tYXAoKHsgdGl0bGUsIHBob3RvcyB9KSA9PiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIHB0LTRcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgIFwiZ3JpZCBncmlkLWZsb3ctY29sXCIsXG4gICAgICAgICAgICAgIGBncmlkLXJvd3MtJHtNYXRoLmNlaWwocGhvdG9zLmxlbmd0aCAvIDIpfWBcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Bob3Rvcy5tYXAoKHNyYykgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNHZ3XCIsXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NyY30gbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgICA8Rm9vdGVyIC8+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/gallery.js\n");

/***/ })

})