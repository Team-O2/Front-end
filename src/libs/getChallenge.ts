import axios from 'axios';

export const serverAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  withCredentials: true,
});

interface WriteData {
  good: string;
  bad: string;
  learn: string;
  interest: string[];
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
    const data = await serverAxios.post('/challenge', writeData, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log('[FAIL] POST data', error);
  }
};

export const ChallengeEdit = async (editData: EditData, token: string, id: string) => {
  try {
    const data = await serverAxios.patch(`/challenge/${id}`, editData, {
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

export const ChallengeListData = async (token: string | null, generation: string, offset: number, limit: number) => {
  try {
    if (token) {
      const data = await serverAxios.get(`/challenge/?generation=${generation}&offset=${offset}&limit=${limit}`, {
        headers: {
          Authorization: token,
        },
      });
      return data.data.data;
    } else {
      const data = await serverAxios.get(`/challenge/?generation=${generation}&offset=${offset}&limit=${limit}`);
      return data.data.data;
    }
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
    const data = await serverAxios.post(`/challenge/comment/${challengeID}`, commentData, {
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
    const data = await serverAxios.post('/user/register', signData, {
      headers: {
        Authorization: token,
      },
    });
    console.log('[SUCCESS] POST data', data);
    return true;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
    }
    console.log('[FAIL] POST data', error.response.data);
  }
  return false;
};

export const DeleteChallenge = async (challengeID: string, token: string) => {
  try {
    const data = await serverAxios.delete(`/challenge/${challengeID}`, {
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

export const getChallengeContent = async (id: string, token?: string) => {
  try {
    const data = await serverAxios.get(`/challenge/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    if (data.status === 200) {
      return data.data.data;
    } else {
      throw new Error('서버오류');
    }
  } catch (error) {
    console.log('[FAIL] GET data', error);
    return null;
  }
};

export const getChallengeSearchData = async (
  generation: string,
  token: string | null,
  tag: string,
  keyword: string,
  ismine: number,
  offset: number,
  limit: number,
) => {
  try {
    let data = undefined;
    if (token) {
      data = await serverAxios.get(
        `/challenge/search?generation=${generation}&tag=${tag}&ismine=${ismine}&keyword=${keyword}&offset=${offset}&limit=${limit}`,
        {
          headers: {
            Authorization: token,
          },
        },
      );
    } else {
      data = await serverAxios.get(
        `/challenge/search?generation=${generation}&tag=${tag}&ismine=${ismine}&keyword=${keyword}&offset=${offset}&limit=${limit}`,
      );
    }
    if (data?.data.status === 200) {
      return data.data.data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const ChallengeLike = async (token: string, challengeID: string) => {
  try {
    const data = await serverAxios.post(`/challenge/like/${challengeID}`, [], {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      console.log(data.data.message);
      return true;
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
  return false;
};

export const CancelChallengeLike = async (token: string, challengeID: string) => {
  try {
    const data = await serverAxios.delete(`/challenge/like/${challengeID}`, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      return true;
    }
  } catch (e) {
    console.log(e.response.data.message);
  }
  return false;
};

export const ChallengeScrap = async (token: string, challengeID: string) => {
  try {
    const data = await serverAxios.post(`/challenge/scrap/${challengeID}`, [], {
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
    const data = await serverAxios.delete(`/challenge/scrap/${challengeID}`, {
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
