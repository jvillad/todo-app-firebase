import { AiOutlineSave, AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { updateToDo } from '../helper/updateToDo';

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
    updateToDo(todoData);
    todo.onChange(false);
  };

  return (
    <div className="edit-task">
      <input
        className="p-2 edit-input"
        value={val}
        onChange={handleChange}
        ref={todo.inputRef}
      />
      <div className="flex gap-5 pl-4">
        <button
          className="pt-[5px] text-[30px] border-none text-[#faa916] hover:text-orange-500"
          type="submit"
          onClick={updateTask}
        >
          {<AiOutlineSave />}
        </button>
        <button
          className="pt-[5px] text-[30px] border-none text-[#eb5160] hover:text-orange-500"
          type="submit"
          onClick={() => todo.onChange(false)}
        >
          {<AiOutlineClose />}
        </button>
      </div>
    </div>
  );
}

export default EditTask;
