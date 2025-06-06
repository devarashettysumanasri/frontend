import React from 'react';
import './EventPost.css';
import { BiLike, BiCommentDetail, BiShare } from 'react-icons/bi';

const EventPost = ({ post }) => {
    return (
        <div className="event-post-card">
            <div className="post-header">
                <img src={post.author.pic} alt={post.author.name} className="post-author-pic" />
                <div className="post-author-info">
                    <span className="post-author-name">{post.author.name}</span>
                    <span className="post-timestamp">{post.timestamp}</span>
                </div>
            </div>
            <p className="post-content">{post.content}</p>
            {post.imageUrl && <img src={post.imageUrl} alt="Event" className="post-image" />}
            <div className="post-actions">
                <button className="action-button"><BiLike /> Like</button>
                <button className="action-button"><BiCommentDetail /> Comment</button>
                <button className="action-button"><BiShare /> Share</button>
            </div>
        </div>
    );
};

export default EventPost;