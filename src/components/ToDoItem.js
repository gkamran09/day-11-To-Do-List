import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, resetToDoTask } from './toDoSlice';
import { useNavigate } from 'react-router-dom';
import * as todoApi from '../api/todoApi';


const ToDoItem = ( props ) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveClick = () => {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      dispatch(removeTodo(props.item.id));
    }
  };

  const handleItemClick = async () => {
    if(props.isDone){
      navigate(`/done/${props.item.id}`);
    }
    else{
      await todoApi.updateTodoTask(props.item.id, { done: !props.item.done });
      const response = await todoApi.getAllTodoItems();
      dispatch(resetToDoTask(response.data));
    }
  };

  return (
    <div>
      <li className={`todoItem ${props.item.done ? 'completed' : ''}`}>
        <div className="todoItemContainer">
          <span>{props.item.id}. </span>
          <span className="todoItemText" onClick={handleItemClick}>
            {props.item.text}
          </span>
          <button className="closeButton" onClick={handleRemoveClick}>
            X
          </button>
        </div>
      </li>
    </div>
  );
};

export default ToDoItem;
