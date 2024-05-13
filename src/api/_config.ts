import { API_URL } from "../config/config";

export interface MethodsEntity {
  GET: "get";
  POST: "post";
  PUT: "put";
  PATCH: "patch";
  DELETE: "delete";
}


export const Config = {
    baseURL: API_URL,
    auth: {
      root: "/",
      login: "login",
    },
}
