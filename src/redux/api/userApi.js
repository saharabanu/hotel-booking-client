import { baseApi } from "./baseApi";


const USERS = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
// all users

getUsers: build.query({
  query: (arg) => {
    return {
      url: USERS,
      method: "GET",
      params: arg,
    };
  },
  transformResponse: (response, meta) => {
    return {
      users: response,
      meta,
    };
  },
  providesTags: ["user"],
}),


    // // single user
    // getSingleUser: build.query({
    //   query: (id) => ({
    //     url: `${USERS}/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["user"],
    // }),

    getSingleUser: build.query({
      query: (id) => ({
        url: `${USERS}/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),

     // update User
     updateUser: build.mutation({
      query: (data) => ({
        url: `${USERS}/${data?.id}`,
        method: "PATCH",
        data: data.body



      }),

      invalidatesTags: ['user']
    }),

     // delete User
  
     deleteUser: build.mutation({
      query: (id) => ({
        url:`${USERS}/${id}`,
        method:"DELETE",
        
        

      }),
      
      invalidatesTags:['user']
    }),
    
  }),
});

export const { useGetUsersQuery,useGetSingleUserQuery, useUpdateUserMutation, useDeleteUserMutation  } = userApi;