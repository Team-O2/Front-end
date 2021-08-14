export interface IJoinConditionMet {
  email: boolean;
  password: boolean;
  passwordCheck: boolean;
  nickname: boolean;
  interest: boolean;
  policyMust: boolean;
  gender: boolean;
}

export interface IJoin {
  email: string;
  password: string;
  nickname: string;
  interest: string[];
  gender: number;
  marpolicy: boolean;
}

export interface IJoinData {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  gender: number;
  interest: string[];
  marpolicy: boolean;
  policyMust: boolean;
}
