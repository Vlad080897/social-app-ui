import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { authService } from "./auth.service";
import camelCase from "camelcase";

export const applyAccessToken = (req: InternalAxiosRequestConfig) => {
  const accessToken = authService.getAuthToken();

  return {
    ...req,
    headers: {
      ...req.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  } as InternalAxiosRequestConfig;
};

export const objectKeysToCamelCase = (res: AxiosResponse) => {
  const obj = res.data;

  const convert = (obj: unknown): unknown => {
    if (Array.isArray(obj)) {
      return obj.map((item) => convert(item));
    }

    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    const converted: Record<string, unknown> = {};

    Object.keys(obj).forEach((key) => {
      const value = obj[key as keyof typeof obj];

      if (typeof value === "object" && value !== null) {
        converted[camelCase(key)] = convert(value);
      } else {
        converted[camelCase(key)] = value;
      }
    });

    return converted;
  };

  return {
    ...res,
    data: convert(obj),
  };
};
