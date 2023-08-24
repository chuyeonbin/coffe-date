import { atom } from 'recoil';

export interface LogType {
  id: number;
  date: string;
  cafe: string;
  coffee: string;
  price: number;
  create_at: string;
  updated_at: string;
}

export const logsState = atom<LogType[]>({
  key: 'logs',
  default: [],
});
