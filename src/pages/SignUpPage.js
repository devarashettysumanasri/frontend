import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpPage.css'; // We'll update this file

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // State to track password validation criteria (logic is the same)
    const [passwordValidation, setPasswordValidation] = useState({
        minLength: false,
        hasUpper: false,
        hasLower: false,
        hasNumber: false,
        hasSpecial: false,
    });

    const isPasswordValid = Object.values(passwordValidation).every(Boolean);

    useEffect(() => {
        setPasswordValidation({
            minLength: password.length >= 8,
            hasUpper: /[A-Z]/.test(password),
            hasLower: /[a-z]/.test(password),
            hasNumber: /[0-9]/.test(password),
            hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        });
    }, [password]);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isPasswordValid) {
            alert('Please ensure your password meets all the requirements.');
            return;
        }
        // --- TODO: Implement your actual sign-up logic here ---
        console.log('Creating account for:', { name, email });
        alert('Account created successfully! Please log in.');
        navigate('/');
    };
    
    // An array to define the criteria for easier rendering
    const criteria = [
        { name: 'minLength', text: '8+ Characters' },
        { name: 'hasLower', text: 'a-z' },
        { name: 'hasUpper', text: 'A-Z' },
        { name: 'hasNumber', text: '0-9' },
        { name: 'hasSpecial', text: '!@#$' },
    ];

    return (
        <div className="signup-page">
            <div className="signup-container">
                <form onSubmit={handleSubmit} className="signup-form">
                    <h2>Create an Account</h2>
                    <p className="subtitle">Join us and start your journey!</p>
                    
                    <div className="input-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={handlePasswordChange} 
                            required 
                        />
                    </div>
                    
                    {/* --- NEW Password Criteria Tags UI --- */}
                    <div className="password-criteria">
                        {criteria.map((criterion) => (
                            <div 
                                key={criterion.name} 
                                className={`criterion ${passwordValidation[criterion.name] ? 'valid' : 'invalid'}`}
                            >
                                {passwordValidation[criterion.name] ? '✓' : '✗'} {criterion.text}
                            </div>
                        ))}
                    </div>
                    
                    <button type="submit" className="signup-button" disabled={!isPasswordValid}>
                        Sign Up
                    </button>
                    
                    <div className="extra-links">
                        <Link to="/">Already have an account? Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;