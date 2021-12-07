import { createSlice } from "@reduxjs/toolkit";

const initialState = {    
    auth: false,
    userToken: null 
}

const credentialSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {

             const newState =  {
                     ...state, auth: action.payload.auth,
                  userToken: action.payload.userToken
            }
            return newState;
        },
        logout(state, action) {
            return initialState;
        }
    }
})


export const { login, logout } = credentialSlice.actions;
export default credentialSlice.reducer;