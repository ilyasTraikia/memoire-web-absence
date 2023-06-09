import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './main/App'
import './style/index.css'
import { Dashboard, ManageTeachers, ManageStudents, TeacherProfile, AttendanceRecord, ChangePassword, QRScanner, MannuelAttendance,AddStrand,AddSubject,Assign,Login,StudentProfile,IndexPage,ChefDepartementProfile,Justifications,AdminProfile,SendAnnounce} from './routes';
import {action as AddTeacherAction} from './routes/ManageTeachers'
import {loader as ManageTeachersLoader} from './routes/ManageTeachers'
import { loader as TeacherLoader} from './routes/TeacherProfile'
import  {action as UpdateTeacherAction} from './routes/TeacherProfile'
import {action as AddStrandAction} from './routes/AddStrand'
import {loader as StrandLoader} from './routes/AddStrand'
import {action as AddSubjectAction} from './routes/AddSubject'
import {loader as SubjectLoader} from './routes/AddSubject'
import {loader as StudentLoader} from './routes/ManageStudents'
import {action as AddStudentAction} from './routes/ManageStudents'
import { loader as OneStudentLoader} from './routes/StudentProfile'
import  {action as UpdateStudentAction} from './routes/StudentProfile'
import  {action as LoginAction} from './routes/Login/Login'
import {loader as assignLoader} from './routes/Assign'
import  {action as AssigntAction} from './routes/Assign'
import TeacherProfileUrl, { loader as TeacherUrlLoader} from './routes/TeacherProfileUrl'
import  {action as UpdateTeacherUrlAction} from './routes/TeacherProfileUrl'
import {loader as recordsLoader} from './routes/AttendanceRecord'
import {loader as QRLoader} from './routes/QRScanner'
import {loader as JustificationsLoader} from './routes/Justifications'
import { loader as ChefDepLoader} from './routes/ChefDepartementProfile'
import  {action as UpdateChefDepAction} from './routes/ChefDepartementProfile'
import { loader as AdminLoader} from './routes/AdminProfile'
import  {action as UpdateAdminAction} from './routes/AdminProfile'
import {loader as MannuelSeanceLoader} from './routes/MannuelAttendance'
import  {action as AddAnnonceAction} from './routes/SendAnnounce'
import {loader as AnnoncesLoader} from './routes/SendAnnounce'



const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children : [
        //  Admin routes
      {
        index:true,
        element:<IndexPage />
      },
      {
        path:"/AdminProfile",
        element:<AdminProfile />,
        loader:AdminLoader,
        action:UpdateAdminAction
      },
      {
        path:"dashboard",
        element:<Dashboard />
      },{
        path:"manageTeachers",
        element:<ManageTeachers />,
        loader:ManageTeachersLoader,
        action: AddTeacherAction
      },
      {
        path:"manageTeachers/profile/:teacherId",
        element:<TeacherProfileUrl />,
        loader:TeacherUrlLoader,
        action:UpdateTeacherUrlAction
       },
      {
        path:"manageStudents",
        element:<ManageStudents />,
        loader:StudentLoader,
        action:AddStudentAction
      },
      {
        path:"manageStudents/profile/:studentId",
        element:<StudentProfile />,
        loader:OneStudentLoader,
        action:UpdateStudentAction
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
        element:<Assign />,
        loader:assignLoader,
        action:AssigntAction
      },
   







      //teacher routes
      {
        path:"teacherProfile",
        element:<TeacherProfile />,
        loader:TeacherLoader,
        action:UpdateTeacherAction
      },
      {
        path:"teacherChangePass",
        element:<ChangePassword />
      },
      {
        path:"marquerAbsenceManuellement",
        element:<MannuelAttendance />,
        loader:MannuelSeanceLoader
      },
      {
        path:"QRscanner",
        element:<QRScanner />,
        loader:QRLoader
      },
      {
        path:"attandanceRecord",
        element:<AttendanceRecord />,
        loader:recordsLoader
      },
      {
        path:"SendAnnouncement",
        element: <SendAnnounce />,
        loader:AnnoncesLoader,
        action:AddAnnonceAction
      },
    
       



     
      // chef departement routes
      {
        path:"chefDepartementProfile",
        element:<ChefDepartementProfile />,
        loader:ChefDepLoader,
        action:UpdateChefDepAction
      },
      {
        path:"Justifications",
        element:<Justifications />,
        loader:JustificationsLoader
      }


     


    ]
    
  },
  {
    path:"/login",
    element:<Login />,
    action:LoginAction
  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);