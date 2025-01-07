import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('http://localhost:6060/register', { email, password });
            setMessage(response.data.message);

        
            if (response.data.success || response.data.message === 'User already exists') {
                setTimeout(() => navigate('/login'), 2000); 
            }
        } catch (err) {
            setMessage(err.response?.data?.message || 'Server error occurred');
        }
    };

    return (
        <div className='l'>
        <div className='log'>
            <h5>Register</h5>
            {message && <p>{message}</p>}
            <form onSubmit={handleRegister}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit">Register</button>
                <button
                    type="button"
                    onClick={() => navigate('/login')}
                    style={{ marginLeft: '10px' }}
                >
                    Already Registered? Login
                </button>
            </form>
        </div></div>

    );
};

export default Register;
