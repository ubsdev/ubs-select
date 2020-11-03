import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/toConsumableArray';
import '../../dist/index-f1a72678.esm.js';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/assertThisInitialized';
import '@babel/runtime/helpers/inherits';
import 'react';
import 'memoize-one';
import '@babel/runtime/helpers/defineProperty';
import '@emotion/core';
import 'react-dom';
import '@babel/runtime/helpers/typeof';
import { S as Select } from '../../dist/Select-0d21132f.esm.js';
import '@emotion/css';
import '@babel/runtime/helpers/taggedTemplateLiteral';
import 'react-input-autosize';
import { m as manageState } from '../../dist/stateManager-185a6eb7.esm.js';
import { makeAsyncSelect } from '../../async/dist/react-select.esm.js';
import { makeCreatableSelect } from '../../creatable/dist/react-select.esm.js';

var SelectCreatable = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

export default AsyncCreatable;
