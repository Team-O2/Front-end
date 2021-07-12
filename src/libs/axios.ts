import axios from 'axios';

export const serverAxios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  withCredentials: true,
});

interface ILoginData {
  email: string;
  password: string;
}
interface IJoinData {
  email: string;
  password: string;
  nickname: string;
  interest: string[];
  gender: number;
  marpolicy: boolean;
}

export const postLogin = async (loginData: ILoginData) => {
  try {
    const data = await serverAxios.post('/auth/signin', loginData);
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

export const postJoin = async (joinData: IJoinData) => {
  try {
    const data = await serverAxios.post('/auth/signup', joinData);
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
