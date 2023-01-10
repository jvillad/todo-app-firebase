import { db, auth } from '../config/firebase';
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export const fetchTodos = () => {
  const todosDb = collection(db, 'todos');
  const [tasks, setTasks] = useState([]);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return 'Loading...';
  }
  // Read todos from db
  useEffect(() => {
    const dbQuery = query(
      todosDb,
      orderBy('date'),
      where('owner', '==', user.email)
    );
    const unsub = onSnapshot(dbQuery, (querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      });
      setTasks(todos);
    });
    return () => unsub();
  }, []);
  return tasks;
};
