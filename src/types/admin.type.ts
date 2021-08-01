export interface IAdminChallenge {
  generation: number; //기수
  createdDT: string; //오픈일자
  registerStartDT: string;
  registerEndDT: string;
  challengeStartDT: string;
  challengeEndDT: string;
  applyNum: number; //신청인
  participants: number; //참여인원수
  postNum: number; //총 게시물 개수
  img: string; //이미지주소
}

export interface IAdminWriteConditionMet {
  title: boolean;
  category: boolean;
  menu: boolean;
  content: boolean;
  hashtag: boolean;
  video: boolean;
  thumbnail: boolean;
  nickname: boolean;
}

export interface IAdminChallengePeriod {
  title: string;
  generation: number;
  registerEndDT: string;
  registerStartDT: string;
  challengeEndDT: string;
  challengeStartDT: string;
  img: string;
}
