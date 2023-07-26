import { authHttpClient } from '../http';

export function getUserAPI() {
  console.log('test');
  return authHttpClient.get<{ email: string; nickname: string } | null>('/user');
}
