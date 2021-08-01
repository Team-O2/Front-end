import { serverAxios } from 'libs/axios';
import { IAdminChallenge, IAdminChallengePeriod } from 'types/admin.type';
import { changeArrToString } from 'utils';

const PREFIX_URL = '/admin';

export const getChallengeList = async (
  token: string,
  limit: number,
  offset: number,
): Promise<IAdminChallenge[] | null> => {
  try {
    const data = await serverAxios.get(`${PREFIX_URL}`, {
      headers: {
        Authorization: token,
      },
      params: {
        limit: limit,
        offset: offset,
      },
    });
    if (data.data.status === 200) {
      return data.data.data.offsetAdmin;
    } else {
      return null;
    }
  } catch (e) {
    alert(e?.response?.data?.message);
    return null;
  }
};

interface IConcertWriteData {
  videoLink: File | null;
  imgThumbnail: File | null;
  title: string;
  text: string;
  interest: string[];
  hashtag: string[];
  authorNickname: string;
}

export const postConcertWrite = async (token: string, concertWriteData: IConcertWriteData): Promise<boolean> => {
  const form = new FormData();
  concertWriteData.videoLink && form.append('videoLink', concertWriteData.videoLink);
  concertWriteData.imgThumbnail && form.append('imgThumbnail', concertWriteData.imgThumbnail);
  form.append('title', concertWriteData.title);
  form.append('text', concertWriteData.text);
  form.append('interest', changeArrToString(concertWriteData.interest));
  form.append('hashtag', changeArrToString(concertWriteData.hashtag));
  form.append('authorNickname', concertWriteData.authorNickname);
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/concert`, form, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      alert('콘서트 글 올리기를 완료했습니다.');
      return true;
    }
  } catch (e) {
    alert('글올리기 실패');
    console.log(e.response.data);
  }
  return false;
};

interface INoticeData {
  title: string;
  text: string;
  interest: string[];
  hashtag: string[];
}

export const postNoticeWrite = async (token: string, noticeWriteData: INoticeData): Promise<boolean> => {
  const form = new FormData();
  form.append('title', noticeWriteData.title);
  form.append('text', noticeWriteData.text);
  form.append('interest', changeArrToString(noticeWriteData.interest));
  form.append('hashtag', changeArrToString(noticeWriteData.hashtag));
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/notice`, form, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      alert('공지사항 업로드를 완료했습니다.');
      return true;
    }
  } catch (e) {
    alert('글올리기 실패');
    console.log(e.response.data);
  }
  return false;
};

interface IChallengeOpenData {
  title: string;
  challengePeriod: {
    start: string;
    end: string;
  };
  applyPeriod: {
    start: string;
    end: string;
  };
  peopleNum: number;
  img: File | null;
}

export const challengeOpen = async (token: string, challengeOpenData: IChallengeOpenData): Promise<boolean> => {
  const changeDateStyle = (date: string) => {
    const year = date.substr(0, 4);
    const month = date.substr(5, 2);
    const day = date.substr(8, 2);
    return `${year}-${month}-${day}`;
  };

  const form = new FormData();
  form.append('title', challengeOpenData.title);
  form.append('registerStartDT', changeDateStyle(challengeOpenData.applyPeriod.start));
  form.append('registerEndDT', changeDateStyle(challengeOpenData.applyPeriod.end));
  form.append('challengeStartDT', changeDateStyle(challengeOpenData.challengePeriod.start));
  form.append('challengeEndDT', changeDateStyle(challengeOpenData.challengePeriod.end));
  form.append('limitNum', `${challengeOpenData.peopleNum}`);
  challengeOpenData.img && form.append('img', challengeOpenData.img);
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/challenge`, form, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      alert('챌린지 오픈을 완료했습니다.');
      return true;
    }
  } catch (e) {
    console.log(e.response.data);
  }
  return false;
};

export const getRegistPeriod = async (): Promise<IAdminChallengePeriod> => {
  const data = await serverAxios.get(`${PREFIX_URL}/regist`);
  return data.data.data;
};
