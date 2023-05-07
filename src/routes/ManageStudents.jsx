import React,{useState} from 'react';
import ManageTeachersTable from '../partials/ManageTeachersTable';
import { Form,redirect,useNavigation,useLoaderData } from 'react-router-dom';
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
import ManageStudentsTable from '../partials/ManageStudentsTable';




export async function action({request,params}) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData);
  await axios.post('http://localhost:4000/admin/addStudent',data ) 
  return redirect(`/manageStudents`);
}






export async function loader() {
    const response = await axios.get(`http://localhost:4000/admin/students`)
    return  response
   
}









export default function ManageStudents() {

  const  students  = useLoaderData().data.data
  console.log(students);

    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);
  
  
  
  
  
  
  
  
    return (
      <div className='flex flex-col space-y-4'>
  
        <h2 className='font-bold text-2xl'>Students data</h2>
  
        <p>Data of all senior hight student</p>
  
     
  
  
  
  
  
         <>
        <button className='w-[170px] items-center justify-center bg-meta-4 py-2 px-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'  onClick={toggleShow}>Add a new student</button >
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
          <MDBModalDialog size="lg">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Add a new student</MDBModalTitle>
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
                      placeholder='Enter your midlename'
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

                  <div className='mb-4.5 mt-1'>
                  <label className='mb-2.5 block text-black dark:text-white'>
                  Year,Section & Strand
                  </label>
                  <div className='relative z-20 bg-transparent dark:bg-form-input'>
                    <select name='SectionYearId' className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                      <option value='1' disabled>ABM Grade11 A</option>
                      <option value='2'>ABM Grade12 A</option>
                      <option value='3'>HUMUSS Grade12 B</option>
                      <option value='4'>HE Grade12 B</option>
                      <option value='5'>HE Grade12 1</option>
                    </select>
                  </div>
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
                      placeholder='Enter your username'
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
                      placeholder='Enter your password'
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
  
  
  
  
  
  
  
  
   <ManageStudentsTable data={students} />
  
  
  
  
       
  
      </div>
  
  
  
    )
}
