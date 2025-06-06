import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgotPasswordPage.css'; 

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); // To show feedback to the user
    const [isLoading, setIsLoading] = useState(false); // To disable the button during request
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            // --- This is the new part: The API Call ---
            // Replace 'https://api.yourapp.com' with your actual backend URL
            const response = await fetch('https://api.yourapp.com/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                // If the server returns an error (e.g., user not found)
                throw new Error(data.message || 'Something went wrong');
            }

            // Show a success message from the server
            setMessage(data.message);
            // Optionally, redirect after a few seconds
            setTimeout(() => navigate('/'), 5000);

        } catch (error) {
            // Show any error messages to the user
            setMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="forgot-password-page">
            <div className="forgot-password-container">
                <form onSubmit={handleSubmit} className="forgot-password-form">
                    <h2>Forgot Your Password?</h2>
                    <p className="subtitle">Enter your email and we'll send you a reset link.</p>
                    
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            disabled={isLoading}
                        />
                    </div>
                    
                    {/* Disable button while loading */}
                    <button type="submit" className="submit-button" disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send Reset Link'}
                    </button>

                    {/* Display feedback message */}
                    {message && <p className="feedback-message">{message}</p>}
                    
                    <div className="extra-links">
                        <Link to="/">Back to Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;