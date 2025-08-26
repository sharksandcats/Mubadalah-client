import { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { Link } from 'react-router-dom';

import '../css/Login.css';

const Login = () =>{
    
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

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Login data: ", formData);
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

            <div className='login-right'>
                <h1> Mubadalah </h1>
            </div>
        </div>
    )
}

export default Login