import {ArrowLeft, SendHorizontal, MapPinPlus, Phone, ImageUp } from 'lucide-react';

<<<<<<< HEAD
=======
import '../css/Create.css'

>>>>>>> 6236cc203225a04e58cb5ebddd6553b65f140b39
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
<<<<<<< HEAD
                <ImageUp size={48} />
=======
                <ImageUp className='icon' size={100}/>
>>>>>>> 6236cc203225a04e58cb5ebddd6553b65f140b39
            </div>

            <textarea
                className="caption-input"
                placeholder="Add a caption..."
                rows="3"
            />

            <hr/>

            <div className='options'>
                <p> Add Location </p>
<<<<<<< HEAD
                <MapPinPlus size={18}/>
            </div>

            <div className='options'>
                <p>Contact Info</p>
                <Phone size={18}/>
=======
                <MapPinPlus className='map' size={20}/>
            </div>

            <div className='phone-caption-input'>
            <textarea 
            placeholder="Contact Info"
            rows="1"
            />
                <Phone size={20}/>
            
>>>>>>> 6236cc203225a04e58cb5ebddd6553b65f140b39
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default Create;
=======
export default Create;

>>>>>>> 6236cc203225a04e58cb5ebddd6553b65f140b39
