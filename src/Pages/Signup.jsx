import { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../css/Signup.css';
import RightPanel from '../Components/RightPanel';

const Signup = ({onLogin}) =>{
    
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const BASE_URL = import.meta.env.VITE_SERVER_URL;

    const signup = async (e) =>{
        e.preventDefault();

        try{
            const newUser = {name, username, email, password};
            const res = await axios.post(`${BASE_URL}/api/auth/signup`, newUser);

            if(res.data){
                onLogin(res.data);
                navigate("/");
            }else{
                alert(res.data.message);
                }
        }catch(err){
            alert("Signup failed: "+ err.message);
        }
    }

    return(
        <div className='signup-container'>
            <div className='signup-left'>
                <h1 className='welcome-text'> Sign Up </h1>
                <p className='subtitle'>Join Mubadalah community today!</p>

                <form className='signup-form' onSubmit={signup}>

                    <div className='form-group'>
                        <label>Name</label>
                        <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter your name'
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label>Username</label>
                        <input
                            type='text'
                            name='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Enter your username'
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='email@example.com'
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label> Password </label>
                        <div className='password-wrapper'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter your password'
                                required
                            />
                            <span
                                className='toggle-password'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <Eye size={20}/> : <EyeClosed size={20}/>}
                            </span>
                        </div>
                    </div>

                    <button type='submit' className='signup-btn'>
                        Sign Up
                    </button>

                    <p className="signup-link">
                        Already have an account? <Link to="/login"> Login </Link>
                    </p>

                </form>
            </div>

            <RightPanel />
        </div>
    )
}

export default Signup;