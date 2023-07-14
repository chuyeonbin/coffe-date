import httpClient from '../http';

export function sendEmailAPI(payload: { email: string }) {
  return httpClient.post('/auth/sendemail', payload);
}

export function checkCodeAPI(code: string | null) {
  return httpClient.get<{ checked: boolean }>(`/auth/code/${code}`);
}

export function duplicationCheckAPI(payload: { nickname: string }) {
  return httpClient.post<{ checked: boolean }>('/auth/duplicate', payload);
}
