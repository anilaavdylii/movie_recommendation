self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Movie.js":
/*!*********************************!*\
  !*** ./src/components/Movie.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../contexts/MovieFilterContext */ "./src/contexts/MovieFilterContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\Movie.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Rating(_ref) {
  var Source = _ref.Source,
      Value = _ref.Value;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
    className: "rating w-100",
    children: [Source, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
      children: ["Value: ", Value, "/10"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Rating;

function Ratings(_ref2) {
  _s();

  var ratings = _ref2.ratings;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_3__.MovieFilterContext),
      ratingValue = _useContext.ratingValue;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "ratingBox card h-250",
    children: ratings.filter(function (rating) {
      return rating.Value === ratingValue;
    }).map(function (rating) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "rating w-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Rating, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this)
      }, rating.id, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_s(Ratings, "OruT3hzDMCsr3mN8ueoDycdytg0=");

_c2 = Ratings;

function MovieImage(_ref3) {
  var id = _ref3.id,
      title = _ref3.title;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "movie-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: "contain-fit",
      src: "/images/movie-".concat(id, ".png"),
      width: "300",
      alt: "".concat(title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

_c3 = MovieImage;

function MovieFavorite(_ref4) {
  _s2();

  var favorite = _ref4.favorite,
      onFavoriteToggle = _ref4.onFavoriteToggle;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      inTransition = _useState[0],
      setInTransition = _useState[1];

  function doneCallback() {
    setInTransition(false);
    console.log("In MovieFavorite:doneCallback    ".concat(new Date().getMilliseconds()));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "action padB1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      onClick: function onClick() {
        setInTransition(true);
        return onFavoriteToggle(doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
        className: favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

_s2(MovieFavorite, "gfuw24RZcQ1VLKTCbiMf9MKfd+I=");

_c4 = MovieFavorite;

function MovieDemographics(_ref5) {
  var title = _ref5.title,
      year = _ref5.year,
      released = _ref5.released,
      runtime = _ref5.runtime,
      summary = _ref5.summary,
      favorite = _ref5.favorite,
      onFavoriteToggle = _ref5.onFavoriteToggle;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "movie-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [title, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 20
        }, this), released, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 23
        }, this), " ", runtime]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieFavorite, {
      favorite: favorite,
      onFavoriteToggle: onFavoriteToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "card-description",
        children: summary
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

_c5 = MovieDemographics;

function Movie(_ref6) {
  _s3();

  var movie = _ref6.movie,
      onFavoriteToggle = _ref6.onFavoriteToggle;
  var id = movie.id,
      title = movie.title,
      year = movie.year,
      ratings = movie.ratings;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_3__.MovieFilterContext),
      showRatings = _useContext2.showRatings;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "card card-height p-4 mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieImage, {
        id: id,
        title: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieDemographics, _objectSpread(_objectSpread({}, movie), {}, {
        onFavoriteToggle: onFavoriteToggle
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Ratings, {
      ratings: ratings
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 31
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 5
  }, this);
}

_s3(Movie, "TKTcEwFjlO0mfl35x7B4bMl4+lc=");

_c6 = Movie;
/* harmony default export */ __webpack_exports__["default"] = (Movie);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Rating");
$RefreshReg$(_c2, "Ratings");
$RefreshReg$(_c3, "MovieImage");
$RefreshReg$(_c4, "MovieFavorite");
$RefreshReg$(_c5, "MovieDemographics");
$RefreshReg$(_c6, "Movie");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiXSwibmFtZXMiOlsiUmF0aW5nIiwiU291cmNlIiwiVmFsdWUiLCJSYXRpbmdzIiwicmF0aW5ncyIsInVzZUNvbnRleHQiLCJNb3ZpZUZpbHRlckNvbnRleHQiLCJyYXRpbmdWYWx1ZSIsImZpbHRlciIsInJhdGluZyIsIm1hcCIsImlkIiwiTW92aWVJbWFnZSIsInRpdGxlIiwiTW92aWVGYXZvcml0ZSIsImZhdm9yaXRlIiwib25GYXZvcml0ZVRvZ2dsZSIsInVzZVN0YXRlIiwiaW5UcmFuc2l0aW9uIiwic2V0SW5UcmFuc2l0aW9uIiwiZG9uZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJnZXRNaWxsaXNlY29uZHMiLCJNb3ZpZURlbW9ncmFwaGljcyIsInllYXIiLCJyZWxlYXNlZCIsInJ1bnRpbWUiLCJzdW1tYXJ5IiwiTW92aWUiLCJtb3ZpZSIsInNob3dSYXRpbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxPQUFtQztBQUFBLE1BQWpCQyxNQUFpQixRQUFqQkEsTUFBaUI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDakMsc0JBQ0U7QUFBTSxhQUFTLEVBQUMsY0FBaEI7QUFBQSxlQUNHRCxNQURILG9CQUNXO0FBQUEsNEJBQWdCQyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztLQU5RRixNOztBQVFULFNBQVNHLE9BQVQsUUFBOEI7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFNBQVhBLE9BQVc7O0FBQUEsb0JBQ05DLGlEQUFVLENBQUNDLDRFQUFELENBREo7QUFBQSxNQUNyQkMsV0FEcUIsZUFDckJBLFdBRHFCOztBQUc1QixzQkFDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBLGNB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TDFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0lBWlEwQixLOztNQUFBQSxLO0FBY1QsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjcxMmYxN2IyOTMwZjliOGY0OWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TW92aWVGaWx0ZXJDb250ZXh0fSBmcm9tIFwiLi8uLi9jb250ZXh0cy9Nb3ZpZUZpbHRlckNvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIFJhdGluZyh7IFNvdXJjZSwgVmFsdWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmcgdy0xMDBcIj5cclxuICAgICAge1NvdXJjZX0gPHN0cm9uZz5WYWx1ZToge1ZhbHVlfS8xMDwvc3Ryb25nPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJhdGluZ3MoeyByYXRpbmdzIH0pIHtcclxuICBjb25zdCB7cmF0aW5nVmFsdWV9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdCb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICB7cmF0aW5ncy5maWx0ZXIoZnVuY3Rpb24ocmF0aW5nKXtcclxuICAgICAgICByZXR1cm4gcmF0aW5nLlZhbHVlID09PSByYXRpbmdWYWx1ZTtcclxuICAgICAgfSlcclxuICAgICAgLm1hcChmdW5jdGlvbihyYXRpbmcpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nIHctMTAwXCIga2V5PXtyYXRpbmcuaWR9PlxyXG4gICAgICAgICAgICA8UmF0aW5nPjwvUmF0aW5nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUltYWdlKHsgaWQsIHRpdGxlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9tb3ZpZS0ke2lkfS5wbmdgfVxyXG4gICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICBhbHQ9e2Ake3RpdGxlfWB9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUZhdm9yaXRlKHsgZmF2b3JpdGUsIG9uRmF2b3JpdGVUb2dnbGUgfSkge1xyXG4gIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKCkge1xyXG4gICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBgSW4gTW92aWVGYXZvcml0ZTpkb25lQ2FsbGJhY2sgICAgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICByZXR1cm4gb25GYXZvcml0ZVRvZ2dsZShkb25lQ2FsbGJhY2spO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgIEZhdm9yaXRle1wiIFwifVxyXG4gICAgICAgIHtpblRyYW5zaXRpb24gPyAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllRGVtb2dyYXBoaWNzKHtcclxuICB0aXRsZSxcclxuICB5ZWFyLFxyXG4gIHJlbGVhc2VkLFxyXG4gIHJ1bnRpbWUsXHJcbiAgc3VtbWFyeSxcclxuICBmYXZvcml0ZSxcclxuICBvbkZhdm9yaXRlVG9nZ2xlLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgIHt0aXRsZX0gIDxici8+IFxyXG4gICAgICAgICAge3JlbGVhc2VkfSAgPGJyLz4ge3J1bnRpbWV9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb3ZpZUZhdm9yaXRlXHJcbiAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfVxyXG4gICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntzdW1tYXJ5fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZSh7IG1vdmllLCBvbkZhdm9yaXRlVG9nZ2xlIH0pIHtcclxuICBjb25zdCB7IGlkLCB0aXRsZSwgeWVhciwgcmF0aW5ncyB9ID0gbW92aWU7XHJcbiAgY29uc3Qge3Nob3dSYXRpbmdzfSA9IHVzZUNvbnRleHQoTW92aWVGaWx0ZXJDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgPE1vdmllSW1hZ2UgaWQ9e2lkfSB0aXRsZT17dGl0bGV9ICAvPlxyXG4gICAgICAgIDxNb3ZpZURlbW9ncmFwaGljcyB7Li4ubW92aWV9IG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd1JhdGluZ3MgPT09IHRydWUgPyA8UmF0aW5ncyByYXRpbmdzPXtyYXRpbmdzfSAvPiA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==