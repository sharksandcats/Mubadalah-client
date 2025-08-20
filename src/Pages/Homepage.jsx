import { HeartHandshake, Bookmark } from 'lucide-react'

import '../css/Homepage.css'


const Homepage = (props) =>{
    return(
        <div className='post'>

            <div className='post-header'>
                <div className='post-user'>
                    <img src="https://www.pngkey.com/png/detail/16-169970_thinking-guy-png-image-stock-deal-with-your.png"
                         alt = "Profile"/>
                    <div className='post-user-info'>
                        <p>{props.user}</p>
                        <p>{props.phone} • {props.time}</p>
                    </div>     
                </div>
                <Bookmark />
            </div>

            <div className='post-image'>
                <img src={props.image} alt="post"/>
            </div>

            <div className='post-actions'>
                <HeartHandshake />
                <p>{props.likes} likes</p>
            </div>

            <p className='post-caption'>
                <span>{props.user}</span> {props.caption}
            </p>
        </div>
    )
}

export default Homepage;