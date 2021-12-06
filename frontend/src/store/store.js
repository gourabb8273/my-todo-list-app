import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import toDoReducer from './slices/toDoSlice';
import credentialReducer from './slices/credentialSlice';

const reducers = combineReducers({
    todo: toDoReducer, user: credentialReducer
})

const store = configureStore({
    reducer :reducers
    // : {todo: toDoReducer, user: credentialReducer},
})

export default store;