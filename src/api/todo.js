import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495be9868020296630a684.mockapi.io/todo",
    timeout: 5000
})


export const getTodoList = async () =>{
    const response = await instance.get("/todoList")
     return response.data;
}

export const addTodoItem = async (todo) =>{
    const response = await instance.post("/todoList", todo)
    return response.data;
}

export const removeTodoItem = async (id) =>{
    const response = await instance.delete(`/todoList/${id}`)
    return response.data;
}
export const toggleTodoItem = async (id) =>{
    const response = await instance.put(`/todoList/${id}`, {done: true});
    return response.data;
}