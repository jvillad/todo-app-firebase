import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const updateToDo = async (todosData) => {
  const todoRef = doc(db, 'todos', todosData.id);
  await updateDoc(
    todoRef,
    todosData.editMode
      ? { task: todosData.updatedTask }
      : {
          completed: !todosData.status,
        }
  );
};
