import { getYear, getMonth } from 'date-fns';

export function monthOf5YearFormat() {
  const date = new Date();
  const currentYear = getYear(date);
  const currentMonth = getMonth(date) + 1;
  const currentDates = [];
  const dates = [];

  for (let i = currentMonth; i >= 1; i--) {
    const dateFormat = `${currentYear}년 ${i}월`;
    currentDates.push(dateFormat);
  }
  dates.push(...currentDates);

  for (let i = currentYear - 1; i >= currentYear - 5; i--) {
    for (let j = 12; j >= 1; j--) {
      const dateFormat = `${i}년 ${j}월`;
      dates.push(dateFormat);
    }
  }

  for (let i = currentMonth - 1; i >= 1; i--) {
    dates.pop();
  }

  return dates;
}
