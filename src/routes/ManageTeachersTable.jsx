import React from 'react';
import { MDBDataTable } from 'mdbreact';
import data from '../utils/data'

function ManageTeachersTable() {


 

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