import api from "./api";

 

export const getAllTodoItems = () => {

    return api.get('/todos');

}

export const updateTodoTask = (id,todoTask) => {
    return api.put(`/todos/${id}`,todoTask);
}