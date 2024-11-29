import { useContext } from "react";
import TodoItem from "./TodoItem";
import {TodoContext} from "../App";

const TodoGroup = () => {
    const { state } = useContext(TodoContext)
    return (
        <div >
            { state.length === 0? <span>Add an Item</span> :
                state.map((todo) => {

                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    );
}

export default TodoGroup;

