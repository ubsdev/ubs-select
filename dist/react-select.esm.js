import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/toConsumableArray';
import { _ as _createSuper } from './index-f1a72678.esm.js';
export { c as components } from './index-f1a72678.esm.js';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import '@babel/runtime/helpers/defineProperty';
import { CacheProvider } from '@emotion/core';
import 'react-dom';
import '@babel/runtime/helpers/typeof';
import { S as Select } from './Select-0d21132f.esm.js';
export { c as createFilter, d as defaultTheme, m as mergeStyles } from './Select-0d21132f.esm.js';
import '@emotion/css';
import '@babel/runtime/helpers/taggedTemplateLiteral';
import 'react-input-autosize';
import { m as manageState } from './stateManager-185a6eb7.esm.js';
import createCache from '@emotion/cache';

var NonceProvider = /*#__PURE__*/function (_Component) {
  _inherits(NonceProvider, _Component);

  var _super = _createSuper(NonceProvider);

  function NonceProvider(props) {
    var _this;

    _classCallCheck(this, NonceProvider);

    _this = _super.call(this, props);

    _this.createEmotionCache = function (nonce) {
      return createCache({
        nonce: nonce
      });
    };

    _this.createEmotionCache = memoizeOne(_this.createEmotionCache);
    return _this;
  }

  _createClass(NonceProvider, [{
    key: "render",
    value: function render() {
      var emotionCache = this.createEmotionCache(this.props.nonce);
      return /*#__PURE__*/React.createElement(CacheProvider, {
        value: emotionCache
      }, this.props.children);
    }
  }]);

  return NonceProvider;
}(Component);

var index = manageState(Select);

export default index;
export { NonceProvider };
