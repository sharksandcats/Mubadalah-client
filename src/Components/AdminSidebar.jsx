import { House, CircleUserRound, LogOut} from "lucide-react";
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";


import "../css/Sidebar.css"

//NavLink instead of Link so i can add hover and active css
function AdminSidebar(){
    return(
        <aside>
            <div>
                <h1> Mubadalah </h1>
                <nav>
                    <NavLink to="/admin"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        end
                    >
                        <House /> Home </NavLink> 
                    <NavLink to="/admin/Maya"><CircleUserRound /> Profile </NavLink> 
                </nav>
            </div>
            <button className="logout"><LogOut /> Logout </button>
        </aside>
    )
}

export default AdminSidebar;