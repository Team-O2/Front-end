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
    });
    if (data.data.status === 200) {
      console.log(data.data.data.offsetAdmin);
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
  console.log(concertWriteData);
  concertWriteData.videoLink && form.append('videoLink', concertWriteData.videoLink);
  concertWriteData.imgThumbnail && form.append('imgThumbnail', concertWriteData.imgThumbnail);
  form.append('title', concertWriteData.title);
  form.append('text', concertWriteData.text);
  form.append('interest', `[${concertWriteData.interest.join()}]`);
  form.append('hashtag', `[${concertWriteData.hashtag.join()}]`);
  form.append('authorNickname', concertWriteData.authorNickname);
  try {
    const data = await serverAxios.post('/admin/concert', {
      headers: {
        Authorization: token,
      },
      body: {
        form,
      },
    });
    console.log(data);
  } catch (e) {
    console.log(e.response.data);
  }
};

export const postNoticeWrite = async (token: string, noticeWriteData: INoticeData) => {
  const form = new FormData();
  form.append('title', noticeWriteData.title);
  form.append('text', noticeWriteData.text);
  form.append('interest', `[${noticeWriteData.interest.join()}]`);
  form.append('hashtag', `[${noticeWriteData.hashtag.join()}]`);
  try {
    const data = await serverAxios.post('/admin/concert', {
      headers: {
        Authorization: token,
      },
      body: {
        form,
      },
    });
    console.log(data);
  } catch (e) {
    console.log(e.response.data);
  }
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
    const data = await serverAxios.post('/admin/concert', {
      headers: {
        Authorization: token,
      },
      body: {
        form,
      },
    });
    console.log(data);
  } catch (e) {
    console.log(e.response.data);
  }
};

export const sendEmail = async (email: string) => {
  try {
    const data = await serverAxios.post('/auth/email', { email: email });
    if (data.data.status === 200) {
      alert(data.data.message);
    }
  } catch (e) {
    alert(e?.response?.data?.message);
  }
};
