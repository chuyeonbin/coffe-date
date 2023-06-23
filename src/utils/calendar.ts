import { getYear, getMonth } from 'date-fns';

export function monthOfYearFormat(dates: Date[] | number[]) {
  const dateFormats = dates.map((date) => {
    const year = getYear(date);
    const month = getMonth(date);

    return `${year}년 ${month}월`;
  });

  return dateFormats;
}
