import React from 'react'
import { MDBDataTable } from 'mdbreact';


export default function SubjectsTable(props) {



    const data1 = props.data
  
    const columnsArray = [{
      label: '#',
      field: 'number',
      sort: 'asc',
      width: 150
    },{
      label: 'Subject',
      field: 'subject',
      sort: 'asc',
      width: 270
    },{
      label: 'Semester',
      field: 'semester',
      sort: 'asc',
      width: 200
    }
    ]
    
    const newArray= data1.map((element,index) => {
      return {
          number: index,
          subject: element.name,
          semester: element.semester
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
