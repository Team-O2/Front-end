import axios from 'axios';

export const serverAxios = axios.create({
  // baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
  baseURL: 'http://3.37.218.69:5000',
  withCredentials: true,
});

interface ILoginData {
  email: string;
  password: string;
}

export const postLogin = async (loginData: ILoginData) => {
  try {
    const data = await serverAxios.post('/auth/signin', loginData);
    return data;
  } catch (e) {
    return e.response.data;
  }
};
