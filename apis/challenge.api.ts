import { serverAxios } from 'libs/axios';
import { IChallenge, IChallengeDataList } from 'types/challenge.type';

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
  parentID?: number | null;
  text: string;
}

export const writeForm = async (writeData: WriteData, token: string): Promise<boolean> => {
  try {
    await serverAxios.post(`${PREFIX_URL}`, writeData, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log('[FAIL] POST data', error);
  }
  return false;
};

export const ChallengeEdit = async (editData: EditData, token: string, id: string | string[]): Promise<boolean> => {
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

export const ChallengeListData = async (
  token: string | null,
  generation: string | string[],
  offset: number,
  limit: number,
): Promise<IChallenge[] | null> => {
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
  challengeID: number | undefined,
  commentData: IChallengeCommentData,
): Promise<boolean | null> => {
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

export const DeleteChallenge = async (challengeID: number, token: string): Promise<boolean | null> => {
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

export const getChallengeContent = async (id: number | number[], token?: string): Promise<IChallenge | null> => {
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
  generation: string | string[],
  token: string | null,
  tag: string,
  keyword: string,
  ismine: number,
  offset: number,
  limit: number,
): Promise<IChallengeDataList[] | null> => {
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

export const ChallengeLike = async (token: string, challengeID: number): Promise<boolean | null> => {
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
  } catch (error) {}
  return false;
};

export const CancelChallengeLike = async (token: string, challengeID: number): Promise<boolean | null> => {
  try {
    const data = await serverAxios.delete(`${PREFIX_URL}/like/${challengeID}`, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      return true;
    }
  } catch (e) {}
  return false;
};

export const ChallengeScrap = async (token: string, challengeID: number): Promise<boolean | null> => {
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
  } catch (error) {}
  return false;
};

export const CancelChallengeScrap = async (token: string, challengeID: number): Promise<boolean | null> => {
  try {
    const data = await serverAxios.delete(`${PREFIX_URL}/scrap/${challengeID}`, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      return true;
    }
  } catch (e) {}
  return false;
};
