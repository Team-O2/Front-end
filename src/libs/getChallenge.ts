import axios from 'axios';

export const serverAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  withCredentials: true,
});

const instance = axios.create({
  baseURL: 'http://3.37.218.69:5000',
  withCredentials: true,
  // headers: {
  //   Authorization: userStatusData?.token,
  // },
});

interface WriteData {
  good: string;
  bad: string;
  learn: string;
  interest: string[];
  generation: number;
}

interface EditData {
  good: string;
  bad: string;
  learn: string;
  interest: string[];
}

interface IChallengeCommentData {
  parentID?: string | null;
  text: string;
}

interface LikeData {
  like: string;
}

interface SignData {
  challengeCNT: number;
}

interface ChallengeID {
  id: number;
}

export const writeForm = async (writeData: WriteData, token: string) => {
  try {
    const data = await instance.post('/challenge', writeData, {
      headers: {
        Authorization: token,
      },
    });
    console.log('[SUCCESS] POST data', data);
  } catch (error) {
    console.log('[FAIL] POST data', error);
  }
};

export const ChallengeEdit = async (editData: EditData, token: string, id: string) => {
  try {
    const data = await instance.patch(`/challenge/${id}`, editData, {
      headers: {
        Authorization: token,
      },
    });
    if (data.status === 200) return true;
  } catch (error) {
    console.log('[FAIL] POST data', error);
  }
  return false;
};

export const ChallengeListData = async (token: string) => {
  try {
    const data = await instance.get('/challenge', {
      headers: {
        Authorization: token,
      },
      params: {
        offset: 0,
        limit: 50,
      },
    });
    return data.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const postChallengeComment = async (
  token: string,
  challengeID: string | undefined,
  commentData: IChallengeCommentData,
) => {
  try {
    const data = await instance.post(`/challenge/comment/${challengeID}`, commentData, {
      headers: {
        Authorization: token,
      },
    });
    if (data.status === 200) {
      return true;
    }
  } catch (error) {
    console.log('[FAIL] POST data', error);
    return null;
  }
  return false;
};

export const SignRegister = async (signData: SignData, token: string) => {
  try {
    const data = await instance.post('user/register', signData, {
      headers: {
        Authorization: token,
      },
    });
    console.log('[SUCCESS] POST data', data);
  } catch (error) {
    console.log('[FAIL] POST data', error);
  }
};

export const DeleteChallenge = async (challengeID: string, token: string) => {
  try {
    const data = await instance.delete(`/challenge/${challengeID}`, {
      headers: {
        Authorization: token,
      },
      params: {
        challengeID: challengeID,
      },
    });
    if (data.status === 200) {
      return true;
    }
  } catch (error) {
    console.log('FAIL DELETE DATA');
  }
  return false;
};

export const getChallengeContent = async (id: string, token: string) => {
  try {
    const data = await instance.get(`/challenge/${id}`, {
      headers: {
        Authorization: token,
      },
      params: {
        challengeID: id,
      },
    });
    if (data.status === 200) {
      return data.data.data;
    }
  } catch (error) {
    console.log('[FAIL] GET data', error);
  }
};

export const getChallengeSearchData = async (token: string, tag: string, keyword: string, ismine: boolean) => {
  try {
    const data = await instance.get(`/challenge/search?tag=${tag}&ismine=${ismine}&keyword=${keyword}`, {
      headers: {
        Authorization: token,
      },
      params: {
        offset: 0,
        limit: 10,
      },
    });
    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const ChallengeLike = async (token: string, challengeID: string) => {
  try {
    const data = await instance.post(`/challenge/like/${challengeID}`, [], {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      console.log(data.data.message);
      alert('좋아요 성공');
    } else {
      return null;
    }
  } catch (error) {
    if (error.response.data.status === 400) {
      console.log('[FAIL] POST data', error);
      return true;
    }
    alert(error.response.data.message);
    return undefined;
  }
};

export const CancelChallengeLike = async (token: string, challengeID: string) => {
  try {
    const data = await instance.delete(`/challenge/like/${challengeID}`, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      alert(data.data.message);
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};

export const ChallengeScrap = async (token: string, challengeID: string) => {
  try {
    const data = await instance.post(`/challenge/scrap/${challengeID}`, [], {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      alert(data.data.message);
    } else {
      return null;
    }
  } catch (e) {
    if (e.response.data.message === '이미 스크랩 된 글입니다') {
      alert(e.response.data.message);
      return true;
    }
    alert(e.response.data.message);
    return undefined;
  }
};

export const CancelChallengeScrap = async (token: string, challengeID: string) => {
  try {
    const data = await instance.delete(`/challenge/scrap/${challengeID}`, {
      params: {
        challengeID: challengeID,
      },
    });
    if (data.data.status === 200) {
      alert(data.data.message);
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};
