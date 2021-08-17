export interface IConcert {
  _id: string;
  user: { _id: string; nickname: string; img: string };
  title: string;
  videoLink: string;
  imgThumbnail: string;
  text: string;
  likes: number;
  commentNum: number;
  scrapNum: number;
  generation: number;
  interest: string[];
  hashtag: string[];
  isDeleted: boolean;
  comments: string[]; // 코멘트 객체
  isNotice: boolean;
  createdAt: string;
  updatedAt: string;
  authorNickname: string;
  __v: number;
}

export interface IUserConcert {
  authorNickname: string;
  commentNum: number;
  comments: IConcertComment[];
  createdAt: string;
  hashtag: string[];
  imgThumbnail: string;
  interest: string[];
  isDeleted: boolean;
  isLike: boolean;
  isNotice: boolean;
  isScrap: boolean;
  likes: number;
  scrapNum: number;
  text: string;
  title: string;
  updatedAt: string;
  user: { img: string; nickname: string; _id: string };
  videoLink: string;
  __v: number;
  _id: string;
}

export interface IConcertList {
  concerts: IConcert[];
  totalConcertNum: number;
}

export interface IConcertComment {
  childrenComment: {
    idDeleted: boolean;
    _id: string;
    userID: {
      img: string;
      _id: string;
      nickname: string;
    };
    text: string;
  }[];
  isDeleted: boolean;
  _id: string;
  userID: {
    img: string;
    _id: string;
    nickname: string;
  };
  text: string;
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
  createdAt: string;
  nickname: string;
  text: string;
  _id: string;
}
