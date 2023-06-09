import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { MDBBtn } from "mdbreact";
import { Link} from "react-router-dom";
import axios from 'axios';

export default function MannuelStudentsTable(props) {

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
      },
      {
        label: 'Option',
        field: 'option',
        sort: 'asc',
        width: 100
      }
      ]


      const newArray= data1.map((element,index) => {
    
        return {
            number: index,
            id: element.id_student,
            name:  element.firstname + ' '+ element.middlename + ' '+ element.lastname,
            option:
             [<form  onSubmit={async (e)=> { 
              e.preventDefault()
               location.reload()
                }} >
              <MDBBtn type='submit' name="status" color='danger' size="sm">Marquer present</MDBBtn>
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
          )
           
}
