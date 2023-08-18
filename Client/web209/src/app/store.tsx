import authApi, {authReducer} from '@/api/auth';
import categoryApi, { categoryReducer } from '@/api/categories';
import ordersApi, { orderReducer } from '@/api/orders';
import productApi, { productReducer } from '@/api/products';
import usersApi, { usersReducer } from '@/api/users';
import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/slices/CartUser'
import userReducer from '@/slices/User'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartApi, { cartReducerApi } from '@/api/cartUser';
const persistConfig = {
    key: 'root',
    storage,
    whileList: ['auth','cartUser'], // luu strorage 
    backlist: ['products'] // k luu vaoo storage
}


const rootReducer = combineReducers({
    [productApi.reducerPath]: productReducer,
    [categoryApi.reducerPath]: categoryReducer,
    [authApi.reducerPath]: authReducer,
    [usersApi.reducerPath]: usersReducer,
    [ordersApi.reducerPath]: orderReducer,
    userCart: cartReducer,
    [cartApi.reducerPath]: cartReducerApi,
    user: userReducer
})
   

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [productApi.middleware,cartApi.middleware,ordersApi.middleware, categoryApi.middleware, authApi.middleware, usersApi.middleware]
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware:any)=>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(...middlewares)

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