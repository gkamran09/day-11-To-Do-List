import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';

const ToDoGroup = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <ul>
      {todos.map((item, index) => (
          <ToDoItem
            key={item.id}
            text={item.text}
            id={item.id}
            done={item.done}
            index={index + 1}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoGroup;
