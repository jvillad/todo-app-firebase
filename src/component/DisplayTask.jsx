import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
function Task(todos) {
  return (
    <div className="todos">
      <ul>
        <input type="checkbox" />
        <li>{todos.newTask}</li>
        <button>{<AiOutlineDelete />}</button>
        <button>{<AiOutlineEdit />}</button>
      </ul>
    </div>
  );
}
export default Task;
