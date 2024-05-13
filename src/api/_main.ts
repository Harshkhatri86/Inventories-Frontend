import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

let axiosClient: AxiosInstance; // Initialize with null

export const initializeAxios = (
  baseURL: string | undefined,
  token: string | undefined
): AxiosInstance => {
  axiosClient = axios.create({
    baseURL,
    // withCredentials: true,
  });

  axiosClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => {
      if (config.url !== "/login") config.headers["Token"] = token;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosClient.interceptors.response.use(
    (res: AxiosResponse) => {
      return res;
    },
    async (error) => {
      const status = error.response?.data.status_code;

      if (error.response && status === "REBEL-401") {
        sessionStorage.clear();
        setTimeout(() => {
          window.location.pathname = "/login";
        }, 500);
      }

      return Promise.reject(error);
    }
  );

  return axiosClient;
};

// export default axiosClient;
