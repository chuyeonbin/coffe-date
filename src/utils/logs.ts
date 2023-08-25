import { isSameDay, parseISO } from 'date-fns';
import { LogType } from '../store/logs';

export function dayByPriceSum(logs: LogType[], date: Date) {
  let sum = 0;
  logs.forEach((log) => {
    if (isSameDay(parseISO(log.date), date)) {
      sum += log.price;
    }
  });

  return sum === 0 ? null : `-${sum.toLocaleString()}`;
}

export function dayByCoffeeSum(logs: LogType[], date: Date) {
  let sum = '';
  logs.forEach((log) => {
    if (isSameDay(parseISO(log.date), date)) {
      sum += '☕️';
    }
  });

  return sum === '' ? null : sum;
}
