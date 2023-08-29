import React from 'react';
import ToDoItem from './ToDoItem';
import '../css/styles.css';
const ToDoGroup = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <ToDoItem key={item.id} text={item.text} index={index + 1} id={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoGroup;