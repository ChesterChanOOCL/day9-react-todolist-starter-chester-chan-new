import React, {  useReducer } from 'react';
import {TodoContext} from "../App";
export const initialState = [
  { id: Date.now(), text: "1st  todo", done: false },
  { id: Date.now() + 1, text: "2nd todo", done: false },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case "TOGGLE":
      return state.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export const TodoListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
      <TodoContext.Provider value={{ state, dispatch }}>
        {children}
      </TodoContext.Provider>
  );
};