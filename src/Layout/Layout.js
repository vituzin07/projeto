import { Link, Outlet } from "react-router-dom"
import Navbar from "../Navbar/navbar"
function Layout(){
    return(
        <div className="Layout">
            <Navbar/>
            <Outlet/ >
        </div>
    )
}
export default Layout