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
import AcademicTable from '../partials/AcademicTable';




export async function action({request,params}) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData);
  console.log(data)
  await axios.post('http://localhost:4000/admin/settings/addStrand',data ) 
  return redirect(`/settings/addStrand`);
}





export async function loader() {
    const response = await axios.get(`http://localhost:4000/admin/settings/Strands`)
    return  response
}





export default function AddStrand() {

    const  strands  = useLoaderData().data.data

    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);


  return (
    <div className='flex flex-col space-y-4'>
  
    <h2 className='font-bold text-2xl'>Students data</h2>

    <p>Data of all senior hight student</p>

 





     <>
    <button className='w-[190px] items-center justify-center bg-meta-4 py-2 px-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'  onClick={toggleShow}>Add a new Academic</button >
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog size="lg">
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Add a new Year&Sections</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>







          <Form method='post'>
            <div className='p-6.5'>



            <div className='mb-4.5 mt-1'>
                <label className='mb-2.5 block text-black dark:text-white'>
                Year
                </label>
                <div className='relative z-20 bg-transparent dark:bg-form-input'>
                  <select name='year' className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                    <option value=''disabled>Choose</option>
                    <option value='Grade11'>Grade11</option>
                    <option value='Grade12'>Grade12</option>
                  </select>
                </div>
              </div>











              <div className='mb-4.5 mt-1'>
                <label className='mb-2.5 block text-black dark:text-white'>
                Strand
                </label>
                <div className='relative z-20 bg-transparent dark:bg-form-input'>
                  <select name='strand' className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                    <option value='' disabled>Choose</option>
                    <option value='ABM'>ABM</option>
                    <option value='HUMSS'>HUMSS</option>
                    <option value='STEM'>STEM</option>
                    <option value='HE'>HE</option>
                    <option value='ICT'>ICT</option>
                  </select>
                </div>
              </div>



              <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                <div className='w-full xl:w-1/2'>
                  <label className='mb-2.5 block text-black dark:text-white'>
                   Section
                  </label>
                  <input
                    type='text'
                    name='section'
                    className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  />
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










  <AcademicTable data={strands} />


   

  </div>

  )
}
