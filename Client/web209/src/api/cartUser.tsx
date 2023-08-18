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
        })
    })
})

export const cartReducerApi = cartApi.reducer
export const {useAddToCartMutation} = cartApi
export default cartApi