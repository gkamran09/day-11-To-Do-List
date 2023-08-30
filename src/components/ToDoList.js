import React, { useEffect } from 'react';
import ToDoGroup from './ToDoGroup';
import ToDoGenerator from './ToDoGenerator';
import { useSelector, useDispatch } from 'react-redux'; 
import { useTodos } from '../hooks/useTodos';

const ToDoList = (props) => {
    const dispatch = useDispatch(); 
    const { loadTodos } = useTodos();

    const todoItems = useSelector((state) => state.todoItem.todoList);

    useEffect(() => {
        loadTodos();
    }, []);

    return (
        <div className="container">
            <h1>To Do List</h1>
            <ToDoGroup todoItems={todoItems} isDone={props.isDone} />
            {!props.isDone && <ToDoGenerator />}
        </div>
    );
};

export default ToDoList;
