import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const EmailApi=createApi({
reducerPath:"EmailApi",
baseQuery:fetchBaseQuery({baseUrl:"https://192.168.0.106:7010/api/"}),
endpoints:builder=>({
PostEmailApi:builder.mutation({
    query:(htmlMessage)=>({
        url:"EmailController",
        method:"POST",
        params:{
            htmlMessage:htmlMessage
        }
    })
})
})
})

export const {usePostEmailApiMutation}=EmailApi;
export default EmailApi;