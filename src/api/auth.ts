import httpClient from '../http';

export async function sendEmailAPI(payload: { email: string }) {
  return httpClient.post('/auth/sendemail', payload);
}

export default function checkCodeAPI(code: string) {
  return httpClient.get(`/auth/code/${code}`);
}
