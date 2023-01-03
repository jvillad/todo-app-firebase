import { useState } from 'react';
import Task from './Task';
function CreateTask() {
  const [tasks, setTasks] = useState([]);
  const [userTask, setUserTask] = useState('');

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      theTask: userTask,
      status: 'not-done',
    };
    setTasks([...tasks, newTask]);
  };
  const handleUserTask = (ev) => {
    setUserTask(ev.target.value);
  };

  return (
    <div className="task">
      <input type="text" onChange={handleUserTask} />
      <button onClick={addTask}>Add</button>
      {tasks.map((task) => (
        <Task key={task.id} newTask={task.theTask} status={task.status} />
      ))}
    </div>
  );
}

export default CreateTask;
