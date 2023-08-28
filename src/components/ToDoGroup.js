import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoGroup = ({ items }) => {
  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {items.map((item, index) => (
          <ToDoItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoGroup;