import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {addTodoItem} from "../api/todo";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const TodoGenerator = () => {
    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext);

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleAdd = async () => {
        const trimmedText = text.trim();
        if (trimmedText) {
            addTodoItem({ text: trimmedText, done: false }).then((todo) => {
                const randomId = Math.floor(Math.random() * 200) + 1;
                dispatch({ type: 'ADD', payload: { text: trimmedText, done: false, id: randomId } });
            });
        }
    };

    return (
        <div className={"todo-generator-wrapper"}>
            <input className="inputField" maxLength={100} value={text} onChange={handleChange}/>
            <Button onClick={handleAdd} sx={{"font-size": "16px"}} variant="contained" startIcon={<AddIcon/>}>
                Add
            </Button>
        </div>
    )
}

export default TodoGenerator;