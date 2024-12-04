import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/taskSlice';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: '', description: '', dueDate: '' });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTask({ ...form, id: Date.now(), completed: false }));
    setForm({ title: '', description: '', dueDate: '' });
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
        required
        className='p-5 border-2'
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
        className='p-2 border-2'
      />
      <input
        type="date"
        value={form.dueDate}
        onChange={e => setForm({ ...form, dueDate: e.target.value })}
        required
        className='w-1/3 ml-2'
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
