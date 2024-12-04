import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/taskSlice';

const TaskFilters = ({ menu, setMenu }) => {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenu(prev => !prev);
  }

  return (
    menu ? (<div className='w-full h-full md:h-screen border-red-400 flex flex-col bg-slate-900 text-white items-center'>
      <button onClick={toggleMenu} className='text-xl py-6 px-4 font-bold'>
        <div className='mr-3 inline'>=</div>
        Tasks - Dashboard
      </button >
      <button onClick={() => dispatch(setFilter('all'))}>All</button>
      <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
      <button onClick={() => dispatch(setFilter('pending'))}>Pending</button>
      <button onClick={() => dispatch(setFilter('overdue'))}>Overdue</button>
    </div >
    ) : (
      <button
        className='h-screen bg-slate-900 text-white w-20'
        onClick={toggleMenu}
      >
        =
      </button>)
  );
};

export default TaskFilters;
