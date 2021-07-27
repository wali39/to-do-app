const Reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return [...state, action.payload];

    case "delete-todo":
      return [...state.filter((todo) => todo.value !== action.payload.value)];
    case "check-status":
      return [
        ...state.map((todo) => {
          if (todo.value === action.payload.value) {
            return { ...todo, check: !todo.check };
          }
          return todo;
        }),
      ];
    default:
      return state;
  }
};

export default Reducer;
