import { Response } from "../../types";
import { api } from "./index";

const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query<Response, void>({
            query: () => ({
                url: "/users"
            }),
            providesTags: ["Products"]
        })
    })
})

export const { useGetUsersQuery } = userApi;