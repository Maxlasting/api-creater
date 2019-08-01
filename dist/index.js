"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _axios = _interopRequireDefault(require("axios"));

var apiCreater = function apiCreater(options) {
  var _options$baseOptions = options.baseOptions,
      baseOptions = _options$baseOptions === void 0 ? {} : _options$baseOptions,
      _options$interceptors = options.interceptors,
      interceptors = _options$interceptors === void 0 ? {} : _options$interceptors,
      _options$errCatcher = options.errCatcher,
      errCatcher = _options$errCatcher === void 0 ? function (err) {
    return console.error(err);
  } : _options$errCatcher;

  var request = _axios["default"].create(baseOptions);

  if (interceptors.request) {
    var _interceptors$request = interceptors.request,
        callback = _interceptors$request.callback,
        _interceptors$request2 = _interceptors$request.errHandler,
        errHandler = _interceptors$request2 === void 0 ? function () {} : _interceptors$request2;
    request.interceptors.request.use(callback, errHandler);
  }

  if (interceptors.response) {
    var _interceptors$respons = interceptors.response,
        _callback = _interceptors$respons.callback,
        _interceptors$respons2 = _interceptors$respons.errHandler,
        _errHandler = _interceptors$respons2 === void 0 ? function () {} : _interceptors$respons2;

    request.interceptors.response.use(_callback, _errHandler);
  }

  var createRequest = function createRequest(request) {
    return new _promise["default"](function (resolve, reject) {
      request.then(function (res) {
        return resolve(res.data);
      })["catch"](function (err) {
        errCatcher && errCatcher(err);
        reject(err);
      });
    });
  };

  return {
    get: function () {
      var _get = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", createRequest(request.get.apply(request, _args)));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }(),
    put: function () {
      var _put = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", createRequest(request.put.apply(request, _args2)));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function put() {
        return _put.apply(this, arguments);
      }

      return put;
    }(),
    post: function () {
      var _post = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", createRequest(request.post.apply(request, _args3)));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function post() {
        return _post.apply(this, arguments);
      }

      return post;
    }(),
    "delete": function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        var _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", createRequest(request["delete"].apply(request, _args4)));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }(),
    use: function use(methods) {
      return (
        /*#__PURE__*/
        (0, _asyncToGenerator2["default"])(
        /*#__PURE__*/
        _regenerator["default"].mark(function _callee5() {
          var _args5 = arguments;
          return _regenerator["default"].wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  return _context5.abrupt("return", createRequest(request[methods].apply(request, _args5)));

                case 1:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }))
      );
    }
  };
};

var _default = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Vue.prototype.$request = apiCreater(options);
  },
  init: apiCreater
};
exports["default"] = _default;