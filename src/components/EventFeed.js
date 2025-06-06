import React from 'react';
import EventPost from './EventPost';
import './EventFeed.css';

// Mock data - in a real app, this would come from an API
const mockPosts = [
    {
        id: 1,
        author: { name: 'Tech Conference 2024', pic: 'https://i.pravatar.cc/150?u=techconf' },
        timestamp: '2h ago',
        content: 'Announcing our keynote speaker for this year\'s conference! Get ready for an inspiring session on the future of AI. Tickets are selling fast!',
        imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070',
    },
    {
        id: 2,
        author: { name: 'MusicFest', pic: 'https://i.pravatar.cc/150?u=musicfest' },
        timestamp: '1d ago',
        content: 'The full lineup is here! Check out all the amazing artists joining us for a weekend of unforgettable music. Who are you most excited to see?',
        imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974',
    },
];

const EventFeed = () => {
    return (
        <div className="event-feed">
            {mockPosts.map(post => (
                <EventPost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default EventFeed;
