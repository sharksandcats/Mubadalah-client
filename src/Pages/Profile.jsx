import { useState, useEffect } from 'react';
import { Grid3x3, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../css/Profile.css'
import Sidebar from '../Components/Sidebar.jsx';
import PostsTab from '../Components/PostsTab.jsx';
import SavedTab from '../Components/SavedTab.jsx';

const Profile = ({user, setUser}) =>{
    
    const [activeTab, setActiveTab] = useState("posts")
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);
    const navigate = useNavigate();

    const fetchPosts = async () => {
    if (!user) return;
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${user.username}/posts`);
      setPosts(res.data);
    } catch (err) {
      console.log("Error fetching posts: ", err);
    }
  };

  const fetchSaved = async () => {
    if (!user) return;
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${user.username}/saves`);
      setSavedPosts(res.data);
    } catch (err) {
      console.log("Error fetching saved posts: ", err);
    }
  };

  const handleUpdate = async(updatedData) =>{
    try{
        const res = await axios.put(`http://localhost:5000/api/users/${user.user_id}`, updatedData);
        setUser(res.data);
    }catch(err){
        console.log("Error: ", err);
        
    }
  }

  useEffect(() => {
    if (!user) return;
    fetchPosts();
    fetchSaved();
  }, [user]);

    return(
        <div className='profile-container'>
            <Sidebar/>
            <div className='profile-header'>
                <img src={user?.profile_url}
                     alt='profile-picture'
                     className='profile-pic'
                />
                <h2 className='profile-name'> {user?.username} </h2>
                <button className='edit-btn'
                        onClick={() => navigate("/edit-profile", { state: {user} })}>
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
                    {activeTab === 'posts' ? (
                        <PostsTab posts={posts} user={user} onRefresh={fetchPosts}/> 
                    ):(
                         <SavedTab savedPosts={savedPosts} user={user}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile;