import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './main/App'
import './style/index.css'
import { Dashboard, ManageTeachers, ManageStudents, TeacherProfile, AttendanceRecord, ChangePassword, QRScanner, StudentRecord,AddStrand,AddSubject,Assign,SemesterSwitch,Login} from './routes';
import {action as AddTeacherAction} from './routes/ManageTeachers'
import {loader as ManageTeachersLoader} from './routes/ManageTeachers'
import { loader as TeacherLoader} from './routes/TeacherProfile'
import  {action as UpdateTeacherAction} from './routes/TeacherProfile'
import {action as AddStrandAction} from './routes/AddStrand'
import {loader as StrandLoader} from './routes/AddStrand'
import {action as AddSubjectAction} from './routes/AddSubject'
import {loader as SubjectLoader} from './routes/AddSubject'




const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children : [
        //  Admin routes
      {
        index:true,
        element:<Dashboard />
      },
      {
        path:"manageTeachers",
        element:<ManageTeachers />,
        loader:ManageTeachersLoader,
        action: AddTeacherAction
      },
      {
        path:"manageTeachers/profile/:teacherId",
        element:<TeacherProfile />,
        loader:TeacherLoader,
        action:UpdateTeacherAction
       },
      {
        path:"manageStudents",
        element:<ManageStudents />
      },
      {
        path:"settings/addStrand",
        element:<AddStrand />,
        loader:StrandLoader,
        action:AddStrandAction
      },
      {
        path:"settings/addSubject",
        element:<AddSubject/>,
        loader:SubjectLoader,
        action:AddSubjectAction
      },
      {
        path:"settings/assign",
        element:<Assign />
      },
      {
        path:"settings/semesterSwitch",
        element:<SemesterSwitch />
      },








      //teacher routes

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
  {
    path:"/login",
    element:<Login />
  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);