import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../css/styles.css';

const ToDoGenerator = () => {
  const [itemInput, setItemInput] = useState("");
  const { addTodo } = useTodos();

  const onItemChange = (event) => {
    setItemInput(event.target.value);
  };

  const addItem = () => {
    if (isValidInput()) {
      addTodo(itemInput);
      setItemInput("");
    } else {
      alert("Please enter a text");
    }
  };

  const isValidInput = () => {
    return itemInput.trim() !== "";
  };

  return (
    <div className="todo-generator">
      <Input
        value={itemInput}
        onChange={onItemChange}
        className="item-input"
        placeholder="What are you going to do today?"
        id="itemInput"
      />
      <Button
        onClick={addItem}
        type="primary"
        icon={<PlusOutlined />}
        className="add-button"
      >
        Add
      </Button>
    </div>
  );
};

export default ToDoGenerator;
