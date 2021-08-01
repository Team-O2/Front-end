import { serverAxios } from 'libs/axios';
import { IJoin } from 'types/join.type';
import { IGetLogin, ILogin } from 'types/login.type';

const PREFIX_URL = '/auth';

export const postLogin = async (loginData: ILogin): Promise<IGetLogin | null> => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/signin`, loginData);
    if (data !== undefined) {
      return data.data;
    }
  } catch (e) {
    if (e.response !== undefined) {
      return e.response.data;
    }
  }
  return null;
};

export const postJoin = async (joinData: IJoin): Promise<boolean> => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/signup`, joinData);
    if (data !== undefined) {
      if (data.data.status === 201) return true;
    }
  } catch (e) {
    if (e.response !== undefined) {
      alert(e.response.data.message);
    }
  }
  return false;
};

export const sendEmail = async (email: string): Promise<boolean> => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/email`, { email: email });
    if (data.data.status === 200) {
      return true;
    }
  } catch (e) {}
  return false;
};

export const sendVerifinum = async (email: string, verifiNum: string): Promise<boolean | null> => {
  try {
    const data = await serverAxios.post(`${PREFIX_URL}/code`, { email: email, emailCode: verifiNum });
    if (data.data.status === 200) {
      return data.data.data.isOkay;
    }
  } catch (e) {
    return null;
  }
  return null;
};

export const patchNewPwd = async (email: string, pwd: string): Promise<boolean> => {
  const data = await serverAxios.patch(`${PREFIX_URL}/pw`, { email: email, password: pwd });
  if (data.data.status === 200) return true;
  else return false;
};

export const getGeneration = async (): Promise<{ registGeneration: number | null; progressGeneration: number }> => {
  const data = await serverAxios.get(`${PREFIX_URL}/hamburger`);
  return data.data.data;
};
