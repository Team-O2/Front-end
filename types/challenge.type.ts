export interface IUser {
  img: string;
  id: number;
  nickname: string;
}

export interface IComment {
  isDeleted: boolean;
  id: number;
  userID: number;
  nickname: string;
  img: string;
  children?: IComment[];
  text: string;
}

export interface IChallenge {
  id: number;
  createdAt: string;
  updatedAt: string;
  userID: number;
  nickname: string;
  img: string;
  good: string;
  learn: string;
  bad: string;
  likeNum: number;
  commentNum: number;
  scrapNum: number;
  generation: number;
  interest: string[];
  comment: IComment[];
  isLike?: boolean; // 좋아요 클릭 여부
  isScrap?: boolean; // 스크랩 여부
}

export interface ICommentData {
  children: {
    id: string;
    userID: number;
    nickname: string;
    img: string;
    text: string;
    isDeleted: boolean;
  }[];
  id: string;
  userID: number;
  nickname: string;
  img: string;
  text: string;
  isDeleted: boolean;
}

export interface IChallengeOpen {
  title: string;
  challengePeriod: {
    start: string;
    end: string;
  };
  applyPeriod: {
    start: string;
    end: string;
  };
  peopleNum: number;
}

export interface IConditionMet {
  title: boolean;
  challengePeriod: {
    start: boolean;
    end: boolean;
  };
  applyPeriod: {
    start: boolean;
    end: boolean;
  };
  peopleNum: boolean;
}

export interface IReply {
  isDeleted?: boolean;
  _id?: string;
  userID?: {
    img: string;
    _id: string;
    nickname: string;
  };
  text?: string;
}

export interface IByte {
  byte1: number;
  byte2: number;
  byte3: number;
}

export interface ITextForm {
  description1: string;
  description2: string;
  description3: string;
}

export interface IChallengeDataList {
  good: string;
  bad: string;
  learn: string;
  commentNum: number;
  comments: string[];
  generation: number;
  createdAt: string;
  isDeleted: boolean;
  scrapNum: number;
  interest: string[];
  isLike: boolean;
  likes: number;
  isScrap: boolean;
  updatedAt: string;
  user: { img: string; nickname: string; _id: string };
  __v: number;
  _id: string;
}

export interface IChallengeData {
  id: number;
  generation: number;
  createdAt: string;
  updatedAt: string;
  userID: number;
  nickname: string;
  img: string;
  good: string;
  bad: string;
  learn: string;
  interest: string[];
  likeNum: number;
  scrapNum: number;
  commentNum: number;
  comment: string[];
  isDeleted: boolean;
  isLike: boolean;
  isScrap: boolean;
}
