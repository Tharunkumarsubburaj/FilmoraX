import apiAxiosInstance from "@/axiosInstance/apiAxiosInstance";
import { apiKey } from "@/components/server/configurExport";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosRequestConfig } from "axios";

interface AxiosBaseQueryArgs {
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
}

export const axiosBaseQuery =
  (): BaseQueryFn<AxiosBaseQueryArgs, unknown, unknown> =>
  async ({ url, method = "GET", data, params, headers }) => {
    try {
      console.log("🚀 Making request:", { url, method, params, data });
      const res = await apiAxiosInstance({
        url,
        method,
        data,
        params: params ? { ...params } : { api_key: apiKey },
        headers,
      });
      console.log("✅ Response received:", res.data);
      return { data: res.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      console.error("❌ Request failed:", {
        url,
        params,
        error: err.response?.data || err.message,
      });

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
