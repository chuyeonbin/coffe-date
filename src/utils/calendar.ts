import { getMonth, getYear, subMonths } from 'date-fns';

export function monthOf5YearDates() {
  const date = new Date();
  const prev5Year = getYear(date) - 5;
  const year = getYear(date);
  const dates = [];

  let currentDate = date;

  for (let i = 0; i <= getMonth(date); i++) {
    currentDate = subMonths(date, i);
    dates.push(currentDate);
  }

  for (let i = year - 1; i >= prev5Year; i--) {
    for (let j = 12; j >= 1; j--) {
      currentDate = subMonths(currentDate, 1);
      dates.push(currentDate);
    }
  }

  for (let i = 0; i < getMonth(date); i++) {
    dates.pop();
  }

  return dates;
}
