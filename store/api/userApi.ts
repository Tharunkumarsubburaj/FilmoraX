import { user } from "@/types/userTypes";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseQuery";
export const userApi = createApi({
  reducerPath: "user",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    fetchUser: builder.query<user, void>({
      query: () => ({
        url: `/tmdb/user`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchUserQuery } = userApi;
