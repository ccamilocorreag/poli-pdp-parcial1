import { FaCheckCircle, FaEdit, FaTrashAlt } from "react-icons/fa";
const TodoItem = ({ todo, handleDelete, handleComplete, handleEdit }) => {
  return (
    <li className="list-item">
      <input
        type="text"
        value={todo.title}
        className={`list ${todo.completed ? "complete" : ""}`}
        onChange={(e) => e.preventDefault}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => handleComplete(todo)}
        >
          <FaCheckCircle />
        </button>
        <button className="button-edit" onClick={() => handleEdit(todo)}>
          <FaEdit />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo)}>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
