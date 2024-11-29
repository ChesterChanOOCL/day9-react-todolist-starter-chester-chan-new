import {useContext, useState} from "react";
import TodoItem from "./TodoItem";
import {TodoContext} from "../App";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./TodoGroup.css";


import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const TodoGroup = () => {
    const { state, dispatch } = useContext(TodoContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = state.slice(indexOfFirstItem, indexOfLastItem);

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(state);
        const [removed] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, removed);

        dispatch({ type: 'REORDER', payload: reorderedItems });
    };

    return (
        <div>
            {state.length === 0 ? (
                <span>Add an Item</span>
            ) : (
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="todo-list">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {currentItems.map((todo, index) => (
                                    <Draggable
                                        key={todo.id}
                                        draggableId={todo.id.toString()}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <TodoItem key={todo.id} todo={todo} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            )}
            <div className={"pagination-bar"}>
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
