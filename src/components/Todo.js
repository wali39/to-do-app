import { Button, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const Todo = ({ todo, dispatch }) => {
  const handleDelete = () => {
    dispatch({ type: "delete-todo", payload: todo });
  };
  const handleCheck = () => {
    dispatch({ type: "check-status", payload: todo });
  };
  return (
    <div
      style={{
        background: "#6c5ce7",
        color: "white",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <Checkbox
        checked={todo.check}
        onChange={handleCheck}
        style={{ color: "white" }}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <span style={{ fontSize: "20px" }}>
        {" "}
        {todo.check === !true ? todo.value : <del>{todo.value}</del>}
      </span>
      <Button
        color="default"
        onClick={handleDelete}
        style={{ float: "right", color: "white" }}
      >
        <DeleteIcon />
      </Button>
    </div>
  );
};
export default Todo;
