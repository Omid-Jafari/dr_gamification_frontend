import toast from "react-hot-toast";
import axios from "axios";
const BASE_URL = "http://localhost:4000/";
const useAxios = axios.create({
  baseURL: BASE_URL,
});

useAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

useAxios.interceptors.response.use(
  (response) => {
    if (response.data.message != "") toast.success(response.data.message);
    return response;
  },
  (error) => {
    toast.error(error?.response?.data?.error);

    return Promise.reject(error);
  }
);

export default useAxios;