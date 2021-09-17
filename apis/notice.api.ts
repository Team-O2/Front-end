import { serverAxios } from 'libs/axios';
import {
  IFetchComment,
  IFetchParameter,
  INotice,
  INoticeCommentData,
  INoticeList,
  ISearchNoticeList,
} from '../types/notice.type';

const PREFIX_URL = '/notice';

export const getNoticeListData = async ({ limit = 8, offset = 0 }: IFetchParameter): Promise<INoticeList | null> => {
  try {
    const data = await serverAxios.get(`${PREFIX_URL}`, {
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
    return null;
  }
};

export const getNoticeData = async (noticeID: string | string[]): Promise<INotice | null> => {
  try {
    const data = await serverAxios.get(`${PREFIX_URL}/${noticeID}`, {});
    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

export const getNoticeSearchData = async ({
  limit = 8,
  offset = 0,
  keyword,
}: IFetchParameter): Promise<ISearchNoticeList | null> => {
  try {
    const data = await serverAxios.get(`${PREFIX_URL}/search?keyword=${keyword}`, {
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
    return null;
  }
};

export const postNoticeComment = async (
  token: string,
  noticeID: number | undefined,
  commentData: INoticeCommentData,
): Promise<IFetchComment | null> => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/${noticeID}/comment`, commentData, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 201) {
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};
