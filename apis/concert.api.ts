import { serverAxios } from 'libs/axios';
import {
  IConcert,
  IConcertCommentData,
  IConcertList,
  IFetchComment,
  IFetchParameter,
  IUserConcert,
} from '../types/concert.type';

const PREFIX_URL = '/concert';

export const getConcertListData = async (token: string): Promise<IConcert[] | null> => {
  try {
    const data = await serverAxios.get(`${PREFIX_URL}`, {
      headers: {
        Authorization: token,
      },
      params: {
        limit: 40,
      },
    });
    if (data.data.status === 200) {
      return data.data.data.concerts;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return null;
  }
};

export const getConcertData = async (concertID: string | string[]): Promise<IUserConcert | null> => {
  try {
    const data = await serverAxios.get(`${PREFIX_URL}/${concertID}`, {
      params: {
        concertID: concertID,
      },
    });
    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return null;
  }
};

export const getConcertUserData = async (token: string, concertID: string | string[]): Promise<IUserConcert | null> => {
  try {
    const data = await serverAxios.get(`${PREFIX_URL}/${concertID}`, {
      headers: {
        Authorization: token,
      },
      params: {
        concertID: concertID,
      },
    });
    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return null;
  }
};

export const getConcertSearchData = async ({
  limit = 11,
  offset = 0,
  keyword,
  tag,
}: IFetchParameter): Promise<IConcertList | null> => {
  try {
    const data = await serverAxios.get(`${PREFIX_URL}/search?tag=${tag}&keyword=${keyword}`, {
      params: {
        offset,
        limit,
      },
    });
    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return null;
  }
};

export const postConcertComment = async (
  token: string,
  concertID: string | undefined,
  commentData: IConcertCommentData,
): Promise<IFetchComment | null> => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/comment/${concertID}`, commentData, {
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
    alert(e.response.data.message);
    return null;
  }
};

export const postConcertLike = async (token: string, concertID: string | string[]): Promise<boolean> => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/like/${concertID}`, '', {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return false;
    }
  } catch (e) {
    if (e.response.data.status === 400) {
      return true;
    }
    alert(e.response.data.message);
    return false;
  }
};

export const deleteConcertLike = async (token: string, concertID: string | string[]): Promise<boolean> => {
  try {
    const data = await serverAxios.delete(`${PREFIX_URL}/like/${concertID}`, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return false;
    }
  } catch (e) {
    alert(e.response.data.message);
    return false;
  }
};

export const postConcertScrap = async (token: string, concertID: string | string[]): Promise<boolean> => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/scrap/${concertID}`, '', {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return false;
    }
  } catch (e) {
    if (e.response.data.message === '이미 스크랩 된 글입니다') {
      return true;
    }
    alert(e.response.data.message);
    return false;
  }
};

export const deleteConcertScrap = async (token: string, concertID: string | string[]): Promise<boolean> => {
  try {
    const data = await serverAxios.delete(`${PREFIX_URL}/scrap/${concertID}`, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return false;
    }
  } catch (e) {
    alert(e.response.data.message);
    return false;
  }
};
