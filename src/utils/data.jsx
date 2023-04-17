import { MDBBtn } from "mdbreact";

const data = {
    columns: [{
            label: '#',
            field: 'number',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Employee ID',
            field: 'empid',
            sort: 'asc',
            width: 270
        },
        {
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
        },
        {
            label: 'View',
            field: 'view',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Status',
            field: 'status',
            sort: 'asc',
            width: 100
        }
    ],
    rows: [{
            number: '1',
            empid: '001',
            name: 'Edinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="danger" size="sm">Desactivate</MDBBtn>],
        },
        {
            number: '2',
            empid: '1300',
            name: 'Edinburgh',
            option: 'inactive',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="success" size="sm">Activate</MDBBtn>],
        },
        {
            number: '3',
            empid: '1452',
            name: 'Edinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="danger" size="sm">Desactivate</MDBBtn>],
        },
        {
            number: '4',
            empid: '001',
            name: 'Ddinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="danger" size="sm">Desactivate</MDBBtn>],
        },
        {
            number: '5',
            empid: '1300',
            name: 'Fdinburgh',
            option: 'inactive',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="success" size="sm">Activate</MDBBtn>],
        },
        {
            number: '6',
            empid: '1452',
            name: 'Adinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="danger" size="sm">Desactivate</MDBBtn>],
        },
        {
            number: '7',
            empid: '001',
            name: 'Edinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="danger" size="sm">Desactivate</MDBBtn>],
        },
        {
            number: '8',
            empid: '1300',
            name: 'Edinburgh',
            option: 'inactive',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="success" size="sm">Activate</MDBBtn>],
        },
        {
            number: '9',
            empid: '1452',
            name: 'Edinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="danger" size="sm">Desactivate</MDBBtn>],
        },
        {
            number: '10',
            empid: '001',
            name: 'Edinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="success" size="sm">Activate</MDBBtn>],
        },
        {
            number: '11',
            empid: '1300',
            name: 'Edinburgh',
            option: 'inactive',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="success" size="sm">Activate</MDBBtn>],
        },
        {
            number: '12',
            empid: '1452',
            name: 'Edinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="danger" size="sm">Desactivate</MDBBtn>],
        },
        {
            number: '13',
            empid: '001',
            name: 'Edinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="danger" size="sm">Desactivate</MDBBtn>],
        },
        {
            number: '14',
            empid: '1300',
            name: 'Edinburgh',
            option: 'inactive',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="success" size="sm">Activate</MDBBtn>],
        },
        {
            number: '15',
            empid: '1452',
            name: 'Edinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="danger" size="sm">Desactivate</MDBBtn>],
        },
        {
            number: '16',
            empid: '001',
            name: 'Edinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="danger" size="sm">Desactivate</MDBBtn>],
        },
        {
            number: '17',
            empid: '1300',
            name: 'Edinburgh',
            option: 'inactive',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="success" size="sm">Activate</MDBBtn>],
        },
        {
            number: '18',
            empid: '1452',
            name: 'Edinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="danger" size="sm">Desactivate</MDBBtn>],
        },
        {
            number: '19',
            empid: '001',
            name: 'Edinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="danger" size="sm">Desactivate</MDBBtn>],
        },
        {
            number: '20',
            empid: '1300',
            name: 'Edinburgh',
            option: 'inactive',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="success" size="sm">Activate</MDBBtn>],
        },
        {
            number: '21',
            empid: '1452',
            name: 'Edinburgh',
            option: 'active',
            view: [ <MDBBtn color="primary" size="sm">view</MDBBtn>],
            status: [<MDBBtn color="danger" size="sm">Desactivate</MDBBtn>],
        },
    ]
};


export default data;