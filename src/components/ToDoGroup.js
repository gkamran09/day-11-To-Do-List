import React from 'react';
import ToDoItem from './ToDoItem';
import '../css/styles.css';
const ToDoGroup = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <ToDoItem key={index} text={item} index={index + 1} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoGroup;