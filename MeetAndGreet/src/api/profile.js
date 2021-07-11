import API from '../api';
import { MMKV } from 'react-native-mmkv';

export default {
  login: async (identifier, password) => {
    const res = await API.post('auth/local', { identifier, password });
    if (res) {
      MMKV.set('token', res.data.jwt);
      MMKV.set('email', res.data.user.email);
      MMKV.set('user_type', res.data.user.user_type.type);
    }
  },
};
