import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../components/toDoSlice";

export const store = configureStore({
    reducer: {
        todoItem: todoReducer
    }
});