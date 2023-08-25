import { atom, selector } from 'recoil';

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

export const groupedByDateLogsState = selector({
  key: 'groupedByDateLogs',
  get: ({ get }) => {
    const logs = get(logsState);

    const groupedByDateLogs: { [key: string]: LogType[] } = {};

    logs.forEach((log) => {
      const slicedDate = log.date.slice(0, 10);
      if (!groupedByDateLogs[slicedDate]) {
        groupedByDateLogs[slicedDate] = [];
      }
      groupedByDateLogs[slicedDate].push(log);
    });

    return groupedByDateLogs;
  },
});
