import {baseApi} from './baseApi'

const SERVICE = "/services";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleService: build.query({
      query: (id) => ({
        url: `${SERVICE}/${id}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    getServices: build.query({
      query: (arg) => {
        return {
          url: SERVICE,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response, meta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: ["service"],
    }),
  }),
});

export const { useGetServicesQuery, useGetSingleServiceQuery } = serviceApi;