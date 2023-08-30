import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todoList',
  initialState: {
    todoList:[]
  },
  reducers: {
    resetToDoTask: (state,action) =>{
      state.todoList = action.payload;
    },
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todoItem = state.find((todoItem) => todoItem.id === action.payload);
      todoItem.done = !todoItem.done;
    },
    removeTodo: (state, action) => {
      const newTodoList = state.todoList.filter((todoItem) => todoItem.id !== action.payload);
      state.todoList = newTodoList;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo,resetToDoTask } = todoSlice.actions;
export default todoSlice.reducer;
