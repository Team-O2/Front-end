export interface INotice {
  commentNum: number;
  comments: INoticeComment[];
  createdAt: string;
  hashtag: string[];
  imgThumbnail: string;
  interest: string[];
  isDeleted: boolean;
  isNotice: boolean;
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
export interface INoticeList {
  notices: INotice[];
  totalNoticeNum: number;
}
export interface ISearchNoticeList {
  searchData: INotice[];
  totalNoticeSearchNum: number;
}

export interface INoticeComment {
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

export interface INoticeCommentData {
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
