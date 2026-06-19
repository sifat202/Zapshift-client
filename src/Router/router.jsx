import { createBrowserRouter } from "react-router";
import Homelayout from "../pages/Homelayout/Homelayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
// import serviceCenterData from '../../public/ServiceCenters.json'
import serviceCenterData1 from '../Jsons/ServiceCenters.json'
import Authlayout from "../pages/Auth/Authlayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Homelayout></Homelayout>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'coverage',
                element:<Coverage></Coverage>,
                loader :()=> serviceCenterData1
                // loader:()=> fetch('/public/ServiceCenters.json').then(res=>res.json())
            }
        ]
        
    },
    {
        path:'/',
        Component:Authlayout,
        children:[
            {
                path:'login',
                Component:Login,
            },
            {
                path:'register',
                Component:Register
            }
        ]
    }
])