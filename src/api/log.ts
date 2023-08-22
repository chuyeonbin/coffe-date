import { authHttpClient } from '../http';

export function addLogAPI(payload: { price: number; cafe: string; coffee: string; date: string }) {
  return authHttpClient.post('/log', payload);
}
