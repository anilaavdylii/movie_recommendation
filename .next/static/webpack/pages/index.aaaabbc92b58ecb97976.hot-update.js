self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useRequestRest.js":
/*!*************************************!*\
  !*** ./src/hooks/useRequestRest.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_STATUS": function() { return /* binding */ REQUEST_STATUS; }
/* harmony export */ });
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _s = $RefreshSig$();



var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};
var restUrl = "api/m";

function useRequestRest() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(REQUEST_STATUS.LOADING),
      requestStatus = _useState2[0],
      setRequestStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      error = _useState3[0],
      setError = _useState3[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function delayFunc() {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var result;
        return C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get(restUrl);

              case 3:
                result = _context.sent;
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(result.data);
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));
      return _delayFunc.apply(this, arguments);
    }

    delayFunc();
  }, []);

  function updateRecord(record, doneCallback) {
    var originalRecords = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);

    var newRecords = data.map(function (rec) {
      return rec.id === record.id ? record : rec;
    });

    function delayFunction() {
      return _delayFunction.apply(this, arguments);
    }

    function _delayFunction() {
      _delayFunction = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                setData(newRecords);
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().put("".concat(restUrl, "/").concat(record.id), record);

              case 4:
                if (doneCallback) {
                  doneCallback();
                }

                _context2.next = 12;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log("error thrown inside delayFunction", _context2.t0);

                if (doneCallback) {
                  doneCallback();
                }

                setData(originalRecords);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));
      return _delayFunction.apply(this, arguments);
    }

    delayFunction();
  }

  function deleteRecord(record, doneCallback) {
    var originalRecords = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);

    var newRecords = data.filter(function (rec) {
      return rec.id != record.id;
    });

    function delayFunction() {
      return _delayFunction2.apply(this, arguments);
    }

    function _delayFunction2() {
      _delayFunction2 = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
        return C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                setData(newRecords);
                _context3.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().delete("".concat(restUrl, "/").concat(record.id), record);

              case 4:
                if (doneCallback) {
                  doneCallback();
                }

                _context3.next = 12;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log("error thrown inside delayFunction", _context3.t0);

                if (doneCallback) {
                  doneCallback();
                }

                setData(originalRecords);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));
      return _delayFunction2.apply(this, arguments);
    }

    delayFunction();
  }

  function insertRecord(record, doneCallback) {
    var originalRecords = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);

    var newRecords = [record].concat((0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data));

    function delayFunction() {
      return _delayFunction3.apply(this, arguments);
    }

    function _delayFunction3() {
      _delayFunction3 = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
        return C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                setData(newRecords);
                _context4.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().post("".concat(restUrl, "/99999"), record);

              case 4:
                if (doneCallback) {
                  doneCallback();
                }

                _context4.next = 12;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.log("error thrown inside delayFunction", _context4.t0);

                if (doneCallback) {
                  doneCallback();
                }

                setData(originalRecords);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));
      return _delayFunction3.apply(this, arguments);
    }

    delayFunction();
  }

  return {
    data: data,
    requestStatus: requestStatus,
    error: error,
    updateRecord: updateRecord,
    insertRecord: insertRecord,
    deleteRecord: deleteRecord
  };
}

_s(useRequestRest, "uvvVBilWoUeFPXc52bF5AHAvR6Y=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestRest);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3RSZXN0LmpzIl0sIm5hbWVzIjpbIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwicmVzdFVybCIsInVzZVJlcXVlc3RSZXN0IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJkZWxheUZ1bmMiLCJheGlvcyIsInJlc3VsdCIsInVwZGF0ZVJlY29yZCIsInJlY29yZCIsImRvbmVDYWxsYmFjayIsIm9yaWdpbmFsUmVjb3JkcyIsIm5ld1JlY29yZHMiLCJtYXAiLCJyZWMiLCJpZCIsImRlbGF5RnVuY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlUmVjb3JkIiwiZmlsdGVyIiwiaW5zZXJ0UmVjb3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGNBQWMsR0FBRztBQUM1QkMsU0FBTyxFQUFFLFNBRG1CO0FBRTVCQyxTQUFPLEVBQUUsU0FGbUI7QUFHNUJDLFNBQU8sRUFBRTtBQUhtQixDQUF2QjtBQU1QLElBQU1DLE9BQU8sR0FBRyxPQUFoQjs7QUFFQSxTQUFTQyxjQUFULEdBQTBCO0FBQUE7O0FBQUEsa0JBQ0FDLCtDQUFRLENBQUMsRUFBRCxDQURSO0FBQUEsTUFDakJDLElBRGlCO0FBQUEsTUFDWEMsT0FEVzs7QUFBQSxtQkFFa0JGLCtDQUFRLENBQUNOLGNBQWMsQ0FBQ0MsT0FBaEIsQ0FGMUI7QUFBQSxNQUVqQlEsYUFGaUI7QUFBQSxNQUVGQyxnQkFGRTs7QUFBQSxtQkFHRUosK0NBQVEsQ0FBQyxFQUFELENBSFY7QUFBQSxNQUdqQkssS0FIaUI7QUFBQSxNQUdWQyxR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dC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcclxuICBMT0FESU5HOiBcImxvYWRpbmdcIixcclxuICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcclxuICBGQUlMVVJFOiBcImZhaWx1cmVcIixcclxufTtcclxuXHJcbmNvbnN0IHJlc3RVcmwgPSBcImFwaS9tXCI7XHJcblxyXG5mdW5jdGlvbiB1c2VSZXF1ZXN0UmVzdCgpIHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChyZXN0VXJsKTtcclxuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xyXG4gICAgICAgIHNldERhdGEocmVzdWx0LmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKTtcclxuICAgICAgICBzZXRFcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVsYXlGdW5jKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVSZWNvcmQocmVjb3JkLCBkb25lQ2FsbGJhY2spIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkcyA9IFsuLi5kYXRhXTtcclxuICAgIGNvbnN0IG5ld1JlY29yZHMgPSBkYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XHJcbiAgICAgIHJldHVybiByZWMuaWQgPT09IHJlY29yZC5pZCA/IHJlY29yZCA6IHJlYztcclxuICAgIH0pO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbigpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtyZXN0VXJsfS8ke3JlY29yZC5pZH1gLCByZWNvcmQpO1xyXG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcclxuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHRocm93biBpbnNpZGUgZGVsYXlGdW5jdGlvblwiLCBlcnJvcik7XHJcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVsYXlGdW5jdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlUmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBvcmlnaW5hbFJlY29yZHMgPSBbLi4uZGF0YV07XHJcbiAgICBjb25zdCBuZXdSZWNvcmRzID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHJlYykge1xyXG4gICAgICByZXR1cm4gcmVjLmlkICE9IHJlY29yZC5pZDtcclxuICAgIH0pO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbigpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtyZXN0VXJsfS8ke3JlY29yZC5pZH1gLCByZWNvcmQpO1xyXG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcclxuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHRocm93biBpbnNpZGUgZGVsYXlGdW5jdGlvblwiLCBlcnJvcik7XHJcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVsYXlGdW5jdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5zZXJ0UmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBvcmlnaW5hbFJlY29yZHMgPSBbLi4uZGF0YV07XHJcbiAgICBjb25zdCBuZXdSZWNvcmRzID0gW3JlY29yZCwgLi4uZGF0YV07XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldERhdGEobmV3UmVjb3Jkcyk7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtyZXN0VXJsfS85OTk5OWAsIHJlY29yZCk7XHJcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcclxuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGF0YShvcmlnaW5hbFJlY29yZHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWxheUZ1bmN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF0YSxcclxuICAgIHJlcXVlc3RTdGF0dXMsXHJcbiAgICBlcnJvcixcclxuICAgIHVwZGF0ZVJlY29yZCxcclxuICAgIGluc2VydFJlY29yZCxcclxuICAgIGRlbGV0ZVJlY29yZCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0UmVzdDsiXSwic291cmNlUm9vdCI6IiJ9