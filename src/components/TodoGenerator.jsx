
import { useContext, useState } from "react";
import {TodoContext} from "../App";


const TodoGenerator = () => {
    const [text, setText] = useState("")
    const { dispatch } = useContext(TodoContext);

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleAdd = () => {
        const trimmedText = text.trim();
        if (trimmedText) {
            dispatch({ type: 'ADD', payload: trimmedText });
        }
    };

    return(
        <div className={"todo-generator-wrapper"}>
            <input maxLength={100} value={text} onChange={handleChange}/>
            <button className="addButton" onClick={handleAdd}>add</button>
        </div>
    );
}

export default TodoGenerator;