import ToDoItem from "./ToDoItem";

const ToDoGroup = (props) => {
    const todoItems = props.todoItems;
    return todoItems.map((todoItem) => {
        return (
            <ToDoItem
                todoItem={todoItem}
                key={todoItem.id}
                isDone={props.isDone}
            />
        );
    });
};

export default ToDoGroup;
