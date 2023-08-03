import { authHttpClient } from '../http';

export function getUserAPI() {
  return authHttpClient.get<{ email: string; nickname: string } | null>('/user');
}

export function logOutAPI() {
  return authHttpClient.post('/user/logout');
}
