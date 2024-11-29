import { useContext } from "react";
import { TodoContext } from "../App";
import "./TodoItem.css";
import {removeTodoItem, toggleTodoItem} from "../api/todo";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);

    const handleToggle = () => {
        toggleTodoItem(todo.id).then(() => {
            dispatch({ type: 'TOGGLE', payload: todo.id });
        })
    }
    const handleRemove = () => {
        removeTodoItem(todo.id).then(()=>{
            dispatch({ type: 'REMOVE', payload: todo.id });
        })
    }

    return (
        <div className="todo-item-wrapper">
            <div
                className={`todo-text ${todo.done ? "done" : ""}`}
                onClick={handleToggle}
            >
                {todo.text}
            </div>

            <Stack direction="row" spacing={2}>
                <Button onClick={handleRemove} sx={{"font-size":"10px"}} variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button sx={{"font-size":"10px"}} variant="contained" endIcon={<EditIcon />}>
                    Update
                </Button>
            </Stack>
        </div>
    );
};

export default TodoItem;