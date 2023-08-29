import React from 'react';
import ToDoItem from './ToDoItem';
import { useSelector } from 'react-redux';

const ToDoGroup = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <ul>
        {todos.map((item, index) => (
          <ToDoItem key={item.id} text={item.text} index={index + 1} id={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoGroup;
