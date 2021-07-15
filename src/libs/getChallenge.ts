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

<<<<<<< refs/remotes/origin/feat/Challenge
interface ChallengeID {
  id: number;
}

interface IChallengeCommentData {
  parentID?: string;
  text: string;
}

=======
>>>>>>> Feat: 삭제 api 연결
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

export const getChallengeSearchData = async (token: string, tag: string, keyword: string, ismine: boolean) => {
  try {
    const data = await instance.get(`/challenge/search?tag=${tag}?ismine=${ismine}&keyword=${keyword}`, {
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

export const ChallengeLike = async (likeData: LikeData, token: string) => {
  try {
    const data = await instance.post('/challenge/like', likeData, {
      headers: {
        Authorization: token,
      },
    });
    console.log('[SUCCESS] POST data', data);
  } catch (error) {
    console.log('[FAIL] POST data', error);
  }
};

<<<<<<< refs/remotes/origin/feat/Challenge
export const ChallengeComment = async (
=======
export const postChallengeComment = async (
>>>>>>> Feat: 작성한 댓글 서버로 전송
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
<<<<<<< refs/remotes/origin/feat/Challenge
=======
    if (data.status === 200) {
      return true;
    }
>>>>>>> Feat: 작성한 댓글 서버로 전송
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
    console.log(data.status);
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
      return data.data.data[0];
    }
    console.log(data);
  } catch (error) {
    console.log('[FAIL] GET data', error);
  }
};
