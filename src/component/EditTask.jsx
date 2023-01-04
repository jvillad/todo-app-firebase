import { AiOutlineSave } from 'react-icons/ai';
import { useState, useEffect } from 'react';
function EditTask(task) {
  //   const theTask = task.task;
  const [val, setVal] = useState(task.task);
  useEffect(() => {
    setVal(task.task);
  }, [task.task]);
  const handleChange = (ev) => {
    setVal(ev.target.value);
    console.log(val);
  };

  return (
    <div className="edit-task">
      <input value={val} onChange={handleChange} />
      <button type="submit">{<AiOutlineSave />}</button>
    </div>
  );
}

export default EditTask;
