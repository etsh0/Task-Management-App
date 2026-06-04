import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userData: null
}

export const userSlice = createSlice({
    name:"user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload
        } 
    }
})

export const userReducer = userSlice.reducer
export const { setUser } = userSlice.actions