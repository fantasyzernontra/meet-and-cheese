import API from '../api';
import { MMKV } from 'react-native-mmkv';

export default {
  login: async (identifier, password) => {
    const res = await API.post('auth/local', { identifier, password });
    if (res) {
      MMKV.set('token', res.data.jwt);
      MMKV.set('email', res.data.user.email);
      MMKV.set('user_type', res.data.user.user_type.type.toString());
      MMKV.set('username', res.data.user.username);
      MMKV.set('name', res.data.user.name);
      res.data.avatar ? MMKV.set('avatar', res.data.user.avatar.url) : null;
    }
  },
  logout: () => {
    MMKV.delete('token');
    MMKV.delete('email');
    MMKV.delete('user_type');
    MMKV.delete('name');
    MMKV.delete('username');
    MMKV.delete('avatar');
  },
  signup: async info => {
    const preprocessed_data = info;
    preprocessed_data.name = info.firstname + info.lastname;
    const res = await API.post('/auth/local/register', preprocessed_data);
    if (res) return res;
  },
  signup_photographer: async info => {
    const preprocessed_data = info;
    preprocessed_data.name = info.firstname + info.lastname;
    const res = await API.post('/auth/local/register', preprocessed_data);
    if (res) return res;
  },
  upload_profile_pic: async pic => {
    const form = new FormData();
    
  },
};
