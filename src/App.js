import './App.css';
import ToDoGroup from './components/ToDoGroup';
import ToDoItem from './components/ToDoItem';

function App() {
  const todoItems = ["1st ToDo", "2nd ToDo"];

  return (
    <div>
      <ToDoGroup items={todoItems} />
    </div>
  )
}

export default App;
