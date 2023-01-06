import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useState, useRef, useEffect } from 'react';
import { updateToDo } from '../helper/updateToDo';
import { removeToDo } from '../helper/removeToDo';
import EditTask from './EditTask';

function Task(todos) {
  const [showComponent, setShowComponent] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState('');
  const taskDone = todos.status;
  const inputRef = useRef(null);

  useEffect(() => {
    showComponent && inputRef.current.focus();
  }, [showComponent]);

  const getUpdatedDb = async () => {
    const todoRef = doc(db, 'todos', todos.id);
    return await getDoc(todoRef);
  };

  return (
    <div className="todo-container">
      <ul className="todos">
        {!showComponent && (
          <li className="todo-task">
            {!taskDone && (
              <>
                <input
                  className="done"
                  type="checkbox"
                  onClick={async () => {
                    updateToDo(todos);
                  }}
                />
              </>
            )}
            <div
              className="task"
              style={{
                textDecoration: taskDone ? 'line-through' : 'none',
                color: taskDone && 'var(--darkgrey)',
              }}
            >
              {todos.newTask}
            </div>
            {!taskDone && (
              <>
                <button
                  className="edit"
                  onClick={async () => {
                    setShowComponent(true);
                    const todoSnap = await getUpdatedDb();
                    setTaskToEdit(todoSnap.data().task);
                  }}
                >
                  {<AiOutlineEdit />}
                </button>
              </>
            )}
            <button
              className="delete"
              onClick={() => {
                removeToDo(todos.id);
              }}
            >
              {<AiOutlineDelete />}
            </button>
          </li>
        )}

        {showComponent && (
          <EditTask
            task={taskToEdit}
            editMode={showComponent}
            docId={todos.id}
            onChange={setShowComponent}
            inputRef={inputRef}
          />
        )}
      </ul>
    </div>
  );
}
export default Task;
