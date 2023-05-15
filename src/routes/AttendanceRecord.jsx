import React from 'react'
import AttendanceRecordTable from '../partials/AttendanceRecordTable'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'








export async function loader() {
  const response = await axios.get(`http://localhost:4000/teacher/getAllPresences`)
  return  response
}



export default function AttendanceRecord() {

   const attandance = useLoaderData().data.data

  return (
 <div>

    <div className='font-bold text-2xl mb-4'>AttendanceRecord</div>

    <AttendanceRecordTable data={attandance}/>

 </div>

  )
}
