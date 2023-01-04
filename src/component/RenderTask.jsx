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

  const saveTask = () => {
    completeToDo(todos);
  };

  const onEdit = async () => {
    setShowComponent(true);
    const todoRef = doc(db, 'todos', todos.id);
    const todoSnap = await getDoc(todoRef);
    setTaskToEdit(todoSnap.data().task);
  };

  return (
    <div className="todos">
      <ul>
        <input type="checkbox" onClick={saveTask} />
        <li className="todo-task">{todos.newTask}</li>
        <button onClick={deleteTask}>{<AiOutlineDelete />}</button>
        <button onClick={onEdit}>{<AiOutlineEdit />}</button>
        {showComponent && (
          <EditTask task={taskToEdit} editMode={showComponent} />
        )}
      </ul>
    </div>
  );
}
export default Task;
