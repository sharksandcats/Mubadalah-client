import {ArrowLeft, SendHorizontal, MapPinPlus, Phone, ImageUp } from 'lucide-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import '../css/Create.css'
import CitySelector from '../Components/CitySelector';
import Sidebar  from '../Components/Sidebar.jsx';
import axios from 'axios';

const Create = ({user}) => {

    const navigate = useNavigate();

    const [showDropdown, setShowDropdown] = useState(false)
    const [location, setLocation] = useState("Add Location")
    const [caption, setCaption] = useState("")
    const [contact, setContact] = useState("")

    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const fileInputRef = useRef(null)

    const HandleClick = () =>{
        fileInputRef.current.click()
    }

    const HandleFileChange = (e) =>{
        const selectedFile = e.target.files[0]
        if(selectedFile){
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile))
        }
    }

    const handleSubmit = async () => {
    if (!user) {
        alert("You must be logged in to create a post");
        return;
    }

    try {
        const newPost = {
            user_id: user.user_id,
            phone_number: contact,
            location,
            image_url: "https://www.bhg.com/thmb/59ac1uSCYXjHkc0OX55nTjK6zyg=/1500x0/filters:no_upscale():strip_icc()/Room-Board-Metro-Two-Cushion-Sofa-f945b411d3264c67ab3ec563a9c4c559.jpg", // static image
            caption,
        };

        await axios.post("http://localhost:5000/api/users/create", newPost);
        alert("Post Created!");
        navigate("/");
    } catch (err) {
        console.error(err.response ? err.response.data : err);
        alert("Failed to create post");
    }
};

    return(
        <div className='create-container'>
            <Sidebar/>
            <div className='create-header'>
                <ArrowLeft 
                className='arrow-nav-icon'
                onClick={() => navigate(-1)}
                />
                <h2> New Post </h2>
                <SendHorizontal className='send-nav-icon' onClick={handleSubmit}/>
            </div>

            <hr/>

            <div className="upload-box">
                {preview ? (
                    <img src={preview} alt='preview' className='uploaded-img'/>
                ) : (
                    <ImageUp 
                        className='icon' 
                        size={100}
                        onClick={HandleClick}
                    />
                )}
                <input
                    type='file'
                    accept='image/*'
                    ref={fileInputRef}
                    style={{display: "none"}} //prevent the browser's default choose file message
                    onChange={HandleFileChange}
                />
            </div>

            <textarea
                className="caption-input"
                placeholder="Add a caption..."
                rows="3"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
            />

            <hr/>

            <div className='options'>
                <p> {location} </p>
                <MapPinPlus className='map' size={20}
                onClick={() => setShowDropdown(!showDropdown)}/>
            </div>

            {showDropdown && (
                <div className='dropdown-container'>
                    <CitySelector onSelectCity={(city) =>{
                        setLocation(city);
                        setShowDropdown(false);
                    }} />
                </div>
            )}
            

            <div className='phone-caption-input'>
            <textarea 
            placeholder="Contact Info"
            rows="1"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            />
                <Phone className='phone-icon' size={20}/>
            
            </div>
        </div>
    )
}


export default Create;