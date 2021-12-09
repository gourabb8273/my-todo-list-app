import { createSlice } from "@reduxjs/toolkit";

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
            date: new Date().toLocaleDateString("en-GB"),
          },
        ],
      };
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
    },
  },
});

export const { addItem, removeAll, deleteItem, getItem } = toDoSlice.actions;
export default toDoSlice.reducer;
