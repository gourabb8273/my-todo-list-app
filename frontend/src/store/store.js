import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from './slices/toDoSlice'

const store = configureStore({
    reducer: {todo: toDoReducer},
})

export default store;