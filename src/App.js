import { createContext, useReducer } from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {  todoReducer } from "./context/todoReducer";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFound  from "./components/NotFound";


export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
          <BrowserRouter>
              <Routes>
                  <Route path="/*" element={<NotFound/>} ></Route>
                  <Route path="/" element={<Navigate to="todo-list"/>}  ></Route>
                  <Route path="/todo-list" element={<TodoList/>}></Route>

              </Routes>
          </BrowserRouter>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
