import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('https://bookmyshow-4mei.onrender.com/login', { email, password });
            const { success, message, token } = response.data;

            if (success) {
                localStorage.setItem('authToken', token);
                // Redirect to previous page or dashboard
                const from = location.state?.from || '/';
                navigate(from);
            } else {
                setError(message);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Server error occurred');
        }
    };

    return (
        <div className='l'>
        <div className='log'>
            <h5>Login</h5>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
};

export default Login;
