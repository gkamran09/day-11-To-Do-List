import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ToDoItemDetail = () => {
    const { id } = useParams();
    const todoItem = useSelector((state) => state.todoItem.todoList.find(task => task.id === id));
    console.log(todoItem);

    return (
        <div className="todo-detail">
            <h1>Todo Item Detail</h1>
            <div>{todoItem?.id}</div>
            <div>{todoItem?.text}</div>
        </div>
    );
};

export default ToDoItemDetail;
