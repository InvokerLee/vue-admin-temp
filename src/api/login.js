import http from '@/utils/http.js';

export function login(params) {
  return http.post('/login', params);
}

export function logout(params) {
  return http.post('/logout', params);
}

export function getConsts(params) {
  return http.get('/constants', params);
}
