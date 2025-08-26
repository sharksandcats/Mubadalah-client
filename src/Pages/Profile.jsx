import { useState } from 'react';
import { Grid3x3, Bookmark, HeartHandshake} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import '../css/Profile.css'
import './Homepage.jsx'
import Sidebar from '../Components/Sidebar.jsx';

const Profile = ({ activeTab, onTabChange }) =>{
    
    const navigate = useNavigate();

    return(
        <div className='profile-container'>
            <Sidebar />
            <div className='profile-header'>
                <img src='https://gratisography.com/wp-content/uploads/2022/02/gratisography-nerdy-guy-free-stock-photo-1170x780.jpg'
                     alt='profile-picture'
                     className='profile-pic'/>
                <h2 className='profile-name'> Asem </h2>
                <button className='edit-btn'
                        onClick={() => navigate("/edit-profile")}>
                            Edit Profile
                </button>
            </div>

            <div className='tabs-wrapper'>
                <hr className='divider'/>
                <div className='post-tabs'>
                    <Grid3x3 
                    size={35} 
                    className={`tab-icon ${activeTab === "posts" ? "active" : ""}`}
                    onClick={() => onTabChange("posts")}
                    />
                    <Bookmark 
                    size={35} 
                    className={`tab-icon ${activeTab === "saved" ? "active" : ""}`}
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile;