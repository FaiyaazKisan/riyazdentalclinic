import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import AuthApi from "../API/AuthApi";
import DTApi from "../API/DTApi";
import EmailApi from "../API/EmailApi";
import MyCasesApi from "../API/MyCasesApi";
import PTApi from "../API/PTApi";
import { AuthReducer } from "./AuthSlice";

const store=configureStore({
    reducer:{
        AuthStore:AuthReducer,
        [EmailApi.reducerPath]:EmailApi.reducer,
        [MyCasesApi.reducerPath]:MyCasesApi.reducer,
        [DTApi.reducerPath]:DTApi.reducer,
        [PTApi.reducerPath]:PTApi.reducer,
        [AuthApi.reducerPath]:AuthApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(EmailApi.middleware)
    .concat(MyCasesApi.middleware)
    .concat(AuthApi.middleware)
    .concat(DTApi.middleware)
    .concat(PTApi.middleware)
})

export default store;