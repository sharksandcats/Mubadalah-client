import {ArrowLeft, SendHorizontal, MapPinPlus, Phone, ImageUp } from 'lucide-react';

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
                <ImageUp size={48} />
            </div>

            <textarea
                className="caption-input"
                placeholder="Add a caption..."
                rows="3"
            />

            <hr/>

            <div className='options'>
                <p> Add Location </p>
                <MapPinPlus size={18}/>
            </div>

            <div className='options'>
                <p>Contact Info</p>
                <Phone size={18}/>
            </div>
        </div>
    )
}

export default Create;

