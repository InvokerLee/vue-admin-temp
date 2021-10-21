import http from '@/utils/http.js';

export function getUserInfo(params) {
  return http.get('/user/userMenu', { params });
}

export function addUser(data) {
  return http.post('/user/add', data);
}

