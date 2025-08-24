import { useState } from 'react';
import { Grid3x3, Bookmark, HeartHandshake} from 'lucide-react';
import { useNavigate } from 'react-router';



const Profile = () =>{
    const [activeTab, setActiveTab] = useState("posts")
    const navigate = useNavigate()

    const userPosts = [
    {  
      user: "Ase,",
      img: "https://gratisography.com/wp-content/uploads/2022/02/gratisography-nerdy-guy-free-stock-photo-1170x780.jpg",  
      time: "26m",
      phone: "0793332891",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWff7eMHG8ttQOGyMKuU-S4HFMZKxJrZ7Nw&s",
      likes: 26,
      caption: "PlayStation 4. Quality: 4/5. Would love to replace it with some nice friends cause I’m lonely :("
    }
    ]

    const savedPosts = [
    { user: "Sasha",
      img: "https://static.scientificamerican.com/sciam/cache/file/9CAE9C60-8BC5-4CA3-95C180EFACDD99FD_source.jpg?w=1200",
      time: "6m",
      phone: "078888888888",
      image: "https://i.chzbgr.com/full/9836262400/h06DD08DE",
      likes: 90000,
      caption: "cat works hard :))))"
    }
    ]

    const handleEdit = (id) =>{
        console.log("Edit post with id:", id);
    }

    return(
        <div className='profile-container'>
            <div className='profile-header'>
                <img src='https://gratisography.com/wp-content/uploads/2022/02/gratisography-nerdy-guy-free-stock-photo-1170x780.jpg' alt='avatar' className='profile-pic'/>
                <h2> Asem </h2>
                <button
                    className='edit-btn'
                    onClick={() => navigate("/edit-profile")}>

                    Edit Profile
                </button>
            </div>

            <div className='posts-section'>
                {savedPosts.map((post, index) =>(
                    <div key={index} className='post-card'>
                        <div className='post-header'>
                            <img src={post.img} alt={post.user} className='post-avatar'/>
                            <div>
                                <h3>{post.user}</h3>
                                <span>{post.time}</span>
                            </div>
                        </div>
                        <img src={post.image} alt='post' className='post-image'/>
                        <div className='post-footer'>
                            <p><HeartHandshake/> {post.likes} likes </p>
                            <p><strong>{post.user}</strong> {post.caption} </p>
                        </div>
                            </div>
                ))}
            </div>
        </div>
    )
}

export default Profile;