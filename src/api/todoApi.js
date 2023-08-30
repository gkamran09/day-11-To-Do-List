import api from "./api";
export const getAllTodoItems = () => {
    return api.get('/todos');
}

export const updateTodoTask = (id,todoTask) => {
    return api.put(`/todos/${id}`,todoTask);
}

export const deleteTodoItem = (id) => {
    return api.delete(`/todos/${id}`);
}

export const createTodoItem = (todoItem) => {
    return api.post('/todos',todoItem);
}