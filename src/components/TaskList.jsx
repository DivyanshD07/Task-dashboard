import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCompletion, deleteTask } from '../features/taskSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector(state => state.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    if (filter === 'overdue') return new Date(task.dueDate) < new Date() && !task.completed;
    return true;
  });

  return (
    <div>
      {filteredTasks.map(task => (
        <div key={task.id} className='border-2'>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <button onClick={() => dispatch(toggleCompletion(task.id))}>
            {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
          </button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
