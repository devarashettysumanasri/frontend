import React from 'react';
import EventHubHeader from '../components/EventHubHeader';
import ProfileSidebar from '../components/ProfileSidebar';
import EventFeed from '../components/EventFeed';
import NewsSidebar from '../components/NewsSidebar';
import './HomePage.css'; // Main layout styles here

const HomePage = () => {
    return (
        <div className="home-page-container">
            <EventHubHeader />
            <main className="home-layout">
                <ProfileSidebar />
                <EventFeed />
                <NewsSidebar />
            </main>
        </div>
    );
};

export default HomePage;