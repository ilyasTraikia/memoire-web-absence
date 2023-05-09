import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { MDBBtn } from "mdbreact";
import { Link} from "react-router-dom";
import axios from 'axios';

export default function ManageStudentsTable(props) {

    const data1 = props.data

    const columnsArray = [{
        label: '#',
        field: 'number',
        sort: 'asc',
        width: 150
      },{
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 270
      },{
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200
      },{
        label: 'Sections',
        field: 'sections',
        sort: 'asc',
        width: 100
      },{
        label: 'Gender',
        field: 'gender',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 150
      },{
        label: 'Option',
        field: 'option',
        sort: 'asc',
        width: 100
      },{
        label: 'View',
        field: 'view',
        sort: 'asc',
        width: 100
      }
      ]


      const newArray= data1.map((element,index) => {
    
        return {
            number: index,
            id: element.id,
            name:  element.firstname + ' '+ element.middlename + ' '+ element.lastname,
            sections:element.strand + '  ' + element.year + '  '+element.section,
            gender:element.gender,
            status: element.status,
            option:
             [<form  onSubmit={async (e)=> { 
              e.preventDefault()
                await axios.put(`http://localhost:4000/admin/updateStudentStatus/${element.id}`,element.status == 'active' ? {status:'inactive'}:{status:'active'})
               location.reload()
                }} >
              <MDBBtn type='submit' name="status" color={element.status == 'active' ? 'danger':'success'} size="sm">{element.status == 'active' ? 'Desactivate':'Activate'}</MDBBtn>
             </form>],
              view: [<Link to={`profile/${element.id}`}> <MDBBtn color="primary" size="sm">view</MDBBtn></Link>],
      
      
      
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
          )
           
}
