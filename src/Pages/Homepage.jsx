import { HeartHandshake, Bookmark } from 'lucide-react'
import { useState } from 'react'

import '../css/Homepage.css'
import Sidebar from '../Components/Sidebar'


const Homepage = (props) =>{

    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)

    return(

        <div className='post'>
            <Sidebar />
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
                    onClick={() => setSaved(!saved)}/>
            </div>

            <div className='post-image'>
                <img src={props.image} alt="post"/>
            </div>

            <div className='post-actions'>
                <HeartHandshake 
                className={`icon ${liked ? 'active': ''}`}
                    onClick={() => setLiked(!liked)}/>

                <p>{liked ? props.likes + 1: props.likes} likes</p>
            </div>

            <p className='post-caption'>
                <span>{props.user}</span> {props.caption}
            </p>
        </div>
    )
}

export default Homepage;