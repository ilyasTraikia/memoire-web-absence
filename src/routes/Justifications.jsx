import React from 'react'
import JustificationsTable from '../partials/JustificationsTable'
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';


export async function loader() {
  const response = await axios.get(`http://localhost:4000/chefDep/getAllJustifications`)
  return  response
 
}





export default function Justifications() {


  const justifications = useLoaderData().data.data

  

  return (

    <div>


             <div className='mt-12 border-black border-opacity-20 border-[1px] p-3'>
                 <div className='py-2 text-xl font-bold pb-1'>List of justifications</div> 
               
               <JustificationsTable data= {justifications}/>



               </div>









    </div>
  )
}
