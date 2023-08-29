import React, { useState } from 'react';
import ToDoGenerator from './ToDoGenerator';
import ToDoGroup from './ToDoGroup';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="container">
      <h1>To Do List</h1>
      <ToDoGroup items={todos} />
      <ToDoGenerator addTodo={addTodo} />
    </div>
  );
};

export default ToDoList;
