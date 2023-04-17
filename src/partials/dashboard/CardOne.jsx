import React from 'react'

export default function CardOne() {
    return (
        <div className='rounded-sm border border-stroke bg-meta-4 py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark'>
          <div className='flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4'>
          <svg   width='35'height='22' className='fill-primary dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
          </div>
    
          <div className='mt-4 flex items-end justify-between'>
            <div>
              <h4 className='text-title-md font-bold text-black dark:text-white'>
               School year
              </h4>
            
            </div>
    
            <span className='flex items-center gap-1 text-sm font-medium text-meta-3'>
            3 / total enrolled
            
            </span>
          </div>
        </div>
      )
}
