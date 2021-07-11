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
    console.log('data', loginData);
    const data = await serverAxios.post('/auth/signin', loginData);
    console.log('[SUCCESS] POST host data');
    return data;
  } catch (e) {
    console.log('[FAIL] POST host data', e);
    return null;
  }
};
