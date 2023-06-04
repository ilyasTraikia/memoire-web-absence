import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { MDBBtn } from "mdbreact";
import { Link} from "react-router-dom";
import axios from 'axios';





function JustificationsTable(props) {

 

   const data1 = props.data
  
const columnsArray = [{
  label: '#',
  field: 'number',
  sort: 'asc',
  width: 150
}
,{
  label: 'Teacher',
  field: 'teacher',
  sort: 'asc',
  width: 200
},{
  label: 'Student',
  field: 'student',
  sort: 'asc',
  width: 100
},
{
  label: 'Subject',
  field: 'subject',
  sort: 'asc',
  width: 150
},
{
  label: 'Contenu',
  field: 'contenu',
  sort: 'asc',
  width: 150
}
,{
  label: 'Date',
  field: 'date',
  sort: 'asc',
  width: 100
},
{
    label: 'Status',
    field: 'status',
    sort: 'asc',
    width: 100
  },
  {
    label: 'Action',
    field: 'action',
    sort: 'asc',
    width: 100
  }
]

const newArray= data1.map((element,index) => {
  return {
      number: index,
      teacher: element.teacher_firstname + ' '+ element.teacher_middlename+ ' '+element.teacher_lastname,
      student: element.student_firstname + ' '+ element.student_middlename + ' '+ element.student_lastname,
      subject: element.subject_name,
      contenu: element.contenu_just,
      date: element.date_just,
      status: element.etat,
      action:
       [
       
       <div className='flex'>
        <form  onSubmit={async (e)=> { 
         e.preventDefault()
         await Promise.all(
          [
             axios.put(`http://localhost:4000/chefDep/updateJustificationStatus/${element.id_justification}`,{etat:'accepted'}),
             axios.put(`http://localhost:4000/chefDep/updatePresenceStatus/${element.id_presence}`,{presence:'justified'})
          ]
         )
         location.reload()
          }} >

            {element.etat == 'pending' ? <MDBBtn type='submit' name="status" color='success' size="sm">Accept</MDBBtn> : "None "}

        </form>

      

        <form  onSubmit={async (e)=> { 
          e.preventDefault()
             await axios.put(`http://localhost:4000/chefDep/updateJustificationStatus/${element.id_justification}`,{etat:'declined'})
           location.reload()
          }} >
    
            {element.etat == 'pending' ? <MDBBtn type='submit' name="status" color='danger' size="sm">Decline</MDBBtn> : ""}

       </form>
   </div>
       
    
    ],



  };
});


  const data = {
    columns: columnsArray,
    rows: newArray
    }

 

   

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
   


}







export default JustificationsTable;