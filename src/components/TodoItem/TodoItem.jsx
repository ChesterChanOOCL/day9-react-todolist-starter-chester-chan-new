import React, {useContext, useState} from "react";
import {TodoContext} from "../../App";
import "./TodoItem.css";
import {updateTodoItem, removeTodoItem, toggleTodoItem} from "../../api/todo";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const TodoItem = ({todo}) => {
    const {dispatch} = useContext(TodoContext);
    const [updateText, setUpdateText] = useState("");

    const handleToggle = () => {
        toggleTodoItem(todo.id).then(() => {
            dispatch({type: 'TOGGLE', payload: todo.id});
        })
    }
    const handleRemove = () => {
        removeTodoItem(todo.id).then(() => {
            dispatch({type: 'REMOVE', payload: todo.id});
        })
    }
    const [open, setOpen] = React.useState(false);

    const handleUpdate = () => {
        const trimmedUpdateText = updateText.trim();
        if (trimmedUpdateText) {
            console.log("Updating todo item with ID:", todo.id);
            updateTodoItem({text: trimmedUpdateText, done: todo.done, id: todo.id})
                // Should use the backend returned instead
                .then((todo) => {
                    console.log ("updating id with in frontend with id: " +  todo.id);
                dispatch({type: 'UPDATE', payload: todo});
            })
                .catch((error) => {
                console.error("Failed to update todo item:", error);
            });
            setOpen(false);
        } else {
            console.error("Update text is empty");
        }
    };
    const handleUpdateInputChange = (event) => {
        setUpdateText(event.target.value);
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="todo-item-wrapper">
            <div
                className={`todo-text ${todo.done ? "done" : "undone"}`}
                onClick={handleToggle}
            >
                {todo.text}
            </div>

            <Stack direction="row" spacing={2}>
                <Button onClick={handleRemove} sx={{"font-size": "10px"}} variant="outlined" startIcon={<DeleteIcon/>}>
                    Delete
                </Button>
                <Button onClick={handleClickOpen} sx={{"font-size": "10px"}} variant="contained" endIcon={<EditIcon/>}>
                    Update
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                    }}
                >
                    <DialogTitle sx={{"font-size": "16px"}}> EDIT THE ITEM NAME : </DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            fullWidth
                            variant="standard"
                            value={updateText}
                            onChange={handleUpdateInputChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleUpdate}>Confirm</Button>
                    </DialogActions>
                </Dialog>
            </Stack>
        </div>
    );
};

export default TodoItem;