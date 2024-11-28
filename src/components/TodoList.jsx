import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
  return (
      <div className ="todoList">
        <h2>{"Todo List"}</h2>
        <TodoGroup/>
        <TodoGenerator/>
      </div>
  );
}

export default TodoList;