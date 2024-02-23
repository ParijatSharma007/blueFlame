import { BaseApiResponse } from "@/interface/common.interface";
import axios, { AxiosError, AxiosResponse } from "axios";
import { getAccessToken } from "../enToken";
import { baseUrlApi } from "../endpoints";

const axiosInstance = axios.create({
  baseURL: baseUrlApi
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken()
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res?.data;
  },
  async (error: AxiosError<BaseApiResponse>) => {
    // globalCatchError(error);

    const originalRequest = error.config;
    if (error.response && [301, 302].includes(error.response.status)) {
      const redirectUrl = error.response.headers.location;
      return axiosInstance.get(redirectUrl);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
