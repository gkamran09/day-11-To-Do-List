import React from 'react';
import ToDoGroup from './ToDoGroup';
import ToDoGenerator from './ToDoGenerator';

const ToDoList = () => {
  return (
    <div className="container">
      <h1>To Do List</h1>
      <ToDoGroup />
      <ToDoGenerator />
    </div>
  );
};
export default ToDoList;
