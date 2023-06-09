import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';
import SidebarAdmin from '../partials/SidebarAdmin';
import SidebarTeacher from '../partials/SidebarTeacher';
import { Outlet ,useNavigate} from 'react-router-dom';
import SidebarChefDepartement from '../partials/SidebarChefDepartement';








function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [comptetype,setComptetype] = useState("")

  const navigation = useNavigate()

  
useEffect(()=>{
  let localStorageObject =  JSON.parse(localStorage.getItem("jwttoken")) 
  if(localStorageObject === null) {
    setComptetype("noLoggedUser")
    
  } else {
    setComptetype(localStorageObject.compteType)
    
  }



},[])

  if(comptetype == 'Teacher') {

    return (
      <div className="flex h-screen overflow-hidden">
      
       {/* Sidebar */}
       <SidebarTeacher sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
 
       {/* Content area */}
       <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
 
         {/*  Site header */}
         <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
 
         <main>
           <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
            <Outlet />
           </div>
         </main>
 
      
 
       </div>
     </div>
   )
  } else if(comptetype == 'Admin') {
    return (
      <div className="flex h-screen overflow-hidden">
      
       {/* Sidebar */}
       <SidebarAdmin sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
 
       {/* Content area */}
       <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
 
         {/*  Site header */}
         <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
 
         <main>
           <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
            <Outlet />
           </div>
         </main>
 
      
 
       </div>
     </div>
   )

  } else if(comptetype == "noLoggedUser") {
      
       navigation("/login")
   

  } else if(comptetype == 'ChefDepartement') {
    return (
      <div className="flex h-screen overflow-hidden">
      
       {/* Sidebar */}
       <SidebarChefDepartement sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
 
       {/* Content area */}
       <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
 
         {/*  Site header */}
         <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
 
         <main>
           <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
            <Outlet />
           </div>
         </main>
 
      
 
       </div>
     </div>
   )

  }


}

export default App
