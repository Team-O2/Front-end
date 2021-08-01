import { serverAxios } from 'libs/axios';
import { IChallengeData } from 'types/challenge.type';
import {
  IDeleteMyPageUserChallengeParameter,
  IGetMyPageUserInfoParameter,
  IMyPageHeader,
  IMyScrappedChallenge,
  IMyScrappedConcert,
  IMyUserCommentResponse,
} from '../types/myPage.type';

const MY_PAGE_URL_PREFIX = '/user/mypage';

export const getMyPageUserInfo = async (token?: string): Promise<IMyPageHeader | null> => {
  try {
    const data = await serverAxios.get(`${MY_PAGE_URL_PREFIX}/info`, {
      headers: { Accept: 'application/json', Authorization: token },
    });
    if (data.status === 200) {
      return data.data.data;
    } else {
      throw new Error();
    }
  } catch (err) {
    return null;
  }
};

interface IFetchParameter {
  token?: string;
  limit?: number;
  offset?: number;
}

interface IFetchCommentParameter extends IFetchParameter {
  category: string;
}

export const getMyPageConcertList = async ({
  token,
  limit = 6,
  offset = 0,
}: IFetchParameter): Promise<IMyScrappedConcert | null> => {
  try {
    const data = await serverAxios.get(`${MY_PAGE_URL_PREFIX}/concert`, {
      headers: { Accept: 'application/json', Authorization: token },
      params: { limit, offset },
    });
    if (data.status === 200) {
      return data?.data?.data || null;
    } else {
      throw new Error();
    }
  } catch (err) {
    return null;
  }
};

export const getMyPageChallengeList = async ({
  token,
  limit = 8,
  offset = 0,
}: IFetchParameter): Promise<IMyScrappedChallenge | null> => {
  try {
    const data = await serverAxios.get(`${MY_PAGE_URL_PREFIX}/challenge`, {
      headers: { Accept: 'application/json', Authorization: token },
      params: { limit, offset },
    });
    if (data.status === 200) {
      return data?.data?.data || null;
    } else {
      throw new Error();
    }
  } catch (err) {
    return null;
  }
};

export const getUserChallengeList = async ({
  token,
  limit = 8,
  offset = 0,
}: IFetchParameter): Promise<IChallengeData[] | null> => {
  try {
    const data = await serverAxios.get(`${MY_PAGE_URL_PREFIX}/write`, {
      headers: { Accept: 'application/json', Authorization: token },
      params: { limit, offset },
    });
    if (data.status === 200 && data.data.data[0]) {
      return data.data.data;
    } else {
      throw new Error();
    }
  } catch (err) {
    return null;
  }
};

export const getUserCommentList = async ({
  token,
  limit = 5,
  offset = 0,
  category,
}: IFetchCommentParameter): Promise<IMyUserCommentResponse | null> => {
  try {
    const data = await serverAxios.get(`${MY_PAGE_URL_PREFIX}/comment`, {
      headers: { Accept: 'application/json', Authorization: token },
      params: { limit, offset, postModel: category },
    });

    if (data.status === 200) {
      return data.data.data;
    } else {
      throw new Error();
    }
  } catch (err) {
    return null;
  }
};

export const deleteUserCommentList = async ({ token, commentIdList }: IGetMyPageUserInfoParameter): Promise<null> => {
  try {
    const data = await serverAxios.delete(`${MY_PAGE_URL_PREFIX}/comment`, {
      headers: { Accept: 'application/json', Authorization: token },
      data: {
        commentID: commentIdList,
      },
    });

    if (data.status === 200) {
      return null;
    } else {
      throw new Error();
    }
  } catch (err) {
    return null;
  }
};

export const deleteUserChallengeBookmark = async ({
  token,
  challengeId,
}: IDeleteMyPageUserChallengeParameter): Promise<null> => {
  try {
    const data = await serverAxios.delete(`${MY_PAGE_URL_PREFIX}/challenge/${challengeId}`, {
      headers: { Accept: 'application/json', Authorization: token },
    });

    if (data.status === 200) {
      return null;
    } else {
      throw new Error();
    }
  } catch (err) {
    return null;
  }
};
