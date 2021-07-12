import { atom } from 'recoil';
interface IUserStatusState {
  token: string;
  userType: number;
  totalGeneration: number;
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
});

export const userStatusState = atom<IUserStatusState | null>({
  key: 'userStatus/atom',
  default: null,
});
