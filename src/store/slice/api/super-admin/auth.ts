import { AuthType } from '@/utils/types/categories';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (auth) => ({
        url: `http://localhost:3000/api/v1/auth/login`,
        method: 'POST',
        body: auth,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
