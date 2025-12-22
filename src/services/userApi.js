// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_BASE_URL =
//   import.meta.env.MODE === "development"
//     ? "http://localhost:4500"
//     : window.location.origin;

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  // baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/api/users` }),
  baseQuery: fetchBaseQuery({ baseUrl: "https://vakalath-backend-production.up.railway.app/api/users" }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: '/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    logIn: builder.mutation({
      query: (userData) => ({
        url: '/login',
        method: 'POST',
        body: userData,
      }),
    }),
    getProfile: builder.query({
      query: (token) => ({
        url: '/profile/' + token,
        method: 'GET'
      }),
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation,useGetProfileQuery } = usersApi;
