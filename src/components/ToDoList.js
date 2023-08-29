import React from 'react';
import ToDoGroup from './ToDoGroup';
import ToDoGenerator from './ToDoGenerator';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './toDoSlice';

const ToDoList = ({ todos, addTodo, toggleTodo }) => {
  return (
    <div className="container">
      <h1>To Do List</h1>
      <ToDoGroup items={todos} />
      <ToDoGenerator addTodo={addTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.ToDoItem,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
