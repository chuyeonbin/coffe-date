import { atom } from 'recoil';

export interface UserType {
  email: string;
  nickname: string;
  thumbnail: string;
}

export const userState = atom<UserType | null>({
  key: 'user',
  default: {
    email: 'cndusqls98@gmail.com',
    nickname: '끼야아아알',
    thumbnail: '☕️',
  },
});
