import axios from "axios";
import { getUserFromLocalStorage } from "../utils/localstorage";

export const customFetch = axios.create({
  baseURL: "http://karfree-001-site1.atempurl.com/api/",
});

// Add a request interceptor
customFetch.interceptors.request.use(
  (request) => {
    const token = getUserFromLocalStorage().token;
    if (token) {
      request.headers["Authorization"] = "Bearer " + token;
    }
    request.headers["Content-Type"] = "application/json";
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

customFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    Promise.reject(error);
  }
);
