import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './main/App'
import './style/index.css'
import { Dashboard,ManageTeachers } from './routes';



const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children : [

      {
        path:"dashboard",
        element:<Dashboard />
      },
      {
        path:"manageTeachers",
        element:<ManageTeachers />
      }


    ]
    
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);