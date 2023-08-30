import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './toDoSlice';

const ToDoGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a to do list item here"
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};


export default ToDoGenerator;
