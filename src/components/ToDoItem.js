import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from './toDoSlice';

const ToDoItem = ({ text, index, id, done }) => {
  const [completed, setCompleted] = useState(done);
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeTodo(id));
  };

  const handleItemClick = () => {
    setCompleted(!completed);
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <li className={`todoItem ${completed ? 'completed' : ''}`}>
        <div className="todoItemContainer">
          <span>{index}. </span>
          <span className="todoItemText" onClick={handleItemClick}>
            {text}
          </span>
          <button className="closeButton" onClick={handleRemoveClick}>X</button>
        </div>
      </li>
    </div>
  );
};

export default ToDoItem;
