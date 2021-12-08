import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDoList: []
}

const toDoSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newState = {
                toDoList:
                    [...state.toDoList,
                    {
                        data: action.payload,
                        date: new Date().toLocaleDateString('en-GB')
                    }]
            }

            // fetch('http://localhost:8080/api/list', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(newState)
            // }).then(response => response.json())
            //     .then(data => {
            //         console.log('Success:', data);
            //     })
            //     .catch(err => console.log(err))

            return newState;
        },
        removeAll(state, action) {
            return initialState;
        },
        deleteItem(state, action) {
            return action.payload;
        },
        getItem(state, action) {
            return action.payload;
        }
    }
})


export const { addItem, removeAll, deleteItem, getItem } = toDoSlice.actions;
export default toDoSlice.reducer;