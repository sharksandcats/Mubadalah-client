import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Sidebar from './Components/sidebar'
import Homepage from './Pages/Homepage'
import './css/App.css'

function App() {

  const posts = [
    {
      user:"Asem",
      time: "26m",
      phone: "0793332891",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWff7eMHG8ttQOGyMKuU-S4HFMZKxJrZ7Nw&s",
      likes: 26,
      caption: "PlayStation 4. Quality: 4/5. Would love to replace it with some nice friends cause I’m lonely :("
    },
    {
      user: "Maya",
      time: "20m",
      phone: "07911113354",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpevyOaipSZgXWCf90sAe8yESWHQvaKtTsQ&s",
      likes: 1000,
      caption: "Minecraft chest. 100% real"
    },
    {
      user: "Sasha",
      time: "6m",
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
                    time={post.time}
                    phone={post.phone}
                    image={post.image}
                    likes={post.likes}
                    caption={post.caption}
                  />
                ))}
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  </Router>
);
}

export default App
