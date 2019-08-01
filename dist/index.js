"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _axios = _interopRequireDefault(require("axios"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context5; (0, _forEach["default"])(_context5 = ownKeys(source, true)).call(_context5, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context6; (0, _forEach["default"])(_context6 = ownKeys(source)).call(_context6, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

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
      _regenerator["default"].mark(function _callee(url) {
        var params,
            options,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                return _context.abrupt("return", createRequest(request.get(url, _objectSpread({
                  params: params
                }, options))));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }(),
    "delete": function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(url) {
        var params,
            options,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
                return _context2.abrupt("return", createRequest(request["delete"](url, _objectSpread({
                  params: params
                }, options))));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function _delete(_x2) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }(),
    post: function () {
      var _post = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(url) {
        var data,
            options,
            _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                options = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
                return _context3.abrupt("return", createRequest(request.post(url, data, options)));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function post(_x3) {
        return _post.apply(this, arguments);
      }

      return post;
    }(),
    put: function () {
      var _put = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(url) {
        var data,
            options,
            _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                return _context4.abrupt("return", createRequest(request.put(url, data, options)));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function put(_x4) {
        return _put.apply(this, arguments);
      }

      return put;
    }()
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