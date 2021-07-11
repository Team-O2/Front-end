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
    return data.data;
  } catch (e) {
    return e.response.data;
  }
};

export const postJoin = async (joinData: IJoinData) => {
  try {
    const data = await serverAxios.post('/auth/signup', joinData);
    return data.data;
  } catch (e) {
    return e.response.data;
  }
};
