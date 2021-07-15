"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _blur=require("@react-native-community/blur");var _AntDesign=_interopRequireDefault(require("react-native-vector-icons/AntDesign"));var _MaterialCommunityIcons=_interopRequireDefault(require("react-native-vector-icons/MaterialCommunityIcons"));var _reactNativeMmkv=require("react-native-mmkv");var _blurUtilitiesTools=_interopRequireDefault(require("../../data/blur-utilities-tools"));var _this=void 0,_jsxFileName="/Users/nonnontra/Desktop/Programming/On-Working/meet-and-cheese/MeetAndGreet/src/components/home/blur-utilities-bar.js";var BlurUtilitiesBar=function BlurUtilitiesBar(_ref){var photographer_account_id=_ref.photographer_account_id,navigation=_ref.navigation;var user_type=_reactNativeMmkv.MMKV.getString('user_type');return _react["default"].createElement(_blur.BlurView,{blurRadius:1,blurType:"light",style:styles.toolContainer,__self:_this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:5}},_blurUtilitiesTools["default"].map(function(item,index){if(item.icon_name==='team'&&user_type==='2')return;else return _react["default"].createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){if(item.icon_name==='team')navigation.navigate('Hiring',{screen:'Hiring',params:{photographer_account_id:photographer_account_id}});else if(item.icon_name==='account')navigation.navigate('Account',{screen:'Account',params:{photographer_account_id:photographer_account_id}});},key:index,__self:_this,__source:{fileName:_jsxFileName,lineNumber:21,columnNumber:13}},_react["default"].createElement(_reactNative.View,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:35,columnNumber:15}},_react["default"].createElement(_blur.BlurView,{blurRadius:1,blurType:"light",style:styles.button_container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:36,columnNumber:17}},item.icon_provider==='antdesign'&&_react["default"].createElement(_AntDesign["default"],{name:item.icon_name,size:23,color:"#fff",__self:_this,__source:{fileName:_jsxFileName,lineNumber:41,columnNumber:21}}),item.icon_provider==='material_community'&&_react["default"].createElement(_MaterialCommunityIcons["default"],{name:item.icon_name,size:23,color:"#fff",__self:_this,__source:{fileName:_jsxFileName,lineNumber:48,columnNumber:21}})),item.icon_name==='team'&&_react["default"].createElement(_reactNative.Text,{style:styles.text,__self:_this,__source:{fileName:_jsxFileName,lineNumber:56,columnNumber:19}},"Hiring"),item.icon_name==='account'&&_react["default"].createElement(_reactNative.Text,{style:styles.text,__self:_this,__source:{fileName:_jsxFileName,lineNumber:59,columnNumber:19}},"View Profile")));}));};var styles=_reactNative.StyleSheet.create({toolContainer:{position:'absolute',height:'40%',width:'30%',alignSelf:'center',borderRadius:20,top:40,right:-20,zIndex:1,padding:20,flexDirection:'column',alignItems:'flex-start',justifyContent:'center'},button_container:{padding:8,borderRadius:20,alignSelf:'flex-start',marginVertical:10,width:40,height:40,alignItems:'center',justifyContent:'center'},text:{alignItems:'center',textAlign:'center',color:'#fff',fontFamily:'NanumGothic',fontWeight:'600',fontSize:12}});var _default=BlurUtilitiesBar;exports["default"]=_default;