import React, { useContext } from 'react';
import { TodoContext } from "../App";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const DoneList = () => {
    const { state } = useContext(TodoContext);
    const doneList = state.filter((todo) => todo.done);

    return (
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h6" gutterBottom>
                Done List
            </Typography>
            <List>
                {doneList.map((todo) => (
                    <ListItem key={todo.id}>
                        <ListItemText primary={todo.text} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default DoneList;