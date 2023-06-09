import React from 'react';
import { Link } from 'react-router-dom';
import HorizontalBarChart from '../../charts/HorizontalBarChart';
import EditMenu from '../EditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

export default function StatsThree() {
  
    const chartData = {
        labels: [
            'Tardy',
             'Absent',
              'Present',
           
          ],
          datasets: [{
            axis: 'y',
            label: false,

            data: [1, 1, 5],
            fill: false,
            backgroundColor: [
             tailwindConfig().theme.colors.indigo[500],
             tailwindConfig().theme.colors.indigo[500],
             tailwindConfig().theme.colors.indigo[500],
            ],
          
            borderWidth: 1
          }]
      };
    
      return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
          <div className="px-5 pt-5">
            {/* <header className="flex justify-between items-start mb-2">
           
              <div></div>
             
              <EditMenu className="relative inline-flex">
                <li>
                  <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Semester 1</Link>
                </li>
                <li>
                  <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Semester 2</Link>
                </li>
              
              </EditMenu>
            </header> */}
            <h2 className="text-lg font-semibold text-slate-800 mb-2">Attendance Monitoring</h2>

            <form className='flex flex-row space-x-4'>


                {/* <div className=' bg-white'>
                  <select className=' w-full appearance-none rounded border bg-white border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary '>
                    <option value=''>School year</option>
                    <option value=''>UK</option>
                    <option value=''>Canada</option>
                  </select>
                </div> */}
              

                <div className=' bg-white'>
                  <select className=' w-full appearance-none rounded border bg-white border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary '>
                    <option value=''>Semester</option>
                    <option value=''>1</option>
                    <option value=''>2</option>
                  </select>
                </div>


                <div className=' bg-white'>
                  <select className=' w-full appearance-none rounded border bg-white border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary '>
                    <option value='' disabled>Groupe</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                </div>


                <button
                type='button'
                className='inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'
                >
                submit
               </button>






            


            </form>
            
          </div>
          {/* Chart built with Chart.js 3 */}
          <div className="grow">
            {/* Change the height attribute to adjust the chart height */}
            <HorizontalBarChart data={chartData} width={595} height={248} />
          </div>
        </div>
      );




}
