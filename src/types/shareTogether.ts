export interface IShareTogether {
  _id: string;
  user: string; // 유저 객체
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
  createdAt: Date;
  updatedAt: Date;
}
