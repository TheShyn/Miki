import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cartApi = createApi({
    reducerPath: "cart",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api"
    }),
    endpoints: (builder)=>({
        addToCart: builder.mutation<any,any>({
            query: (data:any)=>({
                url: `/users/cart/${data.id}`,
                method: "POST",
                body:data.data
            })
        }),
        updateCart: builder.mutation<any,any>({
            query: (data:any)=>({
                url: `/users/cart/${data.id}`,
                method: "PATCH",
                body: data.data
            })
        }),
        deleteCart: builder.mutation<any,any>({
            query: (data:any)=>({
                url: `/users/cart/${data.id}`,
                method: "DELETE",
                body: data.data
            })
        })
    })
})

export const cartReducerApi = cartApi.reducer
export const {useAddToCartMutation, useUpdateCartMutation, useDeleteCartMutation} = cartApi
export default cartApi