import { Container } from "@material-ui/core";

import TodoFrom from "./components/TodoForm";
function App() {
  return (
    <Container maxWidth="sm">
      <h1 style={{ textAlign: "center" }}>ToDo App</h1>
      <TodoFrom />
    </Container>
  );
}

export default App;
