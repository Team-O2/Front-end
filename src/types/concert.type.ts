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
export interface IConcertList {
  concerts: IConcert[];
  totalConcertNum: number;
}
