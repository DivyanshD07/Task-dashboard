import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskFilters from '../components/TaskFilters';
import TaskList from '../components/TaskList';

const TaskDashboard = () => {

  const [menu, setMenu] = useState(true);
  return (
    <div className='flex w-full'>
      <div className={menu ? 'w-1/6' : 'w-1/12'}>
        <TaskFilters setMenu={setMenu} menu={menu} />
      </div>
      <div className={`${menu ? 'w-5/6' : 'w-11/12'} flex`}>
        <div className='w-4/6 border-r-2'><TaskList /></div>
        <div className='w-2/6 p-2'><TaskForm /></div>
      </div>
    </div>
  );
};

export default TaskDashboard;
