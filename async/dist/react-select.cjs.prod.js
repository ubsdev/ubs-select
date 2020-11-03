"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _objectWithoutProperties = require("@babel/runtime/helpers/objectWithoutProperties"), _extends = require("@babel/runtime/helpers/extends");

require("@babel/runtime/helpers/slicedToArray"), require("@babel/runtime/helpers/toConsumableArray");

var index = require("../../dist/index-b47573bd.cjs.prod.js"), _classCallCheck = require("@babel/runtime/helpers/classCallCheck"), _createClass = require("@babel/runtime/helpers/createClass");

require("@babel/runtime/helpers/assertThisInitialized");

var _inherits = require("@babel/runtime/helpers/inherits"), React = require("react");

require("memoize-one"), require("@babel/runtime/helpers/defineProperty"), require("@emotion/core"), 
require("react-dom"), require("@babel/runtime/helpers/typeof");

var base_dist_reactSelect = require("../../dist/Select-bb6db766.cjs.prod.js");

require("@emotion/css"), require("@babel/runtime/helpers/taggedTemplateLiteral"), 
require("react-input-autosize");

var stateManager = require("../../dist/stateManager-078990da.cjs.prod.js");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

var _objectWithoutProperties__default = _interopDefault(_objectWithoutProperties), _extends__default = _interopDefault(_extends), _classCallCheck__default = _interopDefault(_classCallCheck), _createClass__default = _interopDefault(_createClass), _inherits__default = _interopDefault(_inherits), React__default = _interopDefault(React), defaultProps = {
  cacheOptions: !1,
  defaultOptions: !1,
  filterOption: null,
  isLoading: !1
}, makeAsyncSelect = function(SelectComponent) {
  var _class, _temp;
  return _temp = _class = function(_Component) {
    _inherits__default.default(Async, _Component);
    var _super = index._createSuper(Async);
    function Async(props) {
      var _this;
      return _classCallCheck__default.default(this, Async), (_this = _super.call(this)).select = void 0, 
      _this.lastRequest = void 0, _this.mounted = !1, _this.optionsCache = {}, _this.handleInputChange = function(newValue, actionMeta) {
        var _this$props = _this.props, cacheOptions = _this$props.cacheOptions, onInputChange = _this$props.onInputChange, inputValue = index.handleInputChange(newValue, actionMeta, onInputChange);
        if (!inputValue) return delete _this.lastRequest, void _this.setState({
          inputValue: "",
          loadedInputValue: "",
          loadedOptions: [],
          isLoading: !1,
          passEmptyOptions: !1
        });
        if (cacheOptions && _this.optionsCache[inputValue]) _this.setState({
          inputValue: inputValue,
          loadedInputValue: inputValue,
          loadedOptions: _this.optionsCache[inputValue],
          isLoading: !1,
          passEmptyOptions: !1
        }); else {
          var request = _this.lastRequest = {};
          _this.setState({
            inputValue: inputValue,
            isLoading: !0,
            passEmptyOptions: !_this.state.loadedInputValue
          }, (function() {
            _this.loadOptions(inputValue, (function(options) {
              _this.mounted && (options && (_this.optionsCache[inputValue] = options), request === _this.lastRequest && (delete _this.lastRequest, 
              _this.setState({
                isLoading: !1,
                loadedInputValue: inputValue,
                loadedOptions: options || [],
                passEmptyOptions: !1
              })));
            }));
          }));
        }
        return inputValue;
      }, _this.state = {
        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : void 0,
        inputValue: void 0 !== props.inputValue ? props.inputValue : "",
        isLoading: !0 === props.defaultOptions,
        loadedOptions: [],
        passEmptyOptions: !1
      }, _this;
    }
    return _createClass__default.default(Async, [ {
      key: "componentDidMount",
      value: function() {
        var _this2 = this;
        this.mounted = !0;
        var defaultOptions = this.props.defaultOptions, inputValue = this.state.inputValue;
        !0 === defaultOptions && this.loadOptions(inputValue, (function(options) {
          if (_this2.mounted) {
            var isLoading = !!_this2.lastRequest;
            _this2.setState({
              defaultOptions: options || [],
              isLoading: isLoading
            });
          }
        }));
      }
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function(nextProps) {
        nextProps.cacheOptions !== this.props.cacheOptions && (this.optionsCache = {}), 
        nextProps.defaultOptions !== this.props.defaultOptions && this.setState({
          defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : void 0
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.mounted = !1;
      }
    }, {
      key: "focus",
      value: function() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function() {
        this.select.blur();
      }
    }, {
      key: "loadOptions",
      value: function(inputValue, callback) {
        var loadOptions = this.props.loadOptions;
        if (!loadOptions) return callback();
        var loader = loadOptions(inputValue, callback);
        loader && "function" == typeof loader.then && loader.then(callback, (function() {
          return callback();
        }));
      }
    }, {
      key: "render",
      value: function() {
        var _this3 = this, _this$props2 = this.props, isLoadingProp = (_this$props2.loadOptions, 
        _this$props2.isLoading), props = _objectWithoutProperties__default.default(_this$props2, [ "loadOptions", "isLoading" ]), _this$state = this.state, defaultOptions = _this$state.defaultOptions, inputValue = _this$state.inputValue, isLoading = _this$state.isLoading, loadedInputValue = _this$state.loadedInputValue, loadedOptions = _this$state.loadedOptions, options = _this$state.passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
        return React__default.default.createElement(SelectComponent, _extends__default.default({}, props, {
          ref: function(_ref) {
            _this3.select = _ref;
          },
          options: options,
          isLoading: isLoading || isLoadingProp,
          onInputChange: this.handleInputChange
        }));
      }
    } ]), Async;
  }(React.Component), _class.defaultProps = defaultProps, _temp;
}, SelectState = stateManager.manageState(base_dist_reactSelect.Select), Async = makeAsyncSelect(SelectState);

exports.default = Async, exports.defaultProps = defaultProps, exports.makeAsyncSelect = makeAsyncSelect;
