import { House, SquarePlus, CircleUserRound, LogOut } from "lucide-react";
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";


import "../css/Sidebar.css"

function Sidebar(){
    return(
        <aside>
            <div>
                <h1> Mubadalah </h1>
                <nav>
                    <NavLink to="/"><House /> Home </NavLink> 
                    <NavLink to="/create"><SquarePlus /> Create </NavLink>
                    <NavLink to="/profile/Asem"><CircleUserRound /> Profile </NavLink>
                </nav>
            </div>
            <button><LogOut /> Logout </button>
        </aside>
    )
}

export default Sidebar;

