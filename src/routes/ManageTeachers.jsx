import React,{useState} from 'react';
import { Form,redirect,useNavigation,useLoaderData } from 'react-router-dom';
import ManageTeachersTable from '../partials/ManageTeachersTable';
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



export async function action({request,params}) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData);
  await axios.post('http://localhost:4000/accounts/addTeacher',data ) 
  return redirect(`/manageTeachers`);
}






export async function loader() {
    const response = await axios.get(`http://localhost:4000/accounts/teachers`)
    return  response
   
}




export default function ManageTeachers() {

  const  teachers  = useLoaderData();

  const TeachersData = teachers.data.data
 

  const navigation = useNavigation()

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);








  return (
    <div className='flex flex-col space-y-4'>

      <h2 className='font-bold text-2xl'>Teachers data</h2>

      <p>Data of the working teachers</p>

   





       <>
      <button className='w-[170px] items-center justify-center bg-meta-4 py-2 px-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'  onClick={toggleShow}>Add a new teacher</button >
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add a new teacher</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>







            <Form method='post' >
              <div className='p-6.5'>





        



                <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                  <div className='w-full xl:w-1/2'>
                    <label className='mb-2.5 block text-black dark:text-white'>
                      First name
                    </label>
                    <input
                      type='text'
                      name='firstname'
                      placeholder='Enter your first name'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>

                  <div className='w-full xl:w-1/2'>
                    <label className='mb-2.5 block text-black dark:text-white'>
                      Middlename
                    </label>
                    <input
                      type='text'
                      name='middlename'
                      placeholder='Enter your first name'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>

        
                </div>










                <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                <div className='w-full xl:w-1/2'>
                    <label className='mb-2.5 block text-black dark:text-white'>
                      Last name
                    </label>
                    <input
                      type='text'
                      name='lastname'
                      placeholder='Enter your last name'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>

                  <div className='w-full xl:w-1/2'>
                    <label className='mb-2.5 block text-black dark:text-white'>
                    Email <span className='text-meta-1'>*</span>
                    </label>
                    <input
                      type='email'
                      name='email'
                      placeholder='Enter your last name'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>
                </div>











                <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                  <div className='w-full xl:w-1/2'>
                    <label className='mb-2.5 block text-black dark:text-white'>
                      Username
                    </label>
                    <input
                      type='text'
                      name='username'
                      placeholder='Enter your first name'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>

                  <div className='w-full xl:w-1/2'>
                    <label className='mb-2.5 block text-black dark:text-white'>
                    Password 
                    </label>
                    <input
                      type='password'
                      name='password'
                      placeholder='Enter your last name'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>
                </div>















                <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                  <div className='w-full xl:w-1/2'>
                   <div>
                    <label className='mb-3 block text-black dark:text-white'>
                     Birthday
                    </label>
                    <div className='relative '>
                     <input
                    type='date'
                    name='birthday'
                    className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                     />

                  
                    </div>
                   </div>
                  </div>

                  <div className='mb-4.5 mt-1'>
                  <label className='mb-2.5 block text-black dark:text-white'>
                  Gender
                  </label>
                  <div className='relative z-20 bg-transparent dark:bg-form-input'>
                    <select name='gender' className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                      <option value=''>Type your gender</option>
                      <option value='Female'>Female</option>
                      <option value='Male'>Male</option>
                    </select>
                  </div>
                </div>
                </div>


               <input type="hidden" name='status' value="inactive" />











                <MDBBtn  type='button' style={{backgroundColor:"red"}} className=' text-white bg-meta-4' color='danger' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn type='submit' onClick={()=> { toggleShow() }} color='dark'  className='float-right' >{navigation.state == "submitting"? 'Saving...':'Save changes'}</MDBBtn>



              </div>
            </Form>



















            </MDBModalBody>


          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>













      <ManageTeachersTable data = {TeachersData} />

    </div>



  )
}
