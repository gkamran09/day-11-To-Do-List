import React from "react";
import { useDispatch } from "react-redux";
import * as todoApi from "../api/todoApi";
import { resetToDoTask } from "./toDoSlice";
import { useTodos } from "../hooks/useTodos";

const ToDoItem = (props) => {
    const dispatch = useDispatch();
    const { deleteTodo } = useTodos();

    const toggleItem = async () => {
        await todoApi.updateTodoTask(props.todoItem.id, {
            done: !props.todoItem.done,
        });
        const response = await todoApi.getAllTodoItems();
        dispatch(resetToDoTask(response.data));
    };

    const deleteItem = async () => {
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this item?"
        );
        if (isConfirmed) {
            await deleteTodo(props.todoItem.id);
        }
    };

    return (
        <>
            <div className="todo-item">
                <span
                    className={
                        props.isDone ? "" : props.todoItem.done ? "done" : ""
                    }
                    onClick={toggleItem}
                >
                    {props.todoItem.text}
                </span>
                {props.isDone ? (
                    ""
                ) : (
                    <button className="closeButton" onClick={deleteItem}>
                        x
                    </button>
                )}
            </div>
        </>
    );
};

export default ToDoItem;
