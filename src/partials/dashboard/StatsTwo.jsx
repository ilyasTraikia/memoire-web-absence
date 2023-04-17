import React from 'react';
import { Link } from 'react-router-dom';
import BarChart from '../../charts/BarChart01';
import EditMenu from '../EditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

export default function StatsTwo() {


    const chartData = {
        labels: [
            '2016-2017',
             '2017-2018',
              '2018-2019',
            '2019-2020',
             '2020-2021', 
             '2021-2022',
          ],
        datasets: [
          // Light blue bars
          {
            label: '',
            data: [
              0, 0, 0, 0, 0, 1,
            ],
            backgroundColor: tailwindConfig().theme.colors.blue[400],
            hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
            barPercentage: 0.77,
            categoryPercentage: 0.77,
          },
          // Blue bars
          {
            label: '',
            data: [
              0, 0, 0, 0, 2, 0,
            ],
            backgroundColor: tailwindConfig().theme.colors.indigo[500],
            hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
            barPercentage: 0.77,
            categoryPercentage: 0.77,
          },
        ],
      };
    
      return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
          <div className="px-5 pt-5">
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
            <h2 className="text-lg font-semibold text-slate-800 mb-2">Student | per Sem</h2>
            
          </div>
          {/* Chart built with Chart.js 3 */}
          <div className="grow">
            {/* Change the height attribute to adjust the chart height */}
            <BarChart data={chartData} width={595} height={248} />
          </div>
        </div>
      );






}
