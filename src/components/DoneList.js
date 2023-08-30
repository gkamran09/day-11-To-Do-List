import { useSelector } from "react-redux";
import DoneGroup from "./DoneGroup";
import "../css/ToDoList.css";

const DoneList = () => {
    const doneItems = useSelector((state) => state.todoItem.todoList.filter(todoItem => todoItem.done));
    console.log(doneItems);
    return (
        <>
            <h1>Done Items</h1>
            <DoneGroup doneItems={doneItems} />
        </>
    );
};

export default DoneList;
