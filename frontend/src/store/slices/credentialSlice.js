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

            const newState =  {
                ...state, userId: action.payload.email,
                password: action.payload.password, isLoggedIn: true
            }

            fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newState)
            }).then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch(err => console.log(err))

            return newState;
        },
        logout(state, action) {
            return initialState;
        }
    }
})


export const { login, logout } = credentialSlice.actions;
export default credentialSlice.reducer;