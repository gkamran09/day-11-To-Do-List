import React, { useState } from 'react';
import '../css/styles.css';
const ToDoGenerator = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange}/>
      <button onClick={handleAddClick} placeholder='add a to do list here'>Add</button>
    </div>
  );
};

export default ToDoGenerator;
