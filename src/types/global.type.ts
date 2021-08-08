export interface IUserStatusState {
  token: string;
  userType: number;
  totalGeneration: number;
  registGeneration: number | null;
  progressGeneration: number;
}

export interface IUserState {
  interest: string[];
  marpolicy: boolean;
  img: string;
  _id: string;
  email: string;
  nickname: string;
  gender: number;
}
