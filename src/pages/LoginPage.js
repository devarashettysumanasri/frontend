import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // --- TODO: Implement your actual login API call here ---
        console.log('Login attempt with:', { email, password });

        // On successful login, navigate to the home page
        alert('Login successful! Redirecting to homepage...');
        navigate('/home'); 
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2>Welcome Back!</h2>
                    <p className="subtitle">Please enter your details to sign in.</p>
                    
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g., name@example.com"
                            required
                        />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    
                    <button type="submit" className="login-button">Sign In</button>
                    
                    <div className="extra-links">
                        {/* Use Link component for internal navigation */}
                        <Link to="/forgot-password">Forgot Password?</Link>
                        <span> | </span>
                        <Link to="/signup">Don't have an account? Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;