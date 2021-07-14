import axios from 'axios';

export const serverAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  withCredentials: true,
});

const instance = axios.create({
  baseURL: 'http://3.37.218.69:5000',
  withCredentials: true,
  headers: {
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlZDg2NTZkOWM0ZTg0NzM4NzM1OTYyIn0sImlhdCI6MTYyNjE5MjU3OCwiZXhwIjoxNjI3NDAyMTc4fQ.bR187F7yyeJJdI88EqR_imhJhbq8OJ0SueupCeVgLFQ',
  },
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

export const writeForm = async (writeData: WriteData) => {
  console.log('data', writeData);
  const data = await instance
    .post('/challenge', writeData)
    .then((response) => {
      console.log('[SUCCESS] POST data', response);
    })
    .catch((error) => {
      console.log('[FAIL] POST data', error);
    });
};

export const ChallengeListData = async () => {
  try {
    const data = await instance.get('/challenge', {
      params: {
        offset: 1,
        limit: 10,
      },
    });
    return data.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const ChallengeLike = async (likeData: LikeData) => {
  console.log('data', likeData);
  const data = await instance
    .post('/challenge/like/')
    .then((response) => {
      console.log('[SUCCESS] POST data', response);
    })
    .catch((error) => {
      console.log('[FAIL] POST data', error);
    });
};

export const ChallengeComment = async (commentData: CommentData) => {
  console.log('data', commentData);
  const data = await instance
    .post('/challenge/comment/')
    .then((response) => {
      console.log('[SUCCESS] POST data', response);
    })
    .catch((error) => {
      console.log('[FAIL] POST data', error);
    });
};

export const SignRegister = async (signData: SignData) => {
  console.log('data', signData);
  const data = await instance
    .post('user/register', signData)
    .then((response) => {
      console.log('[SUCCESS] POST data', response);
    })
    .catch((error) => {
      console.log('[FAIL] POST data', error);
    });
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
