import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EventHubHeader.css';

// Import icons from react-icons
import { BiSearch, BiChevronDown } from 'react-icons/bi';

// Import the custom logo
import logo from '../assets/bms-logo.svg';

const EventHubHeader = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <header className="bms-header">
            {/* Top bar with search, location, and sign in */}
            <div className="header-top-bar">
                <div className="header-content">
                    <div className="header-left">
                        <Link to="/home" className="logo-link">
                            <img src={logo} alt="EventHub Logo" className="logo-img" />
                            <span className="logo-text">EventHub</span>
                        </Link>
                        <div className="search-container">
                            <BiSearch className="search-icon" />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search for Events, Plays, Sports and Activities"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="header-right">
                        <button className="location-selector">
                            <span>Mumbai</span>
                            <BiChevronDown />
                        </button>
                        <button className="signin-button">Sign In</button>
                    </div>
                </div>
            </div>

            {/* Bottom navigation bar */}
            <div className="header-nav-bar">
                <div className="nav-content">
                    <nav className="nav-left">
                        <Link to="/intra-events" className="nav-link">Intra Events</Link>
                        <Link to="/inter-events" className="nav-link">Inter Events</Link>
                        <Link to="/wishlist" className="nav-link">Wishlist</Link>
                    </nav>
                    <nav className="nav-right">
                        <Link to="/list-your-show" className="nav-link secondary">ListYourShow</Link>
                        <Link to="/corporates" className="nav-link secondary">Corporates</Link>
                        <Link to="/offers" className="nav-link secondary">Offers</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default EventHubHeader;