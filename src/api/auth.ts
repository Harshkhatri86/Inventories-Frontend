import { AxiosError } from "axios";
import { Config } from "./_config";
import { initializeAxios } from "./_main";

const { baseURL, auth } = Config;

export const loginAPI = (data: any) => {
  const axiosClient = initializeAxios(baseURL, undefined);

  const path = auth.root + auth.login;
  return new Promise<{ success: boolean; body?: any; message?: string }>(
    (resolve, reject) => {
      axiosClient
        .post(path, data)
        .then((res) => {
          resolve({
            success: true,
            body: res.data,
            message: res.data?.message || "Login successfully",
          });
        })
        .catch((error : AxiosError) => {
          reject({ success: false, message: error });
        });
    }
  );
};
