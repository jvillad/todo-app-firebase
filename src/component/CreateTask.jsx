/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../config/firebase';
import DisplayTask from './DisplayTask';

function CreateTask() {
  const [tasks, setTasks] = useState([]);
  const [userTask, setUserTask] = useState('');
  const todosDb = collection(db, 'todos');

  // Read todos from firebase
  useEffect(() => {
    const dbQuery = query(collection(db, 'todos'));
    const unsub = onSnapshot(dbQuery, (querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      });
      setTasks(todos);
    });
    return () => unsub();
  }, []);

  // Add new task to db
  const addToDb = async (todo) => {
    await addDoc(todosDb, {
      task: userTask,
      completed: false,
    });
  };

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
