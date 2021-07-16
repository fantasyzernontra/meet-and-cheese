import axios from 'axios';
import API_CONFIG from '../configuration/axios';

import { MMKV } from 'react-native-mmkv';

const instance = axios.create({ baseURL: API_CONFIG.API_BASE_ENDPOINT });

instance.interceptors.request.use(config => {
  if (MMKV.getString('token')) {
    config.headers.common['Authorization'] =
      'Bearer ' + MMKV.getString('token');
  }

  return config;
});

export default instance;
