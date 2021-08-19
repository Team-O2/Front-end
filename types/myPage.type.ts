import { IConcert } from './concert.type';
export interface IMyPageConcert {
  _id: string;
  title: string;
}

export interface IMyPageHeader {
  nickname: string;
  learnMyselfAchieve: {
    percent: number;
    totalNum: number;
    completeNum: number;
    startDT: string;
    endDT: string;
    generation: number;
  };
  shareTogether: IMyPageConcert[];
  couponBook: {
    welcomeBadge: boolean;
    firstJoinBadge: boolean;
    firstWriteBadge: boolean;
    oneCommentBadge: boolean;
    fiveCommentBadge: boolean;
    oneLikeBadge: boolean;
    fiveLikeBadge: boolean;
    loginBadge: boolean;
    marketingBadge: boolean;
    learnMySelfBadge: boolean;
    firstReplyBadge: boolean;
    concertScrapBadge: boolean;
    challengeBadge: number;
  };
}

export interface IMyScrappedConcert {
  mypageConcertScrap: IConcert[];
  totalScrapNum: number;
}

export interface IMyScrappedChallenge {
  mypageChallengeScrap: IChallenge[];
  totalScrapNum: number;
}

export interface IMyUserChallenge {
  mypageChallengeScrap: IChallenge[];
}

export interface IChallenge {
  likes: number;
  commentNum: number;
  scrapNum: number;
  generation: number;
  interest: string[];
  comments: string[];
  _id: string;
  user: {
    img: string;
    _id: string;
    nickname: string;
  };
  good: string;
  bad: string;
  learn: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  isDeleted: boolean;
  isLike: boolean;
  isScrap: boolean;
}

export interface IMyUserCommentResponse {
  comments: IMyUserComment[];
  commentNum: number;
}

export interface IMyUserComment {
  parentComment: IMyUserComment | null;
  childrenComment: IMyUserComment[];
  isDeleted: boolean;
  _id: string;
  postModel: string;
  post: string;
  userID: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IComment {
  childrenComment: IComment[];
  isDeleted: boolean;
  _id: string;
  userID: {
    img: string;
    _id: string;
    nickname: string;
  };
  text: string;
}

export interface IGetMyPageUserInfoParameter {
  token?: string;
  commentIdList: string[];
}

export interface IDeleteMyPageUserChallengeParameter {
  token?: string;
  challengeId: string;
}
