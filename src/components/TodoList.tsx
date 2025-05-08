import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface Todo {
  id: string;
  task: string;
  project: string;
  priority: string;
  deadline: string;
  progress: string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'todos'), snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Todo)));
    });
    return () => unsub();
  }, []);

  const toggleComplete = async (todo: Todo) => {
    const ref = doc(db, 'todos', todo.id);
    await updateDoc(ref, { completed: !todo.completed });
  };

  const remove = async (id: string) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} style={{ margin: '10px', padding: '10px', border: '1px solid gray' }}>
          <h3 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.task}</h3>
          <p><strong>Project:</strong> {todo.project}</p>
          <p><strong>Priority:</strong> {todo.priority}</p>
          <p><strong>Deadline:</strong> {todo.deadline}</p>
          <p><strong>Progress:</strong> {todo.progress}</p>
          <p>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo)} />
            Mark Complete
          </p>
          <button onClick={() => remove(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;