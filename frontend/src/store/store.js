import { configureStore} from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import thunk from "redux-thunk";
import reduxLogger from 'redux-logger';
import {createStateSyncMiddleware, initMessageListener} from "redux-state-sync";

import toDoReducer from './slices/toDoSlice';
import credentialReducer from './slices/credentialSlice';

const reduxStateSyncConfig = {};

const reducer = combineReducers({
    todo: toDoReducer, user: credentialReducer
})
const middlewares = [createStateSyncMiddleware(reduxStateSyncConfig),reduxLogger,thunk];
const store = configureStore({
    reducer,
    middleware:[...middlewares]        
})

initMessageListener(store);

export default store;