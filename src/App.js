import { createContext, useReducer } from "react";
import './App.css';
import TodoList from "./components/TodoList/TodoList";
import {  todoReducer } from "./context/todoReducer";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFound  from "./components/NotFound";
import DoneList from "./components/DoneList";
import HelpPage from "./components/HelpPage/HelpPage";
import {TodoNavBar} from "./components/TodoNavBar/TodoNavBar";

export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>

          <BrowserRouter>
              <TodoNavBar/>
              <Routes>
                  {/*there is no precedence*/}
                  <Route path="/*" element={<NotFound/>} ></Route>
                  <Route path="/" element={<Navigate to="todo-list"/>}  ></Route>
                  <Route path="/todo-list" element={<TodoList/>}></Route>
                  <Route path="/done-list" element={<DoneList/>}></Route>
                  <Route path="/help-page" element={<HelpPage/>}></Route>

              </Routes>
          </BrowserRouter>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
