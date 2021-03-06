import axios from 'axios';

const BASE_URL = `https://jsonplaceholder.typicode.com`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    throw err.message;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
