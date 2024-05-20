import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = import.meta.env.VITE_ASU;
const page = 1;
export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?&api_key=${tmdbApiKey}`,
    }),

    // Get trending movies
    getMovies: builder.query({
      // query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
      query: ({ genreOrCategoryName, page, searchQuery }) => {
        // get movie by search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }
        // get movie by vategory
        if (genreOrCategoryName && typeof genreOrCategoryName === "string") {
          return `movie/${genreOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }
        // get movie by genre
        if (genreOrCategoryName && typeof genreOrCategoryName === "number") {
          return `discover/movie?with_genres=${genreOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }
        // Get movies by trending
        return `trending/movie/day?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),

    //Get Movie
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),

    //Get User Specifict list
    getRecommendation: builder.query({
      query: ({ movie_id, list }) =>
        `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),
    // get actor profile
    getActorDetail: builder.query({
      query: (id) => `/person/${id}?api_key=${tmdbApiKey}`,
    }),
    getMoviesByActorId: builder.query({
      query: ({ id, page }) =>
        `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
    }),
    //api addto fav and watchlist
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) =>
        `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetRecommendationQuery,
  useGetActorDetailQuery,
  useGetMoviesByActorIdQuery,
  useGetListQuery,
} = tmdbApi;
