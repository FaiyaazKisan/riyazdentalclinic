import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import React from 'react'

const MyCasesApi=createApi({
    reducerPath:"MyCasesApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://192.168.0.106:7010/api/",
        prepareHeaders:(headers)=>{
            const token=localStorage.getItem("token");
            token && headers.append("Authorization", "Bearer "+token);
        }
    }),
    tagTypes:["MyCasesTag"],
    endpoints:(builder)=>({
        getMyCases: builder.query({
            query:()=>({
                url:"MyCases"
            }),
            providesTags:["MyCasesTag"]
        }),
        getMyCasesById:builder.query({
            query:(id)=>({
                url:"MyCases/"+id
            }),
            providesTags:["MyCasesTag"]
        }),
        createMyCases:builder.mutation({
            query:(MyCasesData)=>({
                url:"MyCases",
                method:"POST",
                body:MyCasesData
            }),
            invalidatesTags:["MyCasesTag"]
        }),
        editMyCases:builder.mutation({
            query:({id, MyCasesData})=>({
                url:"MyCases/"+id,
                method:"PUT",
                body:MyCasesData
            }),
            invalidatesTags:["MyCasesTag"]
        }),
        deleteMyCase:builder.mutation({
            query:(id)=>({
                url:"MyCases/"+id,
                method:"DELETE"
            }),
            invalidatesTags:["MyCasesTag"]
        })
    })
})

export const {useGetMyCasesQuery, useCreateMyCasesMutation, useEditMyCasesMutation, useGetMyCasesByIdQuery, useDeleteMyCaseMutation}=MyCasesApi;
export default MyCasesApi;