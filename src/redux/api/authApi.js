import { baseApi } from "./baseApi"




export const AUTH_URL= '/auth'

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    userSignup: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    userLogin: build.mutation({
      query: (loginData) => ({
        url:`${AUTH_URL}/signin`,
        method:"POST",
        data: loginData

      }),
      invalidatesTags:['user']
    }),
  }),
  
})

export const { useUserSignupMutation, useUserLoginMutation} = authApi