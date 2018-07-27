'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _sessionStatus = require('ringcentral-integration/modules/Webphone/sessionStatus');

var _sessionStatus2 = _interopRequireDefault(_sessionStatus);

var _calleeTypes = require('ringcentral-integration/enums/calleeTypes');

var _calleeTypes2 = _interopRequireDefault(_calleeTypes);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _CallAvatar = require('../CallAvatar');

var _CallAvatar2 = _interopRequireDefault(_CallAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MergeInfo = function (_Component) {
  (0, _inherits3.default)(MergeInfo, _Component);

  function MergeInfo(props) {
    (0, _classCallCheck3.default)(this, MergeInfo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MergeInfo.__proto__ || (0, _getPrototypeOf2.default)(MergeInfo)).call(this, props));

    _this.state = {
      lastCallAvatar: null
    };
    _this.mounted = false;
    return _this;
  }

  (0, _createClass3.default)(MergeInfo, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.mounted = true;
      var _props = this.props,
          lastCallInfo = _props.lastCallInfo,
          getAvatarUrl = _props.getAvatarUrl;

      if (lastCallInfo && !lastCallInfo.avatarUrl && lastCallInfo.lastCallContact) {
        getAvatarUrl(lastCallInfo.lastCallContact).then(function (lastCallAvatar) {
          if (_this2.mounted) {
            _this2.setState({
              lastCallAvatar: lastCallAvatar
            });
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props2 = this.props,
          currentLocale = _props2.currentLocale,
          timeCounter = _props2.timeCounter,
          lastCallInfo = _props2.lastCallInfo,
          currentCallTitle = _props2.currentCallTitle,
          currentCallAvatarUrl = _props2.currentCallAvatarUrl,
          formatPhone = _props2.formatPhone;

      if (!lastCallInfo) {
        return null;
      }
      var lastCallAvatar = this.state.lastCallAvatar;

      var isLastCallEnded = lastCallInfo && lastCallInfo.status === _sessionStatus2.default.finished;
      var statusClasses = (0, _classnames3.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, _styles2.default.callee_status, true), (0, _defineProperty3.default)(_classnames, _styles2.default.callee_status_disconnected, !!isLastCallEnded), _classnames));

      var isOnConferenCall = !!(lastCallInfo && lastCallInfo.calleeType === _calleeTypes2.default.conference);
      var isContacts = !!(lastCallInfo && lastCallInfo.calleeType === _calleeTypes2.default.contacts);
      var calleeName = isContacts ? lastCallInfo.name : formatPhone(lastCallInfo.phoneNumber);
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.mergeInfo },
        _react2.default.createElement(
          'div',
          { className: _styles2.default.merge_item },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.callee_avatar },
            _react2.default.createElement(_CallAvatar2.default, {
              avatarUrl: isContacts && !lastCallInfo.avatarUrl ? lastCallAvatar : lastCallInfo.avatarUrl,
              extraNum: isOnConferenCall ? lastCallInfo.extraNum : 0,
              isOnConferenceCall: isOnConferenCall
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.callee_name },
            isOnConferenCall ? _i18n2.default.getString('conferenceCall', currentLocale) : calleeName
          ),
          _react2.default.createElement(
            'div',
            { className: statusClasses },
            lastCallInfo.status === _sessionStatus2.default.finished ? _i18n2.default.getString('disconnected', currentLocale) : _i18n2.default.getString('onHold', currentLocale)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.merge_item_active },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.callee_avatar_active },
            currentCallAvatarUrl ? _react2.default.createElement(_CallAvatar2.default, { avatarUrl: currentCallAvatarUrl }) : _react2.default.createElement(_CallAvatar2.default, { avatarUrl: null })
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.callee_name_active },
            currentCallTitle
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.callee_status_active },
            timeCounter
          )
        )
      );
    }
  }]);
  return MergeInfo;
}(_react.Component);

MergeInfo.propTypes = {
  currentLocale: _propTypes2.default.string.isRequired,
  timeCounter: _propTypes2.default.element.isRequired,
  lastCallInfo: _propTypes2.default.object,
  currentCallTitle: _propTypes2.default.string,
  currentCallAvatarUrl: _propTypes2.default.string,
  formatPhone: _propTypes2.default.func,
  getAvatarUrl: _propTypes2.default.func
};

MergeInfo.defaultProps = {
  lastCallInfo: { calleeType: _calleeTypes2.default.unknow },
  currentCallTitle: undefined,
  currentCallAvatarUrl: undefined,
  formatPhone: function formatPhone() {
    return null;
  },
  getAvatarUrl: function getAvatarUrl() {
    return null;
  }
};

exports.default = MergeInfo;
//# sourceMappingURL=MergeInfo.js.map
