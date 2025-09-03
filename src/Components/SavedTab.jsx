import { useState } from 'react';
import { Bookmark, HeartHandshake } from 'lucide-react';

const SavedTab = ({savedPosts}) =>{

    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(true)

    return(
        <div className='posts-tab'>
            {savedPosts.map((post, index) => (
               <div className='post' key={index}>
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
                    <Bookmark
                        className={`icon ${saved ? "active" : ""}`}
                        onClick={() => setSaved(!saved)}
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
                    <p> {post.likes || 0} likes </p>
                </div>

                <p className='post-caption'>
                    <span>{post.username}</span> {post.caption}
                </p>
                </div>
            ))}
        </div>
    )
}

export default SavedTab;