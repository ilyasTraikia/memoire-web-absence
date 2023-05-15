import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { MDBBtn } from "mdbreact";
import { Link} from "react-router-dom";
import axios from 'axios';





function ManageTeachersTable(props) {

 

   const data1 = props.data
  
const columnsArray = [{
  label: '#',
  field: 'number',
  sort: 'asc',
  width: 150
},{
  label: 'Employee ID',
  field: 'empid',
  sort: 'asc',
  width: 270
},{
  label: 'Name',
  field: 'name',
  sort: 'asc',
  width: 200
},{
  label: 'Option',
  field: 'option',
  sort: 'asc',
  width: 100
},
{
  label: 'View',
  field: 'view',
  sort: 'asc',
  width: 150
},{
  label: 'Status',
  field: 'status',
  sort: 'asc',
  width: 100
}
]

const newArray= data1.map((element,index) => {
  return {
      number: index,
      empid: element.id_teacher,
      name: element.firstname + ' '+ element.middlename + ' '+ element.lastname,
      option: element.status,
      view: [<Link to={`profile/${element.id_teacher}`}> <MDBBtn color="primary" size="sm">view</MDBBtn></Link>],
      status:


       [<form  onSubmit={async (e)=> { 
        e.preventDefault()
          await axios.put(`http://localhost:4000/accounts/updateTeacherStatus/${element.id_teacher}`,element.status == 'active' ? {status:'inactive'}:{status:'active'})
         location.reload()
          }} >
        <MDBBtn type='submit' name="status" color={element.status == 'active' ? 'danger':'success'} size="sm">{element.status == 'active' ? 'Desactivate':'Activate'}</MDBBtn>
       </form>],



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







export default ManageTeachersTable;