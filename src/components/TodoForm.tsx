import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

function TodoForm() {
  const [task, setTask] = useState('');
  const [project, setProject] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [deadline, setDeadline] = useState('');
  const [progress, setProgress] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;

    await addDoc(collection(db, 'todos'), {
      task,
      project,
      priority,
      deadline,
      progress,
      completed: false,
      created: new Date()
    });

    setTask('');
    setProject('');
    setPriority('Medium');
    setDeadline('');
    setProgress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={task} onChange={e => setTask(e.target.value)} placeholder="Task" />
      <input value={project} onChange={e => setProject(e.target.value)} placeholder="Project" />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />
      <input value={progress} onChange={e => setProgress(e.target.value)} placeholder="Progress Notes" />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;