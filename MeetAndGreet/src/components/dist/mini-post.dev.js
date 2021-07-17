"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _publicApi=_interopRequireDefault(require("../data/public-api"));var _this=void 0,_jsxFileName="/Users/nonnontra/Desktop/Programming/On-Working/meet-and-cheese/MeetAndGreet/src/components/mini-post.js";var Label=function Label(_ref){var like=_ref.like;return _react["default"].createElement(_reactNative.View,{style:styles.labelContainer,__self:_this,__source:{fileName:_jsxFileName,lineNumber:15,columnNumber:5}},_react["default"].createElement(_reactNative.Text,{style:styles.label,__self:_this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:7}},like));};var MiniPost=function MiniPost(_ref2){var img=_ref2.img,like=_ref2.like,navigation=_ref2.navigation,isSelf=_ref2.isSelf,post_id=_ref2.post_id;return _react["default"].createElement(_reactNative.TouchableOpacity,{style:styles.container,activeOpacity:0.8,onPress:function onPress(){if(isSelf)navigation.navigate('ProfilePost',{post_id:post_id});else navigation.navigate('Post',{post_id:post_id});},__self:_this,__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:5}},_react["default"].createElement(_reactNative.ImageBackground,{source:{uri:_publicApi["default"]+img.replace('gs://','')},style:styles.imageBackground,imageStyle:styles.imageBackgroundStyle,__self:_this,__source:{fileName:_jsxFileName,lineNumber:30,columnNumber:7}}));};var styles=_reactNative.StyleSheet.create({container:{width:_reactNative.Dimensions.get('screen').width*0.31,height:180,alignItems:'center',shadowColor:'#000',shadowOffset:{width:3,height:4},shadowOpacity:0.25,shadowRadius:4,elevation:5,margin:4,borderRadius:30},imageBackground:{width:'100%',height:'100%',alignItems:'center',justifyContent:'flex-end'},imageBackgroundStyle:{borderRadius:30},labelContainer:{width:80,height:30,backgroundColor:'#fff',borderRadius:15,alignItems:'center',justifyContent:'center',bottom:15},label:{width:'100%',textAlign:'center',fontFamily:'NanumGothic',fontWeight:'600'}});var _default=MiniPost;exports["default"]=_default;