import { fetchBaseQuery, retry, createApi } from "@reduxjs/toolkit/query/react";
import { signOut } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";

const baseQuery = async (args: any, api: any, extraOptions: any) => {
    const navigate = useNavigate()
    const {dispatch} = api;
    const rawBaseQuery = fetchBaseQuery({
        baseUrl: "https://dummyjson.com/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token") as string;

            if(token){
                headers.set("Authorization", `Bearer ${token}`)
            }

            return headers
        }
    })

    const response = await rawBaseQuery(args, api, extraOptions)

    

    if(response.error){
        const {status} = response.error;
        if(status === 401 || status === 403){
            dispatch(signOut())
            navigate("/auth")
        }
    }

    return response
}

const fetchBaseQueryWithRetry = retry(baseQuery, {maxRetries: 0});

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQueryWithRetry,
    tagTypes: ["Products"],
    endpoints: () => ({})
})
