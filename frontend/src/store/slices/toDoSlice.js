import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    toDoList:[]
}

const toDoSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers:{
        addItem: (state,action)=>{
            // fetch('http://localhost:8080/api/list',{
            //     method: 'POST',
            //     body: "hey"
            // }).then(res=> res.text())
            //     .then(data=> console.log(data))
            //     .catch(err=> console.log(err))            
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
        },
        getItem(state,action){                                      
            return action.payload;
       }
    }
})


export const {addItem,removeAll,deleteItem,getItem} = toDoSlice.actions;
export default toDoSlice.reducer;