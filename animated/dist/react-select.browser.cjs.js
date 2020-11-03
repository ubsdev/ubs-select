'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var _extends = require('@babel/runtime/helpers/extends');
var index$1 = require('../../dist/index-66f5f44b.browser.cjs.js');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _inherits = require('@babel/runtime/helpers/inherits');
var React = require('react');
var memoizeOne = require('memoize-one');
require('@babel/runtime/helpers/defineProperty');
require('@emotion/core');
require('react-dom');
require('@babel/runtime/helpers/typeof');
require('@emotion/css');
require('@babel/runtime/helpers/taggedTemplateLiteral');
require('react-input-autosize');
var reactTransitionGroup = require('react-transition-group');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var _objectWithoutProperties__default = /*#__PURE__*/_interopDefault(_objectWithoutProperties);
var _extends__default = /*#__PURE__*/_interopDefault(_extends);
var _classCallCheck__default = /*#__PURE__*/_interopDefault(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefault(_createClass);
var _inherits__default = /*#__PURE__*/_interopDefault(_inherits);
var React__default = /*#__PURE__*/_interopDefault(React);
var memoizeOne__default = /*#__PURE__*/_interopDefault(memoizeOne);

// strip transition props off before spreading onto select component
// note we need to be explicit about innerRef for flow
var AnimatedInput = function AnimatedInput(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        appear = _ref.appear,
        enter = _ref.enter,
        exit = _ref.exit,
        props = _objectWithoutProperties__default['default'](_ref, ["in", "onExited", "appear", "enter", "exit"]);

    return /*#__PURE__*/React__default['default'].createElement(WrappedComponent, props);
  };
};

var Fade = function Fade(_ref) {
  var Tag = _ref.component,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1 : _ref$duration,
      inProp = _ref.in,
      onExited = _ref.onExited,
      props = _objectWithoutProperties__default['default'](_ref, ["component", "duration", "in", "onExited"]);

  var transition = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1,
      transition: "opacity ".concat(duration, "ms")
    },
    exiting: {
      opacity: 0
    },
    exited: {
      opacity: 0
    }
  };
  return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
    mountOnEnter: true,
    unmountOnExit: true,
    in: inProp,
    timeout: duration
  }, function (state) {
    var innerProps = {
      style: index$1._objectSpread2({}, transition[state])
    };
    return /*#__PURE__*/React__default['default'].createElement(Tag, _extends__default['default']({
      innerProps: innerProps
    }, props));
  });
}; // ==============================
// Collapse Transition
// ==============================

var collapseDuration = 260;
// wrap each MultiValue with a collapse transition; decreases width until
// finally removing from DOM
var Collapse = /*#__PURE__*/function (_Component) {
  _inherits__default['default'](Collapse, _Component);

  var _super = index$1._createSuper(Collapse);

  function Collapse() {
    var _this;

    _classCallCheck__default['default'](this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.duration = collapseDuration;
    _this.rafID = void 0;
    _this.state = {
      width: 'auto'
    };
    _this.transition = {
      exiting: {
        width: 0,
        transition: "width ".concat(_this.duration, "ms ease-out")
      },
      exited: {
        width: 0
      }
    };

    _this.getWidth = function (ref) {
      if (ref && isNaN(_this.state.width)) {
        /*
          Here we're invoking requestAnimationFrame with a callback invoking our
          call to getBoundingClientRect and setState in order to resolve an edge case
          around portalling. Certain portalling solutions briefly remove children from the DOM
          before appending them to the target node. This is to avoid us trying to call getBoundingClientrect
          while the Select component is in this state.
        */
        // cannot use `offsetWidth` because it is rounded
        _this.rafID = window.requestAnimationFrame(function () {
          var _ref$getBoundingClien = ref.getBoundingClientRect(),
              width = _ref$getBoundingClien.width;

          _this.setState({
            width: width
          });
        });
      }
    };

    _this.getStyle = function (width) {
      return {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: width
      };
    };

    _this.getTransition = function (state) {
      return _this.transition[state];
    };

    return _this;
  }

  _createClass__default['default'](Collapse, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rafID) {
        window.cancelAnimationFrame(this.rafID);
      }
    } // width must be calculated; cannot transition from `undefined` to `number`

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          inProp = _this$props.in;
      var width = this.state.width;
      return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
        enter: false,
        mountOnEnter: true,
        unmountOnExit: true,
        in: inProp,
        timeout: this.duration
      }, function (state) {
        var style = index$1._objectSpread2(index$1._objectSpread2({}, _this2.getStyle(width)), _this2.getTransition(state));

        return /*#__PURE__*/React__default['default'].createElement("div", {
          ref: _this2.getWidth,
          style: style
        }, children);
      });
    }
  }]);

  return Collapse;
}(React.Component);

var AnimatedMultiValue = function AnimatedMultiValue(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        props = _objectWithoutProperties__default['default'](_ref, ["in", "onExited"]);

    return /*#__PURE__*/React__default['default'].createElement(Collapse, {
      in: inProp,
      onExited: onExited
    }, /*#__PURE__*/React__default['default'].createElement(WrappedComponent, _extends__default['default']({
      cropWithEllipsis: inProp
    }, props)));
  };
};

var AnimatedPlaceholder = function AnimatedPlaceholder(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/React__default['default'].createElement(Fade, _extends__default['default']({
      component: WrappedComponent,
      duration: props.isMulti ? collapseDuration : 1
    }, props));
  };
};

var AnimatedSingleValue = function AnimatedSingleValue(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/React__default['default'].createElement(Fade, _extends__default['default']({
      component: WrappedComponent
    }, props));
  };
};

// make ValueContainer a transition group
var AnimatedValueContainer = function AnimatedValueContainer(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.TransitionGroup, _extends__default['default']({
      component: WrappedComponent
    }, props));
  };
};

var makeAnimated = function makeAnimated() {
  var externalComponents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var components = index$1.defaultComponents({
    components: externalComponents
  });

  var Input = components.Input,
      MultiValue = components.MultiValue,
      Placeholder = components.Placeholder,
      SingleValue = components.SingleValue,
      ValueContainer = components.ValueContainer,
      rest = _objectWithoutProperties__default['default'](components, ["Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer"]);

  return index$1._objectSpread2({
    Input: AnimatedInput(Input),
    MultiValue: AnimatedMultiValue(MultiValue),
    Placeholder: AnimatedPlaceholder(Placeholder),
    SingleValue: AnimatedSingleValue(SingleValue),
    ValueContainer: AnimatedValueContainer(ValueContainer)
  }, rest);
};

var AnimatedComponents = makeAnimated();
var Input = AnimatedComponents.Input;
var MultiValue = AnimatedComponents.MultiValue;
var Placeholder = AnimatedComponents.Placeholder;
var SingleValue = AnimatedComponents.SingleValue;
var ValueContainer = AnimatedComponents.ValueContainer;
var index = memoizeOne__default['default'](makeAnimated, index$1.exportedEqual);

exports.Input = Input;
exports.MultiValue = MultiValue;
exports.Placeholder = Placeholder;
exports.SingleValue = SingleValue;
exports.ValueContainer = ValueContainer;
exports.default = index;
