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

interface CommentData {
  parentID?: string;
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

export const ChallengeListData = async (token: string) => {
  try {
    const data = await instance.get('/challenge', {
      headers: {
        Authorization: token,
      },
      params: {
        offset: 0,
        limit: 10,
      },
    });
    return data.data.data;
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

export const ChallengeComment = async (commentData: CommentData, token: string) => {
  try {
    const data = await instance.post('/challenge/comment', commentData, {
      headers: {
        Authorization: token,
      },
    });
    console.log('[SUCCESS] POST data', data);
  } catch (error) {
    console.log('[FAIL] POST data', error);
  }
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

export const DeleteChallenge = async (challengeID: ChallengeID) => {
  try {
    console.log('data', challengeID);
    const data = await instance.delete(`/challenge/${challengeID}`, {
      params: {
        challengeID: challengeID,
      },
    });
  } catch (error) {
    console.log('FAIL DELETE DATA');
    return null;
  }
};
