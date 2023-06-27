import { atom } from 'recoil';

export const dateState = atom<Date | number>({
  key: 'date',
  default: new Date(),
});
