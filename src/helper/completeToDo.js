import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const completeToDo = async (todos) => {
  const todoRef = doc(db, 'todos', todos.id);
  await updateDoc(todoRef, {
    completed: !todos.status,
  });
};
