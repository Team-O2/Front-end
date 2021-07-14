import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

interface IUserStatusState {
  token: string;
  userType: number;
  totalGeneration: number;
  registGeneration: number | null;
  progressGeneration: number;
}

interface IUserState {
  interest: string[];
  marpolicy: boolean;
  img: string;
  _id: string;
  email: string;
  nickname: string;
  gender: number;
}

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
