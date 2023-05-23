import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer, {addTodo, removeTodo } from "./todo.js";

const rootReducer = combineReducers({
    todo: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(addTodo());
store.dispatch(removeTodo());

store.subscribe(()=>console.log(store.getState()));

export default store;
