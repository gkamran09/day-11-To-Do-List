import React from 'react';
import ToDoGroup from './ToDoGroup';
import ToDoGenerator from './ToDoGenerator';
import * as todoApi from '../api/todoApi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetToDoTask } from './toDoSlice';
import { useTodos } from '../hooks/useTodos';

const ToDoList = (props) => {
  const dispatch = useDispatch();
  const {loadTodos} = useTodos();
  useEffect(() => {loadTodos();}, []);
  return (
    <div className="container">
      <h1>To Do List</h1>
      <ToDoGroup isDone={props.isDone} />
      {!props.isDone && <ToDoGenerator />}
    </div>
  );
};

export default ToDoList;
