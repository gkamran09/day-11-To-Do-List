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
      <div className="todoItemContainer">
          <span>{index}. </span>
          {text}
          <button className="closeButton" onClick={handleRemoveClick}>X</button>
        </div>
      </li>
    </div>
  );
};

export default ToDoItem;
