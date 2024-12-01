import TodoGenerator from "../TodoGenerator";
import TodoGroup from "../TodoGroup/TodoGroup";
import "./TodoList.css";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../App";
import { getTodoList } from "../../api/todo";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const TodoList = () => {
    const { dispatch } = useContext(TodoContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            getTodoList().then((todo) => {
                dispatch({ type: "INIT", payload: todo });
            }).finally(() => {
                setLoading(false);
            });
        }, 3000); // Delay API call by 3 seconds
    }, [dispatch]);

    return (
        <div className="todoList">
            <h2>Organise your Todo List</h2>
            {loading ? (
                <div className="loading-container">
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                    <p>Loading...</p>
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