import axios from 'axios';

export const serverAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  withCredentials: true,
});

interface ILoginData {
  email: string;
  password: string;
}
interface IJoinData {
  email: string;
  password: string;
  nickname: string;
  interest: string[];
  gender: number;
  marpolicy: boolean;
}
interface IConcertWriteData {
  videoLink: File | null;
  imgThumbnail: File | null;
  title: string;
  text: string;
  interest: string[];
  hashtag: string[];
  authorNickname: string;
}
interface INoticeData {
  title: string;
  text: string;
  interest: string[];
  hashtag: string[];
}
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

export const postLogin = async (loginData: ILoginData) => {
  try {
    const data = await serverAxios.post('/auth/signin', loginData);
    if (data !== undefined) {
      return data.data;
    } else {
      return undefined;
    }
  } catch (e) {
    if (e.response !== undefined) {
      return e.response.data;
    } else {
      return undefined;
    }
  }
};

export const postJoin = async (joinData: IJoinData) => {
  try {
    const data = await serverAxios.post('/auth/signup', joinData);
    if (data !== undefined) {
      return data.data;
    } else {
      return undefined;
    }
  } catch (e) {
    if (e.response !== undefined) {
      return e.response.data;
    } else {
      return undefined;
    }
  }
};

export const getUserData = async (token: string) => {
  try {
    const data = await serverAxios.get('/user/userInfo', {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    alert(e?.response?.data?.message);
    return null;
  }
};

export const getChallengeList = async (token: string) => {
  try {
    const data = await serverAxios.get('/admin', {
      headers: {
        Authorization: token,
      },
      params: {
        limit: 6,
        offset: 0,
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

export const postConcertWrite = async (token: string, concertWriteData: IConcertWriteData) => {
  const form = new FormData();
  concertWriteData.videoLink && form.append('videoLink', concertWriteData.videoLink);
  concertWriteData.imgThumbnail && form.append('imgThumbnail', concertWriteData.imgThumbnail);
  form.append('title', concertWriteData.title);
  form.append('text', concertWriteData.text);
  form.append('interest', `[${concertWriteData.interest.join()}]`);
  form.append('hashtag', `[${concertWriteData.hashtag.join()}]`);
  form.append('authorNickname', concertWriteData.authorNickname);
  try {
    const data = await serverAxios.post('/admin/concert', form, {
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

export const postNoticeWrite = async (token: string, noticeWriteData: INoticeData) => {
  const form = new FormData();
  form.append('title', noticeWriteData.title);
  form.append('text', noticeWriteData.text);
  form.append('interest', `[${noticeWriteData.interest.join()}]`);
  form.append('hashtag', `[${noticeWriteData.hashtag.join()}]`);
  try {
    const data = await serverAxios.post('/admin/notice', form, {
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
const changeDateStyle = (date: string) => {
  const year = date.substr(0, 4);
  const month = date.substr(5, 2);
  const day = date.substr(8, 2);
  return `${year}-${month}-${day}`;
};
export const challengeOpen = async (token: string, challengeOpenData: IChallengeOpenData) => {
  const form = new FormData();
  form.append('title', challengeOpenData.title);
  form.append('registerStartDT', changeDateStyle(challengeOpenData.applyPeriod.start));
  form.append('registerEndDT', changeDateStyle(challengeOpenData.applyPeriod.end));
  form.append('challengeStartDT', changeDateStyle(challengeOpenData.challengePeriod.start));
  form.append('challengeEndDT', changeDateStyle(challengeOpenData.challengePeriod.end));
  form.append('limitNum', `${challengeOpenData.peopleNum}`);
  challengeOpenData.img && form.append('img', challengeOpenData.img);
  try {
    const data = await serverAxios.post('/admin/challenge', form, {
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

export const sendEmail = async (email: string) => {
  try {
    await serverAxios.post('/auth/email', { email: email });
  } catch (e) {
    alert(e?.response?.data?.message);
  }
};

export const sendVerifinum = async (email: string, verifiNum: string) => {
  try {
    const data = await serverAxios.post('/auth/code', { email: email, emailCode: verifiNum });
    if (data.data.status === 200) {
      return data.data.data.isOkay;
    }
  } catch (e) {
    alert(e?.response?.data?.message);
    return null;
  }
};

export const postNewPw = async (token: string | undefined, password: string, newPassword: string) => {
  try {
    const data = await serverAxios.patch(
      'user/password',
      { password, newPassword },
      { headers: { Authorization: token } },
    );
    if (data.data.status === 200) {
      return true;
    }
  } catch (e) {
    alert(e?.response?.data?.message);
    return false;
  }
};

export const getUserInfo = async (token: string) => {
  try {
    const data = await serverAxios.get('/user/userInfo', { headers: { Authorization: token } });
    if (data.data.status === 200) {
      return data.data.data;
    }
  } catch (e) {
    alert(e?.response?.data?.message);
    return null;
  }
};

export const updateUserInfo = async (
  token: string | undefined,
  img: any,
  nickname: string,
  interest: string[],
  gender: number,
  marpolicy: boolean,
) => {
  try {
    const body = new FormData();
    if (img) {
      body.append('img', img);
    }
    body.append('nickname', nickname);
    body.append('interest', `[${interest.join()}]`);
    body.append('gender', String(gender));
    body.append('marpolicy', String(marpolicy));

    const data = await serverAxios.patch('/user/userInfo', body, { headers: { Authorization: token } });
    if (data.data.status === 200) {
      return data.data;
    }
  } catch (e) {
    alert(e?.response?.data?.message);
    return null;
  }
};
