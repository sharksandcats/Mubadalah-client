import {ArrowLeft, SendHorizontal, MapPinPlus, Phone, ImageUp } from 'lucide-react';

import '../css/Create.css'

const Create = () =>{
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
                <p> Add Location </p>
                <MapPinPlus className='map' size={20}/>
            </div>

            <div className='phone-caption-input'>
            <textarea 
            placeholder="Contact Info"
            rows="1"
            />
                <Phone size={20}/>
            
            </div>
        </div>
    )
}

export default Create;

