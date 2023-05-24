import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    status: ["All", "Completed", "Incompleted"],
    selectedCategory: "",
    updatedtodo: {},
    updateTodos:[]
  },
  reducers: {
    addTodo(state, action) {
      action.payload && state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    status(state, action) {
      state.status = action.payload;
    },
    selectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    updatedtodo: (state, action) => {
      const selectedTodo = state.todos.find((todo) => todo.id === action.payload);
      if (selectedTodo) {
        selectedTodo.status = "Completed";
      }
    },
    updateTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

const { actions, reducer } = slice;

export const { addTodo, removeTodo, status, selectedCategory, updatedtodo, updateTodos } =
  actions;

export default reducer;
