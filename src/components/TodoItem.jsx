import React, {useContext} from "react";
import {TodoContext} from "../App";
import "./TodoItem.css";
import {removeTodoItem, toggleTodoItem} from "../api/todo";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const TodoItem = ({todo}) => {
    const {dispatch} = useContext(TodoContext);

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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="todo-item-wrapper">
            <div
                className={`todo-text ${todo.done ? "done" : ""}`}
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
                    <DialogTitle>Edit </DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Confirm</Button>
                    </DialogActions>
                </Dialog>
            </Stack>
        </div>
    );
};

export default TodoItem;