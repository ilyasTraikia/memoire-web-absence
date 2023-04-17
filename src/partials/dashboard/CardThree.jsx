import React from 'react'
import EditMenu from '../EditMenu';
import { Link } from 'react-router-dom';

export default function CardThree() {
    return (
        <div className='rounded-sm border border-stroke bg-meta-4 py-3 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark'>
         
         <div >
            <header className="flex justify-between items-start mb-2">
           
              <div></div>
              {/* Menu button */}
              <EditMenu className="relative inline-flex">
                <li>
                  <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Semester 1</Link>
                </li>
                <li>
                  <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Semester 2</Link>
                </li>
              
              </EditMenu>
            </header>
            <h2 className="text-lg font-semibold text-white mb-2">Student | per Sem</h2>
            
          </div>

    
          <div className=' flex items-end justify-between'>
            <div>
              <h4 className='text-title-md font-bold text-black dark:text-white mb-6'>
              Total attendance
              </h4>
              <div className='flex flex-col space-y-2 mt-2'>
               <span className='text-sm font-medium text-meta-3'>5 / total present</span>
               <span className='text-sm font-medium text-meta-3'>1 / total present</span>
               <span className='text-sm font-medium text-meta-3'>1 / total tardy</span>
              </div>
            </div>
    
          </div>
        </div>
      )
}
