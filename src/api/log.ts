import { authHttpClient } from '../http';
import { LogType } from '../store/logs';

export function getLogsAPI(date: string) {
  return authHttpClient.get<{ logs: LogType[] }>(`/log/${date}`);
}

export function addLogAPI(payload: { price: number; cafe: string; coffee: string; date: string }) {
  return authHttpClient.post('/log', payload);
}

export function editLogAPI(payload: {
  id: number;
  price: number;
  cafe: string;
  coffee: string;
  date: string;
}) {
  return authHttpClient.patch('log', payload);
}

export function deleteLogAPI(id: number) {
  return authHttpClient.delete<{ id: number }>(`/log/${id}`);
}
