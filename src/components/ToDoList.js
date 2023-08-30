import React from 'react';
import ToDoGroup from './ToDoGroup';
import ToDoGenerator from './ToDoGenerator';
import { useEffect } from 'react';
import { useTodos } from '../hooks/useTodos';
import { useSelector } from 'react-redux';

const ToDoList = () => {
  const { loadTodos } = useTodos();
  useEffect(() => {
    loadTodos();
  }, []);
  const todoItems = useSelector((state) => state.todoItem.todoList);


  return (
    <div className="container">
      <h1>To Do List</h1>
      <ToDoGroup todoItems={todoItems} />
      <ToDoGenerator />
    </div>
  );
};

export default ToDoList;
