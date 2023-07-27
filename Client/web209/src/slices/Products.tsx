import { addProduct, deleteProduct, getAllProducts, getProduct1, updateProduct } from '@/instance/Products'
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    loading: false,
    error: "",
    products: [],
    totalPages: null,
    product: {}
}


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get all products
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.data       
            state.totalPages = action.payload.totalPages
        }),
            builder.addCase(getProduct1.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload
            }),


            builder.addCase(addProduct.fulfilled, (state: any, action: any) => {
                state.loading = false
                state.products.push(action.payload)
                alert("add product successfully")

            }),
            builder.addCase(addProduct.rejected, (state: any, action: any) => {
                state.error = action?.error?.message || "Error something"
                state.loading = false

            }),
            //delete 
            builder.addCase(deleteProduct.fulfilled, (state: any, action: any) => {
                const newData = state.products.filter((item: any) => item._id !== action.payload)
                state.products = newData
                alert("Product deleted")

            }),
            builder.addCase(deleteProduct.rejected, (state: any, action: any) => {
                alert(action?.error?.message || "Error something")

            })

        //update
        builder.addCase(updateProduct.fulfilled, (state: any, action: any) => {
            console.log(action);


        })
    }
})


export default productSlice.reducer