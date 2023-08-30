import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todoList',
  initialState: {
    todoList:[],
  },
  reducers: {
    resetToDoTask: (state,action) =>{
      state.todoList = action.payload;
    },
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todoItem = state.todoList.find((todoItem) => todoItem.id === action.payload);
      if (todoItem) {
        todoItem.done = !todoItem.done;
      }
    },

    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter((todoItem) => todoItem.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, resetToDoTask } = todoSlice.actions;
export default todoSlice.reducer;
