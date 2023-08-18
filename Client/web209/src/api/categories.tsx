import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface ICategory {
    id?: string ,
    data: {
        name: string
    }
}
interface IDataQuery {
    page?: number,
    limit?: number
}

const categoryApi = createApi({
    reducerPath:'categories',
    tagTypes: ['Categories'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("access_token");
            headers.set("authorization", `Bearer ${token}`)
            // modify header theo từng request
            return headers;
        },
    }),
    endpoints: (builder)=>({
        getCategories: builder.query<any , any>({
            query: (dataQuery:IDataQuery)=> `/categories?page=${dataQuery.page || 1}&limit=${dataQuery.limit || 0}`,
            providesTags: ['Categories']
        }),
        getCategoryById: builder.query<any , any>({
            query: (id)=> `/categories/${id}`
        }),
        addCategory: builder.mutation({
            query: (data:ICategory)=>({
                url: `/categories`,
                method:"POST",
                body: data
            }),
            invalidatesTags: ['Categories']
        }),
        updateCategory: builder.mutation<any, any>({
            query: (data:ICategory)=>({
                url: `/categories/${data.id}`,
                method:"PATCH",
                body: data.data
            }),
            invalidatesTags: ['Categories']
        }),
        removeCate: builder.mutation<any, any>({
            query: (id)=>({
                url: `/categories/${id}`,
                method:"DELETE",
                // body: data.data
            }),
            invalidatesTags: ['Categories']
        }),
    })
})


export const {useGetCategoriesQuery, useRemoveCateMutation,useGetCategoryByIdQuery, useAddCategoryMutation, useUpdateCategoryMutation} = categoryApi
export const categoryReducer = categoryApi.reducer
export default categoryApi