import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface IProductApi {
    id?: string,
    data: {
        name: string,
        category:string,
        description: string,
        images: string[],
        price: number,
        discount: number,
        quantity: number
    }
}

interface IDataQuery {
    page?: number,
    limit?: number,
    category?:string
}
const productApi = createApi({
    reducerPath:'products',
    tagTypes: ['Products'],
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
        getProducts: builder.query<any , any>({
            query: (dataQuery:IDataQuery)=> `/products?page=${dataQuery.page || 1}&limit=${dataQuery.limit || 0}&category=${dataQuery.category || ""}`,
            providesTags: ['Products']
        }),
        getProductBySlug: builder.query<any , any>({
            query: (slug)=> `/products/${slug}`,
            providesTags: ['Products']

        }),
        addProduct: builder.mutation({
            query: (data:any)=>({
                url: `/products`,
                method:"POST",
                body: data
            }), 
            invalidatesTags: ['Products']
        }),
        updateProduct: builder.mutation<any, any>({
            query: (data:any)=>({
                url: `/products/${data.id}`,
                method:"PATCH",
                body: data.data
            }),
            invalidatesTags: ['Products']
        }),
        removeProduct: builder.mutation<any, any>({
            query: (id)=>({
                url: `/products/${id}`,
                method:"DELETE",
                // body: data.data
            }),
            invalidatesTags: ['Products']
        }),
        uploadImage: builder.mutation<any, any>({
            query: (data:any)=>({
                url: `/upload/cloudinary-upload`,
                method:"POST",
                body: data
            }),
            invalidatesTags: ['Products']
        })
    })
})


export const {useGetProductsQuery, useGetProductBySlugQuery, useAddProductMutation, useUpdateProductMutation, useUploadImageMutation,useRemoveProductMutation} = productApi
export const productReducer = productApi.reducer
export default productApi