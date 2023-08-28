import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoGroup = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <ToDoItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoGroup;