import { httpClient } from '../http';

export function sendEmailAPI(payload: { email: string }) {
  return httpClient.post('/auth/sendemail', payload);
}

export function checkCodeAPI(code: string | null) {
  return httpClient.get<{ checked: boolean; email: string }>(`/auth/code/${code}`);
}

export function emailLoginAPI(code: string | null) {
  return httpClient.get<{
    user: { nickname: string; email: string };
    access_token: string;
  }>(`auth/code/${code}`);
}

export function duplicationCheckAPI(payload: { nickname: string }) {
  return httpClient.post<{ checked: boolean }>('/auth/duplicate', payload);
}

export function signUpAPI(payload: { email: string; nickname: string }) {
  return httpClient.post<{
    user: { nickname: string; email: string };
    access_token: string;
  }>('auth/register', payload);
}
