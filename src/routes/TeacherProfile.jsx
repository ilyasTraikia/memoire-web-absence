import React ,{useState} from 'react'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
  import { Form, useLoaderData,redirect } from 'react-router-dom';
  import axios from 'axios';




  export async function action({request,params}) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData);
    await axios.put(`http://localhost:4000/accounts/updateTeacher/${data.id_teacher}`,data ) 
    location.reload()
    return redirect(`/teacherProfile`);
  }
  
  


  export async function loader({ params }) {
    const variable = JSON.parse(localStorage.getItem('jwttoken'))
    const teacher = await axios.get(`http://localhost:4000/accounts/teacherP/${variable.compte_id}`)
    return  teacher;
  }
  






export default function TeacherProfile() {

  const teacher = useLoaderData().data.data[0]

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

         <div className='py-2 text-xl font-bold'>{teacher.lastname} {teacher.middlename} {teacher.firstname}</div>  
         <hr /> 
         <div className='flex flex-col space-y-3 mt-4'>
           <div className='flex flex-row justify-between '>
             <div><b>employee_id:</b>{teacher.id_teacher}</div>
             <div><b>email:</b>{teacher.email}</div>
           </div>

           <div className='flex flex-row justify-between '>
             <div><b>name:</b>{teacher.lastname} {teacher.middlename} {teacher.firstname}</div>
             <div><b>bday:</b>{teacher.birthday}</div>
           </div>

           <div className='flex flex-row justify-between '>
             <div><b>gender:</b> {teacher.gender}</div>
             <div><b>status:</b> {teacher.status}</div>
           </div>
         </div>



        </MDBTabsPane>




































        <MDBTabsPane show={basicActive === 'tab2'}>


        <div className='py-2 text-xl font-bold'>{teacher.lastname} {teacher.middlename} {teacher.firstname}</div>  
        <hr />



        <Form method='post' >
              <div className='p-6.5'>
                <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                  <div className='w-full xl:w-1/2'>
                    <label className='mb-2.5 block text-black dark:text-white'>
                      First name
                    </label>
                    <input
                      type='text'
                      defaultValue={teacher.firstname}
                      name='firstname'
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
                      defaultValue={teacher.middlename}
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
                      defaultValue={teacher.lastname}
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
                      defaultValue={teacher.email}
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
                      defaultValue={teacher.username}
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
                      defaultValue={teacher.password}
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
                    defaultValue={teacher.birthday}
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
                    <select name='gender' defaultValue={teacher.gender} placeholder='Male' className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                      <option value=''>Type your gender</option>
                      <option value='Female'>Female</option>
                      <option value='Male'>Male</option>
                    </select>
                  </div>
                </div>
                </div>

                <input type="hidden" name='status' value={teacher.status} />

                <input type="hidden" name='id_teacher' value={teacher.id_teacher} />



              <button type='submit'    className='float-right w-[170px] items-center justify-center bg-meta-4 py-2 px-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10' >Save changes</button>



              </div>
            </Form>






















        </MDBTabsPane>


      </MDBTabsContent>
    </>



    {/* Subject handle */}
    {/* <div className='mt-12 border-black border-opacity-20 border-[1px] p-3'>
     <div className='py-2 text-xl font-bold pb-1'>Subject handle</div> 
     <MDBDataTable
      striped
      bordered
      small
      data={data1}
     />
    </div> */}








    </div>
  )
}
