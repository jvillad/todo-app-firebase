import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useState } from 'react';
import { completeToDo } from '../helper/completeToDo';
import { removeToDo } from '../helper/removeToDo';
import EditTask from './EditTask';

function Task(todos) {
  const [showComponent, setShowComponent] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState('');
  const deleteTask = () => {
    removeToDo(todos.id);
  };

  const setTaskComplete = () => {
    completeToDo(todos);
  };

  const onEdit = async () => {
    setShowComponent(true);
    const todoRef = doc(db, 'todos', todos.id);
    const todoSnap = await getDoc(todoRef);
    setTaskToEdit(todoSnap.data().task);
  };

  return (
    <div className="todo-container">
      <ul className="todos">
        <li className="todo-task">
          <input className="done" type="checkbox" onClick={setTaskComplete} />
          <div className="task">{todos.newTask}</div>
          <button className="delete" onClick={deleteTask}>
            {<AiOutlineDelete />}
          </button>
          <button className="edit" onClick={onEdit}>
            {<AiOutlineEdit />}
          </button>
        </li>

        {showComponent && (
          <EditTask
            task={taskToEdit}
            editMode={showComponent}
            docId={todos.id}
            onChange={setShowComponent}
          />
        )}
      </ul>
    </div>
  );
}
export default Task;
