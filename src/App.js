import React, { useState } from 'react';
import './css/styles.css';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
