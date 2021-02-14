import axios from "axios";

const TOKEN = `4c93de0bf0774ece921e1aa93e5c2419`;
const URL = `http://api.football-data.org/v2/`;
const REQUEST_TIMEOUT = 5000;


const HttpCode = {
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
    // withCredentials: false,
    headers: {
      "X-Auth-Token": TOKEN,
    }
  });

  const OnSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(OnSuccess, onFail);

  return api;
};
