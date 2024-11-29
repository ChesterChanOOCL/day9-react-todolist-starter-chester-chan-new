import { useContext } from "react";
import { TodoContext } from "../App";
import "./TodoItem.css";
const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);

    return (
        <div className="todo-item-wrapper">
            <div
                className={`todo-text ${todo.done ? "done" : ""}`}
                onClick={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
            >
                {todo.text}
            </div>
            <button className="crossButton" onClick={() => dispatch({ type: 'REMOVE', payload: todo.id })}>
                X
            </button>
        </div>
    );
};

export default TodoItem;