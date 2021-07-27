import { serverAxios } from 'libs/axios';

interface ILoginData {
  email: string;
  password: string;
}

const PREFIX_URL = '/auth';

export const postLogin = async (loginData: ILoginData) => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/signin`, loginData);
    if (data !== undefined) {
      return data.data;
    } else {
      return undefined;
    }
  } catch (e) {
    if (e.response !== undefined) {
      return e.response.data;
    } else {
      return undefined;
    }
  }
};

interface IJoinData {
  email: string;
  password: string;
  nickname: string;
  interest: string[];
  gender: number;
  marpolicy: boolean;
}

export const postJoin = async (joinData: IJoinData) => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/signup`, joinData);
    if (data !== undefined) {
      return data.data;
    } else {
      return undefined;
    }
  } catch (e) {
    if (e.response !== undefined) {
      return e.response.data;
    } else {
      return undefined;
    }
  }
};

export const sendEmail = async (email: string) => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/email`, { email: email });
    if (data.data.status === 200) {
      return true;
    }
  } catch (e) {}
  return false;
};

export const sendVerifinum = async (email: string, verifiNum: string) => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/code`, { email: email, emailCode: verifiNum });
    if (data.data.status === 200) {
      return data.data.data.isOkay;
    }
  } catch (e) {
    return null;
  }
};

export const patchNewPwd = async (email: string, pwd: string) => {
  const data = await serverAxios.patch(`${PREFIX_URL}/pw`, { email: email, password: pwd });
  if (data.data.status === 200) return true;
  else return false;
};

export const getGeneration = async () => {
  const data = await serverAxios.get(`${PREFIX_URL}/hamburger`);
  return data.data.data;
};
