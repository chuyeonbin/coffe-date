import httpClient from '../http';

export function sendEmailAPI(payload: { email: string }) {
  return httpClient.post('/auth/sendemail', payload);
}

export function checkCodeAPI(code: string | null) {
  return httpClient.get<{ checked: boolean }>(`/auth/code/${code}`);
}

export function duplicationCheckAPI(nickname: string) {
  return httpClient.get<{ checked: boolean }>(`/auth/duplicate/${nickname}`);
}
