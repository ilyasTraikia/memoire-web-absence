import React from 'react'
import CardOne from '../partials/dashboard/CardOne'
import CardThree from '../partials/dashboard/CardThree'
import CardTwo from '../partials/dashboard/CardTwo'
import DashboardCard04 from '../partials/dashboard/DashboardCard04'
import DashboardCard08 from '../partials/dashboard/DashboardCard08'
import StatsTwo from '../partials/dashboard/StatsTwo'
import StatsThree from '../partials/dashboard/StatsThree'

export default function Dashboard() {
  return (
    <div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
        <CardOne />
        <CardTwo />
        <CardThree />
       </div>

       <div className='mt-4 grid grid-cols-10 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
        <DashboardCard08 />
        <StatsTwo />
         <div className='col-start-1 col-end-11 '>
          <StatsThree />
         </div>
        
      </div>










    </div>
  )
}
