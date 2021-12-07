import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    password: null,
    isLoggedIn: false
}

const credentialSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {

            return {
                ...state, userId: action.payload.email,
                password: action.payload.password, isLoggedIn: true
            }
        },
        logout(state, action) {
            return initialState;
        }
    }
})


export const { login, logout } = credentialSlice.actions;
export default credentialSlice.reducer;