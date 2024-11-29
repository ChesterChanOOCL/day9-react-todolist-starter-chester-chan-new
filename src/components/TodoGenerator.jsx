import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {addTodoItem} from "../api/todo";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";


const TodoGenerator = () => {
    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext);

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleAdd = async () => {
        const trimmedText = text.trim();
        if (trimmedText) {
            addTodoItem({ text: trimmedText, done: false}).then((todo) => {
                dispatch({type: 'ADD', payload: { text: trimmedText, done: false, id: Math.random()}});
            });
        }

}

return (
    <div className={"todo-generator-wrapper"}>
        <input className="inputField" maxLength={100} value={text} onChange={handleChange}/>
        <button className="addButton" onClick={handleAdd}>add</button>

    </div>
)
}

export default TodoGenerator;