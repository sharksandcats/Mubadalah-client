import { HeartHandshake, Bookmark } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'

import '../css/Homepage.css'
import Sidebar from '../Components/Sidebar'


const Homepage = (props) =>{

    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)

    const BASE_URL = import.meta.env.VITE_SERVER_URL;

    const savePost = async() =>{

        if (!props.userId || !props.postId) {
            alert("Missing user or post ID");
            return;
        }

        try{
            await axios.post(`${BASE_URL}/api/users/saves`,{
                user_id: props.userId,
                post_id: props.postId
            });
            setSaved(true);
            alert("Post saved successfully!")
        }catch(err){
            alert("Failed to save post");
        }
    }

    return(

        <div className='post'>
            <Sidebar/>
            <div className='post-header'>
                <div className='post-user'>
                    <img src={props.img} alt = "Profile"/>
                    <div className='post-user-info'>
                        <p>{props.user}</p>
                        <p>{props.phone} • {props.location}</p>
                    </div>     
                </div>
                <Bookmark 
                    className={`icon ${saved ? 'active': ''}`}
                    onClick={savePost}/>
            </div>

            <div className='post-image'>
                <img src={props.image} alt="post"/>
            </div>

            <div className='post-actions'>
                <HeartHandshake 
                className={`icon ${liked ? 'active': ''}`}
                    onClick={() => setLiked(!liked)}/>

                <p>{props.likes || 0} likes</p>
            </div>

            <p className='post-caption'>
                <span>{props.user}</span> {props.caption}
            </p>
        </div>
    )
}

export default Homepage;