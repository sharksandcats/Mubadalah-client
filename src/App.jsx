import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//import Sidebar from './Components/Sidebar'
import Homepage from './Pages/Homepage'
import Create from './Pages/Create';
import './css/App.css'
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AdminHomepage from "./Pages/AdminHomepage";
import AdminProfile from "./Pages/AdminProfile";

function App() {

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    const stored = localStorage.getItem("user");
    if(stored) setUser(JSON.parse(stored));

    const fetchPosts = async() =>{
      try{
        const res = await axios.get("http://localhost:5000/api/users/");
        console.log("Fetched posts:", res.data);
        setPosts(res.data);
      }catch(err){
        alert("Error fetching posts: ", err);
      }
    }

    fetchPosts();
  }, []);

  const handleLogin = (userData) =>{
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  return (
  <Router>
    <div className="app-container">
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {posts.length === 0 ? (
                  <p> No posts available </p>
                ):(
                  posts.map((post) => (
                    <Homepage
                      key={post.post_id}
                      user={post.username}
                      img={post.profile_url}
                      location={post.location}
                      phone={post.phone_number}
                      image={post.image_url}
                      caption={post.caption}
                      userId={user?.user_id}
                      postId={post.post_id}
                  />
                ))
                )}
              </div>
            }
          />
          <Route path="/create" element={<Create user={user}/>}/>
          <Route path="/profile" element={<Profile user={user}/>}/>
          <Route path="/edit-profile" element={<EditProfile/>}/>
          <Route path='/login' element={<Login onLogin={handleLogin}/>}/>
          <Route path='/signup' element={<Signup onLogin={handleLogin}/>}/>

          <Route path="/admin" 
                 element={
              <div>
                {posts.map((post, index) => (
                  <AdminHomepage
                    key={index}
                    user={post.user}
                    img={post.img}
                    location={post.location}
                    phone={post.phone}
                    image={post.image}
                    likes={post.likes}
                    caption={post.caption}
                  />
                ))}
              </div>
            }
          />
          <Route path="/admin/:admin" element={<AdminProfile />} />
        </Routes>
      </main>
    </div>
  </Router>
);
}

export default App
