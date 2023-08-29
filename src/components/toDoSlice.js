import { createSlice } from "@reduxjs/toolkit";

const todoSlice =  createSlice({
    name: "todo",
    initialState: [],

    reducers: {
        addTodo: (state, action) => {
            state.push({id: crypto.randomUUID(), text: action.payload, done: false});
        },
        toggleTodo: (state, action) => {
            const todo = state.find((item) => item.id === action.payload);

            if(todo){
                todo.done = !todo.done;
            }
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
          },
    }
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;