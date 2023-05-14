import React from 'react';
import { MDBDataTable } from 'mdbreact';


export default function EmploisTempsTable(props) {



    const data1 = props.data
  
    const columnsArray = [{
      label: '#',
      field: 'number',
      sort: 'asc',
      width: 150
    },{
      label: 'Name',
      field: 'name',
      sort: 'asc',
      width: 270
    },{
      label: 'Subject',
      field: 'subject',
      sort: 'asc',
      width: 200
    },{
      label: 'Groupe',
      field: 'groupe',
      sort: 'asc',
      width: 100
    },{
      label: 'Schedule',
      field: 'schedule',
      sort: 'asc',
      width: 100
      }
    ]
    
    const newArray= data1.map((element,index) => {
      return {
          number: index,
          name: element.firstname + ' '+ element.middlename + ' '+ element.lastname,
          subject: element.name,
          groupe: element.id_groupe,
          schedule: element.start_time + ' '+ element.end_time + ' '+ element.day
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
