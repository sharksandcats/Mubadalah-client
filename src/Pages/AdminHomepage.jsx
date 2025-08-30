import { Trash2 } from 'lucide-react'
import { useState } from 'react'

import '../css/Homepage.css'
import AdminSidebar from '../Components/AdminSidebar'


const AdminHomepage = (props) =>{

    const [showOptions, setShowOptions] = useState(false)

    return(

        <div className='post'>
             <AdminSidebar />
            <div className='post-header'>
                <div className='post-user'>
                    <img src={props.img} alt = "Profile"/>
                    <div className='post-user-info'>
                        <p>{props.user}</p>
                        <p>{props.phone} • {props.location}</p>
                    </div>     
                </div>
                <div className='trash-container'>
                    <Trash2 
                        className='trash-icon'
                        onClick={() => setShowOptions(!showOptions)}
                    />

                    {showOptions && (
                        <div className='delete-options'>
                            <p onClick={() => alert("Profile Deleted")}>Delete Profile</p>
                            <p onClick={() => alert("Post Deleted")}>Delete Post</p>
                        </div> 
                    )}
                </div>
            </div>

            <div className='post-image'>
                <img src={props.image} alt="post"/>
            </div>

            <p className='post-caption'>
                <span>{props.user}</span> {props.caption}
            </p>
        </div>
    )
}

export default AdminHomepage;