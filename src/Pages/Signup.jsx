import { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { Link } from 'react-router-dom';

import '../css/Login.css';

const Signup = () =>{
    
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
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
        console.log("Signup data: ", formData);
    }

    return(
        <div className='login-container'>
            <div className='login-left'>
                <h1 className='welcome-text'> Sign Up </h1>
                <p className='subtitle'>Join Mubadalah community today!</p>

                <form className='login-form' onSubmit={handleSubmit}>

                    <div className='form-group'>
                        <label>Name</label>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Enter your name'
                            required
                        />
                    </div>

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
                        <label>Email</label>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
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
                        Sign Up
                    </button>

                    <p className="signup-link">
                        Already have an account? <Link to="/login"> Login </Link>
                    </p>

                </form>
            </div>

            <div className='login-right'>
                <h1> Mubadalah </h1>
            </div>
        </div>
    )
}

export default Signup;