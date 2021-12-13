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
    removeAll(state, action) {
      return initialState;
    },
    deleteItem(state, action) {
      const newState = {
        toDoList: state.toDoList.filter(
          (listItem, listIndex) => listIndex !== action.payload
        ),
      };
      return newState;
    },
    getItem(state, action) {
      const newState = {
        toDoList: action.payload,
      };
      return newState;
    },
  },
});

export const { addItem, removeAll, deleteItem, getItem } = toDoSlice.actions;
export default toDoSlice.reducer;
