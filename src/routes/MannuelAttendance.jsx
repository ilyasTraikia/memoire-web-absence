import React, { useState } from 'react'
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import MannuelStudentsTable from '../partials/MannuelStudentsTable';



export async function loader() {
  const variable = JSON.parse(localStorage.getItem('jwttoken'))
  const response = await axios.get(`http://localhost:4000/chefDep/getAllSeances/${variable.compte_id}`)
  return  response
 
}







export default function MannuelAttendance() {


  const data = useLoaderData().data.data
  
  const [value,setValue] = useState("")
  const [inputValue,setInputValue] = useState(data[0].id_seance)






  return (
    <div>



<div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
  <div className='w-full xl:w-1/2'>
    <label className='mb-2.5 block text-black dark:text-white'>
      Choose seance id
    </label>

 
     <select name='qrcode' defaultValue={inputValue} onChange={(e)=> {  setInputValue(e.target.value)    }} className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
        <option value='' disabled>seance</option>
        {data.map((element,index)=> {
                return  <option key={index} value={element.id_seance}>{element.id_seance}</option>
          })}
     </select>
  </div>

 


</div>








 {/* <MannuelStudentsTable data= {}   /> */}
















    </div>
  )
}
