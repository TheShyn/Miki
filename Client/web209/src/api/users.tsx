import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const usersApi = createApi({
    reducerPath:'users',
    tagTypes: ['Users'],
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
        getAllUsers: builder.query<any , void>({
            query: ()=> `/users`,
            providesTags: ['Users']
        }),
        getUser: builder.query<any , any>({
            query: (id)=> `/users/detail/${id}`,
            providesTags: ['Users']
        }),
        updateUser: builder.mutation<any , any>({
            query: (data:any)=> ({
                url: `/users/${data.id}`,
                method: "PATCH",
                body: data.data
            }),
            invalidatesTags: ['Users']
        }),
    })
})


export const {useGetAllUsersQuery, useGetUserQuery, useUpdateUserMutation} = usersApi
export const usersReducer = usersApi.reducer
export default usersApi