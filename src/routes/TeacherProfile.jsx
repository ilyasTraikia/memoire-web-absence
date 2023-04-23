import React ,{useState} from 'react'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
  import { Form } from 'react-router-dom';
  import {data1} from '../utils/data'
  import { MDBDataTable } from 'mdbreact';


export default function TeacherProfile() {

    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
      if (value === basicActive) {
        return;
      }
  
      setBasicActive(value);
    };
  return (
    <div className='px-8'>


<>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Profile
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
          Edit Profile
          </MDBTabsLink>
        </MDBTabsItem>     
      </MDBTabs>

      <MDBTabsContent>






        <MDBTabsPane show={basicActive === 'tab1'}>

         <div className='py-2 text-xl font-bold'>Edinburgh green</div>  
         <hr /> 
         <div className='flex flex-col space-y-3 mt-4'>
           <div className='flex flex-row justify-between '>
             <div><b>employee_id:</b> 001</div>
             <div><b>email:</b>dqsd@dqsdsq</div>
           </div>

           <div className='flex flex-row justify-between '>
             <div><b>name:</b> Edinburgh green</div>
             <div><b>bday:</b> 51-85-1025</div>
           </div>

           <div className='flex flex-row justify-between '>
             <div><b>gender:</b> Male</div>
             <div><b>status:</b> inactive</div>
           </div>
         </div>



        </MDBTabsPane>




































        <MDBTabsPane show={basicActive === 'tab2'}>


        <div className='py-2 text-xl font-bold'>Edinburgh green</div>  
        <hr />

        <Form method='post'>
              <div className='p-6.5'>





              <div className='mb-4.5'>
                  <label className='mb-2.5 block text-black dark:text-white'>
                   Employee ID
                  </label>
                  <input
                    type='number'
                    name='id'
                    placeholder='Enter your employee id'
                    className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                  />
                </div>






                <input type="hidden" name='compte_type' value="Teacher"/>









                <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                  <div className='w-full xl:w-1/2'>
                    <label className='mb-2.5 block text-black dark:text-white'>
                      First name
                    </label>
                    <input
                      type='text'
                      name='prenom'
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
                      name='nom'
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
                      name='middlename'
                      placeholder='Enter your first name'
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
                      <option value=''>Female</option>
                      <option value=''>Male</option>
                    </select>
                  </div>
                </div>
                </div>

    
              <button type='submit'    className='float-right w-[170px] items-center justify-center bg-meta-4 py-2 px-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10' >Save changes</button>



              </div>
            </Form>






















        </MDBTabsPane>


      </MDBTabsContent>
    </>



    {/* Subject handle */}
    <div className='mt-12 border-black border-opacity-20 border-[1px] p-3'>
     <div className='py-2 text-xl font-bold pb-1'>Subject handle</div> 
     <MDBDataTable
      striped
      bordered
      small
      data={data1}
     />
    </div>








    </div>
  )
}
