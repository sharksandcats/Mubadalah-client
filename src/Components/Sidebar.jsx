import { House, SquarePlus, CircleUserRound, LogOut } from "lucide-react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Homepage from "../Pages/Homepage";
import "../css/Sidebar.css"

function Sidebar(){
    return(
        <aside>
            <div>
                <h1> Mubadalah </h1>
                <nav>
                    <Link to="/"><Homepage /> Home </Link> 
                    <Link to="/create"><SquarePlus /> Create </Link>
                    <Link to="/profile/Asem"><CircleUserRound /> Profile </Link>
                </nav>
            </div>
            <button><LogOut /> Logout </button>
        </aside>
    )
}

export default Sidebar;

