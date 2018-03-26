'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.getDefaultDataReducer = getDefaultDataReducer;
exports.getDefaultTimestampReducer = getDefaultTimestampReducer;
exports.default = getDataFetcherReducer;

var _redux = require('redux');

var _getModuleStatusReducer = require('../getModuleStatusReducer');

var _getModuleStatusReducer2 = _interopRequireDefault(_getModuleStatusReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDefaultDataReducer(types) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var _ref = arguments[1];
    var type = _ref.type,
        data = _ref.data,
        _ref$cleanOnReset = _ref.cleanOnReset,
        cleanOnReset = _ref$cleanOnReset === undefined ? false : _ref$cleanOnReset,
        _ref$hasPermission = _ref.hasPermission,
        hasPermission = _ref$hasPermission === undefined ? true : _ref$hasPermission;

    switch (type) {
      case types.fetchSuccess:
        return data;
      case types.initSuccess:
        if (hasPermission) {
          return state;
        }
        return null;
      case types.resetSuccess:
        if (cleanOnReset) {
          return null;
        }
        return state;
      default:
        return state;
    }
  };
}

function getDefaultTimestampReducer(types) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var _ref2 = arguments[1];
    var type = _ref2.type,
        timestamp = _ref2.timestamp,
        cleanOnReset = _ref2.cleanOnReset;

    switch (type) {
      case types.fetchSuccess:
        return timestamp;
      case types.resetSuccess:
        if (cleanOnReset) {
          return null;
        }
        return state;
      default:
        return state;
    }
  };
}

function getDataFetcherReducer(types) {
  var reducers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _redux.combineReducers)((0, _extends3.default)({}, reducers, {
    status: (0, _getModuleStatusReducer2.default)(types)
  }));
}
//# sourceMappingURL=getDataFetcherReducer.js.map