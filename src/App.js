import { useState } from "react";
import Form from "./components/Registro";
import Header from "./components/Header";
// import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
        {/* <div>
          <TodoList todos={todos} setTodos={setTodos} setEdit={setEdit} />
        </div> */}
      </div>
    </div>
  );
}

export default App;
