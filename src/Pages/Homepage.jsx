import { HeartHandshake, Bookmark } from 'lucide-react'


const Homepage = (props) =>{
    return(
        <div>
            <div>
                <div>
                    <img src="https://www.pngkey.com/png/detail/16-169970_thinking-guy-png-image-stock-deal-with-your.png"
                         alt = "Profile"/>
                    <div>
                        <p>{props.user}</p>
                        <p>{props.phone} • {props.time}</p>
                    </div>     
                </div>
                <Bookmark />
            </div>

            <div>
                <img src={props.image} alt="post"/>
            </div>

            <div>
                <HeartHandshake />
                <p>{props.likes} likes</p>
            </div>

            <p>
                <span>{props.user}</span> {props.caption}
            </p>

        </div>
    )
}

export default Homepage;