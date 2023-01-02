import { useState } from 'react';
function Task() {
  const [userTask, setUserTask] = useState('');
  const [theTask, setTheTask] = useState('');

  const addTask = () => {
    setUserTask(theTask);
  };
  const taskHandler = (ev) => {
    setTheTask(ev.target.value);
  };

  return (
    <div className="task">
      <input type="text" onChange={taskHandler} />
      <button onClick={addTask}>Add</button>
      {userTask !== '' && <p>{userTask}</p>}
    </div>
  );
}

export default Task;
