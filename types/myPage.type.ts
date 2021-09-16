import { IConcert } from './concert.type';
export interface IMyPageConcert {
  id: number;
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
  likeNum: number;
  commentNum: number;
  scrapNum: number;
  generation: number;
  interest: string[];
  comments: number[];
  id: number;
  userID: number;
  img: string;
  nickname: string;
  good: string;
  bad: string;
  learn: string;
  createdAt: string;
  updatedAt: string;
  isLike: boolean;
  isScrap: boolean;
}

export interface IMyUserCommentResponse {
  comments: IMyUserComment[];
  commentNum: number;
}

export interface IMyUserComment {
  id: number;
  post: number;
  text: string;
  createdAt: Date;
}

export interface IComment {
  childrenComment: IComment[];
  isDeleted: boolean;
  id: number;
  userID: {
    img: string;
    id: number;
    nickname: string;
  };
  text: string;
}

export interface IGetMyPageUserInfoParameter {
  token?: string;
  commentIdList: number[];
}

export interface IDeleteMyPageUserChallengeParameter {
  token?: string;
  challengeId: number;
}
