self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/contexts/MovieFilterContext.js":
/*!********************************************!*\
  !*** ./src/contexts/MovieFilterContext.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieFilterContext": function() { return /* binding */ MovieFilterContext; },
/* harmony export */   "MovieFilterProvider": function() { return /* binding */ MovieFilterProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useMovieFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useMovieFilter */ "./src/hooks/useMovieFilter.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\contexts\\MovieFilterContext.js",
    _s = $RefreshSig$();



var MovieFilterContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function MovieFilterProvider(_ref) {
  _s();

  var children = _ref.children,
      _ref$startingShowRati = _ref.startingShowRatings,
      startingShowRatings = _ref$startingShowRati === void 0 ? false : _ref$startingShowRati,
      _ref$startingRatingVa = _ref.startingRatingValue,
      startingRatingValue = _ref$startingRatingVa === void 0 ? "10" : _ref$startingRatingVa;

  var _useMovieFilter = (0,_hooks_useMovieFilter__WEBPACK_IMPORTED_MODULE_2__.default)(startingShowRatings),
      showRatings = _useMovieFilter.showRatings,
      setShowRatings = _useMovieFilter.setShowRatings;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieFilterContext.Provider, {
    value: {
      showRatings: showRatings,
      setShowRatings: setShowRatings
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

_s(MovieFilterProvider, "bdTv6iYjOjJqfpgp+C9S3McNRQc=", false, function () {
  return [_hooks_useMovieFilter__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = MovieFilterProvider;


var _c;

$RefreshReg$(_c, "MovieFilterProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL01vdmllRmlsdGVyQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJNb3ZpZUZpbHRlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTW92aWVGaWx0ZXJQcm92aWRlciIsImNoaWxkcmVuIiwic3RhcnRpbmdTaG93UmF0aW5ncyIsInN0YXJ0aW5nUmF0aW5nVmFsdWUiLCJ1c2VNb3ZpZUZpbHRlciIsInNob3dSYXRpbmdzIiwic2V0U2hvd1JhdGluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLGdCQUFFQyxvREFBYSxFQUF2Qzs7QUFFQSxTQUFTQyxtQkFBVCxPQUFnRztBQUFBOztBQUFBLE1BQWpFQyxRQUFpRSxRQUFqRUEsUUFBaUU7QUFBQSxtQ0FBdkRDLG1CQUF1RDtBQUFBLE1BQXZEQSxtQkFBdUQsc0NBQWpDLEtBQWlDO0FBQUEsbUNBQTFCQyxtQkFBMEI7QUFBQSxNQUExQkEsbUJBQTBCLHNDQUFOLElBQU07O0FBQUEsd0JBQ3REQyw4REFBYyxDQUFDRixtQkFBRCxDQUR3QztBQUFBLE1BQ3JGRyxXQURxRixtQkFDckZBLFdBRHFGO0FBQUEsTUFDeEVDLGNBRHdFLG1CQUN4RUEsY0FEd0U7O0FBRzVGLHNCQUNJLDhEQUFDLGtCQUFELENBQW9CLFFBQXBCO0FBQTZCLFNBQUssRUFBRTtBQUFDRCxpQkFBVyxFQUFYQSxXQUFEO0FBQWNDLG9CQUFjLEVBQWRBO0FBQWQsS0FBcEM7QUFBQSxjQUNLTDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztHQVJRRCxtQjtVQUNpQ0ksMEQ7OztLQURqQ0osbUI7QUFTVCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZmU5ZTgxYTU5OThkOTQzNzk3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZU1vdmllRmlsdGVyIGZyb20gXCIuLi9ob29rcy91c2VNb3ZpZUZpbHRlclwiO1xyXG5cclxuY29uc3QgTW92aWVGaWx0ZXJDb250ZXh0PSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUZpbHRlclByb3ZpZGVyICh7Y2hpbGRyZW4sIHN0YXJ0aW5nU2hvd1JhdGluZ3MgPSBmYWxzZSwgc3RhcnRpbmdSYXRpbmdWYWx1ZT1cIjEwXCJ9KXtcclxuICAgIGNvbnN0IHtzaG93UmF0aW5ncywgc2V0U2hvd1JhdGluZ3N9ID0gdXNlTW92aWVGaWx0ZXIoc3RhcnRpbmdTaG93UmF0aW5ncyk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxNb3ZpZUZpbHRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzaG93UmF0aW5ncywgc2V0U2hvd1JhdGluZ3N9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvTW92aWVGaWx0ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQge01vdmllRmlsdGVyQ29udGV4dCwgTW92aWVGaWx0ZXJQcm92aWRlcn0iXSwic291cmNlUm9vdCI6IiJ9