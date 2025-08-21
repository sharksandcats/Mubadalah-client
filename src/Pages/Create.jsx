import {ArrowLeft, SendHorizontal, MapPinPlus, Phone, ImageUp } from 'lucide-react';
import { useState } from 'react';

import '../css/Create.css'
import CitySelector from '../Components/CitySelector';

const Create = () =>{

    const [showDropdown, setShowDropdown] = useState(false)
    const [location, setLocation] = useState("Add Location")

    return(
        <div className='create-container'>
            <div className='create-header'>
                <ArrowLeft className='nav-icon'/>
                <h2> New Post </h2>
                <SendHorizontal className='nav-icon'/>
            </div>

            <hr/>

            <div className="upload-box">

                <ImageUp className='icon' size={100}/>

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