import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, setEdit }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  };

  const handleEdit = ({ id }) => {
    setEdit(todos.find((todo) => todo.id === id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
