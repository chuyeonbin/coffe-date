import { atom } from 'recoil';

export interface DateType {
  currentMonth: Date | number;
}

export const dateState = atom<DateType>({
  key: 'date',
  default: {
    currentMonth: new Date(),
  },
});
