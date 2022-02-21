import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import env from '../config/env';

const headers = {};

console.log(env.SERVER_URL);

const instance = axios.create({
  baseURL: env.SERVER_URL,
  headers,
  responseType: 'json',
  withCredentials: true,
});

instance.interceptors.request.use(
  async config => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (err) {
      console.log('wtf 1');
      console.error(err);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
