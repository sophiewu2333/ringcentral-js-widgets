'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2;

require('core-js/fn/array/find');

var _reselect = require('reselect');

var _di = require('../../lib/di');

var _fetchList = require('../../lib/fetchList');

var _fetchList2 = _interopRequireDefault(_fetchList);

var _DataFetcher2 = require('../../lib/DataFetcher');

var _DataFetcher3 = _interopRequireDefault(_DataFetcher2);

var _removeUri = require('../../lib/removeUri');

var _removeUri2 = _interopRequireDefault(_removeUri);

var _getter = require('../../lib/getter');

var _getter2 = _interopRequireDefault(_getter);

var _ensureExist = require('../../lib/ensureExist');

var _ensureExist2 = _interopRequireDefault(_ensureExist);

var _getReducer = require('./getReducer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  (0, _defineProperty2.default)(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function simplifyPhoneNumber(number) {
  return (0, _removeUri2.default)(number);
}

/**
 * @class
 * @description Accound phone number module to get account phone number list
 */
var AccountPhoneNumber = (_dec = (0, _di.Module)({
  deps: ['Client', 'RolesAndPermissions', { dep: 'AccountPhoneNumberOptions', optional: true }]
}), _dec(_class = (_class2 = function (_DataFetcher) {
  (0, _inherits3.default)(AccountPhoneNumber, _DataFetcher);

  /**
   * @constructor
   * @param {Object} params - params object
   * @param {Client} params.client - client module instance
   */
  function AccountPhoneNumber(_ref) {
    var _this2 = this;

    var client = _ref.client,
        rolesAndPermissions = _ref.rolesAndPermissions,
        options = (0, _objectWithoutProperties3.default)(_ref, ['client', 'rolesAndPermissions']);
    (0, _classCallCheck3.default)(this, AccountPhoneNumber);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AccountPhoneNumber.__proto__ || (0, _getPrototypeOf2.default)(AccountPhoneNumber)).call(this, (0, _extends3.default)({
      name: 'accountPhoneNumber',
      client: client,
      getDataReducer: _getReducer.getDataReducer,
      fetchFunction: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _fetchList2.default)(function (params) {
                    return client.account().phoneNumber().list(params);
                  });

                case 2:
                  _context.t0 = simplifyPhoneNumber;
                  return _context.abrupt('return', _context.sent.map(_context.t0));

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function fetchFunction() {
          return _ref2.apply(this, arguments);
        };
      }(),
      readyCheckFn: function readyCheckFn() {
        return _this._rolesAndPermissions.ready;
      }
    }, options)));

    _initDefineProp(_this, 'numbers', _descriptor, _this);

    _initDefineProp(_this, 'extensionToPhoneNumberMap', _descriptor2, _this);

    _this._rolesAndPermissions = _ensureExist2.default.call(_this, rolesAndPermissions, 'rolesAndPermissions');
    return _this;
  }

  (0, _createClass3.default)(AccountPhoneNumber, [{
    key: '_hasPermission',
    get: function get() {
      return !!this._rolesAndPermissions.permissions.ReadCompanyPhoneNumbers;
    }
  }]);
  return AccountPhoneNumber;
}(_DataFetcher3.default), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'numbers', [_getter2.default], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return (0, _reselect.createSelector)(function () {
      return _this3.data;
    }, function (data) {
      return data || [];
    });
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'extensionToPhoneNumberMap', [_getter2.default], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return (0, _reselect.createSelector)(function () {
      return _this4.numbers;
    }, function (numbers) {
      var numberMap = {};
      numbers.forEach(function (number) {
        if (number.extension && number.extension.extensionNumber) {
          if (!numberMap[number.extension.extensionNumber]) {
            numberMap[number.extension.extensionNumber] = [];
          }
          numberMap[number.extension.extensionNumber].push(number);
        }
      });
      return numberMap;
    });
  }
})), _class2)) || _class);
exports.default = AccountPhoneNumber;
//# sourceMappingURL=index.js.map
