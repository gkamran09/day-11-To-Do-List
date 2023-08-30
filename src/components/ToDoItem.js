import { useDispatch } from "react-redux";
import * as todoApi from "../api/todoApi";
import { removeTodo, resetToDoTask } from "./toDoSlice";

const ToDoItem = (props) => {
    const dispatch = useDispatch();

    const toggleItem = async () => {
        await todoApi.updateTodoTask(props.todoItem.id, {
            done: !props.todoItem.done,
        });
        const response = await todoApi.getAllTodoItems();
        dispatch(resetToDoTask(response.data));
    };

    const deleteItem = () => {
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this item?"
        );
        if (isConfirmed) {
            dispatch(removeTodo(props.todoItem.id));
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
                    <button className="delete-button" onClick={deleteItem}>
                        x
                    </button>
                )}
            </div>
        </>
    );
};

export default ToDoItem;
