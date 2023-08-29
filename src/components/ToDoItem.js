import { connect } from 'react-redux';
import { removeTodo } from './toDoSlice';
import '../css/styles.css';
const ToDoItem = ({ text, index, id, removeTodo }) => {

    const handleRemoveClick = () =>{
        removeTodo(id);
    }

    return (
      <div>
        <li>
          <span>{index}. </span>
          {text}
          <button className='close-btn' onClick={handleRemoveClick}>X</button>
        </li>
      </div>
    );
  };

  const mapDispatchToProps = {
    removeTodo,
  };

export default connect(null, mapDispatchToProps)(ToDoItem);