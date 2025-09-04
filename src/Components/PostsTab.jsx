import { useState } from 'react';
import { Trash2, HeartHandshake } from 'lucide-react';

import axios from 'axios';

const PostsTab = ({posts, user, onRefresh}) =>{

    const [liked, setLiked] = useState(false)

    const BASE_URL = import.meta.env.VITE_SERVER_URL;

    const handleDelete = async(postId) =>{
        try{
            await axios.delete(`${BASE_URL}/api/users/${user.username}/posts/${postId}`)
            onRefresh();
        }catch(err){
            console.log("Error: ", err);
            
        }
    }

    return(
        <div className='posts-tab'>
            {posts.map((post) => (
               <div className='post' key={post.post_id}>
                <div className='post-header'>
                    <div className='post-user'>
                        <img src={post.profile_url} alt='profile'/>
                        <div className='post-user-info'>
                            <p> {post.username} </p>
                            <p>
                                {post.phone_number} • {post.location} 
                            </p>
                        </div>
                    </div>
                    <Trash2 className='delete-icon'
                        onClick={() => handleDelete(post.post_id)}
                    />
                </div>

                <div className='post-image'>
                    <img src={post.image_url} alt='post'/>
                </div>

                <div className='post-actions'>
                    <HeartHandshake
                        className={`icon ${liked ? "active" : ""}`}
                        onClick={() => setLiked(!liked)}
                    />
                    <p> {post.likes || 0} likes</p>
                </div>

                <p className='post-caption'>
                    <span>{post.username}</span> {post.caption}
                </p>
                </div>
            ))}
        </div>
    )
}

export default PostsTab;