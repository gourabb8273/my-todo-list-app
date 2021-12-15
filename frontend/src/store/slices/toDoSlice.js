import { createSlice } from "@reduxjs/toolkit";

import getCurrentDateTime from "../../services/getCurrentDateTime";

const initialState = {
  toDoList: [],
};

const toDoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newState = {
        toDoList: [
          ...state.toDoList,
          {
            taskTitle: action.payload,
            createdDate: getCurrentDateTime(),
          },
        ],
      };
      return newState;
    },
    removeAll(_state, _action) {
      return initialState;
    },
    deleteItem(state, action) {
      const newState = {
        toDoList: state.toDoList.filter(
          (_listItem, listIndex) => listIndex !== action.payload
        ),
      };
      return newState;
    },
    getItem(_state, action) {
      const newState = {
        toDoList: action.payload,
      };
      return newState;
    },
  },
});

export const { addItem, removeAll, deleteItem, getItem } = toDoSlice.actions;
export default toDoSlice.reducer;
