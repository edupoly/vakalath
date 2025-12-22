// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_BASE_URL =
//   import.meta.env.MODE === "development"
//     ? "http://localhost:4500"
//     : window.location.origin;
    
// Define a service using a base URL and expected endpoints
export const caseDetailsApi = createApi({
  reducerPath: "caseDetailsApi",
    // baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/api/cases` }),
  baseQuery: fetchBaseQuery({ baseUrl: "https://vakalath-backend-production.up.railway.app/api/cases" }),
  endpoints: (builder) => ({
    getAllCasesById: builder.query({
      query: (id) => `/getAllCasesById/${id}`,
    }),
    getCaseById: builder.query({
      query: (id) => `/getCaseById/${id}`,
    }),
    getCasesById: builder.query({
      query: (id) => `/getCasesById/${id}`,
    }),
    fileCase: builder.mutation({
      query: (caseData) => ({
        url: "/fileCase",
        method: "POST",
        body: caseData,
      }),
    }),
    editFileCase: builder.mutation({
      // for updating cases
      query: (data) => ({
        url: `/editFileCase/${data['_id']}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteFileCase: builder.mutation({
      query: (id) => ({
        url: `/deleteFileCase/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllCasesByIdQuery,
  useFileCaseMutation,
  useGetCaseByIdQuery,
  useLazyGetCaseByIdQuery,
  useLazyGetAllCasesByIdQuery,
  useEditFileCaseMutation,
  useDeleteFileCaseMutation,
  useGetCasesByIdQuery,
  useLazyGetCasesByIdQuery,
} = caseDetailsApi;