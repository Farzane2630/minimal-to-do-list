import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer, {addTodo, updatedtodo, removeTodo, selectedCategory } from "./todo.js";

const rootReducer = combineReducers({
    todo: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(addTodo());
store.dispatch(removeTodo());
store.dispatch(selectedCategory());
store.dispatch(updatedtodo());

// store.subscribe(()=>console.log(store.getState()));

export default store;
