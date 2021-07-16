import { serverAxios } from 'libs/axios';

interface IConcertCommentData {
  parentID?: string;
  text: string;
}
interface INoticeCommentData {
  parentID?: string;
  text: string;
}
interface IFetchParameter {
  token?: string;
  limit?: number;
  offset?: number;
  keyword?: string;
  tag?: string;
}
export const getConcertListData = async (token: string) => {
  try {
    const data = await serverAxios.get('/concert', {
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
    return undefined;
  }
};

export const getConcertData = async (concertID: string) => {
  try {
    const data = await serverAxios.get(`/concert/${concertID}`, {
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
    return undefined;
  }
};

export const getConcertUserData = async (token: string, concertID: string) => {
  try {
    const data = await serverAxios.get(`/concert/${concertID}`, {
      headers: {
        Authorization: token,
      },
      params: {
        concertID: concertID,
      },
    });
    if (data.data.status === 200) {
      console.log(data.data.data);
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};

export const getConcertSearchData = async ({ limit = 11, offset = 0, keyword, tag }: IFetchParameter) => {
  try {
    const data = await serverAxios.get(`/concert/search?tag=${tag}&keyword=${keyword}`, {
      params: {
        offset,
        limit,
      },
    });
    if (data.data.status === 200) {
      console.log(data.data.data);
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};

export const postConcertComment = async (
  token: string,
  concertID: string | undefined,
  commentData: IConcertCommentData,
) => {
  try {
    const data = await serverAxios.post(`/concert/comment/${concertID}`, commentData, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      alert(data.data.message);
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};

export const postConcertLike = async (token: string, concertID: string) => {
  try {
    const data = await serverAxios.post(`/concert/like/${concertID}`, '', {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
    } else {
      return null;
    }
  } catch (e) {
    if (e.response.data.status === 400) {
      return true;
    }
    alert(e.response.data.message);
    return undefined;
  }
};

export const deleteConcertLike = async (token: string, concertID: string) => {
  try {
    const data = await serverAxios.delete(`/concert/like/${concertID}`, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};

export const postConcertScrap = async (token: string, concertID: string) => {
  try {
    const data = await serverAxios.post(`/concert/scrap/${concertID}`, '', {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
    } else {
      return null;
    }
  } catch (e) {
    if (e.response.data.message === '이미 스크랩 된 글입니다') {
      return true;
    }
    alert(e.response.data.message);
    return undefined;
  }
};

export const deleteConcertScrap = async (token: string, concertID: string) => {
  try {
    const data = await serverAxios.delete(`/concert/scrap/${concertID}`, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};

export const getNoticeListData = async ({ limit = 8, offset = 0 }: IFetchParameter) => {
  try {
    const data = await serverAxios.get('/notice', {
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
    return undefined;
  }
};

export const getNoticeData = async (noticeID: string) => {
  try {
    const data = await serverAxios.get(`/notice/${noticeID}`, {});
    if (data.data.status === 200) {
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};

export const getNoticeSearchData = async ({ limit = 8, offset = 0, keyword }: IFetchParameter) => {
  try {
    const data = await serverAxios.get(`/notice/search?keyword=${keyword}`, {
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
    return undefined;
  }
};

export const postNoticeComment = async (
  token: string,
  noticeID: string | undefined,
  commentData: INoticeCommentData,
) => {
  try {
    const data = await serverAxios.post(`/notice/comment/${noticeID}`, commentData, {
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
