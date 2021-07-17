"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _Feather=_interopRequireDefault(require("react-native-vector-icons/Feather"));var _constant=require("../../constant");var _this=void 0,_jsxFileName="/Users/nonnontra/Desktop/Programming/On-Working/meet-and-cheese/MeetAndGreet/src/components/account/image-selection.js";var ImageSelection=function ImageSelection(_ref){var onPress=_ref.onPress;return _react["default"].createElement(_reactNative.TouchableOpacity,{activeOpacity:0.6,style:styles.container,onPress:onPress,__self:_this,__source:{fileName:_jsxFileName,lineNumber:9,columnNumber:5}},_react["default"].createElement(_Feather["default"],{name:"image",size:40,__self:_this,__source:{fileName:_jsxFileName,lineNumber:13,columnNumber:7}}),_react["default"].createElement(_reactNative.Text,{style:styles.label,__self:_this,__source:{fileName:_jsxFileName,lineNumber:14,columnNumber:7}},"Select the image"));};var styles=_reactNative.StyleSheet.create({container:{backgroundColor:_constant.SOFT_GREEN_COLOR,flex:0.4,borderRadius:30,alignItems:'center',justifyContent:'center',shadowColor:'#000',shadowOffset:{width:3,height:4},shadowOpacity:0.25,shadowRadius:4,elevation:5},label:{fontFamily:'NanumGothic'}});var _default=ImageSelection;exports["default"]=_default;