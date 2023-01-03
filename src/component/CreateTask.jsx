import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import DisplayTask from './DisplayTask';
import { fetchTodos } from '../helper/fetchTodos';

function CreateTask() {
  const [userTask, setUserTask] = useState('');
  const todosDb = collection(db, 'todos');

  // Read todos from db
  const tasks = fetchTodos();

  // Add new task to db
  const addToDb = async () => {
    await addDoc(todosDb, {
      date: Date.now(),
      task: userTask,
      completed: false,
    });
  };

  // Store user task to state variable
  const handleUserTask = (ev) => {
    setUserTask(ev.target.value);
  };

  return (
    <div className="task">
      <input type="text" onChange={handleUserTask} />
      <button onClick={addToDb}>Add</button>
      {tasks.map((task) => (
        <DisplayTask key={task.id} newTask={task.task} status={task.status} />
      ))}
    </div>
  );
}

export default CreateTask;
