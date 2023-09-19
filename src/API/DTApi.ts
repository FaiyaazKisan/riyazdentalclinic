import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import React from 'react'

const DTApi=createApi({
    reducerPath:"DTApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://192.168.0.106:7010/api/",
    prepareHeaders:(headers)=>{
        const token=localStorage.getItem("token");
        token && headers.append("Authorization", "Bearer "+token);
    }}),
    tagTypes:["DTTag"],
    endpoints:(builder)=>({
        getDT: builder.query({
            query:()=>({
                url:"DoctorsTestimonials"
            }),
            providesTags:["DTTag"]
        }),
        getDTById:builder.query({
            query:(id)=>({
                url:"DoctorsTestimonials/"+id
            }),
            providesTags:["DTTag"]
        }),
        createDT:builder.mutation({
            query:(DTData)=>({
                url:"DoctorsTestimonials",
                method:"POST",
                body:DTData
            }),
            invalidatesTags:["DTTag"]
        }),
        editDT:builder.mutation({
            query:({id, DTData})=>({
                url:"DoctorsTestimonials/"+id,
                method:"PUT",
                body:DTData
            }),
            invalidatesTags:["DTTag"]
        }),
        deleteDT:builder.mutation({
            query:(id)=>({
                url:"DoctorsTestimonials/"+id,
                method:"DELETE"
            }),
            invalidatesTags:["DTTag"]
        })
    })
})

export const {useGetDTQuery, useCreateDTMutation, useEditDTMutation, useGetDTByIdQuery, useDeleteDTMutation}=DTApi;
export default DTApi;