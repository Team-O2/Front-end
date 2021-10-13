import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const serverAxios = axios.create({
  baseURL: publicRuntimeConfig.backendUrl,
  withCredentials: true,
});
