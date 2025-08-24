import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import '../css/EditProfile.css'

const EditProfile = () =>{

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "Asem",
        username: "Asem",
        email: "asem@gmail.com",
        password: "1234509876",
    })

    const handleChange = (e) =>{
        setFormData({
            ...formData,
                [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Updated Profile: ",formData);
    }

    return(
        <div className='edit-profile-container'>
            <div className='edit-header'>
                <ArrowLeft
                    size={24}
                    className='back-icon'
                    onClick={() => navigate(-1)}
                />
                <h2>Edit Profile</h2>
            </div>

            <form className='edit-form' onSubmit={handleSubmit}>
                <div className='form-row'>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input
                            type='text'
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Username</label>
                        <input
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <button type='submit' className='save-btn'>
                    Save
                </button>
            </form>
        </div>
    )
}

export default EditProfile;