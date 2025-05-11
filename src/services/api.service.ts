import axios from "axios";
import { applyAccessToken, objectKeysToCamelCase } from "./auth/auth.utils";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;

api.interceptors.request.use(applyAccessToken);

api.interceptors.response.use(objectKeysToCamelCase);
