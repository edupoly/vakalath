// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const caseDetailsApi = createApi({
  reducerPath: "caseDetailsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500/api/cases" }),
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
        url: `/editFileCase/${data._id}`,
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
    convertPdfToDocx: builder.mutation({
      query: (pdfFile) => {
        const formData = new FormData();
        formData.append('file', pdfFile);

        return {
          url: 'convert-pdf-to-docx',
          method: 'POST',
          body: formData,
          // Custom response handler to return blob
          responseHandler: async (response) => {
            const blob = await response.blob();
            return blob;
          },
        };
      },
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
  useConvertPdfToDocxMutation
} = caseDetailsApi;