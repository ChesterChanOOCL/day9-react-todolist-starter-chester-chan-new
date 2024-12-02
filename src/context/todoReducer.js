export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "INIT":
      return action.payload;
    case "TOGGLE":
      return state.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case 'UPDATE':
      return state.map((todo =>{ return todo.id === action.payload.id ? action.payload : todo}));
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
   // can delete
    case 'REORDER':
      return action.payload;
    default:
      return state;
  }
};

