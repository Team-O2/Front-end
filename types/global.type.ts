export interface IUserStatusState {
  token: string;
  userType: number;
  totalGeneration: number;
  registGeneration: number | null;
  progressGeneration: number;
}

export interface IUserState {
  interest: string[];
  isMarketing: boolean;
  img: string;
  id: number;
  email: string;
  nickname: string;
}
