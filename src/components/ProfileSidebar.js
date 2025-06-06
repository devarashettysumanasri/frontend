import React from 'react';
import './ProfileSidebar.css';
import { BsBookmarkFill } from 'react-icons/bs';

// Replace with actual user data from props or context later
const profilePicUrl = 'https://i.pravatar.cc/150?u=a042581f4e29026704d';
const bannerUrl = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070';

const ProfileSidebar = () => {
    return (
        <div className="profile-sidebar-card">
            <div className="profile-banner">
                <img src={bannerUrl} alt="Banner" className="banner-img" />
                <img src={profilePicUrl} alt="Profile" className="profile-pic" />
            </div>
            <div className="profile-info">
                <h3 className="profile-name">Alex Johnson</h3>
                <p className="profile-title">Event Coordinator | Tech Enthusiast</p>
            </div>
            <div className="profile-stats">
                <div className="stat-item">
                    <span>Profile Views</span>
                    <span className="stat-value">128</span>
                </div>
                <div className="stat-item">
                    <span>Post Impressions</span>
                    <span className="stat-value">1,450</span>
                </div>
            </div>
            <div className="profile-items">
                <BsBookmarkFill className="bookmark-icon" />
                <span>My Items</span>
            </div>
        </div>
    );
};

export default ProfileSidebar;