import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { List } from 'antd';
import { useTodos } from '../hooks/useTodos';
import ToDoGenerator from './ToDoGenerator';
import ToDoItem from './ToDoItem';
import '../css/ToDoList.css';

const ToDoList = () => {
  const { loadTodos } = useTodos();
  const todoItems = useSelector((state) => state.todoItem.todoList);

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="container">
      <h1>To Do List</h1>
      <ToDoGenerator />
      <List
        className="todo-list"
        dataSource={todoItems}
        renderItem={(todo) => <ToDoItem todoItem={todo} />}
      />
    </div>
  );
};

export default ToDoList;
