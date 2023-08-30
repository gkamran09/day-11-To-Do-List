import { useNavigate } from "react-router-dom";
import "../css/ToDoList.css";
const DoneItem = (props) => {
  const navigate = useNavigate();
  console.log(props);
  const onClickTodoItem = () => {
    navigate("/done/" + props.item.key);
  };

  return (
    <div className="todo-item">
      <span onClick={onClickTodoItem}>{props.item.text}</span>
    </div>
  );
};

export default DoneItem;
