import { useDispatch } from 'react-redux';
import { resetToDoTask } from '../components/toDoSlice';
import * as todoApi from '../api/todoApi';

export const useTodos = () =>{
    const dispatch = useDispatch();
    async function loadTodos() {
        const response = await todoApi.getAllTodoItems();
    dispatch(resetToDoTask(response.data));
    }

    const addTodo = async (text) => {
        await todoApi.createTodoItem({ text, done: false });
        loadTodos();
    }

    const toggleTodo = async(id,task)=>{
        await todoApi.updateTodoTask(id,{done: !task.done});
        loadTodos();
    }

    const updateTodo = async(id,task)=>{
        await todoApi.updateTodoTask(id,{text: task.text});
        loadTodos();
    }

    const deleteTodo = async (id) => {
        await todoApi.deleteTodoItem(id);
        loadTodos();
    }
    return{
        loadTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        updateTodo
    }
}