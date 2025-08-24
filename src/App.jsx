import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Sidebar from './Components/sidebar'
import Homepage from './Pages/Homepage'
import Create from './Pages/Create';

import './css/App.css'

function App() {

  const posts = [
    {
      user:"Asem",
      img: "https://gratisography.com/wp-content/uploads/2022/02/gratisography-nerdy-guy-free-stock-photo-1170x780.jpg",
      location: "Irbid",
      phone: "0793332891",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWff7eMHG8ttQOGyMKuU-S4HFMZKxJrZ7Nw&s",
      likes: 26,
      caption: "PlayStation 4. Quality: 4/5. Would love to replace it with some nice friends cause I’m lonely :("
    },
    {
      user: "Maya",
      img: "https://rlv.zcache.ca/peanuts_a_snoopy_happy_dance_door_sign-rb626efb74bcd429593301dbcdcd2ad08_6vj7r_644.webp?rlvnet=1",
      location: "Amman",
      phone: "07911113354",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpevyOaipSZgXWCf90sAe8yESWHQvaKtTsQ&s",
      likes: 1000,
      caption: "Minecraft chest. 100% real"
    },
    {
      user: "Sasha",
      img: "https://static.scientificamerican.com/sciam/cache/file/9CAE9C60-8BC5-4CA3-95C180EFACDD99FD_source.jpg?w=1200",
      location: "Amman",
      phone: "078888888888",
      image: "https://i.chzbgr.com/full/9836262400/h06DD08DE",
      likes: 90000,
      caption: "cat works hard :))))"
    }
  ]

  return (
  <Router>
    <div className="app-container">
      <Sidebar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {posts.map((post, index) => (
                  <Homepage
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
          <Route path="/create" element={<Create/>}/>
        </Routes>
      </main>
    </div>
  </Router>
);
}

export default App
