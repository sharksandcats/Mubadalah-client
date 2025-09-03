import { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import '../css/Login.css';
import RightPanel from '../Components/RightPanel';


const Login = ({ onLogin }) =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const login = async (e) =>{
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password}),
        });
        const data = await res.json();
        if(res.ok){
            onLogin(data.user);
            navigate("/");
        }else alert(data.message);
    }

    return(
        <div className='login-container'>
            <div className='login-left'>
                <h1 className='welcome-text'> Welcome Back! </h1>
                <p className='subtitle'>Sign in to get back to business</p>

                <form className='login-form' onSubmit={login}>
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