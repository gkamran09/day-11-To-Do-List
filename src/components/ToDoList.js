import React from 'react';
import ToDoGroup from './ToDoGroup';
import ToDoGenerator from './ToDoGenerator';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './toDoSlice';

const ToDoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  return (
    <div className="container">
      <h1>To Do List</h1>
      <ToDoGroup items={todos} />
      <ToDoGenerator addTodo={handleAddTodo} />
    </div>
  );
};

export default ToDoList;
