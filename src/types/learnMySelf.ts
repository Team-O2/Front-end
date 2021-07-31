export interface IUser {
  img: string;
  _id: string;
  nickname: string;
}

export interface IComment {
  isDeleted: boolean;
  _id: string;
  userID: IUser;
  text: string;
}

export interface IParentComment extends IComment {
  childrenComment: IComment[];
}

export interface IChallenge {
  _id: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
  good: string;
  learn: string;
  bad: string;
  likes: number;
  commentNum: number;
  scrapNum: number;
  generation: number;
  interest: string[];
  comments: IParentComment[];
  isLike?: boolean; // 좋아요 클릭 여부
  isScrap?: boolean; // 스크랩 여부
}

export interface ICommentData {
  childrenComment: {
    _id: string;
    userID: {
      img: string;
      _id: string;
      nickname: string;
    };
    text: string;
  }[];
  _id: string;
  userID: {
    img: string;
    _id: string;
    nickname: string;
  };
  text: string;
}
