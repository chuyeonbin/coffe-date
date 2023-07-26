import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export interface UserType {
  email: string;
  nickname: string;
}

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const userState = atom<UserType | null>({
  key: 'user',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
