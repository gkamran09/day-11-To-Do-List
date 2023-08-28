import React, { useState } from 'react';
import './css/styles.css';
import ToDoGroup from './components/ToDoGroup';
import ToDoGenerator from './components/ToDoGenerator';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ToDoGroup items={todos} />
      <ToDoGenerator addTodo={addTodo} />
    </div>
  );
}

export default App;
