import { useState, useReducer } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import Todo from "./Todo";
import Reducer from "../Reducer";

const TodoFrom = () => {
  const [state, dispatch] = useReducer(Reducer, []);

  const [inputData, setInputData] = useState({
    value: "",
    key: "",
    check: false,
  });

  const handleChange = (e) => {
    setInputData({ value: e.target.value, key: Date.now(), check: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputData &&
      inputData.value &&
      dispatch({ type: "add-todo", payload: inputData });
    setInputData({ value: "", key: "", check: false });
  };

  return (
    <Grid justifyContent="center" direction="column">
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <TextField
          value={inputData.value}
          onChange={(e) => handleChange(e)}
          label="Add todo"
          style={{ width: "100%" }}
        ></TextField>
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
      <br />
      <p style={{ fontSize: "20px" }}>Your tasks</p>
      <hr />
      {state.length ? (
        state.map((todo) => (
          <Todo key={todo.key} todo={todo} dispatch={dispatch} />
        ))
      ) : (
        <h4>No task available</h4>
      )}
    </Grid>
  );
};
export default TodoFrom;
