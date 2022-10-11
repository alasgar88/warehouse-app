import axios from "axios";
import { getUserFromLocalStorage } from "../utils/localstorage";
export const customFetch = axios.create({
  baseURL: "http://karfree-001-site1.atempurl.com/api/",
});

// Add a request interceptor
customFetch.interceptors.request.use(
  (config) => {
    const token = getUserFromLocalStorage().token;
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const paginationSize = 6;
