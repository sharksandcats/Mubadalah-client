import { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Login.css';
import RightPanel from '../Components/RightPanel';


const Login = ({ onLogin }) =>{
    
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        try{
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);
            const result = res.data

            if(result.user){
                console.log("Logged in", result.user);
                onLogin(result.user);
            }else{
                alert(result.message || "Login failed");
            }
        }catch(err){
            alert(`Login failed. Please check your credentials ${err}`)
        }
    }

    return(
        <div className='login-container'>
            <div className='login-left'>
                <h1 className='welcome-text'> Welcome Back! </h1>
                <p className='subtitle'>Sign in to get back to business</p>

                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Username</label>
                        <input
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            placeholder='Enter your username'
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label> Password </label>
                        <div className='password-wrapper'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
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

                    <button type='submit' className='login-btn'>
                        Sign In
                    </button>

                    <p className="signup-link">
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </p>

                </form>
            </div>

            <RightPanel />
            
        </div>
    )
}

export default Login;