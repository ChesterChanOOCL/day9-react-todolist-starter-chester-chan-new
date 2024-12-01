import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

export const TodoNavBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6">
                    Todo App
                </Typography>
                <div>
                    <Button color="inherit">
                        <Link to="/todo-list" className={classes.link}>Home</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/done-list" className={classes.link}>Done List</Link>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};