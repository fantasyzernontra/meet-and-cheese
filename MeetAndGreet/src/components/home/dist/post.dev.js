"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _blurUtilitiesBar=_interopRequireDefault(require("./blur-utilities-bar"));var _publicApi=_interopRequireDefault(require("../../data/public-api"));var _path=_interopRequireDefault(require("../../api/path"));var _this=void 0,_jsxFileName="/Users/nonnontra/Desktop/Programming/On-Working/meet-and-cheese/MeetAndGreet/src/components/home/post.js";var Post=function Post(_ref){var picture=_ref.picture,name=_ref.name,photographer_id=_ref.photographer_id,captions=_ref.captions,navigation=_ref.navigation;var _useState=(0,_react.useState)({}),_useState2=(0,_slicedToArray2["default"])(_useState,2),photographer=_useState2[0],setPhotographer=_useState2[1];var getPhotographer=function getPhotographer(){var res;return _regenerator["default"].async(function getPhotographer$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator["default"].awrap(_path["default"].photographer.getOnePhotographer(photographer_id));case 2:res=_context.sent;if(res)setPhotographer(res.data);case 4:case"end":return _context.stop();}}});};(0,_react.useEffect)(function(){return getPhotographer();},[]);return _react["default"].createElement(_reactNative.View,{style:styles.container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:5}},_react["default"].createElement(_blurUtilitiesBar["default"],{navigation:navigation,photographer_account_id:photographer.id,__self:_this,__source:{fileName:_jsxFileName,lineNumber:27,columnNumber:7}}),_react["default"].createElement(_reactNative.ImageBackground,{style:styles.imageBackgroundContainer,source:{uri:_publicApi["default"]+picture.url.replace('gs://','')},resizeMode:"cover",imageStyle:{opacity:0.6},__self:_this,__source:{fileName:_jsxFileName,lineNumber:31,columnNumber:7}},_react["default"].createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',marginVertical:3},__self:_this,__source:{fileName:_jsxFileName,lineNumber:38,columnNumber:9}},photographer.avatar&&_react["default"].createElement(_reactNative.Image,{source:{uri:_publicApi["default"]+photographer.avatar.url.replace('gs://','')},resizeMode:"cover",style:{width:35,height:35,borderRadius:25},__self:_this,__source:{fileName:_jsxFileName,lineNumber:45,columnNumber:13}}),_react["default"].createElement(_reactNative.Text,{style:styles.name,__self:_this,__source:{fileName:_jsxFileName,lineNumber:53,columnNumber:11}},name)),_react["default"].createElement(_reactNative.View,{style:{marginVertical:3},__self:_this,__source:{fileName:_jsxFileName,lineNumber:56,columnNumber:9}},_react["default"].createElement(_reactNative.Text,{style:styles.description,numberOfLines:2,__self:_this,__source:{fileName:_jsxFileName,lineNumber:57,columnNumber:11}},captions))));};var styles=_reactNative.StyleSheet.create({container:{width:_reactNative.Dimensions.get('screen').width*0.85,flex:1,height:500,shadowColor:'#000',shadowOffset:{width:3,height:4},shadowOpacity:4,shadowRadius:4,elevation:5,alignSelf:'center',margin:20,borderRadius:30,flexDirection:'column',overflow:'hidden'},name:{fontSize:20,fontWeight:'700',fontFamily:'NanumGothic',color:'#fff',elevation:10,marginHorizontal:10},imageBackgroundContainer:{flex:1,padding:30,justifyContent:'flex-end',backgroundColor:'#000'},description:{color:'#fff',fontFamily:'NanumGothic'},hashTag:{color:'lime',marginRight:2},toolContainer:{position:'absolute',height:'70%',width:'27%',alignSelf:'center',borderRadius:20,top:40,right:-14,zIndex:1,padding:20,flexDirection:'column'}});var _default=Post;exports["default"]=_default;