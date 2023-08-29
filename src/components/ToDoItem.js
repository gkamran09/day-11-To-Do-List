import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from './toDoSlice';

const ToDoItem = ({ text, index, id }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <li>
        <span>{index}. </span>
        {text}
        <button onClick={handleRemoveClick}>Close</button>
      </li>
    </div>
  );
};

export default ToDoItem;
