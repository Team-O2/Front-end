import { serverAxios } from 'libs/axios';
import {
  IGetMyPageUserInfoParameter,
  IMyPageHeader,
  IMyScrappedLearnMyself,
  IMyScrappedShareTogether,
  IMyUserCommentResponse,
  IMyUserLearnMyself,
} from '../types/myPage';

export const getMyPageUserInfo = async (token?: string): Promise<IMyPageHeader | null> => {
  try {
    const data = await serverAxios.get('/user/mypage/info', {
      headers: { Accept: 'application/json', Authorization: token },
    });
    if (data.status === 200) {
      return data.data.data;
    } else {
      throw new Error('통신성공 데이터 없음');
    }
  } catch (err) {
    console.log(err.message);
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

export const getShareTogetherListData = async ({
  token,
  limit = 6,
  offset = 0,
}: IFetchParameter): Promise<IMyScrappedShareTogether | null> => {
  try {
    const data = await serverAxios.get('/user/mypage/concert', {
      headers: { Accept: 'application/json', Authorization: token },
      params: { limit, offset },
    });
    if (data.status === 200) {
      return data?.data?.data || null;
    } else {
      throw new Error('통신성공 데이터 없음');
    }
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getLearnMyselfListData = async ({
  token,
  limit = 8,
  offset = 0,
}: IFetchParameter): Promise<IMyScrappedLearnMyself | null> => {
  try {
    const data = await serverAxios.get('/user/mypage/challenge', {
      headers: { Accept: 'application/json', Authorization: token },
      params: { limit, offset },
    });
    if (data.status === 200) {
      return data?.data?.data || null;
    } else {
      throw new Error('통신성공 데이터 없음');
    }
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getUserLearnMyselfListData = async ({
  token,
  limit = 8,
  offset = 0,
}: IFetchParameter): Promise<IMyUserLearnMyself | null> => {
  try {
    const data = await serverAxios.get('/user/mypage/challenge', {
      headers: { Accept: 'application/json', Authorization: token },
      params: { limit, offset },
    });
    if (data.status === 200) {
      return data.data.data;
    } else {
      throw new Error('통신성공 데이터 없음');
    }
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const getUserCommentListData = async ({
  token,
  limit = 5,
  offset = 0,
  category,
}: IFetchCommentParameter): Promise<IMyUserCommentResponse | null> => {
  try {
    const data = await serverAxios.get('/user/mypage/comment', {
      headers: { Accept: 'application/json', Authorization: token },
      params: { limit, offset, postModel: category },
    });

    if (data.status === 200) {
      return data.data.data;
    } else {
      throw new Error('통신성공 데이터 없음');
    }
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export const deleteUserCommentList = async ({ token, commentIdList }: IGetMyPageUserInfoParameter): Promise<null> => {
  try {
    const data = await serverAxios.delete('/user/mypage/comment', {
      headers: { Accept: 'application/json', Authorization: token },
      data: {
        commentID: commentIdList,
      },
    });

    if (data.status === 200) {
      return data.data.data;
    } else {
      throw new Error('통신성공 데이터 없음');
    }
  } catch (err) {
    console.log(err.message);
    return null;
  }
};
