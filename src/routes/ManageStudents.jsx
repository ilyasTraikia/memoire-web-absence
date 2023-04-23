import React,{useState} from 'react';
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

export default function ManageStudents() {
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
  
  
  
  
  
  
  
              <form action='#'>
                <div className='p-6.5'>
  
  
  
                <div className='mb-4.5'>
                    <label className='mb-2.5 block text-black dark:text-white'>
                    Student ID
                    </label>
                    <input
                      type='email'
                      placeholder='Enter your student id'
                      className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />
                  </div>
  
  
  
  
  
  
  
  
  
  
  
                  <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                    <div className='w-full xl:w-1/2'>
                      <label className='mb-2.5 block text-black dark:text-white'>
                        First name
                      </label>
                      <input
                        type='text'
                        placeholder='Enter your first name'
                        className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                      />
                    </div>
  
                    <div className='w-full xl:w-1/2'>
                      <label className='mb-2.5 block text-black dark:text-white'>
                        Last name
                      </label>
                      <input
                        type='text'
                        placeholder='Enter your last name'
                        className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                      />
                    </div>
                  </div>
  
                  <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                    <div className='w-full xl:w-1/2'>
                      <label className='mb-2.5 block text-black dark:text-white'>
                        Middlename
                      </label>
                      <input
                        type='text'
                        placeholder='Enter your first name'
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
                      <select className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                        <option value=''>Type your gender</option>
                        <option value=''>Female</option>
                        <option value=''>Male</option>
                      </select>
                    </div>
                  </div>
                  </div>
  
  
                  <MDBBtn  type='button' style={{backgroundColor:"red"}} className=' text-white bg-meta-4' color='danger' onClick={toggleShow}>
                  Close
                </MDBBtn>
                <MDBBtn type='submit' color='dark'  className='float-right' >Save changes</MDBBtn>
  
  
  
                </div>
              </form>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
              </MDBModalBody>
  
  
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
  
  
  
  
  
  
  
  
  
  
  
  
  
        <ManageTeachersTable />
  
      </div>
  
  
  
    )
}
