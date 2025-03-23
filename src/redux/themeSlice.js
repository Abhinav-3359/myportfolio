import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 'dark' };
const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        light:(state)=>{state.value='light'},
        dark:(state)=>{state.value='dark'}
    }
});
export const {light,dark}= themeSlice.actions;
export default themeSlice.reducer