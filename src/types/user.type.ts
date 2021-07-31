export interface IUserData {
  title: string;
  category: string[];
  menu: string;
  content: string;
  hashtag: string[];
  video: File | null;
  thumbnail: File | null;
  nickname: string;
}

export interface IUserDataType {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  gender: number;
  interest: Array<string>;
  marpolicy: boolean;
  policyMust: boolean;
}
