import { atom } from 'recoil';

export const currentDateState = atom<Date | number>({
  key: 'currentDate',
  default: new Date(),
});

export const selectedDateState = atom<Date | number>({
  key: 'selectedDate',
  default: new Date(),
});
