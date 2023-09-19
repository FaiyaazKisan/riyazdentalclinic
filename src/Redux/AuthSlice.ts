import { createSlice } from "@reduxjs/toolkit";

export const initialState={
    id:"",
    fullname:"",
    email:"",
    role:""
}
const AuthSlice=createSlice({
name:"AuthSlice",
initialState:initialState,
reducers:{
    getAuthData:(state, action)=>{
        state.id=action.payload.id;
        state.fullname=action.payload.fullname;
        state.email=action.payload.email;
        state.role=action.payload.role;
    }
}
})

export const{getAuthData}=AuthSlice.actions;
export const AuthReducer=AuthSlice.reducer;
export default AuthSlice;