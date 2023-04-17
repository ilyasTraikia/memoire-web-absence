import React from 'react';
import ManageTeachersTable from './ManageTeachersTable';

export default function ManageTeachers() {








  return (
    <div className='flex flex-col space-y-4'>

      <h2 className='font-bold text-2xl'>Teachers data</h2>

      <p>Data of the working teachers</p>

      <button  to='#'  className='w-[170px] items-center justify-center bg-meta-4 py-2 px-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10' >
        Add a new teacher
       </button>

      <ManageTeachersTable />

    </div>



  )
}
