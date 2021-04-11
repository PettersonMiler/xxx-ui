"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputField = exports.Label = exports.InputWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var InputWrapper = _styledComponents["default"].div.withConfig({
  displayName: "InputFieldstyles__InputWrapper",
  componentId: "sc-19zdipe-0"
})(["display:block;position:relative;width:100%;"]);

exports.InputWrapper = InputWrapper;

var Label = _styledComponents["default"].label.withConfig({
  displayName: "InputFieldstyles__Label",
  componentId: "sc-19zdipe-1"
})(["", ""], function (_ref) {
  var theme = _ref.theme;
  return (0, _styledComponents.css)(["display:block;font-size:", ";font-weight:", ";margin-bottom:", ";"], theme.font.size['14'], theme.font.weight.regular, theme.spacings.small);
});

exports.Label = Label;

var InputField = _styledComponents["default"].input.withConfig({
  displayName: "InputFieldstyles__InputField",
  componentId: "sc-19zdipe-2"
})(["", ""], function (_ref2) {
  var theme = _ref2.theme;
  return (0, _styledComponents.css)(["border:1px;border-style:solid;display:block;font-size:", ";font-weight:", ";padding:", ";z-index:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%;&::placeholder{font-size:", ";font-style:italic;font-weight:", ";}"], theme.font.size['14'], theme.font.weight.regular, theme.spacings.medium, theme.font.size['14'], theme.font.weight.regular);
});

exports.InputField = InputField;