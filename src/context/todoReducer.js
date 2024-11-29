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

