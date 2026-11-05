import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";


export default function MainLayout(){

return(

    <>

    
<Sidebar></Sidebar>

    
    <main className="md:ml-64 ">


        <Outlet/>
    </main>
    
    
    
    </>




)


}