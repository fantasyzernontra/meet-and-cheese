"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _Fontisto=_interopRequireDefault(require("react-native-vector-icons/Fontisto"));var _publicApi=_interopRequireDefault(require("../../data/public-api"));var _model=_interopRequireDefault(require("../../assets/images/model.jpeg"));var _this=void 0,_jsxFileName="/Users/nonnontra/Desktop/Programming/On-Working/meet-and-cheese/MeetAndGreet/src/components/profile/post-image.js";var PostImage=function PostImage(_ref){var img=_ref.img,navigation=_ref.navigation;return _react["default"].createElement(_reactNative.View,{style:styles.container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:5}},_react["default"].createElement(_reactNative.ImageBackground,{source:{uri:_publicApi["default"]+img},style:styles.image,imageStyle:styles.imageStyle,resizeMode:"cover",__self:_this,__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:7}},_react["default"].createElement(_reactNative.TouchableOpacity,{style:{width:'20%',height:'15%'},onPress:function onPress(){return navigation.goBack();},__self:_this,__source:{fileName:_jsxFileName,lineNumber:24,columnNumber:9}},_react["default"].createElement(_Fontisto["default"],{name:"angle-left",color:"#fff",size:20,style:styles.iconStyle,__self:_this,__source:{fileName:_jsxFileName,lineNumber:30,columnNumber:11}}))));};var styles=_reactNative.StyleSheet.create({container:{width:_reactNative.Dimensions.get('screen').width,height:_reactNative.Dimensions.get('screen').height*0.55,borderBottomLeftRadius:50,borderBottomRightRadius:50,shadowColor:'#000',shadowOffset:{width:10,height:15},shadowOpacity:0.25,shadowRadius:7,elevation:5,margin:2,borderRadius:20},image:{width:'100%',height:'100%'},imageStyle:{borderBottomLeftRadius:50,borderBottomRightRadius:50},iconStyle:{left:25,top:25}});var _default=PostImage;exports["default"]=_default;