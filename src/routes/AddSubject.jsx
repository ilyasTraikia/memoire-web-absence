import { useState } from 'react';
import React from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody
} from 'mdb-react-ui-kit';
import axios from 'axios'
import { Form,redirect,useNavigation,useLoaderData } from 'react-router-dom';
;
import SubjectsTable from '../partials/SubjectsTable';




export async function action({request,params}) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData);
  console.log(data)
  await axios.post('http://localhost:4000/admin/settings/addSubject',data ) 
  return redirect(`/settings/addSubject`);
}





export async function loader() {
    const response = await axios.get(`http://localhost:4000/admin/settings/Subjects`)
    return  response
}





export default function AddSubject() {

    const  subjects  = useLoaderData().data.data

    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);


  return (
    <div className='flex flex-col space-y-4'>
  
    <h2 className='font-bold text-2xl'>Students data</h2>

    <p>Data of all senior hight student</p>

 





     <>
    <button className='w-[190px] items-center justify-center bg-meta-4 py-2 px-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'  onClick={toggleShow}>Add a new Subject</button >
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog size="lg">
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Add a new Subject</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>







          <Form method='post'>
            <div className='p-6.5'>


            <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                <div className='w-full xl:w-1/2'>
                  <label className='mb-2.5 block text-black dark:text-white'>
                   Subject
                  </label>
                  <input
                    type='text'
                    name='name'
                    className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  />
                </div>

              </div>




            <div className='mb-4.5 mt-1'>
                <label className='mb-2.5 block text-black dark:text-white'>
                Semester
                </label>
                <div className='relative z-20 bg-transparent dark:bg-form-input'>
                  <select name='semester' className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                    <option value=''disabled>Choose</option>
                    <option value='1'>1st sem</option>
                    <option value='2'>2nd sem</option>
                  </select>
                </div>
              </div>







             




        


              <MDBBtn  type='button' style={{backgroundColor:"red"}} className=' text-white bg-meta-4' color='danger' onClick={toggleShow}>
              Close
            </MDBBtn>
            <MDBBtn type='submit' onClick={()=> { toggleShow() }} color='dark'  className='float-right' >Save changes</MDBBtn>



            </div>
          </Form>



















          </MDBModalBody>


        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  </>










  <SubjectsTable data={subjects} />


   

  </div>

  )
}
