import {ArrowLeft, SendHorizontal, MapPinPlus, Phone, ImageUp } from 'lucide-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import '../css/Create.css'
import CitySelector from '../Components/CitySelector';
import Sidebar  from '../Components/Sidebar.jsx';

const Create = () =>{

    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false)
    const [location, setLocation] = useState("Add Location")
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null)

    const HandleClick = () =>{
        fileInputRef.current.click()
    }

    const HandleFileChange = (e) =>{
        const file = e.target.files[0]
        if(file){
            const imageUrl = URL.createObjectURL(file)
            setPreview(imageUrl)
        }
    }

    return(
        <div className='create-container'>
            <Sidebar />
            <div className='create-header'>
                <ArrowLeft 
                className='arrow-nav-icon'
                onClick={() => navigate(-1)}
                />
                <h2> New Post </h2>
                <SendHorizontal className='send-nav-icon'/>
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
            />
                <Phone className='phone-icon' size={20}/>
            
            </div>
        </div>
    )
}


export default Create;