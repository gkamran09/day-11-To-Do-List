import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from './toDoSlice';
import { useNavigate } from 'react-router-dom';

const ToDoItem = ({ text, index, id, done }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveClick = () => {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      dispatch(removeTodo(id));
    }
  };

  const handleItemClick = () => {
    if (done) {
      navigate(`/done/${id}`);
    } else {
      dispatch(toggleTodo(id));
    }
  };

  return (
    <div>
      <li className={`todoItem ${done ? 'completed' : ''}`}>
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
