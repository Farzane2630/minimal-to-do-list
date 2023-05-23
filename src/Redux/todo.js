import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todo",
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) {
      action.payload && state.todos.push(action.payload);
    },
    removeTodo(state, action) {
    state.todos=  state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

const { actions, reducer } = slice;

export const { addTodo, removeTodo } = actions;

export default reducer;
