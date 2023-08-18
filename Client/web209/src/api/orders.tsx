import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IDataQuery {
    page?: number,
    limit?: number
}
const ordersApi = createApi({
    reducerPath: "orders",
    tagTypes: ['Orders'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api"
    }),
    endpoints: (builder)=>({
        getAllOrders: builder.query<any,any>({
            query: (dataQuery:IDataQuery)=>`carts?page=${dataQuery.page || 1}&limit=${dataQuery.limit || 1}`,
            providesTags: ["Orders"]
        }),
        updateOrders: builder.mutation<any,any>({
            query: (data:any)=> ({
                url:`/carts/${data.id}`,
                method:"PATCH",
                body: data.data
            }),
            invalidatesTags: ["Orders"]
        })
    })
})

export const {useGetAllOrdersQuery, useUpdateOrdersMutation} = ordersApi
export const orderReducer = ordersApi.reducer
export default ordersApi