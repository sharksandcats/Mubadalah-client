import { House, SquarePlus, CircleUserRound, LogOut, LogIn, Menu } from "lucide-react";
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";


import "../css/Sidebar.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//NavLink instead of Link so i can add hover and active css
function Sidebar({setUser}){

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
                    <NavLink to="/" onClick={() => setIsOpen(false)}><House /> Home </NavLink> 
                    <NavLink to="/create" onClick={() => setIsOpen(false)}><SquarePlus /> Create </NavLink>
                    <NavLink to="/profile" onClick={() => setIsOpen(false)}><CircleUserRound /> Profile </NavLink> 
                    <NavLink to="/login" className="login" onClick={() => setIsOpen(false)}><LogIn /> Login </NavLink>
                </nav>
            </div>
            <button className="logout" onClick={handleLogout}><LogOut /> Logout </button>
        </aside>
    </>
    )
}

export default Sidebar;

