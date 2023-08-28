import '../css/styles.css';
const ToDoItem = ({text, index}) =>{
return(
<div>
<li>
    <span>{index}. </span>
    {text}
</li>
</div>
)
}

export default ToDoItem;