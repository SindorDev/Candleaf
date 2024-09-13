import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
       token: string | null
}

const initialState: IInitialState = {
       token: localStorage.getItem("token") || null
}

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<string>) => {
            
            state.token = action.payload
            localStorage.setItem("token", action.payload)
        },
        signOut: (state) => {
            state.token = null
            localStorage.removeItem("token")
        }
    }
})

export const { loginUser, signOut } = authReducer.actions;
export default authReducer.reducer