import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './main/App'
import './style/index.css'
import { Dashboard, ManageTeachers, ManageStudents, TeacherProfile, AttendanceRecord, ChangePassword, QRScanner, StudentRecord} from './routes';
import {action as AddTeacherAction} from './routes/ManageTeachers'



const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children : [

      {
        index:true,
        element:<Dashboard />
      },
      {
        path:"manageTeachers",
        element:<ManageTeachers />,
        action: AddTeacherAction
      },
      {
        path:"manageTeachers/profile/:teacherId",
        element:<TeacherProfile />
       },
      {
        path:"manageStudents",
        element:<ManageStudents />
      },









      {
        path:"teacherProfile",
        element:<TeacherProfile />
      },
      {
        path:"teacherChangePass",
        element:<ChangePassword />
      },
      {
        path:"studentRecord",
        element:<StudentRecord />
      },
      {
        path:"QRscanner",
        element:<QRScanner />
      },
      {
        path:"attandanceRecord",
        element:<AttendanceRecord />
      }


    ]
    
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);