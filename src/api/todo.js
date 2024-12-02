
import instance from "./interceptor"



export const getTodoList = async () =>{
    const response = await instance.get("")
     return response.data;
}

export const addTodoItem = async (todo) =>{
    const response = await instance.post("", todo)
    return response.data;
}

export const removeTodoItem = async (id) =>{
    const response = await instance.delete(`/${id}`)
    return response.data;
}
export const toggleTodoItem = async (id) =>{
    const response = await instance.put(`/${id}`, {done: true});
    return response.data;
}
export const updateTodoItem = async (todo) =>{
    const response = await instance.put(`/${todo.id}`, todo);
    return response.data;
}