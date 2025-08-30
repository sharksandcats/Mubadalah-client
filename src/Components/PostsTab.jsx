import { useState } from 'react';
import { Trash2, HeartHandshake } from 'lucide-react';

const PostsTab = ({posts}) =>{

    const [liked, setLiked] = useState(false)

    return(
        <div className='posts-tab'>
            {posts.map((post, index) => (
               <div className='post' key={index}>
                <div className='post-header'>
                    <div className='post-user'>
                        <img src={post.img} alt='profile'/>
                        <div className='post-user-info'>
                            <p> {post.user} </p>
                            <p>
                                {post.phone} • {post.location} 
                            </p>
                        </div>
                    </div>
                    <Trash2 className='delete-icon'
                        
                    />
                </div>

                <div className='post-image'>
                    <img src={post.image} alt='post'/>
                </div>

                <div className='post-actions'>
                    <HeartHandshake
                        className={`icon ${liked ? "active" : ""}`}
                        onClick={() => setLiked(!liked)}
                    />
                    <p> {liked ? post.likes +1 : post.likes} likes</p>
                </div>

                <p className='post-caption'>
                    <span>{post.user}</span> {post.caption}
                </p>
                </div>
            ))}
        </div>
    )
}

export default PostsTab;