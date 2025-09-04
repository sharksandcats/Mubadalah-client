import { House, CircleUserRound, LogOut, Menu } from "lucide-react";
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/Sidebar.css"

//NavLink instead of Link so i can add hover and active css
function AdminSidebar(){

    const [isOpen, setIsOpen] = useState(false)
    const handleOverlayClick = () => setIsOpen(false);
    const navigate = useNavigate();

    const handleLogout = () => {
    localStorage.removeItem("user_id"); 
    localStorage.removeItem("username");

    setIsOpen(false);

    navigate("/login");
  };

    return(
        <>
            <div className="hamburger"
             onClick={() => setIsOpen(!isOpen)}>
                <Menu size={28} />
        </div>

        <div
            className={`overlay ${isOpen ? "active" : ""}`}
            onClick={handleOverlayClick}>
        </div>

        <aside className={isOpen ? "active" : ""}>
            <div>
                <h1> Mubadalah </h1>
                <nav>
                    <NavLink to="/admin"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setIsOpen(false)}
                        end
                    >
                        <House /> Home </NavLink> 
                    <NavLink to="/admin/profile" onClick={() => setIsOpen(false)}><CircleUserRound /> Profile </NavLink> 
                </nav>
            </div>
            <button className="logout" onClick={handleLogout}><LogOut /> Logout </button>
        </aside>
        </>
    )
}

export default AdminSidebar;