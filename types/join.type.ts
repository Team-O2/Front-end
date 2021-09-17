export interface IJoinConditionMet {
  email: boolean;
  password: boolean;
  passwordCheck: boolean;
  nickname: boolean;
  interest: boolean;
  policyMust: boolean;
}

export interface IJoin {
  email: string;
  password: string;
  nickname: string;
  interest: string[];
  isMarketing: boolean;
}

export interface IJoinData {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  interest: string[];
  marpolicy: boolean;
  policyMust: boolean;
}
