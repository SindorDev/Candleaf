import { IComment, Response } from "../../types";
import { api } from "./index";

const productsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<Response, void>({
            query: () => ({
                url: "/products"
            }),
            providesTags: ["Products"]
        }),
        getProductById: build.mutation<Response, number>({
            query: (id) => ({
                url: `/products/${id}`
            }),
            invalidatesTags: ["Products"]
        }),
        getProductComments: build.query<IComment[], void>({
            query: () => ({
                url: `/comments`
            }),
            providesTags: ["Products"]
        })
    })
})

export const {useGetProductsQuery, useGetProductByIdMutation, useGetProductCommentsQuery} = productsApi;