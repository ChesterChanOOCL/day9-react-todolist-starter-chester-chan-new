import { useContext, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../App";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./TodoGroup.css";

const TodoGroup = () => {
    const { state } = useContext(TodoContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = state.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            {state.length === 0 ? (
                <span>Add an Item</span>
            ) : (
                <List>
                    {currentItems.map((todo) => (
                        <ListItem key={todo.id} className="todo-item">
                            <TodoItem todo={todo} />
                        </ListItem>
                    ))}
                </List>
            )}
            <div className="pagination-bar">
                <Stack spacing={2}>
                    <Pagination
                        count={Math.ceil(state.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Stack>
            </div>
        </div>
    );
};

export default TodoGroup;