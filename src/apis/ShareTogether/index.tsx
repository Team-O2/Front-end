import { serverAxios } from 'libs/axios';

interface IConcertCommentData {
  parentID?: string;
  text: string;
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

export const getConcertData = async (token: string, concertID: string) => {
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
      return data.data.data;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};

export const getConcertSearchData = async (token: string, tag: string, keyword: string) => {
  try {
    const data = await serverAxios.get(`/concert/search?tag=${tag}&keyword=${keyword}`, {
      headers: {
        Authorization: token,
      },
      params: {
        limit: 8,
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
    const data = await serverAxios.post(`/concert/like/${concertID}`, {
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

export const getNoticeListData = async (token: string) => {
  try {
    const data = await serverAxios.get('/notice', {
      headers: {
        Authorization: token,
      },
      params: {
        limit: 40,
      },
    });
    if (data.data.status === 200) {
      return data.data.data.notices;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};

export const getNoticeData = async (token: string, noticeID: string) => {
  try {
    const data = await serverAxios.get(`/notice/${noticeID}`, {
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
    return undefined;
  }
};

export const getNoticeSearchData = async (token: string, keyword: string) => {
  try {
    const data = await serverAxios.get(`/notice/search?keyword=${keyword}`, {
      headers: {
        Authorization: token,
      },
      params: {
        limit: 8,
      },
    });
    if (data.data.status === 200) {
      return data.data.data.searchData;
    } else {
      return null;
    }
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};
