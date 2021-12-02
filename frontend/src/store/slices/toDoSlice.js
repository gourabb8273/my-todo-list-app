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
                {data: action.payload,
                date: new Date().toLocaleDateString('en-GB')}]}
        },
        removeAll(state,action){
            return initialState;
         },
         deleteItem(state,action){             
             return action.payload;
        }
    }
})


export const {addItem,removeAll,deleteItem} = toDoSlice.actions;
export default toDoSlice.reducer;