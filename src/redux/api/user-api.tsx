import { Response } from "../../types";
import { api } from "./index";

const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query<Response, void>({
            query: () => ({
                url: "/users"
            }),
            providesTags: ["Products"]
        }),
        getProfile: build.query<Response, void>({
            query: () => ({
                url: "/auth/me",
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }),
            providesTags: ["Products"]
        }),
        login: build.mutation<Response, void>({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body
            }),
        }),
        register: build.mutation<Response, void>({
            query: (body) => ({
                url: "/users/add",
                method: "POST",
                body
            }),
        })
    })
})

export const { useGetUsersQuery, useGetProfileQuery, useLoginMutation, useRegisterMutation } = userApi;