import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';

const ToDoGroup = (props) => {
  const todos = useSelector((state) => state.todos);

  const filteredTodos = props.isDone
    ? todos.filter((task) => task.done)
    : todos;

  return (
    <div>
      <ul>
        {filteredTodos.map((item, index) => (
          <ToDoItem
            key={item.id}
            text={item.text}
            id={item.id}
            done={item.done}
            index={index + 1}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoGroup;
