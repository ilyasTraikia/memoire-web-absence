import React from 'react';
import { MDBDataTable } from 'mdbreact';


export default function AcademicTable(props) {



    const data1 = props.data
  
    const columnsArray = [{
      label: '#',
      field: 'number',
      sort: 'asc',
      width: 150
    },{
      label: 'Strand',
      field: 'strand',
      sort: 'asc',
      width: 270
    },{
      label: 'Year',
      field: 'year',
      sort: 'asc',
      width: 200
    },{
      label: 'Section',
      field: 'section',
      sort: 'asc',
      width: 100
    }
    ]
    
    const newArray= data1.map((element,index) => {
      return {
          number: index,
          strand: element.strand,
          year: element.year,
          section: element.section
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
