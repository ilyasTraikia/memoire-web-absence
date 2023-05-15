import React from 'react';
import { MDBDataTable } from 'mdbreact';


export default function AttendanceRecordTable(props) {



    const data1 = props.data
  
    const columnsArray = [{
      label: '#',
      field: 'number',
      sort: 'asc',
      width: 150
    },{
      label: 'student_no',
      field: 'student',
      sort: 'asc',
      width: 270
    },{
      label: 'Name',
      field: 'name',
      sort: 'asc',
      width: 200
    },{
      label: 'Remarks',
      field: 'remarks',
      sort: 'asc',
      width: 100
    },
    {
        label: 'Subject',
        field: 'subject',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Time',
        field: 'time',
        sort: 'asc',
        width: 100
      }
    ]
    
    const newArray= data1.map((element,index) => {
      return {
          number: index,
          student: element.id_student,
          name: element.firstname + ' '+element.middlename+ ' '+element.lastname,
          remarks: element.presence,
          subject:element.name,
          time:element.start_time + ' to '+ element.end_time + ' '+ element.day
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
