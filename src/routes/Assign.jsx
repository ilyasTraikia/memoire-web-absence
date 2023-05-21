import React from 'react'
import {MDBBtn} from 'mdb-react-ui-kit';
import { Form, useLoaderData,redirect} from 'react-router-dom';
import axios from 'axios';
import EmploisTempsTable from '../partials/EmploisTempsTable';






export async function action({request,params}) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData);
  await axios.post('http://localhost:4000/chefDep/insertSeance',data ) 
  return redirect(`/settings/assign`);
}








export async function loader() {
  const [groupsRes,SubjectsRes,teachersRes,SallesRes,SeancesRes] = await Promise.all(
    [
      axios.get(`http://localhost:4000/chefDep/getAllGroups`),
      axios.get(`http://localhost:4000/admin/settings/Subjects`),
      axios.get(`http://localhost:4000/accounts/teachers`),
      axios.get(`http://localhost:4000/chefDep/getAllSalles`),
      axios.get(`http://localhost:4000/chefDep/getAllSeances`)
    ]
    ) 
  
  return  {groupsRes,SubjectsRes,teachersRes,SallesRes,SeancesRes}
 
}




export default function Assign() {

  const data = useLoaderData()
  const teachers = data.teachersRes.data.data
  const groups = data.groupsRes.data.data
  const subjects = data.SubjectsRes.data.data
  const salles = data.SallesRes.data.data
  const seances = data.SeancesRes.data.data

 
 
 

  return (
    <div>

           <Form method='post'>
            <div className='p-6.5'>


          <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>

            <div className='w-full mb-4.5 mt-1'>
                <label className='mb-2.5 block text-black dark:text-white'>
                Teacher
                </label>
                <div className='relative z-20 bg-transparent dark:bg-form-input'>
                  <select name='teacher' className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                    <option value=''disabled>Choose</option>
                    {teachers.map((element,index)=>{
                      return  <option key={index} value={element.id_teacher}>{element.firstname + ' '+ element.middlename + ' '+ element.lastname}</option>
                    })}
                  </select>
                </div>
              </div>


              <div className=' w-full mb-4.5 mt-1'>
                <label className='mb-2.5 block text-black dark:text-white'>
                Subject
                </label>
                <div className='relative z-20 bg-transparent dark:bg-form-input'>
                  <select name='subject' className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                    <option value=''disabled>Choose</option>
                    {subjects.map((element,index)=>{
              
                     return  <option key={index} value={element.id_module}>{element.name}</option>
                    })}
                  </select>
                </div>
              </div>


              <div className=' w-full mb-4.5 mt-1'>
                <label className='mb-2.5 block text-black dark:text-white'>
                Groupe
                </label>
                <div className='relative z-20 bg-transparent dark:bg-form-input'>
                  <select name='groupe' className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                    <option value=''disabled>Choose</option>
                    {groups.map((element,index)=>{
                       return <option key={index} value={element.id_groupe}>{element.id_groupe}</option>
                    })}
                  </select>
                </div>
              </div>



          </div>




            <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
               <div className='w-full xl:w-1/2'>
                   <div>
                    <label className='mb-3 block text-black dark:text-white'>
                     Start time
                    </label>
                    <div className='relative '>
                     <input
                    type='time'
                    name='starttime'
                    className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                     />

                  
                    </div>
                   </div>
                  </div>





                  <div className='w-full xl:w-1/2'>
                   <div>
                    <label className='mb-3 block text-black dark:text-white'>
                     End time
                    </label>
                    <div className='relative '>
                     <input
                    type='time'
                    name='endtime'
                    className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                     />

                  
                    </div>
                   </div>
                  </div>



                  <div className=' w-full mb-4.5 mt-1'>
                    <label className='mb-2.5 block text-black dark:text-white'>
                      Select Day
                    </label>
                   <div className='relative z-20 bg-transparent dark:bg-form-input'>
                      <select name='day' className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                        <option value=''disabled>Choose</option>
                        <option value='monday'>monday</option>
                        <option value='tuesday'>tuesday</option>
                        <option value='webnesday'>webnesday</option>
                        <option value='thursday'>thursday</option>
                        <option value='friday'>friday</option>
                        <option value='saturday'>saturday</option>
                      </select>
                  </div>
                 </div>





                 <div className=' w-full mb-4.5 mt-1'>
                    <label className='mb-2.5 block text-black dark:text-white'>
                      Select Salle
                    </label>
                   <div className='relative z-20 bg-transparent dark:bg-form-input'>
                      <select name='salle' className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                        <option value=''disabled>Choose</option>
                        {salles.map((element,index)=> {
                          return  <option key={index} value={element.id_salle}>{element.nom_salle + ' '+ element.type_salle}</option>
                        })}


                      </select>
                  </div>
                 </div>
              </div>


         

            <MDBBtn type='submit' color='dark'  className='float-right' >Submit</MDBBtn>
            </div>
           </Form>







             {/* Subject handle */}
               <div className='mt-12 border-black border-opacity-20 border-[1px] p-3'>
                 <div className='py-2 text-xl font-bold pb-1'>Subject handle</div> 
                 <EmploisTempsTable data= {seances} />
               </div>
 




    </div>
  )
}
