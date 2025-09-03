import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';

import '../css/EditProfile.css';
import Sidebar from '../Components/Sidebar';

const EditProfile = ({ setUser }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // get user object from state
    const user = location.state?.user;

    // initialize form fields
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // populate form fields when user is available
    useEffect(() => {
        if (user) {
            setName(user.name || '');
            setUsername(user.username || '');
            setEmail(user.email || '');
            setPassword(user.password || '');
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return;

        try {
            const res = await axios.put(
                `http://localhost:5000/api/users/${user.user_id}`,
                { name, username, email, password }
            );
            // update user in parent state
            setUser(res.data);
            navigate(-1); // go back to profile
        } catch (err) {
            console.error('Error updating profile:', err);
        }
    };

    return (
        <div className='edit-profile-container'>
            <Sidebar/>
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Username</label>
                        <input
                            type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type='submit' className='save-btn'>Save</button>
            </form>
        </div>
    );
};

export default EditProfile;
