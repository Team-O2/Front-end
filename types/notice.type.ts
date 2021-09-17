export interface INotice {
  commentNum: number;
  comment: INoticeComment[];
  createdAt: string;
  hashtag: string[];
  imgThumbnail: string;
  interest: string[];
  isDeleted: boolean;
  isNotice: boolean;
  text: string;
  title: string;
  updatedAt: string;
  userID: number;
  nickname: string;
  img: string;
  videoLink: string;
  id: number;
}
export interface INoticeList {
  notices: INotice[];
  totalNoticeNum: number;
}
export interface ISearchNoticeList {
  notices: INotice[];
  totalNoticeNum: number;
}

export interface INoticeComment {
  children: {
    id: number;
    userID: number;
    nickname: string;
    img: string;
    text: string;
    isDeleted: boolean;
  }[];
  id: number;
  userID: number;
  nickname: string;
  img: string;
  text: string;
  isDeleted: boolean;
}

export interface INoticeCommentData {
  parentID?: number | null;
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
  noticeID: number | undefined;
  commentData: INoticeCommentData;
}
export interface IReply {
  id: number;
  userID: number;
  nickname: string;
  img: string;
  text: string;
  isDeleted: boolean;
}
