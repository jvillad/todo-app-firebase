import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../config/firebase';
import RenderTask from './RenderTask';
import { fetchTodos } from '../helper/fetchToDo';
import Footer from './Footer';

function CreateTask() {
  const [userTask, setUserTask] = useState('');
  const todosDb = collection(db, 'todos');

  // Read todos from db
  const tasks = fetchTodos();
  tasks.sort((a, b) => a.completed - b.completed);

  // filter task that are not completed
  const remainingTask = tasks.filter((task) => !task.completed);

  // Add new task to db
  const taskToDb = userTask;
  const addToDb = async () => {
    setUserTask('');
    await addDoc(todosDb, {
      date: Date.now(),
      task: taskToDb,
      completed: false,
      owner: auth.currentUser.email,
    });
  };

  return (
    <div className="task-container">
      <h1>Hi 👋🏼 {auth.currentUser.displayName}</h1>
      <div className="input-and-btn">
        <input
          className="the-task"
          placeholder="Enter to do here"
          value={userTask}
          onChange={(ev) => {
            setUserTask(ev.target.value);
          }}
          onKeyPress={(ev) => {
            ev.key === 'Enter' && addToDb();
          }}
        />
        <button onClick={addToDb} className="add-btn">
          +
        </button>
      </div>
      {tasks.map((task) => (
        <RenderTask
          key={task.id}
          id={task.id}
          date={task.date}
          newTask={task.task}
          status={task.completed}
        />
      ))}

      <Footer taskRemaining={remainingTask} />
    </div>
  );
}

export default CreateTask;
