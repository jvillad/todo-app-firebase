import { db } from '../config/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export const fetchTodos = () => {
  const todosDb = collection(db, 'todos');
  const [tasks, setTasks] = useState([]);

  // Read todos from db
  useEffect(() => {
    const dbQuery = query(todosDb, orderBy('date'));
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
