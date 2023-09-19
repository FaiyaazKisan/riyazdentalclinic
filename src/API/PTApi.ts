import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import React from 'react'

const PTApi=createApi({
    reducerPath:"PTApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://192.168.0.106:7010/api/",
    prepareHeaders:(headers)=>{
        const token=localStorage.getItem("token");
        token && headers.append("Authorization", "Bearer "+token);
    }}),
    tagTypes:["PTTag"],
    endpoints:(builder)=>({
        getPT: builder.query({
            query:()=>({
                url:"PatientsTestimonials"
            }),
            providesTags:["PTTag"]
        }),
        getPTById:builder.query({
            query:(id)=>({
                url:"PatientsTestimonials/"+id
            }),
            providesTags:["PTTag"]
        }),
        createPT:builder.mutation({
            query:(PTData)=>({
                url:"PatientsTestimonials",
                method:"POST",
                body:PTData
            }),
            invalidatesTags:["PTTag"]
        }),
        editPT:builder.mutation({
            query:({id, PTData})=>({
                url:"PatientsTestimonials/"+id,
                method:"PUT",
                body:PTData
            }),
            invalidatesTags:["PTTag"]
        }),
        deletePT:builder.mutation({
            query:(id)=>({
                url:"PatientsTestimonials/"+id,
                method:"DELETE"
            }),
            invalidatesTags:["PTTag"]
        })
    })
})

export const {useGetPTQuery, useCreatePTMutation, useEditPTMutation, useGetPTByIdQuery, useDeletePTMutation}=PTApi;
export default PTApi;