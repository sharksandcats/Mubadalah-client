import { useState } from 'react';
import { Grid3x3, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import '../css/Profile.css'
import Sidebar from '../Components/Sidebar.jsx';
import PostsTab from '../Components/PostsTab.jsx';
import SavedTab from '../Components/SavedTab.jsx';

const Profile = () =>{
    
    const [activeTab, setActiveTab] = useState("posts")
    const navigate = useNavigate();

    const posts = [
        {
        user:"Asem",
        img: "https://gratisography.com/wp-content/uploads/2022/02/gratisography-nerdy-guy-free-stock-photo-1170x780.jpg",
        location: "Irbid",
        phone: "0793332891",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWff7eMHG8ttQOGyMKuU-S4HFMZKxJrZ7Nw&s",
        likes: 26,
        caption: "PlayStation 4. Quality: 4/5. Would love to replace it with some nice friends cause I’m lonely :("
        }
    ]

    const savedPosts = [posts[0]]

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
                    onClick={() => setActiveTab("posts")}
                    />
                    <Bookmark 
                    size={35} 
                    className={`tab-icon ${activeTab === "saved" ? "active" : ""}`}
                    onClick={() => setActiveTab("saved")}
                    />
                </div>

                <div className='tab-content'>
                    {activeTab === 'posts' && <PostsTab posts={posts} />}
                    {activeTab === 'saved' && <SavedTab savedPosts={savedPosts} />}
                </div>
            </div>
        </div>
    )
}

export default Profile;