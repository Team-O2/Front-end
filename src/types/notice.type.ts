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
