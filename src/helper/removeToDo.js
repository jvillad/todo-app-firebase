import { db } from '../config/firebase';
import { deleteDoc, doc } from 'firebase/firestore';

export const removeToDo = async (docId) => {
  await deleteDoc(doc(db, 'todos', docId));
};
