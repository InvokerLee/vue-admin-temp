import axios from 'axios';
import { Message } from 'element-ui';
import { getToken, setToken } from '@/utils/cookie';
import store from '@/store';

const AUTH_KEY = 'Bearer';
const INVALID_TOKENS = [100001, 100002, 50012, 50014];

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // 跨域允许携带cookie
});

// 请求拦截
http.interceptors.request.use((config) => {
  if (getToken()) {
    config.headers.Authorization = AUTH_KEY + getToken();
  }
  return config;
}, err => Promise.reject(err));

// 响应拦截
http.interceptors.response.use((response) => {
  if (response.config.url.endsWith('/api/login') && response.headers.authorization) {
    const token = response.headers.authorization.split(' ')[1];
    setToken(token);
  }
  // blob
  if (response.config.responseType === 'blob') {
    return response;
  }
  // 成功
  if (response.data.code === 200) {
    return Promise.resolve(response.data);
  }
  if (INVALID_TOKENS.includes(response.data.code)) {
    store.dispatch('user/resetAll');
    location.reload();
    return;
  }

  if (response.data.code === 100400) {
    // 错误
    Message.error({
      showClose: true,
      message: `${response.data.data} 无权限`,
    });
    return Promise.reject(response);
  }

  // 错误
  Message.error({
    showClose: true,
    message: response.data.message || `Error:${response.request.url}`,
  });
  return Promise.reject(response);
}, (error) => {
  Message.error({
    showClose: true,
    message: error.message,
  });
  return Promise.reject(error);
});

export default http;
