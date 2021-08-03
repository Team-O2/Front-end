export interface INotice {
  commentNum: number;
  comments: string[];
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
    _id: string;
    nickname: string;
    text: string;
    createdAt?: string;
  }[];
  isDeleted?: boolean;
  _id: string;
  userID: {
    img: string;
    _id: string;
    nickname: string;
  };
  text: string;
}

export interface INoticeNewComment {
  parentID?: string;
  text: string;
}
