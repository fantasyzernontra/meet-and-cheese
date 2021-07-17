"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _objectDestructuringEmpty2=_interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _Ionicons=_interopRequireDefault(require("react-native-vector-icons/Ionicons"));var _constant=require("../../constant");var _this=void 0,_jsxFileName="/Users/nonnontra/Desktop/Programming/On-Working/meet-and-cheese/MeetAndGreet/src/components/home/post-creating-button.js";var PostCreatingButton=function PostCreatingButton(_ref){(0,_objectDestructuringEmpty2["default"])(_ref);return _react["default"].createElement(_reactNative.TouchableOpacity,{style:styles.container,activeOpacity:0.8,__self:_this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:5}},_react["default"].createElement(_Ionicons["default"],{name:"create-outline",size:35,color:_constant.WHITE_TEXT_COLOR,style:{alignItems:'center',alignSelf:'center'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:7}}),_react["default"].createElement(_reactNative.Text,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:7}},"Create a post"));};var styles=_reactNative.StyleSheet.create({container:{position:'absolute',width:150,height:65,flexDirection:'row',alignItems:'center',justifyContent:'center',right:15,bottom:130,backgroundColor:_constant.SECONDARY_COLOR,borderRadius:35,shadowColor:'grey',shadowOffset:{width:2,height:3},shadowOpacity:0.4,shadowRadius:2,elevation:10}});var _default=PostCreatingButton;exports["default"]=_default;