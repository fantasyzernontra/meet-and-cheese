"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _reactNativeSafeAreaContext=require("react-native-safe-area-context");require("../../constant");var _this=void 0,_jsxFileName="/Users/nonnontra/Desktop/Programming/On-Working/meet-and-cheese/MeetAndGreet/src/screens/hiring/hiring-details.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var HiringDetails=function HiringDetails(_ref){var route=_ref.route,navigation=_ref.navigation;var insets=(0,_reactNativeSafeAreaContext.useSafeAreaInsets)();return _react["default"].createElement(_reactNativeSafeAreaContext.SafeAreaView,{style:_objectSpread({paddingTop:insets.top,paddingLeft:insets.left,paddingRight:insets.right,paddingBottom:insets.bottom},styles.safeAreaContainer),__self:_this,__source:{fileName:_jsxFileName,lineNumber:15,columnNumber:5}});};var styles=_reactNative.StyleSheet.create({safeAreaContainer:{flex:1,alignItems:'center',backgroundColor:'#fff'},container:{flex:1,width:'100%'}});var _default=HiringDetails;exports["default"]=_default;