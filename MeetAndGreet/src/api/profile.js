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
      MMKV.set('user_id', res.data.user.id);
      res.data.user.avatar
        ? MMKV.set('avatar', res.data.user.avatar.url)
        : null;
    }
  },
  logout: () => {
    MMKV.delete('token');
    MMKV.delete('email');
    MMKV.delete('user_type');
    MMKV.delete('name');
    MMKV.delete('username');
    MMKV.delete('avatar');
    MMKV.delete('user_id');
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
  upload_profile_pic: async (pic, account_id) => {
    const form = new FormData();
    form.append(
      `files`,
      {
        uri: pic.uri.replace('file://', ''),
        type: pic.type,
        name: pic.fileName,
      },
      pic.fileName,
    );

    console.log(pic);

    const picRes = await API.post('/upload', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('hi')
    console.log(picRes);

    return await API.put(`/users/${account_id}`, { avatar: picRes.data[0]._id })
      .then(res => res)
      .catch(err => console.log(err.message));
  },
};
