import React from 'react';
import ToDoGroup from './ToDoGroup';
import ToDoGenerator from './ToDoGenerator';

const ToDoList = (props) => {
  return (
    <div className="container">
      <h1>To Do List</h1>
      <ToDoGroup isDone={props.isDone} />
      {!props.isDone && <ToDoGenerator />}
    </div>
  );
};
export default ToDoList;
