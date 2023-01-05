import { AiOutlineSave } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { completeToDo } from '../helper/completeToDo';

function EditTask(todo) {
  const [val, setVal] = useState(todo.task);
  const [todoData, setTodoData] = useState({});
  // to update the correct value of state variable
  useEffect(() => {
    setTodoData((prevState) => ({
      ...prevState,
      id: todo.docId,
      updatedTask: val,
      editMode: true,
    }));
  }, [val]);

  // to update the correct value of state variable
  useEffect(() => {
    setVal(todo.task);
  }, [todo.task]);

  const handleChange = (ev) => {
    setVal(ev.target.value);
  };
  const updateTask = () => {
    completeToDo(todoData);
    todo.onChange(false);
  };

  return (
    <div className="edit-task">
      <input value={val} onChange={handleChange} />
      <button type="submit" onClick={updateTask}>
        {<AiOutlineSave />}
      </button>
    </div>
  );
}

export default EditTask;
