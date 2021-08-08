import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { IUserState, IUserStatusState } from 'types/global.type';

const { persistAtom } = recoilPersist();

export const userState = atom<IUserState | null>({
  key: 'user/atom',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const userStatusState = atom<IUserStatusState | null>({
  key: 'userStatus/atom',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
