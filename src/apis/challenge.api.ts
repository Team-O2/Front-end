import { serverAxios } from 'libs/axios';

const PREFIX_URL = '/challenge';

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

export const writeForm = async (writeData: WriteData, token: string) => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}`, writeData, {
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
    const data = await serverAxios.patch(`${PREFIX_URL}/${id}`, editData, {
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
      const data = await serverAxios.get(`${PREFIX_URL}/?generation=${generation}&offset=${offset}&limit=${limit}`, {
        headers: {
          Authorization: token,
        },
      });
      return data.data.data;
    } else {
      const data = await serverAxios.get(`${PREFIX_URL}/?generation=${generation}&offset=${offset}&limit=${limit}`);
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
    const data = await serverAxios.post(`${PREFIX_URL}/comment/${challengeID}`, commentData, {
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

export const DeleteChallenge = async (challengeID: string, token: string) => {
  try {
    const data = await serverAxios.delete(`${PREFIX_URL}/${challengeID}`, {
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
    const data = await serverAxios.get(`${PREFIX_URL}/${id}`, {
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
        `${PREFIX_URL}/search?generation=${generation}&tag=${tag}&ismine=${ismine}&keyword=${keyword}&offset=${offset}&limit=${limit}`,
        {
          headers: {
            Authorization: token,
          },
        },
      );
    } else {
      data = await serverAxios.get(
        `${PREFIX_URL}/search?generation=${generation}&tag=${tag}&ismine=${ismine}&keyword=${keyword}&offset=${offset}&limit=${limit}`,
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
    const data = await serverAxios.post(`${PREFIX_URL}/like/${challengeID}`, [], {
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
    const data = await serverAxios.delete(`${PREFIX_URL}/like/${challengeID}`, {
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
    const data = await serverAxios.post(`${PREFIX_URL}/scrap/${challengeID}`, [], {
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

export const CancelChallengeScrap = async (token: string, challengeID: string) => {
  try {
    const data = await serverAxios.delete(`${PREFIX_URL}/scrap/${challengeID}`, {
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
