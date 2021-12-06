import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card, Button } from "react-bootstrap";



const Registro = ({ input, setInput, todos, setTodos, edit, setEdit }) => {
  const handleInputChange = ({ target }) => {
    setInput(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      updateTodo(edit.id, input, edit.completed);
    } else {
      const newTodo = { id: uuidv4(), title: input, completed: false };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const updateTodo = (id, title, completed) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { id, title, completed } : todo
    );
    setTodos(newTodos);
    setEdit(null);
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <Card.Header>Registro</Card.Header>
        <Card.Body>
          


          
          <Button variant="secundary">Cancelar</Button>
          <Button variant="primary">Agregar movimiento</Button>
        </Card.Body>
      </Card>

      {/* <input
        type="text"
        placeholder="Enter to Todo"
        className="task-input"
        required
        value={input}
        onChange={handleInputChange}
      />
      <button className="button-add" type="submit">
        {edit ? "Edit" : "Add"}
      </button> */}
    </form>
  );
};

export default Registro;
