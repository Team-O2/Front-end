export interface IConcert {
  id: number;
  userID: number;
  nickname: string;
  img: string;
  title: string;
  videoLink: string;
  imgThumbnail: string;
  text: string;
  likeNum: number;
  commentNum: number;
  scrapNum: number;
  interest: string[];
  hashtag: string[];
  isDeleted: boolean;
  comment: {
    id: number;
    userID: number;
    nickname: string;
    img: string;
    text: string;
    children: [];
    isDeleted: boolean;
  }[]; // 코멘트 객체
  isNotice: boolean;
  createdAt: string;
  updatedAt: string;
  authorNickname: string;
}

export interface IUserConcert {
  authorNickname: string;
  commentNum: number;
  comment: IConcertComment[];
  createdAt: string;
  hashtag: string[];
  id: string;
  img: string;
  imgThumbnail: string;
  interest: string[];
  isDeleted: boolean;
  isLike: boolean;
  isNotice: boolean;
  isScrap: boolean;
  likeNum: number;
  nickname: string;
  scrapNum: number;
  text: string;
  title: string;
  updatedAt: string;
  userID: number;
  videoLink: string;
}

export interface IConcertList {
  concerts: IConcert[];
  totalConcertNum: number;
}

export interface IConcertComment {
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

export interface IConcertCommentData {
  parentID?: string | null;
  text: string;
}

export interface IFetchParameter {
  token?: string;
  limit?: number;
  offset?: number;
  keyword?: string;
  tag?: string;
}

export interface IFetchComment {
  token: string;
  concertID: string | undefined;
  commentData: IConcertCommentData;
}

export interface IReply {
  id: string;
  userID: number;
  nickname: string;
  img: string;
  text: string;
  isDeleted: boolean;
}
