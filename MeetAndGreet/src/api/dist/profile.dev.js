"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _api=_interopRequireDefault(require("../api"));var _reactNativeMmkv=require("react-native-mmkv");var _default={login:function login(identifier,password){var res;return _regenerator["default"].async(function login$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator["default"].awrap(_api["default"].post('auth/local',{identifier:identifier,password:password}));case 2:res=_context.sent;if(res){_reactNativeMmkv.MMKV.set('token',res.data.jwt);_reactNativeMmkv.MMKV.set('email',res.data.user.email);_reactNativeMmkv.MMKV.set('user_type',res.data.user.user_type.type.toString());_reactNativeMmkv.MMKV.set('username',res.data.user.username);_reactNativeMmkv.MMKV.set('name',res.data.user.name);_reactNativeMmkv.MMKV.set('user_id',res.data.user.id);res.data.user.avatar?_reactNativeMmkv.MMKV.set('avatar',res.data.user.avatar.url):null;}case 4:case"end":return _context.stop();}}});},logout:function logout(){_reactNativeMmkv.MMKV["delete"]('token');_reactNativeMmkv.MMKV["delete"]('email');_reactNativeMmkv.MMKV["delete"]('user_type');_reactNativeMmkv.MMKV["delete"]('name');_reactNativeMmkv.MMKV["delete"]('username');_reactNativeMmkv.MMKV["delete"]('avatar');_reactNativeMmkv.MMKV["delete"]('user_id');},signup:function signup(info){var preprocessed_data,res;return _regenerator["default"].async(function signup$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:preprocessed_data=info;preprocessed_data.name=info.firstname;_context2.next=4;return _regenerator["default"].awrap(_api["default"].post('/auth/local/register',preprocessed_data));case 4:res=_context2.sent;if(!res){_context2.next=7;break;}return _context2.abrupt("return",res);case 7:case"end":return _context2.stop();}}});},signup_photographer:function signup_photographer(info){var preprocessed_data,res;return _regenerator["default"].async(function signup_photographer$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:preprocessed_data=info;preprocessed_data.name=info.firstname;_context3.next=4;return _regenerator["default"].awrap(_api["default"].post('/auth/local/register',preprocessed_data));case 4:res=_context3.sent;if(!res){_context3.next=7;break;}return _context3.abrupt("return",res);case 7:case"end":return _context3.stop();}}});},upload_profile_pic:function upload_profile_pic(pic,account_id){var form,picRes;return _regenerator["default"].async(function upload_profile_pic$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:form=new FormData();form.append("files",{uri:pic.uri.replace('file://',''),type:pic.type,name:pic.fileName},pic.fileName);console.log(pic);_context4.next=5;return _regenerator["default"].awrap(_api["default"].post('/upload',form,{headers:{'Content-Type':'multipart/form-data'}}));case 5:picRes=_context4.sent;console.log('hi');console.log(picRes);_context4.next=10;return _regenerator["default"].awrap(_api["default"].put("/users/".concat(account_id),{avatar:picRes.data[0]._id}).then(function(res){return res;})["catch"](function(err){return console.log(err.message);}));case 10:return _context4.abrupt("return",_context4.sent);case 11:case"end":return _context4.stop();}}});}};exports["default"]=_default;