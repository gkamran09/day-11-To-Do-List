import React, { useState } from 'react';

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
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Add a to do list item here'/>
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default ToDoGenerator;
