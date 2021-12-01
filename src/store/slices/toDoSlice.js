import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    toDoList:[]
}

const toDoSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers:{
        addItem(state,action){
           return {toDoList: 
            [...state.toDoList, 
                {data: action.payload}]}
        }

    }
})


export const {addItem} = toDoSlice.actions;
export default toDoSlice.reducer;