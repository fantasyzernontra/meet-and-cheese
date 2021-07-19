"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNativeSafeAreaContext=require("react-native-safe-area-context");var _horizontalLine=_interopRequireDefault(require("../../components/hiring/horizontal-line"));var _AntDesign=_interopRequireDefault(require("react-native-vector-icons/AntDesign"));var _path=_interopRequireDefault(require("../../api/path"));var _constant=require("../../constant");var _this=void 0,_jsxFileName="/Users/nonnontra/Desktop/Programming/On-Working/meet-and-cheese/MeetAndGreet/src/screens/hiring/hiring-details.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var HiringDetails=function HiringDetails(_ref){var route=_ref.route,navigation=_ref.navigation;var insets=(0,_reactNativeSafeAreaContext.useSafeAreaInsets)();var hiring_id=route.params.hiring_id;var _useState=(0,_react.useState)({}),_useState2=(0,_slicedToArray2["default"])(_useState,2),hiring_detail=_useState2[0],setHiringDetail=_useState2[1];var _useState3=(0,_react.useState)(true),_useState4=(0,_slicedToArray2["default"])(_useState3,2),loading=_useState4[0],setLoading=_useState4[1];var fetchHiringDetail=function fetchHiringDetail(){var res;return _regenerator["default"].async(function fetchHiringDetail$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator["default"].awrap(_path["default"].hiring_contracts.getOneHiring(hiring_id));case 2:res=_context.sent;if(res)setHiringDetail(res.data);setLoading(false);case 5:case"end":return _context.stop();}}});};(0,_react.useEffect)(function(){return fetchHiringDetail();},[]);if(loading)return _react["default"].createElement(_reactNative.View,{style:{alignItems:'center',justifyContent:'center',flex:1},__self:_this,__source:{fileName:_jsxFileName,lineNumber:38,columnNumber:7}},_react["default"].createElement(_reactNative.ActivityIndicator,{color:_constant.PRIMARY_COLOR,size:"large",__self:_this,__source:{fileName:_jsxFileName,lineNumber:39,columnNumber:9}}));return _react["default"].createElement(_reactNativeSafeAreaContext.SafeAreaView,{style:_objectSpread({paddingTop:insets.top,paddingLeft:insets.left,paddingRight:insets.right,paddingBottom:insets.bottom},styles.safeAreaContainer),__self:_this,__source:{fileName:_jsxFileName,lineNumber:44,columnNumber:5}},_react["default"].createElement(_reactNative.View,{style:styles.container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:52,columnNumber:7}},_react["default"].createElement(_reactNative.View,{style:styles.header,__self:_this,__source:{fileName:_jsxFileName,lineNumber:53,columnNumber:9}},_react["default"].createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){return navigation.goBack();},style:{bottom:40,left:20,position:'absolute'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:54,columnNumber:11}},_react["default"].createElement(_AntDesign["default"],{name:"left",color:"#000",size:25,__self:_this,__source:{fileName:_jsxFileName,lineNumber:61,columnNumber:13}})),_react["default"].createElement(_reactNative.Text,{style:styles.title,__self:_this,__source:{fileName:_jsxFileName,lineNumber:63,columnNumber:11}},"Hiring Details")),_react["default"].createElement(_reactNative.View,{style:styles.hirer_container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:65,columnNumber:9}},_react["default"].createElement(_reactNative.Text,{style:styles.hirer_title,__self:_this,__source:{fileName:_jsxFileName,lineNumber:66,columnNumber:11}},"Hirer Info."),_react["default"].createElement(_reactNative.Text,{style:styles.hirer_name,__self:_this,__source:{fileName:_jsxFileName,lineNumber:67,columnNumber:11}},"Name: ",hiring_detail.hirer.name),_react["default"].createElement(_reactNative.Text,{style:styles.hirer_email,__self:_this,__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:11}},"Email: ",hiring_detail.hirer.email),_react["default"].createElement(_horizontalLine["default"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:73,columnNumber:11}})),_react["default"].createElement(_reactNative.View,{style:styles.work_description_container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:75,columnNumber:9}},_react["default"].createElement(_reactNative.Text,{style:styles.work_description_title,__self:_this,__source:{fileName:_jsxFileName,lineNumber:76,columnNumber:11}},"Work Description"),_react["default"].createElement(_reactNative.Text,{style:styles.description,__self:_this,__source:{fileName:_jsxFileName,lineNumber:77,columnNumber:11}},hiring_detail.work_description),_react["default"].createElement(_horizontalLine["default"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:80,columnNumber:11}})),_react["default"].createElement(_reactNative.View,{style:styles.location_container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:82,columnNumber:9}},_react["default"].createElement(_reactNative.Text,{style:styles.location_title,__self:_this,__source:{fileName:_jsxFileName,lineNumber:83,columnNumber:11}},"Working Location"),_react["default"].createElement(_reactNative.Text,{style:styles.location,__self:_this,__source:{fileName:_jsxFileName,lineNumber:84,columnNumber:11}},hiring_detail.location),_react["default"].createElement(_horizontalLine["default"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:85,columnNumber:11}})),_react["default"].createElement(_reactNative.View,{style:styles.working_time_container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:87,columnNumber:9}},_react["default"].createElement(_reactNative.Text,{style:styles.working_time_title,__self:_this,__source:{fileName:_jsxFileName,lineNumber:88,columnNumber:11}},"Working Time"),_react["default"].createElement(_reactNative.View,{style:styles.start_working_time_container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:89,columnNumber:11}},_react["default"].createElement(_reactNative.Text,{style:styles.start_working_date,__self:_this,__source:{fileName:_jsxFileName,lineNumber:90,columnNumber:13}},"Start Working Date:"),_react["default"].createElement(_reactNative.Text,{style:styles.start_working_time,__self:_this,__source:{fileName:_jsxFileName,lineNumber:91,columnNumber:13}},new Date(hiring_detail.start_date).toDateString(),",",new Date(hiring_detail.start_date).toLocaleTimeString())),_react["default"].createElement(_reactNative.View,{style:styles.end_working_time_container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:96,columnNumber:11}},_react["default"].createElement(_reactNative.Text,{style:styles.end_working_date,__self:_this,__source:{fileName:_jsxFileName,lineNumber:97,columnNumber:13}},"End Working Date: "),_react["default"].createElement(_reactNative.Text,{style:styles.end_working_time,__self:_this,__source:{fileName:_jsxFileName,lineNumber:98,columnNumber:13}},new Date(hiring_detail.end_date).toDateString(),",",new Date(hiring_detail.end_date).toLocaleTimeString())),_react["default"].createElement(_horizontalLine["default"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:103,columnNumber:11}}))));};var styles=_reactNative.StyleSheet.create({safeAreaContainer:{flex:1,alignItems:'center',backgroundColor:'#fff'},container:{flex:1,width:'100%'},header:{flexDirection:'row',alignItems:'center',justifyContent:'center'},title:{fontFamily:'NanumGothic',fontSize:36,fontWeight:'500',color:_constant.SECONDARY_COLOR,left:5,marginBottom:35,textAlign:'center'},hirer_container:{paddingHorizontal:30},hirer_title:{fontFamily:'NanumGothic',fontSize:17},hirer_name:{fontFamily:'NanumGothic',fontSize:14,marginTop:10,left:20},hirer_email:{fontFamily:'NanumGothic',fontSize:14,marginTop:5,left:20},location_container:{paddingHorizontal:30},location_title:{fontFamily:'NanumGothic',fontSize:17},location:{fontFamily:'NanumGothic',fontSize:14,marginTop:10,left:20},working_time_container:{paddingHorizontal:30},working_time_title:{fontFamily:'NanumGothic',fontSize:17},start_working_time_container:{marginTop:10,left:20},start_working_date:{fontFamily:'NanumGothic',fontSize:14},start_working_time:{fontFamily:'NanumGothic',fontSize:14,left:10},end_working_time_container:{marginTop:10,left:20},end_working_date:{fontFamily:'NanumGothic',fontSize:14},end_working_time:{fontFamily:'NanumGothic',fontSize:14,left:10},work_description_container:{paddingHorizontal:30},work_description_title:{fontFamily:'NanumGothic',fontSize:17},description:{fontFamily:'NanumGothic',fontSize:14,left:20,marginTop:10}});var _default=HiringDetails;exports["default"]=_default;