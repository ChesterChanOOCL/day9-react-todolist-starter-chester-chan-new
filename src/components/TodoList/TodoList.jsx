import TodoGenerator from "../TodoGenerator";
import TodoGroup from "../TodoGroup/TodoGroup";
import "./TodoList.css";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../App";
import { getTodoList } from "../../api/todo";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import '@fontsource/roboto/300.css';
import Typography from '@mui/material/Typography';

const TodoList = () => {
    const { dispatch } = useContext(TodoContext);
    const [loading, setLoading] = useState(true);

    // catch if have
    useEffect(() => {
        setTimeout(() => {
            getTodoList().then((todo) => {
                dispatch({ type: "INIT", payload: todo });
            }).finally(() => {
                setLoading(false);
            });
        }, 3000);
    }, [dispatch]);

    return (
        <div className="todoList">

            <Typography variant="h5" gutterBottom>
                Mark down some todos . . .
            </Typography>
            {loading ? (
                <div className="loading-container">
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                    <Typography>Loading...</Typography>
                </div>
            ) : (
                <>
                    <TodoGroup />
                    <TodoGenerator />
                </>
            )}
        </div>
    );
}

export default TodoList;