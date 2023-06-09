import React from 'react'
import {  MDBBtn } from 'mdb-react-ui-kit';
import { Form } from 'react-router-dom';
import axios from 'axios';
import { redirect } from 'react-router-dom';




export async function action({request,params}) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData);
  const variable = JSON.parse(localStorage.getItem('jwttoken'))
  await axios.post(`http://localhost:4000/teacher/insertAnnonce/${variable.compte_id}`,data ) 
  location.reload()
  return redirect(`/SendAnnouncement`);
}



export async function loader() {
  const variable = JSON.parse(localStorage.getItem('jwttoken'))
  const response = await axios.get(`http://localhost:4000/teacher/getAnnonceByTeacher/${variable.compte_id}`)
  return  response
 
}










export default function SendAnnounce() {



  return (
    <div>


   <Form method='post'>

              <div className='mb-4.5 mt-1'>
                  <label className='mb-2.5 block text-black dark:text-white'>
                  Groupe
                  </label>
                  <div className='relative z-20 bg-transparent dark:bg-form-input'>
                    <select name='id_groupe' className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                      <option value='' disabled>choose groupe</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                    </select>
                  </div>
                </div>






                <div className='w-full'>
                    <label className='mb-2.5 block text-black dark:text-white'>
                     Announce contenu
                    </label>
                    <textarea
                      required
                      name='contenu_annonce'
                      placeholder='Contenu'
                      style={{resize:'none'}}
                      className='w-full h-[300px] rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>



                  <MDBBtn type='submit'  color='dark'  className='float-right' >Send</MDBBtn>



    </Form>







    </div>
  )
}
