import { axiosBaseQuery } from "@/store/baseQuery";
import { MovieApiResponse } from "@/types/movieTypes";
import { createApi } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["movie"],
  endpoints: (builder) => ({
    fetchMovies: builder.query<MovieApiResponse, void>({
      query: () => ({
        url: `/tmdb/discover/movies`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchMoviesQuery } = movieApi;