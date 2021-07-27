const Reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      localStorage.setItem("state", JSON.stringify([...state, action.payload]));
      return [...state, action.payload];

    case "delete-todo":
      localStorage.setItem(
        "state",
        JSON.stringify([
          ...state.filter((todo) => todo.value !== action.payload.value),
        ])
      );
      return [...state.filter((todo) => todo.value !== action.payload.value)];
    case "check-status":
      localStorage.setItem(
        "state",
        JSON.stringify([
          ...state.map((todo) => {
            if (todo.value === action.payload.value) {
              return { ...todo, check: !todo.check };
            }
            return todo;
          }),
        ])
      );
      return [
        ...state.map((todo) => {
          if (todo.value === action.payload.value) {
            return { ...todo, check: !todo.check };
          }
          return todo;
        }),
      ];
  }
};

export default Reducer;
