"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("@babel/runtime/helpers/objectWithoutProperties"), require("@babel/runtime/helpers/extends"), 
require("@babel/runtime/helpers/slicedToArray"), require("@babel/runtime/helpers/toConsumableArray");

var index$1 = require("./index-b47573bd.cjs.prod.js"), _classCallCheck = require("@babel/runtime/helpers/classCallCheck"), _createClass = require("@babel/runtime/helpers/createClass");

require("@babel/runtime/helpers/assertThisInitialized");

var _inherits = require("@babel/runtime/helpers/inherits"), React = require("react"), memoizeOne = require("memoize-one");

require("@babel/runtime/helpers/defineProperty");

var core = require("@emotion/core");

require("react-dom"), require("@babel/runtime/helpers/typeof");

var base_dist_reactSelect = require("./Select-bb6db766.cjs.prod.js");

require("@emotion/css"), require("@babel/runtime/helpers/taggedTemplateLiteral"), 
require("react-input-autosize");

var stateManager = require("./stateManager-078990da.cjs.prod.js"), createCache = require("@emotion/cache");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

var _classCallCheck__default = _interopDefault(_classCallCheck), _createClass__default = _interopDefault(_createClass), _inherits__default = _interopDefault(_inherits), React__default = _interopDefault(React), memoizeOne__default = _interopDefault(memoizeOne), createCache__default = _interopDefault(createCache), NonceProvider = function(_Component) {
  _inherits__default.default(NonceProvider, _Component);
  var _super = index$1._createSuper(NonceProvider);
  function NonceProvider(props) {
    var _this;
    return _classCallCheck__default.default(this, NonceProvider), (_this = _super.call(this, props)).createEmotionCache = function(nonce) {
      return createCache__default.default({
        nonce: nonce
      });
    }, _this.createEmotionCache = memoizeOne__default.default(_this.createEmotionCache), 
    _this;
  }
  return _createClass__default.default(NonceProvider, [ {
    key: "render",
    value: function() {
      var emotionCache = this.createEmotionCache(this.props.nonce);
      return React__default.default.createElement(core.CacheProvider, {
        value: emotionCache
      }, this.props.children);
    }
  } ]), NonceProvider;
}(React.Component), index = stateManager.manageState(base_dist_reactSelect.Select);

exports.components = index$1.components, exports.createFilter = base_dist_reactSelect.createFilter, 
exports.defaultTheme = base_dist_reactSelect.defaultTheme, exports.mergeStyles = base_dist_reactSelect.mergeStyles, 
exports.NonceProvider = NonceProvider, exports.default = index;
