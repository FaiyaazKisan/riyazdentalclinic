import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const AuthApi=createApi({
    reducerPath:"AuthApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://192.168.0.106:7010/api/"}),
    endpoints:builder=>({
        postLogin:builder.mutation({
            query:(loginData)=>({
                url:"Auth/login",
                method:"POST",
                headers:{
                    "Content-type": "application/json"
                },
                body:loginData
            })
        })
    })
})
export const {usePostLoginMutation}=AuthApi;
export default AuthApi;