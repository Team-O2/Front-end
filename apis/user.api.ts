import { serverAxios } from 'libs/axios';
import { IUserState } from 'types/global.type';

const PREFIX_URL = '/user';

export const getUserData = async (token: string): Promise<IUserState | null> => {
  try {
    const data = await serverAxios.get(`${PREFIX_URL}/userInfo`, {
      headers: {
        Authorization: token,
      },
    });
    if (data.data.status === 200) {
      if (data.data.data !== undefined) {
        return {
          interest: data.data.data.interest,
          isMarketing: data.data.data.isMarketing,
          img: data.data.data.img,
          id: data.data.data.id,
          email: data.data.data.email,
          nickname: data.data.data.nickname,
        };
      }
    }
  } catch (e) {
    alert(e?.response?.data?.message);
  }
  return null;
};

export const postNewPw = async (token: string | undefined, password: string, newPassword: string): Promise<boolean> => {
  try {
    const data = await serverAxios.patch(
      `${PREFIX_URL}/password`,
      { password, newPassword },
      { headers: { Authorization: token } },
    );
    if (data.data.status === 200) {
      return true;
    }
  } catch (e) {
    // alert(e?.response?.data?.message);
  }
  return false;
};

export const getUserInfo = async (token: string) => {
  try {
    const data = await serverAxios.get(`${PREFIX_URL}/userInfo`, { headers: { Authorization: token } });
    if (data.data.status === 200) {
      return data.data.data;
    }
  } catch (e) {
    alert(e?.response?.data?.message);
    return null;
  }
};

export const updateUserInfo = async (
  token: string | undefined,
  img: any,
  nickname: string,
  interest: string[],
  isMarketing: boolean,
) => {
  try {
    const body = new FormData();
    if (img) {
      body.append('img', img);
    }
    body.append('nickname', nickname);
    body.append('interest', `[${interest.map((item) => `"${item}"`).join(', ')}]`);
    body.append('isMarketing', String(isMarketing));

    const data = await serverAxios.patch(`${PREFIX_URL}/userInfo`, body, { headers: { Authorization: token } });
    if (data.data.status === 200) {
      return data.data;
    }
  } catch (e) {
    alert(e?.response?.data?.message);
    return null;
  }
};

export const SignRegister = async (signData: { challengeCNT: number }, token: string): Promise<boolean> => {
  try {
    const data = await serverAxios.post('/user/register', signData, {
      headers: {
        Authorization: token,
      },
    });
    console.log('[SUCCESS] POST data', data);
    return true;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
    }
    console.log('[FAIL] POST data', error.response.data);
  }
  return false;
};
