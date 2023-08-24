import { isSameDay, parseISO } from 'date-fns';
import { LogType } from '../store/logs';

export function logsByPriceSum(logs: LogType[], date: Date) {
  let sum = 0;
  logs.forEach((log) => {
    if (isSameDay(parseISO(log.date), date)) {
      console.log(log);
      sum += log.price;
    }
  });

  return sum === 0 ? null : sum;
}
