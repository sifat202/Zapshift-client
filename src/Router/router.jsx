import { createBrowserRouter } from "react-router";
import Homelayout from "../pages/Homelayout/Homelayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";

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
                loader:()=> fetch('/public/ServiceCenters.json').then(res=>res.json())
            }
        ]
        
    }
])