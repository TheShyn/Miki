import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import productsReducer from "@/slices/Products"
import categoriesReducer from "@/slices/Categories"
import authReducer from "@/slices/Auth"
import userReducer from "@/slices/Users"
import cartReducer from "@/slices/Carts"
import cartUserReducer from "@/slices/CartUser"
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage,
    whileList: ['auth']
  }


  const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    cartUser: cartUserReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer:persistedReducer
})

 
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export default store
export const persistor = persistStore(store)