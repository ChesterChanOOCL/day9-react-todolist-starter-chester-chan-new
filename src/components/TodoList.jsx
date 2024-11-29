import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./TodoList.css";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import {getTodoList} from "../api/todo";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { LoadingOutlined } from '@ant-design/icons';
import {Spin, Flex, Switch, Alert} from "antd";


const TodoList = () => {
    const {dispatch} = useContext(TodoContext);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getTodoList().then( (todo )=> {
            dispatch({ type: "INIT" , payload: todo});
        }).finally(()=>{
            setLoading(false);
        })
    }, []);


  return (
      <div className ="todoList">
        <h2>{"Todo List"}</h2>
          <Flex gap="middle" vertical>
              <Spin >
                    Loading . .
              </Spin>
          </Flex>
        <TodoGroup/>
        <TodoGenerator/>
      </div>
  );
}

export default TodoList;